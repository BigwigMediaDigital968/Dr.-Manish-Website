import CircadianRhythmSleepDisorderPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Circadian Rhythm Sleep Disorder Treatment | Dr. Manish";

const description =
  "Wide awake at night, exhausted by day? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, diagnoses and treats circadian rhythm sleep-wake disorders. Book a consultation.";

export const metadata = {
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
    canonical: `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment`,
  },
  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title,
    description,
    url: `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment`,
    images: [
      {
        url: `${BASE_URL}/images/circadian-rhythm-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Circadian Rhythm Sleep Disorder Treatment",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains delayed sleep phase, shift work disorder, jet lag, and other circadian rhythm sleep-wake disorders.",
    images: [`${BASE_URL}/images/circadian-rhythm-og.jpg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment#webpage`,
      url: `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment`,
      name: "Circadian Rhythm Sleep-Wake Disorders: Why Your Body Clock Runs on Its Own Schedule",
      description:
        "Comprehensive guide to Circadian Rhythm Sleep-Wake Disorders — including delayed sleep phase, advanced sleep phase, shift work disorder, and jet lag disorder — covering symptoms, causes, diagnosis, and treatment, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
      inLanguage: "en-IN",
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
      "@id": `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment#breadcrumb`,
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
          name: "Circadian Rhythm Sleep-Wake Disorders",
          item: `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/circadian-rhythm-sleep-disorder-treatment#faq`,
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <CircadianRhythmSleepDisorderPage />
    </>
  );
}