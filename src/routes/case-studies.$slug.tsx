import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Clock,
  Layers,
  ArrowLeft,
  ShieldCheck,
  Target,
  Rocket,
} from "lucide-react";
import {
  findCaseStudy,
  VERIFIED_CASE_STUDIES,
  type CaseStudy,
} from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const cs = findCaseStudy(params.slug);
    const title = `${cs.title} — ConfigUSA Case Study`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            cs.subtitle ||
            `Documented case study: ${cs.title} in ${cs.sector} delivering ${cs.metric}.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: cs.subtitle || `Verified execution outcomes by ConfigUSA.`,
        },
      ],
    };
  },
  loader: ({ params }) => {
    const cs = findCaseStudy(params.slug);
    return { slug: params.slug, caseStudy: cs };
  },
  component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
  const { slug } = Route.useParams();
  const cs = findCaseStudy(slug);

  const otherCaseStudies = VERIFIED_CASE_STUDIES.filter(
    (item) => item.id !== cs.id
  ).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Header with Breadcrumbs & Tags) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white pt-28 pb-12 lg:pt-32 lg:pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-300"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link
              to="/case-studies"
              className="hover:text-white transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-blue-300 truncate max-w-xs sm:max-w-md">
              {cs.category}
            </span>
          </nav>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#245B91] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {cs.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C83B43] text-white shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{cs.metric}</span>
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Sector: <strong className="text-white">{cs.sector}</strong>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.15]">
              {cs.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              {cs.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-300" />
                <span>
                  Model: <strong className="text-white">{cs.engagementType}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-300" />
                <span>
                  Engagement: <strong className="text-white">{cs.duration}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/90 to-[#245B91]/30 pointer-events-none" />
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Key Stats Highlights Bar (4 KPI Tiles)                          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xs text-center space-y-1 hover:border-[#245B91] hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Hero Visual Photo & Quick Overview                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-slate-200/80">
        <div className="container-enterprise">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-72 sm:h-96 lg:h-[420px] bg-slate-100">
            <img
              src={cs.image}
              alt={cs.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C83B43]" />
              <span>
                ConfigUSA Verified Delivery Case • {cs.category} • {cs.sector}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. The 4-Pillar Summary Cards                                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E]">
                EXECUTION OVERVIEW
              </span>
              <span className="w-8 h-[2px] bg-[#C83B43]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] tracking-tight">
              Four-Phase Delivery Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Context */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#102B4E] uppercase">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[#102B4E] text-[10px]">
                  1
                </span>
                <span>Client Context</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cs.context}
              </p>
            </div>

            {/* 2. Challenge */}
            <div className="rounded-2xl border border-red-100 bg-red-50/20 p-5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#C83B43] uppercase">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[#C83B43] text-[10px]">
                  2
                </span>
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cs.challenge}
              </p>
            </div>

            {/* 3. Approach */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/20 p-5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#245B91] uppercase">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#245B91] text-[10px]">
                  3
                </span>
                <span>ConfigUSA Approach</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cs.response}
              </p>
            </div>

            {/* 4. Execution */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-700 uppercase">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-700 text-[10px]">
                  4
                </span>
                <span>Execution & Delivery</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cs.execution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. In-Depth Narrative & Verified Outcomes Grid                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Detailed Sections */}
            <div className="lg:col-span-8 space-y-10">
              {cs.detailedSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-slate-700 leading-relaxed text-sm sm:text-base"
                    >
                      {p}
                    </p>
                  ))}

                  {section.callout && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/40 border-l-4 border-[#245B91] text-xs sm:text-sm font-medium text-[#102B4E] italic">
                      "{section.callout}"
                    </div>
                  )}

                  {section.bullets && section.bullets.length > 0 && (
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2.5">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E]">
                        Key Implementation Milestones
                      </div>
                      <ul className="space-y-2">
                        {section.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] shrink-0 mt-2" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right 4 Cols: Verified Outcomes & Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Outcomes Box */}
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/30 p-6 sm:p-7 space-y-4 sticky top-28 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Verified Client Outcomes</span>
                </div>
                <h3 className="text-lg font-extrabold text-[#102B4E]">
                  Measurable Business Impact
                </h3>
                <ul className="space-y-3">
                  {cs.outcomes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-emerald-200/80 space-y-2">
                  <Link
                    to={cs.relatedLink.to}
                    className="btn-cta-primary w-full text-center text-xs font-bold py-2.5 rounded-lg shadow-xs inline-flex items-center justify-center gap-2"
                  >
                    <span>{cs.relatedLink.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    hash="enquiry-form"
                    className="w-full text-center text-xs font-bold py-2 text-[#102B4E] hover:text-[#245B91] transition-colors block"
                  >
                    Discuss Similar Requirement →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. Other Verified Case Studies (Cross-Navigation)                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-enterprise">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E]">
                  MORE EVIDENCE OF EXECUTION
                </span>
                <span className="w-8 h-[2px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight">
                Explore Other Case Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="text-xs sm:text-sm font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors"
            >
              All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCaseStudies.map((item) => (
              <Link
                key={item.id}
                to="/case-studies/$slug"
                params={{ slug: item.id }}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#102B4E]/90 text-white backdrop-blur-xs shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.sector}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#102B4E] group-hover:text-[#245B91] transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C83B43] group-hover:text-[#245B91] transition-colors">
                    <span>Read case study</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. Bottom CTA Strip                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-enterprise">
          <div className="rounded-3xl bg-gradient-to-r from-[#102B4E] to-[#1d4577] text-white p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-extrabold tracking-wider uppercase text-blue-200">
                PARTNER WITH CONFIGUSA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Scale your next initiative with proven engineering pods.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Connect with our technical practice leaders to discuss specialized talent, managed delivery, and dedicated squads.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/contact"
                hash="enquiry-form"
                className="btn-cta-primary text-sm font-bold shadow-md"
              >
                Discuss a Requirement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="btn-cta-secondary text-sm font-semibold text-white border-white/20 hover:bg-white/10"
              >
                All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
