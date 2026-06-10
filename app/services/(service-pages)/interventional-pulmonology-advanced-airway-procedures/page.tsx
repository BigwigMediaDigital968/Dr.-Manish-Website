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
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";


export const services = [
    {
        id: "rigid-bronchoscopy",
        title: "Rigid Bronchoscopy",
        desc: "Advanced rigid bronchoscopy for airway evaluation and treatment of complex respiratory conditions.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "airway-stenting-procedures",
        title: "Airway Stenting Procedures",
        desc: "Airway stent placement to relieve obstruction and restore normal airflow.",
        image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "tumour-debulking",
        title: "Tumour Debulking",
        desc: "Bronchoscopic tumour reduction procedures to improve airway patency and breathing.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <Scissors className="w-5 h-5" />,
    },
    {
        id: "therapeutic-bronchoscopy",
        title: "Therapeutic Bronchoscopy",
        desc: "Minimally invasive bronchoscopic treatments for airway and lung disorders.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "tracheal-bronchial-stenosis-management",
        title: "Tracheal & Bronchial Stenosis Management",
        desc: "Specialized management of airway narrowing affecting breathing and airflow.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <CircleDashed className="w-5 h-5" />,
    },
    {
        id: "airway-dilatation-procedures",
        title: "Airway Dilatation Procedures",
        desc: "Interventional procedures to widen narrowed airways and improve respiratory function.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Expand className="w-5 h-5" />,
    },
    {
        id: "endobronchial-biopsy",
        title: "Endobronchial Biopsy",
        desc: "Precision biopsy procedures for diagnosis of airway and lung abnormalities.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "hemoptysis-management",
        title: "Hemoptysis Management",
        desc: "Expert diagnosis and treatment of blood in sputum using advanced airway interventions.",
        image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "foreign-body-removal",
        title: "Foreign Body Removal",
        desc: "Safe bronchoscopic removal of inhaled foreign bodies from the respiratory tract.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
        id: "pleural-procedures",
        title: "Pleural Procedures",
        desc: "Advanced pleural interventions including aspiration, drainage, and diagnostic procedures.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    },
    {
        id: "central-airway-obstruction-management",
        title: "Central Airway Obstruction Management",
        desc: "Comprehensive treatment of complex airway blockages using interventional pulmonology techniques.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "interventional-pulmonology-consultation",
        title: "Interventional Pulmonology Consultation",
        desc: "Expert consultation for advanced airway, lung, and pleural interventions.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is Interventional Pulmonology?",
        answer:
            "Interventional Pulmonology is a specialized branch of respiratory medicine that uses advanced bronchoscopic and minimally invasive techniques to diagnose and treat complex airway, lung, and pleural disorders without major surgery in selected patients.",
    },
    {
        question: "Who may benefit from Interventional Pulmonology procedures?",
        answer:
            "Patients with airway obstruction, lung tumors, persistent cough, recurrent lung collapse, hemoptysis, tracheal narrowing, bronchial stenosis, foreign body aspiration, or complex pleural diseases may benefit from advanced interventional pulmonology evaluation and treatment.",
    },
    {
        question: "What is rigid bronchoscopy?",
        answer:
            "Rigid bronchoscopy is an advanced airway procedure performed using a rigid metal bronchoscope under anesthesia. It is commonly used for airway stenting, tumor debulking, foreign body removal, severe bleeding control, and management of central airway obstruction.",
    },
    {
        question: "What is therapeutic bronchoscopy?",
        answer:
            "Therapeutic bronchoscopy refers to bronchoscopic procedures performed to treat airway problems rather than simply diagnose them. These procedures may include tumor removal, airway dilatation, stent placement, bleeding control, and foreign body extraction.",
    },
    {
        question: "What is an airway stent and when is it used?",
        answer:
            "An airway stent is a specialized device placed inside the trachea or bronchi to keep narrowed or blocked airways open. It may be used in patients with airway tumors, tracheal stenosis, bronchial narrowing, or external airway compression.",
    },
    {
        question: "What is tumour debulking?",
        answer:
            "Tumour debulking is a bronchoscopic procedure used to remove or reduce airway tumors that are obstructing airflow. It can help improve breathing, reduce symptoms, and restore airway patency in selected patients.",
    },
    {
        question: "What causes tracheal or bronchial stenosis?",
        answer:
            "Airway stenosis can occur due to previous tuberculosis, prolonged intubation, tracheostomy, airway injury, inflammation, tumors, or certain medical conditions. Symptoms often include breathlessness, noisy breathing, and persistent cough.",
    },
    {
        question: "Can airway narrowing be treated without surgery?",
        answer:
            "In many cases, airway narrowing can be managed using minimally invasive bronchoscopic procedures such as airway dilatation, stenting, or therapeutic bronchoscopy, potentially avoiding the need for major surgery.",
    },
    {
        question: "What is endobronchial biopsy?",
        answer:
            "Endobronchial biopsy is a procedure performed during bronchoscopy to obtain tissue samples from abnormal airway lesions, growths, or suspicious areas. The samples are examined to help diagnose infections, inflammation, or cancer.",
    },
    {
        question: "Can interventional pulmonology help manage coughing up blood?",
        answer:
            "Yes. Advanced bronchoscopic procedures can help identify the source of bleeding, localize affected airways, and assist in managing hemoptysis, particularly in patients with recurrent or significant bleeding.",
    },
    {
        question: "How are inhaled foreign bodies removed from the airway?",
        answer:
            "Foreign bodies lodged in the airways can often be removed using flexible or rigid bronchoscopy. Prompt removal helps prevent airway obstruction, recurrent infections, and long-term lung complications.",
    },
    {
        question: "When should I consult an interventional pulmonologist?",
        answer:
            "You should seek evaluation if you have unexplained breathlessness, airway obstruction, recurrent lung infections, persistent cough, hemoptysis, tracheal narrowing, abnormal bronchoscopy findings, or require advanced airway procedures.",
    },
];

export default function page() {
    return (
        <>
            <ServiceHero title="Interventional Pulmonology & Advanced Airway Procedures Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, provides advanced minimally invasive airway and pleural procedures for complex respiratory diseases, central airway obstruction, lung tumors, tracheobronchial stenosis, and difficult lung conditions." />
            <div className="max-w-7xl mx-auto px-4">
                <div className=" pt-10">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Airway Procedures</span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Interventional Pulmonology <br /> & Airway Procedures
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Interventional pulmonology combines advanced bronchoscopy techniques with modern airway management to diagnose and treat airway narrowing, tumors, bleeding, recurrent lung collapse, and complex respiratory disorders without major surgery in selected patients.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                The clinic offers specialized procedures including airway stenting, tumour debulking, rigid bronchoscopy, therapeutic bronchoscopy, endobronchial biopsy, foreign body removal, airway dilatation, and management of tracheal or bronchial stenosis. Patients with breathlessness, noisy breathing, persistent cough, recurrent lung infections, hemoptysis, post-intubation airway narrowing, or suspected airway obstruction are comprehensively evaluated.

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
                                    Specialized Airway Intervention Expertise
                                </span>
                                <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569]">
                                    Special expertise is available in managing malignant airway obstruction, post-tuberculosis airway stenosis,
                                    post-ventilator tracheal narrowing, and complex central airway diseases requiring advanced bronchoscopic
                                    intervention.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ServicesCarousal heading="Services Offered" description="Specialized expertise is available in airway stenting, tumour debulking, rigid bronchoscopy, airway dilatation, hemoptysis management, and the treatment of complex central airway disorders." services={services} />

            </div>
            <div className="max-w-7xl p-4 mx-auto text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                    Advanced Airway Care
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6">
                    Minimally Invasive Solutions for Complex Airway Disorders
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                    The clinic focuses on minimally invasive respiratory interventions, faster symptom relief,
                    airway preservation, and multidisciplinary coordination for the comprehensive management
                    of complex airway and chest diseases.
                </p>
            </div>
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA description={<>
                    Book consultation for advanced bronchoscopy, airway stenting, and interventional pulmonology care in Delhi.</>} cta={"Schedule Consultation"} />
            </div>
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about interventional pulmonology, rigid bronchoscopy, airway stenting, tumour debulking, therapeutic bronchoscopy, tracheal stenosis, airway obstruction, and advanced respiratory procedures at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />
        </>
    );
}