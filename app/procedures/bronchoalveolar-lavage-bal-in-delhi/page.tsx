import type { Metadata } from "next";
import BronchoalveolarLavageDelhiPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/bronchoalveolar-lavage-bal-in-delhi`;

export const metadata: Metadata = {
  title: "BAL (Bronchoalveolar Lavage) in Delhi | Dr. Aggarwal",

  description:
    "Bronchoalveolar lavage (BAL) in Delhi by Dr. Manish Aggarwal for precise diagnosis of lung infections & ILD. 10,000+ bronchoscopic procedures. Book now.",

  keywords: [
    "bronchoalveolar lavage",
    "BAL in Delhi",
    "BAL bronchoscopy",
    "bronchoalveolar lavage in Delhi",
    "BAL procedure",
    "BAL test",
    "lung infection diagnosis",
    "ILD diagnosis",
    "bronchoscopy in Delhi",
    "lung diagnostic procedures",
    "Dr. Manish Aggarwal",
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
    title: "BAL (Bronchoalveolar Lavage) in Delhi | Dr. Aggarwal",
    description:
      "Bronchoalveolar lavage (BAL) in Delhi by Dr. Manish Aggarwal for precise diagnosis of lung infections & ILD. 10,000+ bronchoscopic procedures. Book now.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/bronchoalveolar-lavage-bal-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Bronchoalveolar Lavage (BAL) in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BAL (Bronchoalveolar Lavage) in Delhi | Dr. Aggarwal",
    description:
      "Bronchoalveolar lavage (BAL) in Delhi by Dr. Manish Aggarwal for precise diagnosis of lung infections & ILD. 10,000+ bronchoscopic procedures. Book now.",
    images: [`${siteUrl}/images/bronchoalveolar-lavage-bal-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  name: "BAL (Bronchoalveolar Lavage) in Delhi | Dr. Aggarwal",
  url: pageUrl,
  description:
    "Bronchoalveolar lavage (BAL) in Delhi by Dr. Manish Aggarwal for precise diagnosis of lung infections & ILD. 10,000+ bronchoscopic procedures. Book now.",
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

  name: "BAL (Bronchoalveolar Lavage) in Delhi",

  description:
    "BAL is a bronchoscopic procedure in which sterile fluid is instilled into and suctioned back from a targeted lung area to collect cells, proteins, and microorganisms for laboratory analysis, used to diagnose infections and inflammatory lung conditions.",

  bodyLocation: "Lungs, Alveoli",

  performer: {
    "@id": `${siteUrl}/#physician`,
  },

  preparation: [
    "No food or drink for 6-8 hours before the procedure",
    "Disclose all medications, especially blood thinners and diabetes medication",
    "Disclose allergies to sedatives, anesthesia, or latex",
    "Bring recent CT scans and prior culture or blood test results",
    "Arrange transport home, as sedation affects driving",
  ],

  howPerformed:
    "Under sedation, the bronchoscope is guided into the targeted lung segment; sterile saline is instilled and gently suctioned back for laboratory testing, typically taking 20-40 minutes.",

  followup:
    "Patients are monitored in recovery for 1-2 hours; mild sore throat, cough, or transient fever is common and typically resolves within a day or two.",

  alternateName: "Bronchoalveolar Lavage",

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
      name: "BAL (Bronchoalveolar Lavage) in Delhi",
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
      name: "What is BAL used to diagnose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BAL is primarily used to diagnose lung infections, including bacterial, fungal, viral, and tuberculous infections, and to support diagnosis of interstitial lung disease and other inflammatory conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is BAL the same as a bronchoscopy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BAL is performed as part of a bronchoscopy. While a standard bronchoscopy examines the airway lining, BAL specifically involves washing and collecting fluid from the small airways and alveoli for laboratory testing.",
      },
    },
    {
      "@type": "Question",
      name: "Is BAL painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The procedure is performed under sedation, so discomfort is minimal. A mild sore throat or cough afterward is common.",
      },
    },
    {
      "@type": "Question",
      name: "Can BAL be combined with a biopsy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BAL is frequently performed together with a transbronchial biopsy or EBUS-TBNA in the same session, depending on what is needed for an accurate diagnosis.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I get my results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic culture results may take a few days, while more specialized tests such as certain fungal or molecular tests can take longer, typically communicated by the clinic once available.",
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

export default function BronchoalveolarLavagePage() {
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

      <BronchoalveolarLavageDelhiPage />
    </>
  );
}