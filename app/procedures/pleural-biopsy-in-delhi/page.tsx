import type { Metadata } from "next";
import PleuralBiopsyDelhiPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/pleural-biopsy-in-delhi`;

export const metadata: Metadata = {
  title: "Pleural Biopsy in Delhi | Dr. Manish Aggarwal",
  description:
    "Closed needle, image-guided & thoracoscopic pleural biopsy in Delhi by Dr. Manish Aggarwal for reliable pleural disease diagnosis. Book a consultation.",

  keywords: [
    "pleural biopsy",
    "pleural biopsy in Delhi",
    "pleural needle biopsy",
    "image-guided pleural biopsy",
    "thoracoscopic pleural biopsy",
    "pleural disease diagnosis",
    "pleural tuberculosis diagnosis",
    "pleural cancer diagnosis",
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
    siteName: "Dr. Manish's Sleep & Pulmonology Clinic",
    title: "Pleural Biopsy in Delhi | Dr. Manish Aggarwal",
    description:
      "Closed needle, image-guided & thoracoscopic pleural biopsy in Delhi by Dr. Manish Aggarwal for reliable pleural disease diagnosis. Book a consultation.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/pleural-biopsy-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Pleural Biopsy in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pleural Biopsy in Delhi | Dr. Manish Aggarwal",
    description:
      "Closed needle, image-guided and thoracoscopic pleural biopsy in Delhi by Dr. Manish Aggarwal for reliable pleural disease diagnosis.",
    images: [`${siteUrl}/images/pleural-biopsy-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Pleural Biopsy in Delhi | Dr. Manish Aggarwal",
  description:
    "Closed needle, image-guided & thoracoscopic pleural biopsy in Delhi by Dr. Manish Aggarwal for reliable pleural disease diagnosis. Book a consultation.",
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

  name: "Pleural Biopsy in Delhi",

  description:
    "A pleural biopsy collects a tissue sample from the pleura using closed needle, image-guided, or thoracoscopic techniques to confirm or rule out conditions such as tuberculosis and cancer when fluid testing is inconclusive.",

  bodyLocation: "Pleura",

  performer: {
    "@id": `${siteUrl}/#physician`,
  },

  preparation: [
    "Fasting instructions depend on whether sedation is planned",
    "Disclose all medications, especially blood thinners",
    "Disclose allergies to local anesthesia, sedatives, or latex",
    "Bring recent imaging and prior pleural fluid reports",
    "Blood tests including clotting studies usually done beforehand",
  ],

  howPerformed:
    "The biopsy site is numbed with local anesthesia, with or without sedation; using ultrasound, CT, or thoracoscopic guidance, a needle or forceps collects tissue samples, typically taking 20-60 minutes.",

  followup:
    "Patients are monitored briefly, sometimes with a chest X-ray; needle biopsy patients often go home the same day, while thoracoscopic biopsy may require a short hospital stay.",

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
      name: "Pleural Biopsy in Delhi",
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
      name: "Why can't fluid testing alone diagnose my condition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fluid analysis can miss the diagnosis in a meaningful number of cases, particularly for pleural tuberculosis and certain cancers, which is why a tissue sample is often needed to reach a definitive answer.",
      },
    },
    {
      "@type": "Question",
      name: "Which biopsy method is the most accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thoracoscopic biopsy, performed under direct vision, generally offers the highest diagnostic accuracy because the doctor can target visibly abnormal areas rather than sampling blindly. Dr. Aggarwal will advise which method suits your case.",
      },
    },
    {
      "@type": "Question",
      name: "Is a pleural biopsy painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The area is numbed with local anesthesia before the biopsy, so most patients feel pressure rather than sharp pain. Mild soreness afterward is common and manageable.",
      },
    },
    {
      "@type": "Question",
      name: "Will I need to be admitted to the hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple needle biopsy is often done as a day procedure, while a thoracoscopic biopsy may require a short hospital stay, particularly if a chest tube is placed.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I get my results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pathology results generally take a few days to a couple of weeks, depending on the complexity of the testing required, including special stains or cultures for infections such as tuberculosis.",
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

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "350",
  },
};

export default function PleuralBiopsyPageRoute() {
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

      <PleuralBiopsyDelhiPage />
    </>
  );
}