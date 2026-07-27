import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "How to treat type 2 respiratory failure?",
    answer:
      "Treatment usually starts with carefully controlled oxygen therapy and non-invasive ventilation, such as BiPAP, to help remove excess carbon dioxide from the blood. Mechanical ventilation is used in more severe cases. Alongside this, the underlying cause, such as a COPD flare-up or a neuromuscular condition, is treated directly. Dr. Manish Aggarwal decides the right combination based on the severity and cause in each patient.",
  },
  {
    question: "What is the difference between type 1 and type 2 lung failure?",
    answer:
      "Type 1 Respiratory Failure involves low blood oxygen with normal or low carbon dioxide levels, usually due to a problem with oxygen exchange in the lungs, such as pneumonia or pulmonary edema. Type 2 Respiratory Failure involves low oxygen along with high carbon dioxide levels, usually due to a problem with the overall effectiveness of breathing, such as COPD or a condition affecting the breathing muscles.",
  },
  {
    question: "What are type 1 and type 2 respiratory cells?",
    answer:
      "This refers to a different concept than respiratory failure; it's about the cells that line the lungs' air sacs. Type I pneumocytes are thin cells that make up most of the air sac surface and are where oxygen and carbon dioxide actually pass into and out of the blood. Type II pneumocytes are smaller, more specialised cells that produce surfactant, a substance that helps keep the air sacs open, and can also regenerate into Type I cells when the lung tissue is damaged.",
  },
  {
    question: "What are type 1 and type 2 cells?",
    answer:
      "If referring to lung cells, Type I and Type II cells (pneumocytes) are the two main cell types lining the air sacs of the lungs, responsible for gas exchange and surfactant production, respectively, as explained above. This is a separate concept from Type 1 and Type 2 respiratory failure, which are clinical conditions describing different patterns of breathing failure. If you meant something else by this question, feel free to clarify with your specialist during your consultation.",
  },
  {
    question: "Can type 2 respiratory failure be reversed?",
    answer:
      "In many cases, especially when it's triggered by a treatable flare-up, such as a COPD exacerbation, type 2 respiratory failure can improve significantly with prompt treatment. When it's linked to a chronic underlying condition, ongoing management, sometimes including long-term ventilatory support, may be needed to keep it controlled.",
  },
  {
    question: "When should I seek emergency care for confusion and breathlessness?",
    answer:
      "If you or someone else develops sudden confusion, extreme drowsiness, or a severe headache along with breathlessness, seek emergency care immediately. These can be signs of dangerously high carbon dioxide levels, and early treatment significantly improves the outcome.",
  },
];

export default function Type2RespiratoryFailurePage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Drowsy, Confused & Breathless? It Could Be Type 2 Respiratory Failure"
        description="Are you or a loved one experiencing extreme drowsiness, confusion, or a headache along with breathlessness? This could be Type 2 Respiratory Failure, also known as hypercapnic respiratory failure, where carbon dioxide builds up in the blood alongside low oxygen levels. In severe cases, this can lead to CO₂ narcosis, a dangerous state of confusion or reduced consciousness. Prompt evaluation by an experienced Type 2 Respiratory Failure Specialist is essential."
        ctaText="Book an Appointment"
        backgroundImage="/services/type-2-respiratory-failure.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS TYPE 2 RESPIRATORY FAILURE */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Critical Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Type 2 Respiratory Failure?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Type 2 Respiratory Failure happens when the lungs are unable to remove enough carbon dioxide from the blood, causing it to build up, usually alongside low oxygen levels as well. This build-up of carbon dioxide, known as <span className="font-bold">hypercapnia</span>, can affect brain function if it becomes severe, leading to a state called <span className="font-bold">CO₂ narcosis</span>, marked by drowsiness, confusion, or reduced alertness.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                It's often caused by conditions that reduce the effectiveness of breathing itself, rather than just affecting the lungs' ability to absorb oxygen. Prompt treatment from a <span className="font-bold">Type 2 Respiratory Failure Specialist</span> is important, since worsening CO₂ levels can become a medical emergency.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/type-2-respiratory-failure.png"
                alt="Clinical Ventilation and Hypercapnia Assessment"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Differential Diagnosis
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-6">
            Difference Between Type 1 and Type 2 Respiratory Failure
          </h2>
          <div className="overflow-x-auto border border-slate-100 rounded-2xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-bold text-[#0f172a]">Factor</th>
                  <th className="p-4 font-bold text-[#0f172a]">Type 1 Respiratory Failure</th>
                  <th className="p-4 font-bold text-[#0f172a]">Type 2 Respiratory Failure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#334155]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Main problem</td>
                  <td className="p-4">Low blood oxygen levels</td>
                  <td className="p-4">Low blood oxygen levels plus high carbon dioxide levels</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Carbon dioxide levels</td>
                  <td className="p-4">Usually normal or low</td>
                  <td className="p-4">Elevated (hypercapnia)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Common causes</td>
                  <td className="p-4">Pneumonia, pulmonary edema, ARDS, pulmonary embolism</td>
                  <td className="p-4">COPD, severe asthma, chest wall or nerve/muscle problems affecting breathing, sedative overdose</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Underlying issue</td>
                  <td className="p-4">Problem with oxygen exchange in the lungs</td>
                  <td className="p-4">Problem with the overall effectiveness of breathing (ventilation)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Key symptom to watch for</td>
                  <td className="p-4">Breathlessness, low oxygen</td>
                  <td className="p-4">Breathlessness plus drowsiness, confusion, or headache from CO₂ build-up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SYMPTOMS & CAUSES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Symptoms of Type 2 Respiratory Failure
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Symptoms are related to both low oxygen and rising carbon dioxide levels, and can develop suddenly or gradually. Common signs include:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Breathlessness",
                "Headache, especially in the morning",
                "Drowsiness or excessive sleepiness",
                "Confusion or reduced alertness (a sign of CO₂ narcosis in severe cases)",
                "Flushed skin",
                "Rapid heartbeat",
                "Bluish lips or skin, in cases with significant low oxygen as well",
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

          {/* CAUSES */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Pathology & Triggers
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Causes of Type 2 Respiratory Failure
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Type 2 Respiratory Failure develops when the effort or overall ability to breathe adequately is systematically compromised:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "COPD",
                  desc: "One of the most common chronic triggers, especially during a severe acute flare-up.",
                },
                {
                  title: "Severe asthma",
                  desc: "Advanced acute attacks can progress to obstruct standard carbon dioxide elimination.",
                },
                {
                  title: "Chest wall or neuromuscular conditions",
                  desc: "Directly weaken or impair the major muscle groups involved in daily breathing dynamics.",
                },
                {
                  title: "Sedative or opioid overdose",
                  desc: "Can chemically suppress the central nervous system's normal drive to breathe.",
                },
                {
                  title: "Obesity hypoventilation syndrome",
                  desc: "Excess physical weight alters and restricts normal mechanical chest expansion.",
                },
                {
                  title: "Severe scoliosis or chest deformities",
                  desc: "Structural abnormalities that physically restrict how well the lungs expand.",
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
              Diagnostic Testing
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Diagnostic Tests for Type 2 Respiratory Failure
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Confirming Type 2 Respiratory Failure and identifying the underlying cause is essential for choosing the right treatment. <span className="font-bold text-white">Dr. Manish Aggarwal</span> uses the following diagnostic tests:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Arterial Blood Gas (ABG)", detail: "The key clinical standard used to definitively confirm elevated carbon dioxide levels and pH alterations." },
                { name: "Pulse Oximetry Check", detail: "Continuous monitoring of systemic blood oxygen saturation thresholds." },
                { name: "Chest X-ray / CT Scan", detail: "Detailed radiological tracking to evaluate structural lung or chest wall status." },
                { name: "Pulmonary Function Test", detail: "Comprehensive lung metrics gathered once the initial acute phase is safely stabilised." },
                { name: "Advanced Spirometry", detail: "Targeted evaluation to accurately assess underlying lung conditions like chronic COPD." },
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
              Type 2 Respiratory Failure Treatment
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Type 2 respiratory failure occurs when the lungs can't clear carbon dioxide effectively, and it needs urgent, carefully managed treatment since correcting oxygen levels the wrong way can sometimes make things worse. <span className="font-bold">Dr. Manish Aggarwal</span> focuses on improving ventilation while treating the underlying cause, since oxygen therapy alone isn't the answer here.
              </p>
              <p>
                Treatment typically starts with carefully titrated oxygen and non-invasive ventilation (BiPAP) to help clear excess carbon dioxide, escalating to mechanical ventilation in severe cases. Alongside this, the underlying cause, whether a COPD flare-up, sedative effects, or a neuromuscular condition, is addressed directly, with close monitoring throughout. For select chronic cases, long-term home BiPAP therapy helps manage the condition going forward.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              This Needs Prompt Attention
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Type 2 Respiratory Failure can progress quickly and become dangerous if untreated. If symptoms are severe, seek emergency care immediately, and connect with Dr. Manish Aggarwal for ongoing pulmonary care.
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
                  alt="Dr. Manish Aggarwal - Type 2 Respiratory Failure Specialist"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Advanced Pulmonary & Critical Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Your Type 2 Respiratory Failure Specialist in Delhi - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  <span className="font-bold text-[#0f172a]">Dr. Manish Aggarwal</span> is a pulmonologist with years of experience diagnosing and managing respiratory failure and other critical lung conditions.
                </p>
                <p>
                  He completed his <span className="font-bold text-[#0f172a]">MBBS and MD</span> in Tuberculosis and Chest Diseases from <span className="font-bold text-[#0f172a]">Delhi University</span>, followed by integrated NHS clinical experience in the <span className="font-bold text-[#0f172a]">United Kingdom</span> and the prestigious <span className="font-bold text-[#0f172a]">FRCP (Glasgow)</span> from the Royal College of Physicians.
                </p>
                <p>
                  He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific underlying cause, rather than offering a one-size-fits-all approach.
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
                  Confusion & Drowsiness Are Warning Signs, Not Just Tiredness
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Drowsiness or confusion along with breathlessness can be a sign of dangerously high CO₂ levels. Get expert diagnosis and timely treatment from Dr. Manish Aggarwal, your trusted Type 2 Respiratory Failure Specialist in Delhi.
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