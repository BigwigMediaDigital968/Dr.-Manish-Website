import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "What is insomnia?",
    answer:
      "Insomnia is a sleep disorder involving difficulty falling asleep, staying asleep, or waking too early and being unable to fall back asleep even with enough time and opportunity to sleep.",
  },
  {
    question: "Is insomnia a disease or just a symptom?",
    answer:
      "It can be either. Insomnia can occur on its own as a primary disorder, or as a symptom of another condition like anxiety, depression, or a medical illness. When persistent, it's treated as a condition requiring proper care.",
  },
  {
    question: "What is chronic insomnia?",
    answer:
      "Chronic insomnia is defined as sleep difficulty occurring at least three nights a week for three months or more.",
  },
  {
    question: "What are the main causes of insomnia?",
    answer:
      "Stress, anxiety, depression, poor sleep habits, shift work, caffeine or alcohol use, screen time before bed, chronic illness, certain medications, and underlying sleep disorders like obstructive sleep apnea. It's usually a combination rather than one single cause.",
  },
  {
    question: "What are the common symptoms of insomnia?",
    answer:
      "Common symptoms include difficulty sleeping, frequent night waking, early waking, daytime fatigue, poor concentration, irritability, and mood changes.",
  },
  {
    question: "What are the different types of insomnia?",
    answer:
      "The primary types include acute, chronic, sleep-onset (trouble falling asleep), sleep-maintenance (trouble staying asleep), early-morning-awakening, and comorbid (linked to another condition). Many people experience more than one type at once.",
  },
  {
    question: "Is pregnancy insomnia normal?",
    answer:
      "Yes, it's common due to hormonal changes and physical discomfort. If it's severely affecting rest, it should be discussed with a doctor to find safe management strategies.",
  },
  {
    question: "What is the first-line treatment for insomnia?",
    answer:
      "Cognitive Behavioural Therapy for Insomnia (CBT-I) is the recognized first-line treatment because it addresses the behavioral and cognitive root causes without the risks of long-term medicine use.",
  },
  {
    question: "Can insomnia be treated without sleeping pills?",
    answer:
      "Yes, in many cases. CBT-I, sleep hygiene changes, stress management, and treating underlying medical conditions are highly effective alone, or they can be paired alongside short-term medication when clinically needed.",
  },
  {
    question: "When should I see a doctor for insomnia?",
    answer:
      "You should consult a specialist if sleep problems last more than a few weeks, significantly affect your daily functioning, or occur alongside loud snoring, gasping, anxiety, or depression.",
  },
];

export default function InsomniaTreatmentPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Insomnia Treatment: Causes, Symptoms & What It Really Means"
        description="It's 2 a.m. and your mind won't switch off. Or you fall asleep fine, then wake at 3 a.m. and lie there until morning. Almost everyone has a bad night now and then before an exam, a big meeting, a stressful week. That's normal. But when poor sleep continues night after night, for weeks or months, it's no longer 'just stress.' Dr. Manish Aggarwal, a pulmonologist and sleep specialist, explains what insomnia is, why it happens, and how it's treated so you can make an informed decision about your sleep health."
        ctaText="Book an Appointment"
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
                What Is Insomnia?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Insomnia means having trouble falling asleep, staying asleep, or waking up too early and being unable to fall back asleep—even when you have enough time and a suitable environment to sleep.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Everyone experiences this occasionally. It becomes <span className="font-bold text-[#0f172a]">Insomnia Disorder</span> when the pattern happens at least <span className="font-semibold text-[#0f172a]">three nights a week</span>, continues for <span className="font-semibold text-[#0f172a]">three months or longer</span>, and starts to affect how you function during the day—disrupting your energy, mood, focus, or work performance.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This is different from a few rough nights caused by travel, temporary illness, or an acute stressful event, which usually resolve on their own. Insomnia disorder tends to build on itself: poor sleep causes stress about sleep, which makes sleep even harder—which is exactly why early professional evaluation matters.
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
                Tracking Sleep Quality
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Trouble Sleeping Is Usually the First Sign
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When sleep trouble shows up, paying attention to a few clinical details helps a doctor understand exactly what is happening in your sleep cycles:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { label: "1. Frequency Dynamics", desc: "Tracking if it happens a few scattered nights, or most nights of the week." },
                  { label: "2. Disruption Type", desc: "Identifying whether it is trouble falling asleep, staying asleep, or waking too early." },
                  { label: "3. Chronicity & Duration", desc: "Pinpointing how long it has been going on—days, weeks, or consecutive months." },
                  { label: "4. Associated Symptoms", desc: "Checking for loud snoring, breathing pauses, daytime anxiety, or low mood." },
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
                Not sure what your sleep pattern means? Talk to Dr. Manish Aggarwal today.
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
            Types of Insomnia Disorders
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Not all insomnia looks the same. Some people struggle to fall asleep, others fall asleep fine but wake up repeatedly, and some wake up far too early. Understanding which type you have helps guide the right treatment pathway.
          </p>
          <div className="overflow-x-auto border border-slate-100 rounded-2xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-bold text-[#0f172a] w-1/3">Type of Insomnia</th>
                  <th className="p-4 font-bold text-[#0f172a] w-2/3">What It Feels Like</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#334155]">
                {[
                  { title: "Acute Insomnia", desc: "Short-term sleep trouble, usually linked to a specific stressor (exams, a family issue, travel). Often resolves within days to a few weeks." },
                  { title: "Chronic Insomnia", desc: "Sleep difficulty occurring at least 3 nights a week for 3 months or more, often without an obvious single cause." },
                  { title: "Sleep-Onset Insomnia", desc: "Difficulty falling asleep at the start of the night, even when you feel tired." },
                  { title: "Sleep-Maintenance Insomnia", desc: "Falling asleep without much trouble, but waking up multiple times during the night and struggling to fall back asleep." },
                  { title: "Early Morning Awakening Insomnia", desc: "Waking up much earlier than planned (for example, 4 a.m.) and being unable to fall back asleep, even though you're still tired." },
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
            Many patients experience more than one type at the same time—for instance, taking long to fall asleep and waking up frequently at night. If these patterns sound familiar, a proper sleep evaluation can help identify exactly what you are dealing with.
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
              What Your Symptoms Tell You: At Night
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Insomnia isn't only about total lack of sleep; it displays distinct disturbances during the night hours:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Lying awake for hours despite feeling completely exhausted",
                "Waking up several times and struggling to fall back asleep",
                "Waking up permanently 2–3 hours before your scheduled alarm",
                "Sleeping light or un-refreshingly, feeling like you never truly rested",
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
              Diurnal Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              What Your Symptoms Tell You: During the Day
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Poor nighttime sleep impacts your systemic function during waking hours through multiple physical and cognitive indicators:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Constant tiredness or fatigue even after spending 7–8 hours in bed",
                "Difficulty concentrating, noticeable forgetfulness, or mental 'fog'",
                "Increased irritability, mood swings, or growing anxiety around bedtime",
                "Heavy reliance on daytime tea, coffee, energy drinks, or frequent naps",
                "Making more mistakes, experiencing slips in focus, or reduced work output",
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
            Common Causes of Insomnia
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Insomnia rarely has just one cause. It is often a complex combination of behavioral habits, underlying health conditions, and life circumstances working together. This is a vital reason to see a sleep specialist rather than simply reaching for a sleeping pill—if an undiagnosed condition like sleep apnea or a thyroid problem is present, treating only the symptom of "not sleeping" won't fix the real root issue.
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
                Predisposing Factors
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                Risk Factors for Insomnia
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Having one or more risk factors doesn't mean insomnia is guaranteed—it simply means extra attention to structured sleep habits helps protect your health:
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

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Severity Assessment
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                Is Poor Sleep Always a Cause for Concern?
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Not always. A rough night before a big day is normal. However, early evaluation prevents acute insomnia from turning into a chronic problem. You should see a specialist if you notice:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 font-bold">⚠</span> <span>Sleep problems lasting more than 3–4 weeks consecutively</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 font-bold">⚠</span> <span>Daytime fatigue severely affecting work, driving safety, or daily tasks</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 font-bold">⚠</span> <span>Loud snoring or breathing pauses during sleep (possible sleep apnea)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 font-bold">⚠</span> <span>Insomnia occurring alongside anxiety, depression, or severe mood changes</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 font-bold">⚠</span> <span>Pregnancy insomnia severely impacting systemic rest and well-being</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 font-bold">⚠</span> <span>Relying regularly on over-the-counter sleep aids several nights in a row</span>
                </li>
              </ul>
              <div className="mt-6 text-center sm:text-left">
                <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL CARE & METHODOLOGY */}
        <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Care Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              How Dr. Manish Can Help
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Dr. Manish Aggarwal is a pulmonologist and sleep specialist experienced in diagnosing and treating insomnia, sleep apnea, and related breathing conditions during sleep. During a comprehensive consultation, he maps out your sleep architecture using a thorough diagnostic workup:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#334155]">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>Detailed Sleep History:</strong> Reviewing patterns, daily lifestyle, stress levels, and medicines.</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>Structured Sleep Diary:</strong> Tracking precise sleep and wake times over one to two weeks.</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>Clinical Sleep Questionnaires:</strong> Standardized diagnostic tools assessing quality and daytime lag.</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>Sleep Study (Polysomnography):</strong> Overnight test monitoring breathing, brain activity, and oxygen if apnea is suspected.</div>
            </div>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed pt-2">
              Treatment is personalized, logical, and step-by-step:
            </p>
            <div className="space-y-3 pl-2">
              <p className="text-sm text-[#334155] leading-relaxed">
                <strong className="text-[#0f172a]">CBT-I (Cognitive Behavioural Therapy for Insomnia):</strong> The gold-standard, first-line, evidence-based treatment. It includes sleep restriction therapy, stimulus control, cognitive restructuring, and relaxation techniques. Unlike sleeping pills, CBT-I treats the actual behavioral root cause, has longer-lasting benefits, and carries zero risk of physical dependency.
              </p>
              <p className="text-sm text-[#334155] leading-relaxed">
                <strong className="text-[#0f172a]">Sleep Hygiene & Underlying Support:</strong> Optimizing caffeine timings, screen habits, and bedtime environments while managing comorbid issues like sleep apnea, acid reflux, or thyroid disorders directly. Medications are reserved only when clinically appropriate, used for the shortest necessary duration under medical supervision.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-[40%] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Don't Ignore Ongoing Sleep Trouble
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