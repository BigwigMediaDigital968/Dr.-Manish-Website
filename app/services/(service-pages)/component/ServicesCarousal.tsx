'use client';

import { ArrowRight, ChevronLeft, ChevronRight, HeartPulse, Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ServiceItem {
    id: string;
    title: string;
    desc: string;
    tag?: string;
    image: string;
    icon: React.ReactNode;
    link?: string;
}
type ServicesShowcaseProps = {
    services: ServiceItem[];
    heading: string;
    tagline?: string;
    description?: string;
    showCardCTA?: boolean;
    cardCTA?: string;
};

export default function ServicesCarousal({
    services,
    heading,
    tagline,
    description,
    showCardCTA = true,
    cardCTA = "View Details",
}: ServicesShowcaseProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    /* ============================================================================
       2. STREAMING_CHUNK: Implementing scroll check mechanics for the single-row layout
       ============================================================================ */

    const checkScrollState = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            el.addEventListener("scroll", checkScrollState);
            checkScrollState();
        }
        // Check again on window resize to keep pagination buttons in sync
        const handleResize = () => checkScrollState();
        window.addEventListener("resize", handleResize);

        return () => {
            if (el) el.removeEventListener("scroll", checkScrollState);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            // Scroll by approximately one card width plus gap (approx 380px)
            const scrollAmount = direction === "left" ? -380 : 380;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="all-services-showcase"
            className="relative py-10 px-4 overflow-x-clip text-slate-900 border-t border-slate-100"
        >
            {/* Background Graphic Patterns mirroring Delhi Lung & Sleep Centre aesthetic */}
            <div className="absolute top-0 left-0 right-0 h-full pointer-events-none -z-10 opacity-40 select-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-100,100 Q150,20 400,120 T900,80 T1400,100"
                        stroke="url(#showcaseGradient)"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M-100,120 Q150,40 400,140 T900,100 T1400,120"
                        stroke="url(#showcaseGradient)"
                        strokeWidth="1"
                        opacity="0.6"
                    />
                    <defs>
                        <linearGradient
                            id="showcaseGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#1fa8e8" />
                            <stop offset="100%" stopColor="#6dbb45" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6dbb45]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

            {/* ==========================================================
         3. STREAMING_CHUNK: Layout Header adapting image f74243e07cddcc074d65793e64464fdf.jpg 
         ========================================================== */}
            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[11px] font-black uppercase text-[#0c7dc2] tracking-widest block">
                        {tagline}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                        {heading}
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base font-medium max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* ==========================================================
           5. STREAMING_CHUNK: Single row scrollable track mirroring f74243e07cddcc074d65793e64464fdf.jpg 
           ========================================================== */}
                <div className="relative px-2 sm:px-8 overflow-x-clip">

                    {/* ==========================================================
           4. STREAMING_CHUNK: Left/Right Manual Controller Buttons
           ========================================================== */}
                    <div className="flex items-center justify-between pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 px-4 z-20">
                        <button
                            onClick={() => handleScroll("left")}
                            disabled={!canScrollLeft}
                            className={`p-4 rounded-full border transition-all pointer-events-auto shadow-md cursor-pointer ${!canScrollLeft
                                ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-100/40 opacity-0"
                                : "border-slate-200 bg-white text-slate-700 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/30 hover:scale-105 active:scale-95"
                                }`}
                            aria-label="Scroll services left"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            className={`p-4 rounded-full border transition-all pointer-events-auto shadow-md cursor-pointer ${!canScrollRight
                                ? "border-slate-200 text-slate-300 cursor-not-allowed bg-slate-100/40 opacity-0"
                                : "border-slate-200 bg-white text-slate-700 hover:text-[#1fa8e8] hover:border-[#1fa8e8]/30 hover:scale-105 active:scale-95"
                                }`}
                            aria-label="Scroll services right"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scroll-smooth gap-6 py-6 px-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {services.map((service) => {
                            return (
                                <div
                                    key={service.id}
                                    className="w-[290px] sm:w-[350px] flex-shrink-0 snap-start bg-white border border-slate-100 rounded-[32px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_22px_45px_rgba(31,168,232,0.12)] hover:border-[#1fa8e8]/20 transition-all duration-300 flex flex-col justify-between cursor-pointer group transform hover:-translate-y-1.5"
                                >
                                    <div className="space-y-5">
                                        {/* Highly rounded nested image frame */}
                                        <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden bg-slate-50 border border-slate-100">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            {service.tag && (<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-extrabold text-[#0c7dc2] uppercase tracking-wider shadow-sm">
                                                {service.tag}
                                            </span>)}
                                        </div>

                                        {/* Content Section: Circle Icon adjacent to the bold title */}
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0c7dc2] to-[#1fa8e8] text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                                                    {service.icon}
                                                </div>
                                                <h3 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight leading-snug pt-2 transition-colors group-hover:text-[#1fa8e8]">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Brief Diagnostic/Service Description */}
                                            <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-semibold overflow-hidden">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Adaptive Detail Anchor & verification footer */}
                                    {
                                        service.link && (
                                            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#1fa8e8] group-hover:text-[#0c7dc2] transition-colors">
                                                <span className="inline-flex items-center gap-1 group/link">
                                                    View Service Details
                                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                                                </span>
                                                <HeartPulse className="w-4 h-4 text-emerald-500 animate-pulse" />
                                            </div>
                                        )
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}