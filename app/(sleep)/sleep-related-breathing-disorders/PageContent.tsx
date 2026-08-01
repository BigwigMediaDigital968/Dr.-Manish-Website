import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are sleep-related breathing disorders?",
    answer:
      "Sleep-related breathing disorders encompass a spectrum of clinical conditions characterized by abnormal respiration patterns during sleep. These range from chronic primary snoring and structural airway narrowing to complete, repeated cessations of breathing, significantly disrupting sleep architecture and systemic oxygenation.",
  },
  {
    question: "What are the primary causes of disrupted breathing during sleep?",
    answer:
      "Pathology varies by type: Obstructive Sleep Apnea is caused by the physical collapse of the upper airway tissues (often exacerbated by excess body weight or anatomy like enlarged tonsils). Central Sleep Apnea stems from transient neurological failures where the brain delays signals to the respiratory muscles. Chronic lung or heart diseases can also drive daytime and nighttime hypoventilation.",
  },
  {
    question: "Can loud snoring exist without a serious underlying sleep disorder?",
    answer:
      "While transient, mild snoring can occur due to temporary congestion or fatigue, loud, frequent, and disruptive snoring is rarely benign. When accompanied by gasping, choking, or witnessed breathing pauses, it serves as a primary indicator of Obstructive Sleep Apnea and requires professional diagnostic investigation.",
  },
  {
    question: "How are these nocturnal respiratory disorders diagnosed?",
    answer:
      "Diagnosis relies on a comprehensive sleep and medical history, upper airway clinical exams, and objective diagnostic monitoring. This includes advanced Home Sleep Testing (HST) for straightforward screening or comprehensive in-lab Level 1 Polysomnography (PSG) to track precise neural, cardiac, and respiratory metrics.",
  },
  {
    question: "Is surgical intervention mandatory for managing sleep apnoea?",
    answer:
      "No. The vast majority of sleep-related breathing disorders are managed highly successfully using non-invasive clinical therapies. These include gold-standard CPAP or BiPAP airway splinting, custom oral appliances, targeted weight management, and positional therapy. Surgery is exclusively reserved for clear, localized anatomical blockages that fail conservative treatment.",
  },
];

export default function SleepRelatedBreathingDisordersPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Sleep-Related Breathing Disorders: Symptoms, Diagnosis & Treatment"
        description="Good sleep depends on something most of us never think about — steady, uninterrupted breathing through the night. When breathing is repeatedly disturbed during sleep, the body never gets the chance to rest, repair, and recharge properly. Over time, this can affect your energy, concentration, mood, and even your heart health. The good news is that sleep-related breathing disorders are well understood in modern medicine. With the right evaluation, they can be accurately diagnosed and effectively managed, helping you sleep better and feel better during the day."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Clinical Sleep Medicine
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Addressing Chronic Nocturnal Respiratory Disruption
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Healthy physiology relies on continuous, unobstructed gas exchange throughout the night. During sleep, our muscles naturally relax; however, in patients with sleep-related breathing disorders, this relaxation causes significant physical airway blockages or neurological delays. This causes blood oxygen drops and micro-arousals that fracture deep sleep cycles.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong className="text-[#0f172a]">Sleep-Related Breathing Disorders</strong> include a broad category of clinical conditions—ranging from standard Obstructive Sleep Apnea to complex Central Apneas and severe hypoventilation syndromes. Left untreated, these conditions place continuous stress on the cardiovascular system and cause persistent daytime fatigue.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Under the expert direction of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, our clinical focus prioritizes mapping the precise cause of your respiratory disruption. By combining comprehensive pulmonology evaluations with advanced diagnostic metrics, we pinpoint whether your symptoms stem from upper airway collapse or central neurological signal delays.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="A clinical sleep specialist reviewing comprehensive sleep data graphs and oxygen saturation levels during a patient evaluation"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* CONDITION TYPES COMPARISON TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Classification
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Understanding the Variations of Sleep-Disordered Breathing
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Nocturnal breathing conditions present differently depending on the underlying physical anatomy or neurological pathway involved:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Clinical Modality</th>
                  <th className="p-4">Pathological Mechanism</th>
                  <th className="p-4">Common Clinical Findings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Obstructive Sleep Apnea (OSA)</td>
                  <td className="p-4">Physical relaxation causes the throat tissues to collapse and completely block the airway.</td>
                  <td className="p-4">Loud chronic snoring, visible gasping, tissue changes, and body weight correlations.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Central Sleep Apnea (CSA)</td>
                  <td className="p-4">The airway remains physically open, but the brain's respiratory center fails to trigger breathing signals.</td>
                  <td className="p-4">Silent pauses in breathing, frequently linked to heart failure or complex neurological histories.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Upper Airway Resistance (UARS)</td>
                  <td className="p-4">Persistent narrowing of the airway that increases breathing effort without full apnoea pauses.</td>
                  <td className="p-4">Frequent unexplained awakenings, chronic exhaustion, normal standard apnoea counts.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Obesity Hypoventilation (OHS)</td>
                  <td className="p-4">Shallow, insufficient breathing that causes poor oxygen levels and elevated carbon dioxide retention.</td>
                  <td className="p-4">Severe morning headaches, daytime lethargy, significant excess body weight.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Sleep-Related Hypoventilation</td>
                  <td className="p-4">Inadequate gas exchange during sleep, driven by respiratory wall restrictions or neuromuscular weakness.</td>
                  <td className="p-4">Chronic lung diseases (COPD overlap), muscular changes, or chest wall issues.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SYMPTOM CHECK LISTING */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Symptom Verification
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Recognizing the Clinical Signs of Sleep-Disordered Breathing
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Sleep breathing disorders can develop gradually. Many individuals become aware of these red flags only after feedback from a sleep partner:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Witnessed Apnoeic Pauses", text: "Partners notice frequent periods where breathing entirely stops, followed by sudden gasping or choking." },
              { label: "Excessive Daytime Sleepiness", text: "Feeling severe exhaustion during meetings, reading, or while driving, despite adequate time in bed." },
              { label: "Chronic Morning Headaches", text: "Waking up with a dull, throbbing headache caused by poor oxygen levels and carbon dioxide retention overnight." },
              { label: "Fragmented, Restless Sleep", text: "Tossing and turning throughout the night as the brain constantly triggers micro-arousals to restart breathing." },
              { label: "Xerostomia (Dry Mouth)", text: "Waking up with an uncomfortably dry mouth or throat, typically caused by constant mouth breathing." },
              { label: "Cognitive & Mood Alterations", text: "Noticing persistent difficulty concentrating, memory lapses, daytime irritability, or low mood." },
            ].map((symptom, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{symptom.label}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{symptom.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAUSES AND RISK FACTORS SPREAD */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* UNDERSTANDING CAUSES */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Etiology Profile
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Primary Triggers of Unstable Sleep Respiration
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Sleep breathing issues are multi-faceted and often develop from a combination of anatomical, lifestyle, and physiological risk factors:
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Anatomical Obstructions:</strong> Enlarged tonsils, adenoids, a deviated nasal septum, or chronic congestion that restricts natural nasal airflow.</p>
              <p>• <strong className="text-[#0f172a]">Adipose Tissue Deposition:</strong> Excess weight around the neck increases the physical pressure on the airway, making it collapse easily.</p>
              <p>• <strong className="text-[#0f172a]">Neurological Factors:</strong> Underlying heart conditions or neurological disorders that disrupt how the brain regulates breathing patterns.</p>
              <p>• <strong className="text-[#0f172a]">Systemic Adjustments:</strong> Natural loss of muscle tone in the upper airway due to aging, family history, or certain sedating medications.</p>
            </div>
          </div>

          {/* SYSTEMIC RISKS SECTION */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Cardiopulmonary Risk Assessment
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Why Sleep-Disordered Breathing Should Not Be Ignored
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Frequent nighttime breathing drops cause long-term, systemic stress on your body. Early management is vital to safeguard against:
              </p>
              <div className="space-y-2 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>• <strong className="text-white">Refractory Hypertension:</strong> Chronic drop in blood oxygen levels drives up blood pressure, making it difficult to control with medications alone.</p>
                <p>• <strong className="text-white">Cardiovascular Strain:</strong> Increases your risk of developing cardiac arrhythmias, heart failure, and stroke over time.</p>
                <p>• <strong className="text-white">Metabolic Complications:</strong> Sleep disruption is closely linked to increased insulin resistance, type 2 diabetes, and weight management challenges.</p>
                <p>• <strong className="text-white">Safety Vulnerabilities:</strong> Chronic exhaustion leads to a significantly higher risk of daytime motor vehicle and workplace accidents.</p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0 text-center sm:text-left">
              <BookAppointmentButton cta="Consult Doctor 📅" />
            </div>
          </div>
        </section>

        {/* THE DIAGNOSTIC PIPELINE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Diagnostic Journey
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Our Step-by-Step Pathway to an Accurate Diagnosis
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            We follow a structured protocol to map out your specific condition and build a tailored care plan:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#1fa8e8]">01 / CLINICAL HISTORY</div>
              <h4 className="font-bold text-[#0f172a] text-sm">Initial Evaluation</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">A thorough review of your health history, chronic symptoms, and specialized daytime sleepiness questionnaires.</p>
            </div>
            <div className="border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#1fa8e8]">02 / TARGETED SCREENING</div>
              <h4 className="font-bold text-[#0f172a] text-sm">Home Sleep Testing</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Using simplified, take-home diagnostic devices to track oxygen and airflow metrics for suitable patients.</p>
            </div>
            <div className="border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#1fa8e8]">03 / ADVANCED METRICS</div>
              <h4 className="font-bold text-[#0f172a] text-sm">Polysomnography</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">A comprehensive, overnight Level 1 sleep study in the lab to track brainwaves, breathing effort, and cardiac rhythms.</p>
            </div>
            <div className="border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#1fa8e8]">04 / EXPERT TITRATION</div>
              <h4 className="font-bold text-[#0f172a] text-sm">Pressure Calibration</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">When indicated, calibrating specialized CPAP or BiPAP pressure ranges to perfectly fit your airway shape.</p>
            </div>
          </div>
        </section>

        {/* CLINICAL TREATMENT INTERVENTIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Therapeutic Management
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Evidence-Based Treatment Options
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Treatment plans are fully customized, matching the exact type and severity of your condition with the most effective management options:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Positive Airway Pressure (PAP) Therapy</h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Includes gold-standard CPAP and BiPAP devices that deliver a calibrated stream of air through a comfortable mask, acting as a physical splint to keep the airway open all night.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Custom Oral Appliance Therapy</h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Lightweight, custom dental guards worn during sleep to gently hold the lower jaw or tongue forward, widening the breathing space for patients with mild-to-moderate positional sleep apnoea.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Clinical Lifestyle & Weight Management</h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Structured weight support and targeted position modification techniques to keep you sleeping on your side, reducing gravity-induced airway collapse.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">Specialized Advanced Care</h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Carefully coordinated surgical options for structural tissue removal, clearing nasal blockages, or using nocturnal oxygen therapy for complex central breathing conditions.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE DR. MANISH AGGARWAL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Expert Clinical Philosophy
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for Sleep Respiratory Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                Nocturnal breathing conditions are deeply linked to your overall lung function and cardiovascular health. Dr. Manish Aggarwal combines expert pulmonology training with advanced sleep medicine diagnostics to provide safe, comprehensive care.
              </p>
              <p>
                We do not believe in generic solutions. Your treatment path is carefully built using objective data from home sleep tests or detailed in-lab overnight sleep studies.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our team provides extensive support through every step of your care—from the initial mask fitting and regular pressure tweaks to tracking long-term usage data.
              </p>
              <p>
                By providing coordinated medical care and clear follow-up, we address the root cause of your symptoms to help you achieve deep, restful sleep and long-term health.
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
                  Don't Ignore Your Sleep Symptoms
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you snore loudly, experience breathing pauses, wake up gasping, or feel unusually tired during the day, it is worth having your sleep properly evaluated. Sleep-related breathing disorders are common, well understood, and manageable with the right care.
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