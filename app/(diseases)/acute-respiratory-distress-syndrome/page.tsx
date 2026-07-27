import ArdsPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "ARDS Care & Recovery in Delhi | Dr. Manish Aggarwal";

const description =
  "Sudden, severe breathlessness after an injury or infection? It could be ARDS. Get urgent evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Acute Respiratory Distress Syndrome",
    "ARDS",
    "Acute Respiratory Distress Syndrome Specialist",
    "Acute Respiratory Distress Syndrome Specialist in Delhi",
    "ARDS treatment Delhi",
    "pulmonologist for ARDS",
  ],
  alternates: {
    canonical: `${BASE_URL}/acute-respiratory-distress-syndrome`,
  },
  openGraph: {
    title,
    description,
    image: "/services/acute-respiratory-distress-syndrome.png",
    url: `${BASE_URL}/acute-respiratory-distress-syndrome`,
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
      "@id": `${BASE_URL}/acute-respiratory-distress-syndrome#webpage`,
      url: `${BASE_URL}/acute-respiratory-distress-syndrome`,
      name: "ARDS Care & Recovery in Delhi | Dr. Manish Aggarwal",
      description:
        "Sudden, severe breathlessness after an injury or infection? It could be ARDS. Get urgent evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Acute Respiratory Distress Syndrome",
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
      "@id": `${BASE_URL}/acute-respiratory-distress-syndrome#breadcrumb`,
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
          name: "Acute Respiratory Distress Syndrome",
          item: `${BASE_URL}/acute-respiratory-distress-syndrome`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/acute-respiratory-distress-syndrome#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Acute Respiratory Distress Syndrome (ARDS)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acute Respiratory Distress Syndrome (ARDS) is a serious condition in which the lungs become severely inflamed and fill with fluid, making it difficult for oxygen to reach the bloodstream. It often develops after severe infections, injuries, or other critical illnesses and requires urgent medical care.",
          },
        },
        {
          "@type": "Question",
          name: "What causes ARDS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ARDS is usually triggered by severe pneumonia, sepsis, major trauma, aspiration of stomach contents, inhalation injury, pancreatitis, or other serious illnesses that cause widespread inflammation in the lungs.",
          },
        },
        {
          "@type": "Question",
          name: "What are the symptoms of ARDS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common symptoms include severe shortness of breath, rapid breathing, low blood oxygen levels, fast heart rate, extreme fatigue, confusion, and bluish lips or fingertips due to insufficient oxygen.",
          },
        },
        {
          "@type": "Question",
          name: "How is ARDS treated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment focuses on supporting breathing with oxygen therapy or mechanical ventilation, treating the underlying cause such as infection or injury, carefully managing fluids, and providing intensive care monitoring until the lungs recover.",
          },
        },
        {
          "@type": "Question",
          name: "Can someone recover from ARDS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many patients recover from ARDS with timely intensive care, although recovery can take weeks or months. Some individuals may continue rehabilitation to regain lung function and physical strength.",
          },
        },
        {
          "@type": "Question",
          name: "Is ARDS a medical emergency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ARDS is a life-threatening medical emergency that requires immediate hospital treatment. Early diagnosis and intensive care significantly improve the chances of recovery.",
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
      <ArdsPage />
    </>
  );
}
