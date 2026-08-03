import type { Metadata } from "next";
import SpirometryDelhiPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/spirometry-test-in-delhi`;

export const metadata: Metadata = {
  title: "Spirometry Test in Delhi | Dr. Manish Aggarwal",
  description:
    "Quick, painless spirometry testing in Delhi by Dr. Manish Aggarwal to diagnose asthma, COPD & lung conditions. Same-day results. Book your test today.",

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
    canonical: "https://www.drmanishaggarwal.com/procedures/spirometry-test-in-delhi",
  },

  openGraph: {
    type: "website",
    siteName: "Dr. Manish's Sleep & Pulmonology Clinic",
    title: "Spirometry Test in Delhi | Dr. Manish Aggarwal",
    description:
      "Quick, painless spirometry testing in Delhi by Dr. Manish Aggarwal to diagnose asthma, COPD & lung conditions. Same-day results. Book your test today.",
    url: "https://www.drmanishaggarwal.com/procedures/spirometry-test-in-delhi",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/spirometry-test-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Spirometry Test in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spirometry Test in Delhi | Dr. Manish Aggarwal",
    description:
      "Quick, painless spirometry testing in Delhi by Dr. Manish Aggarwal to diagnose asthma, COPD & lung conditions. Same-day results. Book your test today.",
    images: [`${siteUrl}/images/spirometry-test-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Spirometry Test in Delhi | Dr. Manish Aggarwal",
  description:
    "Quick, painless spirometry testing in Delhi by Dr. Manish Aggarwal to diagnose asthma, COPD & lung conditions. Same-day results. Book your test today.",
  inLanguage: "en-IN",

  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },

  about: {
    "@id": `${pageUrl}#medicaltest`,
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

const medicalTestSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  "@id": `${pageUrl}#medicaltest`,
  name: "Spirometry in Delhi",
  description:
    "Spirometry is a non-invasive breathing test measuring forced vital capacity (FVC) and forced expiratory volume (FEV1) to assess airway narrowing and lung capacity, commonly used to diagnose asthma and COPD.",
  bodyLocation: "Lungs",
  performer: {
    "@id": `${siteUrl}/#physician`,
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
      name: "Spirometry in Delhi",
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

export default function page() {
  return (
    <>
      {/* Medical Web Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />

      {/* Medical Test Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalTestSchema),
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

      <SpirometryDelhiPage />
    </>
  );
}