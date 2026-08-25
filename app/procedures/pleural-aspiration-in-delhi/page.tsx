import type { Metadata } from "next";
import PleuralAspirationDelhiPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/pleural-aspiration-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Pleural Aspiration (Thoracentesis) in Delhi | Dr. Aggarwal";
const description =
  "Ultrasound-guided pleural aspiration in Delhi by Dr. Manish Aggarwal for fast relief & diagnosis of fluid around the lungs. 24+ years' experience. Book now.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pleural aspiration in Delhi",
    "thoracentesis in Delhi",
    "pleural fluid drainage",
    "pleural effusion treatment",
    "ultrasound guided pleural aspiration",
    "pleural effusion diagnosis",
    "fluid around lungs treatment",
    "thoracentesis",
    "pleural fluid removal",
    "Dr. Manish Aggarwal",
    "pulmonologist Delhi",
    "interventional pulmonologist Delhi",
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
        "@id": `${FULL_URL}#medicalprocedure`,
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
      "@type": "MedicalProcedure",
      "@id": `${FULL_URL}#medicalprocedure`,
      name: "Pleural Aspiration in Delhi",
      description:
        "Pleural aspiration (thoracentesis) uses local anesthesia and ultrasound guidance to remove excess fluid from the pleural space, relieving breathlessness and helping identify the underlying cause of the fluid.",
      bodyLocation: "Pleural space",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "Fasting usually not required unless sedation is planned",
        "Disclose all medications, especially blood thinners and diabetes medication",
        "Disclose allergies to local anesthesia or latex",
        "Bring recent chest X-ray, CT scan, or ultrasound reports",
        "Wear loose, comfortable clothing",
      ],
      howPerformed:
        "Positioned upright, the skin is numbed with local anesthesia; under ultrasound guidance, a fine needle or catheter drains fluid from the pleural space for symptom relief and/or diagnostic testing, typically taking 15-30 minutes.",
      followup:
        "Patients are observed briefly afterward, sometimes with a chest X-ray; most notice improved breathing and can go home the same day.",
      alternateName: "Thoracentesis",
      procedureType: {
        "@id": "https://schema.org/PercutaneousProcedure",
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
          name: "Procedures",
          item: `${BASE_URL}/procedures`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pleural Aspiration in Delhi",
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
          name: "What is pleural aspiration used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is used to remove fluid that has built up around the lung, relieving breathlessness, and to help diagnose the underlying cause of the fluid, such as infection, heart failure, or cancer.",
          },
        },
        {
          "@type": "Question",
          name: "Is pleural aspiration painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The area is numbed with local anesthesia before the procedure, so most people feel pressure rather than sharp pain. Mild soreness at the site afterward is common.",
          },
        },
        {
          "@type": "Question",
          name: "How much fluid can be removed in one session?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the amount present and how you tolerate the procedure. Dr. Aggarwal will drain a safe volume in a single sitting, sometimes over multiple sessions if very large amounts are involved.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need a chest tube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not usually for a standard pleural aspiration. A chest tube or indwelling pleural catheter may be recommended separately if fluid keeps recurring or if a larger, sustained drainage is needed.",
          },
        },
        {
          "@type": "Question",
          name: "How soon will I get my results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic fluid analysis is often available within a few days, while specialized tests such as cytology for cancer cells may take slightly longer.",
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

export default function PleuralAspirationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <PleuralAspirationDelhiPage />
      </main>
    </>
  );
}
