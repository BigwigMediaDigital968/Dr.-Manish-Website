"use client";

import {
  Sparkles,
  Stethoscope,
} from "lucide-react";

interface WhyChooseUsProps {
  onBookClick?: () => void;
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 px-4 bg-slate-50/50 overflow-hidden text-slate-900 border-t border-slate-200/50"
    >
      {/* Decorative Brand Ambient Glowing Rings */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1fa8e8]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* ==========================================================
           TOP SECTION: CORE HEADER WITH STATS INTRO
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Introductions (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/20">
              <Sparkles className="w-4 h-4 text-[#1fa8e8]" /> Why Choose Us
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              Why Dr. Manish Aggarwal is the Best 
              <br />
              <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                Pulmonologist in Delhi
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                <span className="text-slate-900 font-extrabold">
                  Dr. Manish Aggarwal
                </span>
                , Principal Director, Department of Chest Disease and Interventional Pulmonology at Max Hospital and also practising at his clinic in Pitampura (Currently in Shalimar Bagh), Delhi, is dedicated to providing evidence-based, ethical, and patient-focused respiratory care for both chronic sleep disorder and complex lung diseases.
              </p>
              <p className="text-slate-500 font-normal">
                As an experienced pulmonologist in Delhi, patients rely on his clinic that combines with modern treatment expertise with compassionate long-term patient care.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Portrait Block with Floating Badge (5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Frame Block */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl border-4 border-white overflow-hidden group">
              <img
                src="/why-choose.png"
                alt="Advanced Pulmonary Diagnostic Equipment"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Doctor Signature Stamp Bubble */}
            <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 flex items-center gap-3 animate-subtle-bounce">
              <div className="w-10 h-10 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block">
                  Advanced Pulmonary & Sleep Disorder <br /> Treatment
                </span>
                <p className="text-xs font-black text-slate-800 leading-none">
                  Dr. Manish Aggarwal
                </p>
                <span className="text-[10px] text-[#6dbb45] font-bold">
                  Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
