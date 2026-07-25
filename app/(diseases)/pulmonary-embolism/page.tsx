import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pulmonary Embolism Treatment in Delhi – Dr. Manish Aggarwal";

const description =
  "Learn about pulmonary embolism, its causes, symptoms, diagnosis, and treatment. Get expert care from Dr. Manish Aggarwal, Pulmonary Embolism Specialist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Pulmonary Embolism",
    "Pulmonary Embolism Specialist",
    "Pulmonary Embolism Specialist in Delhi",
    "pulmonary embolism treatment Delhi",
    "pulmonologist for pulmonary embolism",
    "blood clot in lungs",
  ],
  alternates: {
    canonical: `${BASE_URL}/pulmonary-embolism`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/pulmonary-embolism`,
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
      "@id": `${BASE_URL}/pulmonary-embolism#webpage`,
      url: `${BASE_URL}/pulmonary-embolism`,
      name: "Pulmonary Embolism Treatment in Delhi – Dr. Manish Aggarwal",
      description:
        "Learn about pulmonary embolism, its causes, symptoms, diagnosis, and treatment. Get expert care from Dr. Manish Aggarwal, Pulmonary Embolism Specialist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pulmonary Embolism",
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
      "@id": `${BASE_URL}/pulmonary-embolism#breadcrumb`,
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
          name: "Pulmonary Embolism",
          item: `${BASE_URL}/pulmonary-embolism`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pulmonary-embolism#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cause of pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pulmonary embolism is usually caused by a blood clot that forms in a deep vein, most often in the leg, a condition called deep vein thrombosis, which then travels to the lungs. Risk factors that make this more likely include prolonged immobility, recent surgery, certain medical conditions like cancer or clotting disorders, pregnancy, smoking, and obesity.",
          },
        },
        {
          "@type": "Question",
          name: "What is the treatment for pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment usually starts with blood thinners to stop the clot from growing and prevent new clots from forming. In more severe cases, clot-dissolving medicines or a procedure to remove the clot may be needed, along with oxygen support and hospital monitoring. Long-term treatment focuses on preventing recurrence.",
          },
        },
        {
          "@type": "Question",
          name: "What are the signs and symptoms of pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common symptoms include sudden shortness of breath, sharp chest pain that worsens with breathing, a rapid heartbeat, coughing up blood, lightheadedness, and sometimes swelling or pain in one leg. Since symptoms can come on suddenly and be severe, they should be treated as a medical emergency.",
          },
        },
        {
          "@type": "Question",
          name: "Can someone recover from a pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many people recover well from a pulmonary embolism, especially with prompt diagnosis and treatment. Recovery time varies depending on the size of the clot and how quickly treatment began, and most patients continue blood thinners for a period of time afterward to prevent recurrence, under the guidance of their Pulmonary Embolism Specialist.",
          },
        },
        {
          "@type": "Question",
          name: "How long do you need to take blood thinners after a pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This varies from patient to patient, generally ranging from a few months to, in some cases, long-term or lifelong treatment, depending on the underlying cause and risk of recurrence. Your specialist will determine the right duration based on your specific case.",
          },
        },
        {
          "@type": "Question",
          name: "When should I seek emergency care for possible pulmonary embolism?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you experience sudden shortness of breath, sharp chest pain, a rapid heartbeat, or coughing up blood, seek emergency medical care immediately rather than waiting for a scheduled appointment, since pulmonary embolism can become life-threatening very quickly without prompt treatment.",
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