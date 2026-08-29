"use client";

import { Shield, PhoneCall, Mail, MapPin, Sparkles } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24 selection:bg-[#1fa8e8] selection:text-white">
      <section className="relative bg-gradient-to-r from-[#0c7dc2] via-[#1fa8e8] to-[#6dbb45] text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6 relative z-10 text-center md:text-left pt-24">
          <div className="pt-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-emerald-300" /> Medical
              Confidentiality Assured
            </div>

            <h1 className="text-3xl sm:text-5xl font-black">Privacy Policy</h1>

            <p className="text-white/85 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
              Our clinical protocol strictly protects patient identity, medical
              diagnostic history, and sleep-study telemetry logs. Directed by
              Dr. Manish Aggarwal, we maintain NABL regulatory standards.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Last Updated
              </span>
              <p className="text-xs font-black">June 2026</p>
            </div>
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Standard
              </span>
              <p className="text-xs font-black">DPDP Act, 2023 Compliant</p>
            </div>
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Confidentiality
              </span>
              <p className="text-xs font-black">$100\%$ Secured</p>
            </div>
            <div className="space-y-1 bg-white/5 border border-white/10 p-3 rounded-2xl">
              <span className="text-[10px] font-bold text-sky-200 block uppercase tracking-wider leading-none">
                Encryption
              </span>
              <p className="text-xs font-black">$256$-Bit SSL / TLS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
         MAIN LAYOUT: SIDEBAR & ARTICLE BODY
         ========================================================== */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        {/* --- RIGHT SIDE: COMPREHENSIVE PRIVACY POLICY ARTICLE CONTENT --- */}
        <article className="col-span-12 bg-white border border-slate-200/50 p-6 sm:p-10 rounded-[40px] shadow-sm space-y-12 text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
          {/* Section 1: Intro */}
          <section id="intro" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              1. Introduction
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              A Commitment to Patient Trust & Safety
            </h2>
            <p>
              At <strong>Delhi Lung & Bronchoscopy Center</strong> (under the
              clinical administration of Dr. Manish Aggarwal and registered
              healthcare practitioners), patient confidentiality is treated as a
              core medical standard. This Privacy Policy outlines how our
              clinical facilities, digital portals, and administrative desks
              collect, store, encrypt, and manage personal data, including
              highly critical **Personally Identifiable Information (PII)** and
              **Protected Health Information (PHI)**.
            </p>
            <p>
              We comply strictly with India’s newly enacted{" "}
              <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>
              , and Section $43A$ of the{" "}
              <strong>Information Technology Act, 2000</strong>. By seeking
              clinical consultations, booking diagnostic tests, or undergoing
              in-lab polysomnography, you actively consent to the terms
              specified herein.
            </p>
          </section>

          {/* Section 2: Collection */}
          <section id="collection" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              2. Information We Collect
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Data Categories We Process & Secure
            </h2>
            <p>
              To provide accurate diagnoses and custom therapeutic schedules,
              our clinical desk collects key data parameters across three
              distinct pipelines:
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1fa8e8]" />{" "}
                  Clinical & Physiological Parameters (PHI)
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Includes Pulmonary Function Testing metrics (e.g., Forced
                  Expiratory Volume $FEV_1$, Diffusion Capacity $DLCO$), Oxygen
                  saturation $SpO_2$ logs, bronchoscopy imaging, EBUS biopsy
                  results, and Sleep Apnea telemetry logs (Apnea-Hypopnea Index
                  $AHI$, sleeping oxygen patterns).
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6dbb45]" />{" "}
                  Personal Identifiable Information (PII)
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Patient legal name, date of birth, biometric variables
                  (height, weight for drug and anesthesia titration), contact
                  phone numbers, email addresses, and residential address
                  coordinates for home sleep studies.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />{" "}
                  Digital Metrics & Cookies
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Anonymized IP addresses, browser variants, and interactive
                  click paths gathered purely to optimize diagnostic scheduling
                  speed across our online portals.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Usage */}
          <section id="usage" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              3. How We Use Data
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Utilization of Medical Data
            </h2>
            <p>
              Under no circumstances does Delhi Lung & Sleep Centre monetize,
              sell, lease, or license patient clinical records. All processed
              data is restricted strictly to support care delivery:
            </p>
            <ul className="space-y-2.5 pl-4 text-xs font-medium text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  Calculating accurate spirometry scores and modeling tailored{" "}
                  <strong>Asthma Action Plans</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  Setting up and calibrating home sleep telemetry screens and
                  titration devices.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  Coordinating international air ambulance transfers through{" "}
                  <strong>Aeromed International Rescue Services</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1fa8e8] mt-0.5">•</span>
                <span>
                  Fulfilling legal safety compliance standards established by
                  the Delhi Medical Council and Indian health ministries.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 4: Security */}
          <section id="security" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              4. Clinical Data Security
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Advanced Clinical Encryption Standards
            </h2>
            <p>
              Patient databases at Delhi Lung & Bronchoscopy Center are housed
              behind highly fortified clinical firewalls. Digital files are
              protected using{" "}
              <strong>$256$-bit Advanced Encryption Standards (AES-256)</strong>{" "}
              during resting database phases and Secure Socket Layer / Transport
              Layer Security (SSL/TLS) during transmission over online networks.
            </p>
            <p>
              Administrative access is limited to verified personnel. We enforce
              the Principal of Least Privilege: only clinical staff directly
              participating in your treatment (such as Dr. Manish Aggarwal,
              assisting pulmonologists, or sleep lab technicians) have access
              authorization. Physical files kept on clinic premises are stored
              in highly monitored, secure rooms with active video surveillance.
            </p>
          </section>

          {/* Section 5: Sharing */}
          <section id="sharing" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              5. Sharing & International Transfer
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Data Routing & Emergency Transit Compliance
            </h2>
            <p>
              Your medical files are shared with third parties only under strict
              legal boundaries:
            </p>
            <ul className="space-y-2.5 pl-4 text-xs font-medium text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#6dbb45] mt-0.5">•</span>
                <span>
                  <strong>Affiliated Laboratories:</strong> Samples routed to
                  NABL-compliant processing centers are labeled with random
                  patient index codes to preserve anonymity.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6dbb45] mt-0.5">•</span>
                <span>
                  <strong>Emergency Evacuations:</strong> During critical air
                  medical transit through <strong>Aeromed Rescue</strong>, vital
                  chest and oxygen coordinates are shared securely with ground
                  receiving clinics only.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6dbb45] mt-0.5">•</span>
                <span>
                  <strong>Regulatory Mandate:</strong> Infectious disease
                  statistics (such as Tuberculosis, COVID-19) are shared with
                  Indian health authorities as legally mandated under national
                  health surveillance laws.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 6: Rights */}
          <section id="rights" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#6dbb45]/10 text-[#4d8f2d] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              6. Your Patient Rights
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              DPDP Act & HIPAA Rights Portfolio
            </h2>
            <p>
              In accordance with local data laws, patients of Delhi Lung & Sleep
              Centre hold comprehensive rights over their data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-extrabold text-slate-800 text-xs">
                  Right to Access
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">
                  You may request a copy of your electronic diagnostic records,
                  spirometry files, and consult sheets at any time.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-extrabold text-slate-800 text-xs">
                  Right to Correction
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">
                  Request immediate updates to inaccurate identifiers,
                  biological metrics, or historical reports.
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-extrabold text-slate-800 text-xs">
                  Right to Erasure
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">
                  Request erasure of digital parameters (unless blocked by legal
                  medical retention guidelines).
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-extrabold text-slate-800 text-xs">
                  Right to Withdraw Consent
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">
                  Withdraw consent for digital portals, marketing digests, or
                  automated appointment reminders.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Retention */}
          <section id="retention" className="space-y-4 scroll-mt-24">
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              7. Medical Data Retention
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Document Maintenance Standards
            </h2>
            <p>
              To maintain high medical standards, we retain diagnostics records
              as required by Indian health laws:
            </p>
            <p>
              All general medical consult histories, prescription records, and
              interventional report sheets are maintained on our clinical
              systems for a standard period of <strong>$3$ to $5$ years</strong>{" "}
              from the date of your last consultation. In specialized cases of
              progressive pulmonary illnesses (such as Interstitial Lung Disease
              or Pulmonary Fibrosis), files are held longer to support long-term
              tracking of lung metrics and prevent emergency relapses.
            </p>
          </section>

          {/* Section 8: Contact */}
          <section
            id="contact"
            className="space-y-4 scroll-mt-24 border-t border-slate-100 pt-8"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#1fa8e8]/10 text-[#0c7dc2] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
              8. Data Grievance Contact
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Data Protection & Compliance Officer
            </h2>
            <p>
              If you have any questions, wish to exercise your data rights, or
              file a compliance request, please contact our designated{" "}
              <strong>Data Protection Officer (DPO)</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-6 rounded-[28px] mt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-[#1fa8e8]/10 text-[#1fa8e8]">
                    <Sparkles className="w-4 h-4 animate-pulse" />
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
                    compliance@delhilungandsleep.com
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-slate-400" /> +91
                    98765 43210 (Compliance Ext.)
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-slate-200/80 pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                    In-Person Submissions
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal mt-1">
                    Please bring your physical ID card, medical file index code,
                    and a signed copy of your data correction/access request
                    form.
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>NABL Standard Lab Protocol</span>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
