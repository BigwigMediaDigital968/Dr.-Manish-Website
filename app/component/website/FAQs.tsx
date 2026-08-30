"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import { FAQItem } from "@/app/faqsData";

/* ============================================================================
   2. REUSABLE FAQs COMPONENT
   ============================================================================ */
interface FAQsProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

export default function FAQs({ title = "Frequently Asked Questions", description, faqs = [] }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative py-14 px-4 overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1fa8e8]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#6dbb45]/5 rounded-full blur-[90px] -z-10" />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* --- HEADER BLOCK --- */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fa8e8]/10 text-[#0c7dc2] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Find your Query here
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {title}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* --- EXPANDABLE ACCORDION CONTAINER --- */}
        <div className="space-y-4">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#1fa8e8]/30 shadow-lg shadow-sky-100/30 ring-1 ring-[#1fa8e8]/10"
                      : "border-slate-100 hover:border-slate-200 shadow-sm"
                  }`}
                >
                  {/* Accordion Trigger Button Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#1fa8e8] scale-125"
                            : "bg-slate-200 group-hover:bg-slate-400"
                        }`}
                      />
                      <span
                        className={`text-sm sm:text-base font-bold tracking-tight leading-snug transition-colors duration-200 ${
                          isOpen
                            ? "text-[#0c7dc2]"
                            : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`p-1.5 rounded-lg shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#1fa8e8]/10 text-[#0c7dc2] rotate-180"
                          : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4.5 h-4.5" />
                    </span>
                  </button>

                  {/* Accordion Smooth Expandable Content Panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] border-t border-slate-50"
                        : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 py-5 bg-slate-50/50">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-inner">
              <p className="text-slate-400 text-sm font-semibold">
                No questions found matching this filter.
              </p>
            </div>
          )}
        </div>

        {/* --- QUICK CONTACT HELPDESK EMBED --- */}
        <div className="bg-gradient-to-r from-[#1fa8e8]/5 to-[#6dbb45]/5 rounded-3xl p-6 border border-[#1fa8e8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-slate-800 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-[#1fa8e8] animate-pulse" />{" "}
              Still have questions?
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              We are available to answer queries, schedule urgent EBUS sessions
              or arrange Sleep diagnostic devices.
            </p>
          </div>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1fa8e8]/40 hover:bg-slate-50 text-xs font-bold text-[#0c7dc2] tracking-wide flex items-center gap-1.5 shrink-0 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#1fa8e8]" /> Contact
            Clinic Desk
          </a>
        </div>
      </div>
    </section>
  );
}
