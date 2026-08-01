import type { Metadata } from "next";
import SleepApneaSurgeryEvaluationPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/sleep-apnoea-surgery`;

export const metadata: Metadata = {
  title: "Sleep Apnoea Surgery in Delhi | Dr. Manish Aggarwal",
  description:
    "Wondering if you need surgery for sleep apnoea? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, evaluates whether surgery is right for you. Book a consultation.",

  keywords: [
    "sleep apnoea surgery",
    "UPPP surgery",
    "tonsillectomy sleep apnea",
    "maxillomandibular advancement",
    "hypoglossal nerve stimulation",
    "sleep apnea treatment Delhi",
    "Dr. Manish Aggarwal",
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
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "Sleep Apnoea Surgery in Delhi | Dr. Manish Aggarwal",
    description:
      "Wondering if you need surgery for sleep apnoea? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, evaluates whether surgery is right for you. Book a consultation.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/sleep-apnoea-surgery-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Sleep Apnoea Surgery - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sleep Apnoea Surgery in Delhi | Dr. Manish Aggarwal",
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains when sleep apnoea surgery is appropriate, the procedure types, and what recovery looks like.",
    images: [`${siteUrl}/images/sleep-apnoea-surgery-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Sleep Apnoea Surgery: When Is It Needed, and What to Expect?",
  url: pageUrl,
  description:
    "A guide to sleep apnoea surgery — who may need it, non-surgical alternatives, procedure types, decision-making process, and recovery, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalProcedure",
    name: "Sleep Apnoea Surgery",
    procedureType: "https://schema.org/SurgicalProcedure",
    howPerformed:
      "A group of surgical procedures aimed at correcting structural causes of airway blockage in Obstructive Sleep Apnea, selected based on individual airway anatomy and evaluation findings.",
    followup:
      "A repeat sleep study is often recommended some months after surgery to assess improvement, along with long-term monitoring.",
    subjectOf: [
      {
        "@type": "MedicalProcedure",
        name: "Uvulopalatopharyngoplasty (UPPP)",
      },
      {
        "@type": "MedicalProcedure",
        name: "Tonsillectomy",
      },
      {
        "@type": "MedicalProcedure",
        name: "Nasal Surgery",
      },
      {
        "@type": "MedicalProcedure",
        name: "Maxillomandibular Advancement (MMA)",
      },
      {
        "@type": "MedicalProcedure",
        name: "Hypoglossal Nerve Stimulation",
      },
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
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Manish Aggarwal",
  medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
  url: `${siteUrl}/about-us`,
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
      name: "Sleep Apnoea Surgery",
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
      name: "What is Sleep Apnoea Surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sleep apnoea surgery refers to procedures aimed at correcting structural causes of airway blockage that lead to Obstructive Sleep Apnea. It is considered for selected patients after a thorough evaluation, not as a routine first treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs surgery for sleep apnoea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surgery may be considered for patients who cannot tolerate CPAP, have a clear structural airway blockage such as enlarged tonsils, or continue to have significant symptoms despite appropriate non-surgical treatment. This is determined individually through evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "Is CPAP better than surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CPAP is generally considered the first-line treatment for moderate to severe sleep apnoea and is effective for most patients. Surgery is not necessarily better, it is a different approach considered for specific patients where structural correction is likely to help. The right choice depends on individual evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "Can sleep apnoea be cured with surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surgery may meaningfully reduce airway obstruction and improve symptoms in appropriate candidates, but it does not guarantee complete resolution of sleep apnoea for everyone. Outcomes vary depending on the individual and the specific procedure performed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I need surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This can only be determined through a detailed evaluation, including a sleep study, airway assessment, and review of how you have responded to other treatments. There is no way to know based on symptoms alone.",
      },
    },
    {
      "@type": "Question",
      name: "Is surgery painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As with any surgical procedure, some discomfort during recovery is expected, and this varies depending on the specific surgery performed. Your evaluating specialist and surgical team can explain what to expect for the particular procedure being considered.",
      },
    },
    {
      "@type": "Question",
      name: "How long does recovery take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recovery time depends on the type of surgery, ranging from a couple of weeks for some procedures to a longer period for more involved surgeries. Your care team will guide you on the expected recovery timeline for your specific procedure.",
      },
    },
    {
      "@type": "Question",
      name: "Can sleep apnoea return after surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is possible for sleep apnoea to persist or return after surgery in some patients, which is why follow-up, including a repeat sleep study, and long-term monitoring are recommended even after a surgical procedure.",
      },
    },
  ],
};

export default function SleepApnoeaSurgeryPage() {
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

      <SleepApneaSurgeryEvaluationPage />
    </>
  );
}
