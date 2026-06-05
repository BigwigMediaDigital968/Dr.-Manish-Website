"use client";

import React, { useRef } from "react";
import {
  Compass,
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowLeftRight,
  Award,
  ShieldCheck,
  FlameKindling,
  Check,
  ChevronRight,
  HeartPulse,
} from "lucide-react";

interface DifferentProps {
  onBookClick?: () => void;
}

export default function Different({ onBookClick = () => {} }: DifferentProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const interventionalProcedures = [
    "EBUS (Endobronchial Ultrasound)",
    "Rigid Bronchoscopy",
    "Airway Stenting",
    "Tumour Debulking",
    "Medical Thoracoscopy",
    "Cryobiopsy",
    "Foreign Body Removal",
    "Indwelling Pleural Catheter (IPC) Procedures",
  ];

  return (
    <section
      id="different-care"
      className="relative pt-14 pb-0 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {}
      <style>{`
        .custom-card-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-card-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 99px;
        }
        .custom-card-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #1fa8e8, #6dbb45);
          border-radius: 99px;
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .animate-pulse-soft {
          animation: pulse-soft 8s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Brand Ambient Background Rings */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1fa8e8]/5 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[110px] -z-10 pointer-events-none" />

      {/* Grid pattern overlay for visual precision structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-50" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* ==========================================================
           HEADER BLOCK
           ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/20">
              <Sparkles className="w-4 h-4 text-[#1fa8e8]" /> Global Benchmarks
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-none">
              What Makes Our{" "}
              <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                Care Different?
              </span>
            </h2>

            <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              Explore how we merge state-of-the-art interventional pulmonology
              equipment with internationally aligned, UK-verified clinical
              credentials.
            </p>
          </div>
        </div>

        {/* ==========================================================
           SCROLLABLE CARDS TRACK
           ========================================================== */}
        {}
        <div
          ref={scrollContainerRef}
          className="custom-card-scrollbar flex overflow-x-auto pb-4 pt-2 gap-6 snap-x snap-mandatory scroll-smooth"
        >
          {/* CARD 1: Advanced Interventional Pulmonology Expertise */}
          <div className="w-[90vw] md:w-[620px] shrink-0 snap-start bg-white border border-slate-100/80 rounded-[36px] p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#1fa8e8]/30 transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between">
            {/* Column 1: Info & Checklist */}
            <div className="flex-1 space-y-5 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1fa8e8] to-[#0c7dc2] text-white flex items-center justify-center shadow-md">
                    <Compass className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-sky-50 text-[#0c7dc2]">
                    Procedure Suite
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Advanced Interventional Pulmonology Expertise
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Specialized, minimally invasive diagnostic and therapeutic
                    airway procedures performed in premium interventional rooms.
                  </p>
                </div>
              </div>

              {/* Dynamic scrollable checklist specifically styled */}
              <div className="max-h-[170px] overflow-y-auto pr-2 space-y-2 custom-card-scrollbar">
                {interventionalProcedures.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-700"
                  >
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-[#0c7dc2] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Graphic Image with curved wrapper */}
            {}
            <div className="w-full md:w-56 aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden relative shrink-0 shadow-sm border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Bronchoscopy Suite Equipment"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 rounded-lg uppercase tracking-wider">
                Precision Equipment
              </span>
            </div>
          </div>

          {/* CARD 2: International Clinical Exposure */}
          {}
          <div className="w-[90vw] md:w-[620px] shrink-0 snap-start bg-white border border-slate-100/80 rounded-[36px] p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#6dbb45]/30 transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between">
            {/* Column 1: Info & Descriptive Journey */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#6dbb45] to-[#4d8f2d] text-white flex items-center justify-center shadow-md">
                    <Globe className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-50 text-[#4d8f2d]">
                    FRCP Glasgow (UK)
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    International Clinical Exposure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    Professional respiratory medicine exposure and training
                    experience associated with clinical practice standards in
                    England along with the prestigious FRCP (Glasgow), bringing
                    internationally aligned evidence-based respiratory care to
                    Indian patients.
                  </p>
                </div>
              </div>

              {/* Verified Badge Indicators */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#4d8f2d] flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span>Globally Aligned Medical Guidelines</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#4d8f2d] flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span>UK-Trained Senior Chest Specialists</span>
                </div>
              </div>
            </div>

            {/* Column 2: Landscape Graphic image representing London / Glasgow clinical training */}
            {}
            <div className="w-full md:w-56 aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden relative shrink-0 shadow-sm border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80"
                alt="Glasgow Royal Infirmary standard training context"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 rounded-lg uppercase tracking-wider">
                FRCP Credentials
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================================
           SWIPE EXPLAINER / TOUCH INDICATOR
           ========================================================== */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest animate-pulse flex md:hidden items-center justify-center gap-1.5">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#1fa8e8]" /> Swipe
            horizontally to explore details &bull; click items to scroll
          </p>
        </div>
      </div>
    </section>
  );
}
