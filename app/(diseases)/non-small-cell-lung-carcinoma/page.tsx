import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "NSCLC Diagnosis & Care in Delhi with Dr. Manish Aggarwal";

const description =
  "Persistent cough, weight loss or chest pain? Learn about Non-Small Cell Lung Carcinoma (NSCLC) and get expert care from Dr. Manish Aggarwal in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "non-small cell lung carcinoma",
    "NSCLC",
    "non-small cell lung carcinoma specialist",
    "non-small cell lung carcinoma specialist in Delhi",
    "lung cancer treatment Delhi",
    "pulmonologist for lung cancer",
    "NSCLC treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/non-small-cell-lung-carcinoma`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/non-small-cell-lung-carcinoma`,
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
      "@id": `${BASE_URL}/non-small-cell-lung-carcinoma#webpage`,
      url: `${BASE_URL}/non-small-cell-lung-carcinoma`,
      name: "NSCLC Diagnosis & Care in Delhi with Dr. Manish Aggarwal",
      description:
        "Persistent cough, weight loss or chest pain? Learn about Non-Small Cell Lung Carcinoma (NSCLC) and get expert care from Dr. Manish Aggarwal in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Non-Small Cell Lung Carcinoma",
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
      "@id": `${BASE_URL}/non-small-cell-lung-carcinoma#breadcrumb`,
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
          name: "Non-Small Cell Lung Carcinoma",
          item: `${BASE_URL}/non-small-cell-lung-carcinoma`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/non-small-cell-lung-carcinoma#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is non-small cell lung cancer curable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-small cell lung cancer can be curable, especially when it is diagnosed at an early stage and treated with surgery, sometimes combined with chemotherapy or radiation. In more advanced stages, treatment focuses on controlling the cancer's growth and managing symptoms, though outcomes vary depending on the subtype and how far it has spread.",
          },
        },
        {
          "@type": "Question",
          name: "What is the prognosis of non-small cell lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prognosis depends largely on the stage at diagnosis, the specific subtype, and how well the patient responds to treatment. Early-stage NSCLC generally has a better outlook than cancer that has spread to other organs. Molecular testing can also reveal targeted treatment options that improve outcomes for certain patients. A Non-Small Cell Lung Carcinoma Specialist can give a more personalised outlook after reviewing your specific test results.",
          },
        },
        {
          "@type": "Question",
          name: "How do you treat non-small cell lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment depends on the stage and subtype of the cancer, and usually involves a combination of surgery, chemotherapy, radiation therapy, targeted therapy, or immunotherapy. Dr. Manish Aggarwal decides the right combination based on detailed imaging, biopsy results, and molecular testing.",
          },
        },
        {
          "@type": "Question",
          name: "What is non-small cell carcinoma lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-small cell lung carcinoma is the most common type of lung cancer, making up the large majority of cases. It includes subtypes like adenocarcinoma, squamous cell carcinoma, and large cell carcinoma, and tends to grow and spread more slowly than small cell lung cancer, the other main type.",
          },
        },
        {
          "@type": "Question",
          name: "What are the stages of non-small cell lung cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NSCLC is generally staged from I to IV, based on the size of the tumour and whether it has spread to lymph nodes or other parts of the body. Stage I is localised to the lung, while Stage IV indicates the cancer has spread to distant organs. Staging plays a major role in deciding the treatment approach.",
          },
        },
        {
          "@type": "Question",
          name: "Should I see a specialist if I have a persistent cough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a cough that lasts more than a few weeks, especially if accompanied by weight loss, blood in the mucus, or chest pain, should be evaluated by a pulmonologist. Early evaluation allows for timely diagnosis, which significantly improves treatment outcomes for lung cancer.",
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