"use client";

import React, { useState } from "react";
import {
  Award,
  Sparkles,
  Globe,
  ShieldCheck,
  HeartPulse,
  Activity,
  Compass,
  ExternalLink,
} from "lucide-react";

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  desc: string;
  image: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function Awards() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (idKey: string) => {
    setImageErrors((prev) => ({ ...prev, [idKey]: true }));
  };

  const awardsData: AwardItem[] = [
    {
      id: 1,
      title: "FRCP (Glasgow)",
      issuer: "Royal College of Physicians, Glasgow",
      year: "United Kingdom",
      desc: "Awarded the prestigious Fellowship of the Royal College of Physicians (FRCP), recognizing advanced clinical expertise and contributions to respiratory medicine.",
      image: "/awards/frcp.png",
      icon: Award,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
    {
      id: 2,
      title: "NBEMS Faculty",
      issuer: "Accredited DTCD Program",
      year: "",
      desc: "Faculty member for the NBEMS Accredited DTCD Program, actively involved in postgraduate respiratory medicine education.",
      image: "/awards/nbmes.png",
      icon: Sparkles,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 3,
      title: "National Bronchoscopy Faculty",
      issuer: "Interventional Pulmonology Courses",
      year: "Academic Leadership",
      desc: "Faculty and organizer for national bronchoscopy and interventional pulmonology workshops, mentoring respiratory medicine trainees.",
      image: "/awards/bronchoscopy.png",
      icon: Activity,
      color: "from-[#1fa8e8] to-[#6dbb45]",
    },
    {
      id: 4,
      title: "NHS (United Kingdom) Experience",
      issuer: "National Health Service",
      year: "Clinical Training",
      desc: "Acquired valuable international clinical experience while practicing medicine in the United Kingdom healthcare system.",
      image: "/awards/nhs.png",
      icon: Globe,
      color: "from-[#0f172a] to-[#1e293b]",
    },
    {
      id: 5,
      title: "Lung India Publication",
      issuer: "Indian Chest Society",
      year: "Research",
      desc: "Contributed peer-reviewed publications in respiratory medicine, bronchoscopy, pleural disease, and COVID-related pulmonary complications.",
      image: "/awards/lung-india.png",
      icon: HeartPulse,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 6,
      title: "Affordable Use of Indwelling Pleural Catheters",
      issuer: "Selected Publication",
      year: "",
      desc: "Research contribution focusing on cost-effective management of malignant pleural effusion through indwelling pleural catheters.",
      image: "/awards/research.png",
      icon: ShieldCheck,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
    {
      id: 7,
      title: "Bronchoscopic Treatment of Bronchopleural Fistula",
      issuer: "Selected Publication",
      year: "",
      desc: "Published work detailing advanced bronchoscopic management of bronchopleural fistula associated with COVID-19 complications.",
      image: "/awards/covid.png",
      icon: Compass,
      color: "from-[#1fa8e8] to-[#6dbb45]",
    },
    {
      id: 8,
      title: "Interventional Pulmonology During COVID Times",
      issuer: "Selected Publication",
      year: "",
      desc: "Academic work highlighting evolving interventional pulmonology practices during the COVID-19 pandemic.",
      image: "/awards/interventional.png",
      icon: Activity,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 9,
      title: "Endobronchial Capillary Hemangioma",
      issuer: "Rare Clinical Case Publication",
      year: "",
      desc: "Published a rare case report describing endobronchial capillary hemangioma as an unusual cause of hemoptysis.",
      image: "/awards/hemoptysis.png",
      icon: HeartPulse,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
  ];

  // Duplicate list to achieve a completely seamless infinite loop scroll
  const doubleAwards = [...awardsData, ...awardsData];

  return (
    <section
      id="awards"
      className="relative py-20 px-4 overflow-hidden bg-white text-slate-900 border-t border-slate-100"
    >
      {/* Dynamic Keyframes Styling for Seamless Infinite Marquee & Interactions */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-continuous {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-continuous:hover {
          animation-play-state: paused;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
      `}</style>

      {/* Decorative Brand Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* --- HEADER BLOCK --- */}
        <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Academic Excellence
          </div>

          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-950 leading-tight">
            Academic Leadership & Research Contributions
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Dr. Manish Aggarwal actively contributes to postgraduate medical
            education, interventional pulmonology training, and peer-reviewed
            respiratory research, with publications in{" "}
            <strong>Lung India</strong> and other academic forums.
          </p>
        </div>

        {/* --- INTERACTIVE CONTINUOUS MARQUEE CAROUSEL --- */}
        <div className="relative w-full overflow-hidden py-4 select-none mask-gradient">
          {/* Scrolling Container */}
          <div className="animate-marquee-continuous gap-6">
            {doubleAwards.map((item, idx) => {
              const IconComponent = item.icon;
              const idKey = `${item.id}-${idx}`;
              const isImgError = imageErrors[idKey];

              return (
                <div
                  key={idKey}
                  className="w-[280px] sm:w-[320px] flex-shrink-0 bg-slate-50 hover:bg-white border border-slate-100 hover:border-[#1fa8e8]/30 p-5 rounded-[14px] shadow-sm hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Award Visual Image Header */}
                    {!isImgError ? (
                      <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-slate-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={() => handleImageError(idKey)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    ) : (
                      // Beautiful placeholder block if the image fails to resolve
                      <div className="relative aspect-[16/10] rounded-[24px] bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center border border-slate-200">
                        <IconComponent className="w-8 h-8 text-slate-400" />
                      </div>
                    )}

                    {/* Meta Row & Icons */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-sans tracking-wider">
                        {item.year}
                      </span>
                    </div>

                    {/* Information Text */}
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-slate-800 tracking-wide line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-bold text-[#1fa8e8] uppercase tracking-wide">
                        {item.issuer}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Accordion Verified Indicator */}
                  <div className="pt-4 border-t border-slate-100/85 mt-4 flex items-center justify-between text-[10px] font-bold text-[#6dbb45]">
                    <span>Verified Accreditation</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#6dbb45] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- QUICK ACTION SUBTEXT CAPTION --- */}
        <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest animate-pulse">
          Hover cards to pause sliding track
        </p>
      </div>
    </section>
  );
}
