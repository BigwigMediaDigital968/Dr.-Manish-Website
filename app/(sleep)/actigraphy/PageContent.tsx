import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "What is Actigraphy?",
    answer:
      "Actigraphy is an objective sleep investigation that tracks your long-term rest and activity patterns using a specialized, watch-like wrist device. By monitoring movement continuously over one to two weeks, it provides a realistic, long-term picture of your natural sleep-wake cycle in your home environment.",
  },
  {
    question: "Is an Actigraphy test painful or disruptive?",
    answer:
      "No. Actigraphy is completely painless and non-invasive. The device is lightweight and worn exactly like a standard watch or fitness tracker. It requires no needles, skin electrodes, or clinic stays, allowing you to maintain your usual daily routine.",
  },
  {
    question: "How long do I need to wear the Actigraphy device?",
    answer:
      "To gather a statistically reliable map of your sleep architecture and circadian rhythms, the device is typically worn continuously for 7 to 14 days, depending on your specialist's recommendation.",
  },
  {
    question: "Can I shower or swim while wearing the actigraph watch?",
    answer:
      "This depends on the specific model allocated for your study. While many clinical actigraphs are water-resistant, you will receive clear operational instructions during your device fitting regarding water exposure, high-impact sports, and bathing.",
  },
  {
    question: "What specific sleep disorders can Actigraphy help detect?",
    answer:
      "It is an invaluable diagnostic tool for Insomnia, Circadian Rhythm Sleep-Wake Disorders (like Delayed or Advanced Sleep Phase Disorders), and Shift Work Sleep Disorder. It evaluates sleep consistency but cannot diagnose sleep apnea or breathing issues on its own.",
  },
  {
    question: "Do I still need an overnight lab-based sleep study?",
    answer:
      "It depends on your symptoms. While actigraphy tracks long-term structural timing, it does not measure brain waves or breathing. If your specialist suspects conditions like sleep apnea or periodic limb movement disorder, an overnight polysomnography (PSG) may be recommended alongside actigraphy.",
  },
  {
    question: "How accurate is an actigraphy test?",
    answer:
      "Actigraphy provides highly accurate, cross-validated data regarding sleep-wake patterns by measuring continuous acceleration. When combined with a personal sleep log, it serves as an excellent evidence-based tool for clinical sleep analysis.",
  },
];

export default function ActigraphyTestingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Actigraphy: A Simple Way to Track How You Really Sleep"
        description="Diagnosing a sleep disorder often depends on understanding a person's natural sleep and activity patterns over several days, not just a single night. Sleep can vary from day to day, and a one-time observation doesn't always tell the full story. This is where Actigraphy helps—a simple, non-invasive way to track your sleep-wake cycle while you go about your normal daily life, with no hospital stay, no wires, and no disruption to your routine. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what it involves, why it's useful, and what to expect."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Circadian & Sleep-Wake Monitoring
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Continuous Sleep Pattern Tracking in Your Normal Environment
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Single-night diagnostic tests like polysomnography are highly effective, but they only capture a brief look at your sleep. For conditions rooted in lifestyle disruptions, inconsistent schedules, or internal biological clock shifts, tracking your sleep over an extended period provides much deeper insights. 
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong className="text-[#0f172a]">Actigraphy</strong> is an advanced clinical tool that uses a lightweight, watch-like device worn continuously on the wrist. Equipped with highly sensitive accelerometers, it tracks movement and rest patterns day and night for one to two weeks. By analyzing periods of activity and stillness, dedicated software builds a realistic map of your actual sleep timing, nighttime awakenings, and daytime nap patterns.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Because it gathers data in your home environment rather than a sleep laboratory, actigraphy shows how you sleep during your normal routine. Under the clinical guidance of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, this testing approach helps uncover complex sleep issues that singular overnight monitoring might miss.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg"
                alt="A person wearing a modern, clinical wrist-based actigraphy device during daily household activity"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / TIMELINE STEPS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Testing Protocol
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            How the Actigraphy Assessment Process Works
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-8 leading-relaxed">
            The greatest benefit of an actigraphy evaluation is its simplicity. It integrates naturally into your daily routine without requiring clinic stays or lifestyle changes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Device Fitting", desc: "You receive a compact actigraph watch adjusted comfortably to your non-dominant wrist during a brief clinic appointment." },
              { step: "02", title: "Continuous Logging", desc: "The internal sensor tracks your movement 24/7, building a detailed log of your activity and rest phases." },
              { step: "03", title: "Maintain Routines", desc: "You go about your normal life—working, exercising, and sleeping at home exactly as you usually do." },
              { step: "04", title: "Sleep Diary Sync", desc: "You keep a simple daily log of your bedtimes, wake times, and naps to help cross-check and verify the digital data." },
            ].map((item, index) => (
              <div key={index} className="relative p-5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-2">
                <span className="text-3xl font-black text-[#1fa8e8]/20 absolute top-3 right-4">{item.step}</span>
                <h4 className="font-bold text-sm text-[#0f172a] pr-8">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Want to find out if home-based actigraphy is the best approach for your symptoms? Talk to our clinical team.
            </p>
            <BookAppointmentButton cta="Consult Doctor 🗓" />
          </div>
        </section>

        {/* DIAGNOSTIC APPLICATIONS & TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Utility
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Why Is Actigraphy Recommended?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Actigraphy is key for identifying sleep disorders where long-term trends and biological rhythms provide the foundation for an accurate diagnosis:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Target Condition</th>
                  <th className="p-4">Why Actigraphy Is Useful</th>
                  <th className="p-4">Additional Diagnostic Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Chronic Insomnia</td>
                  <td className="p-4 text-xs sm:text-sm">Tracks actual sleep timing, sleep onset difficulties, and middle-of-the-night awakenings over multiple days.</td>
                  <td className="p-4 text-xs sm:text-sm">Used selectively depending on individual clinical history and severity.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Circadian Rhythm Disorders</td>
                  <td className="p-4 text-xs sm:text-sm">Clearly maps out the alignment or misalignment between your internal biological clock and the standard 24-hour day.</td>
                  <td className="p-4 text-xs sm:text-sm">Occasionally paired with home hormone markers or temperature logging.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Delayed / Advanced Sleep Phases</td>
                  <td className="p-4 text-xs sm:text-sm">Documents patterns where sleep onset and waking times are consistently delayed or advanced compared to typical social schedules.</td>
                  <td className="p-4 text-xs sm:text-sm">Typically confirmed through clean clinical correlation with the device logs.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Shift Work Sleep Disorder</td>
                  <td className="p-4 text-xs sm:text-sm">Measures the sleep fragmentation and quality reductions caused by rotating shifts or unconventional work hours.</td>
                  <td className="p-4 text-xs sm:text-sm">Utilized alongside customized sleep logs.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Excessive Daytime Sleepiness</td>
                  <td className="p-4 text-xs sm:text-sm">Evaluates total hours slept and schedule regularity to see if sleep deprivation is causing your daytime fatigue.</td>
                  <td className="p-4 text-xs sm:text-sm">Frequently requires follow-up Polysomnography or daytime MSLT testing.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Suspected Obstructive Sleep Apnea</td>
                  <td className="p-4 text-xs sm:text-sm"><span className="text-amber-600 font-medium">Not suitable as a standalone tool</span>; cannot measure breathing anomalies or blood oxygen saturation.</td>
                  <td className="p-4 text-xs sm:text-sm font-semibold text-[#0f172a]">Yes—Requires a full, comprehensive Polysomnography (Sleep Study).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* COMPARATIVE METRICS: ACTIGRAPHY VS PSG */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Comparisons
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding the Differences: Actigraphy vs. Polysomnography
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            While both tools provide valuable sleep insights, they track different aspects of your health. Your specialist will choose the best approach based on your specific symptoms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-3">
              <h3 className="text-lg font-bold text-[#0f172a] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#1fa8e8] rounded-full inline-block" />
                Actigraphy (Home Tracking)
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#64748b]">
                <p>• <strong className="text-[#334155]">Location:</strong> Completed entirely at home in your familiar sleep environment.</p>
                <p>• <strong className="text-[#334155]">Duration:</strong> Runs continuously for 7 to 14 days to capture broad trends.</p>
                <p>• <strong className="text-[#334155]">Metrics Worn:</strong> Uses a single lightweight wrist device tracking motion changes.</p>
                <p>• <strong className="text-[#334155]">Best For:</strong> Evaluating sleep timing, shift changes, and long-term insomnia patterns.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-3">
              <h3 className="text-lg font-bold text-[#0f172a] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full inline-block" />
                Polysomnography (Full Sleep Study)
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#64748b]">
                <p>• <strong className="text-[#334155]">Location:</strong> Conducted inside a specialized hospital or clinic sleep laboratory.</p>
                <p>• <strong className="text-[#334155]">Duration:</strong> Focuses on a highly detailed single-night monitoring session.</p>
                <p>• <strong className="text-[#334155]">Metrics Tracked:</strong> Monitors brain waves, eye movements, breathing effort, oxygen levels, and heart rhythms via multiple sensors.</p>
                <p>• <strong className="text-[#334155]">Best For:</strong> Spotting deep structural issues like sleep apnea or restless legs syndrome.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS & PREPARATION SPLIT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* ADVANTAGES */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Key Benefits
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Advantages of Actigraphy Testing
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#64748b]">
              <div className="p-3 bg-slate-50 rounded-xl"><strong className="text-[#0f172a] block mb-0.5">Non-Invasive:</strong> No needles, skin electrodes, or complex setup required.</div>
              <div className="p-3 bg-slate-50 rounded-xl"><strong className="text-[#0f172a] block mb-0.5">Real-World Data:</strong> Tracks how you naturally sleep at home rather than in a clinical lab.</div>
              <div className="p-3 bg-slate-50 rounded-xl"><strong className="text-[#0f172a] block mb-0.5">Multi-Day Context:</strong> Provides a comprehensive overview across weeks, identifying day-to-day variations.</div>
              <div className="p-3 bg-slate-50 rounded-xl"><strong className="text-[#0f172a] block mb-0.5">Completely Painless:</strong> As easy and comfortable as wearing a standard digital watch.</div>
            </div>
          </div>

          {/* SIMPLIFIED PREPARATION */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Patient Instructions
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Simple Rules for Your Tracking Window
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You don't need to make major changes to your schedule or follow dietary restrictions before starting. Just keep these basic tips in mind:
              </p>
              <div className="space-y-2 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>• Leave the tracker on continuously day and night, including while you sleep.</p>
                <p>• Keep doing your standard routines—work, chores, and exercise as usual.</p>
                <p>• Write down your actual sleep times accurately in your sleep log.</p>
                <p>• Follow the specific instructions provided by our clinic team regarding water exposure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL PIPELINE: WHAT HAPPENS AFTER */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Next Steps
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            What Happens After Your Monitoring Period?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            Once you complete your designated tracking period, we translate your data into a clear, personalized care plan:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "1. Data Retrieval", text: "You return the device to our sleep center, where our team downloads the raw activity logs for analysis." },
              { title: "2. Pattern Analysis", text: "Specialized analysis programs map out your movement history, creating a detailed chart of your sleep and wake patterns." },
              { title: "3. Specialist Review", text: "Dr. Manish Aggarwal cross-references these digital findings with your personal sleep diary and medical history." },
              { title: "4. Care Planning", text: "During your follow-up visit, we review the final diagnostic report together and design a targeted, evidence-based treatment plan." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{step.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* THE CLINICAL CARE PROMISE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Expert Sleep Care
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for Sleep Investigations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                Effective sleep medicine is built on a comprehensive understanding of each patient's individual habits, daily lifestyle, and long-term habits. We look beyond basic symptoms to get a clear picture of how your struggles with rest impact your health and daily routine.
              </p>
              <p>
                Our diagnostic approaches align directly with recognized, evidence-based sleep guidelines, ensuring your results are interpreted with clinical precision.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Instead of using cookie-cutter treatments, we provide personalized recommendations tailored to your unique biological rhythms and daily responsibilities.
              </p>
              <p>
                If your condition requires a deeper look, our clinic offers easy access to a full range of advanced diagnostic tools, including comprehensive in-lab polysomnography and daytime sleepiness testing (MSLT).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL MEDICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This page is for informational purposes only and does not replace professional medical advice. Please consult a qualified sleep specialist to determine whether Actigraphy is appropriate for your condition.
        </div>

        {/* CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Struggling With Sleep? Let's Find Out Why
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you are dealing with chronic insomnia, irregular sleep shifts, or persistent fatigue, tracking your real-world rest patterns can be an important first step. Let's build a clear map toward better, healthier sleep.
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