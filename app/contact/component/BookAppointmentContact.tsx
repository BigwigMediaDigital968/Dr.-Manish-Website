"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sun, Cloud, Moon, UploadCloud, CheckCircle, X } from "lucide-react";
import Image from "next/image";
import { FormServices } from "@/app/Data/Services";

const services = FormServices;

const slots = [
  { label: "Morning", time: "09:00 AM – 12:00 PM", icon: Sun },
  { label: "Afternoon", time: "12:00 PM – 04:00 PM", icon: Cloud },
  { label: "Evening", time: "06:30 PM - 08:30 PM", icon: Moon },
];

const defaultForm = {
  name: "",
  email: "",
  phone: "",
  specialty: "",
  date: "",
  time: "",
  image: "",
  message: "",
};

/* ─── shared input class ─────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15";

const labelCls =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]";

export default function BookAppointmentContact() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Find the currently selected service object
  const selectedService = services.find((s) => s.value === form.specialty);

  const set = (k: keyof typeof defaultForm, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.specialty) {
      alert("Please select a treatment.");
      return;
    }
    if (!form.time) {
      alert("Please select a preferred time.");
      return;
    }
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("phone", form.phone);
      payload.append("email", form.email);
      payload.append("service", form.specialty);
      payload.append("date", form.date);
      // payload.append("time", form.time);
      payload.append("message", form.message);
      payload.append("source", "contact-page");

      if (selectedFile) {
        payload.append("file", selectedFile);
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm(defaultForm);
          setFileName("");
          setSelectedFile(null);
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to submit lead");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#f0f4f8]">
        {/* ══ HERO ══════════════════════════════════════════════ */}
        <div className="relative mx-auto max-w-7xl px-6 pt-30 pb-0 md:pt-40">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left copy */}
            <div className="relative z-10 max-w-xl">
              <span
                className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white"
                style={{ background: "var(--gradient-health)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                Delhi Lung &amp; Sleep Centre
              </span>

              <h1
                className="text-[2.6rem] font-extrabold leading-[1.08] text-[#0f172a] lg:text-[3.4rem]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Specialist Care
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  At Your Service
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#64748b] lg:text-lg">
                Breathe better, sleep well. Our pulmonology specialists deliver
                world-class diagnostics and personalised treatment right here in
                Delhi.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-primary)",
                  }}
                >
                  Book Appointment
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-slate-50"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-6 border-t border-[#e2e8f0] pt-8">
                {[
                  { value: "20+", label: "Specialties" },
                  { value: "50k+", label: "Patients Treated" },
                  { value: "24 yr+", label: "Experience" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-2xl font-extrabold tracking-tight"
                      style={{ color: "var(--primary)" }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#64748b]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Decorative background glow */}
              <div
                className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full blur-3xl opacity-20"
                style={{ background: "var(--gradient-primary)" }}
              />

              {/* Main Image Card */}
              <div className="relative w-full max-w-[520px] h-[420px] sm:h-[500px]  overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src="/clinic-image-1.png"
                  alt="Dr Manish Aggarwal"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute left-0 bottom-8 lg:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">
                  Trusted Pulmonology Care
                </p>
                <p className="text-lg font-extrabold text-[#1fa8e8]">
                  50,000+ Patients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ BOOKING CARD ══════════════════════════════════════ */}
        <div
          id="book"
          className="relative z-20 mx-auto mt-18 max-w-7xl px-4 pb-14 lg:px-8"
        >
          <div className="rounded-3xl bg-white px-6 py-8 shadow-xl shadow-slate-200/80 lg:px-10 lg:py-10">
            <p className="mb-8 text-center text-xl font-bold tracking-tight text-[#0f172a] lg:text-2xl">
              Book An Appointment Today
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-white text-3xl"
                  style={{ background: "var(--gradient-health)" }}
                >
                  ✓
                </div>
                <p className="text-lg font-semibold text-[#0f172a]">
                  Request sent!
                </p>
                <p className="text-sm text-[#64748b]">
                  Our team will contact you shortly to confirm.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 — Name + Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className={labelCls}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 7859 8578 87"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2 — Service grid */}
                <div className="hidden md:block">
                  <label className={labelCls}>Select Treatment</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {services.map((s) => {
                      const active = form.specialty === s.value;
                      return (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => set("specialty", s.value)}
                          className={`flex flex-col gap-1.5 rounded-xl border p-3 text-left transition-all duration-200 ${active
                            ? "border-[#1fa8e8] bg-[#1fa8e8]/[0.06] shadow-sm"
                            : "border-[#e2e8f0] bg-white hover:border-[#1fa8e8]/50 hover:bg-slate-50"
                            }`}
                        >
                          <span className="text-xl leading-none">{s.icon}</span>
                          <span
                            className={`text-[11px] font-semibold leading-snug ${active ? "text-[#0c7dc2]" : "text-[#475569]"
                              }`}
                          >
                            {s.value}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="w-full block md:hidden" ref={dropdownRef}>
                  <label className={labelCls}>Select Treatment</label>

                  <div className="relative mt-2">
                    {/* Dropdown Trigger */}
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className={`
          w-full p-3 rounded-xl border text-left transition-all duration-200
          flex items-center justify-between cursor-pointer bg-white
          ${isOpen ? "border-[#1fa8e8] shadow-sm" : "border-[#e2e8f0] hover:border-slate-300"}
        `}
                    >
                      <div className="flex items-center gap-2.5">
                        {selectedService ? (
                          <>
                            <span className="text-xl leading-none">{selectedService.icon}</span>
                            <span className="text-[11px] font-semibold text-[#0c7dc2] leading-none">
                              {selectedService.value}
                            </span>
                          </>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-semibold tracking-wide">
                            CHOOSE A TREATMENT...
                          </span>
                        )}
                      </div>

                      {/* Chevron Indicator */}
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu Overlay */}
                    {isOpen && (
                      <div className="absolute z-50 w-full mt-1.5 bg-white border border-[#e2e8f0] rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="max-h-52 overflow-y-auto p-1.5 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]">
                          {services.map((s) => {
                            const active = form.specialty === s.value;
                            return (
                              <button
                                key={s.value}
                                type="button"
                                onClick={() => {
                                  set("specialty", s.value);
                                  setIsOpen(false);
                                }}
                                className={`
                    w-full p-2.5 rounded-lg text-left transition-all duration-150
                    flex items-center gap-3 cursor-pointer mb-0.5 last:mb-0
                    ${active
                                    ? "bg-[#1fa8e8]/[0.08] text-[#0c7dc2]"
                                    : "text-[#475569] hover:bg-slate-50 hover:text-slate-900"
                                  }
                  `}
                              >
                                <span className="text-xl leading-none">{s.icon}</span>
                                <span className="text-[11px] font-semibold leading-none">
                                  {s.value}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 — Date + Time slots */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Date */}
                  <div>
                    <label className={labelCls}>Appointment Date</label>
                    <div className="relative">
                      <svg
                        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1fa8e8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => set("date", e.target.value)}
                        className={`${inputCls} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Time slots */}
                  {/* <div>
                    <label className={labelCls}>Preferred Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {slots.map((slot) => {
                        const Icon = slot.icon;
                        const active = form.time === slot.label;
                        return (
                          <button
                            key={slot.label}
                            type="button"
                            onClick={() => set("time", slot.label)}
                            className={`flex flex-col items-center gap-1.5 rounded-xl border py-3 px-2 transition-all duration-200 ${active
                              ? "border-[#6dbb45] bg-[#6dbb45]/[0.06] shadow-sm"
                              : "border-[#e2e8f0] bg-white hover:border-[#6dbb45]/50 hover:bg-slate-50"
                              }`}
                          >
                            <Icon
                              className={`h-4 w-4 ${active ? "text-[#6dbb45]" : "text-[#94a3b8]"}`}
                            />
                            <span
                              className={`text-[11px] font-semibold ${active ? "text-[#3a7a1a]" : "text-[#475569]"
                                }`}
                            >
                              {slot.label}
                            </span>
                            <span className="text-center text-[10px] leading-tight text-[#94a3b8]">
                              {slot.time}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div> */}
                </div>

                {/* Upload Reports */}
                <div>
                  <label className={labelCls}>
                    Upload Previous Reports
                    <span className="normal-case tracking-normal font-normal text-[#94a3b8]">
                      {" "}
                      (optional)
                    </span>
                  </label>

                  <label
                    htmlFor="reportUpload"
                    className="group relative flex flex-col items-center justify-center w-full h-36 rounded-2xl border-2 border-dashed border-[#1fa8e8]/30 bg-slate-50 hover:border-[#1fa8e8] hover:bg-[#1fa8e8]/[0.03] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#1fa8e8]/5 to-[#6dbb45]/5" />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1fa8e8] to-[#6dbb45] flex items-center justify-center shadow-lg">
                        <UploadCloud className="w-7 h-7 text-white" />
                      </div>

                      <h4 className="mt-3 text-sm font-bold text-slate-700">
                        Click to upload reports
                      </h4>

                      <p className="mt-1 text-xs text-slate-400 text-center">
                        PDF, JPG, PNG
                        <br />
                        Maximum 10 MB
                      </p>
                    </div>

                    <input
                      id="reportUpload"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFileName(file.name);
                          setSelectedFile(file);
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setForm((f) => ({
                              ...f,
                              image: reader.result as string,
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>

                  {fileName && (
                    <div className="mt-3 flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-700 truncate">
                          {fileName}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setFileName("");
                          setSelectedFile(null);
                          setForm((f) => ({
                            ...f,
                            image: "",
                          }));
                        }}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Row 4 — Notes */}
                <div>
                  <label className={labelCls}>
                    Symptoms / Notes{" "}
                    <span className="normal-case tracking-normal font-normal text-[#94a3b8]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe your symptoms briefly…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:opacity-90 active:scale-[0.985]"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-primary)",
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Book Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
