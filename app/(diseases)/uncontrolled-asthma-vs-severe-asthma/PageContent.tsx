import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

// Metadata configuration exported for Next.js SEO optimization
export const metadata = {
    title: "Is Your Asthma Uncontrolled or Severe? Dr. Manish Aggarwal",
    description: "Inhaler not working? Learn the difference between uncontrolled and severe asthma, and get an accurate diagnosis from Dr. Manish Aggarwal in Delhi.",
    keywords: ["Uncontrolled Asthma vs Severe Asthma", "uncontrolled asthma", "severe asthma", "difference between uncontrolled and severe asthma", "asthma specialist Delhi", "severe asthma treatment Delhi", "asthma pulmonologist"]
};

const faqs = [
    {
        question: "How do I know if my asthma is uncontrolled or severe?",
        answer: "If your symptoms improve once your inhaler technique is corrected or triggers are avoided, it's likely uncontrolled asthma. If symptoms persist despite doing everything correctly, it may be severe asthma. A pulmonologist can confirm this through proper evaluation and testing."
    },
    {
        question: "Can uncontrolled asthma turn into severe asthma?",
        answer: "Uncontrolled asthma itself doesn't turn into severe asthma, but if the underlying reasons for poor control are ignored for a long time, it can lead to worsening symptoms and more frequent flare-ups that resemble severe asthma."
    },
    {
        question: "What is the main treatment for severe asthma?",
        answer: "Severe asthma is often treated with biologic therapy, which targets specific pathways causing airway inflammation, along with optimised inhaler therapy and management of any coexisting conditions."
    },
    {
        question: "Is severe asthma more common than uncontrolled asthma?",
        answer: "No, uncontrolled asthma is far more common. Most patients who feel their asthma is \"not working\" actually have fixable issues like inhaler technique or trigger exposure rather than true severe asthma."
    },
    {
        question: "Can severe asthma be managed effectively?",
        answer: "Yes. While severe asthma cannot be cured, most patients achieve good control with the right combination of treatments, including biologics, and regular monitoring by a pulmonologist."
    },
    {
        question: "Should I see a specialist if my inhaler isn't working?",
        answer: "Yes. If your symptoms aren't improving despite using your inhaler, it's important to see a pulmonologist to determine whether the issue is technique, triggers, medication dose, or true severe asthma requiring advanced treatment."
    }
];

export default function AsthmaComparisonPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero 
                title="Uncontrolled Asthma vs Severe Asthma: What's Really Going On?" 
                description="Are your asthma symptoms not improving even with regular medication? You may be dealing with uncontrolled asthma or severe asthma, two terms that are often confused but mean very different things. Understanding which one you have is the first step towards the right treatment."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* CLINICAL OVERVIEWS */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Classifications
                    </span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-4">
                                What Is Uncontrolled Asthma?
                            </h2>
                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Uncontrolled asthma means your symptoms, such as wheezing, coughing, or breathlessness, are not being managed well, even though your asthma itself may not be severe. This usually happens due to incorrect inhaler technique, missed doses, exposure to triggers, or an inhaler that isn't strong enough for your current symptoms. The good news is that uncontrolled asthma can often be brought back under control once the underlying reason is identified and corrected.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-4">
                                What Is Severe Asthma?
                            </h2>
                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Severe asthma is a specific type of asthma that stays difficult to control even when the patient is using high-dose inhalers correctly and following the treatment plan exactly as prescribed. Unlike uncontrolled asthma, severe asthma often needs additional treatments beyond standard inhalers, such as biologic therapy, to bring symptoms under control.
                            </p>
                        </div>
                    </div>
                </section>

                {/* KEY DIFFERENCES SIDE-BY-SIDE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Comparative Analysis
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-6">
                        Key Differences Between Uncontrolled Asthma vs Severe Asthma
                    </h2>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left border-collapse bg-white text-sm sm:text-base">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="p-4 font-bold text-[#0f172a] w-[25%]">Factor</th>
                                    <th className="p-4 font-bold text-[#0f172a] w-[37.5%]">Uncontrolled Asthma</th>
                                    <th className="p-4 font-bold text-[#0f172a] w-[37.5%]">Severe Asthma</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-[#64748b] text-xs sm:text-sm">
                                <tr>
                                    <td className="p-4 font-semibold text-[#0f172a] bg-slate-50/50">Cause of poor control</td>
                                    <td className="p-4">Fixable factors like inhaler technique or missed doses</td>
                                    <td className="p-4">Stays poorly controlled despite correct treatment</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#0f172a] bg-slate-50/50">Response to standard treatment</td>
                                    <td className="p-4">Often improves once the issue is corrected</td>
                                    <td className="p-4">Does not respond well even to high-dose standard medication</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#0f172a] bg-slate-50/50">Next steps</td>
                                    <td className="p-4">Technique correction, trigger avoidance, or dose adjustment</td>
                                    <td className="p-4">Specialised tests and advanced treatments like biologics</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#0f172a] bg-slate-50/50">Diagnosis</td>
                                    <td className="p-4">Identified by checking technique, adherence, and triggers</td>
                                    <td className="p-4">Confirmed only after ruling out all fixable causes of uncontrolled asthma</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SYMPTOMS & PATHOLOGY COLUMNS */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">
                    
                    {/* SYMPTOMS TO WATCH FOR */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Symptom Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms to Watch For Uncontrolled Asthma vs Severe Asthma
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Uncontrolled Asthma and Severe Asthma conditions can present with similar day-to-day symptoms, which is why a proper evaluation matters:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Frequent wheezing or a whistling sound while breathing",
                                "Persistent cough, especially at night or early morning",
                                "Shortness of breath during daily activities",
                                "Chest tightness",
                                "Frequent use of a reliever/rescue inhaler",
                                "Asthma attacks or flare-ups despite being on regular medication"
                            ].map((symptom, i) => (
                                <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COMMON CAUSES */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Contributors
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Common Causes and Contributing Factors
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Different factors can push asthma toward being uncontrolled or push it into the severe category:
                        </p>

                        <div className="mt-6 space-y-4">
                            {[
                                { title: "Poor Inhaler Technique", desc: "A leading cause of uncontrolled asthma." },
                                { title: "Missed or Irregular Medication", desc: " Skipping doses reduces long-term control." },
                                { title: "Ongoing Exposure to Triggers", desc: "Dust, pollen, smoke, or pollution." },
                                { title: "Undiagnosed Coexisting Conditions", desc: "Such as allergic rhinitis or GERD, which can worsen asthma control." },
                                { title: "Underlying Airway Inflammation Type", desc: "Certain patients have an inflammation pattern that doesn't respond well to standard inhalers, a hallmark of severe asthma." }
                            ].map((item, index) => (
                                <div key={index} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <h3 className="text-sm font-bold text-[#0f172a]">{item.title}</h3>
                                    <p className="mt-0.5 text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIAGNOSTIC SUITE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Pulmonary Screening
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Uncontrolled Asthma vs Severe Asthma
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Before deciding whether you have Uncontrolled Asthma vs Severe Asthma, Dr. Manish Aggarwal reviews your inhaler technique, medication history, and trigger exposure, along with the following tests:
                    </p>

                    <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Spirometry", use: "Measures lung capacities and structural airway obstruction speeds." },
                            { name: "PFT (Pulmonary Function Test)", desc: "Comprehensive evaluation of global pulmonary volumes and diffusion." },
                            { name: "FeNO Testing", use: "Measures exhaled nitric oxide to gauge allergic eosinophilic inflammation." },
                            { name: "6 Minute Walk Test", use: "Evaluates operational oxygen saturation and functional exercise tolerance." }
                        ].map((test, idx) => (
                            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 text-center flex flex-col justify-center">
                                <p className="text-sm sm:text-base font-medium text-[#0f172a]">{test.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TREATMENT ROADMAP */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Management
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Treatment Approach for Uncontrolled Asthma vs Severe Asthma
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Not every case of "uncontrolled asthma" is actually severe asthma; often, symptoms persist simply because of inhaler technique, unaddressed triggers, or overlooked conditions like allergies or acid reflux. Dr. Manish Aggarwal's approach starts by separating these fixable factors from true severe asthma before deciding on next steps, since jumping straight to stronger treatment can mean over-medicating a problem that a simple correction could have solved.
                        </p>
                        <p>
                            Once the real cause of poor control is identified, the plan is adjusted accordingly, ranging from basic corrections to targeted biologic therapy for confirmed severe cases, with regular monitoring to keep the Uncontrolled Asthma vs Severe Asthma treatment aligned with how the condition evolves.
                        </p>
                    </div>

                    {/* INTERMEDIARY CTA */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Not Sure Which One You Have?
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] leading-relaxed max-w-xl">
                            Uncontrolled Asthma vs Severe Asthma need very different approaches. Get an accurate evaluation from Dr. Manish Aggarwal.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* ABOUT THE PULMONOLOGIST */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Expert Profile
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Your Uncontrolled & Severe Asthma Specialist – Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating asthma, including complex and severe cases. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>
                            
                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific triggers, test results, and response to medication, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Asthma & Pulmonary Expert"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ ACCORDION SUITE */}
                <FAQs faqs={faqs} />

                {/* CLOSING CONVERSION MAT */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Get the Right Diagnosis, Not Just a Stronger Inhaler
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Book a consultation with Dr. Manish Aggarwal to find out exactly what's keeping your asthma from being controlled.
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