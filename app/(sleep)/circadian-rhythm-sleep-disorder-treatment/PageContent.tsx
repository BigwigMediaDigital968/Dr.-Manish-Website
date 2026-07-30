import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are Circadian Rhythm Sleep-Wake Disorders?",
    answer:
      "These are neurological sleep disorders where the body's internal 24-hour biological clock becomes misaligned with the external environment or the specific sleep schedule an individual needs to maintain. This misalignment results in sleep onset issues, severe waking distress, and daytime fatigue.",
  },
  {
    question: "What causes Circadian Rhythm Sleep-Wake Disorders?",
    answer:
      "Primary drivers include rotating or night shift work, frequent travel across time zones (jet lag), inconsistent sleep habits, excessive blue screen exposure before bed, and a lack of natural sunlight exposure. In some instances, genetic variations or underlying neurological factors predispose individuals to these shifts.",
  },
  {
    question: "Can Circadian Rhythm Sleep-Wake Disorders be treated?",
    answer:
      "Yes. Most disorders can be managed by gradually retraining the internal biological clock. Treatment frameworks utilize a combination of timed bright light therapy, chronotherapy (sleep schedule correction), clinical melatonin administration when appropriate, and behavioral sleep hygiene adjustments.",
  },
  {
    question: "Is Shift Work Sleep Disorder permanent?",
    answer:
      "No. While it persists as long as the irregular work hours continue, its functional impact can be controlled. Many patients achieve significant symptom relief using targeted pre-shift lighting strategies, soundproofing adaptations for daytime rest, and medical sleep-wake scheduling.",
  },
  {
    question: "Can jet lag become a long-term sleep disorder?",
    answer:
      "Occasional jet lag is transient and resolves within days. However, for frequent international travelers, such as flight crews, the constant shift prevents the circadian rhythm from ever normalizing, leading to a chronic, disordered sleep pattern that requires specialist care.",
  },
  {
    question: "When should I consult a sleep specialist?",
    answer:
      "You should seek an expert evaluation if your sleep-wake timings have been deeply disrupted for several weeks, if you experience extreme daytime somnolence, or if you find yourself struggling with focus or safety hazards while driving.",
  },
  {
    question: "Do I need a sleep study?",
    answer:
      "Not always. Circadian rhythm issues are primarily diagnosed through clinical history and actigraphy (wrist-worn motion tracking). A overnight sleep study (polysomnography) is typically requested if your specialist suspects a concurrent condition, such as obstructive sleep apnea.",
  },
];

export default function CircadianRhythmDisordersPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Circadian Rhythm Sleep-Wake Disorders: When Your Body Clock Runs Its Own Schedule"
        description="You feel wide awake at midnight but struggle to wake up for work in the morning. You finally fall asleep just before sunrise, no matter how early you try to go to bed. Or you work night shifts, and the moment you get home exhausted, you simply cannot fall asleep. Many people assume this is just bad sleeping habits—often, it's neither. It's a disrupted body clock, and it has a name: Circadian Rhythm Sleep-Wake Disorders. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains why this happens and how a more workable sleep schedule can be restored."
        ctaText="Book an Appointment"
        backgroundImage="/sleep/circadian-rhythm-sleep-disorder-treatment.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Biological Clock Alignment
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Are Circadian Rhythm Sleep-Wake Disorders?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Your circadian rhythm acts as your body's intrinsic 24-hour
                master clock. It is governed by a small, specialized cluster of
                cells in the hypothalamus called the suprachiasmatic nucleus
                (SCN). This central clock responds directly to light cues from
                the eyes, orchestrating the periodic release of the sleep
                hormone melatonin and setting daily peaks in daytime alertness.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong className="text-[#0f172a]">
                  Circadian Rhythm Sleep-Wake Disorders
                </strong>{" "}
                occur when this internal biological clock drifts completely out
                of sync with the external environment or the specific sleep-wake
                schedule your career, education, and lifestyle require.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This internal misalignment is not an issue of personal willpower
                or poor lifestyle habits. Because it is rooted in deep
                neurological timing mechanisms, simply "trying harder" to fall
                asleep early typically fails. Restoring order requires an expert
                diagnostic approach directed by a sleep specialist like{" "}
                <span className="font-semibold text-[#0f172a]">
                  Dr. Manish Aggarwal
                </span>{" "}
                to realign your internal clock with daily demands.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/sleep/circadian-rhythm-sleep-disorder-treatment.png"
                alt="Person lying wide awake in bed at night while the room is dark due to a circadian rhythm disorder"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PRIMARY INDICATORS SECTION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Circadian Assessment Markers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Your Sleep Timing Is Usually the First Clue
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                To identify an underlying circadian timing issue, a specialist
                tracks specific parameters regarding how your daily alertness
                patterns relate to external demands:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "1. Misplaced Alertness",
                    desc: "Feeling intensely energetic late at night or experiencing heavy, persistent exhaustion when you need to be awake.",
                  },
                  {
                    title: "2. Environmental Triggers",
                    desc: "Analyzing how your unique pattern connects to shift work rotations, international travel, or evening screen blue-light exposure.",
                  },
                  {
                    title: "3. Pattern Duration",
                    desc: "Evaluating whether your sleep schedule has been unstable for a few days or represents a fixed pattern lasting weeks or months.",
                  },
                  {
                    title: "4. Functional Friction",
                    desc: "Tracking the degree to which this irregular sleep-wake pattern impairs daytime focus, stable mood, and overall road safety.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-50 border border-slate-100 rounded-xl"
                  >
                    <h4 className="font-bold text-sm text-[#0f172a]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748b] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-auto shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center lg:max-w-xs">
              <p className="text-sm font-medium text-[#334155] mb-4">
                Not sure what your sleep timing means? Talk to Dr. Manish
                Aggarwal today.
              </p>
              <BookAppointmentButton cta="Consult Doctor 🗓" />
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: TYPES OF DISORDERS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Phenotypes
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Types of Circadian Rhythm Sleep-Wake Disorders
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Circadian variations present in highly distinct clinical patterns,
            each requiring a tailored corrective approach:
          </p>
          <div className="space-y-4">
            {[
              {
                type: "Delayed Sleep-Wake Phase Disorder (DSWPD)",
                desc: "A common phenotype where sleep onset and wake times are delayed significantly (often by 2 to 6 hours) relative to standard timings. Individuals struggle to sleep before the early hours of the morning and experience severe waking grogginess.",
              },
              {
                type: "Advanced Sleep-Wake Phase Disorder (ASWPD)",
                desc: "The inverse of delayed phase; individuals experience severe somnolence in the early evening (e.g., 6:00 PM to 8:00 PM) and wake up spontaneously in the middle of the night or ultra-early morning hours, unable to return to sleep.",
              },
              {
                type: "Shift Work Sleep Disorder (SWSD)",
                desc: "Affects individuals working night, early morning, or rotating shifts. It manifests as a mix of insomnia during daytime rest attempts and severe, dangerous sleep attacks during overnight work hours.",
              },
              {
                type: "Jet Lag Disorder",
                desc: "A temporary but disruptive mismatch that occurs when traveling across multiple time zones rapidly, leaving the internal clock out of sync with the destination's natural light-dark cycles.",
              },
              {
                type: "Non-24-Hour Sleep-Wake Rhythm Disorder",
                desc: "An unstable condition where the body's internal clock runs longer than 24 hours, causing sleep and waking cycles to drift progressively later every day. This condition is highly prevalent among individuals who are completely blind and lack light reset cues.",
              },
              {
                type: "Irregular Sleep-Wake Rhythm Disorder",
                desc: "Characterized by a total absence of a primary consolidated nighttime sleep block. Instead, an individual's sleep is broken into fragmented segments and naps scattered across a 24-hour period.",
              },
            ].map((disorder, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
              >
                <span className="font-bold text-[#0f172a] sm:w-1/3 shrink-0 text-sm sm:text-base">
                  {disorder.type}
                </span>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed sm:w-2/3">
                  {disorder.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RISK FACTORS: HIGH-RISK GROUPS TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Demographic Susceptibility
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Occupations and Groups at Higher Risk
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Certain career tracks and age groups interact with light and
            scheduling in ways that make circadian rhythm disruption far more
            likely:
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Risk Group</th>
                  <th className="p-4">Primary Pathophysiological Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                {[
                  {
                    group: "Shift Workers",
                    mech: "Consistent, structural requirement to perform cognitive duties against natural daylight patterns.",
                  },
                  {
                    group: "Doctors and Healthcare Workers",
                    mech: "Unpredictable on-call emergencies, 24-hour shifts, and frequent, uncoordinated schedule updates.",
                  },
                  {
                    group: "Nurses",
                    mech: "Frequent shifts alternating between night duties and early morning turnarounds, disrupting sleep cycles.",
                  },
                  {
                    group: "IT and Software Professionals",
                    mech: "Extended nocturnal exposure to blue screen light, paired with late-night interactions across international time zones.",
                  },
                  {
                    group: "Airline Pilots & Cabin Crew",
                    mech: "Rapid transition across multiple global time zones, combined with changing mandatory rest hours.",
                  },
                  {
                    group: "Students & Teenagers",
                    mech: "Late-night studying combined with a natural biological delay in melatonin release common in adolescence.",
                  },
                  {
                    group: "Older Adults",
                    mech: "An age-related phase advance, causing an early-evening dip in alertness and premature early morning awakenings.",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-4 font-semibold text-[#0f172a] whitespace-nowrap">
                      {row.group}
                    </td>
                    <td className="p-4 text-xs sm:text-sm">{row.mech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SYMPTOMS & CAUSES COMPREHENSIVE VIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* SYMPTOMS PANEL */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Systemic Presentation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Signs of a Misaligned Internal Clock
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Circadian misalignment impairs multiple bodily systems, showing up
              through several daily symptoms:
            </p>
            <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#334155]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <p>
                  • Remaining wide awake at bedtime despite physical exhaustion
                </p>
                <p>
                  • Severe difficulty waking up on time, even with multiple
                  alarms
                </p>
                <p>
                  • Intense daytime drowsiness, especially in classes or
                  meetings
                </p>
                <p>• Brain fog and diminished short-term working focus</p>
                <p>• Persistent fatigue that stays heavy after a long sleep</p>
                <p>
                  • Mood changes, including increased irritability or anxiety
                </p>
                <p>• Falling performance metrics at work or university</p>
                <p>• A reliance on multiple daytime naps just to stay alert</p>
              </div>
            </div>
          </div>

          {/* CAUSES PANEL */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Disruption Etiology
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                Primary Causes of Circadian Shift
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                The internal clock can be knocked out of sync by a variety of
                lifestyle, environmental, and biological factors:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#64748b] mt-2">
                <p>
                  <strong className="text-[#0f172a]">Light Deprivation:</strong>{" "}
                  Spending long days inside without exposure to natural morning
                  sunlight prevents the biological clock from resetting properly
                  each day.
                </p>
                <p>
                  <strong className="text-[#0f172a]">
                    Nocturnal Photic Stimulation:
                  </strong>{" "}
                  Using bright smartphones, tablets, or monitors late at night
                  sends false daytime signals to the brain, stalling natural
                  melatonin release.
                </p>
                <p>
                  <strong className="text-[#0f172a]">Erratic Schedules:</strong>{" "}
                  Constantly changing sleep routines on weekends compared to
                  weekdays confuses the body's internal timing mechanisms.
                </p>
                <p>
                  <strong className="text-[#0f172a]">
                    Neurological Factors:
                  </strong>{" "}
                  Specific variations in circadian-related genes pre-program an
                  individual toward a much earlier or later sleep phase.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#64748b] font-medium border-t border-slate-200/60 pt-4 mt-6 italic">
              Identifying the exact source of your timing mismatch determines
              whether the shift can be resolved with lifestyle modifications or
              requires specialized medical care.
            </p>
          </div>
        </section>

        {/* SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Long-Term Physiological Toll
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why You Shouldn't Ignore a Disrupted Body Clock
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              A misaligned sleep cycle is more than an inconvenience to fix with
              caffeine. Over time, a chronic circadian mismatch can lead to
              broader systemic effects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  title: "Metabolic and Physical Health Concerns",
                  desc: "Long-term clock disruption is closely tied to impaired glucose regulation, elevated cardiovascular stress markers, and altered immune performance.",
                },
                {
                  title: "Mental Well-Being Vulnerabilities",
                  desc: "Chronic phase shifts disrupt neurotransmitter balances, increasing susceptibility to persistent low mood, clinical anxiety, and emotional exhaustion.",
                },
                {
                  title: "Cognitive Performance Drops",
                  desc: "A misaligned clock leads to increased processing errors, missed deadlines, and a reduced capacity to learn or retain complex information.",
                },
                {
                  title: "Real-World Transportation Risks",
                  desc: "Severe drowsiness behind the wheel is a major hazard, particularly for shift workers returning home from overnight duties.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 space-y-1"
                >
                  <h4 className="font-bold text-sm text-amber-400">
                    ⚠ {item.title}
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center sm:text-left">
              <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: DIAGNOSIS & TESTING */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Diagnostic Protocol
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            How Circadian Rhythm Disorders Are Diagnosed
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Diagnosing a circadian condition requires gathering objective data
            on your sleep-wake schedule to distinguish phase shifts from other
            medical sleep conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">
                Comprehensive Sleep Tracking
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Analyzing specific work patterns, travel histories, caffeine
                timing, and light exposure environments over months.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">
                Structured Sleep Diary Logs
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Patients record exact bedtimes, precise waking minutes, mid-day
                nap occurrences, and matching alertness scores for 14
                consecutive days.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">
                Long-Term Actigraphy Monitoring
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Wearing a specialized, lightweight motion sensor device on the
                wrist for multiple weeks to record real-world sleep-wake
                schedules.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1 lg:col-span-3">
              <h4 className="font-bold text-sm text-[#0f172a]">
                In-Lab Overnight Polysomnography (When Indicated)
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                An overnight sleep study is requested when your specialist needs
                to rule out concurrent sleep conditions. For example, ruling out
                underlying obstructive sleep apnea ensures that daytime
                sleepiness is purely a circadian alignment issue rather than a
                structural breathing problem.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: THERAPEUTIC STRATEGIES */}
        <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Re-Entrainment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Retraining Your Body's Internal Clock
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Rather than attempting to force sleep when the brain isn't primed
              for it, medical treatment focuses on shifting the core circadian
              cycle into a functional alignment using several key strategies:
            </p>
            <div className="space-y-4 pt-2">
              {[
                {
                  title: "Timed Bright Light Phototherapy",
                  desc: "Using a medical light box emitting 10,000 lux at precise times of day. Morning light helps advance a delayed sleep phase, while evening exposure helps delay an early schedule.",
                },
                {
                  title: "Chronotherapy Chrono-Shifting",
                  desc: "Gradually adjusting your sleep window by small, manageable steps (e.g., 15 to 30 minutes every few days) until your internal rhythm matches your required routine.",
                },
                {
                  title: "Timed Clinical Melatonin Therapy",
                  desc: "Administering low-dose melatonin supplements at specific times to signal sleep readiness to the brain's internal master clock, under guidance.",
                },
                {
                  title: "Occupational Shift-Work Adaptations",
                  desc: "Structuring your light exposure, nap timing, and room blackout strategies to help maintain energy levels during night duties.",
                },
              ].map((tx, idx) => (
                <div key={idx} className="border-l-2 border-[#1fa8e8] pl-4">
                  <h4 className="font-bold text-sm sm:text-base text-[#0f172a]">
                    {tx.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-0.5 leading-relaxed">
                    {tx.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[40%] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-4">
                Practical Habits for Circadian Stability
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#0f172a]">
                      Evening Tech Discipline:
                    </strong>{" "}
                    Discontinuing the use of smartphones, laptops, and bright
                    blue-light screens at least 60–90 minutes before bedtime.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#0f172a]">
                      Light and Dark Cues:
                    </strong>{" "}
                    Keeping your bedroom completely dark during sleep, and
                    getting immediate natural sunlight exposure upon waking.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#0f172a]">
                      Routine Coordination:
                    </strong>{" "}
                    Keeping your meal times, exercise schedules, and caffeine
                    intake consistent to help stabilize your daily cycles.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#0f172a]">
                      Schedule Continuity:
                    </strong>{" "}
                    Maintaining your target sleep and wake times on weekends to
                    prevent shifting your clock backward.
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 text-center">
              <p className="text-xs text-[#64748b] mb-4">
                Retraining an internal clock requires consistent habits and
                steady progress, but a manageable sleep pattern is achievable.
              </p>
              <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE PROVIDER SECTION */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Sleep Expertise
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Patients Consult Dr. Manish Aggarwal for Circadian Care
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              "Dual specialization as a Pulmonologist and Sleep Specialist, allowing for a thorough differential diagnosis across multiple sleep disorders.",
              "Access to specialized diagnostic tools, including detailed actigraphy and home sleep monitoring systems.",
              "Personalized care plans that tailor light therapy, lifestyle changes, and medical scheduling to your career demands.",
              "A patient-focused approach centered on long-term follow-up to support you through shift rotations, travel, and schedule adjustments.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs flex gap-3"
              >
                <span className="text-[#1fa8e8] font-bold text-sm">
                  0{idx + 1}.
                </span>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  {text}
                </p>
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
          <strong>Disclaimer:</strong> This content is for informational
          purposes only and is not a substitute for professional medical advice.
          Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep
          Specialist, for an accurate clinical diagnosis and a personalized
          treatment plan.
        </div>

        {/* CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Don't Just Manage a Disrupted Sleep Schedule Indefinitely
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If your sleep schedule feels out of your control due to shift
                  work, travel, or an irregular internal clock, a specialist
                  evaluation can help. Realignment is achievable once your
                  underlying pattern is identified.
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
