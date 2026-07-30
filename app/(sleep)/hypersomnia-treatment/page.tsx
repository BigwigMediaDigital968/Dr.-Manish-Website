import HypersomniaTreatmentPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Hypersomnia Treatment in Delhi | Dr. Manish Aggarwal";

const description =
  "Excessively sleepy during the day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats hypersomnia. Book a consultation.";

export const metadata = {
  title,
  description,
  keywords: [
    "hypersomnia treatment",
    "excessive daytime sleepiness",
    "sleep apnea specialist Delhi",
    "CPAP therapy",
    "BiPAP therapy",
    "narcolepsy evaluation",
    "Dr. Manish Aggarwal",
  ],
  authors: [{ name: "Dr. Manish Aggarwal" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${BASE_URL}/hypersomnia-treatment`,
  },
  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "Hypersomnia Treatment in Delhi | Dr. Manish Aggarwal",
    description:
      "Excessively sleepy during the day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats hypersomnia. Book a consultation.",
    url: `${BASE_URL}/hypersomnia-treatment`,
    images: [
      {
        url: `${BASE_URL}/images/hypersomnia-treatment-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Hypersomnia Treatment by Dr. Manish Aggarwal",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypersomnia Treatment in Delhi | Dr. Manish Aggarwal",
    description:
      "Excessively sleepy during the day despite a full night's sleep? Dr. Manish Aggarwal diagnoses and treats hypersomnia with evidence-based sleep medicine.",
    images: [`${BASE_URL}/images/hypersomnia-treatment-og.jpg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/hypersomnia-treatment#webpage`,
      name: "Hypersomnia Treatment: Why You're Always Sleepy, and What It Really Means",
      url: `${BASE_URL}/hypersomnia-treatment`,
      description:
        "Comprehensive guide to hypersomnia — causes, symptoms, diagnosis, and evidence-based treatment including CPAP/BiPAP therapy, by Dr. Manish Aggarwal, Pulmonologist and Sleep Medicine Specialist.",
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: {
        "@type": "MedicalCondition",
        name: "Hypersomnia",
        alternateName: "Excessive Daytime Sleepiness",
        cause: [
          {
            "@type": "MedicalCause",
            name: "Obstructive Sleep Apnea (OSA)",
          },
          {
            "@type": "MedicalCause",
            name: "Upper Airway Resistance Syndrome (UARS)",
          },
          {
            "@type": "MedicalCause",
            name: "Obesity Hypoventilation Syndrome (OHS)",
          },
          {
            "@type": "MedicalCause",
            name: "Sleep-related hypoventilation",
          },
        ],
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "CPAP Therapy (Continuous Positive Airway Pressure)",
          },
          {
            "@type": "MedicalTherapy",
            name: "BiPAP Therapy (Bilevel Positive Airway Pressure)",
          },
          {
            "@type": "MedicalTherapy",
            name: "Weight management",
          },
          {
            "@type": "MedicalTherapy",
            name: "Positional therapy",
          },
        ],
        signOrSymptom: [
          "Excessive daytime sleepiness",
          "Loud snoring",
          "Witnessed breathing pauses during sleep",
          "Waking up unrefreshed",
          "Morning headaches",
          "Dry mouth on waking",
          "Difficulty concentrating",
        ],
      },
      lastReviewed: "2026-07-30",
      reviewedBy: {
        "@type": "Person",
        name: "Dr. Manish Aggarwal",
        jobTitle: "Pulmonologist & Sleep Medicine Specialist",
      },
      publisher: {
        "@type": "MedicalOrganization",
        name: "Delhi Lung & Bronchoscopy Center",
      },
    },
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/about-us#physician`,
      name: "Dr. Manish Aggarwal",
      medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
      url: `${BASE_URL}/about-us`,
      worksFor: {
        "@type": "MedicalOrganization",
        name: "Delhi Lung & Bronchoscopy Center",
        address: {
          "@type": "PostalAddress",
          streetAddress: "J1-12A, Pitampura",
          addressLocality: "Delhi",
          postalCode: "110034",
          addressCountry: "IN",
        },
        telephone: "+91-99895-54095",
        email: "Aggarwal54095@gmail.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/hypersomnia-treatment#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
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
          name: "Hypersomnia Treatment",
          item: `${BASE_URL}/hypersomnia-treatment`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/hypersomnia-treatment#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hypersomnia is excessive daytime sleepiness that occurs even after what should be enough sleep at night. It is often linked to poor sleep quality caused by an underlying condition.",
          },
        },
        {
          "@type": "Question",
          name: "What are the common symptoms of hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common hypersomnia symptoms include excessive daytime sleepiness, loud snoring, unrefreshing sleep, morning headaches, and difficulty concentrating.",
          },
        },
        {
          "@type": "Question",
          name: "What causes hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include sleep-related breathing disorders such as Obstructive Sleep Apnea, Upper Airway Resistance Syndrome, and Obesity Hypoventilation Syndrome.",
          },
        },
        {
          "@type": "Question",
          name: "Can sleep apnea cause hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Obstructive Sleep Apnea is one of the most common causes of excessive daytime sleepiness, as it repeatedly disrupts sleep throughout the night.",
          },
        },
        {
          "@type": "Question",
          name: "What is idiopathic hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Idiopathic hypersomnia is excessive daytime sleepiness with no identifiable underlying cause after thorough evaluation. It may require further specialised sleep testing.",
          },
        },
        {
          "@type": "Question",
          name: "How is hypersomnia diagnosed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diagnosis typically involves a detailed sleep history, questionnaires like the Epworth Sleepiness Scale, and an overnight sleep study (polysomnography).",
          },
        },
        {
          "@type": "Question",
          name: "What is the treatment for hypersomnia caused by sleep apnea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment usually includes CPAP or BiPAP therapy, weight management, positional therapy, and lifestyle changes, based on the individual diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "Are there medicines for hypersomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medicines for hypersomnia may be considered in some cases, but they are prescribed only after a complete evaluation and depend on the underlying cause.",
          },
        },
        {
          "@type": "Question",
          name: "What is narcolepsy, and how is it different from hypersomnia due to sleep apnea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Narcolepsy is a central disorder of hypersomnolence originating from brain regulation of sleep, while hypersomnia from sleep apnea is caused by repeated breathing disruptions during sleep. Both cause daytime sleepiness but need different evaluations.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for excessive daytime sleepiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If daytime sleepiness lasts several weeks, occurs with snoring or breathing pauses, or affects your work and safety, it is time for a sleep evaluation.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <HypersomniaTreatmentPage />
    </>
  );
}