import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";


const faqs = [
    {
        question: "What is the main cause of pneumothorax?",
        answer: "Pneumothorax is most commonly caused by a small air-filled sac on the lung's surface bursting, which can happen without any underlying lung disease, especially in tall, thin, young individuals and smokers. It can also be caused by existing lung conditions like COPD, or by an injury to the chest."
    },
    {
        question: "Is pneumothorax life-threatening?",
        answer: "It can be, especially a tension pneumothorax, which is a medical emergency that needs immediate treatment. Smaller pneumothoraces are less urgent and may even resolve on their own with monitoring, but any sudden chest pain with breathlessness should be evaluated promptly to rule out a more serious case."
    },
    {
        question: "Which are the two main types of pneumothorax?",
        answer: "The two main types are spontaneous pneumothorax, which happens without an injury and is further divided into primary and secondary types, and traumatic pneumothorax, which is caused by an injury to the chest. A tension pneumothorax is a rare, severe form of either type that requires emergency treatment."
    },
    {
        question: "Who is at risk for pneumothorax?",
        answer: "People at higher risk include tall, thin, young individuals, smokers, people with existing lung conditions like COPD or asthma, those who have had a previous pneumothorax, and anyone who experiences a significant chest injury. A family history of pneumothorax can also increase the risk in some cases."
    },
    {
        question: "Can pneumothorax happen again after treatment?",
        answer: "Yes, pneumothorax, particularly the spontaneous type, has a meaningful chance of recurring, especially in the first year or two after the first episode. This is why follow-up care and, in some cases, surgery to prevent recurrence are recommended for patients with repeated episodes."
    },
    {
        question: "When should I go to the emergency room for chest pain and breathlessness?",
        answer: "If you experience sudden, sharp chest pain along with breathlessness, especially if it's severe, worsening, or accompanied by a bluish tinge to your lips or skin, seek emergency care immediately rather than waiting, since this could indicate a serious or life-threatening pneumothorax."
    }
];

export default function PneumothoraxPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="One Moment Fine, the Next Can't Breathe? Understanding Pneumothorax"
                description="Have you had a sudden, sharp chest pain along with breathlessness that came on out of nowhere? This could be a pneumothorax, often described as a lung rupture or collapsed lung, in which air leaks into the space around the lung, causing it to partially or fully collapse. This is often a medical emergency, and prompt evaluation by an experienced Pneumothorax Specialist is essential."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS PNEUMOTHORAX */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Emergency Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Pneumothorax?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Pneumothorax happens when air leaks into the space between the lung and the chest wall, causing the lung to partially or fully collapse. It's commonly referred to as a lung rupture, since it often occurs when a small air-filled sac on the lung's surface bursts, or when an injury allows air to enter this space.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                As air builds up, it puts pressure on the lung, making it harder to breathe. Some cases are small and resolve on their own, while others need urgent treatment from a Pneumothorax Specialist to release the trapped air and allow the lung to re-expand.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/4226257/pexels-photo-4226257.jpeg"
                                alt="Emergency Pulmonary Care and Collapsed Lung Diagnosis"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF PNEUMOTHORAX */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Presentation
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Pneumothorax
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Symptoms usually appear suddenly and can range from mild to severe depending on how much of the lung has collapsed. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Sudden, sharp chest pain, often worse on one side",
                                "Shortness of breath that comes on suddenly",
                                "Rapid heartbeat (tachycardia)",
                                "A dry cough",
                                "A bluish tinge to the skin or lips in severe cases, indicating low oxygen levels",
                                "Fatigue or a feeling of tightness in the chest"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES AND TYPES */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Background
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes and Types of Pneumothorax
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Pneumothorax can happen with or without an obvious injury, and is generally grouped into two main types:
                        </p>

                        <div className="mt-6 space-y-2">
                            {[
                                {
                                    title: "Primary Spontaneous Pneumothorax",
                                    desc: "Occurs in people without any known underlying lung disease, often due to a small air-filled sac (bleb) on the lung surface bursting. It is more common in tall, thin, young individuals and smokers."
                                },
                                {
                                    title: "Secondary Spontaneous Pneumothorax",
                                    desc: "Occurs in people with existing lung conditions like COPD, asthma, or interstitial lung disease, where the weakened lung tissue is more prone to rupture."
                                },
                                {
                                    title: "Traumatic Pneumothorax",
                                    desc: "Caused by an injury to the chest, such as a fall, accident, or a rib fracture."
                                },
                                {
                                    title: "Tension Pneumothorax",
                                    desc: "A rare but life-threatening type where air keeps building up with no way to escape, putting severe pressure on the heart and lungs."
                                }
                            ].map((type, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">{type.title} : <span className="font-normal text-[#64748b]">{type.desc}</span></p>
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
                        Diagnostic Tests for Pneumothorax
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming a pneumothorax quickly and assessing how much of the lung has collapsed is essential for deciding the right treatment. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray, usually the first and fastest test to confirm the diagnosis",
                            },
                            {
                                name: "CT scan of the chest, for a more detailed look, especially in less obvious cases",
                            },
                            {
                                name: "Blood oxygen level check (pulse oximetry)",
                            },
                            {
                                name: "Arterial Blood Gas (ABG) Analysis, to check how well the lungs are getting oxygen into the blood",
                            },
                        ].map((test:{name:string; link?:string}, index) => (
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
                <section className="pt-6 sm:pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Management
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Pneumothorax Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            A pneumothorax, or collapsed lung, can range from a small pocket of trapped air that resolves on its own to a life-threatening emergency needing immediate action. Dr. Manish Aggarwal decides the right treatment based on the size of the pneumothorax, your symptoms, and whether it's a first episode or a recurrence, since this range calls for very different levels of intervention.
                        </p>
                        <p>
                            Smaller cases are often just observed as the air reabsorbs naturally, while larger ones may need air removed directly or drained continuously through a chest tube, with oxygen therapy supporting the process throughout. Recurrent cases may require surgery to address the underlying air leak, and a tension pneumothorax demands emergency treatment without delay. Since pneumothorax can recur, especially the spontaneous type, follow-up care with your Pneumothorax Specialist helps monitor for any signs of it happening again.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Don't Ignore Sudden Chest Pain
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            A pneumothorax needs prompt evaluation. Get expert care from Dr. Manish Aggarwal, your trusted Pneumothorax Specialist in Delhi.
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
                                Meet Your Pneumothorax Specialist in Delhi - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating pneumothorax and other lung and breathing-related conditions. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific severity and risk of recurrence, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* CLOSING CONVERSION BAR */}
                <section className="py-8 sm:py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    This Isn't One to Wait Out
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Sudden chest pain and breathlessness need prompt evaluation, not a wait-and-see approach. Get expert diagnosis and timely treatment from Dr. Manish Aggarwal, your trusted Pneumothorax Specialist in Delhi.
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