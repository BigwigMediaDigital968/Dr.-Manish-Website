"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Popup from "./Popup";
import { usePathname } from "next/navigation";

/* ==========================================
   2. MAIN HEADER NAVBAR COMPONENT (Exported)
   ========================================== */
export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  // Monitor scroll height to transform capsule styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 py-2 md:px-8">
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-sky-100/40 rounded-full py-2 px-5 md:px-7 border border-white/50 scale-[0.99]"
              : "bg-white/70 backdrop-blur-md shadow-sm rounded-[32px] py-3.5 px-6 md:px-8 border border-white/30"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a
              href="/"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
            >
              {/* Logo Image */}
              <div className="relative flex-shrink-0">
                <Image
                  src="/logo-new.png"
                  alt="Dr Manish Aggarwal Clinic Logo"
                  width={350}
                  height={80}
                  priority
                  className="h-10 w-auto sm:h-12 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`relative px-4 py-2 rounded-full text-md tracking-wide transition-all duration-300 ${
                    isActiveLink(link.href)
                      ? "text-[#1fa8e8]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  {link.name}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-1.5 left-4.5 right-4.5 h-0.5 bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] rounded-full" />
                  )}
                </a>
              ))}
            </nav>
            {/* Actions CTA Section */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="relative overflow-hidden group px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wide transition-all duration-300 shadow-md shadow-sky-400/20 hover:shadow-lg bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment
                  <Calendar className="w-4 h-4" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0c7dc2] to-[#4d8f2d] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </button>
            </div>
            {/* Mobile Interaction Bars */}
            <div className="flex items-center md:hidden gap-2.5">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="p-2.5 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] hover:bg-[#1fa8e8]/20 transition-all active:scale-95 cursor-pointer"
                aria-label="Direct appointment request"
              >
                <Calendar className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100/60 focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle menu options"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Overlay Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="pt-3 pb-4 border-t border-slate-100 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold tracking-wide transition-all duration-200 ${
                    activeSection === link.name
                      ? "bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 text-[#1fa8e8] pl-6"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${activeSection === link.name ? "rotate-90 text-[#1fa8e8]" : "text-slate-400"}`}
                  />
                </a>
              ))}
              <div className="pt-3 px-1">
                <button
                  onClick={() => {
                    setIsBookModalOpen(true);
                  }}
                  className="w-full py-3.5 rounded-2xl text-center text-white font-bold text-sm tracking-wide bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Appointment <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Renders the interactive Appointment Modal Popup Component */}
      <Popup
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
}
