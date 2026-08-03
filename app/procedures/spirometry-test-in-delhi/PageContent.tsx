import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "Is spirometry painful?",
    answer:
      "No. It only requires you to breathe forcefully into a mouthpiece. There is no needle, no sedation, and no discomfort involved, though some people feel briefly tired afterward.",
  },
  {
    question: "How long does a spirometry test take?",
    answer:
      "The test itself usually takes 15 to 20 minutes, including a few practice attempts to ensure accurate, repeatable results.",
  },
  {
    question: "Can spirometry diagnose asthma?",
    answer:
      "Spirometry, especially when repeated after a bronchodilator inhaler, can strongly support a diagnosis of asthma by showing whether airflow improves significantly with treatment.",
  },
  {
    question: "Do I need to stop my inhaler before the test?",
    answer:
      "This depends on what the test is being used to assess. The clinic will advise you in advance whether to continue or temporarily hold your inhaler before your appointment.",
  },
  {
    question: "How often should spirometry be repeated?",
    answer:
      "This depends on your condition. Patients with stable, well-controlled asthma or COPD may need it once a year, while those with new symptoms or changing treatment may need it more frequently, as advised by Dr. Aggarwal.",
  },
];

export default function SpirometryDelhiPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Spirometry in Delhi, A Quick, Painless Way to Measure How Well Your Lungs Are Working"
        description="Offered by Dr. Manish Aggarwal, Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, with 24+ years of experience in respiratory diagnostics and care."
        ctaText="Book Appointment"
        backgroundImage="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
      />

      {/* TRUST STRIP */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wide text-center">
          <div>24+ Years Clinical Experience</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>Same-Day Spirometry Available</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>4.9 Google Rating (350+ Verified Reviews)</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>FRCP (Glasgow)</div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div>50,000+ Patients Treated</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* OVERVIEW SECTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Respiratory Diagnostics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Exactly Does Spirometry Measure?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Spirometry is a simple, non-invasive breathing test that measures how much air you can breathe in and out, and how quickly you can do it. You breathe into a small device called a spirometer, which records key measurements such as forced vital capacity (FVC) and forced expiratory volume in one second (FEV1).
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                These numbers help the doctor understand whether your airways are narrowed, whether your lungs are working at their expected capacity, and how your breathing compares to what is normal for your age, height, and sex.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSSCrqdF4SxDSUkmto3-PxYNa1cWXA3s-0yXJJOWOUXbOFeq-anL1hlMHJa-VrJthBuDDJd7RSrQMbXzHQ"
                alt="Patient performing pulmonary function testing under direct clinical guidance"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* WHY PATIENTS TRUST THIS CLINIC */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Clinical Leadership
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Why Patients Trust This Clinic for Their Lung Testing
              </h2>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <BookAppointmentButton cta="Book Your Spirometry Test →" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#64748b]">
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">24+ years</strong> of clinical experience diagnosing and managing respiratory conditions.</p>
              <p>• <strong className="text-[#0f172a]">Credentials:</strong> MBBS, MD (Tuberculosis & Chest Diseases), FRCP (Glasgow), trained at premier Indian institutes.</p>
              <p>• <strong className="text-[#0f172a]">Current Role:</strong> Principal Director, Department of Chest Disease & Interventional Pulmonology, Max Hospital, also practicing at his private clinic in Pitampura, Delhi.</p>
              <p>• <strong className="text-[#0f172a]">Expert Interpretation:</strong> Spirometry results are interpreted directly by an experienced pulmonologist, not just handed over as a printout, so findings are explained in the context of your symptoms and history.</p>
              <p>• <strong className="text-[#0f172a]">Efficiency:</strong> Same-day spirometry testing available, with results discussed in the same visit wherever possible.</p>
            </div>
            <div className="space-y-4">
              <p>• <strong className="text-[#0f172a]">International Exposure:</strong> Clinical work across leading NHS hospitals in the UK, including Lister Hospital (Stevenage), Norfolk & Norwich University Hospital, The Queen Elizabeth Hospital (King's Lynn), The Great Western Hospital (Swindon), and Diana Princess of Wales Hospital (Grimsby).</p>
              <p>• <strong className="text-[#0f172a]">Professional Memberships:</strong> Active member of respected global and national bodies, including the European Respiratory Society (ERS), American College of Physicians (ACP), Society of Critical Care Medicine (SCCM, USA), European Society of Intensive Care Medicine (ESICM), and Indian Chest Society.</p>
              <p>• <strong className="text-[#0f172a]">Patient-First Mindset:</strong> Rated 4.9 on Google with 350+ verified patient reviews, known for a patient-first, clearly-explained approach to care.</p>
            </div>
          </div>
        </section>

        {/* REASONS FOR RECOMMENDATION */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Diagnostic Triggers
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            When This Test Is Usually Recommended
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Diagnose asthma, COPD, and other obstructive airway conditions",
              "Assess the severity of a known lung condition and track it over time",
              "Investigate unexplained breathlessness or a persistent cough",
              "Check lung function before certain surgeries or in patients with occupational lung exposure",
              "Monitor how well a treatment plan is working, such as inhaler therapy",
              "Screen long-term smokers or individuals with a family history of lung disease",
              "Evaluate lung function as part of a broader workup for chest symptoms"
            ].map((text, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs flex items-start">
                <span className="text-[#1fa8e8] font-bold mr-2 text-sm">✓</span>
                <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONDITIONS IDENTIFIED */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Pathological Profiles
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Conditions Spirometry Helps Identify or Monitor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Asthma", desc: "Detecting the pattern of airway narrowing that reverses with treatment." },
              { title: "COPD", desc: "Particularly in long-term smokers or those with significant exposure history." },
              { title: "Chronic Bronchitis", desc: "Assessing the degree of airflow limitation." },
              { title: "Occupational Lung Disease", desc: "Related to dust, chemical, or fume exposure at work." },
              { title: "Restrictive Lung Conditions", desc: "Such as certain patterns seen in interstitial lung disease, which spirometry can help flag for further testing." },
              { title: "Unexplained Breathlessness", desc: "An early step in identifying whether the airways or lung volume are contributing." },
              { title: "Pre-Operative Lung Assessment", desc: "Evaluating fitness for surgery in patients with existing respiratory concerns." }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-1">
                <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed border-t border-slate-100 pt-4">
            If you've been experiencing breathlessness, wheeze, or a cough that will not go away, spirometry is often the first and most useful test to understand what is happening in your lungs.
          </p>
        </section>

        {/* DIAGNOSTIC BANNER EXCLUSIVE */}
        <section className="relative overflow-hidden rounded-3xl bg-amber-500 p-6 sm:p-10 shadow-md text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-xl font-bold tracking-tight text-slate-950 text-center sm:text-left">
            Noticing breathlessness during everyday tasks?
          </p>
          <div className="shrink-0 w-full sm:w-auto">
            <BookAppointmentButton cta="Get Your Lung Function Checked →" />
          </div>
        </section>

        {/* MODALITY COMPARISON TABLE */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Comparative Diagnostics
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Spirometry Compared to Other Lung Tests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Spirometry</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Measures airflow and lung volumes during forced breathing, and is usually the first test used to screen for airway disease.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Pulmonary Function Test (PFT)</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                A broader term that can include spirometry along with additional measurements like lung volumes and gas transfer (DLCO), giving a more complete picture.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <h3 className="font-bold text-[#0f172a] text-base">Bronchoscopy & Imaging</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Look directly at the structure of the airways and lungs, and are typically used when spirometry or symptoms point toward a need for further, more detailed evaluation.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 italic font-medium pt-2">
            *Dr. Aggarwal will advise if additional testing is needed based on your spirometry results and clinical picture.
          </p>
        </section>

        {/* PATIENT JOURNEY FLOW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PREPARATION PROTOCOL */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
                Preparation Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mt-1">
                How to Prepare for Your Test
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <p>• Avoid heavy meals and vigorous exercise for at least an hour before the test.</p>
              <p>• If you use an inhaler, ask the clinic in advance whether you should hold off on using it before the test, as this can affect results.</p>
              <p>• Avoid smoking for at least an hour, and ideally longer, before your appointment.</p>
              <p>• Wear loose, comfortable clothing that does not restrict your chest or abdomen.</p>
              <p>• Let the technician know if you have had recent chest pain, a heart attack, eye surgery, or abdominal surgery, as these may affect how the test is performed.</p>
            </div>
          </div>

          {/* INTRAOPERATIVE FLOW */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Procedural Stages
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                What Happens During Your Visit
              </h2>
              <div className="space-y-2.5 text-xs text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p>
                  <strong className="text-white">Setting Up:</strong> A clip is placed on your nose to ensure all your breath goes through the mouthpiece, and you are shown exactly how to perform the breathing maneuver correctly.
                </p>
                <p>
                  <strong className="text-white">Blowing Maneuver:</strong> You take a deep breath in, seal your lips around the mouthpiece, and then blow out as hard and fast as you can until your lungs feel completely empty. This is usually repeated three or more times to ensure consistent, reliable readings.
                </p>
                <p>
                  <strong className="text-white">Bronchodilator Check:</strong> In some cases, the test is repeated after using a bronchodilator inhaler to see whether your airflow improves, which helps distinguish asthma from other conditions. The entire test typically takes 15 to 20 minutes, and results are available almost immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL MANAGEMENT AND SAFETY INTEGRITY */}
        <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Post-Op Milestones & Risks
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Recovery Management, Safety Parameters & Warning Signs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#64748b] leading-relaxed">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">After Your Test</h4>
              <p>
                There is no recovery time needed. Most people resume their normal activities immediately after the test. Some people feel briefly lightheaded or tired from the repeated forceful breathing, which settles quickly with a short rest. Dr. Aggarwal reviews your results alongside symptoms and history to outline next steps.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">Is Spirometry Safe?</h4>
              <p>
                Spirometry is a very safe, non-invasive test, but it involves forceful breathing, so it is used with caution or postponed in certain situations including: recent heart attack, unstable chest pain, recent eye/chest/abdominal surgery, collapsed lung (pneumothorax), active coughing up of blood, or severe breathlessness at rest.
              </p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/60">
              <h4 className="font-bold text-[#0f172a] text-base">When to Let the Clinic Know</h4>
              <p>
                Reach out to our professional care desk immediately if, after your test, you notice persistent dizziness or chest discomfort that does not settle with light rest, new or worsening breathlessness, or any other distinct clinical symptoms that concern you following the diagnostic intervention.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL QUESTIONS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
            Patient Communication
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight mb-4">
            Good Questions to Bring to Your Appointment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              What do my spirometry numbers actually mean for my condition?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Do my results suggest asthma, COPD, or something else?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Will I need a bronchodilator response test or any additional testing?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              How often should this test be repeated to track my condition?
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 shadow-2xs">
              Based on these results, does my current treatment need any changes?
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
                  Advanced Lung Function Diagnostics
                </span>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Not Sure Why You're Short of Breath?
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  A simple spirometry test can reveal a lot. Get tested and get clear answers from Dr. Manish Aggarwal, Delhi's leading pulmonologist with 24+ years of respiratory care experience.
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
                  Call Clinic Desk: +91 9899554095
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