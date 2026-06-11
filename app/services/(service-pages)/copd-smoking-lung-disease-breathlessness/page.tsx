import {
    Activity,
    ShieldPlus,
    Users,
    Search,
    RefreshCw,
    AlertCircle,
    Wind,
    Stethoscope,
    Gauge,
    Cigarette,
    HeartPulse,
    ScanSearch,
    Sliders,
    Target,
    Hospital,
    AlertTriangle,
    Syringe,
    ClipboardList,
    TrendingDown,
    Thermometer,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";

export const services = [
    {
        id: "copd-diagnosis-treatment",
        title: "COPD Diagnosis & Treatment",
        desc: "Comprehensive evaluation and evidence-based treatment for COPD and chronic lung disease.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
        icon: <FaLungs className="w-5 h-5" />,
    },
    {
        id: "pft-spirometry-testing",
        title: "Pulmonary Function Test (PFT) & Spirometry",
        desc: "Advanced lung function testing for accurate diagnosis and severity assessment.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <ClipboardList className="w-5 h-5" />,
    },
    {
        id: "smoking-cessation-counselling",
        title: "Smoking Cessation Counselling",
        desc: "Structured programs to help patients quit smoking and prevent further lung damage.",
        image: "https://images.unsplash.com/photo-1604545519887-21d8f035cd90?q=80&w=1174&auto=format&fit=crop",
        icon: <Cigarette className="w-5 h-5" />,
    },
    {
        id: "breathlessness-evaluation",
        title: "Breathlessness Evaluation",
        desc: "Detailed assessment of chronic breathlessness and underlying lung conditions.",
        image: "https://images.unsplash.com/photo-1733751681916-08e8eafd6089?q=80&w=1081&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "oxygen-assessment-guidance",
        title: "Oxygen Assessment & Guidance",
        desc: "Evaluation for home oxygen therapy and long-term respiratory support.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Gauge className="w-5 h-5" />,
    },
    {
        id: "inhaler-optimization",
        title: "Inhaler Technique Optimization",
        desc: "Correct inhaler use training for better COPD control and symptom relief.",
        image: "https://images.unsplash.com/photo-1733751682743-8f46e457149e?q=80&w=1081&auto=format&fit=crop",
        icon: <Sliders className="w-5 h-5" />,
    },
    {
        id: "recurrent-chest-infection-management",
        title: "Recurrent Chest Infection Management",
        desc: "Prevention and treatment of repeated respiratory infections in COPD patients.",
        image: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?q=80&w=1025&auto=format&fit=crop",
        icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
        id: "pulmonary-rehabilitation",
        title: "Pulmonary Rehabilitation Counselling",
        desc: "Exercise and lifestyle guidance to improve lung capacity and daily function.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "preventive-lung-health",
        title: "Preventive Lung Health Monitoring",
        desc: "Long-term monitoring and prevention of COPD progression.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <HeartPulse className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-care",
        title: "Multidisciplinary COPD Care",
        desc: "Collaborative approach for advanced COPD and complex respiratory disease management.",
        image: "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?q=80&w=1331&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is COPD?",
        answer:
            "COPD (Chronic Obstructive Pulmonary Disease) is a progressive lung condition that causes long-term breathing difficulty due to airway narrowing and lung damage.",
    },
    {
        question: "What causes COPD?",
        answer:
            "The most common cause is smoking, but air pollution, biomass fuel exposure, occupational dust, and genetic factors can also contribute.",
    },
    {
        question: "Can COPD be cured?",
        answer:
            "COPD cannot be completely cured, but its symptoms and progression can be effectively controlled with treatment and lifestyle changes.",
    },
    {
        question: "What are early signs of COPD?",
        answer:
            "Early signs include chronic cough, sputum production, wheezing, and gradually worsening breathlessness.",
    },
    {
        question: "Is smoking cessation important in COPD?",
        answer:
            "Yes, quitting smoking is the most important step to slow disease progression and improve lung function in COPD patients.",
    },
];

const indications = [
    { title: "Chronic Breathlessness", icon: Wind },
    { title: "Smoking-Related Lung Damage", icon: Cigarette },
    { title: "COPD Exacerbations", icon: AlertTriangle },
    { title: "Chronic Bronchitis", icon: Thermometer },
    { title: "Emphysema", icon: FaLungs },
    { title: "Recurrent Chest Infections", icon: ScanSearch },
    { title: "Low Oxygen Levels", icon: Gauge },
    { title: "Post-TB Obstructive Lung Disease", icon: TrendingDown },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="COPD, Smoking-Related Lung Disease & Breathlessness Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides specialized care for COPD (Chronic Obstructive Pulmonary Disease), smoker’s lung disease, chronic bronchitis, emphysema, and long-standing breathing problems affecting quality of life."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Chronic Lung Disease Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                COPD, Smoking-Related Lung Disease & Breathlessness Clinic in Delhi
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                COPD is a progressive lung disease commonly caused by smoking, air pollution, biomass fuel exposure, and occupational inhalation injury. Many patients experience chronic cough, phlegm production, wheezing, reduced exercise capacity, and persistent breathlessness that worsens over time if untreated.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                The clinic focuses on early diagnosis, symptom control, prevention of exacerbations, and long-term lung function preservation using evidence-based respiratory care and personalized treatment strategies.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop"
                                alt="COPD lung disease care"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-10">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Respiratory Care
                    </span>

                    <div className="flex flex-col gap-6">

                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-relaxed">
                            Comprehensive Respiratory Evaluation & Care
                        </h2>

                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            The clinic focuses on early diagnosis, symptom control, prevention of exacerbations, and long-term lung function preservation using evidence-based respiratory care and personalized treatment strategies.
                        </p>

                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Patients with smoking history, chronic cough, recurrent chest infections, low oxygen levels, or unexplained breathlessness undergo detailed respiratory evaluation including pulmonary function testing (PFT), spirometry, oxygen assessment, chest imaging interpretation, and inhaler optimization.
                        </p>

                    </div>

                </div>

                {/* INDICATIONS */}
                <div className="mb-10 mt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                        Special Attention Areas
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2">
                        Patients with following conditions are evaluated:
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

                

            </div>

            {/* SERVICES */}
            <ServicesCarousal
                heading="Services Offered"
                description="Comprehensive COPD and smoking-related lung disease management with long-term respiratory care support."
                services={services}
            />
            <div className="max-w-7xl mx-auto px-4">
                {/* NOTE CARD */}
                <div className="py-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm">
                        <div
                            className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />
                        <p className="text-base sm:text-lg text-[#475569] font-medium relative z-10">
                            The clinic emphasizes patient education, lifestyle modification, vaccination awareness, inhaler adherence, and preventive respiratory care to improve daily functioning and reduce hospitalization risk.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert COPD management and smoking-related lung disease care in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers about COPD, smoking-related lung disease, chronic bronchitis, emphysema, and breathlessness management."
                faqs={faqs}
            />
        </>
    );
}