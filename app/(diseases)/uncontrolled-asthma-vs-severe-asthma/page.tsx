import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Is Your Asthma Uncontrolled or Severe? Dr. Manish Aggarwal";

const description =
  "Inhaler not working? Learn the difference between uncontrolled and severe asthma, and get an accurate diagnosis from Dr. Manish Aggarwal in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "Uncontrolled Asthma vs Severe Asthma",
    "uncontrolled asthma",
    "severe asthma",
    "difference between uncontrolled and severe asthma",
    "asthma specialist Delhi",
    "severe asthma treatment Delhi",
    "asthma pulmonologist",
  ],
  alternates: {
    canonical: `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma`,
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
      "@id": `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma#webpage`,
      url: `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma`,
      name: "Is Your Asthma Uncontrolled or Severe? Dr. Manish Aggarwal",
      description:
        "Inhaler not working? Learn the difference between uncontrolled and severe asthma, and get an accurate diagnosis from Dr. Manish Aggarwal in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Asthma",
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
      "@id": `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma#breadcrumb`,
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
          name: "Uncontrolled Asthma vs Severe Asthma",
          item: `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/uncontrolled-asthma-vs-severe-asthma#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my asthma is uncontrolled or severe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your symptoms improve once your inhaler technique is corrected or triggers are avoided, it is likely uncontrolled asthma. If symptoms persist despite doing everything correctly, it may be severe asthma. A pulmonologist can confirm this through proper evaluation and testing.",
          },
        },
        {
          "@type": "Question",
          name: "Can uncontrolled asthma turn into severe asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Uncontrolled asthma itself does not turn into severe asthma, but if the underlying reasons for poor control are ignored for a long time, it can lead to worsening symptoms and more frequent flare-ups that resemble severe asthma.",
          },
        },
        {
          "@type": "Question",
          name: "What is the main treatment for severe asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Severe asthma is often treated with biologic therapy, which targets specific pathways causing airway inflammation, along with optimised inhaler therapy and management of any coexisting conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Is severe asthma more common than uncontrolled asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, uncontrolled asthma is far more common. Most patients who feel their asthma is not working actually have fixable issues like inhaler technique or trigger exposure rather than true severe asthma.",
          },
        },
        {
          "@type": "Question",
          name: "Can severe asthma be managed effectively?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While severe asthma cannot be cured, most patients achieve good control with the right combination of treatments, including biologics, and regular monitoring by a pulmonologist.",
          },
        },
        {
          "@type": "Question",
          name: "Should I see a specialist if my inhaler isn't working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If your symptoms are not improving despite using your inhaler, it is important to see a pulmonologist to determine whether the issue is technique, triggers, medication dose, or true severe asthma requiring advanced treatment.",
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