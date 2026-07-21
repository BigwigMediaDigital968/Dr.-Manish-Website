import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
    {
        question: "What is considered a prolonged fever?",
        answer: "A fever that lasts more than 7 days, or one that keeps returning after appearing to settle, is generally considered a prolonged fever."
    },
    {
        question: "What are the most common reasons for prolonged fever?",
        answer: "The most common reasons for prolonged fever include infections like tuberculosis, pneumonia, typhoid, and urinary tract infections, along with autoimmune conditions and, occasionally, hidden infections that are not immediately obvious."
    },
    {
        question: "Can prolonged fever be linked to lung problems?",
        answer: "Yes. Many causes for prolonged fever are connected to the chest and lungs, especially when the fever comes with cough, chest pain, or breathlessness. This is why a pulmonologist is often involved in diagnosis."
    },
    {
        question: "Is chest pain with fever always serious?",
        answer: "Not always, but chest pain with fever should never be ignored. It can be a sign of a lung infection and should be evaluated by a doctor, especially if the pain worsens with breathing or coughing."
    },
    {
        question: "What tests are usually done to find the cause of prolonged fever?",
        answer: "Doctors typically start with blood tests, a chest X-ray, and urine tests. Depending on the findings, further tests such as a CT scan, sputum test, or specific blood cultures may be recommended to pinpoint the exact causes for prolonged fever."
    },
    {
        question: "When should I stop waiting and see a pulmonologist?",
        answer: "If your fever has lasted more than a week, is accompanied by chest symptoms, or is not responding to basic medication, it is time to consult a specialist rather than waiting further."
    },
    {
        question: "Can prolonged fever go away on its own?",
        answer: "Some mild viral fevers do resolve on their own, but a fever lasting beyond 7 days should always be evaluated, since some of the causes for prolonged fever require specific treatment to fully resolve."
    }
];

export default function ProlongedFeverPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Prolonged Fever: Reasons, Causes and When to See a Pulmonologist"
                description="If your fever has lasted more than a few days, you are probably searching for answers. This page explains the common reasons for prolonged fever, the causes for prolonged fever that doctors look for, and the warning signs that mean it is time to book an appointment. The language here is kept simple on purpose, so that you do not need a medical dictionary to understand what your body might be telling you."
                ctaText="Book a Consultation"
                backgroundImage="https://images.unsplash.com/photo-1674049406329-fe7b19a0dc24?q=80&w=2070&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT COUNTS AS A PROLONGED FEVER */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Counts as a Prolonged Fever?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                A normal fever usually settles within 3 to 5 days. When a fever continues for more than 7 days, or keeps coming back after seeming to go away, doctors call it a prolonged fever. Some cases are labelled "fever of unknown origin" when the reasons for prolonged fever are not obvious even after basic tests.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                A short fever is often just your body fighting a common cold or flu. A long-lasting fever is different. It usually means something deeper is going on inside the body, and it needs proper attention from a specialist.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1587314212532-3afd86d69736?q=80&w=1170&auto=format&fit=crop"
                                alt="Understanding Prolonged Fever Diagnostic Evaluation"
                                className="w-full h-[280px] sm:h-[350px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* CTA - INLINE CARD 1 */}

                <div className="mt-12 max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                        {/* Left Column */}
                        <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                Not Sure Why Your Fever Won't Go Away?
                            </h3>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Get a proper diagnosis from an experienced pulmonologist instead of
                                guessing at home.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex justify-center md:justify-end">
                            <BookAppointmentButton cta="Book an Appointment with Dr. Manish Aggarwal" />
                        </div>

                    </div>
                </div>

                {/* COMMON SYMPTOMS THAT COME WITH PROLONGED FEVER */}
                <section className="pt-16 sm:pt-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Associated Symptoms
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Common Symptoms That Come With Prolonged Fever
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Fever rarely comes alone. Paying attention to the symptoms that appear along with it can help your doctor find the causes for prolonged fever much faster. Here are symptoms patients commonly report, and what they might point to.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Chest Pain */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">
                                        1. Chest Pain with Fever
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Chest pain along with a long fever can be a sign of a lung infection such as pneumonia, tuberculosis, or inflammation of the lining around the lungs (called pleurisy). If the pain gets worse when you breathe deeply or cough, do not ignore it. This combination is one of the more serious reasons for prolonged fever and often needs a chest X-ray or scan to confirm what is happening.
                                    </p>
                                </div>
                            </div>

                            {/* Persistent Cough */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">
                                        2. Persistent Cough with Fever
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        A cough that lasts more than two weeks, especially with fever in the evening or at night, can point towards tuberculosis or a chronic chest infection. If you are also losing weight without trying, this combination should be checked without delay.
                                    </p>
                                </div>
                            </div>

                            {/* Breathlessness */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">
                                        3. Breathlessness or Difficulty Breathing
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Feeling short of breath while doing normal daily activities, along with fever, may suggest that the lungs are inflamed or infected. This can range from a mild chest infection to more serious lung conditions.
                                    </p>
                                </div>
                            </div>

                            {/* Night Sweats */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">
                                        4. Night Sweats and Weight Loss
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Waking up drenched in sweat, combined with a fever that will not go, is a pattern doctors take seriously. Along with unexplained weight loss, it is one of the classic causes for prolonged fever linked to infections like tuberculosis or, less commonly, certain blood disorders.
                                    </p>
                                </div>
                            </div>

                            {/* Joint Pain */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">
                                        5. Joint Pain or Body Ache
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Fever with pain in multiple joints can be caused by viral infections, but if it continues for weeks, it may point towards an autoimmune condition where the body's own defense system is overactive.
                                    </p>
                                </div>
                            </div>

                            {/* Fatigue */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">
                                        6. Fatigue That Doesn't Improve with Rest
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Ongoing tiredness alongside fever, even after adequate sleep, often signals that the body is using a lot of energy to fight something internally, such as a hidden infection or inflammation.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* CTA - INLINE CARD 2 */}
                        <div className="mt-12 max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                                {/* Left Column */}
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                        Have One or More of These Symptoms?
                                    </h3>
                                    <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                        Early diagnosis makes treatment easier and faster. Do not wait for the fever to "just go away" on its own.
                                    </p>
                                </div>

                                {/* Right Column */}
                                <div className="flex justify-center md:justify-end">
                                    <BookAppointmentButton cta="Schedule a Consultation Today" />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* REASONS FOR PROLONGED FEVER: ETIOLOGY */}
                <section className="pt-16 sm:pt-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Potential Causes
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Reasons for Prolonged Fever: What Could Be Causing It
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There are many possible reasons for prolonged fever, and they are not always related to a serious illness. Still, because a long fever can sometimes point to something that needs treatment, it is important to understand the range of causes for prolonged fever that doctors usually check for.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Pleural Effusion / Pleurisy */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                        Pleural Effusion/Pleurisy (fluid outside Lungs) with Fever
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Chest pain along with a long fever can be a sign of a lung infection such as Bacterial Pneumonia, Tubercular Pneumonia (TB), or inflammation of the lining around the lungs (called pleurisy). If the pain gets worse when you breathe deeply or cough, do not ignore it. This combination is one of the more serious reasons for prolonged fever and often needs a chest X-ray or scan to confirm what is happening.
                                    </p>
                                </div>
                            </div>

                            {/* Tubercular Pneumonia (TB) - Cough */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                        Tubercular Pneumonia (TB) with Persistent Cough and Fever
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        A cough that lasts more than two weeks, especially with fever in the evening or at night, can point towards tuberculosis or a chronic chest infection. If you are also losing weight without trying, this combination should be checked without delay.
                                    </p>
                                </div>
                            </div>

                            {/* Viral Pneumonia */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                        Viral Pneumonia (Flu, Influenza, H1N1, COVID-19) with Breathlessness
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Feeling short of breath while doing normal daily activities, along with fever, may suggest that a viral infection has inflamed the lungs. This is common with the flu, influenza, H1N1, or COVID-19, and usually improves with rest, fluids, and time as the body fights off the virus.
                                    </p>
                                </div>
                            </div>

                            {/* Bacterial Pneumonia */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg md:col-span-1 lg:col-span-1">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                        Bacterial Pneumonia with Breathlessness
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        When breathlessness with fever does not improve or gets worse, it may point towards a bacterial infection in the lungs. This is a more serious cause of prolonged fever and breathlessness, often needing antibiotics and prompt medical evaluation.
                                    </p>
                                </div>
                            </div>

                            {/* Tubercular Pneumonia (TB) - Night Sweats */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg md:col-span-2 lg:col-span-2">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                        Tubercular Pneumonia (TB) with Night Sweats and Weight Loss
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                                        Waking up drenched in sweat, combined with a fever that will not go, is a pattern doctors take seriously. Along with unexplained weight loss, it is one of the classic causes for prolonged fever linked to infections like tuberculosis or, less commonly, certain blood disorders.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* THE ROLE OF CHEST AND LUNGS */}
                <section className="pt-16 sm:pt-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Pulmonary Expertise
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Why the Chest and Lungs Matter So Much in Prolonged Fever
                        </h2>

                        <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                            <p>
                                Many patients are surprised to learn that a large share of the causes for prolonged fever trace back to the chest and lungs. This is because the lungs are constantly exposed to air, dust, and germs, making them one of the more common sites for infection. When fever is paired with chest pain, cough, or breathlessness, seeing a pulmonologist early can help identify tuberculosis, pneumonia, or other chest infections before they get worse.
                            </p>
                            <p>
                                Dr. Manish Aggarwal has years of hands-on clinical experience diagnosing and treating patients with unexplained and prolonged fever linked to chest and lung conditions. His approach focuses on identifying the exact reasons for prolonged fever through proper examination and evidence-based testing, rather than guesswork.
                            </p>
                        </div>

                        {/* CTA - INLINE CARD 3 */}
                         <div className="mt-12 max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                                {/* Left Column */}
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                Get to the Root Cause, Not Just Temporary Relief
                                    </h3>
                                    <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal helps patients find the real reasons for prolonged fever so treatment actually works.
                                    </p>
                                </div>

                                {/* Right Column */}
                                <div className="flex justify-center md:justify-end">
                                    <BookAppointmentButton cta="Talk to a Pulmonologist" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* WHEN TO SEEK HELP & PHYSICIAN INFO */}
                <section className="pt-16 sm:pt-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Patient Safety
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Know When to Seek Help, and the Expert Who Can Guide You
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal is a practicing pulmonologist with extensive experience in diagnosing and treating chest and lung conditions, including cases of prolonged and unexplained fever. His clinical approach combines careful history-taking, physical examination, and the right diagnostic tests to find answers quickly, so patients are not left guessing about their health. He believes in explaining medical conditions in plain language so patients fully understand what is happening in their body and why a particular treatment is recommended.
                        </p>

                        <p className="mt-6 text-sm sm:text-base font-semibold text-[#0f172a]">
                            You should not wait to consult a doctor if you notice any of the following:
                        </p>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Fever lasting more than 7 days",
                                "Fever above 103°F (39.4°C) at any point",
                                "Chest pain, cough, or breathlessness along with fever",
                                "Unexplained weight loss",
                                "Night sweats",
                                "Fever that keeps returning after seeming to improve",
                                "Fever in a child, elderly person, or someone with an existing health condition"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold mt-0.5">
                                        ✓
                                    </span>
                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-6 border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                            <p className="text-xs sm:text-sm text-[#475569] italic leading-relaxed">
                                Trying to manage a long fever with home remedies or over-the-counter medicine alone can delay diagnosis of the actual causes for prolonged fever, some of which need timely treatment to avoid complications.
                            </p>
                        </blockquote>
                    </div>
                </section>

                {/* FREQUENTLY ASKED QUESTIONS */}
                <FAQs faqs={faqs} />

                {/* FINAL CTA MAT */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Don't Let an Unexplained Fever Continue
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                                    Book your consultation with Dr. Manish Aggarwal and get clarity on what your body is trying to tell you.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book Your Appointment Now" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}