import type { Metadata } from "next";
import ActigraphyTestingPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/actigraphy`;

export const metadata: Metadata = {
  title: "Actigraphy: Sleep Monitoring Test | Dr. Manish",
  description:
    "Struggling with irregular sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist, uses actigraphy to track your natural sleep-wake pattern. Book a consultation.",

  keywords: [
    "actigraphy",
    "wrist actigraphy",
    "sleep monitoring test",
    "circadian rhythm test",
    "insomnia evaluation",
    "shift work sleep disorder test",
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
    siteName: "Dr. Manish's Sleep & Pulmonology Clinic",
    title: "Actigraphy Sleep Test in Delhi | Dr. Manish Aggarwal",
    description:
      "Struggling with irregular sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist, uses actigraphy to track your natural sleep-wake pattern. Book a consultation.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/actigraphy-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Actigraphy Sleep Test - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Actigraphy Sleep Test in Delhi | Dr. Manish Aggarwal",
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains how actigraphy tracks your natural sleep-wake pattern over days to weeks — no wires, no hospital stay.",
    images: [`${siteUrl}/images/actigraphy-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Actigraphy: Sleep Monitoring Test for Diagnosing Sleep Disorders",
  url: pageUrl,
  description:
    "Learn how actigraphy works, why it's recommended, and what it can help diagnose, including insomnia and circadian rhythm sleep-wake disorders.",
  medicalAudience: {
    "@type": "Patient",
  },
  about: {
    "@type": "MedicalTest",
    name: "Actigraphy",
    alternateName: ["Wrist Actigraphy", "Actigraphy Sleep Test"],
    usedToDiagnose: [
      {
        "@type": "MedicalCondition",
        name: "Insomnia",
      },
      {
        "@type": "MedicalCondition",
        name: "Circadian Rhythm Sleep-Wake Disorder",
      },
      {
        "@type": "MedicalCondition",
        name: "Shift Work Sleep Disorder",
      },
    ],
  },
  lastReviewed: "2026-07-30",
  reviewedBy: {
    "@type": "Physician",
    name: "Dr. Manish",
    medicalSpecialty: ["Pulmonology", "SleepMedicine"],
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "Dr. Manish's Sleep & Pulmonology Clinic",
    url: siteUrl,
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
    name: "Dr. Manish's Sleep & Pulmonology Clinic",
    url: siteUrl,
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
      name: "Sleep Investigations",
      item: `${siteUrl}/sleep-investigations/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Actigraphy",
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
      name: "What is Actigraphy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Actigraphy is a sleep investigation that uses a small wrist-worn device to record your movement and activity over several days, helping your doctor understand your natural sleep-wake pattern.",
      },
    },
    {
      "@type": "Question",
      name: "Is an Actigraphy test painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Actigraphy is completely painless and non-invasive. The device is worn like a watch and does not involve needles, electrodes, or any uncomfortable procedures.",
      },
    },
    {
      "@type": "Question",
      name: "How long do I need to wear the Actigraphy device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This varies depending on what your doctor is assessing, but it is typically worn continuously for one to two weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I shower while wearing it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This depends on the specific device used. Many actigraphy devices are water-resistant, but you should always follow your doctor's or sleep centre's specific instructions regarding water exposure.",
      },
    },
    {
      "@type": "Question",
      name: "What sleep disorders can Actigraphy detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Actigraphy is commonly used to help evaluate insomnia, circadian rhythm sleep-wake disorders such as delayed or advanced sleep phase disorder, shift work sleep disorder, and general sleep pattern irregularities. It is not used to diagnose sleep apnea on its own.",
      },
    },
    {
      "@type": "Question",
      name: "Do I still need a sleep study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your symptoms. Some patients only need actigraphy, while others may also require a Polysomnography or MSLT for a complete evaluation. Your sleep specialist will determine what is right for you.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is Actigraphy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Actigraphy provides a reliable estimate of sleep-wake patterns based on movement and is a well-established tool in sleep medicine. However, it is not a substitute for a full sleep study when conditions such as sleep apnea are suspected, and results are always interpreted alongside symptoms and clinical history.",
      },
    },
  ],
};

export default function ActigraphyPage() {
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
      <ActigraphyTestingPage />
    </>
  );
}
