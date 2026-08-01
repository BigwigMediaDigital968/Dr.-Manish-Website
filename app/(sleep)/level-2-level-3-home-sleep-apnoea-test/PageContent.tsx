import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is a Level 2 home sleep study?",
    answer:
      "A Level 2 sleep study is an advanced, comprehensive home-based diagnostic test that records a broad range of physiological signals, closely mirroring an in-lab study. It tracks brain waves (EEG), eye movements (EOG), heart rhythms (ECG), muscle activity, and respiratory effort using a portable device, completely within the comfort of your own home without a technician present.",
  },
  {
    question: "What is a Level 3 home sleep study?",
    answer:
      "A Level 3 sleep study is a streamlined home-based diagnostic test that focuses primarily on cardiorespiratory metrics. It measures respiratory effort, airflow, oxygen saturation levels ($SpO_2$), and heart rate. While it does not record detailed sleep stages or neurological activity, it is highly accurate for patients with a strong clinical likelihood of moderate-to-severe Obstructive Sleep Apnea.",
  },
  {
    question: "Who is an ideal candidate for a Home Sleep Apnoea Test (HSAT)?",
    answer:
      "Home testing is highly suitable for patients presenting with classic signs of sleep-disordered breathing—such as loud chronic snoring, witnessed apnoeic pauses, morning headaches, or severe daytime exhaustion—who do not have complex co-morbidities like severe heart failure, advanced neuromuscular disorders, or suspected non-respiratory sleep disorders.",
  },
  {
    question: "How accurate are home sleep tests compared to in-lab studies?",
    answer:
      "For individuals with a high pre-test probability of Obstructive Sleep Apnea, Level 2 and Level 3 home tests are highly reliable, accurate, and clinically validated. However, if a home test returns a negative or inconclusive result despite persistent clinical symptoms, a comprehensive Level 1 in-lab Polysomnography is required to rule out milder or more complex variants.",
  },
  {
    question: "Are there strict guidelines to follow on the day of the home test?",
    answer:
      "Yes. To ensure clean data collection, patients must avoid daytime naps, eliminate caffeine and alcohol consumption in the afternoon and evening, and follow their normal bedtime routine. Sensor arrays must be placed exactly as directed by the clinical staff during your device briefing.",
  },
];

export default function HomeSleepApneaTestPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Level 2 and Level 3 Sleep Test (Home Sleep Apnoea Test)"
        description="Many people live for years with loud snoring, restless nights, or constant daytime tiredness, simply assuming this is normal. In reality, these can be signs of an underlying sleep-related breathing problem that has never been properly checked. A Level 2 or Level 3 Home Sleep Apnoea Test offers a convenient way to evaluate your breathing patterns overnight, in the comfort of your own bed, under the supervision and interpretation of a qualified sleep specialist. Identifying a sleep-related breathing problem early, and treating it appropriately, can help prevent it from affecting your long-term heart health, energy, and quality of life."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Portable Diagnostics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Accurate Overnight Monitoring in Your Familiar Environment
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A Home Sleep Apnoea Test (HSAT) bridges the gap between clinical excellence and lifestyle convenience. Instead of spending the night attached to wires in an unfamiliar clinical lab, advanced portable technology allows us to monitor critical cardiorespiratory channels while you rest naturally in your own bed.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                These tests record real-time shifts in <strong className="text-[#0f172a]">respiratory effort, upper airflow fluctuations, blood oxygen drop rates, and heart rhythms</strong>. By evaluating these patterns over a typical night, we can accurately diagnose Obstructive Sleep Apnea (OSA) and calculate your specific Apnea-Hypopnea Index (AHI).
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Under the medical direction of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, device selection is never arbitrary. We assess your physical symptoms and medical history during your consultation to determine if a Level 2 or Level 3 home configuration will provide the definitive data required for your care.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
                alt="A patient sleeping comfortably at home with a lightweight, multi-channel portable home sleep apnea testing device"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* STUDY LEVELS COMPARISON */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Tiers
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Comparing Level 1, Level 2, and Level 3 Sleep Studies
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Choosing the correct test level depends on your specific symptoms, health profile, and clinical tracking requirements:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Clinical Parameter</th>
                  <th className="p-4">Level 1 (In-Lab Study)</th>
                  <th className="p-4">Level 2 (Advanced Home Study)</th>
                  <th className="p-4">Level 3 (Cardiorespiratory Home)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Location</td>
                  <td className="p-4">Controlled Sleep Laboratory</td>
                  <td className="p-4 text-emerald-600 font-semibold">Patient's Home Environment</td>
                  <td className="p-4 text-emerald-600 font-semibold">Patient's Home Environment</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Monitoring Channels</td>
                  <td className="p-4">Full array: EEG, EOG, EMG, ECG, respiratory effort, and airflow.</td>
                  <td className="p-4">Comprehensive array: EEG, EOG, EMG, and core respiratory channels.</td>
                  <td className="p-4">Focused array: Respiratory effort, nasal airflow, heart rate, and $SpO_2$.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Supervision</td>
                  <td className="p-4">Continuous monitoring by a sleep technologist.</td>
                  <td className="p-4">Unsupervised; patient applies sensors at home.</td>
                  <td className="p-4">Unsupervised; patient applies sensors at home.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Neurological Data</td>
                  <td className="p-4">Tracks precise sleep stages, micro-arousals, and structures.</td>
                  <td className="p-4">Tracks sleep staging and neurological changes.</td>
                  <td className="p-4">Does not track sleep stages; maps breathing architecture.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Best Suited For</td>
                  <td className="p-4">Complex cardiopulmonary cases or unclear home results.</td>
                  <td className="p-4">Detailed staging requirements without the disruption of lab visits.</td>
                  <td className="p-4">Straightforward, highly likely cases of Obstructive Sleep Apnea.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL INDICATIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Who Should Consider a Home Sleep Apnoea Test?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            An overnight home evaluation is highly recommended if you or your family notice any of the following symptoms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Loud Chronic Snoring", desc: "Persistent, heavy snoring that regularly disrupts family members or can be heard through closed doors." },
              { title: "Witnessed Apnoeic Events", desc: "Clear pauses in breathing reported by a partner, often ending with a sudden snort, gasp, or choking sound." },
              { title: "Excessive Daytime Lethargy", desc: "Struggling to stay awake or losing concentration during routine afternoon tasks despite an adequate total sleep time." },
              { title: "Waking Vascular Symptoms", desc: "Frequent dull morning headaches or waking up with a severely dry mouth and throat from chronic mouth breathing." },
              { title: "Refractory Hypertension", desc: "High blood pressure readings that remain elevated despite taking multiple prescribed cardiovascular medications." },
              { title: "Metabolic Risk Profiles", desc: "Patients managing type 2 diabetes or significant excess weight, particularly around the neck and upper torso." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE AND PREPARATION SPREAD */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE DIAGNOSTIC SEQUENCE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Testing Sequence
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                The Structured Process of a Home Sleep Test
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              We ensure our home-based diagnostic pathway is straightforward, reliable, and completely stress-free:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Clinical Briefing:</strong> Our specialized staff provides a direct walkthrough of how to apply the small device and fit the sensors.</p>
              <p>• <strong className="text-[#0f172a]">Nocturnal Data Capture:</strong> You collect data as you sleep naturally at home, mapping your typical respiratory baseline.</p>
              <p>• <strong className="text-[#0f172a]">Device Return:</strong> Bring the portable system back the next day so our clinic can extract the raw data architecture.</p>
              <p>• <strong className="text-[#0f172a]">Specialist Analysis:</strong> Dr. Manish Aggarwal reviews the full diagnostic report to plan your treatment path.</p>
            </div>
          </div>

          {/* PATIENT PREPARATION GUIDE */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Preparation Guidelines
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                How to Secure a High-Quality Diagnostic Sample
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Following these basic guidelines prevents sensor dislodgement and ensures clean data formatting:
              </p>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span> 
                  <span><strong className="text-white">Avoid Daytime Naps:</strong> Ensure you are naturally tired at your usual bedtime to help gather consistent sleep hours.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span> 
                  <span><strong className="text-white">Eliminate Stimulants:</strong> Skip alcohol and caffeine in the afternoon and evening, as they can artificially alter upper airway tone.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span> 
                  <span><strong className="text-white">Maintain Routine Habits:</strong> Keep to your regular bedtime schedule, and wash your face to remove oils before placing the facial sensors.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span> 
                  <span><strong className="text-white">Keep Instructions Handy:</strong> Place the provided sensor layout guide on your nightstand for quick confirmation before sleep.</span>
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule Your Diagnostic Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* METRICS INTERPRETATION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Report Interpretation
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding Your Clinical Sleep Metrics
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            The raw data from your home test provides several key performance indicators that shape your final diagnosis:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                • <strong className="text-[#0f172a]">Apnea-Hypopnea Index (AHI):</strong> The core metric counting the total number of complete breathing stops (apneas) and partial reductions (hypopneas) per hour. This score determines whether your condition falls into the mild, moderate, or severe clinical threshold.
              </p>
              <p>
                • <strong className="text-[#0f172a]">Oxygen Desaturation Index (ODI):</strong> Tracks how often your blood oxygen drops below baseline levels during breathing interruptions, showing the stress placed on your heart and vascular system.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                • <strong className="text-[#0f172a]">Airflow & Effort Discrepancies:</strong> By matching upper airway nasal pressure against chest movement, we can differentiate between standard structural blockages (OSA) and central neurological delays (CSA).
              </p>
              <p>
                • <strong className="text-[#0f172a]">Snoring & Position Mapping:</strong> Monitors the continuity of tissue vibrations and checks if your breathing events are tied to specific sleep positions, such as sleeping flat on your back.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAY AFTER DIAGNOSIS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Post-Diagnostic Care
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Next Steps After a Sleep Apnoea Diagnosis
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Receiving an accurate diagnosis is the first step toward reclaiming your energy and protecting your long-term health. Depending on your results, care plans include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
              <h4 className="font-bold text-[#0f172a] text-sm">Targeted Conservative Care</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Using structured clinical weight management, positional positioning gear, and stopping sedating medications to naturally improve mild breathing issues.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
              <h4 className="font-bold text-[#0f172a] text-sm">Airway Splinting Systems</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Fitting personalized CPAP or BiPAP therapy devices to maintain continuous, gentle pressure and eliminate nighttime tissue collapse.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
              <h4 className="font-bold text-[#0f172a] text-sm">Orthotic & Specialist Care</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Referring suitable mild-to-moderate positional patients for custom oral devices, or organizing specialized ENT follow-ups for structural nasal blocks.</p>
            </div>
          </div>
        </section>

        {/* THE DR. MANISH AGGARWAL ADVANTAGE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Expert Specialization
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Comprehensive Sleep Management with Dr. Manish Aggarwal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                A sleep test report is only as good as the expertise behind its interpretation. As an experienced pulmonologist and sleep specialist, Dr. Manish Aggarwal looks beyond automated machine printouts to analyze your complex respiratory patterns.
              </p>
              <p>
                We carefully assess your respiratory baseline to ensure your home test setup captures clean data, avoiding the need for frustrating re-tests.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                If your home test results are inconclusive or point to a more complex disorder, we quickly arrange for an in-lab Level 1 sleep study within our coordinated care network.
              </p>
              <p>
                Our team remains by your side through every step of your care—from diagnostic testing to mask titration and long-term treatment checkups—to ensure you achieve restorative sleep.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center sm:text-left">
            <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 📅" />
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
                  Recognise These Symptoms in Yourself?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you snore loudly, have been told you stop breathing during sleep, or feel unusually tired during the day despite a full night in bed, it may be worth having your sleep properly evaluated with a Home Sleep Apnoea Test.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <BookAppointmentButton cta="Schedule Your Appointment 📅" />
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}