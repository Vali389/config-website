import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Cpu,
  TrendingUp,
  UserCheck,
  Boxes,
  RefreshCw,
  BrainCircuit,
  Cloud,
  Shield,
  Layers,
  BarChart3,
  ArrowRight,
  Check,
  Info,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import gccHeroBg from "@/assets/GCC Solutions-bg.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";

export const Route = createFileRoute("/gcc")({
  head: () => ({
    meta: [
      {
        title: "GCC Solutions — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Global Capability Centres are evolving from cost-focused operations into strategic hubs for technology, data, engineering and business services. ConfigUSA supports organisations with specialist talent and workforce solutions aligned to their GCC growth plans.",
      },
      {
        property: "og:title",
        content: "GCC Solutions | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Build and scale your GCC with the right talent and workforce strategy. Leadership hiring, specialist engineering talent and lifecycle support.",
      },
    ],
  }),
  component: GCCSolutionsPage,
});

// Blueprint Section 8: How we support GCCs (6 items verbatim)
const HOW_WE_SUPPORT_GCCS = [
  {
    icon: Users,
    title: "Leadership and critical-role hiring.",
    desc: "Targeted executive search and practice-lead recruitment to establish strong operational governance from day one.",
  },
  {
    icon: Cpu,
    title: "Specialist technology and engineering talent.",
    desc: "Sourcing vetted software engineers, data architects, cloud specialists and enterprise platform professionals.",
  },
  {
    icon: TrendingUp,
    title: "Workforce ramp-up and mobilisation.",
    desc: "High-volume recruitment frameworks designed to meet aggressive expansion milestones without sacrificing quality.",
  },
  {
    icon: UserCheck,
    title: "Contract staffing and permanent hiring.",
    desc: "Flexible engagement structures offering contingent staffing, direct placement and contract-to-hire options.",
  },
  {
    icon: Boxes,
    title: "Team build-out for new functions and capabilities.",
    desc: "Assembling multidisciplinary engineering and operational pods for emerging technology capabilities.",
  },
  {
    icon: RefreshCw,
    title: "Workforce transition and scaling support, where agreed.",
    desc: "Structured retention, workforce continuity and capability expansion protocols across mature GCC operations.",
  },
];

// Blueprint Section 8: Support across the GCC lifecycle (4 stages verbatim)
const GCC_LIFECYCLE_STAGES = [
  {
    step: "01",
    phase: "Plan",
    text: "Understand capability priorities, roles and ramp-up requirements.",
  },
  {
    step: "02",
    phase: "Build",
    text: "Identify leadership and specialist talent for priority functions.",
  },
  {
    step: "03",
    phase: "Scale",
    text: "Mobilise teams against agreed hiring plans and timelines.",
  },
  {
    step: "04",
    phase: "Strengthen",
    text: "Support retention, workforce continuity and capability expansion.",
  },
];

// Blueprint Section 8: Typical GCC talent domains (6 domains verbatim)
const TALENT_DOMAINS = [
  {
    name: "AI and data",
    icon: BrainCircuit,
    desc: "Machine learning, data engineering, analytics pipelines and business intelligence.",
  },
  {
    name: "Cloud and cybersecurity",
    icon: Cloud,
    desc: "Cloud infrastructure, DevOps, platform engineering and security operations.",
  },
  {
    name: "Enterprise applications",
    icon: Layers,
    desc: "Workday, SAP, MuleSoft, Salesforce and enterprise system integrations.",
  },
  {
    name: "Software engineering",
    icon: Cpu,
    desc: "Full-stack development, modern microservices, APIs and digital product engineering.",
  },
  {
    name: "Product and platform teams",
    icon: Boxes,
    desc: "Technical product management, architecture, agile delivery and quality engineering.",
  },
  {
    name: "Finance operations and risk technology",
    icon: BarChart3,
    desc: "Quantitative analytics, financial technology, risk modeling and regulatory reporting.",
  },
];

// Blueprint Section 8: Our engagement approach (4 bullets verbatim)
const ENGAGEMENT_APPROACH_POINTS = [
  "A dedicated client contact",
  "Agreed role priorities",
  "Transparent recruitment reporting",
  "A mobilisation plan aligned to the client's operating model",
];

function GCCSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={gccHeroBg}
            alt="GCC Solutions"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                GCC SOLUTIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Build and scale your GCC with the right talent and workforce strategy.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Global Capability Centres are evolving from cost-focused operations into strategic hubs for technology, data, engineering and business services. ConfigUSA supports organisations with specialist talent and workforce solutions aligned to their GCC growth plans.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Your GCC Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how-we-support"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                How We Support GCCs <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: How we support GCCs (Template Card Grid)                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="how-we-support" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  HOW WE SUPPORT GCCS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialist talent and workforce solutions across GCC initiatives.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              ConfigUSA supports organisations with specialist talent and workforce solutions aligned to their GCC growth plans.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_WE_SUPPORT_GCCS.map((area) => (
              <div
                key={area.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <area.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2.5">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Support across the GCC lifecycle (4-Step Stepper Flow)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                SUPPORT ACROSS THE GCC LIFECYCLE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              A structured roadmap supporting setup, scaling and maturity.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {GCC_LIFECYCLE_STAGES.map((s, idx) => (
              <div
                key={s.step}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 font-bold text-xs group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                      {s.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#245B91]">
                      {s.phase}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#102B4E] tracking-tight mb-2">
                    {s.phase}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.text}
                  </p>
                </div>
                {idx < GCC_LIFECYCLE_STAGES.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white border border-slate-300 shadow-sm text-[#245B91]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Typical GCC talent domains (Dedicated Domain Grid)      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  TYPICAL GCC TALENT DOMAINS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialist capability across technical and operational domains.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-sm leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              AI and data, cloud and cybersecurity, enterprise applications, software engineering, product and platform teams, finance operations and risk technology—subject to confirmed sourcing capability.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TALENT_DOMAINS.map((domain) => (
              <div
                key={domain.name}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-4">
                    <domain.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-base font-bold text-[#102B4E] tracking-tight mb-2">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. Section: Our engagement approach (Split 2-Col with Photo)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    OUR ENGAGEMENT APPROACH
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Accountable recruitment and talent delivery for GCC hubs.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  A dedicated client contact, agreed role priorities, transparent recruitment reporting and a mobilisation plan aligned to the client's operating model.
                </p>
              </div>

              <div className="space-y-3.5">
                {ENGAGEMENT_APPROACH_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Scope note per Blueprint Section 8 Publishing Notes */}
              <div className="mt-8 rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs flex items-start gap-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#102B4E] mt-0.5">
                  <Info className="h-4 w-4" />
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-[#102B4E] font-semibold">Scope of Service:</strong> Legal entity formation, tax, regulatory and real-estate advisory are outside scope unless provided through qualified partners.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={gccEnterpriseHub}
                  alt="Global Capability Centre in India"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Planning or scaling a GCC in India?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Talk to our team about market insights, talent availability and engagement structures.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Your GCC Plans <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
                  </FadeUp>
        </div>
      </section>
    </div>
  );
}
