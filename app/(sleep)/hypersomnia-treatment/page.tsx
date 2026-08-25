import type { Metadata } from "next";
import HypersomniaTreatmentPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/hypersomnia-treatment";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Hypersomnia Treatment in Delhi | Dr. Manish Aggarwal";
const description =
  "Excessively sleepy during the day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats hypersomnia. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "hypersomnia treatment",
    "excessive daytime sleepiness",
    "sleep apnea specialist Delhi",
    "CPAP therapy",
    "BiPAP therapy",
    "narcolepsy evaluation",
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
        alt: "Hypersomnia Treatment by Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Excessively sleepy during the day despite a full night's sleep? Dr. Manish Aggarwal diagnoses and treats hypersomnia with evidence-based sleep medicine.",
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      name: "Hypersomnia Treatment: Why You're Always Sleepy, and What It Really Means",
      url: FULL_URL,
      description:
        "Comprehensive guide to hypersomnia — causes, symptoms, diagnosis, and evidence-based treatment including CPAP/BiPAP therapy, by Dr. Manish Aggarwal, Pulmonologist and Sleep Medicine Specialist.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: {
        "@type": "MedicalCondition",
        name: "Hypersomnia",
        alternateName: "Excessive Daytime Sleepiness",
        cause: [
          {
            "@type": "MedicalCause",
            name: "Obstructive Sleep Apnea (OSA)",
          },
          {
            "@type": "MedicalCause",
            name: "Upper Airway Resistance Syndrome (UARS)",
          },
          {
            "@type": "MedicalCause",
            name: "Obesity Hypoventilation Syndrome (OHS)",
          },
          {
            "@type": "MedicalCause",
            name: "Sleep-related hypoventilation",
          },
        ],
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "CPAP Therapy (Continuous Positive Airway Pressure)",
          },
          {
            "@type": "MedicalTherapy",
            name: "BiPAP Therapy (Bilevel Positive Airway Pressure)",
          },
          {
            "@type": "MedicalTherapy",
            name: "Weight management",
          },
          {
            "@type": "MedicalTherapy",
            name: "Positional therapy",
          },
        ],
        signOrSymptom: [
          "Excessive daytime sleepiness",
          "Loud snoring",
          "Witnessed breathing pauses during sleep",
          "Waking up unrefreshed",
          "Morning headaches",
          "Dry mouth on waking",
          "Difficulty concentrating",
        ],
      },
      lastReviewed: "2026-07-30",
      reviewedBy: {
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
          name: "Hypersomnia Treatment",
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
          name: "What is hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hypersomnia is excessive daytime sleepiness that occurs even after what should be enough sleep at night. It is often linked to poor sleep quality caused by an underlying condition.",
          },
        },
        {
          "@type": "Question",
          name: "What are the common symptoms of hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common hypersomnia symptoms include excessive daytime sleepiness, loud snoring, unrefreshing sleep, morning headaches, and difficulty concentrating.",
          },
        },
        {
          "@type": "Question",
          name: "What causes hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include sleep-related breathing disorders such as Obstructive Sleep Apnea, Upper Airway Resistance Syndrome, and Obesity Hypoventilation Syndrome.",
          },
        },
        {
          "@type": "Question",
          name: "Can sleep apnea cause hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Obstructive Sleep Apnea is one of the most common causes of excessive daytime sleepiness, as it repeatedly disrupts sleep throughout the night.",
          },
        },
        {
          "@type": "Question",
          name: "What is idiopathic hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Idiopathic hypersomnia is excessive daytime sleepiness with no identifiable underlying cause after thorough evaluation. It may require further specialised sleep testing.",
          },
        },
        {
          "@type": "Question",
          name: "How is hypersomnia diagnosed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diagnosis typically involves a detailed sleep history, questionnaires like the Epworth Sleepiness Scale, and an overnight sleep study (polysomnography).",
          },
        },
        {
          "@type": "Question",
          name: "What is the treatment for hypersomnia caused by sleep apnea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment usually includes CPAP or BiPAP therapy, weight management, positional therapy, and lifestyle changes, based on the individual diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "Are there medicines for hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medicines for hypersomnia may be considered in some cases, but they are prescribed only after a complete evaluation and depend on the underlying cause.",
          },
        },
        {
          "@type": "Question",
          name: "What is narcolepsy, and how is it different from hypersomnia due to sleep apnea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Narcolepsy is a central disorder of hypersomnolence originating from brain regulation of sleep, while hypersomnia from sleep apnea is caused by repeated breathing disruptions during sleep. Both cause daytime sleepiness but need different evaluations.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for excessive daytime sleepiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If daytime sleepiness lasts several weeks, occurs with snoring or breathing pauses, or affects your work and safety, it is time for a sleep evaluation.",
          },
        },
      ],
    },
  ],
};

export default function HypersomniaTreatmentPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <HypersomniaTreatmentPage />
      </main>
    </>
  );
}
