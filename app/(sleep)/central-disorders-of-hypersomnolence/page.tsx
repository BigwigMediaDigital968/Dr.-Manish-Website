import type { Metadata } from "next";
import CentralDisordersOfHypersomnolencePage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/central-disorders-of-hypersomnolence";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Excessive Daytime Sleepiness: Causes & Treatment | Dr. Manish";
const description =
  "Sleepy all day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses narcolepsy and hypersomnolence disorders. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "central disorders of hypersomnolence",
    "narcolepsy specialist Delhi",
    "idiopathic hypersomnia",
    "excessive daytime sleepiness",
    "MSLT test",
    "Kleine-Levin syndrome",
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
        alt: "Central Hypersomnolence Treatment by Dr. Manish Aggarwal",
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
      name: "Central Disorders of Hypersomnolence: Why the Sleepiness Never Really Lifts",
      url: FULL_URL,
      description:
        "Comprehensive guide to Central Disorders of Hypersomnolence — including narcolepsy, idiopathic hypersomnia, and Kleine-Levin syndrome — covering symptoms, causes, diagnosis, and treatment, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: {
        "@type": "MedicalCondition",
        name: "Central Disorders of Hypersomnolence",
        alternateName: "Excessive Daytime Sleepiness",
        cause: [
          {
            "@type": "MedicalCause",
            name: "Genetics",
          },
          {
            "@type": "MedicalCause",
            name: "Autoimmune conditions affecting hypocretin-producing cells",
          },
          {
            "@type": "MedicalCause",
            name: "Neurological disorders",
          },
          {
            "@type": "MedicalCause",
            name: "Chronic sleep deprivation",
          },
          {
            "@type": "MedicalCause",
            name: "Certain medications",
          },
        ],
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "Sleep hygiene guidance",
          },
          {
            "@type": "MedicalTherapy",
            name: "Scheduled napping",
          },
          {
            "@type": "MedicalTherapy",
            name: "Medication for daytime alertness",
          },
          {
            "@type": "MedicalTherapy",
            name: "Multiple Sleep Latency Test (MSLT)",
          },
          {
            "@type": "MedicalTherapy",
            name: "Polysomnography",
          },
        ],
        signOrSymptom: [
          "Excessive daytime sleepiness",
          "Unintentional sleep episodes",
          "Sleep attacks",
          "Long, unrefreshing naps",
          "Brain fog",
          "Poor concentration",
          "Memory problems",
          "Cataplexy",
          "Sleep paralysis",
          "Hallucinations at sleep onset",
        ],
        subtype: [
          "Narcolepsy Type 1",
          "Narcolepsy Type 2",
          "Idiopathic Hypersomnia",
          "Kleine-Levin Syndrome",
          "Hypersomnolence due to a Medical Disorder",
          "Hypersomnolence due to Medication or Substance Use",
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
          name: "Central Disorders of Hypersomnolence",
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
          name: "What are Central Disorders of Hypersomnolence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A group of sleep conditions in which the brain has difficulty maintaining normal wakefulness during the day, even after adequate sleep at night. This group includes conditions such as narcolepsy, idiopathic hypersomnia, and Kleine-Levin syndrome, among others.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I sleepy all the time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Persistent sleepiness despite adequate sleep can have several causes, ranging from lifestyle factors and other sleep disorders like sleep apnea, to central disorders of hypersomnolence such as narcolepsy or idiopathic hypersomnia. A proper sleep evaluation is the best way to understand what is causing it in your specific case.",
          },
        },
        {
          "@type": "Question",
          name: "Is excessive daytime sleepiness a medical condition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasional sleepiness is normal, especially after poor sleep. However, when excessive sleepiness is persistent, occurs despite adequate sleep, and affects daily functioning, it can be a sign of an underlying medical condition that deserves evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between narcolepsy and idiopathic hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both involve excessive daytime sleepiness. Narcolepsy, particularly Type 1, often includes additional symptoms like cataplexy, sleep paralysis, or hallucinations, and is linked to specific changes in brain chemistry. Idiopathic hypersomnia typically involves persistent sleepiness and long, unrefreshing sleep, generally without cataplexy, and its exact cause is often not identified.",
          },
        },
        {
          "@type": "Question",
          name: "Can excessive daytime sleepiness be treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in most cases it can be managed effectively once the underlying cause is identified. Treatment may include lifestyle changes, scheduled naps, treatment of any underlying condition, and medication when clinically appropriate. The specific approach depends on your diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a sleep study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your sleepiness is persistent and not explained by lack of sleep, a sleep study and sometimes an additional test called the MSLT are often recommended to help identify the exact cause. Your sleep specialist will advise based on your symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a sleep specialist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you experience persistent daytime sleepiness, unintentional sleep episodes, or sleepiness that affects your work, studies, or safety, such as while driving, it is a good time to seek a professional evaluation.",
          },
        },
      ],
    },
  ],
};

export default function CentralDisordersOfHypersomnolencePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <CentralDisordersOfHypersomnolencePage />
      </main>
    </>
  );
}
