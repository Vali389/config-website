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
import serviceSapImg from "@/assets/us-sap-solutions.png";
import sapEnterpriseTeam from "@/assets/sap_western_team.jpg";
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
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Navy Blue Header Presentation)                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center overflow-hidden bg-[#102B4E] text-white pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={serviceSapImg}
            alt="SAP Enterprise Solutions"
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012056] via-[#012056]/95 via-30% md:via-40% to-transparent to-62% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#012056]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full my-auto">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                SAP TALENT & ENTERPRISE APPLICATION EXPERTISE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-white">
              Specialized SAP Talent for Complex Enterprise Environments.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              SAP systems support some of the most critical processes within modern organizations. Successful transformation, enhancement, and support initiatives depend on professionals who understand both enterprise technology and the business processes it enables.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                hash="enquiry-form"
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
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
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
                  src={sapEnterpriseTeam}
                  alt="ConfigUSA SAP S/4HANA Implementation Team"
                  className="w-full h-56 sm:h-72 object-cover object-center filter brightness-[1.05] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
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
                  hash="enquiry-form"
                  className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-sm"
                >
                  Request SAP Professionals <ArrowRight className="h-4 w-4" />
                </Link>
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
                hash="enquiry-form"
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
