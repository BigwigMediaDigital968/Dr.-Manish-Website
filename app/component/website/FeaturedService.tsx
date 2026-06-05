"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Wind,
  Moon,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Compass,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";

const FEATURED_SERVICES = [
  {
    id: 1,
    title: "Pulmonary Function Testing (PFT)",
    desc: "Comprehensive lung function assessment using advanced spirometry and diffusion capacity analysis for accurate diagnosis and treatment planning.",
    image: "/pft.png",
    tag: "Lung Function Lab",
    icon: Wind,
  },
  {
    id: 2,
    title: "HRCT Chest Interpretation",
    desc: "Expert evaluation of High-Resolution CT scans for Interstitial Lung Disease, infections, fibrosis, nodules, and other complex respiratory conditions.",
    image: "/hrct.png",
    tag: "Advanced Imaging",
    icon: Compass,
  },
  {
    id: 3,
    title: "Bronchoscopy & BAL",
    desc: "Advanced bronchoscopic examination with Bronchoalveolar Lavage (BAL) for diagnosis of infections, tuberculosis, chronic cough, and airway disorders.",
    image: "/bronchoscopy.png",
    tag: "Airway Diagnostics",
    icon: Moon,
  },
  {
    id: 4,
    title: "EBUS-TBNA",
    desc: "State-of-the-art Endobronchial Ultrasound guided Transbronchial Needle Aspiration for accurate mediastinal lymph node sampling and lung cancer staging.",
    image: "/ebus.png",
    tag: "Interventional Pulmonology",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Ultrasound-Guided Pleural Procedures",
    desc: "Precision-guided pleural aspiration and pigtail catheter placement for pleural effusion and pneumothorax management.",
    image: "/ultrasound-guided-pleural-procedures.png",
    tag: "Pleural Care",
    icon: HeartPulse,
  },
  {
    id: 6,
    title: "Multidisciplinary Respiratory Evaluation",
    desc: "Integrated assessment combining clinical examination, imaging, pulmonary function testing, and specialist consultation for complex lung diseases.",
    image: "/multidisciplinary-respiratory-evaluation.png",
    tag: "Comprehensive Care",
    icon: Sparkles,
  },
];

export default function FeaturedService() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 30) {
        handleNext();
      } else if (e.deltaX < -30) {
        handlePrev();
      }
    } else {
      if (e.deltaY > 30) {
        handleNext();
      } else if (e.deltaY < -30) {
        handlePrev();
      }
    }
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      handleNext();
    }

    if (distance < -50) {
      handlePrev();
    }
  };

  // Responsiveness tracker for Carousel counts
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, FEATURED_SERVICES.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section
      id="featured-services"
      className="relative py-14 px-4 overflow-hidden bg-gradient-to-b from-sky-50/50 via-[#f0f9ff]/70 to-white text-slate-900"
    >
      {/* Background Decorative Blur Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1fa8e8]/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 px-6">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Clinic
              Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Featured Clinical Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl">
              Equipped with modern diagnostics to ensure complete precision for
              chest and sleep diagnostic procedures.
            </p>
          </div>

          {/* Slider Controllers */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3.5 rounded-full border transition-all ${
                currentIndex === 0
                  ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50/50"
                  : "border-slate-200 bg-white text-slate-700 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/40 shadow-sm hover:shadow-md cursor-pointer"
              }`}
              aria-label="Previous service slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`p-3.5 rounded-full border transition-all ${
                currentIndex === maxIndex
                  ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50/50"
                  : "border-slate-200 bg-white text-slate-700 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/40 shadow-sm hover:shadow-md cursor-pointer"
              }`}
              aria-label="Next service slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL TRACK --- */}
        <div
          ref={sliderRef}
          className="relative overflow-hidden py-4 cursor-grab active:cursor-grabbing touch-pan-y"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {FEATURED_SERVICES.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="px-3 flex-shrink-0 transition-all duration-300"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Floating White Rounded Card Frame */}
                  <div className="group h-full bg-white border border-slate-100 hover:border-[#1fa8e8]/30 rounded-[36px] p-5 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-500 flex flex-col justify-between">
                    <div>
                      {/* Generous outer frame padding for image element matching image_fda450.png */}
                      <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-slate-50">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Clinical Tag Overlay */}
                        <span className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-[10px] font-extrabold text-[#0c7dc2] uppercase tracking-wider shadow-sm">
                          {service.tag}
                        </span>
                      </div>

                      {/* Header with floating custom clinical icon */}
                      <div className="flex items-start justify-between gap-3 mb-3 px-1">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1fa8e8] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <div className="p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#1fa8e8]/10 group-hover:text-[#1fa8e8] transition-colors shrink-0">
                          <ServiceIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Diagnostic parameters description */}
                      <p className="text-slate-500 text-sm leading-relaxed px-1">
                        {service.desc}
                      </p>
                    </div>

                    {/* Booking/Trigger CTA action */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between px-1">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-slate-700 hover:text-[#0c7dc2] flex items-center gap-1 group/btn cursor-pointer"
                      >
                        Enquire Treatment
                        <ArrowRight className="w-3.5 h-3.5 text-[#1fa8e8] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- CAROUSEL NAVIGATION TRACK INDICATORS --- */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIndex
                  ? "w-8 bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              } cursor-pointer`}
              aria-label={`Go to slide page ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
