import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are Sleep-Related Movement Disorders?",
    answer:
      "These are neurological and physiological conditions characterized by simple, repetitive, or involuntary movements that disrupt sleep onset or fragment sleep architecture. This category primarily features Restless Legs Syndrome (RLS) and Periodic Limb Movement Disorder (PLMD).",
  },
  {
    question: "What causes involuntary movements during sleep?",
    answer:
      "Primary clinical causes include systemic iron deficiency (low serum ferritin), pregnancy-induced metabolic and hormonal shifts, chronic kidney disease, diabetic peripheral neuropathy, genetic predispositions, and certain classes of medications such as traditional antidepressants.",
  },
  {
    question: "Are Sleep-Related Movement Disorders serious?",
    answer:
      "While not typically acute emergencies, they cause severe chronic sleep fragmentation that leads to daytime cognitive deficits, mood disruptions, and metabolic strain. Furthermore, they can serve as important secondary clinical indicators for underlying conditions like iron deficiency or renal dysfunction.",
  },
  {
    question: "What is the difference between Restless Legs Syndrome and Periodic Limb Movement Disorder?",
    answer:
      "Restless Legs Syndrome (RLS) is a sensory-motor disorder characterized by an irresistible urge to move the limbs due to uncomfortable creeping sensations that worsen during evening wakefulness. Periodic Limb Movement Disorder (PLMD) involves repetitive, stereotypical limb jerking during actual sleep stages, typically occurring without the patient's conscious awareness.",
  },
  {
    question: "Can iron deficiency cause sleep movement disorders?",
    answer:
      "Yes. Low iron availability in the central nervous system alters dopamine signaling pathways in the brain. This is a primary, treatable driver of Restless Legs Syndrome, which is why checking serum ferritin and iron panels is standard practice during clinical evaluations.",
  },
  {
    question: "Do I need a sleep study?",
    answer:
      "Yes, an overnight sleep study (polysomnography) is required to formally diagnose Periodic Limb Movement Disorder (PLMD). It allows specialists to quantify the hourly limb movement index and ensure that these leg movements aren't being triggered by breathing issues like obstructive sleep apnea.",
  },
  {
    question: "When should I consult a sleep specialist?",
    answer:
      "You should seek an expert sleep assessment if you face persistent difficulty falling asleep due to limb restlessness, if your bed partner notes regular nighttime kicking, or if you wake up feeling unrefreshed despite spending 8 hours in bed.",
  },
];

export default function SleepMovementDisordersPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Sleep-Related Movement Disorders: When Your Body Won't Stay Still at Night"
        description="You lie down to sleep and feel an irresistible urge to move your legs, making it hard to relax even when you're exhausted. Or you sleep through the night without waking, yet your bed partner tells you that you kick, jerk, or move repeatedly—movements you have no memory of the next morning. You may sleep a full seven or eight hours and still wake up feeling like you barely rested. These experiences fall under a group of conditions known as Sleep-Related Movement Disorders. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what's happening and how it's diagnosed and treated."
        ctaText="Book an Appointment"
        backgroundImage="/sleep/sleep-related-movement-disorders.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Sensorimotor Sleep Medicine
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Are Sleep-Related Movement Disorders?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Sleep-Related Movement Disorders are characterized by repetitive, involuntary physical movements that disturb normal sleep architecture. These movements—ranging from rhythmic limb jerks and internal creeping sensations to teeth clenching—either delay sleep onset or break up sleep continuity throughout the night.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                These conditions generally impair sleep in two ways. Conditions like <strong className="text-[#0f172a]">Restless Legs Syndrome (RLS)</strong> cause sensory discomfort during wakefulness, making it difficult to fall asleep. In contrast, conditions like <strong className="text-[#0f172a]">Periodic Limb Movement Disorder (PLMD)</strong> cause involuntary jerking during sleep, triggering micro-arousals that prevent deep, restorative rest.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                While occasional shifting or minor twitching is normal, a clinical movement disorder involves movements that are frequent, disruptive to you or your partner, and tied to daytime fatigue. Working with a specialist like <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span> allows for targeted diagnostics to differentiate these issues from other conditions like sleep apnea.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/sleep/sleep-related-movement-disorders.png"
                alt="Person restless in bed with legs uncovered due to a sleep-related movement disorder"
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
                Clinical Evaluation Markers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Key Symptoms to Watch For
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Tracking these key details can help your sleep specialist determine whether your nighttime movements point toward a specific sensorimotor disorder:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "1. Sleep-Onset Timing", desc: "Observing if the urge to move occurs during evening relaxation attempts or if movements happen purely after you fall asleep." },
                  { title: "2. Sensory Sensations", desc: "Differentiating between conscious, uncomfortable creeping feelings and involuntary twitches that you only learn about later." },
                  { title: "3. Partner Observations", desc: "Noting if a bed partner reports persistent kicking, twitching, or jerking that you do not recall the next morning." },
                  { title: "4. Daytime Restlessness", desc: "Waking up feeling unrefreshed and experiencing daytime fatigue despite spending enough total hours in bed." },
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
                Not sure what your nighttime movement means? Talk to Dr. Manish Aggarwal today.
              </p>
              <BookAppointmentButton cta="Consult Doctor 🗓" />
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: COMPREHENSIVE MEDICAL MATRIX */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Classifications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Types of Sleep-Related Movement Disorders
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            This category includes several distinct conditions, each with its own clinical pattern, typical age groups, and specific evaluation triggers:
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Disorder Type</th>
                  <th className="p-4">Core Clinical Presentation</th>
                  <th className="p-4">Typical Age Group</th>
                  <th className="p-4">When to Evaluate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                {[
                  {
                    name: "Restless Legs Syndrome (RLS)",
                    symptoms: "Crawling, tingling, or aching sensations in the limbs paired with an urge to move; symptoms worsen in the evening.",
                    age: "Any age; prevalence increases with age",
                    trigger: "Significant difficulty falling asleep due to regular leg discomfort.",
                  },
                  {
                    name: "Periodic Limb Movement Disorder (PLMD)",
                    symptoms: "Repetitive, highly patterned kicking or jerking of the legs during sleep, often occurring in regular clusters.",
                    age: "More common in older adults",
                    trigger: "Unexplained daytime fatigue despite adequate hours of sleep.",
                  },
                  {
                    name: "Sleep-Related Leg Cramps",
                    symptoms: "Sudden, involuntary tightening and painful cramping of calf or foot muscles, causing abrupt awakenings.",
                    age: "Any age; more common in older populations",
                    trigger: "Frequent, painful muscle spasms that regularly disrupt sleep.",
                  },
                  {
                    name: "Sleep Bruxism",
                    symptoms: "Involuntary clenching or grinding of the teeth during sleep, often occurring without conscious awareness.",
                    age: "Any age; quite common in children",
                    trigger: "Unexplained jaw pain, morning headaches, or signs of dental wear.",
                  },
                  {
                    name: "Rhythmic Movement Disorder",
                    symptoms: "Repetitive, rhythmic movements such as head banging or body rocking, usually during light sleep stages.",
                    age: "Most common in young children",
                    trigger: "When movements persist into adulthood or carry a risk of injury.",
                  },
                  {
                    name: "Propriospinal Myoclonus at Sleep Onset",
                    symptoms: "Sudden, brief muscle jerks originating in the abdomen or trunk as the patient shifts from wake to sleep.",
                    age: "Primarily observed in adults",
                    trigger: "Significant delays in sleep onset caused by recurrent body jerks.",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors text-xs sm:text-sm">
                    <td className="p-4 font-bold text-[#0f172a]">{row.name}</td>
                    <td className="p-4 text-[#64748b] min-w-[220px]">{row.symptoms}</td>
                    <td className="p-4 text-[#334155] whitespace-nowrap">{row.age}</td>
                    <td className="p-4 text-[#64748b] min-w-[180px]">{row.trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* RISK FACTORS: HIGH-RISK PROFILES */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Risk Stratification
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Who Is at Higher Risk?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Several underlying health factors, physiological conditions, and demographic profiles are associated with an increased likelihood of developing sleep-related movement issues:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Iron Deficiency States", desc: "Low systemic iron levels alter dopamine pathways in the brain, making this one of the primary contributors to RLS." },
              { title: "Pregnancy", desc: "Hormonal shifts and increased metabolic iron demands can trigger or temporarily worsen movement symptoms, especially in the third trimester." },
              { title: "Chronic Kidney Disease", desc: "Advanced renal conditions can alter metabolic balances and nerve function, increasing the likelihood of RLS and PLMD symptoms." },
              { title: "Diabetic Complications", desc: "Peripheral nerve damage related to diabetes can contribute to abnormal sensations and involuntary limb movements at night." },
              { title: "Neurological Conditions", desc: "Central nervous system conditions can affect the brain regions responsible for regulating smooth motor control during sleep cycles." },
              { title: "Hereditary Factors", desc: "A family history of these conditions is common, particularly for Restless Legs Syndrome, pointing to a genetic component." },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <h4 className="font-bold text-sm text-[#0f172a] mb-1">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYMPTOMS & CAUSES COMPREHENSIVE VIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS DETAILS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Manifestations
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Understanding the Physiological Impact
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Involuntary movements do more than disrupt your peace; they alter sleep architecture and reduce time spent in deep, restorative sleep stages:
            </p>
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Sleep Fragmentation:</strong> Continuous jerking can trigger brief brain micro-arousals hundreds of times a night without your conscious awareness.</p>
              <p>• <strong className="text-[#0f172a]">Cognitive Strain:</strong> Chronic lack of deep sleep can lead to persistent daytime brain fog, reduced attention span, and memory lapses.</p>
              <p>• <strong className="text-[#0f172a]">Physical Discomfort:</strong> Can result in regular morning jaw soreness, tension headaches from teeth grinding, or sudden, painful muscle cramps.</p>
            </div>
          </div>

          {/* CAUSES DETAILS */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Pathophysiology Mechanisms
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                Primary Factors Behind Nighttime Movement
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                These disorders are typically driven by a combination of neurochemical imbalances, metabolic factors, and lifestyle habits:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#64748b] mt-2">
                <p><strong className="text-[#0f172a]">Dopaminergic Dysfunction:</strong> Structural changes in how the brain utilizes dopamine can disrupt central motor control, leading to involuntary movements.</p>
                <p><strong className="text-[#0f172a]">Medication Side Effects:</strong> Certain medications, including some antidepressants, antihistamines, and anti-nausea drugs, can worsen limb movements.</p>
                <p><strong className="text-[#0f172a]">Lifestyle Triggers:</strong> Heavy intake of caffeine or alcohol close to bedtime, alongside irregular sleep schedules, can exacerbate symptoms.</p>
              </div>
            </div>
            <p className="text-xs text-[#64748b] font-medium border-t border-slate-200/60 pt-4 mt-6 italic">
              Because treatments differ significantly based on the root cause—such as treating low iron versus managing medication side effects—a precise diagnosis is essential.
            </p>
          </div>
        </section>

        {/* SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Clinical Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              When Should You See a Sleep Specialist?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Consider scheduling an expert medical evaluation if you or your bed partner notice any of these persistent issues:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Repeated leg kicking or twitching that disrupts your sleep or wakes your partner",
                "Persistent daytime sleepiness and low energy despite getting enough total hours in bed",
                "Significant difficulty falling asleep due to crawling or restless sensations in your legs",
                "Waking up feeling tired, sore, or unrefreshed after a full 7-to-8-hour night of sleep",
                "Nighttime movements that begin to affect your concentration, mood, or daily work performance",
                "Frequent, painful leg cramps or severe jaw tightness upon waking up in the morning",
              ].map((warning, i) => (
                <div key={i} className="flex gap-3 items-start bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <span className="text-amber-400 font-bold text-sm shrink-0">⚠</span>
                  <span className="text-sm text-slate-200 leading-relaxed">{warning}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center sm:text-left">
              <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: DIAGNOSIS & LAB TESTING */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Diagnostic Workflow
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            How Sleep-Related Movement Disorders Are Diagnosed
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            A comprehensive diagnosis looks at your full medical history and lifestyle alongside objective testing to identify the specific issue:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">Comprehensive Clinical Evaluation</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">A detailed review of your symptoms, lifestyle, and full medical history to check for related conditions like diabetes or neuropathy.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">Targeted Laboratory Blood Screens</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Checking full iron profiles—including ferritin and total iron-binding capacity—alongside renal and metabolic markers.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
              <h4 className="font-bold text-sm text-[#0f172a]">Limb Movement Sleep Diary</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Tracking sensory patterns, cramp frequencies, sleep timing variations, and daytime fatigue markers over 1–2 weeks.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1 lg:col-span-3">
              <h4 className="font-bold text-sm text-[#0f172a]">Overnight Polysomnography (Sleep Study)</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                An overnight sleep study is standard practice when evaluating conditions like Periodic Limb Movement Disorder (PLMD). This test uses specialized leg surface sensors (electromyography) to calculate the number of movements per hour. It also allows the specialist to rule out obstructive sleep apnea, as breathing blockages can often trigger sudden, involuntary leg jerks.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL CARE: THERAPEUTIC OPTIONS */}
        <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Management Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Treatment and Long-Term Management
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Treatment centers on addressing the underlying causes of your symptoms rather than simply trying to mask the physical movements:
            </p>
            <div className="space-y-4 pt-2">
              {[
                { title: "Targeted Iron Supplementation Protocols", desc: "When low iron levels or low ferritin are found, starting targeted oral or intravenous iron therapy can significantly improve RLS symptoms." },
                { title: "Management of Associated Medical Conditions", desc: "Optimizing the treatment of underlying conditions, such as diabetes or chronic kidney disease, to reduce nerve irritability." },
                { title: "Evidence-Based Pharmacotherapy", desc: "For moderate to severe cases, prescribing specific medications—such as alpha-2-delta ligands or dopamine agonists—tailored to your health profile." },
                { title: "Review of Current Medications", desc: "Carefully adjusting or tapering existing medications that may be contributing to or worsening your sleep movements under medical supervision." },
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
              <h3 className="text-lg font-bold text-[#0f172a] mb-4">Practical Bedtime Habits</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Moderating Stimulants:</strong> Avoiding caffeine, alcohol, and nicotine in the evening, as these can trigger limb restlessness.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Bedtime Relaxation:</strong> Incorporating gentle stretching, a warm bath, or light leg massages before bed to help soothe sensory discomfort.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Sleep Environment:</strong> Keeping your bedroom cool, quiet, and dark, and using supportive bedding to help minimize sleep disruptions.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1fa8e8] font-bold mt-0.5">✓</span>
                  <span><strong className="text-[#0f172a]">Consistent Routine:</strong> Maintaining a regular sleep schedule to support overall sleep quality and reduce the impact of movement disorders.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 text-center">
              <p className="text-xs text-[#64748b] mb-4">Identifying the root cause of nighttime restlessness is the most direct path toward achieving deeper, more restorative rest.</p>
              <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
            </div>
          </div>
        </section>

        {/* CONSULTATION EXPECTATIONS SECTION */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            What to Expect
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            Your Clinical Consultation Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">1. Detailed Clinical Review</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">A thorough review of your sensory symptoms, when they occur, and any history of related conditions like iron deficiency or diabetes.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">2. Advanced Diagnostics</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Ordering focused blood panels, iron tests, or an overnight sleep study to measure limb movements and evaluate overall sleep quality.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">3. Individualized Care Plan</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Creating a customized treatment plan addressing your specific symptoms, focused on long-term sleep health and daily energy.</p>
            </div>
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
                  Don't Just Adjust to Restless Nights
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Persistent limb restlessness or unexplained kicking during sleep doesn't have to be something you simply accept. Differentiate your symptoms and discover an effective management path.
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