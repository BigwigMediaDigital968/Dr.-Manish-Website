import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
    {
        question: "What is the main reason for unintentional weight loss?",
        answer: "There is no single reason for unexplained weight loss. Common causes include TB, COPD, lung cancer, thyroid problems, diabetes, and depression. A doctor needs to examine you to find the exact cause in your case."
    },
    {
        question: "How much weight loss is considered abnormal?",
        answer: "Losing more than 5 percent of your body weight in six to twelve months without trying is generally considered a reason for unexplained weight loss that should be checked by a doctor. This threshold is the standard doctors use worldwide to flag a genuine reason for unexplained weight loss rather than normal day to day fluctuation."
    },
    {
        question: "Can stress or anxiety cause unintentional weight loss?",
        answer: "Yes. Ongoing stress and anxiety can lower appetite and change digestion, leading to gradual weight loss even when there is no physical illness involved."
    },
    {
        question: "When should I see a pulmonologist for unexplained weight loss?",
        answer: "You should book an appointment if the weight loss lasts more than a month, keeps coming back, or is paired with cough, breathlessness, wheezing, fever, or chest pain."
    },
    {
        question: "When should I worry about unintentional weight loss?",
        answer: "You should start paying attention if you lose more than 5% of your body weight within 6 months without trying, especially if it comes with other symptoms like cough, tiredness, breathlessness, or loss of appetite. Unexplained weight loss that continues for more than a few weeks should always be checked by a doctor."
    },
    {
        question: "How do I stop unintentional weight loss?",
        answer: "The first step is not to try to stop it on your own by eating more, but to find out the reason for unintentional weight loss. Once the underlying cause, whether it is a thyroid issue, infection, digestive problem, or a lung condition, is identified and treated, the weight loss usually stops on its own. Self-treating without a diagnosis can delay proper care."
    },
    {
        question: "What diseases cause rapid weight loss?",
        answer: "Several conditions can cause rapid, unexplained weight loss, including tuberculosis, COPD, lung cancer, uncontrolled diabetes, thyroid disorders, and certain digestive diseases like Crohn's disease. Since many of these are linked to the lungs and chest, a pulmonology checkup is often one of the first and most useful steps in finding the answer."
    }
];

export default function UnintentionalWeightLossPage() {
    return (
        <>
            <ServiceHero 
                title="What Is the Reason for Unintentional Weight Loss?" 
                description="Noticing that your clothes are looser even though you have not changed your diet or exercise can be unsettling. You are not alone. Unintentional weight loss, also called unexplained weight loss, is one of the most common reasons people visit a lung specialist, since many chest and airway conditions quietly affect the body's weight. The good news is that most causes can be found and treated once you know what to look for. Here, Dr. Manish Aggarwal explains, in simple everyday language, the reason for unintentional weight loss, what it means when it happens suddenly or slowly, and when you should see a doctor."
                ctaText="Book a Consultation"
                backgroundImage="https://images.unsplash.com/photo-1646829873498-e874cfa27933?q=80&w=1170&auto=format&fit=crop"
            />
            
            <div className="max-w-7xl mx-auto px-4">
                
                {/* WHAT DOES UNINTENTIONAL WEIGHT LOSS ACTUALLY MEAN */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Symptom Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Does Unintentional Weight Loss Actually Mean?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Unintentional weight loss means your body weight is dropping even though you are not trying to lose it. Doctors usually take notice when a person loses more than 5 percent of their body weight in six months to a year without dieting. For example, if someone who weighs 70 kg loses around 3.5 kg without any change in food or exercise, this counts as unexplained weight loss.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Doctors sometimes use technical terms for this, but you do not need to remember them. All you need to know is that your body is telling you something is not working the way it should. Understanding the reason for unexplained weight loss starts with noticing a few simple things:
                            </p>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Did the weight loss happen suddenly, or has it built up slowly over weeks or months?</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Are you eating normally, less than usual, or even more than usual?</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm sm:text-base text-[#475569]">
                                    <span className="text-[#1fa8e8] font-bold">•</span>
                                    <span>Is it linked to other symptoms like cough, breathlessness, fatigue, or fever?</span>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Answering these questions helps your doctor narrow down the exact cause in your case.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1626697556342-2310dbc55428?q=80&w=1170&auto=format&fit=crop"
                                alt="Understanding Unintentional Weight Loss"
                                className="w-full h-[300px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                            />
                        </div> */}
                    </div>
                </div>

                {/* COMMON REASONS FOR UNINTENTIONAL WEIGHT LOSS */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Diagnostics
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Reasons for Unintentional Weight Loss
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There is no single reason for unintentional weight loss. It can come from your lungs, your hormones, your digestion, or even your mental health. Below are the causes for unexplained weight loss Dr. Manish Aggarwal sees most often in his clinic.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Tubercular Pneumonia */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Tubercular Pneumonia (TB)
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        TB is a long-lasting lung infection that quietly eats into your energy and appetite. It is one of the most common reasons for unexplained weight loss seen in India, often along with a persistent cough and night sweats.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* COPD */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        COPD (Chronic Obstructive Pulmonary Disease)
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        COPD is common in long-term smokers and people exposed to heavy air pollution for years. Breathing becomes harder over time, and the extra effort to breathe burns more calories than normal. This is one of the most overlooked causes for unexplained weight loss in adults over 40, since the extra breathing effort quietly burns through calories.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Lung Carcinoma */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Non-Small Cell Lung Carcinoma / Small Cell Lung Carcinoma (SCLC)
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        In its early stages, lung cancer may show almost no symptoms except a slow, steady drop in weight along with tiredness. This is a serious reason for unexplained weight loss that needs prompt evaluation, especially in smokers over 40.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Interstitial Lung Disease */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Interstitial Lung Disease (ILD) / Lung Fibrosis
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        Scarring in the lungs makes breathing difficult and can reduce appetite over time. It is a less common but serious cause of unexplained weight loss that needs specialist care.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Obstructive Sleep Apnea */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Obstructive Sleep Apnea
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        Poor sleep quality caused by repeated breathing pauses at night disturbs the hormones that control hunger and metabolism, which can quietly contribute to weight loss. Sleep specialists list this among the lesser-known causes for unexplained weight loss.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Bronchiectasis */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Bronchiectasis
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        The body uses extra energy fighting an ongoing infection. Frequent chest infections are a common reason for unexplained weight loss, and doctors often list them among the causes for unexplained weight loss they check first, especially when paired with fatigue and low appetite.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                        </div>

                        {/* CALLBACK SECTION */}
                        <div className="mt-12 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                Not Sure Which of These Applies to You?
                            </h4>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Every case is different. Fill out the short form below, and Dr. Manish Aggarwal's team will call you back to help figure out the exact reason for unintentional weight loss in your situation.
                            </p>
                            <div className="mt-6">
                                <BookAppointmentButton cta="Request a Callback" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* SYSTEMIC COMPARISON TABLE */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Severity Stratification
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Causes for Unexplained Weight Loss: Lungs vs Other Systems
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Patients often ask Dr. Manish Aggarwal how to tell whether their weight loss is coming from the lungs or from somewhere else in the body. Finding the reason for unexplained weight loss usually depends on which other symptoms show up alongside it. While only a proper checkup can confirm this, here is a simple way to think about it.
                        </p>

                        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse bg-white text-sm sm:text-base">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-[#0f172a]">Signs Pointing to Lungs</th>
                                        <th className="p-4 font-bold text-[#0f172a]">Signs Pointing to Hormones or Digestion</th>
                                        <th className="p-4 font-bold text-[#0f172a]">Signs Pointing to Mental Health</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-[#475569]">
                                    <tr>
                                        <td className="p-4">Persistent cough lasting weeks</td>
                                        <td className="p-4">Excess thirst and frequent urination (diabetes)</td>
                                        <td className="p-4">Low appetite with low mood</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Wheezing or breathlessness</td>
                                        <td className="p-4">Rapid heartbeat and sweating (thyroid)</td>
                                        <td className="p-4">Poor sleep and constant worry</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Night sweats or low-grade fever</td>
                                        <td className="p-4">Change in bowel habits</td>
                                        <td className="p-4">Withdrawal from daily activities</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">History of smoking or TB exposure</td>
                                        <td className="p-4">Bulging eyes or neck swelling (thyroid)</td>
                                        <td className="p-4">Loss of interest in food</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <blockquote className="mt-6 border-l-4 border-[#1fa8e8] bg-slate-50 p-4 rounded-r-xl">
                            <p className="text-xs sm:text-sm text-[#475569] italic">
                                This table is only a general guide. Many causes for unexplained weight loss overlap, which is why a proper examination by a pulmonologist is important rather than guessing at home.
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
                            When Unintentional Weight Loss Is a Medical Emergency
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Most causes of unintentional weight loss are manageable once identified, but a few situations need immediate medical attention. Please go to the nearest emergency room or call emergency services if weight loss comes with:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Coughing up blood",
                                "Severe breathlessness or bluish lips and fingertips",
                                "High fever that does not settle with medicine",
                                "Severe chest pain",
                                "Sudden confusion or fainting",
                                "Weight loss that has continued for weeks with no clear cause"
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
                            These signs point to serious causes for unexplained weight loss that cannot wait. Do not search for the reason for unintentional weight loss online in these situations. Seek emergency care first.
                        </p>
                    </div>
                </section>

                {/* EXPERT EVALUATION */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Expert Evaluation
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            How Dr. Manish Aggarwal Finds the Exact Reason for Unintentional Weight Loss
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal is a leading pulmonologist with over 24 years of clinical experience in diagnosing and treating breathing-related conditions, including TB, COPD, chronic cough, and lung infections that often present as unexplained weight loss. Every patient is different, so he follows a systematic, evidence-based approach to identify the exact cause before recommending a personalized treatment plan. While this information is intended for general educational purposes, it should not be considered a substitute for a personal consultation, diagnosis, or treatment by a qualified medical professional.
                        </p>

                        <div className="mt-8 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                                Still Wondering What's Causing Your Weight Loss?
                            </h3>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Don't ignore ongoing unexplained weight loss or try to guess the cause on your own. Fill out the short form below, and Dr. Manish Aggarwal's team will contact you to understand your symptoms and help you schedule the right evaluation.
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
                                    Still Searching for the Reason for Unintentional Weight Loss You're Experiencing?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                                    Guessing online can only take you so far. Dr. Manish Aggarwal has years of experience helping patients find the exact reason for their unexplained weight loss and treating it at the root, not just watching the symptom.
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