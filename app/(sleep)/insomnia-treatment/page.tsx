import InsomniaTreatmentPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Insomnia Causes, Symptoms & Treatment | Dr. Manish";

const description =
  "Struggling to sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, explains insomnia causes, symptoms, and evidence-based CBT-I treatment. Book a consultation.";

export const metadata = {
  title,
  description,
  keywords: [
    "insomnia treatment",
    "insomnia specialist Delhi",
    "sleep specialist Delhi",
    "CBT-I",
    "chronic insomnia",
    "sleep disorder doctor",
    "Dr. Manish Aggarwal",
  ],
  authors: [{ name: "Dr. Manish Aggarwal" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${BASE_URL}/insomnia-treatment`,
  },
  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "Insomnia Treatment in Delhi | Dr. Manish Aggarwal",
    description:
      "Struggling to sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, explains insomnia causes, symptoms, and evidence-based CBT-I treatment. Book a consultation.",
    url: `${BASE_URL}/insomnia-treatment`,
    images: [
      {
        url: `${BASE_URL}/images/insomnia-treatment-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Insomnia Treatment by Dr. Manish Aggarwal",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insomnia Treatment in Delhi | Dr. Manish Aggarwal",
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains insomnia causes, symptoms, and treatment options including CBT-I.",
    images: [`${BASE_URL}/images/insomnia-treatment-og.jpg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/insomnia-treatment#webpage`,
      name: "Insomnia Treatment: Causes, Symptoms & What It Really Means",
      url: `${BASE_URL}/insomnia-treatment`,
      description:
        "Comprehensive guide to insomnia disorder — causes, symptoms, types, diagnosis, and evidence-based treatment including CBT-I, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: {
        "@type": "MedicalCondition",
        name: "Insomnia Disorder",
        alternateName: "Insomnia",
        possibleTreatment: [
          {
            "@type": "MedicalTherapy",
            name: "Cognitive Behavioural Therapy for Insomnia (CBT-I)",
          },
          {
            "@type": "MedicalTherapy",
            name: "Sleep hygiene counselling",
          },
          {
            "@type": "DrugClass",
            name: "Short-term sleep medication (under medical supervision)",
          },
        ],
        riskFactor: [
          "Age above 60",
          "Female gender / pregnancy / menopause",
          "History of anxiety or depression",
          "Irregular work shifts",
          "Chronic illness",
          "High-stress lifestyle",
          "Family history of sleep problems",
        ],
        signOrSymptom: [
          "Difficulty falling asleep",
          "Frequent night waking",
          "Early morning awakening",
          "Daytime fatigue",
          "Difficulty concentrating",
          "Irritability or mood changes",
        ],
      },
      lastReviewed: "2026-07-30",
      reviewedBy: {
        "@type": "Person",
        name: "Dr. Manish Aggarwal",
        jobTitle: "Pulmonologist & Sleep Specialist",
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
      "@id": `${BASE_URL}/insomnia-treatment#breadcrumb`,
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
          name: "Insomnia Treatment",
          item: `${BASE_URL}/insomnia-treatment`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/insomnia-treatment#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Insomnia is a sleep disorder involving difficulty falling asleep, staying asleep, or waking too early and being unable to fall back asleep, even with enough time and opportunity to sleep.",
          },
        },
        {
          "@type": "Question",
          name: "Is insomnia a disease or just a symptom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be either. Insomnia can occur on its own as a primary disorder, or as a symptom of another condition like anxiety, depression, or a medical illness. When persistent, it is treated as a condition requiring proper care.",
          },
        },
        {
          "@type": "Question",
          name: "What is chronic insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chronic insomnia is when sleep difficulty occurs at least three nights a week for three months or more.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main causes of insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common causes include stress, anxiety, depression, poor sleep habits, shift work, caffeine or alcohol use, screen time before bed, chronic illness, certain medications, and underlying sleep disorders like obstructive sleep apnea. It is usually a combination of factors rather than one single cause.",
          },
        },
        {
          "@type": "Question",
          name: "What are the common symptoms of insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Difficulty sleeping, frequent night waking, early waking, daytime fatigue, poor concentration, irritability, and mood changes are common symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "What are the different types of insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main types are acute, chronic, sleep-onset, sleep-maintenance, early-morning-awakening, and comorbid insomnia. Many people experience more than one type at once.",
          },
        },
        {
          "@type": "Question",
          name: "Is pregnancy insomnia normal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, pregnancy insomnia is common due to hormonal changes and physical discomfort. However, if it severely affects rest, it should be discussed with a doctor.",
          },
        },
        {
          "@type": "Question",
          name: "What is the first-line treatment for insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cognitive Behavioural Therapy for Insomnia (CBT-I) is generally recommended as the first-line treatment because it addresses the root cause without the risks of long-term medicine use.",
          },
        },
        {
          "@type": "Question",
          name: "Can insomnia be treated without sleeping pills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases. CBT-I, sleep hygiene changes, stress management, and treating underlying causes are often effective on their own or alongside short-term medication when needed.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a doctor for insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If sleep problems last more than a few weeks, affect daily functioning, or occur alongside snoring, anxiety, or depression, it is time to consult a doctor.",
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
      <InsomniaTreatmentPage />
    </>
  );
}