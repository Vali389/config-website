import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Target,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import heroTemplateCaseStudies from "@/assets/hero_template_case_studies.png";

export const Route = createFileRoute("/case-studies")({
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
  component: CaseStudiesPage,
});

// Blueprint Section 12: Recommended case-study structure (4 Pillars)
const CASE_STUDY_STRUCTURE = [
  {
    step: "01",
    icon: Building2,
    title: "Client context",
    desc: "Sector, enterprise scale, technical environment and operational constraints.",
  },
  {
    step: "02",
    icon: Target,
    title: "Business challenge",
    desc: "The critical capability gap, platform migration deadline or urgent delivery bottleneck.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "ConfigUSA response",
    desc: "The talent mix, embedded squad or dedicated delivery model deployed to solve the challenge.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Execution & Outcome",
    desc: "Verified delivery milestones, operational acceleration and knowledge handover.",
  },
];

function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[540px] lg:min-h-[620px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={heroTemplateCaseStudies}
            alt="Delivery Case Studies"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                CASE STUDIES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Evidence of execution—not just promises.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Every engagement begins with a business need. Our case studies explain the context, the work undertaken and the outcomes achieved, using approved and verifiable information.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss a Similar Challenge <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#case-study-framework"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Delivery Framework <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Delivery Framework (Template Card Grid)                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="case-study-framework" className="section-padding bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  DELIVERY FRAMEWORK
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                How we document and substantiate client delivery.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Every case study is structured to demonstrate the problem, solution, governance model and measurable outcome.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CASE_STUDY_STRUCTURE.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs hover:border-[#245B91]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 font-bold text-xs">
                      {item.step}
                    </span>
                    <item.icon className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Confidentiality & Briefings (Split 2-Col with Photo)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    CONFIDENTIALITY & GOVERNANCE
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Request approved client briefings and case study summaries.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Where client permission is not available, remove identifying details and obtain approval for the anonymised version before publication. Connect with our team to request approved case study briefs relevant to your industry.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-6 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#102B4E] mb-1">
                    Verified Reference Access
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under mutual NDA, we provide qualified enterprise buyers with relevant references and verified technical delivery evidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={caseStudyTeam}
                  alt="Delivery Execution"
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
      <section className="bg-[#102B4E] text-white py-12 lg:py-14 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Explore relevant client work.
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Connect with our team to request verified delivery examples for your sector.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss a Similar Challenge <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
