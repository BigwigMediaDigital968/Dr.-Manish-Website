import CTA from "../component/website/CTA";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import BlogGrid from "./component/BlogGrid";
import BlogHero from "./component/BlogHero";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";

// SEO Metadata Configuration
export const metadata = {
  title: "Lung & Sleep Health Blog | Dr. Manish Aggarwal",
  description:
    "Expert articles on asthma, COPD, chronic cough, ILD, lung cancer & sleep disorders by a Delhi pulmonologist.",
  alternates: {
    canonical: `${BASE_URL}/blogs`,
  },
  openGraph: {
    title: "Lung & Sleep Health Blog | Dr. Manish Aggarwal",
    description:
      "Expert articles on asthma, COPD, chronic cough, ILD, lung cancer & sleep disorders by a Delhi pulmonologist.",
    url: `${BASE_URL}/blogs`,
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

export default function Blogs() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <CTA />
      <Footer />
    </>
  );
}