"use client";

import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

interface AboutHeroProps {
  onContactClick?: () => void;
  onBookClick?: () => void;
}

export default function AboutHero({
  onContactClick = () => (window.location.href = "/contact"),
}: AboutHeroProps) {
  return (
    <section
      id="about-hero"
      className="=min-h-screen pt-36 pb-14 flex flex-col justify-center overflow-x-hidden bg-gradient-to-r from-[#1fa8e8] via-[#0c7dc2] to-[#1289cf] text-white"
    >
      {/* Main Grid: Info text Left & Clinician Cutout Right */}
      <div className="mx-auto max-w-7xl w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* ================= LEFT PANEL: HEADLINE & CONTENT ================= */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider self-center lg:self-start">
            <Activity className="w-3.5 h-3.5 text-[#6dbb45]" /> India's Trusted
            Name in Advanced Chest & Sleep Disorder Treatment
          </div>
          <h3 className="text-md font-medium uppercase">
            Meet Dr. Manish Aggarwal
          </h3>

          {/* Large Headliner */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
            Leading Pulmonologist <br />
            <span className="text-emerald-100">
              & Sleep Disorder Specialist in Delhi.
            </span>
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Dr. Manish Aggarwal, Principal Director - Department of Chest
            Disease & Interventional Pulmonologist at Max Hospital recognized for his expertise
            in bronchoscopy, asthma, COPD, ILD, sleep medicine, and advanced
            lung disease management. Backed by extensive academic leadership and
            international experience, he is committed to delivering world-class
            respiratory care with precision, transparency, and compassion.
          </p>

          {/* Primary Action Button linking to Contact */}
          <div className="pt-2 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0c7dc2] hover:bg-[#6dbb45] hover:text-white font-medium text-sm tracking-wide shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Our Clinic
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ================= RIGHT PANEL: CLINICIAN PORTRAIT CUTOUT ================= */}
        <div className="lg:col-span-5 relative hidden md:flex justify-center lg:justify-end select-none h-full min-h-[350px] lg:min-h-[460px] self-end">
          {/* Glowing Aura ring backdrop */}
          <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 border border-white/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Clinician Cutout Frame pointing inwards exactly resembling image_598ec4.jpg */}
          <img
            src="/dr-image.jpeg"
            alt="Male Chest Physician Delhi"
            className="relative object-cover object-top h-[320px] lg:h-[550px] w-auto rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] shrink-0 z-10"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
