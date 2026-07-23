import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
    {
        question: "How does a person get fungal pneumonia?",
        answer: "Fungal pneumonia develops when a person breathes in fungal spores from the environment, such as soil, dust, or bird and bat droppings. Most healthy people who are exposed don't develop pneumonia, but those with weakened immune systems are far more likely to get infected after exposure."
    },
    {
        question: "What is the survival rate of fungal pneumonia?",
        answer: "Survival rates vary widely depending on the specific fungus, how early it's diagnosed, and the patient's overall immune status. Healthy individuals who are diagnosed and treated early generally recover well, while patients with significantly weakened immunity face a higher risk of complications. Getting evaluated by a Fungal Pneumonia Specialist as soon as symptoms appear improves the outcome."
    },
    {
        question: "Who is most at risk for fungal pneumonia?",
        answer: "People with weakened immune systems are at the highest risk, including those with HIV, cancer patients undergoing chemotherapy, organ transplant recipients, and people on long-term steroid use. People with existing lung conditions, and those living or working in areas with high fungal exposure, such as farming or construction, are also at increased risk."
    },
    {
        question: "How to tell if pneumonia is bacterial or fungal?",
        answer: "Bacterial pneumonia usually comes on suddenly with high fever and thick, discoloured mucus, and improves with antibiotics. Fungal pneumonia tends to develop more slowly, often doesn't respond to antibiotics, and needs specific tests like sputum culture, blood tests, or sometimes a bronchoscopy to identify the fungus. A pulmonologist can confirm the exact cause through proper testing rather than symptoms alone."
    },
    {
        question: "Is fungal pneumonia contagious?",
        answer: "No, fungal pneumonia is generally not contagious from person to person. It's caused by inhaling fungal spores from the environment, not by spread through coughing or close contact, though people with weakened immunity should still take precautions around known high-exposure environments."
    },
    {
        question: "How long does treatment for fungal pneumonia take?",
        answer: "Treatment duration varies depending on the specific fungus and severity of infection, often ranging from several weeks to a few months. Regular follow-up and imaging help Dr. Manish Aggarwal determine when it's safe to stop antifungal treatment."
    }
];

export default function FungalPneumoniaPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Cough Not Improving with Antibiotics? It Could Be Fungal Pneumonia"
                description="Do you have a lingering cough, fever, and breathlessness that isn't improving with regular antibiotics? This could be fungal pneumonia, a lung infection caused by fungi rather than bacteria or viruses. It's less common but can be serious, especially in people with weaker immunity, so getting evaluated by an experienced Fungal Pneumonia Specialist matters."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS FUNGAL PNEUMONIA */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Breakdown
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Fungal Pneumonia?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Fungal pneumonia happens when fungal spores are breathed into the lungs and cause an infection or inflammation in the lung tissue. Unlike bacterial or viral pneumonia, it doesn't respond to antibiotics or antivirals, so it often needs a different diagnostic approach and specific antifungal treatment.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Fungal pneumonia is more common in people with weakened immune systems, though certain fungi can also affect otherwise healthy individuals depending on where they live or work. Without proper treatment from a Fungal Pneumonia Specialist, the infection can spread and cause lasting lung damage.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/7579819/pexels-photo-7579819.jpeg"
                                alt="Pulmonary Mycology and Fungal Infection Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF FUNGAL PNEUMONIA */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Signs
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Fungal Pneumonia
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Fungal pneumonia symptoms often develop more slowly than bacterial pneumonia and can be mistaken for other lung infections. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Persistent cough, sometimes with blood-tinged mucus",
                                "Fever and chills that don't resolve",
                                "Shortness of breath, especially on exertion",
                                "Chest pain",
                                "Fatigue and unintended weight loss",
                                "Night sweats",
                                "Symptoms that don't improve with standard antibiotics"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES OF FUNGAL PNEUMONIA */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Drivers
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Fungal Pneumonia
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Fungal pneumonia develops when fungal spores from the environment are inhaled into the lungs. Common causes include:
                        </p>

                        <ul className="mt-6 space-y-2 ">
                            {[
                                { name: "Aspergillus", text: "Found in soil, dust, and decaying matter, one of the more frequent causes of fungal lung infections." },
                                { name: "Histoplasma", text: "Common in soil contaminated with bird or bat droppings." },
                                { name: "Cryptococcus", text: "Found in soil and bird droppings, particularly affects people with weakened immunity." },
                                { name: "Pneumocystis jirovecii", text: "Mainly affects people with significantly weakened immune systems." },
                                { name: "Weakened Immunity", text: "From conditions like HIV, cancer treatment, organ transplant, or long-term steroid use, which make the lungs more vulnerable to fungal infection." }
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
                        Investigative Protocol
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Fungal Pneumonia
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Since fungal pneumonia can look similar to bacterial or viral pneumonia on the surface, identifying the specific fungus is essential before starting the right antifungal treatment. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                            { name: "Chest X-ray or CT scan" },
                            { name: "Blood oxygen level check (pulse oximetry)" },
                            { name: "Sputum culture and blood tests to identify the fungus" },
                            {
                                name: "Bronchoscopy with BAL (Bronchoalveolar Lavage), when needed, to collect a lung sample directly",
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
                        Fungal Pneumonia Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Fungal pneumonia is less common than bacterial pneumonia but often more challenging to treat, usually affecting people with weakened immunity and requiring a longer, more carefully monitored course of care. Dr. Manish Aggarwal builds the treatment plan around the specific fungus causing the infection, the severity of symptoms, and what's driving the patient's lowered immunity in the first place.
                        </p>
                        <p>
                            Antifungal medicines form the backbone of treatment, often needed for weeks to months rather than days, while oxygen support and hospitalisation are reserved for more severe presentations. Because the underlying immune issue often needs attention alongside the infection itself, care is frequently coordinated with other specialists, and regular follow-up ensures the infection is fully resolving rather than just improving on the surface.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h4>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of fungal pneumonia is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Fungal Pneumonia Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* BIOGRAPHY SECTION */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Medical Specialist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Your Trusted Fungal Pneumonia Specialist in Delhi
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating lung and breathing-related conditions, including fungal pneumonia. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and immune status, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>
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
                                    Don't Let a Lingering Infection Go Undiagnosed
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Fungal pneumonia often gets mistaken for something else; don't wait for it to get worse. Get an expert diagnosis and a personalised treatment plan from Dr. Manish Aggarwal, your trusted Fungal Pneumonia Specialist in Delhi.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <WhatsappButton cta="Book an Appointment Today" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}