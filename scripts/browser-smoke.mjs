import assert from "node:assert/strict";
import {chromium} from "playwright";
const base="http://127.0.0.1:4173/pitotshield/";
const browser=await chromium.launch({headless:true});
const page=await browser.newPage();
let intercepted=0;
await page.route("https://www.googletagmanager.com/**", route=>route.fulfill({status:200,contentType:"application/javascript",body:"/* mocked analytics network loader */"}));
await page.route("https://api.emailjs.com/api/v1.0/email/send",async route=>{
 const request=route.request();
 if(request.method()==="OPTIONS") { await route.fulfill({status:204,headers:{"access-control-allow-origin":"*","access-control-allow-headers":"content-type","access-control-allow-methods":"POST,OPTIONS"}});return; }
 const data=JSON.parse(request.postData()||"{}");
 assert.equal(data.service_id,"test-service");
 assert.equal(data.template_id,"test-template");
 assert.equal(data.user_id,"test-public");
 assert.equal(data.template_params.company,"Demo Flight Dept");
 intercepted++;
 await route.fulfill({status:200,contentType:"text/plain",headers:{"access-control-allow-origin":"*","access-control-allow-headers":"content-type","access-control-allow-methods":"POST,OPTIONS"},body:"OK"});
});
try{
 const resp=await page.goto(base,{waitUntil:"networkidle"});
 assert.equal(resp?.status(),200,"Homepage HTTP failure");
 assert.ok((await page.locator("h1").innerText()).includes("Stop Covered Pitot Events"));
 const logo=page.locator("header img");
 assert.ok(await logo.count(),"Header logo missing");
 const imageLoaded=await logo.evaluate(img=>img.complete && img.naturalWidth>0);
 assert.ok(imageLoaded,"Header logo did not render");
 assert.equal(await page.locator("video").count(),7,"Wrong number of videos");
 assert.equal(await page.locator('a[href$=".pdf"]').count(),5,"Only the five substantive PDF links should display");
 for (const element of await page.locator('a[href$=".pdf"]').all()){
  const url=await element.getAttribute("href");
  assert.ok(url?.startsWith("/pitotshield/docs/"),"PDF link missing preview base path: "+url);
  const response=await page.request.get(new URL(url,base).href);
  assert.equal(response.status(),200,"Broken PDF link: "+url);
 }
 const videoSrc=await page.locator("video source").first().getAttribute("src");
 assert.ok(videoSrc?.startsWith("/pitotshield/assets/"),"Video URL missing preview base path");
 const videoResponse=await page.request.get(new URL(videoSrc,base).href);
 assert.equal(videoResponse.status(),200,"Video URL not reachable");
 await page.getByRole("textbox",{name:"Your name"}).fill("Demo Tester");
 await page.getByRole("textbox",{name:"Work email"}).fill("demo@example.com");
 await page.getByRole("textbox",{name:"Company"}).fill("Demo Flight Dept");
 await page.getByRole("button",{name:"Send Inquiry"}).click();
 await page.getByRole("status").getByText("Your inquiry was submitted successfully.").waitFor({timeout:12000});
 assert.equal(intercepted,1,"One mocked EmailJS request expected");
 await page.waitForFunction(()=>window.dataLayer?.some?.(x=>x?.[0]==="event" && x?.[1]==="generate_lead"),null,{timeout:8000});
 console.log("PASS browser: logo, 7 videos, 5 PDF download links, mocked EmailJS lead and GA4 event");
}finally{await browser.close()}
