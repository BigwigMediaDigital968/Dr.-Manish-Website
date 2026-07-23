import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Know about Allergic Bronchitis: Guide by Dr. Manish Aggarwal";

const description =
  "Persistent cough, wheezing, or chest tightness? Learn about allergic bronchitis symptoms, causes & treatment from Dr. Manish Aggarwal, specialist in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "allergic bronchitis",
    "asthma",
    "asthma or allergic bronchitis",
    "allergic bronchitis treatment",
    "allergic bronchitis treatment Delhi",
    "allergic bronchitis specialist",
    "asthma treatment Delhi",
    "bronchitis doctor Delhi",
    "pulmonologist for bronchitis",
    "allergic cough treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/allergic-bronchitis`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/allergic-bronchitis`,
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
      "@id": `${BASE_URL}/allergic-bronchitis#webpage`,
      url: `${BASE_URL}/allergic-bronchitis`,
      name: "Know about Allergic Bronchitis: Guide by Dr. Manish Aggarwal",
      description:
        "Persistent cough, wheezing, or chest tightness? Learn about allergic bronchitis symptoms, causes & treatment from Dr. Manish Aggarwal, specialist in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Allergic Bronchitis",
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
      "@id": `${BASE_URL}/allergic-bronchitis#breadcrumb`,
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
          name: "Allergic Bronchitis",
          item: `${BASE_URL}/allergic-bronchitis`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/allergic-bronchitis#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best medicine for allergic bronchitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single medicine that works for everyone. Doctors usually combine bronchodilators, anti-inflammatory medicines, and antihistamines based on the patient's symptoms and triggers. Getting a proper diagnosis first is important, since the right allergic bronchitis treatment depends on the individual case.",
          },
        },
        {
          "@type": "Question",
          name: "How to treat bronchitis fast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A prescribed inhaler or nebulizer can open the airways quickly, while staying hydrated, resting, and avoiding triggers help speed up recovery. Fast relief methods work best when combined with a full treatment plan from a pulmonologist.",
          },
        },
        {
          "@type": "Question",
          name: "How long does allergic bronchitis last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mild cases can improve within one to two weeks once treatment starts and the trigger is removed. If exposure continues or treatment is delayed, symptoms can last longer or keep returning.",
          },
        },
        {
          "@type": "Question",
          name: "What to avoid in bronchitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid smoking, secondhand smoke, dust, strong perfumes, and polluted air, as these can worsen the swelling in your airways. Keeping your surroundings clean also helps prevent flare-ups.",
          },
        },
        {
          "@type": "Question",
          name: "Can allergic bronchitis be cured completely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Allergic bronchitis cannot be permanently cured, but it can be controlled very effectively. With the right allergic bronchitis treatment and consistent avoidance of your triggers, most patients go for long periods without symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "Is allergic bronchitis contagious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, allergic bronchitis is not contagious. It is caused by your airways reacting to allergens like dust, pollen, or smoke, not by a virus or bacteria, so it cannot spread from one person to another.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between allergic bronchitis and asthma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both conditions involve airway inflammation and can cause wheezing or breathlessness, but asthma is a chronic condition with recurring episodes, while allergic bronchitis is usually triggered by a specific allergen exposure. Dr. Aggarwal can help identify which condition you have through proper evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Can allergic bronchitis turn into something more serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If left untreated for a long time, repeated inflammation can affect lung function over time. This is why early allergic bronchitis treatment is important, especially if symptoms keep returning or getting worse.",
          },
        },
        {
          "@type": "Question",
          name: "Does weather change trigger allergic bronchitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, sudden changes in temperature or humidity are common triggers, especially during seasonal changes. Many patients notice their symptoms flare up at the start of winter or during high pollen seasons.",
          },
        },
        {
          "@type": "Question",
          name: "Should I see a pulmonologist for allergic bronchitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a pulmonologist can accurately diagnose the cause of your symptoms and rule out other conditions like asthma or COPD. Getting the right diagnosis ensures your allergic bronchitis treatment actually addresses the root cause instead of just managing symptoms temporarily.",
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