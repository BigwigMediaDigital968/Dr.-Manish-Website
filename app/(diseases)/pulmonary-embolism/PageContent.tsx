import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is the cause of pulmonary embolism?",
    answer:
      "Pulmonary embolism is usually caused by a blood clot that forms in a deep vein, most often in the leg, a condition called deep vein thrombosis, which then travels to the lungs. Risk factors that make this more likely include prolonged immobility, recent surgery, certain medical conditions like cancer or clotting disorders, pregnancy, smoking, and obesity.",
  },
  {
    question: "What is the treatment for pulmonary embolism?",
    answer:
      "Treatment usually starts with blood thinners to stop the clot from growing and prevent new clots from forming. In more severe cases, clot-dissolving medicines or a procedure to remove the clot may be needed, along with oxygen support and hospital monitoring. Long-term treatment focuses on preventing recurrence.",
  },
  {
    question: "What are the signs and symptoms of pulmonary embolism?",
    answer:
      "Common symptoms include sudden shortness of breath, sharp chest pain that worsens with breathing, a rapid heartbeat, coughing up blood, lightheadedness, and sometimes swelling or pain in one leg. Since symptoms can come on suddenly and be severe, they should be treated as a medical emergency.",
  },
  {
    question: "Can someone recover from a pulmonary embolism?",
    answer:
      "Yes, many people recover well from a pulmonary embolism, especially with prompt diagnosis and treatment. Recovery time varies depending on the size of the clot and how quickly treatment began, and most patients continue blood thinners for a period of time afterward to prevent recurrence, under the guidance of their Pulmonary Embolism Specialist.",
  },
  {
    question:
      "How long do you need to take blood thinners after a pulmonary embolism?",
    answer:
      "This varies from patient to patient, generally ranging from a few months to, in some cases, long-term or lifelong treatment, depending on the underlying cause and risk of recurrence. Your specialist will determine the right duration based on your specific case.",
  },
  {
    question:
      "When should I seek emergency care for possible pulmonary embolism?",
    answer:
      "If you experience sudden shortness of breath, sharp chest pain, a rapid heartbeat, or coughing up blood, seek emergency medical care immediately rather than waiting for a scheduled appointment, since pulmonary embolism can become life-threatening very quickly without prompt treatment.",
  },
];

export default function PulmonaryEmbolismPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Pulmonary Embolism: When a Blood Clot Becomes a Medical Emergency"
        description="Do you have sudden breathlessness, chest pain, or a rapid heartbeat that came on without warning? This could be a pulmonary embolism, a blood clot that has travelled to the lungs and is blocking blood flow. This is a medical emergency that needs immediate attention, and prompt treatment from an experienced Pulmonary Embolism Specialist can be lifesaving."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/128597/pexels-photo-128597.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WHAT IS PULMONARY EMBOLISM */}
        <section className="pt-12 sm:pt-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Critical Overview
          </span>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight">
                What Is Pulmonary Embolism?
              </h2>

              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                Pulmonary embolism happens when a blood clot, usually formed in
                a deep vein in the leg, travels through the bloodstream and
                lodges in an artery in the lungs, blocking blood flow. This
                blockage prevents part of the lung from getting oxygen properly
                and puts strain on the heart, which is why it can become
                life-threatening very quickly if not treated promptly.
              </p>

              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                If you suspect a pulmonary embolism, it's important to seek
                emergency care immediately rather than waiting for a scheduled
                consultation, since timely treatment from a Pulmonary Embolism
                Specialist makes a significant difference in outcomes.
              </p>
            </div>

            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/14569658/pexels-photo-14569658.jpeg"
                alt="Acute Cardiovascular and Pulmonary Emergency Evaluation"
                className="w-full h-[280px] sm:h-[320px] object-cover rounded-3xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS & CAUSES */}
        <div className="flex flex-col lg:flex-row gap-12 pt-16 sm:pt-20">
          {/* SIGNS AND SYMPTOMS */}
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Signs and Symptoms of Pulmonary Embolism
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
              Symptoms often appear suddenly and can vary depending on the size
              of the clot and how much of the lung is affected. Common signs
              include:
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Sudden shortness of breath, even at rest",
                "Sharp chest pain that worsens with deep breathing or coughing",
                "Rapid or irregular heartbeat",
                "Coughing up blood",
                "Lightheadedness or fainting",
                "Swelling, pain, or redness in one leg, often a sign of the clot's origin",
              ].map((symptom, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-start text-xs sm:text-sm text-[#64748b] leading-relaxed"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* CAUSES OF PULMONARY EMBOLISM */}
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Pathology & Risk Factors
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Causes of Pulmonary Embolism
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
              Pulmonary embolism develops when a blood clot forms elsewhere in
              the body and travels to the lungs. Common causes and risk factors
              include:
            </p>

            <div className="mt-6 space-y-2">
              {[
                {
                  title: "Deep Vein Thrombosis (DVT)",
                  desc: "The most common source, where a clot forms in a deep vein, usually in the leg.",
                },
                {
                  title: "Prolonged Immobility",
                  desc: "Long flights, bed rest, or extended periods of sitting, such as after surgery.",
                },
                {
                  title: "Recent Surgery or Injury",
                  desc: "Particularly orthopaedic surgeries involving the hip or leg.",
                },
                {
                  title: "Certain Medical Conditions",
                  desc: "Including cancer, clotting disorders, and heart disease.",
                },
                {
                  title: "Pregnancy and Hormone Therapy",
                  desc: "Increases the risk of clot formation.",
                },
                {
                  title: "Smoking and Obesity",
                  desc: "Both increase the overall risk of developing blood clots.",
                },
              ].map((type, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-start pb-2 last:pb-0"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />

                  <p className="text-sm font-bold text-[#0f172a]">
                    {type.title} :{" "}
                    <span className="font-normal text-[#64748b]">
                      {type.desc}
                    </span>
                  </p>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* DIAGNOSTIC PANEL */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Emergency Diagnostics
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
            Diagnostic Tests for Pulmonary Embolism
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">
            Confirming a pulmonary embolism quickly is critical, since it
            directly affects how urgently treatment needs to begin. Dr. Manish
            Aggarwal uses the following tests:
          </p>

          <ul className="mt-6 space-y-3 pl-2 md:pl-8">
            {[
              {
                name: "CT Pulmonary Angiography, the primary test used to directly visualise a clot in the lungs",
              },
              {
                name: "Blood oxygen level check (pulse oximetry)",
              },
              {
                name: "Arterial Blood Gas (ABG) Analysis",
              },
              {
                name: "D-dimer blood test, to help assess the likelihood of a clot",
              },
              {
                name: "Doppler ultrasound of the legs, to check for a source clot (DVT)",
              },
              {
                name: "ECG, to assess how the heart is being affected",
              },
            ].map((test: { name: string; link?: string }, index) => (
              <li
                key={index}
                className="flex gap-3 items-start text-xs sm:text-sm font-bold text-[#0f172a] leading-relaxed"
              >
                <span className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                {test.link && test?.link ? (
                  <Link href={test.link} className="hover:text-[#1fa8e8]">
                    {" "}
                    {test.name}
                  </Link>
                ) : (
                  test.name
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* TREATMENT SECTOR */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Therapeutic Management
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
            Pulmonary Embolism Treatment
          </h2>

          <div className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b] space-y-4">
            <p>
              Pulmonary embolism can range from a small clot managed with
              medication to a life-threatening emergency needing immediate
              intervention. Dr. Manish Aggarwal decides the right treatment
              based on the clot's size, its effect on the heart and lungs, and
              the patient's overall condition, since this determines how
              aggressively it needs to be addressed.
            </p>
            <p>
              Most cases are managed with blood thinners, while severe cases
              with significant heart strain may need faster-acting
              clot-dissolving medicines or direct clot removal. Hospitalisation
              allows close monitoring in the critical early period. Since
              pulmonary embolism carries a risk of recurrence, ongoing follow-up
              with your Pulmonary Embolism Specialist is an important part of
              long-term care.
            </p>
          </div>

          {/* INTERMEDIARY ACTION CARD */}
          <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
              Sudden Breathlessness or Chest Pain? Don't Wait
            </h3>
            <p className="mt-2 text-base text-[#64748b] max-w-xl">
              Pulmonary embolism is a medical emergency. If you're experiencing
              these symptoms right now, seek emergency care immediately. For
              evaluation of risk factors or follow-up care, consult Dr. Manish
              Aggarwal, your trusted Pulmonary Embolism Specialist in Delhi.
            </p>
            <div className="mt-6">
              <BookAppointmentButton cta="Schedule Your Appointment" />
            </div>
          </div>
        </section>

        {/* CLINICAL SPECIALIST PROFILE */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Vascular Pulmonology Expert
          </span>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight">
                Meet Your Pulmonary Embolism Specialist in Delhi - Dr. Manish
                Aggarwal
              </h2>

              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Dr. Manish Aggarwal is a pulmonologist with years of experience
                diagnosing and treating pulmonary embolism and other lung and
                breathing-related conditions. He completed his MBBS and MD in
                Tuberculosis and Chest Diseases from Delhi University, followed
                by NHS clinical experience in the United Kingdom and the
                prestigious FRCP (Glasgow) from the Royal College of Physicians.
              </p>

              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mt-4">
                He is known for explaining conditions in simple,
                easy-to-understand language and building treatment and follow-up
                plans around each patient's specific risk factors and test
                results.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION PANEL */}
        <FAQs faqs={faqs} />

        {/* CLOSING CONVERSION BAR */}
        <section className="py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  Timely Treatment Saves Lives
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  For evaluation, follow-up, or long-term management of
                  pulmonary embolism, consult Dr. Manish Aggarwal, your trusted
                  Pulmonary Embolism Specialist in Delhi.
                </p>
              </div>
              <div className="shrink-0">
                <BookAppointmentButton cta="Book an Appointment Today" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
