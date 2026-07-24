import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are the symptoms of a bronchial carcinoid tumor?",
    answer:
      "Common symptoms include a persistent cough, wheezing, coughing up blood, recurrent chest infections in the same part of the lung, shortness of breath, and chest pain. In rare cases where the tumor releases hormones, patients may experience flushing, diarrhoea, or a rapid heartbeat."
  },
  {
    question: "Is a carcinoid tumor considered cancer?",
    answer:
      "Yes, a bronchial carcinoid tumor is technically a type of cancer, but it behaves very differently from more aggressive lung cancers. Most carcinoid tumors grow slowly, rarely spread, and have a much better outlook, which is why they're often described as low-grade."
  },
  {
    question: "What is the prognosis for a carcinoid tumor in the lungs?",
    answer:
      "The prognosis for bronchial carcinoid tumors is generally very good, especially for typical carcinoids that are diagnosed early and removed with surgery. Atypical carcinoids carry a slightly higher chance of recurrence or spread, so ongoing follow-up is recommended. A Bronchial Carcinoid Tumor Specialist can give a more personalised outlook based on your specific tumor type and test results."
  },
  {
    question: "What is the life expectancy of a carcinoid tumor?",
    answer:
      "Life expectancy for most patients with a typical bronchial carcinoid tumor is excellent, often similar to that of the general population, particularly after successful surgical removal. Atypical carcinoids or those diagnosed at a later stage may have a somewhat different outlook, so it's best to discuss your specific case with a specialist."
  },
  {
    question: "Can a bronchial carcinoid tumor spread to other organs?",
    answer:
      "It's uncommon, but atypical carcinoid tumors carry a higher risk of spreading compared to typical carcinoids. This is why identifying the exact tumor type through biopsy is an important part of planning treatment and follow-up."
  },
  {
    question: "Should I see a specialist if I have a persistent cough with recurrent infections?",
    answer:
      "Yes, a cough that doesn't go away, especially alongside repeated chest infections in the same area or coughing up blood, should be evaluated by a pulmonologist. Early evaluation helps identify the cause, including rare conditions like bronchial carcinoid tumors, and allows for timely treatment."
  }
];

export default function SmallCellLungCarcinomaPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Mistaken for Asthma for Years? It Could Be a Bronchial Carcinoid Tumor"
                description="Have you been told you have a growth in your airway, or are you experiencing a persistent cough, wheezing, or recurrent chest infections that aren't clearing up? This could be a bronchial carcinoid tumor, a rare and usually slow-growing type of lung tumor. With the right evaluation and treatment from an experienced Bronchial Carcinoid Tumor Specialist, most patients have excellent outcomes."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/29702929/pexels-photo-29702929.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS SCLC */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oncology Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is a Bronchial Carcinoid Tumor?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                A bronchial carcinoid tumor is a rare type of lung tumor that develops from hormone-producing cells in the airway lining. Unlike more common lung cancers, carcinoid tumors usually grow slowly and rarely spread to other parts of the body, which is why they're often described as low-grade. They're generally classified as typical or atypical, with typical carcinoids growing more slowly and atypical ones behaving slightly more aggressively.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Because these tumors grow inside the airway, they can sometimes block airflow and lead to repeated infections in the affected part of the lung. Evaluation by a Bronchial Carcinoid Tumor Specialist helps confirm the diagnosis and decide the right treatment approach early.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.pexels.com/photos/4226259/pexels-photo-4226259.jpeg"
                                alt="Bronchial Carcinoid Tumor"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & CAUSES */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF SCLC */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Signs
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of a Bronchial Carcinoid Tumor
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Symptoms often develop gradually and can be mistaken for asthma or a lingering chest infection. Common signs include:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Persistent cough",
                                "Wheezing, particularly if the tumor is partially blocking an airway",
                                "Coughing up blood or blood-tinged mucus",
                                "Recurrent chest infections in the same part of the lung",
                                "Shortness of breath",
                                "Chest pain",
                                "Flushing, diarrhoea, or rapid heartbeat in rare cases where the tumor releases hormones (carcinoid syndrome)"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                                    {symptom}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES AND RISK FACTORS */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Background
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes and Risk Factors for Bronchial Carcinoid Tumor
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            The exact cause of bronchial carcinoid tumors isn't fully understood, but certain factors are associated with a higher risk:
                        </p>

                        <ul className="mt-6 space-y-4">
                            {[
                                {
                                    title: "Age",
                                    desc: "Most commonly diagnosed in adults between 40 and 60 years, though it can occur at any age."
                                },
                                {
                                    title: "Genetic Conditions",
                                    desc: "A condition called Multiple Endocrine Neoplasia type 1 (MEN1) is linked to a higher risk."
                                },
                                {
                                    title: "Smoking",
                                    desc: "Less strongly linked than with other lung cancers, but may play a role in some atypical carcinoid cases."
                                },
                                {
                                    title: "Unknown Factors",
                                    desc: "In most patients, no clear cause is identified."
                                }
                            ].map((factor, index) => (
                                <li key={index} className="flex gap-3 items-start pb-2 last:pb-0">
                                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                                    <p className="text-sm font-bold text-[#0f172a]">{factor.title} : <span className="font-medium text-[#64748b]">{factor.desc}</span></p>
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
                        Diagnostic Tests for Small Cell Lung Carcinoma
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming SCLC and identifying how far it has spread is essential for choosing the right treatment approach. Dr. Manish Aggarwal uses the following tests:
                    </p>

                    <ul className="mt-6 space-y-3 pl-2 md:pl-8">
                        {[
                            {
                                name: "Chest X-ray or CT scan",
                            },
                            {
                                name: "Bronchoscopy to directly visualise the tumour in the airway",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "Transbronchial Lung Biopsy to sample tissue",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "EBUS (Endobronchial Ultrasound) to examine nearby lymph nodes",
                                link: "#", // Update with actual slug
                            },
                            {
                                name: "PET-CT scan, when needed, to check for any spread",
                            },
                            {
                                name: "Pulmonary Function Test (PFT) to assess lung capacity before treatment",
                                link: "#", // Update with actual slug
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
                <section className="pt-10 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Clinical Management
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Bronchial Carcinoid Tumor Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Bronchial carcinoid tumors are slow-growing and generally carry a better outlook than other lung cancers when caught and treated early. Dr. Manish Aggarwal plans treatment around the tumour's size, location, and type, particularly whether it's typical or atypical, as this shapes both the approach and the risk of recurrence.
                        </p>
                        <p>
                            Surgery remains the mainstay of treatment, aiming to remove the tumour while preserving healthy lung tissue, though select cases may be treated through bronchoscopy instead. Since these tumours are slow-growing, long-term follow-up with your Bronchial Carcinoid Tumor Specialist helps ensure early detection if it ever returns.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CARD */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h4>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of bronchial carcinoid tumor is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Bronchial Carcinoid Tumor Specialist in Delhi. 

                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* SPECIALIST PROFILE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Lead Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Dr. Manish Aggarwal, Your Bronchial Carcinoid Tumor Specialist
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and managing lung tumors, including bronchial carcinoid tumors. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians. 

                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* BOTTOM CONVERSION BAR */}
                <section className="py-10 sm:py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Get the Answer Behind That Recurring Infection
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Most bronchial carcinoid tumors are slow-growing and respond very well to treatment. Get an expert diagnosis and a personalised plan from Dr. Manish Aggarwal, your trusted Bronchial Carcinoid Tumor Specialist in Delhi.
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