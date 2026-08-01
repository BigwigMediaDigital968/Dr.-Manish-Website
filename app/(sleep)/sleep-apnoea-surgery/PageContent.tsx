import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is Sleep Apnoea Surgery?",
    answer:
      "Sleep apnoea surgery encompasses a range of specialized surgical procedures designed to modify, reposition, or remove specific tissues within the upper respiratory tract. The goal is to clear structural blockages that cause Obstructive Sleep Apnea (OSA) when non-invasive interventions have proved unsuccessful.",
  },
  {
    question: "When is a surgical approach considered appropriate?",
    answer:
      "Surgery is generally reserved for patients who have clear anatomical airway obstructions (such as severely hypertrophied tonsils, a deviated nasal septum, or a retrognathic jaw position) or those who are completely unable to tolerate positive airway pressure (PAP) therapy despite extensive troubleshooting.",
  },
  {
    question: "Is surgery more effective than long-term CPAP therapy?",
    answer:
      "CPAP therapy remains the international gold standard first-line treatment for moderate-to-severe OSA due to its non-invasive nature and high efficacy. Surgery is not universally 'better'; it is a highly selective alternative meant for specific structural abnormalities or therapy-resistant cases.",
  },
  {
    question:
      "Can surgical intervention completely cure Obstructive Sleep Apnea?",
    answer:
      "While surgery can significantly widen the airway, improve airflow, and reduce the Apnea-Hypopnea Index (AHI), it does not guarantee a total cure. Sleep apnoea is complex and multifactorial; some patients may still require low-level positional or PAP support after their procedure.",
  },
  {
    question: "Why is a repeat post-operative sleep study necessary?",
    answer:
      "A follow-up sleep study (polysomnography) is typically performed a few months after tissue healing is complete. This provides objective data on your breathing metrics, confirming how effectively the physical blockage was resolved and checking for any lingering sleep disruptions.",
  },
];

export default function SleepApneaSurgeryEvaluationPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Sleep Apnoea Surgery: Understanding When It's Actually the Right Option"
        description="If you've been diagnosed with sleep apnoea, you may have wondered whether surgery is the only way to fix it — a common concern, especially after hearing about CPAP machines, masks, and long-term therapy. The truth is, surgery is not the first step for most patients with sleep apnoea. Before considering any procedure, it's important to understand exactly what's causing the airway blockage during your sleep — and this starts with a proper evaluation, not an assumption. Dr. Manish Aggarwal, a Pulmonologist and Sleep Specialist, explains when surgery may be considered and what the options involve."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Surgical Anatomy & Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Evaluating the Upper Airway Structure Before Considering Surgery
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Obstructive Sleep Apnea (OSA) is primarily a physical,
                structural issue. When you enter deep sleep, the muscles
                supporting the soft tissues in your throat relax, causing the
                upper airway to narrow or collapse entirely. While non-invasive
                positive airway pressure therapies effectively act as a
                pneumatic splint, some patients present with severe, localized
                anatomical blockages that complicate standard management.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                <strong className="text-[#0f172a]">Sleep Apnoea Surgery</strong>{" "}
                includes various specialized procedures designed to alter,
                clear, or bypass these physical obstructions. Rather than being
                a primary treatment for everyone, surgical intervention is a
                highly selective option. It is typically considered when there
                are clear structural issues, such as enlarged tonsils or
                distinct jaw misalignment, or when non-surgical treatments have
                not provided sufficient relief.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Led by{" "}
                <span className="font-semibold text-[#0f172a]">
                  Dr. Manish Aggarwal
                </span>
                , our clinical focus centers on precise, comprehensive
                diagnosis. We thoroughly evaluate your unique airway anatomy and
                review your history with conservative therapies. This detailed
                assessment ensures we explore surgical options only when there
                is a clear structural indication, avoiding unnecessary
                procedures.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/5355894/pexels-photo-5355894.jpeg"
                alt="A clinical sleep specialist reviewing detailed upper airway scans and imaging with a patient during a consultation"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PRIMARY INDICATORS SELECTION TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Patient Selection Criteria
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Is Surgery the Right Approach for Your Sleep Apnoea?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Determining whether a patient is a suitable candidate for surgical
              intervention requires a balanced comparison of anatomical and
              clinical factors:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4 w-1/2">When Surgery May Be Indicated</th>
                  <th className="p-4 w-1/2">
                    When Non-Surgical Options Are Preferred
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b] align-top">
                <tr>
                  <td className="p-4 border-r border-slate-100">
                    <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm">
                      <li>
                        <strong className="text-[#0f172a]">
                          Severe PAP Intolerance:
                        </strong>{" "}
                        Unable to adapt to CPAP or BiPAP devices despite
                        optimized mask fittings and pressure settings.
                      </li>
                      <li>
                        <strong className="text-[#0f172a]">
                          Clear Structural Blockage:
                        </strong>{" "}
                        Documented structural issues like severely enlarged
                        tonsils, adenoids, or nasal polyps.
                      </li>
                      <li>
                        <strong className="text-[#0f172a]">
                          Skeletal Variations:
                        </strong>{" "}
                        Specific bone structures, such as a narrow or set-back
                        lower jaw, that reduce airway space.
                      </li>
                      <li>
                        <strong className="text-[#0f172a]">
                          Unresolved Symptoms:
                        </strong>{" "}
                        Continued severe apnoea events despite consistent use of
                        conservative therapies.
                      </li>
                    </ul>
                  </td>
                  <td className="p-4">
                    <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm">
                      <li>
                        <strong className="text-[#0f172a]">
                          Responsive to Therapy:
                        </strong>{" "}
                        Sleep apnoea is well-controlled with standard CPAP or
                        BiPAP adjustments.
                      </li>
                      <li>
                        <strong className="text-[#0f172a]">
                          Mild Form of OSA:
                        </strong>{" "}
                        Condition can be managed with simple lifestyle changes
                        or oral appliances.
                      </li>
                      <li>
                        <strong className="text-[#0f172a]">
                          Weight-Related Airway Changes:
                        </strong>{" "}
                        Symptoms improve significantly with weight management
                        and targeted lifestyle changes.
                      </li>
                      <li>
                        <strong className="text-[#0f172a]">
                          No Obvious Structural Cause:
                        </strong>{" "}
                        Airway evaluation shows no localized, severe physical
                        obstruction.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Whether surgery is appropriate depends on a detailed evaluation of
              your specific airway anatomy, not a simple checklist.
            </p>
            <BookAppointmentButton cta="Consult Doctor 🗓" />
          </div>
        </section>

        {/* DIAGNOSTIC BREAKDOWN: NON-SURGICAL ALTERNATIVES */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Conservative Alternatives
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Is Surgical Intervention Always Necessary?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              No. Most sleep apnoea patients achieve excellent airway stability
              without surgery. Before exploring procedural options, we
              prioritize assessing your response to established non-surgical
              treatments:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                CPAP Airway Splinting
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                The leading non-surgical treatment for moderate-to-severe OSA,
                delivering a steady stream of air to keep the respiratory tract
                open during sleep.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Bilevel (BiPAP) Support
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Uses alternating pressure levels to assist patients who need
                additional breathing support or have difficulty exhaling against
                fixed pressure streams.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Oral Appliance Therapy
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Custom-fit dental devices that gently hold the jaw or tongue
                forward, widening the airway for mild-to-moderate positional
                sleep apnoea.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Clinical Weight Management
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Reduces excess fatty tissue around the neck and upper chest,
                lowering the physical pressure that can cause the airway to
                collapse.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Positional Therapy
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Uses specialized wedges or sleep wear to prevent you from
                sleeping on your back, which helps minimize gravity-induced
                tongue collapse.
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Targeted Lifestyle Modifications
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Managing alcohol consumption and optimizing evening routines to
                prevent excessive muscle relaxation in the throat during sleep.
              </p>
            </div>
          </div>
        </section>

        {/* RECOGNIZED SURGICAL TYPOLOGIES */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Surgical Modalities
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Common Structural Procedures for Sleep Apnoea
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            If surgery is indicated, the procedure is selected to target the
            exact area of your airway obstruction. Common surgical options
            include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Uvulopalatopharyngoplasty (UPPP)
              </h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Trims, reshapes, or repositions excess tissue at the back of the
                throat—such as a portion of the soft palate and uvula—to widen
                the airway and reduce tissue vibration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Tonsillectomy & Adenoidectomy
              </h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Surgically removes enlarged tonsils or adenoids that are
                physically blocking the upper airway. This is a highly effective
                procedure when tissue enlargement is the primary cause of
                obstruction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Corrective Nasal Surgery
              </h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Procedures like septoplasty or turbinate reduction clear nasal
                passages by straightening a deviated septum, making it easier to
                breathe through the nose during sleep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-2xs space-y-2">
              <h4 className="font-bold text-[#0f172a] text-base">
                Maxillomandibular Advancement (MMA)
              </h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                A more involved structural procedure that carefully brings the
                upper and lower jaws forward. This movement pulls the attached
                soft tissues forward, significantly enlarging the airway space
                behind the tongue.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL BENEFIT VS LIMITATIONS BALANCING */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Expectation Management
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Weighing the Benefits and Limits of Surgery
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Having realistic expectations is important when considering
              surgical options. Below is an overview of what procedures can
              achieve and the limitations to keep in mind:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4 w-1/2">Potential Clinical Benefits</th>
                  <th className="p-4 w-1/2">Key Clinical Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b] align-top">
                <tr>
                  <td className="p-4 border-r border-slate-100 space-y-2.5">
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Reduces Obstructions:
                      </strong>{" "}
                      Helps clear identified physical blockages within the upper
                      respiratory tract.
                    </p>
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Symptom Relief:
                      </strong>{" "}
                      Can lead to noticeable reductions in chronic snoring and
                      breathing pauses.
                    </p>
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Less Treatment Reliance:
                      </strong>{" "}
                      May lower a patient's long-term dependence on CPAP
                      machines if the procedure is highly successful.
                    </p>
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Permanent Adaptation:
                      </strong>{" "}
                      Provides a structural adjustment, eliminating the need to
                      use an external device every night.
                    </p>
                  </td>
                  <td className="p-4 space-y-2.5">
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Variable Outcomes:
                      </strong>{" "}
                      Results can vary based on individual healing and complex
                      airway shapes, meaning sleep apnoea may not fully resolve.
                    </p>
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Continued Device Use:
                      </strong>{" "}
                      Some patients may still need to use low-pressure CPAP or
                      oral appliances even after surgery.
                    </p>
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Recovery Considerations:
                      </strong>{" "}
                      Requires an intentional recovery period with temporary
                      post-operative discomfort during tissue healing.
                    </p>
                    <p className="text-xs sm:text-sm">
                      •{" "}
                      <strong className="text-[#0f172a]">
                        Anatomy Restrictions:
                      </strong>{" "}
                      Not suitable for non-anatomical sleep conditions or
                      central sleep apnoea.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL TIMELINES & WHAT TO EXPECT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* THE SELECTION PIPELINE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Care Pathway
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                How the Right Treatment Path Is Decided
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              We follow a thorough, step-by-step process to ensure your
              treatment plan is based on clear evidence rather than assumptions:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>
                •{" "}
                <strong className="text-[#0f172a]">
                  Detailed Sleep History:
                </strong>{" "}
                Reviewing your symptoms, daily energy levels, and how long you
                have experienced sleep disruptions.
              </p>
              <p>
                •{" "}
                <strong className="text-[#0f172a]">
                  Polysomnography Study:
                </strong>{" "}
                Using a comprehensive sleep study to measure the severity of
                your apnoea and oxygen changes.
              </p>
              <p>
                • <strong className="text-[#0f172a]">Airway Mapping:</strong>{" "}
                Assessing your physical nasal and throat structures to pinpoint
                the exact location of any blockages.
              </p>
              <p>
                •{" "}
                <strong className="text-[#0f172a]">
                  Reviewing Past Treatments:
                </strong>{" "}
                Checking how your body has responded to non-surgical options
                like CPAP or dental appliances before discussing procedural next
                steps.
              </p>
            </div>
          </div>

          {/* MANAGING POST-OPERATIVE CARE */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Post-Operative Recovery
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Important Aspects of Post-Surgical Healing
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Surgery is one part of an ongoing care plan. Proper recovery and
                monitoring are essential for achieving the best possible
                long-term results:
              </p>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <span>
                    <strong className="text-white">Healing Timelines:</strong>{" "}
                    Recovery can range from a few weeks to over a month,
                    depending on the complexity of the procedure.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <span>
                    <strong className="text-white">Follow-Up Care:</strong>{" "}
                    Regular check-ins are scheduled to monitor tissue healing
                    and track your physical comfort.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <span>
                    <strong className="text-white">
                      Follow-Up Sleep Study:
                    </strong>{" "}
                    A new sleep study is typically scheduled a few months later
                    to objectively check if your breathing patterns have
                    improved.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <span>
                    <strong className="text-white">
                      Ongoing Wellness Support:
                    </strong>{" "}
                    Maintaining healthy sleep habits and weight management
                    remains important for preventing the return of symptoms.
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 🗓" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE DR. MANISH AGGARWAL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Expert Clinical Philosophy
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Why Choose Dr. Manish Aggarwal for Sleep Apnoea Management?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                As a pulmonologist and sleep specialist, Dr. Manish Aggarwal
                focuses on understanding the complete picture of your breathing
                patterns before creating a care plan. We prioritize non-invasive
                treatments, recommending surgery only when there is a clear,
                matching structural need.
              </p>
              <p>
                If surgical intervention is indicated, our team coordinates
                directly with trusted ENT or Maxillofacial specialists to ensure
                your procedure is precise and well-targeted.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We provide complete, long-term follow-up care, using objective
                post-operative tests to monitor your breathing stability and
                track your overall health over time.
              </p>
              <p>
                By combining thorough diagnostic testing with a patient-centered
                approach, we help you find the most reliable path to clear
                breathing and restful, healthy sleep.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLINICAL MEDICAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 text-[#64748b] text-xs sm:text-sm p-4 rounded-xl text-center leading-relaxed">
          <strong>Disclaimer:</strong> This content is for informational
          purposes only and is not a substitute for professional medical advice.
          Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep
          Specialist, for an accurate diagnosis and personalised treatment plan.
        </div>

        {/* CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Considering Sleep Apnoea Surgery? Start With an Evaluation
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you are dealing with persistent symptoms or exploring
                  alternative options to CPAP therapy, the most effective first
                  step is identifying the exact cause of your airway
                  obstruction. Let's build a clear, evidence-based plan
                  together.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <BookAppointmentButton cta="Schedule Your Appointment 🗓" />
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
