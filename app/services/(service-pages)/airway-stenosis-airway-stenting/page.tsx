'use client';
import {
    Wind,
    Activity,
    ShieldPlus,
    Microscope,
    AlertTriangle,
    Database,
    Search,
    ShieldCheck,
    Network,
    Droplets,
    ShieldAlert,
    RefreshCw,
    ScanSearch,
    Radar,
    CircleDashed,
    AlertCircle,
    Layers,
    Syringe,
    ClipboardList,
    Settings,
    Scan,
    FileSearch,
    Stethoscope,
    HeartPulse,
    Zap,
    CheckCircle,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

// ─── Data ────────────────────────────────────────────────────────────────────

const malignantCauses = [
    { title: "Primary Tracheal Tumors", icon: Scan },
    { title: "Bronchogenic Carcinoma", icon: Wind },
    { title: "Endobronchial Metastasis", icon: Network },
    { title: "Mediastinal Tumor Compression", icon: Layers },
    { title: "Lymphoma", icon: Database },
    { title: "Thyroid Malignancy", icon: Microscope },
    { title: "Esophageal Carcinoma", icon: AlertCircle },
    { title: "Mediastinal Metastasis", icon: ShieldAlert },
    { title: "Tracheoesophageal Fistula (TEF)", icon: CircleDashed },
    { title: "Bronchoesophageal Fistula", icon: CircleDashed },
    { title: "Post-Radiation Fistulas", icon: Zap },
];

const stenosisSymptomsItems = [
    { title: "Progressive Breathlessness", icon: Wind },
    { title: "Noisy Breathing / Stridor", icon: Activity },
    { title: "Persistent Wheeze Not Responding to Inhalers", icon: ShieldAlert },
    { title: "Recurrent Pneumonia", icon: ShieldPlus },
    { title: "Cough with Inability to Clear Secretions", icon: RefreshCw },
    { title: "Hemoptysis", icon: Droplets },
    { title: "Choking While Eating (Suggestive of TEF)", icon: AlertTriangle },
    { title: "Sudden Oxygen Dependence", icon: HeartPulse },
];

const stentBenefitsItems = [
    { title: "Maintain Airway Patency", icon: CheckCircle },
    { title: "Relieve Respiratory Distress", icon: Wind },
    { title: "Improve Oxygenation", icon: Droplets },
    { title: "Allow Chemotherapy / Radiotherapy Continuation", icon: RefreshCw },
    { title: "Prevent Collapse After Tumor Debulking", icon: ShieldCheck },
];

const combinedProcedures = [
    { title: "Rigid Bronchoscopy", icon: Scan },
    { title: "Mechanical Debulking", icon: Settings },
    { title: "Argon Plasma Coagulation (APC)", icon: Zap },
    { title: "Laser Therapy", icon: Activity },
    { title: "Cryotherapy", icon: ShieldPlus },
];

const tefConditions = [
    { title: "Esophageal Carcinoma", icon: AlertCircle },
    { title: "Advanced Lung Cancer", icon: Wind },
    { title: "Post-Radiation Injury", icon: Zap },
    { title: "Post Prolonged Intubation", icon: Syringe },
];

const tefSymptoms = [
    { title: "Cough After Swallowing", icon: RefreshCw },
    { title: "Aspiration Pneumonia", icon: ShieldAlert },
    { title: "Severe Malnutrition", icon: AlertTriangle },
    { title: "Recurrent Infections", icon: Database },
];

const preProcedureItems = [
    { title: "CT Thorax with Airway Reconstruction", icon: ScanSearch },
    { title: "Flexible Bronchoscopy", icon: Scan },
    { title: "Degree and Length of Stenosis Assessment", icon: Radar },
    { title: "Distal Airway Patency Evaluation", icon: Network },
    { title: "Oxygenation Status", icon: Droplets },
    { title: "Anesthesia Risk Assessment", icon: ClipboardList },
];

const complicationItems = [
    { title: "Stent Migration", icon: AlertTriangle },
    { title: "Mucus Plugging", icon: CircleDashed },
    { title: "Granulation Tissue", icon: Microscope },
    { title: "Infection", icon: ShieldAlert },
    { title: "Bleeding", icon: Droplets },
    { title: "Restenosis", icon: RefreshCw },
    { title: "Stent Fracture (Rare)", icon: AlertCircle },
];

const modernRoles = [
    { title: "A Bridge to Definitive Therapy", icon: Network },
    { title: "A Rescue Intervention", icon: ShieldPlus },
    { title: "A Quality-of-Life Restoring Procedure", icon: HeartPulse },
    { title: "A Multidisciplinary Oncologic Support Tool", icon: Stethoscope },
];

const faqs = [
    {
        question: "What is airway stenosis?",
        answer:
            "Airway stenosis refers to narrowing of the central airways — the trachea or main bronchi — that can severely restrict airflow, causing breathlessness, stridor, and life-threatening respiratory compromise.",
    },
    {
        question: "When is an airway stent required?",
        answer:
            "An airway stent is indicated when central airway obstruction causes significant breathlessness, oxygen dependence, or threatens life — commonly due to malignant tumours, extrinsic compression, or tracheoesophageal fistulas.",
    },
    {
        question: "What types of airway stents are available?",
        answer:
            "The main types are silicone stents (removable, preferred in benign disease), self-expanding metallic stents or SEMS (useful in malignant and tortuous lesions), and covered stents (used in fistulas and to prevent tumour ingrowth).",
    },
    {
        question: "Is airway stenting only a palliative procedure?",
        answer:
            "No. While stenting is often used in advanced disease, it also serves as a bridge to definitive therapy, a rescue intervention, or a quality-of-life restoring procedure in carefully selected patients.",
    },
    {
        question: "What is a tracheoesophageal fistula (TEF) and how is it managed?",
        answer:
            "TEF is an abnormal connection between the trachea and esophagus, often caused by esophageal or lung cancer, radiation injury, or prolonged intubation. It causes coughing after swallowing and recurrent aspiration. Covered airway stents — sometimes combined with an esophageal stent — seal the fistula and significantly improve quality of life.",
    },
];

// ─── Reusable card grid ───────────────────────────────────────────────────────

function CardGrid({ items }:{items:any}) {
    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {items.map((item:any, index:any) => {
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
    );
}

// ─── Stent type card ──────────────────────────────────────────────────────────

function StentTypeCard({ title, advantages, limitations, usefulIn }:{title:string; advantages?:any, limitations?:any; usefulIn?:any; }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg">
            <h3 className="text-base font-bold text-[#0f172a] mb-4">{title}</h3>
            {advantages && (
                <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1fa8e8] mb-2">
                        Advantages
                    </p>
                    <ul className="space-y-1">
                        {advantages.map((a:any, i:any) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#64748b]">
                                <CheckCircle className="h-4 w-4 text-[#1fa8e8] mt-0.5 shrink-0" />
                                {a}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {limitations && (
                <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Limitations
                    </p>
                    <ul className="space-y-1">
                        {limitations.map((l:any, i:any) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#64748b]">
                                <AlertCircle className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                                {l}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {usefulIn && (
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1fa8e8] mb-2">
                        Useful In
                    </p>
                    <ul className="space-y-1">
                        {usefulIn.map((u:any, i:any) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#64748b]">
                                <CheckCircle className="h-4 w-4 text-[#1fa8e8] mt-0.5 shrink-0" />
                                {u}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AirwayStenosisPage() {
    return (
        <>
            <ServiceHero
                title="Airway Stenosis & Airway Stenting - Advanced Management of Central Airway Obstruction"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Bronchoscopist in Pitampura, Delhi, provides expert bronchoscopic evaluation and airway stenting for central airway obstruction caused by malignant tumours, extrinsic compression, tracheoesophageal fistulas, and other critical airway conditions."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* ── Intro ── */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Critical Airway Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Airway Stenosis & <br /> Airway Stenting
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Airway stenosis and central airway obstruction are life-threatening conditions that can rapidly compromise breathing, oxygenation, secretion clearance, and quality of life. Timely bronchoscopic intervention with airway stenting can provide dramatic symptomatic relief and improve survival in selected patients.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop"
                                alt="Airway stenosis and stenting bronchoscopy"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Common Causes ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Aetiology
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Common Causes of Central Airway Obstruction
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Central airway obstruction can arise from primary airway tumours, extrinsic compression by adjacent malignancies, or abnormal communications between the airway and adjacent structures.
                    </p>
                    <CardGrid items={malignantCauses} />
                </section>

                {/* ── Symptoms ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Recognition
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Symptoms Suggestive of Central Airway Stenosis
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Patients with central airway obstruction may present with a range of respiratory and swallowing symptoms that warrant urgent bronchoscopic evaluation.
                    </p>
                    <CardGrid items={stenosisSymptomsItems} />
                </section>

                {/* ── Central Airway Tumours ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Airway Stenting
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Central Airway Tumours — Where Stenting Can Be Life-Saving
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-4">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                In patients with primary or metastatic tumours causing critical airway narrowing, airway stenting can immediately restore adequate ventilation and oxygenation.
                            </p>

                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-3">
                                    Airway stents help:
                                </h3>
                                <CardGrid items={stentBenefitsItems} />
                            </div>

                            <div className="mt-6">
                                <h3 className="text-base font-semibold text-[#0f172a] mb-3">
                                    Often combined with:
                                </h3>
                                <CardGrid items={combinedProcedures} />
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
                                alt="Bronchoscopic airway tumour management"
                                className="w-full h-[380px] sm:h-[440px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── TEF ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Fistula Management
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Tracheoesophageal Fistula (TEF)
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-6">
                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-3">
                                    TEF commonly occurs in:
                                </h3>
                                <CardGrid items={tefConditions} />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-3">
                                    Symptoms:
                                </h3>
                                <CardGrid items={tefSymptoms} />
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                <p className="text-sm sm:text-base font-medium text-[#0f172a] mb-2">
                                    Covered airway stents help by:
                                </p>
                                <ul className="space-y-2 mt-3">
                                    {[
                                        "Sealing fistula",
                                        "Preventing aspiration",
                                        "Improving nutrition",
                                        "Enhancing quality of life",
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                                            <CheckCircle className="h-4 w-4 text-[#1fa8e8] shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm text-[#64748b]">
                                    Sometimes dual stenting (airway + esophageal stent) is required.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
                                alt="Tracheoesophageal fistula stenting management"
                                className="w-full h-[380px] sm:h-[440px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Lymphoma ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Extrinsic Compression
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Extrinsic Compression by Lymphoma
                            </h2>
                            <div className="mt-4 space-y-4">
                                <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Mediastinal lymphoma may cause critical tracheal narrowing, carinal compression, or dynamic airway collapse. Temporary airway stenting may stabilize the airway, prevent emergency intubation, and buy time for chemotherapy response.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Many lymphoma patients improve dramatically after systemic therapy, allowing later stent removal.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Thyroid Cancer
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Thyroid Cancer with Tracheal Compression
                            </h2>
                            <div className="mt-4 space-y-4">
                                <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Advanced thyroid malignancy can invade the trachea, cause circumferential stenosis, and produce stridor and respiratory failure.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Airway stenting may be useful before surgery, in inoperable disease, as palliative airway rescue, or to avoid tracheostomy in selected patients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Esophageal Cancer ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Oncologic Airway Support
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Esophageal Cancer with Airway Involvement
                            </h2>
                            <div className="mt-4 space-y-3">
                                <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                    Esophageal malignancy can lead to tracheal compression, carinal invasion, TEF formation, and severe aspiration.
                                </p>
                                <p className="text-sm font-medium text-[#0f172a]">
                                    Airway interventions improve:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Dyspnea",
                                        "Aspiration symptoms",
                                        "Ability to receive oncologic treatment",
                                        "Palliation and dignity of care",
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                                            <CheckCircle className="h-4 w-4 text-[#1fa8e8] shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
                                alt="Esophageal cancer airway management"
                                className="w-full h-[320px] sm:h-[360px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Types of Stents ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Device Selection
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Types of Airway Stents
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Stent selection depends on the nature of obstruction (malignant vs benign), location, presence of fistula, and anticipated duration of use.
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        <StentTypeCard
                            title="Silicone Stents"
                            advantages={["Removable", "Cheaper", "Preferred in benign disease"]}
                            limitations={["Migration risk", "Requires rigid bronchoscopy"]}
                        />
                        <StentTypeCard
                            title="Self Expanding Metallic Stents (SEMS)"
                            advantages={["Easier deployment", "Better for tortuous lesions", "Useful in malignant disease"]}
                            limitations={["Granulation tissue formation", "Difficult to remove", "Risk of tumour ingrowth"]}
                        />
                        <StentTypeCard
                            title="Covered Stents"
                            usefulIn={["Tracheoesophageal fistula (TEF)", "Malignant fistulas", "Preventing tumour ingrowth"]}
                        />
                    </div>
                </section>

                {/* ── Rigid Bronchoscopy ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Gold Standard
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Role of Rigid Bronchoscopy
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Rigid bronchoscopy remains the gold standard for central airway management. It enables precise tumour debulking, stent placement, and control of life-threatening bleeding in critically compromised airways.
                            </p>
                            <ul className="mt-5 space-y-2">
                                {[
                                    "Airway tumour debulking",
                                    "Critical stenosis management",
                                    "Silicone stent placement",
                                    "Bleeding control",
                                    "Airway stabilization",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                                        <CheckCircle className="h-4 w-4 text-[#1fa8e8] shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                                alt="Rigid bronchoscopy airway procedure"
                                className="w-full h-[320px] sm:h-[360px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Pre-procedure Evaluation ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Work-Up
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Important Pre-Procedure Evaluation
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Thorough pre-procedural assessment is essential to determine stent type, approach, and anaesthesia strategy.
                    </p>
                    <CardGrid items={preProcedureItems} />
                </section>

                {/* ── Complications ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Safety & Follow-Up
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Possible Complications
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Airway stenting is generally well tolerated but requires structured bronchoscopic surveillance to detect and manage complications early. Regular bronchoscopic follow-up is crucial.
                    </p>
                    <CardGrid items={complicationItems} />
                </section>

                {/* ── Modern Perspective ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Evolving Practice
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Modern Perspective on Airway Stenting
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-4">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Airway stenting is no longer merely a palliative procedure. In carefully selected patients, it acts as a bridge to definitive therapy, a rescue intervention, a quality-of-life restoring procedure, and a multidisciplinary oncologic support tool.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                With growing expertise in interventional pulmonology in India, advanced airway procedures are increasingly available for critically ill patients who earlier had very limited options.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <CardGrid items={modernRoles} />
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            With growing interventional bronchoscopy expertise across India, advanced airway procedures — including rigid bronchoscopy, tumour debulking, and stent deployment — are now accessible to critically ill patients who previously had limited treatment options.
                        </p>
                    </div>
                </section>

            </div>

            {/* ── CTA ── */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>
                            Book consultation for expert evaluation and management of airway stenosis, central airway obstruction, airway stenting, and bronchoscopic airway interventions in Delhi.
                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about airway stenosis, central airway obstruction, tracheoesophageal fistula, airway stenting, rigid bronchoscopy, and interventional bronchoscopy for malignant and benign airway conditions."
                faqs={faqs}
            />
        </>
    );
}