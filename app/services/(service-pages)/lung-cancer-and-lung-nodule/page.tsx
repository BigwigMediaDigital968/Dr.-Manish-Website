import {
    Stethoscope,
    CigaretteOff,
    Microscope,
    Wind,
    Activity,
    FileText,
    Layers,
    ShieldCheck,
    Calendar,
    AlertTriangle,
    UserCheck,
    Briefcase,
    ScanSearch,
    Droplets,
    Cigarette,
    FileScan,
    Syringe
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
    {
        id: "lung-nodule-evaluation",
        title: "Lung Nodule Evaluation",
        desc: "Comprehensive assessment of lung nodules using advanced imaging and diagnostic expertise.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <ScanSearch className="w-5 h-5" />,
    },
    {
        id: "lung-cancer-screening",
        title: "Lung Cancer Screening",
        desc: "Early detection screening for high-risk individuals to improve treatment outcomes.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
        id: "bronchoscopy-biopsy",
        title: "Bronchoscopy & Biopsy",
        desc: "Advanced bronchoscopic procedures for accurate diagnosis of lung and airway diseases.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "hemoptysis-evaluation",
        title: "Hemoptysis Evaluation",
        desc: "Expert evaluation and management of blood in sputum and related respiratory conditions.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "airway-stenting",
        title: "Airway Stenting",
        desc: "Specialized interventional procedures to relieve airway obstruction and improve breathing.",
        image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "smoking-related-lung-disease-care",
        title: "Smoking-Related Lung Disease Care",
        desc: "Personalized care for COPD, chronic bronchitis, and other smoking-related lung conditions.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <Cigarette className="w-5 h-5" />,
    },
    {
        id: "chronic-cough-assessment",
        title: "Chronic Cough Assessment",
        desc: "Detailed evaluation of persistent cough to identify underlying respiratory causes.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "pet-ct-oncology-coordination",
        title: "PET-CT & Oncology Coordination",
        desc: "Integrated diagnostic review and coordinated cancer care planning with oncology specialists.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <FileScan className="w-5 h-5" />,
    },
    {
        id: "interventional-pulmonology-procedures",
        title: "Interventional Pulmonology Procedures",
        desc: "Minimally invasive pulmonary interventions for diagnosis and treatment of complex lung diseases.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    }
];

const faqs = [
  {
    question: "What services are offered at the Lung Cancer & Lung Nodule Clinic?",
    answer:
      "The clinic provides comprehensive evaluation and management of lung nodules, suspected lung cancer, chronic cough, hemoptysis (blood in sputum), smoking-related lung disease, abnormal chest imaging, and recurrent pneumonia. Services include bronchoscopy, biopsy procedures, lung cancer screening, airway evaluation, interventional pulmonology, and multidisciplinary oncology coordination.",
  },
  {
    question: "What is a lung nodule and should I be concerned?",
    answer:
      "A lung nodule is a small spot or growth seen on a chest X-ray or CT scan. While many lung nodules are benign, some may represent early lung cancer or other lung diseases. Proper evaluation by a pulmonologist is important to determine the cause and whether further testing or monitoring is needed.",
  },
  {
    question: "Who should undergo lung cancer screening?",
    answer:
      "Lung cancer screening is recommended for high-risk individuals, particularly chronic smokers, former heavy smokers, and people with significant smoking-related lung disease such as COPD. Early detection through appropriate screening can improve treatment outcomes.",
  },
  {
    question: "When is bronchoscopy recommended for lung cancer evaluation?",
    answer:
      "Bronchoscopy may be recommended when imaging shows a suspicious lung lesion, airway abnormality, unexplained cough, recurrent infections, hemoptysis, or suspected lung cancer. It allows direct visualization of the airways and collection of tissue samples for diagnosis.",
  },
  {
    question: "What is involved in lung nodule evaluation?",
    answer:
      "Lung nodule evaluation typically includes a detailed clinical assessment, review of CT or PET-CT scans, smoking history assessment, risk stratification, and when necessary, bronchoscopy or biopsy procedures. The goal is to determine whether the nodule is benign or requires further treatment.",
  },
  {
    question: "What causes coughing up blood (hemoptysis)?",
    answer:
      "Hemoptysis can occur due to infections, bronchiectasis, tuberculosis, lung cancer, airway inflammation, or other respiratory conditions. Any episode of coughing up blood should be evaluated promptly to identify the underlying cause and initiate appropriate treatment.",
  },
  {
    question: "Do you provide biopsy procedures for suspected lung cancer?",
    answer:
      "Yes. Advanced bronchoscopy and endobronchial biopsy procedures are available to obtain tissue samples from suspicious lung lesions or airway abnormalities. These samples help establish an accurate diagnosis and guide treatment planning.",
  },
  {
    question: "What is the role of PET-CT in lung cancer diagnosis?",
    answer:
      "PET-CT helps assess the metabolic activity of lung nodules and suspected tumors, evaluate disease spread, and support staging of lung cancer. It is often used alongside clinical evaluation and biopsy results to guide treatment decisions.",
  },
  {
    question: "Can smokers be evaluated even if they have no symptoms?",
    answer:
      "Yes. Chronic smokers and individuals with a significant smoking history may benefit from lung cancer screening and respiratory evaluation even without symptoms. Early detection of lung cancer or smoking-related lung disease can improve long-term outcomes.",
  },
  {
    question: "Do you coordinate treatment after a lung cancer diagnosis?",
    answer:
      "Yes. The clinic works closely with thoracic surgeons, medical oncologists, radiation oncologists, and other specialists to provide coordinated multidisciplinary care. Personalized counselling and treatment planning are tailored to each patient's diagnosis and overall health condition.",
  },
];

export default function LungCancerAndLungNodulePage() {
    return (
        <>
            <ServiceHero title="Lung Cancer & Lung Nodule Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, specializes in the early diagnosis and management of lung nodules, suspected lung cancer, chronic smokers, persistent cough, hemoptysis, recurrent pneumonia, and abnormal CT chest findings, helping ensure timely and effective care." />
            <div className="max-w-7xl mx-auto px-4">
                <div className=" pt-10">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Early Detection Saves Lives</span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
                                Lung Cancer Screening & Evaluation
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Early diagnosis plays a crucial role in improving lung cancer outcomes. <strong className="text-[#0f172a]">
                                    {" "}Dr. Manish Aggarwal
                                </strong>, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, offers expert evaluation for lung nodules, suspected lung cancer, persistent cough, blood in sputum, recurrent pneumonia, abnormal CT chest findings, and smoking-related lung conditions.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                Services include advanced bronchoscopy, endobronchial biopsy, BAL, airway assessment, lung nodule evaluation, and coordinated thoracic oncology care. Patients with chronic cough, unexplained weight loss, chest pain, breathlessness, smoking history, or abnormal chest imaging receive comprehensive, evidence-based respiratory evaluation and management.

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
                    <div>
                        <div className="pt-10">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">Early Detection & Support</span>
                            <h3 className="text-2xl font-extrabold text-[#0f172a] mt-2 mb-4">
                                Screening Guidance for High-Risk Patients
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                The clinic also offers guidance for lung cancer screening in high-risk individuals, including chronic smokers and COPD patients. Personalized counselling, ethical patient care, and coordinated treatment planning remain central to our approach.

                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <ServicesCarousal heading="Services Offered" services={services} />

            </div>
            <div className="mb-10 max-w-7xl mx-auto p-4">
                <CTA description={<>
                    Book consultation for expert lung cancer evaluation and advanced respiratory care in Delhi.</>} cta={"Schedule Consultation"} />
            </div>
            <FAQs
                    title="Frequently Asked Questions"
                    description="Find answers to common questions about lung cancer screening, lung nodule evaluation, bronchoscopy, biopsy procedures, hemoptysis assessment, smoking-related lung disease, and advanced respiratory care at Delhi Lung & Bronchoscopy Center."
                    faqs={faqs}
                  />
        </>
    );
}