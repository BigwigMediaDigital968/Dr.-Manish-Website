import type { Metadata } from "next";
import TransbronchialLungBiopsyDelhiPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/transbronchial-lung-biopsy-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Transbronchial Lung Biopsy in Delhi | Dr. Aggarwal";
const description =
  "Transbronchial lung biopsy & cryobiopsy in Delhi by Dr. Manish Aggarwal for accurate ILD & lung disease diagnosis. 24+ years' experience.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "transbronchial lung biopsy",
    "transbronchial lung biopsy in Delhi",
    "lung biopsy in Delhi",
    "transbronchial cryobiopsy",
    "lung cryobiopsy",
    "TBLB",
    "interstitial lung disease diagnosis",
    "ILD diagnosis",
    "lung disease diagnosis",
    "bronchoscopy",
    "lung biopsy procedure",
    "Dr. Manish Aggarwal",
    "interventional pulmonologist Delhi",
    "pulmonologist Delhi",
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
      name: "Transbronchial Lung Biopsy in Delhi",
      description:
        "A transbronchial lung biopsy uses a bronchoscope with forceps or a cryoprobe to obtain small samples of lung tissue from deep within the lungs, used to diagnose interstitial lung disease, sarcoidosis, and other lung conditions.",
      bodyLocation: "Lungs",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "No food or drink for 6-8 hours before the procedure",
        "Disclose all medications, especially blood thinners and diabetes medication",
        "Disclose allergies to sedatives, anesthesia, or latex",
        "Bring recent CT scan reports and films",
        "Arrange transport home, as sedation affects driving",
      ],
      howPerformed:
        "Under sedation, the bronchoscope is guided into the target lung area, often with fluoroscopy guidance, and forceps or a cryoprobe collect tissue samples; the procedure typically takes 30-60 minutes.",
      followup:
        "Patients are monitored for a few hours, with a chest X-ray to check for complications; mild sore throat, cough, or blood-tinged sputum is common for a day or two.",
      alternateName: ["TBLB", "Transbronchial Cryobiopsy"],
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
          name: "Transbronchial Lung Biopsy in Delhi",
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
          name: "What is a transbronchial lung biopsy used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is used to obtain lung tissue samples to diagnose conditions such as interstitial lung disease, sarcoidosis, unexplained lung infiltrates, and certain infections or cancers.",
          },
        },
        {
          "@type": "Question",
          name: "Is transbronchial biopsy the same as a regular bronchoscopy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is performed using a bronchoscope, but unlike a standard bronchoscopy, it involves sampling tissue from deep within the lung rather than just examining the airway lining.",
          },
        },
        {
          "@type": "Question",
          name: "What is transbronchial cryobiopsy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryobiopsy is a specialized version of the procedure that uses a freezing probe to collect larger, better quality lung tissue samples, often preferred for diagnosing interstitial lung disease.",
          },
        },
        {
          "@type": "Question",
          name: "Is this procedure risky?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It carries a slightly higher risk profile than a standard bronchoscopy, mainly related to bleeding and a small risk of a collapsed lung, which is why patients are monitored closely and a chest X-ray is usually done afterward.",
          },
        },
        {
          "@type": "Question",
          name: "How soon will I get my results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basic findings may be discussed soon after the procedure, while detailed pathology results typically take a few days to a couple of weeks.",
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

export default function TransbronchialLungBiopsyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <TransbronchialLungBiopsyDelhiPage />
      </main>
    </>
  );
}
