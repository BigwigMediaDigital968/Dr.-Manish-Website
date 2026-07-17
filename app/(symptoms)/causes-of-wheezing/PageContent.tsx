import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "Is wheezing serious?",
    answer:
      "Wheezing can be mild or serious depending on the underlying cause. A short episode after a cold is usually not serious, but wheezing that comes with breathlessness, chest pain, blue lips, or a high fever should be treated as an emergency. If you are unsure, it is always safer to consult a pulmonologist rather than waiting.",
  },
  {
    question: "What can trigger wheezing?",
    answer:
      "Common triggers include cold air, dust, smoke, strong perfumes, pet hair, pollen, viral infections, exercise, and acid reflux. Identifying your personal trigger is an important part of understanding the reason for wheezing and preventing future episodes.",
  },
  {
    question: "Which deficiency causes wheezing?",
    answer:
      "Low levels of vitamin D have been linked in some studies to a higher risk of asthma and wheezing episodes, since vitamin D plays a role in keeping the immune system and airway function balanced. However, a deficiency alone is rarely the only reason for wheezing, and it should be checked alongside other possible causes by a doctor.",
  },
  {
    question: "What is the root cause of wheezing?",
    answer:
      "At its core, the root cause of wheezing is the narrowing of the airways, which can happen due to inflammation, muscle tightening, mucus buildup, or blockage. The exact cause of wheezing behind this narrowing differs from person to person, which is why a proper medical evaluation is the only reliable way to know what is truly causing your symptoms.",
  },
  {
    question: "Does wheezing mean asthma?",
    answer:
      "Not always. Wheezing is often linked to asthma, but infections, allergies, acid reflux, and other lung conditions can cause the same sound. A proper checkup helps find out which one applies to you.",
  },
  {
    question: "Can wheezing go away on its own?",
    answer:
      "Mild wheezing caused by a common cold may clear up on its own within a few days. But if it keeps coming back or lasts longer than a week, it usually points to an underlying cause that needs attention.",
  },
  {
    question: "Is wheezing the same as coughing?",
    answer:
      "No, they are different. Coughing is a forceful push of air to clear your throat or airways, while wheezing is a whistling sound that happens when your airways are narrowed. Some people experience both together.",
  },
  {
    question: "Can stress cause wheezing?",
    answer:
      "Yes, stress can tighten the muscles around your airways, making it harder to breathe. This is especially common in people who already have asthma or sensitive airways.",
  },
  {
    question: "Does wheezing happen only in the chest?",
    answer:
      "Not always. While most wheezing comes from the chest, it can also come from the throat, particularly when the vocal cords do not open properly during breathing.",
  },
  {
    question: "Can children outgrow wheezing?",
    answer:
      "Some children do outgrow wheezing as their airways widen with age. However, it is still important to have a doctor check the cause, since some childhood wheezing continues into adulthood if left untreated.",
  },
];

export default function PageContent() {
    return (
        <>
            <ServiceHero
                title="Causes of Wheezing: Understanding the Reason for Wheezing Sound While Breathing"
                description={<>
                    Hearing a high-pitched whistle when you breathe in or out? You're not alone, and it's not something to ignore. Wheezing happens when your airways narrow, swell, or get blocked, making it hard for air to flow smoothly. Knowing the cause is the first step to breathing easier again. <br /> Dr. Manish Aggarwal, a practicing pulmonologist, breaks down the common causes of wheezing in plain, easy-to-understand language.</>}
                ctaText="Book an Appointment"
                backgroundImage="/services/causes-of-wheezing.png"
            />

            <div className="max-w-7xl mx-auto px-4">
                {/* WHAT IS SPUTUM */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Airway Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Is Wheezing and What Does the Wheezing Sound While Breathing Actually Mean?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Wheezing is a musical, whistling, or squeaky sound that comes from your chest or throat while you breathe. Some people describe the wheezing sound while breathing as similar to air being squeezed out of a balloon. This sound happens because your airways, the small tubes that carry air in and out of your lungs, have become tighter than normal.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                You may notice the wheezing sound while breathing more clearly when you breathe out, but in more serious cases, it can happen while breathing in as well. If the wheezing sound while breathing is new, sudden, or getting louder, it is a sign that something inside your airways needs attention, and it should not be ignored.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1626697556342-2310dbc55428?q=80&w=1170&auto=format&fit=crop"
                                alt="Understanding Sputum Causes"
                                className="w-full h-[300px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                            />
                        </div> */}
                    </div>
                </div>

                {/* COUGH AS FIRST SYMPTOM */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Primary Indicators
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Causes of Wheezing: What Could Be Behind Your Symptoms
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There is not just one reason for wheezing. The causes of wheezing can range from mild, temporary issues to conditions that need ongoing medical care. Below are the most common causes of wheezing that Dr. Manish Aggarwal sees in his clinic every day.
                        </p>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Asthma (Allergic Bronchitis)",
                                    description: (
                                        <>
                                            This is one of the most well-known causes of wheezing. In asthma, the airways become inflamed and swollen, and the muscles around them tighten. This makes breathing feel like sucking air through a narrow straw, and it is often the main reason for wheezing in both children and adults, especially during cold weather, exercise, or exposure to dust and smoke.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Bronchiectasis",
                                    description: (
                                        <>
                                            When the tubes carrying air to your lungs get infected, inflamed, and widened over time, wheezing can become a recurring problem. This swelling and narrowing is a common reason for wheezing, and it usually comes along with a persistent cough, mucus, and a tight feeling in the chest.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "COPD (Chronic Obstructive Pulmonary Disease)",
                                    description: (
                                        <>
                                            COPD is a long-term lung condition, usually linked to smoking or long exposure to polluted air, where the airways become damaged over time. It is a serious reason for wheezing in older adults, and it needs proper diagnosis and long-term management from a pulmonologist.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Viral Pneumonia (Flu, Influenza, H1N1, COVID-19)",
                                    description: (
                                        <>
                                            The common cold, flu, and viral chest infections can all lead to swollen airways and mucus buildup, both of which are frequent causes of wheezing, particularly in young children and elderly patients.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "Pleural Effusion / Pulmonary Edema",
                                    description: (
                                        <>
                                            In some cases, especially in older adults, fluid buildup around or inside the lungs due to heart problems can also be one of the causes of wheezing. This is why a proper checkup is important instead of guessing the reason on your own.
                                        </>
                                    ),
                                    href: "#",
                                },
                                {
                                    title: "A Foreign Object Stuck in the Airway",
                                    description: (
                                        <>
                                            This is more common in small children who may accidentally swallow or inhale a small toy or piece of food. It is a sudden and urgent reason for wheezing that needs emergency medical attention right away.
                                        </>
                                    ),
                                },
                                {
                                    title: "Vocal Cord Problems",
                                    description: (
                                        <>
                                            Sometimes the vocal cords do not open properly while breathing, causing a wheezing sound that is often mistaken for asthma. A pulmonologist can help tell the difference through proper testing.
                                        </>
                                    ),
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
                            ))}
                            <div className="sm:col-span-2 flex flex-col items-center text-center mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                                <h4 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                                    Not Sure Which Cause Applies to You? Get a Proper Diagnosis
                                </h4>
                                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                    Wheezing lasting more than a week, wheezing along with cough or mucus, wheezing after meals or while lying down, or a family history of asthma or allergies. Book a slot with Dr. Manish Aggarwal for same-day spirometry and next-day allergy testing to pinpoint the exact cause behind your symptoms.
                                </p>
                                <div className="mt-6">
                                    <BookAppointmentButton cta="Request a Callback" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">


                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Is Wheezing Serious? When Should You Worry?

                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Wheezing is not always serious, but it should never be ignored completely. A soft wheezing sound while breathing that goes away on its own after a cold may not need urgent care. However, wheezing can become serious when it is:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {[
                                "Sudden and severe",
                                "Getting worse instead of better",
                                "Happening along with difficulty speaking full sentences",
                                "Accompanied by blue lips or fingertips",
                                "Occurring with chest pain or a high fever",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">

                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            If you notice any of these signs, please treat it as a medical emergency and seek immediate help rather than waiting to search for answers online
                        </p>
                    </div>
                </section>

                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">


                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            When Should You See a Pulmonologist?

                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            If your wheezing keeps coming back, lasts for more than a few days, or is affecting your sleep, work, or daily activities, it is time to speak with a specialist instead of guessing the reason for wheezing on your own. Dr. Manish Aggarwal uses proper lung function tests, a detailed health history, and years of clinical experience to find the exact cause of wheezing behind your symptoms and create a treatment plan suited to you.                        </p>



                        <div className="mt-8 flex justify-center">
                            <BookAppointmentButton cta="Consult Dr. Manish Aggarwal Today" />
                        </div>
                    </div>
                </section>

                {/* ABOUT DR. MANISH AGGARWAL */}
                
                                <section className="pt-16 pb-6">
                                    <div className="max-w-7xl mx-auto">
                
                                        <div className="relative overflow-hidden rounded-3xl border border-[#1fa8e8]/15 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 sm:p-8 lg:p-10">
                
                                            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#1fa8e8]/5 blur-3xl" />
                                            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#1fa8e8]/5 blur-3xl" />
                
                                            <div className="relative ">
                
                                                <div className="">
                
                                                
                
                                                    <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                                                        About Dr. Manish Aggarwal, Your Trusted Pulmonologist
                                                    </h2>
                
                                                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                                        Dr. Manish Aggarwal is a practicing pulmonologist who has spent years diagnosing and treating patients with breathing-related conditions, including chronic wheezing, asthma, bronchitis, and COPD. His approach focuses on identifying the actual reason for wheezing in each patient rather than offering generic treatment, using proper diagnostic tools combined with years of clinical experience. Patients trust Dr. Aggarwal for clear explanations, honest guidance, and treatment plans built around their specific condition and lifestyle.

                                                    </p>
                
                                                </div>
                
                                            </div>
                                        </div>
                
                                    </div>
                                </section>

               

                {/* FAQ SECTION */}
                <FAQs faqs={faqs} />


                 {/* INTERVENTIONAL CTA */}
                <div className="mx-auto py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-10 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Stop Guessing. Start Breathing Better.
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
You do not have to keep guessing the reason for wheezing on your own. With the right diagnosis and expert care from Dr. Manish Aggarwal, you can understand exactly what is causing your symptoms and start breathing comfortably again.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <BookAppointmentButton cta="Book Your Consultation Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}