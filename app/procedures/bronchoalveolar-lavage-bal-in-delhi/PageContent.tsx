import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is a Bronchoalveolar Lavage (BAL) primarily used to diagnose?",
    answer:
      "A Bronchoalveolar Lavage (BAL) is primarily utilized to identify the precise cellular and microbial profiles of deep lung conditions. It is highly effective in diagnosing complex bacterial, viral, fungal, and tuberculous infections, evaluating opportunistic pneumonias in immunocompromised individuals, and supporting the diagnosis of interstitial lung diseases (ILD) or alveolar hemorrhage.",
  },
  {
    question: "Is BAL considered the same as a standard diagnostic bronchoscopy?",
    answer:
      "BAL is a specialized sampling procedure performed during a bronchoscopy. While a standard bronchoscopy involves visually inspecting the macroscopic lining of the larger central airways, BAL goes further by introducing and retrieving sterile saline to gather cellular fluid from the microscopic small airways and air sacs (alveoli).",
  },
  {
    question: "Is the BAL process painful or uncomfortable for the patient?",
    answer:
      "The procedure is designed to ensure minimal discomfort. Patients are given targeted local anesthetic sprays to completely numb the throat and airways, alongside intravenous conscious sedation to keep them deeply relaxed. Post-procedural symptoms are typically mild and self-limiting, consisting of a minor cough or sore throat.",
  },
  {
    question: "Can a BAL procedure be safely combined with other biopsy methods?",
    answer:
      "Yes. To provide a comprehensive diagnostic evaluation, Dr. Aggarwal frequently combines BAL with a transbronchial lung biopsy or an EBUS-TBNA within the same session. This allows the team to collect both fluid washings and solid tissue structures concurrently, accelerating the diagnostic timeline.",
  },
  {
    question: "What is the expected turnaround time for BAL fluid lab results?",
    answer:
      "Initial cytological assessments and basic gram stains are often reviewed within 24 to 48 hours. Advanced microbiological cultures, specialized fungal markers, mycobacterial evaluations (TB cultures), and molecular panels can take anywhere from a few days to two weeks to achieve full definitive maturation.",
  },
];

export default function BronchoalveolarLavageDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="BAL (Bronchoalveolar Lavage) in Delhi — Precise Diagnosis of Lung Infections and Disease"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, with 24+ years of experience and 10,000+ bronchoscopic procedures performed. Isolate deep-seated pathogens and pinpoint alveolar inflammatory changes through gold-standard diagnostic liquid lung mapping."
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
                Alveolar Fluid Mapping
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Accessing the Cellular Landscape of Deep Pulmonary Structures
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Persistent lung opacities, unresolved pneumonias, and hidden inflammatory processes often originate deep within the microscopic air sacs (alveoli), out of reach of standard surface examinations. A Bronchoalveolar Lavage (BAL), frequently described as a liquid biopsy, solves this challenge by enabling safe fluid sampling from the furthest reaches of the respiratory system.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                By infusing a targeted volume of sterile saline solution into the precise segment highlighted by a CT scan, we wash the alveolar surfaces. Gently suctioning this fluid back retrieves critical cellular suspensions, protein complexes, and active micro-organisms for exhaustive laboratory profile processing.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal applies over 24 years of clinical experience and 10,000 completed procedures to managing advanced lung pathologies. His expertise in diagnostic workflows ensures optimized cellular yields, providing accurate guidance for targeted therapies in both complex immunodeficiencies and chronic chest diseases.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg"
                alt="Pulmonology care specialists managing diagnostic fluid collection panels during a sterile bronchoalveolar lavage"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* BRONCHOSCOPIC MODALITIES GRID */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Modalities Matrix
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Comparing BAL Against Other Interventional Sampling Methods
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Modern interventional pulmonology employs multiple technical approaches based on the location and characteristics of the suspected disease:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Interventional Modality</th>
                  <th className="p-4">Target Anatomy</th>
                  <th className="p-4">Sample Output Type</th>
                  <th className="p-4">Primary Diagnostic Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">BAL (Bronchoalveolar Lavage)</td>
                  <td className="p-4">Microscopic small airways & deep air sacs (alveoli).</td>
                  <td className="p-4 text-emerald-600 font-semibold">Saline wash fluid containing cells and pathogens.</td>
                  <td className="p-4">Identifying atypical infections, opportunistic fungi, and diffuse inflammatory patterns.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Transbronchial Lung Biopsy (TBLB)</td>
                  <td className="p-4">Deep parenchymal lung tissue structural maps.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Solid structural core lung tissue blocks.</td>
                  <td className="p-4">Diagnosing Interstitial Lung Diseases (ILD) and complex tissue remodeling.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">EBUS-TBNA</td>
                  <td className="p-4">Extra-bronchial nodes & mediastinal chest masses.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Targeted fine-needle cellular aspirations.</td>
                  <td className="p-4">Definitive oncological staging of lung cancer and sarcoidosis mapping.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CONDITIONS GENERALLY EVALUATED */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Indications
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Requiring Advanced Alveolar Lavage Profiling
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            BAL wash fluid analysis provides essential diagnostic insights for several complex pulmonary conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Non-Resolving Pneumonias", desc: "Isolating hidden bacteria, atypical pathogens, or viruses when standard antibiotic lines fail to clear symptoms." },
              { title: "Opportunistic Mycological Panels", desc: "Identifying deep fungal networks like Pneumocystis jirovecii or Aspergillus in immunocompromised patients." },
              { title: "Pulmonary Tuberculosis (TB)", desc: "Securing valuable fluid tracking samples for GeneXpert and culture lines when regular sputum tests are inconclusive." },
              { title: "Diffuse Alveolar Hemorrhage", desc: "Confirming deep-seated vascular bleeding inside the lungs through serial, increasingly blood-stained liquid wash returns." },
              { title: "Pulmonary Alveolar Proteinosis", desc: "Identifying the characteristic opaque, milky, lipid-rich fluid indicative of this rare metabolic condition." },
              { title: "Occupational Pneumoconiosis", desc: "Detecting retained inorganic mineral dust dusts, asbestos fragments, or toxic compounds from work exposures." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION PROTOCOLS & TIMELINES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE PATIENT CLINICAL INSTRUCTIONS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Patient Preparation Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Preparing For Your Scheduled BAL Procedure
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• <strong className="text-[#0f172a]">Fasting Directive:</strong> Do not eat food or consume liquids for 6 to 8 hours prior to your scheduled clinical arrival time.</p>
              <p>• <strong className="text-[#0f172a]">Medication Review:</strong> Disclose all records. Specialized therapies, particularly blood thinners, must be safely adjusted before the procedure.</p>
              <p>• <strong className="text-[#0f172a]">History Submission:</strong> Bring all previous chest CT scans, blood panels, and historical antibiotic reaction logs to your consult.</p>
              <p>• <strong className="text-[#0f172a]">Post-Op Caregiver:</strong> Because you will receive relaxing sedatives, you cannot drive. A responsible adult must accompany you home.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE FLOW METRICS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedural Workflow
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What Happens During the Lavage Fluid Extraction
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Comfort Management:</strong> The throat is prepared using professional topical numbing sprays, combined with intravenous conscious sedatives to maintain perfect comfort throughout.
                </p>
                <p>
                  <strong className="text-white">Fluid Instillation:</strong> Dr. Aggarwal guides the thin scope into the targeted segment of the lung, gently introduces sterile saline, and suctions it back within 20 to 40 minutes.
                </p>
                <p>
                  <strong className="text-white">Rapid Recovery:</strong> You will rest in our post-anesthesia recovery space for 1 to 2 hours. Normal swallowing returns quickly, allowing you to return home the same afternoon.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule Your Lavage Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* CLINICAL SAFETY AND RECOVERY TRENDS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Safety & Post-Op Trends
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Understanding Safety Profiles & Post-Procedure Care
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            BAL is widely recognized as one of the safest diagnostic procedures in interventional pulmonology. However, tracking post-op milestones ensures a safe, comfortable recovery:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">Expected Post-Op Recovery</h4>
              <p>
                A mild sore throat, a dry cough, or temporary hoarseness are normal airway responses to the scope and typically clear up on their own within 24 to 48 hours. A small number of patients may experience a brief, low-grade fever a few hours after the fluid washing, which quickly responds to standard paracetamol.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#0f172a] text-base">When to Call the Emergency Desk</h4>
              <p>
                While complications are rare, you should contact our support staff immediately if you develop sudden chest pain, increasing shortness of breath, a high fever that does not respond to medication, or if you cough up significant amounts of bright red blood.
              </p>
            </div>
          </div>
        </section>

        {/* CONSULTATION QUESTIONS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Communication
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Important Questions to Discuss Before Your BAL Procedure
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We encourage open discussion to help you feel fully informed and confident before your procedure. Consider asking Dr. Manish Aggarwal these key questions during your clinic visit:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on my CT scan, which specific lobes or segments of the lung require saline washing?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Will we be combining this fluid wash with an EBUS node biopsy or a transbronchial sample during the same session?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What specific viral, complex fungal, or mycobacterial strains are we testing for in the lab?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the precise timeline for safely pausing and restarting my blood thinners?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How soon will the initial fluid counts be ready, and when will the final culture reports come back?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              If the fluid analysis reveals an opportunistic infection, what will our targeted medication strategy be?
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
                  Pulmonology Scheduling Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Struggling With an Unresolved Lung Infection or Unexplained CT Findings?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get an accurate diagnosis with BAL, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with 10,000+ bronchoscopic procedures completed.
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