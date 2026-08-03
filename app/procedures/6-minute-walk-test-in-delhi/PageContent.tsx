import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "Is the 6 minute walk test difficult or exhausting?",
    answer:
      "You walk at your own comfortable pace and can rest briefly if needed. The goal is to cover as much distance as you comfortably can in six minutes, not to push yourself to exhaustion.",
  },
  {
    question: "Why is this test done instead of just checking my oxygen levels at rest?",
    answer:
      "Many lung and heart conditions only cause noticeable oxygen drops or symptoms during activity, which resting tests can completely miss. Walking for a sustained period reveals problems that would otherwise go undetected.",
  },
  {
    question: "Will I need oxygen during the test?",
    answer:
      "Most patients do not need supplemental oxygen during the test itself, though if your levels drop significantly, the team will manage this appropriately and it becomes part of the information used to guide your treatment.",
  },
  {
    question: "How is this test different from spirometry or a PFT?",
    answer:
      "Spirometry and PFT measure lung function while you breathe in a controlled way at rest. The 6 minute walk test measures how your heart, lungs, and oxygen levels actually respond during real physical activity.",
  },
  {
    question: "Will this test be repeated over time?",
    answer:
      "For many chronic conditions, yes. Repeating the test periodically helps track whether your condition is stable, improving, or progressing, and whether treatment is having the desired effect.",
  },
];

export default function PageContent() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="6 Minute Walk Test in Delhi, Understanding How Your Lungs Perform During Everyday Activity"
        description="Offered by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, with 24+ years of experience in respiratory and exercise-related lung assessment."
        ctaText="Book Appointment"
        backgroundImage="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
      />

      {/* TRUST STRIP */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wide text-center">
          <div>24+ Years Clinical Experience</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>Same-Day Testing Available</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>4.9 Google Rating (350+ Verified Reviews)</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>FRCP (Glasgow)</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>50,000+ Patients Treated</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Functional Exertion Capacity
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                The Purpose Behind This Test
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                The 6 minute walk test, often shortened to 6MWT, is a straightforward way to measure how well your heart and lungs work together during a sustained physical effort. You simply walk at your own pace for six minutes on a flat, measured course, while your oxygen levels, heart rate, and breathlessness are tracked throughout.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Unlike tests performed at rest, this test reflects how your body actually copes with everyday activity, making it one of the most practical ways to assess functional capacity in chronic lung and heart conditions.
              </p>
            </div>
            {/* <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/59163568658237766_0"
                alt="Clinical setting monitoring a patient during a functional 6-minute walk diagnostic assessment"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div> */}
          </div>
        </section>

        {/* CLINICAL EXPERIENCE MATRIX */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Exercise-Related Assessment
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                The Experience Behind Your Assessment
              </h2>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <BookAppointmentButton cta="Book Your 6 Minute Walk Test →" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b]">
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">24+ years</strong> of clinical experience managing chronic respiratory and lung conditions.</p>
              <p>• <strong className="text-[#0f172a]">Credentials:</strong> MBBS, MD (Tuberculosis & Chest Diseases), FRCP (Glasgow), trained at premier Indian institutes.</p>
              <p>• <strong className="text-[#0f172a]">Current Role:</strong> Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, also practicing at his private clinic in Pitampura, Delhi.</p>
              <p>• <strong className="text-[#0f172a]">Integrated Review:</strong> Test results, including distance walked and oxygen desaturation, are personally reviewed by Dr. Aggarwal in the context of your diagnosis and treatment plan.</p>
              <p>• <strong className="text-[#0f172a]">Dynamic Insight:</strong> Frequently used to assess conditions such as interstitial lung disease and COPD, where this test provides insight that resting measurements cannot capture.</p>
            </div>
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">International Exposure:</strong> Clinical work across leading NHS hospitals in the UK, including Lister Hospital (Stevenage), Norfolk & Norwich University Hospital, The Queen Elizabeth Hospital (King's Lynn), The Great Western Hospital (Swindon), and Diana Princess of Wales Hospital (Grimsby).</p>
              <p>• <strong className="text-[#0f172a]">Professional Memberships:</strong> Active member of respected global and national bodies, including the European Respiratory Society (ERS), American College of Physicians (ACP), Society of Critical Care Medicine (SCCM, USA), European Society of Intensive Care Medicine (ESICM), and Indian Chest Society.</p>
              <p>• <strong className="text-[#0f172a]">Patient-First Mindset:</strong> Rated 4.9 on Google with 350+ verified patient reviews, known for a patient-first, clearly-explained approach to care.</p>
            </div>
          </div>
        </section>

        {/* REASONS FOR TESTING */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            When This Test Tends to Be Recommended
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Assess the severity of breathlessness during physical activity in chronic lung conditions",
              "Detect drops in oxygen levels during exertion that may not show up on tests done at rest",
              "Evaluate whether a patient may benefit from supplemental oxygen during activity",
              "Track disease progression over time in conditions like interstitial lung disease and COPD",
              "Measure response to treatment, including medication changes or pulmonary rehabilitation",
              "Assess overall functional capacity before certain treatments or as part of a lung transplant workup"
            ].map((text, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs flex items-start">
                <span className="text-[#1fa8e8] font-bold mr-2 text-sm">✓</span>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONDITIONS COMMONLY MONITORED */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Pathological Context
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Commonly Monitored With This Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Interstitial Lung Disease (ILD) & Fibrosis", desc: "Where exertional oxygen desaturation is an important marker of disease severity." },
              { title: "Chronic Obstructive Pulmonary Disease (COPD)", desc: "To assess functional limitation and guide oxygen therapy decisions." },
              { title: "Pulmonary Hypertension", desc: "Where walk distance is used to track disease progression and treatment response." },
              { title: "Post Lung Transplant Evaluation", desc: "Both before and after transplantation, to assess functional recovery." },
              { title: "Chronic Heart and Lung Conditions Overlap", desc: "Where breathlessness on exertion needs objective measurement." },
              { title: "Unexplained Exertional Breathlessness", desc: "To observe how oxygen levels and heart rate behave during real activity." }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed border-t border-slate-100 pt-4">
            If you feel breathless during daily activities but your resting tests look reasonably normal, the 6 minute walk test can reveal what is actually happening when your body is working.
          </p>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden rounded-3xl bg-amber-500 p-6 sm:p-10 shadow-md text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-xl font-bold tracking-tight text-slate-950 text-center sm:text-left">
            Breathless with activity but resting tests look fine?
          </p>
          <div className="shrink-0 w-full sm:w-auto">
            <BookAppointmentButton cta="Get a Functional Assessment →" />
          </div>
        </section>

        {/* FUNCTIONAL INTEGRATION PANEL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Dynamic Diagnostic Layers
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              How This Test Complements Other Lung Tests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Resting Baselines</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Spirometry and PFT panels measure core lung function at rest, under highly controlled breathing parameters.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Real Exertion Response</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                The 6 minute walk test measures how your heart, lungs, and oxygen levels respond during a real, sustained physical effort.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Synergistic Pictures</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Together, these workflows deliver a comprehensive diagnostic layout when exertional markers outperform resting trends.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 italic font-medium pt-2">
            *Dr. Aggarwal will advise whether this test should be combined with spirometry, PFT, or other assessments based on your condition.
          </p>
        </section>

        {/* PATIENT JOURNEY SPLIT GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* GETTING READY FOR THE TEST */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Patient Preparation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Getting Ready for the Test
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• Wear comfortable clothing and walking shoes suitable for a sustained, steady walk.</p>
              <p>• Take your regular medications as usual, unless the clinic advises otherwise for your specific case.</p>
              <p>• Avoid vigorous exercise for at least a couple of hours before the test, so your baseline reflects your normal resting state.</p>
              <p>• Eat a light meal before your appointment. Avoid coming on a completely empty stomach or right after a heavy meal.</p>
              <p>• Bring any walking aids you normally use, such as a cane or walker, as the test should reflect your usual walking ability.</p>
            </div>
          </div>

          {/* WHAT HAPPENS ON THE DAY OF TESTING */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Diagnostic Session
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What Happens on the Day of Testing
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Baseline Metrics:</strong> Initial parameters are measured beforehand, including oxygen level, heart rate, blood pressure, and a baseline subjective dyspnea rating.
                </p>
                <p>
                  <strong className="text-white">Continuous Tracking:</strong> A digital pulse oximeter clip tracks your arterial oxygen saturation and pulse rate continuously while you walk at your own pace back and forth on a flat course.
                </p>
                <p>
                  <strong className="text-white">Recovery Phase:</strong> The total distance covered is logged along with any desaturation trends. Metrics are repeated immediately following the walk to track physiological recovery. The appointment takes 20 to 30 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AFTERCARE & SAFETY CONSIDERATIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Safety Protocol
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Recovery Milestones, Safety Considerations & Clinical Surveillance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">After Your Walk Test</h4>
              <p>
                Most people feel a bit tired after the test, similar to a brisk walk, which easily settles with a short rest. No special recovery period is required; you can resume normal activities immediately. Dr. Aggarwal coordinates walk distance and oxygen trends alongside your clinical timeline to identify if therapeutic supplemental oxygen is required during activity.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">Safety Considerations</h4>
              <p>
                The 6MWT is highly safe since you manage your own pace, but it is structurally modified or postponed in clinical settings showing unstable angina, recent myocardial infarction, uncontrolled severe hypertension, or extreme resting baseline anomalies. The panel stops immediately if chest pain or severe dizziness develops.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">Clinical Surveillance</h4>
              <p>
                Please communicate with our medical team immediately if you observe persistent cardiac palpitations or chest localized pain that doesn't clear following standard post-test rest, unusually severe lingering breathlessness, severe dizzy episodes, or lightheaded fainting tendencies.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL DIALOGUE FRAME */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Communication
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Questions Worth Asking About Your Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What does my walk distance tell you about my current lung function?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Did my oxygen levels drop during the walk, and does that change my treatment plan?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Do I need supplemental oxygen during activity based on these results?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How often should this test be repeated to track my condition?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How does this result compare with my previous test, if I have had one before?
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL MEDICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Interventional Pulmonology Specialist, for an accurate diagnosis and personalised treatment plan.
        </div>

        {/* FINAL CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Functional Pulmonary Assessment Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Want to Know How Your Lungs Really Perform During Activity?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get an objective, real-world assessment with the 6 minute walk test, reviewed personally by Dr. Manish Aggarwal, Delhi's leading pulmonologist with 24+ years of respiratory care experience.
                </p>
                <div className="text-xs text-slate-400 space-y-1 pt-1">
                  <p>📍 <strong className="text-slate-300">Clinic Address:</strong> JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034</p>
                  <p>📞 <strong className="text-slate-300">Call Desk:</strong> +91 9899554095 &nbsp;|&nbsp; ✉️ <strong className="text-slate-300">Email:</strong> Aggarmanish@gmail.com</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center w-full sm:w-auto">
                <BookAppointmentButton cta="Book Appointment" />
                <a 
                  href="tel:+919899554095" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors text-center shadow-xs"
                >
                  Call Clinic Desk: +91 9899554095
                </a>
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}