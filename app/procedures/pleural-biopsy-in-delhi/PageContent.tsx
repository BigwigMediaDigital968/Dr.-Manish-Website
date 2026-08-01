import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "Why can't fluid testing alone diagnose my pleural condition?",
    answer:
      "Pleural fluid analysis evaluates free-floating cells and biochemical markers, which can miss complex structural pathologies in a significant number of cases. Conditions like pleural tuberculosis or certain focal malignancies often embed deeply within the tissue linings. Acquiring a physical tissue sample via biopsy allows pathologists to study the intact cellular architecture, providing a highly definitive answer.",
  },
  {
    question: "Which pleural biopsy method offers the highest diagnostic accuracy?",
    answer:
      "Thoracoscopic biopsy offers the highest diagnostic accuracy because it is performed under direct vision. Instead of passing a needle blindly or using stationary cross-sectional scans, the pulmonologist directly visualizes the entire pleural cavity using a micro-camera, targeting suspicious nodules or areas of thickening immediately. Dr. Aggarwal will recommend the ideal method based on your unique imaging findings.",
  },
  {
    question: "Is a pleural biopsy procedure painful?",
    answer:
      "To ensure maximum patient comfort, the targeted chest wall entry path is thoroughly infiltrated with a high-potency local anesthetic. While you may feel a localized sensation of pressure or pulling during the tissue collection, sharp pain is neutralized. Any mild, post-procedural site soreness is easily managed with standard over-the-counter analgesics.",
  },
  {
    question: "Will I need to be admitted to the hospital for this procedure?",
    answer:
      "It depends on the chosen technique. A standard ultrasound or CT-guided closed needle biopsy is typically performed as a day-care procedure, allowing you to return home the same afternoon after a brief observation window. Conversely, a thoracoscopic biopsy usually requires a short 1 to 2-day hospital stay to monitor temporary chest tube drainage and verify complete lung re-expansion.",
  },
  {
    question: "How long does it take to receive the final histopathology results?",
    answer:
      "Final pathology reports generally take 3 to 5 working days. If the tissue requires specialized immunohistochemical (IHC) staining to identify specific oncological sub-types, or dedicated mycobacterial cultures for tuberculosis profiling, certain advanced confirmation readouts may take longer.",
  },
];

export default function PleuralBiopsyDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Pleural Biopsy in Delhi — Reliable Tissue Sampling for Unexplained Pleural Disease & Thickening"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital. Utilize 24+ years of expertise and advanced image-guided and thoracoscopic techniques to achieve definitive diagnoses."
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
                Definitive Pleural Histopathology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Resolving Unexplained Pleural Pathology via Precise Tissue Analysis
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When fluid aspirations come back inconclusive but imaging continues to show persistent pleural thickening, nodularity, or recurrent fluid shifts, a tissue-level analysis becomes essential. A pleural biopsy involves collecting a small sample of the pleura—the protective membrane lining the lungs and the inner chest wall—to run complete microscopic, cellular, and microbiological evaluations.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Rather than relying on fluid cytology alone, a physical tissue sample allows pathologists to confirm or rule out conditions like pleural tuberculosis and underlying malignant changes. This step establishes a clear, reliable path forward, helping avoid delayed or incorrect diagnoses.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal coordinates advanced interventional pulmonology services across Delhi. Backed by extensive experience in managing complex pleural diseases, he selects the most effective biopsy method—whether closed needle, image-guided, or thoracoscopic—tailored to each patient's specific anatomy and safety needs.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Pulmonology specialist utilizing high-definition thoracic ultrasound to guide a precise pleural tissue biopsy"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* BIOPSY MODALITY MATRIX */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Technique Modalities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Anatomical Personalization: Selecting the Optimal Sampling Method
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Dr. Aggarwal chooses from three primary biopsy modalities based on your prior imaging, physical stamina, and clinical presentation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Closed Needle Biopsy</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                A specialized biopsy needle is introduced through the chest wall under local anesthesia to harvest samples of the outer pleural layer. This approach is highly effective for cases with diffuse, uniform lining changes.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Image-Guided Biopsy</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Utilizes real-time ultrasound or computed tomography (CT) imaging to track the needle. This method enables direct targeting of specific, isolated areas of pleural thickening, small nodules, or hard-to-reach masses safely.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Thoracoscopic Biopsy</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Performed during a medical thoracoscopy session, allowing the doctor to view the internal cavity through a high-definition micro-camera. This provides maximum diagnostic accuracy by targeting biopsies under direct vision.
              </p>
            </div>
          </div>
        </section>

        {/* PATHOLOGICAL INDICATIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Commonly Confirmed via Pleural Tissue Sampling
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Acquiring a definitive tissue sample is key to identifying and managing several complex thoracic conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Pleural Tuberculosis Involvement", desc: "A prevalent cause of exudative effusions in the region, confirmed via caseating granuloma validation." },
              { title: "Malignant Pleural Mesothelioma", desc: "Primary oncological changes originating directly inside the protective mesothelial tissue layers." },
              { title: "Metastatic Pulmonary Developments", desc: "Secondary malignancy spreads originating from primary lung, breast, or complex ovarian carcinomas." },
              { title: "Chronic Idiopathic Pleural Thickening", desc: "Investigating progressive, unexplained structural alterations found on high-resolution chest CT scans." },
              { title: "Autoimmune & Rheumatologic Pleuritis", desc: "Identifying systemic changes linked to conditions like systemic lupus erythematosus or rheumatoid arthritis." },
              { title: "Unexplained Exudative Fluid Shifts", desc: "Resolving persistent fluid retention where standard chemical profiles and cultures remain inconclusive." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION & PROCEDURAL WORKFLOW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* CLINICAL PREPARATION CRITERIA */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Patient Preparation Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Essential Pre-Procedural Guidelines
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Fasting Framework:</strong> Fasting windows depend on whether you are receiving conscious sedation or local anesthesia alone, and will be confirmed prior to your appointment.</p>
              <p>• <strong className="text-[#0f172a]">Medication Verification:</strong> A full review of all prescriptions is mandatory; blood thinners, antiplatelets, and diabetes medications must be adjusted safely.</p>
              <p>• <strong className="text-[#0f172a]">Diagnostic Records:</strong> Bring your full imaging portfolio, including recent chest CT scans, ultrasounds, and prior pleural fluid reports.</p>
              <p>• <strong className="text-[#0f172a]">Hematological Profiling:</strong> Routine blood profiles, including full coagulation and platelet function metrics, are required beforehand to ensure safety.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE FLOW STEPS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedural Stages
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What to Expect During Your Pleural Biopsy
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Anesthetic Numbing:</strong> The entry site is meticulously cleaned and numbed using a targeted local anesthetic, combined with mild conscious sedation if indicated by your procedure plan.
                </p>
                <p>
                  <strong className="text-white">Precision Targeting:</strong> Using real-time ultrasound, CT guidance, or direct thoracoscopic visualization, Dr. Aggarwal carefully navigates past surrounding intercostal nerves and blood vessels.
                </p>
                <p>
                  <strong className="text-white">Sample Retrieval:</strong> Multiple small, targeted tissue samples are collected and prepared immediately for detailed histopathological analysis. The entire process takes between 20 and 60 minutes.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Request A Tissue Diagnostic Consultation Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* MEDICAL POST-OP INTEGRITY MANAGEMENT */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Post-Op Milestones & Risks
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Recovery Management, Aftercare, & Risk Awareness
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            A pleural biopsy is a well-established diagnostic standard. Understanding your short-term recovery pathway helps ensure a comfortable and safe post-procedural experience:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Recovery and Aftercare Expectations</h4>
              <p>
                Following the biopsy, you will be monitored briefly, and a post-procedural chest X-ray may be taken to confirm optimal lung status. Standard needle biopsies are usually day-care procedures, while thoracoscopic techniques may require a brief hospital stay. Mild site soreness or a small amount of pinkish discharge is normal during the first 24 hours and is easily managed with light rest. Avoid strenuous lifting or intense exercise for 48 hours.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Clinical Risks & Immediate Warning Signs</h4>
              <p>
                Potential risks include localized site bleeding, minor skin-level infection, or a small pocket of trapped air (pneumothorax). You should contact our emergency care desk immediately if you experience a sudden spike in shortness of breath, sharp or worsening chest pain, severe swelling at the entry site, or a high fever with chills.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL ENGAGEMENT QUESTIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Communication
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Key Questions to Ask Before Your Pleural Biopsy
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We believe an informed patient experiences a smoother recovery. Consider discussing these diagnostic questions with Dr. Manish Aggarwal during your evaluation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on my chest CT scan, why is a physical tissue biopsy recommended over another fluid tap?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Which specific biopsy technique will provide the safest and most accurate results for my condition?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Will this procedure be performed as a day-care intervention, or should I prepare for a brief hospital stay?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How many days before the procedure should I temporarily stop taking my current blood thinners?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Are you sending the tissue samples for advanced microbiological cultures to check for pleural tuberculosis?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the estimated turnaround time for receiving the final histopathology and immunohistochemistry reports?
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
                  Advanced Tissue Diagnostic Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Need a Clear Answer for Unexplained Pleural Findings?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get a precise, tissue-based diagnosis with a pleural biopsy, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with 24+ years of specialized experience.
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