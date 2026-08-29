import PageContent from "./PageContent";

const BASE_URL = process.env.SITE_URL;

const title =
    "Allergic Bronchopulmonary Aspergillosis Specialist in Delhi";

const description =
    "Persistent cough or asthma not responding to treatment? Learn about ABPA (Allergic Bronchopulmonary Aspergillosis) & get expert care from Dr. Manish Aggarwal.";

export const metadata = {
    title,
    description,
    keywords: [
        "Allergic Bronchopulmonary Aspergillosis",
        "Allergic Bronchopulmonary Aspergillosis Specialist",
        "Allergic Bronchopulmonary Aspergillosis Specialist in Delhi",
        "ABPA treatment Delhi",
        "ABPA specialist",
        "aspergillosis doctor Delhi",
        "pulmonologist for ABPA",
        "ABPA lung treatment",
    ],
    alternates: {
        canonical: `${BASE_URL}/allergic-bronchopulmonary-aspergillosis`,
    },
    openGraph: {
        title,
        description,
        url: `${BASE_URL}/allergic-bronchopulmonary-aspergillosis`,
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
            "@id": `${BASE_URL}/allergic-bronchopulmonary-aspergillosis#webpage`,
            url: `${BASE_URL}/allergic-bronchopulmonary-aspergillosis`,
            name: "Allergic Bronchopulmonary Aspergillosis Specialist in Delhi",
            description:
                "Persistent cough or asthma not responding to treatment? Learn about ABPA (Allergic Bronchopulmonary Aspergillosis) & get expert care from Dr. Manish Aggarwal.",
            inLanguage: "en-IN",
            about: {
                "@type": "MedicalCondition",
                name: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
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
            "@id": `${BASE_URL}/allergic-bronchopulmonary-aspergillosis#breadcrumb`,
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
                    name: "Allergic Bronchopulmonary Aspergillosis",
                    item: `${BASE_URL}/allergic-bronchopulmonary-aspergillosis`,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/allergic-bronchopulmonary-aspergillosis#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What medication is used for allergic bronchopulmonary aspergillosis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most commonly used medications for ABPA are oral corticosteroids, such as prednisolone, which reduce airway inflammation, and antifungal medicines like itraconazole or voriconazole, which lower the fungal load in the lungs. In more severe or relapsing cases, biologic injections may also be used as part of the treatment plan.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the best treatment for aspergillosis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There is no single best treatment, since Aspergillus-related lung conditions vary from person to person. For ABPA specifically, a combination of steroids and antifungal medicines usually works best, along with regular monitoring. Dr. Manish Aggarwal evaluates your test reports and symptoms to decide the most suitable treatment for your case.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long is treatment for ABPA?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Treatment duration varies from patient to patient. In general, the initial phase with steroids may last around 3 to 6 months, and antifungal medicines are often continued for a similar duration. Some patients need longer-term or repeated courses if the condition relapses. Regular follow-up helps determine when it is safe to reduce or stop medicines.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is ABPA the same as a lung infection?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No, ABPA is an allergic reaction to the Aspergillus fungus, not a spreading infection. The fungus triggers inflammation in the airways rather than actively infecting lung tissue the way bacteria or viruses do.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can ABPA be cured completely?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ABPA cannot be permanently cured, but it can be managed very effectively. With consistent treatment and regular monitoring, most patients lead a completely normal life with well-controlled symptoms.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ABPA only affect people with asthma?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most people who develop ABPA already have asthma or cystic fibrosis, but it can occasionally occur in people without a prior diagnosis of either condition, especially if their immune system reacts strongly to Aspergillus.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can children get ABPA?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, though it is more commonly seen in children and adults who have underlying asthma or cystic fibrosis. Symptoms and treatment Principals are similar, but dosing and monitoring are adjusted for children.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens if ABPA is left untreated?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If untreated, ongoing inflammation can lead to permanent scarring of the airways, a condition called bronchiectasis, along with worsening lung function over time. This is why early diagnosis and treatment matter so much.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I see a pulmonologist for ABPA?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, a pulmonologist can accurately diagnose ABPA and rule out other conditions like plain asthma or COPD. Getting the right diagnosis from an Allergic Bronchopulmonary Aspergillosis Specialist ensures your treatment actually addresses the root cause instead of just managing symptoms temporarily.",
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