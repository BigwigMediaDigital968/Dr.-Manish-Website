import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
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
      <Awards />
      <Footer />
    </>
  );
}
