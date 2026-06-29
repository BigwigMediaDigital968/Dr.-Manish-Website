"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Popup from "./Popup";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    { name: "About Us", href: "/about" },
    {
      name: "Symptoms",
      href: "/#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Cough", href: "#" },
        { name: "Sputum", href: "#" },
        { name: "Breathlessness (Shortness of Breath)", href: "#" },
        { name: "Wheeze", href: "#" },
        { name: "Blood in Spit (Hemoptysis)", href: "#" },
        { name: "Chest Pain", href: "#" },
        { name: "Unintentional Weight Loss", href: "#" },
        { name: "Fever for Long Duration", href: "#" }
      ],
    },
    {
      name: "Diseases",
      href: "/#",
      hasDropdown: true,
      isMegaMenu: true, // Flag to easily identify mega menus
      megaCategories: [
        {
          title: "OBSTRUCTIVE LUNG DISEASE",
          items: [
            { name: "COPD", href: "#" },
            { name: "Asthma (Allergic Bronchitis)", href: "#" },
            { name: "Allergic Bronchopulmonary Aspergillosis (ABPA)", href: "#" },
            { name: "Uncontrolled Asthma vs Severe Asthma", href: "#" },
          ],
        },
        {
          title: "CHEST INFECTIONS",
          items: [
            { name: "Viral Pneumonia (Flu, Influenza, H1N1, COVID-19)", href: "#" },
            { name: "Bacterial Pneumonia", href: "#" },
            { name: "Tubercular Pneumonia (TB)", href: "#" },
            { name: "Fungal Pneumonia", href: "#" },
            { name: "Bronchiectasis", href: "#" },
          ],
        },
        {
          title: "RESTRICTIVE LUNG DISEASE",
          items: [
            { name: "Interstitial Lung Disease (ILD) / Lung Fibrosis", href: "#" },
          ],
        },
        {
          title: "LUNG MASS/LUNG CANCER",
          items: [
            { name: "Non-Small Cell Lung Carcinoma", href: "#" },
            { name: "Small Cell Lung Carcinoma (SCLC)", href: "#" },
            { name: "Bronchial Carcinoid Tumor", href: "#" },
            { name: "Lung Nodule Evaluation / Workup", href: "#" }
          ],
        },
        {
          title: "DISEASES OF PLEURAL",
          items: [
            { name: "Pleural Effusion/Pleurisy (fluid outside Lungs)", href: "#" },
            { name: "Pneumothorax (Lung Rupture)", href: "#" },
            { name: "Pleural Tumor", href: "#" },
            { name: "Pleural Thickening", href: "#" },
          ],
        },
        {
          title: "DISORDERS OF PULMONARY CIRCULATION",
          items: [
            { name: "Pulmonary Embolism", href: "#" },
            { name: "Pulmonary Artery Hypertension", href: "#" },
          ],
        },
        {
          title: "DISORDERS OF GAS EXCHANGE",
          items: [
            { name: "Pulmonary Edema (Fluid Inside Lungs)", href: "#" },
            { name: "ARDS (Acute Respiratory Distress Syndrome)", href: "#" },
            { name: "Aspiration Pneumonia", href: "#" },
          ],
        },
        {
          title: "RESPIRATORY FAILURE",
          items: [
            { name: "Type 1 Respiratory Failure", href: "#" },
            { name: "Type 2 Respiratory Failure (Hypercapnic / CO₂ Narcosis)", href: "#" },
          ],
        },
        {
          title: "DISEASES OF MEDIASTINUM, CHEST WALL AND DIAPHRAGM",
          items: [],
        },
        {
          title: "TOBACCO ADDICTION",
          items: [],
        },
      ],
    },
    {
      name: "Procedures",
      href: "/#",
      hasDropdown: true,
      isMegaMenu: true,
      dropdownItems: [
        { name: "Bronchoscopy", href: "#" },
        { name: "EBUS (Endobronchial Ultrasound)", href: "#" },
        { name: "Medical Thoracoscopy", href: "#" },
        { name: "Pleural Procedures", href: "#" },
        { name: "Pulmonary Function Test (PFT)", href: "#" },
        { name: "Sleep Study (Polysomnography)", href: "#" },
        { name: "CPAP/BiPAP Titration", href: "#" },
        { name: "Allergy Testing", href: "#" },
      ],
      megaCategories: [
        {
          title: "AIRWAY PROCEDURES",
          items: [
            { name: "Bronchoscopy", href: "#" },
            { name: "EBUS (Endobronchial Ultrasound)", href: "#" },
            { name: "Transbronchial Lung Biopsy", href: "#" },
            { name: "BAL (Bronchoalveolar Lavage)", href: "#" },
          ],
        },
        {
          title: "PLEURAL PROCEDURES",
          items: [
            { name: "Pleural Aspiration", href: "#" },
            { name: "Intercostal Drainage (ICD)", href: "#" },
            { name: "Medical Thoracoscopy", href: "#" },
            { name: "Pleural Biopsy", href: "#" },
          ],
        },
        {
          title: "LUNG FUNCTION TESTS",
          items: [
            { name: "Spirometry", href: "#" },
            { name: "Pulmonary Function Test (PFT)", href: "#" },
            { name: "FeNO", href: "#" },
            { name: "6 Minute Walk Test", href: "#" },
          ],
        },
        {
          title: "SLEEP PROCEDURES",
          items: [
            { name: "Sleep Study (Polysomnography)", href: "#" },
            { name: "Home Sleep Test", href: "#" },
            { name: "CPAP/BiPAP Titration", href: "#" },
          ],
        },
      ],
    },
    {
      name: "Sleep",
      href: "/#",
      hasDropdown: true,
      isMegaMenu: true,
      megaCategories: [
        {
          title: "SLEEP SYMPTOMS",
          items: [
            { name: "Insomnia (Unable to Sleep)", href: "#" },
            { name: "Hypersomnia (Excessive Sleep)", href: "#" },
            { name: "Parasomnia", href: "#" },
          ],
        },
        {
          title: "SLEEP DISORDERS",
          items: [
            { name: "Insomnia Disorders", href: "#" },
            { name: "Central Disorders of Hypersomnolence", href: "#" },
            { name: "Circadian Rhythm Sleep-Wake Disorders", href: "#" },
            { name: "Parasomnias", href: "#" },
            { name: "Sleep-Related Movement Disorders", href: "#" },
            { name: "Sleep-Related Breathing Disorders", href: "#" },
          ],
        },
        {
          title: "SLEEP INVESTIGATIONS",
          items: [
            { name: "Level 1 Sleep Study (Polysomnography)", href: "#" },
            { name: "Level 2 and Level 3 Sleep Test (Home Sleep Apnoea Test) Certified by Sleep Specialist Doctor", href: "#" },
            { name: "MSLT/MWT", href: "#" },
            { name: "Actigraphy", href: "#" },
            { name: "Sleep Diary", href: "#" },
          ],
        },
        {
          title: "SLEEP TREATMENT",
          items: [
            { name: "Cognitive Behavioral Sleep therapy – Insomnia", href: "#" },
            { name: "PAP therapy : CPAP/Bipap/Mask interfaces", href: "#" },
            { name: "Sleep Apnoea Surgery", href: "#" },
            { name: "Dental Appliances", href: "#" },
          ],
        },
      ],
    },
    { name: "Contact Us", href: "/contact" },
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
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-1">
              {navLinks.map((link) => {
                // If the link has submenus grouped by categories (e.g., Services in your image)
                // we use a full-width Mega Menu. Otherwise, we fallback to a standard clean layout.
                const isMegaMenu = link.isMegaMenu;
                const hasManyItems = link.dropdownItems && link.dropdownItems.length > 8;

                return link.hasDropdown ? (
                  <div
                    key={link.name}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`${isMegaMenu ? "" : "relative"} z-20`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActiveSection(link.name)}
                      className={`relative flex items-center gap-1.5 px-2 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${isActiveLink(link.href)
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
                      <span className="block w-full h-10 top-full absolute bg-transparent">
                      </span>
                    </Link>

                    {/* ==========================================
                        MEGA MENU PANEL (Full Width matching image)
                        ========================================== */}
                    {isMegaMenu ? (
                      <div
                        className={`absolute left-0 right-0 top-full w-full bg-white text-slate-800 transition-all duration-200 ease-out border-t border-slate-200 ${openDropdown === link.name
                          ? "opacity-100 translate-y-0 pointer-events-auto visible shadow-2xl"
                          : "opacity-0 -translate-y-2 pointer-events-none invisible"
                          }`}
                      >
                        <div className="mx-auto max-w-7xl px-8 py-10 grid grid-cols-4 gap-8">
                          {link.megaCategories?.map((category) => (
                            <div key={category.title} className="flex flex-col gap-3">
                              {/* Dynamic Header Column Indicator Line */}
                              <div className="flex items-center gap-2 border-l-2 border-emerald-600 pl-3">
                                <span className="text-sm font-bold tracking-wider uppercase text-slate-900">
                                  {category.title}
                                </span>
                              </div>

                              {/* Dynamic Nested Items List */}
                              <div className="flex flex-col gap-2 pl-4">
                                {category.items.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs font-medium text-slate-600 hover:text-[#1fa8e8] transition-colors "
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
                        className={`absolute top-full translate-y-3 ${scrolled ? "py-2" : "py-4"} -z-50 left-1/2 -translate-x-1/2 transition-all duration-200 ease-out ${openDropdown === link.name
                          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                          : "opacity-0 -translate-y-2 pointer-events-none scale-95"
                          }`}
                      >
                        <div
                          className={`bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2.5 ${hasManyItems ? "w-[480px] grid grid-cols-2 gap-1" : "w-[280px] flex flex-col gap-0.5"
                            }`}
                        >
                          {link.dropdownItems?.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group flex flex-col justify-center px-3.5 py-2 rounded-xl text-left transition-all duration-200"
                            >
                              <span className="text-sm font-medium text-gray-600 group-hover:text-[#1fa8e8] transition-colors duration-150">
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
                      <div className="pl-4 pr-2 flex flex-col gap-2 max-h-[340px] overflow-y-auto scrollbar-none">
                        {isMegaMenu ? (
                          /* RENDER CATEGORIZED MEGA MENU FOR MOBILE WITH NATIVE ACCORDIONS */
                          link.megaCategories?.map((category) => (
                            <details
                              key={category.title}
                              className="group flex flex-col gap-1 dynamic-accordion"
                            >
                              {/* Accordion Header (Toggles display on click natively) */}
                              <summary className="flex items-center justify-between list-none cursor-pointer outline-none select-none px-3 pt-1 pb-1.5 border-l-2 border-[#1fa8e8]/40 ml-1">
                                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                                  {category.title}
                                </span>
                                {/* Optional: Animated Indicator Arrow */}
                                <svg
                                  className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </summary>

                              {/* Category Nested Items */}
                              <div className="flex flex-col gap-1 mt-1">
                                {category.items?.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                      setActiveSection(link.name);
                                      setIsOpen(false);
                                      setMobileDropdown(null);
                                    }}
                                    className="px-4 py-2.5 rounded-xl text-left bg-slate-50/50 text-sm font-medium text-slate-700 active:bg-[#1fa8e8]/10 active:text-[#1fa8e8] transition-colors block"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </details>
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
                              className="px-4 py-1 text-left text-xs font-medium text-slate-700 active:text-[#1fa8e8] transition-colors"
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
