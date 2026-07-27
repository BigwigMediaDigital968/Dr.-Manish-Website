import PulmonaryEdemaPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pulmonary Edema Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Struggling to breathe lying down or coughing up pink froth? It could be pulmonary edema. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Pulmonary Edema",
    "Fluid Inside Lungs",
    "pulmonary edema treatment Delhi",
    "pulmonologist for pulmonary edema",
    "fluid in lungs treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/pulmonary-edema`,
  },
  openGraph: {
    title,
    description,
    imaage: "/services/pulmonary-edema.png",
    url: `${BASE_URL}/pulmonary-edema`,
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
      "@id": `${BASE_URL}/pulmonary-edema#webpage`,
      url: `${BASE_URL}/pulmonary-edema`,
      name: "Pulmonary Edema Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Struggling to breathe lying down or coughing up pink froth? It could be pulmonary edema. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pulmonary Edema",
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
      "@id": `${BASE_URL}/pulmonary-edema#breadcrumb`,
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
          name: "Pulmonary Edema",
          item: `${BASE_URL}/pulmonary-edema`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pulmonary-edema#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Can pulmonary edema be cured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pulmonary edema itself can usually be resolved with prompt treatment, especially when the underlying cause, such as heart failure or infection, is identified and managed. However, if it's linked to a long-term condition like chronic heart or kidney disease, ongoing management is needed to prevent it from happening again.",
          },
        },
        {
          "@type": "Question",
          name: "How to reduce fluid in lungs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reducing fluid in the lungs typically involves oxygen support to ease breathing, diuretic medicines to help the body remove excess fluid, and treating the underlying cause, whether that's the heart, kidneys, or an infection. This should always be done under medical supervision rather than attempted at home, since pulmonary edema can worsen quickly.",
          },
        },
        {
          "@type": "Question",
          name: "How do you know if you have fluid in your lungs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common signs include sudden or worsening breathlessness, especially when lying down, a cough with frothy or pink-tinged mucus, wheezing, and a rapid heartbeat. If you notice these symptoms, especially if they come on suddenly, it's important to seek medical attention promptly, since pulmonary edema can be a medical emergency.",
          },
        },
        {
          "@type": "Question",
          name: "How is pulmonary edema treated in renal failure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When pulmonary edema is caused by renal failure, treatment focuses on removing the excess fluid the kidneys can't clear on their own, often through diuretics if the kidneys still respond to them, or through dialysis if they don't. Oxygen support is also given as needed, alongside close monitoring of fluid balance and kidney function.",
          },
        },
        {
          "@type": "Question",
          name: "Is pulmonary edema a medical emergency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be, particularly when it develops suddenly and causes severe breathlessness. This is often called acute pulmonary edema and needs immediate medical attention. Gradual, milder forms linked to chronic conditions still need timely treatment but may not always require emergency care.",
          },
        },
        {
          "@type": "Question",
          name: "Should I go to the hospital if I think I have fluid in my lungs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you're experiencing sudden or severe breathlessness, especially with frothy or pink-tinged mucus, a feeling of suffocation, or bluish lips, seek emergency care right away rather than waiting, since pulmonary edema can worsen quickly without treatment.",
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
      <PulmonaryEdemaPage />
    </>
  );
}