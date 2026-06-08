// "use client";

// import React, { useState } from "react";
// import {
//   Send,
//   CheckCircle,
//   HeartPulse,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// interface FooterProps {
//   onLinkClick?: (section: string) => void;
//   onBookClick?: () => void;
// }

// export default function Footer({
//   onLinkClick = () => {},
//   onBookClick = () => {},
// }: FooterProps) {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
//   const [logoError, setLogoError] = useState(false);

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email.trim()) {
//       setSubscribed(true);
//       setTimeout(() => {
//         setSubscribed(false);
//         setEmail("");
//       }, 3000);
//     }
//   };

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "Services", href: "#services" },
//     { label: "Testimonials", href: "#featured-services" },
//     { label: "Terms", href: "#terms" },
//     { label: "Contact", href: "#contact" },
//     { label: "About", href: "#about" },
//     { label: "Faq", href: "#services" },
//     { label: "News", href: "#featured-services" },
//     { label: "Privacy Policy", href: "#privacy" },
//     { label: "Appointment", href: "#appointment", isCta: true },
//   ];

//   return (
//     <footer className="relative text-slate-300 pt-16 pb-8 px-4 md:px-8 overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/footer-bg.png')",
//         }}
//       />

//       {/* Dark Blue Overlay */}
//       <div className="absolute inset-0 bg-[#031525]/90" />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0c7dc2]/25 via-[#031525]/35 to-[#02101d]/55" />

//       {/* Optional Glow Effects */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1fa8e8]/10 rounded-full blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6dbb45]/10 rounded-full blur-[120px]" />

//       <div className="max-w-7xl mx-auto z-20 relative">
//         {/* Main Grid: Left Column (Brand info) & Right Column (Newsletter + Links) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-12">
//           {/* ================= LEFT COLUMN: LOGO & PROFILE ================= */}
//           <div className="lg:col-span-4 space-y-6 text-center sm:text-left">
//             <a
//               href="#home"
//               className="inline-flex items-center gap-3 group focus:outline-none justify-center sm:justify-start"
//             >
//               {/* Uses logo.png with standard elegant medical cross icon fallback */}

//               <img
//                 src="logo.png"
//                 alt="Delhi Lung & Sleep Centre Logo"
//                 onError={() => setLogoError(true)}
//                 className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
//               />
//             </a>

//             <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
//               Delhi's premier diagnostic and clinical treatment center
//               specializing in advanced lung function tests, interventional
//               pulmonology, overnight sleep studies, and comprehensive
//               respiratory therapy under Dr. Manish Aggarwal.
//             </p>

//             {/* Social Icons matching image_fc4716.png (Enhanced Hover States to use Brand Theme) */}
//             <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
//               {[
//                 {
//                   icon: FaFacebook,
//                   href: "https://facebook.com",
//                   color:
//                     "hover:bg-[#1fa8e8]/20 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/40 border-slate-800",
//                 },
//                 {
//                   icon: FaInstagram,
//                   href: "https://instagram.com",
//                   color:
//                     "hover:bg-[#6dbb45]/20 hover:text-[#6dbb45] hover:border-[#6dbb45]/40 border-slate-800",
//                 },
//                 {
//                   icon: FaTwitter,
//                   href: "https://twitter.com",
//                   color:
//                     "hover:bg-[#1fa8e8]/20 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/40 border-slate-800",
//                 },
//                 {
//                   icon: FaLinkedin,
//                   href: "https://linkedin.com",
//                   color:
//                     "hover:bg-[#0c7dc2]/20 hover:text-[#1fa8e8] hover:border-[#0c7dc2]/40 border-slate-800",
//                 },
//               ].map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-9 h-9 rounded-full border bg-slate-900/40 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-105 active:scale-95 ${social.color}`}
//                   >
//                     <Icon className="w-4 h-4" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ================= RIGHT COLUMN: NEWSLETTER & LINKS ================= */}
//           <div className="lg:col-span-8 flex flex-col space-y-10">
//             {/* Upper half: Newsletter Subscribe panel aligned with image_fc4716.png */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900/30 border border-slate-800/80 p-6 md:p-8 rounded-[32px] backdrop-blur-sm">
//               <div className="space-y-1 md:max-w-xs shrink-0 text-center md:text-left">
//                 <h4 className="text-lg font-bold text-white tracking-tight">
//                   Subscribe Our Newsletter
//                 </h4>
//                 <p className="text-xs text-slate-400">
//                   Stay updated with respiratory wellness guides & air alerts.
//                 </p>
//               </div>

//               {/* Subscribe Input Form */}
//               <div className="flex-1 w-full max-w-md">
//                 {subscribed ? (
//                   <div className="flex items-center gap-2.5 bg-[#6dbb45]/10 border border-[#6dbb45]/20 px-4 py-3 rounded-2xl text-[#6dbb45] text-xs font-bold animate-fadeIn">
//                     <CheckCircle className="w-4 h-4 shrink-0" />
//                     <span>
//                       Awesome! You have successfully subscribed to updates.
//                     </span>
//                   </div>
//                 ) : (
//                   <form
//                     onSubmit={handleSubscribe}
//                     className="relative flex items-center gap-2"
//                   >
//                     <div className="relative flex-1">
//                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
//                         <Mail className="w-4.5 h-4.5" />
//                       </span>
//                       <input
//                         type="email"
//                         required
//                         placeholder="Enter Your Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full bg-slate-900/60 border border-slate-800 focus:border-[#1fa8e8] pl-11 pr-4 py-3.5 rounded-2xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]/10 transition-all placeholder:text-slate-600"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="px-6 py-3.5 bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] hover:from-[#0c7dc2] hover:to-[#1fa8e8] active:scale-[0.98] transition-all text-white text-xs font-bold rounded-2xl shadow-lg shadow-sky-950/40 shrink-0 flex items-center gap-1.5 cursor-pointer"
//                     >
//                       Subscribe <Send className="w-3 h-3" />
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>

//             {/* Horizontal line divider matching visual format of image_fc4716.png */}
//             <div className="w-full h-[1px] bg-slate-800/80" />

//             {/* Bottom half: Clean multi-column grid of Navigation Links */}
//             <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-6 text-center sm:text-left">
//               {navLinks.map((link, idx) => {
//                 const isAppointment = link.isCta;
//                 return (
//                   <div key={idx} className="flex flex-col">
//                     {isAppointment ? (
//                       <button
//                         onClick={onBookClick}
//                         className="inline-flex items-center justify-center sm:justify-start gap-1 text-xs font-extrabold text-[#6dbb45] hover:text-[#1fa8e8] transition-colors duration-200 mt-0.5 cursor-pointer"
//                       >
//                         {link.label} <ArrowUpRight className="w-3 h-3" />
//                       </button>
//                     ) : (
//                       <a
//                         href={link.href}
//                         onClick={() => onLinkClick(link.label)}
//                         className="text-xs font-bold text-slate-400 hover:text-[#1fa8e8] transition-colors duration-200 cursor-pointer"
//                       >
//                         {link.label}
//                       </a>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ================= BOTTOM ROW: COPYRIGHT SECTION ================= */}
//         <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
//           <p className="text-center sm:text-left">
//             &copy; {new Date().getFullYear()} Delhi Lung & Sleep Centre &bull;
//             Dr. Manish Aggarwal. All Rights Reserved.
//           </p>
//           <div className="flex items-center gap-6">
//             <a
//               href="#privacy"
//               className="hover:text-slate-300 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a href="#terms" className="hover:text-slate-300 transition-colors">
//               Terms of Service
//             </a>
//             <span className="text-slate-800">|</span>
//             <span className="text-[#1fa8e8]">NABL Accredited</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

/* ── data ─────────────────────────────────────────────────── */

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Gallery", href: "#" },
];

const supportLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms" },
];

const socials = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter/X" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const contactItems = [
  {
    icon: MapPin,
    text: "JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034",
  },
  { icon: Phone, text: "+91 98995 54095" },
  { icon: Mail, text: "hello@delhilungsleep.com" },
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
              alt="Delhi Lung & Sleep Centre"
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
                Delhi Lung & Sleep Centre
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#3d6b8a]">
                Expert pulmonology & sleep medicine care in New Delhi. Breathe
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
                      src="/dr-image.png" // Replace with your image
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
                      Principle Director <br /> Chest Disease & Interventional
                      Pulmonology
                    </p>

                    <div className="mt-2 inline-flex items-center rounded-full bg-[#1fa8e8]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0c7dc2]">
                      25+ Years Experience
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
              © {new Date().getFullYear()} Delhi Lung & Bronchoscopy Center. All
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
