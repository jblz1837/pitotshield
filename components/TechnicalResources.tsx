const documents = [
["User Instruction Manual","pitotshield-v2-manual.pdf","Primary operating, inspection and safety instructions"],
["Technical Specification Sheet","pitotshield-v2-spec-sheet.pdf","Dimensions, materials and product specifications"],
["Product Catalog (May 2025)","pitotshield-v2-catalog-05-25.pdf","Published product catalog and ordering details"],
["Product Catalog (Legacy URL)","pitotshield-v2-catalog.pdf","Retained for compatibility with existing links"],
["Technical and Economic White Paper","psv2-wp-marketing-version-w-all-econ.pdf","Background material and illustrative economic analysis"]

] as const;
const path=(file:string)=>`${process.env.NEXT_PUBLIC_BASE_PATH??""}/docs/${encodeURIComponent(file)}`;
export default function TechnicalResources(){
 return <section aria-label="Technical resources">
 <p className="text-sm font-bold uppercase tracking-widest text-sky-800">Engineering references</p>
 <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Technical resources</h2>
 <p className="mt-4 max-w-3xl text-slate-600">Download the original technical PDFs directly from this site. Read the complete User Instruction Manual before using the product. Two legacy placeholder-only PDFs remain at their old addresses for link compatibility but are not presented here as technical guidance.</p>
 <div className="mt-8 grid gap-5 md:grid-cols-2">
 {documents.map(([title,file,description])=><a key={file} href={path(file)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-6 hover:border-sky-400"><h3 className="text-xl font-bold">{title} ↗</h3><p className="mt-2 text-slate-600">{description}</p></a>)}
 </div></section>;
}
