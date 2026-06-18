"use client";

import React, { cloneElement, isValidElement, useState } from "react";
import {
  HeartPulse,
  Sparkles,
  RotateCcw,
  ChevronRight,
  Stethoscope,
  ClipboardList,
  FlaskConical,
  TrendingUp,
  Calendar,
  MessageSquareQuote,
  BadgeCheck,
  Pill,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

// STRUCTURAL INTERFACES (Matching your schema exactly)
// ============================================================================
export interface TreatmentStep {
  title: string;
  description: string;
  cost: string;
}

export interface CaseStudyItem {
  id: number;
  slug: string;
  badge: string;
  title: string;
  specialty: "Pulmonary" | "Interventional" | "Sleep" | string;
  patientProfile?: string;
  age: number;
  gender: string;
  chiefComplaint: string;
  presentation: string;
  history: string;
  diagnosis: string;
  diagnostics: string;
  keyFindings: string[];
  treatmentPlan: TreatmentStep[];
  metrics: string[];
  outcome: string;
  followUp: string;
  doctorNote: string;
  seoKeywords: string[];
  image: string;
  color: string;
  // Included values from original layout content fallback handling
  quickAnswer?: string;
  lessons?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}


const caseStudies2: CaseStudyItem[] = [
  {
    id: 1,
    slug: "primary-pulmonary-hypertension-right-heart-failure",
    badge: "Rare Pulmonary Hypertension",
    title:
      "Reversal of Severe Right Heart Failure caused by Primary Pulmonary Hypertension",
    specialty: "Pulmonary",
    patientProfile: "Patient: Female, 42 Years",
    age: 42,
    gender: "Female",
    chiefComplaint:
      "Severe breathlessness at rest, progressive leg swelling and abdominal distension.",
    presentation:
      "The patient arrived with disabling shortness of breath, bilateral pedal edema, abdominal fluid accumulation (ascites), fatigue and inability to perform routine activities. She had previously received treatment elsewhere for generalized weakness and possible kidney disease without improvement.",
    history:
      "Symptoms gradually progressed over several months. Multiple consultations failed to identify the underlying pulmonary vascular disorder.",
    diagnosis:
      "Primary Pulmonary Hypertension (Pulmonary Arterial Hypertension) with evolving Right Heart Failure.",
    diagnostics:
      "Comprehensive clinical evaluation followed by 2D Echocardiography, pulmonary hypertension screening, oxygen saturation assessment and right heart functional analysis.",
    keyFindings: [
      "Massive bilateral lower limb edema",
      "Severe abdominal ascites",
      "Advanced pulmonary arterial hypertension",
      "Right ventricular strain and failure",
      "Marked functional limitation due to breathlessness",
    ],
    treatmentPlan: [
      {
        title: "Immediate Fluid Management",
        description:
          "Tailored high-dose diuretic therapy using Torasemide and Spironolactone to remove excess body fluid and reduce cardiac workload.",
        cost: "₹200 – ₹600 / month",
      },
      {
        title: "Targeted Pulmonary Vasodilator Therapy",
        description:
          "Combination therapy with PDE-5 inhibitors and Endothelin Receptor Antagonists to lower pulmonary artery pressure.",
        cost: "₹2,000 – ₹5,000 / month",
      },
      {
        title: "Advanced Escalation Therapy",
        description:
          "Reserved for severe or non-responsive disease using advanced pulmonary hypertension medications.",
        cost: "₹8,000 – ₹15,000+ / month",
      },
    ],
    metrics: [
      "Functional Class: WHO Class IV → Class II",
      "Peripheral edema: Nearly resolved",
      "Ascites: Significant reduction",
      "Resting Breathlessness: Dramatically improved",
      "Quality of Life Score: Markedly improved",
    ],
    outcome:
      "After individualized pulmonary hypertension management and aggressive fluid control, the patient's edema and abdominal swelling resolved substantially. Breathlessness improved remarkably, allowing return to normal daily activities.",
    followUp:
      "Patient remains under periodic pulmonary hypertension surveillance with medication optimization and regular echocardiographic assessment.",
    doctorNote:
      "Persistent breathlessness associated with leg swelling should never be ignored. Early identification of pulmonary hypertension can prevent irreversible right heart damage and significantly improve long-term survival.",
    seoKeywords: [],
    image: "/case-study-1.png",
    color: "from-[#1fa8e8]/20 to-[#6dbb45]/10",
  },
  {
    id: 2,
    slug: "severe-obstructive-sleep-apnea-cpap",
    badge: "Sleep Disorder",
    title: "Complete Resolution of Severe OSA with Structured CPAP Therapy",
    specialty: "Sleep",
    patientProfile: "Patient: Male, 54 Years",
    age: 54,
    gender: "Male",
    chiefComplaint:
      "Excessive daytime sleepiness, loud snoring, morning headaches.",
    presentation:
      "The patient presented with a multi-year history of disruptive snoring, unrefreshing sleep, and dangerous episodes of drowsiness while driving. His partner reported witnessed apneas throughout the night.",
    history:
      "Hypertensive for 8 years, poorly controlled despite dual antihypertensive therapy. BMI 31. No prior sleep study conducted.",
    diagnosis:
      "Severe Obstructive Sleep Apnea (AHI > 45/hr) with associated resistant hypertension.",
    diagnostics:
      "Home sleep testing followed by full in-lab polysomnography. CPAP titration study with auto-pressure algorithm.",
    keyFindings: [
      "AHI of 47 events/hour (Severe OSA)",
      "Oxygen desaturation to 76% nadir",
      "Fragmented sleep architecture — no restorative N3 or REM",
      "Resistant hypertension linked to nocturnal hypoxia",
      "Epworth Sleepiness Scale: 18/24 (pathological)",
    ],
    treatmentPlan: [
      {
        title: "CPAP Initiation & Education",
        description:
          "Patient counseled on OSA pathophysiology, mask fitting, and CPAP adherence strategies. Auto-CPAP initiated at 6–14 cmH₂O.",
        cost: "₹12,000 – ₹25,000 (device, one-time)",
      },
      {
        title: "Lifestyle Modification Protocol",
        description:
          "Structured weight management, positional therapy, and alcohol cessation guidance implemented alongside CPAP.",
        cost: "No direct cost",
      },
      {
        title: "Hypertension Review",
        description:
          "Antihypertensive regimen reviewed and simplified after OSA treatment; BP normalized without adding medications.",
        cost: "Existing medications only",
      },
    ],
    metrics: [
      "AHI: 47/hr → 2.3/hr (Controlled)",
      "Epworth Score: 18 → 6 (Normal)",
      "Oxygen nadir: 76% → 92%",
      "BP: 158/96 → 128/80 mmHg",
      "CPAP Adherence: 6.4 hrs/night average",
    ],
    outcome:
      "Within 8 weeks of consistent CPAP therapy, daytime sleepiness resolved completely, blood pressure normalized, and the patient reported feeling rested for the first time in years.",
    followUp:
      "Quarterly CPAP data downloads for adherence tracking, annual polysomnography review, and ongoing metabolic monitoring.",
    doctorNote:
      "Undiagnosed sleep apnea is one of the most common reversible causes of resistant hypertension. Treating OSA is often more effective than adding a third antihypertensive drug.",
    seoKeywords: [],
    image: "/case-study-2.png",
    color: "from-purple-500/20 to-[#1fa8e8]/10",
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: 1,
    slug: "lung-detective-case-1",
    badge: "Full Case Detail",
    title: "The Fluid That Wouldn't Reveal the Truth",
    age: 60,
    gender: "Male",
    specialty: "Interventional Pulmonology",
    chiefComplaint: "A 60-year-old gentleman came to our clinic with a persistent cough, increasing breathlessness, poor appetite, and a general sense of fatigue and ill health.",
    presentation: "A chest X-ray revealed a significant collection of fluid around his right lung, a condition known as pleural effusion. To understand this better, imagine the lung as a balloon sitting inside a thin protective pouch. When fluid accumulates within that pouch, it begins to compress the lung, making it difficult for it to expand fully during breathing.",
    history: "A CT scan confirmed that the fluid had partially compressed the right lung. To investigate further, a bronchoscopy was performed. While there was no tumour visible within the airways, there appeared to be narrowing caused by pressure from outside the airway itself—an early clue that this case might not be straightforward.",
    diagnostics: "In countries where tuberculosis (TB) is common, doctors frequently use a marker called ADA (Adenosine Deaminase) in pleural fluid to help identify patients likely to have TB-related pleural effusions. The pleural fluid was drained on three separate occasions, both to relieve his breathlessness and to establish the diagnosis. Each analysis appeared to support tuberculosis:",
    keyFindings: [
      "ADA level: consistently elevated at 44 U/L, a value often associated with TB.",
      "Lymphocyte-predominant exudative fluid: a pattern commonly seen in tuberculous pleural effusion.",
      "Pleural fluid cytology: negative for malignant cells on three separate examinations."
    ],
    treatmentPlan: [
      {
        title: "The Case Begins & Initial Assessment",
        cost: "Empirical Phase",
        description: "Based on initial supportive findings, initiating anti-tubercular treatment was a reasonable and evidence-based decision. At that stage, the diagnosis appeared settled. Unfortunately, the story was far from over."
      },
      {
        title: "The Clue That Changed Everything",
        cost: "Critical Pivot",
        description: "Three weeks after starting appropriate anti-tubercular therapy, the patient returned with worsening breathlessness. The pleural fluid had accumulated again. And then again. The treatment response simply did not fit the expected pattern."
      },
      {
        title: "Looking Beyond the Fluid",
        cost: "Interventional Phase",
        description: "When the clinical picture and laboratory results fail to align, obtaining tissue directly from the pleura becomes essential. The patient underwent medical thoracoscopy, a minimally invasive procedure allowing direct visual examination of the lining surrounding the lungs."
      }
    ],
    metrics: [
      "Why Did the Fluid Tests Miss the Cancer? : Pleural fluid cytology detects cancer only when malignant cells are shed into the fluid in sufficient numbers. Some cancers remain confined predominantly to the pleural tissue and do not release many cells into the surrounding fluid.",
      "Diagnostic Accuracy Performance Gap : Pleural fluid cytology may fail to detect cancer in approximately 40–50% of malignant pleural effusions. In such situations, a direct pleural biopsy obtained during thoracoscopy offers substantially higher accuracy."
    ],
    followUp: "The fluid was real. The elevated ADA was real. The inflammation was genuine. But the cancer itself was hiding within the pleural tissue rather than floating freely in the fluid. Multiple small abnormal nodules were identified over the pleural surface. Biopsies were obtained from these suspicious areas. The histopathology report provided the answer that three separate fluid analyses had failed to reveal. The underlying diagnosis was malignancy.",
    doctorNote: "When the patient's story and the test results do not match, it is the story that deserves another listen. Good medicine requires more than ordering investigations. It requires remaining curious, questioning assumptions, and being willing to revisit an earlier conclusion when the patient's progress tells us something different.",

    // Dynamic Fallbacks for newly implemented layout features
    quickAnswer: "When fluid around the lungs keeps returning despite appropriate treatment for tuberculosis, it may be time to revisit the diagnosis. This real patient story highlights an important lesson in medicine: sometimes, the most valuable clue is not what tests show, but what happens when the patient fails to improve as expected.",
    diagnosis: "Malignant Pleural Effusion (Hiding within Pleural Tissue)",
    outcome: "Sometimes, the diagnosis is not hidden because the tests were done incorrectly. Sometimes, it is hidden because the disease is waiting in a place that the tests never looked. And occasionally, finding the truth means looking beyond the fluid and directly at the tissue itself.",
    color: "#1fa8e8",
    image: "/case-study/the-fluid-that-wouldnt-reveal-the-truth.png",
    seoKeywords: ["Pleural Effusion", "Tuberculosis ADA", "Thoracoscopy", "Pulmonology Delhi"],

    lessons: [
      "A high ADA strongly suggests tuberculosis—but it does not prove it. : Although elevated ADA levels commonly occur in TB, they may occasionally be seen in certain cancers, lymphomas, and other inflammatory conditions.",
      "Negative pleural fluid cytology does not completely exclude malignancy. : Repeatedly negative fluid tests should not prevent further evaluation when clinical suspicion remains high.",
      "Failure to improve is itself a diagnostic clue. : When a patient does not respond as expected to an appropriate treatment, it is important to reassess the diagnosis rather than simply extending therapy indefinitely.",
      "Thoracoscopy can provide answers when other tests cannot. : Direct visualisation of the pleura, combined with targeted biopsy, remains one of the most valuable diagnostic tools in unexplained recurrent pleural effusions."
    ],

    faqs: [
      {
        question: "Can pleural fluid have a high ADA level without tuberculosis?",
        answer: "Yes. Although elevated ADA levels strongly support the diagnosis of tuberculosis in the appropriate clinical setting, other conditions—including certain cancers, lymphoma, empyema, and autoimmune diseases—can occasionally produce similar results."
      },
      {
        question: "If pleural fluid cytology is negative multiple times, can cancer still be present?",
        answer: "Yes. Pleural fluid cytology may miss malignancy because some tumours do not shed cells readily into the fluid. In patients with persistent or recurrent pleural effusions, additional investigations such as thoracoscopy and pleural biopsy may still be required."
      },
      {
        question: "What should be done if pleural fluid keeps returning despite TB treatment?",
        answer: "Rapid re-accumulation of pleural fluid despite appropriate anti-tubercular therapy should prompt a re-evaluation of the diagnosis. In many cases, thoracoscopy with pleural biopsy may be recommended to obtain a definitive diagnosis."
      },
      {
        question: "Is thoracoscopy a major surgery?",
        answer: "Medical thoracoscopy is a minimally invasive procedure performed through a small incision in the chest wall. It allows the pulmonologist to inspect the pleura directly and obtain precise tissue samples. Recovery is generally quicker than with traditional surgical approaches."
      },
      {
        question: "Were the TB medicines a mistake?",
        answer: "Not necessarily. In regions where tuberculosis is common, starting anti-tubercular treatment based on strong clinical and laboratory evidence is often appropriate. However, when the expected improvement does not occur, clinicians must be prepared to reconsider the diagnosis and investigate further."
      }
    ]
  },
  {
    id: 2,
    slug: "lung-detective-case-2",
    badge: "Full Case Detail",
    title: "When Asthma Wasn't the Whole Story",
    age: 45,
    gender: "Female",
    specialty: "Pulmonology",
    chiefComplaint: "A 45-year-old woman with asthma developed gradually worsening breathlessness over several weeks. Activities such as climbing stairs and performing household chores became increasingly difficult, leaving her breathless and exhausted.",
    presentation: "The patient had a history of asthma and obesity (BMI 29) and had remained reasonably stable for years. As her breathlessness progressed, she initially assumed it was related to worsening asthma, weight gain, or stress. Concerned by her persistent symptoms, she checked her oxygen saturation at home and found it to be 78%.",
    history: "She sought medical attention and was initially treated for a presumed asthma exacerbation with steroids, antibiotics, and supportive therapy. Despite treatment, her oxygen levels remained persistently low. The lack of improvement raised concerns that another diagnosis might be responsible for her symptoms.",
    diagnostics: "When she presented to our clinic, the combination of progressive breathlessness and persistent hypoxaemia prompted a more detailed evaluation. An echocardiogram suggested markedly elevated pressures within the lung circulation. She was admitted for comprehensive assessment, and further investigations were performed to identify the underlying cause.",
    keyFindings: [
      "Oxygen saturation: 78% on home pulse oximetry despite treatment.",
      "Echocardiogram: suggested markedly elevated pressures within the pulmonary circulation.",
      "Investigations excluded common causes of pulmonary hypertension including heart disease, chronic lung disease, pulmonary blood clots, and autoimmune disorders.",
      "Right heart catheterisation confirmed the diagnosis of Idiopathic Pulmonary Arterial Hypertension (IPAH)."
    ],
    treatmentPlan: [
      {
        title: "Initial Asthma-Focused Treatment",
        cost: "First-Line Assessment",
        description: "The patient was initially treated for a presumed asthma exacerbation using steroids, antibiotics, and supportive therapy. However, her oxygen levels remained low and her symptoms persisted."
      },
      {
        title: "Investigating Beyond Asthma",
        cost: "Diagnostic Phase",
        description: "Persistent hypoxaemia and progressive breathlessness prompted further evaluation. Echocardiography raised suspicion of elevated pulmonary artery pressures, leading to comprehensive assessment."
      },
      {
        title: "Specialised Pulmonary Hypertension Management",
        cost: "Targeted Therapy",
        description: "Following confirmation of Idiopathic Pulmonary Arterial Hypertension through right heart catheterisation, specialised medications were initiated to reduce pressure within the lung blood vessels and support heart function. Treatment was adjusted during regular follow-up based on clinical response."
      }
    ],
    metrics: [
      "Oxygen Saturation Clue : Home pulse oximetry revealed an oxygen saturation of 78%, an important warning sign that could not be fully explained by a routine asthma flare-up.",
      "Diagnostic Confirmation : Right heart catheterisation remains the gold standard investigation for diagnosing pulmonary arterial hypertension and guiding treatment decisions."
    ],
    followUp: "Over the following months, her breathlessness improved, her activity levels increased, and she regained confidence in carrying out daily activities. Although pulmonary arterial hypertension remains a serious condition, timely diagnosis and appropriate treatment substantially improved her quality of life.",
    doctorNote: "Not every episode of breathlessness in an asthma patient is caused by asthma. Sometimes, symptoms are clues pointing toward a completely different diagnosis. Listening carefully to those clues and investigating further when expected improvement does not occur can make all the difference.",

    quickAnswer: "A 45-year-old woman with asthma developed progressively worsening breathlessness and severe hypoxaemia with an oxygen saturation of 78%. Despite treatment for a presumed asthma exacerbation, her condition failed to improve. Further investigations ultimately revealed Idiopathic Pulmonary Arterial Hypertension (IPAH), a rare disorder affecting the blood vessels of the lungs.",

    diagnosis: "Idiopathic Pulmonary Arterial Hypertension (IPAH)",

    outcome: "Although pulmonary arterial hypertension remains a serious condition, early diagnosis and specialised treatment led to significant improvement in symptoms, activity levels, and overall quality of life.",

    color: "#1fa8e8",
    image: "/case-study/asthma-wasnt-the-whole-story.png",

    seoKeywords: [
      "Pulmonary Arterial Hypertension",
      "IPAH",
      "Asthma Misdiagnosis",
      "Hypoxaemia",
      "Right Heart Catheterisation",
      "Pulmonology Delhi"
    ],

    lessons: [
      "Having one respiratory diagnosis does not exclude another. : Patients with asthma may develop entirely separate lung or heart-related conditions that require different treatment.",
      "Persistent hypoxaemia deserves further investigation. : Low oxygen levels that do not improve with standard treatment should prompt clinicians to reconsider the diagnosis.",
      "Failure to respond as expected is an important diagnostic clue. : When symptoms persist despite appropriate therapy, additional evaluation may reveal an alternative underlying condition.",
      "Right heart catheterisation remains the gold standard for diagnosis. : It confirms pulmonary arterial hypertension and provides critical information for treatment planning."
    ],

    faqs: [
      {
        question: "Can asthma cause low oxygen levels?",
        answer: "Severe asthma can lower oxygen levels, but persistent hypoxaemia despite treatment requires further evaluation."
      },
      {
        question: "What is pulmonary arterial hypertension?",
        answer: "Pulmonary arterial hypertension is a condition in which the blood vessels of the lungs become abnormally narrowed, increasing the workload on the heart."
      },
      {
        question: "Why is right heart catheterisation important?",
        answer: "Right heart catheterisation confirms the diagnosis of pulmonary arterial hypertension and helps guide treatment decisions."
      },
      {
        question: "Is pulmonary arterial hypertension treatable?",
        answer: "While it may not always be curable, specialised therapies can improve symptoms and quality of life."
      }
    ]
  },
  {
    id: 5,
    slug: "lung-detective-case-5",
    badge: "Full Case Detail",
    title: "The Invisible Lung Infection Hiding Behind a Normal CT Scan",
    age: 45,
    gender: "Female",
    specialty: "Interventional Pulmonology",
    chiefComplaint: "A 45-year-old woman presented with a persistent cough lasting nearly 120 days, accompanied by a low-grade intermittent fever. Despite multiple consultations and treatments, her symptoms continued to recur.",
    presentation: "The patient had undergone extensive evaluation including blood investigations, chest X-rays, and a Contrast-Enhanced Computed Tomography (CECT) scan of the chest and abdomen. All imaging studies appeared normal. Because no significant abnormality was identified, she was treated for chronic bronchitis and severe cough-variant asthma with multiple courses of antibiotics and oral steroids.",
    history: "The oral steroids provided only temporary relief. Her cough would improve briefly before returning aggressively within days. This unusual response raised suspicion that the underlying cause was being masked rather than treated. The possibility of a hidden airway disease was considered despite repeatedly normal imaging.",
    diagnostics: "Traditional radiological investigations failed to identify the source of her symptoms because the infection was confined entirely within the airway lining rather than the lung tissue itself. Recognising that the pathology might be hidden inside the bronchial tree, a flexible bronchoscopy was performed. Direct visualisation revealed a severely inflamed and ulcerated lesion obstructing the right main bronchus.",
    keyFindings: [
      "Persistent cough lasting approximately 120 days despite repeated treatment.",
      "Chest X-rays and Contrast-Enhanced CT scans of the chest and abdomen were completely normal.",
      "Temporary improvement with oral steroids followed by rapid recurrence of symptoms.",
      "Flexible bronchoscopy revealed a raw, inflamed, ulcerated lesion in the right main bronchus.",
      "Targeted biopsy and bronchial washings confirmed Tuberculosis.",
      "Final diagnosis: Endobronchial Tuberculosis (EBTB)."
    ],

    treatmentPlan: [
      {
        title: "Repeated Treatment Without a Diagnosis",
        cost: "Initial Management",
        description: "Based on normal imaging studies, the patient was treated as chronic bronchitis or cough-variant asthma using multiple courses of antibiotics and oral steroids. Symptoms improved only temporarily."
      },
      {
        title: "Looking Beyond Normal Scans",
        cost: "Diagnostic Breakthrough",
        description: "Because symptoms persisted despite treatment and radiological investigations remained normal, flexible bronchoscopy was performed to directly inspect the airway lining."
      },
      {
        title: "Definitive Treatment",
        cost: "Curative Phase",
        description: "Following confirmation of Endobronchial Tuberculosis through biopsy and bronchial washings, the patient was started on standard weight-appropriate Anti-Tubercular Therapy (ATT)."
      }
    ],

    metrics: [
      "Radiology Limitation : Standard chest X-rays and CT scans primarily evaluate lung tissue and may appear completely normal when Tuberculosis is confined exclusively to the airway lining.",
      "Complication Prevention : Early diagnosis prevented progression to bronchostenosis, a permanent narrowing of the airway caused by chronic inflammation and scarring."
    ],

    followUp: "Within weeks of starting Anti-Tubercular Therapy, the patient's four-month-long cough resolved completely. The airway began healing, and the risk of permanent bronchial narrowing was avoided through timely intervention.",

    doctorNote: "Not every lung infection lives within the lung tissue itself. Sometimes the disease hides inside the airway lining where conventional imaging cannot see it. When symptoms persist despite normal scans, it is important to investigate beyond radiology and look directly at the airways.",

    quickAnswer: "A 45-year-old woman suffered from a persistent cough for nearly 120 days despite normal chest X-rays and CT scans. Further evaluation with flexible bronchoscopy revealed Endobronchial Tuberculosis (EBTB), a rare form of TB confined to the airway lining that can remain completely invisible on routine imaging.",

    diagnosis: "Endobronchial Tuberculosis (EBTB)",

    outcome: "The patient responded well to Anti-Tubercular Therapy, with complete resolution of her chronic cough. Early diagnosis prevented irreversible airway scarring and bronchostenosis, which could have caused lifelong breathing difficulties.",

    color: "#1fa8e8",
    image: "/case-study/invisible-lung-infection.png",

    seoKeywords: [
      "Endobronchial Tuberculosis",
      "EBTB",
      "Normal CT Scan TB",
      "Chronic Cough",
      "Bronchoscopy Diagnosis",
      "Hidden Lung Infection",
      "Interventional Pulmonology"
    ],

    lessons: [
      "A normal chest X-ray or CT scan does not completely exclude Tuberculosis. : Endobronchial TB can remain entirely hidden when the infection is confined to the airway lining.",
      "Persistent cough despite treatment requires deeper investigation. : Recurrent symptoms after multiple courses of antibiotics and steroids should prompt reconsideration of the diagnosis.",
      "Temporary improvement with steroids can be misleading. : Steroids may suppress inflammation and symptoms while allowing an underlying infection to continue progressing.",
      "Bronchoscopy can reveal diseases invisible to radiology. : Direct visualisation of the airways allows identification of hidden infections, tumours, and structural abnormalities that imaging studies may miss.",
      "Early diagnosis prevents permanent airway damage. : Untreated Endobronchial Tuberculosis can lead to bronchostenosis, causing irreversible narrowing of the breathing tubes."
    ],

    faqs: [
      {
        question: "Can a chest CT scan miss Tuberculosis?",
        answer: "Yes. A chest CT scan can miss Tuberculosis if the infection is confined entirely to the airway lining, as occurs in Endobronchial Tuberculosis. Because CT scans primarily assess lung tissue, airway-limited disease may remain undetected."
      },
      {
        question: "What are the symptoms of Endobronchial Tuberculosis (EBTB)?",
        answer: "Common symptoms include a persistent cough lasting more than 3 to 4 weeks, low-grade intermittent fever, wheezing localized to one side of the chest, and shortness of breath that does not respond to standard asthma treatment or antibiotics."
      },
      {
        question: "Why does bronchoscopy detect hidden lung infections?",
        answer: "Flexible bronchoscopy allows direct visual inspection of the airway lining using a camera. It can identify hidden ulcers, infections, and growths while also allowing tissue biopsy for definitive diagnosis."
      },
      {
        question: "Why did the steroids help temporarily?",
        answer: "Steroids reduced airway inflammation caused by the infection, temporarily relieving symptoms. However, they did not treat the underlying Tuberculosis and may suppress the body's immune response against the infection."
      },
      {
        question: "What could have happened if the diagnosis was delayed?",
        answer: "Delayed diagnosis could have resulted in bronchostenosis, a permanent narrowing of the airway caused by chronic inflammation and scarring, leading to long-term breathing difficulties and possible lung collapse."
      }
    ]
  },
  {
    id: 6,
    slug: "lung-detective-case-6",
    badge: "Full Case Detail",
    title: "The Pneumonia That Had Teeth",
    age: 54,
    gender: "Male",
    specialty: "Interventional Pulmonology",
    chiefComplaint: "A 54-year-old man presented with a persistent productive cough, chest rattling, and a non-resolving pneumonia that had persisted for months despite multiple courses of antibiotics.",
    presentation: "The patient had undergone repeated treatment with broad-spectrum antibiotics for a localized pneumonia affecting the right lower lobe. Despite treatment, his symptoms continued and follow-up chest X-rays and CT scans showed a persistent area of inflammation that remained unchanged over time.",
    history: "Multiple antibiotic regimens failed to provide meaningful improvement. The persistent lung shadow and ongoing symptoms suggested that a simple infection was unlikely to be the entire explanation. The possibility of an underlying mechanical airway obstruction was considered, as bacteria continued to thrive despite appropriate antimicrobial therapy.",
    diagnostics: "A flexible bronchoscopy was performed to directly examine the airways. Deep within the right lower lobe bronchus, an unexpected foreign body was discovered. Hidden beneath inflamed tissue was a calcified object completely obstructing the airway. The object was identified as a human tooth, resulting in post-obstructive pneumonia caused by occult foreign body aspiration.",

    keyFindings: [
      "Persistent non-resolving pneumonia despite multiple courses of broad-spectrum antibiotics.",
      "Stable right lower lobe inflammatory shadow on serial chest imaging.",
      "Flexible bronchoscopy revealed complete obstruction of the right lower lobe bronchus.",
      "A human tooth was identified as the obstructing foreign body.",
      "Final diagnosis: Post-obstructive pneumonia secondary to occult foreign body aspiration."
    ],

    treatmentPlan: [
      {
        title: "Repeated Antibiotic Therapy",
        cost: "Initial Management",
        description: "The patient received multiple courses of broad-spectrum antibiotics for presumed persistent bacterial pneumonia. Despite treatment, the infection failed to resolve."
      },
      {
        title: "Bronchoscopic Investigation",
        cost: "Diagnostic Phase",
        description: "When imaging findings remained unchanged and symptoms persisted, flexible bronchoscopy was performed to directly inspect the airway and identify a possible obstruction."
      },
      {
        title: "Foreign Body Extraction",
        cost: "Definitive Treatment",
        description: "A specialized rat-tooth forceps was passed through the bronchoscope and used to securely grasp and remove the impacted tooth, eliminating the mechanical blockage and allowing the lung to recover."
      }
    ],

    metrics: [
      "Post-Obstructive Pneumonia Mechanism : When an airway becomes blocked, mucus clearance and normal airflow stop, creating an environment where bacteria can persist despite antibiotic therapy.",
      "Lung Preservation Benefit : Early foreign body removal prevents complications such as lung abscess formation, tissue destruction, chronic infection, and permanent lung damage."
    ],

    followUp: "Following successful bronchoscopic extraction, the patient's airway reopened and normal drainage was restored. Within weeks, the chronic infection resolved completely, the cough disappeared, and follow-up imaging demonstrated significant clearing of the previously persistent lung shadow.",

    doctorNote: "When pneumonia remains fixed in the same location despite appropriate treatment, it is important to look beyond infection alone. Sometimes the problem is not the bacteria themselves but a hidden obstruction preventing the lung from healing. In these situations, bronchoscopy often provides the answer.",

    quickAnswer: "A 54-year-old man developed a non-resolving pneumonia that failed to improve despite multiple courses of antibiotics. Flexible bronchoscopy ultimately revealed a hidden tooth lodged within the right lower lobe bronchus. Removal of the foreign body cured the post-obstructive pneumonia and allowed the lung to heal.",

    diagnosis: "Post-Obstructive Pneumonia Secondary to Occult Foreign Body Aspiration (Human Tooth)",

    outcome: "Removal of the impacted tooth restored normal airway function, cleared the chronic infection, resolved the patient's cough, and prevented serious complications such as lung abscess formation and permanent lung damage.",

    color: "#1fa8e8",
    image: "/case-study/the-pneumonia-that-had-teeth.png",

    seoKeywords: [
      "Non Resolving Pneumonia",
      "Foreign Body Aspiration",
      "Tooth Aspiration",
      "Post Obstructive Pneumonia",
      "Bronchoscopy Foreign Body Removal",
      "Rat Tooth Forceps",
      "Interventional Pulmonology"
    ],

    lessons: [
      "Not all pneumonias are caused solely by infection. : Mechanical airway obstruction can prevent a lung infection from resolving even when appropriate antibiotics are prescribed.",
      "Persistent lung shadows require further investigation. : A localized pneumonia that repeatedly occurs in the same area should raise suspicion for an underlying blockage.",
      "Foreign body aspiration can occur silently in adults. : Teeth and other objects may enter the airway during sleep, dental procedures, trauma, or intoxication without the patient realizing it.",
      "Bronchoscopy is both diagnostic and therapeutic. : Direct airway visualization allows pulmonologists to identify hidden obstructions and remove them during the same procedure.",
      "Early intervention prevents irreversible complications. : Delayed removal of airway foreign bodies can result in lung abscesses, chronic infection, tissue destruction, and permanent respiratory impairment."
    ],

    faqs: [
      {
        question: "Can you inhale a tooth into your lung without realizing it?",
        answer: "Yes. Occult foreign body aspiration is a recognized medical condition in adults and may occur during sleep, dental procedures, alcohol intoxication, sedation, or minor trauma without the patient being aware of the event."
      },
      {
        question: "What are the symptoms of a hidden foreign object in the lung?",
        answer: "Common symptoms include chronic cough, recurrent pneumonia affecting the same area of the lung, localized wheezing, chest rattling, and shortness of breath that does not improve with standard treatment."
      },
      {
        question: "Why didn't the antibiotics cure the pneumonia?",
        answer: "Although antibiotics can reduce bacterial growth, they cannot remove a physical obstruction. As long as the airway remains blocked, bacteria can continue to accumulate and cause persistent infection."
      },
      {
        question: "How do pulmonologists remove objects from the airway safely?",
        answer: "Pulmonologists use flexible or rigid bronchoscopy to visualize the airway and deploy specialized retrieval instruments such as baskets, graspers, or rat-tooth forceps to safely remove the foreign body."
      },
      {
        question: "What could happen if the foreign body remains untreated?",
        answer: "Untreated airway foreign bodies can lead to recurrent infections, lung abscesses, airway damage, tissue destruction, and permanent loss of lung function."
      }
    ]
  }
];

// ─── FRONT FACE ────────────────────────────────────────────────────────────────
function CardFront({
  study,
  reverse,
  onFlip,
}: {
  study: CaseStudyItem;
  reverse: boolean;
  onFlip: () => void;
}) {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
      {/* Image */}
      <div
        className={`relative w-full md:w-[42%] flex-shrink-0 overflow-hidden ${reverse ? "lg:order-2" : "lg:order-1"
          }`}
      >
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full aspect-video md:aspect-auto object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Badge */}
        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white text-[#0c7dc2] text-[9px] font-black uppercase tracking-[0.15em] shadow-lg">
          {study.badge}
        </span>

        {/* Specialty pill */}
        <span
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${study.specialty === "Sleep"
            ? "bg-purple-500/20 border-purple-400/40 text-purple-300"
            : study.specialty === "Interventional"
              ? "bg-amber-500/20 border-amber-400/40 text-amber-300"
              : "bg-[#1fa8e8] border-[#1fa8e8] text-white"
            }`}
        >
          {study.specialty}
        </span>

        {/* Patient profile */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-black/60 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              {study.patientProfile}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-1 flex-col justify-between p-5 md:p-8 overflow-y-auto ${reverse ? "lg:order-1" : "lg:order-2"
          }`}
      >
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6dbb45] font-bold">
            Clinical Case Study · DLSC-{study.id * 10}
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-[#1fa8e8] transition-colors">
            {study.title}
          </h3>

          {/* Chief Complaint */}
          <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-[#1fa8e8] mb-1.5">
              Chief Complaint
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.chiefComplaint}
            </p>
          </div>

          {/* Diagnosis */}
          <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-[#6dbb45] mb-1.5">
              Diagnosis
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.diagnosis}
            </p>
          </div>

          {/* Outcome teaser */}
          <div className="rounded-2xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-white/5 p-4">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-amber-300 mb-1.5">
              Clinical Outcome
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed line-clamp-2">
              {study.outcome}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-500/20 px-4 py-2">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              Complete Recovery
            </span>
          </div>

          <button
            onClick={onFlip}
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Read Full Case
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── BACK FACE ─────────────────────────────────────────────────────────────────
function CardBack({
  study,
  onFlip,
}: {
  study: CaseStudyItem;
  onFlip: () => void;
}) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-y-auto overscroll-contain">
      {/* Scrollable detailed content */}
      <div className="p-6 lg:p-8 space-y-6">
        {/* Back header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6dbb45] font-bold">
              Full Case Detail · DLSC-{study.id * 10}
            </span>
            <h3 className="mt-1 text-lg sm:text-xl font-black text-white leading-tight">
              {study.title}
            </h3>
          </div>
          <button
            onClick={onFlip}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
            title="Go back"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Patient & Complaint */}
        <TimelineBlock
          icon={<Stethoscope className="w-4 h-4 text-[#1fa8e8]" />}
          step="01"
          label="Patient Profile & Chief Complaint"
          accent="#1fa8e8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
            <Chip label="Age" value={`${study.age} yrs`} />
            <Chip label="Gender" value={study.gender} />
            <Chip label="Specialty" value={study.specialty} />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.chiefComplaint}
          </p>
        </TimelineBlock>

        {/* Presentation & History */}
        <TimelineBlock
          icon={<ClipboardList className="w-4 h-4 text-purple-400" />}
          step="02"
          label="Clinical Presentation & History"
          accent="#a78bfa"
        >
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            {study.presentation}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-white/10 pl-3">
            {study.history}
          </p>
        </TimelineBlock>

        {/* Diagnostics */}
        <TimelineBlock
          icon={<FlaskConical className="w-4 h-4 text-[#6dbb45]" />}
          step="03"
          label="Diagnostics & Key Findings"
          accent="#6dbb45"
        >
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            {study.diagnostics}
          </p>
          <ul className="space-y-1.5">
            {study.keyFindings.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#6dbb45] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </TimelineBlock>

        {/* Treatment Plan */}
        <TimelineBlock
          icon={<Pill className="w-4 h-4 text-amber-400" />}
          step="04"
          label="Treatment Plan"
          accent="#fbbf24"
        >
          <div className="space-y-3">
            {study.treatmentPlan.map((step, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/5 border border-white/5 p-4 space-y-1"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h5 className="text-xs font-black text-white uppercase tracking-wide">
                    Phase {i + 1}: {step.title}
                  </h5>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    {step.cost}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </TimelineBlock>

        {/* Metrics */}
        <TimelineBlock
          icon={<TrendingUp className="w-4 h-4 text-[#1fa8e8]" />}
          step="05"
          label="Outcome Metrics"
          accent="#1fa8e8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {study.metrics.map((m, i) => {
              const [label, value] = m.split(":");
              return (
                <div
                  key={i}
                  className="rounded-xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-white/5 px-4 py-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                    {label?.trim()}
                  </p>
                  <p className="text-sm font-black text-white">
                    {value?.trim() ?? "—"}
                  </p>
                </div>
              );
            })}
          </div>
        </TimelineBlock>

        {/* Follow Up */}
        <TimelineBlock
          icon={<Calendar className="w-4 h-4 text-emerald-400" />}
          step="06"
          label="Follow-Up Protocol"
          accent="#34d399"
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.followUp}
          </p>
        </TimelineBlock>

        {/* Doctor's Note */}
        <div className="rounded-2xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-[#1fa8e8]/20 p-5">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquareQuote className="w-4 h-4 text-[#1fa8e8]" />
            <span className="text-[10px] font-black uppercase tracking-wider text-[#1fa8e8]">
              Doctor's Clinical Note
            </span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed italic">
            "{study.doctorNote}"
          </p>
          <p className="mt-2 text-[10px] text-slate-500 font-bold">
            — Dr. Manish Aggarwal, Delhi Lung & Sleep Centre
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-4 w-4 text-[#1fa8e8]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Verified File:
            </span>
            <span className="text-[11px] font-black text-white">
              DLSC-{study.id * 10}
            </span>
          </div>
          <button
            onClick={onFlip}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-slate-300 text-[11px] font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Back to Summary
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TIMELINE BLOCK ────────────────────────────────────────────────────────────
function TimelineBlock({
  icon,
  step,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  step: string;
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      {/* Left rail */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center border"
          style={{ borderColor: `${accent}40`, background: `${accent}15` }}
        >
          {icon}
        </div>
        <div className="w-px flex-1 bg-white/10 min-h-[1rem]" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[9px] font-black tracking-widest"
            style={{ color: accent }}
          >
            STEP {step}
          </span>
          <span className="text-xs font-bold text-white">{label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── CHIP ──────────────────────────────────────────────────────────────────────
function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/5 px-3 py-2">
      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
        {label}
      </p>
      <p className="text-xs font-black text-white mt-0.5">{value}</p>
    </div>
  );
}

// ─── FLIPPABLE CARD ────────────────────────────────────────────────────────────
function FlipCard({ study, index }: { study: CaseStudyItem; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const reverse = index % 2 !== 0;

  return (
    // Fixed pixel height — both faces fill this box; back face scrolls internally
    <div
      className="group relative w-full"
      style={{ perspective: "1400px", height: "clamp(80vh, 50vw, 540px)" }}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[18px] border border-white/10 bg-[#1c4152] overflow-hidden transition-all duration-500 hover:border-[#1fa8e8]/40 hover:shadow-2xl hover:shadow-sky-500/10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <CardFront
            study={study}
            reverse={reverse}
            onFlip={() => setFlipped(true)}
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[28px] border border-[#1fa8e8]/30 bg-[#142330]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            // overflow here not overflow-hidden — child handles scroll
            overflow: "hidden",
          }}
        >

          {/* <CardBack study={study} onFlip={() => setFlipped(false)} /> */}
          <div className="h-full overflow-y-scroll">
            <CaseStudyContainer study={study} onFlip={() => setFlipped(false)} />
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Pulmonary" | "Interventional" | "Sleep"
  >("All");

  const filteredCases =
    activeTab === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.specialty === activeTab);

  return (
    <section
      id="case-studies"
      className="relative py-20 overflow-hidden text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/55 -z-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-8">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
              Clinical Staging Files
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
              Pulmonary Case Studies
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Explore actual diagnostic pathways, procedural data, and outcome
              statistics managed by Dr. Manish Aggarwal at our East Delhi chest
              clinic.
            </p>
          </div>

          {/* Tabs */}
          {/* <div className="flex items-center gap-1 p-1 bg-indigo-400/80 border border-white/10 rounded-2xl self-center lg:self-end backdrop-blur-sm">
            {(["All", "Pulmonary", "Interventional", "Sleep"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab
                    ? "bg-gradient-to-r from-[#1fa8e8] to-[#0c7dc2] text-white shadow-md"
                    : "text-white hover:bg-white/10"
                    }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div> */}
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {filteredCases.map((study, index) => (
            <FlipCard key={study.id} study={study} index={index} />
          ))}

          {filteredCases.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">
              No case studies available for this specialty yet.
            </div>
          )}
        </div>

        <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest sm:hidden pt-2">
          Tap "Read Full Case" to explore detailed clinical files
        </p>
      </div>
    </section>
  );
}

interface CaseStudyContainerProps {
  study: CaseStudyItem;
  onFlip: () => void;
}


// ============================================================================
// MAIN REUSABLE DYNAMIC CONTAINER
// ============================================================================
export function CaseStudyContainer({ study, onFlip }: CaseStudyContainerProps) {

  // Safe split calculation for dynamically formatted key-value matrix entries
  const parseMetricString = (metricStr: string): [string, string] => {
    if (!metricStr.includes(":")) return [metricStr, "—"];
    const delimiterIndex = metricStr.indexOf(":");
    return [
      metricStr.substring(0, delimiterIndex).trim(),
      metricStr.substring(delimiterIndex + 1).trim()
    ];
  };

  return (
    <div className="w-full mx-auto text-slate-100 h-full min-h-screen font-sans selection:bg-[#1fa8e8]/30">
      <div className="p-6 lg:p-8 space-y-8">

        {/* Dynamic Back Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6dbb45] font-bold">
              {study.badge || "Full Case Detail"} · DLSC-{study.id * 10}
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-black text-white leading-tight">
              {study.title}
            </h3>
          </div>
          <button
            onClick={() => onFlip()}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
            title="Go back"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Quick Answer Callout Block */}
        {(study.quickAnswer || study.diagnosis) && (
          <div className="rounded-2xl bg-[#1fa8e8]/5 border border-[#1fa8e8]/20 p-5">
            <p className="text-xs uppercase tracking-wider text-[#1fa8e8] font-black mb-1">
              {study.quickAnswer ? "Quick Answer:" : "Primary Target Diagnosis:"}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {study.quickAnswer || study.diagnosis}
            </p>
          </div>
        )}

        {/* Chronological Timeline Modules */}
        <div className="space-y-6">

          {/* 01: Patient Profile & Chief Complaint */}
          <TimelineBlock
            icon={<Stethoscope className="w-4 h-4 text-[#1fa8e8]" />}
            step="01"
            label="Patient Profile & Chief Complaint"
            accent="#1fa8e8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              <Chip label="Age" value={`${study.age} yrs`} />
              <Chip label="Gender" value={study.gender} />
              <Chip label="Specialty" value={study.specialty} />
            </div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">The Case Begins</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.chiefComplaint}
            </p>
          </TimelineBlock>

          {/* 02: Clinical Presentation & History */}
          <TimelineBlock
            icon={<ClipboardList className="w-4 h-4 text-purple-400" />}
            step="02"
            label="Clinical Presentation & History"
            accent="#a78bfa"
          >
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              {study.presentation}
            </p>
            {study.history && (
              <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-white/10 pl-3">
                {study.history}
              </p>
            )}
          </TimelineBlock>

          {/* 03: Diagnostics & Key Findings */}
          <TimelineBlock
            icon={<FlaskConical className="w-4 h-4 text-[#6dbb45]" />}
            step="03"
            label="Diagnostics & Key Findings"
            accent="#6dbb45"
          >
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">Clinical Diagnostics Evaluation</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {study.diagnostics}
            </p>
            {study.keyFindings && study.keyFindings.length > 0 && (
              <ul className="space-y-2">
                {study.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6dbb45] flex-shrink-0" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            )}
          </TimelineBlock>

          {/* 04: Treatment Plan */}
          {study.treatmentPlan && study.treatmentPlan.length > 0 && (
            <TimelineBlock
              icon={<Pill className="w-4 h-4 text-amber-400" />}
              step="04"
              label="Treatment Plan"
              accent="#fbbf24"
            >
              <div className="space-y-4">
                {study.treatmentPlan.map((step, index) => (
                  <div key={index} className="rounded-xl bg-white/5 border border-white/5 p-4 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h5 className="text-xs font-black text-white uppercase tracking-wide">
                        Phase {index + 1}: {step.title}
                      </h5>
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                        {step.cost}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </TimelineBlock>
          )}

          {/* 05: Outcome Metrics */}
          {study.metrics && study.metrics.length > 0 && (
            <TimelineBlock
              icon={<TrendingUp className="w-4 h-4 text-[#1fa8e8]" />}
              step="05"
              label="Outcome Metrics"
              accent="#1fa8e8"
            >
              <div className="grid grid-cols-1 gap-3">
                {study.metrics.map((metricItem, index) => {
                  const [metricLabel, metricValue] = parseMetricString(metricItem);
                  return (
                    <div key={index} className="rounded-xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-white/5 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                        {metricLabel}
                      </p>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {metricValue}
                      </p>
                    </div>
                  );
                })}
              </div>
            </TimelineBlock>
          )}

          {/* 06: Follow-Up Protocol */}
          <TimelineBlock
            icon={<Calendar className="w-4 h-4 text-emerald-400" />}
            step="06"
            label="Follow-Up & Resolution"
            accent="#34d399"
          >
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">The Resolution</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.followUp || study.outcome}
            </p>
          </TimelineBlock>

        </div>

        {/* Dynamic Structural Lessons Block */}
        {study.lessons && study.lessons.length > 0 && (
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-black text-white uppercase tracking-wider">Lessons From This Case</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {study.lessons.map((lessonItem, index) => {
                const [headline, detail] = parseMetricString(lessonItem);
                return (
                  <div key={index} className="space-y-1">
                    <h5 className="text-xs font-bold text-white">
                      {index + 1}. {headline}
                    </h5>
                    {detail !== "—" && <p className="text-xs text-slate-400">{detail}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic FAQs Accordion Interface */}
        {study.faqs && study.faqs.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <h4 className="text-base font-black text-white uppercase tracking-wider">
                Frequently Asked Questions
              </h4>
            </div>

            {study.faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <p className="text-xs font-bold text-slate-200">
                    {faq.question}
                  </p>

                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="px-4 pb-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        )}

        {/* Doctor's Expert Takeaway Area */}
        <div className="rounded-2xl bg-gradient-to-r from-[#1fa8e8]/10 to-[#6dbb45]/10 border border-[#1fa8e8]/20 p-5">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquareQuote className="w-4 h-4 text-[#1fa8e8]" />
            <span className="text-[10px] font-black uppercase tracking-wider text-[#1fa8e8]">
              The Lung Detective's Takeaway
            </span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed italic">
            "{study.doctorNote}"
          </p>
          {study.outcome && study.followUp && (
            <p className="mt-3 text-xs text-slate-300 leading-relaxed font-light">
              {study.outcome}
            </p>
          )}
          <p className="mt-4 text-[10px] text-[#6dbb45] font-black tracking-wide uppercase">
            — Dr. Manish Aggarwal, Delhi Lung & Sleep Centre
          </p>
        </div>

        {/* Verified Footer Block */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div className="flex flex-col space-y-1 max-w-full md:max-w-xl">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-[#1fa8e8]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Verified File ID:
              </span>
              <span className="text-[11px] font-black text-white">
                DLSC-{study.id * 10}
              </span>
            </div>
            <p className="text-[9px] text-slate-500 italic">
              This case has been shared for patient education purposes. Certain details have been modified to protect patient confidentiality.
            </p>
            <p className="text-[10px] text-slate-400 font-bold leading-normal">
              Dr. Manish Aggarwal · Senior Chest Physician & Interventional Pulmonologist · Delhi Lung & Sleep Centre
            </p>
          </div>
          <button
            onClick={() => onFlip()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-slate-300 text-[11px] font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all cursor-pointer whitespace-nowrap md:self-end"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Back to Summary
          </button>
        </div>

      </div>
    </div>
  );
}