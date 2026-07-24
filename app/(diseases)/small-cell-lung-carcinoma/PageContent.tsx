import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
    {
        question: "How serious is small cell lung cancer?",
        answer: "SCLC is a serious, fast-growing lung cancer often diagnosed at an advanced stage. It usually responds well to chemotherapy and radiation initially, and prompt treatment from a Small Cell Lung Carcinoma Specialist can help control the disease effectively."
    },
    {
        question: "What is the survival rate for small cell lung cancer by stage?",
        answer: "Survival depends on the stage at diagnosis. Limited-stage SCLC generally has a better outlook than extensive-stage SCLC, where it has spread further. A specialist can give a personalised prognosis based on your test results."
    },
    {
        question: "Is small cell lung cancer curable?",
        answer: "SCLC can sometimes be cured if caught at a limited stage and treated promptly. In more advanced stages, treatment focuses on controlling growth, extending survival, and managing symptoms."
    },
    {
        question: "What is the prognosis for extensive small cell lung cancer?",
        answer: "Extensive-stage SCLC carries a more guarded prognosis than limited-stage disease, but chemotherapy, radiation, and immunotherapy can still control it and improve quality of life. A specialist can give a personalised outlook based on your case."
    },
    {
        question: "What is the difference between small cell and non-small cell lung cancer?",
        answer: "SCLC grows faster, is more strongly linked to smoking, and is mainly treated with chemotherapy and radiation. NSCLC grows more slowly, is often caught earlier, and has more options, including surgery and targeted therapy."
    },
    {
        question: "Should I see a specialist if I have a persistent cough and weight loss?",
        answer: "Yes. A cough lasting more than a few weeks, especially with weight loss, blood in mucus, or chest pain, should be evaluated promptly. Since SCLC can progress quickly, early evaluation significantly improves outcomes."
    }
];

export default function SmallCellLungCarcinomaPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Persistent Cough & Unexplained Weight Loss? It Could Be Small Cell Lung Carcinoma"
                description="Do you have a persistent cough, unexplained weight loss, or breathlessness that keeps getting worse? This could be Small Cell Lung Carcinoma (SCLC), a fast-growing type of lung cancer that needs prompt evaluation and treatment. With timely care from an experienced Small Cell Lung Carcinoma Specialist, treatment can help control the disease and manage symptoms effectively."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/7579819/pexels-photo-7579819.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS SCLC */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oncology Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Small Cell Lung Carcinoma?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Small Cell Lung Carcinoma is a type of lung cancer that develops from cells in the lung and tends to grow and spread much faster than the other main type, non-small cell lung carcinoma. It is strongly linked to smoking and is often diagnosed at a more advanced stage, since early symptoms can be subtle or mistaken for other respiratory conditions.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Because of how quickly it can spread to lymph nodes and other organs, prompt diagnosis and treatment from a Small Cell Lung Carcinoma Specialist are especially important.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/8395815/pexels-photo-8395815.jpeg"
                                alt="Pulmonary Malignancy and Aggressive Cellular Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SCLC vs NSCLC COMPARISON */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Differential Assessment
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                        Difference Between Small Cell Lung Carcinoma and Non-Small Cell Lung Carcinoma
                    </h2>

                    <p className="text-sm sm:text-base text-[#64748b] mb-6">
                        Though both are types of lung cancer, they behave very differently and need different treatment approaches:
                    </p>

                    <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="p-4 text-xs sm:text-sm font-bold text-[#0f172a]">Factor</th>
                                    <th className="p-4 text-xs sm:text-sm font-bold text-[#0f172a]">Small Cell Lung Carcinoma (SCLC)</th>
                                    <th className="p-4 text-xs sm:text-sm font-bold text-[#0f172a]">Non-Small Cell Lung Carcinoma (NSCLC)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-[#64748b]">
                                <tr>
                                    <td className="p-4 font-bold text-[#0f172a]">How common it is</td>
                                    <td className="p-4">Less common, around 10-15% of lung cancers</td>
                                    <td className="p-4">More common, around 85% of lung cancers</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-[#0f172a]">Growth rate</td>
                                    <td className="p-4">Grows and spreads quickly</td>
                                    <td className="p-4">Grows and spreads more slowly</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-[#0f172a]">Stage at diagnosis</td>
                                    <td className="p-4">Often diagnosed at an advanced stage</td>
                                    <td className="p-4">More often caught at an earlier, localised stage</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-[#0f172a]">Link to smoking</td>
                                    <td className="p-4">Very strongly linked to smoking</td>
                                    <td className="p-4">Linked to smoking, but can also occur in non-smokers</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-[#0f172a]">Primary treatment</td>
                                    <td className="p-4">Chemotherapy and radiation, since it responds well initially</td>
                                    <td className="p-4">Surgery, often combined with chemotherapy, radiation, targeted therapy, or immunotherapy</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-[#0f172a]">Surgery as an option</td>
                                    <td className="p-4">Rarely an option, since it's usually already advanced at diagnosis</td>
                                    <td className="p-4">A key treatment option in earlier stages</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF SCLC */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Signs
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Small Cell Lung Carcinoma
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            SCLC symptoms often appear once the cancer has already grown or begun to spread. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "A persistent cough that worsens over time",
                                "Coughing up blood or blood-tinged mucus",
                                "Shortness of breath",
                                "Chest pain",
                                "Unexplained weight loss and loss of appetite",
                                "Hoarseness of voice",
                                "Fatigue and general weakness",
                                "Swelling in the face or neck, in more advanced cases"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES AND RISK FACTORS */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Background
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes and Risk Factors
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            SCLC develops due to changes in lung cells that lead to uncontrolled growth. Common causes and risk factors include:
                        </p>

                        <ul className="mt-6 space-y-4">
                            {[
                                {
                                    title: "Smoking",
                                    desc: "The single biggest risk factor, present in the vast majority of SCLC cases."
                                },
                                {
                                    title: "Secondhand Smoke Exposure",
                                    desc: "Increases risk even in non-smokers."
                                },
                                {
                                    title: "Occupational Exposure",
                                    desc: "Exposure to radon, asbestos, and certain industrial chemicals."
                                },
                                {
                                    title: "Family History",
                                    desc: "A genetic predisposition can increase risk in some patients."
                                },
                                {
                                    title: "Air Pollution",
                                    desc: "Long-term exposure to polluted air."
                                }
                            ].map((factor, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">{factor.title} : <span className="font-medium text-[#64748b]">{factor.desc}</span></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DIAGNOSTIC PANEL */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Investigative Suite
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Small Cell Lung Carcinoma
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming SCLC and identifying how far it has spread is essential for choosing the right treatment approach. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                            {
                                name: "Chest X-ray or CT scan",
                            },
                            {
                                name: "PET-CT scan to check the extent of spread",
                            },
                            {
                                name: "Bronchoscopy with Transbronchial Lung Biopsy to sample tissue",
                                link: "/bronchoscopy-with-transbronchial-lung-biopsy", // Update with actual slug
                            },
                            {
                                name: "EBUS (Endobronchial Ultrasound) to examine nearby lymph nodes",
                                link: "/ebus-endobronchial-ultrasound", // Update with actual slug
                            },
                            {
                                name: "Biopsy for tissue confirmation",
                                link: "/lung-biopsy", // Update with actual slug
                            },
                            {
                                name: "Pulmonary Function Test (PFT) to assess lung capacity before treatment",
                                link: "/pulmonary-function-test-pft", // Update with actual slug
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
                <section className="pt-10 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Management
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Small Cell Lung Carcinoma Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Small cell lung carcinoma tends to grow and spread faster than its non-small cell counterpart, which shapes a very different treatment approach from the start. Dr. Manish Aggarwal builds the plan around how far the cancer has spread and the patient's overall health, since SCLC is usually caught at a more advanced stage and typically needs a systemic approach rather than localised treatment alone.
                        </p>
                        <p>
                            Chemotherapy forms the backbone of initial treatment because SCLC tends to respond well to it early on, often paired with radiation, including preventive brain radiation given the cancer's tendency to spread there. Surgery remains an option only for the rare, early-caught cases. Since SCLC can respond well to initial treatment but also has a higher chance of returning, regular monitoring by your Small Cell Lung Carcinoma Specialist is an essential part of long-term care.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h4>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of SCLC is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Small Cell Lung Carcinoma Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Lead Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Your Small Cell Lung Carcinoma Specialist in Delhi - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and managing lung cancer, including Small Cell Lung Carcinoma. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and stage of disease, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* BOTTOM CONVERSION BAR */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Early Diagnosis Can Make All the Difference
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    SCLC moves fast; don't wait. Get an expert diagnosis and a personalised treatment plan from Dr. Manish Aggarwal, your trusted Small Cell Lung Carcinoma Specialist in Delhi.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book an Appointment Today" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}