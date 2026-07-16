"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowBigRight, ArrowRight, Calendar, ChevronRight, Home } from "lucide-react";

interface ServiceHeroProps {
    title: string;
    description?: string;
    backgroundImage?: string;
    enableBreadcrumbs?: boolean;
    ctaText?: string;
}

export default function ServiceHero({
    title,
    description,
    backgroundImage,
    enableBreadcrumbs = true,
ctaText="Schedule Consultation"
}: ServiceHeroProps) {
    const pathname = usePathname();

    // Generates clean breadcrumbs automatically from the current path URL
    const generateBreadcrumbs = () => {
        if (!pathname) return [];

        const segments = pathname.split("/").filter((item) => item !== "");
        let currentLink = "";

        return segments.map((segment, index) => {
            currentLink += `/${segment}`;

            // Formatting slug-text to a clean title case (e.g., 'lung-cancer' -> 'Lung Cancer')
            const cleanLabel = segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());

            return {
                label: cleanLabel,
                url: currentLink,
                isLast: index === segments.length - 1,
            };
        });
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <section className="relative min-h-[450px] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
            {/* ─── BACKGROUND IMAGE & MASK OVERLAY ────────────────────────── */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url('${backgroundImage || "https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=1170&auto=format&fit=crop"}')` }}
            />

            {/* High-contrast gradient overlay to ensure text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/90 md:to-slate-900/20" />

            {/* Decorative accent tint block matching your brand colors */}
            <div
                className="absolute bottom-0 right-0 z-10 h-[300px] w-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: "var(--gradient-primary)" }}
            />

            {/* ─── MAIN FOREGROUND CONTAINER ──────────────────────────────── */}
            <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-20">
                <div className="max-w-6xl">

                    {/* Automatic Breadcrumb Architecture */}
                    {enableBreadcrumbs && (
                        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                            <Link
                                href="/"
                                className="flex items-center gap-1 transition-colors hover:text-[#1fa8e8]"
                            >
                                <Home className="h-3.5 w-3.5" />
                                <span>Home</span>
                            </Link>

                            {breadcrumbs.map((crumb, idx) => (
                                <React.Fragment key={idx}>
                                    <ChevronRight className="h-3 w-3 text-slate-500 shrink-0" />
                                    {crumb.isLast ? (
                                        <span className="text-[#1fa8e8] font-semibold truncate max-w-[200px] sm:max-w-none">
                                            {crumb.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={crumb.url}
                                            className="transition-colors hover:text-[#1fa8e8] whitespace-nowrap"
                                        >
                                            {crumb.label}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </nav>
                    )}

                    {/* Service Main Title */}
                    <h1
                        className="text-[2.2rem] font-extrabold leading-[1.1] text-white sm:text-[3.2rem] lg:text-4xl"
                        style={{ letterSpacing: "-0.04em", wordSpacing: "4px" }}
                    >
                        {title}
                    </h1>

                    {/* Optional Short Content Description */}
                    {description && (
                        <p className="mt-4 text-sm leading-relaxed text-slate-300/90 sm:mt-6 sm:text-base max-w-5xl">
                            {description}
                        </p>
                    )}

                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-95 active:scale-[0.98] hover:scale-105"
                            style={{ background: "var(--gradient-health)" }}
                        >

                            {ctaText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-all" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}