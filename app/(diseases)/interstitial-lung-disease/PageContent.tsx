import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";


const faqs = [
    {
        question: "What is the main cause of Interstitial Lung Disease?",
        answer: "ILD can be caused by autoimmune diseases, long-term exposure to dust or chemicals, certain medications, or previous radiation therapy. In many cases, especially idiopathic pulmonary fibrosis, no specific cause is found despite thorough testing."
    },
    {
        question: "Can Interstitial Lung Disease be cured?",
        answer: "ILD cannot be cured, since the scarring in the lung tissue is permanent, but treatment can slow down its progression and manage symptoms effectively. Many patients maintain a good quality of life for years with the right ongoing care."
    },
    {
        question: "How serious is lung fibrosis?",
        answer: "Lung fibrosis can range from mild, slowly progressing cases to severe forms that significantly affect breathing and daily activity. The outlook depends on the type of ILD, how early it's diagnosed, and how the patient responds to treatment, which is why early evaluation by an Interstitial Lung Disease Specialist matters."
    },
    {
        question: "What is the life expectancy for someone with Interstitial Lung Disease?",
        answer: "Life expectancy varies widely depending on the specific type of ILD, its underlying cause, and how early treatment begins. Some forms progress slowly over many years, while others, like idiopathic pulmonary fibrosis, can progress faster. Regular monitoring and early treatment can meaningfully improve outcomes."
    },
    {
        question: "What is the difference between ILD and pulmonary fibrosis?",
        answer: "Interstitial Lung Disease is a broad term covering many conditions that cause lung scarring, while pulmonary fibrosis specifically refers to the scarring itself and is one of the outcomes of several types of ILD. In everyday use, the terms are often used interchangeably, but a pulmonologist can clarify which specific type of ILD you have."
    },
    {
        question: "When should I see a specialist for breathlessness or a persistent cough?",
        answer: "If you have breathlessness that keeps getting worse over weeks or months, or a dry cough that doesn't go away, it's worth getting evaluated by a pulmonologist. Early diagnosis of ILD makes a significant difference in how well the condition can be managed long-term."
    }
];

export default function InterstitialLungDiseasePage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Interstitial Lung Disease (ILD): When Scarring Steals Your Breath"
                description="Do you have breathlessness that keeps getting worse, along with a dry cough that won't go away? This could be Interstitial Lung Disease (ILD), also known as lung fibrosis, a group of conditions where scarring builds up in the lung tissue over time. With the right treatment from an experienced Interstitial Lung Disease Specialist, symptoms can be managed, and the progression of scarring can often be slowed."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/7579820/pexels-photo-7579820.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS INTERSTITIAL LUNG DISEASE */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Breakdown
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Interstitial Lung Disease (ILD)?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Interstitial Lung Disease is an umbrella term for a large group of conditions that cause scarring, or fibrosis, in the tissue surrounding the lungs' air sacs. As this scarring builds up, the lungs become stiffer and less able to expand, making it harder for oxygen to pass into the blood. This is why breathlessness is usually the first noticeable symptom.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                ILD can be caused by a known trigger or, in many cases, no clear cause is ever found, which is called idiopathic pulmonary fibrosis. Without proper treatment from an Interstitial Lung Disease Specialist, the scarring can continue to progress and permanently reduce lung function.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/4226259/pexels-photo-4226259.jpeg"
                                alt="Pulmonary Parenchyma and Interstitial Fibrosis Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF INTERSTITIAL LUNG DISEASE */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Signs
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Interstitial Lung Disease
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            ILD symptoms usually develop slowly over months or years, which often delays diagnosis. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Breathlessness that gradually worsens, especially during activity",
                                "A persistent dry cough",
                                "Fatigue",
                                "Unintended weight loss",
                                "Clubbing of the fingers or toes (widening and rounding of the nail beds)",
                                "Chest discomfort",
                                "A crackling sound in the lungs, often noticed during a doctor's examination"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES OF INTERSTITIAL LUNG DISEASE */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Drivers
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Interstitial Lung Disease
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            ILD can be triggered by a wide range of factors, though in many patients no clear cause is ever identified. Common causes include:
                        </p>

                        <ul className="mt-6 space-y-2 ">
                            {[
                                { name: "Autoimmune Diseases", text: "Such as rheumatoid arthritis, scleroderma, and lupus, which can cause lung scarring." },
                                { name: "Occupational & Environmental Exposure", text: "Long-term exposure to asbestos, silica dust, coal dust, or bird droppings." },
                                { name: "Certain Medications", text: "Some chemotherapy drugs, heart medicines, and other long-term treatments can affect lung tissue." },
                                { name: "Radiation Therapy", text: "Previous radiation to the chest can lead to scarring over time." },
                                { name: "Idiopathic (Unknown) Causes", text: "In many cases, especially idiopathic pulmonary fibrosis, no specific trigger is found despite thorough testing." },
                                { name: "Genetic Factors", text: "A family history of pulmonary fibrosis increases the risk in some patients." }
                            ].map((cause, index) => (
                                <li key={index} className="flex gap-3 items-start border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">{cause.name} : <span className="font-medium text-[#64748b]">{cause.text}</span></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DIAGNOSTIC PANEL */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Investigative Suite
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Interstitial Lung Disease
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Identifying ILD, and telling it apart from other lung conditions, is essential for choosing the right treatment approach early. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                            { name: "High-Resolution CT (HRCT) scan of the chest" },
                            { name: "Spirometry", link: "/#" },
                            { name: "Pulmonary Function Test (PFT)", link: "/#" },
                            { name: "DLCO (Diffusion Capacity Test)" },
                            { name: "6 Minute Walk Test", link: "#" },
                            { name: "Blood tests to check for underlying autoimmune conditions" },
                            {
                                name: "Bronchoscopy with BAL (Bronchoalveolar Lavage), when needed, to rule out other causes",
                                link: "#"
                            }
                        ].map((test, index) => (
                           <li key={index} className="flex gap-3 items-start text-xs sm:text-sm font-bold text-[#0f172a] leading-relaxed">
                                <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                {

                                    test.link ? (
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
                        Interstitial Lung Disease Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Interstitial lung disease covers a wide group of conditions where the lung tissue becomes scarred or inflamed, and no two cases follow quite the same path. Dr. Manish Aggarwal tailors the treatment plan to the specific type of ILD, what's driving it, and how far the scarring has progressed, since a fibrosis-driven case and an autoimmune-linked one often call for very different approaches.
                        </p>
                        <p>
                            Depending on the underlying cause, treatment may focus on slowing further scarring, calming inflammation, or addressing the root condition itself, alongside oxygen support and rehabilitation to help with daily breathing and stamina. In advanced cases where these measures reach their limit, a lung transplant may be considered. Since ILD often progresses gradually, regular monitoring by your Interstitial Lung Disease Specialist helps track lung function over time and adjust the treatment plan as needed.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CENTER */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of ILD is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Interstitial Lung Disease Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Attending Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Dr. Manish Aggarwal, Your ILD Specialist
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating lung and breathing-related conditions, including Interstitial Lung Disease and lung fibrosis. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and symptoms, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Interstitial Lung Disease Specialist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* BOTTOM CONVERSION BAR */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Slow the Scarring, Protect Your Lungs
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Don't wait for breathlessness to worsen. Get an expert diagnosis and a personalised ILD treatment plan from Dr. Manish Aggarwal, your trusted Interstitial Lung Disease Specialist in Delhi.
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