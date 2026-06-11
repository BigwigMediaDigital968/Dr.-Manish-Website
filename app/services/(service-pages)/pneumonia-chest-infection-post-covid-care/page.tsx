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
    Stethoscope,
    HeartPulse,
    Thermometer,
    Droplets,
    AlertTriangle,
    Hospital,
    Pill,
    ClipboardList,
    Gauge,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";

export const services = [
    {
        id: "pneumonia-management",
        title: "Pneumonia Management",
        desc: "Evidence-based diagnosis and treatment for all types of pneumonia and lung infections.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
        icon: <FaLungs className="w-5 h-5" />,
    },
    {
        id: "post-covid-lung-care",
        title: "Post-COVID Lung Care",
        desc: "Specialized respiratory rehabilitation and follow-up care for post-COVID lung complications.",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "severe-respiratory-infection",
        title: "Severe Respiratory Infection Evaluation",
        desc: "Advanced evaluation and management of complicated chest infections.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
        icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
        id: "oxygen-therapy-guidance",
        title: "Oxygen Therapy Guidance",
        desc: "Assessment and counselling for oxygen requirement in respiratory illness.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Gauge className="w-5 h-5" />,
    },
    {
        id: "chronic-cough-fever-evaluation",
        title: "Chronic Cough & Fever Evaluation",
        desc: "Comprehensive workup for persistent cough, fever, and respiratory symptoms.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Thermometer className="w-5 h-5" />,
    },
    {
        id: "pft-testing",
        title: "Pulmonary Function Testing (PFT)",
        desc: "Lung capacity and respiratory function assessment using advanced spirometry.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <ClipboardList className="w-5 h-5" />,
    },
    {
        id: "bronchoscopy-non-resolving-infection",
        title: "Bronchoscopy for Non-Resolving Infection",
        desc: "Diagnostic bronchoscopy for persistent or unexplained lung infections.",
        image: "https://images.unsplash.com/photo-1584367369851-8b966cf223b2?q=80&w=1200&auto=format&fit=crop",
        icon: <ScanSearch className="w-5 h-5" />,
    },
    {
        id: "preventive-lung-health",
        title: "Preventive Lung Health Consultation",
        desc: "Long-term lung protection, risk reduction, and respiratory wellness planning.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "vaccination-respiratory-care",
        title: "Vaccination & Respiratory Prevention Counselling",
        desc: "Guidance on vaccines and preventive care to reduce respiratory infections.",
        image: "https://images.unsplash.com/photo-1583911860207-93a4e2c7b6f6?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-respiratory-care",
        title: "Multidisciplinary Respiratory Care",
        desc: "Collaborative management of complex chest infections and lung diseases.",
        image: "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is pneumonia?",
        answer:
            "Pneumonia is a lung infection that causes inflammation and fluid or pus accumulation in the air sacs, leading to cough, fever, and breathing difficulty.",
    },
    {
        question: "When should I see a doctor for chest infection?",
        answer:
            "You should seek medical attention if you have high fever, persistent cough, chest pain, breathlessness, or low oxygen levels.",
    },
    {
        question: "Is pneumonia dangerous?",
        answer:
            "Yes, pneumonia can be serious especially in elderly patients, children, or those with weak immunity, and may require hospitalization in severe cases.",
    },
    {
        question: "What is post-COVID lung disease?",
        answer:
            "Post-COVID lung disease refers to persistent respiratory symptoms or lung damage after recovery from COVID-19 infection.",
    },
    {
        question: "Can pneumonia be treated at home?",
        answer:
            "Mild cases can be treated at home with antibiotics and monitoring, but severe cases require hospitalization and oxygen support.",
    },
];

const indications = [
    { title: "Pneumonia Diagnosis & Treatment", icon: FaLungs },
    { title: "Severe Chest Infection", icon: AlertTriangle },
    { title: "Post-COVID Lung Disease", icon: Activity },
    { title: "Recurrent Lung Infections", icon: RefreshCw },
    { title: "Breathlessness Evaluation", icon: Wind },
    { title: "Low Oxygen Levels", icon: Gauge },
    { title: "Pleural Effusion due to Infection", icon: Droplets },
    { title: "Non-Resolving Pneumonia", icon: ScanSearch },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Pneumonia, Severe Chest Infection & Post-COVID Lung Care Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive care for pneumonia, severe chest infections, recurrent lung infections, post-viral lung complications, and respiratory failure requiring specialized pulmonary support."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Chest Infection Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Pneumonia, Severe Chest Infection <br /> & Post-COVID Lung Care
                            </h2>


                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                Pneumonia is one of the most common causes of hospitalization and can affect children, adults, elderly individuals, and patients with diabetes, heart disease, smoking history, or weak immunity. Early diagnosis and timely treatment are essential to prevent complications such as respiratory failure, sepsis, pleural effusion, and long-term lung damage.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                The clinic offers evidence-based management for community-acquired pneumonia, recurrent chest infections, aspiration pneumonia, atypical infections, post-influenza lung infection, and complicated respiratory illnesses. Patients with fever, cough, breathlessness, chest pain, low oxygen levels, or persistent weakness are comprehensively evaluated using modern respiratory diagnostics.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop"
                                alt="Pneumonia and chest infection care"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="pt-10">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                            COVID-19 Care
                        </span>

                        <div className="flex flex-col gap-6">

                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-relaxed">
                                Dedicated Support During COVID-19 Pandemic
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                During the COVID-19 pandemic, Dr. Manish Aggarwal actively supported and guided more than a thousand patients through consultation, respiratory care advice, oxygen guidance, home management support, and hospitalization coordination during one of the most challenging healthcare crises. In recognition of dedicated frontline contribution and patient care services during the pandemic, he was honored with the Corona Warrior Certificate.
                            </p>


                        </div>

                    </div>
                </div>

                {/* INDICATIONS */}
                <div className="mb-10 mt-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                        High-Risk & Clinical Conditions
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                        Special expertise is available for:
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
                description="Comprehensive care for pneumonia, severe chest infections, post-COVID lung disease, and complex respiratory conditions."
                services={services}
            />

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4">
                {/* NOTE CARD */}
                <div className="py-16 pt-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm">
                        <div
                            className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569] relative z-10">
                            The clinic focuses on early intervention, compassionate respiratory care, evidence-based treatment, and long-term lung recovery support for patients with serious chest infections and post-viral respiratory complications.
                        </p>
                    </div>
                </div>
                <CTA
                    description={
                        <>Book consultation for expert pneumonia treatment and advanced respiratory care in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers about pneumonia, chest infections, post-COVID lung issues, and respiratory care."
                faqs={faqs}
            />
        </>
    );
}