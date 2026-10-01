"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  MessageSquare,
  Search,
  Compass,
  Loader2,
  Check,
  Grid,
  Infinity as InfinityIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { formatDate } from "@/app/lib/Helpers/Date";
import Link from "next/link";

/* ============================================================================
   1. Types
   ============================================================================ */

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  category?: string;
  featuredImage?: { url: string; alt: string };
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface APIResponse {
  posts: BlogPost[];
  tags: string[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

/* ============================================================================
   2. API client — only published blogs are shown publicly
   ============================================================================ */

export async function fetchBlogsAPI(
  page: number = 1,
  limit: number = 6,
  tag: string = "All",
  searchQuery: string = "",
): Promise<APIResponse> {
  const searchParams = new URLSearchParams();

  searchParams.set("status", "published");
  searchParams.set("page", page.toString());
  searchParams.set("limit", limit.toString());

  if (tag && tag !== "All") {
    searchParams.set("tag", tag);
  }

  if (searchQuery.trim()) {
    searchParams.set("search", searchQuery.trim());
  }

  const response = await fetch(`/api/blogs?${searchParams.toString()}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const result = await response.json();

  return {
    posts: result.data,
    tags: result.tags ?? [],
    totalCount: result.pagination.total,
    totalPages: result.pagination.pages,
    currentPage: result.pagination.page,
  };
}

/* ============================================================================
   4. STREAMING_CHUNK: Main Blog Grid Component with Infinite Scroll & Pagination
   ============================================================================ */

interface BlogGridProps {
  onPostSelect?: (post: BlogPost) => void;
  postsPerPage?: number;
}

export default function BlogGrid({
  onPostSelect,
  postsPerPage = 6,
}: BlogGridProps) {
  // Mode Controller: "infinite" (virtualization scroll trigger) or "paginated" (classic buttons)
  const [navMode, setNavMode] = useState<"infinite" | "paginated">("paginated");

  // Filtering & Search State
  const [activeTag, setActiveTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  // Grid Data States
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // Scroll Virtualization Sentinel Ref
  const observerRef = useRef<IntersectionObserver | null>(null);
  // Latest request id — responses from superseded requests are ignored
  const requestIdRef = useRef(0);

  // Handle Search Input Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Reset parameters when filters, query, or mode switches
  useEffect(() => {
    setPosts([]);
    setCurrentPage(1);
    setHasMore(true);
  }, [activeTag, debouncedQuery, navMode]);

  /* ============================================================================
     5. Data Fetching Coordinator
     ============================================================================ */
  const loadBlogData = useCallback(
    async (pageNum: number, append: boolean = false) => {
      const requestId = ++requestIdRef.current;
      setIsLoading(true);

      try {
        const result = await fetchBlogsAPI(
          pageNum,
          postsPerPage,
          activeTag,
          debouncedQuery,
        );
        if (requestId !== requestIdRef.current) return;

        if (append) {
          setPosts((prev) => {
            // Remove duplicates if any exist
            const existingIds = new Set(prev.map((p) => p._id));
            const uniqueNewPosts = result.posts.filter(
              (p) => !existingIds.has(p._id),
            );
            return [...prev, ...uniqueNewPosts];
          });
        } else {
          setPosts(result.posts);
        }

        setTags(result.tags);
        setTotalPages(result.totalPages);
        setHasMore(pageNum < result.totalPages);
      } catch (error) {
        if (requestId !== requestIdRef.current) return;
        console.error("Failed to retrieve blogs:", error);
        if (!append) setPosts([]);
        setHasMore(false);
      } finally {
        if (requestId === requestIdRef.current) setIsLoading(false);
      }
    },
    [activeTag, debouncedQuery, postsPerPage],
  );

  // Trigger loading when page changes
  useEffect(() => {
    loadBlogData(currentPage, navMode === "infinite");
  }, [currentPage, activeTag, debouncedQuery, navMode]);

  /* ============================================================================
     6. STREAMING_CHUNK: Intersection Observer Scroll Virtualizer Hook Setup
     ============================================================================ */
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || navMode !== "infinite") return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setCurrentPage((prev) => prev + 1);
          }
        },
        {
          rootMargin: "150px", // Trigger slightly before the user hits the exact bottom
        },
      );

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, navMode],
  );

  // Handle explicit page switching in Paginated Mode
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll smoothly back to top of grid
      const gridElement = document.getElementById("blog-grid-anchor");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Tags come from published blogs in the database
  const tagFilters = ["All", ...tags];

  return (
    <div className="w-full bg-white text-slate-900 py-5 sm:py-10 selection:bg-[#1fa8e8] selection:text-white">
      {/* Dynamic Keyframes for smooth transitions and mock load delays */}
      <style>{`
        @keyframes fadeInBlog {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blog-card {
          animation: fadeInBlog 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ==========================================================
         FILTER CONTROL BAR (PREMIUM MEDICAL DESIGN)
         ========================================================== */}
      <div
        id="blog-grid-anchor"
        className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-8 space-y-6"
      >
        {/* Top Header Row with Switch Controllers */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#0c7dc2] block">
              Scientific Journals & Public Advisories
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Clinical Knowledge Repository
            </h2>
          </div>

          {/* Interactive Navigation Mode Toggle matching premium benchmarks */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/40 shadow-inner">
            <button
              onClick={() => setNavMode("paginated")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                navMode === "paginated"
                  ? "bg-white text-[#1fa8e8] shadow-md shadow-sky-500/5 scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Grid className="w-4 h-4" /> Paginated Grid
            </button>
            <button
              onClick={() => setNavMode("infinite")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                navMode === "infinite"
                  ? "bg-white text-[#1fa8e8] shadow-md shadow-sky-500/5 scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <InfinityIcon className="w-4 h-4" /> Virtual Infinite Scroll
            </button>
          </div>
        </div>

        {/* Filters and Search Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Tag Filters */}
          <div className="lg:col-span-8 flex flex-wrap items-center gap-1.5 justify-center lg:justify-start">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" /> Tags:
            </span>
            {tagFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTag(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTag === cat
                    ? "bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] text-white shadow-md shadow-sky-400/20"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box Panel */}
          <div className="lg:col-span-4 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search by keyword or diagnosis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]/30 focus:border-[#1fa8e8] text-xs transition-all text-slate-800 bg-slate-50/50"
            />
          </div>
        </div>
      </div>

      {/* ==========================================================
         BLOG CARDS GRID LAYER (Aligning precisely with image_a8743a.jpg)
         ========================================================== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <div
                key={post._id}
                className="animate-blog-card bg-white transition-all duration-300 flex flex-col justify-between"
                style={{ animationDelay: `${(idx % 6) * 100}ms` }}
              >
                {/* Visual content blocks structured perfectly matching image_a8743a.jpg design */}
                <div className="space-y-4">
                  {/* Top: Metadata & Post Title Block (Capitalized thin header) */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-[10px] md:text-xs font-medium text-slate-400 tracking-widest uppercase block font-mono">
                      {formatDate(post.publishedAt || post.createdAt)}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug line-clamp-2 uppercase">
                      {post.title}
                    </h3>
                  </div>

                  {/* Mid: Bound Image Frame */}
                  <div className="relative h-64 overflow-hidden bg-slate-100 border border-slate-100">
                    {post.featuredImage?.url && (
                      <img
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    )}

                    {/* Tag Overlay */}
                    {(post.tags?.[0] || post.category) && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-extrabold text-[#0c7dc2] uppercase tracking-wider shadow-sm">
                      {post.tags?.[0] || post.category}
                    </span>
                    )}
                  </div>

                  {/* Action Link: Bordered Box Centered Button (Strict mapping of image_a8743a.jpg) */}
                  <div className="pt-2">
                    <Link
                      href={`/blogs/${post.slug}`}
                      onClick={() => onPostSelect?.(post)}
                      className="w-full py-3.5 border border-slate-200 hover:border-slate-400 hover:bg-slate-50/50 text-xs font-extrabold text-slate-600 hover:text-slate-900 tracking-widest uppercase text-center transition-all focus:outline-none flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Read More{" "}
                      <ArrowRight className="w-3.5 h-3.5 text-[#1fa8e8]" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Row Footer (Strict mapping of SHARE & COMMENT segments in image_a8743a.jpg) */}
              </div>
            ))}
          </div>
        ) : (
          /* Empty / Loader Grid Callback */
          !isLoading && (
            <div className="text-center py-24 bg-slate-50 rounded-[32px] border border-dashed border-slate-200">
              <Compass className="w-12 h-12 text-[#1fa8e8] mx-auto animate-pulse mb-4" />
              <h3 className="font-extrabold text-lg text-slate-800">
                No Articles Found
              </h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto mt-1">
                {debouncedQuery.trim() || activeTag !== "All"
                  ? `We couldn't locate articles matching your search. Please try another keyword or tag.`
                  : "New articles are on the way. Please check back soon."}
              </p>
            </div>
          )
        )}
      </div>

      {/* ==========================================================
         DYNAMIC MODE NAVIGATION: VIRTUAL SCROLL LOAD TRIGGER VS BUTTONS
         ========================================================== */}

      {/* 1. SCROLL SENTINEL (INFINITE VIRTUALIZATION MODE) */}
      {navMode === "infinite" && (
        <div
          ref={lastElementRef}
          className="w-full flex justify-center py-12 mt-8 border-t border-slate-50"
        >
          {isLoading && (
            <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 rounded-full border border-slate-200 shadow-sm text-slate-500 text-xs font-bold">
              <Loader2 className="w-4 h-4 text-[#1fa8e8] animate-spin" />
              <span>Virtualizer rendering next columns...</span>
            </div>
          )}
          {!hasMore && posts.length > 0 && (
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" /> End of diagnostic
              knowledge base
            </span>
          )}
        </div>
      )}

      {/* 2. CLASSIC PAGINATION (PAGINATED GRID MODE) */}
      {navMode === "paginated" && totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 flex items-center justify-between border-t border-slate-100 pt-8">
          {/* Quick Stats */}
          <span className="text-xs font-bold text-slate-400 hidden sm:inline-block">
            Showing Page {currentPage} of {totalPages}
          </span>

          {/* Action Pages List */}
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isLoading}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                currentPage === 1
                  ? "border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50/50"
                  : "border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-[#1fa8e8] active:scale-95 shadow-sm"
              }`}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isSelected = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  disabled={isLoading}
                  className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] text-white shadow-md shadow-sky-400/10 scale-105"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isLoading}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                currentPage === totalPages
                  ? "border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50/50"
                  : "border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-[#1fa8e8] active:scale-95 shadow-sm"
              }`}
              aria-label="Go to next page"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      )}

      {/* Spinner indicating initial search filtering loads */}
      {isLoading && navMode === "paginated" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <div className="bg-slate-950 rounded-2xl p-6 shadow-2xl flex items-center gap-3 border border-slate-800">
            <Loader2 className="w-5 h-5 text-[#1fa8e8] animate-spin" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              Syncing Value Insights...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
