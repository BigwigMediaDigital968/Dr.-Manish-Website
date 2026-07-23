import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "ILD / Lung Fibrosis Care in Delhi with Dr. Manish Aggarwal";

const description =
  "Worsening breathlessness or a dry cough that won't go away? Learn about Interstitial Lung Disease (ILD) and get expert care from Dr. Manish Aggarwal.";

export const metadata = {
  title,
  description,
  keywords: [
    "interstitial lung disease",
    "ILD",
    "lung fibrosis",
    "interstitial lung disease specialist",
    "interstitial lung disease specialist in Delhi",
    "ILD treatment Delhi",
    "pulmonary fibrosis treatment",
    "pulmonologist for lung fibrosis",
  ],
  alternates: {
    canonical: `${BASE_URL}/interstitial-lung-disease`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/interstitial-lung-disease`,
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
      "@id": `${BASE_URL}/interstitial-lung-disease#webpage`,
      url: `${BASE_URL}/interstitial-lung-disease`,
      name: "ILD / Lung Fibrosis Care in Delhi with Dr. Manish Aggarwal",
      description:
        "Worsening breathlessness or a dry cough that won't go away? Learn about Interstitial Lung Disease (ILD) and get expert care from Dr. Manish Aggarwal.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Interstitial Lung Disease",
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
      "@id": `${BASE_URL}/interstitial-lung-disease#breadcrumb`,
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
          name: "Interstitial Lung Disease",
          item: `${BASE_URL}/interstitial-lung-disease`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/interstitial-lung-disease#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the main cause of Interstitial Lung Disease?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ILD can be caused by autoimmune diseases, long-term exposure to dust or chemicals, certain medications, or previous radiation therapy. In many cases, especially idiopathic pulmonary fibrosis, no specific cause is found despite thorough testing.",
          },
        },
        {
          "@type": "Question",
          name: "Can Interstitial Lung Disease be cured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ILD cannot be cured, since the scarring in the lung tissue is permanent, but treatment can slow down its progression and manage symptoms effectively. Many patients maintain a good quality of life for years with the right ongoing care.",
          },
        },
        {
          "@type": "Question",
          name: "How serious is lung fibrosis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lung fibrosis can range from mild, slowly progressing cases to severe forms that significantly affect breathing and daily activity. The outlook depends on the type of ILD, how early it is diagnosed, and how the patient responds to treatment, which is why early evaluation by an Interstitial Lung Disease Specialist matters.",
          },
        },
        {
          "@type": "Question",
          name: "What is the life expectancy for someone with Interstitial Lung Disease?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Life expectancy varies widely depending on the specific type of ILD, its underlying cause, and how early treatment begins. Some forms progress slowly over many years, while others, like idiopathic pulmonary fibrosis, can progress faster. Regular monitoring and early treatment can meaningfully improve outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between ILD and pulmonary fibrosis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Interstitial Lung Disease is a broad term covering many conditions that cause lung scarring, while pulmonary fibrosis specifically refers to the scarring itself and is one of the outcomes of several types of ILD. In everyday use, the terms are often used interchangeably, but a pulmonologist can clarify which specific type of ILD you have.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a specialist for breathlessness or a persistent cough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you have breathlessness that keeps getting worse over weeks or months, or a dry cough that does not go away, it is worth getting evaluated by a pulmonologist. Early diagnosis of ILD makes a significant difference in how well the condition can be managed long-term.",
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