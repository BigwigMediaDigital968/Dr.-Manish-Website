"use client";

import { useModal } from "@/app/Contexts/ModalContext";
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
  const {openModal}  = useModal();
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
              Advanced Lung & Sleep Solutions
            </span>
          </div>

          {/* Main Hero Header */}
          <h1 className="text-3xl sm:text-5xl">
            Delhi Lung
            <br />
            <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
              & Bronchoscopy Center
            </span>
          </h1>

          {/* Hero Paragraph Description */}
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            Expert care under <strong>Dr. Manish Aggarwal</strong>, Principle
            Director - Department of Chest Disease & Interventional
            Pulmonologist, Max Hospital, providing advanced diagnosis and treatment for
            asthma, chronic cough, COPD, sleep disorders, ILD, sarcoidosis,
            pleural diseases and lung cancer screening.
          </p>

          {/* Core Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openModal}
              className="group cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] text-white font-semibold shadow-brand hover:scale-105 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm font-semibold hover:bg-white transition-all duration-300"
            >
              Explore Diagnostics
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN : DOCTOR SHOWCASE --- */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[480px] bg-white rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden group transition-all duration-500 hover:shadow-sky-100/60">
            {/* Background Accent */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#1fa8e8]/10 via-[#6dbb45]/5 to-transparent" />

            {/* Doctor Image */}
            <div className="relative p-5">
              <div className="overflow-hidden rounded-[28px] aspect-[4/5] sm:aspect-[4/3] bg-slate-100">
                <img
                  src="/dr-image.png"
                  alt="Dr. Manish Aggarwal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-9 sm:bottom-auto sm:top-9 left-9 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-slate-100">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Experience
                </p>
                <p className="text-base sm:text-lg font-black bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                  25+ Years
                </p>
              </div>
            </div>

            {/* Doctor Details */}
            <div className="px-6 pb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                Trusted Pulmonologist
              </div>

              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Dr. Manish Aggarwal
              </h3>

              <p className="mt-2 text-[#1fa8e8] font-bold text-xs uppercase tracking-wider">
                Principle Director • Chest Disease &
                <br />
                Interventional Pulmonology
              </p>
              {/* 
              <p className="mt-4 text-sm text-slate-600 leading-7">
                Providing advanced diagnosis and treatment for
                <span className="font-semibold text-slate-800">
                  {" "}
                  Asthma, COPD, Chronic Cough, ILD, Sleep Disorders,
                  Bronchoscopy, Pleural Diseases,
                </span>{" "}
                and
                <span className="font-semibold text-slate-800">
                  {" "}
                  Lung Cancer Screening.
                </span>
              </p> */}

              {/* Bottom Badges */}
              {/* <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Gold Medalist",
                  "Bronchoscopy Expert",
                  "Sleep Specialist",
                  "NABL Certified",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {badge}
                  </span>
                ))}
              </div> */}
            </div>
          </div>

          {/* Floating Patient Satisfaction Card */}
          {/* <div className="absolute -bottom-5 -right-3 sm:-right-0 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3 animate-bounce duration-[6000ms]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] text-white flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Patient Trust
              </span>
              <p className="text-sm font-extrabold text-slate-800">
                99.4% Satisfaction
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
