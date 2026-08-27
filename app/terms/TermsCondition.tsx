"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  FileCheck,
  Clock,
  Stethoscope,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  ArrowLeft,
  Printer,
  PhoneCall,
  Mail,
  MapPin,
  Scale,
  BookOpen,
  Activity,
  UserCheck,
  CreditCard,
  HeartPulse,
} from "lucide-react";

interface TermsConditionProps {
  onBackClick?: () => void;
  onBookClick?: () => void;
}

export default function TermsCondition({
  onBackClick = () => (window.location.href = "#home"),
  onBookClick = () => {},
}: TermsConditionProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShareTerms = () => {
    // Falls back to document.execCommand if clipboard API is restricted
    try {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 9 key terms anchors mapped to a horizontal grid rather than a sidebar
  const quickAnchors = [
    { id: "clinical-scope", label: "Clinical Services", icon: Stethoscope },
    { id: "appointments", label: "Scheduling & No-Show", icon: Clock },
    { id: "telemedicine", label: "Telemedicine Bounds", icon: Activity },
    { id: "patient-conduct", label: "Patient Conduct", icon: UserCheck },
    { id: "emergencies", label: "Medical Emergencies", icon: AlertTriangle },
    { id: "billing", label: "Billing & Refunds", icon: CreditCard },
    { id: "liability", label: "Liability Disclaimer", icon: ShieldAlert },
    { id: "jurisdiction", label: "Legal Jurisdiction", icon: Scale },
    { id: "compliance", label: "Grievance Contacts", icon: PhoneCall },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24 selection:bg-[#1fa8e8] selection:text-white">
      <section className="relative pt-36 bg-gradient-to-r from-[#0c7dc2] via-[#1fa8e8] to-[#6dbb45] text-white py-20 px-4 md:px-8 overflow-hidden">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto space-y-6 relative z-10 text-center md:text-left px-4">
          {/* Back Navigation & Action Row */}

          <div className="pt-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Scale className="w-3.5 h-3.5 text-emerald-300" /> Legally Binding
              Agreement
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
              Terms & Conditions
            </h1>

            <p className="text-white/85 text-sm sm:text-base max-w-3xl font-medium leading-relaxed">
              Please read these terms and clinical guidelines carefully before
              utilizing any diagnostic scheduling portals, consulting programs,
              or home-based sleep test systems offered by Delhi Lung & Sleep
              Centre.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 no-print">
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Last Updated
              </span>
              <p className="text-xs font-black">June 2026</p>
            </div>
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Jurisdiction
              </span>
              <p className="text-xs font-black">Delhi, India Only</p>
            </div>
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Standard
              </span>
              <p className="text-xs font-black">Healthcare Ethics</p>
            </div>
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Clinician Group
              </span>
              <p className="text-xs font-black">NABL Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
         TOP QUICK-JUMP GRID (SIDEBAR-FREE REPLACEMENT)
         ========================================================== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 no-print">
        <div className="bg-white border border-slate-200/60 p-6 rounded-[32px] shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#1fa8e8]" /> Document Sections
            Quick-Jump
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {quickAnchors.map((anchor) => {
              const Icon = anchor.icon;
              return (
                <button
                  key={anchor.id}
                  onClick={() => scrollToAnchor(anchor.id)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-slate-100 hover:border-[#1fa8e8]/30 hover:bg-slate-50 transition-all text-left group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-50 text-[#0c7dc2] flex items-center justify-center shrink-0 group-hover:bg-[#1fa8e8] group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-600 group-hover:text-slate-900 truncate">
                    {anchor.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==========================================================
         MAIN TERMS CONTENT COLUMN
         ========================================================== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 my-12 print-full-width">
        <article className="bg-white border border-slate-200/50 p-6 sm:p-12 rounded-[40px] shadow-sm space-y-12 text-slate-700 text-xs sm:text-sm leading-relaxed text-justify print-full-width">
          {/* Welcome Intro */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
              Welcome to Delhi Lung & Bronchoscopy Center
            </h2>
            <p className="font-semibold text-slate-600">
              Please carefully review these Terms & Conditions. By scheduling
              consults, ordering NABL certified spirometry diagnostics, ordering
              home sleep studies, or engaging with Dr. Manish Aggarwal's
              clinical desk, you confirm your absolute acceptance of these
              operational protocols.
            </p>
            <p>
              These Terms outline the reciprocal obligations of Delhi Lung &
              Sleep Centre ("Clinic", "We", "Us") and our visiting patients or
              digital platform visitors ("Patient", "You", "User"). This
              agreement is compliant with Indian healthcare frameworks, the
              digital health registry directives, and legal practices within
              Delhi.
            </p>
          </section>

          {/* Section 1: Clinical Services */}
          <section
            id="clinical-scope"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              1. Clinical Services & Consultation Bounds
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Clinical Guidelines & Medical Scope
            </h3>
            <p>
              Our operations are bounded strictly by professional healthcare
              registrations. All diagnostic assessments (Pulmonary Function
              Tests, EBUS diagnostics, bronchoscopy preparations, and sleep
              study calibrations) are performed by trained, board-registered
              clinical technicians under the supervision of{" "}
              <strong>Dr. Manish Aggarwal</strong> and associate consultants.
            </p>
            <p>
              A consultation does not constitute a guaranteed clinical cure.
              Respiratory and lung function profiles depend significantly on
              environmental triggers, medical history consistency, and
              patient-adhered medication compliance.
            </p>
          </section>

          {/* Section 2: Appointments */}
          <section
            id="appointments"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              2. Appointment Booking, No-Show, & Cancellations
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Scheduling & Clinic Desk Policy
            </h3>
            <p>
              We prioritize medical efficiency. Patients may book appointments
              online or directly through our clinical desk at Vikas Marg. To
              ensure optimal patient rotation and minimum delay, we enforce the
              following rules:
            </p>
            <ul className="space-y-2.5 pl-4 text-xs font-semibold text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  <strong>Arrival Timing:</strong> Patients are requested to
                  report to the clinic reception 15 minutes prior to their
                  designated slot to complete preliminary checking.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  <strong>Cancellations:</strong> Cancellations or requests to
                  reschedule PFT and Sleep Study devices must be submitted at
                  least 24 hours in advance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  <strong>No-Show Rule:</strong> Repeated failure to attend
                  scheduled sessions without prior warning may result in
                  temporary booking restrictions on our portal.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3: Telemedicine */}
          <section
            id="telemedicine"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              3. Telemedicine & Digital Care Boundaries
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Virtual Consultation Limitations
            </h3>
            <p>
              Tele-consultations rendered over our digital platform are meant
              solely to support initial staging, history checking, or recovery
              counseling. They do not fully replace an in-person diagnostic
              stethoscope evaluation or real-time spirometry testing.
            </p>
            <p>
              The accuracy of online guidance heavily depends on the historical
              reports and diagnostic logs uploaded by the patient. We waive
              clinical liability if critical treatment adjustments are made
              without a formal, in-clinic physical assessment.
            </p>
          </section>

          {/* Section 4: Patient Conduct */}
          <section
            id="patient-conduct"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              4. Patient Conduct & Safety Standards
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Safety & Mutual Respect on Premises
            </h3>
            <p>
              Delhi Lung & Bronchoscopy Center operates under strict medical
              safety frameworks. Zero tolerance is maintained against verbal
              abuse, physical threat, or disrespectful behavior towards clinical
              assistants, laboratory staff, or doctors.
            </p>
            <p>
              To maintain absolute health compliance during respiratory virus
              waves, visitors must adhere to current clinic standards, which may
              include wearing surgical face masks and sanitizing hands before
              entering in-lab sleep study suites.
            </p>
          </section>

          {/* Section 5: Medical Emergencies */}
          <section
            id="emergencies"
            className="space-y-4 scroll-mt-24 border-t border-[#6dbb45]/20 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 border border-rose-100 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              5. CRITICAL: Medical Emergencies
            </div>
            <h3 className="text-lg sm:text-xl font-black text-rose-600 tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-500 animate-pulse" />{" "}
              This Website Is Not For Emergencies
            </h3>
            <p className="font-semibold text-slate-800">
              Our website, scheduling portals, and telemedicine queries must
              NEVER be used in the event of an active, acute medical emergency.
            </p>
            <p>
              If you or a loved one is experiencing sudden, life-threatening
              airway blockages, extreme chest pain, cardiac issues, or sudden
              loss of consciousness, please immediately contact your local
              government emergency ambulance number or rush to the nearest
              hospital casualty emergency room.
            </p>
            <p>
              Our global affiliate,{" "}
              <strong>Aeromed International Rescue Services</strong>, handles
              planned, stable inter-facility medical air transits and must not
              be treated as a localized emergency ambulance replacement.
            </p>
          </section>

          {/* Section 6: Billing */}
          <section
            id="billing"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              6. Billing, Fees, & Diagnostic Refunds
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Payment & Refund Policies
            </h3>
            <p>
              All consultations, in-lab Level 1 sleep tests, and spirometry
              tests require payment upon reservation or registration check-in.
              Diagnostic tests processed through NABL-affiliated processing labs
              operate under fixed rate cards.
            </p>
            <p>
              Refunds for pre-paid sleep study diagnostic gear or clinical
              bookings are permitted only if a cancellation request is formally
              registered at least 24 hours prior to the slot. Refunds will not
              be processed for completed diagnostics, sent lab samples, or
              completed clinical consults.
            </p>
          </section>

          {/* Section 7: Liability */}
          <section
            id="liability"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              7. Limitation of Liability
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Medical Advice Disclaimers
            </h3>
            <p>
              The health information, articles, air defense blogs, and
              self-assessment checklists provided on our digital portal are
              curated purely for patient education. They must not be interpreted
              as professional diagnosis or definitive medical advice.
            </p>
            <p>
              Delhi Lung & Bronchoscopy Center, its directors (including Dr.
              Manish Aggarwal), and its associate clinicians shall not be liable
              for any direct, indirect, incidental, or consequential damages
              resulting from clinical misinterpretations or self-administered
              medical adjustments made without visiting our clinic in person.
            </p>
          </section>

          {/* Section 8: Jurisdiction */}
          <section
            id="jurisdiction"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              8. Legal Jurisdiction
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Governing Law & Dispute Resolution
            </h3>
            <p>
              These Terms & Conditions, along with any patient-doctor relations,
              diagnostic agreements, or services provided, are governed entirely
              by the federal laws of the Republic of India and local healthcare
              directives.
            </p>
            <p>
              Any legal claims, disputes, or grievances arising out of our
              clinical conduct, lab findings, or medical transportation will be
              resolved exclusively through courts located within the territory
              of <strong>New Delhi, India</strong>.
            </p>
          </section>

          {/* Section 9: Compliance Contact */}
          <section
            id="compliance"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              9. Regulatory Concerns & Legal Contacts
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Data Grievance & Legal Officer
            </h3>
            <p>
              For legal compliance questions, data audit requests under the DPDP
              Act 2023, or billing discrepancies, please reach out to our
              administration department:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-6 rounded-[28px] mt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8]">
                    <HeartPulse className="w-4 h-4 animate-pulse" />
                  </span>
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Delhi Compliance Office
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 font-semibold">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> Vikas
                    Marg, East Delhi, Landmark: Metro Pillar
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />{" "}
                    aggarmanish@gmail.com</p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-slate-400" /> +91
                    98995 54095 (Compliance Ext.)
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-slate-200/80 pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                    Legal Submissions
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal mt-1">
                    All formal legal notifications or medical council filings
                    must be delivered physically to our Vikas Marg, Delhi
                    headquarter with official timestamps.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1fa8e8] animate-pulse" />
                  <span>NABL Standard Lab Protocol</span>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* Back navigation footer */}
        <div className="text-center mt-10 no-print">
          <button
            onClick={onBackClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-[#1fa8e8] text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
