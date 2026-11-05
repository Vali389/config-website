import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  Compass,
  UserCheck,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import enterprisePlatformsMesh from "@/assets/enterprise-platforms-mesh.jpg";
import erpImplementationImg from "@/assets/erp_implementation_img.png";

export const Route = createFileRoute("/services/enterprise-applications")({
  head: () => ({
    meta: [
      {
        title: "Enterprise Applications — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Enterprise platforms support essential business processes. ConfigUSA helps clients identify specialist talent and delivery support aligned to their platform environment, programme stage and operating needs.",
      },
      {
        property: "og:title",
        content: "Enterprise Applications | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "The right expertise across critical enterprise platforms. Workday, SAP, MuleSoft and Salesforce talent and delivery support.",
      },
    ],
  }),
  component: EnterpriseApplicationsPage,
});

// Blueprint Section 7: 4 Platforms exactly as written
const PLATFORMS_SUPPORTED = [
  {
    id: "workday",
    title: "Workday",
    description:
      "Talent and delivery support for relevant Workday programme needs, subject to verified skills and experience. Potential areas include HCM, integrations, reporting and platform support.",
  },
  {
    id: "sap",
    title: "SAP",
    description:
      "Specialist resources for selected SAP environments, including functional, technical, data, integration and programme roles where capability is established.",
  },
  {
    id: "mulesoft",
    title: "MuleSoft",
    description:
      "Integration specialists supporting API-led connectivity, integration development, testing and platform operations.",
  },
  {
    id: "salesforce",
    title: "Salesforce",
    description:
      "Talent for relevant Salesforce development, administration, architecture, integration and support requirements.",
  },
];

// Blueprint Section 7: How we support clients
const SUPPORT_PILLARS = [
  "Platform landscape & programme architecture evaluation.",
  "Essential skills profiling & verified technical screening.",
  "Flexible commercial engagement (contract, permanent, or delivery squads).",
  "Disciplined onboarding, knowledge transfer & delivery governance.",
];

function EnterpriseApplicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={enterprisePlatformsMesh}
            alt="Enterprise Applications Platforms"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                ENTERPRISE APPLICATIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              The right expertise across critical enterprise platforms.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Enterprise platforms support essential business processes. ConfigUSA helps clients identify specialist talent and delivery support aligned to their platform environment, programme stage and operating needs.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Enterprise Platform Requirements <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#platforms"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore Platforms <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Platform capabilities (Template Card Grid)              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="platforms" className="section-padding bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  PLATFORM CAPABILITIES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialist talent across leading enterprise technologies.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Connecting enterprises with qualified platform engineers, functional consultants, and integration architects.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATFORMS_SUPPORTED.map((platform) => (
              <div
                key={platform.id}
                id={platform.id}
                className="group scroll-mt-28 rounded-xl border border-slate-200/80 bg-white p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <Boxes className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-2.5">
                    {platform.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: How we support clients (Split 2-Col with Photo)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    HOW WE SUPPORT CLIENTS
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Aligning sourcing and delivery models to your programme context.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  We begin with the platform landscape, programme context, required skills and delivery expectations. We then align the sourcing or delivery model to the need.
                </p>
              </div>

              <div className="space-y-3.5">
                {SUPPORT_PILLARS.map((pillar) => (
                  <div key={pillar} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 leading-snug">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={erpImplementationImg}
                  alt="Enterprise Platform Implementation"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Need specialist enterprise platform skills?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Share your platform, role requirements and timeline with our team.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Platform Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
