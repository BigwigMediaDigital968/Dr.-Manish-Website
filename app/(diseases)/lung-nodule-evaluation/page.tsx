import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Lung Nodule Evaluation in Delhi – Dr. Manish Aggarwal";

const description =
  "Found a spot on your lung scan? Most nodules are harmless. Get an expert Lung Nodule Evaluation from Dr. Manish Aggarwal, a trusted pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "lung nodule evaluation",
    "lung nodule evaluation specialist",
    "lung nodule evaluation specialist in Delhi",
    "lung nodule treatment Delhi",
    "pulmonologist for lung nodule",
    "lung nodule biopsy",
  ],
  alternates: {
    canonical: `${BASE_URL}/lung-nodule-evaluation`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/lung-nodule-evaluation`,
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
      "@id": `${BASE_URL}/lung-nodule-evaluation#webpage`,
      url: `${BASE_URL}/lung-nodule-evaluation`,
      name: "Lung Nodule Evaluation in Delhi – Dr. Manish Aggarwal",
      description:
        "Found a spot on your lung scan? Most nodules are harmless. Get an expert Lung Nodule Evaluation from Dr. Manish Aggarwal, a trusted pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Lung Nodule",
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
      "@id": `${BASE_URL}/lung-nodule-evaluation#breadcrumb`,
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
          name: "Lung Nodule Evaluation",
          item: `${BASE_URL}/lung-nodule-evaluation`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/lung-nodule-evaluation#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What tests are done for lung nodules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main tests include a CT scan to characterise the nodule's size, shape, and growth pattern, and a PET-CT scan for nodules with suspicious features. If closer evaluation is needed, a bronchoscopy with biopsy or EBUS may be done to examine the tissue or nearby lymph nodes directly.",
          },
        },
        {
          "@type": "Question",
          name: "Which screening test is commonly used to evaluate the lung for nodules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A low-dose CT scan of the chest is the most commonly used screening test to detect and evaluate lung nodules, especially in people at higher risk, such as long-term smokers. It gives a far more detailed view than a standard chest X-ray.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common cause of lung nodules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common cause is a granuloma, a small area of healed inflammation, often from a past infection like tuberculosis or a fungal infection. The vast majority of lung nodules are benign and unrelated to cancer.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best treatment for lung nodules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single best treatment, since it depends entirely on the nodule's characteristics. Small, low-risk nodules are often just monitored with repeat CT scans, while nodules with more concerning features may need a PET-CT scan or biopsy. Dr. Manish Aggarwal decides the right approach based on your specific scan findings.",
          },
        },
        {
          "@type": "Question",
          name: "When should a lung nodule be biopsied?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A biopsy is generally considered when a nodule is large, growing over time, has suspicious features on imaging, or occurs in a patient with significant risk factors like a long smoking history. Your specialist will weigh these factors to decide if and when a biopsy is needed.",
          },
        },
        {
          "@type": "Question",
          name: "What is the blood test for lung nodules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is not one single blood test that diagnoses a lung nodule, but blood tests may be used to check for signs of infection or inflammation that could explain the nodule, or as part of a broader workup depending on the suspected cause. Imaging remains the primary tool for evaluating lung nodules.",
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