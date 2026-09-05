import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "What does polysomnography test for? ",
    answer:
      "Polysomnography tests for a wide range of sleep disorders, including obstructive sleep apnea, central sleep apnea, insomnia, narcolepsy, restless legs syndrome, periodic limb movement disorder, and other unusual sleep behaviours. It records your brain waves, breathing, oxygen levels, heart rate, and body movements to give a complete picture of your sleep health.",
  },
  {
    question: "What are the risks of polysomnography? ",
    answer:
      "This test is considered very safe. It is non invasive and painless, with no needles or radiation involved. The main discomfort some people report is difficulty falling asleep with sensors attached or in an unfamiliar room, but this rarely affects the accuracy of the test.",
  {
    question: "What is the 3% rule for sleep apnea?",
    answer:
      "The 3% rule refers to how oxygen desaturation is measured during a sleep study. If your blood oxygen level drops by at least 3% from your baseline during a breathing pause, it is counted as a significant event. This rule helps doctors calculate your Apnea Hypopnea Index (AHI) and determine the severity of sleep apnea.",
  },
  {
    question: "How long does polysomnography take?",
    answer:
      "A standard Polysomnography test is done overnight and usually takes around 7 to 8 hours, matching a normal night's sleep. You arrive in the evening, sleep while being monitored, and the test ends in the morning once enough data has been recorded.",
  },
  {
    question: "Do I need a doctor's referral for a Polysomnography test?",
    answer:
      "In most cases, yes. A referral from your doctor helps ensure the test is medically necessary and that your results are reviewed by a qualified sleep specialist like Dr. Manish Aggrawal.",
  },
  {
    question: "Will I be able to sleep normally during the test? ",
    answer:
      "Most patients do sleep well enough for the technician to gather reliable data, even if it takes a little longer to fall asleep than usual. The sensors are lightweight and designed not to disturb natural sleep positions.",
  },
];

export default function InsomniaTreatmentPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Struggling with Poor Sleep? Get Answers with a Level 1 Polysomnography Test"
        description="A Level 1 Sleep Study, also called Polysomnography, is the most reliable way to find out what is really happening while you sleep. This overnight, fully supervised Polysomnography test is conducted under the expert care of Dr. Manish Aggrawal, helping you get a clear and accurate diagnosis for sleep-related problems."
        ctaText="Book Your Polysomnography Test Now"
        backgroundImage="/sleep/insomnia-treatment.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS INSOMNIA OVERVIEW */}
        <section className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Condition Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What is Polysomnography?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong>Polysomnography</strong> is a detailed sleep test that records how your body behaves while you sleep. It tracks your brain waves, heartbeat, breathing pattern, oxygen levels, eye movement, and muscle activity throughout the night.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                 Unlike home sleep tests, <span className="font-bold text-[#0f172a]">a Level 1 sleep study</span> is done in a sleep lab under the direct supervision of a trained technician, which makes it the gold standard for diagnosing sleep disorders.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This test gives doctors a complete picture of your sleep cycle, so they can spot problems that a simple checkup cannot catch. If you have been feeling tired all day, snoring loudly, or waking up gasping for air, a <strong>Polysomnography</strong> test can help find the exact cause.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/sleep/insomnia-treatment.png"
                alt="Patient awake at night dealing with insomnia"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PRIMARY INDICATORS BLOCK */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                In Lab, Attended
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Why Choose a Level 1 Polysomnography?

              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A Level 1 sleep study is considered the most accurate type of test because a qualified technician stays with you throughout the night. This means:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { label: "1. Equipment", desc: "Any equipment issues are fixed immediately, so you get clean and reliable data" },
                  { label: "2. Technician", desc: "The technician can adjust your treatment (like CPAP settings) in real time if needed." },
                  { label: "3. The Stage", desc: "Every stage of your sleep, from light sleep to deep sleep to REM sleep, is carefully recorded" },
                  { label: "4. Patients", desc: "It is suitable for people with complex health conditions or other sleep disorders that home tests may miss" },
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-sm text-[#0f172a]">{item.label}</h4>
                    <p className="text-xs text-[#64748b] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-auto shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center lg:max-w-xs">
              <p className="text-sm font-medium text-[#334155] mb-4">
                This close supervision is why doctors like Dr. Manish Aggrawal recommend Level 1 Polysomnography for patients who need a precise and dependable diagnosis.
              </p>
              <BookAppointmentButton cta="Consult Doctor 🗓" />
            </div>
          </div>
        </section>

        {/* TYPES OF INSOMNIA TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Classifications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Sleep Disorders Diagnosed Through Polysomnography
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            This test is used to detect and confirm a wide range of sleep disorders, including:
          </p>
          <div className="overflow-x-auto border border-slate-100 rounded-2xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-bold text-[#0f172a] w-1/3">Type of Tests</th>
                  <th className="p-4 font-bold text-[#0f172a] w-2/3">What It Feels Like</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#334155]">
                {[
                  { title: "Obstructive Sleep Apnea (OSA)", desc: "Repeated pauses in breathing caused by a blocked airway" },
                  { title: "Central Sleep Apnea", desc: " A condition where the brain fails to send proper signals to the breathing muscles" },
                  { title: "Insomnia", desc: "Ongoing trouble falling or staying asleep." },
                  { title: "Narcolepsy", desc: "Sudden and uncontrollable episodes of falling asleep during the day." },
                  { title: "Restless Legs Syndrome (RLS)", desc: "An uncomfortable urge to move the legs, especially at night." },
                  { title: "Periodic Limb Movement Disorder", desc: " Repeated jerking or twitching of the limbs during sleep." },
                  { title: "REM Sleep Behaviour Disorder", desc: "Acting out vivid dreams physically while asleep." },
                  { title: "Parasomnias", desc: "Unusual behaviours during sleep, such as sleepwalking or night terrors." },
                  { title: "Snoring related breathing problems", desc: "That affect sleep quality." },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="p-4 font-semibold text-[#0f172a] whitespace-nowrap">{row.title}</td>
                    <td className="p-4 text-[#64748b] leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#64748b] italic">
If you or your family have noticed any of these symptoms, a Polysomnography test can help confirm the diagnosis and guide the right treatment plan.
          </p>
        </section>

        {/* SYMPTOMS: NIGHT VS DAY GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* NIGHT SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Nocturnal Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              What to Expect During Your Polysomnography Test
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
             Knowing what happens during the test can ease any worry you may have. Here is a simple breakdown:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "You will arrive at the sleep lab in the evening and settle into a comfortable, private room",
                "A technician will gently attach small sensors to your scalp, face, chest, and legs. These sensors do not hurt and simply record signals",
                "You will sleep as you normally would, while the equipment records your brain activity, breathing, oxygen levels, heart rate, and body movements",
                "The technician monitors everything from a nearby room and steps in only if needed",
                "In the morning, the sensors are removed and you are free to go about your day",
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

          {/* DAY SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              How to Prepare for Your Sleep Study
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              A few simple steps can help your test results come out more accurate:
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Poor nighttime sleep impacts your systemic function during waking hours through multiple physical and cognitive indicators:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Avoid caffeine and alcohol on the day of the test",
                "Wash your hair the night before, but skip oils, gels, or sprays",
                "Bring your regular night clothes and any bedtime items that help you relax",
                "Continue your usual medicines unless your doctor tells you otherwise",
                "Try to avoid daytime naps on the day of the test",
              ].map((symptom, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm text-[#334155] leading-relaxed">
                  <span className="h-5 w-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    !
                  </span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMMON CAUSES GRID */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Etiology & Triggers
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
           Is Polysomnography Safe?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
Yes. This test is painless and non invasive. The sensors only record information and do not send any electricity into your body. There are no needles, no radiation, and no major risks involved. Some people feel mild discomfort from the sensors or find it hard to sleep in a new place, but this does not usually affect the quality of the results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Psychological & Stress Factors", items: ["Work pressure, financial worries, family issues", "Anxiety, including specific anxiety about not being able to sleep", "Clinical depression (sleep disturbance is a major symptom)"] },
              { category: "Behavioral & Lifestyle Habits", items: ["Irregular sleep timings, long daytime naps, inconsistent routines", "Shift work, night shifts, or rotating shifts that disrupt your body clock", "Excess caffeine (tea, coffee, energy drinks) later in the day", "Alcohol use (helps sleep initially but severely disrupts later cycles)", "Mobile phone and screen use before bed (blue light delays sleep onset)"] },
              { category: "Medical & Respiratory Conditions", items: ["Chronic illnesses like diabetes, thyroid disorders, or acid reflux", "Obstructive Sleep Apnea (breathing pauses that repeatedly wake the brain)", "Respiratory diseases like asthma or COPD making nighttime breathing uncomfortable", "Medications for blood pressure, asthma, or depression that interfere with sleep"] },
            ].map((section, idx) => (
              <div key={idx} className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-sm text-[#0f172a] border-b border-slate-200 pb-2">{section.category}</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#64748b]">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 items-start">
                      <span className="text-[#1fa8e8] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* RISK FACTORS & SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Best Doctor for Polysomnography
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                Why Choose Dr. Manish Aggrawal for Your Polysomnography Test?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
With years of experience in diagnosing and treating sleep disorders, Dr. Manish Aggrawal offers a patient friendly approach to every sleep study. From the first consultation to the final report, patients receive clear explanations, a comfortable testing environment, and a personalised treatment plan based on their results.If poor sleep is affecting your health, mood, or daily life, do not wait. A Level 1 Polysomnography test can uncover the root cause and set you on the path to better sleep.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                {["Age above 60 years", "Female gender (pregnancy/menopause)", "History of anxiety or depression", "Irregular or rotating work shifts", "Chronic conditions (diabetes, heart disease)", "High-stress lifestyle patterns", "Family history of sleep problems"].map((factor, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1fa8e8]" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          
          <div className="w-full lg:w-[40%] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Consult Dr. Manish Aggrawal Now
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6 leading-relaxed">
              If you've been lying awake at night, waking up exhausted, or relying heavily on caffeine and naps to get through the day, it's worth getting checked. Insomnia is highly treatable, and early diagnosis makes resolution easier.
            </p>
            <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
          </div>
        </section>

        {/* FAQ ACCORDION PANEL */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist, for an accurate clinical diagnosis and personalized treatment plan tailored to your medical history.
        </div>

        {/* CLOSING CONVERSION BAR */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Restore Your Nighttime Recovery
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Break the cycle of sleepless nights and daytime exhaustion. Get a personalized, medical sleep management plan from Dr. Manish Aggarwal in Delhi.
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
