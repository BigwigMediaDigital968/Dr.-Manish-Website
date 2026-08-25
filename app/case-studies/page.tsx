import BookAppointment from "../component/website/BookAppointement";
import FAQs from "../component/website/FAQs";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import { caseFaqs } from "../faqsData";
import CaseHero from "./component/CaseHero";
import CaseStudy from "./component/CaseStudyGrid";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Case Studies | Dr. Manish Aggarwal, Delhi",
  description:
    "Real patient case studies in asthma, COPD, ILD, sleep apnea & bronchoscopic care from Dr. Manish Aggarwal's practice.",
  alternates: {
    canonical: `${BASE_URL}/case-studies`,
  },
  openGraph: {
    title: "Case Studies | Dr. Manish Aggarwal, Delhi",
    description:
      "Real patient case studies in asthma, COPD, ILD, sleep apnea & bronchoscopic care from Dr. Manish Aggarwal's practice.",
    url: `${BASE_URL}/case-studies`,
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

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <CaseHero />
      <CaseStudy />
      <BookAppointment />
      <FAQs
        title="Frequently Asked Questions"
        description="Get instant answers to common queries regarding chest diagnostics, sleep assessments, and clinical parameters at Delhi Lung & Bronchoscopy Center."
        faqs={caseFaqs}
      />
      <Footer />
    </>
  );
}
