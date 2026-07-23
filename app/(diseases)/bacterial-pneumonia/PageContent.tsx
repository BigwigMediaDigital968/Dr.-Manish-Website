import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";


const faqs = [
    {
        question: "What is the main cause of bacterial pneumonia?",
        answer: "The most common cause is the bacteria Streptococcus pneumoniae, though other bacteria like Haemophilus influenzae and Mycoplasma pneumoniae can also cause it. It often develops after the body's defences are weakened, such as after a viral infection like the flu, or in people with existing lung conditions."
    },
    {
        question: "How serious is bacterial pneumonia?",
        answer: "Bacterial pneumonia can range from mild to life-threatening. Many people recover well with timely antibiotic treatment, but young children, older adults, and people with weak immunity or existing health conditions can develop serious complications, including very low oxygen levels that need hospital care. This is why early diagnosis and treatment from a Bacterial Pneumonia Specialist matter."
    },
    {
        question: "What are the four stages of bacterial pneumonia?",
        answer: "Bacterial pneumonia typically progresses through four stages: congestion, where the lung tissue becomes heavy and fluid-filled; red hepatization, where the air sacs fill with red blood cells and fluid, giving the lung a firm, red appearance; grey hepatization, where the red blood cells break down and the area turns greyish as white blood cells move in to fight infection; and resolution, where the infection clears and the lung tissue gradually returns to normal."
    },
    {
        question: "What is the difference between regular pneumonia and bacterial pneumonia?",
        answer: "\"Regular pneumonia\" is a general term that can be caused by bacteria, viruses, or fungi, while bacterial pneumonia specifically refers to cases caused by bacteria. Bacterial pneumonia tends to come on more suddenly, with a higher fever and thicker, discoloured mucus, and it's treated with antibiotics, unlike viral pneumonia, which needs antiviral medicines or supportive care instead."
    },
    {
        question: "Is bacterial pneumonia contagious?",
        answer: "Some of the bacteria that cause pneumonia can spread through respiratory droplets, though not everyone exposed will develop pneumonia. People with weaker immune systems, existing lung conditions, or those who are very young or elderly are more likely to get infected after exposure."
    },
    {
        question: "How long does it take to recover from bacterial pneumonia?",
        answer: "With appropriate antibiotics, most people start feeling better within a few days to a week, though full recovery, including fatigue and residual cough, can take several weeks. Recovery time depends on the severity of infection, the bacteria involved, and the patient's overall health."
    }
];

export default function BacterialPneumoniaPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Coughing Up Discoloured Mucus? It Could Be Bacterial Pneumonia"
                description="Do you have a high fever, chills, and a cough that brings up thick, discoloured mucus? This could be bacterial pneumonia, a lung infection that tends to come on suddenly and hit harder than a regular cold or flu. With timely treatment from an experienced Bacterial Pneumonia Specialist, most people recover fully within a few weeks."
                ctaText="Book an Appointment"
                backgroundImage="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS BACTERIAL PNEUMONIA */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Breakdown
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Bacterial Pneumonia?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Bacterial pneumonia happens when bacteria infect the lungs and cause the tiny air sacs to fill up with fluid or pus, making it harder for oxygen to pass into your blood. It usually comes on more suddenly and severely than viral pneumonia, often with a high fever and chills.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Without proper treatment from a Bacterial Pneumonia Specialist, the infection can spread further into the lungs or bloodstream, leading to serious complications.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1332&auto=format&fit=crop"
                                alt="Pulmonary Radiography and Bacterial Infiltration Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & PATHOLOGY */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF BACTERIAL PNEUMONIA */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Manifestations
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Bacterial Pneumonia
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Bacterial pneumonia symptoms tend to appear quickly and can be more intense than other types of pneumonia. Common signs include:
                        </p>

                        <ul className="mt-6 grid grid-cols-1 gap-4">
                            {[
                                "High fever with chills and sweating",
                                "Cough with thick, yellow, green, or blood-tinged mucus",
                                "Sharp chest pain that worsens with breathing or coughing",
                                "Rapid, shallow breathing or shortness of breath",
                                "Fatigue and body weakness",
                                "Confusion, especially in older adults",
                                "Bluish lips or fingertips in severe cases"
                            ].map((symptom, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#0f172a]">{symptom}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CAUSES OF BACTERIAL PNEUMONIA */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Etiological Drivers
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Bacterial Pneumonia
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Bacterial pneumonia develops when bacteria enter the lungs and multiply, often after the body's defences are weakened. Common causes include:
                        </p>

                        <ul className="mt-6 space-y-4">
                            {[
                                {
                                    name: "Streptococcus pneumoniae",
                                    text: "The most common bacterium behind bacterial pneumonia."
                                },
                                {
                                    name: "Haemophilus influenzae",
                                    text: "Another frequent cause, especially in people with chronic lung conditions."
                                },
                                {
                                    name: "Mycoplasma pneumoniae",
                                    text: "Causes a milder form sometimes called \"walking pneumonia\"."
                                },
                                {
                                    name: "Weakened immunity",
                                    text: "From illness, age, or a recent viral infection like flu, which can allow bacteria to take hold."
                                },
                                {
                                    name: "Underlying lung conditions",
                                    text: "Such as COPD or asthma, which increase susceptibility."
                                },
                                {
                                    name: "Hospital exposure",
                                    text: "Certain bacterial strains are more common in hospital settings and can be harder to treat."
                                }
                            ].map((cause, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-[#0f172a]">{cause.name} : <span className="text-sm text-[#64748b] font-medium ">{cause.text}</span></p>
                                    </div>
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
                        Diagnostic Tests for Bacterial Pneumonia
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Confirming that the infection is bacterial and identifying which bacteria are responsible helps guide the right choice of antibiotics from the start. Dr. Manish Aggarwal utilizes the following tests:
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Chest X-ray or CT scan",
                            "Blood oxygen level check (pulse oximetry)",
                            "Arterial Blood Gas (ABG) Analysis",
                            "Sputum culture and blood tests to identify the bacteria"
                        ].map((test, index) => (
                            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <div className="text-xs font-bold text-[#1fa8e8] mb-1">Modality 0{index + 1}</div>
                                <p className="text-sm sm:text-base font-bold text-[#0f172a]">{test}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TREATMENT SECTOR */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Therapeutic Framework
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Bacterial Pneumonia Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Bacterial pneumonia can range from a manageable infection treated at home to a serious illness requiring hospital care, depending on the bacteria involved and the patient's overall health. Dr. Manish Aggarwal tailors treatment to match this range, starting with the right antibiotic for the specific infection while supporting the body through fever, breathlessness, and general recovery.
                        </p>
                        <p>
                            For patients with low oxygen levels or other risk factors, closer monitoring or hospitalisation may be necessary to prevent complications. Even after symptoms improve, follow-up care plays a key role in confirming the infection has fully cleared and the lungs have healed properly.
                        </p>
                    </div>

                    {/* INTERMEDIARY ACTION CENTER */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of bacterial pneumonia is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Bacterial Pneumonia Specialist in Delhi.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* BIOGRAPHY SECTION */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Medical Leadership
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Meet Your Bacterial Pneumonia Specialist in Delhi - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating lung and breathing-related conditions, including bacterial pneumonia. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific symptoms and test results, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Consultant Chest Pulmonologist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* FAQ ACCORDION PANEL */}
                <FAQs faqs={faqs} />

                {/* BOTTOM CONVERSION MAT */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Get Ahead of Bacterial Pneumonia Today
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Don't wait out a high fever or worsening cough. Get an expert diagnosis and a personalised bacterial pneumonia treatment plan from Dr. Manish Aggarwal, your trusted Bacterial Pneumonia Specialist in Delhi.
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