import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";


const faqs = [
    {
        question: "What is the most common tumor of the pleura?",
        answer: "The most common primary tumor of the pleura is the solitary fibrous tumor, which is usually benign. However, when it comes to malignant pleural tumors, mesothelioma, strongly linked to asbestos exposure, is the most well-known type. Metastatic tumors, where cancer spreads to the pleura from elsewhere in the body, are also commonly seen."
    },
    {
        question: "What are the signs of a benign tumor?",
        answer: "Benign pleural tumors are often found incidentally on a scan done for another reason, since they frequently cause no symptoms at all. When symptoms do occur, they tend to be mild and may include chest discomfort or a cough, without the more concerning signs like rapid weight loss or worsening breathlessness that are more typical of malignant tumors."
    },
    {
        question: "What are the different types of tumors?",
        answer: "Pleural tumors are broadly classified as benign, such as solitary fibrous tumors, or malignant, such as mesothelioma. Malignant tumors can also be primary, meaning they start in the pleura itself, or metastatic, meaning they've spread there from cancer elsewhere in the body, most often the lung or breast."
    },
    {
        question: "Do benign tumors need to be removed?",
        answer: "Not always. Small, benign pleural tumors without symptoms are often just monitored with periodic imaging. Surgery is generally recommended if the tumor is causing symptoms, growing over time, or if there's any uncertainty about whether it could be malignant."
    },
    {
        question: "Is a pleural tumor the same as pleural effusion?",
        answer: "No, though the two can be related. A pleural tumor is an abnormal growth in the pleura, while pleural effusion is a build-up of fluid around the lung, which can sometimes occur as a result of a pleural tumor. A Pleural Tumor Specialist can determine whether one is causing the other in your specific case."
    },
    {
        question: "Should I see a specialist if I have unexplained chest pain and breathlessness?",
        answer: "Yes, persistent or unexplained chest pain and breathlessness should always be evaluated by a pulmonologist. While many causes are not serious, timely evaluation ensures that any pleural tumor or other underlying condition is identified and managed early."
    }
];

export default function PleuralTumorPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Pleural Tumor: Benign or Malignant? Here's How to Find Out"
                description="Have you been told there's a growth on the lining around your lung, or are you experiencing chest pain, breathlessness, or a persistent cough? This could be a pleural tumor, a growth that develops in the thin lining surrounding the lungs. With the right evaluation from an experienced Pleural Tumor Specialist, most cases can be accurately diagnosed and managed appropriately."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS A PLEURAL TUMOR */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Introduction
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is a Pleural Tumor?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                A pleural tumor is an abnormal growth that develops in the pleura, the thin layer of tissue that surrounds the lungs and lines the inside of the chest wall. These tumors can be benign, meaning non-cancerous and generally slow-growing, or malignant, meaning cancerous and requiring more urgent evaluation.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Some pleural tumors develop on their own, while others occur when cancer from elsewhere in the body spreads to the pleura. Because symptoms can overlap with several other lung and chest conditions, evaluation by a Pleural Tumor Specialist is important to confirm the diagnosis and plan the right treatment.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/4225923/pexels-photo-4225923.jpeg"
                                alt="Thoracic Oncology and Clinical Assessment of Pleural Tissue"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF A PLEURAL TUMOR */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of a Pleural Tumor
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Symptoms often develop gradually and can be mistaken for other lung or chest conditions. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Chest pain that may worsen with breathing or coughing",
                                "Shortness of breath",
                                "A persistent cough",
                                "Unexplained weight loss",
                                "Fatigue",
                                "A feeling of heaviness or fullness in the chest, sometimes due to associated fluid build-up (pleural effusion)"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* TYPES AND CAUSES */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Pathology & Risk Factors
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Types and Causes of Pleural Tumors
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Pleural tumors are broadly grouped into benign and malignant types, each with different underlying causes:
                        </p>

                        <div className="mt-6 space-y-2">
                            {[
                                {
                                    title: "Benign Pleural Tumors",
                                    desc: "Such as solitary fibrous tumors of the pleura, which are non-cancerous, slow-growing, and often found incidentally on imaging."
                                },
                                {
                                    title: "Malignant Mesothelioma",
                                    desc: "A cancer of the pleura strongly linked to long-term asbestos exposure."
                                },
                                {
                                    title: "Metastatic Pleural Tumors",
                                    desc: "Occur when cancer from another part of the body, such as the lung, breast, or ovaries, spreads to the pleura."
                                },
                                {
                                    title: "Occupational Exposure",
                                    desc: "Long-term exposure to asbestos or other industrial materials is one of the most significant risk factors for malignant pleural tumors."
                                }
                            ].map((type, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">{type.title} : <span className="font-normal text-[#64748b]">{type.desc}</span></p>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIAGNOSTIC PANEL */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Diagnostic Protocol
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Pleural Tumor
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming whether a pleural tumor is benign or malignant is the most important step, since it determines the entire treatment approach. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray or CT scan",
                            },
                            {
                                name: "PET-CT scan to check for signs of malignancy or spread",
                            },
                            {
                                name: "Pleural Aspiration, to test any associated fluid build-up",
                                link: "/pleural-aspiration-thoracentesis", // Update with actual slug
                            },
                            {
                                name: "Medical Thoracoscopy, for direct visualisation and tissue sampling",
                                link: "/medical-thoracoscopy", // Update with actual slug
                            },
                            {
                                name: "Pleural Biopsy, to confirm the exact type of tumor",
                                link: "/pleural-biopsy", // Update with actual slug
                            },
                        ].map((test:{name:string; link?:string}, index) => (
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
                        Management Strategy
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        How Pleural Tumors Are Treated
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Pleural tumors are uncommon and can be either harmless growths or a sign of a more serious cancer, so getting the diagnosis right shapes everything that follows. Dr. Manish Aggarwal builds the treatment plan around whether the tumour is benign or malignant, its size, and how it's affecting the patient, since a small, symptom-free growth calls for a very different approach than an active malignancy.
                        </p>
                        <p>
                            Many benign tumours simply need periodic monitoring, while symptomatic ones and operable malignant tumours are usually treated with surgery, sometimes alongside draining any related fluid buildup. For malignant pleural tumours like mesothelioma, treatment often combines chemotherapy and radiation with surgery, or replaces it when surgery isn't feasible, and cases requiring specialised cancer care are coordinated based on the tumour's type and extent of spread.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every pleural tumor is different, and so is the right approach for it, by Dr. Manish Aggarwal, your trusted Pleural Tumor Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Pulmonary Consultant
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Your Pleural Tumor Specialist in Delhi - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and managing pleural tumors and other chest conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* CLOSING CONVERSION BAR */}
                <section className="py-8 sm:py-10 pb-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Know Exactly What You're Dealing With
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Get an expert evaluation and a personalised treatment plan for pleural tumours from Dr. Manish Aggarwal, your trusted Pleural Tumour Specialist in Delhi.
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