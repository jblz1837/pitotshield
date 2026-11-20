import AutoHideHeader from "./AutoHideHeader";
import LeadForm from "./LeadForm";
import TechnicalResources from "./TechnicalResources";
import VideoGallery from "./VideoGallery";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const photo = `${base}/assets/img_1438-scaled.jpg`;
const values = [
  { number: "01", label: "Aviation experience", title: "Designed by pilots.", text: "DeGroff Aviation Technologies™ has developed aircraft protection products since the 1980s, with a practical understanding of the ground-operations environment." },
  { number: "02", label: "Purpose-built technology", title: "A different approach to protection.", text: "A thermally activated self-release design offers an additional safeguard when compatible pitot heat is applied." },
  { number: "03", label: "Operational focus", title: "Built for the teams on the ground.", text: "Developed for aircraft production, maintenance, and operations, where protecting flight-critical systems matters." },
];
const applications = [
  { number: "01", title: "Aircraft manufacturing", subtitle: "Production & completion", text: "A practical additional layer of pitot protection during assembly, completion, and delivery." },
  { number: "02", title: "Maintenance, repair & overhaul", subtitle: "MRO facilities", text: "Support safer ground practices and help minimize burned covers, probe damage, and related interruptions." },
  { number: "03", title: "Commercial aviation", subtitle: "Airlines & engineering", text: "Engineered around the realities of operational checks, maintenance teams, and flight-critical air data systems." },
  { number: "04", title: "Business aviation", subtitle: "Aircraft operators", text: "A modern pitot-cover solution for compatible aircraft and maintenance environments." },
];
export function PitotShieldsHome() {
  return <div className="min-h-screen bg-[#f4f5f5] text-[#102b3e]">
    <AutoHideHeader />
    <main>
      <section className="relative isolate overflow-hidden bg-[#071b2b] text-white" aria-labelledby="home-title">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#1b5473_0%,#102b40_38%,#071b2b_80%)]" />
          <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:"linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",backgroundSize:"80px 80px"}} />
          <svg className="absolute -right-28 top-7 h-auto w-[600px] max-w-none text-white opacity-[0.09] md:right-0 lg:right-[8%] lg:w-[790px]" viewBox="0 0 720 480" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M360 24 C373 45 380 86 381 140 L388 215 L640 312 L640 339 L390 291 L382 407 L458 438 L458 454 L360 443 L262 454 L262 438 L338 407 L330 291 L80 339 L80 312 L332 215 L339 140 C340 86 347 45 360 24Z"/><circle cx="360" cy="252" r="206" strokeDasharray="6 15"/><path d="M360 24V443M130 320H590" strokeDasharray="5 15"/></svg>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071b2b] to-transparent"/>
        </div>
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-16 sm:px-10 sm:pt-20 lg:min-h-[700px] lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:px-16 lg:pb-24 lg:pt-24">
          <div className="relative z-10">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.26em] text-[#e4bd72] sm:text-sm"><span className="inline-block h-px w-9 bg-[#e4bd72]"/> Aviation safety innovation</p>
            <h1 id="home-title" className="max-w-[760px] text-[clamp(3.05rem,6.3vw,6rem)] font-extrabold leading-[.99] tracking-[-.055em]">Stop Covered<br/>Pitot Events <span className="text-[#e4bd72]">(COPEs).</span></h1>
            <h2 className="mt-7 text-[clamp(1.35rem,2.15vw,2.05rem)] font-bold tracking-tight text-[#f18478]">PitotShield V2™ SmartCovers™</h2>
            <p className="mt-6 max-w-[570px] text-lg leading-8 text-white/75 sm:text-xl">A smarter safeguard for a flight-critical system. Thermally activated pitot-cover technology designed for the aircraft and the people who protect them.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#e4bd72] px-7 py-4 text-sm font-black uppercase tracking-[.09em] text-[#102b3e] transition hover:bg-[#f1d49a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Request a demonstration <span aria-hidden="true">↗</span></a>
              <a href="#demo" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Watch the technology <span aria-hidden="true">→</span></a>
            </div>
            <p className="mt-8 max-w-[600px] text-xs leading-5 text-white/55">Pitot covers must be removed under approved aircraft procedures before operation. Auto-release is an additional safeguard, not a substitute for required removal checks.</p>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[440px] lg:ml-auto">
            <div className="absolute -left-7 -top-8 h-36 w-36 border-l border-t border-[#e4bd72]/60" aria-hidden="true"/>
            <figure className="relative overflow-hidden border border-white/20 bg-[#102b40] shadow-[0_32px_90px_rgba(0,0,0,.32)]">
              <img src={photo} alt="Two white PitotShield V2 SmartCovers on aircraft pitot probes with REMOVE BEFORE FLIGHT streamers" width={1536} height={2048} fetchPriority="high" className="block max-h-[500px] w-full object-contain"/>
              <figcaption className="border-t border-white/15 bg-[#092235] px-5 py-4 text-xs font-semibold uppercase tracking-[.1em] text-white/75">PitotShield V2™ SmartCovers™ • Installed view</figcaption>
            </figure>
            <div className="absolute -bottom-7 -right-4 flex h-28 w-28 flex-col items-center justify-center border border-[#e4bd72]/65 bg-[#0a2538] text-center shadow-xl sm:h-32 sm:w-32"><strong className="text-3xl font-black text-[#e4bd72]">2–5</strong><span className="mt-1 text-[10px] font-bold uppercase leading-4 tracking-[.08em] text-white/85">minutes*<br/>auto-release</span></div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[#051725]/65"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-5 text-[11px] font-bold uppercase tracking-[.18em] text-white/65 sm:px-10 lg:px-16"><span>Designed by Pilots for Pilots</span><span>Production · Maintenance · Operations</span><span>American aviation innovation</span></div></div>
      </section>

      <section id="how" className="bg-white px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid items-end gap-6 lg:grid-cols-[.95fr_1.05fr]">
            <div><p className="text-xs font-black uppercase tracking-[.23em] text-[#b48539]">Who we are · What sets us apart</p><h2 className="mt-5 max-w-[670px] text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-.045em]">A new standard in <span className="text-[#26718f]">pitot protection.</span></h2></div>
            <p className="max-w-[590px] text-lg leading-8 text-slate-600">DeGroff Aviation Technologies™ brings decades of aircraft protection experience to a simple but important challenge: reducing the risks associated with covers left on heated pitot probes.</p>
          </div>
          <div className="mt-14 grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-3">
            {values.map(v=><article key={v.number} className="bg-white px-7 py-10 sm:px-9 lg:py-14"><p className="text-5xl font-light tracking-tight text-[#b8cdd5]">{v.number}<span className="ml-1 text-[#d3b06f]">.</span></p><p className="mt-11 text-xs font-extrabold uppercase tracking-[.16em] text-[#b48539]">{v.label}</p><h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight">{v.title}</h3><p className="mt-4 text-base leading-7 text-slate-600">{v.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0a2638] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[400px] bg-[#14364a] lg:min-h-[570px]"><img src={photo} alt="Installed white PitotShield V2 SmartCovers on aircraft probes" width={1536} height={2048} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_38%] opacity-90"/><div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a2638]/20"/></div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[.22em] text-[#e4bd72]">Technology with purpose</p>
            <h2 className="mt-5 max-w-[560px] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[1.08] tracking-[-.045em]">Protection when it matters. <span className="text-[#e4bd72]">Release when it counts.</span></h2>
            <p className="mt-7 max-w-[560px] text-lg leading-8 text-white/75">PitotShield V2™ SmartCovers™ are designed to disengage approximately 2–5 minutes after compatible pitot heat is activated, under specified conditions. This provides an added layer of protection during aircraft ground operations.</p>
            <div className="mt-9 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2"><div><strong className="block text-3xl font-extrabold text-white">2–5 min</strong><span className="mt-2 block text-sm text-white/65">Typical designed release window*</span></div><div><strong className="block text-3xl font-extrabold text-white">No metal</strong><span className="mt-2 block text-sm text-white/65">Purpose-built polymer cover body</span></div></div>
            <a href="#demo" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#e4bd72] pb-2 text-sm font-extrabold uppercase tracking-[.1em] text-[#e4bd72] hover:text-white">See real aircraft demonstrations <span aria-hidden="true">↗</span></a>
            <p className="mt-6 text-xs leading-5 text-white/55">*Release timing varies with compatible aircraft, pitot heating, and operating conditions. Always follow approved removal procedures.</p>
          </div>
        </div>
      </section>

      <section id="applications" className="bg-[#f4f5f5] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-xs font-black uppercase tracking-[.23em] text-[#b48539]">Where it works</p><h2 className="mt-5 text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-.045em]">Solutions for the <br/><span className="text-[#26718f]">aviation industry.</span></h2></div><p className="max-w-[470px] text-lg leading-8 text-slate-600">One important mission across diverse ground environments: protect the air data system, reduce unnecessary disruptions, and support the people who keep aircraft moving.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">{applications.map(a=><article key={a.title} className="group relative min-h-[260px] overflow-hidden border border-[#d9e0e3] bg-white p-8 transition hover:border-[#87a9ba] hover:shadow-xl sm:p-10"><div className="flex items-center justify-between"><span className="text-xs font-black tracking-[.2em] text-[#a47433]">{a.subtitle}</span><span className="text-xl font-light text-[#9cb2bc]">{a.number} / 04</span></div><h3 className="mt-10 max-w-[440px] text-2xl font-extrabold tracking-tight sm:text-3xl">{a.title}</h3><p className="mt-4 max-w-[460px] leading-7 text-slate-600">{a.text}</p><div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-0 bg-[#d0a45c] transition-all duration-300 group-hover:w-full"/></article>)}</div>
        </div>
      </section>

      <section id="roi" className="bg-white px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-black uppercase tracking-[.23em] text-[#b48539]">The business case</p><div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-[740px] text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[1.07] tracking-[-.045em]">An added safeguard. <span className="text-[#26718f]">A measurable opportunity.</span></h2><p className="max-w-[410px] text-lg leading-8 text-slate-600">Covered pitot events can impact maintenance, schedules, and operating costs. Explore the illustrative economics.</p></div><div className="mt-12 grid gap-px border border-[#dbe3e7] bg-[#dbe3e7] md:grid-cols-3">{[["$150K–$540K","Illustrative annual loss range"],["1,400%","Illustrative return on investment"],["30 days","Illustrative payback"]].map(([value,label])=><div key={value} className="bg-[#f6f8f8] px-7 py-11 sm:px-9"><strong className="block text-[clamp(2.3rem,3.7vw,3.6rem)] font-extrabold tracking-tight text-[#10354a]">{value}</strong><span className="mt-3 block text-sm font-bold uppercase tracking-[.1em] text-[#557080]">{label}</span></div>)}</div><p className="mt-6 max-w-5xl text-sm leading-6 text-slate-500">Figures reflect a DeGroff-provided illustrative model and are not independently verified. Savings depend on the operator, incident frequency, cost assumptions, and deployment. Confirm assumptions before relying on projected results.</p></div></section>

      <section id="demo" className="bg-[#edf2f4] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1300px]"><VideoGallery /></div></section>
      <section id="resources" className="bg-white px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1300px]"><TechnicalResources /></div></section>

      <section id="contact" className="relative overflow-hidden bg-[#071d2d] px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28"><div aria-hidden="true" className="pointer-events-none absolute right-[-120px] top-[-160px] h-[530px] w-[530px] rounded-full border border-white/10"/><div className="relative mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.23em] text-[#e4bd72]">Let's talk aviation</p><h2 className="mt-5 text-[clamp(2.65rem,5vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-.045em]">See the difference in your operation.</h2><p className="mt-7 max-w-[470px] text-lg leading-8 text-white/75">Request a live demonstration, ask about compatibility, or discuss an evaluation of PitotShield V2™ SmartCovers™ with DeGroff Aviation Technologies™.</p><a href="mailto:info@degroffaviation.com" className="mt-8 inline-block border-b border-[#e4bd72] pb-2 text-sm font-semibold text-[#e4bd72]">info@degroffaviation.com ↗</a></div><div className="border border-white/15 bg-white/[0.07] p-6 backdrop-blur sm:p-9"><LeadForm /></div></div></section>
    </main>
    <footer className="bg-[#051521] px-5 py-8 text-center text-xs font-semibold uppercase tracking-[.12em] text-white/60">© DeGroff Aviation Technologies™ · Designed by Pilots for Pilots</footer>
  </div>;
}
