import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Rocket,
  Boxes,
  Users,
  Globe2,
  ArrowRight,
  Search,
  Sliders,
  UserCheck,
  LineChart,
  ShieldCheck,
  Award,
  Cpu,
  Building2,
  CheckCircle2,
  Check,
} from "lucide-react";
import servicesHeroBg from "@/assets/Engagement Models-bg.jpg";
import { FadeUp } from "@/components/FadeUp";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Solutions & Enterprise Capabilities — ConfigUSA" },
      {
        name: "description",
        content:
          "ConfigUSA provides comprehensive enterprise solutions across three core pillars: Enterprise Talent, Workforce Solutions, and Technology Consulting. From targeted staffing to dedicated engineering pods and GCC enablement.",
      },
      { property: "og:title", content: "Enterprise Solutions & Capabilities | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Enterprise Talent, Workforce Solutions, and Technology Consulting & Resource Augmentation.",
      },
    ],
  }),
  component: CapabilitiesOverviewPage,
});

// The 3 Strategic Business Pillars
const SOLUTION_PILLARS = [
  {
    category: "PILLAR 1",
    tag: "Enterprise Talent",
    title: "IT Staffing & Specialist Recruitment",
    summary:
      "Rapid, practitioner-vetted technical talent acquisition connecting enterprises with specialized engineers, architects, and technical leaders.",
    offerings: [
      "Contract Staffing & Agile Augmentation",
      "Direct Placement & Permanent Recruitment",
      "Contract-to-Hire Evaluations",
      "Executive & Technical Leadership Search",
      "Niche Skill Sourcing (AI, Cloud, ERP)",
    ],
    challenges: [
      "Prolonged technical hiring cycles delaying critical projects",
      "High candidate fallout and lack of technical vetting by generic agencies",
      "Specialist talent scarcity in emerging technologies",
    ],
    value:
      "48–72 hour candidate shortlists, 94% retention rate, and practitioner-screened technical competence.",
    cta: "Explore Talent Solutions",
    to: "/services/staffing",
    icon: Users,
    color: "border-blue-200 hover:border-[#245B91]",
  },
  {
    category: "PILLAR 2",
    tag: "Workforce Solutions",
    title: "Workforce Programs, FDE & GCC Enablement",
    summary:
      "Tailored workforce management architectures, embedded frontline engineering squads, and Global Capability Center scaling in India.",
    offerings: [
      "Forward-Deployed Engineering (FDE) Squads",
      "Global Capability Center (GCC) Setup & Scale",
      "Managed Service Provider (MSP) Delivery",
      "Vendor Management System (VMS) Programs",
      "Flexible Commercial Engagement Models",
    ],
    challenges: [
      "Operational bottlenecks and slow software adoption at the frontline",
      "Complex cross-border compliance, entity setup, and hiring in offshore hubs",
      "Fragmented contractor management and vendor cost escalation",
    ],
    value:
      "Embedded operational impact, turnkey GCC scaling in weeks, and standardized enterprise governance.",
    cta: "Explore Workforce Solutions",
    to: "/engagement-models",
    icon: Rocket,
    color: "border-red-200 hover:border-[#C83B43]",
  },
  {
    category: "PILLAR 3",
    tag: "Technology Consulting",
    title: "Specialist Consulting & Resource Augmentation",
    summary:
      "Targeted technical pods and senior subject-matter experts deployed directly into complex platforms, cloud modernisations, and AI initiatives.",
    offerings: [
      "Palantir Foundry & AIP Specialist Talent",
      "SAP S/4HANA Consulting & Technical Pods",
      "Workday HCM & Financials Integration",
      "Enterprise AI, Machine Learning & Data Pipelines",
      "Cloud Modernisation (AWS, Azure, GCP, DevOps)",
    ],
    challenges: [
      "Legacy architectural debt and unproven ROI on enterprise platforms",
      "Integration friction between enterprise ERPs and modern cloud systems",
      "Severe shortages of certified Palantir, SAP, and Workday practitioners",
    ],
    value:
      "Production-grade delivery velocity, hands-on knowledge transfer, and verifiable milestone SLAs.",
    cta: "Explore Technology Consulting",
    to: "/services/software",
    icon: Cpu,
    color: "border-slate-200 hover:border-[#102B4E]",
  },
];

// Blueprint Section 1: How we work (5-step structured delivery flow)
const HOW_WE_WORK_STEPS = [
  { step: "01", icon: Search, title: "Understand the requirement", desc: "Define technical scope, operational constraints and delivery expectations." },
  { step: "02", icon: Sliders, title: "Align the talent or delivery model", desc: "Select contract staffing, embedded engineering squads, or dedicated pods." },
  { step: "03", icon: UserCheck, title: "Identify and assess capability", desc: "Practitioner-led technical screening and contextual qualification." },
  { step: "04", icon: Rocket, title: "Mobilise the team", desc: "Fast-track onboarding, compliance readiness, and integration into workflows." },
  { step: "05", icon: LineChart, title: "Review delivery and continuously improve", desc: "Structured governance, performance milestones, and ongoing stakeholder communication." },
];

function CapabilitiesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={servicesHeroBg}
            alt="ConfigUSA Enterprise Solutions"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/85 via-[#102B4E]/50 to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                SOLUTIONS & CAPABILITIES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Enterprise solutions built around the work that matters.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              ConfigUSA organizes its services across three primary offerings: Enterprise Talent, Workforce Solutions, and Technology Consulting. We bring together targeted skill access, structured delivery practices and flexible commercial models to help clients execute with certainty.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#solutions-pillars"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Offerings <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Core Solutions Pillars (3 Distinct Enterprise Offerings)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="solutions-pillars" className="py-8 lg:py-12 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    STRATEGIC OFFERINGS
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Clear differentiation across talent, workforce and technology.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
                Whether you need specialized contractors, managed engineering pods, or global capability center expansion, our three distinct business pillars are structured to align directly with your operational reality.
              </div>
            </div>
          </FadeUp>

          <div className="space-y-8">
            {SOLUTION_PILLARS.map((pillar, idx) => (
              <FadeUp key={pillar.title} delay={idx * 0.1}>
                <div className={`group rounded-2xl border ${pillar.color} bg-white p-7 lg:p-9 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row gap-8 items-start justify-between`}>
                  <div className="lg:max-w-md space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                        <pillar.icon className="h-5 w-5 stroke-[2]" />
                      </span>
                      <div>
                        <span className="text-xs font-bold text-[#C83B43] uppercase tracking-wider block">
                          {pillar.category} • {pillar.tag}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-extrabold text-[#102B4E] tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.summary}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={pillar.to as any}
                        className="btn-cta-primary inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs"
                      >
                        <span>{pillar.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 flex-1 w-full lg:border-l lg:border-slate-100 lg:pl-8">
                    <div>
                      <h4 className="text-xs font-extrabold text-[#102B4E] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-[#245B91]" />
                        What We Offer
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {pillar.offerings.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-extrabold text-[#102B4E] uppercase tracking-wider mb-2 text-slate-800">
                          Challenges Solved
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {pillar.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                              <span className="text-slate-400">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-[#F8FAFC] border border-slate-200/80 p-3">
                        <span className="text-[11px] font-bold text-[#245B91] uppercase tracking-wider block mb-1">
                          Verified Business Value
                        </span>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {pillar.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: How We Work (5-Step Stepper Flow)                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  HOW WE WORK
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                A structured, accountable path from requirement to execution.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 relative">
            {HOW_WE_WORK_STEPS.map((s, idx) => (
              <div
                key={s.step}
                style={{ zIndex: 20 - idx }}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 overflow-visible flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 font-bold text-xs group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                      {s.step}
                    </span>
                    <s.icon className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-bold text-[#102B4E] tracking-tight mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                {idx < HOW_WE_WORK_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center absolute left-[calc(100%+10px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white border border-slate-300 shadow-md text-[#245B91] pointer-events-none"
                  >
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
              Need assistance identifying the right solution model?
            </h3>
            <p className="text-slate-300 text-sm">
              Speak directly with a ConfigUSA solutions director to map talent, delivery pods or GCC expansion.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="btn-cta-primary text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm"
            >
              Discuss Your Requirement
            </Link>
            <Link
              to="/engagement-models"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
