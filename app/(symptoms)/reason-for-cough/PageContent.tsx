import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import { AlertCircle } from "lucide-react";


const faqs = [
    {
        question: "What is the most common reason for cough?",
        answer:
            "The most common reason for cough is a viral infection like the common cold or flu. Other frequent causes include allergies, acid reflux, and dry air. If your cough lasts more than three weeks, it is best to get it checked.",
    },
    {
        question: "Can stress cause cough symptoms?",
        answer:
            "Yes, in some cases, stress and anxiety can lead to a dry, persistent cough. However, this should only be considered after ruling out other physical causes.",
    },
    {
        question: "What is the difference between a dry cough and a wet cough?",
        answer:
            "A dry cough does not produce mucus and is often linked to irritation, allergies, or viral infections. A wet cough brings up mucus and usually points to an infection in the chest or airways.",
    },
    {
        question: "When does a cough become serious?",
        answer:
            "A cough becomes a concern when it lasts more than three weeks, comes with blood, fever, breathlessness, chest pain, or unexplained weight loss. These symptoms need prompt medical attention.",
    },
    {
        question: "Can allergies be the cause of coughing?",
        answer:
            "Yes, allergies are a very common cause of coughing, especially in people who are sensitive to dust, pollen, smoke, or pet hair. This type of cough is usually dry and may come with a runny nose or itchy throat.",
    },
    {
        question: "Do I need an X-ray for a simple cough?",
        answer:
            "Not always. Dr. Manish Aggarwal will first take your full history and examine you. An X-ray or other test is only recommended when it is needed to confirm the actual reason for the cough.",
    },
    {
        question: "Is a long-term cough always a sign of a serious lung disease?",
        answer:
            "Not necessarily, but it should never be ignored. A long-term cough can be caused by asthma, acid reflux, or allergies, and in some cases, it may point to a more serious lung condition. Getting it checked helps rule out anything serious early.",
    },
];

export default function PageContent() {

    return (
        <>
            <ServiceHero title="Worried About Your Cough? Find Out the Real Reason for Cough With Dr. Manish Aggarwal
" description="A cough is your body's way of telling you something. Dr. Manish Aggarwal, a trusted pulmonologist, helps patients understand cough symptoms, find the exact cause of coughing, and get the right treatment, not just a temporary fix."
                ctaText="Book an Appointment"
                backgroundImage="https://images.pexels.com/photos/11899610/pexels-photo-11899610.jpeg"
            />
            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Advanced Airway Diagnosis                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Why Understanding the Reason for Cough Matters
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                A cough seems like a small problem until it does not go away. Many patients ignore it for weeks, thinking it is just a seasonal issue or dust allergy. But the reason for cough can range from something as simple as a dry throat to something more serious, like asthma, infection, or lung disease.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Dr. Manish Aggarwal has spent years helping patients figure out the exact cause of coughing, so they do not have to guess or rely on random home remedies. Every cough tells a story, and understanding that story is the first step toward feeling better.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1626697556342-2310dbc55428?q=80&w=1170&auto=format&fit=crop"
                                alt="COPD lung disease care"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* COMMON COUGH SYMPTOMS */}

                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Symptom Guide
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Common Cough Symptoms and What They Could Mean
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Not every cough is the same, and not every cough needs the same treatment.
                            Below is a simple breakdown of common cough symptoms and the possible reason
                            for the cough behind each one. This is for general understanding only. A
                            proper diagnosis needs an actual check-up.
                        </p>

                        <div className="mt-10 space-y-8">

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Dry Cough (No Mucus)
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    A dry cough brings up no mucus and often feels scratchy or irritating,
                                    sometimes getting worse at night. If you have a dry cough that does not
                                    bring up any mucus, the cause of coughing could be:
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {[
                                        "A common cold or viral infection",
                                        "Allergies to dust, pollen, or smoke",
                                        "Acid reflux (stomach acid irritating the throat)",
                                        "Early-stage asthma",
                                        "Side effect of certain blood pressure medicines",
                                        "Dry or polluted air in your surroundings",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-sm text-[#475569] leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Wet Cough */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Wet or Productive Cough (With Mucus)
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    A wet cough brings up mucus or phlegm, usually because your body is
                                    trying to clear out an infection or irritation. When your cough brings
                                    up mucus or phlegm, this is usually your body trying to clear out
                                    something. Possible reasons for cough in this case include:
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {[
                                        "Chest infection or bronchitis",
                                        "Pneumonia",
                                        "Sinus infection with mucus dripping down the throat",
                                        "Smoking-related lung irritation",
                                        "COPD (Chronic Obstructive Pulmonary Disease)",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-sm text-[#475569] leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Chronic Cough */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Cough That Lasts More Than 3 Weeks (Chronic Cough)
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    A short cough is normal after a cold. But if your cough symptoms
                                    continue for more than three weeks, it is called a chronic cough,
                                    and it needs proper attention. Common causes include:
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {[
                                        "Asthma",
                                        "Chronic acid reflux (GERD)",
                                        "Post-nasal drip from allergies or sinus problems",
                                        "Long-term smoking",
                                        "Tuberculosis (TB), especially if you also have weight loss, night sweats, or fever",
                                        "In rare cases, an early sign of lung disease",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-sm text-[#475569] leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fever */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Cough With Fever
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    A fever alongside a cough usually means your body is actively fighting
                                    an infection. If your cough comes with a fever, your body may be
                                    fighting an infection. This could point to:
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                    {[
                                        "Flu or viral fever",
                                        "Chest infection",
                                        "Pneumonia",
                                        "COVID-19 or another respiratory virus",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-sm text-[#475569] leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Wheezing */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Cough With Wheezing or Breathlessness
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Wheezing happens when your airways are narrowed or partly blocked, and
                                    it should not be ignored. If you notice a whistling sound while
                                    breathing along with your cough, or you feel short of breath, this
                                    could be a sign of:
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                    {[
                                        "Asthma",
                                        "Allergic reaction",
                                        "COPD",
                                        "A blocked airway",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-sm text-[#475569] leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">
                                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                                        This combination should never be ignored and needs medical
                                        attention soon.
                                    </p>
                                </div>
                            </div>

                            {/* Blood */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-[#1fa8e8]/40 hover:shadow-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a]">
                                    Cough With Blood
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Coughing up blood, even a small amount, is a symptom that should never
                                    be self-treated or ignored. It can be linked to:
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                    {[
                                        "A severe chest infection",
                                        "Tuberculosis",
                                        "Bronchitis",
                                        "In some cases, a more serious lung condition",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                                {index + 1}
                                            </div>

                                            <p className="text-sm text-[#475569] leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* WHEN TO SEE A PULMONOLOGIST */}

                <div className=" mx-auto px-2 py-12">
                    <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                        {/* Subtle decorative gradient accent */}
                        <div
                            className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">


                                <h4 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3">
                                    Some Cough Symptoms Need Immediate Attention
                                </h4>

                                <p className="text-sm sm:text-base leading-relaxed text-[#64748b] max-w-3xl">
                                    If your cough comes with fever, breathlessness, or blood, don't wait it out.
                                    Early diagnosis makes treatment simpler and faster.
                                </p>
                            </div>

                            <div className="shrink-0">
                                <WhatsappButton cta="Talk to Doctor Now" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="">
                    <div className="max-w-7xl mx-auto">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Expert Consultation
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            When Should You See a Pulmonologist for Your Cough?
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Most coughs go away on their own within a week or two. But you should not
                            wait to consult Dr. Manish Aggarwal if you notice any of the following:
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                            {[
                                "Cough lasting more than 3 weeks",
                                "Cough with blood",
                                "Cough with high fever",
                                "Difficulty breathing or wheezing",
                                "Unexplained weight loss along with the cough",
                                "Chest pain while coughing",
                                "Cough that disturbs your sleep every night",
                                "Cough that gets worse despite home remedies or over-the-counter medicines",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold text-sm">
                                            {index + 1}
                                        </div>

                                        <p className="text-sm text-[#475569] leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                                A cough is a symptom, not the actual problem. The real reason for the
                                cough could be sitting underneath it, and only a proper examination can
                                tell you what it actually is.
                            </p>
                        </div>

                    </div>
                </section>


                {/* DIAGNOSIS APPROACH */}

                <section className="pt-16">
                    <div className="max-w-7xl mx-auto">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Diagnostic Approach
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            How Dr. Manish Aggarwal Diagnoses the Cause of Coughing
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Dr. Manish Aggarwal follows a step-by-step approach to find the exact cause
                            of coughing instead of simply prescribing a cough syrup and sending
                            patients home. This usually includes:
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                            {[
                                {
                                    title: "Detailed history taking",
                                    description:
                                        "understanding how long you have had the cough, what triggers it, and what other symptoms you have.",
                                },
                                {
                                    title: "Physical examination",
                                    description:
                                        "listening to your chest and lungs carefully.",
                                },
                                {
                                    title: "Relevant tests",
                                    description:
                                        "such as chest X-ray, pulmonary function test, or blood tests, only if needed.",
                                },
                                {
                                    title: "Personalized treatment plan",
                                    description:
                                        "based on the actual reason for cough found, not a generic solution.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] font-bold">
                                            {index + 1}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-[#0f172a] group-hover:text-[#1fa8e8] transition-colors">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                                <span className="font-semibold text-[#0f172a]">
                                    Early & Accurate Diagnosis:
                                </span>{" "}
                                This approach helps in catching problems early, whether it is a
                                simple allergy or something that needs long-term management like
                                asthma or COPD.
                            </p>
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

                                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                        About Dr. Manish Aggarwal
                                    </span>

                                    <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                                        About Dr. Manish Aggarwal
                                    </h2>

                                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                        Dr. Manish Aggarwal is a leading pulmonologist in Delhi with over
                                        24 years of experience. He holds an MBBS and MD (Tuberculosis and
                                        Chest Diseases) from Delhi University, along with FRCP (Glasgow)
                                        and NHS clinical experience from the UK, and currently serves
                                        patients as Principal Director, Department of Chest Disease and
                                        Interventional Pulmonology at Max Hospital and at his private
                                        clinic. His patients trust him for clear communication, honest
                                        advice, and treatment plans that address the real reason for
                                        cough, not just the symptom.
                                    </p>

                                </div>

                                <div className="shrink-0 mt-5">
                                    <div className="inline ">
                                        <BookAppointmentButton cta="Book an Appointment With Dr. Aggarwal" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                <FAQs
                    title="Frequently Asked Questions"
                    faqs={faqs}
                />
                {/* FINAL CTA */}

                <section className="pt-16 pb-12">
                    <div className="max-w-7xl mx-auto">

                        <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-10 lg:p-14">

                            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#1fa8e8]/10 blur-3xl" />
                            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#1fa8e8]/10 blur-3xl" />

                            <div className="relative mx-auto max-w-4xl text-center">

                                <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                    Take the Next Step
                                </span>

                                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-tight">
                                    Do Not Ignore Your Cough. Find the Real Reason Behind It.
                                </h2>

                                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-3xl mx-auto">
                                    A cough that lingers is your body asking for attention. Whether it is
                                    a simple cause of coughing like allergies or something that needs
                                    deeper investigation, Dr. Manish Aggarwal is here to help you get
                                    clear answers and the right treatment.
                                </p>

                                <div className="mt-8 flex justify-center">
                                    <BookAppointmentButton cta="Book Your Appointment Now" />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </>
    )
}