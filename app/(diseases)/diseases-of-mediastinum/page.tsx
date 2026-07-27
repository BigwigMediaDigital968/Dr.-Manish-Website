import DiseasesOfMediastinumPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Diseases of Mediastinum Care in Delhi – Dr. Manish Aggarwal";

const description =
  "Mass found on your chest scan? It could involve the mediastinum. Get expert evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Diseases of Mediastinum",
    "Diseases of Mediastinum Specialist",
    "Diseases of Mediastinum Specialist in Delhi",
    "Chest Wall and Diaphragm",
    "mediastinal mass treatment Delhi",
    "pulmonologist for mediastinal disease",
  ],
  alternates: {
    canonical: `${BASE_URL}/diseases-of-mediastinum`,
  },
  openGraph: {
    title,
    description,
    image: "/services/diseases-of-mediastinum.png",
    url: `${BASE_URL}/diseases-of-mediastinum`,
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
      "@id": `${BASE_URL}/diseases-of-mediastinum#webpage`,
      url: `${BASE_URL}/diseases-of-mediastinum`,
      name: "Diseases of Mediastinum Care in Delhi – Dr. Manish Aggarwal",
      description:
        "Mass found on your chest scan? It could involve the mediastinum. Get expert evaluation from Dr. Manish Aggarwal, pulmonologist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Diseases of Mediastinum",
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
      "@id": `${BASE_URL}/diseases-of-mediastinum#breadcrumb`,
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
          name: "Diseases of Mediastinum",
          item: `${BASE_URL}/diseases-of-mediastinum`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/diseases-of-mediastinum#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are other diseases of the mediastinum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Besides tumors like thymomas, lymphomas, and germ cell tumors, other mediastinal conditions include mediastinitis (infection or inflammation), mediastinal cysts, enlarged lymph nodes from infections like tuberculosis, and vascular abnormalities involving the major blood vessels that pass through this region.",
          },
        },
        {
          "@type": "Question",
          name: "What are the 4 T's for mediastinal mass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The '4 T's' is a commonly used way to remember the main causes of a mass in the front (anterior) part of the mediastinum: Thymoma, Teratoma (and other germ cell tumors), Thyroid masses (such as a goitre extending into the chest), and Terrible lymphoma (a memorable way to refer to lymphoma). This helps guide the initial list of possibilities when a mass is found in this location.",
          },
        },
        {
          "@type": "Question",
          name: "What is the mediastinum and diaphragm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The mediastinum is the central compartment of the chest between the two lungs, containing the heart, major blood vessels, windpipe, food pipe, thymus, and lymph nodes. The diaphragm is the large muscle beneath the lungs that separates the chest from the abdomen and plays the main role in the mechanics of breathing.",
          },
        },
        {
          "@type": "Question",
          name: "What is a pleural and mediastinal disease?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pleural disease refers to conditions affecting the pleura, the thin lining around the lungs, such as pleural effusion or pleural tumors. Mediastinal disease refers to conditions affecting the central chest compartment between the lungs, such as mediastinal masses or mediastinitis. While they're in neighbouring areas of the chest, they involve different structures and are evaluated somewhat differently, though both fall within a pulmonologist's expertise.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best treatment for mediastinal mass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There's no single best treatment, since it depends entirely on what the mass is. Benign findings like simple cysts may only need monitoring, while tumors like thymoma or chest wall involvement often need surgery, and cancers like lymphoma are typically treated with chemotherapy or radiation. Dr. Manish Aggarwal decides the right approach based on biopsy results and imaging findings.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Felson classification of the mediastinum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Felson classification divides the mediastinum into three compartments on a chest X-ray: anterior, middle, and posterior, based on their location relative to the heart, trachea, and spine. This classification helps doctors narrow down the likely causes of a mediastinal mass based on which compartment it's found in, since different conditions tend to occur in different areas.",
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
      <DiseasesOfMediastinumPage />
    </>
  );
}