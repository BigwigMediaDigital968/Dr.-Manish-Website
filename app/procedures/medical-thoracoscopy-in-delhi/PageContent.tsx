import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "How does medical thoracoscopy differ from a simple pleural fluid tap?",
    answer:
      "A pleural tap (thoracentesis) involves extracting fluid blindly or via ultrasound guidance using a fine needle, without visualization of the pleural lining. Medical thoracoscopy (pleuroscopy) inserts a thin camera into the thoracic cavity, enabling direct internal visualization, highly targeted tissue biopsies of abnormal lesions, and concurrent therapeutic actions like pleurodesis.",
  },
  {
    question: "Why should I undergo a thoracoscopy instead of repeating standard fluid cytology?",
    answer:
      "Standard fluid tests often yield inconclusive results, especially in complex cases of pleural tuberculosis or early-stage malignancies. Medical thoracoscopy bypasses the limitations of blind testing by allowing the pulmonologist to see and sample suspicious nodules directly. This provides a vastly superior diagnostic yield and shortens the path to a definitive diagnosis.",
  },
  {
    question: "What exactly is pleurodesis, and will it be performed during my procedure?",
    answer:
      "Pleurodesis is a therapeutic technique where a sterile medical agent is introduced into the pleural cavity to induce controlled adhesion between the lung and the chest wall. This effectively obliterates the empty space to permanently prevent recurrent fluid accumulation. Dr. Aggarwal evaluates the lining in real-time to determine if immediate pleurodesis is appropriate, commonly for recurrent malignant effusions.",
  },
  {
    question: "What is the typical post-procedural hospital stay required for this evaluation?",
    answer:
      "Most patients remain hospitalized for 1 to 2 days following the procedure. This short stay allows our specialized team to monitor the temporary indwelling chest tube, track total fluid drainage, ensure optimal lung re-expansion via serial chest radiographs, and maintain excellent patient comfort.",
  },
  {
    question: "Is medical thoracoscopy considered a major cardiothoracic surgery?",
    answer:
      "No, it is a minimally invasive interventional pulmonology procedure. Unlike Video-Assisted Thoracoscopic Surgery (VATS), which requires general anesthesia, double-lumen endotracheal intubation, and an operating theater setup, medical thoracoscopy is safely performed under conscious sedation and local anesthesia through a single small incision.",
  },
];

export default function MedicalThoracoscopyDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Medical Thoracoscopy in Delhi — Direct Visualization and Targeted Solutions for Complex Pleural Conditions"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital. Over 24 years of expertise in advanced pleuroscopy to resolve undiagnosed effusions and deliver lasting therapeutic relief."
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
                Advanced Pleuroscopy Interventions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Direct Pleural Mapping for Definitive Diagnosis and Treatment
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When repeated pleural fluid taps fail to reveal a definitive cause, relying on blind needle sampling can leave complex pathologies undiagnosed. Medical thoracoscopy (pleuroscopy) bypasses these limitations by providing direct visual access to the pleural space—the interface separating the lungs from the chest wall—using a specialized, ultra-thin camera system.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                This minimally invasive technique allows for real-time inspection of the visceral and parietal pleural linings. Dr. Aggarwal can easily pinpoint subtle structural changes, take precise, targeted tissue biopsies, break down complex inflammatory adhesions, and complete definitive treatments like pleurodesis in a single, controlled session.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal is one of the few interventional pulmonologists in Delhi with dedicated, extensive experience in medical thoracoscopy. His patient-first approach ensures that advanced diagnostics are paired with optimal comfort and tailored recovery pathways.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Pulmonologist demonstrating advanced thoracoscopic visualization of the internal pleural membranes"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* COMPARATIVE ANALYSIS STRIP */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Advantages
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Elevating Clinical Standards: Aspiration vs. Thoracoscopy
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Understanding how direct pleuroscopic access provides significantly greater diagnostic accuracy than standard fluid sampling:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-slate-200 text-[#0f172a] rounded-lg font-bold text-xs">Standard Tap</span>
                <h3 className="font-bold text-[#0f172a] text-base">Ultrasound Pleural Aspiration</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Removes free fluid utilizing an ultrasound-guided needle. While effective for initial biochemical profiling, it lacks the capability to visualize internal tissue surfaces or address organized tissue scarring, often leaving complex conditions unresolved.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg font-bold text-xs">Direct Vision</span>
                <h3 className="font-bold text-[#0f172a] text-base">Medical Thoracoscopy Advantage</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Provides a clear view of the pleural cavity. This enables highly accurate, targeted biopsies of suspicious nodules, the safe breakdown of multi-chambered fluid pockets, and the ability to apply localized pleurodesis to prevent fluid from returning.
              </p>
            </div>
          </div>
        </section>

        {/* PATHOLOGICAL EXPLORATION INDICATIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Often Managed Through Thoracoscopic Evaluation
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Direct visualization is highly valuable for evaluating and managing several complex thoracic conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Undiagnosed Pleural Effusions", desc: "Persistent fluid accumulations where repeated cytology and biochemical draws fail to yield a clear diagnosis." },
              { title: "Suspected Pleural Malignancy", desc: "Providing targeted tissue mapping essential for confirming primary mesothelioma or metastatic spreads." },
              { title: "Complex Pleural Tuberculosis", desc: "Isolating granulomatous changes along the membranes that standard fluid cultures often miss." },
              { title: "Recurrent Malignant Accumulations", desc: "Allowing uniform application of pleurodesis agents to seal the empty space and prevent fluid return." },
              { title: "Loculated Fluid Pockets", desc: "Directly breaking down dense inflammatory adhesions that resist standard chest tube drainage." },
              { title: "Advanced Empyema Debridement", desc: "Clearing thick, purulent infectious material to assist full pulmonary expansion under visual control." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION & PROCEDURAL PROTOCOLS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PRE-PROCEDURAL INSTRUCTIONS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Preparation Protocols
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Preparing For Your Scheduled Thoracoscopy
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Fasting Timeline:</strong> A strict fasting window of 6 to 8 hours is required prior to the procedure to ensure safety during conscious sedation.</p>
              <p>• <strong className="text-[#0f172a]">Anticoagulant Management:</strong> All blood thinners, antiplatelets, and diabetes medications must be comprehensively reviewed and safely adjusted.</p>
              <p>• <strong className="text-[#0f172a]">Imaging Portfolio:</strong> Bring all recent high-resolution chest CT scans, X-rays, and prior fluid reports to the hospital.</p>
              <p>• <strong className="text-[#0f172a]">Care Companion:</strong> Because conscious sedation is used, you must arrange for a family member or companion to assist you during discharge.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE STEPS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Inside the Interventional Suite
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Step-by-Step Thoracoscopic Workflow
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Sedation & Local Anesthesia:</strong> The patient lies comfortably on their side. Conscious sedation is administered alongside highly effective local numbing to ensure a pain-free experience.
                </p>
                <p>
                  <strong className="text-white">Direct Insertion & Inspection:</strong> Through a single small incision, the thoracoscope is gently introduced. Dr. Aggarwal visually maps the cavity and performs targeted tissue biopsies.
                </p>
                <p>
                  <strong className="text-white">Therapeutic Action & Closure:</strong> If needed, pleurodesis is completed to prevent fluid return. A temporary chest tube is placed to allow continued drainage, concluding the 45 to 90-minute procedure.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Request Advanced Thoracoscopic Consultation 📅" />
            </div>
          </div>
        </section>

        {/* RECOVERY CARE & CLINICAL RISK CONTROL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Safety Standards & Recovery
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding Post-Procedure Milestones & Safety Protocols
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            Medical thoracoscopy is a highly refined, low-risk technique within interventional pulmonology. Being clear on your recovery timeline ensures a smooth post-procedural course:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Inpatient Recovery Pathways</h4>
              <p>
                Following the procedure, patients stay in our specialized ward for 1 to 2 days while the chest tube drains any remaining fluid and regular X-rays confirm full lung re-expansion. Mild soreness at the incision site is normal and easily controlled with standard pain medications. If pleurodesis is performed, a low-grade fever may occur briefly as the lining responds effectively to treatment.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Monitoring Risk Factors</h4>
              <p>
                Potential risks include minor localized bleeding, infection at the incision site, or a temporary air leak from biopsy locations. If you experience sudden chest pain, increased shortness of breath, continuous bleeding, or a high fever after returning home, contact our clinic care desk immediately.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL DIALOGUE ADVOCACY */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Consultation Framework
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Key Questions for Your Thoracoscopy Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We value open communication. Consider discussing these diagnostic questions with Dr. Manish Aggarwal during your upcoming appointment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Why is a direct medical thoracoscopy indicated for my case over simply repeating a needle tap?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Are there visible signs of complex pleural web formations or thickening on my CT scan?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Do you plan to perform a concurrent pleurodesis session if recurrent malignant shifts are found?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the expected turnaround time for receiving the final histopathology tissue reports?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How will my current blood thinners be managed before and immediately after the procedure?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What specific activity guidelines should I follow during the first week after the chest tube is removed?
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
                  Advanced Pulmonology Suite
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Unexplained Pleural Fluid That Keeps Coming Back?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get a definitive diagnosis and lasting treatment with medical thoracoscopy, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with 24+ years of specialized experience.
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