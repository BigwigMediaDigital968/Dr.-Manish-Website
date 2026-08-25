import type { Metadata } from "next";
import SleepDiaryTestingPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/sleep-diary";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Sleep Diary: How to Track Your Sleep | Dr. Manish Aggarwal";
const description =
  "Struggling to understand your sleep pattern? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, uses sleep diaries to guide accurate diagnosis.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "sleep diary",
    "sleep log",
    "sleep journal",
    "track sleep patterns",
    "insomnia evaluation",
    "circadian rhythm tracking",
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
        alt: "Sleep Diary for Sleep Evaluation - Dr. Manish Aggarwal",
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
      name: "Sleep Diary: The Simplest First Step in Understanding Your Sleep",
      description:
        "Learn what a sleep diary is, why it is recommended, how to fill it in correctly, and what it can reveal ahead of tests like Actigraphy or Polysomnography, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
            "@id": `${FULL_URL}#sleep-diary-test`,
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
      "@type": "MedicalTest",
      "@id": `${FULL_URL}#sleep-diary-test`,
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
          "Often used alongside a sleep diary to cross-check subjective self-reported entries with objective movement data.",
      },
      howPerformed:
        "The patient keeps a daily log of bedtime, sleep onset time, nighttime awakenings, wake-up time, daytime naps, caffeine/alcohol consumption, and subjective sleep quality over 1 to 2 weeks.",
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
          name: "Sleep Investigations",
          item: `${BASE_URL}/sleep-investigations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sleep Diary",
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
    },
  ],
};

export default function SleepDiaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <SleepDiaryTestingPage />
    </>
  );
}