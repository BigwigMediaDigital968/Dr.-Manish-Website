import type { Metadata } from "next";
import SleepRelatedBreathingDisordersPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/sleep-related-breathing-disorders`;

export const metadata: Metadata = {
  title: "Sleep-Related Breathing Disorders: Symptoms & Treatment",
  description:
    "Loud snoring, gasping, or daytime fatigue? Learn about sleep-related breathing disorders, causes, diagnosis & treatment from Sleep Specialist Dr. Manish, Delhi.",

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
    type: "article",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title:
      "Sleep-Related Breathing Disorders: Symptoms, Diagnosis & Treatment",
    description:
      "Loud snoring, gasping, or daytime fatigue? Learn about sleep-related breathing disorders, causes, diagnosis & treatment from Sleep Specialist Dr. Manish, Delhi.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/images/sleep-breathing-disorders-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Sleep-Related Breathing Disorders - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sleep-Related Breathing Disorders: Symptoms, Diagnosis & Treatment",
    description:
      "Loud snoring, gasping, or daytime fatigue? Learn about sleep-related breathing disorders, causes, diagnosis & treatment from Sleep Specialist Dr. Manish, Delhi.",
    images: [
      `${siteUrl}/assets/images/sleep-breathing-disorders-og.jpg`,
    ],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Sleep-Related Breathing Disorders: Symptoms, Diagnosis & Treatment",
  description:
    "Loud snoring, gasping, or daytime fatigue? Learn about sleep-related breathing disorders, causes, diagnosis & treatment from Sleep Specialist Dr. Manish, Delhi.",
  medicalAudience: {
    "@type": "Patient",
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
    "@type": "Physician",
    name: "Dr. Manish Aggarwal",
    medicalSpecialty: "Pulmonology, Sleep Medicine",
  },
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Manish Aggarwal",
  medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
  url: `${siteUrl}/about-us`,
  worksFor: {
    "@type": "MedicalClinic",
    name: "Delhi Lung & Bronchoscopy Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jij-12A, Bittampura Gali",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    telephone: "+91-98985-54095",
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
      name: "Sleep-Related Breathing Disorders",
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
};

export default function SleepRelatedBreathing() {
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

      <SleepRelatedBreathingDisordersPage />
    </>
  );
}
