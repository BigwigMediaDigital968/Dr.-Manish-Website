import type { Metadata } from "next";
import IntercostalDrainageDelhiPageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/intercostal-drainage-icd-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Intercostal Drainage (ICD) in Delhi | Dr. Aggarwal";
const description =
  "Safe, ultrasound-guided chest tube (ICD) insertion in Delhi by Dr. Manish Aggarwal for pneumothorax, effusion & empyema. 24+ years' experience. Book now.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "intercostal drainage",
    "ICD insertion",
    "intercostal chest tube",
    "chest tube insertion",
    "chest tube drainage",
    "pleural drainage",
    "pneumothorax treatment",
    "pleural effusion treatment",
    "empyema treatment",
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
      name: "Intercostal Drainage (ICD) in Delhi",
      description:
        "Intercostal drainage (ICD) places a flexible tube through the chest wall into the pleural space to continuously drain air, fluid, blood, or pus, helping the lung re-expand and relieving breathlessness.",
      bodyLocation: "Pleural space",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "Emergency cases may require urgent insertion with minimal preparation",
        "For planned procedures, disclose all medications, especially blood thinners",
        "Disclose allergies to local anesthesia or latex",
        "Bring recent chest X-ray or CT scan reports",
        "Wear loose, comfortable clothing",
      ],
      howPerformed:
        "The insertion site is cleaned and numbed with local anesthesia; under ultrasound guidance where appropriate, a chest tube is inserted into the pleural space and connected to a drainage system, typically taking 20-40 minutes.",
      followup:
        "The tube typically remains in place for a few days with regular chest X-rays to monitor lung re-expansion before removal; most patients require a short hospital stay.",
      alternateName: "Chest Tube Insertion",
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
          name: "Intercostal Drainage (ICD) in Delhi",
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
          name: "What is intercostal drainage (ICD) used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is used to drain air, fluid, blood, or pus from around the lung, commonly for a collapsed lung, large pleural effusion, chest infection, or after chest trauma or surgery.",
          },
        },
        {
          "@type": "Question",
          name: "Is ICD insertion painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The area is numbed with local anesthesia before insertion, so most patients feel pressure rather than sharp pain. Some soreness at the site is expected afterward and is managed with pain relief.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the chest tube stay in place?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This varies depending on the underlying condition, but it is typically a few days, monitored with regular chest X-rays until the lung has fully re-expanded and drainage has settled.",
          },
        },
        {
          "@type": "Question",
          name: "Is this an emergency procedure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be. Conditions like tension pneumothorax require urgent chest tube insertion, while other cases, such as recurrent effusions, may be planned in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need to stay in the hospital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients with a chest tube in place require a short hospital stay for monitoring until the tube can be safely removed.",
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

export default function IntercostalDrainagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <IntercostalDrainageDelhiPageContent />
      </main>
    </>
  );
}
