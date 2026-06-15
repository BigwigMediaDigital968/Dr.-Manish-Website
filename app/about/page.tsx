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
