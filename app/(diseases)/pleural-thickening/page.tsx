import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pleural Thickening Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Diagnosed with pleural thickening? Learn about its causes, symptoms, and treatment options. Get expert evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "pleural thickening",
    "pleural thickening specialist",
    "pleural thickening specialist in Delhi",
    "pleural thickening treatment Delhi",
    "pulmonologist for pleural thickening",
  ],
  alternates: {
    canonical: `${BASE_URL}/pleural-thickening`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/pleural-thickening`,
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
      "@id": `${BASE_URL}/pleural-thickening#webpage`,
      url: `${BASE_URL}/pleural-thickening`,
      name: "Pleural Thickening Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Diagnosed with pleural thickening? Learn about its causes, symptoms, and treatment options. Get expert evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pleural Thickening",
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
      "@id": `${BASE_URL}/pleural-thickening#breadcrumb`,
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
          name: "Pleural Thickening",
          item: `${BASE_URL}/pleural-thickening`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pleural-thickening#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is pleural thickening serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the extent and underlying cause. Mild pleural thickening found incidentally on a scan is often not serious and does not need active treatment, but more extensive thickening that restricts lung expansion, or thickening linked to a serious underlying cause, needs proper evaluation and follow-up.",
          },
        },
        {
          "@type": "Question",
          name: "How do you treat pleural thickening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment depends on the cause and extent of the thickening. Mild, stable cases are often just monitored with periodic imaging, while treatment for cases linked to an active infection or autoimmune condition focuses on managing that underlying cause. In rare cases with significant lung restriction, pulmonary rehabilitation or surgery may be considered.",
          },
        },
        {
          "@type": "Question",
          name: "What is the life expectancy of someone with pleural thickening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most people, pleural thickening alone does not affect life expectancy, especially when it is mild and stable. The outlook depends much more on the underlying cause, such as whether it is linked to a past infection, asbestos exposure, or another condition. A Pleural Thickening Specialist can give a clearer picture based on your specific scan findings and history.",
          },
        },
        {
          "@type": "Question",
          name: "Does TB cause pleural thickening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, tuberculosis is one of the common causes of pleural thickening, particularly when it has involved the pleura or caused a pleural effusion in the past. If you have a history of TB and pleural thickening is found on a scan, it is often related, though your specialist will confirm this based on your specific case.",
          },
        },
        {
          "@type": "Question",
          name: "Can pleural thickening go away on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pleural thickening caused by scarring is usually permanent, since it represents old scar tissue rather than active inflammation. However, if it is linked to an active cause, such as an ongoing infection, treating that condition can prevent further thickening, even though existing scarring typically remains.",
          },
        },
        {
          "@type": "Question",
          name: "Should I be worried if pleural thickening is found on my scan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Pleural thickening is a common incidental finding, and in most cases, it does not indicate anything serious. That said, it is worth getting it evaluated by a pulmonologist to understand the likely cause and confirm it does not need any further action.",
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