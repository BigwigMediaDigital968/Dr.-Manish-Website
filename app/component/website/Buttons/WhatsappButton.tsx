"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/app/lib/constants/business";

type WhatsappButtonProps = {
  cta?: string;
  phoneNumber?: string; // Must include country code without symbols, e.g., "919899554095"
  message?: string; // Optional pre-filled text message
  className?: string;
};

export default function WhatsappButton({
  cta = "Chat on WhatsApp",
  phoneNumber = WHATSAPP.number,
  message = "Hello, I would like to inquire about an appointment.",
  className = "",
}: WhatsappButtonProps) {
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3.5 rounded-2xl text-center text-white font-bold text-sm tracking-wide bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-md flex items-center justify-center gap-2 cursor-pointer no-underline ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {cta}
    </a>
  );
}