import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Workflow,
  Boxes,
  Cpu,
  RefreshCw,
  ArrowRight,
  Check,
  Target,
  Users,
  Layers,
  LineChart,
} from "lucide-react";
import fdeHeroRight from "@/assets/fde-hero-right.jpg";
import fdeBesideBusiness from "@/assets/fde-beside-business.jpg";

export const Route = createFileRoute("/services/forward-deployed-engineering")({
  head: () => ({
    meta: [
      {
        title: "Forward-Deployed Engineering — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Forward-Deployed Engineering brings technical specialists closer to the people, processes and systems they support. ConfigUSA can help clients identify and engage engineering talent to work alongside business and technology teams on defined priorities.",
      },
      {
        property: "og:title",
        content: "Forward-Deployed Engineering | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Engineering close to the problem. Delivery focused on outcomes. Embedded technical talent working alongside client operational teams.",
      },
    ],
  }),
  component: ForwardDeployedEngineeringPage,
});

// Blueprint Section 5: Typical areas of work (5 cards)
const TYPICAL_AREAS = [
  {
    icon: BrainCircuit,
    title: "AI and data application engineering",
    desc: "Building data pipelines, deploying operational models, and turning analytics into reliable frontline applications.",
  },
  {
    icon: Workflow,
    title: "Workflow and process automation",
    desc: "Streamlining enterprise operational workflows, reducing friction, and eliminating manual bottlenecks.",
  },
  {
    icon: Boxes,
    title: "Enterprise system integration",
    desc: "Connecting disparate platforms, modern APIs, and legacy systems into coherent, interoperable workflows.",
  },
  {
    icon: Cpu,
    title: "Application modernisation and product engineering",
    desc: "Refactoring mission-critical applications and engineering cloud-native capabilities for production scale.",
  },
  {
    icon: RefreshCw,
    title: "Deployment, monitoring and continuous improvement",
    desc: "Establishing continuous deployment pipelines, operational telemetry, and reliable performance monitoring.",
  },
];

// Blueprint Section 5: How an engagement works (5-step stepper)
const ENGAGEMENT_STEPS = [
  {
    step: "01",
    title: "Define mission & success criteria",
    desc: "Establish clear operational goals, technical scope, and measurable delivery milestones.",
  },
  {
    step: "02",
    title: "Identify required skill mix",
    desc: "Determine the exact architectural, engineering, and platform capabilities needed.",
  },
  {
    step: "03",
    title: "Embed with client stakeholders",
    desc: "Integrate directly into operational teams, workflows, and development environments.",
  },
  {
    step: "04",
    title: "Deliver in short feedback cycles",
    desc: "Build, test, and release functional software rapidly with continuous user validation.",
  },
  {
    step: "05",
    title: "Measure outcomes and adjust",
    desc: "Track delivery impact, refine system performance, and transition documentation.",
  },
];

// Blueprint Section 5: Delivery principles (5 bullets)
const DELIVERY_PRINCIPLES = [
  "Clear ownership",
  "Close stakeholder collaboration",
  "Secure engineering practices",
  "Documented handover",
  "Measurable acceptance criteria",
];

function ForwardDeployedEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={fdeHeroRight}
            alt="Forward-Deployed Engineering"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                FORWARD-DEPLOYED ENGINEERING
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering close to the problem. Delivery focused on outcomes.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Forward-Deployed Engineering brings technical specialists closer to the people, processes and systems they support. ConfigUSA can help clients identify and engage engineering talent to work alongside business and technology teams on defined priorities.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Build an Engineering Team <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#what-fde-means"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Learn What FDE Means <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: What FDE means (Split Intro Layout matching Template)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="what-fde-means" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHAT FDE MEANS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Working within the operating context to turn difficult problems into working code.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Forward-deployed engineers work within the client's operating context. They understand the problem, collaborate with users, connect to relevant systems and help turn requirements into working solutions.
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Typical areas of work (Template Card Grid)              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                TYPICAL AREAS OF WORK
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              Where forward-deployed engineers create immediate operational impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TYPICAL_AREAS.map((area) => (
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: How an engagement works (5-Step Stepper Flow)           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                HOW AN ENGAGEMENT WORKS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              A structured lifecycle designed for speed, clarity and alignment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {ENGAGEMENT_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 font-bold text-xs mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#102B4E] tracking-tight mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                {idx < ENGAGEMENT_STEPS.length - 1 && (
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
      {/* 5. Section: Team composition & Delivery principles (Split 2-Col)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    DELIVERY PRINCIPLES
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Disciplined engineering governance built into every sprint.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Depending on the assignment, teams may include solution architects, AI/ML engineers, data engineers, software developers, integration specialists, QA engineers and product or delivery leads.
                </p>
              </div>

              <div className="space-y-3">
                {DELIVERY_PRINCIPLES.map((principle) => (
                  <div key={principle} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={fdeBesideBusiness}
                  alt="Forward-Deployed Engineering Team"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Facing a delivery bottleneck or complex integration?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Tell us what you need to build and we will assemble the right engineering capability.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Build an Engineering Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
