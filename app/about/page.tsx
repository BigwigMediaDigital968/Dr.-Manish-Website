import FAQs from "../component/website/FAQs";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import Patients from "../component/website/Patients";
import WhyChooseUs from "../component/website/WhyChooseUs";
import { aboutFaqs } from "../faqsData";
import AboutHero from "./component/AboutHero";
import AboutManish from "./component/AboutManish";
import AboutStats from "./component/AboutStats";
import Awards from "./component/Awards";
import Feature from "./component/Feature";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "About Dr. Manish Aggarwal | Pulmonologist in Delhi",
  description:
    "24+ years' experience, FRCP (Glasgow), NHS UK trained. Expert in bronchoscopy, asthma, COPD, ILD & sleep medicine in Delhi.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Dr. Manish Aggarwal | Pulmonologist in Delhi",
    description:
      "24+ years' experience, FRCP (Glasgow), NHS UK trained. Expert in bronchoscopy, asthma, COPD, ILD & sleep medicine in Delhi.",
    url: `${BASE_URL}/about`,
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

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Feature />
      <AboutManish />
      <AboutStats />
      <WhyChooseUs />
      <Patients />
      {/* <Awards /> */}
      <FAQs
        title="Frequently Asked Questions"
        description="Get instant answers to common queries regarding chest diagnostics, sleep assessments, and clinical parameters at Delhi Lung & Bronchoscopy Center."
        faqs={aboutFaqs}
      />
      <Footer />
    </>
  );
}
