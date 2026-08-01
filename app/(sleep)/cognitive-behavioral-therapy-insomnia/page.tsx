import type { Metadata } from "next";
import CbtiInsomniaTherapyPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/cognitive-behavioral-therapy-insomnia
`;

export const metadata: Metadata = {
  title: "CBT-I for Insomnia Treatment | Dr. Manish Aggarwal",
  description:
    "Tired of relying on sleeping pills? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, offers CBT-I, the first-line treatment for insomnia. Book a consultation.",

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

  authors: [
    {
      name: "Dr. Manish Aggarwal",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "CBT-I for Insomnia Treatment | Dr. Manish Aggarwal",
    description:
      "Tired of relying on sleeping pills? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, offers CBT-I, the first-line treatment for insomnia. Book a consultation.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/cbt-i-og.jpg`,
        width: 1200,
        height: 630,
        alt: "CBT-I for Insomnia Treatment - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CBT-I for Insomnia Treatment | Dr. Manish Aggarwal",
    description:
      "Dr. Manish Aggarwal explains Cognitive Behavioral Therapy for Insomnia — how it works, its components, and how it compares to sleeping pills.",
    images: [`${siteUrl}/images/cbt-i-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cognitive Behavioral Therapy for Insomnia (CBT-I): A Way to Fix Sleep Without Relying on Pills",
  url: pageUrl,
  description:
    "A guide to Cognitive Behavioral Therapy for Insomnia (CBT-I) — how it works, its components, benefits, and how it compares to sleeping pills, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalTherapy",
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
  },
  lastReviewed: "2026-07-30",
  reviewedBy: {
    "@type": "Person",
    name: "Dr. Manish Aggarwal",
    jobTitle: "Pulmonologist & Sleep Specialist",
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "Delhi Lung & Bronchoscopy Center",
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Manish Aggarwal",
  medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
  url: `${siteUrl}/about-us`,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "Delhi Lung & Bronchoscopy Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "J1-12A, Pitampura",
      addressLocality: "Delhi",
      postalCode: "110034",
      addressCountry: "IN",
    },
    telephone: "+91-99895-54095",
    email: "Aggarwal54095@gmail.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sleep",
      item: `${siteUrl}/sleep`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CBT-I",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
};

export default function CbtITreatmentPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <CbtiInsomniaTherapyPage />
    </>
  );
}