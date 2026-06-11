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
    Moon,
    GitBranch,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";
export const services = [
    {
        id: "pulmonary-hypertension-evaluation",
        title: "Pulmonary Hypertension Evaluation",
        desc: "Comprehensive assessment of pulmonary hypertension and unexplained breathlessness.",
        image: "https://images.unsplash.com/photo-1758691462954-e6fa5005474b?q=80&w=1332&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "primary-pulmonary-hypertension",
        title: "Primary Pulmonary Hypertension Care",
        desc: "Specialized evaluation and management of pulmonary arterial hypertension (PAH).",
        image: "https://images.unsplash.com/photo-1623658045230-605cb00c80d6?q=80&w=1170&auto=format&fit=crop",
        icon: <HeartPulse className="w-5 h-5" />,
    },
    {
        id: "ild-associated-ph",
        title: "ILD-Associated Pulmonary Hypertension",
        desc: "Assessment and management of pulmonary hypertension associated with interstitial lung disease.",
        image: "https://images.unsplash.com/photo-1758691461957-474a7686e388?q=80&w=1332&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "copd-related-ph",
        title: "COPD-Related Pulmonary Hypertension",
        desc: "Evaluation of pulmonary vascular complications in COPD and chronic lung disease.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <FaLungs className="w-5 h-5" />,
    },
    {
        id: "breathlessness-oxygen-assessment",
        title: "Breathlessness & Oxygen Assessment",
        desc: "Detailed evaluation of exercise limitation, oxygen levels, and respiratory symptoms.",
        image: "https://images.unsplash.com/photo-1626851528990-fee2c2e6fadb?q=80&w=2070&auto=format&fit=crop",
        icon: <Gauge className="w-5 h-5" />,
    },
    {
        id: "pulmonary-vascular-disease",
        title: "Pulmonary Vascular Disease Evaluation",
        desc: "Advanced assessment of pulmonary artery disorders and pulmonary circulation abnormalities.",
        image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1170&auto=format&fit=crop",
        icon: <Radar className="w-5 h-5" />,
    },
    {
        id: "long-term-monitoring",
        title: "Long-Term Respiratory Monitoring",
        desc: "Regular monitoring of disease progression, symptoms, and treatment response.",
        image: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?q=80&w=1332&auto=format&fit=crop",
        icon: <ClipboardList className="w-5 h-5" />,
    },
    {
        id: "advanced-respiratory-consultation",
        title: "Advanced Respiratory Consultation",
        desc: "Expert consultation for complex pulmonary vascular and respiratory disorders.",
        image: "https://images.unsplash.com/photo-1758691462413-b07dee2933fe?q=80&w=1332&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "pulmonary-rehabilitation",
        title: "Pulmonary Rehabilitation Guidance",
        desc: "Lifestyle, exercise, and rehabilitation advice to improve daily functioning.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1170&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-ph-care",
        title: "Multidisciplinary PH Care Coordination",
        desc: "Integrated care involving respiratory, cardiac, imaging, and systemic disease specialists.",
        image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
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

const pulmonaryHypertensionCauses = [
    { title: "Interstitial Lung Disease (ILD)", icon: Activity },
    { title: "COPD & Smoking-Related Lung Disease", icon: Wind },
    { title: "Sleep Apnea", icon: Moon },
    { title: "Chronic Pulmonary Embolism", icon: GitBranch },
    { title: "Connective Tissue Diseases", icon: ShieldCheck },
    { title: "Congenital Heart Disease", icon: Heart },
    { title: "Chronic Hypoxia", icon: Gauge },
    { title: "Left Heart Disease", icon: HeartPulse },
    { title: "Sarcoidosis", icon: Microscope },
    { title: "Liver Disease", icon: Pill },
    { title: "Post-COVID Lung Damage", icon: Stethoscope },
    { title: "Idiopathic (Primary) Pulmonary Hypertension", icon: SearchCheck },
];

const pulmonaryHypertensionEvaluation = [
    { title: "Pulmonary Function Testing (PFT)", icon: Activity },
    { title: "HRCT Chest Interpretation", icon: ScanSearch },
    { title: "Echocardiography Correlation", icon: HeartPulse },
    { title: "Six-Minute Walk Test", icon: Footprints },
    { title: "Oxygen Assessment", icon: Wind },
    { title: "Sleep Evaluation", icon: Moon },
    { title: "CT Pulmonary Angiography Review", icon: Scan },
    { title: "Autoimmune Disease Workup Coordination", icon: ShieldCheck },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Pulmonary Hypertension (PH) & Advanced Breathlessness Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides specialized evaluation and management for Pulmonary Hypertension (PH), a serious condition involving increased pressure in the blood vessels of the lungs that can gradually affect heart and lung function."
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Oxygen Therapy
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Pulmonary Vascular Disease Care
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Pulmonary hypertension is often underdiagnosed because symptoms such as breathlessness, fatigue, chest discomfort, dizziness, and reduced exercise tolerance may initially appear mild or resemble common respiratory problems like asthma or COPD. Early diagnosis is extremely important as timely treatment can significantly improve quality of life and long-term outcomes.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                The clinic has special interest and experience in diagnosing complex and rare pulmonary vascular disorders, including Primary Pulmonary Hypertension (Pulmonary Arterial Hypertension), using comprehensive clinical assessment and advanced respiratory evaluation.
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
                        Underlying Causes
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Pulmonary Hypertension May Develop Due to Multiple Conditions
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Pulmonary hypertension is often a consequence of underlying heart, lung,
                        vascular, or systemic disorders. Identifying the root cause is essential
                        for accurate diagnosis, risk assessment, and treatment planning.
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-[#0f172a]">
                        Common causes and associated conditions include:
                    </h3>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {pulmonaryHypertensionCauses.map((item, index) => {
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
                <section className="pt-12">

    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
        PH Evaluation
    </span>

    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
        Comprehensive Pulmonary Vascular Assessment
    </h2>

    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
        Patients with unexplained breathlessness, low oxygen levels, syncope,
        exercise intolerance, enlarged pulmonary arteries, or suspected right
        heart strain require detailed pulmonary vascular evaluation to identify
        the underlying cause and assess disease severity.
    </p>

    <h3 className="mt-8 text-lg font-semibold text-[#0f172a]">
        Evaluation may include:
    </h3>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {pulmonaryHypertensionEvaluation.map((item, index) => {
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
        <h3 className="font-semibold text-[#0f172a] mb-2">
            Evidence-Based Treatment Strategies
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
            The clinic also focuses on newer evidence-based treatment strategies
            now increasingly available in India for selected patients with
            pulmonary arterial hypertension, including targeted pulmonary
            vasodilator therapies aimed at improving exercise capacity,
            symptom control, and slowing disease progression.
        </p>
    </div>

</section>

            </div>

            <div>
                <ServicesCarousal
                    heading="Services Offered"
                    description="Comprehensive pulmonary rehabilitation and respiratory recovery services designed to improve lung function, physical endurance, oxygen utilization, and quality of life after serious respiratory illnesses and critical care."
                    services={services}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Long-Term Lung Health
                    </span>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-2">
                        The clinic emphasizes early diagnosis, individualized treatment planning, careful long-term follow-up, and comprehensive respiratory care for patients with complex pulmonary vascular disease.
                    </p>
                </div>
            </div>

            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert pulmonary hypertension evaluation and advanced respiratory care in Delhi.</>
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