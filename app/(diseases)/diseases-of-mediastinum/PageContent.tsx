import BookAppointmentButton from "@/app/component/website/Buttons/BookAppointmentButton";
import WhatsappButton from "@/app/component/website/Buttons/WhatsappButton";
import FAQs from "@/app/component/website/FAQs";
import ServiceHero from "@/app/services/(service-pages)/component/ServiceHero";
import Link from "next/link";

const faqs = [
  {
    question: "What are other diseases of the mediastinum?",
    answer:
      "Besides tumors like thymomas, lymphomas, and germ cell tumors, other mediastinal conditions include mediastinitis (infection or inflammation), mediastinal cysts, enlarged lymph nodes from infections like tuberculosis, and vascular abnormalities involving the major blood vessels that pass through this region.",
  },
  {
    question: "What are the 4 T's for mediastinal mass?",
    answer:
      "The '4 T's' is a commonly used way to remember the main causes of a mass in the front (anterior) part of the mediastinum: Thymoma, Teratoma (and other germ cell tumors), Thyroid masses (such as a goitre extending into the chest), and Terrible lymphoma (a memorable way to refer to lymphoma). This helps guide the initial list of possibilities when a mass is found in this location.",
  },
  {
    question: "What is the mediastinum and diaphragm?",
    answer:
      "The mediastinum is the central compartment of the chest between the two lungs, containing the heart, major blood vessels, windpipe, food pipe, thymus, and lymph nodes. The diaphragm is the large muscle beneath the lungs that separates the chest from the abdomen and plays the main role in the mechanics of breathing.",
  },
  {
    question: "What is a pleural and mediastinal disease?",
    answer:
      "Pleural disease refers to conditions affecting the pleura, the thin lining around the lungs, such as pleural effusion or pleural tumors. Mediastinal disease refers to conditions affecting the central chest compartment between the lungs, such as mediastinal masses or mediastinitis. While they're in neighbouring areas of the chest, they involve different structures and are evaluated somewhat differently, though both fall within a pulmonologist's expertise.",
  },
  {
    question: "What is the best treatment for mediastinal mass?",
    answer:
      "There's no single best treatment, since it depends entirely on what the mass is. Benign findings like simple cysts may only need monitoring, while tumors like thymoma or chest wall involvement often need surgery, and cancers like lymphoma are typically treated with chemotherapy or radiation. Dr. Manish Aggarwal decides the right approach based on biopsy results and imaging findings.",
  },
  {
    question: "What is the Felson classification of the mediastinum?",
    answer:
      "The Felson classification divides the mediastinum into three compartments on a chest X-ray: anterior, middle, and posterior, based on their location relative to the heart, trachea, and spine. This classification helps doctors narrow down the likely causes of a mediastinal mass based on which compartment it's found in, since different conditions tend to occur in different areas.",
  },
];

export default function DiseasesOfMediastinumPage() {
  return (
    <>
      {/* HERO SECTION */}
      <ServiceHero
        title="Diseases of the Mediastinum: When It's More Than Just Your Lungs"
        description="Has a scan shown a mass or abnormality in the central part of your chest, or are you dealing with chest pain, breathlessness, or difficulty related to your chest wall or diaphragm? These conditions can look concerning, but many are manageable once properly evaluated. Getting an accurate diagnosis from an experienced Diseases of Mediastinum Specialist is the first step toward the right treatment."
        ctaText="Book an Appointment"
        backgroundImage="/services/diseases-of-mediastinum.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 my-12 sm:my-16">
        
        {/* WHAT IS THE MEDIASTINUM AND DIAPHRAGM */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-[#1fa8e8]/10 px-3 py-1.5 rounded-full inline-block">
                Anatomy & Scope
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-tight">
                What Is the Mediastinum and Diaphragm?
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                The <span className="font-bold">mediastinum</span> is the central compartment of the chest, located between the two lungs, containing the heart, major blood vessels, the windpipe (trachea), the food pipe (oesophagus), the thymus gland, and lymph nodes. 
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                The <span className="font-bold">diaphragm</span> is the large muscle beneath the lungs that plays the primary role in breathing, separating the chest cavity from the abdomen. Diseases affecting the mediastinum, chest wall, or diaphragm can interfere with breathing, swallowing, or the function of nearby organs, and often need careful evaluation by a <span className="font-bold">Diseases of Mediastinum Specialist</span> to identify the exact cause.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src="/services/diseases-of-mediastinum-image.png"
                alt="Clinical Thoracic and Mediastinal Diagnostics"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-sm border border-slate-200"
              />
            </div>
          </div>
        </section>

        {/* SYMPTOMS PANEL */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Indicators
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Diseases of Mediastinum Symptoms
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b] leading-relaxed">
              Symptoms vary depending on which structure is affected and how large or advanced the problem is. Common signs include:
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Chest pain or a feeling of pressure",
              "Persistent cough",
              "Shortness of breath, especially when lying flat",
              "Difficulty swallowing",
              "Hoarseness of voice",
              "Swelling in the face, neck, or arms, in some mediastinal conditions",
              "Chest wall deformity or visible asymmetry",
              "Weakness or fatigue related to breathing effort, in diaphragm-related conditions",
            ].map((symptom, idx) => (
              <div key={idx} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="h-5 w-5 rounded-full bg-[#1fa8e8]/10 text-[#1fa8e8] flex items-center justify-center font-bold text-xs shrink-0">
                  ✓
                </span>
                <span className="text-sm text-[#334155] font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONDITIONS COMPARTMENTALIZATION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* MEDIASTINUM CONDITIONS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Anatomical Classifications
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Common Diseases of the Mediastinum
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              A wide range of conditions can affect the mediastinum, often grouped by their location within this central compartment:
            </p>
            <div className="mt-6 space-y-4">
              {[
                { title: "Thymomas and thymic tumors", desc: "Growths arising directly from the thymus gland." },
                { title: "Lymphomas", desc: "Cancers of the lymphatic system that commonly involve mediastinal lymph nodes." },
                { title: "Germ cell tumors", desc: "Less common tumors that can pathologically develop in the mediastinum." },
                { title: "Neurogenic tumors", desc: "Growths arising from nerve tissue, usually found in the back portion of the mediastinum." },
                { title: "Mediastinitis", desc: "Serious acute infection or deep inflammation within the mediastinal space." },
                { title: "Mediastinal cysts", desc: "Fluid-filled localized growths that are usually clinically benign." },
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

          {/* CHEST WALL & DIAPHRAGM */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#1fa8e8]/40 transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Structural Pathologies
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight">
              Common Chest Wall and Diaphragm Conditions
            </h2>
            <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
              Alongside mediastinal disease, several chest wall and diaphragm conditions are also frequently managed in advanced pulmonology practice:
            </p>
            <div className="mt-6 space-y-4">
              {[
                { title: "Diaphragmatic paralysis or weakness", desc: "Directly affecting the muscle's mechanical ability to support normal daily breathing." },
                { title: "Chest wall deformities", desc: "Structural conditions such as pectus excavatum or pectus carinatum." },
                { title: "Chest wall tumors", desc: "Growths involving the skeletal ribs, supportive muscles, or soft tissues of the chest wall." },
                { title: "Diaphragmatic hernia", desc: "Where abdominal organs push upward into the chest cavity through a mechanical weakness in the diaphragm." },
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

        {/* DIAGNOSTIC PANEL */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa8e8]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Advanced Workup
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Diagnostic Tests for Diseases of Mediastinum, Chest Wall, and Diaphragm
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Identifying exactly what's causing a mediastinal, chest wall, or diaphragm problem is essential for planning the right treatment. <span className="font-bold text-white">Dr. Manish Aggarwal</span> utilizes the following diagnostic modalities:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Chest X-ray / CT Scan", detail: "Initial and high-resolution imaging to map internal thoracic structures." },
                { name: "PET-CT Scan", detail: "Advanced metabolic imaging leveraged when a malignant tumor or cancer is suspected." },
                { name: "Bronchoscopy & EBUS", detail: "Endobronchial Ultrasound with needle aspiration to safely sample central lymph nodes or masses." },
                { name: "Medical Thoracoscopy", detail: "Minimally invasive visual evaluation of the pleural space when directly indicated." },
                { name: "Pulmonary Function Test", detail: "Functional lung analysis, particularly useful for assessing diaphragm-related breathing limitations." },
                { name: "Targeted Blood Panels", detail: "Comprehensive blood checks to screen for underlying systemic infections or tumor markers." },
              ].map((test, index) => (
                <div key={index} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:border-[#1fa8e8]/50 transition-colors duration-200">
                  <h4 className="font-bold text-[#1fa8e8] text-sm sm:text-base">{test.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{test.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENT METHODOLOGY */}
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8]">
              Clinical Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
              Treatment for Diseases of Mediastinum, Chest Wall, and Diaphragm
            </h2>
            <div className="text-sm sm:text-base text-[#64748b] space-y-4 leading-relaxed">
              <p>
                The mediastinum houses vital structures like the heart, major blood vessels, and airways, so conditions here can range from harmless cysts to tumours needing prompt treatment. <span className="font-bold">Dr. Manish Aggarwal</span> builds the treatment plan around the exact diagnosis, location, and how it's affecting breathing or other functions, since this area covers a wide range of conditions needing distinct approaches.
              </p>
              <p>
                Some findings simply need monitoring, while many tumours and structural conditions are best treated with surgery, cancers like lymphoma with chemotherapy and radiation, and infections with antibiotics or drainage. Care is often coordinated across surgery, oncology, and other specialists as needed. Since this region affects breathing, swallowing, and nearby vital structures, early diagnosis with your Diseases of Mediastinum Specialist makes a meaningful difference in outcomes.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] bg-slate-50 rounded-3xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[280px]">
            <h3 className="text-lg font-bold text-[#0f172a]">
              Get a Treatment Plan Made for You
            </h3>
            <p className="mt-2 text-sm text-[#64748b] max-w-sm mb-6">
              Every case involving the mediastinum, chest wall, or diaphragm is different, and so is the right approach for it by Dr. Manish Aggarwal, your trusted Diseases of Mediastinum Specialist in Delhi.
            </p>
            <BookAppointmentButton cta="Schedule Your Appointment" />
          </div>
        </section>

        {/* SPECIALIST PROFILE */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/60">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative p-2 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-[260px] lg:max-w-full">
                <img
                  src="/dr-image.jpeg"
                  alt="Dr. Manish Aggarwal - Diseases of Mediastinum Specialist"
                  className="rounded-xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1fa8e8] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block shadow-2xs">
                Expert Pulmonologist
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
                Your Diseases of Mediastinum Specialist in Delhi - Dr. Manish Aggarwal
              </h2>
              <div className="text-sm sm:text-base text-[#64748b] space-y-3 leading-relaxed">
                <p>
                  <span className="font-bold text-[#0f172a]">Dr. Manish Aggarwal</span> is a pulmonologist with years of experience diagnosing and managing diseases of the mediastinum, chest wall, and diaphragm.
                </p>
                <p>
                  He completed his <span className="font-bold text-[#0f172a]">MBBS and MD</span> in Tuberculosis and Chest Diseases from <span className="font-bold text-[#0f172a]">Delhi University</span>, followed by comprehensive NHS clinical training in the <span className="font-bold text-[#0f172a]">United Kingdom</span> and the prestigious <span className="font-bold text-[#0f172a]">FRCP (Glasgow)</span> from the Royal College of Physicians.
                </p>
                <p>
                  He is known for explaining complex thoracic conditions in simple, easy-to-understand language and building treatment plans around each patient's specific test results, rather than offering a one-size-fits-all approach.
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
                  Get the Full Picture Behind Your Scan
                </h2>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Get expert evaluation and a personalised treatment plan for mediastinal, chest wall, or diaphragm conditions from Dr. Manish Aggarwal, your trusted Diseases of Mediastinum Specialist in Delhi.
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