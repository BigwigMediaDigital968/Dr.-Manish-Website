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

} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";


export const services = [
    {
        id: "ebus-tbna-procedures",
        title: "EBUS-TBNA Procedures",
        desc: "Advanced endobronchial ultrasound-guided needle aspiration for accurate diagnosis and staging.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <Radar className="w-5 h-5" />,
    },
    {
        id: "lung-cancer-staging",
        title: "Lung Cancer Staging",
        desc: "Comprehensive evaluation to determine the extent of lung cancer and guide treatment planning.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <ScanSearch className="w-5 h-5" />,
    },
    {
        id: "mediastinal-lymph-node-sampling",
        title: "Mediastinal Lymph Node Sampling",
        desc: "Minimally invasive lymph node sampling for diagnosis, staging, and treatment decisions.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <Network className="w-5 h-5" />,
    },
    {
        id: "sarcoidosis-diagnosis",
        title: "Sarcoidosis Diagnosis",
        desc: "Expert evaluation and tissue diagnosis for suspected sarcoidosis and related lung conditions.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "tb-lymph-node-evaluation",
        title: "TB Lymph Node Evaluation",
        desc: "Specialized assessment of tuberculosis-related lymph node enlargement using advanced diagnostics.",
        image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1170&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "advanced-bronchoscopy",
        title: "Advanced Bronchoscopy",
        desc: "State-of-the-art bronchoscopic procedures for diagnosis and management of complex lung diseases.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "minimally-invasive-chest-diagnostics",
        title: "Minimally Invasive Chest Diagnostics",
        desc: "Precision diagnostic procedures designed to evaluate chest and lung conditions with minimal discomfort.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    },
    {
        id: "lung-nodule-mass-evaluation",
        title: "Lung Nodule & Mass Evaluation",
        desc: "Comprehensive assessment of lung nodules and masses using advanced imaging and bronchoscopy.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <Search className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-thoracic-consultation",
        title: "Multidisciplinary Thoracic Consultation",
        desc: "Collaborative care involving pulmonology, oncology, radiology, and pathology specialists.",
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

const ebusIndications = [
    { title: "Lung Cancer Diagnosis & Staging", icon: Activity },
    { title: "Mediastinal Lymph Node Evaluation", icon: ScanSearch },
    { title: "Tuberculosis Diagnosis", icon: ShieldCheck },
    { title: "Sarcoidosis Assessment", icon: Microscope },
    { title: "Persistent Enlarged Chest Lymph Nodes", icon: Network },
    { title: "Suspected Malignancy Evaluation", icon: SearchCheck },
    { title: "Unexplained Lung Masses or Nodules", icon: CircleDot },
    { title: "Recurrent or Undiagnosed Chest Disease", icon: Stethoscope }
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="EBUS (Endobronchial Ultrasound) & Advanced Chest Diagnostics Clinic in Delhi"
                description="Dr. Manish Aggarwal offers advanced Endobronchial Ultrasound (EBUS) in Pitampura, Delhi for accurate, minimally invasive diagnosis of lung cancer, tuberculosis, sarcoidosis, enlarged lymph nodes, and other chest diseases through real-time ultrasound-guided evaluation and sampling."
            />
            <div className="max-w-7xl mx-auto px-4">
                <div className=" pt-10">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        EBUS & Advanced Chest Diagnostics
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Endobronchial Ultrasound (EBUS) <br /> for Accurate Lung Disease Diagnosis
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, offers advanced Endobronchial Ultrasound (EBUS) procedures for accurate diagnosis and staging of lung diseases, mediastinal lymph node enlargement, tuberculosis, sarcoidosis, and lung cancer.

                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                With extensive experience in performing EBUS-guided procedures, the clinic provides minimally invasive real-time ultrasound-guided sampling of lymph nodes and deep chest lesions that are difficult to access through routine bronchoscopy. EBUS has become an essential tool in modern respiratory medicine for improving diagnostic accuracy while reducing the need for invasive surgical procedures.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="/services/ebus-advanced-chest-diagnostics.png"
                                alt="Lung Cancer Consultation"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>

                </div>
                <div className="mb-10 mt-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#6dbb45]">
                                Key Indications for EBUS
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-2 leading-tight">
                                EBUS is commonly recommended for:
                            </h3>
                        </div>


                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {ebusIndications.map((item, index) => {
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
                                    Advanced Ultrasound-Guided Diagnosis
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
                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#1fa8e8] block mb-1"> Advanced Respiratory Care </span>
                            <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569]"> The clinic emphasizes patient safety, procedural precision, evidence-based diagnosis, and comprehensive respiratory care through advanced interventional pulmonology and minimally invasive bronchoscopic techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>
                            Book consultation for expert EBUS evaluation and advanced chest disease diagnosis in Delhi.                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>
            <FAQs
                title="Frequently Asked Questions"
                description="Find answers to common questions about EBUS, EBUS-TBNA, lung cancer staging, mediastinal lymph node sampling, sarcoidosis diagnosis, tuberculosis evaluation, and advanced chest diagnostics at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />
        </>
    );
}