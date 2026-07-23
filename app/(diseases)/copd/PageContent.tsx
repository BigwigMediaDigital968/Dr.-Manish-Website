import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

// Metadata configuration exported for Next.js SEO optimization

const faqs = [
    {
        question: "What is the most effective treatment for COPD?",
        answer: "The most effective treatment usually combines quitting smoking, using inhalers as prescribed, staying active through pulmonary rehabilitation, and regular check-ups with a COPD specialist. Dr. Manish Aggarwal designs a combination plan based on each patient's stage and symptoms."
    },
    {
        question: "What is a normal oxygen level for a COPD patient?",
        answer: "A normal oxygen saturation level is usually between 95% and 100%. Some COPD patients may be considered stable at slightly lower levels, often around 88% to 92%, depending on their condition. Always discuss your specific target range with your pulmonologist."
    },
    {
        question: "How can I improve my COPD?",
        answer: "Quit smoking, take your medicines exactly as prescribed, stay physically active within your limits, avoid smoke and pollution, and attend regular follow-up visits so your treatment plan can be adjusted when needed."
    },
    {
        question: "Is COPD the same as asthma?",
        answer: "No. Both affect breathing, but they are different conditions and need different approaches to copd treatment or asthma treatment. Asthma often starts in childhood and symptoms can come and go, while copd usually develops later in life, mainly from long-term smoking or exposure to pollution, and tends to get worse gradually over time. Some people can have features of both, so a proper diagnosis by a COPD specialist is important."
    },
    {
        question: "Can COPD be cured completely?",
        answer: "COPD cannot be cured completely, since the damage already done to the lungs cannot be reversed. However, with the right COPD treatment plan, most patients are able to control their symptoms, avoid frequent flare-ups, and continue with their daily activities comfortably."
    },
    {
        question: "How often should I visit my COPD specialist for treatment?",
        answer: "This depends on how severe your condition is. Patients with mild COPD may need a check-up every six months, while those with moderate to severe COPD may need to visit every one to three months, or sooner if symptoms suddenly get worse. Dr. Manish Aggarwal will guide you on the right follow-up schedule based on your condition."
    },
    {
        question: "What should I do during a COPD flare-up?",
        answer: "A flare-up means your symptoms, such as breathlessness, coughing, or mucus, suddenly become worse than usual. This is often a sign that your COPD treatment plan needs to be reviewed. Use your prescribed inhaler as directed and rest in a comfortable position. If your breathing does not improve, your lips or fingertips turn bluish, or you feel confused or extremely breathless, seek medical help immediately rather than waiting it out at home."
    }
];

export default function COPDPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="COPD: Symptoms, Treatment & Specialist Care in Delhi"
                description="Do you feel breathless while climbing stairs or coughing more than usual? This could be COPD (Chronic Obstructive Pulmonary Disease), a lung condition that makes breathing difficult. With the right COPD treatment from an experienced COPD specialist in Delhi, most patients manage it well and live active lives."
                ctaText="Book an Appointment"
                backgroundImage="https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?q=80&w=1331&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS COPD */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Profile
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What is COPD?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                COPD, short for Chronic Obstructive Pulmonary Disease, is a lung condition where the airways become narrow and swollen, making it hard for air to move in and out. It usually develops slowly over the years, often from long-term smoking or exposure to pollution and dust.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                COPD cannot be fully cured, but the right treatment plan from a qualified COPD specialist can control symptoms and slow down further lung damage.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1626697556342-2310dbc55428?q=80&w=1170&auto=format&fit=crop"
                                alt="Understanding Chronic Obstructive Pulmonary Disease (COPD)"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div> */}
                    </div>
                </section>

                {/* SYMPTOMS OF COPD */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Signs
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Symptoms of COPD
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        COPD symptoms usually develop gradually and often get mistaken for normal ageing or a lingering cold. Common signs include:
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Shortness of breath, especially during physical activity",
                            "A persistent cough, often called a smoker's cough",
                            "Regular mucus (phlegm) production",
                            "Wheezing or a whistling sound while breathing",
                            "Tightness in the chest",
                            "Frequent chest infections",
                            "Low energy and tiredness",
                            "Unintended weight loss in advanced stages"
                        ].map((symptom, index) => (
                            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-md">
                                <h3 className="text-sm sm:text-base font-semibold text-[#0f172a]">
                                    {symptom}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-[#64748b] bg-slate-50 border border-slate-200 rounded-xl p-4 italic">
                        If these symptoms sound familiar, it's best to consult a COPD specialist early, since timely diagnosis makes treatment far more effective.
                    </p>
                </section>

                {/* CAUSES OF COPD */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Risk Factors & Etiology
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Causes of COPD
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        COPD develops when the airways and air sacs in the lungs become damaged or inflamed over time. Common causes include:
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Smoking", text: "The primary and leading cause of COPD worldwide." },
                            { title: "Air Pollution", text: "Long-term exposure to toxic outdoor pollution or heavy vehicle exhaust." },
                            { title: "Occupational Exposure", text: "Chronic contact with industrial workplace dust, chemicals, and irritating fumes." },
                            { title: "Indoor Air Pollution", text: "Inhaling lingering smoke from biomass cooking fuels and stoves." },
                            { title: "Genetic Factors", text: "Alpha-1 Antitrypsin deficiency can cause severe COPD even in non-smokers." },
                            { title: "Childhood Infections", text: "Frequent respiratory infections early in life can affect normal lung development." }
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

                {/* WHY EARLY DIAGNOSIS MATTERS */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Diagnostic Pathways
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Why Early Diagnosis Matters
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Accurate diagnosis is the first step to effective COPD treatment. Catching COPD early makes a real difference; it allows treatment to start before the lungs suffer further damage, helps prevent flare-ups, and gives patients a better chance at maintaining their day-to-day activity levels.
                    </p>

                    <p className="mt-4 text-sm sm:text-base font-semibold text-[#0f172a]">
                        Dr. Manish Aggarwal uses the following lung function tests to confirm COPD, assess its severity, and track progress over time:
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { name: "Spirometry", link: "#" },
                            { name: "Pulmonary Function Test (PFT)", link: "#" },
                            { name: "DLCO", },
                            { name: "ABG Analysis", },
                            { name: "6 Minute Walk Test", link: "#" }
                        ].map((test, index) => (

                            test.link ? (
                                <Link href={test.link} key={index} className="rounded-xl border hover:border-[#1fa8e8] border-slate-200 bg-white p-4 text-center">
                                    <div className="text-xs font-bold text-[#1fa8e8] uppercase mb-1">Test {index + 1}</div>
                                    <h3 className="text-sm sm:text-base font-bold text-[#0f172a] hover:text-[#1fa8e8]">{test.name}</h3>
                                </Link>
                            ) : (
                                <>
                                    <div key={index} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                                        <div className="text-xs font-bold text-[#1fa8e8] uppercase mb-1">Test {index + 1}</div>
                                        <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">{test.name}</h3>
                                    </div>
                                </>
                            )
                        ))}
                    </div>
                </section>

                {/* COPD TREATMENT */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Therapeutic Options
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        COPD Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            While COPD can't be cured, a well-structured treatment plan can significantly slow its progression and help patients breathe easier. Dr. Manish Aggarwal tailors care to each patient's stage of COPD and how it affects their daily life, combining the right mix of medications, oxygen support, rehabilitation, and lifestyle adjustments.
                        </p>
                        <p>
                            From inhalers that ease breathlessness to pulmonary rehab that rebuilds stamina and confidence, the goal is always to help patients stay active, reduce flare-ups, and maintain the best possible quality of life. In advanced cases where these measures aren't enough, surgical options are carefully considered and discussed in detail with the patient.
                        </p>
                    </div>

                    {/* CTA - INLINE CARD 1 */}
                    <div className="mt-10 flex flex-col items-center text-center max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Ready to Start Your COPD Treatment Plan?
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                            Every patient's lungs are different, and so should be their treatment. Get a personalised COPD treatment plan designed by Dr. Manish Aggarwal, your trusted COPD Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Consult Dr. Manish Aggarwal Now" />
                        </div>
                    </div>
                </section>

                {/* MEET THE SPECIALIST */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Expert Profile
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Your COPD Specialist in Delhi - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a qualified and experienced pulmonologist and COPD Specialist who has helped many patients manage COPD and other lung conditions successfully. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He explains every condition and treatment in simple language, so patients and their families always understand what is happening and why, backed by the latest medical guidelines and a caring, patient-first attitude.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1170&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Pulmonologist and COPD Specialist"
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
                                    Take the First Step Towards Easier Breathing
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                                    Don't let COPD control your life. The right treatment can help you breathe easier. Book your appointment with Dr. Manish Aggarwal, your trusted COPD specialist in Delhi, today.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book Your Appointment" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}