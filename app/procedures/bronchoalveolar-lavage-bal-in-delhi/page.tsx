import type { Metadata } from "next";
import BronchoalveolarLavageDelhiPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/bronchoalveolar-lavage-bal-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "BAL (Bronchoalveolar Lavage) in Delhi | Dr. Aggarwal";
const description =
  "Bronchoalveolar lavage (BAL) in Delhi by Dr. Manish Aggarwal for precise diagnosis of lung infections & ILD. 10,000+ bronchoscopic procedures. Book now.";

export const metadata: Metadata = {
  title,
  description,
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
      name: "BAL (Bronchoalveolar Lavage) in Delhi",
      description:
        "BAL is a bronchoscopic procedure in which sterile fluid is instilled into and suctioned back from a targeted lung area to collect cells, proteins, and microorganisms for laboratory analysis, used to diagnose infections and inflammatory lung conditions.",
      bodyLocation: "Lungs, Alveoli",
      performer: {
        "@id": `${BASE_URL}/#physician`,
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
          name: "BAL (Bronchoalveolar Lavage) in Delhi",
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

export default function BronchoalveolarLavagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <BronchoalveolarLavageDelhiPage />
      </main>
    </>
  );
}
