"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  HeartPulse,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  onLinkClick?: (section: string) => void;
  onBookClick?: () => void;
}

export default function Footer({
  onLinkClick = () => {},
  onBookClick = () => {},
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#featured-services" },
    { label: "Terms", href: "#terms" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "#about" },
    { label: "Faq", href: "#services" },
    { label: "News", href: "#featured-services" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Appointment", href: "#appointment", isCta: true },
  ];

  return (
    <footer className="relative text-slate-300 pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.png')",
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#031525]/90" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c7dc2]/25 via-[#031525]/35 to-[#02101d]/55" />

      {/* Optional Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1fa8e8]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6dbb45]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto z-20 relative">
        {/* Main Grid: Left Column (Brand info) & Right Column (Newsletter + Links) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-12">
          {/* ================= LEFT COLUMN: LOGO & PROFILE ================= */}
          <div className="lg:col-span-4 space-y-6 text-center sm:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-3 group focus:outline-none justify-center sm:justify-start"
            >
              {/* Uses logo.png with standard elegant medical cross icon fallback */}

              <img
                src="logo.png"
                alt="Delhi Lung & Sleep Centre Logo"
                onError={() => setLogoError(true)}
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              Delhi's premier diagnostic and clinical treatment center
              specializing in advanced lung function tests, interventional
              pulmonology, overnight sleep studies, and comprehensive
              respiratory therapy under Dr. Manish Aggarwal.
            </p>

            {/* Social Icons matching image_fc4716.png (Enhanced Hover States to use Brand Theme) */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              {[
                {
                  icon: FaFacebook,
                  href: "https://facebook.com",
                  color:
                    "hover:bg-[#1fa8e8]/20 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/40 border-slate-800",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com",
                  color:
                    "hover:bg-[#6dbb45]/20 hover:text-[#6dbb45] hover:border-[#6dbb45]/40 border-slate-800",
                },
                {
                  icon: FaTwitter,
                  href: "https://twitter.com",
                  color:
                    "hover:bg-[#1fa8e8]/20 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/40 border-slate-800",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com",
                  color:
                    "hover:bg-[#0c7dc2]/20 hover:text-[#1fa8e8] hover:border-[#0c7dc2]/40 border-slate-800",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full border bg-slate-900/40 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-105 active:scale-95 ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: NEWSLETTER & LINKS ================= */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            {/* Upper half: Newsletter Subscribe panel aligned with image_fc4716.png */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900/30 border border-slate-800/80 p-6 md:p-8 rounded-[32px] backdrop-blur-sm">
              <div className="space-y-1 md:max-w-xs shrink-0 text-center md:text-left">
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Subscribe Our Newsletter
                </h4>
                <p className="text-xs text-slate-400">
                  Stay updated with respiratory wellness guides & air alerts.
                </p>
              </div>

              {/* Subscribe Input Form */}
              <div className="flex-1 w-full max-w-md">
                {subscribed ? (
                  <div className="flex items-center gap-2.5 bg-[#6dbb45]/10 border border-[#6dbb45]/20 px-4 py-3 rounded-2xl text-[#6dbb45] text-xs font-bold animate-fadeIn">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>
                      Awesome! You have successfully subscribed to updates.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="relative flex items-center gap-2"
                  >
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                        <Mail className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900/60 border border-slate-800 focus:border-[#1fa8e8] pl-11 pr-4 py-3.5 rounded-2xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]/10 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] hover:from-[#0c7dc2] hover:to-[#1fa8e8] active:scale-[0.98] transition-all text-white text-xs font-bold rounded-2xl shadow-lg shadow-sky-950/40 shrink-0 flex items-center gap-1.5 cursor-pointer"
                    >
                      Subscribe <Send className="w-3 h-3" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Horizontal line divider matching visual format of image_fc4716.png */}
            <div className="w-full h-[1px] bg-slate-800/80" />

            {/* Bottom half: Clean multi-column grid of Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-6 text-center sm:text-left">
              {navLinks.map((link, idx) => {
                const isAppointment = link.isCta;
                return (
                  <div key={idx} className="flex flex-col">
                    {isAppointment ? (
                      <button
                        onClick={onBookClick}
                        className="inline-flex items-center justify-center sm:justify-start gap-1 text-xs font-extrabold text-[#6dbb45] hover:text-[#1fa8e8] transition-colors duration-200 mt-0.5 cursor-pointer"
                      >
                        {link.label} <ArrowUpRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => onLinkClick(link.label)}
                        className="text-xs font-bold text-slate-400 hover:text-[#1fa8e8] transition-colors duration-200 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW: COPYRIGHT SECTION ================= */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Delhi Lung & Sleep Centre &bull;
            Dr. Manish Aggarwal. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <span className="text-slate-800">|</span>
            <span className="text-[#1fa8e8]">NABL Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
