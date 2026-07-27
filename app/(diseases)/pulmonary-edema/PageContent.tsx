import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "Can pulmonary edema be cured?",
    answer:
      "Pulmonary edema itself can usually be resolved with prompt treatment, especially when the underlying cause, such as heart failure or infection, is identified and managed. However, if it's linked to a long-term condition like chronic heart or kidney disease, ongoing management is needed to prevent it from happening again.",
  },
  {
    question: "How to reduce fluid in lungs?",
    answer:
      "Reducing fluid in the lungs typically involves oxygen support to ease breathing, diuretic medicines to help the body remove excess fluid, and treating the underlying cause, whether that's the heart, kidneys, or an infection. This should always be done under medical supervision rather than attempted at home, since pulmonary edema can worsen quickly.",
  },
  {
    question: "How do you know if you have fluid in your lungs?",
    answer:
      "Common signs include sudden or worsening breathlessness, especially when lying down, a cough with frothy or pink-tinged mucus, wheezing, and a rapid heartbeat. If you notice these symptoms, especially if they come on suddenly, it's important to seek medical attention promptly, since pulmonary edema can be a medical emergency.",
  },
  {
    question: "How is pulmonary edema treated in renal failure?",
    answer:
      "When pulmonary edema is caused by renal failure, treatment focuses on removing the excess fluid the kidneys can't clear on their own, often through diuretics if the kidneys still respond to them, or through dialysis if they don't. Oxygen support is also given as needed, alongside close monitoring of fluid balance and kidney function.",
  },
  {
    question: "Is pulmonary edema a medical emergency?",
    answer:
      "It can be, particularly when it develops suddenly and causes severe breathlessness. This is often called acute pulmonary edema and needs immediate medical attention. Gradual, milder forms linked to chronic conditions still need timely treatment but may not always require emergency care.",
  },
  {
    question: "Should I go to the hospital if I think I have fluid in my lungs?",
    answer:
      "Yes, if you're experiencing sudden or severe breathlessness, especially with frothy or pink-tinged mucus, a feeling of suffocation, or bluish lips, seek emergency care right away rather than waiting, since pulmonary edema can worsen quickly without treatment.",
  },
];

export default function PulmonaryEdemaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Feels Like You're Drowning From the Inside? It Could Be Pulmonary Edema"
        description="Are you struggling to catch your breath, especially when lying down, or coughing up frothy or pink-tinged mucus? This could be pulmonary edema, commonly described as fluid inside the lungs. It can develop suddenly or build up gradually, and either way, it needs prompt evaluation and treatment."
        ctaText="Book an Appointment"
        backgroundImage="/services/pulmonary-edema.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS PULMONARY EDEMA */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Condition Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Pulmonary Edema?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Pulmonary edema happens when fluid builds up inside the air sacs of the lungs, making it harder for oxygen to pass into the blood. In everyday terms, it's often described as fluid inside the lungs, and it's different from a pleural effusion, where fluid collects around the lungs rather than inside them.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Pulmonary edema is usually a sign of another underlying condition, most often related to the heart, though it can also occur due to other causes. Depending on how quickly it develops, it can range from a mild, manageable issue to a medical emergency that needs urgent treatment.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/pulmonary-edema-patient.png"
                alt="Pulmonary Evaluation and Diagnostic View"
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
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Symptoms of Pulmonary Edema
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Symptoms can appear suddenly or build up gradually, depending on the underlying cause. Common signs include:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Severe breathlessness, especially when lying flat",
                "A cough that may bring up frothy or pink-tinged mucus",
                "A feeling of suffocation or drowning, particularly in sudden cases",
                "Rapid, irregular heartbeat",
                "Wheezing or gasping for breath",
                "Excessive sweating",
                "Swelling in the legs or ankles, if related to heart failure",
                "Bluish lips or skin in severe cases",
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
              Pathology & Drivers
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              What Causes Pulmonary Edema?
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Pulmonary edema develops when fluid leaks into the air sacs of the lungs, most often due to an underlying condition:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Heart failure",
                  desc: "The most common cause, where the heart isn't pumping efficiently, causing fluid to back up into the lungs.",
                },
                {
                  title: "Kidney (renal) failure",
                  desc: "Reduced ability to remove excess fluid from the body can lead to fluid build-up in the lungs.",
                },
                {
                  title: "High-altitude exposure",
                  desc: "Rapid ascent to high altitudes can cause a specific type of pulmonary edema in some individuals.",
                },
                {
                  title: "Lung injury or infection",
                  desc: "Severe infections or direct injury to the lungs can cause fluid to leak into the air sacs.",
                },
                {
                  title: "Medications or toxin exposure",
                  desc: "Can occasionally contribute directly to fluid build-up in the pulmonary system.",
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
              Clinical Investigation
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Diagnostic Tests for Pulmonary Edema
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Identifying pulmonary edema, and more importantly, its underlying cause, is essential for deciding the right treatment. Dr. Manish Aggarwal uses the following targeted tests:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Chest X-ray", detail: "Usually the primary step taken to confirm fluid presence in the lungs." },
                { name: "CT Scan of the Chest", detail: "Provides a more complex, detailed look when structural evaluation is needed." },
                { name: "Blood Oxygen Level Check", detail: "Continuous pulse oximetry monitoring to gauge respiratory efficacy." },
                { name: "Arterial Blood Gas (ABG)", detail: "Detailed metabolic assessment of baseline gas exchange profiles." },
                { name: "Comprehensive Blood Tests", detail: "Run dynamically to check heart, metabolic, and kidney function panels." },
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
              Pulmonary Edema Treatment
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Pulmonary edema can escalate quickly, so treatment often focuses on immediate relief alongside addressing what's causing the fluid to accumulate. Dr. Manish Aggarwal builds the treatment plan based on how severe the fluid build-up is and what's causing it, since heart-related and kidney-related cases often call for different approaches.
              </p>
              <p>
                Oxygen support is often the priority in severe cases, while diuretics help clear excess fluid, particularly when the heart or kidneys are involved. Alongside this, treating the underlying cause, whether heart failure, kidney failure, or infection, is essential to keep the fluid from returning, with medications to support heart function or dialysis used where relevant. Severe or rapidly worsening cases require hospitalisation for closer monitoring and more intensive care.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Don't Wait to Get Checked
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Sudden breathlessness with fluid in the lungs can be an emergency. Get expert care from Dr. Manish Aggarwal.
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
                  alt="Dr. Manish Aggarwal - Pulmonologist in Delhi"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Medical Expert Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Meet Your Pulmonologist for Pulmonary Edema Specialist in Delhi - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  Dr. Manish Aggarwal is a pulmonologist with years of experience diagnosing and treating pulmonary edema and other lung and breathing-related conditions.
                </p>
                <p>
                  He completed his MBBS and MD in Tuberculosis and Chest Diseases from Delhi University, followed by NHS clinical experience in the United Kingdom and the prestigious FRCP (Glasgow) from the Royal College of Physicians.
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
                  Don't Let Fluid Take Your Breath Away
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Fluid building up in the lungs can worsen quickly, so prompt evaluation matters. Get expert diagnosis and timely treatment for pulmonary edema from Dr. Manish Aggarwal.
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