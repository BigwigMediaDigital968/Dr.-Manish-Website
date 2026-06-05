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
    name: "Suresh Kumar",
    initial: "S",
    role: "Asthma & Chronic Cough Treatment",
    location: "Pitampura",
    text: "Dr Manish Aggarwal is one of the best pulmonologists in Pitampura for asthma and chronic cough treatment. Very caring and knowledgeable doctor.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali Sharma",
    initial: "A",
    role: "COPD Management & Chest Specialist",
    location: "Delhi",
    text: "Excellent chest specialist in Delhi for breathing problems and COPD management. Highly satisfied with the treatment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajeev Mehta",
    initial: "R",
    role: "Wheezing & Allergy Cough Relief",
    location: "Pitampura",
    text: "Best asthma specialist in Pitampura. My wheezing and allergy cough improved significantly after treatment.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kamla Devi",
    initial: "K",
    role: "ILD & Lung Fibrosis Care",
    location: "Delhi",
    text: "Highly experienced ILD specialist and lung fibrosis specialist. Explained everything in detail and managed my condition very well.",
    rating: 5,
  },
  {
    id: 5,
    name: "Deepak Gupta",
    initial: "D",
    role: "Bronchoscopy & Interventional Pulmonology",
    location: "Delhi",
    text: "Dr Manish Aggarwal is a very skilled bronchoscopy expert and interventional pulmonologist in Delhi.",
    rating: 5,
  },
  {
    id: 6,
    name: "Preeti Verma",
    initial: "P",
    role: "Chronic Cough Clinic",
    location: "Pitampura",
    text: "One of the best chronic cough clinics in Pitampura. My persistent cough was diagnosed correctly after months of suffering.",
    rating: 5,
  },
  {
    id: 7,
    name: "Rahul Bansal",
    initial: "R",
    role: "COPD & Chest Rehabilitation",
    location: "Delhi",
    text: "Very experienced COPD specialist and chest specialist in Delhi. My father’s breathing improved remarkably.",
    rating: 5,
  },
  {
    id: 8,
    name: "Vikram Saxena",
    initial: "V",
    role: "Sleep Apnea & Snoring Therapy",
    location: "Delhi",
    text: "Best sleep apnea doctor in Delhi. Helped me with snoring and sleep-related breathing problems.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sunil Jain",
    initial: "S",
    role: "Severe Asthma Care",
    location: "Pitampura",
    text: "Excellent pulmonologist in Pitampura for severe asthma and chronic respiratory disease treatment.",
    rating: 5,
  },
  {
    id: 10,
    name: "Harish Nanda",
    initial: "H",
    role: "Complicated ILD Staging",
    location: "Delhi",
    text: "Highly recommended lung fibrosis specialist and ILD specialist for complicated lung disease cases.",
    rating: 5,
  },
  {
    id: 11,
    name: "Arun Tyagi",
    initial: "A",
    role: "Interventional Pulmonologist",
    location: "Delhi",
    text: "Dr Manish Aggarwal is an outstanding interventional pulmonologist and bronchoscopy expert with great patient care.",
    rating: 5,
  },
  {
    id: 12,
    name: "Meenakshi Khanna",
    initial: "M",
    role: "Recurrent Chest Infection",
    location: "Delhi",
    text: "Best chest specialist in Delhi for recurrent chest infection and chronic cough treatment.",
    rating: 5,
  },
  {
    id: 13,
    name: "Sanjay Rawat",
    initial: "S",
    role: "Asthma & COPD Specialist",
    location: "Delhi",
    text: "Very professional asthma specialist and COPD specialist. The clinic staff and treatment both are excellent.",
    rating: 5,
  },
  {
    id: 14,
    name: "Gopal Prasad",
    initial: "G",
    role: "Lung Fibrosis & ILD Care",
    location: "Pitampura",
    text: "One of the most trusted pulmonologists in Pitampura for lung fibrosis, ILD and difficult breathing problems.",
    rating: 5,
  },
  {
    id: 15,
    name: "Neetu Aggarwal",
    initial: "N",
    role: "Sleep Disorders Specialist",
    location: "Delhi",
    text: "Excellent sleep apnea doctor and chest specialist in Delhi. My sleep quality improved after treatment.",
    rating: 5,
  },
  {
    id: 16,
    name: "Jitendra Mishra",
    initial: "J",
    role: "Advanced Bronchoscopy",
    location: "Delhi",
    text: "Highly recommended bronchoscopy expert for advanced chest procedures and respiratory care.",
    rating: 5,
  },
  {
    id: 17,
    name: "Karan Dutt",
    initial: "K",
    role: "Chronic Cough Clinic",
    location: "North Delhi",
    text: "Best chronic cough clinic and asthma specialist in North Delhi. Accurate diagnosis and genuine advice.",
    rating: 5,
  },
  {
    id: 18,
    name: "Rita Sen",
    initial: "R",
    role: "Interventional Pulmonologist",
    location: "Delhi",
    text: "Very experienced ILD specialist and interventional pulmonologist. Extremely satisfied with the treatment approach.",
    rating: 5,
  },
  {
    id: 19,
    name: "Vikas Patel",
    initial: "V",
    role: "COPD & Asthma Recovery",
    location: "Pitampura",
    text: "Dr Manish Aggarwal is a top pulmonologist in Pitampura for COPD, asthma and chronic lung disease management.",
    rating: 5,
  },
  {
    id: 20,
    name: "Nirmala Goel",
    initial: "N",
    role: "Pulmonary Disease Expert",
    location: "Delhi",
    text: "Excellent lung fibrosis specialist and chest specialist in Delhi. Very patient-friendly doctor with deep expertise in pulmonary diseases.",
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1fa8e8] to-[#6dbb45] text-white flex items-center justify-center font-black text-lg shadow-sm">
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
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium text-justify">
                    "{patient.text}"
                  </p>
                </div>

                {/* Card verification footer standard */}
                <div className="pt-4 mt-5 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Delhi Lung & Sleep Centre Patient</span>
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
