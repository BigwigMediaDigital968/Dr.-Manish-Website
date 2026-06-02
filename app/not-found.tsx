"use client";

import React from "react";
import {
  ArrowLeft,
  Home,
  PhoneCall,
  Calendar,
  Wind,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";
import Navbar from "./component/website/Navbar";
import Footer from "./component/website/Footer";

interface NotFoundProps {
  onGoHome?: () => void;
  onBookClick?: () => void;
}

export default function NotFound({
  onGoHome = () => (window.location.href = "/"),
  onBookClick = () => {},
}: NotFoundProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16 relative overflow-hidden text-slate-900 selection:bg-[#1fa8e8] selection:text-white">
        {/* Embedded CSS Animations for Air-Flow Breathing & Grid Effects */}
        <style>{`
        @keyframes gentle-breathe {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.85; }
          50% { transform: scale(1.08) translateY(-4px); opacity: 1; }
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-breathe {
          animation: gentle-breathe 4s ease-in-out infinite;
        }
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>

        {/* Decorative Brand Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1fa8e8]/8 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6dbb45]/6 rounded-full blur-[100px] -z-10" />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-60" />

        {/* Main Content Card Container */}
        <div className="max-w-xl w-full text-center space-y-8 bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/50 shadow-2xl shadow-sky-100/40 relative z-10">
          {/* Animated Clinical Medical Icon Visual Group */}
          <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
            {/* Pulsing Back Ring */}
            <div className="absolute inset-0 rounded-full bg-[#1fa8e8]/10 animate-ping duration-[3000ms]" />

            {/* Slow Spinning Airway Flow Pattern */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#6dbb45]/30 animate-slow-spin" />

            {/* Main Glowing Circle */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0c7dc2] to-[#1fa8e8] text-white flex items-center justify-center shadow-lg relative z-10 animate-breathe">
              <Wind className="w-10 h-10" />
            </div>
          </div>

          {/* Big Stylized Error Numbers */}
          <div className="space-y-2">
            <h1 className="text-8xl font-black bg-gradient-to-r from-[#0c7dc2] via-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent tracking-tighter leading-none select-none">
              404
            </h1>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              Lost in the Air?
            </h2>
          </div>

          {/* Therapeutic Reassuring Message */}
          <div className="space-y-4 max-w-sm mx-auto">
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Take a deep breath in, and let it out. The pulmonary pathway you
              are looking for seems to have changed course or is temporarily
              unavailable.
            </p>
            <div className="h-[1px] w-12 bg-slate-200 mx-auto" />
          </div>

          {/* Quick Action Navigation Grid */}
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            {/* Primary back to safety CTA */}
            <button
              onClick={onGoHome}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] hover:from-[#0c7dc2] hover:to-[#4d8f2d] text-white font-bold text-sm tracking-wide shadow-md shadow-sky-200/50 hover:shadow-emerald-200/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" /> Go Back to Homepage
            </button>

            {/* Secondary consultation trigger */}
            <Link
              href="/contact"
              className="w-full py-3.5 px-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1fa8e8]/30 hover:bg-slate-50 text-slate-700 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#1fa8e8]" /> Book Consultation
            </Link>
          </div>

          {/* Bottom Helpful Contact Helpdesk footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-500 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-[#6dbb45] animate-pulse" />{" "}
              Delhi Lung & Sleep Centre
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-[#0c7dc2] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#1fa8e8]" /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
