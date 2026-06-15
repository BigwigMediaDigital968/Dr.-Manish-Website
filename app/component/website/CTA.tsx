"use client";

import React from "react";
import { ArrowRight, Activity, Calendar, Phone } from "lucide-react";
import Popup from "./Popup";

export default function CTA() {
  const [isBookModalOpen, setIsBookModalOpen] = React.useState(false);
  return (
    <>
      <section className="relative py-16 px-4 bg-white overflow-hidden text-slate-900">
        {/* Background soft ambient glows */}
        <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-[#1fa8e8]/5 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#6dbb45]/5 rounded-full blur-[80px] -z-10" />

        {/* Simplified Brand Gradient Banner Band */}
        <div className="max-w-7xl mx-auto rounded-[32px] bg-gradient-to-r from-[#1fa8e8] via-[#0c7dc2] to-[#6dbb45] text-white overflow-hidden shadow-xl relative">
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* ================= LEFT COLUMN: PERSUASIVE COPY & CTA ACTIONS ================= */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 self-center lg:self-start backdrop-blur-sm">
                <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-100">
                  Specialized Pulmonary Therapy
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Having A Breathing Problem? <br />
                <span className="text-emerald-100 drop-shadow-sm">
                  Try Our Therapy Today
                </span>
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Don't compromise on shortness of breath, chronic coughing, or
                interrupted sleeping patterns. Get diagnosed by Delhi's top
                interventional chest specialists with targeted, modern lung
                therapies.
              </p>

              {/* Main Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0c7dc2] hover:bg-slate-50 font-extrabold text-sm tracking-wide shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                 <Calendar className="w-4.5 h-4.5" /> Book Appointment 
                </button>

                <a
                  href="tel:+919899554095"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Clinic Desk
                </a>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: HIGH-QUALITY PULMONARY IMAGE ================= */}
            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[320px] overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
                alt="Pulmonology Consultation and Lung Care"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
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
