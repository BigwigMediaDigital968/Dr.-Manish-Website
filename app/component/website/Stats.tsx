"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Award,
  Activity,
  Compass,
  Star,
  MessageSquare,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SecondOpinionPopUpForm from "./SecondOpinionPopUpForm";

export default function Stats() {
  // High-fidelity stats array matching the exact accomplishments requested
  const metrics = [
    {
      id: 1,
      value: "25+",
      suffix: "Years",
      label: "Clinical Experience",
      icon: Award,
      gradient: "from-[#1fa8e8] to-[#0c7dc2]",
      ringColor: "group-hover:border-[#1fa8e8]/30",
      accentText: "text-[#1fa8e8]",
    },
    {
      id: 2,
      value: "4.9",
      suffix: "Rating",
      label: "Google Reviews Rating",
      icon: Star,
      gradient: "from-amber-400 to-orange-500",
      ringColor: "group-hover:border-amber-500/30",
      accentText: "text-amber-500",
      isRating: true,
    },
    {
      id: 3,
      value: "350+",
      suffix: "Reviews",
      label: "Verified Patient Reviews",
      icon: MessageSquare,
      gradient: "from-[#6dbb45] to-emerald-600",
      ringColor: "group-hover:border-[#6dbb45]/30",
      accentText: "text-[#6dbb45]",
    },
    {
      id: 4,
      value: "10,000+",
      suffix: "Cases",
      label: "Bronchoscopy Performed",
      icon: Activity,
      gradient: "from-[#6dbb45] to-[#4d8f2d]",
      ringColor: "group-hover:border-[#6dbb45]/30",
      accentText: "text-[#6dbb45]",
    },
    {
      id: 5,
      value: "3,000+",
      suffix: "Procedures",
      label: "EBUS Performed",
      icon: Compass,
      gradient: "from-[#1fa8e8] to-[#6dbb45]",
      ringColor: "group-hover:border-teal-500/30",
      accentText: "text-teal-500",
    },
    {
      id: 6,
      value: "Premier",
      suffix: "Alumnus",
      label: "Indian Premier Institutes",
      icon: GraduationCap,
      gradient: "from-slate-800 to-slate-950",
      ringColor: "group-hover:border-slate-500/30",
      accentText: "text-slate-700",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("clinic-vitals");

    if (!section) return;

    const rect = section.getBoundingClientRect();

    // User has completely passed the section
    if (rect.bottom < 0) {
      setShowPopup(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return (
    <>
      <section
        ref={sectionRef}
        id="clinic-vitals"
        className="relative py-14 px-4 bg-slate-50 overflow-hidden text-slate-900 border-t border-slate-100"
      >
        {/* Background Soft Ambient Glow Rings */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[90px] -z-10 pointer-events-none" />

        {/* Grid Overlay Pattern for Visual Sophistication */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-55" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10 px-4">
          {/* Mobile Carousel */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-none snap-x snap-mandatory">
            <div className="flex gap-3 w-max pb-2">
              {metrics.map((item) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    className={`snap-start shrink-0 w-[calc(50vw-18px)] min-w-[160px]
          group relative bg-white border border-slate-100
          p-5 rounded-[24px] shadow-sm hover:shadow-xl
          hover:shadow-sky-100/30 transition-all duration-300
          flex flex-col justify-between ${item.ringColor}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1fa8e8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]" />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.gradient}
                text-white flex items-center justify-center shadow-md`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1">
                          <span
                            className={`text-lg font-black bg-gradient-to-r ${item.gradient}
                  bg-clip-text text-transparent`}
                          >
                            {item.value}
                          </span>

                          {item.isRating && (
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, idx) => (
                                <Star
                                  key={idx}
                                  className="w-3 h-3 fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        <h3 className="mt-1 text-sm font-bold text-slate-900 leading-tight">
                          {item.label}
                        </h3>
                      </div>
                    </div>

                    <div className="w-full h-[3px] bg-slate-100 rounded-full mt-5 group-hover:bg-gradient-to-r group-hover:from-[#1fa8e8] group-hover:to-[#6dbb45]" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet + Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className={`group relative bg-white border border-slate-100 p-6 sm:p-8 rounded-[24px] shadow-sm hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300 flex flex-col justify-between ${item.ringColor}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1fa8e8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]" />

                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.gradient}
              text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1">
                        <span
                          className={`text-xl font-black bg-gradient-to-r ${item.gradient}
                bg-clip-text text-transparent`}
                        >
                          {item.value}
                        </span>

                        {item.isRating && (
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="mt-1 text-base font-extrabold text-slate-900">
                        {item.label}
                      </h3>
                    </div>
                  </div>

                  <div className="w-full h-[3px] bg-slate-100 rounded-full mt-6 group-hover:bg-gradient-to-r group-hover:from-[#1fa8e8] group-hover:to-[#6dbb45]" />
                </div>
              );
            })}
          </div>

          {/* --- COLLABORATIVE CORNER SUMMARY BANNER --- */}
          <div className="bg-gradient-to-r from-[#1fa8e8]/5 to-[#6dbb45]/5 rounded-3xl p-6 border border-[#1fa8e8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-black text-slate-800 flex items-center justify-center sm:justify-start gap-1.5 uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-[#6dbb45]" /> Evidence-Based
                Respiratory Care
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-normal">
                Our clinical statistics are verified by local audits and academic
                publications at international chest medicine congresses.
              </p>
            </div>
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1fa8e8]/40 hover:bg-slate-50 text-[10px] font-black uppercase text-[#0c7dc2] tracking-wider shrink-0 transition-all shadow-sm"
            >
              Request Diagnostic Consultation
            </a>
          </div>
        </div>
      </section>
      {showPopup && (
        <SecondOpinionPopUpForm
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}    </>
  );
}
