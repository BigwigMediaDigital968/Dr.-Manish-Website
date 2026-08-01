import type { Metadata } from "next";
import SleepDiaryTestingPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/sleep-diary`;

export const metadata: Metadata = {
  title: "Sleep Diary: How to Track Your Sleep | Dr. Manish",
  description:
    "Struggling to understand your sleep pattern? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, uses sleep diaries to guide diagnosis. Book a consultation.",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Dr. Manish Aggarwal",
    },
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "Sleep Diary for Sleep Evaluation | Dr. Manish Aggarwal",
    description:
      "Struggling to understand your sleep pattern? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, uses sleep diaries to guide diagnosis. Book a consultation.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/sleep-diary-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Sleep Diary for Sleep Evaluation - Dr. Manish Aggarwal",
      },
    ],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Sleep Diary: The Simplest First Step in Understanding Your Sleep",
  url: pageUrl,
  description:
    "Learn what a sleep diary is, why it's recommended, how to fill it in correctly, and what it can reveal ahead of tests like Actigraphy or Polysomnography, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalTest",
    name: "Sleep Diary",
    alternateName: ["Sleep Log", "Sleep Journal"],
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
    affectedBy: {
      "@type": "MedicalTest",
      name: "Actigraphy",
      description:
        "Often used alongside a sleep diary to cross-check subjective and objective sleep-wake data.",
    },
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
      name: "Sleep Investigations",
      item: `${siteUrl}/sleep-investigations`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sleep Diary",
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
      name: "What is a sleep diary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sleep diary is a daily written record of your sleep and wake times, naps, and daytime habits, kept over one to two weeks to help your doctor understand your sleep pattern.",
      },
    },
    {
      "@type": "Question",
      name: "How long do I need to keep a sleep diary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This depends on your doctor's advice, but it is usually kept for one to two weeks to capture a representative pattern of your sleep.",
      },
    },
    {
      "@type": "Question",
      name: "Is a sleep diary as accurate as Actigraphy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sleep diary reflects your own perception and memory of your sleep, while Actigraphy provides an objective, device-recorded measurement. Both have value, and they are often used together for a more complete picture.",
      },
    },
    {
      "@type": "Question",
      name: "What if I forget to fill it in on some days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Try to fill in the diary as soon as possible after you remember, and note that the entry was completed later. Occasional missed entries are common, but try to be as consistent as possible for the most useful results.",
      },
    },
    {
      "@type": "Question",
      name: "Do I still need other sleep tests if I keep a sleep diary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what the diary shows and your overall symptoms. Some patients may only need a sleep diary and lifestyle guidance, while others may also require Actigraphy, Polysomnography, or MSLT for a complete evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any cost or risk involved in keeping a sleep diary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A sleep diary is simply a written record you keep at home. There is no cost, risk, or discomfort involved.",
      },
    },
  ],
};

export default function SleepDiaryPage() {
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

      <SleepDiaryTestingPage />
    </>
  );
}