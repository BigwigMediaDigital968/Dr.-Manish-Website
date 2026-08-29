import {
    ShieldCheck,
    Activity,
    Search,
    Heart,
    Eye,
    Stethoscope,
    Layers,
    AlertCircle,
    ArrowUpRight,
    ArrowUpRightIcon,
    AlertCircleIcon,
    ShieldIcon
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";


const managementProtocols = [
    {
        title: "Stabilization and airway protection",
        icon: ShieldCheck,
        color: "text-[#1fa8e8] bg-[#1fa8e8]/10"
    },
    {
        title: "Treatment of infection or tuberculosis",
        icon: Activity,
        color: "text-[#6dbb45] bg-[#6dbb45]/10"
    },
    {
        title: "Bronchoscopy for diagnosis and bleeding localization",
        icon: Search,
        color: "text-amber-500 bg-amber-500/10"
    },
    {
        title: "Management of bronchiectasis and chronic lung disease",
        icon: Heart,
        color: "text-[#1fa8e8] bg-[#1fa8e8]/10"
    },
    {
        title: "Evaluation for lung cancer or airway lesions",
        icon: Eye,
        color: "text-indigo-500 bg-indigo-500/10"
    },
    {
        title: "Interventional pulmonology procedures when required",
        icon: Stethoscope,
        color: "text-[#6dbb45] bg-[#6dbb45]/10"
    },
    {
        title: "Coordination for bronchial artery embolization in severe cases",
        icon: Layers,
        color: "text-slate-700 bg-slate-100"
    }
];

const faqs = [
    {
        question: "What is hemoptysis?",
        answer:
            "Hemoptysis is the medical term for coughing up blood or blood-stained sputum from the respiratory tract. It can range from small streaks of blood to significant bleeding and should always be evaluated by a respiratory specialist.",
    },
    {
        question: "Is coughing up blood a medical emergency?",
        answer:
            "Any episode of coughing up blood requires medical evaluation. Large-volume bleeding, breathing difficulty, dizziness, or recurrent episodes may require urgent or emergency care to identify and manage the underlying cause.",
    },
    {
        question: "What causes blood in sputum?",
        answer:
            "Common causes include respiratory infections, tuberculosis, bronchiectasis, chronic lung disease, pneumonia, airway inflammation, lung cancer, pulmonary fibrosis, and certain cardiovascular conditions. Proper evaluation is essential to determine the exact cause.",
    },
    {
        question: "Can a chest infection cause hemoptysis?",
        answer:
            "Yes. Respiratory infections such as bronchitis, pneumonia, tuberculosis, and severe airway inflammation can sometimes cause blood-stained sputum. The underlying infection should be diagnosed and treated appropriately.",
    },
    {
        question: "When is bronchoscopy recommended for hemoptysis?",
        answer:
            "Bronchoscopy may be advised when the cause of bleeding is unclear, when imaging shows an abnormality, or when there is concern for airway lesions, lung cancer, or persistent bleeding. It helps visualize the airways and identify the source of bleeding.",
    },
    {
        question: "Can smoking increase the risk of coughing up blood?",
        answer:
            "Yes. Smokers are at higher risk of chronic lung disease, bronchitis, lung infections, and lung cancer, all of which can present with hemoptysis. Any smoker who develops blood in sputum should seek prompt evaluation.",
    },
    {
        question: "Is blood in sputum always a sign of lung cancer?",
        answer:
            "No. While lung cancer is one possible cause, many cases are related to infections, bronchiectasis, tuberculosis, or airway inflammation. However, persistent or unexplained hemoptysis should always be investigated to rule out serious conditions.",
    },
    {
        question: "What tests are used to evaluate hemoptysis?",
        answer:
            "Evaluation may include a clinical examination, chest X-ray, CT scan, bronchoscopy, sputum testing, blood tests, and other investigations depending on the patient's symptoms and suspected diagnosis.",
    },
    {
        question: "What is bronchiectasis and can it cause recurrent bleeding?",
        answer:
            "Bronchiectasis is a chronic lung condition in which the airways become permanently widened and damaged. Patients may experience chronic cough, mucus production, recurrent infections, and episodes of blood in sputum.",
    },
    {
        question: "How is severe hemoptysis treated?",
        answer:
            "Treatment depends on the cause and severity of bleeding. It may include airway stabilization, infection treatment, bronchoscopy, interventional pulmonology procedures, or coordination for bronchial artery embolization in severe or life-threatening cases.",
    },
    {
        question: "Should recurrent blood-streaked sputum be investigated?",
        answer:
            "Yes. Even small amounts of recurring blood in sputum should not be ignored. Recurrent bleeding may indicate an underlying lung condition that requires diagnosis and treatment.",
    },
    {
        question: "When should I consult a pulmonologist for hemoptysis?",
        answer:
            "You should seek specialist evaluation if you experience blood in sputum, recurrent bleeding, persistent cough, unexplained weight loss, breathlessness, fever, smoking-related symptoms, or abnormal chest imaging findings.",
    },
];

export default function page() {
    return (
        <>
            <ServiceHero title="Hemoptysis (Blood in Sputum) Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, provides expert evaluation and treatment for hemoptysis (blood in sputum), recurrent bleeding, unexplained cough, lung infections, tuberculosis, bronchiectasis, and suspected lung cancer." />
            <div className="max-w-7xl mx-auto px-4">
                <section className="relative w-full overflow-hidden bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="pt-10">

                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4 block">
                                Early Diagnosis Matters
                            </span>

                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                {/* Content Section */}
                                <div className="flex-1">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-relaxed mt-2">
                                        Hemoptysis <br /> Assessment &amp; Treatment
                                    </h2>

                                    <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-6">
                                        Coughing blood (hemoptysis) should never be ignored and requires prompt medical evaluation.
                                        Dr. Manish Aggarwal, Senior Pulmonologist &amp; Interventional Chest Specialist in Pitampura, Delhi,
                                        provides expert diagnosis and management for patients with blood in sputum, recurrent bleeding,
                                        unexplained cough, lung infections, tuberculosis, bronchiectasis, and suspected lung cancer.
                                    </p>
                                    <div className="mt-4">
                                        {/* Anchor point spacer for seamless layout flow */}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="w-full lg:w-[45%] shrink-0">
                                    <img
                                        src="/services/hemoptysis-assessment-and-treatment.png"
                                        alt="Lung Cancer Consultation"
                                        className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg border border-slate-100"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
            <section className="bg-white py-16 sm:py-12 border-t border-[#e2e8f0] mt-16">
                <div className="max-w-7xl mx-auto px-4">

                    {/* ─── BLOCK A: INTERNATIONAL EVIDENCE-BASED PrincipalS ─── */}
                    { }
                    <div className="mb-16">
                        <div className="">
                            {/* Decorative Brand Accent Vector Glow */}
                            <div
                                className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                                style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                            />

                            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">

                                <div className="flex-1">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#1fa8e8] block mb-1">
                                        Global Healthcare Standard
                                    </span>
                                    <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-6 max-w-3xl">
                                        Following evidence-based respiratory care Principals and internationally accepted practices
                                        including NICE-guided evaluation pathways, the clinic focuses on identifying the underlying
                                        cause through clinical examination, chest imaging, bronchoscopy, and targeted investigations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── BLOCK B: PROTOCOLS AND MANAGEMENT MATRIX ─── */}
                    { }
                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                                    Systematic Care Pathway
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                                    Clinical Intervention &amp; Support
                                </h3>
                            </div>
                            <p className="text-sm font-semibold text-[#64748b] bg-slate-100 px-4 py-2 rounded-full self-start md:self-auto">
                                Management depends on the severity and cause of bleeding and may include:
                            </p>
                        </div>

                        {/* Grid Layout representing your bullet points in modern interactive card styles */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {managementProtocols.map((protocol, index) => {
                                const IconComponent = protocol.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative flex items-start gap-4 rounded-2xl border border-[#e2e8f0] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-md hover:shadow-[#1fa8e8]/5 bg-white"
                                    >
                                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${protocol.color} transition-transform group-hover:scale-105 duration-300`}>
                                            <IconComponent />
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <p className="text-sm font-bold text-[#0f172a] leading-snug group-hover:text-[#1fa8e8] transition-colors duration-200">
                                                {protocol.title}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ─── BLOCK C: CRITICAL CLINICAL ALERTS & RISK RED FLAGS ─── */}
                    { }
                    <div className="relative rounded-3xl overflow-hidden border border-red-200/50 bg-rose-50/40 p-6 sm:p-8">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />

                        <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                                <AlertCircleIcon />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-red-950 mb-1">
                                    Urgent Diagnostic Notice
                                </h4>
                                <p className="text-sm sm:text-base text-red-900/90 leading-relaxed font-medium">
                                    Patients with persistent or recurrent hemoptysis, smoking history, breathlessness,
                                    weight loss, fever, or abnormal chest imaging require urgent specialist evaluation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="mb-10 max-w-7xl mx-auto p-4">
                <CTA description={<>
                    Book consultation for expert hemoptysis evaluation and advanced chest care in Delhi.</>} cta={"Schedule Consultation"} />
            </div>
            <FAQs
                title="Frequently Asked Questions"
                description="Find answers to common questions about hemoptysis (blood in sputum), bronchoscopy, lung infections, tuberculosis, bronchiectasis, lung cancer evaluation, and advanced respiratory care at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />

        </>
    );
}