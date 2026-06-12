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
    time: "04:00 PM – 07:00 PM",
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

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [formData, setFormData] = useState(defaultForm);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("service", formData.specialty);
      payload.append("date", formData.date);
      payload.append("time", formData.time);
      payload.append("message", formData.message);

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
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10 w-full max-w-[500px]
          bg-white rounded-3xl shadow-2xl border border-slate-100
          overflow-hidden
          animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)_both]
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

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0c7dc2] to-[#6dbb45] px-6 py-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white leading-snug">
              Book your consultation
            </h3>
            <p className="text-xs text-white/75 mt-0.5">
              Delhi Lung &amp; Sleep Centre
            </p>
          </div>
          <button
            onClick={handleClose}
            className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {formSubmitted ? (
          <div
            className="flex flex-col items-center text-center px-6 py-12 gap-4"
            style={{ animation: "fadeUp 0.3s ease both" }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1fa8e8] to-[#6dbb45] flex items-center justify-center text-white shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Request sent
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-xs mx-auto">
                Thank you for choosing Dr. Manish Aggarwal's clinic. Our team
                will contact you shortly to confirm your appointment.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleBookingSubmit}
            className="overflow-y-auto max-h-[70vh] px-6 py-5 flex flex-col gap-5
              [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]"
          >
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50
                    text-sm text-slate-800 placeholder:text-slate-400
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 97592 65242"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50
                    text-sm text-slate-800 placeholder:text-slate-400
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="hidden">
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Select treatment
              </label>
              <div
                className="grid grid-cols-3 gap-2 max-h-52 overflow-y-auto pr-0.5 py-3
                [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]"
              >
                {services.map((service) => {
                  const active = formData.specialty === service.value;
                  return (
                    <button
                      key={service.value}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, specialty: service.value })
                      }
                      className={`
                        p-2.5 rounded-xl border text-left transition-all duration-200
                        flex flex-col gap-1 cursor-pointer
                        ${active
                          ? "border-[#1fa8e8] bg-[#1fa8e8]/[0.06] shadow-sm shadow-sky-100"
                          : "border-slate-200 bg-white hover:border-[#1fa8e8]/50 hover:bg-slate-50"
                        }
                      `}
                    >
                      <span className="text-lg leading-none">
                        {service.icon}
                      </span>
                      <span
                        className={`text-[11px] font-semibold leading-snug ${active ? "text-[#0c7dc2]" : "text-slate-600"
                          }`}
                      >
                        {service.value}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50
                    text-sm text-slate-800 placeholder:text-slate-400
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200"
                />
              </div>
              <div className="" ref={dropdownRef}>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Select treatment
                </label>

                <div className="relative">
                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className={`
          w-full p-3 rounded-xl border text-left transition-all duration-200
          flex items-center justify-between cursor-pointer bg-white
          ${isSelectOpen ? "border-[#1fa8e8] shadow-sm shadow-sky-100" : "border-slate-200 hover:border-slate-300"}
        `}
                  >
                    <div className="flex items-center gap-2.5">
                      {selectedService ? (
                        <>
                          <span className="text-lg leading-none">{selectedService.icon}</span>
                          <span className="text-xs font-semibold text-slate-700 leading-none">
                            {selectedService.value}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">Choose a treatment...</span>
                      )}
                    </div>

                    {/* Chevron Icon */}
                    <div className={`${isSelectOpen ? "rotate-180" : ""} transition-transform duration-200`}><ChevronDown className="w-4 h-4 text-slate-400" /></div>
                  </button>

                  {/* Dropdown Menu Menu Options */}
                  {isSelectOpen && (
                    <div className="absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                      <div
                        className="max-h-52 overflow-y-auto p-1.5 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]"
                      >
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
                    flex items-center gap-3 cursor-pointer mb-0.5 last:mb-0
                    ${active
                                  ? "bg-[#1fa8e8]/[0.08] text-[#0c7dc2]"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }
                  `}
                            >
                              <span className="text-lg leading-none">{service.icon}</span>
                              <span className="text-xs font-semibold leading-none">
                                {service.value}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>


            {/* Date */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Appointment date
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
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50
                    text-sm text-slate-800
                    focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                    transition-all duration-200"
                />
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Preferred time
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
                        flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border
                        transition-all duration-200 cursor-pointer
                        ${active
                          ? "border-[#6dbb45] bg-[#6dbb45]/[0.06] shadow-sm shadow-green-100"
                          : "border-slate-200 bg-white hover:border-[#6dbb45]/50 hover:bg-slate-50"
                        }
                      `}
                    >
                      <SlotIcon
                        className={`w-4 h-4 ${active ? "text-[#6dbb45]" : "text-slate-400"
                          }`}
                      />
                      <span
                        className={`text-[11px] font-semibold ${active ? "text-[#3a7a1a]" : "text-slate-700"
                          }`}
                      >
                        {slot.label}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-tight text-center">
                        {slot.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Upload Reports */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Upload Previous Reports
                <span className="normal-case tracking-normal font-normal text-slate-400">
                  {" "}
                  (optional)
                </span>
              </label>

              <label
                htmlFor="reportUpload"
                className="group relative flex flex-col items-center justify-center w-full h-36 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 hover:border-[#1fa8e8] hover:bg-[#1fa8e8]/[0.03] transition-all duration-300 cursor-pointer overflow-hidden"
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
                      setFormData({
                        ...formData,
                        image: "",
                      });
                    }}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Symptoms / message{" "}
                <span className="normal-case tracking-normal font-normal text-slate-400">
                  (optional)
                </span>
              </label>
              <textarea
                placeholder="Describe your symptoms briefly…"
                rows={2}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50
                  text-sm text-slate-800 placeholder:text-slate-400
                  focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15
                  transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl
                bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]
                hover:from-[#0c7dc2] hover:to-[#4d8f2d]
                active:scale-[0.985]
                text-white text-sm font-semibold tracking-wide
                shadow-md shadow-sky-200/50
                transition-all duration-200 cursor-pointer"
            >
              Send appointment request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
