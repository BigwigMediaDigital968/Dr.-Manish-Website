"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function BlogHero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="blog-hero"
      className="relative h-[80vh] flex items-center justify-center pb-14 pt-36 px-4 md:px-8 overflow-hidden text-slate-900"
    >
      {/* ============================================================================
         4. STREAMING_CHUNK: High-resolution clinical backgrounds with smooth transitions
         ============================================================================ */}

      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out -z-20 ${
          bgLoaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-105 blur-sm"
        }`}
        style={{
          backgroundImage: "url('/blog-hero.png')",
        }}
      />

      {/* Rich visual vignetting filters ensuring WCAG contrast compliance */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/80 -z-10 pointer-events-none" />

      {/* Embedded Ambient Color Highlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1fa8e8]/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6dbb45]/8 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* ============================================================================
         5. STREAMING_CHUNK: Main layout containing left card & right badge constellation
         ============================================================================ */}

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 pt-10">
        <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-0">
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-[40px] border border-white/40 shadow-[0_24px_60px_rgba(0,0,0,0.3)] space-y-6 sm:space-y-8 transition-all duration-300 hover:shadow-sky-500/10 hover:border-white/60">
            {/* Clinical Brand/Resource Ticker */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-2 text-sky-600 font-extrabold text-[10px] uppercase tracking-widest">
                <ArrowUpRight />
                <span>Resources & Expert Insights</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Discover why we're your top choice for clinical diagnostics.
              </h1>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Stay updated with scientific pulmonary research, home sleep
                study metrics, Delhi air defense routines, and pediatric
                bronchoscopy guidelines reviewed by senior clinicians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
