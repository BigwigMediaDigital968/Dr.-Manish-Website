import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
    {
        question: "What is the most common reason for chest pain?",
        answer: "The most common causes of chest pain include muscle strain, acid reflux, and anxiety. However, pain in chest can also be caused by lung or heart conditions, so it is always best to get it checked by a doctor."
    },
    {
        question: "Is pain in chest always related to the heart?",
        answer: "No. Pain in chest can come from muscles, the stomach, the lungs, or even stress. Only a doctor can confirm the exact reason for chest pain after proper examination."
    },
    {
        question: "Can stress cause chest pain?",
        answer: "Yes, stress and anxiety are common causes of chest pain. They can cause tightness or a sharp pain in chest due to fast or shallow breathing."
    },
    {
        question: "Does chest pain always mean a heart problem?",
        answer: "Not always. Pain in chest is often linked to the heart, but muscle strain, acid reflux, anxiety, and lung conditions can cause a similar feeling. A proper checkup helps find out which one applies to you."
    },
    {
        question: "Can chest pain go away on its own?",
        answer: "Mild chest pain caused by muscle strain or gas may clear up on its own within a short time. But if it keeps coming back or lasts longer than a few minutes, it usually points to an underlying reason for chest pain that needs attention."
    },
    {
        question: "What is the cause of chest pain?",
        answer: "The cause of chest pain can be muscle strain, acid reflux, anxiety, a lung infection, or a heart-related issue. Since so many different causes of chest pain can feel similar, a proper examination is the only way to know for sure what is behind your pain in chest."
    },
    {
        question: "How to relieve chest pain immediately?",
        answer: "If the pain in chest is mild and you are sure it is not heart-related, sitting upright, taking slow deep breaths, and resting in a calm position can help ease the discomfort. Avoiding heavy meals and lying down right after eating can also help if the reason for chest pain is acid reflux or gas. However, if the pain is severe, spreading, or comes with breathlessness, sweating, or dizziness, do not try to manage it at home. Seek emergency medical care immediately, since this could be a sign of a serious reason for chest pain."
    },
    {
        question: "How do I know if chest pain is serious?",
        answer: "Chest pain is more likely to be serious if it is sudden and intense, spreads to the arm, jaw, neck, or back, or comes along with sweating, breathlessness, dizziness, or nausea. Pain that occurs with physical activity and eases with rest can also be a warning sign. If you notice any of these along with your chest pain, treat it as an emergency and seek medical help right away rather than waiting."
    },
    {
        question: "What are the big 5 causes of chest pain?",
        answer: "While the exact reason for chest pain varies from person to person, five of the most common causes of chest pain are muscle strain, acid reflux or gas, anxiety and stress, lung-related infections, and heart-related issues. Since these can feel similar, a proper diagnosis from a doctor is the only reliable way to know which one applies to you."
    }
];

export default function ChestPainPage() {
    return (
        <>
            <ServiceHero 
                title="Reason for Chest Pain: Understanding the Causes of Chest Pain and What They Mean" 
                description="Felt a sudden tightness or pain in your chest and started worrying? You're not alone, and it's not something to ignore. Chest pain can come from your heart, lungs, muscles, stomach, or even stress, and the reason for chest pain is different for every person. Knowing the cause is the first step toward feeling better and worrying less. Dr. Manish Aggarwal, a practicing pulmonologist, breaks down the common causes of chest pain in plain, easy-to-understand language."
                ctaText="Book an Appointment"
                backgroundImage="https://images.unsplash.com/photo-1654588836262-fb473e1a34ee?q=80&w=1202&auto=format&fit=crop"
            />
            
            <div className="max-w-7xl mx-auto px-4">
                
                {/* WHAT DOES PAIN IN CHEST ACTUALLY MEAN */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Symptom Overview
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Does Pain in Chest Actually Mean?
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Chest pain is not a disease on its own. It is a symptom, which means it is a sign that something else is happening inside your body. Some people feel a sharp pain, some feel heaviness, and some feel a burning sensation. 
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                The type of pain in chest you feel can give doctors an early clue, but the reason for chest pain can only be confirmed after a proper checkup.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1778918006813-c2febf4daed9?q=80&w=2125&auto=format&fit=crop"
                                alt="Understanding Chest Pain Reasons"
                                className="w-full h-[300px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* COMMON CAUSES OF CHEST PAIN */}
                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Differential Diagnosis
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Causes of Chest Pain: What Could Be Behind Your Symptoms
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            There is not just one reason for chest pain. The causes of chest pain can range from mild, temporary issues to conditions that need urgent medical care. Below are the most common causes of chest pain that Dr. Manish Aggarwal sees in his clinic every day.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Pleural Effusion / Pleurisy */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Pleural Effusion/Pleurisy (Fluid Outside Lungs)
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        Since Dr. Manish Aggarwal is a pulmonologist, lung-related causes of chest pain are important to understand. Conditions like Bacterial Pneumonia, Bronchiectasis, or pleurisy (swelling around the lungs) are serious reasons for chest pain, and the pain usually gets worse when you breathe in deeply or cough.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Pulmonary Embolism */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Pulmonary Embolism
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        This is one of the more serious lung-related reasons for chest pain and needs immediate attention. If the pain in chest is sudden and sharp, worsens with breathing, and comes along with breathlessness, a fast heartbeat, or coughing up blood, it needs emergency care right away.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Costochondritis */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Costochondritis
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        This is swelling of the cartilage that connects your ribs to your breastbone. It is a common but often overlooked reason for chest pain, and the pain in chest usually increases when you press on the area.
                                    </p>
                                </div>
                                {/* <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div> */}
                            </div>

                            {/* Asthma */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Asthma (Allergic Bronchitis)
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        Sometimes, pain in chest comes along with wheezing, a whistling sound while breathing. This combination is a common cause of chest pain linked to lung conditions like asthma, bronchitis, or allergies, and it should be evaluated by a pulmonologist rather than ignored.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                            {/* Pneumothorax */}
                            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                        Pneumothorax (Lung Rupture)
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                                        A sudden, sharp chest pain that comes with breathlessness can sometimes point to air leaking into the space around the lung. This reason for chest pain needs urgent medical evaluation, especially if the pain started suddenly without any injury.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-sm font-semibold text-[#1fa8e8] hover:underline">Read more</button>
                                </div>
                            </div>

                        </div>

                        {/* DIAGNOSIS CTA */}
                        <div className="mt-12 flex flex-col items-center text-center max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
                            <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
                                Not Sure Which Cause Applies to You? Get a Proper Diagnosis
                            </h4>
                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                Pain in chest lasting more than a few minutes, chest pain that comes back often, chest pain along with wheezing or breathlessness, or a family history of heart or lung conditions. Book a slot with Dr. Manish Aggarwal for a same-day evaluation to pinpoint the exact reason for chest pain behind your symptoms.
                            </p>
                            <div className="mt-6">
                                <BookAppointmentButton cta="Book an Appointment" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* IS CHEST PAIN SERIOUS */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                            Risk Assessment
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Is Chest Pain Serious? When Should You Worry?
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Pain in chest is not always serious, but it should never be ignored completely. A mild, short-lived reason for chest pain, like a pulled muscle, may not need urgent care. However, chest pain can become serious when it is:
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Sudden and severe; spreading to the arm, neck, jaw, or back",
                                "Happening along with sweating, dizziness, or nausea",
                                "Accompanied by shortness of breath or wheezing",
                                "Occurring after an injury",
                                "Along with a high fever"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-xl bg-red-50/40 border border-red-100 p-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs mt-0.5">
                                        !
                                    </div>
                                    <p className="text-sm text-[#475569] leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-4 text-xs sm:text-sm font-semibold text-red-600">
                            If you notice any of these signs, please treat it as a medical emergency and seek immediate help rather than waiting to search for answers online.
                        </p>
                    </div>
                </section>

                {/* WHEN SHOULD YOU SEE A PULMONOLOGIST */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Specialist Care
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            When Should You See a Pulmonologist?
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            If your chest pain keeps coming back, lasts for more than a few minutes at a time, or comes along with wheezing or breathlessness, it is time to speak with a specialist instead of guessing the reason for chest pain on your own. Dr. Manish Aggarwal uses proper lung and breathing evaluations, a detailed health history, and years of clinical experience to find the exact cause of chest pain behind your symptoms and create a treatment plan suited to you.
                        </p>

                        <div className="mt-6 flex justify-center">
                            <BookAppointmentButton cta="Consult Dr. Manish Aggarwal Today" />
                        </div>
                    </div>
                </section>

                {/* ABOUT THE DOCTOR */}
                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Meet the Specialist
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            About Dr. Manish Aggarwal, Your Trusted Pulmonologist
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal is a practicing pulmonologist who has spent years diagnosing and treating patients with chest, lung, and breathing-related conditions, including chest pain linked to asthma, bronchitis, and COPD. His approach focuses on identifying the actual reason for chest pain in each patient rather than offering generic treatment, using proper diagnostic tools combined with years of clinical experience. Patients trust Dr. Aggarwal for clear explanations, honest guidance, and treatment plans built around their specific condition and lifestyle.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <FAQs faqs={faqs} />

                {/* FINAL CTA AND FORM SECTION */}
                <div className="mx-auto py-16">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-10 shadow-xl text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                                    Stop Guessing. Start Feeling Better.
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                                    You do not have to keep guessing the reason for chest pain on your own. With the right diagnosis and expert care from Dr. Manish Aggarwal, you can understand exactly what is causing your symptoms and start feeling comfortable again.
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