import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Fungal Pneumonia: Symptoms & Causes – Dr. Manish Aggarwal";

const description =
  "Cough not improving with antibiotics? Learn about fungal pneumonia symptoms & causes, and get expert care from Dr. Manish Aggarwal in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "fungal pneumonia",
    "fungal pneumonia specialist",
    "fungal pneumonia specialist in Delhi",
    "fungal pneumonia treatment",
    "fungal pneumonia treatment Delhi",
    "pulmonologist for fungal pneumonia",
    "pneumonia doctor Delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/fungal-pneumonia`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/fungal-pneumonia`,
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
      "@id": `${BASE_URL}/fungal-pneumonia#webpage`,
      url: `${BASE_URL}/fungal-pneumonia`,
      name: "Fungal Pneumonia: Symptoms & Causes – Dr. Manish Aggarwal",
      description:
        "Cough not improving with antibiotics? Learn about fungal pneumonia symptoms & causes, and get expert care from Dr. Manish Aggarwal in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Fungal Pneumonia",
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
      "@id": `${BASE_URL}/fungal-pneumonia#breadcrumb`,
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
          name: "Fungal Pneumonia",
          item: `${BASE_URL}/fungal-pneumonia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/fungal-pneumonia#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How does a person get fungal pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fungal pneumonia develops when a person breathes in fungal spores from the environment, such as soil, dust, or bird and bat droppings. Most healthy people who are exposed do not develop pneumonia, but those with weakened immune systems are far more likely to get infected after exposure.",
          },
        },
        {
          "@type": "Question",
          name: "What is the survival rate of fungal pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Survival rates vary widely depending on the specific fungus, how early it is diagnosed, and the patient's overall immune status. Healthy individuals who are diagnosed and treated early generally recover well, while patients with significantly weakened immunity face a higher risk of complications. Getting evaluated by a Fungal Pneumonia Specialist as soon as symptoms appear improves the outcome.",
          },
        },
        {
          "@type": "Question",
          name: "Who is most at risk for fungal pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "People with weakened immune systems are at the highest risk, including those with HIV, cancer patients undergoing chemotherapy, organ transplant recipients, and people on long-term steroid use. People with existing lung conditions, and those living or working in areas with high fungal exposure, such as farming or construction, are also at increased risk.",
          },
        },
        {
          "@type": "Question",
          name: "How to tell if pneumonia is bacterial or fungal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bacterial pneumonia usually comes on suddenly with high fever and thick, discoloured mucus, and improves with antibiotics. Fungal pneumonia tends to develop more slowly, often does not respond to antibiotics, and needs specific tests like sputum culture, blood tests, or sometimes a bronchoscopy to identify the fungus. A pulmonologist can confirm the exact cause through proper testing rather than symptoms alone.",
          },
        },
        {
          "@type": "Question",
          name: "Is fungal pneumonia contagious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, fungal pneumonia is generally not contagious from person to person. It is caused by inhaling fungal spores from the environment, not by spread through coughing or close contact, though people with weakened immunity should still take precautions around known high-exposure environments.",
          },
        },
        {
          "@type": "Question",
          name: "How long does treatment for fungal pneumonia take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment duration varies depending on the specific fungus and severity of infection, often ranging from several weeks to a few months. Regular follow-up and imaging help Dr. Manish Aggarwal determine when it is safe to stop antifungal treatment.",
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