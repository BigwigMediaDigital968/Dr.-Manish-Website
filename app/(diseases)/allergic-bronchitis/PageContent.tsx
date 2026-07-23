import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";


const faqs = [
    {
        question: "What is the best medicine for allergic bronchitis?",
        answer: "There is no single medicine that works for everyone. Doctors usually combine bronchodilators, anti-inflammatory medicines, and antihistamines based on the patient's symptoms and triggers. Getting a proper diagnosis first is important, since the right allergic bronchitis treatment depends on the individual case."
    },
    {
        question: "How to treat bronchitis fast?",
        answer: "A prescribed inhaler or nebulizer can open the airways quickly, while staying hydrated, resting, and avoiding triggers help speed up recovery. Fast relief methods work best when combined with a full treatment plan from a pulmonologist."
    },
    {
        question: "How long does allergic bronchitis last?",
        answer: "Mild cases can improve within one to two weeks once treatment starts and the trigger is removed. If exposure continues or treatment is delayed, symptoms can last longer or keep returning."
    },
    {
        question: "What to avoid in bronchitis?",
        answer: "Avoid smoking, secondhand smoke, dust, strong perfumes, and polluted air, as these can worsen the swelling in your airways. Keeping your surroundings clean also helps prevent flare-ups."
    },
    {
        question: "Can allergic bronchitis be cured completely?",
        answer: "Allergic bronchitis cannot be permanently cured, but it can be controlled very effectively. With the right allergic bronchitis treatment and consistent avoidance of your triggers, most patients go for long periods without symptoms."
    },
    {
        question: "Is allergic bronchitis contagious?",
        answer: "No, allergic bronchitis is not contagious. It is caused by your airways reacting to allergens like dust, pollen, or smoke, not by a virus or bacteria, so it cannot spread from one person to another."
    },
    {
        question: "What is the difference between allergic bronchitis and asthma?",
        answer: "Both conditions involve airway inflammation and can cause wheezing or breathlessness, but asthma is a chronic condition with recurring episodes, while allergic bronchitis is usually triggered by a specific allergen exposure. Dr. Aggarwal can help identify which condition you have through proper evaluation."
    },
    {
        question: "Can allergic bronchitis turn into something more serious?",
        answer: "If left untreated for a long time, repeated inflammation can affect lung function over time. This is why early allergic bronchitis treatment is important, especially if symptoms keep returning or getting worse."
    },
    {
        question: "Does weather change trigger allergic bronchitis?",
        answer: "Yes, sudden changes in temperature or humidity are common triggers, especially during seasonal changes. Many patients notice their symptoms flare up at the start of winter or during high pollen seasons."
    },
    {
        question: "Should I see a pulmonologist for allergic bronchitis?",
        answer: "Yes, a pulmonologist can accurately diagnose the cause of your symptoms and rule out other conditions like asthma or COPD. Getting the right diagnosis ensures your allergic bronchitis treatment actually addresses the root cause instead of just managing symptoms temporarily."
    }
];

export default function AllergicBronchitisPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Know about Allergic Bronchitis: Guide by Dr. Manish Aggarwal"
                description="Do you have a cough that won't go away, along with chest tightness or wheezing? This could be allergic bronchitis or asthma, conditions where your airways react to triggers like dust or pollen. With the right treatment for Asthma or Allergic Bronchitis, you can control the symptoms and stop them from coming back."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS ALLERGIC BRONCHITIS */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Condition Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Allergic Bronchitis?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Asthma, also mentioned as allergic bronchitis, happens when the airways in your lungs swell up and get irritated due to an allergic reaction to things like dust, pollen, smoke, or pet hair. This swelling causes extra mucus, leading to a cough that lasts for weeks, chest tightness, wheezing, and shortness of breath. It shares several triggers and symptoms with asthma, which is why a proper evaluation is important to tell the two apart.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Unlike a normal cold, it does not go away on its own. Without proper allergic bronchitis treatment, symptoms tend to return again and again, especially when the weather changes or you are exposed to the same trigger.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1170&auto=format&fit=crop"
                                alt="Allergic Bronchitis Inflammation and Airway Reaction"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS OF ALLERGIC BRONCHITIS */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Signs
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Symptoms of Allergic Bronchitis
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Symptoms of allergic bronchitis often overlap with asthma, but they're usually tied to a specific trigger. Common signs include:
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "A persistent cough lasting several weeks",
                            "Chest tightness",
                            "Wheezing or a whistling sound while breathing",
                            "Shortness of breath",
                            "Excess mucus production",
                            "Symptoms that flare up with dust, pollen, smoke, or weather changes"
                        ].map((symptom, index) => (
                            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-md">
                                <p className="text-sm sm:text-base font-semibold text-[#0f172a]">
                                    {symptom}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-[#64748b] bg-slate-50 border border-slate-200 rounded-xl p-4 italic">
                        If your symptoms keep returning, it's worth getting evaluated to check whether it's allergic bronchitis, asthma, or both.
                    </p>
                </section>

                {/* CAUSES OF ALLERGIC BRONCHITIS */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Environmental Triggers
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Causes of Allergic Bronchitis
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Allergic bronchitis is triggered when the airways react to an allergen. Common causes include:
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Dust & Dust Mites", text: "One of the most common indoor triggers" },
                            { title: "Pollen", text: "Especially during seasonal changes" },
                            { title: "Smoke", text: "Cigarette smoke, secondhand smoke, or pollution" },
                            { title: "Pet Hair & Dander", text: "Common in households with pets" },
                            { title: "Weather Changes", text: "Sudden shifts in temperature or humidity" },
                            { title: "Strong Odours", text: "Perfumes, cleaning agents, and chemical fumes" }
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

                {/* WHY EARLY DIAGNOSTIC TESTS ARE NECESSARY */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Evaluation
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Why Early Diagnostic Tests for Asthma or Allergic Bronchitis Are Necessary
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Getting the right diagnosis matters, since allergic bronchitis or asthma can look similar but need different treatment approaches. Early diagnosis helps identify the exact trigger, prevents repeated flare-ups, and stops the condition from affecting long-term lung health.
                    </p>

                    <p className="mt-4 text-sm sm:text-base font-semibold text-[#0f172a]">
                        Dr. Manish Aggarwal uses the following tests to confirm the diagnosis and guide treatment:
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Spirometry", link:"#" },
                            { name: "Pulmonary Function Test (PFT)", link:"" },
                            { name: "FeNO Testing", link:"" },
                            { name: "6 Minute Walk Test", link:"" }
                        ].map((test, index) => (
                            <Link href={test.link} key={index} className="rounded-xl border hover:border-[#1fa8e8] border-slate-200 bg-white p-4 text-center">
                                <div className="text-xs font-bold text-[#1fa8e8] uppercase mb-1">Method {index + 1}</div>
                                <h3 className="text-sm sm:text-base font-bold text-[#0f172a] hover:text-[#1fa8e8]">{test.name}</h3>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ALLERGIC BRONCHITIS TREATMENT */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Treatment Strategy
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Allergic Bronchitis Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Managing allergic bronchitis or asthma isn't just about treating symptoms as they appear; it's about understanding what sets them off in the first place. Dr. Manish Aggarwal builds each treatment plan around the specific trigger and severity of your condition, since a dust-related flare-up and a pollen-driven one may need different approaches even if the symptoms look similar.
                        </p>
                        <p>
                            The plan typically combines fast-acting relief for breathlessness, medicines that calm inflammation and allergic reactions, and practical lifestyle changes that reduce how often symptoms return. Together, these steps aim not just to control flare-ups but to help you breathe more freely on a day-to-day basis.
                        </p>
                    </div>

                    {/* CTA - INLINE CARD */}
                    <div className="mt-10 flex flex-col items-center text-center max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                            Every case of allergic bronchitis or asthma is different, and so is the right treatment for it.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* MEET THE SPECIALIST */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Pulmonology Expert
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Your Allergic Bronchitis & Asthma Specialist in Delhi – Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating asthma, allergic bronchitis, and other lung and breathing-related conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific triggers and symptoms, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Asthma & Allergic Bronchitis Specialist in Delhi"
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
                                    Ready to Breathe Easier Again?
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                                    Get an expert diagnosis and a personalized treatment plan for Asthma or Allergic Bronchitis from Dr. Manish Aggarwal.
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