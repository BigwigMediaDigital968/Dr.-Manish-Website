"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Wind,
  Activity,
  Moon,
  Baby,
  Cloud,
  ShieldAlert,
  Compass,
  ChevronRight,
  Calendar,
  Phone,
  FileSpreadsheet,
  Heart,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";
import Popup from "./Popup";
import Link from "next/link";
import Image from "next/image";

export default function Speciality() {
  const router = useRouter();
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "All" | "Pulmonary" | "Interventional" | "Pediatric & General"
  >("All");
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      ".speciality-card",
    ) as HTMLElement;

    if (!card) return;

    const scrollAmount = card.offsetWidth + 24;

    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const specialities = [
    {
      id: "asthma",
      title: "Asthma Specialist",
      desc: "Expert diagnostic testing, spirometry evaluations, and personalized long-term asthma action plans for absolute control.",
      category: "Pulmonary",
      icon: Wind,
      color: "#1fa8e8",
      badge: "Advanced Care",
    },
    {
      id: "bronchoscopy",
      title: "Bronchoscopy Specialist",
      desc: "Advanced minimally invasive diagnostic & therapeutic airway procedures to examine lung pathways precisely.",
      category: "Interventional",
      icon: Compass,
      color: "#0c7dc2",
      badge: "Specialized",
    },
    {
      id: "chronic-cough",
      title: "Chronic Cough Management",
      desc: "Comprehensive multi-trigger diagnostic assessments to target and resolve prolonged, persistent cough conditions.",
      category: "Pulmonary",
      icon: Activity,
      color: "#1fa8e8",
      badge: "Expert Opinion",
    },
    {
      id: "ild",
      title: "ILD Services",
      desc: "Comprehensive protocols for Interstitial Lung Diseases, tracking diffusion capacity, high-resolution chest imaging & management.",
      category: "Pulmonary",
      icon: Layers,
      color: "#0c7dc2",
    },
    {
      id: "sleep-apnea",
      title: "Sleep Apnea & Snoring",
      desc: "Comprehensive overnight sleep studies (Polysomnography) paired with personalized PAP/CPAP therapeutic setups.",
      category: "Pulmonary",
      icon: Moon,
      color: "#6dbb45",
      badge: "Sleep Lab",
    },
    {
      id: "copd-cancer",
      title: "COPD & Lung Cancer Screening",
      desc: "Focused screening plans for smokers and COPD sufferers incorporating low-dose CT guidance and early detection biomarkers.",
      category: "Pulmonary",
      icon: ShieldAlert,
      color: "#4d8f2d",
      badge: "High Risk Care",
    },
    {
      id: "ebus",
      title: "EBUS Service",
      desc: "Endobronchial Ultrasound for highly accurate mediastinal lymph node staging and rapid chest malignancy evaluation.",
      category: "Interventional",
      icon: Award,
      color: "#1fa8e8",
      badge: "State of Art",
    },
    {
      id: "pleural",
      title: "Pleural Services",
      desc: "Advanced diagnostic & palliative management of Pleural Effusion and Pneumothorax via pigtail insertion or chest drains.",
      category: "Interventional",
      icon: Heart,
      color: "#0c7dc2",
    },
    {
      id: "kids-foreign-body",
      title: "Foreign Body Extraction in Kids",
      desc: "Urgent and delicate interventional pediatric bronchoscopy for quick, safe extraction of aspirated items in young children.",
      category: "Pediatric & General",
      icon: Baby,
      color: "#6dbb45",
      badge: "Urgent Intervention",
    },
    {
      id: "pollution-queries",
      title: "Pollution Related Queries",
      desc: "Preventative care, custom anti-pollution routines, and tailored lung defenses against Delhi’s toxic particulate cycles.",
      category: "Pediatric & General",
      icon: Cloud,
      color: "#4d8f2d",
    },
    {
      id: "sarcoidosis",
      title: "Sarcoidosis Comprehensive Care",
      desc: "Multi-organ assessment and specialized immuno-modulator therapy courses for systematic sarcoidosis stabilization.",
      category: "Pediatric & General",
      icon: FileSpreadsheet,
      color: "#1fa8e8",
    },
  ];

  // Filtering logic
  const filteredSpecialities =
    activeTab === "All"
      ? specialities
      : specialities.filter((s) => s.category === activeTab);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    autoSlideRef.current = setInterval(() => {
      const card = slider.querySelector(".speciality-card") as HTMLElement;

      if (!card) return;

      const scrollAmount = card.offsetWidth + 24;

      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

      const nextPosition = slider.scrollLeft + scrollAmount;

      if (nextPosition >= maxScrollLeft - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [filteredSpecialities]);

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      if (!sliderRef.current) return;

      const card = sliderRef.current.querySelector(
        ".speciality-card",
      ) as HTMLElement;

      if (!card) return;

      const scrollAmount = card.offsetWidth + 24;

      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft + scrollAmount >= maxScrollLeft - 10) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        sliderRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);
  };

  return (
    <>
      <section className="relative py-14 px-4 bg-white overflow-hidden text-slate-900">
        {/* Decorative Blur Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#6dbb45]/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl px-6 mx-auto space-y-16">
          {/* --- CLINICAL LEADERSHIP PROFILE GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-tr from-slate-50 via-slate-100/50 to-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-sky-100/10">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-[#1fa8e8] to-[#6dbb45] p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-sky-50 flex items-center justify-center text-[#1fa8e8]">
                  <Image
                    src="/dr-image.png"
                    alt="Dr. Manish Aggarwal"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" /> Senior
                  Consultant
                </div>

                <h3 className="text-2xl font-extrabold text-slate-950">
                  Dr. Manish Aggarwal
                </h3>

                <p className="text-sm font-bold text-[#6dbb45] mt-1">
                  Interventional Pulmonologist & Chest Physician
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Welcome to Dr. Manish Aggarwal's Pulmonology & Interventional
                Lung Clinic
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                At Delhi Lung & Sleep Centre, Dr. Manish Aggarwal provides
                diagnostic solutions for intricate bronchial path obstacles,
                malignant lung staging, child-focused foreign body extractions,
                and critical chronic asthma or sleep apnea anomalies. Equipped
                with advanced technology like EBUS, CT-guided diagnostics, and
                high-tier spirometry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Pioneering EBUS Staging Diagnostics
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#6dbb45]/10 text-[#6dbb45] flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Expert Pediatric Airway Interventions
                  </span>
                </div>
              </div>
              <Link
                href="/about"
                className="text-md font-bold text-[#1fa8e8] hover:text-[#0c7dc2] flex items-center gap-1 mt-4"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* --- SECTION HEADER & FILTERS --- */}
          <div
            id="services"
            className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-end md:justify-between border-b border-slate-100 pb-8"
          >
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h2 className="text-xs font-extrabold tracking-widest text-[#1fa8e8] uppercase">
                Clinical Services
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-none">
                Specialized Lung & Chest Care
              </h3>
              <p className="text-slate-500 text-sm">
                Filter through our diverse range of chest diagnostics, sleep
                evaluations, and interventional procedures.
              </p>
            </div>

            {/* Filtering Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100/80 backdrop-blur-md rounded-2xl self-center md:self-end">
              {(
                [
                  "All",
                  "Pulmonary",
                  "Interventional",
                  "Pediatric & General",
                ] as const
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#1fa8e8] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* --- SPECIALITIES DYNAMIC GRID --- */}
          <div className="relative">
            {/* Desktop Navigation */}
            <button
              onClick={() => scrollSlider("left")}
              className="hidden lg:flex absolute left-[-28px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-slate-200 items-center justify-center hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 rotate-180 text-[#1fa8e8]" />
            </button>

            <button
              onClick={() => scrollSlider("right")}
              className="hidden lg:flex absolute right-[-28px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-slate-200 items-center justify-center hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-[#1fa8e8]" />
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4 px-1"
            >
              {filteredSpecialities.map((item) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    className="speciality-card snap-start shrink-0 w-full sm:w-[48%] lg:w-[32%]"
                  >
                    <div className="group relative bg-white border border-slate-100 hover:border-[#1fa8e8]/30 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:shadow-sky-100/40 transition-all duration-300 flex flex-col justify-between h-full">
                      {/* Background Hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#1fa8e8]/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px] pointer-events-none" />

                      <div>
                        {/* Icon + Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-[#1fa8e8]/10 text-[#0c7dc2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6" />
                          </div>

                          {item.badge && (
                            <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#6dbb45]/10 text-[#4d8f2d]">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#1fa8e8] transition-colors">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      {/* Footer */}
                      <button
                        onClick={() => router.push("#book-appointment")}
                        className="text-xs font-bold text-[#1fa8e8] group-hover:text-[#0c7dc2] flex items-center gap-1 group-hover:gap-1.5 transition-all mt-auto self-start cursor-pointer"
                      >
                        Schedule Appointment
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- COMPACT CTA BOX SECTION --- */}
          <div className="relative bg-gradient-to-r from-[#0c7dc2] to-[#1fa8e8] text-white p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Subtle background graphics */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-emerald-300/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 animate-pulse" /> Same-Day
                Appointments Available
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none">
                Breathe Easy Again
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Book a direct specialty evaluation with Dr. Manish Aggarwal at
                Delhi Lung & Sleep Centre. Get customized solutions for coughing
                issues, sleep disturbances, or respiratory ailments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto relative z-10 flex-shrink-0">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0c7dc2] hover:bg-slate-50 font-bold text-sm tracking-wide shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                Book Appointment Now
              </button>
              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Call Clinic Desk
              </a>
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
