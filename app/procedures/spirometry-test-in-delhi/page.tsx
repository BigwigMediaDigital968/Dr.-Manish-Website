import type { Metadata } from "next";
import SpirometryDelhiPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/spirometry-test-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Spirometry Test in Delhi | Dr. Manish Aggarwal";
const description =
  "Quick, painless spirometry testing in Delhi by Dr. Manish Aggarwal to diagnose asthma, COPD & lung conditions. Same-day results. Book your test today.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "spirometry test",
    "spirometry test in Delhi",
    "lung function test Delhi",
    "pulmonary function test",
    "PFT test Delhi",
    "asthma diagnosis Delhi",
    "COPD diagnosis Delhi",
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

const schema = {
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
      name: "Spirometry in Delhi",
      description:
        "Spirometry is a non-invasive breathing test measuring forced vital capacity (FVC) and forced expiratory volume (FEV1) to assess airway narrowing and lung capacity, commonly used to diagnose asthma and COPD.",
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
        "With a nose clip in place, the patient breathes forcefully into a mouthpiece connected to a spirometer, repeated three or more times, sometimes with a bronchodilator repeat; the test takes 15-20 minutes.",
      followup:
        "No recovery time is needed; results are available immediately and reviewed by Dr. Aggarwal alongside symptoms and history.",
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
          name: "Spirometry in Delhi",
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
          name: "Is spirometry painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It only requires you to breathe forcefully into a mouthpiece. There is no needle, no sedation, and no discomfort involved, though some people feel briefly tired afterward.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a spirometry test take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The test itself usually takes 15 to 20 minutes, including a few practice attempts to ensure accurate, repeatable results.",
          },
        },
        {
          "@type": "Question",
          name: "Can spirometry diagnose asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spirometry, especially when repeated after a bronchodilator inhaler, can strongly support a diagnosis of asthma by showing whether airflow improves significantly with treatment.",
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
        {
          "@type": "Question",
          name: "How often should spirometry be repeated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on your condition. Patients with stable, well-controlled asthma or COPD may need it once a year, while those with new symptoms or changing treatment may need it more frequently, as advised by Dr. Aggarwal.",
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

export default function SpirometryPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <SpirometryDelhiPage />
      </main>
    </>
  );
}
