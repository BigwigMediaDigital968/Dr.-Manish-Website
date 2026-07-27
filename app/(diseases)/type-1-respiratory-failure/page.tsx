import Type1RespiratoryFailurePage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Type 1 Respiratory Failure Care – Dr. Manish Aggarwal";

const description =
  "Low oxygen levels but breathing doesn't feel hard? It could be Type 1 Respiratory Failure. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Type 1 Respiratory Failure",
    "Type 1 Respiratory Failure Specialist",
    "Type 1 Respiratory Failure Specialist in Delhi",
    "respiratory failure treatment Delhi",
    "pulmonologist for respiratory failure",
  ],
  alternates: {
    canonical: `${BASE_URL}/type-1-respiratory-failure`,
  },
  openGraph: {
    title,
    description,
    image: "/services/type-1-respiratory-failure.png",
    url: `${BASE_URL}/type-1-respiratory-failure`,
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
      "@id": `${BASE_URL}/type-1-respiratory-failure#webpage`,
      url: `${BASE_URL}/type-1-respiratory-failure`,
      name: "Type 1 Respiratory Failure Care – Dr. Manish Aggarwal",
      description:
        "Low oxygen levels but breathing doesn't feel hard? It could be Type 1 Respiratory Failure. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Type 1 Respiratory Failure",
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
      "@id": `${BASE_URL}/type-1-respiratory-failure#breadcrumb`,
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
          name: "Type 1 Respiratory Failure",
          item: `${BASE_URL}/type-1-respiratory-failure`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/type-1-respiratory-failure#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is type 1 respiratory failure curable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Type 1 Respiratory Failure itself can often be resolved once the underlying cause, such as pneumonia or pulmonary edema, is treated effectively. If it's linked to a long-term condition like interstitial lung disease, ongoing management is needed, though the acute episode can usually be brought under control with prompt treatment.",
          },
        },
        {
          "@type": "Question",
          name: "What medication is used for respiratory failure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medication depends entirely on the underlying cause. This may include antibiotics for pneumonia, diuretics for fluid build-up in pulmonary edema, or clot-dissolving medicines for pulmonary embolism. Oxygen therapy, while not a medication in the traditional sense, is a core part of treatment alongside these.",
          },
        },
        {
          "@type": "Question",
          name: "Can respiratory failure be cured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whether respiratory failure can be fully resolved depends on its cause. Acute episodes triggered by a treatable condition, like an infection, often improve completely with the right treatment. Respiratory failure linked to a chronic underlying lung condition may need long-term management rather than a complete cure.",
          },
        },
        {
          "@type": "Question",
          name: "How long can a person live with respiratory failure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends heavily on the underlying cause, how quickly treatment begins, and the person's overall health. Acute respiratory failure treated promptly often has a good outcome, while outcomes for respiratory failure linked to advanced chronic lung disease vary more widely. A Type 1 Respiratory Failure Specialist can give a clearer picture based on your specific situation and test results.",
          },
        },
        {
          "@type": "Question",
          name: "What fruit is good for the lungs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fruits rich in antioxidants, such as berries, oranges, and apples, are generally considered supportive of overall lung and immune health as part of a balanced diet. That said, no specific fruit can treat or prevent respiratory failure, which is a serious medical condition that needs proper diagnosis and treatment rather than dietary measures alone.",
          },
        },
        {
          "@type": "Question",
          name: "When should I seek emergency care for breathing difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you or someone else has sudden or severe breathlessness, bluish lips or skin, confusion, or a rapid heartbeat, seek emergency care immediately. Type 1 Respiratory Failure can worsen quickly, and early treatment significantly improves the outcome.",
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
      <Type1RespiratoryFailurePage />
    </>
  );
}