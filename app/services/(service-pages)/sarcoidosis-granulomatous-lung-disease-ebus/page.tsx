import {
    Activity,
    ShieldPlus,
    Users,
    Search,
    Stethoscope,
    HeartPulse,
    ScanSearch,
    Target,
    AlertTriangle,
    Syringe,
    ClipboardList,
    Thermometer,
    Microscope,
    BadgeCheck,
    Eye,
    FileScan,
    Waves,
    Wind,
    Radar,
    ShieldCheck,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";

const services = [
  {
    id: "sarcoidosis-diagnosis-management",
    title: "Sarcoidosis Diagnosis & Management",
    desc: "Comprehensive evaluation and long-term management of pulmonary and systemic sarcoidosis.",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    id: "ebus-tbna-procedures",
    title: "EBUS-TBNA Procedures",
    desc: "Advanced ultrasound-guided lymph node sampling for accurate diagnosis and staging.",
    image: "https://images.unsplash.com/photo-1630531210843-d6f343ad1f90?q=80&w=1172&auto=format&fit=crop",
    icon: <Radar className="w-5 h-5" />,
  },
  {
    id: "endobronchial-biopsy",
    title: "Endobronchial Biopsy (EBB)",
    desc: "Targeted airway tissue sampling to assist in diagnosing sarcoidosis and other lung diseases.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    id: "transbronchial-lung-biopsy",
    title: "Transbronchial Lung Biopsy (TBLB)",
    desc: "Advanced bronchoscopic lung tissue sampling for diagnosis of diffuse and granulomatous lung disorders.",
    image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
    icon: <ScanSearch className="w-5 h-5" />,
  },
  {
    id: "granulomatous-lung-disease-evaluation",
    title: "Granulomatous Lung Disease Evaluation",
    desc: "Expert assessment of complex inflammatory and granulomatous lung conditions.",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: "tb-vs-sarcoidosis-assessment",
    title: "TB vs Sarcoidosis Assessment",
    desc: "Specialized diagnostic evaluation to differentiate tuberculosis from sarcoidosis.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: "pulmonary-function-testing",
    title: "Pulmonary Function Testing (PFT)",
    desc: "Detailed lung function assessment to monitor disease severity and treatment response.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: "advanced-bronchoscopy",
    title: "Advanced Bronchoscopy",
    desc: "State-of-the-art bronchoscopic procedures for diagnosis of complex respiratory diseases.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
    icon: <Stethoscope className="w-5 h-5" />,
  },
  {
    id: "hrct-chest-review",
    title: "HRCT Chest Review",
    desc: "Expert interpretation of HRCT scans for sarcoidosis and interstitial lung diseases.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    icon: <FileScan className="w-5 h-5" />,
  },
  {
    id: "long-term-respiratory-monitoring",
    title: "Long-Term Respiratory Monitoring",
    desc: "Ongoing follow-up and disease monitoring to optimize long-term respiratory health.",
    image: "https://images.unsplash.com/photo-1758691462858-f1286e5daf40?q=80&w=1332&auto=format&fit=crop",
    icon: <ClipboardList className="w-5 h-5" />,
  },
];

const faqs = [
    {
        question: "What is sarcoidosis?",
        answer:
            "Sarcoidosis is an inflammatory disease that can form granulomas in the lungs, lymph nodes, skin, eyes, and other organs. It often requires specialist evaluation to confirm the diagnosis and assess organ involvement.",
    },
    {
        question: "Why can sarcoidosis be confused with tuberculosis?",
        answer:
            "In India, sarcoidosis and tuberculosis can look similar on CT scans, PET imaging, bronchoscopy findings, and even tissue pathology, so careful clinical correlation and tissue diagnosis are important.",
    },
    {
        question: "What procedures are used to confirm the diagnosis?",
        answer:
            "Diagnosis may include EBUS-guided TBNA, endobronchial biopsy, transbronchial lung biopsy, bronchoalveolar lavage, HRCT review, pulmonary function testing, and multidisciplinary clinical correlation.",
    },
    {
        question: "Can this clinic help avoid unnecessary anti-tubercular treatment?",
        answer:
            "Yes. The clinic focuses on accurate diagnosis so patients with sarcoidosis or other granulomatous lung disease are not misdiagnosed as tuberculosis and exposed to unnecessary treatment.",
    },
    {
        question: "What symptoms can sarcoidosis cause?",
        answer:
            "Common symptoms include cough, breathlessness, fatigue, fever, chest discomfort, enlarged chest lymph nodes, and in some cases skin, eye, or other organ involvement.",
    },
    {
        question: "Who should consider EBUS-based evaluation?",
        answer:
            "Patients with persistent enlarged mediastinal lymph nodes, unexplained granulomatous lung disease, sarcoidosis mimicking tuberculosis, abnormal CT chest findings, or difficult-to-diagnose respiratory symptoms may benefit from EBUS-guided evaluation.",
    },
];

const sarcoidosisIndications = [
    { title: "Sarcoidosis Mimicking Tuberculosis", icon: ShieldPlus },
    { title: "Persistent Enlarged Mediastinal Lymph Nodes", icon: ScanSearch },
    { title: "Unexplained Granulomatous Lung Disease", icon: Microscope },
    { title: "Chronic Cough With Abnormal CT Chest", icon: Wind },
    { title: "Multisystem Inflammatory Lung Disease", icon: HeartPulse },
    { title: "Difficult-to-Diagnose Respiratory Conditions", icon: Search },
];

const diagnosticProcedures = [
    "EBUS-Guided TBNA (Endobronchial Ultrasound-Guided Needle Aspiration)",
    "Endobronchial Biopsy (EBB)",
    "Transbronchial Lung Biopsy (TBLB)",
    "Bronchoalveolar Lavage (BAL)",
    "HRCT Chest Interpretation",
    "Pulmonary Function Testing (PFT)",
    "Multidisciplinary Clinical Correlation",
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Sarcoidosis, Granulomatous Lung Disease & EBUS Diagnostic Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, provides specialized evaluation and management for sarcoidosis and complex granulomatous lung diseases that often resemble tuberculosis (TB) in clinical presentation and imaging findings."
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Advanced Granulomatous Lung Disease Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Sarcoidosis, Granulomatous Lung Disease & EBUS Diagnostic
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
                                alt="Sarcoidosis and EBUS diagnostic clinic"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
               <section className="pt-12">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Advanced Diagnostics
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Diagnostic Procedures & Evaluation Services
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                            Advanced diagnostic procedures help identify the exact cause of lung disease,
                            enlarged lymph nodes, persistent respiratory symptoms, and suspected chest
                            malignancies with greater precision and minimal invasiveness.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {diagnosticProcedures.map((procedure, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] font-semibold">
                                            {index + 1}
                                        </div>

                                        <h3 className="font-semibold text-[#0f172a]/80 group-hover:text-[#1fa8e8] transition-colors leading-relaxed">
                                            {procedure}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-[#1fa8e8]/15 bg-[#f8fcfe] p-6">
                            <h3 className="font-semibold text-[#0f172a] mb-3">
                                Why These Procedures Matter
                            </h3>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                These minimally invasive procedures help obtain tissue diagnosis from
                                enlarged lymph nodes and lung tissue while significantly improving
                                diagnostic accuracy. In many patients, they reduce the need for more
                                invasive surgical biopsies and allow earlier initiation of appropriate
                                treatment.
                            </p>
                        </div>

                    </section>

                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Conditions Evaluated
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Respiratory Conditions Often Missed or Misdiagnosed
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] ">
                            The clinic has special expertise in evaluating patients where sarcoidosis, TB, and other granulomatous lung diseases overlap clinically or radiologically.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {sarcoidosisIndications.map((item, index) => {
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
                                Treatment is individualized according to disease severity, organ involvement, symptoms, and lung function status. While many patients respond well to corticosteroid therapy, newer steroid-sparing and targeted immunomodulatory treatments are now available for selected patients with progressive or difficult sarcoidosis requiring long-term disease control.
                            </p>
                        </div>

                    </div>
                </section>

            </div>

            <ServicesCarousal
                heading="Services Offered"
                description="Specialized diagnostic and management services for sarcoidosis, granulomatous lung disease, and EBUS-guided tissue sampling."
                services={services}
            />
            <div className="max-w-7xl mx-auto px-4">
                <div className="py-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm">
                        <div
                            className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />
                        <p className="text-base sm:text-lg text-[#475569] font-medium relative z-10">
                            The clinic emphasizes accurate diagnosis, evidence-based therapy, avoidance of unnecessary anti-tubercular treatment, and long-term multidisciplinary respiratory care.

                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert sarcoidosis evaluation and advanced bronchoscopic diagnosis in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Find answers to common questions about sarcoidosis, granulomatous lung disease, EBUS-guided biopsy, and treatment planning."
                faqs={faqs}
            />
        </>
    );
}