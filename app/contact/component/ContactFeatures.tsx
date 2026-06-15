"use client";

import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Plane,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
} from "lucide-react";

interface ContactFeaturesProps {
  onBookClick?: () => void;
}

export default function ContactFeatures({
  onBookClick = () => {},
}: ContactFeaturesProps) {
  // High-fidelity contact channels reflecting Dr. Manish Aggarwal's clinical scope
  const contactCards = [
    {
      id: 1,
      tag: "Immediate Response",
      title: "OPD Clinical Desk",
      desc: "For general patient inquiries, diagnostic slot checking, or routine follow-up consultations.",
      detail: "+91 98995 54095",
      actionText: "Call Clinical Desk",
      actionHref: "tel:+919899554095",
      icon: PhoneCall,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
    {
      id: 2,
      tag: "Global Air Transit",
      title: "Aeromed Emergency",
      desc: "Founder Director's dedicated critical patient flight transport coordinate network.",
      detail: "+91 98995 54095",
      actionText: "Request Air Rescue",
      actionHref: "tel:+919999955555",
      icon: Plane,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 3,
      tag: "Direct Support",
      title: "Email Inquiries",
      desc: "Send your medical history files, spirometry charts, or corporate health tie-up proposals.",
      detail: "info@delhilungandsleep.com",
      actionText: "Email Medical Desk",
      actionHref: "mailto:info@delhilungandsleep.com",
      icon: Mail,
      color: "from-[#1fa8e8] to-[#6dbb45]",
    },
    {
      id: 4,
      tag: "Diagnostics Hub",
      title: "Sleep Lab Coordinates",
      desc: "Instant booking verification and home sleep monitoring kit calibration support.",
      detail: "OPD Pillar 12, Vikas Marg",
      actionText: "Get Direction Route",
      actionHref: "#contact",
      icon: Clock,
      color: "from-[#0f172a] to-[#1e293b]",
    },
  ];

  return (
    <section
      id="contact-features"
      className="relative py-20 px-4 overflow-hidden text-white"
    >
      {/* Full-width premium background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30 opacity-40 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Overlapping Brand Colored Vignette Overlay to maintain rich contrast and accessibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07162c]/95 via-[#0c3156]/90 to-[#0b2413]/95 -z-25" />

      {/* Brand Theme Ambient Glowing Rings */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#1fa8e8]/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#6dbb45]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />{" "}
              Support Channels
            </div>
            <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight leading-tight">
              Get In Touch Instantly
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
              Connect directly with our primary care team, emergency transport
              networks, or schedule rapid laboratory assays with minimal waiting
              cycles.
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 bg-white/5 border border-white/10 p-1 rounded-2xl shrink-0 self-center md:self-end">
            <span className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1.5 tracking-wider">
              NABL Standard Lab
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mr-2.5" />
          </div>
        </div>

        {/* --- HORIZONTAL SCROLL CARDS CONTAINER (With X-Overflow in Mobile Devices) --- */}
        {/* - 'overflow-x-auto': Enables fluid swipe touch on smaller phone screens.
           - 'snap-x snap-mandatory': Snaps cards directly into column boxes as they scroll.
           - 'md:grid md:grid-cols-2 lg:grid-cols-4': Snaps back to standard clean grid on tablet and larger.
        */}
        <div className="w-full overflow-x-auto pb-6 pt-2 px-4 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory custom-scrollbar scroll-smooth">
          {/* Custom Webkit scrollbar inline overrides to maintain sleek UI */}
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 5px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 99px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(90deg, #1fa8e8, #6dbb45);
              border-radius: 99px;
            }
          `}</style>

          {contactCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="w-[280px] sm:w-full flex-shrink-0 snap-center bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 p-6 rounded-[32px] flex flex-col justify-between h-[360px] transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-sky-500/5 hover:-translate-y-1"
              >
                <div className="space-y-5">
                  {/* Top line with category badge & icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-emerald-300">
                      {card.tag}
                    </span>
                  </div>

                  {/* Information Details */}
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold tracking-tight text-white group-hover:text-[#1fa8e8] transition-colors leading-none">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-semibold h-[48px] overflow-hidden">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom detail action row */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <span className="text-xs font-black text-[#6dbb45] tracking-wide block truncate">
                    {card.detail}
                  </span>

                  <a
                    href={card.actionHref}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0c7dc2] font-bold text-xs uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                  >
                    {card.actionText}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE COMPLIANCE SWIPE NOTIFIER --- */}
        <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest animate-pulse md:hidden">
          Swipe horizontally to explore channels &bull;
        </p>
      </div>
    </section>
  );
}
