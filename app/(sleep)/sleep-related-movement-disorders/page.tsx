import type { Metadata } from "next";
import SleepRelatedMovementDisordersPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/sleep-related-movement-disorders";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Sleep Movement Disorder Treatment in Delhi | Dr. Manish";
const description =
  "Restless legs, kicking, or teeth grinding at night? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses sleep-related movement disorders. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "sleep movement disorder",
    "restless legs syndrome treatment",
    "periodic limb movement disorder",
    "sleep bruxism",
    "iron deficiency RLS",
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
        alt: "Sleep Movement Disorder Treatment by Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains Restless Legs Syndrome, Periodic Limb Movement Disorder, and other sleep-related movement disorders.",
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      name: "Sleep-Related Movement Disorders: Why You Move at Night, and What It Really Means",
      url: FULL_URL,
      description:
        "Comprehensive guide to Sleep-Related Movement Disorders — including Restless Legs Syndrome, Periodic Limb Movement Disorder, sleep bruxism, and related conditions — covering symptoms, causes, diagnosis, and treatment, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
        name: "Sleep-Related Movement Disorder",
        cause: [
          { "@type": "MedicalCause", name: "Iron deficiency" },
          { "@type": "MedicalCause", name: "Pregnancy" },
          { "@type": "MedicalCause", name: "Neurological disorders" },
          { "@type": "MedicalCause", name: "Kidney disease" },
          { "@type": "MedicalCause", name: "Diabetes" },
          { "@type": "MedicalCause", name: "Genetics" },
        ],
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "Iron supplementation",
          },
          {
            "@type": "MedicalTherapy",
            name: "Sleep hygiene improvements",
          },
          {
            "@type": "MedicalTherapy",
            name: "Medication for moderate to severe symptoms",
          },
          {
            "@type": "MedicalTherapy",
            name: "Polysomnography",
          },
        ],
        signOrSymptom: [
          "Urge to move the legs",
          "Crawling or tingling leg sensation",
          "Repetitive leg jerks during sleep",
          "Sudden painful leg cramps during sleep",
          "Teeth grinding",
          "Unrefreshing sleep despite adequate hours",
        ],
        subtype: [
          "Restless Legs Syndrome",
          "Periodic Limb Movement Disorder",
          "Sleep-Related Leg Cramps",
          "Sleep Bruxism",
          "Rhythmic Movement Disorder",
          "Propriospinal Myoclonus at Sleep Onset",
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
          name: "Sleep-Related Movement Disorders",
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
          name: "What are Sleep-Related Movement Disorders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These are a group of sleep conditions involving repetitive or involuntary movements that occur during sleep or while falling asleep, such as Restless Legs Syndrome and Periodic Limb Movement Disorder. These movements can disrupt sleep quality, sometimes without the person being fully aware of them.",
          },
        },
        {
          "@type": "Question",
          name: "What causes involuntary movements during sleep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include iron deficiency, pregnancy, neurological disorders, kidney disease, diabetes, certain medications, sleep deprivation, and genetics. In many cases, more than one factor contributes, which is why a proper evaluation is important.",
          },
        },
        {
          "@type": "Question",
          name: "Are Sleep-Related Movement Disorders serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most are manageable once diagnosed, though they can significantly affect sleep quality and daytime functioning if left unaddressed. Some, like those linked to kidney disease or neurological conditions, are also worth evaluating because of their connection to broader health.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Restless Legs Syndrome and Periodic Limb Movement Disorder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Restless Legs Syndrome involves an uncomfortable sensation and urge to move the legs, typically while awake and trying to fall asleep. Periodic Limb Movement Disorder involves repetitive leg jerks that occur during sleep itself, often without the person's awareness. The two conditions can occur together in the same person.",
          },
        },
        {
          "@type": "Question",
          name: "Can iron deficiency cause sleep movement disorders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Low iron levels are one of the most well-established and treatable contributors to Restless Legs Syndrome. This is why iron studies are often part of the diagnostic process.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a sleep study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. A sleep study is typically recommended to confirm Periodic Limb Movement Disorder, or when there is a suspicion of another contributing sleep disorder, such as sleep apnea, alongside your movement symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "When should I consult a sleep specialist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you are experiencing persistent involuntary movements during sleep, restless legs that interfere with falling asleep, or unexplained poor-quality sleep despite adequate hours, it is a reasonable time to seek a professional evaluation.",
          },
        },
      ],
    },
  ],
};

export default function SleepRelatedMovementDisordersPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <SleepRelatedMovementDisordersPage />
      </main>
    </>
  );
}
