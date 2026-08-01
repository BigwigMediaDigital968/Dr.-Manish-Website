import type { Metadata } from "next";
import BronchoscopyDelhiPageContent from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/bronchoscopy-in-delhi`;

export const metadata: Metadata = {
  title: "Bronchoscopy in Delhi | Dr. Manish Aggarwal",
  description:
    "Advanced bronchoscopy in Delhi by Dr. Manish Aggarwal — 24+ years' experience, 10,000+ procedures performed. Accurate lung diagnosis & care. Book now.",

  keywords: [
    "bronchoscopy in Delhi",
    "bronchoscopy",
    "flexible bronchoscopy",
    "rigid bronchoscopy",
    "EBUS",
    "lung diagnosis",
    "interventional pulmonology",
    "bronchoscopy specialist Delhi",
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
    siteName: "Dr. Manish Aggarwal - Chest & Interventional Pulmonology Clinic",
    title: "Bronchoscopy in Delhi | Dr. Manish Aggarwal",
    description:
      "Advanced bronchoscopy in Delhi by Dr. Manish Aggarwal — 24+ years' experience, 10,000+ procedures performed. Accurate lung diagnosis & care. Book now.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/bronchoscopy-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Bronchoscopy in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bronchoscopy in Delhi | Dr. Manish Aggarwal",
    description:
      "Advanced bronchoscopy in Delhi by Dr. Manish Aggarwal — 24+ years' experience, 10,000+ procedures performed. Accurate lung diagnosis & care. Book now.",
    images: [`${siteUrl}/images/bronchoscopy-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Bronchoscopy in Delhi | Dr. Manish Aggarwal",
  description:
    "Advanced bronchoscopy in Delhi by Dr. Manish Aggarwal — 24+ years' experience, 10,000+ procedures performed. Accurate lung diagnosis & care. Book now.",
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
  name: "Bronchoscopy in Delhi",
  description:
    "A bronchoscopy is a procedure using a thin, flexible bronchoscope passed through the nose or mouth to examine the trachea and bronchi, collect tissue or fluid samples, remove obstructions, or place airway stents.",
  bodyLocation: "Lungs, Trachea, Bronchi",
  performer: {
    "@id": `${siteUrl}/#physician`,
  },
  preparation: [
    "No food or drink for 6-8 hours before the procedure",
    "Disclose all medications, especially blood thinners and diabetes medication",
    "Disclose allergies to sedatives, anesthesia, or latex",
    "Arrange transport home, as sedation affects driving",
  ],
  howPerformed:
    "Performed under sedation and local anesthesia (or general anesthesia for rigid bronchoscopy), the bronchoscope is guided through the nose or mouth into the airways to examine the lining and collect samples or perform treatment, typically taking 30-60 minutes.",
  followup:
    "Patients are monitored in recovery for 1-2 hours until sedation wears off; mild sore throat or cough is common and typically resolves within a day or two.",
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
      name: "Bronchoscopy in Delhi",
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
      name: "Do you perform bronchoscopy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Manish Aggarwal has performed 10,000+ bronchoscopies, including flexible, rigid, and EBUS-guided procedures, at Max Hospital and his Pitampura clinic.",
      },
    },
    {
      "@type": "Question",
      name: "Is bronchoscopy used to diagnose TB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, bronchoscopy is often used to collect airway samples for TB diagnosis when standard sputum tests are inconclusive, including for drug-resistant TB.",
      },
    },
    {
      "@type": "Question",
      name: "When is EBUS required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EBUS is typically used for lung cancer staging, sampling enlarged lymph nodes, and diagnosing conditions like sarcoidosis.",
      },
    },
    {
      "@type": "Question",
      name: "Is bronchoscopy painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The procedure is performed under sedation and local anesthesia (or general anesthesia for rigid bronchoscopy), so discomfort is minimized. Mild throat soreness afterward is common.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I get my results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timing depends on the type of sample collected — basic findings are often discussed on the same day, while lab/biopsy results may take a few days.",
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

export default function BronchoscopyInDelhiPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicSchema),
        }}
      />

      <BronchoscopyDelhiPageContent />
    </>
  );
}
