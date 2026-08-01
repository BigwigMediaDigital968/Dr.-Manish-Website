import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "Do you perform bronchoscopy procedures regularly?",
    answer:
      "Yes. Dr. Manish Aggarwal has extensive specialization in interventional pulmonology, having personally performed over 10,000 bronchoscopies. His practice spans advanced flexible, rigid, and EBUS-guided diagnostic and therapeutic interventions at Max Hospital and his specialized clinic.",
  },
  {
    question: "Is bronchoscopy used to diagnose pulmonary tuberculosis?",
    answer:
      "Yes. Bronchoscopy is highly valuable for diagnosing pulmonary tuberculosis, especially when traditional sputum induction yields inconclusive results. It enables precise bronchoalveolar lavage (BAL) collection to test for active acid-fast bacilli (AFB) and identify drug-resistant strains (MDR-TB).",
  },
  {
    question: "Under what conditions is an EBUS bronchoscopy indicated?",
    answer:
      "Endobronchial Ultrasound (EBUS) is clinically indicated for staging lung cancer, evaluating mediastinal or hilar lymphadenopathy, and obtaining targeted tissue samples to diagnose inflammatory conditions like sarcoidosis or specialized deep thoracic infections.",
  },
  {
    question: "Is the bronchoscopy procedure painful?",
    answer:
      "Discomfort is kept to a minimum. The procedure is performed under local airway anesthesia combined with deep conscious sedation, ensuring you remain comfortable throughout. Rigid bronchoscopies are performed entirely under general anesthesia. Mild throat soreness or hoarseness is normal for 24 to 48 hours afterward.",
  },
  {
    question: "How long does it take to receive the pathology and biopsy results?",
    answer:
      "Visual findings and anatomical observations are discussed immediately following the procedure. Fluid cultures and standard histopathology tissue biopsies typically take 3 to 5 business days to process fully.",
  },
];

export default function BronchoscopyDelhiPageContent() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Bronchoscopy in Delhi — Precise Diagnosis, Expert Interventional Care"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital — with 24+ years of experience and 10,000+ bronchoscopies performed. Access elite interventional care utilizing advanced diagnostic pathways to accurately address complex lung masses, chronic infections, and persistent airway conditions."
        ctaText="Book Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      {/* TRUST STRIP */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wide text-center">
          <div>24+ Years Experience</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>10,000+ Bronchoscopies</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>3,000+ EBUS Procedures</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>4.9 Google Rating (350+ Reviews)</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>FRCP (Glasgow)</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION & WHY CHOOSE DR. MANISH */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Interventional Pulmonology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Advanced Endoscopic Evaluation of the Pulmonary Architecture
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A bronchoscopy is a specialized interventional procedure that allows direct visualization of the trachea, main bronchi, and sub-segmental airway structures. Utilizing an ultra-thin, flexible bronchoscope equipped with high-resolution digital imaging, we can identify mucosal abnormalities, clear complex obstructions, and harvest precise tissue samples.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As the <span className="font-semibold text-[#0f172a]">Principal Director of Chest Disease & Interventional Pulmonology at Max Hospital</span>, Dr. Manish Aggarwal brings unparalleled clinical expertise to Delhi. His extensive background spans decades of managing critical airway pathologies, rigid stenting, cryobiopsies, and advanced oncology staging using Endobronchial Ultrasound (EBUS).
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                His global medical experience includes years within top-tier UK NHS hospital networks—including Lister Hospital, Norfolk & Norwich University Hospital, and Great Western Hospital. This background guarantees that your procedure follows the absolute highest international standards of safety and diagnostic accuracy.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Dr. Manish Aggarwal performing an advanced interventional bronchoscopy procedure in a specialized pulmonary suite"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* CLINICAL INDICATIONS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Procedural Objectives
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Why is a Bronchoscopy Recommended?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              This interventional technique is indicated to evaluate abnormal radiological findings or manage structural airway disorders:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-sm">Oncology & Lymph Node Staging</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">Targeting suspicious pulmonary masses, lung nodules, or performing EBUS-guided needle aspirations for accurate lymph node staging.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-sm">Hemoptysis Evaluation</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">Rapidly localizing and managing active sources of endobronchial bleeding or addressing chronic blood-streaked sputum.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-sm">Refractory Infections & TB</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">Gathering clean bronchoalveolar lavage samples to diagnose non-resolving pneumonias, atypical mycobacteria, and drug-resistant TB.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-sm">Interstitial Lung Disease (ILD)</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">Performing advanced cryobiopsies to obtain large, intact parenchymal samples for precise differential diagnosis of lung fibrosis.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-sm">Central Airway Obstruction</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">Managing malignant strictures or benign scarring through mechanical debulking, tumor ablation, and airway stent placement.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-[#0f172a] text-sm">Foreign Body Extraction</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">Emergency removal of aspirated foreign objects, mucous plugs, or cellular debris obstructing segments of the lung.</p>
            </div>
          </div>
        </section>

        {/* MODALITIES OFFERED */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Advanced Modalities
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Specialized Interventional Pulmonology Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Flexible Bronchoscopy", text: "Performed under light conscious sedation with targeted local anesthetic sprays; ideal for routine structural inspections and dynamic fluid collections." },
              { title: "Rigid Bronchoscopy", text: "Utilizes a specialized hollow metal tube under general anesthesia. Essential for complex therapeutic interventions, massive bleeding control, and stenting." },
              { title: "Endobronchial Ultrasound (EBUS)", text: "Combines endoscopy with real-time ultrasound imaging to safely map, view, and sample mediastinal structures lying outside the airway walls." },
              { title: "Cryobiopsy", text: "An advanced freezing technique used to retrieve premium, artifact-free tissue blocks, drastically reducing the need for open lung surgeries." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION & TIMELINE SPREAD */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PATIENT PREPARATION GUIDE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Preparation Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Ensuring Safe Procedural Preparation
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Following clinical pre-op protocols helps optimize your airway conditions and ensures a smooth recovery:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Strict Fasting:</strong> Maintain complete fasting (nil per os) for 6 to 8 hours prior to your scheduled procedure time.</p>
              <p>• <strong className="text-[#0f172a]">Medication Mapping:</strong> Disclose all current prescriptions. Antiplatelet medications or blood thinners must be safely paused under our guidance.</p>
              <p>• <strong className="text-[#0f172a]">Allergy Profiles:</strong> Inform our team of any known sensitivities to local anesthetics, sedatives, latex, or surgical prep solutions.</p>
              <p>• <strong className="text-[#0f172a]">Discharge Management:</strong> You must arrange for a family member or designated caregiver to drive you home following your time in recovery.</p>
            </div>
          </div>

          {/* THE PATIENT EXPERIENCE */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Intraoperative Workflow
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What to Expect During the Bronchoscopy
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Anesthesia and Comfort:</strong> The throat is thoroughly numbed using a topical lidocaine spray. Intravenous sedation is administered to ensure you remain completely relaxed and comfortable.
                </p>
                <p>
                  <strong className="text-white">Procedural Timeline:</strong> Scope navigation, diagnostic viewing, and targeted sample collection are usually completed within 30 to 60 minutes inside our interventional suite.
                </p>
                <p>
                  <strong className="text-white">Continuous Monitoring:</strong> Advanced metrics—including blood pressure trends, $SpO_2$ levels, and ECG rhythms—are tracked by dedicated nursing staff throughout the entire procedure.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule Your Evaluation with Dr. Manish 📅" />
            </div>
          </div>
        </section>

        {/* CLINICAL SAFETY & RISK MANAGEMENT */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Safety Standards
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Post-Procedural Recovery & Risk Management
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            While advanced bronchoscopy is highly safe and routine, understanding post-op expectations ensures a secure recovery path:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Standard Recovery Path</h4>
              <p>
                You will rest in our recovery bay for 1 to 2 hours until the sedative completely wears off. To prevent aspiration, do not eat or drink until your throat reflex returns fully, which typically takes about an hour. A mild cough, hoarseness, or minor blood-tinged sputum are normal reactions that clear up quickly.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">When to Contact the Clinic</h4>
              <p>
                Complications like a minor lung leak (pneumothorax) or prolonged bleeding are rare. Contact our clinic immediately if you experience severe chest pain, sudden difficulty breathing, a high fever, or persistent bright red blood in your cough.
              </p>
            </div>
          </div>
        </section>

        {/* ESSENTIAL CLINICAL QUESTIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Empowerment
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Key Questions to Discuss During Your Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We prioritize clear communication. We encourage you to review these key points with Dr. Manish Aggarwal prior to your scheduled procedure:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What specific changes or abnormalities are we looking for on the CT scan or X-ray?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Will my condition require a flexible approach, or a rigid scope under general anesthesia?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the exact timeline for pausing and safely restarting my blood thinners?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Are there special home precautions I should take if a lung biopsy or wash is performed?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              When will the final pathology reports be ready, and how will we review the findings?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What are our next planned steps if the tissue samples point toward a specific tumor or chronic infection?
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
                  Contact Specialist Clinic
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Experiencing Persistent Cough, Breathlessness, or Chest Symptoms?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Don't wait for respiratory symptoms to worsen. Get evaluated by Dr. Manish Aggarwal — Delhi's leading interventional pulmonologist with 10,000+ bronchoscopies performed.
                </p>
                <div className="text-xs text-slate-400 space-y-1 pt-1">
                  <p>📍 <strong className="text-slate-300">Clinic Address:</strong> JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034</p>
                  <p>📞 <strong className="text-slate-300">Call Clinic Desk:</strong> +91 9899554095 &nbsp;|&nbsp; ✉️ <strong className="text-slate-300">Email:</strong> Aggarmanish@gmail.com</p>
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