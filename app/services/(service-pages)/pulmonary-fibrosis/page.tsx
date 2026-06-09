import {
  Wind,
  Activity,
  ShieldPlus,
  Search,
  ScanSearch,
  Shield,
  Bone,
  HeartHandshake,
  Leaf,
  Microscope,
  Users,
  ClipboardList
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
  {
    id: "ild-evaluation-treatment",
    title: "ILD Evaluation & Treatment",
    desc: "Comprehensive diagnosis and personalized treatment planning for interstitial lung diseases.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: "pulmonary-fibrosis-management",
    title: "Pulmonary Fibrosis Management",
    desc: "Specialized care focused on slowing disease progression and improving quality of life.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
    icon: <ShieldPlus className="w-5 h-5" />,
  },
  {
    id: "hrct-chest-interpretation",
    title: "HRCT Chest Interpretation",
    desc: "Expert review of HRCT scans for accurate diagnosis and characterization of lung diseases.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    icon: <ScanSearch className="w-5 h-5" />,
  },
  {
    id: "autoimmune-lung-disease-care",
    title: "Autoimmune Lung Disease Care",
    desc: "Comprehensive management of lung involvement associated with autoimmune disorders.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "rheumatoid-arthritis-ild-management",
    title: "Rheumatoid Arthritis ILD Management",
    desc: "Targeted respiratory care for patients with rheumatoid arthritis-associated lung disease.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    icon: <Bone className="w-5 h-5" />,
  },
  {
    id: "systemic-sclerosis-ild-care",
    title: "Systemic Sclerosis ILD Care",
    desc: "Specialized evaluation and treatment of interstitial lung disease related to systemic sclerosis.",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
    icon: <HeartHandshake className="w-5 h-5" />,
  },
  {
    id: "hypersensitivity-pneumonitis-evaluation",
    title: "Hypersensitivity Pneumonitis Evaluation",
    desc: "Assessment of environmental and occupational lung reactions causing chronic inflammation.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    id: "oxygen-assessment-counselling",
    title: "Oxygen Assessment & Counselling",
    desc: "Evaluation of oxygen requirements with guidance for safe and effective long-term use.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop",
    icon: <Wind className="w-5 h-5" />,
  },
  {
    id: "pulmonary-function-test",
    title: "Pulmonary Function Test (PFT)",
    desc: "Detailed lung function testing to monitor disease severity and treatment response.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: "bronchoscopy-support-ild-diagnosis",
    title: "Bronchoscopy Support for ILD Diagnosis",
    desc: "Advanced bronchoscopic procedures to aid accurate diagnosis of complex interstitial lung diseases.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    id: "multidisciplinary-ild-consultation",
    title: "Multidisciplinary ILD Consultation",
    desc: "Collaborative evaluation involving pulmonology, radiology, pathology, and rheumatology experts.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "long-term-lung-fibrosis-monitoring",
    title: "Long-Term Lung Fibrosis Monitoring",
    desc: "Regular follow-up and disease tracking to optimize long-term respiratory health outcomes.",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
    icon: <ClipboardList className="w-5 h-5" />,
  },
];

const faqs = [
  {
    question: "What is Interstitial Lung Disease (ILD)?",
    answer:
      "Interstitial Lung Disease (ILD) refers to a group of lung disorders that cause inflammation and scarring of the lung tissue. Over time, this scarring can make it difficult for the lungs to transfer oxygen into the bloodstream, leading to breathlessness, cough, and reduced lung function.",
  },
  {
    question: "What is pulmonary fibrosis?",
    answer:
      "Pulmonary fibrosis is a condition in which lung tissue becomes scarred and stiff. This scarring can progressively reduce lung function, making breathing more difficult. Early diagnosis and appropriate treatment can help slow disease progression and improve quality of life.",
  },
  {
    question: "What are the common symptoms of ILD and pulmonary fibrosis?",
    answer:
      "Common symptoms include persistent dry cough, progressive breathlessness, fatigue, reduced exercise tolerance, low oxygen levels, and difficulty performing daily activities. Symptoms often develop gradually and may worsen over time if left untreated.",
  },
  {
    question: "How is Interstitial Lung Disease diagnosed?",
    answer:
      "Diagnosis typically involves a detailed clinical assessment, HRCT chest imaging, Pulmonary Function Testing (PFT), oxygen evaluation, laboratory investigations, and, in selected cases, bronchoscopy or additional specialized tests. A multidisciplinary approach is often used for accurate diagnosis.",
  },
  {
    question: "Why is HRCT chest important in ILD evaluation?",
    answer:
      "HRCT (High-Resolution Computed Tomography) is one of the most important investigations for ILD. It provides detailed images of the lungs and helps identify patterns of inflammation, fibrosis, and other abnormalities that assist in determining the specific type of interstitial lung disease.",
  },
  {
    question: "Can autoimmune diseases affect the lungs?",
    answer:
      "Yes. Autoimmune conditions such as rheumatoid arthritis, systemic sclerosis, lupus, and other connective tissue diseases can involve the lungs and cause interstitial lung disease. Early detection and coordinated care are important to prevent disease progression.",
  },
  {
    question: "What is Idiopathic Pulmonary Fibrosis (IPF)?",
    answer:
      "Idiopathic Pulmonary Fibrosis (IPF) is a chronic and progressive form of pulmonary fibrosis in which the exact cause is unknown. It leads to increasing lung scarring over time and requires specialized evaluation, monitoring, and treatment.",
  },
  {
    question: "Can COVID-19 cause lung fibrosis?",
    answer:
      "Some patients may develop residual lung scarring or fibrosis following severe COVID-19 infection. Persistent breathlessness, reduced oxygen levels, or abnormal CT findings after recovery may require evaluation by a pulmonologist.",
  },
  {
    question: "What is hypersensitivity pneumonitis?",
    answer:
      "Hypersensitivity pneumonitis is an inflammatory lung condition caused by repeated exposure to certain environmental allergens such as bird proteins, mold, dust, or agricultural particles. Early diagnosis and avoidance of triggers are important for preventing permanent lung damage.",
  },
  {
    question: "Do all ILD patients require oxygen therapy?",
    answer:
      "Not all patients require oxygen therapy. Oxygen is recommended when blood oxygen levels fall below normal or when patients experience significant oxygen desaturation during activity. Oxygen requirements are determined through proper clinical assessment and testing.",
  },
  {
    question: "What role does Pulmonary Function Testing (PFT) play in ILD management?",
    answer:
      "Pulmonary Function Testing helps assess lung capacity, measure disease severity, monitor progression, and evaluate response to treatment. Regular PFT monitoring is an important part of long-term ILD and pulmonary fibrosis care.",
  },
  {
    question: "Can pulmonary fibrosis be cured?",
    answer:
      "While many forms of pulmonary fibrosis cannot be completely reversed, early diagnosis, appropriate treatment, pulmonary rehabilitation, lifestyle modifications, and regular monitoring can help slow disease progression, reduce symptoms, and improve quality of life.",
  },
];

export default function page() {
  return (
    <>
      <ServiceHero title="Pulmonary Fibrosis Clinic in Delhi"
        description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, provides specialized care for Interstitial Lung Disease (ILD), pulmonary fibrosis, autoimmune-related lung disease, and progressive breathlessness disorders." />
      <div className="max-w-7xl mx-auto px-4">
        <div className=" pt-10">

          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Interstitial Lung Disease (ILD)</span>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
                Advanced ILD Evaluation & <br /> Personalized Care
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                Interstitial Lung Disease refers to a group of conditions causing inflammation and scarring of the lungs, leading to cough, breathlessness, reduced oxygen levels, and gradual decline in lung function. Early diagnosis and timely treatment are extremely important to slow disease progression and improve quality of life.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                The clinic offers comprehensive evaluation for ILD patients including HRCT chest interpretation, pulmonary function testing (PFT), oxygen assessment, autoimmune workup coordination, bronchoscopy support, and multidisciplinary management planning. Patients with persistent dry cough, unexplained breathlessness, abnormal CT scans, connective tissue disease, or suspected pulmonary fibrosis receive evidence-based personalized care.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1152&auto=format&fit=crop"
                alt="Lung Cancer Consultation"
                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>

        </div>

      </div>
      <div>
        <ServicesCarousal heading="Services Offered" description="Special expertise is available for rheumatoid arthritis-associated ILD, systemic sclerosis-related ILD, hypersensitivity pneumonitis, post-COVID lung fibrosis, smoking-related ILD, sarcoidosis, and idiopathic pulmonary fibrosis (IPF)." services={services} />

      </div>
      <div className="max-w-7xl p-4 mx-auto text-center">

        <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Long-Term ILD Support
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6">
          Personalized Care for Better Lung Health
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
          The clinic focuses on early diagnosis, individualized treatment planning, patient counselling, pulmonary rehabilitation guidance, and long-term respiratory care for complex interstitial lung diseases.

        </p>
      </div>
      <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
        <CTA description={<>
          Book consultation for expert ILD, pulmonary fibrosis, and advanced respiratory care in Delhi.</>} cta={"Schedule Consultation"} />
      </div>
      <FAQs
                          title="Frequently Asked Questions"
                          description="Find answers to common questions about lung cancer screening, lung nodule evaluation, bronchoscopy, biopsy procedures, hemoptysis assessment, smoking-related lung disease, and advanced respiratory care at Delhi Lung & Bronchoscopy Center."
                          faqs={faqs}
                        />
    </>
  );
}