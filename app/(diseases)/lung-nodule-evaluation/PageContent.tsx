import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

// Metadata configuration exported for Next.js SEO optimization
export const metadata = {
    title: "Lung Nodule Evaluation & Management – Dr. Manish Aggarwal",
    description: "Spot found on your lung scan? Learn about lung nodule causes, diagnostic tests, and get an expert evaluation from Dr. Manish Aggarwal in Delhi.",
    keywords: ["Lung Nodule", "Lung Nodule Evaluation", "Lung Nodule Evaluation Specialist", "lung nodule specialist Delhi", "lung nodule monitoring Delhi", "pulmonologist for lung nodules", "chest CT scan doctor Delhi"]
};

const faqs = [
    {
        question: "What tests are done for lung nodules?",
        answer: "The main tests include a CT scan to characterise the nodule's size, shape, and growth pattern, and a PET-CT scan for nodules with suspicious features. If closer evaluation is needed, a bronchoscopy with biopsy or EBUS may be done to examine the tissue or nearby lymph nodes directly."
    },
    {
        question: "Which screening test is commonly used to evaluate the lung for nodules?",
        answer: "A low-dose CT scan of the chest is the most commonly used screening test to detect and evaluate lung nodules, especially in people at higher risk, such as long-term smokers. It gives a far more detailed view than a standard chest X-ray."
    },
    {
        question: "What is the most common cause of lung nodules?",
        answer: "The most common cause is a granuloma, a small area of healed inflammation, often from a past infection like tuberculosis or a fungal infection. The vast majority of lung nodules are benign and unrelated to cancer."
    },
    {
        question: "What is the best treatment for lung nodules?",
        answer: "There's no single \"best\" treatment, since it depends entirely on the nodule's characteristics. Small, low-risk nodules are often just monitored with repeat CT scans, while nodules with more concerning features may need a PET-CT scan or biopsy. Dr. Manish Aggarwal decides the right approach based on your specific scan findings."
    },
    {
        question: "When should a lung nodule be biopsied?",
        answer: "A biopsy is generally considered when a nodule is large, growing over time, has suspicious features on imaging, or occurs in a patient with significant risk factors like a long smoking history. Your specialist will weigh these factors to decide if and when a biopsy is needed."
    },
    {
        question: "What is the blood test for lung nodules?",
        answer: "There isn't one single blood test that diagnoses a lung nodule, but blood tests may be used to check for signs of infection or inflammation that could explain the nodule, or as part of a broader workup depending on the suspected cause. Imaging remains the primary tool for evaluating lung nodules."
    }
];

export default function LungNodulePage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Most Lung Nodules Aren't Cancer. Here's How to Know for Sure."
                description="Was a spot found on your lung during a scan for something else? This is called a lung nodule, and while the discovery can feel worrying, most lung nodules turn out to be harmless. A proper Lung Nodule Evaluation by an experienced specialist is the best way to understand what it is and whether any further action is needed."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS A LUNG NODULE */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is a Lung Nodule?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                A lung nodule is a small, round spot in the lung, usually found by chance on a chest X-ray or CT scan done for an unrelated reason. Most nodules are small, under 3 cm, and the majority turn out to be benign, often caused by old infections, scar tissue, or other harmless changes in the lung.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                However, a small proportion can be an early sign of lung cancer, which is why a proper Lung Nodule Evaluation by a specialist is important rather than ignoring the finding or assuming the worst.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop"
                                alt="Pulmonary Imaging and Structural Lung Nodule Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* COMMON CAUSES & SYMPTOMS */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* COMMON CAUSES OF LUNG NODULES */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Background
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Common Causes of Lung Nodules
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Lung nodules can form for many reasons, and the vast majority are not cancerous. Common causes include:
                        </p>

                        <div className="mt-6 space-y-2">
                            {[
                                {
                                    title: "Old or Healed Infections",
                                    desc: "Such as tuberculosis or fungal infections, which can leave behind scar tissue."
                                },
                                {
                                    title: "Granulomas",
                                    desc: "Small areas of inflammation that form in response to infection or irritation, one of the most common causes of benign nodules."
                                },
                                {
                                    title: "Benign Tumors",
                                    desc: "Non-cancerous growths like hamartomas."
                                },
                                {
                                    title: "Inflammatory Conditions",
                                    desc: "Such as rheumatoid nodules in patients with autoimmune disease."
                                },
                                {
                                    title: "Early-Stage Lung Cancer",
                                    desc: "A smaller proportion of nodules turn out to be malignant, more likely in smokers, older patients, or nodules with certain features on imaging."
                                }
                            ].map((cause, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    <p className="text-sm font-bold text-[#0f172a]">{cause.title} : <span className="font-medium text-[#64748b]">{cause.desc}</span></p>
                                </li>
                            ))}
                        </div>
                    </div>

                    {/* SYMPTOMS ASSOCIATED WITH LUNG NODULES */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms Associated with Lung Nodules
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Most lung nodules cause no symptoms at all and are found incidentally on a scan done for another reason. When symptoms are present, they're usually related to an underlying cause rather than the nodule itself, and may include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "A persistent cough",
                                "Coughing up blood, in rare cases",
                                "Chest discomfort",
                                "Recurrent chest infections",
                                "Unexplained weight loss, if the nodule is linked to an underlying malignancy"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DIAGNOSTIC PANEL */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Investigative Strategy
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Lung Nodule Evaluation
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        The goal of Lung Nodule Evaluation is to determine whether a nodule is benign or needs closer monitoring or biopsy, based on its size, shape, growth pattern, and the patient's risk factors. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray, often the test that first identifies the nodule",
                            },
                            {
                                name: "CT scan of the chest, the primary tool for characterising a lung nodule in detail",
                            },
                            {
                                name: "PET-CT scan, used for nodules with suspicious features to check for increased activity",
                            },
                            {
                                name: "Bronchoscopy with Transbronchial Lung Biopsy, when a tissue sample is needed",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "EBUS (Endobronchial Ultrasound), to examine nearby lymph nodes if needed",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "Blood tests, to check for signs of infection or inflammation that could explain the nodule",
                            },
                        ].map((test, index) => (
                            <li key={index} className="flex gap-3 items-start text-xs sm:text-sm font-bold text-[#0f172a] leading-relaxed">
                                <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                {

                                    test.link && test?.link ? (
                                        <Link href={test.link} className="hover:text-[#1fa8e8]"> {test.name}
                                        </Link>
                                    ) : (
                                        test.name
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </section>

                {/* TREATMENT SECTOR */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Management Framework
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Lung Nodule Treatment and Management
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Lung nodules are common and most turn out to be harmless, but distinguishing a benign spot from something that needs attention requires careful evaluation. Dr. Manish Aggarwal decides the right next step based on the nodule's size, appearance, growth pattern, and the patient's individual risk factors, since not every nodule needs the same level of intervention.
                        </p>
                        <p>
                            Many small, low-risk nodules simply need periodic monitoring through repeat scans, while those with more concerning features may call for further imaging or a biopsy to reach a clear diagnosis. If the nodule turns out to be linked to an infection or inflammation, treatment addresses that directly, and cases confirmed as malignant are promptly guided toward appropriate cancer care.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get Your Lung Nodule Evaluated
                        </h4>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Don't let an unexplained finding on your scan sit unanswered. Get a clear evaluation from Dr. Manish Aggarwal, your trusted Lung Nodule Evaluation Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST BIOGRAPHY */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Expert Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Your Trusted Specialist for Lung Nodule Evaluation
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience evaluating and managing lung nodules and other lung conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and guiding patients through next steps based on their specific scan findings and risk factors, rather than causing unnecessary worry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* CLOSING CONVERSION BAR */}
                <section className="py-8 sm:py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Get Clarity on Your Scan Findings
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Most lung nodules turn out to be harmless, but only a proper evaluation can confirm that. Get a clear diagnosis and next-step plan from Dr. Manish Aggarwal, your trusted Lung Nodule Evaluation Specialist in Delhi.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <WhatsappButton cta="Book an Appointment Today" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}