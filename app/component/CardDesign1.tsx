"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Compass,
  Globe,
  HeartHandshake,
  BookOpen,
  Activity,
  Award,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Calendar,
  Layers,
  Check,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

interface WhyChooseUsProps {
  onBookClick?: () => void;
}

export default function WhyChooseUs({
  onBookClick = () => {},
}: WhyChooseUsProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Advanced Interventional Pulmonology",
      icon: Compass,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
      badge: "Procedure Suite",
      highlights: [
        "EBUS (Endobronchial Ultrasound)",
        "Rigid Bronchoscopy & Airway Stenting",
        "Medical Thoracoscopy & Cryobiopsy",
        "Indwelling Pleural Catheter (IPC)",
      ],
      desc: "Specialized, minimally invasive diagnostic and therapeutic airway interventions utilizing cutting-edge bronchoscopy pathways.",
    },
    {
      id: 2,
      title: "International Clinical Exposure",
      icon: Globe,
      color: "from-[#6dbb45] to-[#4d8f2d]",
      badge: "FRCP (Glasgow, UK)",
      highlights: [
        "Clinical practice experience in England",
        "FRCP (Glasgow) prestigious Fellowship",
        "Evidence-based clinical guidelines",
        "Globally aligned lung healthcare",
      ],
      desc: "Bringing world-class respiratory training and practice credentials to Indian patients, ensuring ethical and advanced treatment.",
    },
    {
      id: 3,
      title: "Comprehensive Lung Care",
      icon: ShieldCheck,
      color: "from-[#1fa8e8] to-[#6dbb45]",
      badge: "Full Scope Care",
      highlights: [
        "Severe Asthma & COPD management",
        "Pulmonary Fibrosis & ILD staging",
        "Tuberculosis & Lung Cancer screen",
        "Chronic Cough diagnostics",
      ],
      desc: "A singular destination for assessing and managing a comprehensive list of acute, chronic, and post-viral pulmonary diseases.",
    },
    {
      id: 4,
      title: "Strong Academic Involvement",
      icon: BookOpen,
      color: "from-[#0f172a] to-[#1e293b]",
      badge: "Clinical Mentor",
      highlights: [
        "Hands-on procedural workshops",
        "Teaching advanced bronchoscopy",
        "Academic training guidelines",
        "Continuous clinical evolution",
      ],
      desc: "Active leadership in mentoring the next generation of pulmonologists, committing to academic excellence and learning updates.",
    },
    {
      id: 5,
      title: "Advanced Diagnostic Approach",
      icon: Activity,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
      badge: "NABL Compliant Lab",
      highlights: [
        "Pulmonary Function Testing (PFT)",
        "HRCT Chest visual interpretation",
        "EBUS-TBNA & precise biopsies",
        "Ultrasound-guided pleural diagnostics",
      ],
      desc: "Ensuring high-tier diagnostic accuracy from the very first consultation, utilizing non-invasive to advanced interventional screens.",
    },
    {
      id: 6,
      title: "Patient-Centered & Ethical Care",
      icon: HeartHandshake,
      color: "from-[#6dbb45] to-[#4d8f2d]",
      badge: "Ethical Practice",
      highlights: [
        "Transparent patient communication",
        "Custom personalized care mapping",
        "Evidence-based medical parameters",
        "Long-term monitoring checks",
      ],
      desc: "Placing patient safety, communication clarity, and high-fidelity diagnostic evidence at the core of every clinical decision.",
    },
    {
      id: 7,
      title: "Corona Warrior Support",
      icon: Award,
      color: "from-[#ffb020] to-[#e08b00]",
      badge: "Pandemic Response",
      highlights: [
        "Treated 1,000+ critical patients",
        "Oxygen management & guidance",
        "Hospitalization coordination help",
        "Post-COVID recovery checkups",
      ],
      desc: "Honored with the Corona Warrior Certificate for rendering active support and lung counselling during the COVID-19 waves.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-24 px-4 bg-slate-50/50 overflow-hidden text-slate-900 border-t border-slate-200/50"
    >
      {/* Embedded Styles for smooth UI floating & icon pulsing animations */}
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-subtle-bounce {
          animation: subtle-bounce 4s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>

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

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950">
              Advanced Pulmonology
              <br />
              <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                Sleep Disorder Care in Delhi
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                <span className="text-slate-900 font-extrabold">
                  Dr. Manish Aggarwal
                </span>
                , Department of Chest Disease and Interventional Pulmonology, Max Hospital also practicing at his private clinic in Pitampura (Currently in Shalimar Bagh), Delhi 
                dedicated to provide evidence-based, ethical,
                and patient-focused respiratory care for both common and complex
                lung diseases.
              </p>
              <p className="text-slate-500 font-normal">
                With extensive clinical experience in respiratory medicine,
                advanced bronchoscopy, pleural procedures, and interventional
                pulmonology, the clinic combines modern diagnostic expertise
                with compassionate long-term patient care.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Portrait Block with Floating Badge (5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Frame Block */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl border-4 border-white overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
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
                  Principal Director
                </span>
                <p className="text-xs font-black text-slate-800 leading-none">
                  Dr. Manish Aggarwal
                </p>
                <span className="text-[10px] text-[#6dbb45] font-bold">
                  FRCP (Glasgow, UK)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
           MIDDLE SECTION: WHAT MAKES OUR CARE DIFFERENT (7-Card Grid)
           ========================================================== */}
        <div className="space-y-8">
          <div className="text-center sm:text-left border-b border-slate-200 pb-4">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">
              What Makes Our Care Different?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Explore our core methodologies, specialized interventional suites,
              and dedicated medical response teams.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((card, idx) => {
              const Icon = card.icon;
              const isSelected = activeFeature === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveFeature(isSelected ? null : card.id)}
                  className={`group bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-xl hover:border-[#1fa8e8]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "ring-2 ring-[#1fa8e8]/40 shadow-sky-100/50"
                      : ""
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon Frame & Clinical Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Title & Desc */}
                    <div className="space-y-2">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#0c7dc2] transition-colors leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                        {card.desc}
                      </p>
                    </div>

                    {/* Interactive Highlights Accordion (Click card to toggle details list) */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${isSelected ? "max-h-[220px] pt-4 border-t border-slate-100" : "max-h-0"}`}
                    >
                      <ul className="space-y-2">
                        {card.highlights.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs font-bold text-slate-600"
                          >
                            <span className="w-4 h-4 rounded-full bg-emerald-50 text-[#6dbb45] flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Micro link tag indicator */}
                  <div className="pt-4 mt-6 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-[#1fa8e8] group-hover:text-[#0c7dc2] transition-colors">
                    <span>
                      {isSelected
                        ? "Collapse Checklist"
                        : "Explore Technical Checklist"}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${isSelected ? "rotate-90 text-[#6dbb45]" : "group-hover:translate-x-1"}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================
           BOTTOM SECTION: OUR GOAL SUMMARY CTA CARD
           ========================================================== */}
        <div className="relative bg-gradient-to-r from-[#0c7dc2] via-[#1fa8e8] to-[#6dbb45] text-white p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden mt-12">
          {/* Subtle background graphics */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-emerald-300/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Copy block */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" /> Direct Clinical Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Our Ultimate Care Goal
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-2xl font-semibold">
                To deliver the highest tier of advanced yet deeply compassionate
                respiratory diagnostics and therapeutic interventions. We
                prioritize minimally invasive diagnostics, immediate symptom
                relief, and custom guidelines for long-term lung wellness.
              </p>
            </div>

            {/* CTA Trigger Group */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 w-full">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0c7dc2] hover:bg-slate-50 font-black text-sm tracking-wide shadow-lg active:scale-95 transition-all text-center"
              >
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
