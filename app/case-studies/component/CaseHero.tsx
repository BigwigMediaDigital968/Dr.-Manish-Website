"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Activity,
  Compass,
  Star,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Wind,
} from "lucide-react";
import Popup from "@/app/component/website/Popup";
import Link from "next/link";

export default function CaseHero() {
  const [imgError, setImgError] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  // Stats data directly mapped from image_cea4d4.jpg but customized with your exact statistics
  const clinicStats = [
    {
      id: 1,
      value: "24+",
      label: "Years Experience",
      icon: AwardIcon,
      color: "text-[#1fa8e8]",
    },
    {
      id: 2,
      value: "5,000+",
      label: "Bronchoscopies",
      icon: ActivityIcon,
      color: "text-[#6dbb45]",
    },
    {
      id: 3,
      value: "3,000+",
      label: "EBUS Performed",
      icon: CompassIcon,
      color: "text-[#1fa8e8]",
    },
    {
      id: 4,
      value: "4.9",
      label: "Google Rating",
      icon: StarIcon,
      color: "text-amber-500",
      hasStars: true,
    },
  ];

  return (
    <>
      <section
        id="case-hero"
        className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-20 flex items-center justify-center bg-slate-50/50 overflow-hidden text-slate-900"
      >
        {/* Decorative Brand Ambient Background Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1fa8e8]/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[110px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 space-y-16 relative z-10">
          {/* --- MAIN HERO ROW: SPLIT TEXT & IMAGE LAYOUT --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* ================= LEFT COLUMN: HERO VALUE PROPOSITION ================= */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Tagline / Department Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/20 self-center lg:self-start">
                <Sparkles className="w-3.5 h-3.5 text-[#1fa8e8] animate-pulse" />{" "}
                Clinical Evidence & Staging
              </div>

              {/* Main Catchy Clinical Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-slate-950 tracking-tight leading-[1.12]">
                Proven Pulmonology <br />
                <span className="bg-gradient-to-r from-[#1fa8e8] via-[#0c7dc2] to-[#6dbb45] bg-clip-text text-transparent">
                  Outcomes Start Here
                </span>
              </h1>

              {/* Structured Medical Copy Block */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Explore documented diagnostic case files and clinical results
                under Dr. Manish Aggarwal. We combine advanced bronchoscopy,
                Level 1 sleep diagnostics, and NABL-compliant respiratory
                monitoring to treat common and complex lung diseases.
              </p>

              {/* CTAs strictly matching the visual weight of image_cea4d4.jpg */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="#case-studies"
                  className="group w-full sm:w-auto px-8 py-4 rounded-full bg-[#0c7dc2] hover:bg-[#1fa8e8] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-sky-200/50 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Case Studies
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full sm:w-auto cursor-pointer px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Compliance Tagline */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider pt-4">
                <ShieldCheck className="w-4 h-4 text-[#6dbb45]" /> NABL
                Accredited Laboratory Standards
              </div>
            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE CLINICAL PHOTOGRAPH ================= */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              {/* Visual Backing Accent Blob */}
              <div className="absolute bottom-4 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#6dbb45]/10 to-[#1fa8e8]/10 rounded-full blur-3xl -z-10" />

              {/* Frame matching portrait consulting cutout in image_cea4d4.jpg */}
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200 group">
                {!imgError ? (
                  <img
                    src="/case-hero.png"
                    alt="Dr. Manish Aggarwal explaining diagnostic report to a patient"
                    onError={() => setImgError(true)}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1fa8e8]/5 via-white to-[#6dbb45]/5 flex flex-col items-center justify-center p-8 text-center text-slate-400">
                    <Wind className="w-12 h-12 text-[#1fa8e8] mb-3 animate-pulse" />
                    <span className="font-extrabold text-sm text-slate-800">
                      Advanced Respiratory Consultation Suite
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      Delhi Lung & Bronchoscopy Center
                    </span>
                  </div>
                )}

                {/* Dynamic Tag Overlay */}
                <div className="absolute top-5 right-5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-[10px] font-black text-[#0c7dc2] uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6dbb45]" />{" "}
                  Evidence-Based Medicine
                </div>

                {/* Patient Friendly Status Floating Overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-lg flex items-center justify-between gap-3 z-10 transition-transform group-hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#6dbb45]/15 flex items-center justify-center text-[#6dbb45]">
                      <FileText className="w-4 h-4 animate-bounce" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#6dbb45] tracking-widest block">
                        Staging Verified
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        EBUS & Airway Procedures
                      </span>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                </div>

                {/* Gradient cover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* --- STATS PANEL BANNER (Exactly replicating bottom banner layout in image_cea4d4.jpg) --- */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl shadow-slate-100 grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-4 divide-y-0 md:divide-y-0 md:divide-x divide-slate-100">
            {clinicStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex-1 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 pt-6 md:pt-0 first:pt-0 md:first:pt-0 md:pl-6 first:pl-0"
                >
                  <div
                    className={`w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${stat.color} shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-center sm:justify-start gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {stat.value}
                      </span>
                      {stat.hasStars && (
                        <div className="flex items-center gap-0.5 ml-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star
                              key={idx}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Renders the interactive Appointment Modal Popup Component */}
      <Popup
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
}

/* ==========================================================
   VISUAL STATIC ICON SUITE REPLACING DYNAMIC SVG
   ========================================================== */
function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
