import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/causes-of-wheezing";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Causes of Wheezing? Consult Dr. Manish Aggarwal | Book Now";
const description =
  "Struggling with wheezing? Get expert diagnosis from Dr. Manish Aggarwal, pulmonologist. Same-day spirometry available. Book your consultation today.";

export const metadata = {
  title,
  description,
  keywords: [
    "causes of wheezing",
    "reason for wheezing",
    "wheezing sound while breathing",
    "pulmonologist near me",
    "wheezing treatment",
    "book pulmonologist appointment",
    "chest specialist doctor",
    "Dr. Manish Aggarwal pulmonologist",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title,
    description,
    url: FULL_URL,
    siteName: "Dr. Manish Aggarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-new.png",
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "/logo-new.png",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${FULL_URL}#webpage`,
      url: FULL_URL,
      name: title,
      description: description,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Wheezing",
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
      "@id": `${FULL_URL}#breadcrumb`,
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
          name: "Causes of Wheezing",
          item: FULL_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${FULL_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is wheezing serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wheezing can be mild or serious depending on the underlying cause. A short episode after a cold is usually not serious, but wheezing that comes with breathlessness, chest pain, blue lips, or a high fever should be treated as an emergency. If you are unsure, it is always safer to consult a pulmonologist rather than waiting.",
          },
        },
        {
          "@type": "Question",
          name: "What can trigger wheezing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common triggers include cold air, dust, smoke, strong perfumes, pet hair, pollen, viral infections, exercise, and acid reflux. Identifying your personal trigger is an important part of understanding the reason for wheezing and preventing future episodes.",
          },
        },
        {
          "@type": "Question",
          name: "Which deficiency causes wheezing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Low levels of vitamin D have been linked in some studies to a higher risk of asthma and wheezing episodes, since vitamin D plays a role in keeping the immune system and airway function balanced. However, a deficiency alone is rarely the only reason for wheezing, and it should be checked alongside other possible causes by a doctor.",
          },
        },
        {
          "@type": "Question",
          name: "What is the root cause of wheezing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At its core, the root cause of wheezing is the narrowing of the airways, which can happen due to inflammation, muscle tightening, mucus buildup, or blockage. The exact cause of wheezing behind this narrowing differs from person to person, which is why a proper medical evaluation is the only reliable way to know what is truly causing your symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "Does wheezing mean asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Wheezing is often linked to asthma, but infections, allergies, acid reflux, and other lung conditions can cause the same sound. A proper checkup helps find out which one applies to you.",
          },
        },
        {
          "@type": "Question",
          name: "Can wheezing go away on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mild wheezing caused by a common cold may clear up on its own within a few days. But if it keeps coming back or lasts longer than a week, it usually points to an underlying cause that needs attention.",
          },
        },
        {
          "@type": "Question",
          name: "Is wheezing the same as coughing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, they are different. Coughing is a forceful push of air to clear your throat or airways, while wheezing is a whistling sound that happens when your airways are narrowed. Some people experience both together.",
          },
        },
        {
          "@type": "Question",
          name: "Can stress cause wheezing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, stress can tighten the muscles around your airways, making it harder to breathe. This is especially common in people who already have asthma or sensitive airways.",
          },
        },
        {
          "@type": "Question",
          name: "Does wheezing happen only in the chest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. While most wheezing comes from the chest, it can also come from the throat, particularly when the vocal cords do not open properly during breathing.",
          },
        },
        {
          "@type": "Question",
          name: "Can children outgrow wheezing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some children do outgrow wheezing as their airways widen with age. However, it is still important to have a doctor check the cause, since some childhood wheezing continues into adulthood if left untreated.",
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
  );
}
