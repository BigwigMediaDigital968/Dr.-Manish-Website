import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pleural Effusion Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Can't breathe lying down or have sharp chest pain? It could be fluid around your lungs. Get expert care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "pleural effusion",
    "pleurisy",
    "fluid outside lungs",
    "pleural effusion specialist",
    "pleural effusion specialist in Delhi",
    "pleural effusion treatment Delhi",
    "pulmonologist for pleural effusion",
  ],
  alternates: {
    canonical: `${BASE_URL}/pleural-effusion`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/pleural-effusion`,
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
      "@id": `${BASE_URL}/pleural-effusion#webpage`,
      url: `${BASE_URL}/pleural-effusion`,
      name: "Pleural Effusion Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Can't breathe lying down or have sharp chest pain? It could be fluid around your lungs. Get expert care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pleural Effusion",
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
      "@id": `${BASE_URL}/pleural-effusion#breadcrumb`,
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
          name: "Pleural Effusion",
          item: `${BASE_URL}/pleural-effusion`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pleural-effusion#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are pleural effusions caused by?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pleural effusions are most commonly caused by infections like pneumonia or tuberculosis, heart failure, cancer, liver or kidney disease, and autoimmune conditions like rheumatoid arthritis. Identifying the specific cause is an important part of deciding the right treatment.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best treatment for pleural effusion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single best treatment, since it depends on how much fluid has built up and what is causing it. Draining the fluid through pleural aspiration or an intercostal drain often provides quick relief, while treating the underlying cause, such as an infection or heart condition, is essential for preventing the fluid from returning.",
          },
        },
        {
          "@type": "Question",
          name: "Is pleural effusion mean TB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. While tuberculosis is one of the common causes of pleural effusion, especially in certain regions, effusions can also be caused by infections other than TB, heart failure, cancer, or autoimmune conditions. Testing the fluid is the only way to confirm the actual cause.",
          },
        },
        {
          "@type": "Question",
          name: "What are the three stages of pleural effusion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pleural effusion, when related to infection, is often described in three stages: the exudative stage, where thin fluid first builds up; the fibrinopurulent stage, where the fluid becomes thicker and infected, sometimes forming pockets; and the organising stage, where scar tissue can form around the lung if it is not treated in time. Not all pleural effusions go through these stages, since this progression mainly applies to infection-related effusions.",
          },
        },
        {
          "@type": "Question",
          name: "Is pleural effusion serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be, depending on the underlying cause and how much fluid has built up. Large effusions can cause significant breathlessness and need prompt drainage, while the underlying condition, such as an infection or cancer, also needs to be addressed to prevent complications.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to recover from pleural effusion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recovery time depends on the cause and how the fluid is managed. Many patients feel relief soon after the fluid is drained, but full recovery depends on how quickly the underlying condition is treated, which can range from a few weeks to longer in more complex cases.",
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