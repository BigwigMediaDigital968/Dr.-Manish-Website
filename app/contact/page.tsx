import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import BookAppointmentContact from "./component/BookAppointmentContact";
import ContactFeatures from "./component/ContactFeatures";
import Location from "./component/Location";

export default function Contact() {
  return (
    <>
      <Navbar />
      <BookAppointmentContact />
      <Location />
      <ContactFeatures />
      <Footer />
    </>
  );
}
