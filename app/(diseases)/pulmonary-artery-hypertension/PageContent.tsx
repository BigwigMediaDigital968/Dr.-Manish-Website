import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";


const faqs = [
    {
        question: "Is pulmonary hypertension curable?",
        answer: "Pulmonary hypertension generally cannot be cured, but it can be managed very effectively with the right combination of medication, lifestyle adjustments, and treatment of any underlying cause. Many patients maintain a good quality of life for years with consistent treatment and follow-up."
    },
    {
        question: "What foods should I avoid with pulmonary hypertension?",
        answer: "Patients with pulmonary hypertension are generally advised to limit salt intake, since it can contribute to fluid retention and extra strain on the heart. Excess alcohol and very high-fat meals are also usually discouraged. Since dietary needs can vary based on your specific condition and any related heart or fluid issues, it's best to get personalised guidance from your specialist."
    },
    {
        question: "What is pulmonary hypertension and what causes it?",
        answer: "Pulmonary hypertension is high blood pressure in the arteries that carry blood from the heart to the lungs. It can be caused by heart conditions, lung diseases like COPD or interstitial lung disease, autoimmune diseases, congenital heart defects, chronic blood clots in the lungs, or liver disease. In some cases, no specific cause is found."
    },
    {
        question: "Can stress cause pulmonary hypertension?",
        answer: "Stress on its own is not considered a direct cause of pulmonary hypertension. However, since the heart and lungs are already under strain in this condition, high stress levels can make symptoms feel more pronounced and may affect overall heart health. Managing stress is a helpful part of overall care, but it isn't the underlying cause of the condition itself."
    },
    {
        question: "How serious is pulmonary hypertension?",
        answer: "Pulmonary hypertension can range from mild to severe, and if left untreated, it can lead to significant strain on the heart over time. The outlook depends on the underlying cause, how early it's diagnosed, and how well it responds to treatment, which is why timely evaluation by a Pulmonary Artery Hypertension Specialist is important."
    },
    {
        question: "Can pulmonary hypertension be managed with exercise?",
        answer: "Yes, supervised exercise as part of pulmonary rehabilitation can help improve exercise capacity and quality of life for many patients. However, activity levels should be guided by your specialist, since certain types or intensities of exercise may need to be avoided depending on the severity of your condition."
    }
];

export default function PulmonaryArteryHypertensionPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Breathless & Fatigued for No Clear Reason? It Could Be Pulmonary Artery Hypertension"
                description="Do you get breathless with everyday activities that never used to tire you out, or feel unusually fatigued and light-headed? This could be Pulmonary Artery Hypertension, a condition where the blood pressure in the arteries of your lungs rises above normal. With the right treatment from an experienced Pulmonary Artery Hypertension Specialist, symptoms can be managed and the strain on your heart and lungs reduced."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS PAH & CAUSES OVERVIEW */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Pulmonary Artery Hypertension and What Causes It?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Pulmonary Artery Hypertension is a condition where the blood pressure in the arteries carrying blood from the heart to the lungs becomes abnormally high. Over time, this makes the heart work harder to pump blood through the lungs, which can lead to strain on the heart if left unmanaged.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                It can develop on its own, or as a result of another underlying condition affecting the heart, lungs, or blood vessels. Without proper treatment from a Pulmonary Artery Hypertension Specialist, the increased strain on the heart can worsen over time.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop"
                                alt="Advanced Pulmonary Vascular Evaluation and Diagnostic Assessment"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF PAH */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Pulmonary Artery Hypertension
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Symptoms often develop gradually and can be mistaken for general tiredness or being out of shape in the early stages. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "CT Pulmonary Angiography, the primary test used to directly visualise a clot in the lungs",
                                "Blood oxygen level check (pulse oximetry)",
                                "Arterial Blood Gas (ABG) Analysis",
                                "D-dimer blood test, to help assess the likelihood of a clot",
                                "Doppler ultrasound of the legs, to check for a source clot (DVT)",
                                "ECG, to assess how the heart is being affected",
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES OF PAH */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Factors
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Pulmonary Artery Hypertension
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Pulmonary Artery Hypertension can occur on its own or develop due to an underlying condition. Common causes include:
                        </p>

                        <div className="mt-6 space-y-2">
                            {[
                                {
                                    title: "Heart Conditions",
                                    desc: "Such as heart failure or valve problems, which are among the most common underlying causes.",
                                },
                                {
                                    title: "Lung Conditions",
                                    desc: "Including COPD, interstitial lung disease, and chronic blood clots in the lungs.",
                                },
                                {
                                    title: "Autoimmune Diseases",
                                    desc: "Such as scleroderma and lupus.",
                                },
                                {
                                    title: "Congenital Heart Defects",
                                    desc: "Present from birth, which can increase pressure in the pulmonary arteries over time.",
                                },
                                {
                                    title: "Liver Disease",
                                    desc: "Certain chronic liver conditions can contribute to pulmonary hypertension.",
                                },
                                {
                                    title: "Idiopathic",
                                    desc: "In some patients, no specific cause is identified despite thorough testing.",
                                },
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
                        Investigative Strategy
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Pulmonary Artery Hypertension
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming Pulmonary Artery Hypertension, and identifying any underlying cause, is essential for building the right treatment plan. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray or CT scan",
                            },
                            {
                                name: "Pulmonary Function Test (PFT), to rule out or assess associated lung conditions",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "6 Minute Walk Test, to assess exercise capacity and monitor treatment response",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "Arterial Blood Gas (ABG) Analysis",
                            },
                            {
                                name: "Blood tests, to check for underlying autoimmune or liver conditions",
                            },
                        ].map((test: { name: string; link?: string }, index) => (
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
                        Therapeutic Framework
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Pulmonary Artery Hypertension Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Pulmonary artery hypertension is a chronic condition where the blood vessels in the lungs narrow, forcing the heart to work harder over time. Dr. Manish Aggarwal builds the treatment plan around the severity of the condition and any underlying cause, since managing PAH effectively means easing the strain on the heart while addressing what's driving it.
                        </p>
                        <p>
                            Core treatment usually centres on medications that widen the lung's blood vessels, supported by oxygen therapy and lifestyle adjustments that reduce extra strain on the heart. When PAH stems from another condition, such as heart, lung, or autoimmune disease, treating that cause is equally important, alongside rehabilitation to safely build exercise capacity. Since Pulmonary Artery Hypertension is a long-term condition, consistent follow-up with your Pulmonary Artery Hypertension Specialist plays a key role in keeping it well managed.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of Pulmonary Artery Hypertension is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Pulmonary Artery Hypertension Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Vascular Pulmonology Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Dr. Manish Aggarwal, Your Pulmonary Hypertension Specialist
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and managing Pulmonary Artery Hypertension and other lung and breathing-related conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and underlying cause, rather than offering a one-size-fits-all approach.
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
                                    Take the First Step Towards Easier Breathing
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Unexplained breathlessness and fatigue deserve a proper evaluation. Get an expert diagnosis and personalised treatment plan from Dr. Manish Aggarwal, your trusted Pulmonary Artery Hypertension Specialist in Delhi.
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