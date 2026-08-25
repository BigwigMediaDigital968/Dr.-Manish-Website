import type { Metadata } from "next";
import PapTherapySleepApneaPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/pap-therapy-cpap-bipap";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "PAP Therapy (CPAP/BiPAP) in Delhi | Dr. Manish Aggarwal";
const description =
  "Advanced PAP therapy (CPAP/BiPAP) and mask interface solutions in Delhi by Dr. Manish Aggarwal for effective sleep apnoea management.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "PAP therapy",
    "CPAP therapy",
    "BiPAP therapy",
    "sleep apnea treatment Delhi",
    "CPAP titration",
    "sleep disorder treatment",
    "sleep specialist Delhi",
    "Dr. Manish Aggarwal",
  ],
  authors: [{ name: "Dr. Manish Aggarwal" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: FULL_URL,
    siteName: "Dr. Manish Aggarwal",
    title,
    description,
    images: [
      {
        url: `${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`,
        width: 750,
        height: 75,
        alt: "PAP Therapy (CPAP/BiPAP) - Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      url: FULL_URL,
      name: "Positive Airway Pressure (PAP) Therapy: CPAP & BiPAP for Sleep Apnea",
      description:
        "Comprehensive guide to PAP therapy (CPAP/BiPAP) for sleep apnea management, titrations, and mask fitting by Dr. Manish Aggarwal, Pulmonologist & Sleep Specialist.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      mainContentOfPage: {
        "@type": "WebPageElement",
        about: [
          {
            "@id": `${FULL_URL}#pap-therapy`,
          },
        ],
      },
      lastReviewed: "2026-07-30",
      reviewedBy: {
        "@id": `${BASE_URL}/#physician`,
      },
      author: {
        "@id": `${BASE_URL}/#physician`,
      },
      publisher: {
        "@id": `${BASE_URL}/#clinic`,
      },
      mainEntity: {
        "@id": `${FULL_URL}#faq`,
      },
      breadcrumb: {
        "@id": `${FULL_URL}#breadcrumb`,
      },
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${FULL_URL}#pap-therapy`,
      name: "Positive Airway Pressure Therapy",
      alternateName: ["PAP Therapy", "CPAP Therapy", "BiPAP Therapy"],
      usedToTreat: [
        {
          "@type": "MedicalCondition",
          name: "Obstructive Sleep Apnea",
        },
        {
          "@type": "MedicalCondition",
          name: "Central Sleep Apnea",
        },
        {
          "@type": "MedicalCondition",
          name: "Obesity Hypoventilation Syndrome",
        },
      ],
      howPerformed:
        "Delivers pressurized ambient air via a fitted mask interface during sleep to keep the upper airway open and eliminate apneic events.",
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dr. Manish Aggarwal",
      honorificPrefix: "Dr.",
      jobTitle:
        "Principal Director, Department of Chest Disease & Interventional Pulmonology",
      medicalSpecialty: [
        "https://schema.org/Pulmonology",
        "https://schema.org/SleepMedicine",
      ],
      url: `${BASE_URL}/about-us`,
      worksFor: [
        {
          "@type": "Hospital",
          name: "Max Hospital",
        },
        {
          "@id": `${BASE_URL}/#clinic`,
        },
      ],
      telephone: "+91-9899554095",
      email: "mailto:Aggarmanish@gmail.com",
    },
    {
      "@type": "MedicalClinic",
      "@id": `${BASE_URL}/#clinic`,
      name: "Dr. Manish Aggarwal - Chest & Interventional Pulmonology Clinic",
      medicalSpecialty: "https://schema.org/Pulmonology",
      address: {
        "@type": "PostalAddress",
        streetAddress: "JU-12A, Block G&JU, Ranikhet",
        addressLocality: "Pitampura, Delhi",
        postalCode: "110034",
        addressCountry: "IN",
      },
      telephone: "+91-9899554095",
      email: "mailto:Aggarmanish@gmail.com",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "350",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${FULL_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sleep",
          item: `${BASE_URL}/sleep`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PAP Therapy (CPAP/BiPAP)",
          item: FULL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${FULL_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between CPAP and BiPAP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CPAP (Continuous Positive Airway Pressure) delivers air at a constant pressure level during both inhalation and exhalation. BiPAP (Bilevel Positive Airway Pressure) provides two distinct pressure levels: a higher pressure during inhalation and a lower pressure during exhalation, making it easier for some patients to exhale.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know what pressure setting I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct pressure setting is determined through a sleep titration study or using an Auto-CPAP (APAP) device supervised by your sleep specialist to ensure complete resolution of airway blockages.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if my CPAP mask leaks air or feels uncomfortable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mask comfort is critical for effective therapy. If you experience leaks or pressure marks, your mask straps may need adjusting, or a different size or mask style (nasal pillows, nasal mask, or full-face mask) may be required.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get used to PAP therapy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients adjust within a few days to a couple of weeks of consistent nightly use. Practicing wearing the mask during relaxing daytime activities can speed up the adaptation process.",
          },
        },
        {
          "@type": "Question",
          name: "Can PAP therapy cure my sleep apnea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PAP therapy acts as an effective treatment that keeps the airway open while in use, successfully controlling symptoms and removing health risks. It does not permanently cure sleep apnea, so continuous long-term nightly use is recommended.",
          },
        },
      ],
    },
  ],
};

export default function PapTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <PapTherapySleepApneaPage />
    </>
  );
}
