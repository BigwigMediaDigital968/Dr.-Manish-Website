import {
    Wind,
    Activity,
    Microscope,
    ShieldPlus,
    ShieldCheck,
    Network,
    Users,
    Stethoscope,
    Scan,
    ScanSearch,
    Droplets,
    RefreshCw,
    CheckCircle,
    Globe,
    Award,
    Heart,
    HeartPulse,
    ClipboardList,
    Search,
    Zap,
    Star,
    GraduationCap,
    FlaskConical,
    Layers,
    ArrowRight,
    CheckCircle2,
    FileText,
} from "lucide-react";
import CTA from "../services/(service-pages)/component/CTA";
import Navbar from "../component/website/Navbar";
import Footer from "../component/website/Footer";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventionalProcedures = [
    { title: "EBUS (Endobronchial Ultrasound)", icon: ScanSearch },
    { title: "Rigid Bronchoscopy", icon: Scan },
    { title: "Airway Stenting", icon: Layers },
    { title: "Tumour Debulking", icon: Zap },
    { title: "Medical Thoracoscopy", icon: FlaskConical },
    { title: "Cryobiopsy", icon: Microscope },
    { title: "Foreign Body Removal", icon: Search },
    { title: "Indwelling Pleural Catheter (IPC) Procedures", icon: Droplets },
];

const comprehensiveConditions = [
    { title: "Asthma & Severe Asthma", icon: Wind },
    { title: "COPD & Smoking-Related Lung Disease", icon: Activity },
    { title: "Interstitial Lung Disease (ILD)", icon: Microscope },
    { title: "Pulmonary Fibrosis", icon: ShieldPlus },
    { title: "Tuberculosis", icon: ShieldCheck },
    { title: "Lung Cancer", icon: ScanSearch },
    { title: "Pleural Diseases", icon: Droplets },
    { title: "Pneumonia & Post-COVID Lung Disease", icon: RefreshCw },
    { title: "Chronic Cough & Breathlessness", icon: Stethoscope },
];

const diagnosticTools = [
    { title: "Pulmonary Function Testing (PFT)", icon: Activity },
    { title: "HRCT Chest Interpretation", icon: ScanSearch },
    { title: "Bronchoscopy & BAL", icon: Scan },
    { title: "EBUS-TBNA", icon: Microscope },
    { title: "Ultrasound-Guided Pleural Procedures", icon: Droplets },
    { title: "Multidisciplinary Respiratory Evaluation", icon: Network },
];

const patientCenteredValues = [
    { title: "Clear Patient Communication", icon: Users },
    { title: "Personalized Treatment Planning", icon: ClipboardList },
    { title: "Evidence-Based Medical Decisions", icon: ShieldCheck },
    { title: "Long-Term Respiratory Health Monitoring", icon: HeartPulse },
    { title: "Compassionate & Ethical Medical Practice", icon: Heart },
];

// ─── Reusable Components ──────────────────────────────────────────────────────

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

// ─── Highlight Card ───────────────────────────────────────────────────────────

function HighlightCard({ icon: Icon, title, children }:{icon:any;title:any; children:any}) {
    return (
        <div className="rounded-2xl border border-[#1fa8e8]/30 bg-[#1fa8e8]/5 p-6 flex flex-col">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8] mb-4">
                <Icon className="h-5 w-5" />
            </div>
            <p className="text-base font-bold text-[#0f172a] mb-3 leading-snug">{title}</p>
            {children}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhyChooseUsPage() {
    return (
        <>
        <Navbar/>
            {/* <ServiceHero
                title="Why Choose Us — Advanced Respiratory & Interventional Pulmonology Care in Delhi"
                description="Dr. Manish Aggarwal is a Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, dedicated to providing evidence-based, ethical, and patient-focused respiratory care for both common and complex lung diseases."
            /> */}
            <WhyChooseUsHero/>

            <div className="max-w-7xl mx-auto px-4">

                {/* ── Intro ── */}
                <div className="pt-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Our Practice
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                What Makes <br /> Our Care Different?
                            </h2>
                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                With extensive clinical experience in respiratory medicine, advanced bronchoscopy, pleural procedures, and interventional pulmonology, the clinic combines modern diagnostic expertise with compassionate long-term patient care.
                            </p>
                            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                                From routine lung conditions to complex interventional cases, every patient receives personalized, evidence-based respiratory care tailored to their individual needs.
                            </p>
                        </div>

                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop"
                                alt="Advanced respiratory and interventional pulmonology care Delhi"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Interventional Expertise ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Specialized Procedures
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Advanced Interventional Pulmonology Expertise
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Specialized expertise in advanced airway and pleural procedures that go beyond routine respiratory medicine — providing diagnostic and therapeutic options for complex lung conditions.
                    </p>
                    <CardGrid items={interventionalProcedures} />
                </section>

                {/* ── International Exposure + Academic ── */}
                <section className="pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <HighlightCard icon={Globe} title="International Clinical Exposure">
                            <p className="text-sm text-[#64748b] leading-relaxed">
                                Professional respiratory medicine exposure and training experience associated with clinical practice standards in England, along with the prestigious FRCP (Glasgow), brings internationally aligned evidence-based respiratory care to patients in India.
                            </p>
                        </HighlightCard>

                        <HighlightCard icon={GraduationCap} title="Strong Academic & Teaching Involvement">
                            <p className="text-sm text-[#64748b] leading-relaxed">
                                Actively involved in teaching advanced bronchoscopy and interventional pulmonology through workshops, small-group academic programs, and hands-on procedural training platforms — reflecting a commitment to continuous learning and procedural excellence.
                            </p>
                        </HighlightCard>

                    </div>
                </section>

                {/* ── Comprehensive Care ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Full Spectrum Care
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Comprehensive Lung Disease Care Under One Roof
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Evaluation and management for the full breadth of respiratory conditions — from common presentations to rare and complex lung diseases.
                    </p>
                    <CardGrid items={comprehensiveConditions} />
                </section>

                {/* ── Diagnostic Approach ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Accurate Diagnosis
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Advanced Diagnostic Approach
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Focus on early and accurate diagnosis using modern investigative tools and a structured multidisciplinary evaluation process.
                            </p>
                            <CardGrid items={diagnosticTools} />
                        </div>

                        <div className="w-full lg:w-[40%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
                                alt="Advanced pulmonary diagnostics HRCT bronchoscopy"
                                className="w-full h-[380px] sm:h-[440px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Patient-Centered ── */}
                <section className="pt-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                        Our Values
                    </span>
                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                        Patient-Centered & Ethical Care
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                        Every interaction at the clinic is guided by a commitment to honesty, clarity, and the patient's long-term wellbeing.
                    </p>
                    <CardGrid items={patientCenteredValues} />
                </section>

                {/* ── COVID ── */}
                <section className="pt-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop"
                                alt="COVID-19 pandemic respiratory care contribution"
                                className="w-full h-[320px] sm:h-[360px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                                Community Contribution
                            </span>
                            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-[#0f172a]">
                                Trusted Care During the COVID-19 Pandemic
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
                                During the COVID-19 pandemic, active respiratory support, counselling, and treatment guidance were provided to more than a thousand patients requiring lung care, oxygen guidance, hospitalization coordination, and post-COVID respiratory recovery support.
                            </p>
                            <div className="mt-5 flex items-start gap-4 rounded-2xl border border-[#1fa8e8]/30 bg-[#1fa8e8]/5 p-5">
                                <Award className="h-8 w-8 text-[#1fa8e8] shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-bold text-[#0f172a]">
                                        Corona Warrior Certificate
                                    </p>
                                    <p className="mt-1 text-sm text-[#64748b]">
                                        This contribution to frontline respiratory care during the pandemic was recognized with a Corona Warrior Certificate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Our Goal ── */}
                <section className="pt-12 pb-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1fa8e8]/10 text-[#1fa8e8]">
                            <Star className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] mb-2">
                                Our Goal
                            </p>
                            <p className="text-base sm:text-lg font-bold text-[#0f172a] leading-relaxed">
                                To provide advanced yet compassionate respiratory care with focus on accurate diagnosis, minimally invasive procedures, symptom relief, and long-term lung health improvement.
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
                            Book consultation for expert pulmonology and advanced interventional respiratory care in Delhi.
                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>
            <Footer/>
        </>
    );
}

export function WhyChooseUsHero() {
  return (
    <div className="relative min-h-[600px] lg:min-h-[650px] w-full flex items-center justify-center py-16 lg:py-24 overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop')` 
        }}
      />
      
      {/* Soft Gradient Overlay for professional medical depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white via-white/95 to-slate-50/90" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-10">
        
        {/* Left Column: Content Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1fa8e8]/10 border border-[#1fa8e8]/20 text-[#1fa8e8] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            <Activity className="w-3.5 h-3.5" />
            Clinical Evidence & Staging
          </div>

          {/* Main Title with Gradient Accents */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-[1.15]">
            Why Choose Us <br className="hidden sm:inline" />
            
          </h1>
          <h2 className="text-2xl sm:text-3xl bg-gradient-to-r leading-snug from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent leading-tight">
              Advanced Respiratory & Interventional Pulmonology Care
            </h2>

          {/* Clinical Description */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
            Dr. Manish Aggarwal is a Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, dedicated to providing evidence-based, ethical, and patient-focused respiratory care for both common and complex lung diseases. We combine advanced bronchoscopy, Level 1 sleep diagnostics, and NABL-compliant respiratory monitoring to ensure world-class diagnostic accuracy.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <Link href={"/case-studies"} className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1fa8e8] hover:bg-[#1896d1] text-white text-sm font-bold uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              Explore Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={"/contact"} className="cursor-pointer flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 text-sm font-bold uppercase tracking-wider rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>

          {/* Footer Badge */}
          <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest pt-4">
            <ShieldCheck className="w-4 h-4 text-[#6dbb45]" />
            Nabl Accredited Laboratory Standards
          </div>

        </div>

        {/* Right Column: Dynamic Framed Medical Image with Interactive Badges */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-[32px] p-1.5 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100/80">
            <div className="relative w-full h-full rounded-[26px] overflow-hidden">
              
              {/* Doctor / Consultation Image */}
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
                alt="Pulmonologist evaluating respiratory patient" 
                className="w-full h-full object-cover"
              />

              {/* Top Floating Badge: Evidence-Based Medicine */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-100 shadow-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6dbb45]" />
                Evidence-Based Medicine
              </div>

              {/* Bottom Floating Status Card (Replicating "Staging Verified" panel) */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#6dbb45]/10 text-[#6dbb45]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-bold text-[#6dbb45] uppercase tracking-wider">
                      Staging Verified
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-800">
                      EBUS & Airway Procedures
                    </span>
                  </div>
                </div>
                {/* Active Indicator Pulse */}
                <div className="relative flex h-2.5 w-2.5 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6dbb45] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6dbb45]"></span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}