import AspirationPneumoniaPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Aspiration Pneumonia Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Fever or cough after choking or trouble swallowing? It could be aspiration pneumonia. Get expert care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Aspiration Pneumonia",
    "Aspiration Pneumonia Specialist",
    "Aspiration Pneumonia Specialist in Delhi",
    "aspiration pneumonia treatment Delhi",
    "pulmonologist for aspiration pneumonia",
  ],
  alternates: {
    canonical: `${BASE_URL}/aspiration-pneumonia`,
  },
  openGraph: {
    title,
    description,
    image: "/services/aspiration-pneumonia.png",
    url: `${BASE_URL}/aspiration-pneumonia`,
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
      "@id": `${BASE_URL}/aspiration-pneumonia#webpage`,
      url: `${BASE_URL}/aspiration-pneumonia`,
      name: "Aspiration Pneumonia Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Fever or cough after choking or trouble swallowing? It could be aspiration pneumonia. Get expert care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Aspiration Pneumonia",
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
      "@id": `${BASE_URL}/aspiration-pneumonia#breadcrumb`,
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
          name: "Aspiration Pneumonia",
          item: `${BASE_URL}/aspiration-pneumonia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/aspiration-pneumonia#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the first signs of aspiration pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Early signs often include a new or worsening cough, sometimes with foul-smelling mucus, fever, chest discomfort, and shortness of breath. In older adults, confusion can also be an early sign. Symptoms usually appear within hours to a few days after an episode of choking or difficulty swallowing.",
          },
        },
        {
          "@type": "Question",
          name: "Can a person recover from aspiration pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many people recover well with prompt antibiotic treatment, especially when the infection is caught early. Recovery also depends on addressing the underlying cause, such as a swallowing difficulty, to reduce the chances of it happening again. Patients with other significant health conditions may need closer monitoring during recovery.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cause of aspiration pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aspiration pneumonia is caused by food, liquid, saliva, or stomach contents being accidentally inhaled into the lungs, introducing bacteria that lead to infection. This often happens due to swallowing difficulties, reduced consciousness, acid reflux, or conditions that affect the body's normal airway-protective reflexes.",
          },
        },
        {
          "@type": "Question",
          name: "What are the chances of surviving aspiration pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outcomes vary widely depending on the person's overall health, age, and any underlying conditions. Many people, especially those without significant other health issues, recover well with timely treatment. Older adults or those with weakened immunity or other serious illnesses may face a higher risk of complications, which is why prompt evaluation by a specialist matters.",
          },
        },
        {
          "@type": "Question",
          name: "Is aspiration pneumonia harmful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, aspiration pneumonia can range from mild to serious, and if left untreated, it can lead to complications such as lung abscesses or more widespread infection. Prompt treatment significantly improves outcomes, which is why it's important to seek medical care as soon as symptoms appear.",
          },
        },
        {
          "@type": "Question",
          name: "What are the first warning signs of pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Early warning signs of pneumonia generally include a persistent cough, fever, chills, chest pain that worsens with breathing, shortness of breath, and fatigue. If these symptoms appear, especially after an episode of choking or difficulty swallowing, it's important to get evaluated promptly, since early treatment leads to better outcomes.",
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
      <AspirationPneumoniaPage />
    </>
  );
}