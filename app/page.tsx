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
        title="Frequently Asked Questions"
        description="Get instant answers to common queries regarding chest diagnostics, sleep assessments, and clinical parameters at Delhi Lung & Bronchoscopy Center"
        faqs={homeFaqs}
      />
      <Footer />
    </>
  );
}
