"use client";

import React, { useState } from "react";
import {
  Wind,
  Flame,
  Layers,
  Activity,
  ShieldAlert,
  HeartPulse,
  Compass,
  Sparkles,
  Stethoscope,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Check,
  ChevronRight,
  ArrowRight,
  Plus,
  Droplets,
  Heart,
  Route,
  Moon,
} from "lucide-react";
import Link from "next/link";

interface LungDiseaseProps {
  onBookClick?: () => void;
}

export default function LungDisease() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<number | null>(null);

  const diseaseScope = [
  {
    id: 1,
    title: "Lung Cancer & Lung Nodule",
    icon: HeartPulse,
    shortDesc:
      "Comprehensive screening, diagnosis, staging, and minimally invasive evaluation of lung nodules and suspected lung cancer.",
    href: "/services/lung-cancer-and-lung-nodule",
    color: "from-purple-400 to-purple-600",
    accent: "#a855f7",
  },
  {
    id: 2,
    title: "Asthma & Allergy",
    icon: Wind,
    shortDesc:
      "Specialized assessment and long-term management of asthma, allergies, wheezing, and airway inflammation.",
    href: "/services/asthma-and-allergy",
    color: "from-sky-400 to-sky-600",
    accent: "#1fa8e8",
  },
  {
    id: 3,
    title: "Pleural Effusion & Pleural Disease",
    icon: Compass,
    shortDesc:
      "Advanced diagnosis and treatment of pleural fluid collections, pleural infections, and recurrent effusions.",
    href: "/services/pleural-effusion-and-pleural-disease",
    color: "from-blue-400 to-blue-600",
    accent: "#0c7dc2",
  },
  {
    id: 4,
    title: "Pulmonary Fibrosis",
    icon: Activity,
    shortDesc:
      "Expert evaluation and monitoring of lung scarring disorders with personalized treatment strategies.",
    href: "/services/pulmonary-fibrosis",
    color: "from-emerald-400 to-emerald-600",
    accent: "#6dbb45",
  },
  {
    id: 5,
    title: "Hemoptysis (Blood in Sputum)",
    icon: Droplets,
    shortDesc:
      "Prompt evaluation of coughing up blood using advanced imaging and bronchoscopic diagnostic techniques.",
    href: "/services/hemoptysis",
    color: "from-rose-400 to-rose-600",
    accent: "#f43f5e",
  },
  {
    id: 6,
    title: "Tuberculosis (TB) & Advanced Bronchoscopy",
    icon: ShieldAlert,
    shortDesc:
      "Accurate diagnosis and comprehensive treatment of tuberculosis, including complex and difficult cases.",
    href: "/services/tuberculosis-and-advanced-bronchoscopy",
    color: "from-red-400 to-red-600",
    accent: "#ef4444",
  },
  {
    id: 7,
    title: "Pneumonia, Severe Chest Infection & Post-COVID Lung Care",
    icon: Sparkles,
    shortDesc:
      "Specialized care for severe respiratory infections and recovery support following COVID-related lung disease.",
    href: "/services/pneumonia-chest-infection-post-covid-care",
    color: "from-[#6dbb45] to-emerald-600",
    accent: "#6dbb45",
  },
  {
    id: 8,
    title: "Chronic Cough, Difficult Airway Diagnosis & Advanced Bronchoscopy",
    icon: Stethoscope,
    shortDesc:
      "Comprehensive evaluation of persistent cough and unexplained respiratory symptoms using advanced diagnostics.",
    href: "/services/chronic-cough-airway-diagnosis-bronchoscopy",
    color: "from-slate-500 to-slate-700",
    accent: "#475569",
  },
  {
    id: 9,
    title: "Sarcoidosis, Granulomatous Lung Disease",
    icon: Layers,
    shortDesc:
      "Focused diagnosis and management of sarcoidosis and other granulomatous lung disorders.",
    href: "/services/sarcoidosis-granulomatous-lung-disease-ebus",
    color: "from-indigo-400 to-indigo-600",
    accent: "#6366f1",
  },
  {
    id: 10,
    title: "Pulmonary Hypertension (PH) & Advanced Breathlessness",
    icon: Activity,
    shortDesc:
      "Specialized assessment of pulmonary hypertension and unexplained breathlessness affecting daily activities.",
    href: "/services/pulmonary-hypertension-breathlessness",
    color: "from-cyan-400 to-cyan-600",
    accent: "#0891b2",
  },
  {
    id: 11,
    title: "Lung Transplant Evaluation & Advanced End-Stage Lung Disease",
    icon: Heart,
    shortDesc:
      "Comprehensive evaluation, stabilization, and guidance for patients with advanced end-stage lung disease.",
    href: "/services/lung-transplant-evaluation-end-stage-lung-disease",
    color: "from-pink-400 to-pink-600",
    accent: "#ec4899",
  },
  {
    id: 12,
    title: "Airway Stenosis & Airway Stenting",
    icon: Route,
    shortDesc:
      "Advanced management of narrowed airways using interventional pulmonology and airway stenting procedures.",
    href: "/services/airway-stenosis-airway-stenting",
    color: "from-orange-400 to-orange-600",
    accent: "#f97316",
  },
  {
    id: 13,
    title: "Sleep Apnea & Sleep Disorders",
    icon: Moon,
    shortDesc:
      "Diagnosis and treatment of sleep-related breathing disorders, snoring, and obstructive sleep apnea.",
    href: "/services/sleep-apnea-sleep-disorders",
    color: "from-violet-400 to-violet-600",
    accent: "#8b5cf6",
  },
];

  const academicWorkshops = [
    {
      title: "Hands-On Procedural Training",
      desc: "Small-group simulated platforms on anatomical lung models to ensure absolute muscle-memory accuracy for airway access.",
      stat: "15+ Workshops",
    },
    {
      title: "Advanced Bronchoscopy Coaching",
      desc: "Active mentorship programs guiding the next generation of chest specialists in EBUS, rigid bronchoscope navigation, and stenting.",
      stat: "200+ Mentored",
    },
    {
      title: "Interventional Pulmonology",
      desc: "Comprehensive curriculum maps covering cryobiopsy pathways, medical thoracoscopy protocols, and tumor debulking approaches.",
      stat: "Interactive Guides",
    },
  ];

  return (
    <section
      id="comprehensive-lung-care"
      className="relative py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden text-slate-900 border-t border-slate-100"
    >
      { }
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-subtle-float {
          animation: subtle-float 6s ease-in-out infinite;
        }
        .card-shadow-hover:hover {
          box-shadow: 0 20px 40px -15px rgba(31, 168, 232, 0.15);
        }
      `}</style>

      {/* Decorative Brand Background Ambient Circles */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1fa8e8]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#6dbb45]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Precision Visual Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-55" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* ==========================================================
           SECTION 1: COMPREHENSIVE LUNG DISEASES HEADER
           ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-black uppercase tracking-wider backdrop-blur-sm border border-[#1fa8e8]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#1fa8e8]" /> Complete Respiratory Care
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none">
              Expert Diagnosis & Treatment <br />
              <span className="bg-gradient-to-r from-[#1fa8e8] via-[#0c7dc2] to-[#6dbb45] bg-clip-text text-transparent">
               Under One Roof
              </span>
            </h2>

            <p className="text-slate-500 text-sm sm:text-base font-medium max-w-3xl leading-relaxed mx-auto lg:mx-0">
              We provide comprehensive evaluation, accurate diagnosis, and evidence-based treatment for a wide range of respiratory and chest conditions, including asthma, tuberculosis, lung cancer, pulmonary fibrosis, sleep disorders, and other complex lung diseases.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-sm text-xs font-bold text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6dbb45] animate-ping" />
              <span>Diagnostic Slots Open Mon-Sat</span>
            </div>
          </div>
        </div>

        {/* ==========================================================
           SECTION 2: COMPREHENSIVE LUNG DISEASE CARD GRID
           ========================================================== */}
        { }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseaseScope.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;
            const isExpanded = selectedDisease === item.id;

            return (
              <Link
                href={`${item.href}`} // Adjust this path to match your service page routing
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-white border rounded-[36px] p-6 shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer card-shadow-hover relative overflow-hidden block ${isHovered
                    ? "border-[#1fa8e8]/40 ring-4 ring-[#1fa8e8]/5 scale-[1.01]"
                    : "border-slate-100"
                  }`}
              >
                <div

                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color} transition-all ease-in-out duration-300 opacity-0 group-hover:opacity-100`}

                  />


                <div className="space-y-4">
                  {/* Top Row: Circular Icon Frame & Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md transition-transform duration-300 ${isHovered ? "scale-110" : ""
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    
                  </div>

                  {/* Disease Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#0c7dc2] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>

                {/* New Static Footer Link replacing the accordion structure */}
                <div className="pt-5 mt-6 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span
                    className={`transition-colors duration-200 ${isHovered ? "text-[#0c7dc2]" : ""
                      }`}
                  >
                    Explore Service Details
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "text-[#0c7dc2] translate-x-1" : ""
                      }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ==========================================================
           SECTION 3: ACADEMIC & TEACHING INVOLVEMENT
           ========================================================== */}
        { }
        <div className="relative bg-[#0c1e36] text-white p-8 md:p-12 lg:p-16 rounded-[40px] shadow-2xl overflow-hidden mt-12">
          {/* Subtle brand ambient color glows and circular grids */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#1fa8e8]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-[#6dbb45]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10 opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Frame: Descriptive Text (6 columns) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-emerald-300 animate-pulse" />{" "}
                Clinical Education
              </div>

              <h2 className="text-2.5xl sm:text-4xl font-black tracking-tight leading-tight">
                Strong Academic & <br />
                <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  Teaching Involvement
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
                Actively involved in teaching advanced bronchoscopy and
                interventional pulmonology through clinical workshops, hands-on
                procedural training platforms, and small-group academic
                programs.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                Our team is deeply committed to medical updates, helping train
                the next cohort of chest physicians in diagnosing and managing
                complex airway collapses and diagnostic node staging.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] hover:opacity-95 text-white font-extrabold text-sm tracking-wide shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Schedule Diagnostics <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Frame: Academic Modules Grid (6 columns) */}
            <div className="lg:col-span-6 space-y-4">
              {academicWorkshops.map((workshop, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-3xl flex items-start gap-4 transition-all duration-300 group hover:bg-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <div className="flex-1 space-y-1.5 text-left">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-sky-300 transition-colors duration-200">
                        {workshop.title}
                      </h3>
                      <span className="text-[10px] font-extrabold text-emerald-400 tracking-wide uppercase shrink-0">
                        {workshop.stat}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-normal font-semibold">
                      {workshop.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
