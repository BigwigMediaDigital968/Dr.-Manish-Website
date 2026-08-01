import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is Cognitive Behavioral Therapy for Insomnia (CBT-I)?",
    answer:
      "CBT-I is a short, structured, and evidence-based non-pharmacological treatment that targets the underlying behaviors, mental habits, and physiological factors keeping insomnia going. It includes techniques like stimulus control, sleep restriction, cognitive restructuring, and targeted relaxation training.",
  },
  {
    question: "Is CBT-I more effective than taking standard sleeping pills?",
    answer:
      "While pharmacological options offer quick, temporary relief on the nights they are used, they do not resolve the root causes of sleep disruption. Clinical guidelines recommend CBT-I as the first-line treatment for chronic insomnia because it alters long-term habits, providing sustained sleep improvements even after the active therapy sessions are completed.",
  },
  {
    question: "How long does a typical course of CBT-I take to complete?",
    answer:
      "A standard protocol is usually completed over several structured clinical sessions spaced one to two weeks apart. This deliberate pacing gives your body and brain enough time to break old conditioning, adopt new habits, and consolidate sleep blocks effectively.",
  },
  {
    question: "Can CBT-I help individuals with severe, long-term chronic insomnia?",
    answer:
      "Yes. CBT-I is specifically designed to treat chronic, deeply established insomnia. It addresses the conditioned anxiety, fear of sleeplessness, and irregular lifestyle habits that keep long-term sleep issues alive long after the original stress or trigger has disappeared.",
  },
  {
    question: "Are there any physical risks or side effects associated with CBT-I?",
    answer:
      "Because CBT-I is a behavioral therapy, it does not carry chemical side effects, risks of physical dependence, or morning grogginess. Some patients may feel temporary daytime tiredness during the initial week or two of sleep restriction therapy, but this resolves as sleep efficiency increases.",
  },
];

export default function CbtiInsomniaTherapyPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="CBT-I: Treating the Habits Behind Insomnia, Not Just a Bad Night"
        description="Many people believe that sleeping pills are the only way to deal with insomnia. For some, medication becomes a nightly habit that's hard to stop, even though it was only meant to be a short-term solution. Cognitive Behavioral Therapy for Insomnia (CBT-I) offers a different approach — a structured, evidence-based therapy that works on the habits and thought patterns keeping insomnia going, rather than simply helping you fall asleep for one night. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what it involves and what you can expect."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Clinical Behavioral Therapy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Addressing the Underlying Behavioral Patterns of Sleeplessness
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When chronic sleep disruptions take hold, the natural response is often to spend extra time lying awake in bed trying to rest, taking uncoordinated daytime naps, or relying heavily on prescription sedatives. While these behaviors are understandable ways to cope with fatigue, they can accidentally condition the brain to associate your bed with frustration and wakefulness instead of rest.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong className="text-[#0f172a]">Cognitive Behavioral Therapy for Insomnia (CBT-I)</strong> is an evidence-based approach that helps retrain your mind and body for natural sleep. Unlike sleeping pills, which act as temporary chemical solutions, CBT-I breaks down the psychological cycles and learned behaviors that keep insomnia active over time.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Working under the guidance of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, this specialized therapy helps re-establish a clear association between your bed and deep sleep. By tracking your patterns and adjusting your sleep routine, CBT-I addresses the true root causes of insomnia, helping you build healthy, long-term sleep habits.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg"
                alt="A relaxed individual winding down and reading comfortably in bed before falling asleep naturally"
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
            Who Can Benefit from a Structured CBT-I Protocol?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            CBT-I is highly recommended for adults facing persistent sleep issues or those looking to reduce their reliance on sleep aids:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Chronic & Long-Term Insomnia", desc: "For individuals struggling to fall asleep or stay asleep for multiple weeks, months, or even years." },
              { title: "Conditioned Bed Anxiety", desc: "Helps calm minds that feel alert or anxious the moment they hit the pillow, despite feeling exhausted all day." },
              { title: "Broken & Fragmented Sleep", desc: "Designed for those dealing with frequent nighttime awakenings or waking up too early in the morning without being able to drift back to sleep." },
              { title: "Sedative De-escalation Support", desc: "Provides a safe, behavioral foundation for individuals wanting to reduce their reliance on prescription or over-the-counter sleep aids under clinical guidance." },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Wondering if behavioral therapy is right for your sleep patterns? Schedule an evaluation to explore your options.
            </p>
            <BookAppointmentButton cta="Consult Doctor 🗓" />
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: CORE PROTOCOLS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Therapeutic Core
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              The Key Components of Cognitive Behavioral Therapy for Insomnia
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              CBT-I isn't a single technique. It uses a combination of several scientifically backed practices tailored to your specific type of insomnia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Stimulus Control Therapy</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Breaks the association between your bed and feelings of frustration. You'll learn to get out of bed if you're awake for more than 20 minutes, returning only when you are genuinely sleepy.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Sleep Restriction Therapy</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Limits your time in bed to match the actual hours you sleep. While it sounds counterintuitive, this temporary restriction builds up your body's natural sleep drive, turning fragmented sleep into solid blocks.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Cognitive Restructuring</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Identifies and restructures unrealistic thoughts about sleep loss (like "I can never function tomorrow if I don't sleep right now"), lowering the performance anxiety that keeps you awake.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Clinical Sleep Education</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Provides a clear understanding of normal sleep architecture, circadian biology, and realistic sleep expectations to alleviate unnecessary worry.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Targeted Relaxation Training</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Teaches systematic evidence-based methods, such as progressive muscle relaxation or structured breathing exercises, to reduce physical tension before sleep.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Sleep Diary Synthesis</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Utilizes daily patient log data to track improvements and fine-tune your schedule, ensuring your treatment matches your shifting needs.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL COMPARISON: CBT-I VS SLEEPING PILLS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Approach Comparison
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            CBT-I vs. Pharmacological Sleeping Aids
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            While sleep medications can be useful for temporary, acute disruptions, they work very differently than behavioral therapy for long-term health:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Behavioral Protocol (CBT-I)</th>
                  <th className="p-4">Pharmacological Solutions (Sleeping Pills)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Primary Focus</td>
                  <td className="p-4">Targets the root behavioral and psychological drivers of sleep issues.</td>
                  <td className="p-4">Provides temporary sedation to help you drift off on a given night.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Duration of Benefits</td>
                  <td className="p-4 text-emerald-600 font-semibold">Provides long-term, lasting improvement by building healthy sleep habits.</td>
                  <td className="p-4">Generally limited to the specific period you take the medication.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Long-Term Consistency</td>
                  <td className="p-4">Maintains its effectiveness over time without losing power.</td>
                  <td className="p-4">May lose effectiveness as tolerance develops, potentially leading to dependence.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Time to See Results</td>
                  <td className="p-4">Takes a few weeks to build up as new habits and patterns take root.</td>
                  <td className="p-4 font-semibold text-[#0f172a]">Offers fast, immediate relief right from the first few nights.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL TIMELINES & WHAT TO EXPECT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE PROCESS STEP BY STEP */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Treatment Map
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                What to Expect During Your Therapy Course
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              CBT-I is a collaborative, step-by-step process delivered over multiple sessions to give you time to adjust and practice:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Comprehensive Evaluation:</strong> We start with an initial look at your sleep history, baseline habits, and potential contributing factors.</p>
              <p>• <strong className="text-[#0f172a]">Baseline Logging:</strong> You will keep a structured sleep diary for 1–2 weeks to collect clear, real-world info on your current patterns.</p>
              <p>• <strong className="text-[#0f172a]">Custom Plan Creation:</strong> We combine select elements of stimulus control, sleep restriction, and cognitive tools tailored for you.</p>
              <p>• <strong className="text-[#0f172a]">Progress Reviews:</strong> We use routine check-ins to evaluate how your sleep is consolidating and adjust bedtimes as your sleep efficiency improves.</p>
            </div>
          </div>

          {/* THE RISKS OF DELAYED TREATMENT */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Clinical Significance
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Why Addressing Insomnia Early Matters
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Chronic, unmanaged insomnia rarely goes away on its own. Over time, it can grow deeper roots and affect many areas of your health and daily life:
              </p>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span>Can cause long-term disruptions to daytime alertness, concentration, and mood balance.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span>Often leads to lower day-to-day productivity and diminished physical energy levels.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span>Increases the risk of building poor sleep habits that make insomnia worse over time.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span>Can result in an accidental, long-term dependence on sleeping pills or sedatives.</span>
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE DR. MANISH AGGARWAL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Expert Care Philosophy
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for CBT-I?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                A successful sleep recovery strategy requires an understanding of your unique daily environment and routines. We reject one-size-fits-all treatments, focusing instead on identifying the precise behaviors and thought patterns behind your specific sleep struggles.
              </p>
              <p>
                Our specialized plans match your exact lifestyle and type of insomnia. This ensures you can consistently apply your behavioral goals without feeling overwhelmed or discouraged.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                If you are currently taking sleep aids, we offer supportive care to help you safely reduce your dependency, slowly replacing medications with reliable behavioral strategies as your natural sleep improves.
              </p>
              <p>
                By combining expert medical knowledge with a compassionate, patient-centered approach, we help you make lasting improvements to your sleep health.
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
                  Struggling With Insomnia? You Don't Have to Manage It Alone
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you've been dealing with persistent insomnia, or relying on sleeping pills for longer than you'd like, it may help to understand your options beyond medication. CBT-I offers a structured, evidence-based path that many people find effective for building better sleep over the long term.
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