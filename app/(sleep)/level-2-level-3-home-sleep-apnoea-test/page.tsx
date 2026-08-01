import type { Metadata } from "next";
import HomeSleepApneaTestPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/level-2-level-3-home-sleep-apnoea-test`;

export const metadata: Metadata = {
  title: "Level 2 & Level 3 Sleep Test (Home Sleep Apnoea Test)",
  description:
    "Snoring, gasping, or daytime fatigue? Get a Level 2/3 Home Sleep Apnoea Test from Sleep Specialist Dr. Manish, Delhi - convenient, accurate, comfortable.",

  keywords: [
    "Level 2 and Level 3 Sleep Test",
    "Home Sleep Apnoea Test",
    "Home Sleep Test",
    "Level 2 Sleep Study",
    "Level 3 Sleep Study",
    "Sleep Apnoea Test at Home",
    "Home Sleep Study",
    "sleep test for snoring",
    "sleep test for obstructive sleep apnoea",
    "sleep specialist Delhi",
    "pulmonologist",
    "polysomnography",
    "CPAP therapy",
    "sleep apnoea diagnosis",
  ],

  authors: [
    {
      name: "Dr. Manish Aggarwal",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "article",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title:
      "Level 2 and Level 3 Sleep Test (Home Sleep Apnoea Test)",
    description:
      "Snoring, gasping, or daytime fatigue? Get a Level 2/3 Home Sleep Apnoea Test from Sleep Specialist Dr. Manish, Delhi — convenient, accurate, comfortable.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/images/home-sleep-apnoea-test-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Level 2 and Level 3 Home Sleep Apnoea Test - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Level 2 and Level 3 Sleep Test (Home Sleep Apnoea Test)",
    description:
      "Snoring, gasping, or daytime fatigue? Get a Level 2/3 Home Sleep Apnoea Test from Sleep Specialist Dr. Manish, Delhi — convenient, accurate, comfortable.",
    images: [
      `${siteUrl}/assets/images/home-sleep-apnoea-test-og.jpg`,
    ],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Level 2 and Level 3 Sleep Test (Home Sleep Apnoea Test)",
  description:
    "Snoring, gasping, or daytime fatigue? Get a Level 2/3 Home Sleep Apnoea Test from Sleep Specialist Dr. Manish, Delhi — convenient, accurate, comfortable.",
  medicalAudience: {
    "@type": "Patient",
  },
  about: {
    "@type": "MedicalTest",
    name: "Home Sleep Apnoea Test (Level 2/Level 3 Sleep Study)",
  },
  lastReviewed: "2026-07-31",
  reviewedBy: {
    "@type": "Physician",
    name: "Dr. Manish Aggarwal",
    medicalSpecialty: "Pulmonology, Sleep Medicine",
  },
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
};

const medicalTestSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "Level 2 and Level 3 Home Sleep Apnoea Test",
  description:
    "A portable, at-home overnight sleep study that records breathing effort, airflow, oxygen levels, and heart rate to help diagnose Obstructive Sleep Apnoea and related sleep-related breathing disorders.",
  usedToDiagnose: {
    "@type": "MedicalCondition",
    name: "Obstructive Sleep Apnoea",
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Manish Aggarwal",
  medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
  url: `${siteUrl}/about-us`,
  worksFor: {
    "@type": "MedicalClinic",
    name: "Delhi Lung & Bronchoscopy Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jij-12A, Bittampura Gali",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    telephone: "+91-98985-54095",
    email: "Aggarwal54095@gmail.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sleep",
      item: `${siteUrl}/sleep`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Level 2 and Level 3 Sleep Test (Home Sleep Apnoea Test)",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Level 2 sleep study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Level 2 sleep study is a home-based sleep test that records a broad range of signals, similar in scope to an in-lab study, but without a technician present. It is suitable for patients who need slightly more detailed monitoring than a Level 3 test provides.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Level 3 sleep study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Level 3 sleep study is a simpler home-based test that mainly records breathing effort, airflow, oxygen levels, and heart rate. It does not record sleep stages, but it is often sufficient for patients with a clear pattern of Obstructive Sleep Apnoea symptoms.",
      },
    },
    {
      "@type": "Question",
      name: "Who should undergo a Home Sleep Apnoea Test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patients who experience loud snoring, witnessed breathing pauses, choking during sleep, excessive daytime sleepiness, morning headaches, or resistant high blood pressure linked to sleep symptoms are often good candidates, following an initial consultation with a sleep specialist.",
      },
    },
    {
      "@type": "Question",
      name: "Is a home sleep test accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For patients with a reasonably clear symptom pattern, home sleep tests are considered a reliable and clinically accepted way to diagnose Obstructive Sleep Apnoea. However, they are not suitable for every patient, and your specialist will confirm whether this is the right test for your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prepare for the test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preparation typically involves avoiding daytime naps, limiting caffeine and alcohol before bedtime, following your usual sleep routine, and keeping the device instructions handy in case you need them during the night.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sleep normally during the test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients are able to sleep in their usual position and follow their normal bedtime routine, since the device is designed to be worn comfortably through the night with minimal disruption.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my test is abnormal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your test indicates sleep apnoea or another breathing disorder, your specialist will explain the severity of your condition and discuss appropriate next steps, which may include lifestyle changes, CPAP or BiPAP therapy, or further testing if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Is a home sleep test better than an in-lab sleep study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is universally better — they serve different purposes. A home test is convenient and suitable for many patients with a clear symptom pattern, while an in-lab study offers more detailed monitoring for complex cases. Your specialist will recommend the most appropriate option for you.",
      },
    },
  ],
};

export default function HomeSleepApnoeaTestPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalTestSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <HomeSleepApneaTestPage />
    </>
  );
}