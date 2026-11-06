import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  Database,
  Cpu,
  Layers,
  Users2,
  ArrowRight,
  ShieldAlert,
  Check,
} from "lucide-react";
import palantirHeroBg from "@/assets/palantir-bg.png";
import heroData from "@/assets/hero-data.jpg";

export const Route = createFileRoute("/services/palantir")({
  head: () => ({
    meta: [
      {
        title: "Palantir Talent & Specialist Workforce — ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA supports organisations seeking specialist professionals for complex data, analytics and enterprise technology environments. Where aligned to client requirements, we can help identify and engage talent with relevant platform and domain experience.",
      },
      {
        property: "og:title",
        content: "Palantir Talent & Specialist Workforce | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Specialist talent for data-driven enterprise platforms. Independent technical staffing and specialist team augmentation.",
      },
    ],
  }),
  component: PalantirTalentPage,
});

// Blueprint Section 6: Talent areas (5 cards)
const TALENT_AREAS = [
  {
    icon: Boxes,
    title: "Platform and solution architecture",
    desc: "Enterprise architects with deep platform knowledge, ontology modeling skills, and large-scale data system design experience.",
  },
  {
    icon: Database,
    title: "Data engineering and analytics",
    desc: "Engineers specializing in multi-source ingestion pipelines, dataset transformation, semantic modeling, and analytics enablement.",
  },
  {
    icon: Cpu,
    title: "Application and software engineering",
    desc: "Frontend and full-stack developers building operational user applications, analytics dashboards, and workflow tooling.",
  },
  {
    icon: Layers,
    title: "Integration and infrastructure roles",
    desc: "Specialists managing API connectivity, legacy system integration, cloud infrastructure, and security access controls.",
  },
  {
    icon: Users2,
    title: "Business analysis, product and delivery leadership",
    desc: "Subject-matter experts and delivery managers who translate complex operational requirements into actionable technical backlogs.",
  },
];

// Blueprint Section 6: Our talent process (5-step stepper)
const TALENT_PROCESS_STEPS = [
  {
    step: "01",
    title: "Clarify role & context",
    desc: "Define the operating environment, technical scope, and project objectives.",
  },
  {
    step: "02",
    title: "Agree essential skills",
    desc: "Align on required platform expertise, domain background, and seniority.",
  },
  {
    step: "03",
    title: "Source and assess",
    desc: "Engage vetted candidates through targeted market mapping and technical review.",
  },
  {
    step: "04",
    title: "Validate experience",
    desc: "Confirm hands-on platform project experience, references, and availability.",
  },
  {
    step: "05",
    title: "Coordinate onboarding",
    desc: "Facilitate client interviews, compliance verification, and rapid deployment.",
  },
];

// Blueprint Section 6: What clients can expect (4 points)
const CLIENT_EXPECTATIONS = [
  "A clearly defined search brief tailored to your data environment.",
  "Transparent candidate status throughout the sourcing cycle.",
  "Relevant skill validation and practitioner-led assessment.",
  "Regular communication from initial requirement to deployment.",
];

function PalantirTalentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={palantirHeroBg}
            alt="Palantir Specialist Talent"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                PALANTIR TALENT & SPECIALIST WORKFORCE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Specialist talent for data-driven enterprise platforms.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              ConfigUSA supports organisations seeking specialist professionals for complex data, analytics and enterprise technology environments. Where aligned to client requirements, we can help identify and engage talent with relevant platform and domain experience.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Specialist Talent Needs <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#talent-areas"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore Talent Areas <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Talent areas (Template Card Grid)                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="talent-areas" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  TALENT AREAS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialist technical capability across complex data architectures.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Connecting enterprises with qualified engineers, architects and delivery leads who understand mission-critical data platforms.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TALENT_AREAS.map((area) => (
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
      {/* 3. Section: Our talent process (5-Step Stepper Flow)                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                OUR TALENT PROCESS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              A structured, rigorous selection path ensuring fit and capability.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {TALENT_PROCESS_STEPS.map((s, idx) => (
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
                {idx < TALENT_PROCESS_STEPS.length - 1 && (
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
      {/* 4. Section: What clients can expect (Split 2-Col with Photo)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    TRANSPARENT ENGAGEMENT
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  What clients can expect throughout the talent engagement.
                </h2>
              </div>

              <div className="space-y-3.5">
                {CLIENT_EXPECTATIONS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={heroData}
                  alt="Enterprise Data Engineering Team"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. Section: Important clarification (Callout Box)                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="rounded-xl border border-slate-200/90 bg-white p-8 lg:p-10 shadow-xs max-w-4xl">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200 mt-1">
                <ShieldAlert className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                  Important clarification
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ConfigUSA's role in each engagement will be stated accurately. Talent sourcing, staffing and implementation services are distinct offerings. Any partner or authorised status will be claimed only where formally approved.
                </p>
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
                Need specialist data or platform talent?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Let us know the technical environment, seniority and deployment timeline you require.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Specialist Talent Needs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
