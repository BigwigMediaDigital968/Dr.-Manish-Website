import ParasomniaTreatmentPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Parasomnia Treatment in Delhi | Dr. Manish Aggarwal";

const description =
  "Sleepwalking, night terrors, or acting out dreams? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats parasomnia disorders. Book a consultation.";

export const metadata = {
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
    canonical: `${BASE_URL}/parasomnia-treatment`,
  },
  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "Parasomnia Treatment in Delhi | Dr. Manish Aggarwal",
    description:
      "Sleepwalking, night terrors, or acting out dreams? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats parasomnia disorders. Book a consultation.",
    url: `${BASE_URL}/parasomnia-treatment`,
    images: [
      {
        url: `${BASE_URL}/images/parasomnia-treatment-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Parasomnia Treatment by Dr. Manish Aggarwal",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parasomnia Treatment in Delhi | Dr. Manish Aggarwal",
    description:
      "Sleepwalking, night terrors, or acting out dreams? Learn about diagnosis and evidence-based treatment for parasomnia disorders.",
    images: [`${BASE_URL}/images/parasomnia-treatment-og.jpg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/parasomnia-treatment#webpage`,
      name: "Parasomnia: Why Unusual Sleep Behaviours Happen, and What They Really Mean",
      url: `${BASE_URL}/parasomnia-treatment`,
      description:
        "Comprehensive guide to parasomnia disorders — types, symptoms, causes, diagnosis, and evidence-based treatment for sleepwalking, night terrors, REM Sleep Behavior Disorder, and related conditions, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
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
      "@id": `${BASE_URL}/parasomnia-treatment#breadcrumb`,
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
          name: "Parasomnia Treatment",
          item: `${BASE_URL}/parasomnia-treatment`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/parasomnia-treatment#faq`,
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <ParasomniaTreatmentPage />
    </>
  );
}