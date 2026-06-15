"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  MessageSquare,
  Sparkles,
  Clock,
  CheckCircle2,
  Wind,
  Moon,
  Activity,
  Compass,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function WhatsappFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  const whatsappNumber = "919899554095"; // Configured target number

  // 5 Quick Enquiry Templates based on Delhi Lung & Bronchoscopy Center specialty scope
  const quickQueries = [
    {
      id: 1,
      label: "Book Appointment",
      text: "Hello Delhi Lung & Bronchoscopy Center, I would like to book an appointment for a physical consultation with Dr. Manish Aggarwal.",
      icon: Activity,
      color: "bg-[#1fa8e8]/10 text-[#0c7dc2]",
    },
    {
      id: 2,
      label: "Sleep Study Query",
      text: "Hello, I want to inquire about setting up an overnight Sleep Study (Polysomnography) for sleep apnea/snoring diagnostics.",
      icon: Moon,
      color: "bg-[#6dbb45]/10 text-[#4d8f2d]",
    },
    {
      id: 3,
      label: "PFT / Lung Test",
      text: "Hello, I am experiencing breathing issues and would like to schedule an in-house Pulmonary Function Test (Spirometry / DLCO).",
      icon: Wind,
      color: "bg-sky-50 text-[#1fa8e8]",
    },
    {
      id: 4,
      label: "EBUS / Bronchoscopy",
      text: "Hello, I have an abnormal chest scan and want to inquire urgently about EBUS Bronchoscopy scheduling and staging details.",
      icon: Compass,
      color: "bg-slate-100 text-slate-700",
    },
  ];

  // Auto-prompt popup indicator notification badge after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Just a visual cue to draw engagement
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWidget = () => {
    setIsOpen(!isOpen);
    setShowNotificationBadge(false);
  };
    const encodedText = encodeURIComponent("Hello Delhi Lung & Bronchoscopy Center, I would like to book an appointment for a physical consultation with Dr. Manish Aggarwal.");
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Safe window opener for WhatsApp redirection API
  const sendToWhatsApp = (messageText: string) => {
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customMessage.trim()) {
      sendToWhatsApp(customMessage);
      setCustomMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans text-slate-800 pointer-events-none">
      {/* ==========================================================
         1. EXPANDABLE CHAT DIALOG CARD (WhatsApp Portal Panel)
         ========================================================== */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[330px] sm:w-[380px] bg-white rounded-[32px] border border-slate-100 shadow-2xl overflow-hidden pointer-events-auto transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header Banner - Clinical Brand Identity */}
          <div className="bg-gradient-to-r from-[#0c7dc2] to-[#6dbb45] p-5 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4.5 right-4.5 p-1.5 rounded-full bg-white/10 cursor-pointer hover:bg-white/20 text-white transition-all active:scale-95"
              aria-label="Close Whatsapp Panel"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              {/* Profile Icon Setup */}
              <div className="relative w-11 h-11 rounded-full bg-white p-0.5 shadow-md">
                <img
                  src="/favicon.jpeg"
                  alt="Delhi Lung & Bronchoscopy Center Support Desk"
                  onError={(e) => {
                    // Fallback to beautiful doctor avatar illustration if favicon does not resolve
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80";
                  }}
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-extrabold text-sm tracking-tight">
                    Clinical Helpdesk
                  </h4>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                </div>
                <p className="text-[10px] text-emerald-100 font-semibold uppercase tracking-wider">
                  Delhi Lung & Bronchoscopy Center
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-emerald-200" />
                  <span className="text-[9px] text-emerald-100 font-medium">
                    Replies under 5 mins (Mon - Sat)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Section: Quick Options list & Inputs */}
          <div className="p-5 space-y-4 bg-slate-50/50 max-h-[420px] overflow-y-auto">
            {/* Introductory Guidance Message Bubble */}
            <div className="bg-emerald-50 border border-emerald-100/50 p-3.5 rounded-2xl text-xs text-slate-600 font-semibold leading-relaxed relative">
              <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-emerald-50 border-r border-b border-emerald-100/50 rotate-45" />
              Breathe easy! Choose a quick query topic below to start a secure
              chat with our care desk coordinate directly.
            </div>

            {/* Quick Enquiry Options Selector Buttons */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-1">
                Select Enquiry Topic
              </span>

              {quickQueries.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => sendToWhatsApp(item.text)}
                    className="w-full p-3 bg-white hover:bg-slate-100 border border-slate-100 hover:border-[#1fa8e8]/30 rounded-2xl flex items-center gap-3 text-left transition-all text-xs font-bold shadow-sm active:scale-[0.99] cursor-pointer"
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-slate-800 font-extrabold block truncate leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium truncate block mt-0.5">
                        Send pre-filled message
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Query Message Box Form */}
            <form
              onSubmit={handleCustomSubmit}
              className="space-y-2 pt-2 border-t border-slate-200/50"
            >
              <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider">
                Or Write Your Own Query
              </label>

              <div className="flex gap-1.5 relative">
                <input
                  type="text"
                  placeholder="Type symptoms or question..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="flex-1 bg-white border border-slate-200 focus:border-[#1fa8e8] focus:ring-1 focus:ring-[#1fa8e8]/20 pl-4 pr-11 py-3.5 rounded-2xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all shadow-inner"
                />

                <button
                  type="submit"
                  disabled={!customMessage.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:bg-[#25d366] cursor-pointer"
                  aria-label="Send Custom Message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Clinical Certification Stamp */}
            <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400 font-extrabold uppercase tracking-wider text-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#6dbb45]" /> Verified
              Patient Helpdesk
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================
         2. FLOATING ACTION BUTTON (The main glowing pulsating WhatsApp icon)
         ========================================================== */}
      <Link
        href={waUrl}
        target="_blank"
        className="pointer-events-auto relative flex items-center justify-center w-15 h-15 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer group"
        aria-label="Contact via WhatsApp"
      >
        {/* Pulsating Ring visual effects */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping duration-[2500ms] -z-10" />

        {/* Switch icon inside FAB dynamically if dialog is open */}
        {/* {isOpen ? (
          <X className="w-6 h-6 animate-fadeIn" />
        ) : (
<svg
            className="w-8 h-8 fill-current drop-shadow-sm transition-transform group-hover:rotate-12 duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>          
        )} */}
        <svg
            className="w-8 h-8 fill-current drop-shadow-sm transition-transform group-hover:rotate-12 duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>   

        {/* Floating Warning/Notification Alert Badge */}
        {showNotificationBadge && (
          <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-red-500 text-white font-bold text-[9px] items-center justify-center">
              1
            </span>
          </span>
        )}
      </Link>
    </div>
  );
}
