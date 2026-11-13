import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Send,
  Database,
  Layers,
  Workflow,
} from "lucide-react";
import serviceSapImg from "@/assets/SAP Solutions-bg.png";
import erpImplementationImg from "@/assets/erp_implementation_img.png";
import { FadeUp } from "@/components/FadeUp";

export const Route = createFileRoute("/services/sap")({
  head: () => ({
    meta: [
      {
        title: "SAP Solutions & Specialist Talent — ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA provides specialized SAP talent across S/4HANA, FICO, MM/SD, ABAP, Integration, and Cloud for mission-critical enterprise environments.",
      },
      {
        property: "og:title",
        content: "SAP Solutions & Talent | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Specialized SAP Talent for Complex Enterprise Environments. Functional, technical, and transformation expertise.",
      },
    ],
  }),
  component: SapPage,
});

const SAP_CAPABILITIES = [
  "SAP S/4HANA.",
  "SAP FICO.",
  "SAP MM / SD.",
  "SAP ABAP.",
  "SAP Basis & Security.",
  "SAP Integration.",
  "SAP Data & Analytics.",
  "SAP Functional Consulting.",
];

function SapPage() {
  const [selectedModule, setSelectedModule] = useState("S/4HANA Migration");

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Navy Blue Header Presentation)                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden bg-[#102B4E] text-white pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={serviceSapImg}
            alt="SAP Enterprise Solutions"
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/80 via-35% sm:via-40% to-transparent sm:to-58% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#102B4E]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full my-auto py-4">
          <div className="max-w-xl lg:max-w-[560px] xl:max-w-[620px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                SAP TALENT & ENTERPRISE APPLICATION EXPERTISE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.16] tracking-tight text-white">
              Specialized SAP Talent for Complex Enterprise Environments.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              SAP systems support some of the most critical processes within modern organizations. Successful transformation, enhancement, and support initiatives depend on professionals who understand both enterprise technology and the business processes it enables.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Request SAP Professionals <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/workday"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                Workday Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="pt-2 border-l-2 border-[#C83B43] pl-3.5 text-xs tracking-wide text-slate-300">
              Enterprise Technology, Workforce & Managed Delivery Partner
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Main Body Content (Exact Copy from Navy Blue)                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
            {/* Left Content Column */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#245B91]">
                  MISSION-CRITICAL SYSTEMS
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Deep SAP Expertise Across Functional and Technical Modules
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  ConfigUSA helps clients identify specialized SAP professionals across functional, technical, integration, and application support disciplines.
                </p>
                <p>
                  Whether organizations are enhancing existing environments, pursuing modernization, or strengthening ongoing support teams, ConfigUSA focuses on matching SAP expertise to specific technical and business requirements.
                </p>
              </div>

              {/* SAP Architecture Visual Image */}
              <div className="mt-7 relative overflow-hidden rounded-xl border border-slate-200 shadow-md bg-slate-900 group">
                <img
                  src={erpImplementationImg}
                  alt="ConfigUSA SAP S/4HANA Implementation Team"
                  className="w-full h-56 sm:h-64 object-cover object-center filter brightness-[1.08] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-[#102B4E]/95 text-white px-4 py-2.5 text-xs flex items-center justify-between border-t border-white/20">
                  <span className="font-semibold text-white">
                    SAP S/4HANA & ECC 6.0 Modernization
                  </span>
                  <span className="text-[#C83B43] font-mono font-bold">
                    FICO · MM · SD · ABAP
                  </span>
                </div>
              </div>

              {/* SAP Capabilities Grid */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#102B4E]">
                  SAP Capabilities
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SAP_CAPABILITIES.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-xs sm:text-sm font-semibold text-[#102B4E] shadow-2xs hover:border-[#245B91] hover:shadow-xs transition-all border-l-4 border-l-[#C83B43]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Block */}
              <div className="mt-10 border-l-4 border-[#C83B43] pl-4 py-2 bg-slate-50/80 rounded-r-lg">
                <p className="text-sm font-semibold text-[#102B4E]">
                  Supporting enterprise systems with professionals who understand the technology and the business behind it.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-sm"
                >
                  Request SAP Professionals <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Lead Card (Exact Navy Blue sidecard) */}
            <div className="lg:pt-2 sticky top-28">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Building2 className="h-5 w-5 text-[#C83B43]" />
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Request SAP Talent
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specify the SAP modules (S/4HANA, FICO, MM/SD, ABAP) and project timeline.
                </p>

                <div className="mt-5 space-y-3">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Target Module / Practice
                    </span>
                    <select
                      value={selectedModule}
                      onChange={(e) => setSelectedModule(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#245B91]"
                    >
                      <option value="S/4HANA Migration">SAP S/4HANA Migration</option>
                      <option value="FICO">SAP FICO Financial Accounting</option>
                      <option value="MM/SD">SAP MM / SD Supply Chain</option>
                      <option value="ABAP/Integration">SAP ABAP & BTP Integration</option>
                      <option value="Basis/Security">SAP Basis & Security Architecture</option>
                    </select>
                  </label>

                  <div className="rounded-lg bg-white border border-slate-200 p-3.5 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Deployment Speed:</span>
                      <span className="text-[#C83B43]">48–72 Hours</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Screening:</span>
                      <span className="text-emerald-700">Practitioner-Vetted</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Model:</span>
                      <span className="text-slate-800">Contract / SOW / Augmentation</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full btn-cta-primary text-center py-2.5 text-xs font-bold block shadow-xs mt-4"
                  >
                    Submit SAP Talent Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Bottom Consultation Bar                                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-10 border-t border-white/10">
        <div className="container-enterprise">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                Planning an SAP S/4HANA migration or module expansion?
              </h3>
              <p className="text-slate-300 text-sm">
                Connect with our enterprise SAP team to review your technical requirements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-cta-primary text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm"
              >
                Discuss Your SAP Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
