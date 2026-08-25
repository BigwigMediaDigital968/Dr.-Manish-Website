import type { Metadata } from "next";
import PleuralBiopsyDelhiPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/pleural-biopsy-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Pleural Biopsy in Delhi | Dr. Manish Aggarwal";
const description =
  "Closed needle, image-guided & thoracoscopic pleural biopsy in Delhi by Dr. Manish Aggarwal for reliable pleural disease diagnosis. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
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
      name: "Pleural Biopsy in Delhi",
      description:
        "A pleural biopsy collects a tissue sample from the pleura using closed needle, image-guided, or thoracoscopic techniques to confirm or rule out conditions such as tuberculosis and cancer when fluid testing is inconclusive.",
      bodyLocation: "Pleura",
      performer: {
        "@id": `${BASE_URL}/#physician`,
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
          name: "Pleural Biopsy in Delhi",
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

export default function PleuralBiopsyPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <PleuralBiopsyDelhiPage />
      </main>
    </>
  );
}
