import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Bronchial Carcinoid Tumor Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Recurring chest infection or cough that won't clear? It could be a rare, treatable bronchial carcinoid tumor. Get expert care from Dr. Manish Aggarwal, Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "bronchial carcinoid tumor",
    "bronchial carcinoid tumor specialist",
    "bronchial carcinoid tumor specialist in Delhi",
    "carcinoid tumor lung treatment",
    "lung tumor specialist Delhi",
    "pulmonologist for carcinoid tumor",
  ],
  alternates: {
    canonical: `${BASE_URL}/bronchial-carcinoid-tumor`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/bronchial-carcinoid-tumor`,
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
      "@id": `${BASE_URL}/bronchial-carcinoid-tumor#webpage`,
      url: `${BASE_URL}/bronchial-carcinoid-tumor`,
      name: "Bronchial Carcinoid Tumor Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Recurring chest infection or cough that won't clear? It could be a rare, treatable bronchial carcinoid tumor. Get expert care from Dr. Manish Aggarwal, Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Bronchial Carcinoid Tumor",
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
      "@id": `${BASE_URL}/bronchial-carcinoid-tumor#breadcrumb`,
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
          name: "Bronchial Carcinoid Tumor",
          item: `${BASE_URL}/bronchial-carcinoid-tumor`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/bronchial-carcinoid-tumor#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the symptoms of a bronchial carcinoid tumor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common symptoms include a persistent cough, wheezing, coughing up blood, recurrent chest infections in the same part of the lung, shortness of breath, and chest pain. In rare cases where the tumor releases hormones, patients may experience flushing, diarrhoea, or a rapid heartbeat.",
          },
        },
        {
          "@type": "Question",
          name: "Is a carcinoid tumor considered cancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a bronchial carcinoid tumor is technically a type of cancer, but it behaves very differently from more aggressive lung cancers. Most carcinoid tumors grow slowly, rarely spread, and have a much better outlook, which is why they are often described as low-grade.",
          },
        },
        {
          "@type": "Question",
          name: "What is the prognosis for a carcinoid tumor in the lungs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The prognosis for bronchial carcinoid tumors is generally very good, especially for typical carcinoids that are diagnosed early and removed with surgery. Atypical carcinoids carry a slightly higher chance of recurrence or spread, so ongoing follow-up is recommended. A Bronchial Carcinoid Tumor Specialist can give a more personalised outlook based on your specific tumor type and test results.",
          },
        },
        {
          "@type": "Question",
          name: "What is the life expectancy of a carcinoid tumor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Life expectancy for most patients with a typical bronchial carcinoid tumor is excellent, often similar to that of the general population, particularly after successful surgical removal. Atypical carcinoids or those diagnosed at a later stage may have a somewhat different outlook, so it is best to discuss your specific case with a specialist.",
          },
        },
        {
          "@type": "Question",
          name: "Can a bronchial carcinoid tumor spread to other organs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is uncommon, but atypical carcinoid tumors carry a higher risk of spreading compared to typical carcinoids. This is why identifying the exact tumor type through biopsy is an important part of planning treatment and follow-up.",
          },
        },
        {
          "@type": "Question",
          name: "Should I see a specialist if I have a persistent cough with recurrent infections?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a cough that does not go away, especially alongside repeated chest infections in the same area or coughing up blood, should be evaluated by a pulmonologist. Early evaluation helps identify the cause, including rare conditions like bronchial carcinoid tumors, and allows for timely treatment.",
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