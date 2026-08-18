import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";

const faqs = [
  {
    question: "Is TB pneumonia curable?",
    answer:
      "Yes, TB pneumonia is curable in the vast majority of cases with a complete course of anti-TB medication. The key to a full cure is taking the medication exactly as prescribed and for the entire duration, even after symptoms improve, since stopping early is one of the main reasons TB comes back or becomes drug-resistant.",
  },
  {
    question: "How is tuberculosis (TB) spread?",
    answer:
      "TB spreads through the air when a person with active TB in their lungs coughs, sneezes, or talks, releasing tiny droplets containing the bacteria. It generally requires prolonged close contact with someone who has active, untreated TB, and the risk is higher in crowded or poorly ventilated spaces.",
  },
  {
    question: "Can lungs recover after TB?",
    answer:
      "Yes, in many cases the lungs recover well after successful TB treatment, especially when the infection is caught and treated early. However, if the infection was extensive or treatment was delayed, some scarring can remain in the lung tissue, which is why follow-up imaging and lung function assessment are sometimes recommended after treatment is complete.",
  },
  {
    question: "What does TB chest pain feel like?",
    answer:
      "TB-related chest pain is often described as a dull ache or sharp discomfort that can worsen with deep breathing or coughing. It's usually accompanied by other symptoms like a persistent cough, fever, night sweats, and weight loss, rather than occurring on its own, so it's important to consider the full symptom picture rather than chest pain alone.",
  },
  {
    question: "How do I know if I've fully recovered from TB?",
    answer:
      "Full recovery is confirmed through a combination of completing the entire course of medication, improvement in symptoms, and follow-up tests such as sputum tests or imaging showing the infection has cleared. Your pulmonologist will guide you on the specific tests needed to confirm you're fully cured.",
  },
  {
    question: "Is TB pneumonia contagious throughout treatment?",
    answer:
      "Active TB is generally most contagious before treatment starts. Once appropriate anti-TB medication is started, infectiousness typically drops significantly within a couple of weeks, though your doctor will advise on specific precautions based on your situation and test results.",
  },
];

export default function TubercularPageContent() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Tubercular Pneumonia Treatment: Guide by Dr. Manish Aggarwal"
        description="Do you have a cough that has lasted for weeks, along with fever, night sweats, or unexplained weight loss? This could be Tubercular Pneumonia, a lung infection caused by the tuberculosis (TB) bacteria. With timely diagnosis and a complete course of treatment, TB pneumonia is curable in the vast majority of cases."
        ctaText="Book an Appointment"
        backgroundImage="/services/tubercular-pneumonia.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS TUBERCULAR PNEUMONIA */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Understanding Pulmonary TB
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Tubercular Pneumonia?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Tubercular pneumonia is a lung infection caused by <span className="font-bold">Mycobacterium tuberculosis</span>, the bacteria responsible for tuberculosis. 
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Unlike typical bacterial pneumonia, which usually comes on suddenly, TB pneumonia tends to develop more slowly, often over weeks, and can be mistaken for a lingering cold or ordinary chest infection in its early stages. It's a serious but treatable condition, and with a full course of the correct medication, most patients recover completely.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/tubercular-pneumonia.png"
                alt="Clinical Evaluation of Tubercular Pneumonia"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS & TRANSMISSION GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Indicators
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Symptoms of Tubercular Pneumonia
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              TB pneumonia symptoms usually build up gradually rather than appearing suddenly. Common signs include:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "A persistent cough lasting more than two to three weeks",
                "Coughing up blood or blood-tinged mucus",
                "Low-grade fever, often more noticeable in the evening",
                "Night sweats",
                "Unexplained weight loss",
                "Loss of appetite",
                "Fatigue and general weakness",
                "Chest pain, especially when breathing deeply or coughing",
              ].map((symptom, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm text-[#334155] leading-relaxed">
                  <span className="h-5 w-5 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TRANSMISSION */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Transmission Vectors
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              How Is Tuberculosis (TB) Spread?
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              TB spreads from person to person through the air through specific modes of exposure:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Airborne droplets",
                  desc: "When a person with active TB in their lungs coughs, sneezes, or talks, they release tiny droplets containing TB bacteria into the air.",
                },
                {
                  title: "Prolonged close contact",
                  desc: "TB usually requires extended time spent in close contact with someone who has active, untreated TB, rather than brief passing contact.",
                },
                {
                  title: "Poorly ventilated spaces",
                  desc: "Crowded or poorly ventilated indoor spaces increase the risk of transmission.",
                },
                {
                  title: "Weakened immunity",
                  desc: "People with weaker immune systems are more likely to develop active TB after exposure, even if others exposed at the same time don't.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <div className="h-2 w-2 rounded-full bg-[#1fa8e8] mt-2 shrink-0" />
                  <p className="text-sm text-[#334155] leading-relaxed">
                    <strong className="text-[#0f172a] font-semibold">{item.title}:</strong>{" "}
                    <span className="text-[#64748b]">{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC TESTS PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Diagnostic Protocols
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Diagnostic Tests for Tubercular Pneumonia
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Confirming TB pneumonia and ruling out other causes of persistent cough is essential before starting treatment. <span className="font-bold text-white">Dr. Manish Aggarwal</span> uses the following tests:
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Chest X-ray or CT Scan", detail: "Provides detailed radiological imaging to evaluate the location and extent of lung involvement." },
                { name: "Sputum Microscopy & Molecular Tests", detail: "Rapid diagnostic testing (like GeneXpert) to quickly identify TB DNA and detect initial drug resistance." },
                { name: "Sputum Culture", detail: "Gold-standard test to confirm viable TB bacteria and perform comprehensive drug susceptibility testing." },
                { name: "Targeted Blood Tests", detail: "Includes specific TB screening assays and systemic inflammatory markers when clinically required." },
                { name: "Bronchoscopy with BAL", detail: "Bronchoalveolar Lavage used in select cases where non-invasive sputum samples are difficult to obtain." },
              ].map((test, index) => (
                <div key={index} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:border-[#1fa8e8]/50 transition-colors duration-200">
                  <h4 className="font-bold text-[#1fa8e8] text-sm sm:text-base">{test.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{test.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENT STRATEGY */}
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Targeted Care Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Tubercular Pneumonia Treatment
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Dr. Manish Aggarwal builds a treatment plan based on the extent of infection and drug resistance found through testing. This typically includes a combination of <span className="font-bold text-[#0f172a]">anti-TB antibiotics</span> taken for six months or longer, with the full course completed even after symptoms improve to avoid relapse or resistance.
              </p>
              <p>
                Regular monitoring helps manage side effects, while targeted nutritional support aids recovery since TB can affect appetite and weight. Drug-resistant TB cases require a longer, specialized plan, and follow-up sputum tests and imaging confirm the infection has cleared. Since treatment takes months, regular follow-up with Dr. Manish Aggarwal ensures the medication is working and the course is completed successfully.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Get a Treatment Plan Made for You
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Every case of TB pneumonia is different, and so is the right treatment for it by Dr. Manish Aggarwal.
            </p>
            <BookAppointmentButton cta="Schedule Your Appointment" />
          </div>
        </section>

        {/* PULMONOLOGIST PROFILE */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/60">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative p-2 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-[260px] lg:max-w-full">
                <img
                  src="/dr-image.jpeg"
                  alt="Dr. Manish Aggarwal - Tubercular Pneumonia Specialist"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Pulmonology & Chest Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Meet Your Pulmonologist for Tubercular Pneumonia - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  <span className="font-bold text-[#0f172a]">Dr. Manish Aggarwal</span> is a pulmonologist with years of experience diagnosing and treating tuberculosis and other complex lung infections.
                </p>
                <p>
                  He completed his <span className="font-bold text-[#0f172a]">MBBS and MD</span> in Tuberculosis and Chest Diseases from <span className="font-bold text-[#0f172a]">Delhi University</span>, followed by NHS clinical experience in the <span className="font-bold text-[#0f172a]">United Kingdom</span> and the prestigious <span className="font-bold text-[#0f172a]">FRCP (Glasgow)</span> from the Royal College of Physicians.
                </p>
                <p>
                  He is known for explaining conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results, rather than offering a one-size-fits-all approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION PANEL */}
        <div className="pt-4">
          <FAQs faqs={faqs} />
        </div>

        {/* CLOSING CONVERSION BAR */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] p-8 sm:p-12 shadow-xl text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1fa8e8]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Ready to Breathe Easier Again?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Get expert diagnosis and a complete treatment plan for tubercular pneumonia from Dr. Manish Aggarwal.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <BookAppointmentButton cta="Book an Appointment Today" />
                <WhatsappButton />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}