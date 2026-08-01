import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What is a dental appliance for Sleep Apnoea?",
    answer:
      "A dental appliance, or oral appliance, is a custom-made medical device worn in the mouth during sleep. It works by gently repositioning the lower jaw or tongue forward to create a larger breathing space in the back of the throat, reducing snoring and structural airway collapses without the need for forced air pressure.",
  },
  {
    question: "Is a dental appliance more effective than CPAP therapy?",
    answer:
      "Neither is universally better; they serve different clinical needs. CPAP remains the global gold standard for moderate-to-severe Obstructive Sleep Apnea due to its absolute airway stabilization. However, for patients with mild-to-moderate positional OSA, or those who are entirely intolerant to a CPAP mask and machine, a custom oral appliance is an exceptionally effective and well-tolerated alternative.",
  },
  {
    question: "Who is a prime candidate for Oral Appliance Therapy?",
    answer:
      "Eligibility is highly dependent on a patient's diagnostic sleep metrics and physical anatomy. It is primarily indicated for individuals with documented mild-to-moderate Obstructive Sleep Apnea, chronic primary snoring, healthy dentition with adequate structural teeth to anchor the device, and patients who travel frequently or cannot tolerate positive airway pressure therapy.",
  },
  {
    question: "Can an oral appliance completely resolve heavy snoring?",
    answer:
      "Yes, for many appropriately selected patients, a custom oral appliance can drastically minimize or entirely resolve loud snoring. By preventing the tongue and soft palate from collapsing backward against the throat wall, it eliminates the tissue vibrations that produce snoring sounds.",
  },
  {
    question: "Do I still require a diagnostic Sleep Study if I prefer a dental appliance?",
    answer:
      "Absolutely. An overnight sleep study (polysomnography) is a mandatory medical requirement. It provides the exact Apnea-Hypopnea Index (AHI) data needed to safely determine if your sleep apnoea falls within a treatable mild-to-moderate threshold, and acts as a baseline to verify the appliance's success later.",
  },
];

export default function OralApplianceSleepApneaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Dental Appliances for Sleep Apnoea: A Comfortable Alternative to CPAP"
        description="Many patients find CPAP therapy difficult to get used to — the mask, the machine, the noise, or simply the feeling of wearing something on their face every night. If this sounds familiar, or if you are simply looking for a smaller, more portable treatment option, you may have come across dental appliances for sleep apnoea. For selected patients with mild to moderate Obstructive Sleep Apnea, or troublesome snoring, an oral appliance can be an effective alternative. It is not the right fit for everyone, though — whether this treatment works for you depends on a detailed evaluation of your specific condition."
        ctaText="Book an Appointment"
        backgroundImage="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Non-Invasive Airway Orthotics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                Maintaining Upper Airway Patency Without Forced Air Pressure
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Obstructive Sleep Apnea (OSA) occurs when the muscles supporting the soft palate, tonsils, and tongue relax during deep sleep. For many individuals, this relaxation allows gravity to pull the tissues backward, narrowing or closing off the respiratory pathway. While CPAP keeps this path open using continuous pressurized air, many patients seek a less bulky option.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                A <strong className="text-[#0f172a]">Dental Appliance for Sleep Apnoea</strong> offers a mechanical, low-profile alternative. Worn comfortably in the mouth during sleep, these custom-made devices gently bring the lower jaw or tongue forward. This movement creates a stable physical opening at the back of the throat, preventing airway collapse and allowing for silent, uninterrupted breathing.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Under the clinical direction of <span className="font-semibold text-[#0f172a]">Dr. Manish Aggarwal</span>, patient care is carefully managed through precise screening. Instead of relying on guesswork, we analyze your sleep architecture and airway structures to verify that oral appliance therapy is highly effective and suitable for your specific anatomy.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
                alt="A patient sleeping soundly and restfully on their side, utilizing a lightweight custom-fitted sleep apnea oral appliance"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* PATIENT SUITABILITY SECTION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Selection
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Who Is a Suitable Candidate for Oral Appliance Therapy?
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Oral appliances are highly successful when matched with the correct physiological profiles. They are typically indicated for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Mild-to-Moderate OSA Protocols", desc: "Patients whose Apnea-Hypopnea Index (AHI) is within mild-to-moderate thresholds, indicating excellent responsiveness to mechanical jaw advancement." },
              { title: "Primary Chronic Snoring", desc: "For individuals who do not experience full airway obstructions but require tissue stabilization to eliminate loud, disruptive snoring." },
              { title: "Clinical CPAP Intolerance", desc: "An ideal option for patients who experience severe claustrophobia, skin irritation, or difficulty sleeping due to a standard CPAP mask." },
              { title: "Frequent Travellers & Active Sleepers", desc: "A highly portable, electricity-free solution for individuals who travel often or find moving in bed restricted by CPAP tubing." },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <h4 className="font-bold text-sm text-[#0f172a]">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#64748b] mt-4 leading-relaxed">
            <span className="font-semibold text-[#0f172a]">Contraindications Note:</span> This therapy may not be suitable for individuals with severe sleep apnea, advanced periodontal disease, severe jaw joint issues (TMJ), or an insufficient number of healthy teeth to anchor the appliance securely.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-4">
            <p className="text-xs sm:text-sm font-medium text-[#334155] text-center sm:text-left">
              Want to find out if an oral appliance can effectively manage your sleep apnea? Schedule an expert diagnostic evaluation.
            </p>
            <BookAppointmentButton cta="Consult Doctor 📅" />
          </div>
        </section>

        {/* APPLIANCE TYPES: DETAILED BLOCK */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Appliance Typologies
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Primary Modalities in Dental Sleep Medicine
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 leading-relaxed">
              Based on your specific airway anatomy and dental condition, oral appliance therapy utilizes one of two primary designs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-3">
              <div className="bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold px-2.5 py-1 rounded-md inline-block">
                MAD Protocol
              </div>
              <h4 className="font-bold text-[#0f172a] text-lg">Mandibular Advancement Devices</h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                This is the most common type of oral appliance. Modeled closely after athletic mouthguards or clear orthodontic aligners, a MAD snaps securely over your upper and lower teeth. It features an adjustable hinge mechanism that holds your lower jaw (mandible) slightly forward. This position stretches the soft tissues around the tongue and throat, keeping the airway wide open.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-3">
              <div className="bg-[#1fa8e8]/10 text-[#1fa8e8] text-xs font-bold px-2.5 py-1 rounded-md inline-block">
                TRD Protocol
              </div>
              <h4 className="font-bold text-[#0f172a] text-lg">Tongue Retaining Devices</h4>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Rather than shifting the lower jaw, a Tongue Retaining Device utilizes a soft silicone bulb that sits between your lips. The tongue is gently placed inside this bulb, where a mild, comfortable suction holds it forward throughout the night. TRDs are highly effective for patients who do not have enough healthy teeth to anchor a MAD or those with severe jaw alignment limits.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Comparative Analysis
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Custom Oral Appliances vs. Standard CPAP Systems
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed">
            Understanding how both approaches compare helps you make a balanced decision regarding comfort, usage, and treatment goals:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0f172a] font-bold">
                  <th className="p-4">Clinical Metric</th>
                  <th className="p-4">Custom Oral Appliance</th>
                  <th className="p-4">CPAP Therapy System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#64748b]">
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Mechanism of Action</td>
                  <td className="p-4">Physically shifts the lower jaw or tongue forward to widen the throat pathway.</td>
                  <td className="p-4">Uses a calibrated air stream to prevent the airway from collapsing.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Portability & Lifestyle</td>
                  <td className="p-4 text-emerald-600 font-semibold">Extremely compact, fits in a pocket, and needs no electricity or water.</td>
                  <td className="p-4">Requires carrying a machine, mask, hoses, power cords, and distilled water.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Clinical Reach</td>
                  <td className="p-4">Highly effective for mild-to-moderate OSA and primary snoring.</td>
                  <td className="p-4 font-semibold text-[#0f172a]">Highly effective across all severities (Mild, Moderate, and Severe OSA).</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#0f172a]">Potential Side Effects</td>
                  <td className="p-4">Temporary mild morning jaw stiffness, increased saliva, or minor tooth pressure.</td>
                  <td className="p-4">Nasal dryness, eye irritation from air leaks, or feelings of claustrophobia.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL PATHWAY & SAFETY SPECTRUM */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE SELECTION PIPELINE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Care Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                The Structured Path to an Oral Appliance
              </h2>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              To ensure your device is safe and effective, we follow a rigorous clinical sequence from diagnosis to final fitting:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-1">
              <p>• <strong className="text-[#0f172a]">Comprehensive Polysomnography:</strong> We begin with an overnight sleep study to confirm your sleep apnoea severity index.</p>
              <p>• <strong className="text-[#0f172a]">Airway Architecture Assessment:</strong> We evaluate the precise location of your airway narrowing (base of tongue vs. lateral walls).</p>
              <p>• <strong className="text-[#0f172a]">Dental Sleep Medicine Referral:</strong> If suitable, we coordinate with a specialized dental practitioner for 3D dental impressions.</p>
              <p>• <strong className="text-[#0f172a]">Verification Testing:</strong> We perform follow-up evaluations to objectively verify that the device is successfully managing your oxygen levels.</p>
            </div>
          </div>

          {/* MANAGING EXPECTED SIDE EFFECTS */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Safety Profile
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Understanding and Managing Initial Side Effects
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most side effects occur during the first few weeks as your jaw muscles adapt. These are generally mild, temporary, and easily managed:
              </p>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span><strong className="text-white">Transient Muscular Stiffness:</strong> Mild jaw awareness or stiffness upon waking, which typically clears up within a few minutes.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span><strong className="text-white">Salivary Changes:</strong> Your mouth may produce excess saliva or feel dry initially as your salivary glands adjust to the appliance.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span><strong className="text-white">Localized Dental Sensitivity:</strong> Minor pressure on certain teeth, which resolves quickly as the material shapes to your mouth.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span> 
                  <span><strong className="text-white">Long-Term Bite Monitoring:</strong> Regular check-ins protect against permanent shifts in tooth alignment or jaw positioning.</span>
                </p>
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <BookAppointmentButton cta="Book a Consultation with Dr. Manish Aggarwal Today 📅" />
            </div>
          </div>
        </section>

        {/* CLINICAL ROLE EXPLANATION */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Coordinated Expert Care
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            How Dr. Manish Aggarwal Guides Your Oral Appliance Therapy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-4">
              <p>
                Successful treatment relies on a collaborative medical-dental approach. As a pulmonologist and sleep specialist, Dr. Manish Aggarwal focuses on providing accurate diagnostic testing, checking your respiratory metrics, and determining if your condition is suitable for a dental appliance.
              </p>
              <p>
                Once approved, we coordinate your care directly with an experienced dental sleep specialist who handles the exact digital manufacturing, physical fitting, and structural adjustment of your custom device.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We provide ongoing care by tracking your symptomatic improvement, ensuring your jaw alignment is safe, and evaluating long-term usage consistency.
              </p>
              <p>
                If needed, we arrange follow-up sleep studies to check your breathing metrics, verifying that your custom device effectively eliminates nocturnal apnoea events.
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
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice. Please consult Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist, for an accurate diagnosis and personalised treatment plan.
        </div>

        {/* CONVERSION CALL TO ACTION BANNER */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Struggling with CPAP or Looking for Alternatives?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  If you snore heavily, have been diagnosed with mild to moderate sleep apnoea, or find it difficult to tolerate CPAP therapy, it may be worth exploring whether oral appliance therapy is a suitable option for you. The right treatment starts with understanding the underlying cause of your sleep apnoea.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <BookAppointmentButton cta="Schedule Your Appointment 📅" />
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}