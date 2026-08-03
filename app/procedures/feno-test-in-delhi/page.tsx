import type { Metadata } from "next";
import PageContent from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/procedures/feno-test-in-delhi`;

export const metadata: Metadata = {
  title: "FeNO Test in Delhi | Airway Inflammation - Dr. Aggarwal",
  description:
    "FeNO (exhaled nitric oxide) testing in Delhi by Dr. Manish Aggarwal to detect airway inflammation & guide asthma treatment. Book your FeNO test today.",

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
      "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi",
  },

  openGraph: {
    type: "website",
    siteName: "Dr. Manish's Sleep & Pulmonology Clinic",
    title: "FeNO Test in Delhi | Airway Inflammation - Dr. Aggarwal",
    description:
      "FeNO (exhaled nitric oxide) testing in Delhi by Dr. Manish Aggarwal to detect airway inflammation & guide asthma treatment. Book your FeNO test today.",
    url: "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/feno-test-og.jpg`,
        width: 1200,
        height: 630,
        alt: "FeNO Test in Delhi - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FeNO Test in Delhi | Airway Inflammation - Dr. Aggarwal",
    description:
      "FeNO (exhaled nitric oxide) testing in Delhi by Dr. Manish Aggarwal to detect airway inflammation & guide asthma treatment. Book your FeNO test today.",
    images: [`${siteUrl}/images/feno-test-og.jpg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#webpage",
      "url": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi",
      "name": "FeNO Test in Delhi | Airway Inflammation - Dr. Aggarwal",
      "description": "FeNO (exhaled nitric oxide) testing in Delhi by Dr. Manish Aggarwal to detect airway inflammation & guide asthma treatment. Book your FeNO test today.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.drmanishaggarwal.com/#website"
      },
      "about": {
        "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#medicaltest"
      },
      "reviewedBy": {
        "@id": "https://www.drmanishaggarwal.com/#physician"
      },
      "mainEntity": {
        "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#faq"
      },
      "breadcrumb": {
        "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#breadcrumb"
      }
    },
    {
      "@type": "MedicalTest",
      "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#medicaltest",
      "name": "FeNO Testing in Delhi",
      "description": "The FeNO test measures fractional exhaled nitric oxide, a gas that rises with airway inflammation, helping confirm allergic asthma, guide inhaled steroid decisions, and monitor treatment response.",
      "bodyLocation": "Airways",
      "performer": {
        "@id": "https://www.drmanishaggarwal.com/#physician"
      },
      "preparation": [
        "Avoid eating, drinking, or smoking for at least an hour before",
        "Avoid vigorous exercise immediately before the test",
        "Disclose current inhaled steroid use to the clinic"
      ],
      "howPerformed": "The patient exhales slowly and steadily into a handheld FeNO device through a disposable mouthpiece at a controlled pace; the device displays a result within a minute, taking 5-10 minutes total.",
      "followup": "No recovery time is needed; results are available instantly and reviewed by Dr. Aggarwal the same day alongside other findings.",
      "alternateName": "Fractional Exhaled Nitric Oxide Test"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.drmanishaggarwal.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Procedures",
          "item": "https://www.drmanishaggarwal.com/procedures"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "FeNO Testing in Delhi",
          "item": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.drmanishaggarwal.com/procedures/feno-test-in-delhi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the FeNO test painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It simply involves breathing out slowly into a small handheld device. There is no needle, no sedation, and no discomfort involved."
          }
        },
        {
          "@type": "Question",
          "name": "How is FeNO different from spirometry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Spirometry measures airflow through your airways, while FeNO measures the level of airway inflammation directly. The two tests give different, complementary information about your lung health."
          }
        },
        {
          "@type": "Question",
          "name": "Can FeNO testing confirm I have asthma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FeNO testing supports an asthma diagnosis when used alongside your symptoms, history, and other tests such as spirometry. It is a strong piece of the puzzle rather than a standalone diagnostic test."
          }
        },
        {
          "@type": "Question",
          "name": "Will this test tell me if my inhaler is working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in many cases. A falling FeNO level over time on treatment often suggests that inflammation is being well controlled, while a persistently high level may suggest treatment needs to be adjusted."
          }
        },
        {
          "@type": "Question",
          "name": "Is this test suitable for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FeNO testing is generally well tolerated by children old enough to follow simple breathing instructions, and it is commonly used to help diagnose and monitor asthma in younger patients as well."
          }
        }
      ]
    },
    {
      "@type": "Physician",
      "@id": "https://www.drmanishaggarwal.com/#physician",
      "name": "Dr. Manish Aggarwal",
      "honorificPrefix": "Dr.",
      "jobTitle": "Principal Director, Department of Chest Disease & Interventional Pulmonology",
      "medicalSpecialty": "https://schema.org/Pulmonology",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "MBBS"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "MD (Tuberculosis & Chest Diseases)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "FRCP (Glasgow)"
        }
      ],
      "worksFor": [
        {
          "@type": "Hospital",
          "name": "Max Hospital"
        },
        {
          "@id": "https://www.drmanishaggarwal.com/#clinic"
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "European Respiratory Society (ERS)"
        },
        {
          "@type": "Organization",
          "name": "American College of Physicians (ACP)"
        },
        {
          "@type": "Organization",
          "name": "Society of Critical Care Medicine (SCCM, USA)"
        },
        {
          "@type": "Organization",
          "name": "European Society of Intensive Care Medicine (ESICM)"
        },
        {
          "@type": "Organization",
          "name": "Indian Chest Society"
        }
      ],
      "telephone": "+91-9899554095",
      "email": "mailto:Aggarmanish@gmail.com"
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drmanishaggarwal.com/#clinic",
      "name": "Dr. Manish Aggarwal - Chest & Interventional Pulmonology Clinic",
      "medicalSpecialty": "https://schema.org/Pulmonology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "JU-12A, Block G&JU, Ranikhet",
        "addressLocality": "Pitampura, Delhi",
        "postalCode": "110034",
        "addressCountry": "IN"
      },
      "telephone": "+91-9899554095",
      "email": "mailto:Aggarmanish@gmail.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "350"
      }
    }
  ]
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