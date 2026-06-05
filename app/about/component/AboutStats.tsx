"use client";

import {
  Users,
  Award,
  Activity,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  HeartPulse,
} from "lucide-react";

interface AboutStatsProps {
  onBookClick?: () => void;
}

export default function AboutStats({
  onBookClick = () => {},
}: AboutStatsProps) {
  // Custom stats data aligned with Dr. Manish Aggarwal's clinical legacy
  const stats = [
    {
      id: 1,
      value: "28+",
      label: "Years of Expert Care",
      desc: "An unmatched tenure of respiratory medicine, chest procedures, and clinical critical care.",
      icon: Award,
      color: "from-[#1fa8e8] to-[#0c7dc2]",
    },
    {
      id: 2,
      value: "45k+",
      label: "Recovered Patients",
      desc: "Grateful patients who have achieved lasting relief from chronic sleep and breathing issues.",
      icon: Users,
      color: "from-[#6dbb45] to-[#4d8f2d]",
    },
    {
      id: 3,
      value: "99.4%",
      label: "Diagnostic Accuracy",
      desc: "Achieved via advanced high-precision spirometry, EBUS biopsy staging, and sleep lab setups.",
      icon: Activity,
      color: "from-[#1fa8e8] to-[#6dbb45]",
    },
    {
      id: 4,
      value: "100%",
      label: "Verified Standards",
      desc: "Fully compliant with international NABL criteria and official Medical Council registrations.",
      icon: ShieldCheck,
      color: "from-[#0f172a] to-[#1e293b]",
    },
  ];

  return (
    <section
      id="clinic-stats"
      className="relative py-20 px-4 overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about-stats.png')",
        }}
      />

      {/* Balanced brand overlays over background image to guarantee perfect typography readability */}

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* --- HEADER BLOCK --- */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white">
            <HeartPulse className="w-3.5 h-3.5 animate-pulse text-indigo-400" />{" "}
            Clinic Benchmarks
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Our Clinical Accomplishments
          </h2>

          <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
            Delhi Lung & Sleep Centre operates under absolute precision and
            diagnostic standards, ensuring our patients receive reliable
            pulmonary care pathways.
          </p>
        </div>

        {/* --- MAIN STATISTICS GRID (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white/80 backdrop-blur-md border border-slate-100/70 hover:border-[#1fa8e8]/30 p-8 rounded-[36px] shadow-sm hover:shadow-xl hover:shadow-sky-100/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Hover Soft Background Tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1fa8e8]/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[36px] pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Icon Frame */}
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  {/* Stat Metrics & Value */}
                  <div className="space-y-1">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#0c7dc2] via-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent tracking-tight">
                      {item.value}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-800 tracking-wide mt-1.5 leading-tight">
                      {item.label}
                    </h3>
                  </div>

                  {/* Metric Sub-text Details */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Micro-visual bar highlight at the card bottom */}
                <div className="w-full h-1 bg-slate-100/50 group-hover:bg-gradient-to-r group-hover:from-[#1fa8e8] group-hover:to-[#6dbb45] rounded-full mt-6 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* --- EXPANDED PATIENT SATISFACTION METRIC ROW --- */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-100/70 p-8 rounded-[40px] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6dbb45]/10 text-[#4d8f2d] text-[10px] font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Recovery Rate
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Leading the Standard for Pulmonary Recovery
            </h3>
            <p className="text-slate-500 text-sm md:text-md leading-relaxed">
              We focus heavily on outcome metrics. Over 99% of our sleep apnea
              and respiratory checkups lead to stable treatment cycles within 30
              days.
            </p>
          </div>

          {/* Graphical Progress Bar visualization */}
          <div className="w-full lg:w-96 space-y-4 bg-slate-50/80 p-6 rounded-3xl border border-slate-100">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#1fa8e8] animate-spin" />{" "}
                Clinical Care Index
              </span>
              <span className="text-[#6dbb45]">99.4% Exceptional</span>
            </div>

            {/* Visual Progress Bar Wrapper */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden relative">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] rounded-full transition-all duration-1000"
                style={{ width: "99.4%" }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <span>Diagnosis Target</span>
              <span>Therapy Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
