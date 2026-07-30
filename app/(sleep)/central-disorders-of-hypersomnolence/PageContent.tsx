import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "What are Central Disorders of Hypersomnolence?",
    answer:
      "A group of primary neurological sleep conditions in which the brain has difficulty maintaining normal wakefulness during the day, even after getting adequate or prolonged sleep at night. This group includes conditions such as narcolepsy, idiopathic hypersomnia, and Kleine-Levin syndrome.",
  },
  {
    question: "Why am I sleepy all the time?",
    answer:
      "Persistent sleepiness despite adequate sleep can stem from lifestyle factors, sleep-breathing disorders like obstructive sleep apnea, or neurological central disorders of hypersomnolence such as narcolepsy. A structured medical sleep evaluation is required to pinpoint the exact cause.",
  },
  {
    question: "Is excessive daytime sleepiness a medical condition?",
    answer:
      "While occasional tiredness is normal, persistent daytime sleepiness that occurs despite adequate nighttime rest and compromises daily performance or safety is considered a medical symptom pointing toward an underlying sleep or neurological disorder.",
  },
  {
    question: "What is the difference between narcolepsy and idiopathic hypersomnia?",
    answer:
      "Both cause severe daytime sleepiness. Narcolepsy (particularly Type 1) features REM-stage dysregulation, often introducing sudden muscle weakness (cataplexy), sleep paralysis, or vivid hallucinations due to a lack of hypocretin. Idiopathic hypersomnia involves prolonged, deeply unrefreshing sleep and severe waking grogginess without cataplexy.",
  },
  {
    question: "Can excessive daytime sleepiness be treated?",
    answer:
      "Yes, most cases are managed effectively once the root cause is isolated. Treatment models blend structured sleep timing, strategic scheduled naps, targeted lifestyle modifications, and specialized wake-promoting medications when clinically indicated.",
  },
  {
    question: "Do I need a sleep study?",
    answer:
      "Yes. If your sleepiness is chronic and unexplained, an overnight sleep study (polysomnography) paired with a next-day Multiple Sleep Latency Test (MSLT) is standard practice to measure sleep onset speed and rule out airway blockages.",
  },
  {
    question: "When should I see a sleep specialist?",
    answer:
      "You should seek an expert evaluation immediately if you experience uncontrollable sleep attacks during work or study, struggle with brain fog, or feel drowsy while operating a motor vehicle.",
  },
];

export default function CentralHypersomnolencePage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Central Disorders of Hypersomnolence: When Sleepiness Doesn't Go Away"
        description="Everyone feels sleepy after a late night or a stressful week—a strong cup of tea, an early night, or a lazy weekend usually sets things right. But what if that heaviness never really lifts? You sleep a full night, sometimes more than most people need, and still feel like you could fall asleep at your desk by mid-morning. If this sounds like your everyday experience rather than an occasional off day, it may point toward Central Disorders of Hypersomnolence—a group of conditions where the brain's own system for staying awake isn't working as it should. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what this looks like, why it happens, and how it's diagnosed and treated."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/128597/pexels-photo-128597.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Neurological Wake Mechanisms
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Are Central Disorders of Hypersomnolence?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Central Disorders of Hypersomnolence represent a cluster of intrinsic neurological sleep conditions where the brain fails to regulate and maintain normal, alert daytime wakefulness. This impairment persists even when an individual has achieved optimal, or sometimes excessive, hours of sleep the night before.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This condition stands fundamentally apart from standard situational tiredness. While ordinary fatigue resolves cleanly following restorative rest, sleepiness driven by central disorders is characterized by three distinct clinical pillars:
              </p>
              <div className="space-y-2.5 pt-1">
                <p className="text-sm text-[#334155] leading-relaxed">
                  <strong className="text-[#0f172a]">Unyielding Persistence:</strong> Present as a chronic, near-daily struggle rather than an occasional, stress-induced dip.
                </p>
                <p className="text-sm text-[#334155] leading-relaxed">
                  <strong className="text-[#0f172a]">Independent of Sleep Volume:</strong> The drowsiness continues unabated regardless of getting 8, 10, or more hours of uninterrupted sleep.
                </p>
                <p className="text-sm text-[#334155] leading-relaxed">
                  <strong className="text-[#0f172a]">High Functional Disruption:</strong> Actively compromises professional productivity, structural learning, academic metrics, and motor safety.
                </p>
              </div>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                In short, the deep neural networks and chemical pathways tasked with anchoring daytime alertness are malfunctioning. As a sleep medical expert, <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span> provides precise testing to distinguish these conditions from sleep apnea, matching symptoms to a target treatment path.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/14569658/pexels-photo-14569658.jpeg"
                alt="Person dozing off at a desk mid-morning due to a central hypersomnolence disorder"
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
                Clinical Evaluation Signs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Sleepiness Is Usually the First Sign
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When chronic daytime drowsiness begins to compromise your daily routine, analyzing a few highly specific indicators helps outline the functional state of your brain's sleep-wake switch:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "1. Consistency Tracking", desc: "Checking if the deep drowsiness occurs nearly every day or presents only as isolated, sporadic events." },
                  { title: "2. Rest Correlation", desc: "Evaluating if the exhaustion remains intense even after a long, undisrupted night of sleep." },
                  { title: "3. Nap Resiliency Profile", desc: "Observing whether daytime naps provide a clear burst of energy or leave you feeling intensely groggy." },
                  { title: "4. Neurological Co-Factors", desc: "Identifying sudden muscle weakness (cataplexy), sleep paralysis, or vivid waking hallucinations." },
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

        {/* DIAGNOSTIC BREAKDOWN: TYPES OF DISORDERS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Nosological Classifications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Types of Central Disorders of Hypersomnolence
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            While these disorders share the overarching presentation of chronic daytime sleepiness, they differ markedly regarding chemical etiologies, secondary neurological symptoms, and long-term diagnostic monitoring:
          </p>
          <div className="space-y-4">
            {[
              { type: "Narcolepsy Type 1", desc: "Characterized by severe daytime sleepiness coupled with cataplexy—a sudden, transient loss of voluntary muscle tone triggered by strong emotional reactions like laughter or surprise. This is tied to an autoimmune loss of hypocretin (orexin)-producing neurons in the brain." },
              { type: "Narcolepsy Type 2", desc: "Presents with intense daytime sleepiness matching Type 1 parameters, but completely lacks episodes of emotional cataplexy. Laboratory screens typically show completely normal systemic levels of the hypocretin chemical." },
              { type: "Idiopathic Hypersomnia (IH)", desc: "A chronic condition defined by unremitting daytime somnolence, often accompanied by exceptionally prolonged, unrefreshing nighttime sleep durations and severe sleep inertia (prolonged disorientation upon waking up), without an identifiable structural trigger." },
              { type: "Kleine-Levin Syndrome (KLS)", desc: "A rare, complex neurological condition characterized by relapsing-remitting episodes of profound hypersomnolence where patients sleep up to 20 hours a day. Episodes last days to weeks and are often paired with cognitive or behavioral alterations." },
              { type: "Hypersomnolence Due to a Medical Disorder", desc: "Direct, systemic sleepiness stemming as a secondary consequence of an overarching pathological condition, such as metabolic disruptions, traumatic brain injuries, genetic lesions, or intrinsic neurodegenerative diseases." },
              { type: "Hypersomnolence Due to Medication or Substance Use", desc: "Pronounced daytime sedation directly traced to specific pharmacotherapy interactions, chronic chemical exposures, or substance use, which typically resolves following monitored dose tapering." },
            ].map((disorder, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="font-bold text-[#0f172a] sm:w-1/3 shrink-0 text-sm sm:text-base">{disorder.type}</span>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed sm:w-2/3">{disorder.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYMPTOMS & CAUSES COMPREHENSIVE VIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS SECTION */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Pervasive Symptoms Checklist
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Central hypersomnolence impacts daily life, presenting through cognitive, physical, and narcolepsy-specific markers:
            </p>
            
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-2">Core Somnolence Signs</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155]">
                  <li>• Unintentional sleep episodes while reading/talking</li>
                  <li>• Sudden, irresistible daytime sleep attacks</li>
                  <li>• Prolonged daytime naps that bring no refreshment</li>
                  <li>• Persistent fatigue despite 7–9 hours of solid sleep</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-2">Cognitive Impairments</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155]">
                  <li>• Chronic brain fog and unclear thought processing</li>
                  <li>• Pronounced deficit in tracking daily tasks</li>
                  <li>• Short-term working memory retention slips</li>
                  <li>• Drastic drops in daily workplace output</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">Narcolepsy-Specific Indicators</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Includes classic cataplexy (sudden emotional muscle dropping), temporary sleep paralysis while entering or leaving sleep cycles, and vivid hypnagogic hallucinations.
                </p>
              </div>
            </div>
          </div>

          {/* CAUSES SECTION */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Pathophysiological Drivers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                Understanding Why It Happens
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Because these disorders stem directly from central nervous system anomalies, the medical etiology points to a combination of genetic, structural, and chemical factors:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#64748b] mt-2">
                <p><strong className="text-[#0f172a]">Autoimmune Destruction:</strong> In Narcolepsy Type 1, the immune system mistakenly targets and destroys the hypothalamic cells responsible for producing hypocretin, eliminating the brain's natural wake stabilizer.</p>
                <p><strong className="text-[#0f172a]">Neurochemical Disarray:</strong> Alterations across primary neurotransmitter networks (dopamine, norepinephrine, histamine) that regulate circadian wakefulness thresholds.</p>
                <p><strong className="text-[#0f172a]">Genetic Susceptibility:</strong> Strong correlations discovered with specific human leukocyte antigen (HLA) variants, highlighting clear hereditary risks.</p>
                <p><strong className="text-[#0f172a]">Secondary Factors:</strong> Central pathways can be altered by head trauma, intrinsic metabolic conditions, neuro-inflammatory processes, or sedative medications.</p>
              </div>
            </div>
            <p className="text-xs text-[#64748b] font-medium border-t border-slate-200/60 pt-4 mt-6 italic">
              Because two individuals with identical sleepiness profiles can have entirely different brain chemistry drivers, mapping the precise etiology is vital to building an effective treatment plan.
            </p>
          </div>
        </section>

        {/* SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Risk & Severity Parameters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              When Should You See a Sleep Specialist?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Isolated drowsiness after a late night is normal. However, you should secure a professional medical evaluation if daytime sleepiness begins to present with any of the following parameters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Persistent, unrelenting daytime sleepiness that has continued for several weeks",
                "Unintentionally falling asleep while actively working, studying, or in meetings",
                "Experiencing heavy drowsiness, spacing out, or brief micro-sleeps while driving",
                "Finding it difficult or impossible to perform standard daily tasks due to brain fog",
                "Remaining deeply tired despite maintaining an adequate 8-to-9-hour sleep window",
                "Drowsiness that is causing notable friction in your career, academics, or relationships",
              ].map((warning, i) => (
                <div key={i} className="flex gap-3 items-start bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <span className="text-amber-400 font-bold text-sm shrink-0">⚠</span>
                  <span className="text-sm text-slate-200 leading-relaxed">{warning}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-900/40 mt-2">
              <p className="text-xs text-amber-300 leading-relaxed">
                <strong>Critical Note on Driving Safety:</strong> Drowsy driving is a major hazard. Falling asleep behind the wheel, even for a split second, demands an immediate medical evaluation rather than a wait-and-see approach.
              </p>
            </div>
            <div className="pt-2 text-center sm:text-left">
              <BookAppointmentButton cta="Book a Sleep Evaluation with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: DIAGNOSIS PROTOCOLS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Diagnostics
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            How Central Hypersomnolence Is Diagnosed
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Isolating an intrinsic brain wakefulness disorder requires a structured diagnostic path. This process rules out secondary causes, like obstructive sleep apnea or chronic sleep restriction, to confirm the diagnosis:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">1. Detailed History & Physical</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Mapping symptom onset, pharmacological records, and family history, paired with structural physical evaluations to crosscheck systemic metabolic health.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">2. Sleep Diary Logistics</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Patients maintain an exact record of sleep-wake boundaries and nap frequencies across 1–2 weeks, often cross-verified via actigraphy tracking.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">3. Overnight Polysomnography</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">An in-lab nocturnal sleep study that tracks brainwaves, breathing efforts, and oxygen saturation to rule out sleep-related breathing conditions like sleep apnea.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1 lg:col-span-3">
              <h4 className="font-bold text-sm text-purple-900">4. Multiple Sleep Latency Test (MSLT) — The Key Central Diagnostic</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Conducted the morning immediately following your overnight sleep study. This daytime test tracks you across 5 scheduled nap opportunities spaced 2 hours apart. Technicians measure exactly how many minutes it takes you to fall asleep (sleep latency) and whether you immediately plunge into REM dream stages (Sleep Onset REM Periods or SOREMPs). This objective data confirms narcolepsy or idiopathic hypersomnia.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: THERAPEUTIC STRATEGIES */}
        <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Therapeutic Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Evidence-Based Treatment Approach
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Because central disorders of hypersomnolence are typically chronic neurological states, medical management centers on optimizing daily alertness, maximizing safety metrics, and restoring quality of life:
            </p>
            <div className="space-y-4 pt-2">
              {[
                { title: "Targeted Pharmacotherapy Interventions", desc: "Prescribing specialized wake-promoting agents or central nervous system stimulants tailored directly to the patient's diagnostic profile. In narcolepsy with cataplexy, REM-suppressing medications may be integrated." },
                { title: "Strategic Scheduled Napping Protocols", desc: "Structuring short, planned 15-to-20-minute daytime naps at identical times within the daily schedule. This approach works alongside medication to reduce sleep attacks." },
                { title: "Rigid Circadian Sleep Hygiene", desc: "Enforcing identical sleep and wake timings seven days a week, including weekends, to protect the brain's remaining natural sleep-wake signaling." },
                { title: "Resolution of Secondary Aggravators", desc: "Aggressively treating any co-existing sleep disorders, such as underlying sleep apnea or chemical dependencies, which can compound central fatigue." },
              ].map((tx, idx) => (
                <div key={idx} className="border-l-2 border-[#1fa8e8] pl-4">
                  <h4 className="font-bold text-sm sm:text-base text-[#0f172a]">{tx.title}</h4>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-0.5 leading-relaxed">{tx.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[40%] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-4">Living and Adjusting with Hypersomnolence</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Dietary Balance:</strong> Adopting balanced, lighter daytime meals to minimize postprandial sluggishness, and strictly limiting alcohol.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Workplace Coordination:</strong> Securing reasonable structural modifications, such as flexible shift options or standing desk arrangements.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Transit Safety:</strong> Planning clear driving restrictions, arranging alternate transit options, and using planned rest breaks on long trips.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Adherence Tracking:</strong> Maintaining close follow-up appointments to monitor medication responses and manage symptoms over the long term.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 text-center">
              <p className="text-xs text-[#64748b] mb-4">With an accurate diagnosis and a personalized care routine, most patients can build a highly manageable daily lifestyle.</p>
              <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE PROVIDER SECTION */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Clinical Standards
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Patients Choose Dr. Manish Aggarwal for Sleep Care
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              "Dual training as a Pulmonologist and Sleep Specialist, ensuring expert differential diagnosis across airway and brain disorders.",
              "Direct access to comprehensive diagnostic sleep laboratories equipped for advanced overnight polysomnography and daytime MSLT profiles.",
              "A careful, step-by-step diagnostic workflow that avoids premature prescriptions until the true medical cause is isolated.",
              "A longitudinal care philosophy focused on ongoing medication tracking, lifestyle support, and patient education.",
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs flex gap-3">
                <span className="text-[#1fa8e8] font-bold text-sm">0{idx + 1}.</span>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL MEDICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist, for an accurate clinical diagnosis and a personalized treatment plan.
        </div>

        {/* CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Don't Just Push Through Constant Sleepiness
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Chronic sleepiness that doesn't improve with rest warrants an expert workup. Reclaim your focus, safety, and daily quality of life with professional clinical care in Delhi.
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