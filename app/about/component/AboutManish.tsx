"use client";

import React, { useState } from "react";
import {
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  Calendar,
  Briefcase,
  Sparkles,
  Plane,
  ArrowRight,
  ShieldCheck,
  Globe,
  Stethoscope,
} from "lucide-react";
import Popup from "@/app/component/website/Popup";

export default function AboutManish() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const qualifications = [
    { title: "MBBS", institution: "Delhi University" },
    { title: "MD - TB & Chest", institution: "Delhi University" },
    {
      title: "MD - Tuberculosis and Chest Diseases",
      institution: "Delhi University",
    },
    { title: "FRCP", institution: "Royal College of Physicians, Glasgow (UK)" },
  ];

  const highlights = [
    {
      title: "28 Years Experience",
      desc: "Distinguished career in Pulmonology, general medicine, and critical respiratory care.",
      icon: Calendar,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
    {
      title: "FRCP (Glasgow, UK)",
      desc: "Gained invaluable clinical experience in medicine in England and awarded Fellowship of the Royal College of Physicians.",
      icon: Award,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      title: "Verified Registration",
      desc: "Medical Registration fully verified by official Indian & Delhi Medical Councils.",
      icon: ShieldCheck,
      color: "from-[#1fa8e8] to-[#6dbb45]",
    },
  ];

  return (
    <>
      <section
        id="dr-manish-profile"
        className="relative py-20 md:py-28 px-4 bg-white overflow-hidden text-slate-900"
      >
        {/* Decorative Brand Background Ambient Glows */}
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#1fa8e8]/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[100px] -z-10" />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-50" />

        <div className="max-w-7xl mx-auto space-y-16">
          {/* ==========================================================
           MAIN GRID: PROFILE FRAME LEFT & EDITORIAL DETAILS RIGHT
           ========================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* --- LEFT COLUMN: MEDICAL CARD & IMAGE PORTRAIT --- */}
            <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-stretch">
              {/* Elegant Doctor Profile Frame */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl group mx-auto">
                {!imgError ? (
                  <img
                    src="/dr-image.png"
                    alt="Dr. Manish Aggarwal"
                    onError={() => setImgError(true)}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1fa8e8]/10 via-[#0c7dc2]/5 to-[#6dbb45]/10 flex flex-col items-center justify-center p-8 text-center text-slate-500">
                    <Stethoscope className="w-16 h-16 text-[#1fa8e8] mb-4 animate-bounce" />
                    <span className="font-extrabold text-lg text-slate-800">
                      Dr. Manish Aggarwal
                    </span>
                    <span className="text-xs font-bold text-[#6dbb45] mt-1 uppercase tracking-widest">
                      Senior Chest Physician
                    </span>
                  </div>
                )}

                {/* Verified Badge overlay */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-[10px] font-black text-[#0c7dc2] uppercase tracking-wider shadow-md flex items-center gap-1.5 z-10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6dbb45]" /> Meet
                  the doc
                </div>

                {/* Design Gradient overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Verification & Working Stats Box */}
              <div className="w-full max-w-[420px] bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-3.5 mx-auto">
                <div className="flex justify-between items-center text-xs border-b border-slate-200/50 pb-2.5">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">
                    Experience Status
                  </span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    28 Years ✓
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">
                    Clinical Affiliations
                  </span>
                  <span className="font-bold text-slate-700 text-right max-w-[200px]">
                    Aeromed International Rescue & prestige institutes
                  </span>
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: CLINICAL STORY & DETAILS --- */}
            <div className="lg:col-span-7 space-y-8">
              {/* Header / Subtitle */}
              <div className="space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Clinic
                  Director
                </div>
                <h2 className="text-3xl sm:text-4.5xl font-black text-slate-950 tracking-tight leading-tight">
                  About Dr. Manish Aggarwal
                </h2>
                <p className="text-base sm:text-lg font-bold text-[#6dbb45] leading-snug">
                  Senior Chest Physician & Interventional Pulmonologist
                </p>
              </div>

              {/* Editorial Bio Description */}
              <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                <p>
                  Dr. Manish Aggarwal is a highly distinguished and experienced
                  pulmonologist with an impressive clinical career spanning over{" "}
                  <span className="font-bold text-slate-800">
                    28 years overall
                  </span>
                  . He received his MBBS and MD qualifications from the
                  prestigious{" "}
                  <span className="font-bold text-slate-800">
                    Delhi University
                  </span>
                  . Following this, he spent valuable years in England gaining
                  advanced clinical skills in internal medicine and pulmonology
                  before being awarded the prestigious{" "}
                  <span className="font-bold text-[#0c7dc2]">
                    FRCP (Fellowship of the Royal College of Physicians) from
                    Glasgow, UK
                  </span>
                  .
                </p>
                <p>
                  Dr. Aggarwal is associated with numerous prestigious clinical
                  institutions in India and abroad, and has actively contributed
                  to medical science through presenting papers at major national
                  and international respiratory conferences.
                </p>
              </div>

              {/* Highlights Grid Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between hover:border-[#1fa8e8]/30 transition-all duration-300"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md mb-4`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-medium leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Qualifications Timeline List */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1fa8e8]" /> Academic
                  Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualifications.map((qual, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-100 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#6dbb45]/10 text-[#4d8f2d] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h4 className="text-xs font-black text-slate-800 leading-tight">
                          {qual.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-bold mt-0.5">
                          {qual.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
           AEROMED CASE CARD: AIR AMBULANCE GLOBAL TRANSPORT RESCUE
           ========================================================== */}
          <div className="relative bg-gradient-to-r from-[#0c7dc2] via-[#1fa8e8] to-[#6dbb45] text-white p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden">
            {/* Subtle background globes & plane waves */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-emerald-300/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Copy details */}
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 animate-spin duration-[10000ms]" />{" "}
                  Global Air Medical Transport
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  Aeromed International Rescue Services
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Dr. Manish Aggarwal is the proud founder director of{" "}
                  <span className="font-extrabold text-white">
                    Aeromed International Rescue Service Pvt Ltd
                  </span>
                  . This leading organization is highly acclaimed for providing
                  secure, rapid, and intensive patient air ambulance
                  transportation across major global medical corridors.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-100">
                    <Plane className="w-4 h-4" /> Global Evacuation Corridor
                  </span>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-100">
                    <CheckCircle2 className="w-4 h-4" /> Advanced Air Critical
                    Care
                  </span>
                </div>
              </div>

              {/* CTA action trigger */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0c7dc2] hover:bg-slate-50 font-extrabold text-sm tracking-wide shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Schedule Clinic Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popup
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
}
