import FAQs from "../component/website/FAQs";
import Footer from "../component/website/Footer";
import LungDisease from "../component/website/LungDisease";
import Navbar from "../component/website/Navbar";
import { serviceFaqs } from "../faqsData";
import AllServicesShowcase from "./component/AllService";
import PatientsTestimonials from "./component/PatientsTestimonials";
import ServiceHero from "./component/ServiceHero";

export default function Contact() {
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
