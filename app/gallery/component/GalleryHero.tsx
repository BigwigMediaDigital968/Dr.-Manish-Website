import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";

interface GalleryHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
  backgroundImage?: string;
}

export default function GalleryHero({
  title = "Clinical Excellence, Academic Milestones & Patient Care Gallery",
  subtitle = "A Visual Glimpse into Dr. Manish Aggarwal's Practice",
  description = "Explore moments from advanced interventional pulmonology procedures, international medical conferences, NHS UK & Max Hospital clinical leadership, and patient wellness initiatives across Delhi NCR.",
  badgeText = "Media & Clinical Showcase",
  backgroundImage = "/Kauvery-Hospital.png",
}: GalleryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 text-[#0f172a] border-b border-slate-200">
      {/* Full-Bleed Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Light Theme Readability Wash / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/65 sm:to-white/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60 pointer-events-none" />

      {/* Subtle Background Ambient Glows matching brand theme (#1fa8e8) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1fa8e8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gradient-to-tl from-[#1fa8e8]/10 via-sky-50/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:pt-20 lg:pt-32">
        <div className="max-w-3xl space-y-5">
          {/* Brand Accent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1fa8e8]/10 border border-[#1fa8e8]/25 text-[#1fa8e8] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#1fa8e8] animate-pulse" />
            {badgeText}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
            {title}
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg font-bold text-[#1fa8e8]">
            {subtitle}
          </p>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-3xl font-medium">
            {description}
          </p>

          {/* Action Bar */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <BookAppointmentButton cta="Book Consultation" />
            <a
              href="tel:+919899554095"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-[#0f172a] bg-white/95 hover:bg-white border border-slate-200 hover:border-[#1fa8e8]/50 transition-colors shadow-2xs"
            >
              Call Clinic Desk: +91 9899554095
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip in Light Theme */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md border-t border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4 text-xs sm:text-sm font-semibold text-[#334155]">
          <div className="flex items-center gap-2">
            <span className="text-[#1fa8e8] font-bold">•</span>
            <span>24+ Years Clinical Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#1fa8e8] font-bold">•</span>
            <span>10,000+ Bronchoscopies &amp; 3,000+ EBUS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#1fa8e8] font-bold">•</span>
            <span>Principal Director, Max Hospital</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#1fa8e8] font-bold">•</span>
            <span>FRCP (Glasgow) &amp; NHS UK Alumni</span>
          </div>
        </div>
      </div>
    </section>
  );
}