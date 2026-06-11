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
    Microscope,
} from "lucide-react";

import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";
import { FaLungs } from "react-icons/fa";

export const services = [
    {
        id: "chronic-cough-evaluation",
        title: "Chronic Cough Evaluation",
        desc: "Comprehensive assessment of persistent cough using advanced respiratory diagnostics.",
        image: "https://images.unsplash.com/photo-1634128221567-3220e071d1ea?q=80&w=1170&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "difficult-asthma-assessment",
        title: "Difficult Asthma Assessment",
        desc: "Evaluation of patients whose symptoms remain uncontrolled despite standard treatment.",
        image: "https://images.unsplash.com/photo-1733751683181-0b57039b3fd4?q=80&w=1081&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "bronchoscopy-airway-evaluation",
        title: "Bronchoscopy & Airway Evaluation",
        desc: "Advanced airway assessment for unexplained respiratory symptoms and lung abnormalities.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <Search className="w-5 h-5" />,
    },
    {
        id: "pulmonary-function-testing",
        title: "Pulmonary Function Testing (PFT)",
        desc: "Objective assessment of lung function and airway obstruction.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
        icon: <ClipboardList className="w-5 h-5" />,
    },
    {
        id: "chest-ultrasound",
        title: "Chest Ultrasound",
        desc: "Radiation-free bedside imaging for pleural and respiratory evaluation.",
        image: "https://images.unsplash.com/photo-1630531210843-d6f343ad1f90?q=80&w=1172&auto=format&fit=crop",
        icon: <ScanSearch className="w-5 h-5" />,
    },
    {
        id: "foreign-body-evaluation",
        title: "Foreign Body Aspiration Evaluation",
        desc: "Assessment and diagnosis of inhaled foreign bodies in children and adults.",
        image: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?q=80&w=1025&auto=format&fit=crop",
        icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
        id: "tumour-airway-diagnosis",
        title: "Tumour & Airway Lesion Diagnosis",
        desc: "Identification of airway tumors and structural abnormalities using advanced techniques.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "tuberculosis-workup",
        title: "Tuberculosis Workup",
        desc: "Comprehensive evaluation of suspected pulmonary tuberculosis and chronic infection.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "allergy-reflux-cough-care",
        title: "Allergy & Reflux-Related Cough Care",
        desc: "Targeted management of chronic cough caused by allergies and reflux disease.",
        image: "https://images.unsplash.com/photo-1634128221567-3220e071d1ea?q=80&w=1170&auto=format&fit=crop",
        icon: <HeartPulse className="w-5 h-5" />,
    },
    {
        id: "pediatric-adult-airway-assessment",
        title: "Pediatric & Adult Airway Assessment",
        desc: "Specialized respiratory evaluation for both children and adults.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
    {
        id: "advanced-interventional-pulmonology",
        title: "Advanced Interventional Pulmonology Consultation",
        desc: "Expert consultation for complex respiratory conditions requiring advanced diagnostic procedures.",
        image: "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?q=80&w=1332&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "When is a cough considered chronic?",
        answer:
            "A cough lasting more than 8 weeks in adults or several weeks despite treatment should be evaluated to identify the underlying cause.",
    },
    {
        question: "What are the common causes of chronic cough?",
        answer:
            "Common causes include asthma, allergies, post-nasal drip, acid reflux, smoking-related lung disease, infections, and certain medications. Some patients may require advanced evaluation to identify less common causes.",
    },
    {
        question: "When is bronchoscopy recommended for chronic cough?",
        answer:
            "Bronchoscopy may be recommended when imaging is abnormal, symptoms persist despite treatment, recurrent infections occur, or an airway lesion, foreign body, or hidden lung condition is suspected.",
    },
    {
        question: "Can chronic cough be a sign of a serious disease?",
        answer:
            "Yes. While many cases are related to asthma or allergies, chronic cough can occasionally be associated with tuberculosis, airway tumors, foreign body aspiration, or other significant respiratory conditions.",
    },
    {
        question: "Is chronic cough evaluation safe during pregnancy?",
        answer:
            "Yes. Respiratory evaluation during pregnancy is carefully planned using the safest available diagnostic methods, including clinical assessment and selected imaging or ultrasound-based techniques when appropriate.",
    },
];

const coughIndications = [
    { title: "Chronic Cough Lasting More Than 8 Weeks", icon: Wind },
    { title: "Difficult Asthma Assessment", icon: Activity },
    { title: "Recurrent Wheezing", icon: RefreshCw },
    { title: "Unexplained Breathlessness", icon: AlertCircle },
    { title: "Abnormal Chest Imaging", icon: ScanSearch },
    { title: "Recurrent Respiratory Infections", icon: ShieldPlus },
    { title: "Suspected Airway Lesions", icon: Search },
    { title: "Persistent Symptoms Despite Treatment", icon: Stethoscope },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Chronic Cough, Difficult Airway Diagnosis & Advanced Bronchoscopy Clinic in Delhi"
                description="Expert evaluation for persistent cough, unexplained breathlessness, recurrent chest infections, wheezing, and complex airway disorders. Dr. Manish Aggarwal provides comprehensive respiratory assessment and advanced bronchoscopy-based diagnostics to identify the underlying cause and deliver targeted, evidence-based treatment."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* INTRO */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Advanced Airway Diagnosis                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                COPD, Smoking-Related Lung Disease & Breathlessness Clinic in Delhi
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Persistent cough lasting more than a few weeks should never be ignored, especially when associated with breathlessness, wheezing, fever, weight loss, recurrent infections, or abnormal imaging. Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, provides advanced evaluation and management for chronic cough and difficult-to-diagnose respiratory conditions in children and adults.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                While many patients may have asthma, allergy, reflux disease, or infection-related cough, some cases require deeper evaluation to identify hidden or uncommon airway and lung diseases. The clinic focuses on accurate diagnosis using detailed clinical assessment, pulmonary function testing (PFT), imaging interpretation, bronchoscopy, chest ultrasound, and advanced interventional pulmonology techniques when required.
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

                <section className="pt-12">
                    <div className="max-w-7xl mx-auto">

                        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                            Complex Diagnoses
                        </span>

                        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a]">
                            Respiratory Conditions Often Missed or Misdiagnosed
                        </h2>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] ">
                            The clinic has extensive experience in diagnosing complex respiratory
                            conditions that may initially present as a simple chronic cough,
                            wheezing, breathlessness, or recurrent chest infections. Special
                            attention is given to patients where standard treatment fails or the
                            diagnosis remains uncertain.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {[
                                "Airway Tumours Mimicking Asthma",
                                "Carcinoid Tumour Presenting as Persistent Cough",
                                "Adenoid Cystic Airway Tumour Initially Treated as Difficult Asthma",
                                "Foreign Body Aspiration in Children Causing Recurrent Cough & Wheezing",
                                "Tuberculosis Presenting with Chronic Cough Despite Minimal Symptoms",
                                "Pregnancy-Associated Respiratory Illness Requiring Careful Evaluation",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] font-bold">
                                            {index + 1}
                                        </div>

                                        <h3 className="font-medium text-[#0f172a]/80 leading-snug group-hover:text-[#1fa8e8] transition-colors">
                                            {item}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                                <span className="font-semibold text-[#0f172a]">
                                    Expert Evaluation:
                                </span>{" "}
                                The clinic also emphasizes safe respiratory care during pregnancy. In one such complex presentation, persistent cough and breathlessness in a pregnant woman were evaluated using bedside chest ultrasound, helping identify pleural effusion and enabling timely diagnosis and treatment of tuberculosis while minimizing unnecessary radiation exposure.
                            </p>
                        </div>

                    </div>
                </section>



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
                            The clinic focuses on early diagnosis, minimally invasive evaluation, patient safety, and evidence-based respiratory care for both common and rare causes of chronic cough.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>Book consultation for expert chronic cough evaluation and advanced chest disease diagnosis in Delhi.</>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            {/* FAQ */}
            <FAQs
                title="Frequently Asked Questions"
                description="Find answers to common questions about chronic cough, airway disorders, bronchoscopy, diagnosis, and treatment options."
                faqs={faqs}
            />
        </>
    );
}