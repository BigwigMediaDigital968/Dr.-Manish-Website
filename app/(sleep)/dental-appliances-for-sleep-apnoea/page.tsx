import type { Metadata } from "next";
import OralApplianceSleepApneaPage from "./PageContent";

const siteUrl = process.env.SITE_URL;
const pageUrl = `${siteUrl}/dental-appliances-for-sleep-apnoea`;

export const metadata: Metadata = {
  title: "Dental Appliance for Sleep Apnoea | CPAP Alternative",
  description:
    "Struggling with CPAP? Learn how dental (oral) appliances treat mild-moderate sleep apnoea & snoring. Expert evaluation by Dr. Manish Aggarwal, Delhi.",

  keywords: [
    "dental appliance for sleep apnoea",
    "oral appliance therapy",
    "mandibular advancement device",
    "MAD sleep apnoea",
    "tongue retaining device",
    "CPAP alternative",
    "snoring treatment Delhi",
    "sleep apnoea treatment without CPAP",
    "dental sleep medicine",
    "sleep specialist Delhi",
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
    type: "article",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title:
      "Dental Appliances for Sleep Apnoea: A Comfortable Alternative to CPAP",
    description:
      "Struggling with CPAP? Learn how dental (oral) appliances treat mild-moderate sleep apnoea & snoring. Expert evaluation by Dr. Manish Aggarwal, Delhi.",
    url: pageUrl,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/assets/images/dental-appliance-sleep-apnoea-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Dental Appliance for Sleep Apnoea - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dental Appliances for Sleep Apnoea: A Comfortable Alternative to CPAP",
    description:
      "Struggling with CPAP? Learn how dental (oral) appliances treat mild-moderate sleep apnoea & snoring. Expert evaluation by Dr. Manish Aggarwal, Delhi.",
    images: [
      `${siteUrl}/assets/images/dental-appliance-sleep-apnoea-og.jpg`,
    ],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Dental Appliances for Sleep Apnoea: A Comfortable Alternative to CPAP",
  description:
    "Struggling with CPAP? Learn how dental (oral) appliances treat mild-moderate sleep apnoea & snoring. Expert evaluation by Dr. Manish Aggarwal, Delhi.",
  medicalAudience: {
    "@type": "Patient",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Obstructive Sleep Apnoea",
  },
  lastReviewed: "2026-07-30",
  reviewedBy: {
    "@type": "Physician",
    name: "Dr. Manish Aggarwal",
    medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
  },
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
};

const medicalDeviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalDevice",
  name: "Dental Appliance (Oral Appliance) for Sleep Apnoea",
  description:
    "A custom-made device worn in the mouth during sleep that repositions the jaw or tongue to keep the airway open, used to treat mild to moderate obstructive sleep apnoea and snoring.",
  medicineSystem: "https://schema.org/WesternConventional",
  recognizingAuthority: {
    "@type": "Organization",
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
      name: "Dental Appliances for Sleep Apnoea",
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
      name: "What is a dental appliance for Sleep Apnoea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dental appliance, or oral appliance, is a custom-made device worn in the mouth during sleep that helps keep the airway open by repositioning the jaw or tongue, reducing snoring and breathing pauses in suitable patients.",
      },
    },
    {
      "@type": "Question",
      name: "Is a dental appliance better than CPAP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is universally better — they work differently and suit different patients. CPAP is generally the preferred first-line treatment for moderate to severe sleep apnoea, while oral appliances may be a suitable option for mild to moderate cases or patients unable to tolerate CPAP. The right choice depends on individual evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible for Oral Appliance Therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eligibility depends on the severity of your sleep apnoea, your airway evaluation, and factors such as dental health. It is generally considered for mild to moderate Obstructive Sleep Apnoea or patients who cannot tolerate CPAP, following a detailed evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "Can a dental appliance stop snoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For many suitable patients, oral appliance therapy can significantly reduce snoring by helping keep the airway open. Results vary depending on the individual and underlying cause of snoring.",
      },
    },
    {
      "@type": "Question",
      name: "Is it comfortable to wear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients adjust to wearing an oral appliance within a few weeks, though some initial jaw discomfort or dry mouth is common. Proper fitting by a qualified dental sleep medicine professional helps improve comfort over time.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The lifespan of an oral appliance varies depending on the material and how well it is maintained, but they are generally designed for extended use with proper care. Your dental sleep medicine provider can advise on replacement timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Do I still need a Sleep Study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Sleep Study is an essential part of diagnosing sleep apnoea and determining its severity, which guides whether oral appliance therapy is appropriate. It may also be repeated after starting the appliance to confirm effectiveness.",
      },
    },
  ],
};

export default function DentalAppliancesPageRoute() {
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
          __html: JSON.stringify(medicalDeviceSchema),
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

      <OralApplianceSleepApneaPage />
    </>
  );
}