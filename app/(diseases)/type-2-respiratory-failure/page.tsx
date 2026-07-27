import Type2RespiratoryFailurePage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Type 2 Respiratory Failure Care – Dr. Manish Aggarwal";

const description =
  "Drowsy, confused & breathless? It could be Type 2 Respiratory Failure, not just tiredness. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Type 2 Respiratory Failure",
    "Hypercapnic Respiratory Failure",
    "CO2 Narcosis",
    "Type 2 Respiratory Failure Specialist",
    "Type 2 Respiratory Failure Specialist in Delhi",
    "respiratory failure treatment Delhi",
    "pulmonologist for respiratory failure",
  ],
  alternates: {
    canonical: `${BASE_URL}/type-2-respiratory-failure`,
  },
  openGraph: {
    title,
    description,
    image: "/services/type-2-respiratory-failure.png",
    url: `${BASE_URL}/type-2-respiratory-failure`,
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
      "@id": `${BASE_URL}/type-2-respiratory-failure#webpage`,
      url: `${BASE_URL}/type-2-respiratory-failure`,
      name: "Type 2 Respiratory Failure Care – Dr. Manish Aggarwal",
      description:
        "Drowsy, confused & breathless? It could be Type 2 Respiratory Failure, not just tiredness. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Type 2 Respiratory Failure",
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
      "@id": `${BASE_URL}/type-2-respiratory-failure#breadcrumb`,
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
          name: "Type 2 Respiratory Failure",
          item: `${BASE_URL}/type-2-respiratory-failure`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/type-2-respiratory-failure#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How to treat type 2 respiratory failure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment usually starts with carefully controlled oxygen therapy and non-invasive ventilation, such as BiPAP, to help remove excess carbon dioxide from the blood. Mechanical ventilation is used in more severe cases. Alongside this, the underlying cause, such as a COPD flare-up or a neuromuscular condition, is treated directly. Dr. Manish Aggarwal decides the right combination based on the severity and cause in each patient.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between type 1 and type 2 lung failure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Type 1 Respiratory Failure involves low blood oxygen with normal or low carbon dioxide levels, usually due to a problem with oxygen exchange in the lungs, such as pneumonia or pulmonary edema. Type 2 Respiratory Failure involves low oxygen along with high carbon dioxide levels, usually due to a problem with the overall effectiveness of breathing, such as COPD or a condition affecting the breathing muscles.",
          },
        },
        {
          "@type": "Question",
          name: "What are type 1 and type 2 respiratory cells?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This refers to a different concept than respiratory failure; it's about the cells that line the lungs' air sacs. Type I pneumocytes are thin cells that make up most of the air sac surface and are where oxygen and carbon dioxide actually pass into and out of the blood. Type II pneumocytes are smaller, more specialised cells that produce surfactant, a substance that helps keep the air sacs open, and can also regenerate into Type I cells when the lung tissue is damaged.",
          },
        },
        {
          "@type": "Question",
          name: "What are type 1 and type 2 cells?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If referring to lung cells, Type I and Type II cells (pneumocytes) are the two main cell types lining the air sacs of the lungs, responsible for gas exchange and surfactant production, respectively, as explained above. This is a separate concept from Type 1 and Type 2 respiratory failure, which are clinical conditions describing different patterns of breathing failure. If you meant something else by this question, feel free to clarify with your specialist during your consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Can type 2 respiratory failure be reversed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, especially when it's triggered by a treatable flare-up, such as a COPD exacerbation, type 2 respiratory failure can improve significantly with prompt treatment. When it's linked to a chronic underlying condition, ongoing management, sometimes including long-term ventilatory support, may be needed to keep it controlled.",
          },
        },
        {
          "@type": "Question",
          name: "When should I seek emergency care for confusion and breathlessness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you or someone else develops sudden confusion, extreme drowsiness, or a severe headache along with breathlessness, seek emergency care immediately. These can be signs of dangerously high carbon dioxide levels, and early treatment significantly improves the outcome.",
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
      <Type2RespiratoryFailurePage />
    </>
  );
}