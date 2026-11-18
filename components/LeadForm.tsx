"use client";
import { useState, type FormEvent } from "react";
const salesEmail = "info@degroffaviation.com";
export default function LeadForm() {
 const [state,setState] = useState<"idle"|"sending"|"sent"|"error">("idle");
 const [values,setValues] = useState({name:"",email:"",company:"",aircraft:"",interest:"Request a Demo",message:""});
 const configured = Boolean(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
 async function submit(e:FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!configured) {
    const subject=encodeURIComponent("PitotShield V2™ "+values.interest);
    const body=encodeURIComponent("Name: "+values.name+"\nEmail: "+values.email+"\nCompany: "+values.company+"\nAircraft: "+values.aircraft+"\nRequest: "+values.interest+"\n\n"+values.message);
    window.location.href="mailto:"+salesEmail+"?subject="+subject+"&body="+body; return;
  }
  setState("sending");
  try {
   const res=await fetch("https://api.emailjs.com/api/v1.0/email/send",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({service_id:process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,template_id:process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,user_id:process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,template_params:{from_name:values.name,reply_to:values.email,from_email:values.email,company:values.company,aircraft:values.aircraft,interest:values.interest,message:values.message}})
   });
   if (!res.ok) throw new Error("EmailJS response "+res.status);
   setState("sent");
   if (typeof window!=="undefined" && "gtag" in window) (window as Window & {gtag?:(...x:unknown[])=>void}).gtag?.("event","generate_lead",{event_category:"contact",event_label:values.interest});
  } catch {setState("error");}
 }
 return <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2" aria-label="Request a demonstration or quote">
  {([["name","Your name"],["email","Work email"],["company","Company"],["aircraft","Aircraft / fleet"]] as const).map(([k,label])=><label key={k} className="grid gap-2 text-sm font-semibold">{label}<input required={k==="name"||k==="email"||k==="company"} type={k==="email"?"email":"text"} autoComplete={k==="email"?"email":k==="name"?"name":k==="company"?"organization":"off"} value={values[k]} onChange={e=>setValues(v=>({...v,[k]:e.target.value}))} className="rounded-md border border-white/30 bg-white px-3 py-3 text-slate-900" /></label>)}
  <label className="grid gap-2 text-sm font-semibold sm:col-span-2">I am interested in
    <select value={values.interest} onChange={e=>setValues(v=>({...v,interest:e.target.value}))} className="rounded-md border border-white/30 bg-white px-3 py-3 text-slate-900">
      {["Request a Demo","Request a Quote","Technical Evaluation","Aircraft Compatibility"].map(x=><option key={x}>{x}</option>)}
    </select>
  </label>
  <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Additional details
    <textarea rows={4} value={values.message} onChange={e=>setValues(v=>({...v,message:e.target.value}))} className="rounded-md border border-white/30 bg-white px-3 py-3 text-slate-900" />
  </label>
  <div className="sm:col-span-2">
    <button disabled={state==="sending"} type="submit" className="rounded-lg bg-amber-300 px-6 py-3 font-bold text-slate-900 disabled:opacity-60">{state==="sending"?"Sending…":configured?"Send Inquiry":"Open Email to Send Inquiry"}</button>
    {!configured&&<p className="mt-3 text-xs text-slate-300">EmailJS is not configured in this review environment. This button opens your email application and does not silently submit data.</p>}
    {state==="sent"&&<p role="status" className="mt-3 text-green-200">Your inquiry was submitted successfully.</p>}
    {state==="error"&&<p role="alert" className="mt-3 text-amber-200">The message could not be sent. Please email <a className="underline" href={"mailto:"+salesEmail}>{salesEmail}</a> directly.</p>}
  </div>
 </form>;
}
