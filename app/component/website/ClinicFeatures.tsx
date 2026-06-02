"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  User,
  Baby,
  Clock,
  Compass,
  Moon,
  Activity,
  ShieldCheck,
  Home,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Wind,
} from "lucide-react";

export default function ClinicFeatures() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Adult Pulmonary Clinic",
      icon: User,
      desc: "Comprehensive asthma & COPD care",
    },
    {
      id: 2,
      title: "Pediatric Airway Care",
      icon: Baby,
      desc: "Delicate pediatric lung checks",
    },
    {
      id: 3,
      title: "Day Care & Sleep Titration Suite",
      icon: Clock,
      desc: "Monitored therapeutic sessions",
      isActive: true, // Special active highlight exactly matching card #3 in image_8dc29f.jpg
    },
    {
      id: 4,
      title: "Interventional Pulmonology",
      icon: Compass,
      desc: "Minimally invasive bronchoscopy",
    },
    {
      id: 5,
      title: "Overnight Sleep Studies",
      icon: Moon,
      desc: "Polysomnography in premium suites",
    },
    {
      id: 6,
      title: "PFT & Lung Diagnostics",
      icon: Activity,
      desc: "High-precision spirometry & DLCO",
    },
    {
      id: 7,
      title: "Allergy & Immunotherapy",
      icon: ShieldCheck,
      desc: "Targeted clinical defense programs",
    },
    {
      id: 8,
      title: "Home Sleep Screening",
      icon: Home,
      desc: "Portable sleep testing diagnostics",
    },
  ];

  return (
    <section
      id="departments"
      className="relative py-20 px-4 bg-slate-50/50 overflow-hidden text-slate-900"
    >
      {/* Background soft lighting glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#6dbb45]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* ==========================================================
           TOP SECTION: 8-CARD GRID & FEMALE DOCTOR PORTRAIT
           ========================================================== */}
        <div className="relative bg-gradient-to-br from-slate-100/90 via-slate-50 to-white border border-slate-200/40 rounded-[40px] p-6 sm:p-8 lg:p-12 shadow-xl shadow-sky-100/20 overflow-hidden">
          {/* Subtle decorative background watermarks */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#1fa8e8]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT 8 COLUMNS: TEXT & GRID CARDS */}
            <div className="lg:col-span-8 space-y-8">
              {/* Pill & Title exactly matching image_8dc29f.jpg */}
              <div className="space-y-4 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-[10px] font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Departments
                </div>
                <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Wide Range of Services & Clinical Suites
                </h2>
              </div>

              {/* 8-Card Grid (4 Columns wide on large screens, 2 on tablet, 1 on mobile) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((card) => {
                  const IconComponent = card.icon;
                  // Card 3 is hard-highlighted as active to preserve image_8dc29f.jpg visual cue
                  const isActive = card.isActive || hoveredCard === card.id;

                  return (
                    <div
                      key={card.id}
                      className={`group p-5 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between h-[155px] cursor-pointer ${
                        isActive
                          ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/10 -translate-y-1"
                          : "bg-white border-slate-100 hover:border-[#1fa8e8]/30 shadow-sm hover:shadow-md"
                      }`}
                      onMouseEnter={() =>
                        !card.isActive && setHoveredCard(card.id)
                      }
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Top Row: Icon & Redirect Indicator */}
                      <div className="flex items-start justify-between w-full">
                        <div
                          className={`p-2.5 rounded-2xl transition-colors ${
                            isActive
                              ? "bg-[#1fa8e8]"
                              : "bg-slate-50 text-slate-500 group-hover:bg-[#1fa8e8]/10 group-hover:text-[#1fa8e8]"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span
                          className={`p-1 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 text-white rotate-45"
                              : "text-slate-400 group-hover:text-[#1fa8e8] group-hover:bg-slate-100 group-hover:rotate-45"
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>

                      {/* Bottom Row: Text details */}
                      <div className="space-y-1">
                        <h3
                          className={`text-xs font-extrabold tracking-tight ${isActive ? "text-white" : "text-slate-800"}`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`text-[10px] font-medium leading-normal ${isActive ? "text-slate-300" : "text-slate-400"}`}
                        >
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT 4 COLUMNS: FEMALE DOCTOR PORTRAIT IMAGE */}
            <div className="lg:col-span-4 hidden md:block relative self-end  justify-center lg:justify-end h-full min-h-[300px] lg:min-h-[440px] select-none mt-8 lg:mt-0">
              {/* Soft decorative visual background blob behind doctor */}
              <div className="absolute bottom-4 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#6dbb45]/10 to-[#1fa8e8]/15 rounded-full blur-2xl -z-10" />

              {/* Doctor Cutout Frame */}
              <img
                src="/clinic-image-1.png"
                alt="Senior Pulmonology Consultant"
                className="relative object-cover object-top h-[320px] lg:h-[450px] w-auto rounded-xl drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ==========================================================
           BOTTOM SECTION: DUAL HORIZONTAL ROW BLOCKS
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT BLOCK (Lg: 8 Columns) - EXPRESS DIAGNOSTICS */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[36px] shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:shadow-lg transition-shadow duration-300">
            {/* Image Thumbnail inside block */}
            <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl overflow-hidden shrink-0 shadow-sm">
              <img
                src="/clinic-image.png"
                alt="Lung Testing Diagnostics"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Informational Copy & CTA group */}
            <div className="flex-1 space-y-4 text-center sm:text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-[#1fa8e8] tracking-widest block">
                  Clinical Lab
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                  Express Diagnostic Assays & Screenings
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  We run a comprehensive suite of in-house rapid diagnostics
                  including spirometry, peak flow tracking, and oxygen profile
                  panels to provide same-day clinical reports.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center sm:justify-start">
                <button
                  onClick={() => router.push("/contact")}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] hover:shadow-md text-white font-bold text-xs tracking-wide active:scale-95 transition-all cursor-pointer"
                >
                  Schedule Fast Diagnostic Check
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 text-xs font-bold transition-all text-center cursor-pointer"
                >
                  View Test Parameters
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT BLOCK (Lg: 4 Columns) - PILL-SHAPED SOFT COLOR ACCENT */}
          <div className="lg:col-span-4 bg-[#6dbb45]/10 border border-[#6dbb45]/20 rounded-[36px] shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group overflow-hidden">
            {/* Top Row: Info */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase text-[#4d8f2d] tracking-widest block">
                Parameters
              </span>

              {/* Quick Parameter List */}
              <div className="space-y-2.5">
                {[
                  { label: "Spirometry / FEV1", icon: Wind },
                  { label: "Oxygen Saturation (SpO2)", icon: HeartPulse },
                  { label: "Allergy Profiling Markers", icon: ShieldCheck },
                  { label: "CPAP Titration Staging", icon: Moon },
                ].map((item, idx) => {
                  const ListIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-3 py-2 bg-white/70 rounded-xl border border-[#6dbb45]/10 text-slate-700 text-xs font-bold transition-colors hover:bg-white"
                    >
                      <ListIcon className="w-3.5 h-3.5 text-[#4d8f2d]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Row: Accent Link pointing inwards */}
            <div className="pt-4 flex items-center justify-between mt-6 border-t border-[#6dbb45]/20">
              <span className="text-xs font-extrabold text-[#4d8f2d]">
                All Laboratory Tests
              </span>
              <button
                onClick={() => router.push("/services")}
                className="p-2 rounded-full bg-[#6dbb45] text-white hover:bg-[#4d8f2d] group-hover:scale-110 active:scale-95 transition-all shadow-sm flex items-center justify-center cursor-pointer"
                aria-label="View all laboratory checkups"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
