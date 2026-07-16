"use client";

import { useModal } from "@/app/Contexts/ModalContext";
import { Calendar } from "lucide-react";

type BookAppointmentButtonProps = {
  cta?: string;
  className?: string;
};

export default function BookAppointmentButton({
  cta = "Book Appointment",
  className = "",
}: BookAppointmentButtonProps) {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className={`px-6 py-3.5 rounded-2xl text-center text-white font-bold text-sm tracking-wide bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] shadow-md flex items-center justify-center gap-2 cursor-pointer ${className}`}
    >
      {cta}
      <Calendar className="w-4 h-4" />
    </button>
  );
}