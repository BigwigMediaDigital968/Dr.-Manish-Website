import type { Metadata } from "next";
import CircadianRhythmSleepDisorderPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/circadian-rhythm-sleep-disorder-treatment";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Circadian Rhythm Sleep Disorder Treatment | Dr. Manish";
const description =
  "Wide awake at night, exhausted by day? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats circadian rhythm sleep-wake disorders. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "circadian rhythm sleep disorder",
    "delayed sleep phase disorder",
    "shift work sleep disorder",
    "jet lag treatment",
    "body clock specialist Delhi",
    "bright light therapy",
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
        alt: "Circadian Rhythm Sleep Disorder Treatment by Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains delayed sleep phase, shift work disorder, jet lag, and other circadian rhythm sleep-wake disorders.",
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      name: "Circadian Rhythm Sleep-Wake Disorders: Why Your Body Clock Runs on Its Own Schedule",
      url: FULL_URL,
      description:
        "Comprehensive guide to Circadian Rhythm Sleep-Wake Disorders — including delayed sleep phase, advanced sleep phase, shift work disorder, and jet lag disorder — covering symptoms, causes, diagnosis, and treatment, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
        name: "Circadian Rhythm Sleep-Wake Disorder",
        alternateName: "Body Clock Disorder",
        cause: [
          {
            "@type": "MedicalCause",
            name: "Shift work",
          },
          {
            "@type": "MedicalCause",
            name: "Frequent travel across time zones",
          },
          {
            "@type": "MedicalCause",
            name: "Lack of sunlight exposure",
          },
          {
            "@type": "MedicalCause",
            name: "Excess screen time before bed",
          },
          {
            "@type": "MedicalCause",
            name: "Irregular work or study schedules",
          },
          {
            "@type": "MedicalCause",
            name: "Genetics",
          },
        ],
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "Sleep schedule correction",
          },
          {
            "@type": "MedicalTherapy",
            name: "Bright light therapy",
          },
          {
            "@type": "MedicalTherapy",
            name: "Melatonin (clinically timed)",
          },
          {
            "@type": "MedicalTherapy",
            name: "Sleep hygiene improvements",
          },
          {
            "@type": "MedicalTherapy",
            name: "Actigraphy-guided management",
          },
        ],
        signOrSymptom: [
          "Difficulty falling asleep at desired bedtime",
          "Difficulty waking at desired time",
          "Excessive daytime sleepiness",
          "Poor concentration",
          "Persistent fatigue",
          "Mood changes",
        ],
        subtype: [
          "Delayed Sleep-Wake Phase Disorder",
          "Advanced Sleep-Wake Phase Disorder",
          "Shift Work Sleep Disorder",
          "Jet Lag Disorder",
          "Non-24-Hour Sleep-Wake Rhythm Disorder",
          "Irregular Sleep-Wake Rhythm Disorder",
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
          name: "Circadian Rhythm Sleep-Wake Disorders",
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
          name: "What are Circadian Rhythm Sleep-Wake Disorders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These are sleep disorders where the body's internal 24-hour clock becomes misaligned with the sleep schedule a person needs or wants to follow. This can cause difficulty falling asleep, staying asleep, or waking up at the desired times, along with daytime sleepiness.",
          },
        },
        {
          "@type": "Question",
          name: "What causes Circadian Rhythm Sleep-Wake Disorders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include shift work, frequent travel across time zones, irregular routines, excess screen time, lack of natural light exposure, and in some cases, genetics or underlying neurological conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Can Circadian Rhythm Sleep-Wake Disorders be treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most circadian rhythm disorders can be managed effectively with a combination of approaches such as sleep schedule correction, bright light therapy, melatonin when appropriate, and lifestyle changes. Treatment is tailored to the specific type and cause identified during evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Shift Work Sleep Disorder permanent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Many people see improvement with structured management strategies, even while continuing shift work. For some, symptoms improve significantly if their work schedule changes; for others, ongoing management strategies help keep symptoms controlled.",
          },
        },
        {
          "@type": "Question",
          name: "Can jet lag become a sleep disorder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasional jet lag after travel is normal and usually resolves within a few days as the body adjusts. It is generally only considered for further evaluation if sleep disruption after travel is unusually severe or does not improve as expected.",
          },
        },
        {
          "@type": "Question",
          name: "When should I consult a sleep specialist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your sleep-wake schedule has been consistently out of sync for several weeks, is affecting your daily functioning, mood, or safety, or has not improved with basic changes to your routine, it is a good time to seek a professional evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a sleep study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. A sleep study is typically recommended when there is a suspicion of an additional sleep disorder, such as sleep apnea, or when the diagnosis is not clear from history and other assessments alone.",
          },
        },
      ],
    },
  ],
};

export default function CircadianRhythmSleepDisorderPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <CircadianRhythmSleepDisorderPage />
      </main>
    </>
  );
}
