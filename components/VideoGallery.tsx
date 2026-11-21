const clips = [
["Featured Product Video — PitotShield V2™ SmartCovers™","Boeing Demo Avelo Airlines - Q1 2024.mp4","featured-product.jpg"],
["PitotShield V2™ Auto-Release Demonstration","psv2-demo.mp4","auto-release.jpg"],
["Install/Removal — PitotShield V2™ SmartCovers™","PitotShieldV2_v.mp4","install-removal.jpg"],
["Universal Fit Demonstration","PSV2 Universal Fit Demo.mp4","universal-fit.jpg"],
["Return-to-Service Procedure Training","PSV2 Return to Service Procedure Training Video.mp4","return-to-service.jpg"],
["Aircraft Test Demonstrations","PitotShield v2 Aircraft Test Videos.mp4","aircraft-tests.jpg"],
["Retaining Bridle Demonstration","PSV2 w_ Retaining Bridle Delta TOC Port.mp4","retaining-bridle.jpg"],
["Real-Footage Product Teaser","pitotshield_v2_realfootage_teaser_captioned_360 (1).mp4","product-teaser.jpg"],
["Additional Aircraft Footage","IMG 1516   1080p.mp4","additional-footage.jpg"]
] as const;
const media=(file:string)=>`${process.env.NEXT_PUBLIC_BASE_PATH??""}/assets/${encodeURIComponent(file)}`;
const posterSrc=(file:string)=>`${process.env.NEXT_PUBLIC_BASE_PATH??""}/assets/posters/${encodeURIComponent(file)}`;
export default function VideoGallery(){
 return <section aria-label="Product videos">
  <p className="text-lg font-black uppercase tracking-[.12em] text-sky-800 sm:text-xl">Real aircraft demonstrations</p>
  <h2 className="mt-3 text-3xl font-bold sm:text-5xl">See PitotShield V2™ SmartCovers™ in action</h2>
  <p className="mt-4 max-w-3xl text-slate-600">Original DeGroff product footage and maintenance demonstrations. Press play to load a video. Always follow the latest approved aircraft and product instructions.</p>
  <div className="mt-8 grid gap-8 lg:grid-cols-2">
   {clips.map(([title,file,poster])=><article key={file} className={file==="Boeing Demo Avelo Airlines - Q1 2024.mp4"?"overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2":"overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"}>
    <video controls playsInline preload="none" poster={posterSrc(poster)} className={file==="Boeing Demo Avelo Airlines - Q1 2024.mp4"?"aspect-video w-full bg-slate-950 object-contain":"aspect-video w-full bg-slate-950"} aria-label={title}>
     <source src={media(file)} type="video/mp4"/>
     Your browser cannot play this video. <a href={media(file)}>Download the MP4 file.</a>
    </video>
    <div className="p-5"><h3 className="text-lg font-bold">{title}</h3><a className="mt-3 inline-block text-sm font-semibold text-sky-800 underline" href={media(file)} download>Download video</a></div>
   </article>)}
  </div>
  <p className="mt-8 text-sm text-slate-600">For another on-wing demonstration, <a href="https://youtu.be/dzz0QEvzfFk" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-900 underline">watch our YouTube video</a>.</p>
 </section>;
}
