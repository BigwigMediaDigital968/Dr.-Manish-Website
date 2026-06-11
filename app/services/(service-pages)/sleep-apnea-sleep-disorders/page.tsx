import {
    Wind,
    Activity,
    Brain,
    Heart,
    AlertTriangle,
    Moon,
    Sun,
    Gauge,
    RefreshCw,
    ShieldAlert,
    ShieldCheck,
    Users,
    Car,
    Droplets,
    HeartPulse,
    ThumbsUp,
    Scale,
    Cigarette,
    Clock,
    BedDouble,
    Stethoscope,
    TrendingDown,
    CheckCircle,
    Network,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

// ─── Data ─────────────────────────────────────────────────────────────────────

const dangerousEffects = [
    { title: "High Blood Pressure", icon: Gauge },
    { title: "Heart Disease", icon: Heart },
    { title: "Stroke", icon: Brain },
    { title: "Pulmonary Hypertension", icon: Activity },
    { title: "Diabetes", icon: ShieldAlert },
    { title: "Obesity", icon: Scale },
    { title: "Memory Problems", icon: Brain },
    { title: "Depression & Anxiety", icon: Moon },
    { title: "Chronic Fatigue", icon: TrendingDown },
    { title: "Reduced Work Performance", icon: AlertTriangle },
];

const drivingRisks = [
    { title: "Sleepiness While Driving", icon: Car },
    { title: "Microsleep Episodes", icon: Moon },
    { title: "Delayed Reaction Time", icon: Clock },
    { title: "Poor Concentration", icon: Brain },
    { title: "Falling Asleep on Long Drives", icon: BedDouble },
];

const accidentCategories = [
    { title: "Highway Accidents", icon: Car },
    { title: "Commercial Vehicle Crashes", icon: AlertTriangle },
    { title: "Workplace Injuries", icon: ShieldAlert },
    { title: "Industrial Accidents", icon: Activity },
];

const indiaRiskFactors = [
    { title: "Long Driving Hours", icon: Clock },
    { title: "Sleep Deprivation", icon: Moon },
    { title: "Rising Obesity", icon: Scale },
    { title: "Sedentary Lifestyle", icon: TrendingDown },
    { title: "Poor Awareness of Sleep Disorders", icon: Brain },
];

const nightSymptoms = [
    { title: "Loud Snoring", icon: Wind },
    { title: "Choking or Gasping During Sleep", icon: ShieldAlert },
    { title: "Witnessed Pauses in Breathing", icon: AlertTriangle },
    { title: "Restless Sleep", icon: BedDouble },
    { title: "Frequent Awakenings", icon: Moon },
    { title: "Dry Mouth in the Morning", icon: Droplets },
];

const daySymptoms = [
    { title: "Excessive Daytime Sleepiness", icon: Sun },
    { title: "Morning Headache", icon: Brain },
    { title: "Poor Concentration", icon: Brain },
    { title: "Irritability", icon: AlertTriangle },
    { title: "Memory Issues", icon: TrendingDown },
    { title: "Fatigue Despite Adequate Sleep", icon: RefreshCw },
];

const riskFactors = [
    { title: "Obesity", icon: Scale },
    { title: "Thick Neck Circumference", icon: Users },
    { title: "Hypertension", icon: Gauge },
    { title: "Diabetes", icon: ShieldAlert },
    { title: "Hypothyroidism", icon: Activity },
    { title: "Smoking", icon: Cigarette },
    { title: "Alcohol Use", icon: Droplets },
    { title: "Post-Menopausal Women", icon: Users },
    { title: "Family History of Snoring or OSA", icon: Network },
];

const sleepStudyItems = [
    { title: "Breathing Pattern", icon: Wind },
    { title: "Oxygen Levels", icon: Droplets },
    { title: "Snoring Assessment", icon: Activity },
    { title: "Heart Rate", icon: HeartPulse },
    { title: "Sleep Stages", icon: Moon },
    { title: "Frequency of Apnea Episodes", icon: Gauge },
];

const cpapBenefits = [
    { title: "Better Sleep Quality", icon: Moon },
    { title: "Reduced Snoring", icon: Wind },
    { title: "Improved Oxygenation", icon: Droplets },
    { title: "Better Daytime Alertness", icon: Sun },
    { title: "Improved Blood Pressure Control", icon: Gauge },
    { title: "Reduced Accident Risk", icon: Car },
    { title: "Improved Quality of Life", icon: ThumbsUp },
];

const bipapConditions = [
    { title: "Obesity Hypoventilation Syndrome", icon: Scale },
    { title: "COPD Overlap Syndrome", icon: Wind },
    { title: "Neuromuscular Disorders", icon: Brain },
    { title: "Hypercapnic Respiratory Failure", icon: ShieldAlert },
    { title: "Complex Sleep-Related Breathing Disorders", icon: Activity },
];

const lifestyleMeasures = [
    { title: "Weight Reduction", icon: Scale },
    { title: "Regular Exercise", icon: Activity },
    { title: "Avoiding Alcohol & Sedatives", icon: Droplets },
    { title: "Proper Sleep Hygiene", icon: Moon },
    { title: "Side Sleeping in Selected Patients", icon: BedDouble },
    { title: "Treating Nasal Obstruction", icon: Wind },
];

const publicMessageSigns = [
    { title: "Daytime Sleepiness", icon: Sun },
    { title: "Obesity", icon: Scale },
    { title: "High Blood Pressure", icon: Gauge },
    { title: "Choking During Sleep", icon: ShieldAlert },
    { title: "Fatigue", icon: TrendingDown },
    { title: "Morning Headaches", icon: Brain },
];

const earlyTreatmentBenefits = [
    { title: "Prevent Heart & Lung Complications", icon: Heart },
    { title: "Reduce Accident Risk", icon: Car },
    { title: "Improve Productivity", icon: ThumbsUp },
    { title: "Improve Mental Health", icon: Brain },
    { title: "Restore Healthy, Restorative Sleep", icon: Moon },
];

const faqs = [
    {
        question: "What is Obstructive Sleep Apnea (OSA)?",
        answer:
            "Obstructive Sleep Apnea is a condition where the upper airway repeatedly collapses during sleep, causing temporary pauses in breathing. These episodes can occur hundreds of times in a single night, leading to poor oxygen delivery and fragmented sleep.",
    },
    {
        question: "Is snoring always a sign of sleep apnea?",
        answer:
            "Not all snoring indicates sleep apnea, but loud snoring associated with daytime sleepiness, choking during sleep, morning headaches, high blood pressure, or obesity should always be evaluated with a sleep study.",
    },
    {
        question: "How is sleep apnea diagnosed?",
        answer:
            "Sleep apnea is diagnosed through a sleep study called Polysomnography, which monitors breathing pattern, oxygen levels, heart rate, snoring, sleep stages, and frequency of apnea episodes. Severity is measured using the Apnea-Hypopnea Index (AHI).",
    },
    {
        question: "What is CPAP therapy?",
        answer:
            "CPAP (Continuous Positive Airway Pressure) therapy delivers gentle positive air pressure to keep the airway open during sleep. It is the gold standard treatment for moderate to severe OSA and provides significant improvements in sleep quality, daytime alertness, and cardiovascular health.",
    },
    {
        question: "Can sleep apnea affect the heart?",
        answer:
            "Yes. Untreated sleep apnea can contribute to high blood pressure, heart disease, stroke, and pulmonary hypertension. Repeated oxygen drops during sleep activate stress hormones and inflammation affecting nearly every organ system.",
    },
    {
        question: "Can sleep apnea increase the risk of accidents?",
        answer:
            "Yes. Excessive daytime sleepiness from untreated sleep apnea significantly increases the risk of motor vehicle accidents, workplace injuries, and industrial accidents. Drivers with severe untreated OSA may experience microsleep episodes without awareness.",
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

function CheckList({ items }:{items:any}) {
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

export default function SleepApneaPage() {
    return (
        <>
            <ServiceHero
                title="Sleep Apnea & Sleep Disorders - Diagnosis & Treatment in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive evaluation, sleep study coordination, CPAP/BiPAP therapy, and long-term management for Obstructive Sleep Apnea, sleep-disordered breathing, and related respiratory sleep disorders."
            />

            <div className="max-w-7xl mx-auto px-4">

                {/* ── Intro ── */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        The Silent Disease
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Sleep Apnea & Sleep Disorders — <br /> Affecting the Heart, Brain, Lungs & Daily Life
                            </h2>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Sleep is essential for physical and mental recovery, yet millions of people suffer from undiagnosed sleep disorders. Among them, Obstructive Sleep Apnea (OSA) is one of the most dangerous and underrecognized conditions.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                OSA occurs when the upper airway repeatedly collapses during sleep, causing temporary pauses in breathing. These episodes may occur hundreds of times in a single night, leading to poor oxygen delivery, fragmented sleep, and significant stress on the body.
                            </p>

                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                Many patients remain undiagnosed for years because snoring is often considered "normal."
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1531353826977-0941b4779a1c?q=80&w=1200&auto=format&fit=crop"
                                alt="Sleep apnea and sleep disorders"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Why Dangerous ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Health Impact
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Why Sleep Apnea Is Dangerous
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Sleep apnea is not merely a snoring disorder. Repeated oxygen drops during sleep activate stress hormones and inflammation, affecting nearly every organ system. Untreated OSA can contribute to:
                    </p>
                    <CardGrid items={dangerousEffects} />
                </section>

                {/* ── Motor Vehicle Accidents ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Most Ignored Risk
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        The Most Ignored Risk: Motor Vehicle Accidents
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
                        <div className="flex-1 space-y-6">
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                One of the most serious consequences of untreated sleep apnea is excessive daytime sleepiness. Drivers with untreated severe sleep apnea may unknowingly become a danger not only to themselves but also to others on the road.
                            </p>

                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-3">
                                    Patients may experience:
                                </h3>
                                <CardGrid items={drivingRisks} />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-[#0f172a] mb-3">
                                    This significantly increases the risk of:
                                </h3>
                                <CardGrid items={accidentCategories} />
                            </div>
                        </div>

                        <div className="w-full lg:w-[42%] shrink-0 space-y-6">
                            <img
                                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
                                alt="Drowsy driving risk sleep apnea"
                                className="w-full h-[260px] sm:h-[300px] object-cover rounded-3xl shadow-lg"
                            />

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                <p className="text-sm font-semibold text-[#0f172a] mb-3">
                                    This issue is especially important in India due to:
                                </p>
                                <CheckList items={indiaRiskFactors.map((r) => r.title)} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Symptoms ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Symptoms
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Common Symptoms of Sleep Apnea
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Many patients describe waking up "unrefreshed" even after sleeping for long hours. Symptoms span both nighttime and daytime.
                    </p>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="flex items-center gap-2 text-base font-semibold text-[#0f172a] mb-1">
                                <Moon className="h-5 w-5 text-[#1fa8e8]" />
                                Night Symptoms
                            </h3>
                            <CardGrid items={nightSymptoms} />
                        </div>
                        <div>
                            <h3 className="flex items-center gap-2 text-base font-semibold text-[#0f172a] mb-1">
                                <Sun className="h-5 w-5 text-[#1fa8e8]" />
                                Day Symptoms
                            </h3>
                            <CardGrid items={daySymptoms} />
                        </div>
                    </div>
                </section>

                {/* ── Risk Factors ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Risk Profile
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Who Is at Higher Risk?
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        While obesity and metabolic factors are the most common drivers, even non-obese individuals may develop sleep apnea due to anatomical or hormonal factors.
                    </p>
                    <CardGrid items={riskFactors} />
                </section>

                {/* ── Sleep Study ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Diagnosis
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Sleep Study — The Key to Diagnosis
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Sleep apnea is diagnosed through a sleep study (Polysomnography). Severity is measured using the Apnea-Hypopnea Index (AHI). The test evaluates:
                            </p>
                            <CardGrid items={sleepStudyItems} />
                        </div>

                        <div className="w-full lg:w-[40%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                                alt="Polysomnography sleep study diagnosis"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── CPAP ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1615486510988-2c6ecc66ceba?q=80&w=1170&auto=format&fit=crop"
                                alt="CPAP therapy sleep apnea treatment"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Gold Standard Treatment
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                CPAP Therapy
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                CPAP (Continuous Positive Airway Pressure) therapy remains the most effective treatment for moderate to severe OSA. It works by delivering positive air pressure to keep the airway open during sleep. Many patients notice dramatic improvement in energy and daytime functioning within days to weeks.
                            </p>
                            <h3 className="mt-5 text-base font-semibold text-[#0f172a]">
                                Benefits include:
                            </h3>
                            <CardGrid items={cpapBenefits} />
                        </div>
                    </div>
                </section>

                {/* ── BiPAP ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Advanced Therapy
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        BiPAP Devices
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        BiPAP (Bilevel Positive Airway Pressure) devices provide different pressures during inhalation and exhalation. These are particularly useful in patients with complex sleep-related breathing disorders where standard CPAP is insufficient.
                    </p>
                    <CardGrid items={bipapConditions} />
                </section>

                {/* ── Sleep Apnea & PH ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Cardiovascular Link
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Sleep Apnea & Pulmonary Hypertension
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Untreated sleep apnea can worsen or contribute to pulmonary hypertension due to repeated nighttime oxygen deprivation. Patients presenting with the following should always be evaluated for sleep-disordered breathing:
                            </p>
                            <CheckList
                                items={[
                                    "Unexplained pulmonary hypertension",
                                    "Resistant hypertension",
                                    "Difficult-to-control heart failure",
                                ]}
                            />
                        </div>

                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Lifestyle Measures
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Lifestyle Measures Also Matter
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Alongside CPAP/BiPAP therapy, lifestyle modifications play an important complementary role in managing sleep apnea effectively:
                            </p>
                            <CardGrid items={lifestyleMeasures} />
                        </div>
                    </div>
                </section>

                {/* ── Public Message ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Awareness
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        A Message to the Public
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Snoring should never be ignored when associated with any of the following warning signs:
                    </p>
                    <CardGrid items={publicMessageSigns} />

                    <div className="mt-8 flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                            <p className="text-sm font-semibold text-[#0f172a] mb-3">
                                Early diagnosis and treatment of sleep apnea can:
                            </p>
                            <CheckList items={earlyTreatmentBenefits.map((b) => b.title)} />
                        </div>

                        <div className="flex-1 rounded-2xl border border-[#1fa8e8]/30 bg-[#1fa8e8]/5 p-5 sm:p-6 flex flex-col justify-center">
                            <HeartPulse className="h-8 w-8 text-[#1fa8e8] mb-3" />
                            <p className="text-base font-bold text-[#0f172a] leading-relaxed">
                                Sleep apnea is treatable — and timely treatment can be life changing.
                            </p>
                            <p className="mt-3 text-sm text-[#64748b]">
                                Many patients notice dramatic transformation in energy, focus, and overall health within weeks of starting appropriate therapy.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* ── CTA ── */}
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>
                            Book consultation for sleep apnea evaluation, sleep study coordination, CPAP/BiPAP therapy, and comprehensive sleep disorder management in Delhi.
                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about Obstructive Sleep Apnea, snoring, sleep study (Polysomnography), CPAP therapy, BiPAP devices, daytime sleepiness, pulmonary hypertension, and sleep-disordered breathing."
                faqs={faqs}
            />
        </>
    );
}