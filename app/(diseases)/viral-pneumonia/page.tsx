import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "What Is Viral Pneumonia? Guide by Dr. Manish Aggarwal";

const description =
  "Persistent fever, cough or breathlessness? Learn about viral pneumonia (flu, H1N1, COVID-19) and get expert treatment from Dr. Manish Aggarwal in Delhi.";

export const metadata = {
  title,
  description,
  keywords: [
    "viral pneumonia",
    "viral pneumonia treatment",
    "viral pneumonia treatment Delhi",
    "flu pneumonia treatment",
    "influenza pneumonia",
    "H1N1 pneumonia specialist",
    "COVID-19 pneumonia doctor",
    "pulmonologist for pneumonia Delhi",
  ],
  alternates: {
    canonical: `${BASE_URL}/viral-pneumonia`,
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/viral-pneumonia`,
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
      "@id": `${BASE_URL}/viral-pneumonia#webpage`,
      url: `${BASE_URL}/viral-pneumonia`,
      name: "What Is Viral Pneumonia? Guide by Dr. Manish Aggarwal",
      description:
        "Persistent fever, cough or breathlessness? Learn about viral pneumonia (flu, H1N1, COVID-19) and get expert treatment from Dr. Manish Aggarwal in Delhi.",
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Viral Pneumonia",
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
      "@id": `${BASE_URL}/viral-pneumonia#breadcrumb`,
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
          name: "Viral Pneumonia",
          item: `${BASE_URL}/viral-pneumonia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/viral-pneumonia#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How serious is viral pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viral pneumonia can range from mild to life-threatening. Many healthy adults recover with rest and supportive care at home, but young children, older adults, pregnant women, and people with existing health conditions can develop serious complications, including very low oxygen levels that need hospital care. This is why timely viral pneumonia treatment and monitoring matter, especially if symptoms are getting worse instead of better.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cause of viral pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viral pneumonia is caused by a virus infecting the lungs, most commonly the influenza (flu) virus, H1N1 virus, or the COVID-19 virus. Other viruses, such as RSV and parainfluenza, can also cause it, particularly in children and older adults. The virus inflames the air sacs in the lungs and causes them to fill with fluid, which is what leads to breathing difficulty.",
          },
        },
        {
          "@type": "Question",
          name: "How do you treat viral pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment depends on the specific virus involved and how severe the infection is. It often includes antiviral medicines, oxygen support if blood oxygen levels are low, fever and symptom management, plenty of rest and fluids, and close monitoring for complications. Severe cases may need hospital admission. Dr. Manish Aggarwal decides the right combination based on your test results and symptoms.",
          },
        },
        {
          "@type": "Question",
          name: "Is viral pneumonia contagious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, viral pneumonia is contagious, since it is caused by viruses like flu, H1N1, and COVID-19 that spread through respiratory droplets when an infected person coughs, sneezes, or talks. Washing your hands often, wearing a mask around sick individuals, and staying home while unwell can help reduce the spread to others.",
          },
        },
        {
          "@type": "Question",
          name: "How long does viral pneumonia last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most people start feeling better within one to two weeks with proper care, though a lingering cough and tiredness can last longer. Recovery time depends on the virus involved, your age, and your overall health, so some patients may need a longer course of viral pneumonia treatment and follow-up.",
          },
        },
        {
          "@type": "Question",
          name: "Can viral pneumonia turn into bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a viral infection can sometimes weaken the lungs enough for bacteria to cause a second infection on top of it. This is called a secondary bacterial pneumonia and usually needs antibiotics along with continued monitoring by your pulmonologist.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between viral and bacterial pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viral pneumonia is caused by viruses such as flu, H1N1, or COVID-19, while bacterial pneumonia is caused by bacteria and often comes on more suddenly with higher fever. The two need different treatments, since antibiotics work only on bacterial infections and not on viruses, which is why an accurate diagnosis is important before starting treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get vaccinated against viral pneumonia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, annual flu vaccination and staying up to date with COVID-19 vaccines can lower your risk of developing viral pneumonia or reduce how severe it becomes if you do get infected. This is especially recommended for older adults, young children, and people with existing lung or heart conditions.",
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