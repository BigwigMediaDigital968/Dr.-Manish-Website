import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are the first signs of aspiration pneumonia?",
    answer:
      "Early signs often include a new or worsening cough, sometimes with foul-smelling mucus, fever, chest discomfort, and shortness of breath. In older adults, confusion can also be an early sign. Symptoms usually appear within hours to a few days after an episode of choking or difficulty swallowing.",
  },
  {
    question: "Can a person recover from aspiration pneumonia?",
    answer:
      "Yes, many people recover well with prompt antibiotic treatment, especially when the infection is caught early. Recovery also depends on addressing the underlying cause, such as a swallowing difficulty, to reduce the chances of it happening again. Patients with other significant health conditions may need closer monitoring during recovery.",
  },
  {
    question: "What is the cause of aspiration pneumonia?",
    answer:
      "Aspiration pneumonia is caused by food, liquid, saliva, or stomach contents being accidentally inhaled into the lungs, introducing bacteria that lead to infection. This often happens due to swallowing difficulties, reduced consciousness, acid reflux, or conditions that affect the body's normal airway-protective reflexes.",
  },
  {
    question: "What are the chances of surviving aspiration pneumonia?",
    answer:
      "Outcomes vary widely depending on the person's overall health, age, and any underlying conditions. Many people, especially those without significant other health issues, recover well with timely treatment. Older adults or those with weakened immunity or other serious illnesses may face a higher risk of complications, which is why prompt evaluation by a specialist matters.",
  },
  {
    question: "Is aspiration pneumonia harmful?",
    answer:
      "Yes, aspiration pneumonia can range from mild to serious, and if left untreated, it can lead to complications such as lung abscesses or more widespread infection. Prompt treatment significantly improves outcomes, which is why it's important to seek medical care as soon as symptoms appear.",
  },
  {
    question: "What are the first warning signs of pneumonia?",
    answer:
      "Early warning signs of pneumonia generally include a persistent cough, fever, chills, chest pain that worsens with breathing, shortness of breath, and fatigue. If these symptoms appear, especially after an episode of choking or difficulty swallowing, it's important to get evaluated promptly, since early treatment leads to better outcomes.",
  },
];

export default function AspirationPneumoniaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="When Food or Liquid Goes the Wrong Way: Understanding Aspiration Pneumonia"
        description="Have you or a loved one developed a fever and cough after choking, vomiting, or having trouble swallowing? This could be aspiration pneumonia, a lung infection that happens when food, liquid, saliva, or vomit is accidentally inhaled into the lungs. With prompt treatment from an experienced Aspiration Pneumonia Specialist, most people recover well."
        ctaText="Book an Appointment"
        backgroundImage="/services/aspiration-pneumonia-image.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS ASPIRATION PNEUMONIA */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Clinical Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Aspiration Pneumonia?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Aspiration pneumonia is a lung infection that develops when food, liquid, saliva, or stomach contents are accidentally breathed into the lungs instead of going down the food pipe. This can introduce bacteria into the lungs and trigger inflammation and infection.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                It's more common in people who have difficulty swallowing, reduced consciousness, or other conditions that affect the body's normal reflexes for protecting the airway. Without proper treatment from an <span className="font-bold">Aspiration Pneumonia Specialist</span>, the infection can worsen and lead to serious complications.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/aspiration-pneumonia-image.png"
                alt="Pulmonary Infection and Diagnostic Evaluation"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS & CAUSES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* FIRST SIGNS AND SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              First Signs and Symptoms of Aspiration Pneumonia
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Symptoms can appear within hours to a few days after the aspiration event. Common signs include:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "A new or worsening cough, often with foul-smelling mucus",
                "Fever and chills",
                "Chest pain",
                "Shortness of breath",
                "Fatigue and general weakness",
                "Confusion, particularly in older adults",
                "Difficulty swallowing or a history of choking, coughing while eating or drinking",
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

          {/* CAUSES & RISK FACTORS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Pathology & Risk Factors
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              What Is the Cause of Aspiration Pneumonia?
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Aspiration pneumonia happens when the body's normal airway protective reflexes don't work properly, allowing material to enter the lungs:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Swallowing difficulties (dysphagia)",
                  desc: "Often due to stroke, Parkinson's disease, or other neurological conditions.",
                },
                {
                  title: "Reduced consciousness",
                  desc: "Such as from sedation, anaesthesia, alcohol intoxication, or a medical emergency.",
                },
                {
                  title: "Acid reflux (GERD)",
                  desc: "Can allow stomach contents to be inhaled, especially while lying down.",
                },
                {
                  title: "Poor dental hygiene",
                  desc: "Increases the amount of bacteria that can be aspirated into the lungs.",
                },
                {
                  title: "Older age",
                  desc: "Age-related changes in swallowing and cough reflexes systematically increase risk.",
                },
                {
                  title: "Feeding tubes",
                  desc: "Can sometimes increase the risk of aspiration if not managed carefully.",
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
              Diagnostic Tests for Aspiration Pneumonia
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Confirming aspiration pneumonia and understanding what led to it helps guide both immediate treatment and steps to prevent it from happening again. <span className="font-bold text-white">Dr. Manish Aggarwal</span> uses the following tests:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Chest X-ray or CT Scan", detail: "Primary structural imaging tools used to localized and confirm active fluid or infection signatures inside the lungs." },
                { name: "Blood Oxygen Level Check", detail: "Continuous pulse oximetry monitoring to assess respiratory function and blood oxygenation status." },
                { name: "Sputum Culture & Blood Tests", detail: "Targeted microbiological and blood tracking aimed at isolating the exact infection-causing pathogen." },
                { name: "Clinical Swallowing Assessment", detail: "A specialized functional evaluation designed to identify any underlying swallowing difficulties driving the aspiration." },
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
              Therapeutic Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Aspiration Pneumonia Treatment
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Aspiration pneumonia develops when food, liquid, or saliva enters the lungs instead of the stomach, and effective treatment means tackling both the infection and why the aspiration happened in the first place. <span className="font-bold">Dr. Manish Aggarwal</span> builds the treatment plan based on the severity of the infection and the underlying cause of aspiration, since preventing recurrence is just as important as clearing the current infection.
              </p>
              <p>
                Antibiotics and oxygen support address the immediate infection, with hospitalisation reserved for more severe cases or those with significant risk factors. Alongside this, a swallowing evaluation helps identify what's driving the aspiration, while practical steps like upright feeding positions and better oral hygiene work to lower the risk of it happening again.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Get a Treatment Plan Made for You
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Every case of aspiration pneumonia is different, and so is the right treatment for it by Dr. Manish Aggarwal, your trusted Aspiration Pneumonia Specialist in Delhi.
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
                  alt="Dr. Manish Aggarwal - Aspiration Pneumonia Specialist"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Infectious Lung Disease Expert
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Your Aspiration Pneumonia Specialist in Delhi - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  <span className="font-bold text-[#0f172a]">Dr. Manish Aggarwal</span> is a pulmonologist with years of experience diagnosing and treating aspiration pneumonia and other lung infections.
                </p>
                <p>
                  He completed his <span className="font-bold text-[#0f172a]">MBBS and MD</span> in Tuberculosis and Chest Diseases from <span className="font-bold text-[#0f172a]">Delhi University</span>, followed by NHS clinical experience in the <span className="font-bold text-[#0f172a]">United Kingdom</span> and the prestigious <span className="font-bold text-[#0f172a]">FRCP (Glasgow)</span> from the Royal College of Physicians.
                </p>
                <p>
                  He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific risk factors and underlying cause, rather than offering a one-size-fits-all approach.
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
                  Get the Right Care, Reduce the Risk of Recurrence
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Get an expert diagnosis and a personalised treatment plan from Dr. Manish Aggarwal, your trusted Aspiration Pneumonia Specialist in Delhi, for the current infection and to lower the risk of it happening again.
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