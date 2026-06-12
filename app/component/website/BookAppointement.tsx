"use client";

import { FormServices } from "@/app/Data/Services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const specialties = FormServices;

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    treatment: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        treatment: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f0f4f8] px-8 lg:px-12">
      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl pt-14 pb-0 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: Copy */}
          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <span
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white"
              style={{ background: "var(--gradient-health)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              Delhi Lung &amp; Sleep Centre
            </span>

            <h1
              className="text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#0f172a] lg:text-[3.4rem]"
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
              world-class diagnostics and personalised treatment — right here in
              Delhi.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#book-appointment"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-primary)",
                }}
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#e2e8f0] pt-8">
              {[
                { value: "12+", label: "Specialties" },
                { value: "10k+", label: "Patients Treated" },
                { value: "15 yr", label: "Experience" },
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

          <div className="relative flex items-end justify-center lg:justify-end">
            {/* Background Glow */}
            <div className="absolute right-0 top-0 h-[420px] w-[420px] lg:h-[500px] lg:w-[500px] rounded-[40px] bg-gradient-to-br from-[#1fa8e8]/20 to-[#6dbb45]/20 blur-3xl" />

            {/* Doctor Image Container */}
            <div className="relative z-10 h-[420px] w-[320px] sm:h-[500px] sm:w-[380px] lg:h-[600px] lg:w-[500px]">
              <Image
                src="/appointement-image.png"
                alt="Dr. Manish Aggarwal"
                fill
                priority
                sizes="(max-width:768px) 320px, (max-width:1024px) 380px, 500px"
                className="object-contain object-bottom drop-shadow-2xl rounded-xl"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-10 right-0 lg:-right-6 z-20">
              <div className="bg-white shadow-xl rounded-2xl p-3 backdrop-blur-sm border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#1fa8e8]/10 flex items-center justify-center">
                    👨‍⚕️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Pulmonology
                    </p>
                    <p className="text-[10px] text-slate-500">Advanced Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-20 left-0 lg:-left-6 z-20">
              <div className="bg-white shadow-xl rounded-2xl p-3 backdrop-blur-sm border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#6dbb45]/10 flex items-center justify-center">
                    🫁
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Bronchoscopy
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Expert Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="book-appointment"
        className="relative z-20 mx-auto mt-10 max-w-7xl px-4 pb-14 lg:px-8"
      >
        <div className="rounded-3xl bg-white px-6 py-8 shadow-xl shadow-slate-200/80 lg:px-10 lg:py-9">
          <p className="mb-6 text-center text-xl font-bold tracking-tight text-[#0f172a] lg:text-2xl">
            Book An Appointment Today
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white text-2xl"
                style={{ background: "var(--gradient-health)" }}
              >
                ✓
              </div>
              <p className="font-semibold text-[#0f172a]">Request sent!</p>
              <p className="text-sm text-[#64748b]">
                Our team will contact you shortly to confirm.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15"
                  />
                </div>

                {/* Time Slot */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Time Slot
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15 appearance-none"
                  >
                    <option value="">Select Time</option>
                    <option>09:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 01:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                    <option>04:00 PM - 06:00 PM</option>
                    <option>06:00 PM - 07:00 PM</option>
                  </select>
                </div>

                {/* Treatment */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Treatment
                  </label>
                  <select
                    required
                    value={form.treatment}
                    onChange={(e) =>
                      setForm({ ...form, treatment: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15 appearance-none"
                  >
                    <option value="">Select Treatment</option>
                    {specialties.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.value}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2 xl:col-span-2">
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#64748b]">
                    Symptoms / Message
                  </label>
                  <textarea
                    rows={1}
                    placeholder="Briefly describe your symptoms..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none transition-all focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto rounded-xl px-10 py-3 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-[0.97] cursor-pointer"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-primary)",
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
