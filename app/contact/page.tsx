import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import BookAppointmentContact from "./component/BookAppointmentContact";
import ContactFeatures from "./component/ContactFeatures";
import Location from "./component/Location";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Contact Us | Delhi Lung & Bronchoscopy Center",
  description:
    "Book a consultation with Dr. Manish Aggarwal in Pitampura, Delhi. Call +91 98995 54095 for chest & sleep care.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Delhi Lung & Bronchoscopy Center",
    description:
      "Book a consultation with Dr. Manish Aggarwal in Pitampura, Delhi. Call +91 98995 54095 for chest & sleep care.",
    url: `${BASE_URL}/contact`,
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

export default function Contact() {
  return (
    <>
      <Navbar />
      <BookAppointmentContact />
      <Location />
      {/* <ContactFeatures /> */}
      <Footer />
    </>
  );
}
