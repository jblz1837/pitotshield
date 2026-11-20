const applications = [
  { title: "Aircraft OEMs", description: "Pitot protection for production, completion, and delivery operations." },
  { title: "MRO Facilities", description: "Help avoid burned pitot tube covers, damaged probes, and costly maintenance interruptions." },
  { title: "Airlines & Engineering", description: "A practical additional safeguard against inadvertent covered-pitot events." },
  { title: "Business Aviation", description: "Support compatible aircraft ground and maintenance operations." },
];
import LeadForm from "./LeadForm";
import TechnicalResources from "./TechnicalResources";
import VideoGallery from "./VideoGallery";
import AutoHideHeader from "./AutoHideHeader";
export function PitotShieldsHome() {
  return <div className="blueprint-site min-h-screen bg-[#061d32] text-white">
    <AutoHideHeader />
    <main>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071a2a] via-[#103b59] to-[#071a2a] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.11]" style={{backgroundImage:"linear-gradient(#d6eafb 1px,transparent 1px),linear-gradient(90deg,#d6eafb 1px,transparent 1px)",backgroundSize:"44px 44px"}} />
          <div className="absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full border border-cyan-200/15" />
          <div className="absolute -right-24 -top-24 h-[540px] w-[540px] rounded-full border border-cyan-200/10" />
          <div className="absolute -bottom-32 -left-40 h-[480px] w-[480px] rounded-full border border-cyan-200/10" />
          <svg className="absolute -right-12 top-2 w-[570px] max-w-none rotate-[-12deg] text-cyan-100 opacity-[0.09] lg:right-[12%]" viewBox="0 0 720 480" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M360 24 C373 45 380 86 381 140 L388 215 L640 312 L640 339 L390 291 L382 407 L458 438 L458 454 L360 443 L262 454 L262 438 L338 407 L330 291 L80 339 L80 312 L332 215 L339 140 C340 86 347 45 360 24Z" />
            <path d="M360 28 V442 M250 345 H472 M338 140 H382 M292 300 L430 300" strokeDasharray="8 9" />
            <circle cx="360" cy="252" r="195" strokeDasharray="9 13" opacity=".65" />
            <circle cx="360" cy="252" r="240" strokeDasharray="3 14" opacity=".45" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2a]/70 via-transparent to-[#071a2a]/20" />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-9 px-5 py-12 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-10 lg:py-16 xl:gap-14">
          <div className="mx-auto w-full min-w-0 max-w-[620px] lg:mx-0">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] sm:mb-4 sm:text-sm text-amber-300">Fail-Safe by Design</p>
            <h1 className="text-[clamp(2.15rem,4.2vw,3.7rem)] font-black leading-[1.1] tracking-tight">Stop Covered Pitot Events <span className="text-amber-300">(COPEs).</span></h1>
            <h2 className="mt-4 text-[clamp(1.3rem,2.25vw,1.85rem)] font-extrabold leading-tight tracking-tight text-red-400">PitotShield V2™ SmartCovers™</h2>
            <p className="mt-4 max-w-[55ch] text-base leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">Protect critical pitot probes and help avoid costly maintenance interruptions with heat-activated release technology for aircraft production, maintenance, and operations.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3"><a className="rounded-lg bg-amber-300 px-5 py-3.5 text-center text-sm font-bold sm:px-6 sm:py-4 sm:text-base text-slate-900 shadow-lg shadow-amber-400/15 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200" href="#contact">Request a Live Demo</a><a className="rounded-lg border border-white/50 bg-white/10 px-5 py-3.5 text-center text-sm font-bold sm:px-6 sm:py-4 sm:text-base backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#demo">Watch Auto-Release Demo</a></div>
            <p className="mt-6 max-w-[58ch] text-xs leading-5 text-slate-300">Always follow approved aircraft procedures and remove covers before operation. Auto-release is an additional safeguard, not a substitute for required removal checks.</p>
          </div>
          <figure className="mx-auto w-full min-w-0 max-w-[262px] sm:max-w-[300px] lg:max-w-[323px] xl:max-w-[342px]">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#0c293f] shadow-[0_18px_55px_rgba(0,0,0,.28)] ring-1 ring-white/10">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/img_1438-scaled.jpg`}
                alt="Two white PitotShield V2 SmartCovers installed on aircraft pitot probes with orange REMOVE BEFORE FLIGHT streamers"
                width={1536}
                height={2048}
                fetchPriority="high"
                className="mx-auto block h-auto max-h-[309px] w-full object-contain sm:max-h-[347px] lg:max-h-[390px]"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs leading-5 text-slate-300">PitotShield V2™ SmartCovers™ installed on aircraft pitot probes</figcaption>
          </figure>
        </div>
      </section>
      <section id="how" className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-black uppercase tracking-[.2em] text-sky-800">How it works</p>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">PitotShield V2™ SmartCovers™ are designed to disengage approximately 2–5 minutes after pitot heat activation under specified operating conditions.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{[
          ["01", "Thermally activated", "Designed for a controlled self-release when compatible pitot heat is applied."],
          ["02", "Protect critical probes", "Help stop burning pitot tube covers and avoid unnecessary probe damage."],
          ["03", "Real-world aviation design", "Designed by Pilots for Pilots. Developed for production, maintenance, and operations."]
        ].map(([n,t,d])=><article key={n} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"><span className="font-bold text-sky-800">{n}</span><h3 className="mt-3 text-xl font-bold">{t}</h3><p className="mt-3 text-slate-600">{d}</p></article>)}</div>
      </section>
      <section id="applications" className="relative overflow-hidden bg-[#0c293f] py-14 text-white sm:py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-xs font-black uppercase tracking-[.2em] text-amber-300">Production • Maintenance • Operations</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">For the teams that keep aircraft flying.</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{applications.map(x=><article key={x.title} className="rounded-2xl border border-white/20 bg-white/[0.07] p-7 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/[0.12]"><h3 className="text-xl font-bold">{x.title}</h3><p className="mt-3 text-slate-200">{x.description}</p></article>)}</div></div></section>
      <section id="roi" className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-xs font-black uppercase tracking-[.2em] text-sky-800">Illustrative cost analysis</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">What could a COPE cost your operation?</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[["$150K–$540K", "Illustrative annual loss range"],["1,400%", "Illustrative ROI"],["30 days", "Illustrative payback"]].map(([n,t])=><div key={n} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"><strong className="block text-3xl text-sky-900">{n}</strong><span className="mt-3 block text-slate-600">{t}</span></div>)}</div><p className="mt-6 max-w-4xl text-sm text-slate-600">Figures from a DeGroff-provided example model, not independently verified. Actual savings depend on incident frequency, operating conditions, cost inputs, and deployment. Validate the assumptions before publication.</p></div></section>
      <section id="resources" className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-10 lg:py-20"><TechnicalResources /></section><section id="demo" className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-10 lg:py-20"><VideoGallery /></section>
      <section id="contact" className="bg-[#081d30] py-14 text-white sm:py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><h2 className="text-3xl font-black sm:text-4xl">Request a demonstration or quote</h2><p className="mt-5 max-w-3xl text-lg text-slate-200">Discuss aircraft compatibility, technical evaluations, and purchasing options with DeGroff Aviation Technologies™.</p><div className="mt-8 max-w-3xl rounded-xl border border-white/20 bg-white/10 p-7 text-slate-200"><LeadForm /></div></div></section>
    </main><footer className="bg-[#061625] px-5 py-7 text-center text-sm text-slate-300">© DeGroff Aviation Technologies™</footer>
  </div>;
}
