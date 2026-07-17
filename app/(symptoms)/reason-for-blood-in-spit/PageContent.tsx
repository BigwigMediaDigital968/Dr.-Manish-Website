import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
    {
        question: "What is the main reason for blood in spit?",
        answer: "There is no single reason for blood in spit. Common causes include forceful coughing, chest infections, pneumonia, tuberculosis, nasal bleeding, smoking, and in rare cases, lung cancer. A doctor needs to examine you to find the exact cause in your case."
    },
    {
        question: "What are the most common causes of blood in spit in young, otherwise healthy people?",
        answer: "In younger people, common causes of blood in spit include a bad cold, forceful coughing, minor nosebleeds, or a mild chest infection. These are usually manageable once identified correctly."
    },
    {
        question: "Is blood in spit always a sign of a serious lung disease?",
        answer: "No. While some causes of blood in spit are serious, many are linked to temporary issues like a cold, cough, or minor nasal irritation that improve with the right treatment."
    },
    {
        question: "When should I see a pulmonologist for blood in spit?",
        answer: "You should book an appointment if blood in spit happens more than once, comes in more than small streaks, or is paired with cough, chest pain, breathlessness, or weight loss."
    },
    {
        question: "Is blood in spit serious?",
        answer: "Not always. A small streak of blood after a hard cough or a cold is usually harmless. But if it happens more than once, comes in a larger amount, or is paired with chest pain, breathlessness, or weight loss, it should be checked by a doctor rather than ignored."
    },
    {
        question: "What causes blood in your saliva?",
        answer: "Blood in saliva is often caused by something simple like a cut in the mouth, bleeding gums, a dry or irritated throat, or a nosebleed that has trickled down. It can also come from a chest infection or a stronger cough, so it helps to notice whether it is really coming from your mouth and gums or from deeper in your throat and airway."
    },
    {
        question: "Is it normal to spit out a little blood?",
        answer: "A single small streak once in a while, especially after brushing your teeth too hard or a bad coughing fit, is usually nothing to worry about. It is not normal if it keeps happening over several days, increases in amount, or comes with no clear reason like a cold or minor injury."
    },
    {
        question: "How do I stop spitting blood?",
        answer: "The right way to stop it depends on what is causing it. Resting your voice and throat, staying hydrated, and avoiding smoking can help with minor irritation. But if the blood in spit continues, home remedies will not fix an underlying infection or airway issue, so it is safer to get it examined and treated at the source rather than trying to manage it on your own."
    }
];

export default function BloodInSpitPage() {
    return (
        <>
            <ServiceHero
                title="What Is the Reason for Blood in Spit? A Simple Guide by Dr. Manish Aggarwal"
                description="Noticing blood when you spit or cough can be frightening, especially the first time it happens. You are not alone. Blood in spit is one of the more common reasons people visit a lung specialist, and in many cases the cause turns out to be minor and treatable. The important thing is not to guess, but to understand what your body is telling you. Here, Dr. Manish Aggarwal explains, in simple everyday language, the reason for blood in spit, what it means when it happens once or keeps returning, and when you should see a doctor."
                ctaText="Book a Consultation"
                backgroundImage="/services/blood-in-spit.png"
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* WHAT DOES BLOOD IN SPIT ACTUALLY MEAN */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Symptom Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Does Blood in Spit Actually Mean?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Blood in spit means that blood has mixed with the mucus or saliva you cough or spit out. It may look like small red or pink streaks in the phlegm, or in some cases, a larger amount of blood. Doctors call this symptom hemoptysis, but you do not need to remember that word. All you need to know is that something along your throat, airway, or lungs is irritated, inflamed, or in some cases, more seriously affected.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Understanding the reason for blood in spit starts with noticing a few simple things:
                            </p>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Did it happen just once, or has it come back over several days?</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Is it just a streak of blood, or a noticeable amount?</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Is it linked to other symptoms like an ongoing cough, chest pain, fever, or weight loss?</span>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Answering these questions helps your doctor narrow down the exact reason for blood in spit in your case.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="/services/blood-in-spit-2.png"
                                alt="Understanding Blood in Spit Causes"
                                className="w-full h-[300px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* COMMON REASONS FOR BLOOD IN SPIT */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Diagnostics
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Reasons for Blood in Spit
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There is no single reason for blood in spit. It can come from your throat, your airways, your lungs, or even your nose. Below are the most common causes Dr. Manish Aggarwal sees in his clinic.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Forceful or Prolonged Coughing",
                                    description: (
                                        <>
                                            Repeated, hard coughing can irritate the small blood vessels in your
                                            throat and airways. This is one of the most frequent reasons for blood
                                            in spit, especially during a bad cold or flu.
                                        </>
                                    ),
                                },
                                {
                                    title: "Viral Pneumonia (Flu, Influenza, H1N1, COVID-19)",
                                    description: (
                                        <>
                                            An infection in the airways causes inflammation and swelling, which can
                                            lead to small amounts of blood mixing with mucus. This is a very common
                                            cause of blood in spit, especially when paired with fever, body ache,
                                            and thick phlegm.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Bacterial Pneumonia",
                                    description: (
                                        <>
                                            When the air sacs in the lungs fill with fluid due to infection, it can
                                            cause rust colored or blood-streaked spit. This is a well-known reason
                                            for blood in spit that needs proper antibiotic treatment.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Tubercular Pneumonia (TB)",
                                    description: (
                                        <>
                                            TB remains one of the more serious causes of blood in spit,
                                            particularly if it is paired with a long-term cough, night sweats, or
                                            unexplained weight loss. Early testing is important if TB is suspected.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Nasal or Sinus Bleeding",
                                    description: (
                                        <>
                                            Sometimes the blood does not come from the lungs at all. Blood from a
                                            dry or irritated nose or sinus can trickle down the throat and mix with
                                            spit, giving the appearance of a lung problem.
                                        </>
                                    ),
                                },
                                {
                                    title: "Tobacco Addiction",
                                    description: (
                                        <>
                                            Long-term smoking damages the airway lining over time, making it more
                                            likely to bleed with even mild coughing. This is a well-known reason
                                            for blood in spit among long-term smokers.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Blood Thinning Medicines",
                                    description: (
                                        <>
                                            If you are on medication that thins your blood, even minor throat or
                                            airway irritation can lead to visible blood in your spit.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Bronchiectasis",
                                    description: (
                                        <>
                                            In this condition, the airways become widened and scarred over time,
                                            making them prone to bleeding. It is a less common but serious cause of
                                            blood in spit that needs specialist care.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title:
                                        "Non-Small Cell Lung Carcinoma / Small Cell Lung Carcinoma (SCLC)",
                                    description: (
                                        <>
                                            While far less common than the other causes, lung cancer can be a
                                            serious reason for blood in spit, especially when it keeps recurring
                                            and is paired with unexplained weight loss or a long-standing cough.
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

                                    {condition.href && <div className="mt-6">
                                        <a
                                            href={condition.href}
                                            className="text-sm font-semibold text-[#1fa8e8] hover:underline"
                                        >
                                            Read more
                                        </a>
                                    </div>}
                                </div>
                            ))} </div>

                        {/* CALLBACK SECTION */}
                        <div className="mt-12 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                Not Sure Which of These Applies to You?
                            </h4>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Every case is different. Fill out the short form below, and Dr. Manish Aggarwal's team will call you back to help figure out the exact reason for blood in spit in your situation.
                            </p>
                            <div className="mt-6">
                                <BookAppointmentButton cta="Request a Callback" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* MINOR VS SERIOUS TABLE */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Severity Stratification
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Causes of Blood in Spit: Minor vs Serious
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Patients often ask Dr. Manish Aggarwal how to tell whether blood in spit is something minor or something serious. While only a proper checkup can confirm this, here is a simple way to think about it.
                        </p>

                        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse bg-white text-sm sm:text-base">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-[#0f172a]">Signs Pointing to Minor Causes</th>
                                        <th className="p-4 font-bold text-[#0f172a]">Signs Pointing to Serious Causes</th>
                                        <th className="p-4 font-bold text-[#0f172a]">Signs Pointing to Other Causes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-[#475569]">
                                    <tr>
                                        <td className="p-4">Happens only once or twice</td>
                                        <td className="p-4">Keeps returning over several days</td>
                                        <td className="p-4">Blood appears to come from the nose, not the throat</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Just small streaks of blood</td>
                                        <td className="p-4">Larger amount of blood or clots</td>
                                        <td className="p-4">Recent nosebleed or sinus irritation</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Follows a bad cough or cold</td>
                                        <td className="p-4">Paired with unexplained weight loss</td>
                                        <td className="p-4">On blood-thinning medication</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">No fever or chest pain</td>
                                        <td className="p-4">Paired with fever, chest pain, or breathlessness</td>
                                        <td className="p-4">Long history of smoking</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <blockquote className="mt-6 border-l-4 border-[#1fa8e8] bg-slate-50 p-4 rounded-r-xl">
                            <p className="text-xs sm:text-sm text-[#475569] italic">
                                This table is only a general guide. Many causes of blood in spit overlap, which is why a proper examination by a pulmonologist is important rather than guessing at home.
                            </p>
                        </blockquote>
                    </div>
                </section>

                {/* MEDICAL EMERGENCY */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                            Emergency Response
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            When Blood in Spit Is a Medical Emergency
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Most causes of blood in spit are manageable, but a few situations need immediate medical attention. Please go to the nearest emergency room or call emergency services if blood in spit comes with:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "More than just streaks, or a continuous flow of blood",
                                "Severe chest pain or pressure",
                                "Breathlessness along with the blood",
                                "Dizziness, fainting, or a rapid heartbeat",
                                "Blood in spit that keeps happening over several days without improvement"
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
                            Do not wait to search for the reason for blood in spit online in these situations. Seek emergency care first.
                        </p>
                    </div>
                </section>

                {/* HOW DR. MANISH FINDS THE REASON */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Expert Evaluation
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            How Dr. Manish Aggarwal Finds the Exact Reason for Blood in Spit
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal is a leading pulmonologist with over 24 years of clinical experience in diagnosing and treating breathing-related conditions, including chest infections, tuberculosis, chronic cough, and unexplained bleeding in the airway. Every patient is different, so he follows a systematic, evidence-based approach to identify the exact cause of blood in spit before recommending a personalized treatment plan. While this information is intended for general educational purposes, it should not be considered a substitute for a personal consultation, diagnosis, or treatment by a qualified medical professional. The evaluation typically includes:
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {[
                                { title: "Detailed History", desc: "Understanding when it started, how often it happens, and your medical background." },
                                { title: "Physical Examination", desc: "Listening to your lungs with a stethoscope and checking your throat and nose." },
                                { title: "Chest X-ray or CT Scan", desc: "To look for infections, scarring, or structural issues in the lungs." },
                                { title: "Sputum Test", desc: "To check for infections such as tuberculosis." },
                                { title: "Blood Tests", desc: "To check for infection, inflammation, or clotting issues." },
                                { title: "Bronchoscopy (if needed)", desc: "A thin camera test to look directly inside the airway when the cause is unclear." }
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
                            This process ensures the actual reason for blood in spit is treated, rather than just managing the symptom temporarily.
                        </p>

                        <div className="mt-8 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                                Still Wondering What's Causing the Blood in Your Spit?
                            </h3>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Don't ignore recurring blood in spit or try to guess the cause on your own. Fill out the short form below, and Dr. Manish Aggarwal's team will contact you to understand your symptoms and help you schedule the right evaluation.
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
                                    Still Searching for the Reason for Blood in Spit You're Experiencing?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                                    Guessing online can only take you so far. Dr. Manish Aggarwal has years of experience helping patients find the exact reason for their blood in spit symptoms and treating it at the root, not just managing it.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book Your Appointment Now" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}