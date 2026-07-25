import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pulmonary Hypertension Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Breathless or fatigued for no clear reason? It could be Pulmonary Artery Hypertension. Get expert care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Pulmonary Artery Hypertension",
    "Pulmonary Artery Hypertension Specialist",
    "Pulmonary Artery Hypertension Specialist in Delhi",
    "pulmonary hypertension treatment Delhi",
    "pulmonologist for pulmonary hypertension",
  ],
  alternates: {
    canonical: `${BASE_URL}/pulmonary-artery-hypertension`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/pulmonary-artery-hypertension`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${BASE_URL}/pulmonary-artery-hypertension#webpage`,
      url: `${BASE_URL}/pulmonary-artery-hypertension`,
      name: "Pulmonary Hypertension Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Breathless or fatigued for no clear reason? It could be Pulmonary Artery Hypertension. Get expert care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pulmonary Artery Hypertension",
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
      "@id": `${BASE_URL}/pulmonary-artery-hypertension#breadcrumb`,
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
          name: "Pulmonary Artery Hypertension",
          item: `${BASE_URL}/pulmonary-artery-hypertension`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pulmonary-artery-hypertension#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is pulmonary hypertension curable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pulmonary hypertension generally cannot be cured, but it can be managed very effectively with the right combination of medication, lifestyle adjustments, and treatment of any underlying cause. Many patients maintain a good quality of life for years with consistent treatment and follow-up.",
          },
        },
        {
          "@type": "Question",
          name: "What foods should I avoid with pulmonary hypertension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Patients with pulmonary hypertension are generally advised to limit salt intake, since it can contribute to fluid retention and extra strain on the heart. Excess alcohol and very high-fat meals are also usually discouraged. Since dietary needs can vary based on your specific condition and any related heart or fluid issues, it's best to get personalised guidance from your specialist.",
          },
        },
        {
          "@type": "Question",
          name: "What is pulmonary hypertension and what causes it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pulmonary hypertension is high blood pressure in the arteries that carry blood from the heart to the lungs. It can be caused by heart conditions, lung diseases like COPD or interstitial lung disease, autoimmune diseases, congenital heart defects, chronic blood clots in the lungs, or liver disease. In some cases, no specific cause is found.",
          },
        },
        {
          "@type": "Question",
          name: "Can stress cause pulmonary hypertension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stress on its own is not considered a direct cause of pulmonary hypertension. However, since the heart and lungs are already under strain in this condition, high stress levels can make symptoms feel more pronounced and may affect overall heart health. Managing stress is a helpful part of overall care, but it isn't the underlying cause of the condition itself.",
          },
        },
        {
          "@type": "Question",
          name: "How serious is pulmonary hypertension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pulmonary hypertension can range from mild to severe, and if left untreated, it can lead to significant strain on the heart over time. The outlook depends on the underlying cause, how early it's diagnosed, and how well it responds to treatment, which is why timely evaluation by a Pulmonary Artery Hypertension Specialist is important.",
          },
        },
        {
          "@type": "Question",
          name: "Can pulmonary hypertension be managed with exercise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, supervised exercise as part of pulmonary rehabilitation can help improve exercise capacity and quality of life for many patients. However, activity levels should be guided by your specialist, since certain types or intensities of exercise may need to be avoided depending on the severity of your condition.",
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