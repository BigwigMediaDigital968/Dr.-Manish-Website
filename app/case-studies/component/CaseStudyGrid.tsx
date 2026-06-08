"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  Sparkles,
  RotateCcw,
  ChevronRight,
  Stethoscope,
  ClipboardList,
  FlaskConical,
  TrendingUp,
  Calendar,
  MessageSquareQuote,
  BadgeCheck,
  Pill,
} from "lucide-react";

interface TreatmentStep {
  title: string;
  description: string;
  cost: string;
}

interface CaseStudyItem {
  id: number;
  slug: string;
  badge: string;
  title: string;
  specialty: "Pulmonary" | "Interventional" | "Sleep";
  patientProfile: string;
  age: number;
  gender: string;
  chiefComplaint: string;
  presentation: string;
  history: string;
  diagnosis: string;
  diagnostics: string;
  keyFindings: string[];
  treatmentPlan: TreatmentStep[];
  metrics: string[];
  outcome: string;
  followUp: string;
  doctorNote: string;
  seoKeywords: string[];
  image: string;
  color: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: 1,
    slug: "primary-pulmonary-hypertension-right-heart-failure",
    badge: "Rare Pulmonary Hypertension",
    title:
      "Reversal of Severe Right Heart Failure caused by Primary Pulmonary Hypertension",
    specialty: "Pulmonary",
    patientProfile: "Patient: Female, 42 Years",
    age: 42,
    gender: "Female",
    chiefComplaint:
      "Severe breathlessness at rest, progressive leg swelling and abdominal distension.",
    presentation:
      "The patient arrived with disabling shortness of breath, bilateral pedal edema, abdominal fluid accumulation (ascites), fatigue and inability to perform routine activities. She had previously received treatment elsewhere for generalized weakness and possible kidney disease without improvement.",
    history:
      "Symptoms gradually progressed over several months. Multiple consultations failed to identify the underlying pulmonary vascular disorder.",
    diagnosis:
      "Primary Pulmonary Hypertension (Pulmonary Arterial Hypertension) with evolving Right Heart Failure.",
    diagnostics:
      "Comprehensive clinical evaluation followed by 2D Echocardiography, pulmonary hypertension screening, oxygen saturation assessment and right heart functional analysis.",
    keyFindings: [
      "Massive bilateral lower limb edema",
      "Severe abdominal ascites",
      "Advanced pulmonary arterial hypertension",
      "Right ventricular strain and failure",
      "Marked functional limitation due to breathlessness",
    ],
    treatmentPlan: [
      {
        title: "Immediate Fluid Management",
        description:
          "Tailored high-dose diuretic therapy using Torasemide and Spironolactone to remove excess body fluid and reduce cardiac workload.",
        cost: "₹200 – ₹600 / month",
      },
      {
        title: "Targeted Pulmonary Vasodilator Therapy",
        description:
          "Combination therapy with PDE-5 inhibitors and Endothelin Receptor Antagonists to lower pulmonary artery pressure.",
        cost: "₹2,000 – ₹5,000 / month",
      },
      {
        title: "Advanced Escalation Therapy",
        description:
          "Reserved for severe or non-responsive disease using advanced pulmonary hypertension medications.",
        cost: "₹8,000 – ₹15,000+ / month",
      },
    ],
    metrics: [
      "Functional Class: WHO Class IV → Class II",
      "Peripheral edema: Nearly resolved",
      "Ascites: Significant reduction",
      "Resting Breathlessness: Dramatically improved",
      "Quality of Life Score: Markedly improved",
    ],
    outcome:
      "After individualized pulmonary hypertension management and aggressive fluid control, the patient's edema and abdominal swelling resolved substantially. Breathlessness improved remarkably, allowing return to normal daily activities.",
    followUp:
      "Patient remains under periodic pulmonary hypertension surveillance with medication optimization and regular echocardiographic assessment.",
    doctorNote:
      "Persistent breathlessness associated with leg swelling should never be ignored. Early identification of pulmonary hypertension can prevent irreversible right heart damage and significantly improve long-term survival.",
    seoKeywords: [],
    image: "/case-study-1.png",
    color: "from-[#1fa8e8]/20 to-[#6dbb45]/10",
  },
  {
    id: 2,
    slug: "severe-obstructive-sleep-apnea-cpap",
    badge: "Sleep Disorder",
    title: "Complete Resolution of Severe OSA with Structured CPAP Therapy",
    specialty: "Sleep",
    patientProfile: "Patient: Male, 54 Years",
    age: 54,
    gender: "Male",
    chiefComplaint:
      "Excessive daytime sleepiness, loud snoring, morning headaches.",
    presentation:
      "The patient presented with a multi-year history of disruptive snoring, unrefreshing sleep, and dangerous episodes of drowsiness while driving. His partner reported witnessed apneas throughout the night.",
    history:
      "Hypertensive for 8 years, poorly controlled despite dual antihypertensive therapy. BMI 31. No prior sleep study conducted.",
    diagnosis:
      "Severe Obstructive Sleep Apnea (AHI > 45/hr) with associated resistant hypertension.",
    diagnostics:
      "Home sleep testing followed by full in-lab polysomnography. CPAP titration study with auto-pressure algorithm.",
    keyFindings: [
      "AHI of 47 events/hour (Severe OSA)",
      "Oxygen desaturation to 76% nadir",
      "Fragmented sleep architecture — no restorative N3 or REM",
      "Resistant hypertension linked to nocturnal hypoxia",
      "Epworth Sleepiness Scale: 18/24 (pathological)",
    ],
    treatmentPlan: [
      {
        title: "CPAP Initiation & Education",
        description:
          "Patient counseled on OSA pathophysiology, mask fitting, and CPAP adherence strategies. Auto-CPAP initiated at 6–14 cmH₂O.",
        cost: "₹12,000 – ₹25,000 (device, one-time)",
      },
      {
        title: "Lifestyle Modification Protocol",
        description:
          "Structured weight management, positional therapy, and alcohol cessation guidance implemented alongside CPAP.",
        cost: "No direct cost",
      },
      {
        title: "Hypertension Review",
        description:
          "Antihypertensive regimen reviewed and simplified after OSA treatment; BP normalized without adding medications.",
        cost: "Existing medications only",
      },
    ],
    metrics: [
      "AHI: 47/hr → 2.3/hr (Controlled)",
      "Epworth Score: 18 → 6 (Normal)",
      "Oxygen nadir: 76% → 92%",
      "BP: 158/96 → 128/80 mmHg",
      "CPAP Adherence: 6.4 hrs/night average",
    ],
    outcome:
      "Within 8 weeks of consistent CPAP therapy, daytime sleepiness resolved completely, blood pressure normalized, and the patient reported feeling rested for the first time in years.",
    followUp:
      "Quarterly CPAP data downloads for adherence tracking, annual polysomnography review, and ongoing metabolic monitoring.",
    doctorNote:
      "Undiagnosed sleep apnea is one of the most common reversible causes of resistant hypertension. Treating OSA is often more effective than adding a third antihypertensive drug.",
    seoKeywords: [],
    image: "/case-study-2.png",
    color: "from-purple-500/20 to-[#1fa8e8]/10",
  },
];

// ─── FRONT FACE ────────────────────────────────────────────────────────────────
function CardFront({
  study,
  reverse,
  onFlip,
}: {
  study: CaseStudyItem;
  reverse: boolean;
  onFlip: () => void;
}) {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col lg:flex-row">
      {/* Image */}
      <div
        className={`relative w-full lg:w-[42%] flex-shrink-0 overflow-hidden ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Badge */}
        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white text-[#0c7dc2] text-[9px] font-black uppercase tracking-[0.15em] shadow-lg">
          {study.badge}
        </span>

        {/* Specialty pill */}
        <span
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${
            study.specialty === "Sleep"
              ? "bg-purple-500/20 border-purple-400/40 text-purple-300"
              : study.specialty === "Interventional"
                ? "bg-amber-500/20 border-amber-400/40 text-amber-300"
                : "bg-[#1fa8e8]/20 border-[#1fa8e8]/40 text-[#1fa8e8]"
          }`}
        >
          {study.specialty}
        </span>

        {/* Patient profile */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-black/60 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              {study.patientProfile}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-1 flex-col justify-between p-5 lg:p-8 overflow-y-auto ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6dbb45] font-bold">
            Clinical Case Study · DLSC-{study.id * 10}
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-[#1fa8e8] transition-colors">
            {study.title}
          </h3>

          {/* Chief Complaint */}
          <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-[#1fa8e8] mb-1.5">
              Chief Complaint
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.chiefComplaint}
            </p>
          </div>

          {/* Diagnosis */}
          <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-[#6dbb45] mb-1.5">
              Diagnosis
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.diagnosis}
            </p>
          </div>

          {/* Outcome teaser */}
          <div className="rounded-2xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-white/5 p-4">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-amber-300 mb-1.5">
              Clinical Outcome
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed line-clamp-2">
              {study.outcome}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-500/20 px-4 py-2">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              Complete Recovery
            </span>
          </div>

          <button
            onClick={onFlip}
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Read Full Case
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── BACK FACE ─────────────────────────────────────────────────────────────────
function CardBack({
  study,
  onFlip,
}: {
  study: CaseStudyItem;
  onFlip: () => void;
}) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-y-auto overscroll-contain">
      {/* Scrollable detailed content */}
      <div className="p-6 lg:p-8 space-y-6">
        {/* Back header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6dbb45] font-bold">
              Full Case Detail · DLSC-{study.id * 10}
            </span>
            <h3 className="mt-1 text-lg sm:text-xl font-black text-white leading-tight">
              {study.title}
            </h3>
          </div>
          <button
            onClick={onFlip}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
            title="Go back"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Patient & Complaint */}
        <TimelineBlock
          icon={<Stethoscope className="w-4 h-4 text-[#1fa8e8]" />}
          step="01"
          label="Patient Profile & Chief Complaint"
          accent="#1fa8e8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
            <Chip label="Age" value={`${study.age} yrs`} />
            <Chip label="Gender" value={study.gender} />
            <Chip label="Specialty" value={study.specialty} />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.chiefComplaint}
          </p>
        </TimelineBlock>

        {/* Presentation & History */}
        <TimelineBlock
          icon={<ClipboardList className="w-4 h-4 text-purple-400" />}
          step="02"
          label="Clinical Presentation & History"
          accent="#a78bfa"
        >
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            {study.presentation}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-white/10 pl-3">
            {study.history}
          </p>
        </TimelineBlock>

        {/* Diagnostics */}
        <TimelineBlock
          icon={<FlaskConical className="w-4 h-4 text-[#6dbb45]" />}
          step="03"
          label="Diagnostics & Key Findings"
          accent="#6dbb45"
        >
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            {study.diagnostics}
          </p>
          <ul className="space-y-1.5">
            {study.keyFindings.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#6dbb45] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </TimelineBlock>

        {/* Treatment Plan */}
        <TimelineBlock
          icon={<Pill className="w-4 h-4 text-amber-400" />}
          step="04"
          label="Treatment Plan"
          accent="#fbbf24"
        >
          <div className="space-y-3">
            {study.treatmentPlan.map((step, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/5 border border-white/5 p-4 space-y-1"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h5 className="text-xs font-black text-white uppercase tracking-wide">
                    Phase {i + 1}: {step.title}
                  </h5>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    {step.cost}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </TimelineBlock>

        {/* Metrics */}
        <TimelineBlock
          icon={<TrendingUp className="w-4 h-4 text-[#1fa8e8]" />}
          step="05"
          label="Outcome Metrics"
          accent="#1fa8e8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {study.metrics.map((m, i) => {
              const [label, value] = m.split(":");
              return (
                <div
                  key={i}
                  className="rounded-xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-white/5 px-4 py-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                    {label?.trim()}
                  </p>
                  <p className="text-sm font-black text-white">
                    {value?.trim() ?? "—"}
                  </p>
                </div>
              );
            })}
          </div>
        </TimelineBlock>

        {/* Follow Up */}
        <TimelineBlock
          icon={<Calendar className="w-4 h-4 text-emerald-400" />}
          step="06"
          label="Follow-Up Protocol"
          accent="#34d399"
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.followUp}
          </p>
        </TimelineBlock>

        {/* Doctor's Note */}
        <div className="rounded-2xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-[#1fa8e8]/20 p-5">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquareQuote className="w-4 h-4 text-[#1fa8e8]" />
            <span className="text-[10px] font-black uppercase tracking-wider text-[#1fa8e8]">
              Doctor's Clinical Note
            </span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed italic">
            "{study.doctorNote}"
          </p>
          <p className="mt-2 text-[10px] text-slate-500 font-bold">
            — Dr. Manish Aggarwal, Delhi Lung & Sleep Centre
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-4 w-4 text-[#1fa8e8]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Verified File:
            </span>
            <span className="text-[11px] font-black text-white">
              DLSC-{study.id * 10}
            </span>
          </div>
          <button
            onClick={onFlip}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-slate-300 text-[11px] font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Back to Summary
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TIMELINE BLOCK ────────────────────────────────────────────────────────────
function TimelineBlock({
  icon,
  step,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  step: string;
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      {/* Left rail */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center border"
          style={{ borderColor: `${accent}40`, background: `${accent}15` }}
        >
          {icon}
        </div>
        <div className="w-px flex-1 bg-white/10 min-h-[1rem]" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[9px] font-black tracking-widest"
            style={{ color: accent }}
          >
            STEP {step}
          </span>
          <span className="text-xs font-bold text-white">{label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── CHIP ──────────────────────────────────────────────────────────────────────
function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/5 px-3 py-2">
      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
        {label}
      </p>
      <p className="text-xs font-black text-white mt-0.5">{value}</p>
    </div>
  );
}

// ─── FLIPPABLE CARD ────────────────────────────────────────────────────────────
function FlipCard({ study, index }: { study: CaseStudyItem; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const reverse = index % 2 !== 0;

  return (
    // Fixed pixel height — both faces fill this box; back face scrolls internally
    <div
      className="group relative w-full"
      style={{ perspective: "1400px", height: "clamp(80vh, 50vw, 540px)" }}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[18px] border border-white/10 bg-[#1c4152] overflow-hidden transition-all duration-500 hover:border-[#1fa8e8]/40 hover:shadow-2xl hover:shadow-sky-500/10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <CardFront
            study={study}
            reverse={reverse}
            onFlip={() => setFlipped(true)}
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[28px] border border-[#1fa8e8]/30 bg-[#142330]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            // overflow here not overflow-hidden — child handles scroll
            overflow: "hidden",
          }}
        >
          <CardBack study={study} onFlip={() => setFlipped(false)} />
        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Pulmonary" | "Interventional" | "Sleep"
  >("All");

  const filteredCases =
    activeTab === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.specialty === activeTab);

  return (
    <section
      id="case-studies"
      className="relative py-20 overflow-hidden text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/55 -z-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-8">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
              Clinical Staging Files
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
              Pulmonary Case Studies
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Explore actual diagnostic pathways, procedural data, and outcome
              statistics managed by Dr. Manish Aggarwal at our East Delhi chest
              clinic.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 p-1 bg-indigo-400/80 border border-white/10 rounded-2xl self-center lg:self-end backdrop-blur-sm">
            {(["All", "Pulmonary", "Interventional", "Sleep"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] text-white shadow-md"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {filteredCases.map((study, index) => (
            <FlipCard key={study.id} study={study} index={index} />
          ))}

          {filteredCases.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">
              No case studies available for this specialty yet.
            </div>
          )}
        </div>

        <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest sm:hidden pt-2">
          Tap "Read Full Case" to explore detailed clinical files
        </p>
      </div>
    </section>
  );
}
