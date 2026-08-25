import type { Metadata } from "next";
import SleepApneaSurgeryEvaluationPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/sleep-apnoea-surgery";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Sleep Apnoea Surgery in Delhi | Dr. Manish Aggarwal";
const description =
  "Wondering if you need surgery for sleep apnoea? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, evaluates whether surgery is right for you. Book a consultation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "sleep apnoea surgery",
    "UPPP surgery",
    "tonsillectomy sleep apnea",
    "maxillomandibular advancement",
    "hypoglossal nerve stimulation",
    "sleep apnea treatment Delhi",
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
        alt: "Sleep Apnoea Surgery Evaluation - Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains when sleep apnoea surgery is appropriate, the procedure types, and what recovery looks like.",
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      url: FULL_URL,
      name: "Sleep Apnoea Surgery: Evaluation & Surgical Options",
      description:
        "A comprehensive guide to sleep apnoea surgery—candidacy evaluation, procedure types, non-surgical alternatives, and post-operative monitoring by Dr. Manish Aggarwal.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      mainContentOfPage: {
        "@type": "WebPageElement",
        about: [
          {
            "@id": `${FULL_URL}#surgical-evaluation`,
          },
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
      "@type": "MedicalProcedure",
      "@id": `${FULL_URL}#surgical-evaluation`,
      name: "Sleep Apnoea Surgical Evaluation and Procedures",
      procedureType: "https://schema.org/SurgicalProcedure",
      howPerformed:
        "Comprehensive anatomical airway assessment followed by target-specific surgical interventions to correct upper airway obstructions in patients with Obstructive Sleep Apnea.",
      followup:
        "Post-surgical assessment including follow-up sleep studies (polysomnography) to evaluate reduction in Airway Hypopnea Index (AHI).",
      bodyLocation: "Upper Airway, Pharynx, Maxilla, Mandible",
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
          name: "Sleep Apnoea Surgery",
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
            text: "Surgery may be considered for patients who cannot tolerate CPAP, have a clear structural airway blockage such as enlarged tonsils, or continue to have significant symptoms despite appropriate non-surgical treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Is CPAP better than surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CPAP is generally considered the first-line non-invasive treatment for moderate to severe sleep apnoea. Surgery is a tailored approach reserved for specific anatomical obstructions or when non-surgical therapies fail.",
          },
        },
        {
          "@type": "Question",
          name: "Can sleep apnoea be cured with surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surgery can significantly reduce airway obstruction and improve symptoms in suitable candidates, though long-term follow-up is necessary to monitor overall sleep apnoea control.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if I need surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Candidacy can only be established after a thorough clinical assessment, including a polysomnography (sleep study) and dynamic upper airway evaluation by a sleep specialist.",
          },
        },
        {
          "@type": "Question",
          name: "Is surgery painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post-operative discomfort varies based on the specific anatomical procedure performed. Your clinical and surgical care team provides targeted pain management protocols throughout recovery.",
          },
        },
        {
          "@type": "Question",
          name: "How long does recovery take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recovery timelines range from a few days for minor soft-tissue procedures to several weeks for structural jaw realignment (MMA) surgeries.",
          },
        },
        {
          "@type": "Question",
          name: "Can sleep apnoea return after surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, residual symptoms or tissue changes over time may lead to recurring obstruction. Continuous follow-up and periodic sleep evaluations are strongly recommended post-surgery.",
          },
        },
      ],
    },
  ],
};

export default function SleepApnoeaSurgeryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <SleepApneaSurgeryEvaluationPage />
    </>
  );
}
