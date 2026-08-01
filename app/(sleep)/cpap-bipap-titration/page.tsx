import type { Metadata } from "next";
import CpapBipapTitrationPageContent from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/cpap-bipap-titration`;

export const metadata: Metadata = {
  title: "CPAP/BiPAP Titration: Procedure, Benefits & What to Expect",
  description:
    "Advised CPAP or BiPAP therapy? Learn how titration finds your correct pressure setting — safe, supervised, and guided by Sleep Specialist Dr. Manish, Delhi.",

  keywords: [
    "CPAP/BiPAP Titration",
    "CPAP titration study",
    "BiPAP titration",
    "PAP titration",
    "CPAP pressure settings",
    "BiPAP pressure adjustment",
    "CPAP sleep study",
    "sleep apnea treatment",
    "sleep study for CPAP",
    "positive airway pressure therapy",
    "sleep specialist Delhi",
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
    title: "CPAP/BiPAP Titration: Procedure, Benefits & What to Expect",
    description:
      "Advised CPAP or BiPAP therapy? Learn how titration finds your correct pressure setting — safe, supervised, and guided by Sleep Specialist Dr. Manish, Delhi.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/images/cpap-bipap-titration-og.jpg`,
        alt: "CPAP/BiPAP Titration - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CPAP/BiPAP Titration: Procedure, Benefits & What to Expect",
    description:
      "Advised CPAP or BiPAP therapy? Learn how titration finds your correct pressure setting — safe, supervised, and guided by Sleep Specialist Dr. Manish, Delhi.",
    images: [`${siteUrl}/assets/images/cpap-bipap-titration-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "CPAP/BiPAP Titration: Procedure, Benefits & What to Expect",
  description:
    "Advised CPAP or BiPAP therapy? Learn how titration finds your correct pressure setting — safe, supervised, and guided by Sleep Specialist Dr. Manish, Delhi.",
  medicalAudience: {
    "@type": "Patient",
  },
  about: {
    "@type": "MedicalProcedure",
    name: "CPAP/BiPAP Titration Study",
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

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "CPAP/BiPAP Titration",
  description:
    "An overnight, technician-supervised sleep study in which CPAP or BiPAP pressure is gradually adjusted to identify the setting that keeps the airway open and breathing steady during sleep.",
  howPerformed:
    "Performed in a sleep lab with continuous monitoring of breathing, oxygen levels, heart rate, and sleep stages while pressure is incrementally adjusted.",
  procedureType: "https://schema.org/NoninvasiveProcedure",
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
      name: "CPAP/BiPAP Titration",
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
      name: "What is CPAP/BiPAP titration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CPAP/BiPAP titration is an overnight sleep study in which a technician gradually adjusts your air pressure while monitoring your breathing and oxygen levels, to find the setting that keeps your airway open comfortably.",
      },
    },
    {
      "@type": "Question",
      name: "Why is CPAP/BiPAP titration needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is needed because the right pressure setting varies from person to person. Titration ensures your device is set specifically for your airway and breathing pattern, rather than using a generic setting that may be too high or too low.",
      },
    },
    {
      "@type": "Question",
      name: "Is CPAP/BiPAP titration painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The study involves lightly attached sensors and a properly fitted mask. Most patients find it comfortable enough to fall asleep during the study.",
      },
    },
    {
      "@type": "Question",
      name: "How long does CPAP/BiPAP titration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The study is usually completed in one overnight session, lasting around seven to eight hours, similar to a typical night's sleep.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the titration study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your sleep specialist reviews the results and prescribes a specific pressure setting. Your CPAP or BiPAP machine is then set up accordingly, along with guidance on choosing a suitable mask and a follow-up plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can pressure settings change over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Changes in weight, health conditions, or how your body responds to therapy over time can affect the pressure you need, which is why periodic review and, occasionally, repeat titration may be recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Is CPAP titration done in one night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes, a single overnight study is enough to determine an appropriate pressure setting. In some situations, your specialist may recommend a follow-up study if further adjustment is needed.",
      },
    },
  ],
};

export default function CpapBipapTitrationPage() {
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
          __html: JSON.stringify(medicalProcedureSchema),
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

      <CpapBipapTitrationPageContent />
    </>
  );
}