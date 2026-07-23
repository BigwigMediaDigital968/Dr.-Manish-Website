import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

// Metadata configuration exported for Next.js SEO optimization
export const metadata = {
    title: "Allergic Bronchopulmonary Aspergillosis Specialist in Delhi",
    description: "Persistent cough or asthma not responding to treatment? Learn about ABPA (Allergic Bronchopulmonary Aspergillosis) & get expert care from Dr. Manish Aggarwal.",
    keywords: ["Allergic Bronchopulmonary Aspergillosis", "Allergic Bronchopulmonary Aspergillosis Specialist", "Allergic Bronchopulmonary Aspergillosis Specialist in Delhi", "ABPA treatment Delhi", "ABPA specialist", "aspergillosis doctor Delhi", "pulmonologist for ABPA", "ABPA lung treatment"]
};

const faqs = [
    {
        question: "What medication is used for allergic bronchopulmonary aspergillosis?",
        answer: "The most commonly used medications for ABPA are oral corticosteroids, such as prednisolone, which reduce airway inflammation, and antifungal medicines like itraconazole or voriconazole, which lower the fungal load in the lungs. In more severe or relapsing cases, biologic injections may also be used as part of the treatment plan."
    },
    {
        question: "What is the best treatment for aspergillosis?",
        answer: "There is no single best treatment, since Aspergillus-related lung conditions vary from person to person. For ABPA specifically, a combination of steroids and antifungal medicines usually works best, along with regular monitoring. Dr. Manish Aggarwal evaluates your test reports and symptoms to decide the most suitable treatment for your case."
    },
    {
        question: "How long is treatment for ABPA?",
        answer: "Treatment duration varies from patient to patient. In general, the initial phase with steroids may last around 3 to 6 months, and antifungal medicines are often continued for a similar duration. Some patients need longer-term or repeated courses if the condition relapses. Regular follow-up helps determine when it is safe to reduce or stop medicines."
    },
    {
        question: "Is ABPA the same as a lung infection?",
        answer: "No, ABPA is an allergic reaction to the Aspergillus fungus, not a spreading infection. The fungus triggers inflammation in the airways rather than actively infecting lung tissue the way bacteria or viruses do."
    },
    {
        question: "Can ABPA be cured completely?",
        answer: "ABPA cannot be permanently cured, but it can be managed very effectively. With consistent treatment and regular monitoring, most patients lead a completely normal life with well-controlled symptoms."
    },
    {
        question: "Does ABPA only affect people with asthma?",
        answer: "Most people who develop ABPA already have asthma or cystic fibrosis, but it can occasionally occur in people without a prior diagnosis of either condition, especially if their immune system reacts strongly to Aspergillus."
    },
    {
        question: "Can children get ABPA?",
        answer: "Yes, though it is more commonly seen in children and adults who have underlying asthma or cystic fibrosis. Symptoms and treatment principles are similar, but dosing and monitoring are adjusted for children."
    },
    {
        question: "What happens if ABPA is left untreated?",
        answer: "If untreated, ongoing inflammation can lead to permanent scarring of the airways, a condition called bronchiectasis, along with worsening lung function over time. This is why early diagnosis and treatment matter so much."
    },
    {
        question: "Should I see a pulmonologist for ABPA?",
        answer: "Yes, a pulmonologist can accurately diagnose ABPA and rule out other conditions like plain asthma or COPD. Getting the right diagnosis from an Allergic Bronchopulmonary Aspergillosis Specialist ensures your treatment actually addresses the root cause instead of just managing symptoms temporarily."
    }
];

export default function ABPAPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Is It Just Asthma? Could Be Allergic Bronchopulmonary Aspergillosis"
                description="Do you have a cough that won't go away, along with wheezing or breathlessness that your regular asthma inhaler isn't fixing? This could be Allergic Bronchopulmonary Aspergillosis, commonly known as ABPA, a condition where your lungs overreact to a common fungus. With the right treatment from an experienced Allergic Bronchopulmonary Aspergillosis Specialist, you can control the symptoms and protect your lungs from long-term damage."
                ctaText="Book an Appointment"
                backgroundImage="/services/allergic-bronchopulmonary-aspergillosis.jpg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS ABPA */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Breakdown
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Allergic Bronchopulmonary Aspergillosis (ABPA)?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Allergic Bronchopulmonary Aspergillosis happens when your immune system overreacts to a fungus called Aspergillus, found almost everywhere in soil, dust, and the air we breathe. Most healthy people breathe it in without any issue, but in some patients, especially those with asthma or cystic fibrosis, the immune system treats this fungus as a threat, triggering ongoing inflammation in the airways and lungs.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                This is not an infection in the usual sense, the fungus does not spread through the body; it simply triggers a strong allergic reaction inside the lungs. Without proper treatment from an Allergic Bronchopulmonary Aspergillosis Specialist, this ongoing inflammation can permanently scar the airways.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop"
                                alt="Fungal Hypersensitivity and Pulmonary Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div> */}
                    </div>
                </section>

                {/* SYMPTOMS OF ABPA */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Symptom Checklist
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Symptoms of Allergic Bronchopulmonary Aspergillosis
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        ABPA symptoms often overlap with poorly controlled asthma, which is why it can go undiagnosed for a while. Common signs include:
                    </p>

                    <div className="mt-8">
                        <ul className="list-disc list-inside space-y-3">
                            {[
                                "Persistent cough, sometimes with brown-coloured mucus plugs",
                                "Wheezing or breathlessness that doesn't improve with regular asthma inhalers",
                                "Chest tightness",
                                "Low-grade fever",
                                "Fatigue and general weakness",
                                "Worsening asthma control despite regular medication",
                            ].map((symptom, index) => (
                                <li
                                    key={index}
                                    className="text-sm sm:text-base font-semibold text-[#0f172a]"
                                >
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CAUSES OF ABPA */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Etiology & Etiological Factors
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Causes of Allergic Bronchopulmonary Aspergillosis
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        ABPA develops when the immune system overreacts to the Aspergillus fungus. Common risk factors include:
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Underlying Asthma", text: "Most ABPA patients already have asthma." },
                            { title: "Cystic Fibrosis", text: "Another major risk factor for developing ABPA." },
                            { title: "Environmental Exposure", text: "Aspergillus is common in soil, dust, and decaying matter, so frequent exposure increases risk." },
                            { title: "Hyper-Reactive Immunity", text: "Some patients have an immune system that reacts more strongly to the fungus than others." }
                        ].map((cause, index) => (
                            <div key={index} className="flex gap-4 items-start rounded-2xl bg-slate-50 border border-slate-200 p-5">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold mt-0.5">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">{cause.title}</h3>
                                    <p className="mt-1 text-xs sm:text-sm text-[#64748b] leading-relaxed">{cause.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY DIAGNOSTIC TESTS ARE IMPORTANT */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Protocols
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Why are Diagnostic Tests for Allergic Bronchopulmonary Aspergillosis important
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming that your symptoms are actually caused by ABPA, and not by asthma or a chest infection alone, is the first and most important step. A correct diagnosis avoids unnecessary treatment and ensures the right care plan from the start.
                    </p>

                    <p className="mt-4 text-sm sm:text-base font-semibold text-[#0f172a]">
                        Dr. Manish Aggarwal uses the following tests to accurately profile and monitor the condition:
                    </p>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { name: "IgE Blood Test", desc: "Quantifies specialized antibody volumes." },
                            { name: "Skin Prick Test", desc: "Checks for hypersensitivity to Aspergillus." },
                            { name: "X-Ray / CT Scan", desc: "Visualizes deep structural mucus plugs or shadows." },
                            { name: "Spirometry", desc: "Evaluates standard expiratory force metrics." },
                            { name: "PFT Suite", desc: "Comprehensive structural volumes assessment." },
                            { name: "FeNO", desc: "Measures underlying active eosinophilic inflammation." }
                        ].map((test, index) => (
                            <div key={index} className="rounded-xl border border-slate-200 bg-white p-4 text-center flex flex-col justify-center">
                                <div className="text-[10px] font-bold text-[#1fa8e8] uppercase mb-1">Step {index + 1}</div>
                                <h3 className="text-xs sm:text-sm font-bold text-[#0f172a]">{test.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ABPA TREATMENT */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Management Plan
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Allergic Bronchopulmonary Aspergillosis Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            ABPA is a complex condition where the body's immune system overreacts to a fungus commonly present in the air, leading to persistent inflammation and mucus buildup in the airways. Because the disease behaves differently from patient to patient, Dr. Manish Aggarwal designs each treatment plan around symptom severity and how well the body responds to initial therapy, adjusting the approach over time rather than following a fixed protocol.
                        </p>
                        <p>
                            Treatment typically works on two fronts at once, calming inflammation with steroids while tackling the underlying fungal trigger with antifungal medicines alongside supportive care like inhalers and physiotherapy to ease daily breathing. Since ABPA tends to relapse, this combined approach is designed for the long haul, not just short-term relief.
                        </p>
                    </div>

                    {/* CTA - INLINE CARD */}
                <div className="mt-6 flex justify-center">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                </section>

                {/* ABOUT THE DOCTOR */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Leadership
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                About Dr. Manish Aggarwal - Allergic Bronchopulmonary Aspergillosis Specialist in Delhi
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating lung and breathing-related conditions, including Allergic Bronchopulmonary Aspergillosis. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and symptoms, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - ABPA Pulmonary Care Specialist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FREQUENTLY ASKED QUESTIONS */}
                <FAQs faqs={faqs} />

                {/* FINAL CALL TO ACTION MAT */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Don't Let ABPA Hold You Back
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                                    Get an accurate diagnosis and a treatment plan built around you, from Dr. Manish Aggarwal, your trusted Allergic Bronchopulmonary Aspergillosis Specialist in Delhi.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book Your Appointment Today" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}