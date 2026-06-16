"use client";

import React, { useEffect, useRef, useState } from "react";
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
  Users,
  BookMarked,
  BookOpen,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

interface DifferentProps {
  onBookClick?: () => void;
}

export default function Different({ onBookClick = () => { } }: DifferentProps) {
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
  const experience = [
    "Locum SPR, Diana Princess of Wales Hospital, Grimsby, UK",
    "Locum SPR, The Queen Elizabeth Hospital, King's Lynn, Norfolk, UK",
    "Locum SPR, The Great Western Hospital, Swindon, Wiltshire, UK",
    "Senior Clinical Fellow, Lister Hospital, East & North Hertfordshire, Stevenage, UK",
    "Clinical Observer, Department of Respiratory Medicine, Norfolk & Norwich University Hospital, Norwich, UK"
  ]
  const memberships = [
    " International member of American society of critical care (SSCM), USA",
    "Associate member of European society of intensive care medicine (ESCIM)",
    "Life member of Indian Medical Association (IMA DNZ)",
    "Member European Respiratory Society (ERS)",
    "Member American college of physician (ACP)",
    "Life member of Indian chest council"
  ];

  const publicationsold = [
    `Aggarwal Manish." Recurrent epistaxis in a patient of pulmonary arteria hypertension.” Indian J allergy asthma immunol 2009`,
    `Aggarwal Manish, GS Ranga, S. Dwivedi, Dharmender Kumar. “Aluminium
phosphide poisoning in a young adult: A suicidal cardiotoxin simulating myocardial
ischaemia.” Journal Indian Academy of Clinical Medicine 2004`,
    `Aggarwal Manish, Menon MPS. Effect of oral fexofenadine on ventilatory parameter
in patient of bronchial asthma”. Doctoral Dissertation submitted to the University of
Delhi, 2001`
  ];
  const publications = [
  {
    title: "Endobronchial Capillary Hemangioma: A Rare Cause of Hemoptysis",
    link: "https://doi.org/10.4103/lungindia.lungindia_508_19"
  },
  {
    title: "Vocal Cord Biopsy Under Local Anesthesia Using Flexible Bronchoscope — the “Inside-Out” Technique",
    link: "https://doi.org/10.4103/lungindia.lungindia_373_21"
  },
  {
    title: "Interventional Pulmonology During COVID Times: A Look Back at the Year Gone By",
    link: "https://doi.org/10.4103/lungindia.lungindia_94_21"
  },
  {
    title: "Bronchoscopic Treatment of Bronchopleural Fistula Due to COVID-19",
    link: "https://doi.org/10.4103/lungindia.lungindia_79_22"
  },
  {
    title: "Case Series of Y-Shaped Self-Expanding Metallic Stents (Y-SEMS) for Central Airway Obstruction — Experience of Deployment with the ‘Single Guide Wire’ Technique",
    link: "https://doi.org/10.4103/lungindia.lungindia_482_24"
  },
  {
    title: "Affordable Use of Indwelling Pleural Catheters for Malignant Pleural Effusion",
    link: "https://doi.org/10.4103/lungindia.lungindia_585_25"
  }
];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to handle scroll checking to enable/disable navigation buttons
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Allow minor decimal discrepancies during zoom or subpixel layouts
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth -2);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      // Run once initially
      checkScrollPosition();
      // Handle window resize recalculations
      window.addEventListener("resize", checkScrollPosition);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  // Scroll actions
  const scroll = (direction:any) => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 444 : window.innerWidth * 0.9; // Card size + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="different-care"
      className="relative pt-14 pb-0 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden text-slate-900 border-t border-slate-100"
    >
      { }
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
          <div className="text-start space-y-4 max-w-3xl">
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
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-95 cursor-pointer"
                  : "border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-95 cursor-pointer"
                  : "border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ==========================================================
           SCROLLABLE CARDS TRACK
           ========================================================== */}
        { }

         <div
          ref={scrollContainerRef}
          className="custom-card-scrollbar flex overflow-x-auto pb-6 pt-2 gap-6 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* CARD 1: Advanced Interventional Pulmonology Expertise */}
          <div className="w-[90vw] md:w-[420px] shrink-0 snap-start bg-white border border-slate-100/80 rounded-[36px] p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#1fa8e8]/30 transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between">
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
            {/* Column 2: Graphic Image with curved wrapper placeholder */}
          </div>

          {/* CARD 2: International Clinical Exposure */}
          <div className="w-[90vw] md:w-[420px] shrink-0 snap-start bg-white border border-slate-100/80 rounded-[36px] p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#6dbb45]/30 transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between">
            {/* Column 1: Info & Descriptive Journey */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#6dbb45] to-[#4d8f2d] text-white flex items-center justify-center shadow-md">
                    <Globe className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-50 text-[#4d8f2d]">
                    INTERNATIONAL EXPERIENCE
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    International Clinical Exposure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium ">
                    Clinical experience across leading NHS hospitals in England, including roles as Locum SPR, Senior Clinical Fellow, and Respiratory Medicine Observer, providing extensive exposure to internationally recognized standards of respiratory and critical care practice.
                  </p>
                </div>
              </div>

              {/* Verified Badge Indicators */}
              <div className="max-h-[170px] overflow-y-auto pr-2 space-y-2 custom-card-scrollbar">
                {experience.map((item, idx) => (
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
            {/* Column 2: Landscape Graphic image placeholder */}
          </div>

          {/* CARD 3: Professional Memberships */}
          <div className="w-[90vw] md:w-[420px] shrink-0 snap-start bg-white border border-slate-100/80 rounded-[36px] p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#2563eb]/30 transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between">
            {/* Column 1: Info & Descriptive Journey */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#2563eb] to-[#4338ca] text-white flex items-center justify-center shadow-md">
                    <Users className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-[#4338ca]">
                    GLOBAL AFFILIATIONS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Professional Memberships
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    Active affiliations with leading national and international respiratory,
                    critical care, and physician societies, ensuring continuous engagement
                    with the latest clinical research, guidelines, and advancements in
                    pulmonary and critical care medicine.
                  </p>
                </div>
              </div>

              {/* Verified Badge Indicators */}
              <div className="max-h-[170px] overflow-y-auto pr-2 space-y-2 custom-card-scrollbar">
                {memberships.map((item, idx) => (
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
            {/* Column 2: Landscape Graphic image placeholder */}
          </div>

          {/* CARD 4: Research Contributions */}
          <div className="w-[90vw] md:w-[420px] shrink-0 snap-start bg-white border border-slate-100/80 rounded-[36px] p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-violet-600/30 transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between">
            {/* Column 1: Info & Descriptive Journey */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow-md">
                    <BookOpen className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-violet-50 text-violet-700">
                    RESEARCH & PUBLICATIONS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Research Contributions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    Published research and academic work spanning respiratory medicine,
                    pulmonary hypertension, toxicology, and asthma management, reflecting a
                    commitment to evidence-based medicine and continuous scientific inquiry.
                  </p>
                </div>
              </div>

              {/* Verified Badge Indicators */}
              <div className="max-h-[170px] overflow-y-auto pr-2 space-y-2 custom-card-scrollbar">
                {publications.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="flex items-start gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-700 hover:text-blue-600"
                  >
                    <span className="w-4 h-4 mt-0.5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                      <BookMarked className="w-2.5 h-2.5" />
                    </span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Column 2: Landscape Graphic image placeholder */}
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
