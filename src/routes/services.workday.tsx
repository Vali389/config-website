import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";
import wdWorkforceImg from "@/assets/wd-workforce.jpg";
import erpIntegrationImg from "@/assets/erp_integration_img.png";
import { FadeUp } from "@/components/FadeUp";

export const Route = createFileRoute("/services/workday")({
  head: () => ({
    meta: [
      {
        title: "Workday Talent Solutions & Optimization — ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA helps enterprises source specialized Workday talent across HCM, Financial Management, Integrations, Reporting, and Payroll.",
      },
      {
        property: "og:title",
        content: "Workday Talent Solutions | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Specialized Workday Expertise for Enterprise Transformation and Operational Excellence.",
      },
    ],
  }),
  component: WorkdayPage,
});

const WORKDAY_CAPABILITIES = [
  "Workday HCM.",
  "Workday Financial Management.",
  "Workday Integrations.",
  "Workday Reporting.",
  "Workday Security.",
  "Workday Payroll.",
  "Workday Recruiting.",
  "Workday Configuration & Support.",
];

function WorkdayPage() {
  const [selectedModule, setSelectedModule] = useState("Workday HCM");

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Navy Blue Workday Presentation)                    */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#102B4E] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={wdWorkforceImg}
            alt="Workday Enterprise Solutions"
            className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity filter brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/85 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C83B43]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C83B43]">
                WORKDAY TALENT SOLUTIONS
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.16] tracking-tight text-white">
              Specialized Workday Expertise for Enterprise Transformation and Operational Excellence.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Workday environments require professionals who can navigate the intersection of technology, business processes, and evolving organizational needs.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md px-6 py-3"
              >
                Find Workday Specialists <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/sap"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold px-6 py-3"
              >
                SAP Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="pt-3 border-l-2 border-[#C83B43] pl-4 text-xs tracking-wide text-slate-300">
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
                  CLOUD ERP & HCM
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                End-to-End Workday Implementation and Optimization Support
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  ConfigUSA helps clients source Workday specialists for implementation support, configuration, integrations, reporting, optimization, and ongoing application operations.
                </p>
                <p>
                  Our focus is to help organizations access professionals with the relevant Workday experience needed to support business continuity, application effectiveness, and enterprise priorities.
                </p>
              </div>

              {/* Workday Integration Architecture Image */}
              <div className="mt-7 relative overflow-hidden rounded-xl border border-slate-200 shadow-md bg-slate-900 group">
                <img
                  src={erpIntegrationImg}
                  alt="ConfigUSA Workday Integration Architecture"
                  className="w-full h-56 sm:h-64 object-cover object-center filter brightness-[1.08] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-[#102B4E]/95 text-white px-4 py-2.5 text-xs flex items-center justify-between border-t border-white/20">
                  <span className="font-semibold text-white">
                    Workday Enterprise Cloud Integration & Prism Analytics
                  </span>
                  <span className="text-[#C83B43] font-mono font-bold">
                    HCM · FIN · PICOF · EIB
                  </span>
                </div>
              </div>

              {/* Workday Capabilities Grid */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#102B4E]">
                  Workday Capabilities
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {WORKDAY_CAPABILITIES.map((cap) => (
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
                  Enterprise applications are only as effective as the expertise behind them.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-sm"
                >
                  Find Workday Specialists <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Lead Card (Navy Blue Sidecard) */}
            <div className="lg:pt-2 sticky top-28">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Database className="h-5 w-5 text-[#C83B43]" />
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Source Workday Talent
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tell us about your Workday HCM, Financials, Integration, or Support needs.
                </p>

                <div className="mt-5 space-y-3">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Workday Capability Area
                    </span>
                    <select
                      value={selectedModule}
                      onChange={(e) => setSelectedModule(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#245B91]"
                    >
                      <option value="Workday HCM">Workday HCM & Core HR</option>
                      <option value="Financial Management">Workday Financial Management</option>
                      <option value="Integrations">Integrations (Studio, EIB, Core Connector)</option>
                      <option value="Prism/Reporting">Workday Reporting & Prism Analytics</option>
                      <option value="Payroll/Compensation">Payroll & Advanced Compensation</option>
                    </select>
                  </label>

                  <div className="rounded-lg bg-white border border-slate-200 p-3.5 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Turnaround:</span>
                      <span className="text-[#C83B43]">48–72 Hours</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Vetting:</span>
                      <span className="text-emerald-700">Certified Workday Leads</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Engagement:</span>
                      <span className="text-slate-800">Direct Hire / Contract / Advisory</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full btn-cta-primary text-center py-2.5 text-xs font-bold block shadow-xs mt-4"
                  >
                    Submit Workday Talent Request
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
                Optimizing or rolling out Workday across multiple entities?
              </h3>
              <p className="text-slate-300 text-sm">
                Our Workday practice leads will match specialists to your exact deployment roadmap.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-cta-primary text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm"
              >
                Connect With Workday Talent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
