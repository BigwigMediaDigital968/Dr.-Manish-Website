import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is hypersomnia?",
    answer:
      "Hypersomnia is excessive daytime sleepiness that occurs even after what should be enough sleep at night. It's often linked to poor sleep quality caused by an underlying condition.",
  },
  {
    question: "What are the common symptoms of hypersomnia?",
    answer:
      "Common symptoms include excessive daytime sleepiness, loud snoring, unrefreshing sleep, morning headaches, and difficulty concentrating.",
  },
  {
    question: "What causes hypersomnia?",
    answer:
      "Common causes include sleep-related breathing disorders such as Obstructive Sleep Apnea (OSA), Upper Airway Resistance Syndrome (UARS), and Obesity Hypoventilation Syndrome (OHS).",
  },
  {
    question: "Can sleep apnea cause hypersomnia?",
    answer:
      "Yes—Obstructive Sleep Apnea is one of the most common causes of excessive daytime sleepiness, as it repeatedly disrupts and fragments sleep throughout the night.",
  },
  {
    question: "What is idiopathic hypersomnia?",
    answer:
      "Idiopathic hypersomnia is excessive daytime sleepiness with no identifiable underlying cause even after thorough clinical evaluation and standard sleep studies. It may require further specialised sleep testing.",
  },
  {
    question: "How is hypersomnia diagnosed?",
    answer:
      "It is typically diagnosed through a detailed clinical sleep history, standardized questionnaires like the Epworth Sleepiness Scale, and an overnight sleep study (polysomnography).",
  },
  {
    question: "What is the treatment for hypersomnia caused by sleep apnea?",
    answer:
      "Treatment usually involves CPAP or BiPAP therapy, targeted weight management, positional therapy, and structured lifestyle changes based on your individual diagnostic data.",
  },
  {
    question: "Are there medicines for hypersomnia?",
    answer:
      "Wake-promoting medications may be considered in specific cases as part of an overall treatment strategy, but only after a complete clinical evaluation and dependent on the true underlying cause.",
  },
  {
    question: "What is narcolepsy, and how is it different from hypersomnia due to sleep apnea?",
    answer:
      "Narcolepsy is a central disorder of hypersomnolence originating from how the brain regulates sleep-wake boundaries, whereas hypersomnia from sleep apnea is driven by physical, repeated airway blockages and breathing disruptions during the night.",
  },
  {
    question: "When should I see a pulmonologist for excessive daytime sleepiness?",
    answer:
      "You should see a pulmonologist if your daytime sleepiness lasts for several weeks, occurs alongside loud snoring or witnessed gasping/breathing pauses, or actively compromises your safety while working or driving.",
  },
];

export default function HypersomniaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Hypersomnia: Excessive Daytime Sleepiness, Explained"
        description="You slept a full night, but by mid-morning you're fighting to stay awake—in meetings, in traffic, even mid-conversation. This is hypersomnia, and it's often a sign the body isn't getting truly restful sleep at night, most commonly because of an underlying breathing problem. Dr. Manish Aggarwal, a Pulmonologist and Sleep Medicine Specialist, explains hypersomnia from a lung and sleep-breathing perspective—how it develops, how it's diagnosed, and how it's treated."
        ctaText="Book an Appointment"
        backgroundImage="/sleep/hypersomnia-treatment.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS HYPERSOMNIA OVERVIEW */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Airway & Sleep Dynamics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Hypersomnia?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Hypersomnia means feeling excessively sleepy during the day despite getting what should be enough hours of sleep at night. It is fundamentally different from normal daytime tiredness—people with hypersomnia may experience irresistible sleep attacks and fall asleep during active work, conversations, or even while driving.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                In many clinical cases, hypersomnia isn't a stand-alone problem. It happens because an underlying issue is actively disturbing sleep quality at night without the person realising it—most commonly, a hidden <span className="font-bold text-[#0f172a]">breathing disturbance during sleep</span>. As a pulmonologist, <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span> focuses on identifying and correcting these nocturnal respiratory causes to restore complete daytime alertness.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/sleep/hypersomnia-treatment.png"
                alt="Patient dozing off at a desk due to excessive daytime sleepiness"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PRIMARY INDICATORS SCREEN */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Symptom Profiling
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Daytime Sleepiness Is Usually the First Sign
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When excessive sleepiness starts impacting your routine, evaluating a few specific details can help determine if a sleep-breathing problem is fragmenting your nights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "1. Timing & Frequency", desc: "Evaluating if it occurs occasionally under high fatigue or consistently most days of the week." },
                  { title: "2. Airway Indicators", desc: "Checking if your sleep is paired with loud, chronic snoring or witnessed breathing pauses." },
                  { title: "3. Waking Quality", desc: "Noticing if you wake up unrefreshed, accompanied by morning headaches or an intensely dry mouth." },
                  { title: "4. Cognitive & Safety Toll", desc: "Assessing how severely the fatigue compromises your focus, workplace productivity, or driving safety." },
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-sm text-[#0f172a]">{item.title}</h4>
                    <p className="text-xs text-[#64748b] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-auto shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center lg:max-w-xs">
              <p className="text-sm font-medium text-[#334155] mb-4">
                Not sure what your daytime sleepiness means? Talk to Dr. Manish Aggarwal today.
              </p>
              <BookAppointmentButton cta="Consult Doctor 🗓" />
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: RESPIRATORY CAUSES */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Etiology of Hypersomnolence
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Respiratory Causes of Hypersomnia
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Several breathing-related sleep disorders can ruin sleep architecture at night. Because these mini-arousals don't always wake you up fully, you might remain completely unaware that your breathing is faltering—leaving you with unexplained, deep fatigue the next morning.
          </p>
          <div className="space-y-4">
            {[
              { name: "Obstructive Sleep Apnea (OSA)", desc: "Repeated mechanical blocking of the upper airway during sleep. This causes brief micro-awakenings to restart breathing, heavily fragmenting sleep quality. It remains one of the primary drivers of severe daytime hypersomnia." },
              { name: "Upper Airway Resistance Syndrome (UARS)", desc: "A pronounced narrowing of the airway that severely increases the physical effort required to breathe at night. Even without full airway closure, it causes micro-arousals that disrupt deep sleep." },
              { name: "Obesity Hypoventilation Syndrome (OHS)", desc: "A condition found in some individuals with obesity, characterized by poor, shallow breathing efficiency that drops blood oxygen levels and stresses the brain during sleep cycles." },
              { name: "Sleep-Related Hypoventilation", desc: "A medical state where breathing becomes generalized as too shallow or slow during sleep, leading to insufficient carbon dioxide clearance and heavily disturbed rest." },
              { name: "The Compounding Factor: Obesity", desc: "Excess weight independently drives physical airway narrowing, chest wall restriction, and reduced lung compliance overnight, compounding and aggravating existing respiratory sleep conditions." },
            ].map((condition, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="font-bold text-[#0f172a] sm:w-1/3 shrink-0 text-sm sm:text-base">{condition.name}</span>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed sm:w-2/3">{condition.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMMON SYMPTOMS LIST */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Common Symptoms of Hypersomnia
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              When daytime sleepiness stems from an underlying medical or respiratory sleep disorder, patients typically present with a cluster of night and day indicators:
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Excessive daytime sleepiness",
                "Feeling sleepy despite adequate hours",
                "Loud, regular nighttime snoring",
                "Witnessed breathing pauses or gasps",
                "Gasping or choking sensations",
                "Waking up feeling unrefreshed",
                "Frequent morning headaches",
                "Dry mouth upon waking up",
                "Impaired daytime concentration",
                "Persistent general fatigue",
                "Reduced cognitive alertness",
                "Poor performance while working/driving",
              ].map((symptom, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-[#334155] leading-relaxed">
                  <span className="text-[#1fa8e8] font-bold shrink-0">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONDITIONS TREATED */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Specialized Scope
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                Conditions a Pulmonologist Can Diagnose & Treat
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                As a specialized Pulmonologist and Sleep Medicine Consultant, Dr. Manish Aggarwal offers advanced expertise in assessing the clear overlap between lung mechanics and sleep health:
              </p>
              <ul className="space-y-2.5 mt-2">
                {["Obstructive Sleep Apnea (OSA)", "Upper Airway Resistance Syndrome (UARS)", "Obesity Hypoventilation Syndrome (OHS)", "Sleep-related hypoventilation disorders", "Chronic respiratory conditions (COPD/Asthma overlap) affecting sleep"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#334155] font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#1fa8e8] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-[#64748b] italic mt-6 border-t border-slate-200/60 pt-4">
              These respiratory sleep anomalies represent the most common treatable reasons behind unexplained, dangerous daytime drowsiness.
            </p>
          </div>
        </section>

        {/* UNDERSTANDING NARCOLEPSY PANEL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md inline-block font-semibold">
            Differential Diagnosis
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
            Understanding Narcolepsy — When It Isn't a Breathing Problem
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748b] leading-relaxed">
            Excessive daytime sleepiness doesn't always originate in the airway. <span className="font-semibold text-[#0f172a]">Narcolepsy</span> is classified as a central disorder of hypersomnolence—meaning the core physiological malfunction stems from how the brain regulates sleep-wake architecture, completely separate from mechanical breathing patterns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-bold text-sm text-[#0f172a] mb-2">Key Core Symptoms</h4>
              <ul className="space-y-1.5 text-xs text-[#64748b]">
                <li>• Sudden, overwhelming daytime sleep urges</li>
                <li>• Sudden muscle weakness (cataplexy) from emotions</li>
                <li>• Vivid, dream-like hallucinations when waking/sleeping</li>
                <li>• Sleep paralysis episodes or highly disrupted night sleep</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-bold text-sm text-[#0f172a] mb-2">Neurological Causes</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Narcolepsy is generally linked to an autoimmune or structural loss of hypocretin (orexin)—a vital neurotransmitter responsible for stabilizing wakefulness. It is non-respiratory.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-bold text-sm text-[#0f172a] mb-2">Diagnosis & Testing</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Requires specialized diagnostic testing beyond a normal sleep study, such as a Multiple Sleep Latency Test (MSLT) alongside meticulous neurology-coordinated assessments.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#64748b] leading-relaxed border-l-2 border-purple-200 pl-3 italic">
            Because central hypersomnolence needs multi-disciplinary expertise, Dr. Manish Aggarwal performs the comprehensive baseline medical screening and seamlessly coordinates care pathways with neurology when central narcolepsy is suspected.
          </p>
        </section>

        {/* SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Risk & Severity Guardrails
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              When Should You See a Pulmonologist?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Occasional tiredness after a single late night is perfectly normal. However, you should schedule a dedicated sleep-breathing evaluation if you check any of the following warning indicators:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Excessive daytime drowsiness or micro-sleeps lasting several weeks",
                "Loud, disruptive snoring accompanied by witnessed breathing pauses",
                "Waking up suddenly with a gasping, choking, or suffocating sensation",
                "Feeling fundamentally unrefreshed despite adequate hours in bed",
                "Experiencing persistent morning headaches or extreme dry mouth on waking",
                "Sleepiness that compromises your professional work, concentration, or safety while driving",
              ].map((warning, i) => (
                <div key={i} className="flex gap-3 items-start bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <span className="text-amber-400 font-bold text-sm shrink-0">⚠</span>
                  <span className="text-sm text-slate-200 leading-relaxed">{warning}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center sm:text-left">
              <BookAppointmentButton cta="Get Evaluated with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* CLINICAL CARE - DIAGNOSIS PROTOCOLS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Diagnostic Pipeline
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            How Hypersomnia Is Diagnosed
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Isolating the accurate trigger behind hypersomnolence involves a methodical, objective clinical sequence to track oxygenation and neural mapping:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "Detailed History", desc: "Comprehensive mapping of your long-term sleep schedules, snoring frequency, and daytime cognitive dips." },
              { step: "Epworth Scale", desc: "Standardized clinical questionnaire measuring your exact statistical likelihood of dozing off during daytime tasks." },
              { step: "Polysomnography", desc: "An in-depth, overnight sleep study tracking breathing cycles, oxygen trends, brainwaves, and physical effort." },
              { step: "Home Testing", desc: "A simplified sleep apnea monitoring system deployed comfortably at home for select, eligible clinical profiles." },
              { step: "Pulse Oximetry", desc: "Continuous mapping of systemic peripheral blood oxygen levels during all nighttime sleep hours." },
              { step: "Pulmonary Testing", desc: "Targeted lung function studies (spirometry) if underlying restrictive or chronic airway disease is suspected." },
              { step: "Sleep Diaries", desc: "Patient-logged trackers monitoring actual sleep boundaries and environmental disruptions over 1-2 weeks." },
              { step: "Physical Airway Exam", desc: "Thorough inspection of the upper oral cavity, palate, and neck circumference to catch anatomical narrowing." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                <span className="text-xs font-bold text-[#1fa8e8] block mb-1">Method {idx + 1}</span>
                <h4 className="font-bold text-sm text-[#0f172a]">{item.step}</h4>
                <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLINICAL CARE - TREATMENT INTERVENTIONS */}
        <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Therapeutic Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Hypersomnia Treatment Approach
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Once testing highlights the root breathing anomaly, medical interventions prioritize stabilizing the nighttime airway. This ensures uninterrupted oxygenation, resolving daytime sleepiness:
            </p>
            <div className="space-y-4 pt-2">
              {[
                { title: "CPAP Therapy (Continuous Positive Airway Pressure)", desc: "The clinical gold-standard for OSA. Delivers constant, gentle air pressure via a tailored mask to keep the soft tissue of the airway from collapsing." },
                { title: "BiPAP Therapy (Bilevel Positive Airway Pressure)", desc: "Utilizes dual pressure settings (higher on inhalation, lower on exhalation) for complex profiles needing extra mechanical breathing assistance, like OHS." },
                { title: "Airway Weight Management", desc: "Supervised weight reduction strategies to substantially lower parapharyngeal fat deposits, instantly reducing airway collapsing forces." },
                { title: "Positional Therapy & Airway Support", desc: "Using targeted structural sleep positioners to prevent tongue fallback, coupled with aggressive treatment of any underlying lung conditions." },
              ].map((tx, idx) => (
                <div key={idx} className="border-l-2 border-[#1fa8e8] pl-4">
                  <h4 className="font-bold text-sm sm:text-base text-[#0f172a]">{tx.title}</h4>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-0.5 leading-relaxed">{tx.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-100 mt-4">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Regarding Hypersomnia Medications:</strong> Central wake-promoting drugs might be integrated into a comprehensive care model in specific instances. However, there is no generic solution; prescription relies entirely on the precise diagnostic profile.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[40%] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-4">Synergistic Lifestyle Adjustments</h3>
              <ul className="space-y-3">
                {[
                  "Maintain a strict, identical sleep and wake schedule daily.",
                  "Eliminate alcohol and sedatives close to bed (they relax airway muscles).",
                  "Prioritize side sleeping over back sleeping if clinically advised.",
                  "Avoid consuming heavy meals within 3 hours of your bedtime routine.",
                  "Optimize sleep hygiene by keeping bedrooms cool, pitch-dark, and quiet.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-[#334155] leading-relaxed">
                    <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 text-center">
              <p className="text-xs text-[#64748b] mb-4">Persistent sleepiness is highly correctable once the breathing obstacle is pinpointed.</p>
              <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE PROVIDER BLOCK */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Clinical Leadership
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for Sleep Care?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              "Dual qualification as a Pulmonologist and Sleep Specialist with deep expertise in respiratory sleep biology.",
              "Strictly evidence-based, data-driven approach utilizing advanced, precise diagnostic tools.",
              "Seamless personal integration and ongoing machine titrations for CPAP/BiPAP systems.",
              "Dedicated, compassionate long-term tracking to modify pressures and support adherence over time.",
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs flex gap-3">
                <span className="text-[#1fa8e8] font-bold text-sm">0{idx + 1}.</span>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION PANEL */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep Medicine Specialist, for accurate clinical diagnosis and personalized treatment options.
        </div>

        {/* CLOSING CONVERSION BAR */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Don't Ignore Persistent Daytime Sleepiness
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Protect your daily cognitive performance and safety. Uncover the underlying sleep-breathing block with expert clinical management in Delhi.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}