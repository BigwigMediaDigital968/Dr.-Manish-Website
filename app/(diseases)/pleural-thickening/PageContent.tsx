import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
    {
        question: "Is pleural thickening serious?",
        answer: "It depends on the extent and underlying cause. Mild pleural thickening found incidentally on a scan is often not serious and doesn't need active treatment, but more extensive thickening that restricts lung expansion, or thickening linked to a serious underlying cause, needs proper evaluation and follow-up."
    },
    {
        question: "How do you treat pleural thickening?",
        answer: "Treatment depends on the cause and extent of the thickening. Mild, stable cases are often just monitored with periodic imaging, while treatment for cases linked to an active infection or autoimmune condition focuses on managing that underlying cause. In rare cases with significant lung restriction, pulmonary rehabilitation or surgery may be considered."
    },
    {
        question: "What is the life expectancy of someone with pleural thickening?",
        answer: "For most people, pleural thickening alone doesn't affect life expectancy, especially when it's mild and stable. The outlook depends much more on the underlying cause, such as whether it's linked to a past infection, asbestos exposure, or another condition. A Pleural Thickening Specialist can give a clearer picture based on your specific scan findings and history."
    },
    {
        question: "Does TB cause pleural thickening?",
        answer: "Yes, tuberculosis is one of the common causes of pleural thickening, particularly when it has involved the pleura or caused a pleural effusion in the past. If you have a history of TB and pleural thickening is found on a scan, it's often related, though your specialist will confirm this based on your specific case."
    },
    {
        question: "Can pleural thickening go away on its own?",
        answer: "Pleural thickening caused by scarring is usually permanent, since it represents old scar tissue rather than active inflammation. However, if it's linked to an active cause, such as an ongoing infection, treating that condition can prevent further thickening, even though existing scarring typically remains."
    },
    {
        question: "Should I be worried if pleural thickening is found on my scan?",
        answer: "Not necessarily. Pleural thickening is a common incidental finding, and in most cases, it doesn't indicate anything serious. That said, it's worth getting it evaluated by a pulmonologist to understand the likely cause and confirm it doesn't need any further action."
    }
];

export default function PleuralThickeningPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="&ldquo;Pleural Thickening&rdquo; on Your Scan Report? Here's What It Actually Means"
                description="Was pleural thickening mentioned on your chest scan report? This refers to the pleura, the thin lining around your lungs, becoming thicker than normal, often due to past infection, inflammation, or exposure to certain substances. While it can sound concerning, an evaluation by an experienced Pleural Thickening Specialist can help you understand exactly what it means for you and whether any treatment is needed."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/7579819/pexels-photo-7579819.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS PLEURAL THICKENING */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Radiological Discovery
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Pleural Thickening?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Pleural thickening happens when the pleura, the thin membrane surrounding the lungs and lining the chest wall, becomes thicker than usual, often as a result of scarring from a past infection, inflammation, or exposure to irritants like asbestos.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                In many cases, pleural thickening is a finding that doesn't cause any symptoms and doesn't need active treatment. In other cases, especially when it's more extensive, it can restrict how well the lungs expand and lead to breathlessness. A proper evaluation by a Pleural Thickening Specialist helps determine which category your case falls into.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/7579820/pexels-photo-7579820.jpeg"
                                alt="Pulmonary Imaging Assessment and Thoracic Fibrosis Analysis"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF PLEURAL THICKENING */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Signs
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Pleural Thickening
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Mild pleural thickening often causes no symptoms at all and is found incidentally on a scan. When more extensive thickening is present, symptoms may include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Shortness of breath, especially during physical activity",
                                "Chest discomfort or a feeling of tightness",
                                "A persistent cough",
                                "Reduced exercise tolerance",
                                "Fatigue"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES OF PLEURAL THICKENING */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Profile
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Pleural Thickening
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Pleural thickening develops as a result of scarring or inflammation in the pleura. Common causes include:
                        </p>

                        <div className="mt-6 space-y-2">
                            {[
                                {
                                    title: "Past Infections",
                                    desc: "Such as tuberculosis or pneumonia that involved the pleura."
                                },
                                {
                                    title: "Asbestos Exposure",
                                    desc: "Long-term exposure to asbestos is a well-known cause, particularly in people with a history of occupational exposure."
                                },
                                {
                                    title: "Pleural Effusion",
                                    desc: "A resolved fluid build-up around the lung can sometimes leave behind areas of thickening."
                                },
                                {
                                    title: "Autoimmune Conditions",
                                    desc: "Such as rheumatoid arthritis, which can cause inflammation of the pleura over time."
                                },
                                {
                                    title: "Previous Chest Surgery or Injury",
                                    desc: "Can lead to localised scarring and thickening."
                                }
                            ].map((type, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">
                                        {type.title} :{" "}
                                        <span className="font-normal text-[#64748b]">
                                            {type.desc}
                                        </span>
                                    </p>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIAGNOSTIC PANEL */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Investigative Protocol
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Pleural Thickening
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming pleural thickening and understanding its likely cause and extent helps decide whether monitoring or further evaluation is needed. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray or CT scan, to confirm and measure the extent of thickening",
                            },
                            {
                                name: "Pulmonary Function Test (PFT), to check how much the thickening is affecting lung capacity",
                                link: "/pulmonary-function-test", // Update with actual slug
                            },
                            {
                                name: "Pleural Aspiration, if any associated fluid needs to be tested",
                                link: "/pleural-aspiration", // Update with actual slug
                            },
                            {
                                name: "Medical Thoracoscopy, for direct visualisation of the pleura",
                                link: "/medical-thoracoscopy", // Update with actual slug
                            },
                            {
                                name: "Pleural Biopsy, when needed to rule out a more serious underlying cause",
                                link: "/pleural-biopsy", // Update with actual slug
                            },
                        ].map((test: { name: string; link?: string }, index) => (
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
                        Clinical Management
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Pleural Thickening Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Pleural thickening is usually found incidentally on imaging, often the lasting trace of a past infection rather than an active problem. Dr. Manish Aggarwal decides the right approach based on the extent of thickening, its likely cause, and whether it's affecting your breathing, since most cases call for observation rather than intervention.
                        </p>
                        <p>
                            Mild, stable thickening is typically just monitored, while thickening linked to an ongoing cause, such as tuberculosis or an autoimmune condition, is managed by treating that condition directly. Surgery is reserved for rare cases where extensive thickening meaningfully restricts lung expansion. Since pleural thickening is often stable rather than active disease, regular follow-up with your Pleural Thickening Specialist helps confirm it stays that way.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get Your Scan Findings Explained
                        </h4>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Understand exactly what your pleural thickening means and whether it needs treatment. Get evaluated by Dr. Manish Aggarwal, your trusted Pleural Thickening Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* CLINICAL SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Lead Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Your Pleural Thickening Specialist in Delhi - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and managing pleural thickening and other chest conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and helping patients understand incidental scan findings without unnecessary worry, while building a treatment plan around each patient's specific test results.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Chest Disease Specialist in Delhi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* CLOSING CONVERSION BAR */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Get the Full Picture, Not Just the Report
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Most cases of pleural thickening are mild and don't need treatment, but only an evaluation can confirm that for you. Consult Dr. Manish Aggarwal, your trusted Pleural Thickening Specialist in Delhi.
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