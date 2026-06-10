import {
    Wind,
    Activity,
    ShieldPlus,
    Users,
    Droplets,
    ShieldAlert,
    Syringe,
    ScanSearch,
    Radar,
    RefreshCw,
    AlertTriangle,
    AlertCircle,
    Heart,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
    {
        id: "ipc-insertion",
        title: "Indwelling Pleural Catheter (IPC) Insertion",
        desc: "Minimally invasive placement of IPC for long-term pleural fluid drainage and symptom relief.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    },
    {
        id: "recurrent-pleural-effusion-management",
        title: "Recurrent Pleural Effusion Management",
        desc: "Comprehensive care for patients with repeated pleural fluid accumulation and breathlessness.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <RefreshCw className="w-5 h-5" />,
    },
    {
        id: "trapped-lung-evaluation",
        title: "Trapped Lung Evaluation",
        desc: "Diagnostic assessment for non-expanding lung and chronic pleural disease conditions.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <ScanSearch className="w-5 h-5" />,
    },
    {
        id: "malignant-pleural-effusion-care",
        title: "Malignant Pleural Effusion Care",
        desc: "Specialized management of cancer-related pleural effusion with symptom-focused care.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
        icon: <AlertCircle className="w-5 h-5" />,
    },
    {
        id: "ultrasound-guided-pleural-procedures",
        title: "Ultrasound-Guided Pleural Procedures",
        desc: "Image-guided pleural interventions ensuring safety, precision, and better outcomes.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
        icon: <Radar className="w-5 h-5" />,
    },
    {
        id: "home-drainage-counselling",
        title: "Home Drainage Counselling",
        desc: "Patient education and guidance for safe IPC fluid drainage at home.",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
    {
        id: "pleural-disease-followup",
        title: "Pleural Disease Follow-Up",
        desc: "Long-term monitoring and follow-up care for pleural disease patients.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "advanced-pleural-interventions",
        title: "Advanced Pleural Interventions",
        desc: "Comprehensive interventional pulmonology procedures for complex pleural conditions.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is an Indwelling Pleural Catheter (IPC)?",
        answer:
            "An Indwelling Pleural Catheter (IPC) is a soft, flexible tube placed in the pleural space to allow long-term drainage of fluid at home, helping relieve breathlessness caused by recurrent pleural effusion.",
    },
    {
        question: "Who needs an IPC?",
        answer:
            "IPC is recommended for patients with recurrent pleural effusion, malignant pleural effusion, or trapped lung where fluid keeps reaccumulating despite repeated drainage procedures.",
    },
    {
        question: "Is IPC insertion painful?",
        answer:
            "IPC insertion is a minimally invasive procedure performed under local anesthesia, making it relatively comfortable with minimal discomfort during and after the procedure.",
    },
    {
        question: "Can pleural fluid be drained at home with IPC?",
        answer:
            "Yes, IPC allows patients or caregivers to safely drain pleural fluid at home after proper training, reducing repeated hospital visits.",
    },
    {
        question: "What is trapped lung?",
        answer:
            "Trapped lung is a condition where the lung cannot fully expand due to thickened pleura, leading to persistent fluid accumulation and breathlessness.",
    },
    {
        question: "Is IPC a permanent device?",
        answer:
            "IPC may remain in place for a variable duration depending on fluid control and underlying disease. In some cases, it can be removed if fluid stops accumulating.",
    },
];

const ipcIndications = [
    { title: "Recurrent Malignant Pleural Effusion", icon: AlertTriangle },
    { title: "Trapped Lung Syndrome", icon: Wind },
    { title: "Repeated Breathlessness due to Fluid Reaccumulation", icon: RefreshCw },
    { title: "Advanced Cancer-Related Pleural Disease", icon: ShieldAlert },
    { title: "Frequent Pleural Tapping Requirement", icon: Droplets },
    { title: "Symptom-Focused Palliative Respiratory Care", icon: Heart },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Indwelling Pleural Catheter (IPC) Clinic for Recurrent Pleural Effusion & Trapped Lung"
                description="Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, offers advanced Indwelling Pleural Catheter (IPC) insertion for patients suffering from recurrent pleural effusion, malignant pleural effusion, and trapped lung causing repeated breathlessness and hospital visits."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO SECTION (UNCHANGED CONTENT) */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Pleural Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Indwelling Pleural Catheter (IPC) Clinic for Recurrent Pleural Effusion & Trapped Lung
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, offers advanced Indwelling Pleural Catheter (IPC) insertion for patients suffering from recurrent pleural effusion, malignant pleural effusion, and trapped lung causing repeated breathlessness and hospital visits.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                An Indwelling Pleural Catheter is a minimally invasive long-term drainage solution that helps patients manage recurrent fluid accumulation around the lungs comfortably at home while improving breathing and quality of life. IPC is especially useful in patients where pleural fluid repeatedly reaccumulates despite repeated tapping or when the lung is unable to fully expand (trapped lung).
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1170&auto=format&fit=crop"
                                alt="IPC pleural catheter procedure"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* INDICATIONS */}
                <div className="mb-10 mt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                        IPC Indications
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                        IPC may be recommended for:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                        {ipcIndications.map((item, index) => {
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

                {/* HIGHLIGHT CARD (UNCHANGED TEXT) */}
                <div className="py-16 pb-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm">
                        <div className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569] relative z-10">
                            The procedure is performed using image-guided minimally invasive techniques with emphasis on patient comfort, infection prevention, home drainage education, and long-term symptom relief.
                        </p>
                    </div>
                </div>

            </div>

            {/* SERVICES CAROUSEL */}
            <ServicesCarousal
                heading="Services Offered"
                description="Advanced pleural care services for recurrent pleural effusion, trapped lung, malignant pleural disease, and long-term symptom management."
                services={services}
            />

            {/* SECOND HIGHLIGHT */}
            <div className="py-16 pb-8 max-w-7xl p-4 mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm">
                    <div className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                        style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                    />
                    <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569]">
                        The clinic focuses on reducing repeated hospital admissions, improving patient comfort, and providing advanced evidence-based pleural care through modern interventional pulmonology techniques.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert IPC insertion and recurrent pleural effusion management in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers about Indwelling Pleural Catheter (IPC), recurrent pleural effusion, trapped lung, and long-term pleural fluid management."
                faqs={faqs}
            />
        </>
    );
}