"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Wind, Moon, Activity } from "lucide-react";
import Link from "next/link";

export default function ServiceHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3 high-fidelity clinical diagnostic slides
  const slides = [
    {
      id: 1,
      tag: "Advanced Pulmonology Clinic",
      title: "State-of-the-Art PFT & Lung Care",
      desc: "Get diagnosed with supreme clinical accuracy using high-tier Spirometry, DLCO tests, and targeted asthma defense pathways under senior directors.",
      image: "/service-hero-1.png",
      accentIcon: Wind,
      bullet: "In-house Spirometry & Diffusion",
    },
    {
      id: 2,
      title: "Comprehensive Sleep Apnea Studies",
      issuer: "Sleep Disorders Lab",
      desc: "Determine snoring and airway collapse triggers. We provide premium overnight Polysomnography (sleep tests) and home-based screening diagnostics.",
      image: "/service-hero-2.png",
      accentIcon: Moon,
      bullet: "Level 1 In-Lab Polysomnography",
    },
    {
      id: 3,
      title: "Pioneering EBUS & Bronchoscopy",
      desc: "Delivering advanced interventional pulmonology, mediastinal staging, and urgent pediatric airway foreign body extractions.",
      image: "/home-hero.png",
      accentIcon: Activity,
      bullet: "Accurate Mediastinal Staging",
    },
  ];

  // 3-second Auto-Rotation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="service-hero"
      className="relative h-[80vh] md:h-[90vh] flex items-center justify-center pt-24 pb-10 px-4 overflow-hidden text-white"
    >
      {/* ==========================================================
         BACKGROUND MULTI-SLIDE LAYER (3 Sec Smooth Fade-In)
         ========================================================== */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out -z-30 ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } transform transition-transform duration-[3000ms]`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        );
      })}

      {/* Embedded CSS Animations for fading slide elements smoothly */}
      <style>{`
        @keyframes subtle-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-subtle-scale {
          animation: subtle-scale 6s ease-in-out infinite;
        }
        
      `}</style>

      {/* Soft Black Overlay */}

      {/* Additional Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/45 to-black/20" />

      {/* ==========================================================
         FOREGROUND CENTERED VALUES BLOCK
         ========================================================== */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 px-4">
        {/* Dynamic Badge Selector indicating active clinical node */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-300/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Delhi Lung & Bronchoscopy Center</span>
        </div>

        {/* Dynamic Title Slide Header with Smooth key transitions */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl leading-[1.15] transition-all duration-500 bg-gradient-to-r from-[#01acfc] to-[#55ff00] bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h1>
        </div>

        {/* Dynamic Excerpt Paragraph */}
        <p className="text-md sm:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-500 overflow-hidden">
          {slides[currentSlide].desc}
        </p>

        {/* Interactive Action Indicators connected to Contact Page */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-sky-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
          >
            Contact Clinic Desk
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 border border-white/25 hover:border-white font-bold text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Schedule Assessment
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="hidden lg:flex absolute bottom-8 right-10 flex-col gap-3 w-[260px]">
        {slides.map((slide, idx) => {
          const SlideIcon = slide.accentIcon;
          const isSelected = idx === currentSlide;

          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`text-left p-4 rounded-2xl border backdrop-blur-2xl transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-white/15 border-[#1fa8e8] shadow-lg shadow-sky-500/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? "bg-[#1fa8e8]/20 text-[#6dbb45]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <SlideIcon className="w-5 h-5" />
                </div>

                <div>
                  <p
                    className={`text-[11px] font-black uppercase tracking-wider ${
                      isSelected ? "text-[#58ff05]" : "text-white"
                    }`}
                  >
                    {slide.bullet}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
