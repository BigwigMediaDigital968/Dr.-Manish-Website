import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

// Metadata configuration exported for Next.js SEO optimization
export const metadata = {
    title: "What Is Viral Pneumonia? Guide by Dr. Manish Aggarwal",
    description: "Persistent fever, cough or breathlessness? Learn about viral pneumonia (flu, H1N1, COVID-19) and get expert treatment from Dr. Manish Aggarwal in Delhi.",
    keywords: ["viral pneumonia", "viral pneumonia treatment", "viral pneumonia treatment Delhi", "flu pneumonia treatment", "influenza pneumonia", "H1N1 pneumonia specialist", "COVID-19 pneumonia doctor", "pulmonologist for pneumonia Delhi"]
};

const faqs = [
    {
        question: "How serious is viral pneumonia?",
        answer: "Viral pneumonia can range from mild to life-threatening. Many healthy adults recover with rest and supportive care at home, but young children, older adults, pregnant women, and people with existing health conditions can develop serious complications, including very low oxygen levels that need hospital care. This is why timely viral pneumonia treatment and monitoring matter, especially if symptoms are getting worse instead of better."
    },
    {
        question: "What is the cause of viral pneumonia?",
        answer: "Viral pneumonia is caused by a virus infecting the lungs, most commonly the influenza (flu) virus, H1N1 virus, or the COVID-19 virus. Other viruses, such as RSV and parainfluenza, can also cause it, particularly in children and older adults. The virus inflames the air sacs in the lungs and causes them to fill with fluid, which is what leads to breathing difficulty."
    },
    {
        question: "How do you treat viral pneumonia?",
        answer: "Treatment depends on the specific virus involved and how severe the infection is. It often includes antiviral medicines, oxygen support if blood oxygen levels are low, fever and symptom management, plenty of rest and fluids, and close monitoring for complications. Severe cases may need hospital admission. Dr. Manish Aggarwal decides the right combination based on your test results and symptoms."
    },
    {
        question: "Is viral pneumonia contagious?",
        answer: "Yes, viral pneumonia is contagious, since it is caused by viruses like flu, H1N1, and COVID-19 that spread through respiratory droplets when an infected person coughs, sneezes, or talks. Washing your hands often, wearing a mask around sick individuals, and staying home while unwell can help reduce the spread to others."
    },
    {
        question: "How long does viral pneumonia last?",
        answer: "Most people start feeling better within one to two weeks with proper care, though a lingering cough and tiredness can last longer. Recovery time depends on the virus involved, your age, and your overall health, so some patients may need a longer course of viral pneumonia treatment and follow-up."
    },
    {
        question: "Can viral pneumonia turn into bacterial pneumonia?",
        answer: "Yes, a viral infection can sometimes weaken the lungs enough for bacteria to cause a second infection on top of it. This is called a secondary bacterial pneumonia and usually needs antibiotics along with continued monitoring by your pulmonologist."
    },
    {
        question: "What is the difference between viral and bacterial pneumonia?",
        answer: "Viral pneumonia is caused by viruses such as flu, H1N1, or COVID-19, while bacterial pneumonia is caused by bacteria and often comes on more suddenly with higher fever. The two need different treatments, since antibiotics work only on bacterial infections and not on viruses, which is why an accurate diagnosis is important before starting treatment."
    },
    {
        question: "Should I get vaccinated against viral pneumonia?",
        answer: "Yes, annual flu vaccination and staying up to date with COVID-19 vaccines can lower your risk of developing viral pneumonia or reduce how severe it becomes if you do get infected. This is especially recommended for older adults, young children, and people with existing lung or heart conditions."
    }
];

export default function ViralPneumoniaPage() {
    return (
        <>
            {/* HERO SECTION */}
            <ServiceHero
                title="Fever Won't Break? It Could Be Viral Pneumonia"
                description="Do you have a fever that won't break, a cough that keeps getting worse, and a feeling that you cannot catch your breath? This could be viral pneumonia, a lung infection caused by viruses such as the flu, influenza, H1N1, or COVID-19. With timely treatment, most people recover fully, though some cases need closer medical attention."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* WHAT IS VIRAL PNEUMONIA */}
                <section className="pt-12 sm:pt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Disease Breakdown
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                                What Is Viral Pneumonia?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Viral pneumonia happens when a virus infects your lungs and causes the tiny air sacs inside them to fill up with fluid or pus. This makes it harder for oxygen to pass into your blood, which is why breathing feels difficult.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                It is different from bacterial pneumonia, since it is caused by viruses rather than bacteria, and it often needs a different approach to treatment. Without proper viral pneumonia treatment, symptoms can worsen quickly, especially in young children, older adults, and people with weak immunity.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1587314212532-3afd86d69736?q=80&w=1170&auto=format&fit=crop"
                                alt="Pulmonary Inflammation and Alveolar Diagnostics"
                                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* SYMPTOMS & PATHOLOGY */}
                <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">

                    {/* SYMPTOMS OF VIRAL PNEUMONIA */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Clinical Signs
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Symptoms of Viral Pneumonia
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Symptoms can range from mild to severe and often start off looking like the flu or a common cold. Common signs include:
                        </p>

                        <ul className="mt-6 grid grid-cols-1 gap-4">
                            {[
                                "Fever that doesn't break easily",
                                "Persistent, worsening cough",
                                "Shortness of breath or rapid breathing",
                                "Chest pain, especially when breathing deeply or coughing",
                                "Chills and muscle aches",
                                "Fatigue and general weakness",
                                "Bluish lips or fingertips in severe cases, a sign of low oxygen levels"
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

                    {/* CAUSES OF VIRAL PNEUMONIA */}
                    <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Viral Pathogens
                        </span>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                            Causes of Viral Pneumonia
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Viral pneumonia is caused by a virus infecting the lungs. Common viruses behind this condition include:
                        </p>

                        <ul className="mt-6 space-y-4">
                            {[
                                { name: "Influenza (Flu) Virus", text: "One of the most common causes, especially during flu season" },
                                { name: "H1N1 Virus Strain", text: "A strain of influenza known for causing more severe respiratory illness." },
                                { name: "COVID-19 Virus", text: "Can cause pneumonia ranging from mild to severe." },
                                { name: "RSV (Respiratory Syncytial Virus)", text: "Particularly common in young children and older adults." },
                                { name: "Parainfluenza Virus", text: "Another respiratory virus that can lead to pneumonia, especially in vulnerable groups." }
                            ].map((cause, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#0f172a]">{cause.name}</h3>
                                        <p className="text-xs text-[#64748b] leading-relaxed mt-0.5">{cause.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DIAGNOSTIC SUITE */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Differential Assessment
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Diagnostic Tests for Viral Pneumonia
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        The first step is identifying which virus is causing the infection and how much of the lung is affected. This helps rule out bacterial pneumonia and other lung conditions before treatment begins. Dr. Manish Aggarwal uses the following tests:                    </p>

                    <div className="mt-4 gap-6 pl-4 sm:pl-6">
                        {[
                            "Chest X-ray or CT scan",
                            "Blood oxygen level check (pulse oximetry)",
                            "Arterial Blood Gas (ABG) Analysis",
                            "Specific tests for flu, H1N1, or COVID-19 based on symptoms and exposure history"
                        ].map((test, index) => (
                            <div key={index} className=" pt-6">
                                <div className="text-xs font-bold text-[#1fa8e8] mb-1">Method 0{index + 1}</div>
                                <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">{test}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TREATMENT FRAMEWORK */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Therapeutic Guidelines
                    </span>

                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                        Viral Pneumonia Treatment
                    </h2>

                    <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
                        <p>
                            Viral chest infections, whether from flu, H1N1, or COVID-19, can range from mild to life-threatening, which is why identifying the exact virus and assessing overall health is the first step in treatment. Dr. Manish Aggarwal tailors care based on which virus is involved and how severely it's affecting the lungs, since the right window for antiviral treatment can make a meaningful difference in how quickly and fully you recover.
                        </p>
                        <p>
                            Alongside targeted antiviral therapy, the focus stays on supporting oxygen levels, managing symptoms, and watching closely for complications, with hospitalisation reserved for cases where breathing difficulty or underlying health conditions raise the risk. Even after recovery, follow-up care ensures the lungs are healing as expected and helps catch any secondary infections early.
                        </p>
                    </div>

                    {/* INTERMEDIARY INTERACTION */}
                    <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                            Get a Treatment Plan Made for You
                        </h3>
                        <p className="mt-2 text-sm text-[#64748b] max-w-xl">
                            Every case of viral pneumonia is different, and so is the right treatment for it.
                        </p>
                        <div className="mt-6">
                            <BookAppointmentButton cta="Schedule Your Appointment" />
                        </div>
                    </div>
                </section>

                {/* PULMONOLOGIST BIOGRAPHY */}
                <section className="pt-16 sm:pt-20">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Attending Pulmonologist
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                                Consult Your Pulmonologist for Viral Pneumonia - Dr. Manish Aggarwal
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                                Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating lung and breathing-related conditions, including viral pneumonia caused by flu, H1N1, and COVID-19. He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific symptoms and risk factors, rather than offering a one-size-fits-all approach.
                            </p>
                        </div>

                        {/* <div className="w-full lg:w-[40%] shrink-0 order-1 lg:order-2 flex justify-center">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                                    alt="Dr. Manish Aggarwal - Consultant Pulmonologist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* CLINICAL FAQ SUITE */}
                <FAQs faqs={faqs} />

                {/* CONVERSION BAR */}
                <section className="py-16 sm:py-20">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Don't Wait Out a Worsening Infection
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    Don't wait out a worsening cough or fever. Get an expert diagnosis and a personalised viral pneumonia treatment plan from Dr. Manish Aggarwal.
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