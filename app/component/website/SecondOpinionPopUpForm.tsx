"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  X,
  CheckCircle,
  Calendar,
  Sun,
  Cloud,
  Moon,
  UploadCloud,
  ChevronDown,
  ShieldAlert,
  FileText,
} from "lucide-react";
import { FormServices } from "@/app/Data/Services";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = FormServices;

const slots = [
  {
    label: "Morning",
    time: "09:00 AM – 12:00 PM",
    icon: Sun,
  },
  {
    label: "Afternoon",
    time: "12:00 PM – 04:00 PM",
    icon: Cloud,
  },
  {
    label: "Evening",
    time: "06:30 PM - 08:30 PM",
    icon: Moon,
  },
];

const defaultForm = {
  name: "",
  phone: "",
  email: "",
  specialty: "",
  date: "",
  time: "",
  image: "",
  message: "",
};

export default function SecondOpinionPopUpForm({ isOpen, onClose }: PopupProps) {
  const [formData, setFormData] = useState(defaultForm);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData(defaultForm);
      setFileName("");
      setSelectedFile(null);
    }, 300);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.specialty) {
      alert("Please select a treatment.");
      return;
    }
    if (!formData.time) {
      alert("Please select a preferred time.");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("service", formData.specialty);
      payload.append("date", formData.date);
      payload.append("time", formData.time);
      payload.append("message", formData.message);
      payload.append("source","opinion-form")

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
        setFormSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2800);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Find the currently selected service object to display its details in the trigger
  const selectedService = services.find(s => s.value === formData.specialty);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10 w-full max-w-[520px]
          bg-white rounded-3xl shadow-2xl border border-slate-100
          overflow-hidden
        "
        style={{
          animation: "modalIn 0.35s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(24px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Header - Styled for Medical Authority & Trust */}
        <div className="bg-gradient-to-r from-[#0c7dc2] to-[#6dbb45] px-6 py-6 flex items-start justify-between gap-4 border-b border-white/10">
          <div className="flex gap-3">
            <div className="p-2 bg-white/10 rounded-xl text-white shrink-0 hidden sm:block">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-snug tracking-tight">
                Request a Second Opinion
              </h3>
              <p className="text-xs text-sky-100/80 mt-0.5 font-medium">
                Delhi Lung &amp; Bronchoscopy Centre • Dr. Manish Aggarwal
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {formSubmitted ? (
          <div
            className="flex flex-col items-center text-center px-6 py-14 gap-4"
            style={{ animation: "fadeUp 0.3s ease both" }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0c7dc2] to-[#6dbb45] flex items-center justify-center text-white shadow-lg shadow-sky-100">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Case Records Received
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-xs mx-auto">
                Your medical files have been securely transmitted. Dr. Manish Aggarwal's clinical team will review and contact you to schedule your appintment.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleBookingSubmit}
            className="overflow-y-auto max-h-[75vh] px-6 py-6 flex flex-col gap-5
              [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]"
          >
            {/* Informational Banner */}
            <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-3.5 flex items-start gap-3">
              <FileText className="w-4 h-4 text-[#6dbb45] shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">Expert Clinical Review:</span> Please upload your primary diagnosis reports, CT scans, or sleep study metrics below for a thorough medical reassessment.
              </p>
            </div>

            {/* HIGH PRIORITY: Upload Reports (Moved to the Top) */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-2">
                1. Upload Medical Case Records <span className="text-[#0c7dc2] font-semibold">*</span>
                <span className="font-normal text-red-400 block text-[10px] mt-0.5 pl-2">
                  Upload 1 Image OR a single multi-page PDF (Max 10 MB)
                </span>
              </label>

              <label
                htmlFor="reportUpload"
                className="group relative flex flex-col items-center justify-center w-full h-40 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 hover:border-[#1fa8e8] hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden shadow-inner"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#1fa8e8]/5 to-transparent" />

                <div className="relative z-10 flex flex-col items-center px-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0c7dc2] to-[#6dbb45] flex items-center justify-center shadow-md mb-2">
                    <UploadCloud className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-sm font-bold text-slate-700 group-hover:text-[#6dbb45] transition-colors">
                    Click to browse your diagnostics files
                  </h4>

                  <p className="mt-1.5 text-[11px] text-slate-600 leading-normal max-w-sm">

                    Include prescriptions, imaging reports, or historic discharge summaries.
                  </p>
                </div>

                <input
                  id="reportUpload"
                  type="file"
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFileName(file.name);
                      setSelectedFile(file);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({
                          ...formData,
                          image: reader.result as string,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>

              {fileName && (
                <div className="mt-3 flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 truncate">
                      {fileName}
                    </span>
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                      {fileName.split('.').pop()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFileName("");
                      setSelectedFile(null);
                      setFormData({
                        ...formData,
                        image: "",
                      });
                    }}
                    className="text-slate-600 hover:text-red-500 transition-colors shrink-0 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <hr className="border-slate-100 my-1" />

            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-600 -mb-2">
              2. Patient & Treatment Information
            </label>

            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                  Patient Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="As written on records"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50
                    text-sm text-slate-800 placeholder:text-slate-600
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50
                    text-sm text-slate-800 placeholder:text-slate-600
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200 focus:bg-white"
                />
              </div>
            </div>

            {/* Email + Treatment Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="yourname@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50
                    text-sm text-slate-800 placeholder:text-slate-600
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200 focus:bg-white"
                />
              </div>
              <div className="relative" ref={dropdownRef}>
                <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                  Treatment / Disease Context
                </label>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className={`
                      w-full p-2.5 rounded-xl border text-left transition-all duration-200
                      flex items-center justify-between cursor-pointer bg-slate-50/50 text-sm
                      ${isSelectOpen ? "border-[#1fa8e8] bg-white shadow-sm shadow-sky-100" : "border-slate-200 hover:border-slate-300"}
                    `}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {selectedService ? (
                        <>
                          <span className="text-base shrink-0 leading-none">{selectedService.icon}</span>
                          <span className="text-sm font-medium text-slate-700 truncate leading-none">
                            {selectedService.value}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-slate-600">Select area of review...</span>
                      )}
                    </div>
                    <div className={`${isSelectOpen ? "rotate-180" : ""} transition-transform duration-200 shrink-0`}><ChevronDown className="w-4 h-4 text-slate-600" /></div>
                  </button>

                  {isSelectOpen && (
                    <div className="absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="max-h-48 overflow-y-auto p-1.5 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]">
                        {services.map((service) => {
                          const active = formData.specialty === service.value;
                          return (
                            <button
                              key={service.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, specialty: service.value });
                                setIsSelectOpen(false);
                              }}
                              className={`
                                w-full p-2.5 rounded-lg text-left transition-all duration-150
                                flex items-center gap-3 cursor-pointer mb-0.5 last:mb-0 text-sm
                                ${active ? "bg-[#1fa8e8]/[0.08] text-[#0c7dc2] font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                              `}
                            >
                              <span className="text-base leading-none">{service.icon}</span>
                              <span className="leading-none">{service.value}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                Preferred Consultation Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1fa8e8] pointer-events-none" />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50
                    text-sm text-slate-800 focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200 focus:bg-white"
                />
              </div>
            </div>

            {/* Time Slots Selection */}
            {/* <div>
              <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                Preferred Consultation Time Range
              </label>
              <div className="grid grid-cols-3 gap-2">
                {slots.map((slot) => {
                  const SlotIcon = slot.icon;
                  const active = formData.time === slot.label;
                  return (
                    <button
                      key={slot.label}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, time: slot.label })
                      }
                      className={`
                        flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border
                        transition-all duration-200 cursor-pointer
                        ${active
                          ? "border-[#0c7dc2] bg-sky-50/60 shadow-sm shadow-sky-50"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }
                      `}
                    >
                      <SlotIcon className={`w-3.5 h-3.5 ${active ? "text-[#0c7dc2]" : "text-slate-600"}`} />
                      <span className={`text-[11px] font-bold ${active ? "text-[#0c7dc2]" : "text-slate-700"}`}>
                        {slot.label}
                      </span>
                      <span className="text-[10px] text-slate-600 leading-tight">
                        {slot.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div> */}

            {/* Message/Symptoms notes */}
            <div>
              <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                Current Diagnosis &amp; Specific Concerns <span className="text-slate-600 font-normal">(optional)</span>
              </label>
              <textarea
                placeholder="Mention any currently prescribed medications or details regarding your current line of treatment..."
                rows={2}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50
                  text-sm text-slate-600 placeholder:text-slate-600
                  focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                  transition-all duration-200 resize-none focus:bg-white"
              />
            </div>

            {/* Submit Action Block */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 mt-2 rounded-2xl
                bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]
                hover:from-[#0c7dc2] hover:to-[#4d8f2d] active:scale-[0.985]
                text-white text-sm font-bold tracking-wide
                shadow-lg shadow-sky-700/15
                transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              style={{
                opacity: isSubmitting ? 0.75 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Uploading Cases..." : "Submit Case for Expert Review"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
