import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Bronchiectasis Care in Delhi with Dr. Manish Aggarwal";

const description =
  "Daily mucus cough or repeated chest infections? Learn about bronchiectasis symptoms & causes, and get expert care from Dr. Manish Aggarwal in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "bronchiectasis",
    "bronchiectasis specialist",
    "bronchiectasis specialist in Delhi",
    "bronchiectasis treatment",
    "bronchiectasis treatment Delhi",
    "pulmonologist for bronchiectasis",
    "lung specialist Delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/bronchiectasis`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/bronchiectasis`,
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
      "@id": `${BASE_URL}/bronchiectasis#webpage`,
      url: `${BASE_URL}/bronchiectasis`,
      name: "Bronchiectasis Care in Delhi with Dr. Manish Aggarwal",
      description:
        "Daily mucus cough or repeated chest infections? Learn about bronchiectasis symptoms & causes, and get expert care from Dr. Manish Aggarwal in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Bronchiectasis",
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
      "@id": `${BASE_URL}/bronchiectasis#breadcrumb`,
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
          name: "Bronchiectasis",
          item: `${BASE_URL}/bronchiectasis`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/bronchiectasis#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cause of bronchiectasis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bronchiectasis is usually caused by repeated or severe lung infections, such as pneumonia or tuberculosis, that damage the airways over time. Underlying conditions like cystic fibrosis, COPD, immune system disorders, or ABPA can also lead to it. In some patients, no clear cause is identified despite thorough testing.",
          },
        },
        {
          "@type": "Question",
          name: "Can you live a long life with bronchiectasis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many people with bronchiectasis live long, active lives, especially when the condition is diagnosed early and managed consistently. Regular airway clearance, timely treatment of flare-ups, and addressing any underlying cause all help slow down further lung damage and maintain a good quality of life.",
          },
        },
        {
          "@type": "Question",
          name: "How do you treat bronchiectasis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment usually includes airway clearance techniques to help clear mucus, antibiotics for infections and flare-ups, bronchodilators to ease breathlessness, and pulmonary rehabilitation to build stamina. If an underlying cause is identified, treating that condition is also an important part of the plan. Dr. Manish Aggarwal tailors the combination based on each patient's specific case.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between bronchitis and bronchiectasis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bronchitis is inflammation of the airways that is often temporary, especially in acute cases caused by an infection, though chronic bronchitis can be long-lasting. Bronchiectasis, on the other hand, involves permanent widening and scarring of the airways, which does not reverse and requires ongoing management. A pulmonologist can tell the two apart through imaging and other tests.",
          },
        },
        {
          "@type": "Question",
          name: "Is bronchiectasis the same as COPD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, though the two can occur together. COPD mainly involves narrowed airways and damaged air sacs, usually from smoking, while bronchiectasis involves widened, scarred airways, often from infections or other underlying conditions. Some patients have features of both, so proper evaluation is important.",
          },
        },
        {
          "@type": "Question",
          name: "Can bronchiectasis be cured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bronchiectasis cannot be cured, since the airway damage is permanent, but it can be managed very effectively. With the right treatment plan and regular follow-up, most patients can reduce flare-ups and maintain good lung function for years.",
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