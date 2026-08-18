import TubercularPageContent from "./TubercularPageContent";

const BASE_URL = process.env.SITE_URL;

const title =
  "Tubercular Pneumonia (TB) Treatment in Delhi by Dr. Manish Aggarwal";

const description =
  "Get expert Tubercular Pneumonia (TB) treatment in Delhi from Dr. Manish Aggarwal. Accurate diagnosis and complete care for tuberculosis. Book now.";

export const metadata = {
  title,
  description,
  keywords: [
    "Tubercular Pneumonia",
    "TB pneumonia",
    "tuberculosis treatment Delhi",
    "TB doctor Delhi",
    "pulmonologist for TB",
    "tubercular pneumonia treatment",
  ],
  alternates: {
    canonical: `${BASE_URL}/tubercular-pneumonia`,
  },
  openGraph: {
    title,
    description,
    image: "/services/tubercular-pneumonia.png",
    url: `${BASE_URL}/tubercular-pneumonia`,
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
      "@id": `${BASE_URL}/tubercular-pneumonia#webpage`,
      url: `${BASE_URL}/tubercular-pneumonia`,
      name: title,
      description: description,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Tubercular Pneumonia",
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
      "@id": `${BASE_URL}/tubercular-pneumonia#breadcrumb`,
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
          name: "Tubercular Pneumonia",
          item: `${BASE_URL}/tubercular-pneumonia`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/tubercular-pneumonia#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is TB pneumonia curable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, TB pneumonia is curable in the vast majority of cases with a complete course of anti-TB medication. The key to a full cure is taking the medication exactly as prescribed and for the entire duration, even after symptoms improve, since stopping early is one of the main reasons TB comes back or becomes drug-resistant.",
          },
        },
        {
          "@type": "Question",
          name: "How is tuberculosis (TB) spread?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TB spreads through the air when a person with active TB in their lungs coughs, sneezes, or talks, releasing tiny droplets containing the bacteria. It generally requires prolonged close contact with someone who has active, untreated TB, and the risk is higher in crowded or poorly ventilated spaces.",
          },
        },
        {
          "@type": "Question",
          name: "Can lungs recover after TB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases the lungs recover well after successful TB treatment, especially when the infection is caught and treated early. However, if the infection was extensive or treatment was delayed, some scarring can remain in the lung tissue, which is why follow-up imaging and lung function assessment are sometimes recommended after treatment is complete.",
          },
        },
        {
          "@type": "Question",
          name: "What does TB chest pain feel like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TB-related chest pain is often described as a dull ache or sharp discomfort that can worsen with deep breathing or coughing. It's usually accompanied by other symptoms like a persistent cough, fever, night sweats, and weight loss, rather than occurring on its own, so it's important to consider the full symptom picture rather than chest pain alone.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if I've fully recovered from TB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full recovery is confirmed through a combination of completing the entire course of medication, improvement in symptoms, and follow-up tests such as sputum tests or imaging showing the infection has cleared. Your pulmonologist will guide you on the specific tests needed to confirm you're fully cured.",
          },
        },
        {
          "@type": "Question",
          name: "Is TB pneumonia contagious throughout treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Active TB is generally most contagious before treatment starts. Once appropriate anti-TB medication is started, infectiousness typically drops significantly within a couple of weeks, though your doctor will advise on specific precautions based on your situation and test results.",
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
      <TubercularPageContent />
    </>
  );
}
