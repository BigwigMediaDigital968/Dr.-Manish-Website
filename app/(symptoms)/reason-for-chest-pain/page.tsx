import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Reason for Chest Pain? Consult Dr. Manish Aggarwal | Book Now";

const description =
  "Struggling with pain in chest? Get expert diagnosis from Dr. Manish Aggarwal, pulmonologist. Same-day evaluation available. Book your consultation today.";

export const metadata = {
  title,
  description,
  keywords: [
    "reason for chest pain",
    "causes of chest pain",
    "pain in chest",
    "pulmonologist near me",
    "chest pain treatment",
    "book pulmonologist appointment",
    "chest specialist doctor",
    "Dr. Manish Aggarwal pulmonologist",
  ],
  alternates: {
    canonical: `${BASE_URL}/reason-for-chest-pain`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/reason-for-chest-pain`,
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
      "@id": `${BASE_URL}/reason-for-chest-pain#webpage`,
      url: `${BASE_URL}/reason-for-chest-pain`,
      name: "Reason for Chest Pain? Consult Dr. Manish Aggarwal | Book Now",
      description:
        "Struggling with pain in chest? Get expert diagnosis from Dr. Manish Aggarwal, pulmonologist. Same-day evaluation available. Book your consultation today.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Chest Pain",
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
      "@id": `${BASE_URL}/reason-for-chest-pain#breadcrumb`,
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
          name: "Reason for Chest Pain",
          item: `${BASE_URL}/reason-for-chest-pain`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/reason-for-chest-pain#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most common reason for chest pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common causes of chest pain include muscle strain, acid reflux, and anxiety. However, pain in chest can also be caused by lung or heart conditions, so it is always best to get it checked by a doctor.",
          },
        },
        {
          "@type": "Question",
          name: "Is pain in chest always related to the heart?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Pain in chest can come from muscles, the stomach, the lungs, or even stress. Only a doctor can confirm the exact reason for chest pain after proper examination.",
          },
        },
        {
          "@type": "Question",
          name: "Can stress cause chest pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, stress and anxiety are common causes of chest pain. They can cause tightness or a sharp pain in chest due to fast or shallow breathing.",
          },
        },
        {
          "@type": "Question",
          name: "Does chest pain always mean a heart problem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Pain in chest is often linked to the heart, but muscle strain, acid reflux, anxiety, and lung conditions can cause a similar feeling. A proper checkup helps find out which one applies to you.",
          },
        },
        {
          "@type": "Question",
          name: "Can chest pain go away on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mild chest pain caused by muscle strain or gas may clear up on its own within a short time. But if it keeps coming back or lasts longer than a few minutes, it usually points to an underlying reason for chest pain that needs attention.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cause of chest pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cause of chest pain can be muscle strain, acid reflux, anxiety, a lung infection, or a heart-related issue. Since so many different causes of chest pain can feel similar, a proper examination is the only way to know for sure what is behind your pain in chest.",
          },
        },
        {
          "@type": "Question",
          name: "How to relieve chest pain immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If the pain in chest is mild and you are sure it is not heart-related, sitting upright, taking slow deep breaths, and resting in a calm position can help ease the discomfort. Avoiding heavy meals and lying down right after eating can also help if the reason for chest pain is acid reflux or gas. However, if the pain is severe, spreading, or comes with breathlessness, sweating, or dizziness, do not try to manage it at home. Seek emergency medical care immediately, since this could be a sign of a serious reason for chest pain.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if chest pain is serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chest pain is more likely to be serious if it is sudden and intense, spreads to the arm, jaw, neck, or back, or comes along with sweating, breathlessness, dizziness, or nausea. Pain that occurs with physical activity and eases with rest can also be a warning sign. If you notice any of these along with your chest pain, treat it as an emergency and seek medical help right away rather than waiting.",
          },
        },
        {
          "@type": "Question",
          name: "What are the big 5 causes of chest pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While the exact reason for chest pain varies from person to person, five of the most common causes of chest pain are muscle strain, acid reflux or gas, anxiety and stress, lung-related infections, and heart-related issues. Since these can feel similar, a proper diagnosis from a doctor is the only reliable way to know which one applies to you.",
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