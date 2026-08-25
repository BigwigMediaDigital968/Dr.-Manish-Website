import type { Metadata } from "next";
import ParasomniaTreatmentPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/parasomnia-treatment";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Parasomnia Treatment in Delhi | Dr. Manish Aggarwal";
const description =
  "Sleepwalking, night terrors, or acting out dreams? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats parasomnia disorders. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "parasomnia treatment",
    "sleepwalking specialist Delhi",
    "night terrors treatment",
    "REM sleep behavior disorder",
    "nightmare disorder",
    "sleep paralysis",
    "confusional arousals",
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
        alt: "Parasomnia Treatment by Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Sleepwalking, night terrors, or acting out dreams? Learn about diagnosis and evidence-based treatment for parasomnia disorders.",
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      name: "Parasomnia: Why Unusual Sleep Behaviours Happen, and What They Really Mean",
      url: FULL_URL,
      description:
        "Comprehensive guide to parasomnia disorders — types, symptoms, causes, diagnosis, and evidence-based treatment for sleepwalking, night terrors, REM Sleep Behavior Disorder, and related conditions, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
        name: "Parasomnia",
        alternateName: "Parasomnia Disorder",
        cause: [
          {
            "@type": "MedicalCause",
            name: "Sleep deprivation",
          },
          {
            "@type": "MedicalCause",
            name: "Stress and anxiety",
          },
          {
            "@type": "MedicalCause",
            name: "Alcohol use",
          },
          {
            "@type": "MedicalCause",
            name: "Obstructive Sleep Apnea",
          },
          {
            "@type": "MedicalCause",
            name: "Neurological factors",
          },
          {
            "@type": "MedicalCause",
            name: "Genetics and family history",
          },
        ],
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "Sleep hygiene guidance",
          },
          {
            "@type": "MedicalTherapy",
            name: "Imagery Rehearsal Therapy (IRT)",
          },
          {
            "@type": "MedicalTherapy",
            name: "Cognitive Behavioural Therapy",
          },
          {
            "@type": "MedicalTherapy",
            name: "CPAP therapy",
          },
          {
            "@type": "MedicalTherapy",
            name: "Video Polysomnography",
          },
        ],
        signOrSymptom: [
          "Sleepwalking",
          "Sleep talking",
          "Night terrors",
          "Acting out dreams",
          "Screaming or crying during sleep",
          "Confusion after waking",
          "Eating during sleep with no memory of it",
        ],
        subtype: [
          "Sleepwalking",
          "Night Terrors",
          "REM Sleep Behavior Disorder",
          "Nightmare Disorder",
          "Sleep Talking",
          "Sleep Paralysis",
          "Confusional Arousals",
          "Sleep-Related Eating Disorder",
        ],
      },
      lastReviewed: "2026-07-30",
      reviewedBy: {
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
          name: "Parasomnia Treatment",
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
          name: "What is parasomnia sleep disorder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parasomnia is a sleep disorder that causes unusual behaviours, movements, or emotions during sleep, such as sleepwalking, talking, or acting out dreams, because the brain is partly asleep and partly awake at the same time.",
          },
        },
        {
          "@type": "Question",
          name: "Why does parasomnia occur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It occurs when the brain does not transition smoothly between sleep stages, often influenced by factors like sleep deprivation, stress, or an underlying sleep disorder such as sleep apnea.",
          },
        },
        {
          "@type": "Question",
          name: "What are the causes of parasomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include sleep deprivation, stress, anxiety, alcohol use, certain medications, sleep apnea, neurological conditions, genetics, and irregular sleep schedules.",
          },
        },
        {
          "@type": "Question",
          name: "Are parasomnias dangerous?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most parasomnias are not dangerous, particularly in children, where many types resolve naturally with age. However, some, especially those involving physical movement like sleepwalking or REM Sleep Behavior Disorder, carry a risk of injury and are worth evaluating if episodes are frequent.",
          },
        },
        {
          "@type": "Question",
          name: "Is it normal for children to sleepwalk or have night terrors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, these are fairly common in childhood and often resolve on their own as children grow older. Evaluation is generally only needed if episodes are frequent, dangerous, or continue into adolescence and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "Can stress cause parasomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Stress and anxiety are common triggers for several parasomnias, including nightmare disorder and confusional arousals, and can also worsen the frequency of sleepwalking episodes in some individuals.",
          },
        },
        {
          "@type": "Question",
          name: "Is REM Sleep Behavior Disorder serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is generally recommended for evaluation, both due to the risk of injury during episodes and because it has a recognised association with certain neurological conditions, making proper diagnosis and follow-up particularly important.",
          },
        },
        {
          "@type": "Question",
          name: "Do parasomnias need a sleep study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always, but a video polysomnography is often recommended when the type of parasomnia is unclear, episodes are frequent or risky, or an underlying condition like sleep apnea is suspected.",
          },
        },
        {
          "@type": "Question",
          name: "How is parasomnia treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment includes sleep hygiene guidance, safety measures, therapies such as Imagery Rehearsal Therapy and relaxation training, and treating any underlying sleep disorder. CPAP therapy may help if sleep apnea is involved, and medication is used only when clinically appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can parasomnias be cured completely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many parasomnias improve significantly, or resolve entirely, with the right combination of lifestyle changes, safety measures, and treatment of any underlying cause. Outcomes vary depending on the type and individual factors.",
          },
        },
        {
          "@type": "Question",
          name: "Is narcolepsy a parasomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Narcolepsy is not a parasomnia. It belongs to a different category called Central Disorders of Hypersomnolence, which mainly involves excessive daytime sleepiness rather than abnormal behaviours during sleep.",
          },
        },
      ],
    },
  ],
};

export default function ParasomniaTreatmentPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main>
        <ParasomniaTreatmentPage />
      </main>
    </>
  );
}
