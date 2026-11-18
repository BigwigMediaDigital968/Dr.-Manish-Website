import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import GalleryGrid from "./component/GalleryGrid";
import GalleryHero from "./component/GalleryHero";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </>
  );
}
