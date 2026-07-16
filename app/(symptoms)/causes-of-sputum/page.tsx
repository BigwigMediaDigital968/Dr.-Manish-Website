import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

export const metadata = {
  title: "Causes of Sputum in Throat | Consult Dr. Manish Aggarwal",
  description:
    "Dealing with sputum in throat? Understand the causes of sputum and get expert advice from pulmonologist Dr. Manish Aggarwal. Book your consultation now.",
  keywords: [
    "causes of sputum",
    "sputum in throat",
    "sputum causes",
    "cough with sputum",
    "pulmonologist near me",
    "book pulmonologist appointment",
    "sputum consultation",
  ],
  alternates: {
    canonical: `${BASE_URL}/causes-of-sputum`,
  },
  openGraph: {
    title: "Causes of Sputum in Throat | Consult Dr. Manish Aggarwal",
    description:
      "Dealing with sputum in throat? Understand the causes of sputum and get expert advice from pulmonologist Dr. Manish Aggarwal. Book your consultation now.",
    url: `${BASE_URL}/causes-of-sputum`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Causes of Sputum in Throat | Consult Dr. Manish Aggarwal",
    description:
      "Dealing with sputum in throat? Understand the causes of sputum and get expert advice from pulmonologist Dr. Manish Aggarwal. Book your consultation now.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/causes-of-sputum#webpage`,
      url: `${BASE_URL}/causes-of-sputum`,
      name: "Causes of Sputum in Throat | Consult Dr. Manish Aggarwal",
      description:
        "Dealing with sputum in throat? Understand the causes of sputum and get expert advice from pulmonologist Dr. Manish Aggarwal. Book your consultation now.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Sputum Production",
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
      "@id": `${BASE_URL}/causes-of-sputum#breadcrumb`,
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
          name: "Causes of Sputum",
          item: `${BASE_URL}/causes-of-sputum`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/causes-of-sputum#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the main cause of sputum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main cause of sputum is usually a respiratory infection, such as a cold, flu, bronchitis, or sinusitis. These conditions irritate the airways and cause the body to produce extra mucus, which comes up as sputum when you cough. Other causes of sputum include asthma, smoking, allergies, and acid reflux.",
          },
        },
        {
          "@type": "Question",
          name: "Is it normal to produce sputum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, producing a small amount of sputum from time to time is normal, especially during a mild cold or seasonal allergies. Your airways naturally produce mucus to trap dust and germs. However, if sputum in throat continues for more than two to three weeks, contains blood, or comes with fever and breathing difficulty, it is best to consult a pulmonologist.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for sputum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should see a pulmonologist if your cough with sputum lasts longer than three weeks, if the sputum is discolored, blood-tinged, or foul-smelling, or if you experience chest pain, fever, or shortness of breath along with it.",
          },
        },
        {
          "@type": "Question",
          name: "Can sputum in throat be treated without medicine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mild sputum caused by a cold or allergies often improves with rest, warm fluids, and steam inhalation. However, if the cause of sputum is an infection or a chronic lung condition, medical treatment is usually needed for full recovery.",
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
    )
}