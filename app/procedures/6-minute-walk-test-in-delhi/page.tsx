import type { Metadata } from "next";
import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/6-minute-walk-test-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "6 Minute Walk Test in Delhi | Dr. Manish Aggarwal";
const description =
  "6 minute walk test (6MWT) in Delhi by Dr. Manish Aggarwal to assess exertional breathlessness & oxygen levels in lung disease. Book your assessment today.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "6 minute walk test Delhi",
    "6MWT Delhi",
    "exertional breathlessness test",
    "oxygen desaturation test",
    "pulmonary function test Delhi",
    "pulmonologist Pitampura",
    "interventional pulmonology Delhi",
    "Dr. Manish Aggarwal",
  ],
  authors: [
    {
      name: "Dr. Manish Aggarwal",
    },
  ],
  alternates: {
    canonical: FULL_URL,
  },
  robots: {
    index: true,
    follow: true,
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
        alt: "6 Minute Walk Test in Delhi - Dr. Manish Aggarwal",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      url: FULL_URL,
      name: title,
      description: description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      about: {
        "@id": `${FULL_URL}#medicaltest`,
      },
      reviewedBy: {
        "@id": `${BASE_URL}/#physician`,
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
      "@id": `${FULL_URL}#medicaltest`,
      name: "6 Minute Walk Test in Delhi",
      description:
        "The 6 minute walk test measures how well the heart and lungs work together during sustained walking, tracking oxygen levels, heart rate, and breathlessness to assess functional capacity in chronic lung and heart conditions.",
      bodyLocation: "Cardiopulmonary system",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "Wear comfortable clothing and walking shoes",
        "Take regular medications as usual unless advised otherwise",
        "Avoid vigorous exercise for a couple of hours before",
        "Eat a light meal before the appointment",
        "Bring any walking aids normally used",
      ],
      howPerformed:
        "A pulse oximeter tracks oxygen and heart rate while the patient walks back and forth along a measured corridor at their own pace for six minutes; distance, oxygen drops, and recovery are recorded, taking 20-30 minutes total.",
      followup:
        "No special recovery period is needed; Dr. Aggarwal reviews walk distance, oxygen trends, and symptoms to guide diagnosis or treatment, including possible supplemental oxygen needs.",
      alternateName: "6MWT",
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
          name: "Procedures",
          item: `${BASE_URL}/procedures`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "6 Minute Walk Test in Delhi",
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
          name: "Is the 6 minute walk test difficult or exhausting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You walk at your own comfortable pace and can rest briefly if needed. The goal is to cover as much distance as you comfortably can in six minutes, not to push yourself to exhaustion.",
          },
        },
        {
          "@type": "Question",
          name: "Why is this test done instead of just checking my oxygen levels at rest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many lung and heart conditions only cause noticeable oxygen drops or symptoms during activity, which resting tests can completely miss. Walking for a sustained period reveals problems that would otherwise go undetected.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need oxygen during the test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients do not need supplemental oxygen during the test itself, though if your levels drop significantly, the team will manage this appropriately and it becomes part of the information used to guide your treatment.",
          },
        },
        {
          "@type": "Question",
          name: "How is this test different from spirometry or a PFT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spirometry and PFT measure lung function while you breathe in a controlled way at rest. The 6 minute walk test measures how your heart, lungs, and oxygen levels actually respond during real physical activity.",
          },
        },
        {
          "@type": "Question",
          name: "Will this test be repeated over time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many chronic conditions, yes. Repeating the test periodically helps track whether your condition is stable, improving, or progressing, and whether treatment is having the desired effect.",
          },
        },
      ],
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dr. Manish Aggarwal",
      honorificPrefix: "Dr.",
      jobTitle:
        "Principal Director, Department of Chest Disease & Interventional Pulmonology",
      medicalSpecialty: "https://schema.org/Pulmonology",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "MBBS",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "MD (Tuberculosis & Chest Diseases)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "FRCP (Glasgow)",
        },
      ],
      worksFor: [
        {
          "@type": "Hospital",
          name: "Max Hospital",
        },
        {
          "@id": `${BASE_URL}/#clinic`,
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "European Respiratory Society (ERS)",
        },
        {
          "@type": "Organization",
          name: "American College of Physicians (ACP)",
        },
        {
          "@type": "Organization",
          name: "Society of Critical Care Medicine (SCCM, USA)",
        },
        {
          "@type": "Organization",
          name: "European Society of Intensive Care Medicine (ESICM)",
        },
        {
          "@type": "Organization",
          name: "Indian Chest Society",
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
  ],
};

export default function SixMinuteWalkTestPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
        <PageContent />
      </main>
    </>
  );
}
