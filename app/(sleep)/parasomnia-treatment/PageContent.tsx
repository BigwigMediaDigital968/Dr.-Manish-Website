import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is parasomnia sleep disorder?",
    answer:
      "Parasomnia is a sleep disorder that causes unusual behaviours, movements, or emotions during sleep—such as sleepwalking, talking, or acting out dreams—because the brain is partly asleep and partly awake at the same time.",
  },
  {
    question: "Why does parasomnia occur?",
    answer:
      "It occurs when the brain doesn't transition smoothly between sleep stages, often influenced by factors like sleep deprivation, stress, or an underlying sleep disorder such as sleep apnea.",
  },
  {
    question: "What are the causes of parasomnia?",
    answer:
      "Common causes include sleep deprivation, stress, anxiety, alcohol use, certain medications, sleep apnea, neurological conditions, genetics, and irregular sleep schedules.",
  },
  {
    question: "Are parasomnias dangerous?",
    answer:
      "Most are not, particularly in children, where many types resolve naturally with age. However, some—especially those involving physical movement like sleepwalking or REM Sleep Behavior Disorder—carry a risk of injury and are worth evaluating if episodes are frequent.",
  },
  {
    question: "Is it normal for children to sleepwalk or have night terrors?",
    answer:
      "Yes, these are fairly common in childhood and often resolve on their own with age. Evaluation is generally only needed if episodes are frequent, dangerous, or continue into adolescence and beyond.",
  },
  {
    question: "Can stress cause parasomnia?",
    answer:
      "Yes. Stress and anxiety are common triggers for several types, including nightmare disorder and confusional arousals, and can also worsen the frequency of sleepwalking episodes.",
  },
  {
    question: "Is REM Sleep Behavior Disorder serious?",
    answer:
      "It's generally recommended for evaluation, both due to the risk of injury during episodes and its recognised association with certain neurological conditions, which makes proper diagnosis and follow-up particularly important.",
  },
  {
    question: "Do parasomnias need a sleep study?",
    answer:
      "Not always, but a video polysomnography is often recommended when the type is unclear, episodes are frequent or risky, or an underlying condition like sleep apnea is suspected.",
  },
  {
    question: "How is parasomnia treated?",
    answer:
      "Treatment includes sleep hygiene guidance, safety measures, therapies such as Imagery Rehearsal Therapy and relaxation training, and treating any underlying sleep disorder. CPAP therapy may help if sleep apnea is involved, and medication is used only when clinically appropriate.",
  },
  {
    question: "Can parasomnias be cured completely?",
    answer:
      "Many improve significantly, or resolve entirely, with the right combination of lifestyle changes, safety measures, and treatment of any underlying cause. Outcomes vary by type and individual factors, which is why a personalised evaluation matters.",
  },
  {
    question: "Is narcolepsy a parasomnia?",
    answer:
      "No. Narcolepsy belongs to a different category called Central Disorders of Hypersomnolence, which mainly involves excessive daytime sleepiness rather than abnormal behaviours during sleep.",
  },
];

export default function ParasomniaDisorderPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Parasomnia Disorder: When Sleep and Wakefulness Overlap"
        description="Sleepwalking, screaming during sleep, acting out dreams, or waking up confused, disoriented, and slow to respond aren't just 'quirky' sleep habits — they can be symptoms of parasomnia, a group of sleep disorders where the brain doesn't fully separate sleep from wakefulness. Left unaddressed, parasomnia can affect sleep quality and disturb family members too. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, helps patients and families understand what's happening during sleep and provides an evidence-based path to better, safer nights."
        ctaText="Book an Appointment"
        backgroundImage="/sleep/parasomnia-treatment.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* AIRWAY/OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Neurological Sleep Boundaries
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Parasomnia?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Parasomnia is a sleep disorder involving unusual or unwanted behaviours, movements, emotions, or perceptions that occur while falling asleep, during sleep, or while waking up. It's different from normal sleep, where the body and brain are meant to be at rest.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Sleep isn't simply "on" or "off"—it moves through stages, broadly grouped into two categories: <span className="font-semibold text-[#0f172a]">NREM sleep</span> (the deeper stages, usually in the first half of the night) and <span className="font-semibold text-[#0f172a]">REM sleep</span> (the stage where most vivid dreaming happens, usually more common in the second half of the night). 
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Parasomnia episodes happen because the brain doesn't cleanly transition between these stages, or between sleep and wakefulness—part of the brain remains asleep while another part becomes partially active. This "in-between" state is why a person may sleepwalk, talk, scream, or even eat without being fully conscious of it.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-slate-200/60 rounded-xl shadow-2xs">
                  <h4 className="font-bold text-[#0f172a] text-sm">NREM Parasomnia</h4>
                  <p className="text-xs text-[#64748b] mt-1">Includes sleepwalking, night terrors, and confusional arousals, usually arising during the first half of the night.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200/60 rounded-xl shadow-2xs">
                  <h4 className="font-bold text-[#0f172a] text-sm">REM Parasomnia</h4>
                  <p className="text-xs text-[#64748b] mt-1">Includes nightmare disorder and REM Sleep Behavior Disorder, usually appearing during the second half of the night.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/sleep/parasomnia-treatment.png"
                alt="Person sitting up disoriented in bed during a parasomnia episode"
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
                Episode Profiling
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                What to Pay Attention To
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When unusual sleep behaviours show up, tracking a few key clinical details helps a doctor pinpoint the transition breakdown occurring within the brain:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { label: "1. Event Frequency", desc: "Evaluating how often the episodes occur—whether it's a rare one-off night or a recurring pattern." },
                  { label: "2. Temporal Timing", desc: "Noticing which sleep stage they seem linked to—early night (NREM) or later, dream-heavy sleep (REM)." },
                  { label: "3. Safety Risk Profile", desc: "Checking whether there is any risk of physical injury to the person themselves or a bed partner." },
                  { label: "4. Witness Observations", desc: "Gathering what family members or a bed partner have noticed that the person doesn't remember." },
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
                Not sure what your sleep behaviour means? Talk to Dr. Manish Aggarwal today.
              </p>
              <BookAppointmentButton cta="Consult Doctor 🗓" />
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: TYPES OF PARASOMNIA */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Classifications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Types of Parasomnia Disorders
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Parasomnia isn't a single condition—it's a diverse group of distinct disorders, each presenting with its own physiological pattern, typical age group, and clinical symptoms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Sleepwalking (Somnambulism)",
                desc: "Getting out of bed and walking or performing complex activities while still in deep NREM sleep. The person isn't consciously aware, has open yet vacant eyes, and usually carries no memory of it afterward. Often triggered by stress or sleep deprivation.",
              },
              {
                title: "Night Terrors (Sleep Terrors)",
                desc: "Sudden episodes of intense vocalizations and physiological fear—screaming, a racing heart, profuse sweating—during deep NREM sleep. The individual remains largely unresponsive to physical comfort and holds zero memory of the event the next day.",
              },
              {
                title: "REM Sleep Behavior Disorder (RBD)",
                desc: "A failure of the normal temporary muscle paralysis that occurs during REM sleep. Because the paralysis mechanism fails, individuals physically act out vivid dream content, sometimes forcefully enough to injure themselves or a bed partner.",
              },
              {
                title: "Nightmare Disorder",
                desc: "Frequent, vivid, highly distressing dreams that repeatedly disrupt sleep architecture, cause severe waking distress, or create an intense fear of going to sleep. This stands apart from standard occasional nightmares.",
              },
              {
                title: "Sleep Talking (Somniloquy)",
                desc: "Speaking aloud during sleep, ranging from simple unformed sounds to coherent full sentences. It is extremely common, occurs across all healthy profiles, and rarely requires independent clinical treatment.",
              },
              {
                title: "Sleep Paralysis",
                desc: "A brief, terrifying inability to move or speak while falling asleep or waking up. Often accompanied by a false sense of presence or chest pressure, it usually resolves spontaneously within seconds or minutes.",
              },
              {
                title: "Confusional Arousals",
                desc: "Waking up partially from deep sleep while appearing completely disoriented or confused. Features slow speech, blunted responses, and a high likelihood of returning to sleep with total amnesia of the arousal.",
              },
              {
                title: "Sleep-Related Eating Disorder",
                desc: "Compulsive eating or drinking during sleep with partial or no conscious awareness. Often involves consuming unusual food combinations or risking self-injury while operating kitchen appliances in the dark.",
              },
            ].map((type, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:border-[#1fa8e8]/30 transition-colors duration-200">
                <h4 className="font-bold text-sm sm:text-base text-[#0f172a] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1fa8e8]" />
                  {type.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYMPTOMS & CAUSES GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Symptoms of Parasomnia
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Symptoms vary significantly based on which stage transitions are failing, but the primary motor and cognitive signs include:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Sleepwalking or wandering around the house while asleep",
                "Vocalizing or talking coherently during sleep",
                "Physically acting out dreams (kicking, punching, hitting)",
                "Abruptly screaming, crying out, or thrashing during deep sleep",
                "Sudden violent or erratic movements while asleep",
                "Pronounced confusion or disorientation immediately after waking",
                "Recurrent intense night terrors, especially in children",
                "Nocturnal eating or drinking with zero memory the next morning",
              ].map((symptom, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-[#334155] leading-relaxed">
                  <span className="text-[#1fa8e8] font-bold shrink-0">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CAUSES & TRIGGERS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Etiology & Triggers
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Common Causes & Triggers
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Parasomnia rarely has one standalone cause—it develops from a combination of physiological triggers that prevent the brain from seamlessly separating sleep stages:
            </p>
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#64748b]">
              <p><strong className="text-[#0f172a]">Sleep Deprivation:</strong> Forces the body into prolonged deep NREM rebound sleep, heavily rising the chances of sleepwalking or night terrors.</p>
              <p><strong className="text-[#0f172a]">Stress & Anxiety:</strong> Keeps the waking mind hyper-aroused, preventing smooth entry into quiet sleep stages and triggering nightmare disorders.</p>
              <p><strong className="text-[#0f172a]">Obstructive Sleep Apnea (OSA):</strong> Repeated breathing pauses cause frequent brain awakenings. This severe fragmentation triggers confusional arousals and complex sleepwalking.</p>
              <p><strong className="text-[#0f172a]">Alcohol & Medications:</strong> Disrupts normal sleep architecture, acts as a primary catalyst for RBD episodes, and alters chemical neuromodulators.</p>
              <p><strong className="text-[#0f172a]">Genetics & Shift Work:</strong> Strong hereditary links dictate deep NREM vulnerabilities, while inconsistent circadian sleep shifts worsen timing errors.</p>
            </div>
          </div>
        </section>

        {/* RISK FACTORS TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Demographic Vulnerabilities
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Risk Factors Matrix
          </h2>
          <div className="overflow-x-auto border border-slate-100 rounded-2xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-bold text-[#0f172a] w-1/4">Risk Factor</th>
                  <th className="p-4 font-bold text-[#0f172a] w-3/4">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#334155]">
                {[
                  { factor: "Children", desc: "More inherently prone to sleepwalking and night terrors due to rapidly developing neurological sleep architecture." },
                  { factor: "Family History", desc: "Strong genetic links can predispose families to recurrent deep NREM partial arousal disorders." },
                  { factor: "Sleep Deprivation", desc: "Significantly intensifies slow-wave sleep rebound, increasing the baseline risk of confusional arousals." },
                  { factor: "Untreated Sleep Apnea", desc: "Frequent respiratory-driven micro-arousals heavily fragment the night, directly provoking motor episodes." },
                  { factor: "Stress & Anxiety Profiles", desc: "Substantially alters nighttime arousal thresholds, triggering vivid nightmares and restless behaviors." },
                  { factor: "Alcohol & Specific Sedatives", desc: "Impedes proper stage boundaries, causing significant structural changes in standard sleep patterns." },
                  { factor: "Older Adults", desc: "Show a significantly higher mathematical risk for REM Sleep Behavior Disorder, sometimes linked to neurodegenerative conditions." },
                  { factor: "Irregular Work Shifts", desc: "Constant rotation or erratic bedtimes heavily disrupt the natural circadian rhythm and stage pathways." },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-semibold text-[#0f172a] whitespace-nowrap">{row.factor}</td>
                    <td className="p-4 text-[#64748b] leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Severity Safeguards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Who Should Consider Evaluation?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              An isolated sleep-talking episode during a high-stress week isn't a cause for panic. However, you should schedule a comprehensive evaluation with a sleep specialist if you check any of these warning signs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Episodes becoming increasingly frequent or severe over weeks or consecutive months",
                "Violent movements during sleep—such as kicking, punching, or intense thrashing",
                "Falls from bed, or structural wandering that poses an immediate risk of injury",
                "Actual injuries caused to yourself or your bed partner during a night episode",
                "Adult-onset symptoms—unusual sleep movements starting for the first time as an adult",
                "Pervasive daytime sleepiness appearing alongside strange nighttime behaviors",
                "Regular, distressing night terrors persisting well beyond childhood years",
                "Symptoms appearing in tandem with chronic loud snoring or witnessed breathing pauses",
              ].map((warning, i) => (
                <div key={i} className="flex gap-3 items-start bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <span className="text-amber-400 font-bold text-sm shrink-0">⚠</span>
                  <span className="text-sm text-slate-200 leading-relaxed">{warning}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic pt-2">
              Concern or distress from a bed partner regarding what they are witnessing is an entirely valid, common reason to seek a clinical workup.
            </p>
            <div className="pt-2 text-center sm:text-left">
              <BookAppointmentButton cta="Schedule a Consultation with Dr. Manish Aggarwal 🗓" />
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: DIAGNOSIS & PROCESS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              How Parasomnia Is Diagnosed
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Diagnosing a parasomnia disorder requires mapping the absolute synchronization between brainwave shifts and physical muscle movements. Because patients are completely unconscious during events, the diagnostic pathway relies heavily on dual streams of data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-bold text-sm text-[#0f172a] mb-1">Meticulous History</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">Mapping complete medical, psychiatric, medication, and family history paired with precise sleep tracking diaries over 1–2 weeks.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-bold text-sm text-[#0f172a] mb-1">Third-Party Observations</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">Collating descriptive logs from family members or bed partners, which provide vital context regarding layout, timing, and behavior.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 lg:col-span-1">
                <h4 className="font-bold text-sm text-[#0f172a] mb-1">Video Polysomnography</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">The clinical gold standard. An overnight laboratory sleep study recording continuous EEG, muscle tone, breathing metrics, and synchronized high-definition video.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: TREATMENT APPROACH */}
        <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Therapeutic Interventions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Parasomnia Treatment Strategy
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Treatment focuses on reducing episode frequency, eliminating motor risks, and correcting any underlying respiratory arousals rather than just suppression:
            </p>
            <div className="space-y-4 pt-2">
              {[
                { title: "Rigid Sleep Hygiene & Environmental Protection", desc: "Establishing predictable bedtime boundaries while creating strict bedroom safety protocols—securing windows/doors, clearing floor hazards, or padding the sleep area to prevent injuries." },
                { title: "Imagery Rehearsal Therapy (IRT)", desc: "An evidence-based cognitive therapy explicitly utilized for nightmare disorder, training the waking mind to reshape and overwrite recurring distressing themes." },
                { title: "Targeted Relaxation & Stress Therapy", desc: "Deploying guided bio-relaxation techniques and cognitive-behavioral tools to dramatically decrease bedtime sympathetic nervous system spikes." },
                { title: "Resolution of Underlying Airway Arousals", desc: "Integrating CPAP therapy or specialized ventilation if diagnostic data proves that obstructive sleep apnea is the primary trigger causing stage fragmentation." },
              ].map((tx, idx) => (
                <div key={idx} className="border-l-2 border-[#1fa8e8] pl-4">
                  <h4 className="font-bold text-sm sm:text-base text-[#0f172a]">{tx.title}</h4>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-0.5 leading-relaxed">{tx.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#64748b] italic pt-2">
              Medications are never a generic first-line fix; they are introduced selectively for severe motor profiles like adult RBD and are carefully supervised over long-term tracking.
            </p>
          </div>

          <div className="w-full lg:w-[40%] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#0f172a]">What to Expect During Your Consultation</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Your initial clinical meeting involves a deep-dive analysis of episode morphology, onset patterns, and lifestyle triggers. Dr. Manish Aggarwal looks at the complete systemic framework—incorporating bed-partner observations and checking for hidden airway fragmentation—to build a personalized treatment plan geared specifically toward your unique parasomnia variant.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 text-center">
              <p className="text-xs text-[#64748b] mb-4">Frequent, dangerous, or highly disruptive parasomnia symptoms do not have to just be accepted.</p>
              <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE DOCTOR BLOCK */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-[#0f172a]/5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Expertise In Sleep Medicine
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for Parasomnia Care?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              "Dual specialization as a Pulmonologist and Sleep Specialist, perfectly isolating airway triggers from neural events.",
              "Deep diagnostic access to high-definition video polysomnography labs for precise event capturing.",
              "Strictly evidence-based protocols that aggressively prioritize behavioral modifications over premature sedation.",
              "Comprehensive long-term tracking maps aimed at full lifestyle coordination and tracking neurological health indicators.",
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-2xs flex gap-3">
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
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist, for accurate clinical diagnosis and personalized treatment options.
        </div>

        {/* CLOSING CONVERSION BAR */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Don't Just Manage Disruptive Sleep Behaviours
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Protect your home environment and physically secure your nights. Move toward a structured, root-cause treatment plan with expert clinical guidance in Delhi.
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