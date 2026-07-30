import SleepRelatedMovementDisordersPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Sleep Movement Disorder Treatment in Delhi | Dr. Manish";

const description =
  "Restless legs, kicking, or teeth grinding at night? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses sleep-related movement disorders. Book a consultation.";

export const metadata = {
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
    canonical: `${BASE_URL}/sleep-related-movement-disorders`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/sleep-related-movement-disorders`,
    siteName: "Delhi Lung & Bronchoscopy Center",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/images/sleep-movement-disorders-og.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains Restless Legs Syndrome, Periodic Limb Movement Disorder, and other sleep-related movement disorders.",
    images: [`${BASE_URL}/images/sleep-movement-disorders-og.jpg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/sleep-related-movement-disorders#webpage`,
      url: `${BASE_URL}/sleep-related-movement-disorders`,
      name: "Sleep-Related Movement Disorders: Why You Move at Night, and What It Really Means",
      description:
        "Comprehensive guide to Sleep-Related Movement Disorders — including Restless Legs Syndrome, Periodic Limb Movement Disorder, sleep bruxism, and related conditions — covering symptoms, causes, diagnosis, and treatment, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
      inLanguage: "en-IN",
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
        "@type": "Person",
        name: "Dr. Manish Aggarwal",
        jobTitle: "Pulmonologist & Sleep Specialist",
      },
      author: {
        "@type": "Physician",
        name: "Dr. Manish Aggarwal",
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
      "@id": `${BASE_URL}/sleep-related-movement-disorders#breadcrumb`,
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
          name: "Sleep-Related Movement Disorders",
          item: `${BASE_URL}/sleep-related-movement-disorders`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/sleep-related-movement-disorders#faq`,
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <SleepRelatedMovementDisordersPage />
    </>
  );
}