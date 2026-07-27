import TobaccoAddictionPage from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title = "Tobacco Addiction Treatment in Delhi by Dr. Manish Aggarwal";

const description =
  "Get expert help to quit tobacco and nicotine addiction in Delhi from Dr. Manish Aggarwal. Personalised de-addiction support and lung health care. Book now.";

export const metadata = {
  title,
  description,
  keywords: [
    "Tobacco Addiction",
    "nicotine addiction",
    "tobacco addiction treatment Delhi",
    "quit smoking Delhi",
    "pulmonologist for smoking cessation",
    "nicotine addiction treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/tobacco-addiction`,
  },
  openGraph: {
    title,
    description,
    image: "/services/tobacco-addiction.png",
    url: `${BASE_URL}/tobacco-addiction`,
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
      "@id": `${BASE_URL}/tobacco-addiction#webpage`,
      url: `${BASE_URL}/tobacco-addiction`,
      name: "Tobacco Addiction Treatment in Delhi by Dr. Manish Aggarwal",
      description:
        "Get expert help to quit tobacco and nicotine addiction in Delhi from Dr. Manish Aggarwal. Personalised de-addiction support and lung health care. Book now.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Tobacco Addiction",
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
      "@id": `${BASE_URL}/tobacco-addiction#breadcrumb`,
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
          name: "Tobacco Addiction",
          item: `${BASE_URL}/tobacco-addiction`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/tobacco-addiction#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the symptoms of tobacco addiction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Symptoms include strong and frequent cravings, needing tobacco soon after waking up, difficulty cutting down despite wanting to, continuing use despite health problems, and withdrawal symptoms like irritability, anxiety, or difficulty concentrating when unable to use tobacco.",
          },
        },
        {
          "@type": "Question",
          name: "How to cure tobacco addiction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tobacco addiction is best managed with a combination approach, nicotine replacement therapy or prescription medicines to ease cravings, behavioural counselling to address triggers and habits, and ongoing follow-up support. There's no single instant fix, but with the right structured plan, most people can quit successfully.",
          },
        },
        {
          "@type": "Question",
          name: "How to stop nicotine addiction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stopping nicotine addiction usually works best with a clear quit date, nicotine replacement therapy or medication to manage cravings, and strategies to handle triggers like stress or specific daily habits. Getting support from a doctor rather than trying to quit alone significantly improves the chances of success.",
          },
        },
        {
          "@type": "Question",
          name: "How do you treat nicotine addiction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment typically combines nicotine replacement therapy or prescription medicines to reduce cravings and withdrawal symptoms, behavioural counselling to build coping strategies, and regular follow-up to manage setbacks. Dr. Manish Aggarwal tailors this combination based on your history of use and previous quit attempts.",
          },
        },
        {
          "@type": "Question",
          name: "How long do nicotine withdrawal symptoms last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Withdrawal symptoms are usually most intense in the first week after quitting and gradually ease over the following few weeks. Cravings can continue on and off for a few months, though they generally become less frequent and less intense over time, especially with proper support.",
          },
        },
        {
          "@type": "Question",
          name: "Is it possible to quit tobacco without medication?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, some people are able to quit through behavioural strategies and support alone, though many find that combining this with nicotine replacement therapy or medication significantly improves their chances of success, especially for long-term or heavy tobacco users.",
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
      <TobaccoAddictionPage />
    </>
  );
}