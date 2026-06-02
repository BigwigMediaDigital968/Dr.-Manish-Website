"use client";

import React from "react";
import {
  Calendar,
  MessageCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

interface BlogCardProps {
  image: string;
  date: string;
  comments: number;
  title: string;
  desc: string;
  href: string;
}

function BlogCard({ image, date, comments, title, desc, href }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-[32px] border border-slate-100 hover:border-[#1fa8e8]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
      {/* Card Image Wrapper with padding matching reference image_9bd201.jpg */}
      <div className="p-4 pb-0">
        <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-slate-50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle brand tag */}
          <span className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-[9px] font-black text-[#0c7dc2] uppercase tracking-wider shadow-sm">
            Clinical Guide
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          {/* Title */}
          <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#1fa8e8] transition-colors duration-200">
            <a href={href}>{title}</a>
          </h4>

          {/* Metadata Row matching the design exactly */}
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-[#1fa8e8] transition-colors">
              <Calendar className="w-3.5 h-3.5 text-[#1fa8e8]" />
              {date}
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#6dbb45] transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-[#6dbb45]" />
              {comments} {comments === 1 ? "Comment" : "Comments"}
            </span>
          </div>

          {/* Excerpt snippet */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
            {desc}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-5 mt-5 border-t border-slate-50">
          <a
            href={href}
            className="inline-flex items-center gap-1 text-xs font-extrabold text-slate-700 hover:text-[#0c7dc2] group/link transition-all"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 text-[#1fa8e8] group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      date: "November 29, 2023",
      comments: 0,
      title: "Understanding Chronic Snoring: When is it Sleep Apnea?",
      desc: "An in-depth look at how upper airway collapse leads to oxygen desaturation, morning fatigue, and sleep disruptions.",
      href: "#sleep-apnea-article",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      date: "November 29, 2023",
      comments: 0,
      title: "Managing Asthma Cycles During Delhi's High Pollution Months",
      desc: "Essential preventative strategies, inhaler techniques, and air pollution defense routines curated by senior pulmonologists.",
      href: "#asthma-pollution-article",
    },
  ];

  return (
    <section
      id="blogs"
      className="relative py-14 px-4 bg-slate-50 overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Background Decorative Lighting Blur Orbs */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#1fa8e8]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT SIDE: 2 BLOG CARDS GRID (8 Columns) ================= */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
            {blogs.map((blog, idx) => (
              <div key={idx} className="h-full">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE: SECTION TEXT DETAILS (4 Columns) ================= */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left order-1 lg:order-2">
            {/* Tagline Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Knowledge Hub
            </div>

            {/* Structured Heading matching the image_9bd201.jpg style exactly */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Blogs & Articles
            </h2>

            {/* Editorial Descriptive Content Blocks */}
            <div className="space-y-4">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Stay updated with the latest advancements in interventional
                chest diagnostics, asthma prevention, sleep medicine, and
                diagnostic parameters curated by Dr. Manish Aggarwal's expert
                clinical team.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                Our medical articles are structured to give patients practical
                guidance on managing respiratory illnesses and improving sleep
                diagnostics and breathing rehabilitation.
              </p>
            </div>

            {/* View All Blogs CTA Link */}
            <div className="pt-4">
              <a
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#1fa8e8]/40 hover:bg-slate-50 text-slate-700 hover:text-[#0c7dc2] text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 group"
              >
                View All Blogs
                <ArrowUpRight className="w-4 h-4 text-[#1fa8e8] group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
