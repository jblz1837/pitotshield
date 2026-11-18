const docs = [
 {title:"Operations Manual",url:"https://pitotshields.com/docs/pitotshield-v2-manual.pdf",detail:"Installation, inspection, usage, and safety warnings"},
 {title:"Technical Specification Sheet",url:"https://pitotshields.com/docs/pitotshield-v2-spec-sheet.pdf",detail:"Product materials, fit and technical information"},
 {title:"Product Catalog",url:"https://pitotshields.com/docs/pitotshield-v2-catalog-05-25.pdf",detail:"Product selection and ordering information"},
 {title:"Safety and Compliance",url:"https://pitotshields.com/docs/psv2-wp-marketing-version-w-all-econ.pdf",detail:"Supporting background and compliance considerations"}
];
export default function TechnicalResources(){
 return <section aria-label="Technical resources">
  <p className="text-sm font-bold uppercase tracking-widest text-sky-800">Engineering references</p>
  <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Technical resources</h2>
  <p className="mt-4 max-w-3xl text-slate-600">Review the published product documents before installation or operation. Links currently point to the existing PitotShields.com document library.</p>
  <div className="mt-8 grid gap-5 md:grid-cols-2">{docs.map(x=><a key={x.url} href={x.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-6 hover:border-sky-400"><h3 className="text-xl font-bold">{x.title} ↗</h3><p className="mt-2 text-slate-600">{x.detail}</p></a>)}</div>
 </section>;
}
