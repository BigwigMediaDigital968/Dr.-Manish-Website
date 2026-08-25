import type { Metadata } from "next";
import DaytimeSleepinessTestingPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/mslt-mwt-sleep-test";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "MSLT & MWT Sleep Testing in Delhi | Dr. Manish Aggarwal";
const description =
  "Sleepy all day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, offers MSLT and MWT testing to diagnose the cause. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "MSLT test",
    "MWT test",
    "multiple sleep latency test",
    "maintenance of wakefulness test",
    "narcolepsy diagnosis",
    "excessive daytime sleepiness test",
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
        alt: "MSLT and MWT Sleep Testing - Dr. Manish Aggarwal",
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
      name: "MSLT & MWT: Sleep Tests for Diagnosing Excessive Daytime Sleepiness",
      description:
        "A guide to the Multiple Sleep Latency Test (MSLT) and Maintenance of Wakefulness Test (MWT) — what they measure, who needs them, how to prepare, and what the results mean, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
            "@id": `${FULL_URL}#mslt-test`,
          },
          {
            "@id": `${FULL_URL}#mwt-test`,
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
      "@id": `${FULL_URL}#mslt-test`,
      name: "Multiple Sleep Latency Test (MSLT)",
      alternateName: "MSLT",
      usedToDiagnose: [
        {
          "@type": "MedicalCondition",
          name: "Narcolepsy",
        },
        {
          "@type": "MedicalCondition",
          name: "Idiopathic Hypersomnia",
        },
      ],
      affectedBy: {
        "@type": "MedicalProcedure",
        name: "Overnight Polysomnography",
        description:
          "Usually performed the night before an MSLT to ensure adequate sleep and rule out other causes of sleepiness.",
      },
      howPerformed:
        "A series of four to five scheduled 20-minute nap opportunities spaced about two hours apart, over roughly 6-8 hours, while brain activity, eye movement, and muscle activity are monitored.",
    },
    {
      "@type": "MedicalTest",
      "@id": `${FULL_URL}#mwt-test`,
      name: "Maintenance of Wakefulness Test (MWT)",
      alternateName: "MWT",
      usedToDiagnose: {
        "@type": "MedicalCondition",
        name: "Excessive Daytime Sleepiness / Treatment Effectiveness",
      },
      howPerformed:
        "Four wakefulness sessions spaced about two hours apart, over roughly 4-5 hours, during which the patient sits in a quiet, low-stimulation setting and attempts to remain awake without active stimulation.",
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
          name: "Sleep",
          item: `${BASE_URL}/sleep`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MSLT & MWT",
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
          name: "What is an MSLT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Multiple Sleep Latency Test (MSLT) is a daytime sleep test that measures how quickly you fall asleep during a series of scheduled nap opportunities. It is commonly used to diagnose narcolepsy and other disorders of hypersomnolence.",
          },
        },
        {
          "@type": "Question",
          name: "What is an MWT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Maintenance of Wakefulness Test (MWT) measures how well you can stay awake in a quiet setting during the day. It is often used to check how well treatment is working or to assess fitness for safety-sensitive occupations.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between MSLT and MWT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MSLT measures how quickly you fall asleep, while the MWT measures how long you can stay awake. Both involve multiple sessions during the day but are used for different clinical purposes.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an MSLT take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An MSLT typically takes about 6 to 8 hours, involving four to five nap opportunities spaced roughly two hours apart.",
          },
        },
        {
          "@type": "Question",
          name: "Is the MSLT painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The MSLT is completely painless. Sensors are placed gently on your scalp, face, and chin to record activity, and there are no needles or invasive steps involved.",
          },
        },
        {
          "@type": "Question",
          name: "Can I drive after the test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because the test itself involves periods of intentional napping or prolonged sitting, it is advisable to arrange for someone to drive you home afterwards, or to plan for alternate transport, especially if you still feel drowsy.",
          },
        },
        {
          "@type": "Question",
          name: "How should I prepare for an MSLT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maintain a regular sleep schedule for one to two weeks beforehand, avoid caffeine and alcohol on the test day, avoid extra naps before the test, and follow any specific instructions from your doctor regarding medications.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an overnight sleep study before an MSLT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases, yes. An overnight polysomnography is usually performed the night before an MSLT to ensure you had adequate sleep before the daytime test and to rule out other causes of sleepiness, such as sleep apnea.",
          },
        },
      ],
    },
  ],
};

export default function MSLTMWTSleepTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <DaytimeSleepinessTestingPage />
    </>
  );
}
