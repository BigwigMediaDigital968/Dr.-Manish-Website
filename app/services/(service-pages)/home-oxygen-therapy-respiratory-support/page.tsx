import {
    Wind,
    Activity,
    ShieldPlus,
    Microscope,
    Users,
    Droplets,
    Stethoscope,
    Scissors,
    CircleDashed,
    Expand,
    ShieldAlert,
    Syringe,
    ScanSearch,
    ShieldCheck,
    Network,
    SearchCheck,
    CircleDot,
    Radar,
    Search,
    RefreshCw,
    AlertTriangle,
    Database,
    AlertCircle,
    Pill,
    Telescope,
    ClipboardList,
    HeartPulse,
    Monitor,
    Settings,
    Footprints,
    Gauge,
    Scan,
    Heart,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";
export const services = [
    {
        id: "home-oxygen-assessment",
        title: "Home Oxygen Assessment",
        desc: "Comprehensive clinical evaluation to determine precise oxygen requirements at rest, during sleep, and on exertion.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "oxygen-saturation-evaluation",
        title: "Oxygen Saturation Evaluation",
        desc: "Accurate monitoring and assessment of blood oxygen levels to guide therapeutic adjustments.",
        image: "https://images.unsplash.com/photo-1626851528990-fee2c2e6fadb?q=80&w=1170&auto=format&fit=crop",
        icon: <Gauge className="w-5 h-5" />,
    },
    {
        id: "six-minute-walk-testing",
        title: "Six-Minute Walk Testing",
        desc: "Objective evaluation of exertional hypoxemia to prescribe ambulatory oxygen and monitor physical capacity.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
        icon: <Footprints className="w-5 h-5" />,
    },
    {
        id: "long-term-oxygen-therapy",
        title: "Long-Term Oxygen Therapy (LTOT) Guidance",
        desc: "Evidence-based guidance for continuous oxygen use to improve survival and quality of life in chronic respiratory failure.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "copd-ild-oxygen-management",
        title: "COPD & ILD Oxygen Management",
        desc: "Tailored oxygen therapy plans for patients with COPD, pulmonary fibrosis, and interstitial lung disease.",
        image: "https://images.unsplash.com/photo-1682706841281-f723c5bfcd83?q=80&w=1171&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "pulmonary-rehabilitation-support",
        title: "Pulmonary Rehabilitation Support",
        desc: "Integrating oxygen therapy with exercise conditioning to optimize endurance and reduce breathlessness.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "oxygen-device-counselling",
        title: "Oxygen Device Counselling",
        desc: "Expert guidance on selecting concentrators, cylinders, portable devices, and proper oxygen delivery systems.",
        image: "https://images.unsplash.com/photo-1615486510988-2c6ecc66ceba?q=80&w=1170&auto=format&fit=crop",
        icon: <Settings className="w-5 h-5" />,
    },
    {
        id: "niv-bipap-guidance",
        title: "NIV/BiPAP Guidance",
        desc: "Assessment and support for non-invasive ventilation in patients requiring advanced respiratory assistance.",
        image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?q=80&w=1932&auto=format&fit=crop",
        icon: <Monitor className="w-5 h-5" />,
    },
    {
        id: "breathlessness-management",
        title: "Breathlessness Management",
        desc: "Comprehensive strategies and breathing techniques to help control severe shortness of breath.",
        image: "https://images.unsplash.com/photo-1775133262755-254aeaa47843?q=80&w=1170&auto=format&fit=crop",
        icon: <HeartPulse className="w-5 h-5" />,
    },
    {
        id: "long-term-respiratory-monitoring",
        title: "Long-Term Respiratory Monitoring",
        desc: "Regular follow-up to optimize oxygen therapy, track lung function, and improve long-term respiratory health.",
        image: "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?q=80&w=1332&auto=format&fit=crop",
        icon: <ClipboardList className="w-5 h-5" />,
    },
];

const oxygenConditions = [
    { title: "COPD with Low Oxygen Levels", icon: ShieldCheck },
    { title: "Interstitial Lung Disease (ILD)", icon: Microscope },
    { title: "Pulmonary Fibrosis", icon: Activity },
    { title: "Hypersensitivity Pneumonitis", icon: AlertTriangle },
    { title: "Post-COVID Lung Damage", icon: ShieldPlus },
    { title: "Chronic Respiratory Failure", icon: Wind },
    { title: "Pulmonary Hypertension", icon: Activity },
    { title: "Advanced Lung Disease with Breathlessness", icon: AlertCircle }
];

const homeOxygenOptions = [
    { title: "Oxygen Concentrator", icon: Wind },
    { title: "Oxygen Cylinder Support", icon: Database },
    { title: "Portable Oxygen Devices", icon: Activity },
    { title: "Ambulatory Oxygen for Walking", icon: CircleDot },
    { title: "Nocturnal (Night-Time) Oxygen Therapy", icon: RefreshCw },
    { title: "High-Flow Oxygen Support in Selected Patients", icon: Droplets },
    { title: "BiPAP/NIV Respiratory Support Guidance", icon: Network },
];

const faqs = [
    {
        question: "What is long-term oxygen therapy (LTOT)?",
        answer:
            "Long-term oxygen therapy (LTOT) is the continuous administration of oxygen at home for patients with chronic respiratory failure. Typically prescribed for 15 hours or more per day, it helps maintain adequate oxygen levels, reduce breathlessness, and protect vital organs from hypoxia.",
    },
    {
        question: "Does starting home oxygen therapy mean I will be permanently dependent on it?",
        answer:
            "No. Oxygen is not an addictive substance, and starting it does not create a physical addiction or permanent dependency. It is simply a medical therapy used to correct oxygen deficiencies. Some patients only require it temporarily during recovery from an illness, while others with progressive, chronic diseases may require it long-term to safeguard organ health.",
    },
    {
        question: "How is the required oxygen flow rate determined?",
        answer:
            "The precise oxygen flow rate (measured in liters per minute) is determined by a chest specialist based on diagnostic tests, including arterial blood gas (ABG) analysis, pulse oximetry, and dynamic tests like the Six-Minute Walk Test.",
    },
    {
        question: "What is the difference between an oxygen concentrator and an oxygen cylinder?",
        answer:
            "An oxygen concentrator is an electrical device that filters nitrogen out of ambient air to deliver continuous, high-purity oxygen. An oxygen cylinder contains a fixed amount of compressed gaseous oxygen and requires regular refills, making it useful as a backup or for short-term/emergency portable use.",
    },
    {
        question: "What are the risks of oxygen toxicity or excess oxygen?",
        answer:
            "Using home oxygen at higher flow rates than prescribed can lead to oxygen toxicity, which causes lung tissue inflammation or, in patients with conditions like COPD, causes CO2 retention. Carbon dioxide retention can lead to severe drowsiness, confusion, and respiratory depression. Always stick strictly to your doctor's prescribed flow settings.",
    },
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
                title="Home Oxygen Therapy & Long-Term Respiratory Support Clinic in Delhi"
                description="Specialized care for patients with low oxygen levels, including oxygen assessment, therapy planning, equipment guidance, and long-term monitoring."
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oxygen Therapy
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Home Oxygen Therapy <br /> & Respiratory Support
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Many patients with COPD, Interstitial Lung Disease (ILD), hypersensitivity pneumonitis, pulmonary fibrosis, post-COVID lung disease, and chronic respiratory illness may require oxygen support to maintain healthy oxygen levels and protect vital organs. Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive assessment and guidance for safe and appropriate home oxygen therapy.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                One of the most common myths is that “starting oxygen means becoming permanently dependent.” In reality, oxygen is a medical therapy used to correct low oxygen levels and reduce strain on the lungs, heart, and brain. When prescribed appropriately, oxygen therapy can improve breathlessness, sleep quality, exercise tolerance, organ function, and overall quality of life.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop"
                                alt="Home oxygen therapy and respiratory support"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                    </div>
                </div>

                <section className="pt-12">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oxygen Assessment
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Identifying Patients Who Benefit from Oxygen Therapy
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        The clinic focuses on identifying patients who truly benefit from oxygen
                        while avoiding unnecessary or unsafe oxygen use.
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-[#0f172a]">
                        Home oxygen may be required in:
                    </h3>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {oxygenConditions.map((item, index) => {
                            const IconComponent = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8]">
                                            <IconComponent className="h-5 w-5" />
                                        </div>

                                        <h3 className="font-medium text-[#0f172a]/80 leading-snug group-hover:text-[#1fa8e8] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Special emphasis is placed on patient education regarding oxygen
                            safety, correct flow settings, mobility, travel guidance, and
                            long-term monitoring.
                        </p>
                    </div>

                </section>
                <section className="pt-12">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oxygen Therapy Options
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Safe Oxygen Use & Home Oxygen Support Solutions
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        The clinic also educates patients regarding oxygen toxicity and oxidative
                        stress. Excessive or unnecessary oxygen administration may sometimes be
                        harmful, especially in selected respiratory conditions, which is why
                        oxygen should always be used under medical supervision with
                        individualized targets and monitoring.
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-[#0f172a]">
                        Different Home Oxygen Options Available
                    </h3>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {homeOxygenOptions.map((item, index) => {
                            const IconComponent = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8]">
                                            <IconComponent className="h-5 w-5" />
                                        </div>

                                        <h3 className="font-medium text-[#0f172a]/80 leading-snug group-hover:text-[#1fa8e8] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </section>

            </div>

            <div>
                <ServicesCarousal
                    heading="Services Offered"
                    description="Comprehensive guidance, dynamic evaluation, oxygen-titration testing, safety protocols, and long-term device monitoring to deliver precise, therapeutic respiratory support at home."
                    services={services}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Long-Term Lung Health
                    </span>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-2">
The clinic focuses on evidence-based oxygen therapy, improving patient confidence, maintaining independence, and enhancing long-term respiratory health while avoiding common misconceptions regarding oxygen use.
                    </p>
                </div>
            </div>

            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert home oxygen guidance and chronic respiratory care in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common queries regarding home oxygen therapy, concentrator usage, oxygen flow targets, safety precautions, and long-term respiratory support."
                faqs={faqs}
            />
        </>
    );
}