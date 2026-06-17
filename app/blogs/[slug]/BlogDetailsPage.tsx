'use client';
import { useModal } from "@/app/Contexts/ModalContext";
import { contactData } from "@/app/data";
import { Share } from "lucide-react";
import Link from "next/link";
import React, { useState, useMemo, useEffect, useRef } from "react";

// ─── Types matching the Mongoose model ─────────────────────────────────────

interface IFaq {
    question: string;
    answer: string;
}

interface RelatedPost {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    tags: string[];
    author: string;
    featuredImage?: { url: string; alt: string };
    createdAt: string;
    publishedAt?: string;
}

interface IBlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: { url: string; alt: string };
    faqs?: IFaq[];
    author: string;
    category: string;
    tags: string[];
    status?: string;
    featured?: boolean;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    structuredData?: string;
    publishedAt?: string | Date;
    createdAt: string | Date;
    updatedAt?: string | Date;
}

interface TocItem {
    id: string;
    label: string;
    level: number;
}

// ─── Premium Inline SVGs ────────────────────────────────────────────────────

const CalendarIcon = () => (
    <svg className="h-4 w-4 text-[#1fa8e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="h-4 w-4 text-[#6dbb45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronDownIcon = ({ open }: { open: boolean }) => (
    <svg
        className={`h-5 w-5 shrink-0 text-[#1fa8e8] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="h-5 w-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

// ─── Helpers ────────────────────────────────────────────────────────────────

function toSlugId(text: string, usedIds: Set<string>) {
    let base = text
        .toLowerCase()
        .trim()
        .replace(/<[^>]*>/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
    if (!base) base = "section";
    let id = base;
    let counter = 2;
    while (usedIds.has(id)) {
        id = `${base}-${counter}`;
        counter++;
    }
    usedIds.add(id);
    return id;
}

function buildTocAndPatchContent(html: string): { html: string; toc: TocItem[] } {
  if (!html) return { html: "", toc: [] };

  const usedIds = new Set<string>();
  const toc: TocItem[] = [];

  const headingRegex = /<(h[2-4])([^>]*)>([\s\S]*?)<\/\1>/gi;

  const patched = html.replace(headingRegex, (match, tag, attrs, inner) => {
    const level = parseInt(tag.replace("h", ""), 10);
    const plainText = inner.replace(/<[^>]*>/g, "").trim();
    if (!plainText) return match;

    const existingIdMatch = attrs.match(/id=["']([^"']+)["']/i);
    let id: string;
    if (existingIdMatch) {
      id = existingIdMatch[1];
      usedIds.add(id);
    } else {
      id = toSlugId(plainText, usedIds);
    }

    toc.push({ id, label: plainText, level });

    if (existingIdMatch) {
      return match;
    }
    return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
  });

  return { html: patched, toc };
}

function estimateReadTime(html: string) {
    const text = html.replace(/<[^>]*>/g, " ");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return minutes;
}

function formatDate(date?: string | Date) {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function estimateRelatedReadTime(excerpt: string) {
    const words = excerpt.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(3, Math.round(words / 40) + 3);
}

// ─── FAQ Accordion Item ─────────────────────────────────────────────────────

function FaqItem({ faq, isOpen, onToggle }: { faq: IFaq; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border border-[#e2e8f0] rounded-2xl overflow-hidden bg-white">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
                <span className="text-sm sm:text-base font-bold text-[#0f172a]">{faq.question}</span>
                <ChevronDownIcon open={isOpen} />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-xs sm:text-sm leading-relaxed text-[#64748b]">{faq.answer}</p>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function BlogDetailsPage({ post }: { post: IBlogPost }) {
    const { openModal } = useModal();
    const [copied, setCopied] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
    const [relatedLoading, setRelatedLoading] = useState(true);
    const isManualScroll = useRef(false);

    const { html: patchedContent, toc } = useMemo(
        () => buildTocAndPatchContent(post?.content || ""),
        [post?.content]
    );

    useEffect(() => {
        if (!post?.slug) return;
        let cancelled = false;

        (async () => {
            setRelatedLoading(true);
            try {
                const res = await fetch(`/api/blogs/related?slug=${encodeURIComponent(post.slug)}&limit=3`);
                const data = await res.json();
                if (!cancelled && data.success) {
                    setRelatedPosts(data.data);
                }
            } catch (err) {
                console.error("Failed to load related posts:", err);
            } finally {
                if (!cancelled) setRelatedLoading(false);
            }
        })();

        return () => { cancelled = true; };
    }, [post?.slug]);

    // ── Scroll-spy: highlight the active TOC entry as the user scrolls ──
    //
    // Why this is NOT built on IntersectionObserver's isIntersecting flag:
    // with a narrow rootMargin trigger band, short headings (or fast scrolls/
    // trackpad flicks) can pass through that band entirely between observer
    // ticks, so the callback never fires "intersecting" for them and the
    // active TOC item gets stuck on a stale heading. Instead, on every
    // scroll frame we directly measure each heading's position and pick
    // the LAST one whose top has crossed above a fixed trigger line near
    // the top of the viewport — that's the section currently being read,
    // and it can never be skipped the way intersection events can.
    useEffect(() => {
      if (toc.length === 0) return;

      let rafId: number;
      let elements: HTMLElement[] = [];
      let ticking = false;

      const TRIGGER_OFFSET = 120; // px from top of viewport treated as the "active" line

      const updateActive = () => {
        ticking = false;
        if (isManualScroll.current) return;
        if (elements.length === 0) return;

        let current = elements[0].id;
        for (const el of elements) {
          const top = el.getBoundingClientRect().top;
          if (top - TRIGGER_OFFSET <= 0) {
            current = el.id;
          } else {
            break;
          }
        }
        setActiveSection((prev) => (prev === current ? prev : current));
      };

      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateActive);
        }
      };

      // Wait a tick so patchedContent (injected via dangerouslySetInnerHTML)
      // has actually painted before we query for heading elements.
      rafId = requestAnimationFrame(() => {
        const ids = [
          ...toc.map((t) => t.id),
          ...(post.faqs && post.faqs.length > 0 ? ["faqs"] : []),
        ];
        elements = ids
          .map((id) => document.getElementById(id))
          .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return;

        // Run once immediately so the right section is highlighted on load,
        // e.g. if the page was opened mid-scroll via browser restore or a hash link.
        updateActive();

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      });

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
      // patchedContent is included so headings are re-measured if content
      // changes (e.g. after an edit) and old DOM nodes get replaced.
    }, [toc, post.faqs, patchedContent]);

    const readTime = useMemo(() => estimateReadTime(post?.content || ""), [post?.content]);
    const displayDate = formatDate(post?.publishedAt || post?.createdAt);

    const handleCopyLink = () => {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleTocClick = (id: string) => {
      isManualScroll.current = true;
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { isManualScroll.current = false; }, 800);
    };

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-400 text-sm">
                Blog post not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-[#0f172a] font-sans antialiased">

            <section className="relative min-h-[480px] w-full flex items-end justify-start overflow-hidden pt-32 pb-12 sm:pb-16">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{
                        backgroundImage: `url('${post.featuredImage?.url || "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1600&auto=format&fit=crop"}')`
                    }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6">
                    <div className="max-w-4xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white bg-[#1fa8e8]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6dbb45]" />
                            {post.category}
                        </div>

                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.1] text-white"
                            style={{ letterSpacing: "-0.04em" }}
                        >
                            {post.title}
                        </h1>

                        <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/10 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#1fa8e8] bg-slate-100 flex items-center justify-center">
                                    <span className="text-sm font-bold text-[#1fa8e8]">
                                        {post.author?.charAt(0)?.toUpperCase() || "A"}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium leading-none">Written by</p>
                                    <p className="text-sm text-white font-bold mt-1">{post.author}</p>
                                </div>
                            </div>

                            {displayDate && (
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                                    <CalendarIcon />
                                    <span>{displayDate}</span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                                <ClockIcon />
                                <span>{readTime} Min Read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">

                    <article className="lg:col-span-8 space-y-8">

                        <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                {post.excerpt ? "Expert Insight" : "Blog Article"}
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleCopyLink}
                                    className="relative flex h-9 px-3 items-center gap-1.5 rounded-xl border border-[#e2e8f0] hover:bg-[#f8fafc] text-slate-500 transition-colors text-xs font-bold"
                                    title="Share Article"
                                >
                                    <Share className="h-4 w-4" />
                                    <span>{copied ? "Copied!" : "Share"}</span>
                                </button>
                            </div>
                        </div>

                        {post.excerpt && (
                            <p className="text-base sm:text-lg leading-relaxed text-[#475569] font-medium">
                                {post.excerpt}
                            </p>
                        )}

                        <div
                            className="max-w-none
                            [&_h1]:text-[2rem] [&_h1]:font-bold [&_h1]:leading-[1.2] [&_h1]:mt-4 [&_h1]:mb-2 [&_h1]:scroll-mt-32

                            [&_h2]:text-[1.5rem] [&_h2]:font-bold [&_h2]:leading-[1.25] [&_h2]:mt-4 [&_h2]:mb-2 [&_h2]:scroll-mt-32

                            [&_h3]:text-[1.25rem] [&_h3]:font-semibold [&_h3]:leading-[1.3] [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:scroll-mt-32

                            [&_h4]:text-[1.1rem] [&_h4]:font-semibold [&_h4]:leading-[1.35] [&_h4]:mt-3 [&_h4]:mb-1 [&_h4]:scroll-mt-32

                            [&_h5]:text-[1rem] [&_h5]:font-semibold [&_h5]:leading-[1.4] [&_h5]:mt-3 [&_h5]:mb-1

                            [&_h6]:text-[0.875rem] [&_h6]:font-semibold [&_h6]:leading-[1.4] [&_h6]:text-slate-600 [&_h6]:mt-3 [&_h6]:mb-1

                            [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-slate-800 [&_p]:my-2

                            [&_strong]:font-bold
                            [&_em]:italic

                            [&_a]:text-[#1fa8e8] [&_a]:underline

                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
                            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2

                            [&_li]:my-1

                            [&_blockquote]:border-l-[3px]
                            [&_blockquote]:border-[#1fa8e8]
                            [&_blockquote]:bg-slate-50
                            [&_blockquote]:text-slate-600
                            [&_blockquote]:px-4
                            [&_blockquote]:py-2
                            [&_blockquote]:rounded-r-lg
                            [&_blockquote]:my-3

                            [&_img]:rounded-xl
                            [&_img]:max-w-full
                            [&_img]:block
                            [&_img]:mx-auto
                            [&_img]:my-4

                            [&_code]:bg-slate-100
                            [&_code]:text-rose-600
                            [&_code]:px-1.5
                            [&_code]:py-0.5
                            [&_code]:rounded
                            [&_code]:font-mono
                            [&_code]:text-sm

                            [&_pre]:bg-slate-800
                            [&_pre]:text-slate-200
                            [&_pre]:p-4
                            [&_pre]:rounded-lg
                            [&_pre]:overflow-x-auto
                            [&_pre]:my-3
                            [&_pre]:text-sm
                            [&_pre]:font-mono

                            [&_pre_code]:bg-transparent
                            [&_pre_code]:text-inherit
                            [&_pre_code]:p-0

                            [&_hr]:border-0
                            [&_hr]:border-t-2
                            [&_hr]:border-slate-200
                            [&_hr]:my-4

                            [&_table]:w-full
                            [&_table]:border-collapse
                            [&_table]:my-4

                            [&_th]:border
                            [&_th]:border-slate-200
                            [&_th]:bg-slate-50
                            [&_th]:px-3
                            [&_th]:py-2
                            [&_th]:text-left
                            [&_th]:font-semibold

                            [&_td]:border
                            [&_td]:border-slate-200
                            [&_td]:px-3
                            [&_td]:py-2

                            [&_mark]:rounded
                            [&_mark]:px-1"
                            dangerouslySetInnerHTML={{ __html: patchedContent }}
                        />

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#e2e8f0]">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">Tags:</span>
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {post.faqs && post.faqs.length > 0 && (
                            <div id="faqs" className="scroll-mt-32 space-y-4 pt-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-3">
                                    {post.faqs.map((faq, idx) => (
                                        <FaqItem
                                            key={idx}
                                            faq={faq}
                                            isOpen={openFaqIndex === idx}
                                            onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="border-t border-[#e2e8f0] pt-8 mt-12">
                            <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-6 text-center">
                                <h4 className="text-base font-bold text-[#0f172a]">Have a question about this topic?</h4>
                                <p className="text-xs sm:text-sm text-[#64748b] mt-1">Get an expert second opinion.</p>
                                <div className="mt-4 flex flex-wrap justify-center gap-3">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-white bg-[#1fa8e8] hover:opacity-90 transition-opacity"
                                    >
                                        Request Consultation
                                        <ArrowRightIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </article>

                    <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">

                        {false && toc.length > 0 && (
                          <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
                              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-[#e2e8f0]">
                                  Table of Contents
                              </h3>
                              <nav className="space-y-1.5">
                                  {toc.map((section) => {
                                      const active = activeSection === section.id;
                                      return (
                                          <a
                                              key={section.id}
                                              href={`#${section.id}`}
                                              onClick={(e) => { e.preventDefault(); handleTocClick(section.id); }}
                                              className={`block rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                                section.level === 3 ? "ml-3" : section.level === 4 ? "ml-6" : ""
                                              } ${active
                                                      ? "bg-[#1fa8e8]/10 text-[#0c7dc2] pl-4 border-l-2 border-[#1fa8e8]"
                                                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                  }`}
                                          >
                                              {section.label}
                                          </a>
                                      );
                                  })}
                                  {post.faqs && post.faqs.length > 0 && (
                                    <a
                                      href="#faqs"
                                      onClick={(e) => { e.preventDefault(); handleTocClick("faqs"); }}
                                      className={`block rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                        activeSection === "faqs"
                                          ? "bg-[#1fa8e8]/10 text-[#0c7dc2] pl-4 border-l-2 border-[#1fa8e8]"
                                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                      }`}
                                    >
                                      FAQs
                                    </a>
                                  )}
                              </nav>
                          </div>
                        )}

                        <div
                            className="relative rounded-3xl overflow-hidden p-6 text-white shadow-xl"
                            style={{ background: "var(--gradient-health)", boxShadow: "var(--shadow-primary)" }}
                        >
                            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
                            <div className="absolute top-0 left-0 h-24 w-24 rounded-full bg-white/5 blur-lg pointer-events-none" />

                            <div className="relative z-10 text-center">
                                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full inline-block">
                                    Expert Clinical Support
                                </span>

                                <h4 className="text-lg sm:text-xl font-extrabold tracking-tight mt-3">
                                    Need Expert <br /> Guidance?
                                </h4>

                                <p className="text-xs text-white/90 leading-relaxed mt-2 max-w-[240px] mx-auto">
                                    Schedule a consultation with {post.author}.
                                </p>

                                <div className="mt-6 space-y-2">
                                    <button
                                        onClick={openModal}
                                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-extrabold text-[#0c7dc2] transition-transform hover:scale-[1.02] shadow-md"
                                    >
                                        <span>Book Appointment</span>
                                        <ArrowRightIcon />
                                    </button>

                                    <a
                                        href={`tel:${contactData.phone}`}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-xs font-extrabold text-white hover:bg-white/15 transition-colors"
                                    >
                                        <PhoneIcon />
                                        <span>Call Helpline</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </aside>

                </div>

                {(relatedLoading || relatedPosts.length > 0) && (
                    <div className="mt-16 border-t border-[#e2e8f0] pt-12">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] tracking-tight">
                                Related Articles
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                {post.category}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {relatedLoading
                                ? Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden animate-pulse">
                                        <div className="h-36 bg-slate-100" />
                                        <div className="p-4 space-y-2">
                                            <div className="h-3 w-1/3 bg-slate-100 rounded" />
                                            <div className="h-4 w-full bg-slate-100 rounded" />
                                            <div className="h-4 w-2/3 bg-slate-100 rounded" />
                                        </div>
                                    </div>
                                ))
                                : relatedPosts.map((blog) => (
                                    <a
                                        key={blog._id}
                                        href={`/blog/${blog.slug}`}
                                        className="group rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden hover:shadow-lg hover:border-[#1fa8e8]/30 transition-all duration-300"
                                    >
                                        <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                                            {blog.featuredImage?.url ? (
                                                <img
                                                    src={blog.featuredImage.url}
                                                    alt={blog.featuredImage.alt || blog.title}
                                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-slate-300 text-xs">
                                                    No image
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <span className="text-[10px] font-bold text-[#1fa8e8] block uppercase tracking-wider">
                                                {blog.category}
                                            </span>
                                            <h4 className="text-sm font-bold text-[#0f172a] mt-1 line-clamp-2 leading-snug group-hover:text-[#1fa8e8] transition-colors duration-200">
                                                {blog.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400">
                                                <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                                                <span>•</span>
                                                <span>{estimateRelatedReadTime(blog.excerpt)} min</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </div>
                )}
            </section>

        </div>
    );
}