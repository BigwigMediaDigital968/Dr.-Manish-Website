"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  Wind,
  Activity,
  Layers,
  ShieldAlert,
  Timer,
  Moon,
  Sparkles,
  ArrowRight,
  Phone,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { useModal } from "@/app/Contexts/ModalContext";

export default function WhoSeeUs() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const {openModal}  = useModal();

  // High-fidelity clinical indicators matching the exact user list
  const indicators = [
    {
      id: 1,
      title: "Persistent Cough",
      short: "Productive or dry cough lasting more than 3 to 4 weeks",
      desc: "A lingering cough that has failed to resolve after standard courses of antibiotics or primary medication. Requires detailed spirometry or airway inspection.",
      icon: Activity,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
      badge: "High Priority",
      action: "Specialized Spirometry & OPD Consultation",
    },
    {
      id: 2,
      title: "Unexplained Breathlessness",
      short: "Shortness of breath during basic tasks",
      desc: "Difficulty breathing during routine activities like walking, climbing stairs, or light household work, without any obvious cause. May indicate an underlying airway or lung capacity issue.",
      icon: Wind,
      color: "from-[#6dbb45] to-[#4d8f2d]",
      badge: "Warning Indicator",
      action: "Pulmonary Function Test (PFT) & OPD Consultation"
    },
    {
      id: 3,
      title: "Abnormal Chest X-ray / CT",
      short: "Unexplained shadows, spots, or nodules",
      desc: "Incidental findings on imaging that need further clinical correlation to rule out infection, scarring, or a growth. Timely evaluation prevents delayed diagnosis.",
      icon: Layers,
      color: "from-[#0c7dc2] to-[#1289cf]",
      badge: "Requires Staging",
      action: "CT-Guided Review & Specialist Staging Consultation"
    },
    {
      id: 4,
      title: "Suspected or Resistant TB",
      short: "Non-responsive tuberculosis symptoms",
      desc: "Persistent fever, cough, or weight loss despite ongoing TB medication, or symptoms that resemble TB but haven't been confirmed. Needs a focused diagnostic review.",
      icon: ShieldAlert,
      color: "from-[#6dbb45] to-[#0c7dc2]",
      badge: "TB Specialist Doctor Delhi Review",
      action: "Bronchoscopy-Guided Sampling & TB Panel Review"
    },
    {
      id: 5,
      title: "Long-Term Smoking History",
      short: "Ages 40+ with over 10 years of smoking",
      desc: "Extended smoking exposure gradually narrows the airways and reduces lung capacity, often without noticeable symptoms in the early stages. Regular screening catches damage before it becomes irreversible.",
      icon: Timer,
      color: "from-slate-800 to-slate-950",
      badge: "COPD Specialist in Delhi Screening Advised",
      action: "Spirometry & Low-Dose CT Lung Screening"
    },
    {
      id: 6,
      title: "Severe Snoring & Fatigue",
      short: "Snoring paired with gasping for air",
      desc: "Loud snoring, breathing pauses, or gasping during sleep followed by daytime tiredness or poor concentration. A common sign of obstructive sleep apnea that affects heart and lung health over time.",
      icon: Moon,
      color: "from-amber-500 to-orange-600",
      badge: "Sleep Lab Check",
      action: "Home Sleep Study & Sleep Medicine Consultation"
    },
  ];

  return (
    <section
      id="who-should-see-us"
      className="relative py-14 px-4 bg-slate-50 overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Decorative Brand Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#1fa8e8]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-50" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* --- HEADER BLOCK --- */}
        <div className="text-center space-y-4 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/25">
            <AlertTriangle className="w-3.5 h-3.5 animate-pulse text-[#0c7dc2]" />{" "}
            Who should see us?
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
            When to Consult the Best Pulmonologist in Delhi
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">
            Navigating respiratory symptoms can be alarming. If you, a family member, or a patient under your care is experiencing any of the following indicators, an immediate consultation with a respiratory specialist in Delhi is highly recommended. Dr. Manish Aggarwal, a trusted chest specialist in Delhi, ensures early and accurate diagnosis for every patient.

          </p>
        </div>

        {/* --- MAIN SPLIT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: DIAGNOSTIC MOCKUP & CTA ================= */}
          <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-stretch">
            {/* Elegant Diagnostic Image Card */}
            <div className="relative w-full max-w-[420px] aspect-[1/1] bg-slate-100 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl group mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
                alt="Lung Diagnostic CT Imaging Scan"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dynamic Overlay Tags */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-[10px] font-black text-[#0c7dc2] uppercase tracking-wider shadow-md flex items-center gap-1.5 z-10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6dbb45]" /> Lung Diagnostic CT Imaging Scan.<br /> Same-Day PFT Assays Available.
              </div>

              {/* Bottom Info Floating Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-lg space-y-1.5 z-10">
                <span className="text-[9px] font-black uppercase text-[#6dbb45] tracking-widest block">
                  Clinical Advice
                </span>
                <p className="text-xs font-bold text-slate-800 leading-snug">
                   Early intervention prevents irreversible parenchymal damage and airway remodeling.
                </p>
              </div>

              {/* Design Gradient overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Quick Consultation Portal Card */}
            <div className="w-full max-w-[420px] bg-gradient-to-tr from-[#0c7dc2] to-[#1fa8e8] text-white p-6 rounded-[32px] shadow-xl relative overflow-hidden mx-auto">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-300" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-100">
                    Direct Booking
                  </span>
                </div>

                <h3 className="text-lg font-extrabold tracking-tight leading-snug">
                  Have any of these indicators?
                </h3>

                <p className="text-xs text-white/95 leading-relaxed font-semibold">
                  Reserve a priority slot for advanced diagnostics under Dr.
                  Manish Aggarwal. We provide same-day spirometry and next-day
                  sleep study device dispatch.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                  onClick={openModal}
                    className="w-full sm:w-auto px-6 text-center py-3 rounded-xl bg-white text-[#0c7dc2] hover:bg-[#6dbb45] hover:text-white font-black text-xs uppercase tracking-wide shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Book Diagnosis
                  </button>
                  <a
                    href="tel:+919899554095"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Helpdesk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE SCENARIOS GRID ================= */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-left mb-6 px-1">
              <span className="text-xs font-black uppercase text-[#1fa8e8] tracking-widest block">
                Clinical Check
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-1">
                Evaluate Your Respiratory Status with a Lung Specialist
              </h3>
            </div>

            <div className="space-y-4">
              {indicators.map((item) => {
                const IconComponent = item.icon;
                const isSelected = activeCard === item.id;

                return (
                  <div
                    key={item.id}
                    className={`group rounded-3xl border p-5 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#1fa8e8]/30 shadow-lg shadow-sky-100/40 ring-1 ring-[#1fa8e8]/15"
                        : "bg-white/80 border-slate-100 hover:border-slate-200 shadow-sm"
                    }`}
                    onClick={() => setActiveCard(isSelected ? null : item.id)}
                  >
                    {/* Header Row: Icon, Title & Badge */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-105"}`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4
                            className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors duration-200 ${isSelected ? "text-[#0c7dc2]" : "text-slate-800"}`}
                          >
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-bold mt-0.5">
                            {item.short}
                          </p>
                        </div>
                      </div>

                      {/* Dropdown / Selection Indicator badge */}
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-50 text-slate-400 font-sans hidden sm:inline-block">
                          {item.badge}
                        </span>
                        <span
                          className={`p-1 rounded-lg transition-all duration-300 ${
                            isSelected
                              ? "bg-[#1fa8e8]/10 text-[#0c7dc2] rotate-180"
                              : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Smooth Expandable Context details */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isSelected
                          ? "max-h-[200px] mt-4 pt-4 border-t border-slate-100/80 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-wider text-[#6dbb45]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>
                          Recommended action: {item.action}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest animate-pulse pt-2">
              Click symptoms above to view detailed clinical recommendations from the best pulmonologist in Delhi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
