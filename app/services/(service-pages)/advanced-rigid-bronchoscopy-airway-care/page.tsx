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
    ChevronsRight,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
    {
        id: "rigid-bronchoscopy",
        title: "Advanced Rigid Bronchoscopy",
        desc: "Specialized rigid bronchoscopy for complex airway evaluation and therapeutic intervention.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "airway-stenting",
        title: "Airway Stenting Procedures",
        desc: "Restoration of airway patency using advanced stent placement techniques.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Network className="w-5 h-5" />,
    },
    {
        id: "tumour-debulking",
        title: "Tumour Debulking",
        desc: "Endobronchial tumour removal to relieve obstruction and improve breathing.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
        icon: <Scissors className="w-5 h-5" />,
    },
    {
        id: "foreign-body-removal",
        title: "Foreign Body Removal",
        desc: "Safe extraction of inhaled foreign bodies using rigid bronchoscopy techniques.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Search className="w-5 h-5" />,
    },
    {
        id: "tracheal-stenosis-management",
        title: "Tracheal & Bronchial Stenosis Management",
        desc: "Diagnosis and treatment of airway narrowing due to various causes including post-intubation and post-TB strictures.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
        icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
        id: "massive-hemoptysis-management",
        title: "Massive Hemoptysis Management",
        desc: "Emergency bronchoscopic intervention for life-threatening airway bleeding.",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1200&auto=format&fit=crop",
        icon: <Zap className="w-5 h-5" />,
    },
    {
        id: "central-airway-obstruction",
        title: "Central Airway Obstruction Management",
        desc: "Advanced management of critical airway blockages using interventional bronchoscopy.",
        image: "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "therapeutic-bronchoscopy",
        title: "Therapeutic Bronchoscopy Procedures",
        desc: "Comprehensive bronchoscopic interventions for complex airway diseases.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "airway-dilatation",
        title: "Tracheal Dilatation Procedures",
        desc: "Balloon and mechanical dilatation techniques for airway narrowing.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <ChevronsRight className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-airway-care",
        title: "Multidisciplinary Airway Care",
        desc: "Collaborative approach involving pulmonology, anesthesia, and thoracic experts.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is rigid bronchoscopy?",
        answer:
            "Rigid bronchoscopy is an advanced airway procedure used to diagnose and treat complex airway diseases using a rigid metal tube under general anesthesia.",
    },
    {
        question: "When is rigid bronchoscopy required?",
        answer:
            "It is required in cases of airway obstruction, tumors, foreign body aspiration, severe tracheal narrowing, or life-threatening airway bleeding.",
    },
    {
        question: "Is rigid bronchoscopy safe?",
        answer:
            "Yes, when performed by experienced interventional pulmonologists, it is a safe and highly effective procedure for complex airway management.",
    },
    {
        question: "Can airway stents be removed later?",
        answer:
            "Yes, airway stents placed during bronchoscopy can often be removed or replaced depending on the underlying condition and treatment response.",
    },
    {
        question: "How long is recovery after rigid bronchoscopy?",
        answer:
            "Recovery is usually fast, with many patients experiencing immediate improvement in breathing and discharge within a short hospital stay.",
    },
];

const indications = [
    { title: "Central Airway Obstruction", icon: AlertTriangle },
    { title: "Airway Tumors", icon: Scissors },
    { title: "Foreign Body Aspiration", icon: Search },
    { title: "Tracheal & Bronchial Stenosis", icon: Wind },
    { title: "Massive Hemoptysis", icon: Zap },
    { title: "Post-TB Airway Narrowing", icon: Activity },
    { title: "Post-Intubation Tracheal Stenosis", icon: ShieldPlus },
    { title: "Complex Airway Disease", icon: Network },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Advanced Rigid Bronchoscopy & Complex Airway Care Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, provides advanced rigid bronchoscopy services for patients with complex airway diseases, central airway obstruction, difficult foreign body removal, airway tumors, tracheal stenosis, and severe breathing difficulty."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO SECTION - UNCHANGED CONTENT */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Airway Interventions
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Advanced Rigid Bronchoscopy & Complex Airway Care Clinic in Delhi
                            </h2>


                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                With extensive experience in advanced airway procedures and active involvement in teaching rigid bronchoscopy through workshops, hands-on training programs, and professional medical forums, the clinic brings high-level expertise and precision-driven airway care to patients requiring specialized interventional pulmonology procedures.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                Rigid bronchoscopy plays a critical role in managing life-threatening and complex airway conditions where advanced airway control, therapeutic intervention, and immediate symptom relief are required.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop"
                                alt="Rigid bronchoscopy airway intervention"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                    </div>
                </div>

                {/* INDICATIONS */}
                <div className="mb-10 mt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                        Key Indications
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                        Rigid bronchoscopy is commonly used for:
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
                            Patients benefit from minimally invasive airway restoration, improved breathing, faster recovery, and multidisciplinary respiratory care using modern bronchoscopic techniques.
                        </p>
                    </div>
                </div>

            </div>

            {/* SERVICES CAROUSEL */}
            <ServicesCarousal
                heading="Services Offered"
                description="Advanced rigid bronchoscopy and interventional airway procedures for complex and life-threatening airway diseases."
                services={services}
            />

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for advanced rigid bronchoscopy and specialized airway management in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers about rigid bronchoscopy, airway obstruction, stenting, tumor debulking, and complex airway care."
                faqs={faqs}
            />
        </>
    );
}