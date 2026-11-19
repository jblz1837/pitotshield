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
    <header className="sticky top-0 z-20 border-b border-white/15 bg-[#081d30] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 lg:px-10">
        <a href="#" aria-label="DeGroff Aviation Technologies homepage" className="flex items-center"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/degroff-logo.webp`} alt="DeGroff Aviation Technologies official logo" className="h-16 w-auto max-w-[220px] object-contain" /></a>
        <nav className="flex flex-wrap gap-5 text-sm font-semibold" aria-label="Main navigation">
          <a href="#how">Technology</a><a href="#applications">Applications</a><a href="#roi">ROI</a><a href="#demo">Demonstration</a><a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071a2a] via-[#103b59] to-[#071a2a] text-white">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(#ffffff30 1px,transparent 1px),linear-gradient(90deg,#ffffff30 1px,transparent 1px)",backgroundSize:"36px 36px"}} />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.25em] text-amber-300">Fail-Safe by Design</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">Stop Covered Pitot Events <span className="text-amber-300">(COPEs).</span></h1>
          <h2 className="mt-6 text-2xl font-bold text-amber-200 sm:text-3xl">PitotShield V2™ SmartCovers™</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Stop burning pitot tube covers. Stop Covered Pitot Events (COPEs). Protect critical pitot probes and avoid costly maintenance interruptions with heat-activated release technology.</p>
          <div className="mt-9 flex flex-wrap gap-4"><a className="rounded-lg bg-amber-300 px-6 py-4 font-bold text-slate-900" href="#contact">Request a Live Demo</a><a className="rounded-lg border border-white/60 px-6 py-4 font-bold" href="#demo">Watch Auto-Release Demo</a></div>
          <p className="mt-10 max-w-3xl text-xs leading-5 text-slate-300">Always follow approved aircraft procedures and remove covers before operation. Auto-release is an additional safeguard, not a substitute for required removal checks.</p>
        </div>
      </section>
      <section id="how" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <p className="text-xs font-black uppercase tracking-[.2em] text-sky-800">How it works</p>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">PitotShield V2™ SmartCovers™ are designed to disengage approximately 2–5 minutes after pitot heat activation under specified operating conditions.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{[
          ["01", "Thermally activated", "Designed for a controlled self-release when compatible pitot heat is applied."],
          ["02", "Protect critical probes", "Help stop burning pitot tube covers and avoid unnecessary probe damage."],
          ["03", "Real-world aviation design", "Designed by Pilots for Pilots. Developed for production, maintenance, and operations."]
        ].map(([n,t,d])=><article key={n} className="rounded-xl border border-slate-200 p-7"><span className="font-bold text-sky-800">{n}</span><h3 className="mt-3 text-xl font-bold">{t}</h3><p className="mt-3 text-slate-600">{d}</p></article>)}</div>
      </section>
      <section id="applications" className="bg-[#0c293f] py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-xs font-black uppercase tracking-[.2em] text-amber-300">Production • Maintenance • Operations</p><h2 className="mt-3 text-4xl font-black">For the teams that keep aircraft flying.</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{applications.map(x=><article key={x.title} className="rounded-xl border border-white/20 bg-white/10 p-7"><h3 className="text-xl font-bold">{x.title}</h3><p className="mt-3 text-slate-200">{x.description}</p></article>)}</div></div></section>
      <section id="roi" className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-xs font-black uppercase tracking-[.2em] text-sky-800">Illustrative cost analysis</p><h2 className="mt-3 text-4xl font-black">What could a COPE cost your operation?</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[["$150K–$540K", "Illustrative annual loss range"],["1,400%", "Illustrative ROI"],["30 days", "Illustrative payback"]].map(([n,t])=><div key={n} className="rounded-xl bg-white p-8 shadow-sm"><strong className="block text-3xl text-sky-900">{n}</strong><span className="mt-3 block text-slate-600">{t}</span></div>)}</div><p className="mt-6 max-w-4xl text-sm text-slate-600">Figures from a DeGroff-provided example model, not independently verified. Actual savings depend on incident frequency, operating conditions, cost inputs, and deployment. Validate the assumptions before publication.</p></div></section>
      <section id="resources" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><TechnicalResources /></section><section id="demo" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><VideoGallery /></section>
      <section id="contact" className="bg-[#081d30] py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-10"><h2 className="text-4xl font-black">Request a demonstration or quote</h2><p className="mt-5 max-w-3xl text-lg text-slate-200">Discuss aircraft compatibility, technical evaluations, and purchasing options with DeGroff Aviation Technologies™.</p><div className="mt-8 max-w-3xl rounded-xl border border-white/20 bg-white/10 p-7 text-slate-200"><LeadForm /></div></div></section>
    </main><footer className="bg-[#061625] px-5 py-7 text-center text-sm text-slate-300">© DeGroff Aviation Technologies™</footer>
  </div>;
}
