"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, ChevronRight, ChevronDown } from "lucide-react";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

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
    {
      name: "Symptoms",
      href: "/symptoms",
      hasDropdown: true,
      dropdownItems: [
        { name: "Chronic Cough", href: "/symptoms/chronic-cough" },
        { name: "Shortness of Breath", href: "/symptoms/shortness-of-breath" },
        { name: "Wheezing", href: "/symptoms/wheezing" },
        { name: "Chest Pain", href: "/symptoms/chest-pain" },
      ],
    },
    {
      name: "Conditions",
      href: "/conditions",
      hasDropdown: false,
      isMegaMenu: false, // Flag to easily identify mega menus
      megaCategories: [
        {
          title: "ALLERGY TESTING",
          items: [
            { name: "Allergy Test", href: "/conditions/allergy-test" },
            { name: "IgE levels", href: "/conditions/ige-levels" },
            { name: "Absolute Eosinophil Count", href: "/conditions/absolute-eosinophil" },
            { name: "FeNo", href: "/conditions/feno" },
          ],
        },
        {
          title: "SPUTUM TEST",
          items: [
            { name: "Sputum AFB Stain", href: "/conditions/sputum-afb" },
            { name: "AFB Culture", href: "/conditions/afb-culture" },
            { name: "Genexpert", href: "/conditions/genexpert" },
            { name: "Gram Stain and Culture", href: "/conditions/gram-stain" },
          ],
        },
        {
          title: "OTHER DIAGNOSTICS",
          items: [
            { name: "Routine Blood Check", href: "/conditions/blood-check" },
            { name: "Chest X-Ray", href: "/conditions/xray" },
            { name: "CT Thorax", href: "/conditions/ct-thorax" },
          ],
        },
        {
          title: "SPECIALIZED CHECKS",
          items: [
            { name: "Skin Prick Test", href: "/conditions/skin-prick" },
            { name: "Immunotherapy Evaluation", href: "/conditions/immunotherapy" },
          ],
        },
      ],
    },
    {
      name: "Procedures",
      href: "/procedures",
      hasDropdown: false,
      dropdownItems: [
        { name: "Bronchoscopy", href: "/procedures/bronchoscopy" },
        { name: "Pulmonary Function Test", href: "/procedures/pft" },
        { name: "Airway Stenosis Treatment", href: "/procedures/airway-stenosis" },
      ],
    },
    {
      name: "Sleep",
      href: "/sleep",
      hasDropdown: false,
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-sky-100/40 border-b border-white/50"
          : "bg-white/70 backdrop-blur-md shadow-sm border-b border-white/30"
          }`}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out ${scrolled
            ? "py-2 px-5 md:px-7"
            : "py-3.5 px-6 md:px-8"
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
                  className="h-12 w-auto sm:h-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navLinks.map((link) => {
                // If the link has submenus grouped by categories (e.g., Services in your image)
                // we use a full-width Mega Menu. Otherwise, we fallback to a standard clean layout.
                const isMegaMenu = link.isMegaMenu;
                const hasManyItems = link.dropdownItems && link.dropdownItems.length > 5;

                return link.hasDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={isMegaMenu ? "" : "relative"}
                  >
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.name)}
                      className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${isActiveLink(link.href)
                        ? "text-[#1fa8e8]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                        }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-in-out ${openDropdown === link.name ? "rotate-180 text-[#1fa8e8]" : "text-slate-400"
                          }`}
                      />
                      {isActiveLink(link.href) && (
                        <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] rounded-full" />
                      )}
                    </a>

                    {/* ==========================================
                        MEGA MENU PANEL (Full Width matching image)
                        ========================================== */}
                    {isMegaMenu ? (
                      <div
                        className={`absolute left-0 right-0 top-full w-full bg-gradient-to-r from-[#0c7dc2] to-[#4d8f2d] text-white transition-all duration-200 ease-out border-t border-white/10 ${openDropdown === link.name
                          ? "opacity-100 translate-y-0 pointer-events-auto visibility-visible shadow-2xl"
                          : "opacity-0 -translate-y-2 pointer-events-none visibility-hidden"
                          }`}
                      >
                        <div className="mx-auto max-w-7xl px-8 py-10 grid grid-cols-4 gap-8">
                          {link.megaCategories?.map((category) => (
                            <div key={category.title} className="flex flex-col gap-3">
                              {/* Dynamic Header Column Indicator Line */}
                              <div className="flex items-center gap-2 border-l-2 border-white/60 pl-3">
                                <span className="text-sm font-bold tracking-wider uppercase text-white/90">
                                  {category.title}
                                </span>
                              </div>

                              {/* Dynamic Nested Items List */}
                              <div className="flex flex-col gap-2 pl-4">
                                {category.items.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-white/80 hover:text-white transition-colors"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Standard Dropdown Card Fallback */
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 ease-out ${openDropdown === link.name
                          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                          : "opacity-0 -translate-y-2 pointer-events-none scale-95"
                          }`}
                      >
                        <div
                          className={`bg-white rounded-2xl from-[#0c7dc2] to-[#4d8f2d] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2.5 ${hasManyItems ? "w-[480px] grid grid-cols-2 gap-1" : "w-[240px] flex flex-col gap-0.5"
                            }`}
                        >
                          {link.dropdownItems?.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group flex flex-col justify-center px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-[#1fa8e8]/5"
                            >
                              <span className="text-sm font-semibold text-gray-600 group-hover:text-[#1fa8e8] transition-colors duration-150">
                                {item.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.name)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${isActiveLink(link.href)
                      ? "text-[#1fa8e8]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                      }`}
                  >
                    {link.name}
                    {isActiveLink(link.href) && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] rounded-full" />
                    )}
                  </a>
                );
              })}
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
          {/* Mobile Overlay Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                ? "max-h-[85vh] overflow-y-auto opacity-100 mt-4"
                : "max-h-0 opacity-0 pointer-events-none"
              }`}
          >
            <div className="pt-3 pb-6 border-t border-slate-100 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isDropdownOpen = mobileDropdown === link.name;
                const isMegaMenu = link.isMegaMenu;

                return link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() =>
                        setMobileDropdown(isDropdownOpen ? null : link.name)
                      }
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all duration-200 cursor-pointer ${activeSection === link.name
                          ? "bg-[#1fa8e8]/5 text-[#1fa8e8]"
                          : "text-slate-600 active:bg-slate-50"
                        }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#1fa8e8]" : "text-slate-400"
                          }`}
                      />
                    </button>

                    {/* Subitems Menu Container with Fixed Height & Scroll */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen
                          ? "max-h-[350px] opacity-100 mt-1 mb-2"
                          : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                    >
                      <div className="pl-4 pr-2 flex flex-col gap-4 max-h-[340px] overflow-y-auto scrollbar-none">
                        {isMegaMenu ? (
                          /* RENDER CATEGORIZED MEGA MENU FOR MOBILE */
                          link.megaCategories?.map((category) => (
                            <div key={category.title} className="flex flex-col gap-1">
                              {/* Category Header Label */}
                              <div className="px-3 pt-1 pb-0.5 border-l-2 border-[#1fa8e8]/40 ml-1">
                                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                                  {category.title}
                                </span>
                              </div>
                              {/* Category Nested Items */}
                              {category.items?.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => {
                                    setActiveSection(link.name);
                                    setIsOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                  className="px-4 py-2.5 rounded-xl text-left bg-slate-50/50 text-sm font-medium text-slate-700 active:bg-[#1fa8e8]/10 active:text-[#1fa8e8] transition-colors"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          ))
                        ) : (
                          /* STANDARD SINGLE LIST FALLBACK */
                          link.dropdownItems?.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => {
                                setActiveSection(link.name);
                                setIsOpen(false);
                                setMobileDropdown(null);
                              }}
                              className="px-4 py-3 rounded-xl text-left bg-slate-50/50 text-sm font-medium text-slate-700 active:bg-[#1fa8e8]/10 active:text-[#1fa8e8] transition-colors"
                            >
                              {item.name}
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all duration-200 ${activeSection === link.name
                        ? "bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 text-[#1fa8e8]"
                        : "text-slate-600 active:bg-slate-50"
                      }`}
                  >
                    {link.name}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${activeSection === link.name ? "rotate-90 text-[#1fa8e8]" : "text-slate-400"
                        }`}
                    />
                  </a>
                );
              })}

              {/* Action Button Container */}
              <div className="pt-4 px-2 mt-2 border-t border-slate-100">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full py-3.5 rounded-xl text-center text-white font-bold text-sm tracking-wide bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] shadow-md shadow-[#1fa8e8]/10 active:opacity-90 flex items-center justify-center gap-2 cursor-pointer transition-all"
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
