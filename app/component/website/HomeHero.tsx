"use client";

import {
  ArrowRight,
  Activity,
  Moon,
  Wind,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Clock,
  UserCheck,
} from "lucide-react";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex items-center overflow-hidden animate-fadeInUp animation-delay-500"
      style={{
        backgroundImage: "url('/home-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark + Brand Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/55 to-sky-50/5 z-0" />

      <div className="mx-auto max-w-7xl w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* --- LEFT COLUMN: VALUE PROPOSITION & ACTIONS --- */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          {/* Tagline / Subtitle Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-[#1fa8e8]/20 px-4 py-2 rounded-full self-center lg:self-start shadow-sm transition-all duration-300 hover:border-[#1fa8e8]/40">
            <Activity className="w-4 h-4 text-[#1fa8e8] animate-pulse" />
            <span className="text-xs font-bold text-[#0c7dc2] tracking-wider uppercase">
              Senior Chest Physician & Interventional Pulmonologist
            </span>
          </div>

          {/* Main Hero Header */}
          <h1 className="text-3xl sm:text-5xl">
            Advanced Chest Care,
            <br />
            <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
              Pulmonology & Sleep Medicine
            </span>
          </h1>

          {/* Hero Paragraph Description */}
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            Expert care under <strong>Dr. Manish Aggarwal</strong>, Senior Chest
            Physician and Interventional Pulmonologist, providing advanced
            diagnosis and treatment for asthma, chronic cough, COPD, sleep
            disorders, ILD, sarcoidosis, pleural diseases and lung cancer
            screening.
          </p>

          {/* Core Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] text-white font-semibold shadow-brand hover:scale-105 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm font-semibold hover:bg-white transition-all duration-300"
            >
              Explore Diagnostics
            </a>
          </div>

          {/* Clinic Stats Block */}
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="text-4xl font-bold text-[#1fa8e8]">20+</h3>
              <p className="text-sm text-slate-500">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#6dbb45]">50k+</h3>
              <p className="text-sm text-slate-500">Patients Treated</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-800">100%</h3>
              <p className="text-sm text-slate-500">Patient Focused Care</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: VISUAL DASHBOARD / PREMIUM CARD ART --- */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Main Visual Display Wrapper */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-sky-100/80 group">
            {/* Top Curved Branding Background */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#1fa8e8]/10 via-[#6dbb45]/5 to-transparent -z-10" />

            {/* Doctor Profile Card Component */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-4 border border-white/60 shadow-md flex items-center gap-4 transition-transform duration-300 group-hover:translate-y-[-2px]">
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#1fa8e8] to-[#6dbb45] p-0.5 shadow-inner">
                <div className="w-full h-full rounded-full bg-sky-50 flex items-center justify-center text-[#1fa8e8]">
                  {/* Doctor Icon representation */}
                  <svg
                    className="w-8 h-8 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-slate-800 text-sm">
                    Dr. Manish Aggarwal
                  </h3>
                  <UserCheck className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <p className="text-[11px] font-bold text-[#1fa8e8] tracking-wider uppercase mt-0.5">
                  Senior Chest Physician & Interventional Pulmonologist
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-2.5 h-2.5" /> Gold Medalist
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Live Lung Capacity / Oxygen Line Waveform */}
            <div className="my-5 p-4 rounded-3xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-[#1fa8e8]" /> SpO₂ Oxygen Saturation
                </span>
                <span className="text-xs font-extrabold text-emerald-500">
                  98% Normal
                </span>
              </div>

              {/* Premium Waveform Vector Line */}
              <div className="h-12 w-full flex items-end">
                <svg
                  className="w-full h-10 overflow-visible"
                  strokeWidth="2.5"
                  fill="none"
                >
                  <path
                    d="M0,20 Q15,0 30,20 T60,20 T90,20 T120,5 T150,35 T180,20 T210,20 T240,20 T270,10 T300,20 T330,20 T360,20"
                    stroke="url(#gradient-wave)"
                    strokeLinecap="round"
                    className="animate-[dash_5s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-wave"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#1fa8e8" />
                      <stop offset="100%" stopColor="#6dbb45" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Grid Features Selection for Breath & Sleep diagnostics */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#1fa8e8]/5 hover:bg-[#1fa8e8]/8 transition-colors duration-200">
                <div className="w-8 h-8 rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] flex items-center justify-center">
                  <Wind className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800">
                    Advanced Lung Function Tests (PFT)
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                    Comprehensive Spirometry & DLCO tests
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#6dbb45]/5 hover:bg-[#6dbb45]/8 transition-colors duration-200">
                <div className="w-8 h-8 rounded-xl bg-[#6dbb45]/10 text-[#6dbb45] flex items-center justify-center">
                  <Moon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800">
                    Complete Sleep Apnea Diagnostics
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                    In-lab & home polysomnography sleep studies
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status Info Banner */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1fa8e8]" /> Op. Hours: 9 AM
                - 7 PM
              </span>
              <span className="flex items-center gap-1 text-slate-600 font-bold">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" /> NABL
                Compliant Lab
              </span>
            </div>
          </div>

          {/* Floating Bubble/Badge for Patient Assurance */}
          <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3 animate-bounce duration-[6000ms]">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Recovery Rate
              </span>
              <p className="text-sm font-extrabold text-slate-800">
                99.4% Patient Relief
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
