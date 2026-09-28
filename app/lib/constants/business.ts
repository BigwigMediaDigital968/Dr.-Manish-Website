// Single source of truth for clinic / business details.
// Import from here instead of hardcoding phone numbers, addresses, etc. in pages.
//   import { BUSINESS, PHONE, ADDRESS } from "@/app/lib/constants/business";

export const SITE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

export const DOCTOR = {
  name: "Dr. Manish Aggarwal",
  title: "Senior Chest Physician & Interventional Pulmonologist",
} as const;

export const BUSINESS = {
  name: "Delhi Lung & Bronchoscopy Centre",
  siteName: "Dr. Manish Aggarwal",
  logo: "/logo-new.png",
  locale: "en_IN",
} as const;

export const PHONE = {
  display: "+91 9899554095",
  e164: "+919899554095",
  tel: "tel:+919899554095",
} as const;

export const EMAIL = {
  address: "Aggarmanish@gmail.com",
  mailto: "mailto:Aggarmanish@gmail.com",
} as const;

export const WHATSAPP = {
  number: "919899554095", // digits only — wa.me links break with "+"
  url: "https://wa.me/919899554095",
} as const;

export const ADDRESS = {
  street: "BM 2, opposite Prabhu Dayal Public School",
  locality: "Shalimar Bagh",
  city: "Delhi",
  region: "Delhi",
  postalCode: "110034",
  country: "IN",
  full: "BM 2, opposite Prabhu Dayal Public School, Shalimar Bagh, Delhi, 110034",
} as const;

export const MAP = {
  directionsUrl: "https://maps.app.goo.gl/QggTaVHkW5qS4ZD8A",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.269935636379!2d77.1471522!3d28.711477900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d017fab0dd98f%3A0x5b060deeefe577ed!2sDr%20Manish%20Aggarwal%20%E2%80%93%20senior%20chest%20physician%20and%20Interventional%20pulmonologist%20Clinic!5e0!3m2!1sen!2sin!4v1781526122531!5m2!1sen!2sin",
  latitude: 28.7114779,
  longitude: 77.1471522,
} as const;

export const HOURS = [
  { days: "Monday - Saturday", time: "06:00 PM - 09:00 PM" },
  { days: "Sunday", time: "By Appointment Only" },
] as const;

export const SOCIALS = {
  youtube: "https://www.youtube.com/@drmanishaggarwal",
  linkedin: "https://www.linkedin.com/in/dr-manish-aggarwal/",
  facebook: "https://www.facebook.com/profile.php?id=61591562684744",
  instagram: "https://www.instagram.com/dr_manish_aggarwal/",
} as const;
