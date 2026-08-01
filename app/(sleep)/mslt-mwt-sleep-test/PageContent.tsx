import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is an MSLT?",
    answer:
      "The Multiple Sleep Latency Test (MSLT) is an objective daytime diagnostic test designed to evaluate physiological sleep propensity. It measures the precise duration it takes a patient to fall asleep across 4 to 5 scheduled nap windows, while tracking the rapid entry into REM sleep stages.",
  },
  {
    question: "What is an MWT?",
    answer:
      "The Maintenance of Wakefulness Test (MWT) is a daytime sleep evaluation that measures an individual's physiological ability to remain awake and alert in a dark, quiet, and low-stimulation room. It is primarily used to evaluate safety indicators for high-risk occupations.",
  },
  {
    question: "What is the core difference between the MSLT and MWT?",
    answer:
      "The primary difference lies in the clinical objective: the MSLT evaluates the speed of sleep onset to diagnose hypersomnolence conditions like narcolepsy, whereas the MWT evaluates a patient's capacity to actively resist sleep under low-stimulation conditions to measure safety or treatment response.",
  },
  {
    question: "How long does the testing process take?",
    answer:
      "The MSLT typically requires a period of 6 to 8 hours to complete a series of 4 to 5 scheduled nap options spaced 2 hours apart. The MWT generally runs for 4 to 5 hours, covering 4 wakefulness tracking blocks.",
  },
  {
    question: "Is the MSLT procedure painful or invasive?",
    answer:
      "No. The procedure is entirely painless and non-invasive. Surface electrodes are attached to the skin of the scalp and face using a temporary adhesive paste to record real-time brain waves and eye movements without the use of needles.",
  },
  {
    question: "Can I drive home independently after completing the daytime test?",
    answer:
      "Because the testing process involves prolonged sitting in darkened rooms or multiple intentional naps, you may feel drowsy. It is highly recommended to arrange alternate transportation or have a family member drive you home from the sleep laboratory.",
  },
  {
    question: "Why is an overnight sleep study mandatory before daytime testing?",
    answer:
      "An overnight polysomnography (PSG) is required immediately preceding the daytime test to document a minimum of 6 hours of sleep. This ensures that daytime drowsiness is not caused by acute sleep deprivation or underlying breathing obstructions like sleep apnea.",
  },
];

export default function DaytimeSleepinessTestingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="MSLT & MWT: Understanding Your Daytime Sleepiness Test"
        description="Some people continue to feel sleepy during the day even after what seems like a full night's sleep—affecting work, driving, studies, and everyday life. This is often more than just tiredness. When excessive daytime sleepiness continues despite adequate sleep, specialised sleep tests such as the Multiple Sleep Latency Test (MSLT) and the Maintenance of Wakefulness Test (MWT) help find out why. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what these tests involve and what to expect."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Hypersomnolence Diagnostics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Objective Evaluation of Central Hypersomnia
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Persistent daytime sleepiness that continues despite long hours of nocturnal rest points toward an underlying sleep architecture problem. While patients can describe their fatigue using subjective scales, clinical sleep medicine requires precise data to confirm central nervous system hypersomnias. 
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                The <strong className="text-[#0f172a]">Multiple Sleep Latency Test (MSLT)</strong> serves as the gold-standard diagnostic tool for quantifying daytime sleep propensity. It tracks how quickly an individual falls asleep across 4 to 5 scheduled daytime nap windows under quiet laboratory conditions. Beyond measuring the exact minutes to sleep onset, the test monitors for sleep-onset REM periods (SOREMPs), which are key indicators used to confirm a diagnosis of narcolepsy or idiopathic hypersomnia.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Alternatively, the <strong className="text-[#0f172a]">Maintenance of Wakefulness Test (MWT)</strong> approaches the problem from the opposite direction. Instead of determining how quickly you fall asleep, it measures your ability to remain awake in a low-stimulation environment. Under the guidance of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, these tests help identify the root causes of severe drowsiness and provide actionable data to guide targeted treatment plans.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/10682245/pexels-photo-10682245.jpeg"
                alt="Patient resting in a private, quiet sleep laboratory during a daytime sleep latency test"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PRIMARY INDICATORS SECTION: COMPARATIVE TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Differences
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Comparing the MSLT and MWT Protocols
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            While both daytime sleep tests are performed within a controlled sleep facility, they evaluate different aspects of your sleep-wake cycles:
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Testing Parameters</th>
                  <th className="p-4">Multiple Sleep Latency Test (MSLT)</th>
                  <th className="p-4">Maintenance of Wakefulness Test (MWT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Primary Clinical Purpose</td>
                  <td className="p-4 text-xs sm:text-sm">Quantifies standard daytime sleepiness to help identify underlying neurological conditions.</td>
                  <td className="p-4 text-xs sm:text-sm">Measures an individual's capacity to sustain wakefulness and resist sleep in low-stimulation settings.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Core Tracking Metrics</td>
                  <td className="p-4 text-xs sm:text-sm">Measures the speed of sleep onset and records any rapid entry into REM sleep during naps.</td>
                  <td className="p-4 text-xs sm:text-sm">Measures the ability to maintain alertness during prolonged, quiet sitting blocks.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Patient Instructions</td>
                  <td className="p-4 text-xs sm:text-sm">Lie quietly in bed and allow yourself to fall asleep as quickly as possible during each nap window.</td>
                  <td className="p-4 text-xs sm:text-sm">Sit comfortably in a chair and try to remain awake for the full duration of each session without using external stimulation.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Standard Duration</td>
                  <td className="p-4 text-xs sm:text-sm">Takes 6 to 8 hours; includes 4 to 5 nap windows spaced exactly 2 hours apart.</td>
                  <td className="p-4 text-xs sm:text-sm">Takes 4 to 5 hours; includes 4 wakefulness testing blocks scheduled 2 hours apart.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Primary Diagnostic Uses</td>
                  <td className="p-4 text-xs sm:text-sm">Diagnosing narcolepsy subtypes and idiopathic hypersomnia conditions.</td>
                  <td className="p-4 text-xs sm:text-sm">Assessing the effectiveness of ongoing treatments and evaluating fitness for high-risk safety occupations.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Unsure which diagnostic sleep test matches your current symptoms? Schedule an expert clinical consultation today.
            </p>
            <BookAppointmentButton cta="Consult Doctor 🗓" />
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: WHO NEEDS THESE TESTS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Who Requires an MSLT or MWT Evaluation?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            These specialized daytime evaluations are utilized when standard sleep tracking indicates a need for deeper neurobiological monitoring:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Suspected Narcolepsy", details: "For individuals experiencing sudden sleep attacks or brief muscle weakness (cataplexy) triggered by strong emotions like laughter or surprise." },
              { label: "Idiopathic Hypersomnia", details: "For patients experiencing profound, unrefreshing sleep and severe daytime sleepiness that cannot be attributed to poor nighttime rest or other medical conditions." },
              { label: "Occupational Safety Assessments", desc: "Mandatory screening for individuals in high-risk professions—such as commercial transit drivers, pilots, and heavy machinery operators—to confirm their ability to stay awake safely on duty." },
              { label: "Treatment Monitoring", details: "To provide clear data on how well a patient is responding to therapies for sleep disorders like obstructive sleep apnea or central hypersomnia." },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{item.label}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.details || item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION GUIDE & INFRASTRUCTURE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* PATIENT PREPARATION */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Testing Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                How to Prepare for Your Testing Day
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Careful preparation helps ensure accurate test results by removing external factors that could artificially change your daytime alertness levels:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-2">
              <p>• <strong className="text-[#0f172a]">Maintain Sleep Routines:</strong> Keep a regular 7-to-8-hour nightly sleep schedule for 14 days before your appointment, often documented using a sleep log.</p>
              <p>• <strong className="text-[#0f172a]">Medication Coordination:</strong> Review all prescriptions with your specialist, as certain medications (like stimulants or antidepressants) may need to be gradually adjusted beforehand.</p>
              <p>• <strong className="text-[#0f172a]">Eliminate Stimulants:</strong> Do not consume caffeine, energy drinks, or alcohol on the day of your test, as these can interfere with your natural sleep cycles.</p>
              <p>• <strong className="text-[#0f172a]">Avoid Daytime Napping:</strong> Do not take any naps before checking into the clinic on the morning of your scheduled evaluation.</p>
            </div>
          </div>

          {/* TESTING WORKFLOW */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Inside the Lab
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
                What Happens During the Procedure
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#64748b] mt-3">
                <p><strong className="text-[#0f172a]">Sensor Attachment:</strong> A technologist places small surface sensors on your scalp, face, and chin to track brain waves (EEG), eye movements, and muscle tone. The process is completely painless and does not involve needles.</p>
                <p><strong className="text-[#0f172a]">Controlled Sessions:</strong> For the MSLT, you will have 20-minute nap windows scheduled every 2 hours to see how quickly you fall asleep. For the MWT, you will sit quietly in a comfortable chair and try to stay awake for a set period without external stimulation.</p>
                <p><strong className="text-[#0f172a]">Continuous Monitoring:</strong> Sleep technologists track your physiological data throughout each session from a central monitoring station, leaving you free to read or relax between your scheduled testing windows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS INTERPRETATION SUMMARY */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Interpretation
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding Your Diagnostic Results
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Your final test results are analyzed in combination with your overnight sleep findings and complete medical history rather than as isolated numbers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-bold uppercase text-[#1fa8e8]">MSLT Findings</span>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                An average sleep latency of less than 8 minutes indicates significant daytime sleepiness. If the test also records rapid entry into REM sleep (dream sleep) during two or more naps, this provides strong diagnostic support for narcolepsy.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-bold uppercase text-[#1fa8e8]">MWT Findings</span>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Remaining awake for the full duration of each session indicates a strong ability to maintain alertness. Conversely, falling asleep quickly during these sessions highlights severe sleepiness that could present safety risks during daily activities like driving.
              </p>
            </div>
          </div>
        </section>

        {/* SEVERITY ASSESSMENT PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Safety Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Are There Any Associated Risks?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Daytime sleep tracking procedures are safe, non-invasive, and completed without the use of injections or sedating medications. However, you should be prepared for a few practical aspects of the testing day:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "Mild Sensor Discomfort", desc: "Wearing small surface electrodes and adhesive paste on your scalp for several hours may feel slightly uncomfortable." },
                { title: "Testing Monotony", desc: "Spending a full day remaining still or waiting between scheduled sessions can feel tedious." },
                { title: "Temporary Skin Irritation", desc: "You may experience mild redness from the skin preparation gel at the sensor sites, which typically resolves quickly." },
                { title: "Post-Test Drowsiness", desc: "Because the testing protocol involves multiple naps or prolonged sitting, you may feel sleepy afterward and should arrange for a ride home." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 space-y-1">
                  <h4 className="font-bold text-sm text-amber-400">⚠ {item.title}</h4>
                  <p className="text-xs text-slate-200 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center sm:text-left">
              <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* CLINICAL APPRAISAL: CLINIC WORKFLOW */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Patient Pathway
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            What to Expect at Dr. Manish Aggarwal's Sleep Clinic
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            We ensure that every diagnostic test corresponds to a clear clinical goal. Your evaluation follows a structured path from initial consultation through final treatment monitoring:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">1. Baseline Sleep Assessment</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">A thorough evaluation of your symptoms, daily routines, medication history, and how daytime sleepiness impacts your safety or career.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">2. Overnight Diagnostic PSG</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">An overnight sleep study is performed first to evaluate sleep architecture and rule out other potential causes of fatigue, such as sleep apnea.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">3. Daytime Sleep Testing</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Completing the MSLT or MWT under close clinical supervision in a quiet, modern testing room designed for accurate data collection.</p>
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
                  Ready to Understand Your Daytime Sleepiness?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If persistent daytime drowsiness is affecting your safety or daily routine despite getting enough sleep at night, objective testing can help you find answers. Differentiate your symptoms and take the first step toward clearer alertness.
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