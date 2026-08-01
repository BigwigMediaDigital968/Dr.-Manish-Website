import type { Metadata } from "next";
import IntercostalDrainageDelhiPageContent from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/intercostal-drainage-icd-in-delhi`;

export const metadata: Metadata = {
  title: "Intercostal Drainage (ICD) in Delhi | Dr. Aggarwal",
  description:
    "Safe, ultrasound-guided chest tube (ICD) insertion in Delhi by Dr. Manish Aggarwal for pneumothorax, effusion & empyema. 24+ years' experience. Book now.",

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

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    siteName: "Dr. Manish's Chest & Interventional Pulmonology Clinic",
    title: "Intercostal Drainage (ICD) in Delhi | Dr. Aggarwal",
    description:
      "Safe, ultrasound-guided chest tube (ICD) insertion in Delhi by Dr. Manish Aggarwal for pneumothorax, effusion & empyema. 24+ years' experience. Book now.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/intercostal-drainage-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Intercostal Drainage (ICD) - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Intercostal Drainage (ICD) in Delhi | Dr. Aggarwal",
    description:
      "Safe, ultrasound-guided chest tube insertion by Dr. Manish Aggarwal for pneumothorax, pleural effusion and empyema.",
    images: [`${siteUrl}/images/intercostal-drainage-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Intercostal Drainage (ICD) in Delhi | Dr. Aggarwal",
  description:
    "Safe, ultrasound-guided chest tube (ICD) insertion in Delhi by Dr. Manish Aggarwal for pneumothorax, effusion & empyema. 24+ years' experience. Book now.",
  inLanguage: "en-IN",

  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },

  about: {
    "@id": `${pageUrl}#medicalprocedure`,
  },

  reviewedBy: {
    "@id": `${siteUrl}/#physician`,
  },

  mainEntity: {
    "@id": `${pageUrl}#faq`,
  },

  breadcrumb: {
    "@id": `${pageUrl}#breadcrumb`,
  },
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": `${pageUrl}#medicalprocedure`,

  name: "Intercostal Drainage (ICD) in Delhi",

  description:
    "Intercostal drainage (ICD) places a flexible tube through the chest wall into the pleural space to continuously drain air, fluid, blood, or pus, helping the lung re-expand and relieving breathlessness.",

  bodyLocation: "Pleural space",

  performer: {
    "@id": `${siteUrl}/#physician`,
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Procedures",
      item: `${siteUrl}/procedures`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Intercostal Drainage (ICD) in Delhi",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,

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
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/#physician`,

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
      "@id": `${siteUrl}/#clinic`,
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
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#clinic`,

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
};

export default function IntercostalDrainagePage() {
  return (
    <>
      {/* Medical Web Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />

      {/* Medical Procedure Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Physician Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      {/* Clinic Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicSchema),
        }}
      />

      <IntercostalDrainageDelhiPageContent />
    </>
  );
}
