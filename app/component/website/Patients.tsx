"use client";

import React, { useState } from "react";
import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Award,
  Activity,
  Check,
  ArrowRight,
  Users,
  FileCheck,
  Heart,
  Calendar,
  MessageSquare,
  Thermometer,
  ShieldAlert,
} from "lucide-react";
import Popup from "./Popup";

interface PatientsProps {
  onBookClick?: () => void;
}

export default function Patients() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const ethicalPoints = [
    {
      id: 1,
      title: "Clear Patient Communication",
      desc: "Transparent discussions about diagnostic parameters, treatment pathways, and rehabilitation progress.",
      icon: MessageSquare,
      color: "from-sky-400 to-sky-600",
      bgLight: "bg-sky-50/60",
    },
    {
      id: 2,
      title: "Personalized Treatment Planning",
      desc: "Every pulmonary action plan is tailored to the patient's biological profile, severe triggers, and lifestyle goals.",
      icon: Heart,
      color: "from-emerald-400 to-emerald-600",
      bgLight: "bg-emerald-50/60",
    },
    {
      id: 3,
      title: "Evidence-Based Decisions",
      icon: ShieldCheck,
      desc: "Aligning diagnostic results directly with current GOLD and international respiratory standards.",
      color: "from-indigo-400 to-indigo-600",
      bgLight: "bg-indigo-50/60",
    },
    {
      id: 4,
      title: "Long-Term Health Monitoring",
      desc: "Proactive tracking of lung metrics over months to manage progressive illnesses and prevent emergency relapses.",
      icon: Activity,
      color: "from-amber-400 to-amber-600",
      bgLight: "bg-amber-50/60",
    },
    {
      id: 5,
      title: "Compassionate & Ethical Practice",
      desc: "Upholding absolute medical integrity, minimizing unnecessary prescriptions, and prioritizing patients' overall welfare.",
      icon: HeartHandshake,
      color: "from-rose-400 to-rose-600",
      bgLight: "bg-rose-50/60",
    },
  ];

  const goalBullets = [
    "Accurate treatment parameters with modern spirometry & sleep lab test.",
    "Focus on minimally invasive bronchial and treatment procedures (EBUS).",
    "Immediate symptom relief matched with systematic sleep disorder improvement.",
  ];

  return (
    <>
      <section
        id="patient-care-legacy"
        className="relative py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden text-slate-900 border-t border-slate-100"
      >
        {}
        <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        .card-shadow-transition {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-shadow-transition:hover {
          box-shadow: 0 22px 40px -15px rgba(109, 187, 69, 0.12);
        }
      `}</style>

        {/* Brand Ambient Color Glows */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#1fa8e8]/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[110px] -z-10 pointer-events-none" />

        {/* Visual background grid layout structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-40" />

        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {/* ==========================================================
           1. ETHICAL AND PATIENT-CENTERED CARE SECTION
           ========================================================== */}
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center max-w-5xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-black uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#1fa8e8]" /> Professional
                Philosophy
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-none">
                Patient-Centered &{" "}
                <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                  Ethical Medical Care
                </span>
              </h2>

              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Our clinical model at Delhi Lung & Bronchoscopy Centre ensures complete
                clinical clarity, deep-rooted empathy, and evidence-driven
                decisions for long-term health improvements.
              </p>
            </div>

            {}
            {/* Smaller, grid-aligned cards with optimized visual tokens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {ethicalPoints.map((point) => {
                const Icon = point.icon;
                const isHovered = hoveredCard === point.id;

                return (
                  <div
                    key={point.id}
                    onMouseEnter={() => setHoveredCard(point.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group bg-white border rounded-[30px] p-5 shadow-sm card-shadow-transition flex flex-col justify-between cursor-default ${
                      isHovered
                        ? "border-[#6dbb45]/30 -translate-y-1 scale-[1.02]"
                        : "border-slate-100/80"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Row Icon Frame */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${point.color} text-white flex items-center justify-center shadow-md transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                        >
                          <Icon className="w-4.5 h-4.5" />
                        </div>

                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isHovered
                              ? "bg-[#6dbb45] scale-125 animate-ping"
                              : "bg-slate-200"
                          }`}
                        />
                      </div>

                      {/* Content Details */}
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#0c7dc2] transition-colors duration-200">
                          {point.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 leading-normal font-medium">
                          {point.desc}
                        </p>
                      </div>
                    </div>

                    {/* Micro validation check */}
                    <div className="pt-4 border-t border-slate-50 mt-4 flex items-center gap-1.5 text-[10px] font-bold text-[#6dbb45]">
                      <Check className="w-3.5 h-3.5 text-[#6dbb45]" />
                      <span>Clinic Standard Verified</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==========================================================
           2. TRUSTED CARE DURING THE COVID-19 PANDEMIC
           ========================================================== */}
          {}
          <div className="relative bg-[#0c1e36] text-white p-6 sm:p-10 lg:p-14 rounded-[40px] shadow-2xl overflow-hidden">
            {/* Ambient overlays */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#1fa8e8]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-[#6dbb45]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Image with Floating Certificate Badge (5 Columns) */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                {/* Premium Medical Photo Wrapper */}
                <div className="relative w-full max-w-[440px] aspect-[4/5] bg-slate-900 rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                    alt="Pandemic Respiratory Medical Care"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    loading="lazy"
                  />
                </div>

                {/* Floating Corona Warrior Certificate Badge */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-100 p-4 flex items-center gap-3 animate-float-gentle select-none">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block leading-none">
                      Government Honors
                    </span>
                    <p className="text-xs font-black text-slate-900 leading-none mt-1">
                      Corona Warrior Certificate
                    </p>
                    <span className="text-[10px] text-[#6dbb45] font-extrabold block mt-0.5">
                      Pandemic Service Honor
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative and Statistics (7 Columns) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <ShieldAlert className="w-4 h-4 text-emerald-300 animate-pulse" />{" "}
                  Pandemic Support Record
                </div>

                <h2 className="text-2.5xl sm:text-4xl font-black tracking-tight leading-tight">
                  Trusted Care During the <br />
                  <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                    COVID-19 Pandemic
                  </span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium text-justify lg:text-left">
                  During the severe waves of the COVID-19 pandemic, our clinic
                  served as a primary anchor of hope and safety in Pitampura (Currently in Shalimar Bagh),Delhi. Active
                  respiratory support, counselling, and specialized treatment
                  guidance were continuously rendered under highly challenging
                  conditions.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium text-justify lg:text-left">
                  We provided critical assistance to{" "}
                  <span className="text-white font-extrabold decoration-emerald-400 decoration-2">
                    more than a thousand patients
                  </span>{" "}
                  requiring urgent lung care, precise oxygen guidance,
                  hospitalization coordination, and systematic post-COVID
                  respiratory recovery pathways.
                </p>

                {/* Stat Pillars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                  <div className="space-y-1 bg-white/5 border border-white/10 p-2 sm:p-3 rounded-xl">
                    <span className="text-lg sm:text-2xl font-black text-white">
                      1,000+
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 leading-none">
                      Patients Helped
                    </p>
                  </div>
                  <div className="space-y-1 bg-white/5 border border-white/10 p-2 sm:p-3 rounded-xl">
                    <span className="text-lg sm:text-2xl font-black text-emerald-400">
                      Oxygen
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 leading-none">
                      Counselling & Aid
                    </p>
                  </div>
                  <div className="space-y-1 bg-white/5 border border-white/10 p-2 sm:p-3 rounded-xl">
                    <span className="text-lg sm:text-2xl font-black text-sky-400">
                      Recovery
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 leading-none">
                      Post-COVID Care
                    </p>
                  </div>
                  <div className="space-y-1 bg-white/5 border border-white/10 p-2 sm:p-3 rounded-xl">
                    <span className="text-lg sm:text-2xl font-black text-amber-400">
                      Govt. Honor
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 leading-none">
                      Warrior Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
           3. CLINIC GOAL AND BOOKING CALL-TO-ACTION
           ========================================================== */}
          {}
          <div className="bg-gradient-to-tr from-[#1fa8e8]/5 via-[#6dbb45]/5 to-white border border-slate-100/90 rounded-[40px] p-6 sm:p-8 sm:p-12 lg:p-16 shadow-lg shadow-sky-100/10 relative overflow-hidden">
            {/* Subtle background blur circle */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 ">
              {/* Left Grid: Core Goal Narrative (7 Columns) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" /> Our Mission & Goal
                </span>

                <h3 className="text-2xl sm:text-3.5xl font-black text-slate-950 tracking-tight leading-tight">
                  Our Ultimate Treatment Goal
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  To provide advanced yet compassionate respiratory & sleep disorder care with a
                  primary focus on accurate diagnosis, minimally invasive
                  procedures, swift symptom relief, and long-term lung health
                  improvement.
                </p>

                {/* Goal parameters lists */}
                <ul className="space-y-3 pt-2 text-slate-700 text-xs sm:text-sm font-bold">
                  {goalBullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 justify-center lg:justify-start"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#6dbb45] flex items-center justify-center shrink-0 mt-0.5 border border-[#6dbb45]/20 shadow-sm">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-left leading-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Grid: Fast Booking Frame & CTA Action (5 Columns) */}
              <div className="lg:col-span-5 bg-white border border-slate-100 p-6 rounded-[32px] shadow-xl flex flex-col justify-between h-full space-y-6">
                <div className="space-y-2 text-center lg:text-left">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                    Direct Reservation
                  </span>
                  <h4 className="text-lg font-black text-slate-900 leading-tight">
                    Expert Consultation in Delhi
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Book a consultation for expert advanced
                    Lung & sleep disorder care at our Pitampura (Currently in Shalimar Bagh), Delhi
                    clinic.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] hover:opacity-95 text-white font-extrabold text-sm tracking-wide shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Book Clinic Consultation <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                    <span>OPD Scheduling Active Mon - Sat</span>
                  </div>
                </div>
              </div>
            </div>
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
