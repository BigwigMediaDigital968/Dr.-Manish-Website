import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is a transbronchial lung biopsy primarily used for?",
    answer:
      "A transbronchial lung biopsy (TBLB) is used to obtain small diagnostic tissue samples from deep within the lung parenchyma. It is essential for identifying interstitial lung disease (ILD), pulmonary fibrosis, sarcoidosis, atypical infections, and peripheral pulmonary nodules that cannot be accessed via standard airway inspection.",
  },
  {
    question: "Is a transbronchial biopsy different from a standard diagnostic bronchoscopy?",
    answer:
      "Yes. While a standard bronchoscopy only evaluates the inner surface lining of the central breathing tubes, a transbronchial biopsy involves extending specialized forceps or freezing probes through the scope, passing through the micro-airways to collect actual lung tissue for comprehensive pathology analysis.",
  },
  {
    question: "What unique clinical advantages does a transbronchial cryobiopsy offer?",
    answer:
      "Transbronchial cryobiopsy uses a specialized cryoprobe to rapidly freeze and retrieve larger, high-quality, and completely intact lung tissue blocks. This technique preserves the surrounding cellular architecture and avoids the crush artifacts caused by traditional forceps, making it highly valuable for diagnosing interstitial lung disease.",
  },
  {
    question: "What are the primary clinical risks associated with this procedure?",
    answer:
      "Because tissue is sampled deep within the lung, the procedure carries a slightly higher risk profile than a routine airway inspection. The primary recognized risks include localized bleeding at the collection site and a pneumothorax (a small air leak causing partial lung collapse). We minimize these risks using real-time fluoroscopic guidance and manage them with routine post-procedure chest X-rays.",
  },
  {
    question: "How long does it take to get the final histopathology results?",
    answer:
      "Initial procedural observations are reviewed with the patient immediately. The detailed histopathology evaluation, specialized tissue stains, and architectural analysis by pulmonology pathologists typically take 3 to 5 business days, though complex structural panels may require up to two weeks.",
  },
];

export default function TransbronchialLungBiopsyDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Transbronchial Lung Biopsy in Delhi — Accurate Tissue Diagnosis for Lung Disease"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, with 24+ years of experience and 10,000+ bronchoscopic procedures performed. Secure a definitive diagnosis for complex parenchymal lung diseases using advanced fluoroscopic and cryoprobe tissue retrieval techniques."
        ctaText="Book Appointment"
        backgroundImage="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
      />

      {/* TRUST STRIP */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wide text-center">
          <div>24+ Years Clinical Experience</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>10,000+ Bronchoscopies Performed</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>3,000+ EBUS Performed</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>4.9 Google Rating (350+ Reviews)</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>FRCP (Glasgow)</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Parenchymal Tissue Sampling
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Advanced Transbronchial Diagnostic Capabilities for Deep Lung Pathologies
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When radiological scans display unexplained shadows, diffuse infiltrates, or signs of interstitial remodeling, evaluating the inner lining of the airway is no longer sufficient. A transbronchial lung biopsy (TBLB) allows us to safely pass through the bronchial borders into the deep tissue structure of the lung using a flexible bronchoscope.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                By integrating <strong className="text-[#0f172a]">real-time fluoroscopy (live X-ray tracking)</strong> or advanced cold-delivery cryoprobe systems, we can harvest premium tissue pieces without the risks, pain, or extended recovery times associated with traditional open thoracic surgery.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal brings over two decades of clinical experience and 10,000+ personal procedures to every intervention. His specialized training across premier UK NHS hospitals ensures that complex tissue extractions adhere to strict safety protocols, delivering the reliable pathology profiles required for modern clinical care.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
                alt="Interventional pulmonologist checking high-resolution fluoroscopic imagery during a transbronchial tissue extraction session"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* FORCEPS VS CRYOBIOPSY COMPARISON */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Methodological Comparison
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Forceps Biopsy vs. Transbronchial Cryobiopsy
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Depending on your imaging features and suspected conditions, Dr. Aggarwal will deploy the specific methodology best suited for your diagnosis:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-slate-200 text-[#0f172a] rounded-lg font-bold text-xs">Conventional</span>
                <h3 className="font-bold text-[#0f172a] text-base">Conventional Forceps Biopsy</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Utilizes miniature mechanical forceps passed through the scope channel to sample targeted tissue sections. While highly effective for localized nodes and discrete cellular growths, the samples are small and prone to mechanical compression (crush artifact), which can occasionally limit detailed structural analysis in complex fibrosis cases.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg font-bold text-xs">Advanced</span>
                <h3 className="font-bold text-[#0f172a] text-base">Transbronchial Cryobiopsy</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Employs a cutting-edge probe that chills to sub-zero temperatures within seconds. The surrounding lung tissue safely adheres to the probe tip before retrieval. This yields significantly larger, well-preserved samples that maintain perfect cellular structure—crucial for diagnosing Interstitial Lung Disease (ILD).
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL INDICATIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Diagnostic Intent
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Reliably Identified Via Transbronchial Sampling
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Obtaining tissue directly from the deep lung structures is essential for diagnosing several complex medical conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Interstitial Lung Diseases (ILD)", desc: "Differentiating between complex sub-types like Idiopathic Pulmonary Fibrosis (IPF) and Non-Specific Interstitial Pneumonia." },
              { title: "Sarcoidosis Mapping", desc: "Providing clean histopathology confirmation of non-caseating granulomas within deeper tissue structures." },
              { title: "Hypersensitivity Pneumonitis", desc: "Identifying inflammatory changes caused by chronic environmental, organic dust, or mold exposures." },
              { title: "Atypical Deep Infections", desc: "Culturing tissue samples to isolate fungal networks or unusual bacteria that do not show up in routine sputum tests." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION GUIDE & INTRAOPERATIVE TIMELINE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PATIENT CARE AND PREPARATION */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Clinical Preparations
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Essential Steps Before Your Biopsy Appointment
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Strict Fasting:</strong> Maintain complete fasting (no food or liquids) for 6 to 8 hours prior to your scheduled procedure.</p>
              <p>• <strong className="text-[#0f172a]">Anticoagulant Mapping:</strong> You must inform us of all current blood thinners or aspirin regimens. These will be safely paused ahead of time.</p>
              <p>• <strong className="text-[#0f172a]">Diagnostic Submissions:</strong> Bring your full physical chest CT scan films and digital records directly to your consultation.</p>
              <p>• <strong className="text-[#0f172a]">Caregiver Accompaniment:</strong> Because deep conscious sedation is used, you cannot drive home. A companion must be present.</p>
            </div>
          </div>

          {/* THE BIOPSY WORKFLOW */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedure Pipeline
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What to Expect Inside the Interventional Suite
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Sedation & Anesthesia:</strong> Targeted topical lidocaine sprays numb the airway, while intravenous sedatives keep you deeply relaxed, calm, and pain-free.
                </p>
                <p>
                  <strong className="text-white">Fluoroscopic Guidance:</strong> Dr. Aggarwal utilizes real-time X-ray imaging (fluoroscopy) to carefully guide the micro-forceps or cryoprobe to the exact area of lung tissue needed.
                </p>
                <p>
                  <strong className="text-white">Extended Observation:</strong> The procedure takes 30 to 60 minutes. Afterward, patients rest in our recovery bay for a few hours, followed by a routine chest X-ray to ensure optimal safety.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule Your Evaluation with Dr. Manish 📅" />
            </div>
          </div>
        </section>

        {/* POST-OPERATIVE MANAGEMENT & RISK PARADIGMS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Safety Metrics
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding Post-Biopsy Recovery & Safety Measures
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            A transbronchial biopsy is a safe and well-established procedure, but because it involves sampling tissue deep within the lung, understanding recovery care is essential:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Standard Recovery Trends</h4>
              <p>
                It is common to experience a mild sore throat, voice hoarseness, or minor blood-streaked sputum for a day or two following the tissue collection. To protect your airway, do not eat or drink until your swallowing reflex returns fully, which typically takes 1 to 2 hours. Rest quietly for the remainder of the day and avoid heavy physical exertion.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">When to Contact the Clinic Desk</h4>
              <p>
                Sampling deep lung tissue carries a small, well-monitored risk of a pneumothorax (a small air leak in the lung). If you develop sudden sharp chest pain, worsening shortness of breath, a high fever, or begin coughing up active red blood, contact our emergency desk immediately.
              </p>
            </div>
          </div>
        </section>

        {/* CONSULTATION QUESTIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Guide
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Key Questions to Ask Before Your Biopsy Procedure
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We value clear communication and want you to feel confident in your care. Consider discussing these questions with Dr. Manish Aggarwal during your appointment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on my CT scan, what specific areas of the lung tissue require sampling?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Do you recommend using conventional forceps or an advanced cryobiopsy probe for my diagnosis?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the precise timeline for pausing my blood thinners, and when can I safely restart them?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How will we monitor and minimize the risk of a pneumothorax during and after the biopsy?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How long will it take for the final pathology and architectural analysis reports to come back?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What are the next steps in my treatment plan once we receive the tissue findings?
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
                  Interventional Scheduling Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Unexplained Lung Shadows or Suspected Interstitial Lung Disease?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get an accurate tissue diagnosis with a transbronchial lung biopsy, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with 10,000+ bronchoscopic procedures completed.
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
                  Call Desk: +91 9899554095
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