import assert from "node:assert/strict";
import {readFileSync,statSync} from "node:fs";
import {join} from "node:path";
const docs=["pitotshield-v2-catalog-05-25.pdf","pitotshield-v2-catalog.pdf","pitotshield-v2-installation-guide.pdf","pitotshield-v2-manual.pdf","pitotshield-v2-safety-compliance.pdf","pitotshield-v2-spec-sheet.pdf","psv2-wp-marketing-version-w-all-econ.pdf"];
const videos=["psv2-demo.mp4","PSV2 Universal Fit Demo.mp4","PSV2 Return to Service Procedure Training Video.mp4","PitotShield v2 Aircraft Test Videos.mp4","PSV2 w_ Retaining Bridle Delta TOC Port.mp4","pitotshield_v2_realfootage_teaser_captioned_360 (1).mp4","IMG 1516   1080p.mp4"];
const base="public";
for (const file of docs) {
 const path=join(base,"docs",file), data=readFileSync(path);
 assert.ok(data.length>=500, "PDF empty: "+file);
 assert.equal(data.subarray(0,5).toString(),"%PDF-","Bad PDF header: "+file);
 assert.ok(data.subarray(-500).toString().includes("%%EOF"),"Missing PDF trailer: "+file);
 console.log("PASS PDF",file,data.length);
}
for (const file of videos){
 const path=join(base,"assets",file),data=readFileSync(path);
 assert.ok(data.length>10_000,"MP4 too small: "+file);
 assert.equal(data.subarray(4,8).toString(),"ftyp","Invalid MP4 file header: "+file);
 console.log("PASS MP4",file,data.length);
}
const logo=join(base,"brand","degroff-logo.webp");
assert.ok(statSync(logo).size>500,"Logo missing or empty");
const html=readFileSync(join("out","index.html"),"utf8");
for(const file of docs.filter(f=>!["pitotshield-v2-installation-guide.pdf","pitotshield-v2-safety-compliance.pdf"].includes(f))) assert.ok(html.includes(encodeURIComponent(file)),"Missing PDF link in static HTML: "+file);
for(const file of ["pitotshield-v2-installation-guide.pdf","pitotshield-v2-safety-compliance.pdf"]) assert.ok(!html.includes(encodeURIComponent(file)),"Placeholder-only PDF must not be advertised: "+file);
for(const file of videos) assert.ok(html.includes(encodeURIComponent(file)),"Missing video in static HTML: "+file);
assert.ok(html.includes("degroff-logo.webp"),"Logo not referenced in HTML");
assert.ok(readFileSync(join("components","LeadForm.tsx"),"utf8").includes("mailto:"),"Unconfigured contact form fallback absent from code");
console.log("PASS all migrated local PDF links, video links and logo. EmailJS live submission requires external configuration.");
