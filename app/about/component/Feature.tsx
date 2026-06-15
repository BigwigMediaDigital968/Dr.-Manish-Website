"use client";

import { ArrowRight, Clock, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Feature() {
  return (
    <>
      <div className="w-full px-4 md:px-8 my-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* CARD 1: EMERGENCY CASE (Prominent popout card block) */}
          <div className="bg-gradient-to-br from-[#6dbb45] to-[#4d8f2d] text-white p-6 rounded-3xl shadow-2xl border border-[#6dbb45]/30 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-extrabold uppercase tracking-widest">
                Emergency Case
              </span>
              <h3 className="text-base font-extrabold tracking-tight leading-none">
                Urgent Chest & Airway Distress
              </h3>
              <p className="text-white/80 text-[11px] leading-relaxed">
                Connect directly with Manish Aggarwal for
                child foreign body inhalation or respiratory failure support.
              </p>
            </div>

            <a
              href="tel:+919899554095"
              className="mt-6 pt-3 border-t border-white/25 flex items-center justify-between text-xs font-bold hover:text-emerald-100 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" /> +91 98995 54095
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* CARD 2: OPENING HOURS */}
          <div className="bg-white text-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-[9px] font-extrabold uppercase tracking-widest">
                Opening Hours
              </span>
              <h3 className="text-base font-extrabold tracking-tight leading-none">
                OPD Clinical Schedule
              </h3>

              {/* Working hours slots */}
              <div className="space-y-1.5 pt-2 text-[11px] text-slate-500 font-medium">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-bold text-slate-700">
                    09:00 AM - 07:00 PM
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-50 pt-1.5">
                  <span>Sunday</span>
                  <span className="font-bold text-[#6dbb45]">
                    By Appointment Only
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#0c7dc2] font-bold">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1fa8e8]" /> Mon - Sat: Open
              </span>
            </div>
          </div>

          {/* CARD 3: LUNG CANCER & PREVENTATIVE CHEST CARE */}
          <div className="bg-white text-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6dbb45]/10 text-[#4d8f2d] text-[9px] font-extrabold uppercase tracking-widest">
                Preventative Medicine
              </span>
              <h3 className="text-base font-extrabold tracking-tight leading-none">
                COPD & Lung Cancer Care
              </h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Focused early screenings incorporating low-dose CT guidance,
                biomarker profiling, and advanced asthma therapy cycles.
              </p>
            </div>

            <Link
              href="/contact"
              className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#6dbb45] font-extrabold hover:text-[#4d8f2d] transition-colors w-full text-left"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#6dbb45]" /> Schedule
                Lung Checkup
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
