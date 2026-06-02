"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Activity,
  Wind,
  ShieldCheck,
  Sparkles,
  Calendar,
  AlertCircle,
} from "lucide-react";
import Popup from "./Popup";

interface LungsTreatCtaProps {
  onBookClick?: () => void;
  onReadMoreClick?: () => void;
}

export default function LungsTreatCta({
  onBookClick = () => {},
  onReadMoreClick = () => {},
}: LungsTreatCtaProps) {
  const [activeAilment, setActiveAilment] = useState<string | null>(null);

  const [isBookModalOpen, setIsBookModalOpen] = React.useState(false);

  // Lung ailments mapping corresponding to the pointers on our diagram
  const ailments = [
    {
      id: "copd",
      label: "COPD & Emphysema",
      x: "15%",
      y: "35%",
      side: "left",
      details:
        "Chronic inflammation leading to damaged alveoli and airflow obstruction.",
      color: "#1fa8e8",
    },
    {
      id: "asthma",
      label: "Severe Asthma",
      x: "18%",
      y: "65%",
      side: "left",
      details:
        "Hyper-responsive airways causing bronchial spasms and wheezing.",
      color: "#38bdf8",
    },
    {
      id: "ild",
      label: "Lung Fibrosis / ILD",
      x: "82%",
      y: "40%",
      side: "right",
      details:
        "Progressive scarring of interstitial lung tissue restricting diffusion capacity.",
      color: "#6dbb45",
    },
    {
      id: "apnea",
      label: "Upper Airway Collapse",
      x: "50%",
      y: "15%",
      side: "center",
      details:
        "Severe sleep apnea airway blockage causing oxygen desaturation.",
      color: "#f59e0b",
    },
  ];

  return (
    <>
      <section className="relative py-14 px-4 overflow-hidden bg-white text-slate-900">
        {/* Background soft lighting */}
        <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-[#1fa8e8]/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[120px] -z-10" />

        {/* Main Wide Theme Gradient Banner Band matching image_a7b6e2.jpg layout */}
        <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#1fa8e8] via-[#1093d5] to-[#6dbb45] text-white overflow-hidden shadow-2xl relative">
          {/* Abstract organic geometric grid overlays inside the banner */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          {/* Glow ambient background rings */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />

          {/* Outer responsive layout wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10 px-6 py-12 sm:p-16">
            {/* ================= LEFT SECTION: COP & CTA ACTIONS ================= */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 self-center lg:self-start backdrop-blur-sm">
                <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-100">
                  Pulmonary Staging & Intervention
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
                Having A Breathing Problem? <br />
                <span className="text-emerald-100 drop-shadow-sm">
                  Try Our Therapy Today
                </span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Don't compromise on shortness of breath, chronic coughing, or
                interrupted sleeping patterns. Get diagnosed by Delhi's top
                interventional chest specialists with targeted therapies.
              </p>

              {/* CTA Elements mirroring image_a7b6e2.jpg layout */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => {
                    setIsBookModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0c7dc2] hover:bg-slate-50 font-extrabold text-sm tracking-wide shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Make Appointment <Calendar className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* ================= CENTER SECTION: ANATOMICAL INTERACTIVE LUNGS ================= */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[360px] select-none">
              {/* Interactive Disease Tooltip display */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[280px] z-20 transition-all duration-300">
                {activeAilment ? (
                  <div className="bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-xl text-center animate-fadeIn text-xs">
                    <h4 className="font-bold text-[#1fa8e8] flex items-center justify-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {ailments.find((a) => a.id === activeAilment)?.label}
                    </h4>
                    <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                      {ailments.find((a) => a.id === activeAilment)?.details}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-center border border-white/10 text-[10px] uppercase font-bold tracking-wider text-emerald-100 animate-pulse">
                    Hover hotspots to explore lung disease staging
                  </div>
                )}
              </div>

              {/* Standard Anatomical SVG Lungs Illustration Wrapper */}
              <div className="relative w-72 h-72 flex items-center justify-center mt-6">
                {/* Custom SVG Lungs */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-56 h-56 text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] filter"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Trachea Airway */}
                  <path
                    d="M100,20 L100,60"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  <path d="M96,30 L104,30" opacity="0.6" />
                  <path d="M96,40 L104,40" opacity="0.6" />
                  <path d="M96,50 L104,50" opacity="0.6" />

                  {/* Bronchus bifurcation */}
                  <path
                    d="M100,60 Q100,75 80,85 M100,60 Q100,75 120,85"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.8"
                  />

                  {/* Left Lung anatomical path */}
                  <path
                    d="M102,68 Q135,70 148,95 C160,115 158,145 138,165 C122,180 102,175 101,152 C100,132 101,110 102,68 Z"
                    fill={
                      activeAilment === "ild"
                        ? "rgba(109,187,69,0.3)"
                        : "rgba(255,255,255,0.15)"
                    }
                    stroke={
                      activeAilment === "ild" ? "#6dbb45" : "currentColor"
                    }
                    strokeWidth={activeAilment === "ild" ? "2.5" : "1.5"}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setActiveAilment("ild")}
                    onMouseLeave={() => setActiveAilment(null)}
                  />

                  {/* Right Lung anatomical path */}
                  <path
                    d="M98,68 Q65,70 52,95 C40,115 42,145 62,165 C78,180 98,175 99,152 C100,132 99,110 98,68 Z"
                    fill={
                      activeAilment === "copd" || activeAilment === "asthma"
                        ? "rgba(31,168,232,0.3)"
                        : "rgba(255,255,255,0.15)"
                    }
                    stroke={
                      activeAilment === "copd" || activeAilment === "asthma"
                        ? "#1fa8e8"
                        : "currentColor"
                    }
                    strokeWidth={
                      activeAilment === "copd" || activeAilment === "asthma"
                        ? "2.5"
                        : "1.5"
                    }
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setActiveAilment("copd")}
                    onMouseLeave={() => setActiveAilment(null)}
                  />

                  {/* Heart Notch representation (Middle overlay) */}
                  <circle
                    cx="100"
                    cy="118"
                    r="14"
                    fill="rgba(255,255,255,0.08)"
                    stroke="currentColor"
                    strokeDasharray="3 3"
                  />
                </svg>

                {/* Floating hotspot indicators connected to ailments array */}
                {ailments.map((pt) => {
                  const isActive = activeAilment === pt.id;
                  return (
                    <div
                      key={pt.id}
                      className="absolute"
                      style={{ left: pt.x, top: pt.y }}
                    >
                      {/* Pulsing Hotspot center point */}
                      <div className="relative flex items-center justify-center">
                        <button
                          onMouseEnter={() => setActiveAilment(pt.id)}
                          onMouseLeave={() => setActiveAilment(null)}
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 relative z-30 focus:outline-none ${
                            isActive
                              ? "bg-white text-slate-900 scale-125 shadow-lg"
                              : "bg-slate-900 text-white border-2 border-white hover:scale-110"
                          }`}
                          aria-label={`Highlight ${pt.label}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        </button>
                        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-white/40 opacity-75 z-10" />
                      </div>

                      {/* Left/Right Annotation Label card matching image_a7b6e2.jpg labels */}
                      <div
                        className={`absolute whitespace-nowrap z-20 top-1/2 -translate-y-1/2 transition-all duration-300 hidden sm:block ${
                          pt.side === "left"
                            ? "right-7 text-right"
                            : pt.side === "right"
                              ? "left-7 text-left"
                              : "top-7 left-1/2 -translate-x-1/2 text-center"
                        }`}
                      >
                        <span
                          className={`inline-block text-[11px] font-extrabold tracking-wide px-3 py-1.5 rounded-full border shadow-md transition-all ${
                            isActive
                              ? "bg-white text-slate-900 border-white scale-105"
                              : "bg-slate-900/80 backdrop-blur-sm text-slate-100 border-white/10 hover:bg-slate-900"
                          }`}
                          onMouseEnter={() => setActiveAilment(pt.id)}
                          onMouseLeave={() => setActiveAilment(null)}
                        >
                          {pt.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= RIGHT SECTION: CLINICIAN ILLUSTRATION COVER ================= */}
            {/* Matches the doctor profile frame pointing at spine in image_a7b6e2.jpg */}
            <div className="lg:col-span-3 flex justify-center items-end relative h-full min-h-[320px] self-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-[240px] aspect-[3/4] bg-white/10 border border-white/20 rounded-[32px] overflow-hidden backdrop-blur-sm shadow-xl p-5 flex flex-col justify-between group transition-all hover:border-white/40">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#6dbb45]/20 text-emerald-100 text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-emerald-300 animate-spin" />{" "}
                    Specialist Led
                  </span>
                  <h4 className="text-base font-extrabold leading-tight text-white">
                    Evidence-Based Respiratory Medicine
                  </h4>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Tailored patient therapies directed by Dr. Manish Aggarwal
                    and associates.
                  </p>
                </div>

                {/* Graphical Avatar Frame pointing inwards */}
                <div className="relative mt-4 bg-white/5 rounded-2xl p-3 border border-white/10 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-white/20 to-[#6dbb45]/30 p-0.5 shrink-0">
                    <div className="w-full h-full rounded-full bg-slate-900/40 flex items-center justify-center text-white">
                      <svg
                        className="w-7 h-7 opacity-85"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      Dr. Manish Aggarwal
                    </h5>
                    <p className="text-[9px] text-white font-extrabold uppercase mt-0.5">
                      Senior Pulmonologist
                    </p>
                  </div>
                </div>
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
