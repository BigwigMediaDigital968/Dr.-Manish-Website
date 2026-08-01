import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is a sleep diary?",
    answer:
      "A sleep diary is a structured daily log used to track sleep-wake patterns over a continuous period of one to two weeks. It documents bedtime, estimated sleep latency, nighttime awakenings, morning wake times, and daytime habits like caffeine intake or naps.",
  },
  {
    question: "How long am I required to maintain a sleep diary?",
    answer:
      "Clinical evaluations typically require keeping the log consistently for 7 to 14 consecutive days. This provides a clear overview of your natural sleep patterns, including variations between work days and weekends.",
  },
  {
    question: "Is a sleep diary as accurate as an actigraphy device?",
    answer:
      "They measure different aspects of sleep. A sleep diary captures your subjective experience—how long you felt you slept and how rested you feel—while actigraphy provides objective movement data. Using them together offers the most complete diagnostic picture.",
  },
  {
    question: "What should I do if I forget to update the log for a day?",
    answer:
      "Fill in the missing details as soon as you remember, and note that it was completed later. Try to avoid guessing exact times if a few days have passed; consistency is what matters most for identifying long-term trends.",
  },
  {
    question: "Will I need additional sleep testing after completing the diary?",
    answer:
      "It depends on your symptoms. For some patients, the diary clearly highlights lifestyle or schedule issues that can be addressed directly. For others, it serves as the baseline before advanced testing like polysomnography or an MSLT.",
  },
  {
    question: "Are there any physical risks or costs involved?",
    answer:
      "No. Keeping a sleep diary is completely safe, non-invasive, and cost-free. It simply requires building a small daily habit of writing down your observations each morning and evening.",
  },
];

export default function SleepDiaryTestingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Sleep Diary: Capturing How You Actually Sleep, Night After Night"
        description="Before recommending any test or treatment, a sleep specialist first needs to understand your sleep as it actually happens, night after night, in your own home. One of the simplest and most useful ways to capture this is a sleep diary, a daily record of your sleep and wake times, along with other details about your daytime habits that can affect sleep. It often reveals patterns that are easy to miss otherwise and is usually the first step before more detailed investigations such as Actigraphy or Polysomnography. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what it involves, why it matters, and how to fill it in correctly."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Clinical Sleep Tracking
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Mapping Your Subjective Sleep Architecture at Home
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Advanced clinical diagnostic equipment can accurately measure your physiological metrics, but understanding your personal, day-to-day experience of sleep is just as important. Sleep patterns change naturally depending on daily stress, choices, and schedules, meaning a single night in a laboratory may not capture the full picture of a chronic sleep issue.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A <strong className="text-[#0f172a]">Sleep Diary</strong> is a highly effective tool in sleep medicine that tracks these daily variations. It is a structured log where you record your sleep timing, nighttime awakenings, and daytime habits for one to two weeks. By logging metrics like caffeine intake, medication use, and daytime fatigue alongside your actual sleep hours, you help build a detailed record of your habits.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This approach captures the human element of your sleep struggles—insights that medical devices alone cannot track. Working with <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, this daily record helps uncover behavior trends, body clock shifts, and schedule disruptions, guiding the way toward a clear diagnosis.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/5996667/pexels-photo-5996667.jpeg"
                alt="A person completing their sleep diary log in a notebook by their bedside during the morning hours"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PRIMARY INDICATORS SECTION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Do Specialists Recommend a Sleep Diary?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Because it is simple to maintain and highly informative, a sleep diary is often used as the first step in addressing a variety of sleep issues:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Chronic Insomnia Evaluation", desc: "Helps track how long it takes to fall asleep, frequent awakenings, and how daytime stress or habits impact your sleep quality over time." },
              { title: "Circadian Rhythm Tracking", desc: "Identifies shifts where your internal biological clock does not line up with typical day-night schedules, such as advanced or delayed sleep phases." },
              { title: "Shift Work Adaptations", desc: "Measures the impact of rotating shifts or irregular work hours on your total sleep duration and sleep quality." },
              { title: "Pre-Diagnostic Baseline", desc: "Provides the necessary baseline information to determine if advanced testing like actigraphy or an overnight sleep study is required." },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Ready to take the first step toward understanding your sleep? Schedule a consultation to begin your evaluation.
            </p>
            <BookAppointmentButton cta="Consult Doctor 🗓" />
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: METHODOLOGY & ANALYSIS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Data Interpretation
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              What Can a Sleep Diary Reveal?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              While a sleep diary does not provide a definitive diagnosis on its own, it highlights key behavioral and timing trends that help guide your treatment plan:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Observed Patterns</th>
                  <th className="p-4">What It Typically Suggests</th>
                  <th className="p-4">Potential Next Steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Long sleep latency & frequent nighttime awakenings</td>
                  <td className="p-4 text-xs sm:text-sm">Indicates a classic insomnia pattern, often related to stress or sleep hygiene.</td>
                  <td className="p-4 text-xs sm:text-sm">Behavioral therapy adjustments or selective follow-up tracking.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Consistently early or delayed sleep onset times</td>
                  <td className="p-4 text-xs sm:text-sm">Points toward a potential circadian rhythm sleep-wake phase disorder.</td>
                  <td className="p-4 text-xs sm:text-sm">Wrist-based Actigraphy to confirm biological rhythms.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Sleep times shifting alongside variable work hours</td>
                  <td className="p-4 text-xs sm:text-sm">Highlights shift work sleep disorder and associated sleep fragmentation.</td>
                  <td className="p-4 text-xs sm:text-sm">Customized schedule planning and light therapy recommendations.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Sufficient total sleep hours paired with persistent daytime fatigue</td>
                  <td className="p-4 text-xs sm:text-sm">Suggests poor sleep quality or an underlying sleep disorder rather than a lack of sleep.</td>
                  <td className="p-4 text-xs sm:text-sm font-semibold text-[#0f172a]">Requires an overnight Sleep Study (PSG) or MSLT.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Frequent daytime naps paired with broken nighttime sleep</td>
                  <td className="p-4 text-xs sm:text-sm">Shows a disrupted sleep schedule that reduces overall sleep efficiency.</td>
                  <td className="p-4 text-xs sm:text-sm">Comprehensive review of your daily routines and sleep hygiene.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL COMPARISON: DIARY VS ACTIGRAPHY */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Method Comparison
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding the Toolkit: Sleep Diary vs. Actigraphy
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Both tools help track your sleep over multiple days, but they gather different types of data. They are often used together to provide a more complete assessment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-3">
              <h3 className="text-lg font-bold text-[#0f172a] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#1fa8e8] rounded-full inline-block" />
                The Sleep Diary Log
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#64748b]">
                <p>• <strong className="text-[#334155]">Data Type:</strong> Captures your personal observations and perspective on your sleep.</p>
                <p>• <strong className="text-[#334155]">Tracking Method:</strong> Filled out manually by hand or in a mobile app each day.</p>
                <p>• <strong className="text-[#334155]">Key Benefit:</strong> Logs subjective metrics like perceived sleep quality, mood, and daily caffeine habits.</p>
                <p>• <strong className="text-[#334155]">Patient Effort:</strong> Requires consistent daily updates in the morning and evening.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-3">
              <h3 className="text-lg font-bold text-[#0f172a] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full inline-block" />
                Wrist-Based Actigraphy
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#64748b]">
                <p>• <strong className="text-[#334155]">Data Type:</strong> Measures objective physical movement and rest periods.</p>
                <p>• <strong className="text-[#334155]">Tracking Method:</strong> Recorded automatically by a specialized wrist device.</p>
                <p>• <strong className="text-[#334155]">Key Benefit:</strong> Provides a continuous, uninterrupted record of motion throughout the night.</p>
                <p>• <strong className="text-[#334155]">Patient Effort:</strong> Simply requires wearing the device continuously on your wrist.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GUIDELINES & PROTOCOLS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* HOW TO FILL IT IN */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Best Practices
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                How to Maintain an Accurate Sleep Log
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Keeping a reliable log is simple. Following these basic habits ensures you collect high-quality data for your medical team:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Update Regularly:</strong> Write down your entries twice a day—once right after waking up, and once before going to bed.</p>
              <p>• <strong className="text-[#0f172a]">Focus on Consistency:</strong> Approximations are perfectly fine. Don't constantly look at the clock at night, as this can increase sleep anxiety.</p>
              <p>• <strong className="text-[#0f172a]">Log Every Nap:</strong> Note down all daytime rest periods, including short naps, along with their duration.</p>
              <p>• <strong className="text-[#0f172a]">Note Daily Disruptions:</strong> Write down unusual events like travel, illness, or high-stress days to explain any sudden changes in your patterns.</p>
            </div>
          </div>

          {/* NO PREPARATION NEEDED PANEL */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Patient Preparation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Getting Started with Your Assessment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You do not need to make major lifestyle adjustments, change your diet, or try to change your sleep habits during this period. The goal is to track your routine exactly as it is:
              </p>
              <div className="space-y-2 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>• Place your log sheets or mobile app right next to your bed so you don't forget to fill them out.</p>
                <p>• Keep your normal daily routine exactly the same without trying to force better sleep.</p>
                <p>• Bring your completed logs with you to your follow-up appointment for analysis.</p>
                <p>• There are no physical risks, discomfort, or side effects involved in keeping this record.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL PIPELINE: WHAT HAPPENS NEXT */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            The Evaluation Process
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            What Happens After Your Sleep Diary Review?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            A sleep diary is a foundational tool that helps map out the next steps in your care plan:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "1. Clinical Assessment", text: "Dr. Manish Aggarwal reviews your completed logs alongside your medical history and current symptoms." },
              { title: "2. Identifying Trends", text: "Our team highlights specific trends in your sleep schedule, nighttime awakenings, and total rest hours." },
              { title: "3. Determining Testing Needs", text: "We use these patterns to decide if you need advanced testing like actigraphy or an overnight sleep study." },
              { title: "4. Targeted Guidance", text: "We build a personalized care plan, which may include schedule adjustments or sleep hygiene improvements." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{step.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center sm:text-left">
            <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
          </div>
        </section>

        {/* WHY CHOOSE DR. MANISH AGGARWAL */}
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
                Effective sleep management starts with a detailed understanding of each patient's daily environment and habits. We prioritize simple, evidence-based tracking tools like the sleep diary to gather real-world insights before moving to advanced procedures.
              </p>
              <p>
                Advanced testing methods—such as actigraphy, overnight polysomnography, or daytime latency tracking—are recommended only when they provide clear diagnostic value for your care.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We look at your log details in combination with your physical symptoms, ensuring we treat you as an individual rather than focusing solely on data points.
              </p>
              <p>
                Every step of our process is designed to find the underlying cause of your sleep struggles, helping us build long-term, personalized treatment plans that fit your lifestyle.
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
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist, for an accurate diagnosis and personalised treatment plan.
        </div>

        {/* CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Understanding Your Sleep Starts With a Simple Record
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you are dealing with broken rest, morning fatigue, or irregular sleep hours, keeping a structured log is an excellent first step. Let's work together to build a clear path toward healthier sleep.
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