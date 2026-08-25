import type { Metadata } from "next";
import SleepRelatedBreathingDisordersPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/sleep-related-breathing-disorders";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Sleep-Related Breathing Disorders: Symptoms & Treatment";
const description =
  "Loud snoring, gasping, or daytime fatigue? Learn about sleep-related breathing disorders, causes, diagnosis & treatment from Sleep Specialist Dr. Manish, Delhi.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "sleep-related breathing disorders",
    "sleep breathing disorders",
    "breathing problems during sleep",
    "sleep breathing disorder symptoms",
    "sleep breathing disorder treatment",
    "sleep breathing disorder diagnosis",
    "sleep apnea",
    "obstructive sleep apnea",
    "central sleep apnea",
    "snoring treatment",
    "sleep specialist Delhi",
    "Dr. Manish Aggarwal pulmonologist",
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
        alt: "Sleep-Related Breathing Disorders Treatment by Dr. Manish Aggarwal",
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
      name: title,
      url: FULL_URL,
      description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: [
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
          name: "Upper Airway Resistance Syndrome",
        },
        {
          "@type": "MedicalCondition",
          name: "Obesity Hypoventilation Syndrome",
        },
      ],
      lastReviewed: "2026-07-31",
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
          name: "Sleep-Related Breathing Disorders",
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
          name: "What are sleep-related breathing disorders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sleep-related breathing disorders are conditions in which normal breathing is disrupted during sleep, ranging from loud snoring and airway narrowing to complete pauses in breathing. They include Obstructive Sleep Apnea, Central Sleep Apnea, and related conditions.",
          },
        },
        {
          "@type": "Question",
          name: "What causes breathing problems during sleep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include excess body weight, airway obstruction, enlarged tonsils, nasal blockage, certain medications, and underlying heart, lung, or neurological conditions. Ageing and family history can also play a role.",
          },
        },
        {
          "@type": "Question",
          name: "Can loud snoring be a sign of a sleep disorder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While occasional light snoring is usually harmless, loud and frequent snoring, especially when combined with gasping, choking, or witnessed breathing pauses, can be a sign of Obstructive Sleep Apnea or a related disorder.",
          },
        },
        {
          "@type": "Question",
          name: "How are sleep-related breathing disorders diagnosed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diagnosis typically involves a detailed medical and sleep history, a physical examination, and a sleep study, either a Home Sleep Test or an in-lab Level 1 Polysomnography, to measure breathing patterns, oxygen levels, and sleep quality.",
          },
        },
        {
          "@type": "Question",
          name: "Can these disorders be treated without surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in most cases. Many patients are managed successfully with lifestyle changes, weight management, positional therapy, CPAP or BiPAP therapy, or oral appliances. Surgery is considered only in select cases when other options are not suitable or effective.",
          },
        },
        {
          "@type": "Question",
          name: "When should I consult a sleep specialist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is worth consulting a sleep specialist if you experience loud snoring, witnessed pauses in breathing, gasping or choking during sleep, morning headaches, or excessive daytime sleepiness that affects your daily activities.",
          },
        },
      ],
    },
  ],
};

export default function SleepRelatedBreathingPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <SleepRelatedBreathingDisordersPage />
      </main>
    </>
  );
}
