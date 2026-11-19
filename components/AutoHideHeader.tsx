"use client";
import { useEffect, useState } from "react";

export default function AutoHideHeader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let previousY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const difference = currentY - previousY;
      if (currentY < 100) setHidden(false);
      else if (difference > 5) setHidden(true);
      else if (difference < -5) setHidden(false);
      previousY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-20 border-b border-white/10 bg-[#081d30]/95 text-white shadow-sm backdrop-blur-md motion-safe:transition-transform motion-safe:duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`} onFocusCapture={() => setHidden(false)}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2.5 sm:flex-row sm:gap-6 sm:py-3 lg:px-10">
        <a href="#" aria-label="DeGroff Aviation Technologies homepage" className="inline-flex w-fit shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/degroff-logo.webp`} alt="DeGroff Aviation Technologies™ official logo" width={230} height={178} className="h-14 w-auto object-contain grayscale invert contrast-200 mix-blend-screen sm:h-20 lg:h-24" />
        </a>
        <nav className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold tracking-wide sm:w-auto sm:justify-end sm:gap-x-5 sm:text-sm lg:gap-x-6 lg:text-base" aria-label="Main navigation">
          <a href="#how">Technology</a><a href="#applications">Applications</a><a href="#roi">ROI</a><a href="#demo">Demonstration</a><a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
