"use client";

import { Phone } from "lucide-react";

type CallButtonProps = {
  cta?: string;
  phoneNumber?: string; // e.g., "+1234567890"
  className?: string;
};

export default function CallButton({
  cta = "Call Us Now",
  phoneNumber = "+919899554095",
  className = "",
}: CallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`px-6 py-3.5 rounded-2xl text-center text-white font-bold text-sm tracking-wide bg-gradient-to-r from-[#007aff] to-[#00c6ff] shadow-md flex items-center justify-center gap-2 cursor-pointer no-underline ${className}`}
    >
      <Phone className="w-4 h-4" />
      {cta}
    </a>
  );
}