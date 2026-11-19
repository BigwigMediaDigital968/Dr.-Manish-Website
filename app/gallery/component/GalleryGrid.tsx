"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Pause,
  Play,
  MapPin,
  Building2,
  Mic,
  Calendar,
} from "lucide-react";

export interface GalleryItem {
  id: number;
  src: string;
  alt?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/gallery/gallery-img-1.jpeg" },
  { id: 2, src: "/gallery/gallery-img-2.jpeg" },
  { id: 3, src: "/gallery/gallery-img-3.jpeg" },
  { id: 4, src: "/gallery/gallery-img-4.jpeg" },
  { id: 5, src: "/gallery/gallery-img-5.jpeg" },
  { id: 6, src: "/gallery/gallery-img-6.jpeg" },
  { id: 7, src: "/gallery/gallery-img-7.jpeg" },
  { id: 8, src: "/gallery/gallery-img-8.jpeg" },
  { id: 9, src: "/gallery/gallery-img-9.jpeg" },
  { id: 10, src: "/gallery/gallery-img-10.jpeg" },
  { id: 11, src: "/gallery/gallery-img-11.jpeg" },
  { id: 12, src: "/gallery/gallery-img-12.jpeg" },
  { id: 13, src: "/gallery/gallery-img-13.jpeg" },
  { id: 14, src: "/gallery/gallery-img-14.jpeg" },
  { id: 15, src: "/gallery/gallery-img-15.jpeg" },
  { id: 16, src: "/gallery/gallery-img-16.jpeg" },
  { id: 17, src: "/gallery/gallery-img-17.jpeg" },
];

interface GalleryGridProps {
  items?: GalleryItem[];
  autoPlayInterval?: number;
  eventTitle?: string;
  eventSubtitle?: string;
  place?: string;
  location?: string;
  date?: string;
}

export default function GalleryGrid({
  items = GALLERY_ITEMS,
  autoPlayInterval = 4000,
  eventTitle = "Health Talk — Protect Your Lungs",
  eventSubtitle = "Understanding Current AQI Conditions, Air Pollution & Respiratory Health",
  place = "Mount Abu Public School (in association with Max Hospital, Shalimar Bagh)",
  location = "Sector 5, Rohini, New Delhi - 110085",
  date = "17 November 2026",
}: GalleryGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement | null>(null);

  const totalItems = items.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-slide every few seconds (pauses when hovered, manually paused, or lightbox is open)
  useEffect(() => {
    if (!isAutoPlaying || lightboxIndex !== null || totalItems <= 1) return;
    const timer = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isAutoPlaying, lightboxIndex, totalItems, autoPlayInterval, handleNext]);

  // Keep active thumbnail centered in the single-line strip
  useEffect(() => {
    const container = thumbnailStripRef.current;
    if (!container) return;
    const activeThumb = container.children[currentIndex] as
      | HTMLElement
      | undefined;
    if (activeThumb) {
      const scrollLeft =
        activeThumb.offsetLeft -
        container.clientWidth / 2 +
        activeThumb.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentIndex]);

  // Keyboard navigation for both Carousel and Lightbox
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight")
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % totalItems : null
          );
        if (e.key === "ArrowLeft")
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + totalItems) % totalItems : null
          );
        return;
      }

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, totalItems, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Touch swipe handlers for mobile/tablet
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  if (totalItems === 0) return null;

  return (
    <section className="w-full max-w-full overflow-hidden py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header + Health Talk, Place & Location Details */}
        <div className="flex flex-col items-center text-center space-y-3 mb-7 sm:mb-10 px-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3.5 py-1.5 rounded-full">
            <Camera className="w-3.5 h-3.5 shrink-0" />
            <span>Visual Showcase</span>
          </span>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight leading-snug max-w-3xl break-words">
            Moments from Talks, Training &amp; Community Outreach
          </h2>

          {/* Health Talk Event Details Card */}
          <div className="w-full max-w-4xl mt-3 pt-4 pb-4 px-4 sm:px-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs text-left sm:text-center space-y-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1fa8e8]">
                <Mic className="w-3.5 h-3.5 shrink-0" />
                <span>{eventTitle}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#334155]">
                {eventSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-2.5 sm:gap-5 pt-2 border-t border-slate-200/70 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-start sm:items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#1fa8e8] shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  <strong className="text-[#0f172a]">Place:</strong> {place}
                </span>
              </div>

              <span className="hidden sm:inline text-slate-300">|</span>

              <div className="flex items-start sm:items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#1fa8e8] shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  <strong className="text-[#0f172a]">Location:</strong>{" "}
                  {location}
                </span>
              </div>

              {date && (
                <>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <div className="flex items-start sm:items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#1fa8e8] shrink-0 mt-0.5 sm:mt-0" />
                    <span>
                      <strong className="text-[#0f172a]">Date:</strong> {date}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Single-Slide One-by-One Responsive Carousel */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative w-full max-w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-xl select-none"
        >
          {/* Sliding Track (Strictly constrained to 100% of parent viewport width) */}
          <div
            className="flex w-full transition-transform duration-500 ease-out"
            style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
          >
            {items.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="w-full min-w-full max-w-full shrink-0 relative flex items-center justify-center bg-slate-950 h-[260px] xs:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden cursor-pointer group"
              >
                {/* Blurred Ambient Backdrop for Portrait/Mixed Ratio Photos */}
                <img
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 blur-2xl scale-110 pointer-events-none"
                />

                {/* Main Crisp Photo (Centered & fitted inside mobile/desktop frame) */}
                <img
                  src={item.src}
                  alt={item.alt || `${eventTitle} - Photo ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="relative z-10 max-h-[82%] sm:max-h-[90%] max-w-[85%] sm:max-w-[90%] w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Expand Trigger */}
                <button
                  type="button"
                  aria-label="View full screen"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0f172a]/75 hover:bg-[#1fa8e8] text-white border border-white/15 backdrop-blur-xs flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Left / Right Navigation Arrows */}
          {totalItems > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-2.5 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#1fa8e8] text-[#0f172a] hover:text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#1fa8e8] text-[#0f172a] hover:text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Bottom Counter & Autoplay Control Bar */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#0f172a]/85 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-bold whitespace-nowrap">
            <span>
              {currentIndex + 1} / {totalItems}
            </span>
            <span className="text-white/30">|</span>
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              className="inline-flex items-center gap-1 text-[#1fa8e8] hover:text-white transition-colors cursor-pointer"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Single-Line Horizontal Thumbnail Strip (Strictly bounded within container width) */}
        <div className="w-full max-w-full overflow-hidden mt-3 sm:mt-4">
          <div
            ref={thumbnailStripRef}
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-0.5 w-full"
          >
            {items.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to photo ${idx + 1}`}
                  className={`relative shrink-0 w-14 h-11 sm:w-20 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#1fa8e8] scale-105 shadow-md ring-2 ring-[#1fa8e8]/30 opacity-100"
                      : "border-transparent opacity-55 hover:opacity-90"
                  }`}
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen Photo Preview"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#0f172a]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close fullscreen preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {totalItems > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + totalItems) % totalItems : null
                );
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#1fa8e8] text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full flex flex-col items-center justify-center gap-3"
          >
            <img
              src={items[lightboxIndex].src}
              alt={`${eventTitle} - Photo ${lightboxIndex + 1}`}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl select-none"
            />
            <span className="px-4 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white">
              {lightboxIndex + 1} / {totalItems}
            </span>
          </div>

          {totalItems > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % totalItems : null
                );
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#1fa8e8] text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}