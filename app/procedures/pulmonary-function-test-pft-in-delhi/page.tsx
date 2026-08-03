import type { Metadata } from "next";
import PageContent from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/pulmonary-function-test-pft-in-delhi`;

export const metadata: Metadata = {
  title: "Pulmonary Function Test (PFT) in Delhi | Dr. Aggarwal",
  description:
    "Complete pulmonary function test (PFT) in Delhi by Dr. Manish Aggarwal — spirometry, lung volumes & DLCO. Same-day results. Book your PFT today.",

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
    canonical:
      "https://www.drmanishaggarwal.com/procedures/pulmonary-function-test-pft-in-delhi",
  },

  openGraph: {
    type: "website",
    siteName: "Dr. Manish's Sleep & Pulmonology Clinic",
    title: "Pulmonary Function Test (PFT) in Delhi | Dr. Aggarwal",
    description:
      "Complete pulmonary function test (PFT) in Delhi by Dr. Manish Aggarwal — spirometry, lung volumes & DLCO. Same-day results. Book your PFT today.",
    url: "https://www.drmanishaggarwal.com/procedures/pulmonary-function-test-pft-in-delhi",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/pulmonary-function-test-pft-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Pulmonary Function Test (PFT) in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pulmonary Function Test (PFT) in Delhi | Dr. Aggarwal",
    description:
      "Complete pulmonary function test (PFT) in Delhi by Dr. Manish Aggarwal — spirometry, lung volumes & DLCO. Same-day results. Book your PFT today.",
    images: [`${siteUrl}/images/pulmonary-function-test-pft-og.jpg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Pulmonary Function Test (PFT) in Delhi | Dr. Aggarwal",
      description:
        "Complete pulmonary function test (PFT) in Delhi by Dr. Manish Aggarwal — spirometry, lung volumes & DLCO. Same-day results. Book your PFT today.",
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
    },
    {
      "@type": "MedicalTest",
      "@id": `${pageUrl}#medicaltest`,
      name: "Pulmonary Function Test (PFT) in Delhi",
      description:
        "A pulmonary function test (PFT) combines spirometry, lung volume measurement, and diffusion capacity (DLCO) testing to give a complete picture of airflow, lung capacity, and gas exchange efficiency.",
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
        "The test includes spirometry (forceful breathing into a mouthpiece), lung volume measurement (often in a body plethysmograph booth), and a diffusion capacity test using a harmless gas mixture; the full panel takes 30-45 minutes.",
      followup:
        "No recovery time is needed; Dr. Aggarwal reviews the complete results alongside symptoms, history, and imaging to explain findings and next steps.",
      alternateName: "PFT",
    },
    {
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
          name: "Pulmonary Function Test (PFT) in Delhi",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How is a PFT different from spirometry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spirometry is one part of a PFT, measuring airflow. A complete PFT can also include lung volume measurement and diffusion capacity testing, giving a fuller picture of both how your lungs move air and how well they exchange oxygen.",
          },
        },
        {
          "@type": "Question",
          name: "Is a pulmonary function test painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It involves breathing into a mouthpiece and, for some components, sitting in a small testing booth or breathing a harmless gas mixture. There is no needle or sedation involved.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a full PFT take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A complete test with all components usually takes 30 to 45 minutes, depending on which parts are required for your evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need this test more than once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many chronic lung conditions are monitored with periodic PFTs to track progression and response to treatment. How often depends on your specific diagnosis, as advised by Dr. Aggarwal.",
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
      ],
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: "Dr. Manish Aggarwal",
      honorificPrefix: "Dr.",
      jobTitle: "Principal Director, Department of Chest Disease & Interventional Pulmonology",
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
    },
    {
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
    },
  ],
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <PageContent />
    </>
  );
}