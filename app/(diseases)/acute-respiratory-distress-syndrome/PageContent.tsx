import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is acute respiratory distress syndrome?",
    answer:
      "Acute Respiratory Distress Syndrome, or ARDS, is a serious condition where the air sacs in the lungs fill with fluid due to widespread inflammation, severely limiting the amount of oxygen that reaches the bloodstream. It usually develops as a complication of a severe illness or injury and requires urgent hospital treatment.",
  },
  {
    question: "What are the signs of respiratory distress?",
    answer:
      "Signs of respiratory distress include severe shortness of breath, rapid or shallow breathing, low blood oxygen levels, a rapid heartbeat, bluish lips or fingertips, and confusion or extreme fatigue. These symptoms usually appear suddenly and worsen quickly, requiring immediate medical attention.",
  },
  {
    question: "What are the three stages of acute respiratory distress syndrome?",
    answer:
      "ARDS is generally described in three stages: the exudative stage, the earliest phase where fluid and inflammation rapidly build up in the lungs and oxygen levels drop sharply; the proliferative stage, where the lungs begin attempting to repair themselves, though this phase can still be critical; and the fibrotic stage, which occurs in some patients where scarring develops in the lung tissue, potentially affecting long-term lung function.",
  },
  {
    question: "Is ARDS the same as pneumonia?",
    answer:
      "No, though pneumonia can be one of the causes of ARDS. Pneumonia is an infection of the lung tissue, while ARDS is a more widespread and severe inflammatory response affecting both lungs, which can be triggered by pneumonia or by several other serious illnesses and injuries.",
  },
  {
    question: "Can someone fully recover from ARDS?",
    answer:
      "Many patients do recover from ARDS with prompt and appropriate treatment, though recovery can take time and some patients experience lasting effects on lung function or overall strength. The outcome depends on the severity of the illness, the underlying cause, and how quickly treatment begins, which is why urgent care is so important.",
  },
  {
    question: "When should I seek emergency care for breathing difficulty?",
    answer:
      "If you or someone else is experiencing severe or rapidly worsening breathlessness, especially alongside a serious illness or injury, bluish lips or skin, or confusion, seek emergency care immediately. ARDS can progress quickly, and early treatment significantly improves outcomes.",
  },
];

export default function ArdsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Sudden, Severe Breathlessness After an Injury or Infection? It Could Be ARDS"
        description="Has a serious illness or injury led to sudden, severe breathlessness that keeps getting worse? This could be Acute Respiratory Distress Syndrome, commonly known as ARDS, a life-threatening condition where the lungs fill with fluid and struggle to supply oxygen to the body. ARDS is a medical emergency that needs urgent evaluation and treatment from an experienced Acute Respiratory Distress Syndrome Specialist."
        ctaText="Book an Appointment"
        backgroundImage="/services/ArdsPage-image.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS ARDS */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Emergency Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Acute Respiratory Distress Syndrome?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Acute Respiratory Distress Syndrome is a serious condition where the air sacs in the lungs fill with fluid due to widespread inflammation, severely reducing the amount of oxygen that can reach the bloodstream.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                It usually develops as a complication of another serious illness or injury, such as a severe infection, major trauma, or a lung condition that has worsened suddenly. ARDS typically develops quickly, often within hours to a few days, and requires immediate hospital care. With prompt treatment from an Acute Respiratory Distress Syndrome Specialist, many patients recover, though the condition needs close monitoring throughout.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/ards-patient.png"
                alt="Critical Care Respiratory Monitoring"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS & CAUSES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SIGNS OF RESPIRATORY DISTRESS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Signs of Respiratory Distress in ARDS
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              ARDS symptoms usually appear suddenly and worsen quickly, often in someone who is already critically unwell. Common signs include:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Severe shortness of breath",
                "Rapid, shallow breathing",
                "Low blood oxygen levels, even with supplemental oxygen",
                "Rapid heartbeat",
                "Bluish lips, skin, or fingertips",
                "Confusion or extreme fatigue",
                "Low blood pressure, in more severe cases",
              ].map((symptom, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm text-[#334155] leading-relaxed">
                  <span className="h-5 w-5 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CAUSES OF ARDS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Pathology & Triggers
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Causes of Acute Respiratory Distress Syndrome
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              ARDS develops as a result of severe inflammation in the lungs, usually triggered by another serious condition:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Severe infections (sepsis)",
                  desc: "One of the most common systemic triggers of ARDS across clinical settings.",
                },
                {
                  title: "Severe pneumonia",
                  desc: "Includes deep pulmonary infections caused by bacterial, viral, or fungal pathogens.",
                },
                {
                  title: "Major trauma",
                  desc: "Direct severe chest impacts or widespread systemic injuries elsewhere in the body.",
                },
                {
                  title: "Aspiration",
                  desc: "Accidentally inhaling stomach contents, vomit, or foreign fluids straight into the lungs.",
                },
                {
                  title: "Inhalation injury",
                  desc: "Breathing in concentrated smoke, chemical fumes, or high-toxicity environmental vapors.",
                },
                {
                  title: "Pancreatitis & critical illnesses",
                  desc: "Severe deep inflammation elsewhere in the body can systematically cascade to trigger ARDS.",
                },
              ].map((type, index) => (
                <div key={index} className="flex gap-3 items-start border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <div className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                  <p className="text-sm text-[#334155] leading-relaxed">
                    <strong className="text-[#0f172a] font-semibold">{type.title}:</strong>{" "}
                    <span className="text-[#64748b]">{type.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Protocols
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Diagnostic Tests for ARDS
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Confirming ARDS quickly and identifying the underlying trigger is essential since timely treatment significantly affects clinical outcomes. Dr. Manish Aggarwal utilizes the following test modalities:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Chest X-ray / CT Scan", detail: "Used immediately to verify bilateral fluid build-up inside both lungs." },
                { name: "Arterial Blood Gas (ABG)", detail: "Measures exactly how efficiently oxygen gas is passing into the blood." },
                { name: "Pulse Oximetry Check", detail: "Continuous tracking of general peripheral blood oxygen saturation levels." },
                { name: "Targeted Blood Panels", detail: "Analyzed to identify active infections or other systematic underlying triggers." },
                { name: "Sputum & Blood Cultures", detail: "Cultured directly when a specific bacterial or fungal infection is suspected." },
              ].map((test, index) => (
                <div key={index} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:border-[#1fa8e8]/50 transition-colors duration-200">
                  <h4 className="font-bold text-[#1fa8e8] text-sm sm:text-base">{test.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{test.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENT SECTOR */}
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Therapeutic Interventions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Advanced ARDS Treatment
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Acute respiratory distress syndrome is a critical, fast-moving condition where the lungs struggle to get enough oxygen into the blood, demanding immediate, intensive care. Dr. Manish Aggarwal treats ARDS as a critical care emergency, focusing on supporting breathing while systematically addressing the underlying cause. 
              </p>
              <p>
                Most patients require high levels of oxygen support, with mechanical ventilation forming the backbone of treatment in moderate to severe cases, alongside careful fluid management and prone positioning techniques to improve oxygen distribution. Continuous ICU monitoring remains essential, and recovery often continues well after the acute phase, requiring specialized follow-up care to monitor lung function.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              This Is a Medical Emergency
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              ARDS needs immediate hospital care. If you or a loved one is experiencing severe breathlessness, seek emergency care right away.
            </p>
            <BookAppointmentButton cta="Schedule Your Appointment" />
          </div>
        </section>

        {/* CLINICAL SPECIALIST PROFILE */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/60">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative p-2 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-[260px] lg:max-w-full">
                <img
                  src="/dr-image.jpeg"
                  alt="Dr. Manish Aggarwal - ARDS Specialist in Delhi"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Critical Pulmonology Specialist
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Meet Your Acute Respiratory Distress Syndrome Specialist in Delhi - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  Dr. Manish Aggarwal is a highly skilled pulmonologist with extensive experience diagnosing and managing critical respiratory conditions, including Acute Respiratory Distress Syndrome.
                </p>
                <p>
                  He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by structured clinical practice within the NHS (United Kingdom) and the award of the prestigious FRCP (Glasgow) from the Royal College of Physicians.
                </p>
                <p>
                  He is widely known for explaining complex medical crises in simple, transparent language and guiding patients and families through critical illness and long-term recovery with a compassionate, personalized framework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION PANEL */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLOSING CONVERSION BAR */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Support for the Road to Recovery
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  For ongoing post-critical pulmonary care, functional tracking, or comprehensive long-term recovery management following a critical respiratory illness, connect with Dr. Manish Aggarwal.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <BookAppointmentButton cta="Book an Appointment Today" />
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}