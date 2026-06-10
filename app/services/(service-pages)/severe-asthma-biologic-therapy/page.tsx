import {
    Activity,
    ShieldPlus,
    Users,
    Search,
    RefreshCw,
    AlertCircle,
    Pill,
    Microscope,
    Wind,
    Heart,
    Stethoscope,
    ScanSearch,
    Radar,
    Syringe,
    ClipboardList,
    Target,
    Gauge,
    Brain,
    ShieldAlert,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
    {
        id: "severe-asthma-evaluation",
        title: "Severe Asthma Evaluation",
        desc: "Severe Asthma Evaluation",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "difficult-asthma-management",
        title: "Difficult Asthma Management",
        desc: "Difficult Asthma Management",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "biologic-therapy-assessment",
        title: "Biologic Therapy Assessment",
        desc: "Biologic Therapy Assessment",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    },
    {
        id: "allergy-eosinophilic-asthma-care",
        title: "Allergy & Eosinophilic Asthma Care",
        desc: "Allergy & Eosinophilic Asthma Care",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "pulmonary-function-testing",
        title: "Pulmonary Function Testing (PFT)",
        desc: "Pulmonary Function Testing (PFT)",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
        icon: <Gauge className="w-5 h-5" />,
    },
    {
        id: "inhaler-optimization",
        title: "Inhaler Optimization",
        desc: "Inhaler Optimization",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1200&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "steroid-reduction-strategies",
        title: "Steroid Reduction Strategies",
        desc: "Steroid Reduction Strategies",
        image: "https://images.unsplash.com/photo-1584367369851-8b966cf223b2?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
        id: "asthma-trigger-evaluation",
        title: "Asthma Trigger Evaluation",
        desc: "Asthma Trigger Evaluation",
        image: "https://images.unsplash.com/photo-1583911860207-93a4e2c7b6f6?q=80&w=1200&auto=format&fit=crop",
        icon: <Search className="w-5 h-5" />,
    },
    {
        id: "long-term-asthma-monitoring",
        title: "Long-Term Asthma Monitoring",
        desc: "Long-Term Asthma Monitoring",
        image: "https://images.unsplash.com/photo-1581595219511-7b9a6a2c1a32?q=80&w=1200&auto=format&fit=crop",
        icon: <RefreshCw className="w-5 h-5" />,
    },
    {
        id: "personalized-respiratory-care",
        title: "Personalized Respiratory Care",
        desc: "Personalized Respiratory Care",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is severe asthma?",
        answer:
            "Severe asthma is a form of asthma that remains uncontrolled despite regular use of high-dose inhalers and standard medications, often leading to frequent attacks and hospital visits.",
    },
    {
        question: "What are biologic therapies for asthma?",
        answer:
            "Biologic therapies are advanced injectable treatments that target specific immune pathways responsible for severe asthma, especially eosinophilic or allergic asthma.",
    },
    {
        question: "Who needs biologic therapy for asthma?",
        answer:
            "Patients with frequent asthma attacks, high eosinophil counts, steroid dependence, or poor control despite inhalers may be candidates for biologic therapy.",
    },
    {
        question: "Is severe asthma curable?",
        answer:
            "Severe asthma is a chronic condition, but with proper evaluation and advanced therapies like biologics, it can be effectively controlled and symptoms significantly reduced.",
    },
    {
        question: "What tests are done for severe asthma evaluation?",
        answer:
            "Evaluation may include pulmonary function testing (PFT), allergy testing, blood eosinophil counts, and assessment of inhaler technique and triggers.",
    },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Severe Asthma & Biologic Therapy Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides advanced evaluation and treatment for severe and difficult-to-control asthma, including patients requiring biologic therapy for persistent symptoms despite standard inhaler treatment."
            />

            <div className="max-w-7xl mx-auto px-4">

                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Asthma Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Severe Asthma & Biologic Therapy
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                Some asthma patients continue to experience frequent attacks, nighttime symptoms, repeated steroid use, emergency visits, or poor quality of life even after regular inhalers and medications. These patients may have severe eosinophilic or allergic asthma and can benefit from targeted biologic therapies.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                The clinic offers comprehensive severe asthma assessment including pulmonary function testing (PFT), allergy evaluation, eosinophil assessment, inhaler optimization, trigger identification, and individualized treatment planning. Biologic therapy is considered in carefully selected patients based on international evidence-based asthma management guidelines.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop"
                                alt="Severe asthma evaluation clinic"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                    </div>
                </div>

                {/* BENEFITS */}
                <div className="mb-10 mt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                        Biologic Therapy Benefits
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                        Biologic treatment may help:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                        {[
                            "Reduce asthma attacks and hospitalizations",
                            "Improve breathing and symptom control",
                            "Reduce steroid dependence",
                            "Improve exercise tolerance and sleep quality",
                            "Improve overall quality of life",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg transition-all"
                            >
                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]" />
                                <p className="font-medium text-[#0f172a] group-hover:text-[#1fa8e8] transition-colors">
                                    {item}
                                </p>
                            </div>
                        ))}
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
                            Special attention is given to pollution-related asthma, recurrent exacerbations, allergic airway disease, and long-term preventive lung care using modern evidence-based respiratory treatment approaches.
                        </p>
                    </div>
                </div>

            </div>

            {/* SERVICES */}
            <ServicesCarousal
                heading="Services Offered"
                description="Comprehensive severe asthma and biologic therapy services for patients with uncontrolled asthma and complex airway disease."
                services={services}
            />

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert severe asthma management and biologic therapy evaluation in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers about severe asthma, biologic therapy, allergy-related asthma, and advanced respiratory care."
                faqs={faqs}
            />
        </>
    );
}