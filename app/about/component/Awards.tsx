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

  // 6 Prestigious Awards and Certifications with Premium Visual Assets
  const awardsData: AwardItem[] = [
    {
      id: 1,
      title: "FRCP (Glasgow, UK)",
      issuer: "Royal College of Physicians & Surgeons",
      year: "Honorary Fellowship",
      desc: "Awarded the highly prestigious Fellowship for outstanding contributions to advanced global pulmonary clinical practice.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      icon: Award,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
    {
      id: 2,
      title: "Aeromed Global Rescue Pioneer",
      issuer: "International Air Ambulance Consortium",
      year: "Founder Excellence",
      desc: "Recognized as the Founder Director of Aeromed, safely transferring critical respiratory patients globally.",
      image:
        "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=600&q=80",
      icon: Globe,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 3,
      title: "Pioneering EBUS Interventions",
      issuer: "Delhi Pulmonology Association",
      year: "Clinical Excellence",
      desc: "Lauded for outstanding achievements in introducing high-resolution EBUS bronchoscopy diagnostics in East Delhi.",
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80",
      icon: Compass,
      color: "from-[#1fa8e8] to-[#6dbb45]",
    },
    {
      id: 4,
      title: "NABL Compliance Certification",
      issuer: "National Accreditation Board",
      year: "Certified Quality Standards",
      desc: "Excellence certificate for laboratory procedures in respiratory function testing and sleep diagnostics.",
      image:
        "https://images.unsplash.com/photo-1579153138244-3917f01f01d7?auto=format&fit=crop&w=600&q=80",
      icon: ShieldCheck,
      color: "from-[#0f172a] to-[#1e293b]",
    },
    {
      id: 5,
      title: "Best Sleep Disorders Clinic",
      issuer: "National Health & Wellness Summit",
      year: "Summit Award Winner",
      desc: "Honored for premium-tier overnight Polysomnography suites and high patient-recovery index.",
      image:
        "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=600&q=80",
      icon: HeartPulse,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 6,
      title: "28+ Years Healthcare Icon",
      issuer: "Medical Directors Council",
      year: "Lifetime Dedication",
      desc: "A special recognition award honoring nearly three decades of serving patients with respiratory issues.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      icon: Activity,
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
        <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/25">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Honors &
            Recognitions
          </div>

          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-950 leading-tight">
            Awards & Clinical Milestones
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
            Honoring nearly three decades of healthcare excellence, global
            emergency rescue initiatives, and advanced pulmonology staging by
            Dr. Manish Aggarwal.
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
                  className="w-[280px] sm:w-[320px] flex-shrink-0 bg-slate-50 hover:bg-white border border-slate-100 hover:border-[#1fa8e8]/30 p-5 rounded-[36px] shadow-sm hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Award Visual Image Header */}
                    {!isImgError ? (
                      <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-200">
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
