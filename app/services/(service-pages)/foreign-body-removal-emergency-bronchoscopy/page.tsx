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
        id: "pediatric-foreign-body-removal",
        title: "Pediatric Foreign Body Removal",
        desc: "Advanced bronchoscopic removal of inhaled foreign bodies in children.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
        id: "adult-airway-foreign-body-extraction",
        title: "Adult Airway Foreign Body Extraction",
        desc: "Safe bronchoscopic extraction of inhaled objects from adult airways.",
        image: "https://images.unsplash.com/photo-1614169270948-e1b4294cd6e1?q=80&w=1170&auto=format&fit=crop",
        icon: <Wind className="w-5 h-5" />,
    },
    {
        id: "emergency-bronchoscopy",
        title: "Emergency Bronchoscopy",
        desc: "Urgent airway evaluation and intervention for suspected foreign body aspiration.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "rigid-bronchoscopy-procedures",
        title: "Rigid Bronchoscopy Procedures",
        desc: "Advanced rigid bronchoscopy for foreign body retrieval and airway management.",
        image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "recurrent-pneumonia-evaluation",
        title: "Recurrent Pneumonia Evaluation",
        desc: "Assessment for hidden airway foreign bodies causing repeated lung infections.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "persistent-wheezing-assessment",
        title: "Persistent Wheezing Assessment",
        desc: "Evaluation of unexplained wheezing due to possible airway obstruction.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        icon: <CircleDashed className="w-5 h-5" />,
    },
    {
        id: "airway-obstruction-management",
        title: "Airway Obstruction Management",
        desc: "Comprehensive treatment for airway blockage and breathing difficulty.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <Expand className="w-5 h-5" />,
    },
    {
        id: "post-aspiration-lung-infection-care",
        title: "Post-Aspiration Lung Infection Care",
        desc: "Management of lung infections and complications following aspiration events.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "difficult-airway-foreign-body-retrieval",
        title: "Difficult & Deep Airway Foreign Body Retrieval",
        desc: "Advanced bronchoscopic techniques for complex foreign body extraction.",
        image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is foreign body aspiration?",
        answer:
            "Foreign body aspiration occurs when an object such as food, peanuts, seeds, toy parts, pins, tablets, or dental material enters the airway instead of the food pipe. It can partially or completely block airflow and may become a medical emergency.",
    },
    {
        question: "What are the symptoms of foreign body aspiration?",
        answer:
            "Symptoms may include sudden coughing, choking, noisy breathing, wheezing, breathlessness, recurrent pneumonia, persistent cough, chest discomfort, or repeated respiratory infections.",
    },
    {
        question: "Can foreign body aspiration occur in adults?",
        answer:
            "Yes. Although more common in children, adults can also aspirate food particles, dental material, tablets, or other objects, particularly during eating, medical procedures, or neurological disorders.",
    },
    {
        question: "When should emergency bronchoscopy be performed?",
        answer:
            "Emergency bronchoscopy may be required when airway obstruction is suspected, breathing difficulty is severe, or a foreign body is causing persistent symptoms and requires urgent removal.",
    },
    {
        question: "What is bronchoscopy?",
        answer:
            "Bronchoscopy is a procedure that allows direct visualization of the airways using a flexible or rigid scope. It helps diagnose airway problems and remove inhaled foreign bodies.",
    },
    {
        question: "What is rigid bronchoscopy?",
        answer:
            "Rigid bronchoscopy is an advanced airway procedure performed under anesthesia and is commonly used for foreign body retrieval, airway obstruction management, and other complex airway interventions.",
    },
    {
        question: "How are foreign bodies removed from the lungs?",
        answer:
            "Most airway foreign bodies can be removed using flexible or rigid bronchoscopy with specialized instruments designed to safely grasp and extract the object.",
    },
    {
        question: "Can a foreign body cause recurrent pneumonia?",
        answer:
            "Yes. A retained foreign body may obstruct part of the airway, resulting in repeated infections, recurrent pneumonia, persistent cough, and chronic respiratory symptoms.",
    },
    {
        question: "What happens if a foreign body remains undiagnosed?",
        answer:
            "Delayed diagnosis can lead to airway damage, lung collapse, recurrent infections, chronic cough, breathing difficulties, and long-term lung complications.",
    },
    {
        question: "Which children should be evaluated urgently?",
        answer:
            "Children with sudden onset cough, choking episodes, unilateral wheezing, breathing difficulty, or unexplained recurrent chest infections should be evaluated promptly for possible airway foreign body aspiration.",
    },
    {
        question: "Is bronchoscopic foreign body removal safe?",
        answer:
            "When performed by experienced interventional pulmonologists using appropriate techniques, bronchoscopic foreign body removal is generally safe and highly effective.",
    },
    {
        question: "When should I consult a specialist?",
        answer:
            "You should seek specialist evaluation if there is suspected aspiration, persistent cough after choking, unexplained wheezing, recurrent pneumonia, breathing difficulty, or concern for airway obstruction.",
    },
];

export default function page() {
    return (
        <>
            <ServiceHero
                title="Foreign Body Removal & Emergency Bronchoscopy Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Interventional Pulmonologist & Chest Specialist in Pitampura, Delhi, provides emergency and advanced bronchoscopy services for foreign body aspiration in children and adults."
            />
            <div className="max-w-7xl mx-auto px-4">
                <div className=" pt-10">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                        Foreign Body Aspiration Care
                    </span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Foreign Body Removal <br /> & Emergency Bronchoscopy
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Accidental inhalation of peanuts, seeds, food particles, toy parts, pins, dental material, tablets, or other objects can block the airway and become life-threatening if not treated early. Foreign body aspiration may present with sudden coughing, choking, noisy breathing, recurrent pneumonia, wheezing, breathlessness, or persistent cough.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                The clinic offers rapid evaluation and advanced bronchoscopic removal using flexible and rigid bronchoscopy techniques. Early diagnosis and timely extraction are essential to prevent airway damage, lung collapse, infection, and long-term complications.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-[45%] shrink-0">
                            <img
                                src="/services/ebus-advanced-chest-diagnostics.png"
                                alt="Foreign Body Removal & Emergency Bronchoscopy"
                                className="w-full h-[350px] sm:h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <ServicesCarousal
                    heading="Services Offered"
                    description="Special expertise is available for pediatric foreign body removal, adult airway foreign body extraction, emergency bronchoscopy, recurrent pneumonia evaluation, airway obstruction management, post-aspiration lung infection care, and difficult airway foreign body retrieval."
                    services={services}
                />

            </div>

            <div className="py-16 pb-8 max-w-7xl p-4 mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] p-8 sm:p-10 shadow-sm transition-all hover:border-[#1fa8e8]/30">
                    <div
                        className="absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                        style={{ background: "linear-gradient(135deg, #1fa8e8 0%, #6dbb45 100%)" }}
                    />

                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                        <div className="flex-1">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#1fa8e8] block mb-1">
                                Early Evaluation Matters
                            </span>

                            <p className="text-base sm:text-lg font-medium leading-relaxed text-[#475569]">
                                Children with sudden onset cough, choking episodes, unilateral wheezing,
                                or unexplained recurrent chest infections should be evaluated promptly
                                for possible airway foreign body aspiration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl p-4 mx-auto text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] pb-4">
                    Advanced Airway Emergency Care
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6">
                    Rapid Diagnosis & Safe Foreign Body Removal
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                    The clinic focuses on safe minimally invasive airway management, rapid symptom relief,
                    and advanced interventional pulmonology care for complex airway emergencies.
                </p>
            </div>
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA
                    description={
                        <>
                            Book consultation for expert foreign body removal and emergency bronchoscopy services in Delhi.
                        </>
                    }
                    cta={"Schedule Consultation"}
                />
            </div>
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about interventional pulmonology, rigid bronchoscopy, airway stenting, tumour debulking, therapeutic bronchoscopy, tracheal stenosis, airway obstruction, and advanced respiratory procedures at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />
        </>
    );
}