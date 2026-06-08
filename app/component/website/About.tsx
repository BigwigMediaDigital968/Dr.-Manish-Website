"use client";

import React from "react";
import {
  Phone,
  Mail,
  ChevronRight,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";
import { LiaInstagram, LiaLinkedin } from "react-icons/lia";
import Popup from "./Popup";
import Image from "next/image";

export default function About() {
  const [isBookModalOpen, setIsBookModalOpen] = React.useState(false);
  return (
    <>
      {" "}
      <section
        id="about"
        className="relative py-14 md:py-18 px-4 bg-white overflow-hidden text-slate-900"
      >
        {/* Decorative Brand Ambient Glows */}
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#1fa8e8]/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Main Grid Layout from image_fe18cc.png */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* ================= LEFT COLUMN ================= */}
            <div
              className="flex flex-col justify-between h-full space-y-12 lg:space-y-24 rounded-lg bg-cover bg-center p-10"
              style={{
                backgroundImage: "url('/about-image.png')",
              }}
            >
              {/* Catchy Left Heading */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
                  <HeartHandshake className="w-3.5 h-3.5 animate-pulse" /> Our
                  Philosophy
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Restoring Healthy Breathing: <br />
                  <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                    Our Journey & Promise
                  </span>
                </h2>
              </div>

              {/* Bottom Part of Left Column (Pills & Tagline) */}
              <div className="space-y-6 text-center lg:text-left pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold text-slate-800 leading-snug">
                  Caring for Your Lungs & Sleep, Right Here in Delhi.
                </h4>

                {/* Capsule Hashtag Badges from image_fe18cc.png */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#1fa8e8]/40 hover:text-[#0c7dc2] transition-all duration-300 text-xs font-bold tracking-wide shadow-sm hover:shadow-md cursor-default flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1fa8e8]" />{" "}
                    #PulmonaryCare
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#6dbb45]/40 hover:text-[#4d8f2d] transition-all duration-300 text-xs font-bold tracking-wide shadow-sm hover:shadow-md cursor-default flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#6dbb45]" />{" "}
                    #SleepDiagnostics
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:border-[#1fa8e8]/40 hover:text-[#0c7dc2] transition-all duration-300 text-xs font-bold tracking-wide shadow-sm hover:shadow-md cursor-default flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1fa8e8]" />{" "}
                    #DrManishAggarwal
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="space-y-8">
              {/* Small Top Tag Label */}
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">
                  About us
                </span>

                {/* Core Journey Narrative */}
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  At Delhi Lung & Bronchoscopy Center, we started with a clear
                  clinical mission: to make advanced pulmonology, bronchoscopy
                  interventions, and state-of-the-art sleep studies highly
                  accessible, accurate, and deeply compassionate.
                </p>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  What makes our clinic unique is the comprehensive clinical
                  precision and individual care Dr. Manish Aggarwal brings to
                  patients suffering from Asthma, COPD, Interstitial Lung
                  Disease (ILD), and complex Sleep Apnea. Whether addressing
                  urgent pediatric airway foreign bodies or utilizing advanced
                  EBUS staging, we are committed to helping you restore sound
                  breathing and peaceful sleep.
                </p>
              </div>

              {/* Premium Integrated Details & Profile Subcard from image_fe18cc.png */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch mt-8">
                {/* Contact Card Info Pane */}
                <div className="sm:col-span-7 bg-[#6dbb45]/5 hover:bg-[#6dbb45]/10 border border-[#6dbb45]/15 p-6 rounded-[28px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/30">
                  <div className="space-y-2">
                    <h5 className="text-sm font-bold text-[#4d8f2d] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 animate-bounce" /> Delhi Lung
                      & Sleep Centre
                    </h5>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Bringing compassionate, premium-grade respiratory
                      diagnoses & sleep evaluations directly to your care cycle.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/50 space-y-3 mt-4">
                    {/* Contacts details */}
                    <div className="flex flex-col space-y-2 text-xs font-bold text-slate-700">
                      <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 hover:text-[#0c7dc2] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#1fa8e8]" /> +91
                        98765 43210
                      </a>
                      <a
                        href="mailto:info@delhilungandsleep.com"
                        className="flex items-center gap-2 hover:text-[#0c7dc2] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#1fa8e8]" />{" "}
                        info@delhilungandsleep.com
                      </a>
                    </div>

                    {/* Social Channels */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white shadow-sm border border-slate-100 text-slate-500 hover:text-[#0c7dc2] hover:shadow-md transition-all duration-300"
                      >
                        <LiaLinkedin className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white shadow-sm border border-slate-100 text-slate-500 hover:text-pink-600 hover:shadow-md transition-all duration-300"
                      >
                        <LiaInstagram className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Doctor Avatar Profile Card */}
                <div className="sm:col-span-5 bg-gradient-to-tr from-[#1fa8e8]/5 to-sky-100/50 rounded-[28px] overflow-hidden border border-slate-150 p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#1fa8e8] to-[#6dbb45] p-0.5 shadow-md mb-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-sky-50 flex items-center justify-center text-[#1fa8e8]">
                      {/* Doctor Avatar representation */}
                      <Image
                        src="/dr-image.png"
                        alt="Dr. Manish Aggarwal"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                  </div>

                  <h6 className="text-xs font-extrabold text-slate-800 leading-tight">
                    Dr. M. Aggarwal
                  </h6>
                  <p className="text-[10px] text-slate-500 font-bold mt-0.5 uppercase tracking-wide">
                    Senior Director
                  </p>

                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="mt-3 text-[16px] font-extrabold text-[#1fa8e8] flex items-center gap-0.5 hover:text-[#0c7dc2] transition-colors cursor-pointer"
                  >
                    Consult{" "}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
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
