import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
    {
        question: "What is the main cause of sputum?",
        answer:
            "The main cause of sputum is usually a respiratory infection, such as a cold, flu, bronchitis, or sinusitis. These conditions irritate the airways and cause the body to produce extra mucus, which comes up as sputum when you cough. Other causes of sputum include asthma, smoking, allergies, and acid reflux.",
    },
    {
        question: "Is it normal to produce sputum?",
        answer:
            "Yes, producing a small amount of sputum from time to time is normal, especially during a mild cold or seasonal allergies. Your airways naturally produce mucus to trap dust and germs. However, if sputum in throat continues for more than two to three weeks, contains blood, or comes with fever and breathing difficulty, it is best to consult a pulmonologist.",
    },
    {
        question: "When should I see a pulmonologist for sputum?",
        answer:
            "You should see a pulmonologist if your cough with sputum lasts longer than three weeks, if the sputum is discolored, blood-tinged, or foul-smelling, or if you experience chest pain, fever, or shortness of breath along with it.",
    },
    {
        question: "Can sputum in throat be treated without medicine?",
        answer:
            "Mild sputum caused by a cold or allergies often improves with rest, warm fluids, and steam inhalation. However, if the cause of sputum is an infection or a chronic lung condition, medical treatment is usually needed for full recovery.",
    },
];

export default function PageContent() {
    return (
        <>
            <ServiceHero 
                title="Causes of Sputum: What Sputum in Throat Really Means" 
                description="If you have noticed sputum in your throat when you cough, you are not alone. Sputum is something almost everyone deals with at some point, but understanding the causes of sputum can help you know when it is nothing to worry about and when it is time to see a doctor. Dr. Manish Aggarwal, a pulmonologist with 24+ years of experience treating lung and respiratory conditions, explains the common causes of sputum in simple terms below."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/11899610/pexels-photo-11899610.jpeg"
            />
            
            <div className="max-w-7xl mx-auto px-4">
                {/* WHAT IS SPUTUM */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Airway Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Is Sputum?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Sputum is the thick mucus that comes up from your lungs and airways when you cough. It is different from regular saliva or the mucus in your nose. Sputum usually forms when your airways are irritated, infected, or inflamed.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Many people first notice sputum in throat as an itchy or heavy feeling before coughing, followed by mucus being coughed up. This is often your body's natural way of clearing out germs, dust, or irritants from your lungs.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1626697556342-2310dbc55428?q=80&w=1170&auto=format&fit=crop"
                                alt="Understanding Sputum Causes"
                                className="w-full h-[300px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* COUGH AS FIRST SYMPTOM */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Primary Indicators
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Cough Is Usually the First Symptom
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Cough is often the first sign that something in your airways needs attention. When cough is followed by mucus, it usually points to one of the underlying causes of sputum listed below. Pay attention to these details when you cough, since they help a doctor understand what is happening inside your lungs:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "How often you are coughing",
                                "Whether the cough is dry or brings up mucus",
                                "The color and thickness of the sputum",
                                "Whether you have other symptoms like fever, chest pain, or shortness of breath",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-5">
                            <p className="text-sm sm:text-base text-[#475569] font-medium">
                                Not sure what your cough means? Talk to Dr. Manish Aggarwal today.
                            </p>
                            <BookAppointmentButton cta="Consult Doctor" />
                        </div>
                    </div>
                </section>

                {/* COMMON CAUSES OF SPUTUM */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Diagnostic Breakdown
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Causes of Sputum
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There are many possible causes of sputum, ranging from mild and temporary to conditions that need medical care. Understanding which one matches your symptoms can help you decide whether to wait it out at home or see a doctor. Here are the most common ones:
                        </p>

                        <div className="mt-10 space-y-8">
                            {/* Viral Pneumonia */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Viral Pneumonia (Flu, Influenza, H1N1, COVID-19)
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    A viral infection is one of the most frequent causes of sputum. It usually brings clear or white mucus along with a mild cough, sore throat, and tiredness. In most cases, this type of sputum clears up on its own within a week to ten days as your body fights off the virus. Drinking warm fluids and getting enough rest usually helps speed up recovery.
                                </p>
                            </div>

                            {/* Bronchitis */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Bronchitis
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Bronchitis happens when the airways in your lungs get inflamed, often after a cold. It usually causes yellow or greenish sputum along with a persistent cough that can last two to three weeks. Acute bronchitis is usually caused by a virus and improves on its own, but chronic bronchitis, which lasts for months, is often linked to smoking and needs proper medical management.
                                </p>
                            </div>

                            {/* Bacterial Pneumonia */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Bacterial Pneumonia
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Bacterial Pneumonia is a lung infection that can cause thick, colored sputum, high fever, chills, and difficulty breathing. This condition needs prompt medical attention. Sputum is often yellow, green, or rust colored, and it may come with sharp chest pain that gets worse when you breathe deeply or cough. Pneumonia can affect one or both lungs and is more serious in young children, older adults, and people with weak immunity.
                                </p>
                            </div>

                            {/* Asthma */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Asthma (Allergic Bronchitis)
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    People with asthma sometimes produce extra mucus, especially during flare-ups. This can lead to a cough with sputum, tightness in the chest, and wheezing. The sputum in asthma is usually thick and clear or white, and it tends to worsen with exposure to triggers like cold air, dust, smoke, or exercise. Managing asthma well with the right medication can reduce how often this happens.
                                </p>
                            </div>

                            {/* Tobacco Addiction */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Tobacco Addiction
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Smoking irritates the airways and is a well-known cause of sputum, especially in the morning. Long-term smoking can also lead to more serious lung conditions. This is often called smoker's cough, and the sputum may appear white, yellow, or brown depending on how long a person has smoked. Quitting smoking, even after many years, can significantly reduce mucus production and improve lung health over time.
                                </p>
                            </div>

                            {/* COPD */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    COPD (Chronic Obstructive Pulmonary Disease)
                                </h3>
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    COPD is a long-term lung condition, common in smokers, that often causes a daily cough with sputum, breathlessness, and fatigue. The sputum in COPD is usually thick and can be white, yellow, or green, and it tends to be worse in the mornings. Since COPD is a progressive condition, early diagnosis and the right treatment plan from a pulmonologist can help slow it down and improve day-to-day breathing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLOR INDICATORS */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Visual Identifiers
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            What Does the Color of Sputum Mean?
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            The color of your sputum can give helpful clues about the cause of the sputum you are experiencing:
                        </p>

                        <div className="mt-6 space-y-3">
                            {[
                                { color: "Clear or white", detail: "Often a viral infection or allergies" },
                                { color: "Yellow or green", detail: "Usually a sign of infection, such as bronchitis or sinusitis" },
                                { color: "Brown", detail: "May indicate old blood or long-term smoking" },
                                { color: "Pink or red", detail: "Could mean bleeding in the airways or lungs and needs immediate medical attention" },
                                { color: "Frothy white or pink", detail: "May be linked to heart or lung conditions and should be checked promptly" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-slate-100 pb-3 text-sm sm:text-base">
                                    <span className="font-semibold text-[#0f172a] sm:w-48 shrink-0">{item.color}:</span>
                                    <span className="text-[#64748b]">{item.detail}</span>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-6 border-l-4 border-[#1fa8e8] bg-slate-50 p-4 rounded-r-xl">
                            <p className="text-xs sm:text-sm text-[#475569] italic">
                                This is general guidance only. A proper diagnosis requires an examination by a qualified pulmonologist like Dr. Manish Aggarwal.
                            </p>
                        </blockquote>
                    </div>
                </section>

                {/* CRITICAL SIGNS */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Severity Assessment
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Is Sputum in Throat Always a Cause for Concern?
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Not always. A small amount of sputum in throat, especially in the morning or during a mild cold, is usually normal and goes away on its own within a few days. However, you should see a doctor if you notice:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {[
                                "Sputum that lasts more than two to three weeks",
                                "Blood in the sputum",
                                "Sputum with a strong, unpleasant smell",
                                "Fever along with a cough and sputum",
                                "Difficulty breathing or chest pain",
                                "Unexplained weight loss along with a persistent cough",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 font-bold text-xs mt-0.5">
                                        !
                                    </div>
                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today" />
                        </div>
                    </div>
                </section>

                {/* HOW DR. MANISH HELPS */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Care
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            How Dr. Manish Aggarwal Can Help
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal is an experienced pulmonologist who specializes in diagnosing and treating conditions related to the lungs and airways. With years of clinical experience, he has helped countless patients identify the exact cause of sputum they are experiencing and find the right treatment. During your consultation, Dr. Aggarwal may recommend:
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
                            {[
                                "A physical examination and detailed symptom history",
                                "Chest X-ray or CT scan if needed",
                                "Sputum culture test to check for infection",
                                "Lung function tests for conditions like asthma or COPD",
                                "A customised treatment plan based on your diagnosis",
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col gap-3 rounded-xl bg-slate-50 border border-slate-200 p-5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INTERVENTIONAL CTA */}
                <div className="mx-auto py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-10 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Don't Ignore Persistent Cough or Sputum
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                                    If you have been dealing with ongoing sputum in throat or a cough that will not go away, it is worth getting it checked. Early diagnosis facilitates early treatment.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Schedule Your Appointment"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ SECTION */}
                <FAQs faqs={faqs} />
            </div>
        </>
    );
}