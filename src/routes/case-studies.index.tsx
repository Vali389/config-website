import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Rocket,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import caseStudiesHeroBg from "@/assets/case-studies-bg.jpg";
import {
  VERIFIED_CASE_STUDIES,
  CASE_STUDY_STRUCTURE,
} from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      {
        title: "Case Studies — Evidence of Execution | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Every engagement begins with a business need. Our case studies explain the context, the work undertaken and the outcomes achieved, using approved and verifiable information.",
      },
      {
        property: "og:title",
        content: "Case Studies — Evidence of Execution | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Evidence of execution—not just promises. Measurable delivery examples across technology, engineering and workforce solutions.",
      },
    ],
  }),
  component: CaseStudiesIndexPage,
});

const PILLAR_ICONS = [Building2, Rocket, Target, CheckCircle2];

function CaseStudiesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={caseStudiesHeroBg}
            alt="ConfigUSA Case Studies"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012056] via-[#012056]/95 via-30% md:via-40% to-transparent to-62% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#012056]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                CASE STUDIES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Evidence of execution across enterprise technology.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Every engagement begins with a business need. Our case studies explain the context, the work undertaken and the outcomes achieved, using approved and verifiable information.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#verified-case-studies"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                View Case Studies <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                hash="enquiry-form"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discuss a Requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Recommended Case Study Structure (4 Pillars)           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OUR CASE STUDY FRAMEWORK
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                A disciplined four-pillar model for documenting delivery impact.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CASE_STUDY_STRUCTURE.map((item, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <FadeUp key={item.step} delay={idx * 0.08}>
                  <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20">
                    <div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 font-bold text-xs mb-4">
                        {item.step}
                      </span>
                      <h3 className="text-base font-bold text-[#102B4E] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Verified Client Case Studies (4-Part Framework)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="verified-case-studies" className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    VERIFIED CASE STUDIES
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Real enterprise requirements. Documented delivery outcomes.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
                Representative delivery engagements illustrating our disciplined approach across specialist workforce, GCC setup, enterprise applications and intelligent automation.
              </div>
            </div>
          </FadeUp>

          <div className="space-y-8">
            {VERIFIED_CASE_STUDIES.map((cs, idx) => (
              <FadeUp key={cs.id} delay={idx * 0.08}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden space-y-6 before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 hover:before:opacity-100 before:transition-opacity relative group">
                  {/* Top Split: Left Image + Right Executive Context */}
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* Left: Supporting High-Res Image (Clickable Link to detail) */}
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: cs.id }}
                      className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs h-56 sm:h-64 bg-slate-100 block group/img"
                    >
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#102B4E]/90 text-white backdrop-blur-xs shadow-xs">
                          {cs.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#102B4E]/95 text-white backdrop-blur-xs text-xs font-bold border border-white/10 shadow-sm">
                        <Sparkles className="h-3.5 w-3.5 text-[#C83B43] shrink-0" />
                        <span className="truncate">{cs.metric}</span>
                      </div>
                    </Link>

                    {/* Right: Badges, Title & Context */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#102B4E] text-white">
                          {cs.category}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          Sector: <strong className="text-slate-800 font-semibold">{cs.sector}</strong>
                        </span>
                      </div>
                      <Link
                        to="/case-studies/$slug"
                        params={{ slug: cs.id }}
                        className="block"
                      >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight group-hover:text-[#245B91] transition-colors">
                          {cs.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cs.context}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          to="/case-studies/$slug"
                          params={{ slug: cs.id }}
                          className="btn-cta-primary inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-md shadow-xs"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          to="/contact"
                          hash="enquiry-form"
                          className="text-xs font-bold text-slate-600 hover:text-[#102B4E] px-3 py-2 transition-colors inline-flex items-center gap-1"
                        >
                          <span>Discuss Similar Need</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 4 Cards: 1. Client Challenge, 2. ConfigUSA Approach, 3. Execution, 4. Verified Outcomes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* 1. Client Challenge */}
                    <div className="rounded-2xl border border-red-100 bg-red-50/20 p-4 sm:p-5 space-y-2 hover:bg-white hover:border-[#C83B43] hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#C83B43] uppercase">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[#C83B43] text-[10px]">
                          1
                        </span>
                        <span>Client Challenge</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    {/* 2. ConfigUSA Approach */}
                    <div className="rounded-2xl border border-blue-100 bg-blue-50/20 p-4 sm:p-5 space-y-2 hover:bg-white hover:border-[#245B91] hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#245B91] uppercase">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#245B91] text-[10px]">
                          2
                        </span>
                        <span>ConfigUSA Approach</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cs.response}
                      </p>
                    </div>

                    {/* 3. Execution & Delivery */}
                    <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-4 sm:p-5 space-y-2 hover:bg-white hover:border-[#102B4E] hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-700 uppercase">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-700 text-[10px]">
                          3
                        </span>
                        <span>Execution & Delivery</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cs.execution}
                      </p>
                    </div>

                    {/* 4. Verified Outcomes */}
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-4 sm:p-5 space-y-2 hover:bg-white hover:border-emerald-600 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-emerald-700 uppercase">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px]">
                          4
                        </span>
                        <span>Verified Outcomes</span>
                      </div>
                      <ul className="space-y-1.5">
                        {cs.outcomes.slice(0, 3).map((out, oIdx) => (
                          <li
                            key={oIdx}
                            className="flex items-start gap-1.5 text-xs text-slate-700 leading-snug"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Final CTA Section                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16 border-t border-slate-200">
        <div className="container-enterprise">
          <div className="rounded-3xl bg-gradient-to-r from-[#102B4E] to-[#1d4577] text-white p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-200">
                READY TO EXECUTE?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Discuss your technical requirements with our team.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Connect with our workforce directors and enterprise architects to evaluate tailored delivery models for your roadmaps.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 relative z-10 shrink-0">
              <Link
                to="/contact"
                hash="enquiry-form"
                className="btn-cta-primary text-sm font-bold shadow-md"
              >
                Schedule an Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
