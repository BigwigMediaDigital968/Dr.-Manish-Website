import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
    {
        question: "What is the cause of bronchiectasis?",
        answer: "Bronchiectasis is usually caused by repeated or severe lung infections, such as pneumonia or tuberculosis, that damage the airways over time. Underlying conditions like cystic fibrosis, COPD, immune system disorders, or ABPA can also lead to it. In some patients, no clear cause is identified despite thorough testing."
    },
    {
        question: "Can you live a long life with bronchiectasis?",
        answer: "Yes, many people with bronchiectasis live long, active lives, especially when the condition is diagnosed early and managed consistently. Regular airway clearance, timely treatment of flare-ups, and addressing any underlying cause all help slow down further lung damage and maintain a good quality of life."
    },
    {
        question: "How do you treat bronchiectasis?",
        answer: "Treatment usually includes airway clearance techniques to help clear mucus, antibiotics for infections and flare-ups, bronchodilators to ease breathlessness, and pulmonary rehabilitation to build stamina. If an underlying cause is identified, treating that condition is also an important part of the plan. Dr. Manish Aggarwal tailors the combination based on each patient's specific case."
    },
    {
        question: "What is the difference between bronchitis and bronchiectasis?",
        answer: "Bronchitis is inflammation of the airways that is often temporary, especially in acute cases caused by an infection, though chronic bronchitis can be long-lasting. Bronchiectasis, on the other hand, involves permanent widening and scarring of the airways, which doesn't reverse and requires ongoing management. A pulmonologist can tell the two apart through imaging and other tests."
    },
    {
        question: "Is bronchiectasis the same as COPD?",
        answer: "No, though the two can occur together. COPD mainly involves narrowed airways and damaged air sacs, usually from smoking, while bronchiectasis involves widened, scarred airways, often from infections or other underlying conditions. Some patients have features of both, so proper evaluation is important."
    },
    {
        question: "Can bronchiectasis be cured?",
        answer: "Bronchiectasis cannot be cured, since the airway damage is permanent, but it can be managed very effectively. With the right treatment plan and regular follow-up, most patients can reduce flare-ups and maintain good lung function for years."
    }
];

export default function BronchiectasisPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Chest Infections Keep Coming Back? It Could Be Bronchiectasis"
                description="Do you have a cough that brings up mucus almost every day, along with repeated chest infections? This could be bronchiectasis, a long-term condition where the airways become widened and scarred, making it easier for mucus and infections to build up. With the right treatment from an experienced Bronchiectasis Specialist, most patients manage their condition well and significantly reduce flare-ups."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/7579820/pexels-photo-7579820.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS BRONCHIECTASIS */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Breakdown
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Bronchiectasis?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Bronchiectasis happens when the airways in the lungs become permanently widened and scarred, usually due to repeated infections or inflammation over time. This damage makes it harder for the airways to clear mucus naturally, so it builds up and becomes a breeding ground for further infections, creating a cycle that can worsen lung function if left unmanaged.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Bronchiectasis cannot be reversed, but with the right care from a Bronchiectasis Specialist, symptoms can be controlled, and further lung damage slowed significantly.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/8817795/pexels-photo-8817795.jpeg"
                                alt="Pulmonary Airways and Structural Bronchiectasis Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF BRONCHIECTASIS */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Bronchiectasis
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Bronchiectasis symptoms tend to develop gradually and often get mistaken for chronic bronchitis or a lingering chest infection. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Daily cough with large amounts of mucus",
                                "Mucus that is thick, discoloured, or occasionally blood-tinged",
                                "Frequent chest infections",
                                "Shortness of breath",
                                "Wheezing",
                                "Fatigue",
                                "Chest pain in some cases"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES OF BRONCHIECTASIS */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Background
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Bronchiectasis
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Bronchiectasis develops when the airways are damaged, often due to an underlying condition or repeated infections. Common causes include:
                        </p>

                        <ul className="mt-6 space-y-2">
                            {[
                                {
                                    name: "Past severe lung infections",
                                    text: "Such as pneumonia or tuberculosis, especially if not fully treated."
                                },
                                {
                                    name: "Underlying conditions",
                                    text: "Including cystic fibrosis, COPD, and immune system disorders."
                                },
                                {
                                    name: "Aspiration",
                                    text: "Repeated inhaling of food, liquid, or acid reflux into the lungs."
                                },
                                {
                                    name: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
                                    text: "Ongoing inflammation from this condition can lead to bronchiectasis if untreated."
                                },
                                {
                                    name: "Airway blockage",
                                    text: "From an inhaled object or growth that leads to repeated infections in one area."
                                },
                                {
                                    name: "Unknown cause",
                                    text: "In some patients, no clear cause is found despite thorough testing."
                                }
                            ].map((cause, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 items-start border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                                >
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">
                                        {cause.name}:{" "}
                                        <span className="font-medium text-[#64748b]">
                                            {cause.text}
                                        </span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DIAGNOSTIC MATRIX */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Investigative Panel
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Bronchiectasis
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming bronchiectasis and identifying its underlying cause helps guide the right long-term treatment plan. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <div className="mt-6 space-y-3">
                        {[
                            { name: "Chest X-ray or CT scan (the primary test for confirming bronchiectasis)" },
                            { name: "Spirometry" },
                            {
                                name: "Pulmonary Function Test (PFT)",
                                link: "/tests/pulmonary-function-test"
                            },
                            {
                                name: "Sputum culture to identify any ongoing infection",
                                link: "/tests/sputum-culture"
                            },
                            { name: "Blood tests to check for underlying causes" }
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
                    </div>
                </section>

                {/* TREATMENT SECTOR */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Management
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Bronchiectasis Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Bronchiectasis develops when the airways become permanently widened and scarred, making them prone to mucus buildup and repeated infections. Dr. Manish Aggarwal shapes the treatment plan around what's driving the condition, how severe it is, and how often flare-ups occur, since managing the underlying cause is just as important as controlling day-to-day symptoms.
                        </p>
                        <p>
                            Core treatment usually centres on clearing mucus regularly and preventing infections, supported by inhalers for easier breathing and rehabilitation to build overall stamina. Surgery remains a rare option, reserved for select cases where damage is localised. Since bronchiectasis is a long-term condition, regular monitoring by your Bronchiectasis Specialist helps catch flare-ups early and adjust the treatment plan as needed.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CENTER */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of bronchiectasis is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Bronchiectasis Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST BIOGRAPHY */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Attending Consultant
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                About Dr. Manish Aggarwal – Bronchiectasis Specialist
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating lung and breathing-related conditions, including bronchiectasis. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and symptoms, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Bronchiectasis Treatment Specialist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ PANEL */}
                <FAQs faqs={faqs} />

                {/* BOTTOM CONVERSION BAR */}
                <section className="py-10 sm:py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Take Control of Your Bronchiectasis Today
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Get an expert diagnosis and a personalised bronchiectasis treatment plan from Dr. Manish Aggarwal, your trusted Bronchiectasis Specialist in Delhi.
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