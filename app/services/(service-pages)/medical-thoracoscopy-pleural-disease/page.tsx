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

} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
  {
    id: "medical-thoracoscopy",
    title: "Medical Thoracoscopy",
    desc: "Minimally invasive pleural examination and intervention for diagnosis and treatment of pleural diseases.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    icon: <Telescope className="w-5 h-5" />,
  },
  {
    id: "pleural-biopsy-procedures",
    title: "Pleural Biopsy Procedures",
    desc: "Targeted pleural tissue sampling for accurate diagnosis of infections, inflammation, and malignancy.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    id: "undiagnosed-pleural-effusion-evaluation",
    title: "Undiagnosed Pleural Effusion Evaluation",
    desc: "Comprehensive assessment of unexplained pleural fluid accumulation using advanced diagnostics.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1152&auto=format&fit=crop",
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: "pleural-fluid-management",
    title: "Pleural Fluid Management",
    desc: "Expert drainage and treatment strategies for symptomatic and recurrent pleural effusions.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    id: "pleurodesis-procedures",
    title: "Pleurodesis Procedures",
    desc: "Advanced procedures to prevent recurrent pleural effusions and improve long-term symptom control.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    icon: <ShieldPlus className="w-5 h-5" />,
  },
  {
    id: "malignant-pleural-effusion-care",
    title: "Malignant Pleural Effusion Care",
    desc: "Specialized management of cancer-related pleural effusions with personalized treatment planning.",
    image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    id: "tubercular-pleural-disease-diagnosis",
    title: "Tubercular Pleural Disease Diagnosis",
    desc: "Advanced diagnostic evaluation for tuberculosis-related pleural diseases and effusions.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
    icon: <Pill className="w-5 h-5" />,
  },
  {
    id: "intercostal-drainage-procedures",
    title: "Intercostal Drainage Procedures",
    desc: "Expert chest drain insertion and management for pleural effusions, empyema, and pneumothorax.",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
    icon: <Syringe className="w-5 h-5" />,
  },
  {
    id: "advanced-pleural-interventions",
    title: "Advanced Pleural Interventions",
    desc: "Comprehensive interventional pulmonology procedures for complex pleural disorders.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: "multidisciplinary-pleural-disease-consultation",
    title: "Multidisciplinary Pleural Disease Consultation",
    desc: "Collaborative evaluation involving pulmonology, oncology, radiology, pathology, and thoracic specialists.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    icon: <Users className="w-5 h-5" />,
  },
];

const faqs = [
  {
    question: "What is EBUS (Endobronchial Ultrasound)?",
    answer:
      "EBUS (Endobronchial Ultrasound) is an advanced bronchoscopic procedure that combines bronchoscopy with real-time ultrasound imaging. It allows pulmonologists to visualize and sample lymph nodes and structures located deep within the chest without the need for surgery.",
  },
  {
    question: "What is EBUS-TBNA?",
    answer:
      "EBUS-TBNA (Endobronchial Ultrasound-Guided Transbronchial Needle Aspiration) is a minimally invasive procedure that uses ultrasound guidance to obtain tissue samples from mediastinal lymph nodes and chest lesions for accurate diagnosis.",
  },
  {
    question: "Why is EBUS performed?",
    answer:
      "EBUS is commonly performed to evaluate enlarged chest lymph nodes, diagnose lung cancer, assess sarcoidosis, investigate tuberculosis, evaluate lung masses or nodules, and determine the cause of unexplained chest abnormalities.",
  },
  {
    question: "How does EBUS help in lung cancer diagnosis?",
    answer:
      "EBUS allows precise sampling of lymph nodes and suspicious chest lesions, helping confirm the diagnosis of lung cancer and determine whether the disease has spread. This information is essential for accurate staging and treatment planning.",
  },
  {
    question: "Can EBUS diagnose tuberculosis?",
    answer:
      "Yes. EBUS is frequently used to diagnose tuberculosis involving mediastinal lymph nodes, particularly when routine sputum tests are negative or when enlarged chest lymph nodes are present on imaging studies.",
  },
  {
    question: "Is EBUS useful for diagnosing sarcoidosis?",
    answer:
      "Yes. EBUS-TBNA is one of the most effective minimally invasive procedures for diagnosing sarcoidosis by obtaining tissue samples from enlarged mediastinal lymph nodes for pathological examination.",
  },
  {
    question: "What are mediastinal lymph nodes?",
    answer:
      "Mediastinal lymph nodes are lymph nodes located in the central part of the chest between the lungs. Enlargement of these lymph nodes can occur due to infections, tuberculosis, sarcoidosis, inflammation, or cancer.",
  },
  {
    question: "When is EBUS recommended for enlarged lymph nodes?",
    answer:
      "EBUS may be recommended when CT scans or PET-CT scans reveal enlarged chest lymph nodes and a tissue diagnosis is required to determine the underlying cause.",
  },
  {
    question: "Is EBUS safer than surgical biopsy?",
    answer:
      "In many situations, EBUS provides a safe and minimally invasive alternative to surgical procedures for obtaining tissue samples. It often reduces the need for more invasive diagnostic operations while maintaining high diagnostic accuracy.",
  },
  {
    question: "Can EBUS evaluate lung nodules and lung masses?",
    answer:
      "Yes. EBUS can assist in evaluating selected lung nodules, masses, and lesions located near the airways, helping obtain tissue samples for diagnosis and treatment planning.",
  },
  {
    question: "How long does recovery take after EBUS?",
    answer:
      "Most patients recover quickly after EBUS and can return home the same day, depending on the procedure performed and individual clinical circumstances. Recovery instructions are provided after the procedure.",
  },
  {
    question: "Who should consider EBUS evaluation?",
    answer:
      "Patients with enlarged chest lymph nodes, suspected lung cancer, sarcoidosis, tuberculosis, unexplained chest abnormalities, persistent lung lesions, or abnormal imaging findings may benefit from EBUS-guided evaluation.",
  },
];

const thoracoscopyIndications = [
    { title: "Undiagnosed Pleural Effusion", icon: Droplets },
    { title: "Recurrent Pleural Fluid Collection", icon: RefreshCw },
    { title: "Suspected Tubercular Pleural Disease", icon: ShieldCheck },
    { title: "Malignant Pleural Effusion", icon: AlertTriangle },
    { title: "Pleural Nodules or Thickening", icon: Activity },
    { title: "Mesothelioma Evaluation", icon: ScanSearch },
    { title: "Chronic Exudative Pleural Effusion", icon: Database },
    { title: "Persistent Unexplained Breathlessness", icon: Wind }
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Medical Thoracoscopy & Pleural Disease Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, provides advanced Medical Thoracoscopy and pleural disease management for undiagnosed pleural effusion, recurrent fluid collection, pleural infections, pleural thickening, and suspected pleural malignancy."
            />
            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-10">

    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
        Pleural Care
    </span>

    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                Medical Thoracoscopy <br /> for Pleural Diseases
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, provides advanced Medical Thoracoscopy services for evaluation and management of undiagnosed pleural effusion, pleural thickening, recurrent fluid collection, pleural infection, and suspected pleural malignancy.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                Medical thoracoscopy is a minimally invasive pleural procedure that allows direct visualization of the pleural cavity and targeted pleural biopsy under controlled conditions. It plays a crucial role in patients where routine pleural fluid analysis, imaging, or initial investigations fail to establish a diagnosis.
            </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[45%] shrink-0">
            <img
                src="https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1170&auto=format&fit=crop"
                alt="Medical thoracoscopy and pleural disease treatment"
                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
            />
        </div>
    </div>

</div>
                <div className="mb-10 mt-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                                Key Indications
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                                Thoracoscopy is especially valuable in:
                            </h3>
                        </div>


                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {thoracoscopyIndications.map((item, index) => {
                            const IconComponent = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1fa8e8]/40 hover:shadow-lg flex md:flex-col"
                                >
                                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45]" />

                                    <div className="hidden sm:flex items-center justify-center h-14 w-14 rounded-2xl bg-[#1fa8e8]/10 text-[#1fa8e8] mb-4">
                                        <IconComponent className="w-7 h-7" />
                                    </div>

                                    <h4 className="font-bold text-[#0f172a] leading-snug group-hover:text-[#1fa8e8] transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="py-16 pb-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm transition-all hover:border-[#1fa8e8]/30">
                        {/* Decorative Brand Accent Vector Glow */}
                        <div
                            className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                            style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                        />

                        <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                            <div className="flex-1">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1fa8e8] block mb-1">
                                    Improved Diagnostic Accuracy
                                </span>
                                <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569]">
                                    The procedure helps obtain larger and more accurate pleural tissue samples, significantly improving diagnostic yield in tuberculosis, cancer-related pleural disease, inflammatory disorders, and chronic pleural infections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <ServicesCarousal
                    heading="Services Offered"
                    description="A complete range of advanced chest diagnostic services designed to evaluate lung nodules, enlarged lymph nodes, suspected cancer, sarcoidosis, tuberculosis, and other complex respiratory conditions."
                    services={services}
                />

            </div>

            <div className="py-16 pb-8 max-w-7xl p-4 mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm transition-all hover:border-[#1fa8e8]/30">
                    <div className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }} />
                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">

                        <div className="flex-1">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#1fa8e8] block mb-1"> Advanced Treatment </span>
                            <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569]"> Special emphasis is placed on early diagnosis, minimally invasive management, symptom relief, and evidence-based pleural disease care using advanced interventional pulmonology techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>
                            Book consultation for expert thoracoscopy and advanced pleural disease management in Delhi.                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about Medical Thoracoscopy, pleural biopsy, pleural effusion, pleurodesis, pleural tuberculosis, malignant pleural effusion, mesothelioma evaluation, and advanced pleural disease management at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />
        </>
    );
}