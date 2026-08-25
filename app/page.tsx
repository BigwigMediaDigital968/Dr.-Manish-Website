import About from "./component/website/About";
import FeaturedService from "./component/website/FeaturedService";
import HomeHero from "./component/website/HomeHero";
import Speciality from "./component/website/Speciality";
import CTA from "./component/website/CTA";
import Testimonials from "./component/website/Testimonials";
import BookAppointment from "./component/website/BookAppointement";
import AppointmentProcess from "./component/website/AppointmentProcess";
import BlogSection from "./component/website/BlogSection";
import FAQs from "./component/website/FAQs";
import { homeFaqs } from "./faqsData";
import ClinicFeatures from "./component/website/ClinicFeatures";
import Navbar from "./component/website/Navbar";
import Footer from "./component/website/Footer";
import WhyChooseUs from "./component/website/WhyChooseUs";
import Different from "./component/website/Different";
import Stats from "./component/website/Stats";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Pulmonologist & Lung Specialist in Delhi | Dr. Manish Aggarwal",
  description:
    "Dr. Manish Aggarwal, best pulmonologist in Delhi with 24+ years experience. Expert care for asthma, COPD, TB, bronchoscopy & sleep disorders.",
  keywords: [
    "best pulmonologist in Delhi",
    "lung specialist Delhi",
    "chest specialist in Delhi",
    "pulmonologist Pitampura",
    "chronic cough specialist Delhi",
    "COPD specialist Delhi",
    "asthma specialist Delhi",
    "bronchoscopy Delhi",
    "TB specialist doctor Delhi",
    "sleep apnea doctor Delhi",
    "EBUS Delhi",
    "Dr. Manish Aggarwal pulmonologist",
  ],
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: "Pulmonologist & Lung Specialist in Delhi | Dr. Manish Aggarwal",
    description:
      "Dr. Manish Aggarwal, best pulmonologist in Delhi with 24+ years experience. Expert care for asthma, COPD, TB, bronchoscopy & sleep disorders.",
    url: `${BASE_URL}`,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-new.png",
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Stats />
      <Speciality />
      <About />
      {/* <FeaturedService /> */}
      <WhyChooseUs />
      <Different />
      <CTA />
      <Testimonials />
      <AppointmentProcess />
      <BookAppointment />
      {/* <ClinicFeatures /> */}
      <BlogSection />
      <FAQs
        title="Frequently Asked Questions About the Best Pulmonologist in Delhi"
        description="Get instant answers to common queries regarding chest diagnostics, sleep assessments, and clinical parameters at Delhi Lung & Bronchoscopy Center"
        faqs={homeFaqs}
      />
      <Footer />
    </>
  );
}
