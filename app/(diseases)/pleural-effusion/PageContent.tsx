import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";


const faqs = [
    {
        question: "What are pleural effusions caused by?",
        answer: "Pleural effusions are most commonly caused by infections like pneumonia or tuberculosis, heart failure, cancer, liver or kidney disease, and autoimmune conditions like rheumatoid arthritis. Identifying the specific cause is an important part of deciding the right treatment."
    },
    {
        question: "What is the best treatment for pleural effusion?",
        answer: "There's no single best treatment, since it depends on how much fluid has built up and what's causing it. Draining the fluid through pleural aspiration or an intercostal drain often provides quick relief, while treating the underlying cause, such as an infection or heart condition, is essential for preventing the fluid from returning."
    },
    {
        question: "Is pleural effusion mean TB?",
        answer: "Not always. While tuberculosis is one of the common causes of pleural effusion, especially in certain regions, effusions can also be caused by infections other than TB, heart failure, cancer, or autoimmune conditions. Testing the fluid is the only way to confirm the actual cause."
    },
    {
        question: "What are the three stages of pleural effusion?",
        answer: "Pleural effusion, when related to infection, is often described in three stages: the exudative stage, where thin fluid first builds up; the fibrinopurulent stage, where the fluid becomes thicker and infected, sometimes forming pockets; and the organising stage, where scar tissue can form around the lung if it isn't treated in time. Not all pleural effusions go through these stages, since this progression mainly applies to infection-related effusions."
    },
    {
        question: "Is pleural effusion serious?",
        answer: "It can be, depending on the underlying cause and how much fluid has built up. Large effusions can cause significant breathlessness and need prompt drainage, while the underlying condition, such as an infection or cancer, also needs to be addressed to prevent complications."
    },
    {
        question: "How long does it take to recover from pleural effusion?",
        answer: "Recovery time depends on the cause and how the fluid is managed. Many patients feel relief soon after the fluid is drained, but full recovery depends on how quickly the underlying condition is treated, which can range from a few weeks to longer in more complex cases."
    }
];

export default function PleuralEffusionPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Sharp Chest Pain When You Breathe? Here's What Pleural Effusion Means"
                description="Do you have breathlessness or sharp chest pain that worsens when you breathe deeply? This could be a pleural effusion, commonly described as fluid outside the lungs, or pleurisy, the inflammation that often comes with it. With the right evaluation and treatment from an experienced Pleural Effusion Specialist, the fluid can be drained and the underlying cause addressed."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/128597/pexels-photo-128597.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS PLEURAL EFFUSION */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Pleural Effusion?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Pleural effusion is the build-up of excess fluid between the two thin layers of tissue, called the pleura, that surround your lungs. In everyday terms, it's often described as fluid outside the lungs, and it can make breathing difficult since the fluid takes up space the lungs need to expand.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                It's often accompanied by pleurisy, inflammation of the pleura, which can cause sharp chest pain that worsens with breathing or coughing. Pleural effusion is not a disease on its own; it's usually a sign of an underlying condition, which is why identifying the cause is a key part of treatment from a Pleural Effusion Specialist.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/11501479/pexels-photo-11501479.jpeg"
                                alt="Pulmonary Clinical Evaluation and Thoracic Fluid Analysis"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF PLEURAL EFFUSION */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Pleural Effusion
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Symptoms can range from mild to severe depending on how much fluid has built up. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Shortness of breath, especially when lying down",
                                "Sharp chest pain that worsens with deep breathing or coughing (a sign of accompanying pleurisy)",
                                "A dry cough",
                                "A feeling of heaviness or fullness in the chest",
                                "Fever, if the effusion is linked to an infection",
                                "Fatigue"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* WHAT CAUSES PLEURAL EFFUSION */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Background
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            What Causes Pleural Effusion?
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Pleural effusion develops due to an underlying condition that causes fluid to build up around the lungs. Common causes include:
                        </p>

                        <div className="mt-6 space-y-2">
                            {[
                                {
                                    title: "Infections",
                                    desc: "Including pneumonia and tuberculosis, which are among the most common causes."
                                },
                                {
                                    title: "Heart Failure",
                                    desc: "Fluid can build up around the lungs when the heart isn't pumping efficiently."
                                },
                                {
                                    title: "Cancer",
                                    desc: "Including lung cancer or cancer that has spread to the pleura."
                                },
                                {
                                    title: "Liver or Kidney Disease",
                                    desc: "Conditions that affect the body's fluid balance."
                                },
                                {
                                    title: "Autoimmune Conditions",
                                    desc: "Such as rheumatoid arthritis or lupus, which can cause pleurisy and effusion."
                                },
                                {
                                    title: "Injury or Recent Surgery",
                                    desc: "Trauma to the chest can also lead to fluid build-up."
                                }
                            ].map((cause, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">{cause.title} : <span className="font-medium text-[#64748b]">{cause.desc}</span></p>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIAGNOSTIC PANEL */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Investigative Strategy
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Pleural Effusion
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Identifying both the presence of fluid and its underlying cause is essential for the right treatment. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray or CT scan",
                            },
                            {
                                name: "Pleural Aspiration (Thoracentesis), to sample and analyse the fluid",
                                link: "/pleural-aspiration-thoracentesis", // Update with actual slug
                            },
                            {
                                name: "Medical Thoracoscopy, for a closer look inside the pleural space when needed",
                                link: "/medical-thoracoscopy", // Update with actual slug
                            },
                            {
                                name: "Pleural Biopsy, to check for infection, cancer, or other causes",
                                link: "/pleural-biopsy", // Update with actual slug
                            },
                            {
                                name: "Blood tests, to help identify the underlying condition",
                            },
                        ].map((test, index) => (
                            <li key={index} className="flex gap-3 items-start text-xs sm:text-sm font-bold text-[#0f172a] leading-relaxed">
                                <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                {

                                    test.link && test?.link ? (
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
                        Pleural Effusion Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Pleural effusion, fluid buildup around the lungs, is rarely a condition on its own; it's usually a sign of something else going on in the body. Dr. Manish Aggarwal builds the treatment plan around how much fluid has accumulated, what's causing it, and how much it's affecting your breathing, since relieving the fluid and treating its root cause go hand in hand.
                        </p>
                        <p>
                            Immediate relief often comes from draining the fluid, while further evaluation may be needed when the cause isn't clear at first. Alongside this, treatment targets the underlying condition directly, and recurrent cases may need a procedure to prevent fluid from building up again. Since pleural effusion is usually a sign of another condition, ongoing monitoring by your Pleural Effusion Specialist helps make sure the underlying cause is fully addressed.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of pleural effusion is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Pleural Effusion Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Expert Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                About Dr. Manish Aggarwal – Pleural Effusion Specialist
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating pleural effusion, pleurisy, and other lung and breathing-related conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results and underlying cause, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Pleural Effusion Medical Expert"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* CLOSING CONVERSION BAR */}
                <section className="py-8 sm:py-10">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Get the Fluid Drained, Get Your Breath Back
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Draining the fluid can bring fast relief, but finding and treating the underlying cause matters just as much. Get an expert diagnosis and a personalised treatment plan from Dr. Manish Aggarwal, your trusted Pleural Effusion Specialist in Delhi.
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