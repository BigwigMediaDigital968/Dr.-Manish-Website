"use client";

import React from "react";
import {
  MapPin,
  Mail,
  ChevronRight,
  ArrowRight,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

interface AppointmentProcessProps {
  onBookClick?: () => void;
}

export default function AppointmentProcess({
  onBookClick = () => {},
}: AppointmentProcessProps) {
  const steps = [
    {
      num: "01",
      title: "Make An Appointment",
      desc: "Connect with our clinic desk directly or reserve your diagnostic checkup slot online in under 2 minutes.",
    },
    {
      num: "02",
      title: "Get A Consultation",
      desc: "Discuss your chronic coughing, breathing struggles, or sleeping disorders with Dr. Manish Aggarwal.",
    },
    {
      num: "03",
      title: "Undergo Diagnostics",
      desc: "Get fast, precise insights through state-of-the-art spirometry, DLCO lung testing, or home sleep studies.",
    },
    {
      num: "04",
      title: "Enjoy Your Therapy",
      desc: "Receive customized pulmonary plans, CPAP optimization, or interventional care to breathe and sleep soundly.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 px-4 bg-white overflow-hidden text-slate-900"
    >
      {/* Dynamic Brand Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#1fa8e8]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-12 left-10 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT COLUMN: PERSUASIVE CONTENT & QUICK CONTACTS ================= */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8 text-center sm:text-left">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Patient
                Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Easy Steps To Get <br />
                <span className="bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                  Pulmonary Services
                </span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
                Our clinic has streamlined the process from booking to
                diagnostics to treatment so you can focus entirely on your path
                to recovery.
              </p>
            </div>

            {/* Quick Contacts Panel aligned exactly with image_9cb3d8.jpg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-y border-slate-100">
              {/* Location Badge */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    Our Location
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">
                    JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034
                  </p>
                </div>
              </div>

              {/* Email Badge */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#6dbb45]/10 text-[#6dbb45] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    Our Email
                  </h4>
                  <a
                    href="mailto:Aggarmanish@gmail.com"
                    className="text-[11px] text-slate-500 hover:text-[#1fa8e8] font-medium mt-1 block break-all"
                  >
                    Aggarmanish@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Sub-text and Main CTA Button */}
            <div className="space-y-4 pt-2">
              <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto sm:mx-0">
                Need urgent assistance? Connect with Dr. Manish Aggarwal's
                medical helpdesk.
              </p>
              <Link
                href="/contact"
                className="inline-flex px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] hover:to-[#1fa8e8] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-sky-100/60 hover:scale-[1.02] active:scale-[0.98] transition-all items-center justify-center gap-2 mx-auto sm:mx-0 cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ================= CENTER COLUMN: COMPACT CLINICAL CHECKUP PORTRAIT ================= */}
          <div className="lg:col-span-4 flex items-center justify-center">
            {/* Aspect Ratio matched precisely to image_9cb3d8.jpg */}
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-50/50 group">
              <img
                src="/appointment.png"
                alt="Doctor consulting respiratory patient"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Soft overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: EXPLICIT MEDICAL STEPS ================= */}
          <div className="lg:col-span-4 space-y-6">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="flex items-start gap-4 p-4 rounded-3xl border border-slate-100 hover:border-[#1fa8e8]/20 bg-slate-50/50 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                {/* Glowing Progressive Step Indicator Ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1fa8e8] to-[#6dbb45] text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-sky-100/50 group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-slate-100 hidden lg:block" />
                  )}
                </div>

                {/* Step Details */}
                <div className="flex-1 space-y-1">
                  <h3 className="font-extrabold text-sm text-slate-800 tracking-tight group-hover:text-[#1fa8e8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
