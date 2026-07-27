import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "Is type 1 respiratory failure curable?",
    answer:
      "Type 1 Respiratory Failure itself can often be resolved once the underlying cause, such as pneumonia or pulmonary edema, is treated effectively. If it's linked to a long-term condition like interstitial lung disease, ongoing management is needed, though the acute episode can usually be brought under control with prompt treatment.",
  },
  {
    question: "What medication is used for respiratory failure?",
    answer:
      "Medication depends entirely on the underlying cause. This may include antibiotics for pneumonia, diuretics for fluid build-up in pulmonary edema, or clot-dissolving medicines for pulmonary embolism. Oxygen therapy, while not a medication in the traditional sense, is a core part of treatment alongside these.",
  },
  {
    question: "Can respiratory failure be cured?",
    answer:
      "Whether respiratory failure can be fully resolved depends on its cause. Acute episodes triggered by a treatable condition, like an infection, often improve completely with the right treatment. Respiratory failure linked to a chronic underlying lung condition may need long-term management rather than a complete cure.",
  },
  {
    question: "How long can a person live with respiratory failure?",
    answer:
      "This depends heavily on the underlying cause, how quickly treatment begins, and the person's overall health. Acute respiratory failure treated promptly often has a good outcome, while outcomes for respiratory failure linked to advanced chronic lung disease vary more widely. A Type 1 Respiratory Failure Specialist can give a clearer picture based on your specific situation and test results.",
  },
  {
    question: "What fruit is good for the lungs?",
    answer:
      "Fruits rich in antioxidants, such as berries, oranges, and apples, are generally considered supportive of overall lung and immune health as part of a balanced diet. That said, no specific fruit can treat or prevent respiratory failure, which is a serious medical condition that needs proper diagnosis and treatment rather than dietary measures alone.",
  },
  {
    question: "When should I seek emergency care for breathing difficulty?",
    answer:
      "If you or someone else has sudden or severe breathlessness, bluish lips or skin, confusion, or a rapid heartbeat, seek emergency care immediately. Type 1 Respiratory Failure can worsen quickly, and early treatment significantly improves the outcome.",
  },
];

export default function Type1RespiratoryFailurePage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Low Oxygen Levels But Breathing Doesn't Feel Hard? It Could Be Type 1 Respiratory Failure"
        description="Are you or a loved one experiencing severe breathlessness along with low oxygen levels, even though breathing itself doesn't feel laboured? This could be Type 1 Respiratory Failure, a condition where the lungs can't get enough oxygen into the blood. It often needs urgent evaluation, and prompt care from an experienced Type 1 Respiratory Failure Specialist can make a significant difference."
        ctaText="Book an Appointment"
        backgroundImage="/services/type-1-respiratory-failure-image.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS TYPE 1 RESPIRATORY FAILURE */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Condition Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Type 1 Respiratory Failure?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Type 1 Respiratory Failure happens when the lungs are unable to transfer enough oxygen into the bloodstream, leading to <span className="font-bold">low blood oxygen levels</span>, while the ability to remove carbon dioxide usually remains normal or near normal. This is different from Type 2 Respiratory Failure, where carbon dioxide also builds up in the blood.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                It's often caused by conditions that directly affect the lungs' air sacs or blood vessels, preventing oxygen from passing through efficiently. Type 1 Respiratory Failure can develop suddenly and become a medical emergency, which is why prompt evaluation by a <span className="font-bold">Type 1 Respiratory Failure Specialist</span> is important.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/type-1-respiratory-failure-image-2.png"
                alt="Clinical Respiratory Failure Assessment"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS & CAUSES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Indicators
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Symptoms of Type 1 Respiratory Failure
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Symptoms are largely related to low oxygen levels in the body and can develop suddenly or gradually depending on the underlying cause. Common signs include:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Severe or worsening breathlessness",
                "Rapid breathing",
                "Bluish lips, fingertips, or skin",
                "Rapid heartbeat",
                "Confusion or restlessness",
                "Fatigue",
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

          {/* CAUSES */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Underlying Triggers
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Causes of Type 1 Respiratory Failure
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Type 1 Respiratory Failure develops due to conditions that prevent oxygen from passing efficiently from the lungs into the blood:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Pneumonia",
                  desc: "A leading primary cause, whether bacterial, viral, or fungal in origin.",
                },
                {
                  title: "Pulmonary edema",
                  desc: "Acute fluid build-up in the lungs that heavily interferes with normal oxygen exchange.",
                },
                {
                  title: "ARDS (Acute Respiratory Distress Syndrome)",
                  desc: "A severe form of lung inflammation that significantly impacts overall oxygen levels.",
                },
                {
                  title: "Pulmonary embolism",
                  desc: "A sudden blood clot in the lungs that blocks normal blood flow and gas exchange channels.",
                },
                {
                  title: "Interstitial Lung Disease",
                  desc: "Long-term progressive scarring of the lung tissue that steadily reduces oxygen transfer.",
                },
                {
                  title: "Pneumothorax",
                  desc: "A collapsed lung structure that suddenly reduces the available area for oxygen exchange.",
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
              Diagnostic Tests for Type 1 Respiratory Failure
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Confirming Type 1 Respiratory Failure and identifying its underlying cause is essential for starting the right treatment quickly. <span className="font-bold text-white">Dr. Manish Aggarwal</span> uses the following diagnostic modalities:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Arterial Blood Gas (ABG)", detail: "The key clinical test used to definitively confirm the specific type and overall severity of respiratory failure." },
                { name: "Pulse Oximetry", detail: "Continuous peripheral checking of blood oxygen level status." },
                { name: "Chest X-ray / CT Scan", detail: "Detailed radiological visualization to check for underlying lung pathology." },
                { name: "Pulmonary Function Test", detail: "Functional lung tracking performed once the acute initial phase is fully stabilised." },
                { name: "Targeted Blood Panels", detail: "Comprehensive systemic blood testing to help isolate the underlying root cause." },
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
              Type 1 Respiratory Failure Treatment
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Type 1 respiratory failure happens when the lungs can't get enough oxygen into the blood, and it needs urgent treatment from the outset. <span className="font-bold">Dr. Manish Aggarwal</span> focuses on restoring oxygen levels while treating the underlying cause, since both need to be managed together. 
              </p>
              <p>
                Treatment typically starts with high-flow oxygen, escalating to non-invasive or mechanical ventilation if needed, while the root cause, whether infection, a blood clot, or fluid in the lungs, is addressed directly. Close ICU-level monitoring continues throughout, given how quickly the condition can change, with follow-up care afterward to reduce the risk of recurrence.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              This Needs Prompt Attention
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Type 1 Respiratory Failure can be a medical emergency. If symptoms are severe, seek emergency care immediately, and connect with Dr. Manish Aggarwal for ongoing pulmonary care.
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
                  alt="Dr. Manish Aggarwal - Type 1 Respiratory Failure Specialist"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Critical Care Pulmonologist
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                About Your Type 1 Respiratory Failure Specialist in Delhi - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  <span className="font-bold text-[#0f172a]">Dr. Manish Aggarwal</span> is a pulmonologist with years of experience diagnosing and managing respiratory failure and other critical lung conditions.
                </p>
                <p>
                  He completed his <span className="font-bold text-[#0f172a]">MBBS and MD</span> in Tuberculosis and Chest Diseases from <span className="font-bold text-[#0f172a]">Delhi University</span>, followed by structured NHS clinical experience in the <span className="font-bold text-[#0f172a]">United Kingdom</span> and the prestigious <span className="font-bold text-[#0f172a]">FRCP (Glasgow)</span> from the Royal College of Physicians.
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
                  Low Oxygen Can Be Silent - Don't Ignore It
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Low oxygen levels can be dangerous even when symptoms seem mild. Get an expert diagnosis and timely treatment from Dr. Manish Aggarwal, your trusted Type 1 Respiratory Failure Specialist in Delhi.
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