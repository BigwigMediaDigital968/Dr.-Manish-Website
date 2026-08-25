import type { Metadata } from "next";
import EbusLungDiagnosisDelhiPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/ebus-endobronchial-ultrasound-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "EBUS in Delhi | Endobronchial Ultrasound - Dr. Aggarwal";
const description =
  "EBUS (Endobronchial Ultrasound) in Delhi by Dr. Manish Aggarwal — 3,000+ EBUS procedures for accurate lung cancer staging & lymph node diagnosis. Book now.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "EBUS in Delhi",
    "Endobronchial Ultrasound Delhi",
    "EBUS-TBNA",
    "EBUS procedure",
    "EBUS for lung cancer",
    "lung cancer staging",
    "mediastinal lymph node biopsy",
    "EBUS specialist Delhi",
    "Interventional Pulmonologist Delhi",
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
      name: "EBUS (Endobronchial Ultrasound) in Delhi",
      description:
        "EBUS combines bronchoscopy with real-time ultrasound imaging to visualize and sample lymph nodes and masses near the airways via fine needle aspiration (EBUS-TBNA), commonly used for lung cancer staging.",
      bodyLocation: "Mediastinal lymph nodes, Lungs",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "No food or drink for 6-8 hours before the procedure",
        "Disclose all medications, especially blood thinners and diabetes medication",
        "Disclose allergies to sedatives, anesthesia, or latex",
        "Bring recent CT/PET scan reports and films",
        "Arrange transport home, as sedation affects driving",
      ],
      howPerformed:
        "Under sedation, the EBUS scope is guided through the mouth into the airways; using real-time ultrasound guidance, a fine needle samples target lymph nodes or masses (EBUS-TBNA), typically taking 30-60 minutes.",
      followup:
        "Patients are monitored in recovery for 1-2 hours until sedation wears off; mild sore throat or cough is common and typically resolves within a day or two.",
      alternateName: "EBUS-TBNA",
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
          item: BASE_URL,
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
          name: "EBUS (Endobronchial Ultrasound) in Delhi",
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
          name: "When is EBUS required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EBUS is typically recommended for lung cancer staging, sampling enlarged mediastinal lymph nodes, and diagnosing conditions such as sarcoidosis or TB lymphadenitis.",
          },
        },
        {
          "@type": "Question",
          name: "Is EBUS the same as bronchoscopy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EBUS is a specialized form of bronchoscopy that adds ultrasound guidance, allowing sampling of lymph nodes and masses located outside the airway wall — something a standard bronchoscope cannot do.",
          },
        },
        {
          "@type": "Question",
          name: "Is EBUS painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The procedure is performed under sedation, so discomfort is minimized. A mild sore throat afterward is common.",
          },
        },
        {
          "@type": "Question",
          name: "Can EBUS avoid the need for surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases, yes. EBUS-TBNA can provide an accurate diagnosis and staging without the need for a more invasive surgical procedure like mediastinoscopy.",
          },
        },
        {
          "@type": "Question",
          name: "How soon will I get my results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic findings are often discussed on the same day, while lab and any molecular/genetic testing results may take a few days to a couple of weeks.",
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

export default function EBUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <EbusLungDiagnosisDelhiPage />
      </main>
    </>
  );
}
