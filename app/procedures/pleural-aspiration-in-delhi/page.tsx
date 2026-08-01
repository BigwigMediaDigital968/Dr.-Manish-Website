import type { Metadata } from "next";
import PleuralAspirationDelhiPage from "./PageContent";

const siteUrl =
  process.env.SITE_URL || "https://www.drmanishaggarwal.com";

const pageUrl = `${siteUrl}/procedures/pleural-aspiration-in-delhi`;

export const metadata: Metadata = {
  title: "Pleural Aspiration (Thoracentesis) in Delhi | Dr. Aggarwal",

  description:
    "Ultrasound-guided pleural aspiration in Delhi by Dr. Manish Aggarwal for fast relief & diagnosis of fluid around the lungs. 24+ years' experience. Book now.",

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

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    siteName: "Dr. Manish Aggarwal - Chest & Interventional Pulmonology Clinic",
    title: "Pleural Aspiration (Thoracentesis) in Delhi | Dr. Aggarwal",
    description:
      "Ultrasound-guided pleural aspiration in Delhi by Dr. Manish Aggarwal for fast relief & diagnosis of fluid around the lungs. 24+ years' experience. Book now.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/pleural-aspiration-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Pleural Aspiration (Thoracentesis) in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pleural Aspiration (Thoracentesis) in Delhi | Dr. Aggarwal",
    description:
      "Ultrasound-guided pleural aspiration in Delhi by Dr. Manish Aggarwal for diagnosis and relief of fluid around the lungs. 24+ years' experience.",
    images: [`${siteUrl}/images/pleural-aspiration-og.jpg`],
  },
};

/* -------------------------------------------------------------------------- */
/* Medical Web Page Schema                                                    */
/* -------------------------------------------------------------------------- */

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Pleural Aspiration (Thoracentesis) in Delhi | Dr. Aggarwal",
  description:
    "Ultrasound-guided pleural aspiration in Delhi by Dr. Manish Aggarwal for fast relief & diagnosis of fluid around the lungs. 24+ years' experience. Book now.",
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

/* -------------------------------------------------------------------------- */
/* Medical Procedure Schema                                                   */
/* -------------------------------------------------------------------------- */

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": `${pageUrl}#medicalprocedure`,

  name: "Pleural Aspiration in Delhi",

  description:
    "Pleural aspiration (thoracentesis) uses local anesthesia and ultrasound guidance to remove excess fluid from the pleural space, relieving breathlessness and helping identify the underlying cause of the fluid.",

  bodyLocation: "Pleural space",

  performer: {
    "@id": `${siteUrl}/#physician`,
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
};

/* -------------------------------------------------------------------------- */
/* Breadcrumb Schema                                                          */
/* -------------------------------------------------------------------------- */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,

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
      name: "Procedures",
      item: `${siteUrl}/procedures`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pleural Aspiration in Delhi",
      item: pageUrl,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* FAQ Schema                                                                 */
/* -------------------------------------------------------------------------- */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,

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
};

/* -------------------------------------------------------------------------- */
/* Physician Schema                                                           */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Medical Clinic Schema                                                      */
/* -------------------------------------------------------------------------- */

const medicalClinicSchema = {
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

//   aggregateRating: {
//     "@type": "AggregateRating",
//     ratingValue: "4.9",
//     reviewCount: "350",
//   },
};

/* -------------------------------------------------------------------------- */
/* Page Component                                                             */
/* -------------------------------------------------------------------------- */

export default function PleuralAspirationPage() {
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

      {/* Medical Clinic Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinicSchema),
        }}
      />

      <PleuralAspirationDelhiPage />
    </>
  );
}