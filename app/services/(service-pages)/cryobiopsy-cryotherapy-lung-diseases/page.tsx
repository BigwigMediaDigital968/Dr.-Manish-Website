import {
    Activity,
    ShieldPlus,
    Users,
    Search,
    RefreshCw,
    AlertCircle,
    Microscope,
    Wind,
    Syringe,
    ScanSearch,
    Radar,
    Scissors,
    AlertTriangle,
    Network,
    Stethoscope,
    Zap,
    Beaker,
    Snowflake,
    Layers,
    BrainCircuit,
    Target,
    Database,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
    {
        id: "transbronchial-cryobiopsy",
        title: "Transbronchial Cryobiopsy",
        desc: "Advanced cryo-based lung tissue sampling for accurate diagnosis of ILD and complex lung diseases.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
        icon: <Snowflake className="w-5 h-5" />,
    },
    {
        id: "advanced-bronchoscopy",
        title: "Advanced Bronchoscopy",
        desc: "High-precision bronchoscopic evaluation for complex airway and lung conditions.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "cryotherapy-airway-procedures",
        title: "Cryotherapy Airway Procedures",
        desc: "Therapeutic cryo-interventions for airway obstruction and tissue removal.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Zap className="w-5 h-5" />,
    },
    {
        id: "ild-diagnostic-evaluation",
        title: "ILD Diagnostic Evaluation",
        desc: "Comprehensive assessment for interstitial lung disease using advanced diagnostic tools.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Layers className="w-5 h-5" />,
    },
    {
        id: "pulmonary-fibrosis-workup",
        title: "Pulmonary Fibrosis Workup",
        desc: "Specialized evaluation for fibrotic lung diseases and progressive lung scarring.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <BrainCircuit className="w-5 h-5" />,
    },
    {
        id: "therapeutic-cryointerventions",
        title: "Therapeutic Cryo-Interventions",
        desc: "Minimally invasive cryo-based treatment for selected airway diseases.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
        icon: <Target className="w-5 h-5" />,
    },
    {
        id: "complex-lung-disease-assessment",
        title: "Complex Lung Disease Assessment",
        desc: "Expert evaluation of difficult and undiagnosed lung conditions.",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1200&auto=format&fit=crop",
        icon: <Search className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-respiratory-consultation",
        title: "Multidisciplinary Respiratory Consultation",
        desc: "Collaborative care involving pulmonology, radiology, and pathology experts.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is a cryobiopsy?",
        answer:
            "Cryobiopsy is an advanced bronchoscopic technique that uses extreme cold to obtain larger, high-quality lung tissue samples for accurate diagnosis of lung diseases.",
    },
    {
        question: "Why is cryobiopsy better than traditional biopsy?",
        answer:
            "Cryobiopsy provides larger and better-preserved tissue samples compared to conventional forceps biopsy, improving diagnostic accuracy especially in ILD and lung fibrosis.",
    },
    {
        question: "Is cryobiopsy safe?",
        answer:
            "Yes, when performed by experienced interventional pulmonologists, cryobiopsy is a safe and minimally invasive diagnostic procedure with a good safety profile.",
    },
    {
        question: "What diseases can cryobiopsy diagnose?",
        answer:
            "Cryobiopsy is commonly used for interstitial lung disease (ILD), pulmonary fibrosis, lung infiltrates, and selected complex lung conditions requiring tissue diagnosis.",
    },
    {
        question: "What is cryotherapy in bronchoscopy?",
        answer:
            "Cryotherapy uses extreme cold during bronchoscopy to remove obstructing airway tissue and treat certain benign or malignant airway conditions.",
    },
];

const indications = [
    { title: "Interstitial Lung Disease (ILD)", icon: Layers },
    { title: "Pulmonary Fibrosis", icon: BrainCircuit },
    { title: "Lung Infiltrates", icon: Database },
    { title: "Lung Nodules Evaluation", icon: Target },
    { title: "Airway Tumour Debulking", icon: Scissors },
    { title: "Central Airway Obstruction", icon: AlertTriangle },
    { title: "Complex Lung Disease", icon: Search },
    { title: "Advanced Bronchoscopic Diagnosis", icon: Microscope },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Cryobiopsy & Advanced Cryotherapy for Lung Diseases in Delhi"
                description="Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, offers advanced cryotechnology-based procedures for diagnosis and treatment of complex lung diseases, including Cryobiopsy and therapeutic cryo-interventions."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO SECTION (UNCHANGED CONTENT) */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Advanced Lung Diagnostics
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Cryobiopsy & Advanced Cryotherapy for Lung Diseases
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                With active involvement in advanced interventional pulmonology training programs and recent cryobiopsy and cryotherapy workshops conducted at Rajiv Gandhi Cancer Institute and Research Centre, the clinic provides modern minimally invasive airway procedures focused on accurate diagnosis, patient safety, and improved respiratory outcomes.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                Cryobiopsy is an advanced bronchoscopic technique used to obtain larger and higher-quality lung tissue samples compared to conventional biopsy methods. It plays an important role in diagnosing Interstitial Lung Disease (ILD), pulmonary fibrosis, lung infiltrates, and selected complex lung conditions where accurate tissue diagnosis is essential.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop"
                                alt="Cryobiopsy lung procedure"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                    </div>
                </div>

                {/* INDICATIONS */}
                <div className="mb-10 mt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                        Cryo-based Procedures Help In:
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                        Key Clinical Indications
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                        {indications.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg transition-all"
                                >
                                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]" />
                                    <div className="hidden sm:flex items-center justify-center h-14 w-14 rounded-2xl bg-[#1fa8e8]/10 text-[#1fa8e8] mb-4">
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h4 className="font-bold text-[#0f172a] group-hover:text-[#1fa8e8] transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* NOTE CARD */}
                <div className="py-16 pb-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm">
                        <div
                            className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569] relative z-10">
                            Cryo-based procedures also help in therapeutic airway management including tumor debulking and relief of airway obstruction using minimally invasive bronchoscopic techniques.
                        </p>
                    </div>
                </div>

            </div>

            {/* SERVICES CAROUSEL */}
            <ServicesCarousal
                heading="Services Offered"
                description="Advanced cryobiopsy and cryotherapy-based interventional pulmonology services for precise lung diagnosis and airway treatment."
                services={services}
            />

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for advanced cryobiopsy and modern lung disease evaluation in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers about cryobiopsy, cryotherapy, ILD diagnosis, and advanced lung disease evaluation."
                faqs={faqs}
            />
        </>
    );
}