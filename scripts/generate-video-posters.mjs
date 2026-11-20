import { mkdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const videos = [
  ["Boeing Demo Avelo Airlines - Q1 2024.mp4", "featured-product.jpg"],
  ["psv2-demo.mp4", "auto-release.jpg"],
  ["PitotShieldV2_v.mp4", "install-removal.jpg"],
  ["PSV2 Universal Fit Demo.mp4", "universal-fit.jpg"],
  ["PSV2 Return to Service Procedure Training Video.mp4", "return-to-service.jpg"],
  ["PitotShield v2 Aircraft Test Videos.mp4", "aircraft-tests.jpg"],
  ["PSV2 w_ Retaining Bridle Delta TOC Port.mp4", "retaining-bridle.jpg"],
  ["pitotshield_v2_realfootage_teaser_captioned_360 (1).mp4", "product-teaser.jpg"],
  ["IMG 1516   1080p.mp4", "additional-footage.jpg"]
];
const outputDir=join("public","assets","posters");
mkdirSync(outputDir,{recursive:true});
const probe=(file)=> {
 const p=spawnSync("ffprobe",["-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1",file],{encoding:"utf8"});
 if(p.status!==0) throw new Error("Unable to inspect video "+file+": "+(p.stderr||"ffprobe not found"));
 const duration=Number(p.stdout.trim());
 if(!Number.isFinite(duration)||duration<=0) throw new Error("Invalid video duration: "+file);
 return duration;
};
for(const [filename,postername] of videos){
 const input=join("public","assets",filename);
 if(!existsSync(input)) throw new Error("Missing source video "+input);
 const target=join(outputDir,postername);
 const duration=probe(input);
 // Capture a representative in-video frame, not the black first frame or end title.
 const seconds=Math.min(Math.max(duration*0.2,0.2),14,duration*0.75);
 const args=["-hide_banner","-loglevel","error","-nostdin","-y","-ss",seconds.toFixed(3),"-i",input,"-map","0:v:0","-frames:v","1","-vf","scale=960:540:force_original_aspect_ratio=decrease,pad=960:540:(ow-iw)/2:(oh-ih)/2","-q:v","3",target];
 const f=spawnSync("ffmpeg",args,{encoding:"utf8"});
 if(f.status!==0||!existsSync(target)||statSync(target).size<1000){
   throw new Error("Could not generate preview screenshot for "+filename+": "+(f.stderr||"ffmpeg failed"));
 }
 console.log("POSTER",postername,"from",filename,"at",seconds.toFixed(2)+"s");
}
