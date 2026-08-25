import type { Metadata } from "next";
import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/pulmonary-function-test-pft-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Pulmonary Function Test (PFT) in Delhi | Dr. Aggarwal";
const description =
  "Complete pulmonary function test (PFT) in Delhi by Dr. Manish Aggarwal — spirometry, lung volumes & DLCO. Same-day results. Book your PFT today.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pulmonary function test",
    "PFT test Delhi",
    "PFT in Delhi",
    "lung function test Delhi",
    "spirometry test Delhi",
    "DLCO test Delhi",
    "lung volume test",
    "interventional pulmonologist Delhi",
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
        alt: "Dr. Manish Aggarwal Logo",
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
      name: "Pulmonary Function Test (PFT) in Delhi",
      description:
        "A pulmonary function test (PFT) combines spirometry, lung volume measurement, and diffusion capacity (DLCO) testing to give a complete picture of airflow, lung capacity, and gas exchange efficiency.",
      bodyLocation: "Lungs",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "Avoid heavy meals and vigorous exercise for at least an hour before",
        "Ask in advance whether to hold inhaler use before the test",
        "Avoid smoking before the appointment",
        "Wear loose, comfortable clothing",
      ],
      howPerformed:
        "The test includes spirometry (forceful breathing into a mouthpiece), lung volume measurement (often in a body plethysmograph booth), and a diffusion capacity test using a harmless gas mixture; the full panel takes 30-45 minutes.",
      followup:
        "No recovery time is needed; Dr. Aggarwal reviews the complete results alongside symptoms, history, and imaging to explain findings and next steps.",
      alternateName: "PFT",
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
          name: "Pulmonary Function Test (PFT) in Delhi",
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
          name: "How is a PFT different from spirometry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spirometry is one part of a PFT, measuring airflow. A complete PFT can also include lung volume measurement and diffusion capacity testing, giving a fuller picture of both how your lungs move air and how well they exchange oxygen.",
          },
        },
        {
          "@type": "Question",
          name: "Is a pulmonary function test painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It involves breathing into a mouthpiece and, for some components, sitting in a small testing booth or breathing a harmless gas mixture. There is no needle or sedation involved.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a full PFT take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A complete test with all components usually takes 30 to 45 minutes, depending on which parts are required for your evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need this test more than once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many chronic lung conditions are monitored with periodic PFTs to track progression and response to treatment. How often depends on your specific diagnosis, as advised by Dr. Aggarwal.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to stop my inhaler before the test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on what the test is being used to assess. The clinic will advise you in advance whether to continue or temporarily hold your inhaler before your appointment.",
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

export default function PulmonaryFunctionTestPageRoute() {
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
