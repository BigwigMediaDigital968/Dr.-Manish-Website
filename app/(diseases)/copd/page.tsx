import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "COPD: Symptoms, Treatment & Specialist Care in Delhi";

const description =
  "Learn about COPD symptoms, causes & treatment options. Consult Dr. Manish Aggarwal, a trusted COPD specialist in Delhi, for expert diagnosis and care.";

export const metadata = {
  title,
  description,
  keywords: [
    "copd",
    "copd treatment",
    "copd treatment Delhi",
    "copd specialist",
    "copd specialist in Delhi",
    "pulmonologist for copd",
    "chronic obstructive pulmonary disease treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/copd`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/copd`,
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
      "@id": `${BASE_URL}/copd#webpage`,
      url: `${BASE_URL}/copd`,
      name: "COPD: Symptoms, Treatment & Specialist Care in Delhi",
      description:
        "Learn about COPD symptoms, causes & treatment options. Consult Dr. Manish Aggarwal, a trusted COPD specialist in Delhi, for expert diagnosis and care.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
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
      "@id": `${BASE_URL}/copd#breadcrumb`,
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
          name: "COPD",
          item: `${BASE_URL}/copd`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/copd#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most effective treatment for COPD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most effective treatment usually combines quitting smoking, using inhalers as prescribed, staying active through pulmonary rehabilitation, and regular check-ups with a COPD specialist. Dr. Manish Aggarwal designs a combination plan based on each patient's stage and symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "What is a normal oxygen level for a COPD patient?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A normal oxygen saturation level is usually between 95% and 100%. Some COPD patients may be considered stable at slightly lower levels, often around 88% to 92%, depending on their condition. Always discuss your specific target range with your pulmonologist.",
          },
        },
        {
          "@type": "Question",
          name: "How can I improve my COPD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quit smoking, take your medicines exactly as prescribed, stay physically active within your limits, avoid smoke and pollution, and attend regular follow-up visits so your treatment plan can be adjusted when needed.",
          },
        },
        {
          "@type": "Question",
          name: "Is COPD the same as asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Both affect breathing, but they are different conditions and need different approaches to COPD treatment or asthma treatment. Asthma often starts in childhood and symptoms can come and go, while COPD usually develops later in life, mainly from long-term smoking or exposure to pollution, and tends to get worse gradually over time. Some people can have features of both, so a proper diagnosis by a COPD specialist is important.",
          },
        },
        {
          "@type": "Question",
          name: "Can COPD be cured completely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "COPD cannot be cured completely, since the damage already done to the lungs cannot be reversed. However, with the right COPD treatment plan, most patients are able to control their symptoms, avoid frequent flare-ups, and continue with their daily activities comfortably.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I visit my COPD specialist for treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on how severe your condition is. Patients with mild COPD may need a check-up every six months, while those with moderate to severe COPD may need to visit every one to three months, or sooner if symptoms suddenly get worse. Dr. Manish Aggarwal will guide you on the right follow-up schedule based on your condition.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do during a COPD flare-up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A flare-up means your symptoms, such as breathlessness, coughing, or mucus, suddenly become worse than usual. This is often a sign that your COPD treatment plan needs to be reviewed. Use your prescribed inhaler as directed and rest in a comfortable position. If your breathing does not improve, your lips or fingertips turn bluish, or you feel confused or extremely breathless, seek medical help immediately rather than waiting it out at home.",
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