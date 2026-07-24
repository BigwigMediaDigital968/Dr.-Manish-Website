import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Pneumothorax Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Sudden chest pain & breathlessness out of nowhere? It could be a collapsed lung. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "pneumothorax",
    "lung rupture",
    "pneumothorax specialist",
    "pneumothorax specialist in Delhi",
    "collapsed lung treatment Delhi",
    "pulmonologist for pneumothorax",
  ],
  alternates: {
    canonical: `${BASE_URL}/pneumothorax`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/pneumothorax`,
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
      "@id": `${BASE_URL}/pneumothorax#webpage`,
      url: `${BASE_URL}/pneumothorax`,
      name: "Pneumothorax Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Sudden chest pain & breathlessness out of nowhere? It could be a collapsed lung. Get urgent care from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Pneumothorax",
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
      "@id": `${BASE_URL}/pneumothorax#breadcrumb`,
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
          name: "Pneumothorax",
          item: `${BASE_URL}/pneumothorax`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/pneumothorax#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the main cause of pneumothorax?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pneumothorax is most commonly caused by a small air-filled sac on the lung's surface bursting, which can happen without any underlying lung disease, especially in tall, thin, young individuals and smokers. It can also be caused by existing lung conditions like COPD or by an injury to the chest.",
          },
        },
        {
          "@type": "Question",
          name: "Is pneumothorax life-threatening?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be, especially a tension pneumothorax, which is a medical emergency that needs immediate treatment. Smaller pneumothoraces are less urgent and may even resolve on their own with monitoring, but any sudden chest pain with breathlessness should be evaluated promptly to rule out a more serious case.",
          },
        },
        {
          "@type": "Question",
          name: "Which are the two main types of pneumothorax?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The two main types are spontaneous pneumothorax, which happens without an injury and is further divided into primary and secondary types, and traumatic pneumothorax, which is caused by an injury to the chest. A tension pneumothorax is a rare, severe form of either type that requires emergency treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Who is at risk for pneumothorax?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "People at higher risk include tall, thin, young individuals, smokers, people with existing lung conditions like COPD or asthma, those who have had a previous pneumothorax, and anyone who experiences a significant chest injury. A family history of pneumothorax can also increase the risk in some cases.",
          },
        },
        {
          "@type": "Question",
          name: "Can pneumothorax happen again after treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, pneumothorax, particularly the spontaneous type, has a meaningful chance of recurring, especially in the first year or two after the first episode. This is why follow-up care and, in some cases, surgery to prevent recurrence are recommended for patients with repeated episodes.",
          },
        },
        {
          "@type": "Question",
          name: "When should I go to the emergency room for chest pain and breathlessness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you experience sudden, sharp chest pain along with breathlessness, especially if it is severe, worsening, or accompanied by a bluish tinge to your lips or skin, seek emergency care immediately rather than waiting, since this could indicate a serious or life-threatening pneumothorax.",
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