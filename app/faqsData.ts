export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "Pulmonary" | "Sleep Disorders" | "Clinic & Testing" | "General";
}

export const homeFaqs: FAQItem[] = [
  {
    id: 1,
    category: "Pulmonary",
    question: "What should I expect during a Lung Function Test (PFT)?",
    answer:
      "A Pulmonary Function Test is a safe, non-invasive diagnostic that measures how much air your lungs can hold and how quickly you can blow it out. You will blow into a tube connected to a spirometer. Avoid smoking, heavy meals, or intense exercise for 4 hours prior to the test.",
  },
  {
    id: 2,
    category: "Sleep Disorders",
    question: "How do I know if my chronic snoring is actually Sleep Apnea?",
    answer:
      "While snoring is common, Obstructive Sleep Apnea (OSA) is indicated if snoring is accompanied by gasping or choking sounds, morning headaches, excessive daytime fatigue, or observed pauses in breathing during sleep. An overnight Sleep Study (Polysomnography) is required to confirm a diagnosis.",
  },
  {
    id: 3,
    category: "Clinic & Testing",
    question:
      "Do you offer Home Sleep Study kits, or is it always done in-lab?",
    answer:
      "Delhi Lung & Sleep Centre offers both advanced home sleep diagnostics (Level 3 Sleep Studies) for convenient screen testing, and gold-standard overnight in-lab polysomnography (Level 1) in our premium clinical suites for precise airway assessment.",
  },
  {
    id: 4,
    category: "Pulmonary",
    question: "What is an EBUS bronchoscopy and is it painful?",
    answer:
      "Endobronchial Ultrasound (EBUS) is an advanced, minimally invasive interventional procedure used to sample lymph nodes or tumors near the lungs. It is performed under conscious sedation or general anesthesia, meaning you will feel no pain or discomfort during the test.",
  },
  {
    id: 5,
    category: "General",
    question:
      "How can I protect my lungs during Delhi's high air pollution seasons?",
    answer:
      "Our senior pulmonologists recommend keeping indoor air clean using HEPA-equipped air purifiers, monitoring local AQI levels, wearing certified N95 masks when stepping outdoors, and setting up tailored anti-pollution clinical defenses with our medical team if you have pre-existing asthma or COPD.",
  },
  {
    id: 6,
    category: "Clinic & Testing",
    question: "Do I need a doctor's referral to book a specialized test?",
    answer:
      "While we highly recommend a physician's referral for complex procedures like Bronchoscopy or EBUS, you can self-schedule standard chest consultations, asthma reviews, or sleep assessments directly through our online appointment desk.",
  },
];
