import type { Metadata } from "next";
import ActigraphyTestingPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/actigraphy";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Actigraphy Sleep Test in Delhi | Dr. Manish Aggarwal";
const description =
  "Struggling with irregular sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist, uses actigraphy to track your natural sleep-wake pattern over days to weeks.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "actigraphy",
    "wrist actigraphy",
    "sleep monitoring test",
    "circadian rhythm test",
    "insomnia evaluation",
    "shift work sleep disorder test",
    "sleep specialist Delhi",
    "Dr. Manish Aggarwal",
  ],
  authors: [{ name: "Dr. Manish Aggarwal" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: FULL_URL,
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
        alt: "Actigraphy Sleep Test - Dr. Manish Aggarwal",
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
      name: "Actigraphy: Sleep Monitoring Test for Diagnosing Sleep Disorders",
      description:
        "Learn how actigraphy works, why it is recommended, and what it can help diagnose, including insomnia and circadian rhythm sleep-wake disorders, by Dr. Manish Aggarwal.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      mainContentOfPage: {
        "@type": "WebPageElement",
        about: [
          {
            "@id": `${FULL_URL}#actigraphy-test`,
          },
        ],
      },
      lastReviewed: "2026-07-30",
      reviewedBy: {
        "@id": `${BASE_URL}/#physician`,
      },
      author: {
        "@id": `${BASE_URL}/#physician`,
      },
      publisher: {
        "@id": `${BASE_URL}/#clinic`,
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
      "@id": `${FULL_URL}#actigraphy-test`,
      name: "Actigraphy",
      alternateName: ["Wrist Actigraphy", "Actigraphy Sleep Test"],
      usedToDiagnose: [
        {
          "@type": "MedicalCondition",
          name: "Insomnia",
        },
        {
          "@type": "MedicalCondition",
          name: "Circadian Rhythm Sleep-Wake Disorder",
        },
        {
          "@type": "MedicalCondition",
          name: "Shift Work Sleep Disorder",
        },
      ],
      howPerformed:
        "A small wrist-worn actigraphy device (similar to a smartwatch) is worn continuously for 1 to 2 weeks to continuously record movement and light exposure, mapping out rest and activity cycles over extended timeframes.",
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#physician`,
      name: "Dr. Manish Aggarwal",
      honorificPrefix: "Dr.",
      jobTitle:
        "Principal Director, Department of Chest Disease & Interventional Pulmonology",
      medicalSpecialty: [
        "https://schema.org/Pulmonology",
        "https://schema.org/SleepMedicine",
      ],
      url: `${BASE_URL}/about-us`,
      worksFor: [
        {
          "@type": "Hospital",
          name: "Max Hospital",
        },
        {
          "@id": `${BASE_URL}/#clinic`,
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
          name: "Sleep Investigations",
          item: `${BASE_URL}/sleep-investigations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Actigraphy",
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
          name: "What is Actigraphy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Actigraphy is a sleep investigation that uses a small wrist-worn device to record your movement and activity over several days, helping your doctor understand your natural sleep-wake pattern.",
          },
        },
        {
          "@type": "Question",
          name: "Is an Actigraphy test painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Actigraphy is completely painless and non-invasive. The device is worn like a watch and does not involve needles, electrodes, or any uncomfortable procedures.",
          },
        },
        {
          "@type": "Question",
          name: "How long do I need to wear the Actigraphy device?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This varies depending on what your doctor is assessing, but it is typically worn continuously for one to two weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Can I shower while wearing it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the specific device used. Many actigraphy devices are water-resistant, but you should always follow your doctor's or sleep centre's specific instructions regarding water exposure.",
          },
        },
        {
          "@type": "Question",
          name: "What sleep disorders can Actigraphy detect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Actigraphy is commonly used to help evaluate insomnia, circadian rhythm sleep-wake disorders such as delayed or advanced sleep phase disorder, shift work sleep disorder, and general sleep pattern irregularities. It is not used to diagnose sleep apnea on its own.",
          },
        },
        {
          "@type": "Question",
          name: "Do I still need a sleep study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your symptoms. Some patients only need actigraphy, while others may also require a Polysomnography or MSLT for a complete evaluation. Your sleep specialist will determine what is right for you.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is Actigraphy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Actigraphy provides a reliable estimate of sleep-wake patterns based on movement and is a well-established tool in sleep medicine. However, it is not a substitute for a full sleep study when conditions such as sleep apnea are suspected, and results are always interpreted alongside symptoms and clinical history.",
          },
        },
      ],
    },
  ],
};

export default function ActigraphyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <ActigraphyTestingPage />
    </>
  );
}
