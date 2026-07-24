import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pleural Tumor: Benign or Malignant? | Dr. Manish Aggarwal";

const description =
  "Told you have a growth on your lung lining? Find out if it's benign or malignant with expert evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "pleural tumor",
    "pleural tumor specialist",
    "pleural tumor specialist in Delhi",
    "pleural tumor treatment Delhi",
    "pulmonologist for pleural tumor",
    "mesothelioma treatment Delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/pleural-tumor`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/pleural-tumor`,
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
      "@id": `${BASE_URL}/pleural-tumor#webpage`,
      url: `${BASE_URL}/pleural-tumor`,
      name: "Pleural Tumor: Benign or Malignant? | Dr. Manish Aggarwal",
      description:
        "Told you have a growth on your lung lining? Find out if it's benign or malignant with expert evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pleural Tumor",
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
      "@id": `${BASE_URL}/pleural-tumor#breadcrumb`,
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
          name: "Pleural Tumor",
          item: `${BASE_URL}/pleural-tumor`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pleural-tumor#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most common tumor of the pleura?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common primary tumor of the pleura is the solitary fibrous tumor, which is usually benign. However, when it comes to malignant pleural tumors, mesothelioma, strongly linked to asbestos exposure, is the most well-known type. Metastatic tumors, where cancer spreads to the pleura from elsewhere in the body, are also commonly seen.",
          },
        },
        {
          "@type": "Question",
          name: "What are the signs of a benign tumor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Benign pleural tumors are often found incidentally on a scan done for another reason, since they frequently cause no symptoms at all. When symptoms do occur, they tend to be mild and may include chest discomfort or a cough, without the more concerning signs like rapid weight loss or worsening breathlessness that are more typical of malignant tumors.",
          },
        },
        {
          "@type": "Question",
          name: "What are the different types of tumors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pleural tumors are broadly classified as benign, such as solitary fibrous tumors, or malignant, such as mesothelioma. Malignant tumors can also be primary, meaning they start in the pleura itself, or metastatic, meaning they have spread there from cancer elsewhere in the body, most often the lung or breast.",
          },
        },
        {
          "@type": "Question",
          name: "Do benign tumors need to be removed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Small, benign pleural tumors without symptoms are often just monitored with periodic imaging. Surgery is generally recommended if the tumor is causing symptoms, growing over time, or if there is any uncertainty about whether it could be malignant.",
          },
        },
        {
          "@type": "Question",
          name: "Is a pleural tumor the same as pleural effusion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, though the two can be related. A pleural tumor is an abnormal growth in the pleura, while pleural effusion is a build-up of fluid around the lung, which can sometimes occur as a result of a pleural tumor. A Pleural Tumor Specialist can determine whether one is causing the other in your specific case.",
          },
        },
        {
          "@type": "Question",
          name: "Should I see a specialist if I have unexplained chest pain and breathlessness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, persistent or unexplained chest pain and breathlessness should always be evaluated by a pulmonologist. While many causes are not serious, timely evaluation ensures that any pleural tumor or other underlying condition is identified and managed early.",
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