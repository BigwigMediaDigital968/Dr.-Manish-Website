"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, Heart, Activity, User } from "lucide-react";

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
    name: "Pooja Rajput",
    role: "Trusted Patient",
    stars: 5,
    text: "We consulted Dr. Manish Aggarwal at his pitampura clinic for my grandmother's sleep related problems and our experience was excellent. The doctor was very patient,kind,and took time to understand her conditional properly. The evaluation and treatment were explained clearly. With the doctors guidance and treatment , my grandmother is doing much better now and her sleep has improved significantly. Highly recommend for anyone looking for a knowledgeable and compassionate pulmonologist.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Anjana Kapoor",
    role: "Trusted Patient",
    stars: 5,
    text: "Dr. Manish Aggarwal is a absolutely one of the best doctors!! Both me and my mother in law have visited her for chest infections and loved the experience of taking treatment by her. He is like godsend to us and very much knowledgeable in his field. He listens health concerns very patiently and responds appropriately... I strongly recommend to anyone having any respiratory issues to consult him.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Naresh Chhabra",
    role: "Trusted Patient",
    stars: 5,
    text: "Dr Manish Aggarwal is the best Chest Specialist I have ever seen. My wife had very serious breathing problems 3-4 yrs back. She was a chronic Asthma Patient.I took treatment for her from several Chest Specialists in Delhi. I even took treatment from Medanta but only temporary relief she could get. I was very disappointed and had lost hope but suddenly God helped me thru someone and directed me to meet Dr Manish. Now she is taking treatment from him. A lot of betterment she is feeling now . Dr Manish has even stopped giving Steroids to her. When patients go to him, he treats them well. We feel personal touch. He treats us as his elder family members.I wish him the very best in his life. God bless him.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Monica Sharma",
    role: "Trusted Patient",
    stars: 5,
    text: "Dr. Manish Aggarwal is an excellent pulmonologist and a genuinely caring doctor. From our personal experience, we found him patient, compassionate, and very reassuring throughout the treatment process. He explains everything clearly and makes his patient feel comfortable and this truly makes a difference. Highly recommend Dr. Manish Aggarwal to anyone looking for a dedicated, skilled pulmonologist with a compassionate heart.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    name: "Manish Dixit",
    role: "Trusted Patient",
    stars: 5,
    text: "Dr. Manish Aggarwal is an exceptionally professional and experienced pulmonologist. He is thorough in his diagnosis, attentive to patient concerns, and explains treatment plans with great clarity and patience. His compassionate approach and clinical expertise create a strong sense of trust and confidence. The overall consultation experience was highly satisfactory, and the treatment provided was effective. Highly recommended for anyone seeking quality respiratory and chest care.",
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
      className="relative w-full bg-slate-50 overflow-hidden text-slate-900 border-y border-slate-100 py-18 sm:px-8"
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
          <div className="lg:col-span-6 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 bg-white relative">
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
                      

                      {/* Diagnostic Recovery story */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-5">
                        "{item.text}"
                      </p>
                      <div className="flex items-center gap-4 mb-4 mt-6">
                        {/* <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        /> */}
                        {/* <div className="rounded-full p-4 object-cover border-2 border-white">
                          <User
                            className="w-8 h-8 rounded-full"
                          />
                        </div> */}
                        <div>
                          <h4 className="text-sm font-black text-[#1fa8e8] tracking-wide leading-tight">
                            {item.name}
                          </h4>
                          {/* <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-0.5">
                            {item.role}
                          </span> */}
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
