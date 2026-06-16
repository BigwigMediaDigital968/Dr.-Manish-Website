"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HeartPulse,
} from "lucide-react";

/* ============================================================================
   1. STREAMING_CHUNK: Defining interface and mock patients database
   ============================================================================ */

interface Testimonial {
  id: number;
  name: string;
  initial: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Pooja Rajput",
    initial: "P",
    role: "Sleep Apnea & Sleep Disorder Treatment",
    location: "Pitampura",
    text: "We consulted Dr. Manish Aggarwal at his Pitampura clinic for my grandmother's sleep-related problems and our experience was excellent. The doctor was very patient, kind, and took time to understand her condition properly. The evaluation and treatment were explained clearly. With the doctor's guidance and treatment, my grandmother is doing much better now and her sleep has improved significantly. Highly recommend for anyone looking for a knowledgeable and compassionate pulmonologist.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjana Kapoor",
    initial: "A",
    role: "Chest Infection & Respiratory Care",
    location: "Delhi",
    text: "Dr. Manish Aggarwal is absolutely one of the best doctors. Both me and my mother-in-law visited him for chest infections and had an excellent treatment experience. He is highly knowledgeable, listens patiently to health concerns, and responds appropriately. I strongly recommend him to anyone facing respiratory issues.",
    rating: 5,
  },
  {
    id: 3,
    name: "Naresh Chhabra",
    initial: "N",
    role: "Chronic Asthma & Breathing Problem Management",
    location: "Delhi",
    text: "Dr. Manish Aggarwal is the best chest specialist I have ever seen. My wife suffered from severe breathing problems and chronic asthma for years. After consulting several specialists, we finally found lasting relief through Dr. Manish. Her condition has improved significantly, and she no longer requires steroids. His personal care and compassionate approach make patients feel like family.",
    rating: 5,
  },
  {
    id: 4,
    name: "Monica Sharma",
    initial: "M",
    role: "Pulmonology Consultation & Respiratory Treatment",
    location: "Delhi",
    text: "Dr. Manish Aggarwal is an excellent pulmonologist and a genuinely caring doctor. He is patient, compassionate, and reassuring throughout the treatment process. He explains everything clearly and ensures patients feel comfortable. Highly recommended for anyone seeking a dedicated and skilled pulmonologist.",
    rating: 5,
  },
  {
    id: 5,
    name: "Manish Dixit",
    initial: "M",
    role: "Advanced Pulmonary & Chest Care",
    location: "Delhi",
    text: "Dr. Manish Aggarwal is an exceptionally professional and experienced pulmonologist. He is thorough in diagnosis, attentive to patient concerns, and explains treatment plans with clarity and patience. His compassionate approach and clinical expertise inspire confidence. The consultation experience was excellent and the treatment was highly effective.",
    rating: 5,
  },
];

export default function PatientsTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /* ============================================================================
     2. STREAMING_CHUNK: Implementing scroll check and manual button handlers
     ============================================================================ */

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      // Scroll by 85% of display area to provide seamless continuation
      const scrollAmount =
        direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-10 px-4 overflow-hidden text-slate-900 bg-gradient-to-tr from-[#e0f2fe]/40 via-[#f8fafc] to-[#f0fdf4]/30"
    >
      {/* Wave lines graphic matching reference design 8547048362c2e28a9582d4c5aad5bae1.jpg */}
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none -z-10 opacity-30 sm:opacity-50 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Elegant Waves */}
          <path
            d="M-50,150 Q200,80 450,160 T950,140 T1450,120"
            stroke="url(#blueGradient)"
            strokeWidth="1.5"
          />
          <path
            d="M-50,170 Q200,100 450,180 T950,160 T1450,140"
            stroke="url(#blueGradient)"
            strokeWidth="1"
            opacity="0.7"
          />
          <path
            d="M-50,190 Q200,120 450,200 T950,180 T1450,160"
            stroke="url(#blueGradient)"
            strokeWidth="0.5"
            opacity="0.4"
          />

          {/* Bottom Elegant Waves */}
          <path
            d="M-50,600 Q250,680 550,590 T1050,640 T1550,580"
            stroke="url(#blueGradient)"
            strokeWidth="1.5"
          />
          <path
            d="M-50,620 Q250,700 550,610 T1050,660 T1550,600"
            stroke="url(#blueGradient)"
            strokeWidth="1"
            opacity="0.7"
          />
          <path
            d="M-50,640 Q250,720 550,630 T1050,680 T1550,620"
            stroke="url(#blueGradient)"
            strokeWidth="0.5"
            opacity="0.4"
          />

          <defs>
            <linearGradient
              id="blueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1fa8e8" />
              <stop offset="50%" stopColor="#0c7dc2" />
              <stop offset="100%" stopColor="#6dbb45" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative ambient color spots */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* ==========================================================
         3. STREAMING_CHUNK: Centered Header & Introduction Section
         ========================================================== */}
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-extrabold uppercase tracking-widest border border-[#1fa8e8]/15 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#1fa8e8] animate-pulse" />{" "}
            Patient Testimonials
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Testimonials
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl mx-auto">
            Read what our patients have to say about their recovery journey at
            Dr. Manish Aggarwal's Clinic.
          </p>
        </div>

        {/* ==========================================================
           4. STREAMING_CHUNK: Horizontal scrollable track representing the design
           ========================================================== */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth gap-6 px-4 sm:px-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((patient) => (
              <div
                key={patient.id}
                className="w-[280px] sm:w-[360px] md:w-[390px] flex-shrink-0 snap-start bg-white border border-slate-100/90 rounded-[28px] p-6 sm:p-8 shadow-[0_12px_35px_-8px_rgba(31,168,232,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(109,187,69,0.1)] transition-all duration-300 flex flex-col justify-between cursor-default transform hover:-translate-y-1 relative group"
              >
                {/* Visual quote accent background watermarked */}
                <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-100 opacity-60 group-hover:text-sky-50 transition-colors pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  {/* Doctor/Clinic Verified Seal Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 bg-[#f0fdf4] text-[#4d8f2d] border border-emerald-100 px-2.5 py-1 rounded-full shadow-sm text-[10px] font-extrabold tracking-wide">
                      <HeartPulse className="w-3 h-3 text-[#6dbb45]" />
                      <span>Verified Recovery</span>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(patient.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Header Row: Initials Circle, Name & Subtitle */}
                  <div className="flex items-center gap-3.5">
                    {/* Circle Placeholder with Capitalized First Letter */}
                    <div className="w-8 h-8 aspect-square
                     sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#1fa8e8] to-[#6dbb45] text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm">
                      {patient.initial}
                    </div>

                    <div className="text-left min-w-0">
                      <h4 className="text-sm font-extrabold text-slate-800 tracking-wide truncate">
                        {patient.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-bold block mt-0.5 uppercase tracking-wider truncate">
                        {patient.role} &bull; {patient.location}
                      </p>
                    </div>
                  </div>

                  {/* Custom Testimonial Content Block */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium text-justify line-clamp-6">
                    "{patient.text}"
                  </p>
                </div>

                {/* Card verification footer standard */}
                <div className="pt-4 mt-5 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Delhi Lung & Bronchoscopy Center Patient</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest animate-pulse">
          Swipe horizontally to explore more reviews
        </p>
      </div>
    </section>
  );
}
