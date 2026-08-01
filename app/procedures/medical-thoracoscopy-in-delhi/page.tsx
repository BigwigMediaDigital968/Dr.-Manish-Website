import type { Metadata } from "next";
import MedicalThoracoscopyDelhiPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/medical-thoracoscopy-in-delhi`;

export const metadata: Metadata = {
  title: "Medical Thoracoscopy in Delhi | Dr. Manish Aggarwal",
  description:
    "Medical thoracoscopy (pleuroscopy) in Delhi by Dr. Manish Aggarwal for direct pleural visualization, biopsy & pleurodesis. 24+ years' experience. Book now.",

  keywords: [
    "medical thoracoscopy",
    "thoracoscopy in Delhi",
    "pleuroscopy",
    "medical pleuroscopy",
    "thoracoscopy procedure",
    "pleural biopsy",
    "pleurodesis",
    "pleural effusion treatment",
    "pleural disease diagnosis",
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
    title: "Medical Thoracoscopy in Delhi | Dr. Manish Aggarwal",
    description:
      "Medical thoracoscopy (pleuroscopy) in Delhi by Dr. Manish Aggarwal for direct pleural visualization, biopsy & pleurodesis. 24+ years' experience. Book now.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/medical-thoracoscopy-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Medical Thoracoscopy - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Medical Thoracoscopy in Delhi | Dr. Manish Aggarwal",
    description:
      "Medical thoracoscopy (pleuroscopy) in Delhi by Dr. Manish Aggarwal for direct pleural visualization, biopsy and pleurodesis.",
    images: [`${siteUrl}/images/medical-thoracoscopy-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Medical Thoracoscopy in Delhi | Dr. Manish Aggarwal",
  description:
    "Medical thoracoscopy (pleuroscopy) in Delhi by Dr. Manish Aggarwal for direct pleural visualization, biopsy & pleurodesis. 24+ years' experience. Book now.",
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

  name: "Medical Thoracoscopy in Delhi",

  description:
    "Medical thoracoscopy uses a thin camera (thoracoscope) to directly visualize the pleural space, take targeted biopsies, drain fluid completely, and perform pleurodesis in the same session for complex pleural conditions.",

  bodyLocation: "Pleural space",

  performer: {
    "@id": `${siteUrl}/#physician`,
  },

  preparation: [
    "Fasting for 6-8 hours before the procedure, as sedation is used",
    "Disclose all medications, especially blood thinners",
    "Disclose allergies to sedatives, local anesthesia, or latex",
    "Bring recent chest X-ray, CT scan, and prior pleural fluid reports",
    "Arrange transport home; basic blood tests are usually done beforehand",
  ],

  howPerformed:
    "Positioned on the side under sedation and local anesthesia, a small incision allows the thoracoscope into the pleural space to examine, drain fluid, biopsy, and perform pleurodesis if needed, typically taking 45-90 minutes.",

  followup:
    "Most patients stay in hospital one to two days while a chest tube drains and the lung re-expands, monitored with regular chest X-rays.",

  alternateName: "Pleuroscopy",

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
      name: "Medical Thoracoscopy in Delhi",
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
      name: "How is medical thoracoscopy different from a simple pleural tap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A pleural tap removes fluid blindly using a needle, while medical thoracoscopy allows the doctor to directly see the pleural surface, take targeted biopsies, and treat the problem, such as through pleurodesis, in the same session.",
      },
    },
    {
      "@type": "Question",
      name: "Why would I need thoracoscopy instead of just repeating a fluid test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If earlier fluid analysis has not given a clear diagnosis, direct visualization and targeted biopsy through thoracoscopy offer a much higher chance of finding the underlying cause, particularly for cancer or tuberculosis.",
      },
    },
    {
      "@type": "Question",
      name: "What is pleurodesis, and will I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pleurodesis is a treatment that seals the pleural space to prevent fluid from recurring, often used for recurrent malignant effusions. Whether you need it depends on your diagnosis and how likely the fluid is to return, which Dr. Aggarwal will discuss with you.",
      },
    },
    {
      "@type": "Question",
      name: "How long will I be in the hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients stay for one to two days, mainly to allow the chest tube placed during the procedure to complete drainage and the lung to fully re-expand.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a major surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Medical thoracoscopy is a minimally invasive procedure performed through a small incision under sedation, distinct from surgical thoracoscopy (VATS), which is done under general anesthesia in an operating theatre.",
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

export default function MedicalThoracoscopyPage() {
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

      <MedicalThoracoscopyDelhiPage />
    </>
  );
}