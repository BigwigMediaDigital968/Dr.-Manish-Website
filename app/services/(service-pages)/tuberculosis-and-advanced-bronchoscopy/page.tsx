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
    ClipboardList,

    Pill,
    Droplets,
    Stethoscope,
    FileScan,
    HeartPulse,
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";


export const services = [
    {
        id: "pulmonary-tb-diagnosis-treatment",
        title: "Pulmonary TB Diagnosis & Treatment",
        desc: "Comprehensive diagnosis, treatment planning, and follow-up care for pulmonary tuberculosis.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
        icon: <ShieldPlus className="w-5 h-5" />,
    },
    {
        id: "sputum-negative-tb-evaluation",
        title: "Sputum-Negative TB Evaluation",
        desc: "Advanced evaluation of suspected tuberculosis when routine sputum tests are inconclusive.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "bronchoscopy-bal-tb-diagnosis",
        title: "Bronchoscopy & BAL for TB Diagnosis",
        desc: "Bronchoscopic evaluation and bronchoalveolar lavage (BAL) to support accurate TB diagnosis.",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
        icon: <Microscope className="w-5 h-5" />,
    },
    {
        id: "drug-resistant-tb-assessment",
        title: "Drug-Resistant TB Assessment",
        desc: "Specialized evaluation and management planning for suspected or confirmed drug-resistant tuberculosis.",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
        icon: <Pill className="w-5 h-5" />,
    },
    {
        id: "tb-with-pleural-effusion-evaluation",
        title: "TB with Pleural Effusion Evaluation",
        desc: "Expert assessment of tuberculosis-related pleural effusions and associated respiratory symptoms.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
        icon: <Droplets className="w-5 h-5" />,
    },
    {
        id: "chronic-cough-fever-assessment",
        title: "Chronic Cough & Fever Assessment",
        desc: "Evaluation of persistent cough, fever, weight loss, and other symptoms suggestive of TB.",
        image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        id: "ct-chest-interpretation",
        title: "CT Chest Interpretation",
        desc: "Expert review of CT chest findings for tuberculosis, lung infections, and related conditions.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        icon: <FileScan className="w-5 h-5" />,
    },
    {
        id: "post-tb-lung-disease-management",
        title: "Post-TB Lung Disease Management",
        desc: "Long-term care for lung damage, breathlessness, fibrosis, and complications following TB treatment.",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        icon: <HeartPulse className="w-5 h-5" />,
    },
    {
        id: "hemoptysis-evaluation",
        title: "Hemoptysis Evaluation",
        desc: "Comprehensive evaluation and treatment of blood in sputum associated with TB and other lung diseases.",
        image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        id: "multidisciplinary-respiratory-care",
        title: "Multidisciplinary Respiratory Care",
        desc: "Coordinated care involving pulmonology, radiology, microbiology, and respiratory medicine specialists.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        icon: <Users className="w-5 h-5" />,
    },
];

const faqs = [
    {
        question: "What is tuberculosis (TB)?",
        answer:
            "Tuberculosis (TB) is an infectious disease caused by Mycobacterium tuberculosis. It most commonly affects the lungs but can also involve lymph nodes, pleura, bones, abdomen, brain, and other organs.",
    },
    {
        question: "What are the common symptoms of pulmonary TB?",
        answer:
            "Common symptoms include persistent cough lasting more than two weeks, fever, night sweats, unexplained weight loss, fatigue, blood in sputum, chest pain, and breathlessness. Some patients may also have abnormal chest imaging findings.",
    },
    {
        question: "Can someone have TB even if the sputum test is negative?",
        answer:
            "Yes. Some patients have sputum-negative TB, where routine sputum tests fail to detect the infection despite clinical and radiological evidence. Additional investigations such as bronchoscopy and BAL may help establish the diagnosis.",
    },
    {
        question: "What is bronchoscopy and how does it help diagnose TB?",
        answer:
            "Bronchoscopy is a minimally invasive procedure that allows direct examination of the airways using a flexible camera. It helps obtain samples from the lungs when sputum tests are inconclusive or when the diagnosis remains uncertain.",
    },
    {
        question: "What is Bronchoalveolar Lavage (BAL)?",
        answer:
            "Bronchoalveolar Lavage (BAL) is a procedure performed during bronchoscopy in which sterile fluid is introduced into a part of the lung and then collected for laboratory testing. BAL can improve the diagnosis of tuberculosis, infections, and other lung diseases.",
    },
    {
        question: "When is bronchoscopy recommended for suspected TB?",
        answer:
            "Bronchoscopy may be recommended in patients with sputum-negative TB, persistent lung shadows, abnormal CT findings, recurrent respiratory symptoms, suspected drug-resistant TB, or when sputum samples cannot be obtained.",
    },
    {
        question: "What is drug-resistant tuberculosis?",
        answer:
            "Drug-resistant TB occurs when tuberculosis bacteria become resistant to one or more anti-tubercular medications. Early detection and appropriate testing are important to ensure effective treatment and prevent further spread of resistant disease.",
    },
    {
        question: "Can TB cause pleural effusion?",
        answer:
            "Yes. Tuberculosis can cause pleural effusion, which is the accumulation of fluid around the lungs. Patients may experience chest pain, breathlessness, fever, and cough, requiring specialized evaluation and treatment.",
    },
    {
        question: "What tests are used to diagnose tuberculosis?",
        answer:
            "Diagnosis may involve sputum testing, chest X-rays, CT scans, bronchoscopy, BAL analysis, molecular tests, blood investigations, pleural fluid analysis, and other targeted investigations depending on the clinical presentation.",
    },
    {
        question: "What is post-TB lung disease?",
        answer:
            "Post-TB lung disease refers to persistent lung damage that remains after successful tuberculosis treatment. Patients may continue to experience breathlessness, chronic cough, recurrent infections, bronchiectasis, or reduced lung function.",
    },
    {
        question: "How important is treatment adherence in TB?",
        answer:
            "Completing the full course of anti-tubercular treatment is extremely important. Poor adherence can lead to treatment failure, disease recurrence, ongoing transmission, and development of drug-resistant tuberculosis.",
    },
    {
        question: "When should I consult a pulmonologist for TB evaluation?",
        answer:
            "You should seek specialist evaluation if you have persistent cough, fever, weight loss, blood in sputum, unexplained breathlessness, recurrent chest infections, abnormal chest imaging, or suspected tuberculosis that remains undiagnosed.",
    },
];;

export default function page() {
    return (
        <>
            <ServiceHero title="Tuberculosis (TB) & Advanced Bronchoscopy Clinic in Delhi"
                description="Dr. Manish Aggarwal, Senior Pulmonologist & Interventional Chest Specialist in Pitampura, Delhi, provides comprehensive evaluation and treatment for pulmonary and extrapulmonary tuberculosis (TB), including difficult-to-diagnose and recurrent TB cases." />
            <div className="max-w-7xl mx-auto px-4">
                <div className=" pt-10">

                    <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Advanced TB Diagnosis</span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-relaxed">
                                Tuberculosis  <br /> Evaluation & Treatment
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                                Tuberculosis may present with chronic cough, fever, weight loss, blood in sputum, breathlessness, recurrent chest infections, or abnormal chest imaging. Early and accurate diagnosis is essential for effective treatment and prevention of complications.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">
                                The clinic offers advanced diagnostic support including bronchoscopy and Bronchoalveolar Lavage (BAL), which are especially useful in patients who are unable to produce sputum, have sputum-negative TB, persistent lung shadows, suspected drug-resistant TB, or unclear CT chest findings. BAL samples can improve microbiological diagnosis and help guide targeted anti-tubercular therapy.

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
                <ServicesCarousal heading="Services Offered" description="Advanced diagnostic and treatment services are offered for pulmonary tuberculosis, featuring bronchoscopy, BAL, CT chest interpretation, drug-resistance assessment, and long-term respiratory care." services={services} />

            </div>
            <div className="max-w-7xl p-4 mx-auto text-center">

                <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Long-Term Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6">
                    Personalized Care for Better Treatment
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#64748b] max-w-4xl">
                    Special attention is given to accurate diagnosis, treatment adherence, monitoring for drug side effects, nutritional counselling, and long-term follow-up to reduce recurrence and lung damage.

                </p>
            </div>
            <div className="mb-10 max-w-7xl mx-auto p-4 mt-8">
                <CTA description={<>
                    Book consultation for expert tuberculosis diagnosis, bronchoscopy-guided evaluation, and advanced respiratory care in Delhi.</>} cta={"Schedule Consultation"} />
            </div>
            <FAQs
                title="Frequently Asked Questions"
                description="Get answers to common questions about tuberculosis (TB), sputum-negative TB, bronchoscopy, Bronchoalveolar Lavage (BAL), drug-resistant TB, post-TB lung disease, and advanced respiratory care at Delhi Lung & Bronchoscopy Center."
                faqs={faqs}
            />
        </>
    );
}