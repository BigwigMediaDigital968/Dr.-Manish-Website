import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Bacterial Pneumonia: Symptoms & Care – Dr. Manish Aggarwal";

const description =
  "High fever, chills or thick mucus? Learn about bacterial pneumonia symptoms & causes, and get expert care from Dr. Manish Aggarwal in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "bacterial pneumonia",
    "bacterial pneumonia specialist",
    "bacterial pneumonia specialist in Delhi",
    "bacterial pneumonia treatment",
    "bacterial pneumonia treatment Delhi",
    "pulmonologist for pneumonia Delhi",
    "pneumonia doctor Delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/bacterial-pneumonia`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/bacterial-pneumonia`,
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
      "@id": `${BASE_URL}/bacterial-pneumonia#webpage`,
      url: `${BASE_URL}/bacterial-pneumonia`,
      name: "Bacterial Pneumonia: Symptoms & Care – Dr. Manish Aggarwal",
      description:
        "High fever, chills or thick mucus? Learn about bacterial pneumonia symptoms & causes, and get expert care from Dr. Manish Aggarwal in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Bacterial Pneumonia",
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
      "@id": `${BASE_URL}/bacterial-pneumonia#breadcrumb`,
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
          name: "Bacterial Pneumonia",
          item: `${BASE_URL}/bacterial-pneumonia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/bacterial-pneumonia#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the main cause of bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common cause is the bacteria Streptococcus pneumoniae, though other bacteria like Haemophilus influenzae and Mycoplasma pneumoniae can also cause it. It often develops after the body's defences are weakened, such as after a viral infection like the flu, or in people with existing lung conditions.",
          },
        },
        {
          "@type": "Question",
          name: "How serious is bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bacterial pneumonia can range from mild to life-threatening. Many people recover well with timely antibiotic treatment, but young children, older adults, and people with weak immunity or existing health conditions can develop serious complications, including very low oxygen levels that need hospital care. This is why early diagnosis and treatment from a Bacterial Pneumonia Specialist matter.",
          },
        },
        {
          "@type": "Question",
          name: "What are the four stages of bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bacterial pneumonia typically progresses through four stages: congestion, where the lung tissue becomes heavy and fluid-filled; red hepatization, where the air sacs fill with red blood cells and fluid, giving the lung a firm, red appearance; grey hepatization, where the red blood cells break down and the area turns greyish as white blood cells move in to fight infection; and resolution, where the infection clears and the lung tissue gradually returns to normal.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between regular pneumonia and bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular pneumonia is a general term that can be caused by bacteria, viruses, or fungi, while bacterial pneumonia specifically refers to cases caused by bacteria. Bacterial pneumonia tends to come on more suddenly, with a higher fever and thicker, discoloured mucus, and it is treated with antibiotics, unlike viral pneumonia, which needs antiviral medicines or supportive care instead.",
          },
        },
        {
          "@type": "Question",
          name: "Is bacterial pneumonia contagious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some of the bacteria that cause pneumonia can spread through respiratory droplets, though not everyone exposed will develop pneumonia. People with weaker immune systems, existing lung conditions, or those who are very young or elderly are more likely to get infected after exposure.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to recover from bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With appropriate antibiotics, most people start feeling better within a few days to a week, though full recovery, including fatigue and residual cough, can take several weeks. Recovery time depends on the severity of infection, the bacteria involved, and the patient's overall health.",
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