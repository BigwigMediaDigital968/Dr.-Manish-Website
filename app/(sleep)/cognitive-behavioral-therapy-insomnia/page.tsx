import type { Metadata } from "next";
import CbtiInsomniaTherapyPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/cognitive-behavioral-therapy-insomnia";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "CBT-I for Insomnia Treatment | Dr. Manish Aggarwal";
const description =
  "Tired of relying on sleeping pills? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, offers CBT-I, the first-line treatment for insomnia.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "CBT-I",
    "cognitive behavioral therapy for insomnia",
    "chronic insomnia treatment",
    "stimulus control therapy",
    "sleep restriction therapy",
    "insomnia without medication",
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
        alt: "CBT-I for Insomnia Treatment - Dr. Manish Aggarwal",
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
      name: "Cognitive Behavioral Therapy for Insomnia (CBT-I): A Way to Fix Sleep Without Relying on Pills",
      description:
        "A guide to Cognitive Behavioral Therapy for Insomnia (CBT-I) — how it works, its components, benefits, and how it compares to sleeping pills, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
            "@id": `${FULL_URL}#cbti-therapy`,
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
      "@id": `${FULL_URL}#cbti-therapy`,
      name: "Cognitive Behavioral Therapy for Insomnia",
      alternateName: "CBT-I",
      usedToTreat: {
        "@type": "MedicalCondition",
        name: "Chronic Insomnia",
      },
      subjectOf: [
        {
          "@type": "MedicalTherapy",
          name: "Sleep Education",
        },
        {
          "@type": "MedicalTherapy",
          name: "Sleep Hygiene",
        },
        {
          "@type": "MedicalTherapy",
          name: "Stimulus Control Therapy",
        },
        {
          "@type": "MedicalTherapy",
          name: "Sleep Restriction Therapy",
        },
        {
          "@type": "MedicalTherapy",
          name: "Cognitive Restructuring",
        },
        {
          "@type": "MedicalTherapy",
          name: "Relaxation Techniques",
        },
      ],
      howPerformed:
        "Structured multi-session program focusing on changing sleep habits, addressing anxiety around sleep, and re-establishing the brain connection between bed and sleep.",
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
          name: "CBT-I",
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
          name: "What is Cognitive Behavioral Therapy for Insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CBT-I is a structured, evidence-based therapy that addresses the habits and thought patterns that contribute to ongoing insomnia. It includes components such as sleep education, stimulus control, sleep restriction, cognitive restructuring, and relaxation techniques.",
          },
        },
        {
          "@type": "Question",
          name: "Is CBT-I better than sleeping pills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CBT-I and sleeping pills work differently. CBT-I addresses underlying behaviours and thoughts for potentially longer-lasting improvement, while sleeping pills offer more immediate, short-term relief. Many sleep specialists consider CBT-I a preferred first-line approach for chronic insomnia, but the right option depends on individual circumstances and should be discussed with your doctor.",
          },
        },
        {
          "@type": "Question",
          name: "How long does CBT-I take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CBT-I is usually delivered over several sessions across a few weeks, allowing time for new sleep habits to develop. The exact duration varies depending on individual response and the components used.",
          },
        },
        {
          "@type": "Question",
          name: "Can CBT-I help chronic insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CBT-I is commonly used and recommended for chronic insomnia, as it addresses the ongoing habits and thought patterns that often keep long-term insomnia going. Results vary between individuals.",
          },
        },
        {
          "@type": "Question",
          name: "Who should consider CBT-I?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CBT-I may be suitable for adults with chronic insomnia, frequent nighttime awakenings, early morning waking, or those looking to reduce dependence on sleeping pills. A detailed sleep evaluation helps determine if it is the right option.",
          },
        },
        {
          "@type": "Question",
          name: "Does CBT-I have side effects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CBT-I does not involve medication, so it does not carry the side effects associated with sleep medicines. Some components, such as sleep restriction therapy, may cause temporary tiredness in the initial weeks as your sleep pattern adjusts, but this is generally short-lived and monitored by your sleep specialist.",
          },
        },
      ],
    },
  ],
};

export default function CbtITreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <CbtiInsomniaTherapyPage />
    </>
  );
}
