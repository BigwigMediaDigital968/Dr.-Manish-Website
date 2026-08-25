import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import PrivacyPolicy from "./PrivacyPolicy";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Privacy Policy | Delhi Lung & Bronchoscopy Center",
  description:
    "How Delhi Lung & Bronchoscopy Center collects, uses and protects your personal and health information.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Delhi Lung & Bronchoscopy Center",
    description:
      "How Delhi Lung & Bronchoscopy Center collects, uses and protects your personal and health information.",
    url: `${BASE_URL}/privacy-policy`,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`,
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
