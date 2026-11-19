import { writeFileSync } from "node:fs";

const site = process.env.AUDIT_SITE || "https://pitotshields.com/";
const root = new URL(site);
const checks = [];
const warnings = [];
const errors = [];

function decode(s) {
  return s.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));
}
const canonical = u => u.origin + u.pathname + u.search;
async function request(url, method="HEAD") {
  const ctrl = new AbortController();
  const timeout = setTimeout(()=>ctrl.abort(),20000);
  try {
    const response = await fetch(url,{ method, redirect:"follow", headers:{"Cache-Control":"no-cache",...(method==="GET"?{"Range":"bytes=0-1023"}:{})}, signal:ctrl.signal });
    const info={status:response.status, finalUrl:response.url, contentType:response.headers.get("content-type")||""};
    await response.body?.cancel();
    return info;
  } finally { clearTimeout(timeout); }
}
async function checkLink(url, kinds) {
  let outcome;
  try {
    outcome=await request(url);
    if([403,405,501].includes(outcome.status)) outcome=await request(url,"GET");
    const ok=outcome.status>=200 && outcome.status<400;
    const result={url,kind:[...kinds].join(","),ok,...outcome};
    checks.push(result);
    if(!ok) errors.push(result);
  }catch(e){
    const result={url,kind:[...kinds].join(","),ok:false,error:String(e)};
    checks.push(result);errors.push(result);
  }
}
let html,landing;
try {
  const response=await fetch(root,{headers:{"Cache-Control":"no-cache","Pragma":"no-cache"},redirect:"follow"});
  landing={url:response.url,status:response.status,contentType:response.headers.get("content-type")};
  if(!response.ok) throw new Error("Homepage HTTP "+response.status);
  html=await response.text();
}catch(e){
  console.error("Cannot fetch homepage:",e);
  process.exit(2);
}
const refs=new Map();
const tags=html.match(/<(?:a|img|source|video|script|link)\b[^>]*>/gi)||[];
for(const tag of tags){
  const type=(tag.match(/^<(\w+)/)||[])[1]?.toLowerCase()||"unknown";
  for(const key of ["href","src","poster","srcset"]){
    const match=tag.match(new RegExp("\\b"+key+'\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\'|([^\\s>]+))',"i"));
    if(!match) continue;
    const value=decode(match[1]??match[2]??match[3]??"");
    const candidates=key==="srcset"?value.split(",").map(v=>v.trim().split(/\s+/)[0]):[value];
    for(const candidate of candidates){
      if(!candidate || /^(?:mailto:|tel:|javascript:|data:|blob:)/i.test(candidate)) continue;
      let u;
      try { u=new URL(candidate,root); }catch {continue;}
      if(u.origin!==root.origin) continue;
      if(u.hash && u.pathname===root.pathname && !candidate.replace(/^\s+/,"").split("#")[0]){
        const id=decodeURIComponent(u.hash.slice(1));
        if(id && !html.includes('id="'+id+'"') && !html.includes("id='"+id+"'")) errors.push({url:candidate,kind:"fragment",ok:false,error:"Missing target id"});
        continue;
      }
      u.hash="";
      const normalized=canonical(u);
      if(!refs.has(normalized)) refs.set(normalized,new Set());
      refs.get(normalized).add(type+":"+key);
      if(/^\/pitotshield(?:\/|$)/i.test(u.pathname)) errors.push({url:normalized,kind:"preview-path",ok:false,error:"Preview base path found on production domain"});
    }
  }
}
for (const [url,kinds] of refs) await checkLink(url,kinds);
const report={
  site:root.origin,checkedAt:new Date().toISOString(),homepage:landing,
  linksChecked:checks.length,passed:checks.filter(c=>c.ok).length,failed:errors.length,
  issues:errors,checks,warnings
};
writeFileSync("live-link-audit.json",JSON.stringify(report,null,2));
let md="# PitotShields live-site link audit\n\n";
md+="Checked: "+report.checkedAt+"\n\nHomepage: "+landing.status+" "+landing.url+"\n\n";
md+="Links checked: **"+checks.length+"**; failures (including preview paths): **"+errors.length+"**.\n\n";
md+="| Result | URL | Details |\n|---|---|---|\n";
for(const c of checks) md+="| "+(c.ok?"PASS":"FAIL")+" | "+c.url.replaceAll("|","%7C")+" | "+(c.status??c.error)+" |\n";
if(errors.some(e=>e.kind==="preview-path"))md+="\n**Deployment warning:** production HTML contains /pitotshield/ paths.\n";
writeFileSync("live-link-audit.md",md);
console.log(md);
if(errors.length) process.exitCode=1;