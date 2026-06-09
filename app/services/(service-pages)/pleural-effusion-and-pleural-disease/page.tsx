import FAQs from "@/app/component/website/FAQs";
import CTA from "../component/CTA";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import {
    Wind,
    Activity,
    Droplets,
    Syringe,
    AlertCircle,
    Pill,
    ShieldPlus,
    TestTube,
    ScanLine,
    Search
} from "lucide-react";

export const services = [
    {
        id: "pleural-effusion-evaluation",
        title: "Pleural Effusion Evaluation",
        desc: "Comprehensive assessment of fluid around the lungs using imaging and diagnostic procedures.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <Search className="w-5 h-5" />,
    },
    {
        id: "pleural-fluid-aspiration",
        title: "Pleural Fluid Aspiration",
        desc: "Safe removal of pleural fluid for symptom relief and laboratory analysis.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "thoracentesis-procedure",
        title: "Thoracentesis Procedure",
        desc: "Minimally invasive procedure to drain excess pleural fluid and improve breathing.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Syringe className="w-5 h-5" />,
    },
    {
        id: "ultrasound-guided-pleural-tapping",
        title: "Ultrasound-Guided Pleural Tapping",
        desc: "Precision-guided pleural fluid drainage using real-time ultrasound imaging.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <ScanLine className="w-5 h-5" />,
    },
    {
        id: "chest-tube-insertion",
        title: "Chest Tube Insertion",
        desc: "Expert placement of chest drains for pleural effusions, pneumothorax, and infections.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <TestTube className="w-5 h-5" />,
    },
    {
        id: "empyema-management",
        title: "Empyema Management",
        desc: "Specialized treatment of infected pleural collections with drainage and medical therapy.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "tubercular-pleural-effusion-care",
        title: "Tubercular Pleural Effusion Care",
        desc: "Diagnosis and comprehensive management of tuberculosis-related pleural effusions.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop",
        icon: <Pill className="w-5 h-5" />,
    },
    {
        id: "malignant-pleural-effusion-management",
        title: "Malignant Pleural Effusion Management",
        desc: "Advanced care for cancer-related pleural effusions with coordinated treatment planning.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <AlertCircle className="w-5 h-5" />,
    },
    {
        id: "breathlessness-evaluation",
        title: "Breathlessness Evaluation",
        desc: "Thorough evaluation of unexplained shortness of breath and pleural disorders.",
        image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "interventional-pleural-procedures",
        title: "Interventional Pleural Procedures",
        desc: "Advanced minimally invasive procedures for diagnosis and treatment of pleural diseases.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is pleural effusion?",
        answer:
            "Pleural effusion is the accumulation of excess fluid in the space between the lungs and the chest wall, known as the pleural cavity. It can cause breathlessness, chest discomfort, cough, and reduced lung expansion if not treated appropriately.",
    },
    {
        question: "What causes fluid around the lungs?",
        answer:
            "Pleural effusion can occur due to infections, tuberculosis, heart failure, kidney disease, liver disease, autoimmune disorders, lung cancer, other malignancies, or inflammatory conditions. Identifying the underlying cause is essential for effective treatment.",
    },
    {
        question: "What symptoms suggest pleural effusion?",
        answer:
            "Common symptoms include shortness of breath, chest pain, persistent cough, fever, fatigue, reduced exercise tolerance, and a feeling of heaviness in the chest. Some patients may also have abnormal findings on chest X-rays or CT scans.",
    },
    {
        question: "How is pleural effusion diagnosed?",
        answer:
            "Diagnosis typically involves a clinical examination, chest imaging such as X-ray, ultrasound, or CT scan, and pleural fluid analysis when fluid is present. These investigations help determine the cause and guide treatment decisions.",
    },
    {
        question: "What is thoracentesis or pleural fluid aspiration?",
        answer:
            "Thoracentesis, also known as pleural fluid aspiration, is a procedure in which fluid is removed from around the lungs using a needle or catheter. It helps relieve breathlessness and allows laboratory analysis to identify the underlying cause of the fluid collection.",
    },
    {
        question: "Why is ultrasound guidance used during pleural procedures?",
        answer:
            "Ultrasound guidance improves the accuracy and safety of pleural fluid aspiration and drainage procedures. It helps identify the exact location of fluid, reduces complications, and increases procedural success rates.",
    },
    {
        question: "When is a chest tube required?",
        answer:
            "A chest tube may be required when there is a large pleural effusion, infected fluid (empyema), persistent fluid accumulation, or when continuous drainage is necessary. The procedure helps expand the lung and improve breathing.",
    },
    {
        question: "What is empyema and how is it treated?",
        answer:
            "Empyema is a collection of infected pus within the pleural cavity. Treatment may involve antibiotics, chest tube drainage, pleural procedures, and close monitoring. Early treatment is important to prevent complications and lung damage.",
    },
    {
        question: "Can tuberculosis cause pleural effusion?",
        answer:
            "Yes. Tuberculosis is a common cause of pleural effusion, particularly in India. Specialized evaluation, pleural fluid testing, and appropriate anti-tubercular treatment are important for successful management.",
    },
    {
        question: "How is malignant pleural effusion managed?",
        answer:
            "Malignant pleural effusion occurs when cancer causes fluid accumulation around the lungs. Management may include pleural fluid drainage, symptom relief procedures, pleural interventions, and coordination with oncology specialists for comprehensive cancer care.",
    },
    {
        question: "Do all pleural effusions require drainage?",
        answer:
            "Not all pleural effusions require immediate drainage. The decision depends on the size of the effusion, severity of symptoms, underlying cause, and imaging findings. Your pulmonologist will recommend the most appropriate treatment approach.",
    },
    {
        question: "When should I see a pulmonologist for pleural disease?",
        answer:
            "You should seek evaluation if you have unexplained breathlessness, chest pain, persistent cough, fever, recurrent pleural fluid collection, or abnormal chest imaging. Early diagnosis and treatment can help prevent complications and improve outcomes.",
    },
];

export default function page() {
    return (
        <>

            <ServiceHero title="Pleural Effusion & Pleural Disease Clinic in Delhi"

                description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, provides expert evaluation and management of pleural effusion (water around the lungs), pleural infections, recurrent fluid collection, pleural thickening, and unexplained breathlessness." />
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
                                Pleural effusion can occur due to infections, tuberculosis, heart disease, liver disease, kidney disease, autoimmune disorders, or malignancy. Accurate diagnosis and timely drainage are essential to prevent complications and improve breathing comfort. The clinic offers evidence-based diagnosis and personalized treatment plans for both benign and complex pleural diseases.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                Services include ultrasound-guided pleural fluid aspiration, diagnostic thoracentesis, pleural fluid analysis, intercostal chest tube placement, management of empyema, recurrent pleural effusion evaluation, and coordination for advanced pleural procedures when required. Patients with chest pain, breathlessness, persistent fever, cough, or abnormal chest imaging are comprehensively evaluated.


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
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">Pleural Disease Expertise</span>
                            <h3 className="text-2xl font-extrabold text-[#0f172a] mt-2 mb-4">
                                Advanced Management of Complex Pleural Conditions
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Special expertise is available for tuberculosis-related pleural effusion, malignant pleural effusion, and complicated pleural infections requiring interventional pulmonology support.

                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <ServicesCarousal heading="Services Offered" services={services} />
            <div className="mb-10 max-w-7xl px-4 mx-auto">
                <CTA description={<>
                    Book consultation for expert lung cancer evaluation and advanced respiratory care in Delhi.</>} cta={"Schedule Consultation"} />
            </div>

            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about pleural effusion, pleural fluid aspiration, thoracentesis, chest tube insertion, empyema treatment, and advanced pleural disease management at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />

        </>
    )
}