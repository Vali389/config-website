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
} from "lucide-react";
import digitalEngineeringHero from "@/assets/digital-engineering-hero.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Capabilities — ConfigUSA" },
      {
        name: "description",
        content:
          "Enterprise initiatives need more than a list of skills. They need the right expertise, a workable engagement model and disciplined execution. ConfigUSA brings these elements together across selected technology and workforce priorities.",
      },
      { property: "og:title", content: "Capabilities Built Around the Work That Matters | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Technology & AI, Forward-Deployed Engineering, Enterprise Applications, Workforce Solutions, and GCC Solutions.",
      },
    ],
  }),
  component: CapabilitiesOverviewPage,
});

// Blueprint Section 3: 5 Capabilities exactly as written
const CAPABILITIES = [
  {
    title: "Technology & AI",
    description:
      "Support for organisations exploring and delivering AI, data and digital engineering initiatives. Services should be described only to the extent ConfigUSA can demonstrate delivery capability.",
    to: "/services/ai",
    icon: BrainCircuit,
    ctaLabel: "Explore AI & Intelligent Solutions",
  },
  {
    title: "Forward-Deployed Engineering",
    description:
      "Embedded engineering talent that works alongside client teams to understand operational problems, build solutions and support adoption in real business environments.",
    to: "/services/forward-deployed-engineering",
    icon: Rocket,
    ctaLabel: "Explore Forward-Deployed Engineering",
  },
  {
    title: "Enterprise Applications",
    description:
      "Specialist talent and delivery support across selected enterprise platforms, aligned to client architecture, implementation and support needs.",
    to: "/services/enterprise-applications",
    icon: Boxes,
    ctaLabel: "Explore Enterprise Applications",
  },
  {
    title: "Workforce Solutions",
    description:
      "Contract staffing, contract-to-hire, permanent recruitment and managed workforce solutions for specialist and enterprise requirements.",
    to: "/services/staffing",
    icon: Users,
    ctaLabel: "Explore Workforce Solutions",
  },
  {
    title: "GCC Solutions",
    description:
      "Talent and workforce support for organisations establishing, expanding or transforming Global Capability Centres.",
    to: "/gcc",
    icon: Globe2,
    ctaLabel: "Explore GCC Solutions",
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
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={digitalEngineeringHero}
            alt="Capabilities Overview"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                CORE CAPABILITIES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Capabilities built around the work that matters.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Enterprise initiatives need more than a list of skills. They need the right expertise, a workable engagement model and disciplined execution. ConfigUSA brings these elements together across selected technology and workforce priorities.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#capabilities-grid"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Capabilities <ArrowRight className="h-4 w-4" />
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
      {/* 2. Core Capabilities Grid (Template Card Style)                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="capabilities-grid" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  PRACTICAL DELIVERY
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialist technical capability aligned to enterprise priorities.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              From targeted talent solutions to dedicated delivery teams, we help clients move from requirement to execution with clarity and speed.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <cap.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={cap.to as any}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] group-hover:text-[#a82e35] transition-colors"
                  >
                    <span>{cap.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: How We Work (5-Step Stepper Flow)                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {HOW_WE_WORK_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
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
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
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
                Have a capability requirement?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Let us understand the technical scope, timeline and engagement model needed to make progress.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
