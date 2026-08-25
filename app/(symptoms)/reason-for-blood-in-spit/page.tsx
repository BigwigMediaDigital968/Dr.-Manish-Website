import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL || "https://www.drmanishaggarwal.com";
const PAGE_PATH = "/reason-for-blood-in-spit";
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;

const title = "Reason for Blood in Spit? Consult with Dr. Manish Aggarwal";
const description =
  "Worried about blood in your spit? Discover the Reason for Blood in Spit behind your symptoms. Book your consultation with Dr. Manish Aggarwal now.";

export const metadata = {
  title,
  description,
  keywords: [
    "reason for blood in spit",
    "causes of blood in spit",
    "book pulmonologist consultation",
    "best pulmonologist for blood in spit",
    "Dr. Manish Aggarwal appointment",
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
        url: "logo-new.png",
        width: 750,
        alt: "Dr. Manish Aggarwal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "logo-new.png",
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
        name: "Blood in Spit",
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
          name: "Reason for Blood in Spit",
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
          name: "What is the main reason for blood in spit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single reason for blood in spit. Common causes include forceful coughing, chest infections, pneumonia, tuberculosis, nasal bleeding, smoking, and in rare cases, lung cancer. A doctor needs to examine you to find the exact cause in your case.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most common causes of blood in spit in young, otherwise healthy people?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In younger people, common causes of blood in spit include a bad cold, forceful coughing, minor nosebleeds, or a mild chest infection. These are usually manageable once identified correctly.",
          },
        },
        {
          "@type": "Question",
          name: "Is blood in spit always a sign of a serious lung disease?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. While some causes of blood in spit are serious, many are linked to temporary issues like a cold, cough, or minor nasal irritation that improve with the right treatment.",
          },
        },
        {
          "@type": "Question",
          name: "When should I see a pulmonologist for blood in spit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should book an appointment if blood in spit happens more than once, comes in more than small streaks, or is paired with cough, chest pain, breathlessness, or weight loss.",
          },
        },
        {
          "@type": "Question",
          name: "Is blood in spit serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. A small streak of blood after a hard cough or a cold is usually harmless. But if it happens more than once, comes in a larger amount, or is paired with chest pain, breathlessness, or weight loss, it should be checked by a doctor rather than ignored.",
          },
        },
        {
          "@type": "Question",
          name: "What causes blood in your saliva?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blood in saliva is often caused by something simple like a cut in the mouth, bleeding gums, a dry or irritated throat, or a nosebleed that has trickled down. It can also come from a chest infection or a stronger cough, so it helps to notice whether it is really coming from your mouth and gums or from deeper in your throat and airway.",
          },
        },
        {
          "@type": "Question",
          name: "Is it normal to spit out a little blood?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A single small streak once in a while, especially after brushing your teeth too hard or a bad coughing fit, is usually nothing to worry about. It is not normal if it keeps happening over several days, increases in amount, or comes with no clear reason like a cold or minor injury.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop spitting blood?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The right way to stop it depends on what is causing it. Resting your voice and throat, staying hydrated, and avoiding smoking can help with minor irritation. But if the blood in spit continues, home remedies will not fix an underlying infection or airway issue, so it is safer to get it examined and treated at the source rather than trying to manage it on your own.",
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
