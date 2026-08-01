import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "When is an EBUS procedure clinically required?",
    answer:
      "Endobronchial Ultrasound (EBUS) is primarily indicated for the precise staging of lung cancer, sampling enlarged mediastinal or hilar lymph nodes, and diagnosing complex intrathoracic conditions such as sarcoidosis, lymphoma, or tuberculous lymphadenitis without resorting to open surgery.",
  },
  {
    question: "How does EBUS structurally differ from a standard bronchoscopy?",
    answer:
      "A standard bronchoscopy only allows the physician to visualize the internal mucosal lining of the airways. EBUS integrates an ultrasound transducer at the tip of the scope, enabling real-time imaging through the airway wall to view and sample extra-bronchial structures, masses, and lymph nodes via EBUS-TBNA.",
  },
  {
    question: "Is the EBUS procedure painful for the patient?",
    answer:
      "No, the procedure is designed to minimize discomfort. It is performed under deep conscious sedation or general anesthesia, combined with topical numbing sprays for the throat. Most patients experience nothing more than a mild, self-limiting sore throat or slight hoarseness for 24 to 48 hours afterward.",
  },
  {
    question: "Can an EBUS procedure truly eliminate the need for surgical biopsy?",
    answer:
      "Yes. For the vast majority of patients, EBUS-TBNA provides a definitive diagnostic and staging tissue sample, successfully avoiding the need for much more invasive surgical interventions such as a mediastinoscopy or an open thoracotomy.",
  },
  {
    question: "What is the typical turnaround time for EBUS pathology results?",
    answer:
      "Preliminary anatomical observations are reviewed immediately after the study. Comprehensive histopathology reports and cytological evaluations usually take 3 to 5 days, while advanced molecular, genetic, or immunohistochemistry panels for targeted oncology care can take up to two weeks.",
  },
];

export default function EbusLungDiagnosisDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="EBUS (Endobronchial Ultrasound) in Delhi — Precise, Minimally Invasive Lung Diagnosis"
        description="Performed by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital — with 24+ years of experience and 3,000+ EBUS procedures performed. Achieve definitive thoracic diagnostic mapping and lung cancer staging through state-of-the-art ultrasound-guided tissue sampling."
        ctaText="Book Appointment"
        backgroundImage="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
      />

      {/* TRUST STRIP */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wide text-center">
          <div>24+ Years Clinical Experience</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>3,000+ EBUS Performed</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>10,000+ Bronchoscopies Performed</div>
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
                Advanced Endosonography
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Visualizing Beyond the Airway Walls with Real-Time Precision
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Endobronchial Ultrasound (EBUS) marks a significant evolution in interventional pulmonology. While traditional bronchoscopes can only evaluate conditions within the internal breathing tubes, EBUS integrates a high-frequency ultrasound probe at the scope's tip to map out masses, vessels, and lymph nodes deep inside the mediastinum.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                By utilizing <strong className="text-[#0f172a]">EBUS-TBNA (Transbronchial Needle Aspiration)</strong>, we can target and sample tissue from suspicious chest lesions under direct, real-time visual guidance. This highly accurate technique provides premium cellular yields required for modern molecular mapping while maintaining an exceptional patient safety profile.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                As <span className="font-semibold text-[#0f172a]">Principal Director at Max Hospital</span>, Dr. Manish Aggarwal brings an extensive interventional background to his Pitampura clinic. Having personally directed over 3,000 complex EBUS procedures, his clinical insights ensure that patients with abnormal CT or PET scans receive definitive diagnoses quickly and comfortably.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg"
                alt="A specialized pulmonology team analyzing real-time ultrasound imaging during an EBUS bronchoscopy procedure"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* EBUS VS STANDARD BRONCHOSCOPY */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Technology Comparison
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Understanding the Structural Differences in Diagnostic Scopes
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              While both modalities utilize a thin tube passed down the airway, their capabilities suit completely different diagnostic goals:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Clinical Attribute</th>
                  <th className="p-4">Standard Flexible Bronchoscopy</th>
                  <th className="p-4">EBUS (Endobronchial Ultrasound)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Visual Range</td>
                  <td className="p-4">Internal mucosal lining and inner channel architecture only.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Extends beyond airway walls, showing hidden nodes and vascular structures.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Biopsy Approach</td>
                  <td className="p-4">Surface brushings, washings, or direct bites of visible inside tumors.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Real-time needle aspiration guided by live ultrasound imaging (EBUS-TBNA).</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Primary Clinical Uses</td>
                  <td className="p-4">Clearing dynamic mucus blocks, treating bleeding, or viewing visible tumors.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Accurate lung cancer staging, sarcoidosis tracking, and checking deep nodes.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0f172a]">Surgical Avoidance</td>
                  <td className="p-4">Mainly diagnostic for inner airway issues.</td>
                  <td className="p-4 text-emerald-600 font-semibold">Replaces diagnostic surgery like surgical mediastinoscopy in most cases.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DISEASES EVALUATED BY EBUS */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Clinical Scope
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Evaluated and Diagnosed Using EBUS Modalities
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Ultrasound-guided transbronchial aspiration is vital for establishing accurate diagnoses across several thoracic conditions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Lung Cancer Staging", desc: "Sampling regional hilar and mediastinal lymph node chains to determine tumor spread and secure tissue for genetic mutation profiling." },
              { title: "Sarcoidosis Confirmation", desc: "Obtaining clear core biopsies from symmetric bilateral lymph nodes to identify non-caseating granulomas." },
              { title: "Tuberculosis Lymphadenitis", desc: "Biopsying deep chest nodes to check for central caseous necrosis and run gene testing for drug resistance." },
              { title: "Mediastinal Lymphadenopathy", desc: "Investigating unexplained, asymptomatic node enlargements caught on routine screening CTs or PET imaging." },
              { title: "Lymphoma Characterization", desc: "Collecting dense cellular aspirations to aid pathology labs in classifying complex hematologic malignancies." },
              { title: "Metastatic Screenings", desc: "Confirming whether secondary primary malignancies from outside organs have reached the central thoracic nodes." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREPARATION & TIMELINE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE PRE-OP PROTOCOL */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Patient Roadmap
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                Preparing For Your Scheduled EBUS Procedure
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Following standard clinical protocols protects your airway and avoids the need to reschedule:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Fasting Timeline:</strong> Maintain strict fasting (no food or liquids) for 6 to 8 hours before your intake time.</p>
              <p>• <strong className="text-[#0f172a]">Medication Management:</strong> Disclose all records. Antiplatelets and anticoagulants must be safely paused under explicit instruction.</p>
              <p>• <strong className="text-[#0f172a]">Imaging Verification:</strong> Bring your full CT/PET diagnostic physical films and digital files to the procedure room.</p>
              <p>• <strong className="text-[#0f172a]">Recovery Support:</strong> Intravenous sedatives mean you cannot drive post-op. A responsible adult must accompany you home.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE WORKFLOW */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                What to Expect
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                During and Immediately Following the EBUS Study
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Sedation Optimization:</strong> Most diagnostic steps are performed under deep conscious sedation or general anesthesia, ensuring you remain pain-free throughout.
                </p>
                <p>
                  <strong className="text-white">Precision Aspiration:</strong> Dr. Manish Aggarwal targets multiple structural sites during a 30 to 60-minute window to secure adequate tissue samples.
                </p>
                <p>
                  <strong className="text-white">Post-Op Recovery:</strong> You will rest in our recovery bay for 1 to 2 hours until the sedation wears off. Do not drink liquids until your swallowing reflex returns fully.
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Schedule Your EBUS Evaluation 📅" />
            </div>
          </div>
        </section>

        {/* RISKS AND CLINICAL SAFETY METRICS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Safety Paradigms
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Clinical Safety & Post-Biopsy Expectations
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6">
            EBUS is internationally recognized as a low-risk, highly reliable procedure. However, being aware of common post-op signs helps ensure a safe recovery:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                • <strong className="text-[#0f172a]">Common Mild Symptoms:</strong> A light cough, throat tickle, mild voice hoarseness, or pink-tinted sputum are common reactions to the scope that resolve on their own within 48 hours.
              </p>
              <p>
                • <strong className="text-[#0f172a]">Sedation Awareness:</strong> Avoid driving a car, operating heavy machinery, or signing any legal documents for the rest of the day until the sedatives clear your system completely.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                • <strong className="text-[#0f172a]">Rare Clinical Complications:</strong> Serious issues like a significant lung leak (pneumothorax) or deep airway infection occur in less than 1% of cases.
              </p>
              <p>
                • <strong className="text-[#0f172a]">When to Seek Care:</strong> Contact our emergency desk immediately if you develop sharp chest pains, worsening shortness of breath, a sudden high fever, or begin coughing up bright red blood.
              </p>
            </div>
          </div>
        </section>

        {/* QUESTIONS FOR PRE-PROCEDURE CONSULTATION */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Communication
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Key Diagnostic Questions For Your Appointment
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            We believe an informed patient enjoys a more relaxed, confident care experience. Consider discussing these core points with Dr. Manish Aggarwal:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on my CT or PET scans, which specific lymph node stations look enlarged and require sampling?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Will my procedure be performed under conscious intravenous sedation or formal general anesthesia?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What is the precise timeline for pausing my blood thinners, and when can I safely restart them after the biopsy?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Are we sending the collected tissue samples for advanced molecular or genetic mutation mapping?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How long will it take for the final pathology results to return, and how will we outline the next steps?
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              If the EBUS samples show an atypical infection or granuloma, what medical treatments will we start?
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
                  Patient Intake Desk
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Have an Abnormal Scan or Suspicious Lymph Nodes?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Get an accurate, minimally invasive diagnosis with EBUS, performed by Dr. Manish Aggarwal, Delhi's leading interventional pulmonologist with 3,000+ EBUS procedures completed.
                </p>
                <div className="text-xs text-slate-400 space-y-1 pt-1">
                  <p>📍 <strong className="text-slate-300">Clinic Location:</strong> JU-12A, Block G&JU, Ranikhet, Pitampura, Delhi, 110034</p>
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