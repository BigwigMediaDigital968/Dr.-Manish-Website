'use client';
import {
    Wind,
    Activity,
    Brain,
    Heart,
    AlertTriangle,
    ShieldPlus,
    ShieldAlert,
    ShieldCheck,
    RefreshCw,
    Droplets,
    HeartPulse,
    Network,
    Microscope,
    Stethoscope,
    Scan,
    ClipboardList,
    Settings,
    Gauge,
    Users,
    Zap,
    CheckCircle,
    AlertCircle,
    TrendingUp,
    Clock,
    Database,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

// ─── Data ─────────────────────────────────────────────────────────────────────

const type2Causes = [
    { title: "Acute Exacerbation of COPD", icon: Wind },
    { title: "Obesity Hypoventilation Syndrome", icon: Activity },
    { title: "Neuromuscular Weakness", icon: Brain },
    { title: "Severe Sleep Apnea", icon: AlertCircle },
    { title: "Chest Wall Disorders", icon: ShieldAlert },
    { title: "Advanced Airway Diseases", icon: Scan },
];

const type2Interventions = [
    { title: "Non-Invasive Ventilation (NIV / BiPAP)", icon: Wind },
    { title: "High-Flow Oxygen Therapy", icon: Droplets },
    { title: "Mechanical Ventilation", icon: Activity },
];

const ardsCauses = [
    { title: "Severe Pneumonia", icon: ShieldAlert },
    { title: "Sepsis", icon: AlertTriangle },
    { title: "Viral Infections", icon: Database },
    { title: "Aspiration", icon: Wind },
    { title: "Trauma", icon: Zap },
    { title: "Pancreatitis", icon: AlertCircle },
];

const ardsManagement = [
    { title: "Lung-Protective Ventilation Strategies", icon: ShieldCheck },
    { title: "Prone Ventilation", icon: RefreshCw },
    { title: "Advanced ICU Monitoring", icon: Gauge },
    { title: "Careful Fluid Management", icon: Droplets },
    { title: "Infection Control", icon: ShieldPlus },
    { title: "Multidisciplinary Critical Care Support", icon: Network },
];

const pneumoniaHighRisk = [
    { title: "Elderly Patients", icon: Users },
    { title: "Diabetics", icon: Activity },
    { title: "Smokers", icon: Wind },
    { title: "Immunocompromised Individuals", icon: ShieldAlert },
    { title: "Chronic Lung Disease Patients", icon: Stethoscope },
];

const pneumoniaManagement = [
    { title: "Early Diagnosis", icon: Scan },
    { title: "Appropriate Antimicrobial Therapy", icon: ShieldPlus },
    { title: "Bronchoscopy When Indicated", icon: Microscope },
    { title: "Oxygen & Ventilatory Support", icon: Droplets },
    { title: "Hemodynamic Stabilization", icon: HeartPulse },
    { title: "ICU Monitoring", icon: Gauge },
];

const bronchoscopyRoles = [
    { title: "Mucus Plug Removal", icon: Wind },
    { title: "Difficult Airway Evaluation", icon: Scan },
    { title: "Hemoptysis Management", icon: Droplets },
    { title: "Infection Diagnosis", icon: Microscope },
    { title: "Airway Obstruction Assessment", icon: AlertTriangle },
];

const expertiseAreas = [
    { title: "Complex Respiratory Emergencies", icon: Zap },
    { title: "Ventilator Management", icon: Settings },
    { title: "Severe Lung Infections", icon: ShieldAlert },
    { title: "Difficult Airway Situations", icon: Scan },
    { title: "Multidisciplinary ICU Coordination", icon: Network },
    { title: "Post-COVID Respiratory Complications", icon: RefreshCw },
];

const commitmentGoals = [
    { title: "Early Stabilization", icon: Clock },
    { title: "Organ Support", icon: HeartPulse },
    { title: "Prevention of Complications", icon: ShieldCheck },
    { title: "Faster Recovery", icon: TrendingUp },
    { title: "Improved Survival", icon: CheckCircle },
    { title: "Better Long-Term Respiratory Outcomes", icon: Activity },
];

const faqs = [
    {
        question: "What is Type 2 Respiratory Failure?",
        answer:
            "Type 2 or hypercapnic respiratory failure occurs when the lungs fail to adequately remove carbon dioxide (CO₂), leading to elevated CO₂ levels, respiratory acidosis, altered sensorium, and breathlessness. It commonly occurs in advanced COPD, obesity hypoventilation, and neuromuscular disorders.",
    },
    {
        question: "What is ARDS and how is it managed?",
        answer:
            "ARDS (Acute Respiratory Distress Syndrome) is a severe form of lung injury causing diffuse inflammation, oxygen deficiency, and rapid breathing failure. Management requires lung-protective ventilation, prone positioning, advanced ICU monitoring, and multidisciplinary critical care support.",
    },
    {
        question: "What is Non-Invasive Ventilation (NIV)?",
        answer:
            "NIV or BiPAP delivers breathing support through a mask without requiring intubation. It is widely used in COPD exacerbation, Type 2 respiratory failure, and obesity hypoventilation. It reduces the need for invasive mechanical ventilation and improves patient comfort.",
    },
    {
        question: "When is High Flow Nasal Oxygen (HFNO) used?",
        answer:
            "HFNO is used in hypoxemic respiratory failure, severe pneumonia, post-extubation support, and selected ARDS patients. It delivers high-flow humidified oxygen and can bridge patients while avoiding intubation in carefully selected cases.",
    },
    {
        question: "What is the role of bronchoscopy in ICU care?",
        answer:
            "Bedside critical care bronchoscopy in the ICU assists in mucus plug removal, difficult airway evaluation, hemoptysis management, respiratory infection diagnosis, and airway obstruction assessment in critically ill patients.",
    },
    {
        question: "Why is specialized respiratory ICU expertise important?",
        answer:
            "Respiratory critical illness demands timely decision-making, precise ventilatory management, and experienced clinical judgment. Specialized respiratory ICU expertise reduces complications, improves survival, and ensures better long-term lung outcomes.",
    },
];

// ─── Reusable Components ──────────────────────────────────────────────────────

function CardGrid({ items }:{items:any;}) {
    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
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

function CheckList({ items }:{items:any;}) {
    return (
        <ul className="space-y-2 mt-3">
            {items.map((item:any, i:any) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                    <CheckCircle className="h-4 w-4 text-[#1fa8e8] shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ICULungCarePage() {
    return (
        <>
            <ServiceHero
                title="ICU Lung Care & Critical Respiratory Medicine in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Critical Care Specialist in Pitampura, Delhi, brings more than 10 years of ICU leadership experience in managing severe respiratory failure, ARDS, critical lung infections, advanced ventilatory support, and complex pulmonary emergencies."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* ── Intro ── */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Critical Respiratory Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                ICU Lung Care & <br /> Critical Respiratory Medicine
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Critical respiratory illnesses require rapid diagnosis, timely intervention, precision ventilatory support, and experienced intensive care management. Severe lung diseases can deteriorate within hours and may become life-threatening without specialized ICU care.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                With more than 10 years of experience in heading Critical Care services, extensive expertise has been developed in managing complex respiratory emergencies, advanced ventilatory support, and critically ill pulmonary patients.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                The focus remains on evidence-based, ethical, and multidisciplinary care for patients with severe lung diseases requiring intensive monitoring and respiratory support.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1631217868264-e6b90bb7e133?q=80&w=1200&auto=format&fit=crop"
                                alt="ICU lung care critical respiratory medicine"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Type 2 Respiratory Failure ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        ICU Conditions
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Type 2 Respiratory Failure (Hypercapnic Respiratory Failure)
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-5">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Type 2 respiratory failure occurs when the lungs fail to adequately remove carbon dioxide (CO₂), leading to elevated CO₂ levels, respiratory acidosis, altered sensorium, breathlessness, and drowsiness and confusion.
                            </p>

                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-2">
                                    Common causes include:
                                </h3>
                                <CardGrid items={type2Causes} />
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                <p className="text-sm font-semibold text-[#0f172a] mb-1">
                                    Timely intervention with the following can be lifesaving:
                                </p>
                                <CheckList items={type2Interventions.map((i) => i.title)} />
                                <p className="mt-4 text-sm text-[#64748b]">
                                    Special emphasis is placed on careful oxygen titration, as excessive oxygen administration in susceptible patients may worsen CO₂ retention.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-[40%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                                alt="Respiratory failure NIV BiPAP ventilation"
                                className="w-full h-[380px] sm:h-[440px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── ARDS ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Severe Lung Injury
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        ARDS (Acute Respiratory Distress Syndrome)
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">

                        <div className="flex-1 space-y-6">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                ARDS is one of the most severe forms of lung injury seen in intensive care units. Patients develop severe oxygen deficiency, diffuse lung inflammation, rapid breathing failure, and need for ventilatory support.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-2">
                                    ARDS may occur due to:
                                </h3>
                                <CardGrid items={ardsCauses} />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-2">
                                    Management of ARDS requires:
                                </h3>
                                <CardGrid items={ardsManagement} />
                            </div>
                            </div>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                The COVID era highlighted the importance of specialized respiratory ICU expertise in managing severe ARDS and prolonged ventilatory illness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Severe Pneumonia ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Critical Lung Infections
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Severe Pneumonia & Critical Lung Infections
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Severe pneumonia remains a major cause of ICU admissions in India. Critical lung infections may rapidly progress to septic shock, respiratory failure, and multi-organ dysfunction.
                    </p>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-base font-semibold text-[#0f172a] mb-2">
                                High-risk groups include:
                            </h3>
                            <CardGrid items={pneumoniaHighRisk} />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#0f172a] mb-2">
                                Management includes:
                            </h3>
                            <CardGrid items={pneumoniaManagement} />
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                            Special expertise in difficult and non-resolving pneumonias is essential in modern respiratory critical care practice.
                        </p>
                    </div>
                </section>

                {/* ── Respiratory Support Modalities ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Ventilatory Support
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Advanced Respiratory Support Modalities
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        A full spectrum of respiratory support is deployed based on the severity, cause, and trajectory of the patient's illness.
                    </p>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* NIV */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#1fa8e8]/40 hover:shadow-lg transition-all duration-300">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] mb-4">
                                <Wind className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-[#0f172a] mb-3">
                                Non-Invasive Ventilation (NIV / BiPAP)
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#1fa8e8] mb-2">
                                Widely used in
                            </p>
                            <CheckList items={[
                                "COPD exacerbation",
                                "Type 2 respiratory failure",
                                "Obesity hypoventilation",
                                "Selected pulmonary edema cases",
                            ]} />
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-4 mb-2">
                                Benefits
                            </p>
                            <CheckList items={[
                                "Reduced need for intubation",
                                "Shorter ICU stay",
                                "Better patient comfort",
                            ]} />
                        </div>

                        {/* Mechanical Ventilation */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#1fa8e8]/40 hover:shadow-lg transition-all duration-300">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] mb-4">
                                <Settings className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-[#0f172a] mb-3">
                                Mechanical Ventilation
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#1fa8e8] mb-2">
                                Required in
                            </p>
                            <CheckList items={[
                                "Severe ARDS",
                                "Septic shock",
                                "Multi-organ failure",
                                "Neuromuscular respiratory paralysis",
                            ]} />
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-4 mb-2">
                                Focus Areas
                            </p>
                            <CheckList items={[
                                "Lung-protective ventilation",
                                "Prevention of ventilator-induced lung injury",
                                "Sedation optimization",
                                "Weaning protocols",
                            ]} />
                        </div>

                        {/* HFNO */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#1fa8e8]/40 hover:shadow-lg transition-all duration-300">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] mb-4">
                                <Droplets className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-[#0f172a] mb-3">
                                High Flow Nasal Oxygen (HFNO)
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#1fa8e8] mb-2">
                                Useful in
                            </p>
                            <CheckList items={[
                                "Hypoxemic respiratory failure",
                                "Severe pneumonia",
                                "Post-extubation respiratory support",
                                "Selected ARDS patients",
                            ]} />
                        </div>

                    </div>
                </section>

                {/* ── Critical Care Bronchoscopy ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Bedside Procedures
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Critical Care Bronchoscopy
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Bedside bronchoscopy in ICU settings plays an important role in the diagnosis and management of critically ill respiratory patients.
                            </p>
                            <CardGrid items={bronchoscopyRoles} />
                        </div>

                        <div className="w-full lg:w-[42%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                                alt="Critical care bedside bronchoscopy ICU"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Expertise ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Experience & Approach
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Pulmonary Critical Care Expertise
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-4">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Over a decade of leadership experience in Critical Care has provided extensive exposure to the full spectrum of respiratory emergencies and complex ICU scenarios.
                            </p>
                            <CardGrid items={expertiseAreas} />
                        </div>

                        <div className="w-full lg:w-[38%] shrink-0">
                            <div className="rounded-2xl border border-[#1fa8e8]/30 bg-[#1fa8e8]/5 p-6 h-full flex flex-col justify-center">
                                <Stethoscope className="h-8 w-8 text-[#1fa8e8] mb-4" />
                                <p className="text-base font-bold text-[#0f172a] mb-4 leading-relaxed">
                                    The approach combines:
                                </p>
                                <CheckList items={[
                                    "Evidence-based intensive care",
                                    "Advanced pulmonary medicine",
                                    "Compassionate patient-centered management",
                                ]} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Commitment ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Our Commitment
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Commitment to Critical Lung Care
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-4">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Respiratory critical illness demands not only technology and infrastructure, but also timely decision-making, clinical judgment, and extensive hands-on ICU experience.
                            </p>
                            <CardGrid items={commitmentGoals} />
                        </div>

                        <div className="w-full lg:w-[40%] shrink-0">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-full flex flex-col justify-center">
                                <HeartPulse className="h-8 w-8 text-[#1fa8e8] mb-4" />
                                <p className="text-base font-bold text-[#0f172a] leading-relaxed">
                                    Advanced ICU lung care can make the difference between prolonged suffering and meaningful recovery in critically ill respiratory patients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* ── CTA ── */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>
                            Book consultation for ICU lung care, critical respiratory failure management, advanced ventilatory support, and severe lung infection treatment in Delhi.
                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about ICU lung care, Type 2 respiratory failure, ARDS, severe pneumonia, NIV, BiPAP, HFNO, mechanical ventilation, critical care bronchoscopy, and advanced respiratory ICU management."
                faqs={faqs}
            />
        </>
    );
}