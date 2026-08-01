import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is Positive Airway Pressure (PAP) Therapy?",
    answer:
      "PAP therapy is a highly effective, non-invasive treatment for sleep-disordered breathing. It uses a specialized medical device to deliver a continuous stream of pressurized, filtered air through a tube to a precisely fitted interface (mask), creating a pneumatic splint that keeps the upper respiratory tract open during sleep.",
  },
  {
    question: "What is the clinical difference between CPAP and BiPAP?",
    answer:
      "CPAP provides a single, unvarying air pressure level throughout both inhalation and exhalation. BiPAP delivers dual pressure levels: a higher Inspiratory Positive Airway Pressure (IPAP) to support inhalation, and a lower Expiratory Positive Airway Pressure (EPAP) to make exhalation easier and more comfortable.",
  },
  {
    question: "How is the ideal mask interface selected?",
    answer:
      "Interface selection is customized based on your unique facial structure, primary breathing route (nasal vs. oral), prescribed pressure settings, and overall comfort preferences. Options range from minimal nasal pillows to secure, full-face configurations.",
  },
  {
    question: "Will I need to use PAP therapy on a long-term basis?",
    answer:
      "For structural conditions like moderate-to-severe Obstructive Sleep Apnea, PAP therapy is generally a long-term treatment. However, significant changes in your health, such as substantial weight loss or airway alterations, can change your pressure requirements and are managed through long-term clinical monitoring.",
  },
  {
    question: "How long does the initial adjustment period typically last?",
    answer:
      "Most patients begin to adapt to the equipment within a few days to two weeks of consistent, nightly use. Using proper pressure titration, integrated humidification, and finding the right mask fit significantly shortens this adjustment period.",
  },
];

export default function PapTherapySleepApneaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="PAP Therapy: Making Sense of the Machine, the Mask, and What Comes Next"
        description="I've been told I need CPAP. Will I have to wear a mask every night? Is the machine difficult to use? If you've recently been advised to start PAP therapy, thoughts like these are completely normal. The good news is that with proper guidance, the right equipment, and correct pressure settings, PAP therapy is usually far more manageable than most people expect. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains what PAP therapy is, how it works, and what you can expect."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Respiratory Sleep Medicine
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Restoring Airway Stability and Natural Breathing Patterns
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                During deep sleep, the muscles within the upper airway naturally relax. For individuals with sleep-disordered breathing, this relaxation can cause the soft tissues to collapse, completely blocking or narrowing the airway. This forces the brain to trigger micro-arousals to restart breathing, disrupting your sleep cycle and straining the cardiovascular system.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong className="text-[#0f172a]">Positive Airway Pressure (PAP) Therapy</strong> provides a reliable solution to this mechanical issue. By delivering a gentle, calibrated stream of room air, the system creates a pneumatic splint within the respiratory tract, preventing structural collapse and allowing you to breathe smoothly throughout the night.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Led by <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, our approach focuses on precise customization. Rather than utilizing standard, uncalibrated pressure ranges, we carefully adjust the settings and fit of your PAP device to match your unique anatomy, ensuring the therapy is both highly effective and easy to live with.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="A patient sleeping soundly and comfortably while utilizing a modern, quiet PAP therapy system with a personalized mask interface"
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
            When Is PAP Airway Support Required?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            PAP therapy serves as a core treatment for several primary sleep and respiratory conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Obstructive Sleep Apnea (OSA)", desc: "For moderate-to-severe airway collapses characterized by loud snoring, visible gasping, and periodic drops in blood oxygen saturation levels." },
              { title: "Central Sleep Apnea (CSA)", desc: "Utilized when neurological signals fail to trigger respiratory effort, requiring specialized bilevel or adaptive backup pressure support." },
              { title: "Obesity Hypoventilation Syndrome (OHS)", desc: "Addresses shallow, insufficient respiration patterns during sleep, helping clear excess carbon dioxide from the bloodstream." },
              { title: "Chronic Respiratory Insufficiency", desc: "Provides necessary nocturnal breathing support for overlap syndromes, advanced respiratory conditions, or neuromuscular weakness." },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Experiencing morning headaches, loud snoring, or chronic daytime exhaustion? Let's determine if PAP support is right for you.
            </p>
            <BookAppointmentButton cta="Consult Doctor 🗓" />
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: CPAP VS BIPAP */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Device Modalities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Understanding the Technology: CPAP vs. BiPAP
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              While both systems provide positive airway pressure, they feature distinctly different delivery methods tailored to different patient needs:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Clinical Attribute</th>
                  <th className="p-4">CPAP (Continuous Modality)</th>
                  <th className="p-4">BiPAP (Bilevel Modality)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Pressure Profile</td>
                  <td className="p-4">Delivers one constant, unvarying pressure setting during both inhalation and exhalation.</td>
                  <td className="p-4">Alternates between a higher inhalation pressure (IPAP) and a lower exhalation pressure (EPAP).</td>
                  </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Primary Indications</td>
                  <td className="p-4">Standard, uncomplicated Obstructive Sleep Apnea cases.</td>
                  <td className="p-4">Central Apnea, Obesity Hypoventilation, or patients requiring high pressure support.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Expiratory Comfort</td>
                  <td className="p-4">Requires breathing out directly against the continuous prescribed incoming pressure stream.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Reduces pressure during exhalation, making it much easier and more comfortable to breathe out.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Adaptability Profile</td>
                  <td className="p-4">Simple, straightforward, and highly effective for most standard OSA anatomy profiles.</td>
                  <td className="p-4">Highly adjustable parameters designed for complex cardiopulmonary or respiratory cases.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* INTERFACE COMPARISON BLOCK */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Interface Ergonomics
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Selecting Your Mask Interface
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            The machine generates the pressure, but the mask ensures comfort and usability. Finding the right style is key to adjusting well to your therapy:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-sm">Nasal Mask</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Covers the nose entirely. Ideal for patients who breathe exclusively through the nose, offering a balanced, lightweight design with a clear field of vision.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-sm">Full Face Mask</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Encloses both the nose and mouth. Best for mouth-breathers or those with frequent nasal congestion, ensuring steady pressure delivery regardless of the breathing path.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-sm">Nasal Pillows</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Uses soft silicone inserts that fit directly at the nostrils. A minimal design preferred by active sleepers or individuals who experience claustrophobia.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-sm">Hybrid Systems</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">Combines under-the-nose seals with oral coverage. Delivers effective airflow for mouth-breathers while keeping the upper facial profile clear and unobstructed.</p>
            </div>
          </div>
        </section>

        {/* CLINICAL TITRATION METHODOLOGY & RISK ASSESSMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* WHAT IS TITRATION */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Calibration Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                The Clinical Role of Pressure Titration
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Titration is the process of identifying the exact pressure required to keep your airway open without causing discomfort or disturbing your sleep. We achieve this using two primary methods:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Manual Sleep-Lab Titration:</strong> Performed during an overnight sleep study, where a technologist monitors your breathing metrics and adjusts pressure levels in real time.</p>
              <p>• <strong className="text-[#0f172a]">Auto-Titrating Technology (APAP):</strong> Uses smart, responsive algorithms at home to continuously monitor your breathing patterns and adjust pressure within a preset range as your sleep position changes.</p>
            </div>
          </div>

          {/* MANAGING ADAPTATION CHALLENGES */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Therapy Optimization
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Overcoming Common Adaptation Challenges
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                It is entirely normal to experience a short adjustment period when starting PAP therapy. Most common comfort issues can be easily managed with simple adjustments:
              </p>
              <div className="space-y-2 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>• <strong className="text-white">Dryness or Congestion:</strong> Managed by adjusting the device's integrated heated humidifier and heated tubing settings.</p>
                <p>• <strong className="text-white">Air Leaks or Redness:</strong> Resolved by evaluating your mask size and adjusting the headgear straps for a secure, comfortable fit.</p>
                <p>• <strong className="text-white">Claustrophobia or Anxiety:</strong> Remedied by practicing with the mask while awake during the day, or switching to a minimal nasal pillow interface.</p>
                <p>• <strong className="text-white">Exhalation Difficulty:</strong> Managed by enabling your device's expiratory pressure relief feature to reduce resistance when breathing out.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RECOVERY AND PATIENT BENEFITS */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 border border-slate-200/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
            Therapeutic Outcomes
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[#0f172a] leading-tight mb-4">
            Systemic Benefits of Consistent Airway Stabilization
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            When maintained consistently, stabilizing your airway during sleep leads to significant, measurable improvements across many areas of your health:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Restored Sleep Cycles", text: "Eliminates regular nighttime awakenings, allowing your body to sustain the deep, restorative sleep stages it needs." },
              { title: "Enhanced Cognitive Clarity", text: "Improves your daytime focus, concentration, memory retention, and overall mental alertness." },
              { title: "Cardiovascular Support", text: "Reduces regular drops in oxygen levels, helping stabilize blood pressure and reduce strain on the heart." },
              { title: "Vibrant Daytime Energy", text: "Resolves chronic morning fatigue and daytime sleepiness, helping you feel genuinely refreshed when waking up." },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-2xs space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{benefit.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{benefit.text}</p>
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
            Clinical Approach
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for Sleep Apnea Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                Successful PAP therapy requires regular personalization and ongoing support. We reject standard, automated approaches, ensuring your treatment begins with a meticulous review of your diagnostic sleep architecture and unique anatomy.
              </p>
              <p>
                Our team provides detailed guidance on machine operation, strict compliance monitoring, and hands-on mask fitting to streamline your initial adjustment period.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We use built-in data tracking to monitor your therapy usage, quickly identifying and resolving any early issues with leaks or pressure settings.
              </p>
              <p>
                By combining comprehensive pulmonology experience with a supportive, patient-first philosophy, we help you achieve long-term success with your therapy.
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
                  Been Advised to Start PAP Therapy?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you've recently been diagnosed with sleep apnea or are finding it difficult to adapt to your current CPAP setup, you don't have to navigate it alone. A precisely fitted interface and customized pressure settings will transform your treatment experience.
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