import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "What exactly happens during a CPAP/BiPAP titration sleep study?",
    answer:
      "A titration study is a specialized, overnight clinical procedure where you sleep with a PAP mask connected to an advanced diagnostic device. As you sleep, an experienced sleep technologist continuously monitors your physiological data from an adjacent control room, incrementally adjusting the therapeutic air pressure to eliminate obstructive hypopneas, apneas, snoring, and micro-arousals.",
  },
  {
    question: "Why can't I just buy an auto-adjusting (APAP) machine instead of a titration study?",
    answer:
      "While auto-adjusting machines change pressures based on algorithms, they cannot anticipate complex neurological events like central sleep apneas, nor can they optimize expiratory pressure relief for patients with low lung compliance. A manual clinical titration determines a precise, stable therapeutic pressure range, minimizing mask leaks, reducing aerophagia (swallowing air), and maximizing clinical compliance.",
  },
  {
    question: "What is the core structural difference between CPAP and BiPAP therapy?",
    answer:
      "CPAP (Continuous Positive Airway Pressure) delivers a single, unchanging pressure level throughout both inhalation and exhalation. BiPAP (Bilevel Positive Airway Pressure) delivers two distinct pressures: a higher Inspiratory Positive Airway Pressure (IPAP) to support inhalation, and a lower Expiratory Positive Airway Pressure (EPAP) to allow easy exhalation, making it ideal for high-pressure needs or complex cardiopulmonary cases.",
  },
  {
    question: "Will I be able to sleep normally with all the diagnostic sensors attached?",
    answer:
      "Most patients fall asleep successfully and maintain a representative sleep architecture. The advanced surface sensors, elastic respiratory effort bands, and specialized masks are designed for maximum flexibility and comfort. If you need to use the washroom during the night, the sleep technician can quickly disconnect the central monitoring tether.",
  },
  {
    question: "Under what clinical conditions should my existing PAP pressure settings be re-titrated?",
    answer:
      "A repeat titration study is clinically indicated if you experience a significant shift in body weight (a variance of **10%** or more), develop new cardiovascular or neuromuscular symptoms, experience persistent daytime lethargy despite good compliance metrics, or show structural changes in upper airway patency.",
  },
];

export default function CpapBipapTitrationPageContent() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="CPAP/BiPAP Titration: Procedure, Benefits & What to Expect"
        description="Starting CPAP or BiPAP therapy can feel a little overwhelming at first, especially if you are not sure what pressure setting is right for you. Using a pressure that is too low may not treat your breathing problem effectively, while a pressure that is too high can feel uncomfortable and make it harder to stick with therapy. CPAP/BiPAP titration is a specialized sleep study designed to solve exactly this problem. It helps your sleep specialist find the precise pressure setting that keeps your airway open through the night, while remaining as comfortable as possible for you personally."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* PROCEDURE OVERVIEW */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Clinical Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Calibrating Custom Pressure for Optimal Upper Airway Stability
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A CPAP/BiPAP titration study is a rigorous, data-driven overnight evaluation designed to eliminate guesswork from positive airway pressure therapy. Because upper airway resistance varies dramatically based on soft tissue mass, craniofacial structure, and sleep stage transitions, standard fixed pressures rarely achieve optimal therapeutic balance.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                During this monitored study, a sleep technician tracks real-time physiological markers—including <strong className="text-[#0f172a]">respiratory effort wave shapes, blood oxygen saturation ($SpO_2$), cardiac rhythms, and micro-arousals</strong>—while incrementally adjusting the therapeutic air pressure.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Under the medical guidance of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, this fine-tuning helps identify your optimal pressure baseline. The goal is to maximize column patency in the pharynx while keeping expiration resistance low enough to ensure comfortable, natural breathing.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
                alt="A clinical sleep laboratory technician adjusting automated titration software settings during an overnight medical sleep evaluation"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* CLINICAL INDICATIONS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Patient Selection
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Who Requires a Formal CPAP/BiPAP Titration Study?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Titration is essential across several distinct clinical scenarios to ensure safe and effective therapy:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#0f172a] text-sm">Newly Diagnosed Sleep Apnea</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Establishes an accurate, objective pressure baseline for patients diagnosed with moderate-to-severe Obstructive Sleep Apnea before they begin home device configuration.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#0f172a] text-sm">Therapy Intolerance & Discomfort</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Helps identify systemic leaks or aerophagia in patients struggling with high fixed pressures, determining if a switch to bilevel (BiPAP) tracking is necessary.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#0f172a] text-sm">Persistent Daytime Fatigue</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Investigates why patients using PAP devices still experience daytime lethargy or micro-arousals, adjusting settings to cover undetected dynamic pressure needs.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#0f172a] text-sm">Anatomical & Weight Changes</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Re-calibrates target settings following significant weight fluctuations, upper airway surgeries, or tissue remodeling that changes the collapse threshold.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#0f172a] text-sm">Central & Mixed Sleep Apneas</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Manages complex conditions where breathing pauses stem from neurological signaling changes rather than physical blockages, requiring precise bilevel backup rates.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#0f172a] text-sm">Hypoventilation Syndromes</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Provides precise hypercapnic tracking for Obesity Hypoventilation Syndrome patients, ensuring adequate gas exchange and clearing nocturnal carbon dioxide.
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS - CORE THERAPEUTIC IMPACTS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Therapeutic Benefits
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            The Clinical Value of Accurate Pressure Titration
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Finding the ideal pressure setting does more than improve comfort; it directly enhances systemic health outcomes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Complete Airway Security", desc: "Maintains a constant pneumatic splint across the soft palate, preventing upper tissue collapse during deep REM sleep stages." },
              { title: "Stabilized Oxygen Saturation", desc: "Eliminates deep oxygen drops, shielding the heart from acute hypoxemic stress and morning vascular spikes." },
              { title: "Deep Sleep Restoration", desc: "Reduces micro-arousals, allowing the brain to enter deeper, more restorative stages of slow-wave sleep." },
              { title: "Enhanced Device Compliance", desc: "Minimizes structural mask leaks, eye irritation, and dry mouth, making it easier to stick with long-term therapy." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE AND EXPERIENCE GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE PROCEDURE PIPELINE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Clinical Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Step-by-Step Overnight Clinical Workflow
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Lab Intake & Setup:</strong> You arrive at our private sleep room in the evening to settle into a relaxed, comfortable environment.</p>
              <p>• <strong className="text-[#0f172a]">Sensor & Interface Fitting:</strong> Painless surface sensors map your brain activity, while a comfortable mask is selected for your face shape.</p>
              <p>• <strong className="text-[#0f172a]">Monitored Pressure Calibration:</strong> As you sleep, a technologist carefully increases pressures to clear upper airway blockages.</p>
              <p>• <strong className="text-[#0f172a]">Physician Review:</strong> Dr. Manish Aggarwal analyzes the overnight data metrics to write your final home medical equipment prescription.</p>
            </div>
          </div>

          {/* EXPECTATION AND LAB ANATOMY */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Patient Expectations
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What to Expect During Your Overnight Titration
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Is the procedure painful?</strong> No. The surface monitoring nodes are non-invasive and attach with water-soluble paste. The mask should feel secure and sealed, never tight or painful.
                </p>
                <p>
                  <strong className="text-white">How do I use the washroom?</strong> If you need to get up during the night, simply let the technician know through the patient intercom. They will quickly disconnect the master cable array and reconnect it when you return.
                </p>
                <p>
                  <strong className="text-white">What should I bring?</strong> Bring comfortable, loose-fitting nightwear (preferably two-piece button-up styles), your regular bedtime medications, and personal toiletries to help maintain your usual evening routine.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule Your Titration Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* AFTERCARE AND LONG TERM THERAPY MANAGEMENT */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Continuum of Care
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            The Ongoing Journey After Your Titration Study
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            A successful overnight study provides the baseline data needed to build your personalized long-term home therapy plan:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                • <strong className="text-[#0f172a]">Device Configuration:</strong> Your precise therapeutic values are programed directly into your home device, avoiding generic factory presets that can cause therapy failure.
              </p>
              <p>
                • <strong className="text-[#0f172a]">Custom Interface Selection:</strong> We guide you through selecting the right nasal pillows, nasal masks, or full-face interfaces based on your preferred sleep positions and breathing habits.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                • <strong className="text-[#0f172a]">Data-Driven Follow-Ups:</strong> Structured checkups allow us to download your device's usage logs, analyze real-time leak rates, and make minor pressure updates as your comfort improves.
              </p>
              <p>
                • <strong className="text-[#0f172a]">Adapting to Lifestyle Shifts:</strong> As you achieve body composition milestones or resolve nasal congestion issues, we modify your pressure prescription to keep up with your changing health needs.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL STANDARDS WITH DR. MANISH AGGARWAL */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Expert Oversight
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Trust Dr. Manish Aggarwal for Your PAP Titration?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                Every step of your titration pathway is managed directly by a dedicated sleep physician. Dr. Manish Aggarwal coordinates the entire diagnostic process, ensuring that your mask fitting, pressure adjustments, and device setup are tailored to your health profile.
              </p>
              <p>
                We emphasize patient education, taking the time to explain your overnight charts so you feel confident operating your therapy equipment at home.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our specialized sleep team provides prompt technical support, assisting you with early issues like mask leaks or pressure adjustment difficulties.
              </p>
              <p>
                By linking advanced sleep laboratory diagnostics with long-term clinical care, we help you achieve deep, quiet, and restorative sleep.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center sm:text-left">
            <BookAppointmentButton cta="Book a Titration Consultation with Dr. Manish Aggarwal Today 📅" />
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
                  If your doctor has recommended CPAP or BiPAP therapy, or you have been struggling with your current settings, a titration study can help find the right pressure for comfortable, effective treatment.
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