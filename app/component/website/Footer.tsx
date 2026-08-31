"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

/* ── data ─────────────────────────────────────────────────── */

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  // { label: "Gallery", href: "#" },
];

const supportLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms" },
];

const socials = [
  // { icon: FaFacebook, href: "#", label: "Facebook" },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@drmanishaggarwal",
    label: "YouTube",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dr-manish-aggarwal/",
    label: "LinkedIn",
  },
  { 
    icon: FaFacebook, 
    href: "https://www.facebook.com/profile.php?id=61591562684744", 
    label: "Twitter/X" 
  },
   { 
     icon: FaInstagram, 
     href: "https://www.instagram.com/dr_manish_aggarwal/", 
     label: "Instagram" 
   },
];

const contactItems = [
  {
    icon: MapPin,
    text: "JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034",
  },
  { icon: Phone, text: "+91 98995 54095" },
  { icon: Mail, text: "Aggarmanish@gmail.com" },
];

/* ── component ────────────────────────────────────────────── */

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative w-full mt-28">
      {/* ── wave top shape ─────────────────────────────────── */}
      <div className="relative bg-transparent">
        {/* The pointed mountain / wave svg */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(60px,10vw,120px)" }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bfdfef" />
              <stop offset="50%" stopColor="#d4ebf5" />
              <stop offset="100%" stopColor="#bfdfef" />
            </linearGradient>
          </defs>
          {/* Two-peak mountain wave */}
          <path
            d="M0,120 L0,80 Q180,120 360,80 Q540,40 720,0 Q900,40 1080,80 Q1260,120 1440,80 L1440,120 Z"
            fill="url(#waveGrad)"
          />
        </svg>

        {/* Floating logo badge — sits above the wave */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{ bottom: "calc(clamp(60px,10vw,120px) - 16px)" }}
        >
          <div
            className="relative flex flex-col items-center justify-center rounded-[28px] p-3 shadow-2xl"
            style={{
              // background: "linear-gradient(145deg, #1fa8e8 0%, #0c7dc2 100%)",
              boxShadow:
                "0 8px 40px rgba(31,168,232,0.45), 0 2px 8px rgba(12,125,194,0.3)",
              // width: "clamp(110px,14vw,148px)",
            }}
          >
            {/* Shield shape overlay */}
            <div
              className="absolute inset-0 rounded-[28px] opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 60%)",
              }}
            />
            <Image
              src="/footer-logo.jpeg"
              alt="Delhi Lung & Bronchoscopy Center"
              width={100}
              height={100}
              className="rounded-xl object-cover relative z-10"
            />
          </div>
        </div>
      </div>

      {/* ── main footer body ───────────────────────────────── */}
      <div
        className="relative w-full pt-16 pb-0"
        style={{
          background:
            "linear-gradient(160deg, #c8e6f5 0%, #d8eef8 40%, #bfd9ee 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr] lg:gap-8">
            {/* Col 1 — brand + contact */}
            <div
              className="animate-[footerFadeUp_0.6s_ease_both]"
              style={{ animationDelay: "0ms" }}
            >
              <h2
                className="text-lg font-bold leading-snug text-[#0f172a]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Delhi Lung & Bronchoscopy Centre
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#3d6b8a]">
                Expert pulmonology & sleep treatment in New Delhi. Breathe
                better, live fuller.
              </p>

              <ul className="mt-6 space-y-3">
                {contactItems.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-sm text-[#2d5a78]"
                  >
                    <span
                      className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full"
                      style={{ background: "rgba(31,168,232,0.18)" }}
                    >
                      <Icon className="h-3.5 w-3.5 text-[#1fa8e8]" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 — quick links */}
            <NavColumn
              title="Quick Links"
              links={quickLinks}
              pathname={pathname}
              delay={100}
            />

            {/* Col 3 — support */}
            <NavColumn
              title="Support"
              links={supportLinks}
              pathname={pathname}
              delay={200}
            />

            {/* Col 4 — Doctor Profile */}
            <div
              className="animate-[footerFadeUp_0.6s_ease_both] text-center flex flex-col items-center"
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0c7dc2]">
                MEET THE DOC
              </h3>

              <span
                className="mt-2 mb-3 block h-0.5 w-8 rounded-full"
                style={{
                  background: "linear-gradient(90deg,#1fa8e8,#6dbb45)",
                }}
              />

              <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-lg backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative overflow-hidden rounded-xl border-2 border-[#1fa8e8]/20"
                    style={{ width: "160px" }}
                  >
                    <img
                      src="/dr-image.jpeg" // Replace with your image
                      alt="Dr Manish Aggarwal"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="text-left">
                    <h3
                      className="text-xl font-extrabold text-[#0f172a]"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      Dr. Manish Aggarwal
                    </h3>

                    <p className="mt-1 text-xs bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
                      Principal Director <br /> Chest Disease & Interventional
                      Pulmonology, Max Hospital
                    </p>

                    <div className="mt-2 inline-flex items-center rounded-full bg-[#1fa8e8]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0c7dc2]">
                      24+ Years Experience
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <a
                  href="/about"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(110deg,#1fa8e8,#6dbb45)",
                  }}
                >
                  View Doctor Profile
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── bottom bar ─────────────────────────────────────── */}
        <div
          className="relative mt-12 w-full"
          style={{
            background: "rgba(12,125,194,0.22)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row lg:px-12">
            {/* Copyright */}
            <p className="text-center text-xs text-[#2d5a78]">
              © {new Date().getFullYear()} Delhi Lung & Bronchoscopy Centre. All
              rights reserved.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#2d5a78]">
                Follow Us
              </span>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/30 text-[#0c7dc2] backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-[#1fa8e8] hover:bg-[#1fa8e8] hover:text-white hover:shadow-md"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Brand Integration */}
            <p className="text-center text-xs text-[#2d5a78]">
              Design & Developed by{" "}
              <a href="https://www.bigwigmediadigital.com/">
                Bigwig Media Digital
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* keyframes injected inline so no tailwind config needed */}
      <style>{`
        @keyframes footerFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}

/* ── NavColumn sub-component ──────────────────────────────── */

function NavColumn({
  title,
  links,
  pathname,
  delay,
}: {
  title: string;
  links: { label: string; href: string }[];
  pathname: string;
  delay: number;
}) {
  return (
    <div
      className="animate-[footerFadeUp_0.6s_ease_both]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#0c7dc2]">
        {title}
      </h3>
      <div
        className="mt-1 h-0.5 w-8 rounded-full"
        style={{ background: "linear-gradient(90deg,#1fa8e8,#6dbb45)" }}
      />
      <ul className="mt-4 space-y-2.5">
        {links.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`group flex items-center gap-2 text-sm transition-all duration-200 ${
                  active
                    ? "font-semibold text-[#0c7dc2]"
                    : "font-medium text-[#3d6b8a] hover:text-[#0c7dc2]"
                }`}
              >
                {/* Active dot / hover arrow */}
                <span
                  className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ${
                    active
                      ? "scale-125 bg-[#1fa8e8]"
                      : "bg-[#94a3b8] group-hover:bg-[#1fa8e8]"
                  }`}
                />
                {label}
                {active && (
                  <span
                    className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                    style={{
                      background: "linear-gradient(90deg,#1fa8e8,#6dbb45)",
                    }}
                  >
                    Active
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
