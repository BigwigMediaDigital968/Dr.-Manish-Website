import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/reason-for-breathlessness";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Reason for Breathlessness? Consult with Dr. Manish Aggarwal";
const description =
  "Worried about breathlessness? Discover the Reason for Breathlessness behind your symptoms. Book your consultation with Dr. Manish Aggarwal now.";

export const metadata = {
  title,
  description,
  keywords: [
    "reason for breathlessness",
    "shortness of breath reason",
    "shortness of breath causes",
    "book pulmonologist consultation",
    "best pulmonologist for breathlessness",
    "Dr. Manish Aggarwal appointment",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title,
    description,
    url: FULL_URL,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: '/logo-new.png',
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "/logo-new.png",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      url: FULL_URL,
      name: title,
      description: description,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Breathlessness",
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
          name: "Reason for Breathlessness",
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
          name: "What is the main reason for breathlessness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single reason for breathlessness. The most common causes include asthma, COPD, chest infections, heart problems, anemia, anxiety, and low fitness levels. A doctor needs to examine you to find the exact cause in your case.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most common shortness of breath causes in young, otherwise healthy people?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In younger people, common shortness of breath causes include asthma, allergies, low fitness, anxiety, and mild anemia. These are usually manageable once identified correctly.",
          },
        },
        {
          "@type": "Question",
          name: "Is shortness of breath always a sign of a serious lung disease?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. While some shortness of breath causes are serious, many are linked to temporary issues like infections, anxiety, or low fitness that improve with the right treatment.",
          },
        },
        {
          "@type": "Question",
          name: "What is the main cause of sputum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sputum, the mucus coughed up from the lungs, is mainly caused by irritation or infection in the airways. Common reasons include chest infections, bronchitis, asthma, COPD, smoking, and allergies. The body produces extra mucus to trap and clear germs, dust, and other irritants from the lungs.",
          },
        },
        {
          "@type": "Question",
          name: "Is it normal to produce sputum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Producing a small amount of clear or white mucus occasionally is normal, since your lungs naturally clear dust and irritants this way. However, it is not normal if the sputum is thick, yellow, green, blood-tinged, or if it lasts for more than two to three weeks. In these cases, it is best to get it checked by a pulmonologist.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for breathlessness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should book an appointment if breathlessness lasts more than a few days, keeps coming back, gets worse with mild activity, or is paired with cough, chest pain, or swelling in your legs.",
          },
        },
        {
          "@type": "Question",
          name: "Can anxiety really cause physical breathlessness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Anxiety can cause real, physical breathlessness through rapid, shallow breathing, even though the lungs themselves are healthy. A doctor can help rule out other causes and guide you toward the right support.",
          },
        },
      ],
    },
  ],
};

export default function page() {
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
