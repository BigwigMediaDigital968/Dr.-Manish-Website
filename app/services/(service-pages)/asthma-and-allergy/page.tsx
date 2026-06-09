import {
  Stethoscope,
  Wind,
  Activity,
  Droplets,
  ShieldAlert,
  LineChart,
  Pill,
  ShieldPlus,
  CloudFog,
  HeartPulse
} from "lucide-react";
import ServiceHero from "../component/ServiceHero";
import ServicesCarousal from "../component/ServicesCarousal";
import Link from "next/link";
import CTA from "../component/CTA";
import FAQs from "@/app/component/website/FAQs";

export const services = [
  {
    id: "asthma-diagnosis-treatment",
    title: "Asthma Diagnosis & Treatment",
    desc: "Comprehensive asthma evaluation and personalized treatment plans for long-term symptom control.",
    image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop",
    icon: <Wind className="w-5 h-5" />,
  },
  {
    id: "allergy-wheezing-management",
    title: "Allergy & Wheezing Management",
    desc: "Expert care for allergic respiratory conditions, recurrent wheezing, and breathing difficulties.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    icon: <ShieldAlert className="w-5 h-5" />,
  },
  {
    id: "chronic-cough-evaluation",
    title: "Chronic Cough Evaluation",
    desc: "Detailed assessment of persistent cough to identify underlying respiratory and allergic causes.",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
    icon: <Stethoscope className="w-5 h-5" />,
  },
  {
    id: "pulmonary-function-test",
    title: "Pulmonary Function Test (PFT)",
    desc: "Advanced lung function testing to diagnose and monitor asthma, COPD, and other respiratory disorders.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: "spirometry-testing",
    title: "Spirometry Testing",
    desc: "Accurate measurement of lung capacity and airflow to evaluate breathing performance.",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    id: "inhaler-technique-optimization",
    title: "Inhaler Technique Optimization",
    desc: "Personalized guidance to ensure correct inhaler use for maximum treatment effectiveness.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop",
    icon: <Pill className="w-5 h-5" />,
  },
  {
    id: "severe-asthma-management",
    title: "Severe Asthma Management",
    desc: "Specialized care for difficult-to-control asthma using evidence-based treatment strategies.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
    icon: <ShieldPlus className="w-5 h-5" />,
  },
  {
    id: "nebulization-guidance",
    title: "Nebulization Guidance",
    desc: "Professional advice on nebulizer therapy for effective symptom relief and airway management.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    id: "pollution-related-breathing-problems",
    title: "Pollution-Related Breathing Problems",
    desc: "Evaluation and treatment of respiratory symptoms triggered by air pollution and environmental exposure.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    icon: <CloudFog className="w-5 h-5" />,
  },
  {
    id: "exercise-induced-asthma-care",
    title: "Exercise-Induced Asthma Care",
    desc: "Diagnosis and management of breathing difficulties and asthma symptoms during physical activity.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    icon: <HeartPulse className="w-5 h-5" />,
  },
];

const faqs = [
  {
    question: "What asthma and allergy services do you provide?",
    answer:
      "We offer comprehensive asthma and allergy care, including asthma diagnosis, pulmonary function testing (PFT), spirometry, allergy evaluation, inhaler optimization, nebulization guidance, severe asthma management, chronic cough assessment, and personalized long-term respiratory care.",
  },
  {
    question: "What are the common symptoms of asthma?",
    answer:
      "Common asthma symptoms include wheezing, shortness of breath, chest tightness, chronic cough, difficulty breathing during exercise, nighttime cough, and recurrent episodes of breathing difficulty. Symptoms may worsen with allergies, pollution, infections, or weather changes.",
  },
  {
    question: "How is asthma diagnosed?",
    answer:
      "Asthma is diagnosed through a detailed clinical evaluation, symptom assessment, medical history review, and lung function tests such as spirometry and Pulmonary Function Testing (PFT). These tests help determine the severity of airway obstruction and guide treatment planning.",
  },
  {
    question: "What is spirometry and why is it important?",
    answer:
      "Spirometry is a simple breathing test that measures how much air you can inhale and exhale and how quickly you can breathe out. It is one of the most important tests for diagnosing asthma, monitoring treatment response, and assessing lung function.",
  },
  {
    question: "Can allergies trigger asthma symptoms?",
    answer:
      "Yes. Allergies are a common trigger for asthma symptoms. Dust mites, pollen, pet dander, mold, seasonal allergens, and environmental pollutants can cause airway inflammation, leading to wheezing, cough, and breathing difficulties.",
  },
  {
    question: "What is exercise-induced asthma?",
    answer:
      "Exercise-induced asthma, also called exercise-induced bronchoconstriction, occurs when physical activity triggers coughing, wheezing, chest tightness, or shortness of breath. Proper evaluation and preventive treatment can help patients remain active safely.",
  },
  {
    question: "Why is proper inhaler technique important?",
    answer:
      "Even the best asthma medication may not work effectively if the inhaler is used incorrectly. Inhaler technique optimization ensures that medication reaches the lungs properly, improves symptom control, and reduces the risk of asthma attacks.",
  },
  {
    question: "What is severe or difficult-to-control asthma?",
    answer:
      "Severe asthma refers to asthma that remains poorly controlled despite appropriate medications and treatment. These patients often require specialized evaluation to identify triggers, optimize therapy, and prevent recurrent exacerbations.",
  },
  {
    question: "Can Delhi's air pollution worsen asthma?",
    answer:
      "Yes. Air pollution can significantly aggravate asthma and other respiratory conditions. Exposure to particulate matter, vehicle emissions, and poor air quality may trigger wheezing, cough, breathlessness, and asthma flare-ups, particularly in sensitive individuals.",
  },
  {
    question: "When should I seek medical evaluation for wheezing or chronic cough?",
    answer:
      "You should consult a pulmonologist if you experience recurrent wheezing, persistent cough lasting more than a few weeks, frequent respiratory symptoms, nighttime cough, unexplained breathlessness, or recurring chest tightness.",
  },
  {
    question: "Do you provide asthma care for both children and adults?",
    answer:
      "Yes. Comprehensive asthma evaluation and management are available for both children and adults, with treatment plans tailored to age, symptom severity, lifestyle factors, and individual respiratory health needs.",
  },
  {
    question: "Can asthma be controlled long-term?",
    answer:
      "Yes. With accurate diagnosis, trigger management, proper inhaler use, regular follow-up, and personalized treatment, most patients can achieve excellent long-term asthma control and maintain an active, healthy lifestyle.",
  },
];

export default function page() {
  return (
    <>
      <ServiceHero title="Asthma & Allergy Clinic in Delhi"
        description="Dr. Manish Aggarwal, Senior Pulmonologist & Chest Specialist in Pitampura, Delhi, provides comprehensive care for asthma, allergy-related breathing problems, wheezing, chronic cough, chest tightness, and recurrent respiratory symptoms in children and adults." />
      <div className="max-w-7xl mx-auto px-4">
        <div className=" pt-10">

          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]  pb-4">Personalized Asthma Care</span>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
                Asthma Diagnosis & Treatment
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#64748b]">
                The clinic focuses on accurate diagnosis, asthma control, prevention of recurrent attacks, inhaler optimization, allergy management, and long-term lung health using evidence-based respiratory care. Patients with seasonal allergies, pollution-triggered breathing difficulty, exercise-induced asthma, night cough, or recurrent wheezing receive personalized treatment plans tailored to their lifestyle and disease severity.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mt-4">


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
        <ServicesCarousal heading="Services Offered" description="Services include pulmonary function testing (PFT), spirometry, allergy evaluation, inhaler technique counselling, nebulization guidance, severe asthma management, and treatment of difficult-to-control asthma. Special attention is given to Delhi pollution-related respiratory issues and preventive lung care." services={services} />

      </div>
      <div className="mb-10 max-w-7xl mx-auto p-4">
        <CTA description={<>
          Book consultation for expert asthma treatment, allergy care, and advanced respiratory management in Delhi.</>} cta={"Schedule Consultation"} />
      </div>
      <FAQs
                      title="Frequently Asked Questions"
                      description="Find answers to common questions about asthma diagnosis, allergy management, spirometry, pulmonary function testing (PFT), inhaler therapy, wheezing, chronic cough, and long-term respiratory care at Delhi Lung & Bronchoscopy Center."
                      faqs={faqs}
                  />
      
    </>
  );
}