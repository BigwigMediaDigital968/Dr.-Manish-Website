import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
    {
        question: "What is the main reason for breathlessness?",
        answer: "There is no single reason for breathlessness. The most common causes include asthma, COPD, chest infections, heart problems, anemia, anxiety, and low fitness levels. A doctor needs to examine you to find the exact cause in your case."
    },
    {
        question: "What are the most common shortness of breath causes in young, otherwise healthy people?",
        answer: "In younger people, common shortness of breath causes include asthma, allergies, low fitness, anxiety, and mild anemia. These are usually manageable once identified correctly."
    },
    {
        question: "Is shortness of breath always a sign of a serious lung disease?",
        answer: "No. While some shortness of breath causes are serious, many are linked to temporary issues like infections, anxiety, or low fitness that improve with the right treatment."
    },
    {
        question: "What is the main cause of sputum?",
        answer: "Sputum, the mucus coughed up from the lungs, is mainly caused by irritation or infection in the airways. Common reasons include chest infections, bronchitis, asthma, COPD, smoking, and allergies. The body produces extra mucus to trap and clear germs, dust, and other irritants from the lungs."
    },
    {
        question: "Is it normal to produce sputum?",
        answer: "Producing a small amount of clear or white mucus occasionally is normal, since your lungs naturally clear dust and irritants this way. However, it is not normal if the sputum is thick, yellow, green, blood-tinged, or if it lasts for more than two to three weeks. In these cases, it is best to get it checked by a pulmonologist."
    },
    {
        question: "When should I see a pulmonologist for breathlessness?",
        answer: "You should book an appointment if breathlessness lasts more than a few days, keeps coming back, gets worse with mild activity, or is paired with cough, chest pain, or swelling in your legs."
    },
    {
        question: "Can anxiety really cause physical breathlessness?",
        answer: "Yes. Anxiety can cause real, physical breathlessness through rapid, shallow breathing, even though the lungs themselves are healthy. A doctor can help rule out other causes and guide you toward the right support."
    }
];

export default function BreathlessnessPage() {
    return (
        <>
            <ServiceHero
                title="What Is the Reason for Breathlessness? A Simple Guide by Dr. Manish Aggarwal"
                description="Feeling like you cannot catch your breath, even after light activity, can be scary. You are not alone. Breathlessness, also called shortness of breath, is one of the most common reasons people visit a lung specialist. The good news is that most causes can be found and treated once you know what to look for. Here, Dr. Manish Aggarwal explains, in simple everyday language, the reason for breathlessness, what it means when it happens suddenly or slowly, and when you should see a doctor."
                ctaText="Book a Consultation"
                backgroundImage="/services/reason-for-breathlessness-hero.png"
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* WHAT DOES BREATHLESSNESS ACTUALLY MEAN */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Symptom Identification
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Does Breathlessness Actually Mean?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Breathlessness is the feeling that you cannot get enough air into your lungs. Some people describe it as tightness in the chest. Others feel like they are breathing through a straw. Doctors call this symptom dyspnea, but you do not need to remember that word. All you need to know is that your body is telling you something is not working the way it should.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Understanding the reason for breathlessness starts with noticing a few simple things:
                            </p>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Did it start suddenly, or has it built up slowly over weeks or months?</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Does it happen only when you exert yourself, or even while resting?</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Is it linked to other symptoms like coughing, chest pain, or swelling in your legs?</span>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Answering these questions helps your doctor narrow down the exact reason for breathlessness in your case.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="/services/reason-for-breathlessness.png"
                                alt="Understanding Breathlessness Causes"
                                className="w-full h-[300px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* COMMON REASONS FOR BREATHLESSNESS */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Breakdown
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Reasons for Breathlessness
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There is no single reason for breathlessness. It can come from your lungs, your heart, your blood, or even your emotions. Below are the most common causes Dr. Manish Aggarwal sees in his clinic.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Asthma (Allergic Bronchitis)",
                                    description: (
                                        <>
                                            Asthma causes the airways in your lungs to narrow and swell.
                                            This is one of the most frequent reasons for breathlessness in
                                            young people, especially during exercise, cold weather, or
                                            exposure to dust and smoke.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "COPD (Chronic Obstructive Pulmonary Disease)",
                                    description: (
                                        <>
                                            COPD is common in long-term smokers and people exposed to heavy
                                            air pollution for years. It slowly damages the lungs, making
                                            breathing harder over time. This is one of the most serious
                                            shortness of breath causes in adults over 40.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Bacterial Pneumonia",
                                    description: (
                                        <>
                                            An infection in the lungs fills the air sacs with fluid, which
                                            limits how much oxygen reaches your blood. This is a very common
                                            shortness of breath reason, especially when paired with fever
                                            and cough.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Pulmonary Artery Hypertension",
                                    description: (
                                        <>
                                            Not every breathing problem starts in the lungs' airways. When
                                            pressure in the lungs' blood vessels rises, or when the heart
                                            struggles to pump efficiently, fluid can build up around the
                                            lungs. Ankle swelling along with breathlessness is a warning
                                            sign worth mentioning to your doctor.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Interstitial Lung Disease (ILD) / Lung Fibrosis",
                                    description: (
                                        <>
                                            In this condition, lung tissue becomes scarred and stiff over
                                            time. It is a less common but serious reason for breathlessness
                                            that needs specialist care.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Uncontrolled Asthma vs Severe Asthma",
                                    description: (
                                        <>
                                            One of the often-missed shortness of breath causes is confusing
                                            these two. Uncontrolled asthma happens due to poor inhaler
                                            technique, missed doses, or ongoing triggers, and usually
                                            improves once these are fixed. Severe asthma causes
                                            breathlessness even with correct treatment and needs specialist
                                            evaluation to manage properly.
                                        </>
                                    ),
                                    href: "#",
                                },
                            ].map((condition) => (
                                <div
                                    key={condition.title}
                                    className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                            {condition.title}
                                        </h3>

                                        <div className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                            {condition.description}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <a
                                            href={condition.href}
                                            className="text-sm font-semibold text-[#1fa8e8] hover:underline"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CALLBACK SECTION */}
                        <div className="mt-12 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h4 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                                Not Sure Which of These Applies to You?
                            </h4>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Every case is different. Fill out the short form below, and Dr. Manish Aggarwal's team will call you back to help figure out the exact reason for breathlessness in your situation.
                            </p>
                            <div className="mt-6">
                                <BookAppointmentButton cta="Request a Callback" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* COMPARISON TABLE SECTION */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Differential Matrix
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Shortness of Breath Causes: Lungs vs Heart vs Other Factors
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Patients often ask Dr. Manish Aggarwal how to tell whether their breathlessness is coming from the lungs or the heart. While only a proper checkup can confirm this, here is a simple way to think about it.
                        </p>

                        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse bg-white text-sm sm:text-base">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-[#0f172a]">Signs pointing to lungs</th>
                                        <th className="p-4 font-bold text-[#0f172a]">Signs pointing to heart</th>
                                        <th className="p-4 font-bold text-[#0f172a]">Signs pointing to other causes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-[#475569]">
                                    <tr>
                                        <td className="p-4">Wheezing sound while breathing</td>
                                        <td className="p-4">Swelling in ankles or feet</td>
                                        <td className="p-4">Rapid breathing with tingling hands (anxiety)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Long history of cough</td>
                                        <td className="p-4">Breathlessness while lying flat</td>
                                        <td className="p-4">Pale skin and tiredness (anemia)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">History of smoking or dust exposure</td>
                                        <td className="p-4">Chest pain or pressure</td>
                                        <td className="p-4">Breathlessness only during heavy exertion (low fitness)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <blockquote className="mt-6 border-l-4 border-[#1fa8e8] bg-slate-50 p-4 rounded-r-xl">
                            <p className="text-xs sm:text-sm text-[#475569] italic">
                                This table is only a general guide. Many shortness of breath causes overlap, which is why a proper examination by a pulmonologist is important rather than guessing at home.
                            </p>
                        </blockquote>
                    </div>
                </section>

                {/* RED FLAGS / EMERGENCY ROOM */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                            Critical Warnings
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            When Breathlessness Is a Medical Emergency
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Most causes of breathlessness are manageable, but a few situations need immediate medical attention. Please go to the nearest emergency room or call emergency services if breathlessness comes with:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Blue or grey lips and fingertips",
                                "Severe chest pain or pressure",
                                "Sudden breathlessness after a long flight, surgery, or period of immobility",
                                "Fainting or severe confusion",
                                "Breathlessness so severe you cannot speak in full sentences"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-xl bg-red-50/40 border border-red-100 p-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs mt-0.5">
                                        !
                                    </div>
                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-4 text-xs sm:text-sm font-semibold text-red-600">
                            Do not wait to search for the reason for breathlessness online in these situations. Seek emergency care first.
                        </p>
                    </div>
                </section>

                {/* HOW DR. MANISH FINDS THE EXACT REASON */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Our Methodology
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            How Dr. Manish Aggarwal Finds the Exact Reason for Breathlessness
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal is a leading pulmonologist with over 24 years of clinical experience in diagnosing and treating breathing-related conditions, including asthma, COPD, chest infections, and chronic cough. Every patient is different, so he follows a systematic, evidence-based approach to identify the exact cause of breathlessness before recommending a personalized treatment plan. While this information is intended for general educational purposes, it should not be considered a substitute for a personal consultation, diagnosis, or treatment by a qualified medical professional. The evaluation typically includes:
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {[
                                { title: "Detailed History", desc: "Understanding when it started, what makes it worse, and your medical background." },
                                { title: "Physical Examination", desc: "Listening to your lungs and heart with a stethoscope." },
                                { title: "Pulmonary Function Test (Spirometry)", desc: "A simple breathing test to measure lung capacity." },
                                { title: "Chest X-ray or CT Scan", desc: "To look for infections, scarring, or structural issues." },
                                { title: "Blood Tests", desc: "To check for anemia, infection, or inflammation." },
                                { title: "Oxygen Level Check", desc: "A painless clip-on device that measures oxygen in your blood." }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 rounded-xl bg-slate-50 border border-slate-200 p-5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-base font-semibold text-[#0f172a]">{item.title}</h4>
                                    <p className="text-sm text-[#64748b] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-6 text-sm text-[#475569] font-medium text-center">
                            This process ensures the actual reason for breathlessness is treated, rather than just managing the symptom temporarily.
                        </p>

                        <div className="mt-8 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h4 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                                Still Wondering What's Causing Your Breathlessness?
                            </h4>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Don't ignore persistent shortness of breath or try to guess the cause on your own. Fill out the short form below, and Dr. Manish Aggarwal's team will contact you to understand your symptoms and help you schedule the right evaluation.
                            </p>
                            <div className="mt-6">
                                <BookAppointmentButton cta="Book a Consultation" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <FAQs faqs={faqs} />

                {/* FINAL CTA AND FORM SECTION */}
                <div className="mx-auto py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-10 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Still Searching for the Reason for Breathlessness You're Experiencing?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                                    Guessing online can only take you so far. Dr. Manish Aggarwal has years of experience helping patients find the exact reason for their shortness of breath symptoms and treating it at the root, not just managing it.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book Your Appointment Now"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}