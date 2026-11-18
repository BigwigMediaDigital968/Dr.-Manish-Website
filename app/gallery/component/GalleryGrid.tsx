"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Camera,
} from "lucide-react";

export type GalleryCategory =
  | "All"
  | "Health Talk"
  | "Podcast"
  | "Training"
  | "Others";

export interface GalleryItem {
  id: number;
  src: string;
  category: Exclude<GalleryCategory, "All">;
  alt?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/gallery/gallery-img-1.jpeg", category: "Health Talk" },
  { id: 2, src: "/gallery/gallery-img-2.jpeg", category: "Health Talk" },
  { id: 3, src: "/gallery/gallery-img-3.jpeg", category: "Health Talk" },
  { id: 4, src: "/gallery/gallery-img-4.jpeg", category: "Health Talk" },
  { id: 5, src: "/gallery/gallery-img-5.jpeg", category: "Others" },
  { id: 6, src: "/gallery/gallery-img-6.jpeg", category: "Training" },
  { id: 7, src: "/gallery/gallery-img-7.jpeg", category: "Health Talk" },
  { id: 8, src: "/gallery/gallery-img-8.jpeg", category: "Others" },
  { id: 9, src: "/gallery/gallery-img-9.jpeg", category: "Training" },
  { id: 10, src: "/gallery/gallery-img-10.jpeg", category: "Others" },
  { id: 11, src: "/gallery/gallery-img-11.jpeg", category: "Health Talk" },
  { id: 12, src: "/gallery/gallery-img-12.jpeg", category: "Podcast" },
  { id: 13, src: "/gallery/gallery-img-13.jpeg", category: "Training" },
  { id: 14, src: "/gallery/gallery-img-14.jpeg", category: "Podcast" },
  { id: 15, src: "/gallery/gallery-img-15.jpeg", category: "Training" },
  { id: 16, src: "/gallery/gallery-img-16.jpeg", category: "Podcast" },
  { id: 17, src: "/gallery/gallery-img-17.jpeg", category: "Health Talk" },
];

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Health Talk",
  "Podcast",
  "Training",
  "Others",
];

interface GalleryGridProps {
  items?: GalleryItem[];
}

export default function GalleryGrid({
  items = GALLERY_ITEMS,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter items based on selected category tab
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  // Count per category for clean pill badges
  const categoryCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {
      All: items.length,
      "Health Talk": 0,
      Podcast: 0,
      Training: 0,
      Others: 0,
    };
    items.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [items]);

  // Smooth fade-up trigger when switching tabs
  const handleCategoryChange = (category: GalleryCategory) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setSelectedIndex(null);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 180);
  };

  // Lightbox navigation handlers
  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : null
    );
  }, [selectedIndex, filteredItems.length]);

  // Keyboard support for Lightbox (Escape, Left, Right)
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, handleNext, handlePrev]);

  const activeItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Dynamically adapt masonry column count when filtered items are fewer so cards always fill the full width
  const masonryColumnsClass = useMemo(() => {
    const count = filteredItems.length;
    if (count <= 1) return "columns-1 max-w-2xl mx-auto";
    if (count === 2) return "columns-1 sm:columns-2";
    if (count === 3) return "columns-1 sm:columns-2 lg:columns-3";
    return "columns-1 sm:columns-2 lg:columns-3 xl:columns-4";
  }, [filteredItems.length]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header & Horizontal Scrollable Filter Tabs */}
      <div className="flex flex-col items-center text-center space-y-4 mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3.5 py-1.5 rounded-full">
          <Camera className="w-3.5 h-3.5" />
          Curated Visual Archive
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">
          Moments from Talks, Training &amp; Community Outreach
        </h2>

        {/* Horizontal X-Overflow Category Pills for All Devices */}
        {/* <div className="w-full pt-3">
          <div
            role="tablist"
            aria-label="Gallery Categories"
            className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto no-scrollbar pb-2 px-1 flex-nowrap"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`group shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0f172a] text-white shadow-md shadow-slate-900/15"
                      : "bg-white text-[#64748b] hover:text-[#0f172a] border border-slate-200 hover:border-[#1fa8e8]/50 hover:bg-slate-50"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold transition-colors ${
                      isActive
                        ? "bg-[#1fa8e8] text-white"
                        : "bg-slate-100 text-[#64748b] group-hover:bg-[#1fa8e8]/10 group-hover:text-[#1fa8e8]"
                    }`}
                  >
                    {categoryCounts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div> */}
      </div>

      {/* Pinterest-Style True Aspect-Ratio Masonry Grid (Full Width Adaptive) */}
      <div
        key={activeCategory}
        className={`w-full ${masonryColumnsClass} gap-5 space-y-5 transition-all duration-300 ${
          isAnimating
            ? "opacity-0 translate-y-3 scale-[0.99]"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {filteredItems.map((item, idx) => (
          <article
            key={item.id}
            onClick={() => setSelectedIndex(idx)}
            style={{
              animationDelay: `${Math.min(idx * 45, 450)}ms`,
            }}
            className="group relative w-full break-inside-avoid rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs hover:shadow-xl hover:shadow-slate-900/10 hover:border-[#1fa8e8]/40 transition-all duration-500 cursor-pointer animate-fadeInUp"
          >
            {/* Natural Aspect Ratio Image */}
            <img
              src={item.src}
              alt={item.alt || `${item.category} - Dr. Manish Aggarwal`}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Category Pill Badge & Expand Icon Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-[#0f172a]/25 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0f172a]/85 backdrop-blur-xs text-white border border-white/15 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#1fa8e8]" />
                  {item.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/95 text-[#0f172a] flex items-center justify-center shadow-sm transform sm:translate-y-1 sm:group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State Fallback */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
          <p className="text-sm font-semibold text-[#64748b]">
            No images found in this category yet.
          </p>
        </div>
      )}

      {/* Fullscreen Responsive Lightbox Modal (Image + Category Only) */}
      {activeItem && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.category}
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-[#0f172a]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#1fa8e8] text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Lightbox Image + Minimal Category Pill */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center justify-center gap-4"
          >
            <div className="relative max-h-[80vh] w-auto overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-slate-950 flex items-center justify-center">
              <img
                src={activeItem.src}
                alt={activeItem.category}
                className="max-h-[80vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 text-white">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1fa8e8] text-white">
                {activeItem.category}
              </span>
              <span className="text-xs text-slate-300 font-semibold">
                {selectedIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#1fa8e8] text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}

      {/* Keyframe animations & clean scrollbar hiding */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out both;
        }
      `}</style>
    </section>
  );
}