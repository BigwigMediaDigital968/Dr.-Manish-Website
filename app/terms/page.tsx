import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import TermsCondition from "./TermsCondition";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Terms & Conditions | Delhi Lung & Bronchoscopy Center",
  description:
    "Terms and conditions for using the Delhi Lung & Bronchoscopy Center website and clinical services.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions | Delhi Lung & Bronchoscopy Center",
    description:
      "Terms and conditions for using the Delhi Lung & Bronchoscopy Center website and clinical services.",
    url: `${BASE_URL}/terms`,
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

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <TermsCondition />
      <Footer />
    </>
  );
}
