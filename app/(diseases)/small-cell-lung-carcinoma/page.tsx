import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Small Cell Lung Carcinoma (SCLC) Care – Dr. Manish Aggarwal";

const description =
  "SCLC grows fast: persistent cough, weight loss, or breathlessness needs urgent evaluation. Get expert diagnosis & treatment from Dr. Manish Aggarwal, Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "small cell lung carcinoma",
    "SCLC",
    "small cell lung carcinoma specialist",
    "small cell lung carcinoma specialist in Delhi",
    "lung cancer treatment Delhi",
    "pulmonologist for lung cancer",
    "SCLC treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/small-cell-lung-carcinoma`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/small-cell-lung-carcinoma`,
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
      "@id": `${BASE_URL}/small-cell-lung-carcinoma#webpage`,
      url: `${BASE_URL}/small-cell-lung-carcinoma`,
      name: "Small Cell Lung Carcinoma (SCLC) Care – Dr. Manish Aggarwal",
      description:
        "SCLC grows fast: persistent cough, weight loss, or breathlessness needs urgent evaluation. Get expert diagnosis & treatment from Dr. Manish Aggarwal, Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Small Cell Lung Carcinoma",
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
      "@id": `${BASE_URL}/small-cell-lung-carcinoma#breadcrumb`,
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
          name: "Small Cell Lung Carcinoma",
          item: `${BASE_URL}/small-cell-lung-carcinoma`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/small-cell-lung-carcinoma#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How serious is small cell lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SCLC is a serious, fast-growing lung cancer often diagnosed at an advanced stage. It usually responds well to chemotherapy and radiation initially, and prompt treatment from a Small Cell Lung Carcinoma Specialist can help control the disease effectively.",
          },
        },
        {
          "@type": "Question",
          name: "What is the survival rate for small cell lung cancer by stage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Survival depends on the stage at diagnosis. Limited-stage SCLC generally has a better outlook than extensive-stage SCLC, where it has spread further. A specialist can give a personalised prognosis based on your test results.",
          },
        },
        {
          "@type": "Question",
          name: "Is small cell lung cancer curable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SCLC can sometimes be cured if caught at a limited stage and treated promptly. In more advanced stages, treatment focuses on controlling growth, extending survival, and managing symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "What is the prognosis for extensive small cell lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Extensive-stage SCLC carries a more guarded prognosis than limited-stage disease, but chemotherapy, radiation, and immunotherapy can still control it and improve quality of life. A specialist can give a personalised outlook based on your case.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between small cell and non-small cell lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SCLC grows faster, is more strongly linked to smoking, and is mainly treated with chemotherapy and radiation. NSCLC grows more slowly, is often caught earlier, and has more options, including surgery and targeted therapy.",
          },
        },
        {
          "@type": "Question",
          name: "Should I see a specialist if I have a persistent cough and weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A cough lasting more than a few weeks, especially with weight loss, blood in mucus, or chest pain, should be evaluated promptly. Since SCLC can progress quickly, early evaluation significantly improves outcomes.",
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