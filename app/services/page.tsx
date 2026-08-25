import FAQs from "../component/website/FAQs";
import Footer from "../component/website/Footer";
import LungDisease from "../component/website/LungDisease";
import Navbar from "../component/website/Navbar";
import { serviceFaqs } from "../faqsData";
import AllServicesShowcase from "./component/AllService";
import PatientsTestimonials from "./component/PatientsTestimonials";
import ServiceHero from "./component/ServiceHero";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Pulmonology Services in Delhi | Dr. Manish Aggarwal",
  description:
    "Bronchoscopy, EBUS, asthma & COPD care, ILD, sleep studies & PFT by Dr. Manish Aggarwal, Delhi's trusted chest specialist.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Pulmonology Services in Delhi | Dr. Manish Aggarwal",
    description:
      "Bronchoscopy, EBUS, asthma & COPD care, ILD, sleep studies & PFT by Dr. Manish Aggarwal, Delhi's trusted chest specialist.",
    url: `${BASE_URL}/services`,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "./logo-new.png",
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <LungDisease />
      <AllServicesShowcase />
      <PatientsTestimonials />
      <FAQs
        title="Frequently Asked Questions"
        description="Get instant answers to common queries regarding chest diagnostics, sleep assessments, and clinical parameters at Delhi Lung & Bronchoscopy Center."
        faqs={serviceFaqs}
      />
      <Footer />
    </>
  );
}
