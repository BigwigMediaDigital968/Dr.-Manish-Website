import type { Metadata } from "next";
import OralApplianceSleepApneaPage from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/dental-appliances-for-sleep-apnoea";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Dental Appliance for Sleep Apnoea | CPAP Alternative";
const description =
  "Struggling with CPAP? Learn how dental (oral) appliances treat mild-moderate sleep apnoea & snoring. Expert evaluation by Dr. Manish Aggarwal, Delhi.";

export const metadata: Metadata = {
  title,
  description,
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
        alt: "Dental Appliance for Sleep Apnoea - Dr. Manish Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      name: "Dental Appliances for Sleep Apnoea: A Comfortable Alternative to CPAP",
      description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: [
        {
          "@type": "MedicalCondition",
          name: "Obstructive Sleep Apnoea",
        },
        {
          "@id": `${FULL_URL}#medical-device`,
        },
      ],
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
      "@type": "MedicalDevice",
      "@id": `${FULL_URL}#medical-device`,
      name: "Dental Appliance (Oral Appliance) for Sleep Apnoea",
      description:
        "A custom-made device worn in the mouth during sleep that repositions the jaw or tongue to keep the airway open, used to treat mild to moderate obstructive sleep apnoea and snoring.",
      medicineSystem: "https://schema.org/WesternConventional",
      recognizingAuthority: {
        "@id": `${BASE_URL}/#clinic`,
      },
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
          name: "Dental Appliances for Sleep Apnoea",
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
    },
  ],
};

export default function DentalAppliancesPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <OralApplianceSleepApneaPage />
    </>
  );
}
