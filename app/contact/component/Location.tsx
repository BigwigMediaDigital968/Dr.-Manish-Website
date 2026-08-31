"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
  CheckCircle2,
  Sparkles,
  Car,
  Compass,
} from "lucide-react";

interface LocationProps {
  onBookClick?: () => void;
}

export default function Location({ onBookClick = () => {} }: LocationProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Address and coordinate specifics for Google Maps directions
  const mapAddress =
    "Delhi Lung & Bronchoscopy Centre, Pitampura, Delhi, India";
  const googleMapsUrl = `https://maps.app.goo.gl/QggTaVHkW5qS4ZD8A`;

  const amenities = [
    { label: "Conveniently Located", icon: Compass },
    { label: "Easy Access by Public Transport", icon: Car },
    { label: "Comfortable & Patient-Friendly Environment", icon: CheckCircle2 },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-[600px] lg:h-[650px] mb-10 w-full flex flex-col lg:flex-row items-stretch overflow-hidden bg-slate-50 border-t border-slate-100"
    >
      {/* ==========================================================
         BACKGROUND MAP CONTAINER (Takes full viewport height/width)
         ========================================================== */}
      <div className="relative w-full h-[350px] lg:h-full lg:absolute lg:inset-0 z-0 bg-slate-200">
        {/* Loading Spinner for map */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 gap-3">
            <div className="w-10 h-10 border-4 border-[#1fa8e8] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Loading Interactive Map...
            </span>
          </div>
        )}

        {/* Embedded Iframe of Google Maps - Vikas Marg, East Delhi */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.269935636379!2d77.1471522!3d28.711477900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d017fab0dd98f%3A0x5b060deeefe577ed!2sDr%20Manish%20Aggarwal%20%E2%80%93%20senior%20chest%20physician%20and%20Interventional%20pulmonologist%20Clinic!5e0!3m2!1sen!2sin!4v1781526122531!5m2!1sen!2sin"
          className="w-full h-full border-0 filter grayscale-[15%] contrast-[105%]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapLoaded(true)}
          title="Delhi Lung & Bronchoscopy Center Location Map"
        />

        {/* Map aesthetic visual overlays matching brand guidelines */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ==========================================================
         FOREGROUND CARD CONTAINER (Overlaps left side on desktop)
         ========================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-0 flex items-center justify-center lg:justify-start pointer-events-none">
        {/* Availability & Location Card Block - Replicating image_e71083.jpg */}
        <div className="w-full max-w-[440px] bg-white/95 backdrop-blur-md rounded-[36px] border border-slate-100 p-6 sm:p-8 shadow-2xl shadow-slate-900/15 space-y-6 pointer-events-auto transition-all duration-300 hover:shadow-sky-100/50 hover:-translate-y-1">
          {/* Tag and Verified Status header */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-[10px] font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#1fa8e8]" /> Clinic Desk
            </span>

            {/* Live Operational Indicator */}
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Now
            </span>
          </div>

          {/* Location Title & Verified Address */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-none">
              Delhi Lung & Bronchoscopy Centre
            </h3>

            <div className="flex items-start gap-2.5 text-slate-500 text-xs sm:text-sm">
              <MapPin className="w-5 h-5 text-[#1fa8e8] shrink-0 mt-0.5" />
              <p className="leading-relaxed font-semibold">
                JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034
              </p>
            </div>
          </div>

          {/* Operating Hours / Timings Details */}
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 space-y-2">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#6dbb45]" /> Availability Details
            </h4>

            <div className="space-y-1.5 pt-1.5 text-xs font-bold text-slate-700">
              <div className="flex justify-between items-center">
                <span>Monday - Saturday</span>
                <span className="text-slate-900">06:00 PM - 09:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-200/50 pt-1.5">
                <span>Sunday</span>
                <span className="text-[#6dbb45]">By Appointment Only</span>
              </div>
            </div>
          </div>

          {/* Quick Clinic Amenities list */}
          <div className="space-y-2">
            {amenities.map((item, idx) => {
              const AmenityIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-slate-600 text-[11px] sm:text-xs font-bold"
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center">
                    <AmenityIcon className="w-3.5 h-3.5 text-[#1fa8e8]" />
                  </span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Action CTA buttons matching image_e71083.jpg */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {/* Get Directions Anchor button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wide shadow-md shadow-sky-100/50 active:scale-95 transition-all text-center"
            >
              <Navigation className="w-3.5 h-3.5" /> Directions
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+919899554095"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white border border-slate-200 hover:border-[#1fa8e8]/40 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wide active:scale-95 transition-all text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#6dbb45]" /> Call Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
