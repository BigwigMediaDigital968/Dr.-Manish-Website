import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "What is the primary clinical objective of a pleural aspiration?",
    answer:
      "Pleural aspiration (thoracentesis) serves a dual purpose. Diagnostically, it extracts fluid samples to evaluate for underlying causes like bacterial infections, tuberculosis, heart failure, or malignancies. Therapeutically, it removes large volumes of accumulated fluid to instantly relieve pressure on the lungs, reducing breathlessness and chest discomfort.",
  },
  {
    question: "Is the pleural aspiration procedure painful for the patient?",
    answer:
      "Comfort is managed effectively throughout the procedure. We apply a targeted local anesthetic to thoroughly numb the skin and deep chest wall layers prior to needle insertion. Patients typically experience a sensation of pressure rather than sharp pain. Minor site soreness may occur post-procedure, which resolves quickly.",
  },
  {
    question: "How much fluid can safely be drained during a single thoracentesis session?",
    answer:
      "The volume depends on the total accumulation and patient tolerance. Typically, up to 1,000 to 1,500 mL of fluid can be safely removed in a single session. Draining excessive amounts too rapidly is avoided to prevent re-expansion pulmonary edema, a rare condition where lung tissue swells as it expands.",
  },
  {
    question: "Does a standard pleural aspiration require the placement of an indwelling chest tube?",
    answer:
      "No, a standard aspiration uses a temporary fine needle or a micro-catheter that is completely removed immediately after the fluid is drawn. A formal chest tube or a long-term Indwelling Pleural Catheter (IPC) is only considered if the fluid rapidly accumulates again or if a dense, multi-loculated infection (empyema) is present.",
  },
  {
    question: "What is the timeline for receiving the complete fluid analysis lab reports?",
    answer:
      "Basic biochemical parameters (such as protein and LDH levels) and initial gram stains are ready within 24 to 48 hours. Advanced cytological examinations for malignant cells, mycobacterial cultures for tuberculosis, and specialized blocks can take 3 to 5 business days for complete diagnostic confirmation.",
  },
];

export default function PleuralAspirationDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Pleural Aspiration in Delhi — Fast Relief and Accurate Diagnosis for Fluid Around the Lungs"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital. Benefit from 24+ years of expertise in interventional pulmonology and advanced ultrasound-guided pleural drainage to relieve breathlessness instantly."
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
          <div>Extensive Pleural Services Experience</div>
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
                Targeted Pleural Decompression
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Advanced Ultrasound-Guided Thoracentesis for Pleural Effusions
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When fluid builds up abnormally within the pleural space—the delicate interface separating your lungs from the interior chest wall—it mechanical compresses lung tissue. This leads to persistent breathlessness, shallow respiration, and localized chest discomfort. Pleural aspiration (thoracentesis) provides rapid structural decompression and relief.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                By utilizing <strong className="text-[#0f172a]">real-time thoracic ultrasound guidance</strong>, we map the fluid pockets with high precision. This ensures the safe navigation of an ultra-fine needle or aspiration catheter, avoiding anatomical hazards, maximizing fluid clearance, and eliminating the need for empirical blind insertions.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal integrates over two decades of specialized interventional experience. His clinical practice covers advanced pleural techniques, from diagnostics to long-term Indwelling Pleural Catheters (IPC) and medical thoracoscopy, ensuring tailored management for every patient.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Interventional pulmonologist performing a high-resolution thoracic ultrasound scan to isolate fluid pockets before aspiration"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* CLINICAL INTENT COMPARISON */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Procedural Scope
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Diagnostic vs. Therapeutic Pleural Aspiration
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Depending on the volume of fluid accumulation and the clinical presentation, the procedure balances two main goals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-slate-200 text-[#0f172a] rounded-lg font-bold text-xs">Diagnostic Focus</span>
                <h3 className="font-bold text-[#0f172a] text-base">Diagnostic Aspiration</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Focuses on harvesting a small, targeted sample of pleural fluid (typically 30 to 50 mL). This fluid undergoes detailed laboratory profiling, including biochemical parameters (pH, protein, glucose, LDH), microbiological cultures, and cytological evaluation to screen for malignant cells or complex infections like tuberculosis.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg font-bold text-xs">Therapeutic Focus</span>
                <h3 className="font-bold text-[#0f172a] text-base">Therapeutic Aspiration</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Aims to drain larger volumes of fluid to reduce intra-thoracic pressure. Draining this fluid allows the collapsed lung tissue to re-expand, providing immediate relief from severe breathlessness. For fluid that returns repeatedly, advanced long-term options like Indwelling Pleural Catheters (IPC) may be discussed.
              </p>
            </div>
          </div>
        </section>

        {/* ETIOLOGY AND CONDITIONS UNDERLYING EFFUSIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Etiology Mapping
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Frequently Requiring Pleural Space Evaluation
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Fluid accumulation within the thoracic cavity is often a secondary manifestation of various systemic or localized pathologies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Malignant Pleural Effusions", desc: "Fluid accumulation secondary to primary lung malignancies or metastatic extensions affecting the pleural membranes." },
              { title: "Pleural Tuberculosis (TB)", desc: "Exudative fluid reactions common in endemic regions, requiring dedicated fluid PCR, ADA markers, and cultures." },
              { title: "Complicated Parapneumonic Effusions", desc: "Fluid build-up associated with severe bacterial pneumonias, requiring timely intervention to prevent empyema." },
              { title: "Congestive Heart Failure (CHF)", desc: "Transudative fluid accumulation caused by systemic hydrostatic pressure imbalances." },
              { title: "Hepatic Hydrothorax & Renal Shifts", desc: "Fluid migration into the chest due to advanced cirrhosis or nephrotic protein loss." },
              { title: "Autoimmune Pleuritis", desc: "Inflammatory fluid production triggered by systemic conditions like Rheumatoid Arthritis or Lupus." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLINICAL PROTOCOLS & TIMELINES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE PATIENT PREPARATION CRITERIA */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Preparation Checklist
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Essential Steps Before Your Pleural Procedure
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Fasting Flexibility:</strong> Standard diagnostic aspirations under local anesthesia typically do not require fasting, though our desk will confirm details.</p>
              <p>• <strong className="text-[#0f172a]">Anticoagulation Guidelines:</strong> You must provide details of all current blood thinners (Aspirin, Clopidogrel, Warfarin) so they can be safely paused.</p>
              <p>• <strong className="text-[#0f172a]">Imaging Assembly:</strong> Bring all recent chest X-rays, high-resolution CT scans, or thoracic ultrasound films to your appointment.</p>
              <p>• <strong className="text-[#0f172a]">Apparel & Support:</strong> Wear loose, comfortable clothing. While the procedure is outpatient, having a companion along is highly recommended.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE STEPS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Inside the Procedure Room
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                The Ultrasound-Guided Aspiration Workflow
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Positioning & Local Anesthesia:</strong> The patient sits upright and leans forward comfortably. The target skin area is thoroughly cleansed and numbed using a highly effective local anesthetic.
                </p>
                <p>
                  <strong className="text-white">Ultrasound Localization:</strong> Dr. Aggarwal utilizes live ultrasound to precisely pinpoint the fluid pocket, measuring the optimal depth to ensure a safe, smooth path for the needle.
                </p>
                <p>
                  <strong className="text-white">Controlled Drainage:</strong> A fine aspiration needle or micro-catheter is introduced into the fluid layer. Draining the fluid takes 15 to 30 minutes, followed by a routine post-procedure chest X-ray.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule An Ultrasound-Guided Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* RECOVERY PATTERNS & CLINICAL RISK CONTROL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Safety Protocols
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding Safety Profiles & Post-Aspiration Care
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            Pleural aspiration is a standard and highly reliable outpatient procedure when performed under ultrasound guidance. Understanding your recovery care helps ensure optimal safety:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Expected Post-Procedure Care</h4>
              <p>
                Most patients experience immediate relief from breathlessness as the fluid is removed and the lung re-expands. A mild cough may occur during fluid clearance, which is a normal response as the lung fills the space. A dull ache at the insertion site is common and can be easily managed with standard over-the-counter pain relievers.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Recognizing Signs for Medical Attention</h4>
              <p>
                Because the needle passes near the lung margin, there is a small risk of a pneumothorax (air leak). If you experience sudden sharp chest pain, worsening breathing difficulties, constant bleeding from the puncture site, or a high fever, please contact our clinic support desk immediately.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL DIALOGUE ADVOCACY */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Guide
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Key Questions to Ask During Your Pleural Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Clear communication helps ensure optimal care. Consider discussing these diagnostic questions with Dr. Manish Aggarwal during your evaluation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on my imaging, is the fluid accumulation localized to one side or affecting both lungs?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Are there signs of loculation or thick inflammatory scarring within the pleural space?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What specific biochemical markers and cellular tests will be performed on the fluid?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the exact timeline for safely pausing and restarting my blood thinners?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              If the fluid returns quickly after draining, what are the next steps for long-term management?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Could an Indwelling Pleural Catheter (IPC) or Medical Thoracoscopy be beneficial for my condition?
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL MEDICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Interventional Pleural Specialist, for an accurate diagnosis and personalised treatment plan.
        </div>

        {/* FINAL CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Pleural Services Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Breathless Due to Fluid Around Your Lungs?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get fast, ultrasound-guided relief and an accurate diagnosis with a pleural aspiration, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with extensive experience in comprehensive pleural care.
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