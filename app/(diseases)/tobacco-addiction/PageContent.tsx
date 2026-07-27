import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are the symptoms of tobacco addiction?",
    answer:
      "Symptoms include strong and frequent cravings, needing tobacco soon after waking up, difficulty cutting down despite wanting to, continuing use despite health problems, and withdrawal symptoms like irritability, anxiety, or difficulty concentrating when unable to use tobacco.",
  },
  {
    question: "How to cure tobacco addiction?",
    answer:
      "Tobacco addiction is best managed with a combination approach: nicotine replacement therapy or prescription medicines to ease cravings, behavioural counselling to address triggers and habits, and ongoing follow-up support. There's no single instant fix, but with the right structured plan, most people can quit successfully.",
  },
  {
    question: "How to stop nicotine addiction?",
    answer:
      "Stopping nicotine addiction usually works best with a clear quit date, nicotine replacement therapy or medication to manage cravings, and strategies to handle triggers like stress or specific daily habits. Getting support from a doctor rather than trying to quit alone significantly improves the chances of success.",
  },
  {
    question: "How do you treat nicotine addiction?",
    answer:
      "Treatment typically combines nicotine replacement therapy or prescription medicines to reduce cravings and withdrawal symptoms, behavioural counselling to build coping strategies, and regular follow-up to manage setbacks. Dr. Manish Aggarwal tailors this combination based on your history of use and previous quit attempts.",
  },
  {
    question: "How long do nicotine withdrawal symptoms last?",
    answer:
      "Withdrawal symptoms are usually most intense in the first week after quitting and gradually ease over the following few weeks. Cravings can continue on and off for a few months, though they generally become less frequent and less intense over time, especially with proper support.",
  },
  {
    question: "Is it possible to quit tobacco without medication?",
    answer:
      "Yes, some people are able to quit through behavioural strategies and support alone, though many find that combining this with nicotine replacement therapy or medication significantly improves their chances of success, especially for long-term or heavy tobacco users.",
  },
];

export default function TobaccoAddictionTreatmentPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Tobacco Addiction Treatment: Guide by Dr. Manish Aggarwal"
        description="Have you tried to quit smoking or using tobacco before, only to find yourself going back to it? Tobacco addiction is driven by nicotine, one of the most addictive substances there is, which is why willpower alone often isn't enough. With the right support and a structured treatment plan, quitting for good becomes far more achievable."
        ctaText="Book an Appointment"
        backgroundImage="/services/tobacco-addiction.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS TOBACCO ADDICTION */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Understanding Dependence
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is Tobacco Addiction?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Tobacco addiction happens when the body and mind become dependent on <span className="font-bold">nicotine</span>, the addictive substance found in cigarettes, bidis, chewing tobacco, and other tobacco products. 
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Over time, the brain adapts to regular nicotine exposure, which is why stopping suddenly often leads to strong cravings and withdrawal symptoms. This is what makes quitting so difficult for most people, even when they're highly motivated to stop. Tobacco addiction is a recognised medical condition, not simply a matter of willpower, and it responds well to proper treatment and support.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/tobacco-addiction.png"
                alt="Clinical Nicotine and Tobacco Evaluation"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS & COMPLEXITY GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* SYMPTOMS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Indicators
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Symptoms of Tobacco Addiction
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Tobacco addiction shows up both as a strong dependence on nicotine and as noticeable withdrawal symptoms when trying to cut down or stop:
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Strong, frequent cravings for tobacco",
                "Needing tobacco soon after waking up",
                "Difficulty cutting down despite wanting to",
                "Continuing to use tobacco despite health problems it may be causing",
                "Irritability, anxiety, or restlessness when unable to smoke or use tobacco",
                "Difficulty concentrating without tobacco",
                "Increased appetite or trouble sleeping during attempts to quit",
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

          {/* WHY IT'S HARD */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Barriers to Cessation
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Why Quitting Tobacco Is Hard
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Several interconnected physiological and environmental factors make tobacco addiction particularly difficult to overcome on your own:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Nicotine dependence",
                  desc: "Nicotine alters and changes brain chemistry, creating a powerful physical dependence.",
                },
                {
                  title: "Withdrawal symptoms",
                  desc: "Irritability, intense cravings, and poor focus make the first few weeks highly challenging.",
                },
                {
                  title: "Habit and routine",
                  desc: "Tobacco use frequently becomes tied to specific daily habits, like after meals or with tea.",
                },
                {
                  title: "Stress and emotional triggers",
                  desc: "Many turn to tobacco as a coping mechanism, rendering cessation harder during stressful periods.",
                },
                {
                  title: "Social environment",
                  desc: "Consistently being around others who smoke or use tobacco can heavily complicate quit attempts.",
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

        {/* PRE-QUIT EVALUATION PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Assessment
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Evaluation Before Quitting
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Before starting a quit plan, <span className="font-bold text-white">Dr. Manish Aggarwal</span> thoroughly reviews your history of tobacco use, past quit attempts, and overall lung health using focused clinical methods:
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Detailed Tobacco History", detail: "Comprehensive tracking of your daily tobacco use patterns and physical dependence level." },
                { name: "Advanced Spirometry", detail: "Functional lung test to verify current lung capacity, highly essential for long-term users." },
                { name: "Targeted Chest X-ray", detail: "Radiological scan performed if there are any existing or active respiratory symptoms." },
                { name: "Comorbidity Assessment", detail: "Thorough clinical check for any tobacco-related systemic health effects already present." },
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
              De-Addiction Program
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Tobacco Addiction Treatment Plan
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                Dr. Manish Aggarwal builds a personalised de-addiction plan based on how long and how much you've used tobacco, previous quit attempts, and your specific triggers. This structured plan typically combines <span className="font-bold text-[#0f172a]">Nicotine Replacement Therapy (NRT)</span> like patches, gums, or lozenges with targeted prescription medicines to ease cravings and counter heavy physical withdrawal symptoms.
              </p>
              <p>
                Alongside medical support, behavioral counseling helps identify personal emotional triggers and builds actionable daily strategies to manage cravings and prevent long-term relapse. By establishing a firm quit date and maintaining regular, ongoing follow-up check-ins, Dr. Manish Aggarwal provides the essential accountability needed to navigate early weeks successfully. Because relapse is common in the first few months, this sustained medical guidance significantly enhances the likelihood of quitting for good.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Take the First Step Towards Quitting
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Quitting tobacco is one of the best things you can do for your health. Get a personalised, medical de-addiction plan from Dr. Manish Aggarwal.
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
                  alt="Dr. Manish Aggarwal - Tobacco Addiction Treatment Specialist"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Pulmonology & Cessation Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Meet Your Pulmonologist for Tobacco Addiction - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  <span className="font-bold text-[#0f172a]">Dr. Manish Aggarwal</span> is a highly trained pulmonologist with years of experience helping patients quit tobacco completely and successfully manage the downstream lung health effects of long-term use.
                </p>
                <p>
                  He completed his <span className="font-bold text-[#0f172a]">MBBS and MD</span> in Tuberculosis and Chest Diseases from <span className="font-bold text-[#0f172a]">Delhi University</span>, followed by comprehensive NHS clinical training in the <span className="font-bold text-[#0f172a]">United Kingdom</span> and the prestigious <span className="font-bold text-[#0f172a]">FRCP (Glasgow)</span> from the Royal College of Physicians.
                </p>
                <p>
                  He is widely known for explaining conditions in simple, everyday language and building custom quit plans structured tightly around each patient's specific lifestyle habits and daily triggers.
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
                  Ready to Quit for Good?
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Get a comprehensive, personalised tobacco de-addiction plan and steady, compassionate ongoing medical support from Dr. Manish Aggarwal in Delhi.
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