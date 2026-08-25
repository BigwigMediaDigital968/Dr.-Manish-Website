import type { Metadata } from "next";
import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/procedures/feno-test-in-delhi";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "FeNO Test in Delhi | Airway Inflammation - Dr. Aggarwal";
const description =
  "FeNO (exhaled nitric oxide) testing in Delhi by Dr. Manish Aggarwal to detect airway inflammation & guide asthma treatment. Book your FeNO test today.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "FeNO test Delhi",
    "fractional exhaled nitric oxide test",
    "airway inflammation test",
    "asthma diagnosis Delhi",
    "asthma treatment Delhi",
    "pulmonologist Pitampura",
    "interventional pulmonology Delhi",
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
        height: 75,
        alt: "FeNO Test in Delhi - Dr. Manish Aggarwal",
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

const structuredData = {
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
        "@id": `${FULL_URL}#medicaltest`,
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
      "@type": "MedicalTest",
      "@id": `${FULL_URL}#medicaltest`,
      name: "FeNO Testing in Delhi",
      description:
        "The FeNO test measures fractional exhaled nitric oxide, a gas that rises with airway inflammation, helping confirm allergic asthma, guide inhaled steroid decisions, and monitor treatment response.",
      bodyLocation: "Airways",
      performer: {
        "@id": `${BASE_URL}/#physician`,
      },
      preparation: [
        "Avoid eating, drinking, or smoking for at least an hour before",
        "Avoid vigorous exercise immediately before the test",
        "Disclose current inhaled steroid use to the clinic",
      ],
      howPerformed:
        "The patient exhales slowly and steadily into a handheld FeNO device through a disposable mouthpiece at a controlled pace; the device displays a result within a minute, taking 5-10 minutes total.",
      followup:
        "No recovery time is needed; results are available instantly and reviewed by Dr. Aggarwal the same day alongside other findings.",
      alternateName: "Fractional Exhaled Nitric Oxide Test",
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
          name: "FeNO Testing in Delhi",
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
          name: "Is the FeNO test painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It simply involves breathing out slowly into a small handheld device. There is no needle, no sedation, and no discomfort involved.",
          },
        },
        {
          "@type": "Question",
          name: "How is FeNO different from spirometry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spirometry measures airflow through your airways, while FeNO measures the level of airway inflammation directly. The two tests give different, complementary information about your lung health.",
          },
        },
        {
          "@type": "Question",
          name: "Can FeNO testing confirm I have asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FeNO testing supports an asthma diagnosis when used alongside your symptoms, history, and other tests such as spirometry. It is a strong piece of the puzzle rather than a standalone diagnostic test.",
          },
        },
        {
          "@type": "Question",
          name: "Will this test tell me if my inhaler is working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases. A falling FeNO level over time on treatment often suggests that inflammation is being well controlled, while a persistently high level may suggest treatment needs to be adjusted.",
          },
        },
        {
          "@type": "Question",
          name: "Is this test suitable for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, FeNO testing is generally well tolerated by children old enough to follow simple breathing instructions, and it is commonly used to help diagnose and monitor asthma in younger patients as well.",
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

export default function FeNOTestPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
        <PageContent />
      </main>
    </>
  );
}
