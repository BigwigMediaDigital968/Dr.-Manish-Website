import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is an Intercostal Drainage (ICD) primarily used for?",
    answer:
      "An Intercostal Drainage (ICD), commonly known as chest tube insertion, is utilized to continuously clear abnormal accumulations of air, fluid, blood, or pus from the pleural space. By evacuating these collections, it relieves mechanical compression on the lung parenchyma, allowing the lung to fully re-expand and restoring normal respiratory mechanics.",
  },
  {
    question: "Is the chest tube insertion process painful?",
    answer:
      "To ensure patient comfort, the targeted insertion site along the chest wall is thoroughly infiltrated with a high-potency local anesthetic. While patients may experience a localized sensation of pressure or pulling during the insertion, sharp pain is effectively neutralized. Any post-procedural soreness or site discomfort is managed with standard analgesics.",
  },
  {
    question: "How long does an intercostal drainage tube typically need to remain in place?",
    answer:
      "The duration depends entirely on the underlying pathology and the rate of drainage or air leak resolution. Typically, a chest tube remains in place for a few days. Dr. Aggarwal monitors progress via serial chest X-rays, removing the tube once fluid output decreases to a safe threshold or air leaks resolve entirely.",
  },
  {
    question: "Is an ICD procedure always performed as a medical emergency?",
    answer:
      "Not exclusively. While life-threatening conditions like a tension pneumothorax require immediate, urgent chest tube decompression, many ICD insertions are planned, controlled interventions. This includes managing large malignant pleural effusions, chronic empyema, or scheduled post-surgical chest drainage.",
  },
  {
    question: "Does an ICD procedure require overnight hospitalization?",
    answer:
      "Yes, in the vast majority of cases. Because the chest tube is connected to a dedicated underwater seal or negative-pressure drainage system, patients are hospitalized for close monitoring. This ensures continuous tracking of drainage volumes, system integrity, and lung re-expansion milestone protocols.",
  },
];

export default function IntercostalDrainageDelhiPageContent() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Intercostal Drainage (ICD) in Delhi — Safe, Guided Chest Tube Insertion for Lung and Pleural Conditions"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital. Benefit from 24+ years of expertise and 10,000+ procedures to manage collapsed lungs, complex pleural effusions, and deep chest infections safely."
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
                Pleural Space Decompression
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Restoring Pulmonary Volumetric Capacity via Continuous Chest Drainage
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                When abnormal volumes of air, blood, exudative fluid, or purulent pus build up within the pleural cavity, the resulting intra-thoracic pressure mechanically compresses the underlying lung. This restriction causes sudden breathlessness, severe ventilation ventilation imbalances, and severe chest discomfort. An Intercostal Drainage (ICD) procedure delivers continuous evacuation to resolve this compression.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                By carefully placing a flexible, biocompatible chest tube or a guided micro-catheter through the intercostal space between the ribs, we establish a direct channel out of the pleural space. Connected to a specialized underwater seal drainage system, this setup allows trapped elements to escape continuously, enabling the lung to re-expand and restore normal respiratory function.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal combines over 24 years of clinical experience in interventional pulmonology and critical care. Using real-time thoracic ultrasound guidance, he performs chest tube placements with high accuracy, optimizing positioning and ensuring excellent patient safety.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Pulmonology team reviewing high-resolution chest imaging before performing an ultrasound-guided intercostal drainage procedure"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* CHEST TUBE SELECTION MATRIX */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Technique Modalities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Anatomical Tailoring: Selecting the Optimal Chest Tube Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Dr. Aggarwal selects the appropriate tube size and insertion method based on the density, viscosity, and volume of the trapped intra-thoracic collections:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-slate-200 text-[#0f172a] rounded-lg font-bold text-xs">Thick Collections</span>
                <h3 className="font-bold text-[#0f172a] text-base">Standard Large-Bore Chest Tubes</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                These larger tubes are chosen for dense, highly viscous collections such as acute hemothorax (blood accumulations) or thick loculated empyema (purulent infections). The wider diameter prevents debris blockages, ensuring steady drainage of thick fluid profiles.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg font-bold text-xs">Low Viscosity / Air</span>
                <h3 className="font-bold text-[#0f172a] text-base">Small-Bore Pigtail Catheters</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                These thinner, more flexible micro-catheters offer a less invasive option for uncomplicated free-flowing fluid or acute pneumothorax (trapped air). Inserted precisely under live ultrasound guidance, they offer excellent comfort while maintaining high drainage efficiency.
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
            Conditions Requiring Intercostal Drainage Interventions
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Continuous pleural space drainage is vital for managing several severe thoracic conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Spontaneous or Traumatic Pneumothorax", desc: "A collapsed lung caused by air tracking into the pleural space, requiring swift pressure evacuation." },
              { title: "Thoracic Empyema & Parapneumonic Collections", desc: "Infected fluid or dense pus collections secondary to aggressive bacterial pneumonias." },
              { title: "Malignant Pleural Effusion Profiles", desc: "Rapidly recurring fluid shifts caused by primary or metastatic oncological involvements." },
              { title: "Acute Traumatic Hemothorax", desc: "Blood collections inside the chest cavity following external blunt injuries or invasive thoracic surgeries." },
              { title: "Bronchopleural Fistula Support", desc: "Managing abnormal fistulous tracking between the airways and the pleura requiring prolonged drainage." },
              { title: "Tension Pneumothorax Emergencies", desc: "Life-threatening pressure build-ups requiring immediate decompression to protect cardiac output." },
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
                Clinical Pre-Op Requirements
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Emergency Exceptions:</strong> In acute life-threatening situations, ICD placement is performed immediately with minimal prep to protect the patient.</p>
              <p>• <strong className="text-[#0f172a]">Medication Profiling:</strong> For elective cases, a full review of all medications is mandatory, with blood thinners adjusted safely before the procedure.</p>
              <p>• <strong className="text-[#0f172a]">Diagnostic Aggregation:</strong> Ensure all recent chest X-rays, high-resolution CT scans, and metabolic profiles are provided at the consult.</p>
              <p>• <strong className="text-[#0f172a]">Allergy Disclosures:</strong> Inform our medical team of any previous adverse reactions to local anesthetics, antiseptics, or latex materials.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE FLOW STEPS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedural Stages
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What to Expect During the ICD Insertion
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Local Anesthesia:</strong> The skin and deeper intercostal tissue structures are thoroughly numbed using a precise local anesthetic to ensure a highly comfortable experience.
                </p>
                <p>
                  <strong className="text-white">Ultrasound Guidance:</strong> Dr. Aggarwal uses live ultrasound imaging to map a safe insertion path, completely avoiding nearby neurovascular structures.
                </p>
                <p>
                  <strong className="text-white">System Integration:</strong> The chest tube is safely positioned, secured with sterile sutures, and connected to an underwater seal system. The entire process takes 20 to 40 minutes.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Request A Pleural Consultation Desk Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* MEDICAL POST-OP INTEGRITY MANAGEMENT */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Post-Op Milestones & Risks
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Safety Monitoring, Managing Recovery, & Risk Mitigation
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            An intercostal drainage procedure is a well-established, vital intervention. Understanding your inpatient monitoring path ensures a safe, successful recovery:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Inpatient Monitoring Framework</h4>
              <p>
                The chest tube remains in place for several days, during which our team closely tracks fluid output and checks for air leaks. We use regular chest X-rays to verify that the lung is re-expanding properly. While the tube is in place, localized site soreness is normal and easily managed with targeted pain relief, allowing you to move around safely.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Clinical Risks & Safety Thresholds</h4>
              <p>
                Potential risks include localized site bleeding, minor infections, or tube displacement. If you experience a sudden increase in shortness of breath, severe chest pain, notice the tube shifting, or see significant fluid leakage around the dressing, please inform your nursing team or contact our emergency desk immediately.
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
            Key Questions to Ask Before Your Chest Tube Procedure
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We prioritize helping you feel fully informed and confident. Consider discussing these clinical questions with Dr. Manish Aggarwal during your consultation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What specific material is trapped in my pleural space—is it primarily air, infected fluid, or blood?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Will my condition respond best to a small-bore pigtail catheter or a standard large-bore chest tube?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the estimated number of days the drainage system will need to stay connected?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What specific breathing exercises should I practice to help my lung re-expand while the tube is in place?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How will we manage the drainage system to allow me to sit up and walk safely during my hospital stay?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Once the tube is safely removed, what follow-up imaging plan will we use to monitor my long-term recovery?
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
                  Critical Pleural Care Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Dealing with a Collapsed Lung, Chest Infection, or Fluid Buildup?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get safe, expert chest tube care with an intercostal drainage procedure, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with 24+ years of specialized experience.
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