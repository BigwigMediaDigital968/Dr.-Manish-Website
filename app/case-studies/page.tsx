import BookAppointment from "../component/website/BookAppointement";
import FAQs from "../component/website/FAQs";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import { caseFaqs } from "../faqsData";
import CaseHero from "./component/CaseHero";
import CaseStudy from "./component/CaseStudyGrid";

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
