import {
    Activity,
    ShieldPlus,
    Users,
    Stethoscope,
    AlertTriangle,
    Microscope,
    Wind,
    Radar,
    ShieldCheck,
    RefreshCw,
    Droplets,
    CircleDot,
    Pill,
    Network,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";

export const services = [
    {
        id: "pulmonary-rehabilitation",
        title: "Pulmonary Rehabilitation",
        desc: "Comprehensive respiratory rehabilitation programs designed to improve breathing, endurance, and overall lung function.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "post-icu-lung-recovery",
        title: "Post-ICU Lung Recovery",
        desc: "Structured recovery support for patients experiencing weakness, breathlessness, and reduced physical capacity after ICU care.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "post-ventilator-respiratory-care",
        title: "Post-Ventilator Respiratory Care",
        desc: "Specialized care focused on restoring respiratory strength and function after prolonged mechanical ventilation.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "copd-rehabilitation",
        title: "COPD Rehabilitation",
        desc: "Exercise, breathing training, and symptom management programs for patients recovering from COPD exacerbations.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <RefreshCw className="w-5 h-5" />,
    },
    {
        id: "ards-recovery-support",
        title: "ARDS Recovery Support",
        desc: "Long-term respiratory recovery and rehabilitation plans for patients recovering from ARDS.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
        id: "post-pneumonia-lung-care",
        title: "Post-Pneumonia Lung Care",
        desc: "Monitoring and rehabilitation support to restore lung function following severe pneumonia.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "oxygen-therapy-guidance",
        title: "Oxygen Therapy Guidance",
        desc: "Assessment, titration, and long-term oxygen management tailored to individual recovery needs.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "pulmonary-function-testing",
        title: "Pulmonary Function Testing (PFT)",
        desc: "Objective evaluation of lung function to monitor recovery progress and guide rehabilitation plans.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <Radar className="w-5 h-5" />,
    },
    {
        id: "exercise-tolerance-assessment",
        title: "Exercise Tolerance Assessment",
        desc: "Detailed assessment of endurance and physical performance to create personalized recovery goals.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
        icon: <CircleDot className="w-5 h-5" />,
    },
    {
        id: "long-term-respiratory-monitoring",
        title: "Long-Term Respiratory Monitoring",
        desc: "Ongoing evaluation and support to promote sustained lung health and prevent complications.",
        image: "https://images.unsplash.com/photo-1631217868264-e6b90bb7e133?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is pulmonary rehabilitation?",
        answer:
            "Pulmonary rehabilitation is a structured program that combines breathing exercises, physical conditioning, education, and medical guidance to help patients recover from lung diseases and improve respiratory function.",
    },
    {
        question: "Who can benefit from pulmonary rehabilitation?",
        answer:
            "Patients recovering from severe pneumonia, COPD exacerbations, ARDS, post-COVID lung disease, ICU stays, mechanical ventilation, chronic respiratory failure, and interstitial lung disease may benefit from pulmonary rehabilitation.",
    },
    {
        question: "How does pulmonary rehabilitation improve breathing?",
        answer:
            "The program includes breathing exercises, lung expansion techniques, airway clearance methods, and supervised conditioning exercises that help improve lung efficiency and reduce breathlessness.",
    },
    {
        question: "Is pulmonary rehabilitation useful after ICU admission?",
        answer:
            "Yes. Many patients experience weakness, reduced exercise capacity, and breathing difficulties after ICU admission. Pulmonary rehabilitation helps restore physical function and respiratory strength.",
    },
    {
        question: "Can rehabilitation help after ventilator support?",
        answer:
            "Yes. Patients recovering from prolonged mechanical ventilation often require respiratory rehabilitation to rebuild endurance, improve breathing patterns, and regain independence in daily activities.",
    },
];


const rehabilitationConditions = [
    { title: "Severe Pneumonia Recovery", icon: ShieldCheck },
    { title: "COPD Exacerbation Recovery", icon: RefreshCw },
    { title: "ARDS Recovery Support", icon: Activity },
    { title: "Prolonged Mechanical Ventilation", icon: Wind },
    { title: "Post-COVID Lung Disease", icon: ShieldPlus },
    { title: "Interstitial Lung Disease (ILD)", icon: Microscope },
    { title: "Chronic Respiratory Failure", icon: AlertTriangle },
    { title: "ICU-Related Deconditioning", icon: Users }
];


const rehabilitationPrograms = [
    { title: "Breathing Exercises & Lung Expansion Techniques", icon: Wind },
    { title: "Oxygen Assessment & Titration", icon: Droplets },
    { title: "Exercise Conditioning & Endurance Training", icon: Activity },
    { title: "Airway Clearance Techniques", icon: ShieldCheck },
    { title: "Inhaler & Nebulization Optimization", icon: Pill },
    { title: "Nutritional & Lifestyle Guidance", icon: Users },
    { title: "Pulmonary Function Monitoring", icon: Radar },
    { title: "Anxiety & Breathlessness Counselling", icon: ShieldPlus },
    { title: "Home Oxygen & NIV Guidance", icon: Network },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Pulmonary Rehabilitation & Lung Recovery Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive pulmonary rehabilitation, post-ICU respiratory recovery, COPD rehabilitation, and advanced lung recovery care for patients recovering from severe lung diseases, prolonged hospitalization, oxygen therapy, and ventilator support."
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Lung Recovery Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Pulmonary Rehabilitation <br /> & Respiratory Recovery
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Sarcoidosis is an inflammatory disease that can affect the lungs, lymph nodes, skin, eyes, and other organs, commonly presenting with cough, breathlessness, fatigue, fever, chest discomfort, or enlarged chest lymph nodes. In India, differentiating sarcoidosis from tuberculosis is especially important because both conditions may appear similar on CT scans, PET imaging, bronchoscopy findings, and even tissue pathology.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                The clinic focuses on accurate diagnosis using advanced bronchoscopic and interventional pulmonology techniques to avoid misdiagnosis and ensure appropriate treatment planning.

                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=1170&auto=format&fit=crop"
                                alt="Pulmonary rehabilitation and lung recovery program"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                <section className="pt-12">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Recovery Focus Areas
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Pulmonary rehabilitation is especially beneficial for patients recovering from:
                    </h2>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {rehabilitationConditions.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] font-bold">
                                            <IconComponent className="h-5 w-5" />
                                        </div>

                                        <h3 className="font-medium text-[#0f172a]/80 leading-snug group-hover:text-[#1fa8e8] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>



                </section>

                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Rehabilitation Program
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Individualized Recovery Plans May Include:
                        </h2>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {rehabilitationPrograms.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] font-bold">
                                                <IconComponent className="h-5 w-5" />
                                            </div>

                                            <h3 className="font-medium text-[#0f172a]/80 leading-snug group-hover:text-[#1fa8e8] transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                                Special attention is given to patients recovering from prolonged ventilation and ICU stay who continue to experience weakness, low oxygen levels, recurrent infections, persistent cough, or difficulty performing routine activities.                            </p>
                        </div>

                    </div>
                </section>

            </div>

            <ServicesCarousal
                heading="Services Offered"
                description="Comprehensive pulmonary rehabilitation and respiratory recovery services designed to improve lung function, physical endurance, oxygen utilization, and quality of life after serious respiratory illnesses and critical care."
                services={services}
            />
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Long-Term Lung Health
                    </span>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-2">
                        The clinic emphasizes evidence-based respiratory rehabilitation, gradual recovery planning, patient motivation, and long-term lung health improvement through comprehensive multidisciplinary care.
                    </p>
                </div>
            </div>

            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for pulmonary rehabilitation and advanced lung recovery care in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about pulmonary rehabilitation, post-ICU recovery, COPD rehabilitation, ARDS recovery, oxygen therapy, breathing exercises, ventilator recovery, and long-term respiratory care."
                faqs={faqs}
            />
        </>
    );
}