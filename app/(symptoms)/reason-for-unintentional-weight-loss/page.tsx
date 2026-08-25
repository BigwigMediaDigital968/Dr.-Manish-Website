import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/reason-for-unintentional-weight-loss";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title =
  "Reason for Unintentional Weight Loss? Consult with Dr. Manish Aggarwal";
const description =
  "Losing weight without trying? Discover the Reason for Unintentional Weight Loss behind your symptoms. Book your consultation with Dr. Manish Aggarwal now.";

export const metadata = {
  title,
  description,
  keywords: [
    "reason for unintentional weight loss",
    "reason for unexplained weight loss",
    "causes for unexplained weight loss",
    "book pulmonologist consultation",
    "best pulmonologist for weight loss",
    "Dr. Manish Aggarwal appointment",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title,
    description,
    url: FULL_URL,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`,
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${BASE_URL}/_next/image?url=%2Flogo-new.png&w=750&q=75`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      url: FULL_URL,
      name: title,
      description: description,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalSignOrSymptom",
        name: "Unintentional Weight Loss",
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
      "@id": `${FULL_URL}#breadcrumb`,
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
          name: "Reason for Unintentional Weight Loss",
          item: FULL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${FULL_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the main reason for unintentional weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single reason for unexplained weight loss. Common causes include TB, COPD, lung cancer, thyroid problems, diabetes, and depression. A doctor needs to examine you to find the exact cause in your case.",
          },
        },
        {
          "@type": "Question",
          name: "How much weight loss is considered abnormal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Losing more than 5 percent of your body weight in six to twelve months without trying is generally considered a reason for unexplained weight loss that should be checked by a doctor. This threshold is the standard doctors use worldwide to flag a genuine reason for unexplained weight loss rather than normal day to day fluctuation.",
          },
        },
        {
          "@type": "Question",
          name: "Can stress or anxiety cause unintentional weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Ongoing stress and anxiety can lower appetite and change digestion, leading to gradual weight loss even when there is no physical illness involved.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for unexplained weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should book an appointment if the weight loss lasts more than a month, keeps coming back, or is paired with cough, breathlessness, wheezing, fever, or chest pain.",
          },
        },
        {
          "@type": "Question",
          name: "When should I worry about unintentional weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should start paying attention if you lose more than 5% of your body weight within 6 months without trying, especially if it comes with other symptoms like cough, tiredness, breathlessness, or loss of appetite. Unexplained weight loss that continues for more than a few weeks should always be checked by a doctor.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop unintentional weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first step is not to try to stop it on your own by eating more, but to find out the reason for unintentional weight loss. Once the underlying cause, whether it is a thyroid issue, infection, digestive problem, or a lung condition, is identified and treated, the weight loss usually stops on its own. Self-treating without a diagnosis can delay proper care.",
          },
        },
        {
          "@type": "Question",
          name: "What diseases cause rapid weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Several conditions can cause rapid, unexplained weight loss, including tuberculosis, COPD, lung cancer, uncontrolled diabetes, thyroid disorders, and certain digestive diseases like Crohn's disease. Since many of these are linked to the lungs and chest, a pulmonology checkup is often one of the first and most useful steps in finding the answer.",
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
  );
}
