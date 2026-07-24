import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import { link } from "fs";
import Link from "next/link";

const faqs = [
    {
        question: "Is non-small cell lung cancer curable?",
        answer: "Non-small cell lung cancer can be curable, especially when it's diagnosed at an early stage and treated with surgery, sometimes combined with chemotherapy or radiation. In more advanced stages, treatment focuses on controlling the cancer's growth and managing symptoms, though outcomes vary depending on the subtype and how far it has spread."
    },
    {
        question: "What is the prognosis of non-small cell lung cancer?",
        answer: "Prognosis depends largely on the stage at diagnosis, the specific subtype, and how well the patient responds to treatment. Early-stage NSCLC generally has a better outlook than cancer that has spread to other organs. Molecular testing can also reveal targeted treatment options that improve outcomes for certain patients. A Non-Small Cell Lung Carcinoma Specialist can give a more personalised outlook after reviewing your specific test results."
    },
    {
        question: "How do you treat non-small cell lung cancer?",
        answer: "Treatment depends on the stage and subtype of the cancer, and usually involves a combination of surgery, chemotherapy, radiation therapy, targeted therapy, or immunotherapy. Dr. Manish Aggarwal decides the right combination based on detailed imaging, biopsy results, and molecular testing."
    },
    {
        question: "What is non-small cell carcinoma lung cancer?",
        answer: "Non-small cell lung carcinoma is the most common type of lung cancer, making up the large majority of cases. It includes subtypes like adenocarcinoma, squamous cell carcinoma, and large cell carcinoma, and tends to grow and spread more slowly than small cell lung cancer, the other main type."
    },
    {
        question: "What are the stages of non-small cell lung cancer?",
        answer: "NSCLC is generally staged from I to IV, based on the size of the tumour and whether it has spread to lymph nodes or other parts of the body. Stage I is localised to the lung, while Stage IV indicates the cancer has spread to distant organs. Staging plays a major role in deciding the treatment approach."
    },
    {
        question: "Should I see a specialist if I have a persistent cough?",
        answer: "Yes, a cough that lasts more than a few weeks, especially if accompanied by weight loss, blood in the mucus, or chest pain, should be evaluated by a pulmonologist. Early evaluation allows for timely diagnosis, which significantly improves treatment outcomes for lung cancer."
    }
];

export default function NonSmallCellLungCarcinomaPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Unexplained Weight Loss & Chest Pain? Understanding Non-Small Cell Lung Carcinoma"
                description="Do you have a persistent cough, unexplained weight loss, or chest pain that isn't going away? This could be Non-Small Cell Lung Carcinoma (NSCLC), the most common type of lung cancer. With early diagnosis and the right treatment from an experienced Non-Small Cell Lung Carcinoma Specialist, many patients achieve good outcomes, especially when it's caught early."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/128597/pexels-photo-128597.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS NSCLC */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oncology Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Non-Small Cell Lung Carcinoma?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Non-Small Cell Lung Carcinoma is a type of lung cancer that develops when cells in the lung tissue grow abnormally and form a tumour. It accounts for the large majority of all lung cancer cases and grows and spreads more slowly than the other main type, small cell lung cancer, which generally gives a wider window for effective treatment.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                NSCLC includes a few subtypes, such as adenocarcinoma, squamous cell carcinoma, and large cell carcinoma, each behaving slightly differently. Without proper evaluation and treatment from a Non-Small Cell Lung Carcinoma Specialist, the cancer can spread to other parts of the body over time.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/7579820/pexels-photo-7579820.jpeg"
                                alt="Pulmonary Oncology and Molecular Tissue Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF NSCLC */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Non-Small Cell Lung Carcinoma
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            NSCLC symptoms can be subtle in the early stages and are often mistaken for other respiratory conditions. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "A persistent cough that doesn't go away or worsens over time",
                                "Coughing up blood or blood-tinged mucus",
                                "Chest pain that worsens with deep breathing, coughing, or laughing",
                                "Shortness of breath",
                                "Unexplained weight loss and loss of appetite",
                                "Hoarseness of voice",
                                "Recurrent infections like bronchitis or pneumonia",
                                "Fatigue and general weakness"
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
                            Risk Matrices
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes and Risk Factors
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            NSCLC develops due to changes in lung cells that lead to uncontrolled growth. Common causes and risk factors include:
                        </p>

                        <ul className="mt-6 space-y-4">
                            {[
                                {
                                    title: "Smoking",
                                    desc: "The leading risk factor, responsible for the majority of NSCLC cases."
                                },
                                {
                                    title: "Secondhand Smoke Exposure",
                                    desc: "Increases risk even in non-smokers."
                                },
                                {
                                    title: "Air Pollution",
                                    desc: "Long-term exposure to polluted air and vehicle exhaust."
                                },
                                {
                                    title: "Occupational Exposure",
                                    desc: "Exposure to asbestos, radon, and certain industrial chemicals."
                                },
                                {
                                    title: "Family History",
                                    desc: "A genetic predisposition can increase risk in some patients."
                                },
                                {
                                    title: "Prior Radiation Therapy",
                                    desc: "Previous radiation to the chest for another condition."
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
                        Investigative Protocol
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Non-Small Cell Lung Carcinoma
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming NSCLC and identifying its exact type and stage is essential for building the right treatment plan. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                           {name: "Chest X-ray or CT scan"},
                            {name:"PET-CT scan to check the extent of spread"},
                            {name:"Bronchoscopy with Transbronchial Lung Biopsy to sample tissue"},
                            {name:"EBUS (Endobronchial Ultrasound) to examine nearby lymph nodes"},
                            {name:"Biopsy for tissue and molecular testing"},
                            {name:"Pulmonary Function Test (PFT) to assess lung capacity before treatment"}
                        ].map((test:{ name: string; link?: string }, index) => (
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
                        Therapeutic Framework
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Non-Small Cell Lung Carcinoma Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Non-small cell lung carcinoma is the most common form of lung cancer, and treatment decisions depend heavily on how early it's caught and what makes the individual tumour tick. Dr. Manish Aggarwal builds each treatment plan around the cancer's stage, its specific subtype, and the patient's overall fitness for treatment, since these factors determine whether surgery is possible or whether other approaches take priority.
                        </p>
                        <p>
                            For early-stage disease, surgery often offers the best chance at removing the cancer entirely, while more advanced or inoperable cases rely on chemotherapy, radiation, targeted therapy, or immunotherapy, sometimes in combination, based on molecular testing and how the tumour behaves. Since NSCLC treatment often combines more than one approach, regular monitoring by your Non-Small Cell Lung Carcinoma Specialist helps track response and adjust the plan as needed.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CENTER */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of NSCLC is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Non-Small Cell Lung Carcinoma Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST BIOGRAPHY */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Lead Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                About Dr. Manish Aggarwal – Lung Cancer Specialist
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and managing lung cancer, including Non-Small Cell Lung Carcinoma. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and stage of disease, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Lung Cancer Care Specialist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* BOTTOM CONVERSION MAT */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Your Path to the Right Treatment Starts Here
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Early diagnosis can make all the difference. Get an expert evaluation and a personalised NSCLC treatment plan from Dr. Manish Aggarwal, your trusted Non-Small Cell Lung Carcinoma Specialist in Delhi.
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