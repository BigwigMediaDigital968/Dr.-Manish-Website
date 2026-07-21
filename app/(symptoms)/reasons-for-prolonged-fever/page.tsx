import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Prolonged Fever Not Going Away? Consult Dr. Manish Aggarwal";

const description =
  "Fever lasting over a week? Know the causes for prolonged fever and consult Dr. Manish Aggarwal, pulmonologist. Book today.";

export const metadata = {
  title,
  description,
  keywords: [
    "reasons for prolonged fever",
    "causes for prolonged fever",
    "prolonged fever treatment",
    "best pulmonologist for fever",
    "fever consultation online",
    "book pulmonologist appointment",
    "Dr Manish Aggarwal pulmonologist",
    "chest infection fever doctor",
  ],
  alternates: {
    canonical: `${BASE_URL}/reasons-for-prolonged-fever`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/reasons-for-prolonged-fever`,
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
      "@id": `${BASE_URL}/reasons-for-prolonged-fever#webpage`,
      url: `${BASE_URL}/reasons-for-prolonged-fever`,
      name: "Prolonged Fever Not Going Away? Consult Dr. Manish Aggarwal",
      description:
        "Fever lasting over a week? Know the causes for prolonged fever and consult Dr. Manish Aggarwal, pulmonologist. Book today.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalSignOrSymptom",
        name: "Prolonged Fever",
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
      "@id": `${BASE_URL}/reasons-for-prolonged-fever#breadcrumb`,
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
          name: "Reasons for Prolonged Fever",
          item: `${BASE_URL}/reasons-for-prolonged-fever`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/reasons-for-prolonged-fever#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is considered a prolonged fever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A fever that lasts more than 7 days, or one that keeps returning after appearing to settle, is generally considered a prolonged fever.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most common reasons for prolonged fever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common reasons for prolonged fever include infections like tuberculosis, pneumonia, typhoid, and urinary tract infections, along with autoimmune conditions and, occasionally, hidden infections that are not immediately obvious.",
          },
        },
        {
          "@type": "Question",
          name: "Can prolonged fever be linked to lung problems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many causes for prolonged fever are connected to the chest and lungs, especially when the fever comes with cough, chest pain, or breathlessness. This is why a pulmonologist is often involved in diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "Is chest pain with fever always serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always, but chest pain with fever should never be ignored. It can be a sign of a lung infection and should be evaluated by a doctor, especially if the pain worsens with breathing or coughing.",
          },
        },
        {
          "@type": "Question",
          name: "What tests are usually done to find the cause of prolonged fever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Doctors typically start with blood tests, a chest X-ray, and urine tests. Depending on the findings, further tests such as a CT scan, sputum test, or specific blood cultures may be recommended to pinpoint the exact causes for prolonged fever.",
          },
        },
        {
          "@type": "Question",
          name: "When should I stop waiting and see a pulmonologist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your fever has lasted more than a week, is accompanied by chest symptoms, or is not responding to basic medication, it is time to consult a specialist rather than waiting further.",
          },
        },
        {
          "@type": "Question",
          name: "Can prolonged fever go away on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some mild viral fevers do resolve on their own, but a fever lasting beyond 7 days should always be evaluated, since some of the causes for prolonged fever require specific treatment to fully resolve.",
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