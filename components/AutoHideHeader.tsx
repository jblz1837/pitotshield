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
      <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden" focusable="false">
        <defs>
          <filter id="degroff-white-knockout" colorInterpolationFilters="sRGB" x="-5%" y="-5%" width="110%" height="110%">
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -0.2126 -0.7152 -0.0722 0 1" />
            <feComponentTransfer>
              <feFuncA type="gamma" amplitude="1" exponent="4.5" offset="0" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row sm:gap-4 sm:py-2 lg:gap-8 lg:px-10">
        <a href="#" aria-label="DeGroff Aviation Technologies homepage" className="inline-flex w-fit shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/degroff-logo.webp`} alt="DeGroff Aviation Technologies™ official logo" width={230} height={178} className="h-24 w-auto max-w-full object-contain drop-shadow-[0_1px_2px_rgba(255,255,255,0.18)] sm:h-32 lg:h-44" style={{ filter: "url(#degroff-white-knockout)" }} />
        </a>
        <nav className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold tracking-wide sm:w-auto sm:flex-1 sm:justify-end sm:gap-x-4 sm:text-sm lg:gap-x-6 lg:text-base" aria-label="Main navigation">
          <a href="#how">Technology</a><a href="#applications">Applications</a><a href="#roi">ROI</a><a href="#demo">Demonstration</a><a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
