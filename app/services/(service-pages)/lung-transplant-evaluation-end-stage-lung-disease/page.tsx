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
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";
import LungTransplantCenters from "../component/LungTransplantCenters";

export const services = [
    {
        id: "lung-transplant-evaluation",
        title: "Lung Transplant Evaluation",
        desc: "Comprehensive assessment to determine transplant suitability in advanced end-stage lung disease.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <SearchCheck className="w-5 h-5" />,
    },
    {
        id: "transplant-counselling",
        title: "Transplant Counselling",
        desc: "Detailed guidance regarding transplant eligibility, timing, expectations, and long-term outcomes.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
    {
        id: "end-stage-lung-disease-management",
        title: "End-Stage Lung Disease Management",
        desc: "Advanced respiratory care for patients with progressive and irreversible lung diseases.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "pulmonary-fibrosis-transplant-assessment",
        title: "Pulmonary Fibrosis Assessment",
        desc: "Evaluation of advanced pulmonary fibrosis and ILD patients for transplant referral.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "pulmonary-hypertension-evaluation",
        title: "Pulmonary Hypertension Evaluation",
        desc: "Comprehensive assessment of severe pulmonary hypertension requiring advanced interventions.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "oxygen-dependence-assessment",
        title: "Oxygen Dependence Assessment",
        desc: "Evaluation of progressive oxygen requirements and advanced respiratory support needs.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "pulmonary-rehabilitation-planning",
        title: "Pulmonary Rehabilitation Planning",
        desc: "Pre-transplant conditioning and rehabilitation programs to improve transplant readiness.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
        icon: <RefreshCw className="w-5 h-5" />,
    },
    {
        id: "infection-comorbidity-screening",
        title: "Infection & Comorbidity Screening",
        desc: "Detailed screening to identify conditions affecting transplant suitability and outcomes.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-respiratory-consultation",
        title: "Multidisciplinary Respiratory Consultation",
        desc: "Collaborative evaluation involving pulmonology, rehabilitation, transplant, and critical care experts.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <Network className="w-5 h-5" />,
    },
    {
        id: "long-term-respiratory-monitoring",
        title: "Long-Term Respiratory Monitoring",
        desc: "Ongoing monitoring and optimization for advanced respiratory disease progression.",
        image: "https://images.unsplash.com/photo-1631217868264-e6b90bb7e133?q=80&w=1200&auto=format&fit=crop",
        icon: <Radar className="w-5 h-5" />,
    },
];


const faqs = [
  {
    question: "What is a lung transplant?",
    answer:
      "A lung transplant is a surgical procedure that replaces one or both severely diseased lungs with healthy donor lungs in carefully selected patients with end-stage lung disease."
  },
  {
    question: "Who may need a lung transplant evaluation?",
    answer:
      "Patients with advanced lung diseases causing severe breathlessness, declining lung function, oxygen dependence, or poor quality of life despite optimal treatment may require transplant evaluation."
  },
  {
    question: "Which conditions may require lung transplantation?",
    answer:
      "Common conditions include interstitial lung disease (ILD), pulmonary fibrosis, advanced COPD, pulmonary hypertension, bronchiectasis, cystic fibrosis, advanced sarcoidosis, and chronic respiratory failure."
  },
  {
    question: "When should a patient be referred for transplant assessment?",
    answer:
      "Referral is recommended when lung disease continues to worsen despite treatment, oxygen needs increase, hospitalizations become frequent, or daily activities become significantly limited."
  },
  {
    question: "Can post-COVID lung fibrosis require a lung transplant?",
    answer:
      "Yes. In selected patients with severe irreversible post-COVID lung damage and end-stage fibrosis, lung transplantation may be considered after comprehensive multidisciplinary evaluation."
  }
];


const transplantConditions = [
    { title: "Interstitial Lung Disease & Pulmonary Fibrosis", icon: Microscope },
    { title: "Advanced COPD & Emphysema", icon: Wind },
    { title: "Pulmonary Hypertension", icon: Activity },
    { title: "Post-COVID Irreversible Lung Fibrosis", icon: ShieldCheck },
    { title: "Bronchiectasis", icon: CircleDashed },
    { title: "Cystic Fibrosis", icon: Database },
    { title: "Advanced Sarcoidosis", icon: Search },
    { title: "Chronic Respiratory Failure", icon: AlertTriangle },
];

const transplantEvaluationItems = [
    { title: "Pulmonary Function Testing (PFT)", icon: Radar },
    { title: "HRCT Chest Review", icon: ScanSearch },
    { title: "Oxygen Assessment", icon: Droplets },
    { title: "Six-Minute Walk Test", icon: Activity },
    { title: "Pulmonary Rehabilitation Evaluation", icon: RefreshCw },
    { title: "Pulmonary Hypertension Assessment", icon: ShieldCheck },
    { title: "Infection & Comorbidity Screening", icon: ShieldAlert },
    { title: "Multidisciplinary Respiratory Consultation", icon: Network },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Lung Transplant Evaluation & Advanced End-Stage Lung Disease Care in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive lung transplant evaluation, transplant counselling, end-stage lung disease assessment, stabilization, rehabilitation planning, and referral guidance for patients with advanced irreversible respiratory diseases."
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Advanced Lung Failure Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Lung Transplant Evaluation <br /> & End-Stage Lung Disease Care
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                For some patients with advanced irreversible lung disease, lung transplantation may offer a life-extending and quality-of-life improving treatment option when medicines, oxygen therapy, and conventional respiratory support are no longer sufficient. Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive evaluation, counselling, stabilization, and referral guidance for patients who may require lung transplantation.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Lung transplant is considered in carefully selected patients with end-stage lung disease who continue to have severe breathlessness, progressive oxygen dependence, recurrent hospitalization, declining lung function, or poor quality of life despite optimal treatment.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?q=80&w=1332&auto=format&fit=crop"
                                alt="Lung transplant evaluation and advanced respiratory care"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                    </div>
                </div>

                <section className="pt-12">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Transplant Consideration
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Conditions That May Require Lung Transplantation
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Lung transplantation may be considered for patients with severe, progressive lung diseases when conventional treatments are no longer effective.
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {transplantConditions.map((item, index) => {
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

                    
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Lung Transplantation
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Growth of Advanced Lung Transplant Programs in India
                    </h2>

                    <div className="mt-6 space-y-4">
                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            The COVID-19 pandemic significantly increased awareness regarding severe irreversible lung fibrosis and respiratory failure. During this period, a few specialized centers in India successfully performed life-saving double lung transplants in carefully selected patients with post-COVID lung destruction and end-stage fibrosis.
                        </p>

                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            India has gradually developed advanced lung transplant programs with multidisciplinary expertise involving pulmonologists, transplant surgeons, ECMO teams, intensivists, rehabilitation specialists, and long-term transplant care units.
                        </p>
                    </div>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1631941618536-2979d565b726?q=80&w=1170&auto=format&fit=crop"
                                alt="Lung transplant evaluation and advanced respiratory care"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                    </div>

                </section>
                <LungTransplantCenters/>
                <section className="pt-12">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Transplant Readiness
                    </span>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Advanced Assessment, Stabilization & Counselling
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                        Special emphasis is placed on identifying the right timing for referral, optimizing nutrition and rehabilitation, managing oxygen requirements, preventing infection, and counselling patients and families regarding transplant suitability and long-term expectations.
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-[#0f172a]">
                        Evaluation may include:
                    </h3>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {transplantEvaluationItems.map((item, index) => {
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
                            Modern transplant medicine has evolved significantly in recent years with improved surgical expertise, ECMO support systems, rehabilitation protocols, and post-transplant survival outcomes in selected patients.
                        </p>
                    </div>

                </section>

            </div>

            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for advanced end-stage lung disease evaluation, transplant counselling, and comprehensive respiratory care in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about lung transplantation, transplant eligibility, pulmonary fibrosis, COPD, pulmonary hypertension, end-stage lung disease, oxygen dependency, transplant evaluation, and advanced respiratory care."
                faqs={faqs}
            />
        </>
    );
}
