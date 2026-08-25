import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/reason-for-cough";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

// SEO Metadata Configuration
export const metadata = {
  title: "Know Reason for Cough? Consult Now | Dr. Manish Aggarwal",
  description:
    "Persistent cough? Find the exact cause of coughing and get expert treatment from Dr. Manish Aggarwal, pulmonologist in Delhi. Book your appointment today.",
  keywords: [
    "reason for cough",
    "causes of coughing",
    "persistent cough treatment",
    "causes of sputum",
    "sputum in throat",
    "cough with sputum",
    "pulmonologist near me",
    "book pulmonologist appointment",
    "cough consultation Delhi",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Know Reason for Cough? Consult Now | Dr. Manish Aggarwal",
    description:
      "Persistent cough? Find the exact cause of coughing and get expert treatment from Dr. Manish Aggarwal, pulmonologist in Delhi. Book your appointment today.",
    url: FULL_URL,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-new.png",
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Know Reason for Cough? Consult Now | Dr. Manish Aggarwal",
    description:
      "Persistent cough? Find the exact cause of coughing and get expert treatment from Dr. Manish Aggarwal, pulmonologist in Delhi. Book your appointment today.",
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
      name: "Know Reason for Cough? Consult Now | Dr. Manish Aggarwal",
      description:
        "Persistent cough? Find the exact cause of coughing and get expert treatment from Dr. Manish Aggarwal, pulmonologist in Delhi. Book your appointment today.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Cough and Sputum Production",
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      author: {
        "@type": "Physician",
        name: "Dr. Manish Aggarwal",
      },
      publisher: {
        "@type": "MedicalOrganization",
        name: "Dr. Manish Aggarwal Clinic",
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
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Reason for Cough",
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
          name: "What is the main cause of a persistent cough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main causes of a persistent cough include respiratory infections, asthma, chronic bronchitis, COPD, post-nasal drip, allergies, and acid reflux (GERD). A pulmonologist can perform diagnostic tests to identify the precise underlying trigger.",
          },
        },
        {
          "@type": "Question",
          name: "Is it normal to produce sputum when coughing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Producing a small amount of sputum during a cold or mild respiratory infection is normal as your airways clear out trapped particles. However, coughing up sputum for more than 2 to 3 weeks, or coughing up discolored or blood-tinged sputum, requires evaluation by a chest specialist.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for a cough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should see a pulmonologist if your cough lasts longer than three weeks, produces discolored or bloody sputum, or is accompanied by symptoms such as chest pain, fever, unintended weight loss, or shortness of breath.",
          },
        },
        {
          "@type": "Question",
          name: "Can a persistent cough be treated without medicine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mild acute coughs caused by simple viral infections may resolve with fluids, rest, and steam inhalation. However, chronic coughs triggered by asthma, infections, or underlying lung conditions require targeted medical diagnosis and treatment for complete recovery.",
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
      <PageContent />
    </>
  );
}
