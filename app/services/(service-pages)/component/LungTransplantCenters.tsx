'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface TransplantCenter {
  name: string;
  desc: string;
  image: string;
  city: string;
}

const transplantCenters: TransplantCenter[] = [
  {
    name: "Apollo Hospitals Chennai",
    city: "Chennai",
    desc: "One of India's preeminent centers for complex thoracic surgeries and multi-organ transplants, featuring highly dedicated pre- and post-transplant monitoring pathways.",
    image: "/Apollo-Hospitals.jpg"
  },
  {
    name: "MGM Healthcare",
    city: "Chennai",
    desc: "Renowned for pioneering state-of-the-art heart and lung transplant techniques with a specialized multidisciplinary post-surgical critical recovery team.",
    image: "/MGM.jpg"
  },
  {
    name: "Gleneagles Global Health City",
    city: "Chennai",
    desc: "A massive, world-class quaternary referral hospital with an established reputation for managing severe end-stage interstitial and chronic obstructive airway diseases.",
    image: "/Gleneagles.webp"
  },
  {
    name: "KIMS Hospitals",
    city: "Hyderabad",
    desc: "Distinguished in providing comprehensive cardiopulmonary failure support and leading-edge advancements in mechanical circulatory support and lung transplants.",
    image: "/KIMS.jpg"
  },
  {
    name: "Kauvery Hospital",
    city: "Chennai / Bengaluru",
    desc: "A highly trusted network offering advanced diagnostics and customized therapeutic options for advanced chronic respiratory ailments and transplant candidacies.",
    image: "/Kauvery-Hospital.png"
  }
];

export default function LungTransplantCenters() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 344; // Matches standard card width (320px) + margin (24px)
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="py-12 border-t border-slate-100">
      {}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Advanced Care & Referrals
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
            Active Lung Transplant Centers in India
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-1 max-w-2xl">
            For patients requiring tertiary medical intervention or potential candidacy for advanced transplant surgeries, we direct patient evaluation and follow-up support in coordination with India's pioneering transplant units.
          </p>
        </div>

        {/* Subtle Next/Prev Controls */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors focus:outline-none focus:ring-1 focus:ring-[#1fa8e8]/30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors focus:outline-none focus:ring-1 focus:ring-[#1fa8e8]/30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {}
      {/* Scrollable Container (Hiding Scrollbar) */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {transplantCenters.map((center, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-start border border-slate-100"
          >
            {/* Main Card Image */}
            <img
              src={center.image}
              alt={center.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Smooth Dark Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end transition-all duration-500" />

            {/* Dynamic Sliding Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transition-all duration-500">
              <div className="transform translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Location Badge */}
                <span className="inline-block bg-[#1fa8e8]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2">
                  {center.city}
                </span>
                
                <h4 className="text-white font-extrabold text-base sm:text-lg leading-tight mb-2">
                  {center.name}
                </h4>
                
                <p className="text-slate-300 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 leading-relaxed line-clamp-4">
                  {center.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}