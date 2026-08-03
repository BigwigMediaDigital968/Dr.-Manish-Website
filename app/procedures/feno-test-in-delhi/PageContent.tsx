import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "Is the FeNO test painful?",
    answer:
      "No. It simply involves breathing out slowly into a small handheld device. There is no needle, no sedation, and no discomfort involved.",
  },
  {
    question: "How is FeNO different from spirometry?",
    answer:
      "Spirometry measures airflow through your airways, while FeNO measures the level of airway inflammation directly. The two tests give different, complementary information about your lung health.",
  },
  {
    question: "Can FeNO testing confirm I have asthma?",
    answer:
      "FeNO testing supports an asthma diagnosis when used alongside your symptoms, history, and other tests such as spirometry. It is a strong piece of the puzzle rather than a standalone diagnostic test.",
  },
  {
    question: "Will this test tell me if my inhaler is working?",
    answer:
      "Yes, in many cases. A falling FeNO level over time on treatment often suggests that inflammation is being well controlled, while a persistently high level may suggest treatment needs to be adjusted.",
  },
  {
    question: "Is this test suitable for children?",
    answer:
      "Yes, FeNO testing is generally well tolerated by children old enough to follow simple breathing instructions, and it is commonly used to help diagnose and monitor asthma in younger patients as well.",
  },
];

export default function PageContent() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="FeNO Testing in Delhi, A Simple Breath Test That Reveals Hidden Airway Inflammation"
        description="Offered by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, with 24+ years of experience diagnosing and managing asthma and airway disease."
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
                Fractional Exhaled Nitric Oxide
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                The Idea Behind This Test
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                FeNO stands for fractional exhaled nitric oxide, a gas naturally produced in the airways that rises when there is inflammation present, particularly the type of inflammation seen in allergic asthma. The FeNO test measures the level of this gas in a single breath you exhale into a small handheld device.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Because it directly reflects airway inflammation rather than just airflow, it gives the doctor information that a standard breathing test like spirometry cannot provide on its own, helping to confirm a diagnosis and fine-tune treatment.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/7238312153755818762_0"
                alt="Patient performing a non-invasive FeNO breath assessment for airway inflammation tracking"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* WHY PATIENTS TRUST THIS CLINIC */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Clinical Excellence
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Why Patients Choose This Clinic for FeNO Testing
              </h2>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <BookAppointmentButton cta="Book Your FeNO Test →" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b]">
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">24+ years</strong> of clinical experience diagnosing and managing asthma and other airway conditions.</p>
              <p>• <strong className="text-[#0f172a]">Academic Foundations:</strong> MBBS, MD (Tuberculosis & Chest Diseases), FRCP (Glasgow), trained at premier Indian institutes.</p>
              <p>• <strong className="text-[#0f172a]">Hospital Affiliation:</strong> Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, also practicing at his private clinic in Pitampura, Delhi.</p>
              <p>• <strong className="text-[#0f172a]">Holistic Approach:</strong> Results are interpreted directly by Dr. Aggarwal alongside your spirometry findings, symptoms, and treatment history, giving a fuller picture rather than a single isolated number.</p>
              <p>• <strong className="text-[#0f172a]">Therapeutic Precision:</strong> Frequently used to guide decisions on inhaled steroid therapy and to help distinguish asthma from other causes of cough or breathlessness.</p>
            </div>
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">Global Fellowships:</strong> International clinical exposure across leading NHS hospitals in the UK, including Lister Hospital (Stevenage), Norfolk & Norwich University Hospital, The Queen Elizabeth Hospital (King's Lynn), The Great Western Hospital (Swindon), and Diana Princess of Wales Hospital (Grimsby).</p>
              <p>• <strong className="text-[#0f172a]">Professional Standings:</strong> Active member of respected global and national bodies, including the European Respiratory Society (ERS), American College of Physicians (ACP), Society of Critical Care Medicine (SCCM, USA), European Society of Intensive Care Medicine (ESICM), and Indian Chest Society.</p>
              <p>• <strong className="text-[#0f172a]">Patient Validation:</strong> Rated 4.9 on Google with 350+ verified patient reviews, known for a patient-first, clearly-explained approach to care.</p>
            </div>
          </div>
        </section>

        {/* SITUATIONS WHERE FENO HELPS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Situations Where FeNO Testing Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Support the diagnosis of asthma, particularly when symptoms or spirometry results are unclear",
              "Distinguish allergic, inflammation-driven asthma from other causes of cough, wheeze, or breathlessness",
              "Help decide whether inhaled corticosteroid therapy is likely to be beneficial",
              "Monitor whether a patient is responding to asthma treatment as expected",
              "Check whether inhaler technique or adherence may be contributing to poor symptom control, since inflammation levels often reflect how well treatment is actually being used",
              "Investigate a chronic cough where allergic airway inflammation is suspected"
            ].map((text, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs flex items-start">
                <span className="text-[#1fa8e8] font-bold mr-2 text-sm">✓</span>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONDITIONS CLARIFIED */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Pathological Spectrum
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions and Situations This Test Can Clarify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Asthma Profiles", desc: "Especially allergic or eosinophilic asthma, where airway inflammation is a defining clinical feature." },
              { title: "Chronic Cough of Uncertain Cause", desc: "Assessing cases where allergic airway inflammation is a highly suspected contributor." },
              { title: "Poorly Controlled Asthma", desc: "Checking whether ongoing inflammation suggests a need for rapid treatment adjustment." },
              { title: "Steroid-Responsive Airway Disease", desc: "Helping reliably predict whether a patient is likely to benefit from specialized inhaled steroids." },
              { title: "Overlap Pathologies", desc: "Between asthma and other conditions like vocal cord dysfunction or non-allergic rhinitis, where FeNO adds needed clarity." }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed border-t border-slate-100 pt-4">
            If you have symptoms that suggest asthma but the diagnosis isn't entirely clear, or if your current treatment doesn't seem to be working as expected, FeNO testing can add valuable information that guides the next step.
          </p>
        </section>

        {/* BRIDGING BANNER */}
        <section className="relative overflow-hidden rounded-3xl bg-amber-500 p-6 sm:p-10 shadow-md text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-xl font-bold tracking-tight text-slate-950 text-center sm:text-left">
            Wondering if inflammation is behind your symptoms?
          </p>
          <div className="shrink-0 w-full sm:w-auto">
            <BookAppointmentButton cta="Ask About FeNO Testing →" />
          </div>
        </section>

        {/* COMPARATIVE MODALITIES SECTION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Integration
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              FeNO Alongside Your Other Lung Tests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Spirometry Airflow</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Spirometry shows how well air moves through your airways, but it can appear completely normal even when deep tissue inflammation is active.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">FeNO Biomarkers</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                FeNO specifically measures airway inflammation, adding a reliable layer of molecular information that standard airflow sweeps cannot capture.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Integrated Panels</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Used together, these tests give a more complete assessment, especially useful when baseline symptoms and spirometry results do not fully agree.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 italic font-medium pt-2">
            *Dr. Aggarwal will advise whether FeNO should be combined with spirometry or a full PFT based on your specific case.
          </p>
        </section>

        {/* PREPARATION & PROCEDURAL FLOW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* APPOINTMENT PREPARATION */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Patient Instructions
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Preparing for Your Appointment
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• Avoid eating, drinking, or smoking for at least one hour before the test, as these can affect the baseline reading.</p>
              <p>• Avoid vigorous exercise immediately before the test.</p>
              <p>• If you are already using an inhaled steroid, let the clinic know, as this may influence your result and how it is interpreted.</p>
              <p>• No special fasting or sedation is required, as this is a quick, completely non-invasive breath test.</p>
            </div>
          </div>

          {/* WHAT THE TEST INVOLVES */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedural Stages
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What the Test Involves
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Interface Setup:</strong> You will be shown how to breathe into a small, handheld FeNO device through a specialized disposable mouthpiece.
                </p>
                <p>
                  <strong className="text-white">Controlled Pace:</strong> You take a normal breath in, then exhale slowly and steadily into the device at a controlled, even pace, usually guided by an interactive visual cue on the screen.
                </p>
                <p>
                  <strong className="text-white">Readout Verification:</strong> The device measures the level of nitric oxide in your breath and displays a metric readout within a minute. The test may be repeated once or twice to confirm stability. The process takes roughly 5 to 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY & AFTERCARE DYNAMICS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Safety Metrics
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Aftercare Expectations, Safety Protocols & Follow-Up Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">After Your Test</h4>
              <p>
                There is no clinical recovery time needed, and you can resume your normal day-to-day activities immediately. Results are available instantly, and Dr. Aggarwal reviews them the same day alongside your symptoms and history to make necessary modifications to your current asthma treatment plan.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">How Safe Is This Test?</h4>
              <p>
                FeNO testing is one of the safest and simplest tests used in modern respiratory medicine. It involves only normal, controlled breathing into a tracking device, with no needles, sedation, or forceful expiratory maneuvers required. It is highly suitable for children old enough to follow simple visual instructions.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">When to Reach Out</h4>
              <p>
                You should contact our clinical care desk directly if you notice ongoing respiratory symptoms despite treatment adjustments made after your test, newly developed or worsening breathlessness, chronic deep cough, wheezing, or any acute concerns regarding how your current asthma therapies perform.
              </p>
            </div>
          </div>
        </section>

        {/* QUESTIONS FOR APPOINTMENT */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Guidance
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Questions You Might Want to Ask During Your Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What does my FeNO result actually indicate about my airway inflammation?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How does this result affect my current treatment plan?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Should this test be repeated periodically to track my condition?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How does my FeNO result compare with my spirometry findings?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Could my symptoms be linked to something other than asthma?
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
                  Airway Inflammation Assessment Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Struggling to Pin Down the Cause of Your Cough or Wheeze?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  A quick FeNO test can uncover inflammation that other tests miss. Get tested and get clear answers from Dr. Manish Aggarwal, Delhi's leading pulmonologist with 24+ years of asthma and airway care experience.
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