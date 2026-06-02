"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, Heart, Activity } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  stars: number;
  text: string;
  avatar: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Khanna",
    role: "Asthma Patient",
    stars: 5,
    text: "Years of struggling with chronic asthma and coughing ended within weeks of Dr. Manish Aggarwal's treatment plan. The spirometry diagnostic was thoroughly explained, and the custom inhaler therapy gave me my active life back.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Sunita Deshmukh",
    role: "Sleep Apnea Patient",
    stars: 5,
    text: "The overnight sleep study suite was extremely premium and comfortable. After being diagnosed with severe Obstructive Sleep Apnea, Dr. Aggarwal set up my CPAP therapy. I sleep soundly now and wake up energized!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Chronic Bronchitis Patient",
    stars: 5,
    text: "Superb clinical diagnosis. Dr. Manish Aggarwal is highly professional. The EBUS staging diagnostics were exceptionally accurate, and the follow-ups were handled with immense warmth and clinical care.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Priyanjali Sen",
    role: "Mother of Pediatric Patient",
    stars: 5,
    text: "When my child accidentally inhaled a small toy part, the clinic coordinated an urgent foreign body bronchoscopy extraction. Dr. Aggarwal's swift intervention saved my child's life. Truly grateful!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    name: "Devendra Joshi",
    role: "ILD (Lung Fibrosis) Patient",
    stars: 5,
    text: "Staging and managing interstitial lung disease is incredibly challenging, but the comprehensive therapies and targeted DLCO lung diagnostics here have stabilized my breathing parameters. Excellent team.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate logic: advance slide index every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length,
        );
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-slate-50 overflow-hidden text-slate-900 border-y border-slate-100 py-18 px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
          {/* ================= LEFT SIDE: OVERLAY WITH WASH GRADIENT ================= */}
          <div className="relative lg:col-span-6 min-h-[300px] lg:min-h-full overflow-hidden flex items-center justify-center">
            {/* Background Medical Illustration / Consultation Image */}
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Lung Consultation"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Translucent Teal/Blue Wash Overlay precisely matching image_9db29b.png */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1fa8e8]/85 via-[#0c7dc2]/70 to-[#6dbb45]/80 mix-blend-multiply" />

            {/* Floating Brand Badge Overlay inside visual */}
            <div className="relative z-10 text-center px-8 py-12 text-white space-y-4">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-lg">
                <Heart className="w-7 h-7 text-white fill-white/10 animate-pulse" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                99.4% Patient <br />
                Satisfactory Care
              </h3>
              <p className="text-xs text-white/90 font-medium max-w-xs mx-auto">
                Real recovery testimonies from chest diseases, respiratory
                challenges and chronic sleep disorders.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE: PATIENT FEEDBACK LIST ================= */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 bg-white relative">
            {/* Section Header */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-[#1fa8e8]" /> Patient
                Feedback
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Testimonials
              </h2>
              <p className="text-slate-500 text-sm max-w-md">
                Listen to the inspiring medical recovery journeys of patients
                diagnosed and treated by our pulmonary team.
              </p>
            </div>

            {/* Testimonial Carousel Viewport */}
            <div className="relative overflow-hidden min-h-[220px] py-2">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {TESTIMONIALS_DATA.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    {/* Testimonial Content Card Frame precisely matching image_9db29b.png */}
                    <div className="p-6 sm:p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm relative group transition-all duration-300">
                      {/* Quote Floating Background Icon */}
                      <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-200/40 pointer-events-none" />

                      {/* Header containing Patient Avatar, Stars & Clinical Info */}
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <div>
                          <h4 className="text-sm font-black text-[#1fa8e8] tracking-wide leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                            {item.role}
                          </span>
                        </div>

                        {/* Gold Star Ratings */}
                        <div className="flex items-center gap-0.5 ml-auto bg-white px-2.5 py-1 rounded-full border border-slate-100 shadow-sm">
                          {Array.from({ length: item.stars }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Diagnostic Recovery story */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Nav indicators precisely representing image_9db29b.png navigation dots */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Show testimonial page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
