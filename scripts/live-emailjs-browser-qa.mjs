import {chromium} from "playwright";
const browser = await chromium.launch({headless:true});
const page = await browser.newPage();
let responseStatus = null;
let responseBody = "";
let requestCount = 0;
const networkLog=[];
page.on("request",request=>{if(request.url().includes("emailjs.com"))networkLog.push("REQUEST "+request.method()+" "+request.url())});
page.on("requestfailed",request=>{if(request.url().includes("emailjs.com"))networkLog.push("FAILED "+request.method()+" "+String(request.failure()?.errorText))});
page.on("response",response=>{if(response.url().includes("emailjs.com"))networkLog.push("RESPONSE "+response.request().method()+" "+response.status())});
page.on("console",m=>{if(m.type()==="error")networkLog.push("CONSOLE ERROR "+m.text().slice(0,300))});
page.on("pageerror",err=>networkLog.push("PAGE ERROR "+err.message.slice(0,300)));
page.on("response", async response => {
 if(response.url().includes("api.emailjs.com/api/v1.0/email/send") && response.request().method()==="POST"){
   responseStatus=response.status();
   responseBody=(await response.text().catch(()=>"")).slice(0,300);
   requestCount++;
 }
});
try {
 const navigation=await page.goto("http://127.0.0.1:4173/pitotshield/",{waitUntil:"networkidle"});
 if(navigation?.status()!==200)throw Error("Preview homepage not available");
 const btn=page.getByRole("button",{name:"Send Inquiry"});
 await btn.waitFor({timeout:12000});
 await page.getByRole("textbox",{name:"Your name"}).fill("DeGroff Website QA");
 await page.getByRole("textbox",{name:"Work email"}).fill("jrussell@degroffaviation.com");
 await page.getByRole("textbox",{name:"Company"}).fill("DeGroff Aviation Technologies - QA Test");
 await page.getByRole("textbox",{name:"Aircraft / fleet"}).fill("TEST - no aircraft");
 await page.getByRole("textbox",{name:"Additional details"}).fill("DEGROFF-BROWSER-QA-20261118: one test inquiry, not a customer lead. Please disregard.");
 await btn.click();
 await Promise.race([
  page.getByRole("status").waitFor({timeout:18000}),
  page.getByRole("alert").waitFor({timeout:18000})
 ]);
 const status=await page.getByRole("status").count()>0 ? await page.getByRole("status").innerText() : "";
 const alert=await page.getByRole("alert").count()>0 ? await page.getByRole("alert").innerText() : "";
 console.log(JSON.stringify({test:"live-browser-emailjs",requestCount,responseStatus,responseBody,status,alert,networkLog}));
 if(responseStatus!==200 || !status.includes("submitted successfully"))process.exitCode=1;
} catch (error) {
 console.error("Live browser test failed:",String(error),JSON.stringify({requestCount,responseStatus,responseBody,networkLog}));
 process.exitCode=1;
} finally {await browser.close()}
