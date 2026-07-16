import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Know Reason for Cough? Consult Now | Dr. Manish Aggarwal";
const description =
  "Persistent cough? Find the exact cause of coughing and get expert treatment from Dr. Manish Aggarwal, pulmonologist in Delhi. Book your appointment today.";

export const metadata = {
  title,
  description,
  keywords: [
    "reason for cough",
    "cough symptoms",
    "cause of coughing",
    "pulmonologist Delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/reason-for-cough`,
  },

  openGraph: {
    title,
    description,
    url: `${BASE_URL}/reason-for-cough`,
    siteName: "Dr. Manish Aggarwal",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/og/reason-for-cough.jpg`,
        width: 1200,
        height: 630,
        alt: "Reason for Cough - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${BASE_URL}/og/reason-for-cough.jpg`],
  },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "MedicalWebPage",
            "@id": `${BASE_URL}/reason-for-cough#webpage`,
            url: `${BASE_URL}/reason-for-cough`,
            name: "Know Reason for Cough? Consult Now | Dr. Manish Aggarwal",
            description:
                "Persistent cough? Find the exact cause of coughing and get expert treatment from Dr. Manish Aggarwal, pulmonologist in Delhi. Book your appointment today.",
            inLanguage: "en-IN",
            about: {
                "@type": "MedicalCondition",
                name: "Cough",
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
            "@id": `${BASE_URL}/reason-for-cough#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${BASE_URL}`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Reason for Cough",
                    item: `${BASE_URL}/reason-for-cough`,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/reason-for-cough#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the most common reason for cough?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most common reason for cough is a viral infection like the common cold or flu. Other frequent causes include allergies, acid reflux, and dry air. If your cough lasts more than three weeks, it is best to get it checked.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can stress cause cough symptoms?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, in some cases, stress and anxiety can lead to a dry, persistent cough. However, this should only be considered after ruling out other physical causes.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a dry cough and a wet cough?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A dry cough does not produce mucus and is often linked to irritation, allergies, or viral infections. A wet cough brings up mucus and usually points to an infection in the chest or airways.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When does a cough become serious?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A cough becomes a concern when it lasts more than three weeks, comes with blood, fever, breathlessness, chest pain, or unexplained weight loss. These symptoms need prompt medical attention.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can allergies be the cause of coughing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, allergies are a very common cause of coughing, especially in people who are sensitive to dust, pollen, smoke, or pet hair. This type of cough is usually dry and may come with a runny nose or itchy throat.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I need an X-ray for a simple cough?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not always. Dr. Manish Aggarwal will first take your full history and examine you. An X-ray or other test is only recommended when it is needed to confirm the actual reason for the cough.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a long-term cough always a sign of a serious lung disease?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily, but it should never be ignored. A long-term cough can be caused by asthma, acid reflux, or allergies, and in some cases, it may point to a more serious lung condition. Getting it checked helps rule out anything serious early.",
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