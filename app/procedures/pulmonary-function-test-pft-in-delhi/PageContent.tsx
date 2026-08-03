import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "How is a PFT different from spirometry?",
    answer:
      "Spirometry is one part of a PFT, measuring airflow. A complete PFT can also include lung volume measurement and diffusion capacity testing, giving a fuller picture of both how your lungs move air and how well they exchange oxygen.",
  },
  {
    question: "Is a pulmonary function test painful?",
    answer:
      "No. It involves breathing into a mouthpiece and, for some components, sitting in a small testing booth or breathing a harmless gas mixture. There is no needle or sedation involved.",
  },
  {
    question: "How long does a full PFT take?",
    answer:
      "A complete test with all components usually takes 30 to 45 minutes, depending on which parts are required for your evaluation.",
  },
  {
    question: "Will I need this test more than once?",
    answer:
      "Many chronic lung conditions are monitored with periodic PFTs to track progression and response to treatment. How often depends on your specific diagnosis, as advised by Dr. Aggarwal.",
  },
  {
    question: "Do I need to stop my inhaler before the test?",
    answer:
      "This depends on what the test is being used to assess. The clinic will advise you in advance whether to continue or temporarily hold your inhaler before your appointment.",
  },
];

export default function PulmonaryFunctionTestDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Pulmonary Function Test (PFT) in Delhi, A Full Picture of How Well Your Lungs Are Working"
        description="Offered by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, with 24+ years of experience in respiratory diagnostics and care."
        ctaText="Book Appointment"
        backgroundImage="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
      />

      {/* TRUST STRIP */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wide text-center">
          <div>24+ Years Clinical Experience</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>Same-Day PFT Assays Available</div>
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
                Comprehensive Lung Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What a Pulmonary Function Test Actually Covers
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A pulmonary function test, or PFT, is a group of breathing tests that together give a detailed picture of your lung health. While spirometry measures airflow, a full PFT goes further, also assessing total lung volume and how efficiently oxygen passes from your lungs into your bloodstream.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This combination allows the doctor to tell whether a breathing problem is due to narrowed airways, reduced lung capacity, impaired gas exchange, or a combination of these, which is essential for reaching an accurate diagnosis.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
                alt="Comprehensive pulmonary function testing equipment in a specialized clinic setting"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* CLINICAL EXPERIENCE TRUST MATRIX */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Expert Clinical Interpretation
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                The Experience Guiding Your Assessment
              </h2>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <BookAppointmentButton cta="Book Your PFT →" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b]">
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">24+ years</strong> of clinical experience diagnosing and managing the full range of respiratory conditions.</p>
              <p>• <strong className="text-[#0f172a]">Credentials:</strong> MBBS, MD (Tuberculosis & Chest Diseases), FRCP (Glasgow), trained at premier Indian institutes.</p>
              <p>• <strong className="text-[#0f172a]">Current Role:</strong> Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, also practicing at his private clinic in Pitampura, Delhi.</p>
              <p>• <strong className="text-[#0f172a]">Personalized Review:</strong> Test results are personally reviewed and interpreted by Dr. Aggarwal in the context of your symptoms, history, and prior tests, not simply issued as a standalone report.</p>
              <p>• <strong className="text-[#0f172a]">Efficiency:</strong> Access to same-day PFT assays, helping you get diagnosed and started on treatment without unnecessary delay.</p>
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
            Reasons This Test Is Often Advised
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Diagnose and classify conditions such as asthma, COPD, and interstitial lung disease",
              "Distinguish between obstructive lung disease, where airflow is limited, and restrictive lung disease, where lung capacity is reduced",
              "Investigate persistent breathlessness, chronic cough, or reduced exercise tolerance",
              "Evaluate lung involvement in conditions like sarcoidosis, pulmonary fibrosis, or connective tissue disease",
              "Assess fitness for surgery, particularly chest or major abdominal procedures",
              "Monitor disease progression over time and track how well treatment is working",
              "Assess lung function before starting certain medications that can affect the lungs"
            ].map((text, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs flex items-start">
                <span className="text-[#1fa8e8] font-bold mr-2 text-sm">✓</span>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONDITIONS EVALUATED */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Pathological Matrix
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Evaluated Through Full Lung Function Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Asthma & COPD", desc: "Confirming the diagnosis and grading the severity of airway obstruction." },
              { title: "Interstitial Lung Disease (ILD) & Fibrosis", desc: "Where reduced lung volumes and impaired gas transfer are key findings." },
              { title: "Sarcoidosis", desc: "Monitoring lung involvement over time." },
              { title: "Occupational & Environmental Diseases", desc: "Linked to dust, chemical, or fume exposure at work." },
              { title: "Neuromuscular Conditions", desc: "Evaluating scenarios where muscle weakness impacts overall lung function." },
              { title: "Pre-Operative Risk Assessment", desc: "Particularly crucial before lung, chest, or major abdominal surgery." },
              { title: "Unexplained Breathlessness", desc: "A structured, anatomical way to identify the underlying cause." }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed border-t border-slate-100 pt-4">
            If you have ongoing breathlessness, a known lung condition that needs monitoring, or an upcoming surgery, a full PFT gives Dr. Manish Aggarwal the detailed information needed to guide your care.
          </p>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden rounded-3xl bg-amber-500 p-6 sm:p-10 shadow-md text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-xl font-bold tracking-tight text-slate-950 text-center sm:text-left">
            Living with breathlessness that hasn't been fully explained?
          </p>
          <div className="shrink-0 w-full sm:w-auto">
            <BookAppointmentButton cta="Get a Complete Lung Assessment →" />
          </div>
        </section>

        {/* PANELS COMPONENT */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Panel Modalities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              What Makes Up a Complete PFT
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Spirometry</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Measuring how much and how fast you can breathe air in and out, used to detect airway narrowing.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Lung Volume Measurement</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Assessing the total amount of air your lungs can hold, helping identify restrictive lung conditions.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Diffusion Capacity (DLCO)</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Measuring how efficiently oxygen moves from your lungs into your bloodstream, important in conditions like pulmonary fibrosis.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 italic font-medium pt-2">
            *Depending on your symptoms, Dr. Aggarwal may recommend the full panel or a more targeted combination of these tests.
          </p>
        </section>

        {/* PATIENT JOURNEY GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* GETTING READY */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Preparation Guidelines
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Getting Ready for Testing
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• Avoid heavy meals and vigorous exercise for at least an hour before your test.</p>
              <p>• If you use an inhaler, ask the clinic in advance whether you should hold off on using it before the test, as this can affect results.</p>
              <p>• Avoid smoking for at least an hour, and ideally longer, before your appointment.</p>
              <p>• Wear loose, comfortable clothing that does not restrict your chest or abdomen.</p>
              <p>• Let the technician know about any recent chest pain, heart attack, eye surgery, or abdominal surgery, as these may affect how certain parts of the test are performed.</p>
            </div>
          </div>

          {/* TESTING SESSION */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedural Stages
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                How the Testing Session Works
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Spirometry Phase:</strong> You will be guided through each component of the test individually, starting typically with spirometry, where you breathe forcefully into a mouthpiece.
                </p>
                <p>
                  <strong className="text-white">Lung Volumes:</strong> For lung volume measurement, you may sit inside a small, clear booth called a body plethysmograph, or breathe a specific gas mixture through a mouthpiece, depending on the equipment used.
                </p>
                <p>
                  <strong className="text-white">Gas Diffusion:</strong> For the diffusion capacity test, you take a single deep breath of a harmless gas mixture, hold it briefly, and then exhale, allowing the machine to measure oxygen transfer metrics. A complete testing panel typically takes 30 to 45 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECOVERY AND SAFETY CONSIDERATIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Safety & Safety Thresholds
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Recovery Milestones, Safety Considerations & Clinical Surveillance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">What Happens After Testing</h4>
              <p>
                There is no recovery time needed, and most people resume normal activities immediately after. Some people feel briefly tired from the repeated forceful breathing maneuvers, which settles quickly with a short rest. Dr. Aggarwal reviews your complete results alongside history, symptoms, and prior imaging to establish next steps.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">Safety Parameters</h4>
              <p>
                PFT panels are structurally safe for most people, but because they involve forceful breathing maneuvers, they may be modified or postponed in clinical situations such as recent heart attack, unstable chest pain, recent eye/abdominal/chest surgery, unresolved pneumothorax, uncontrolled coughing of blood, or severe rest dyspnea.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">Clinical Surveillance</h4>
              <p>
                You must notify our clinic staff immediately if you experience persistent dizziness, localized chest discomfort that does not easily settle with light rest after the test, newly developed or rapidly worsening breathlessness, or any other distinct secondary respiratory symptoms that concern you following the panel evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL DIALOGUE MODULE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Communication
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Questions Worth Discussing With Dr. Aggarwal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Which parts of the PFT do I need, and why?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Do my results point toward an obstructive or restrictive lung condition, or a mix of both?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How does my diffusion capacity result affect my diagnosis and treatment?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How often should this testing be repeated to monitor my condition?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on these results, what changes, if any, are needed to my treatment plan?
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
                  Comprehensive Diagnostic Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Want a Complete, Accurate Picture of Your Lung Health?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get a full pulmonary function assessment and clear, expert interpretation from Dr. Manish Aggarwal, Delhi's leading pulmonologist with 24+ years of respiratory care experience.
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