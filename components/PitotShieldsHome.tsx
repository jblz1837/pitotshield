const applications = [
  { title: "Aircraft OEMs", description: "Pitot protection for production, completion, and delivery operations." },
  { title: "MRO Facilities", description: "Help avoid burned pitot tube covers, damaged probes, and costly maintenance interruptions." },
  { title: "Airlines & Engineering", description: "A practical additional safeguard against inadvertent covered-pitot events." },
  { title: "Business Aviation", description: "Support compatible aircraft ground and maintenance operations." },
];
import LeadForm from "./LeadForm";
import TechnicalResources from "./TechnicalResources";
import VideoGallery from "./VideoGallery";
export function PitotShieldsHome() {
  return <div className="min-h-screen bg-white text-slate-900">
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#081d30]/95 text-white shadow-lg shadow-[#061625]/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-10">
        <a href="#" aria-label="DeGroff Aviation Technologies homepage" className="group inline-flex w-fit shrink-0 items-center rounded-xl border border-white/15 bg-white/[0.07] px-4 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-colors hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/degroff-logo.webp`} alt="DeGroff Aviation Technologies™ official logo" width={230} height={178} className="h-[84px] w-auto object-contain sm:h-[96px] lg:h-[108px]" />
        </a>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold tracking-wide sm:justify-end" aria-label="Main navigation">
          <a href="#how">Technology</a><a href="#applications">Applications</a><a href="#roi">ROI</a><a href="#demo">Demonstration</a><a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
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
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-10 lg:py-28">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.25em] text-amber-300">Fail-Safe by Design</p>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl xl:text-6xl">Stop Covered Pitot Events <span className="text-amber-300">(COPEs).</span></h1>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-red-400 sm:text-3xl">PitotShield V2™ SmartCovers™</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Protect critical pitot probes and help avoid costly maintenance interruptions with heat-activated release technology for aircraft production, maintenance, and operations.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a className="rounded-lg bg-amber-300 px-6 py-4 font-bold text-slate-900 shadow-lg shadow-amber-400/15 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200" href="#contact">Request a Live Demo</a><a className="rounded-lg border border-white/50 bg-white/10 px-6 py-4 font-bold backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#demo">Watch Auto-Release Demo</a></div>
            <p className="mt-10 max-w-2xl text-xs leading-5 text-slate-300">Always follow approved aircraft procedures and remove covers before operation. Auto-release is an additional safeguard, not a substitute for required removal checks.</p>
          </div>
          <figure className="mx-auto w-full max-w-[540px]">
            <div className="overflow-hidden rounded-2xl border border-white/25 bg-slate-800 shadow-[0_25px_75px_rgba(0,0,0,.4)] ring-1 ring-white/10">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/img_1438-scaled.jpg`}
                alt="Two white PitotShield V2 SmartCovers installed on aircraft pitot probes with orange REMOVE BEFORE FLIGHT streamers"
                width={1536}
                height={2048}
                fetchPriority="high"
                className="block h-auto max-h-[690px] w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-300">PitotShield V2™ SmartCovers™ installed on aircraft pitot probes</figcaption>
          </figure>
        </div>
      </section>
      <section id="how" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <p className="text-xs font-black uppercase tracking-[.2em] text-sky-800">How it works</p><h2 className="mt-3 text-4xl font-black">Small device. Big protection.</h2>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">PitotShield V2™ SmartCovers™ are designed to disengage approximately 2–5 minutes after pitot heat activation under specified operating conditions.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{[
          ["01", "Thermally activated", "Designed for a controlled self-release when compatible pitot heat is applied."],
          ["02", "Protect critical probes", "Help stop burning pitot tube covers and avoid unnecessary probe damage."],
          ["03", "Real-world aviation design", "Designed by Pilots for Pilots. Developed for production, maintenance, and operations."]
        ].map(([n,t,d])=><article key={n} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"><span className="font-bold text-sky-800">{n}</span><h3 className="mt-3 text-xl font-bold">{t}</h3><p className="mt-3 text-slate-600">{d}</p></article>)}</div>
      </section>
      <section id="applications" className="relative overflow-hidden bg-[#0c293f] py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-xs font-black uppercase tracking-[.2em] text-amber-300">Production • Maintenance • Operations</p><h2 className="mt-3 text-4xl font-black">For the teams that keep aircraft flying.</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{applications.map(x=><article key={x.title} className="rounded-2xl border border-white/20 bg-white/[0.07] p-7 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/[0.12]"><h3 className="text-xl font-bold">{x.title}</h3><p className="mt-3 text-slate-200">{x.description}</p></article>)}</div></div></section>
      <section id="roi" className="bg-gradient-to-b from-slate-50 to-white py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-xs font-black uppercase tracking-[.2em] text-sky-800">Illustrative cost analysis</p><h2 className="mt-3 text-4xl font-black">What could a COPE cost your operation?</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[["$150K–$540K", "Illustrative annual loss range"],["1,400%", "Illustrative ROI"],["30 days", "Illustrative payback"]].map(([n,t])=><div key={n} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"><strong className="block text-3xl text-sky-900">{n}</strong><span className="mt-3 block text-slate-600">{t}</span></div>)}</div><p className="mt-6 max-w-4xl text-sm text-slate-600">Figures from a DeGroff-provided example model, not independently verified. Actual savings depend on incident frequency, operating conditions, cost inputs, and deployment. Validate the assumptions before publication.</p></div></section>
      <section id="resources" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><TechnicalResources /></section><section id="demo" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><VideoGallery /></section>
      <section id="contact" className="bg-[#081d30] py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-10"><h2 className="text-4xl font-black">Request a demonstration or quote</h2><p className="mt-5 max-w-3xl text-lg text-slate-200">Discuss aircraft compatibility, technical evaluations, and purchasing options with DeGroff Aviation Technologies™.</p><div className="mt-8 max-w-3xl rounded-xl border border-white/20 bg-white/10 p-7 text-slate-200"><LeadForm /></div></div></section>
    </main><footer className="bg-[#061625] px-5 py-7 text-center text-sm text-slate-300">© DeGroff Aviation Technologies™</footer>
  </div>;
}
