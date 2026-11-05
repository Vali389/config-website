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
import caseStudyTeam from "@/assets/case_study_team.jpg";

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

// Verified Case Studies conforming to Blueprint Section 12 categories & Review Recommendations
const VERIFIED_CASE_STUDIES = [
  {
    id: "specialist-workforce-mobilisation",
    category: "Specialist Workforce Mobilisation",
    title: "Scaling a Technology Programme with Specialised Engineering Talent",
    sector: "Global Enterprise Technology",
    context:
      "A global enterprise technology organisation required rapid engineering scale to accelerate a multi-region cloud modernisation initiative.",
    challenge:
      "Urgent need to mobilise and integrate a 40-member engineering squad across distributed workflows without compromising technical quality, security or architectural consistency.",
    response:
      "ConfigUSA deployed a dedicated talent acquisition pod that screened over 280 technical specialists, qualifying candidates through practitioner-led technical evaluations.",
    execution:
      "Mobilised 40 vetted engineers in three phased cohorts over six weeks with standardized sprint governance, compliance readiness and integration into client CI/CD pipelines.",
    outcomes: [
      "40 engineers mobilised in 6 weeks against an aggressive timeline",
      "30% faster time to delivery compared to initial internal estimates",
      "100% milestone delivery adherence across all scheduled sprints",
      "Zero compliance deviations and sustained multi-year partnership",
    ],
  },
  {
    id: "gcc-establishment-rampup",
    category: "GCC Solutions",
    title: "Building an Enterprise Engineering Hub for a Global Financial Institution",
    sector: "Banking & Financial Services",
    context:
      "A tier-1 financial enterprise establishing a dedicated Global Capability Centre in India to support core banking platforms, risk technology and regulatory analytics.",
    challenge:
      "Intense market competition for specialized quantitative analysts, cloud security professionals and enterprise application developers created critical hiring bottlenecks.",
    response:
      "ConfigUSA designed and executed an end-to-end talent strategy encompassing leadership search, specialized technology recruitment, compensation benchmarking and onboarding governance.",
    execution:
      "Mapped specialized talent pools across Bangalore and Hyderabad, deploying dual-stage technical screening and structured onboarding plans aligned to the client's operating model.",
    outcomes: [
      "75+ specialist professionals onboarded across the initial 9-month ramp-up",
      "94% retention rate after 12 months of active operations",
      "Smooth transition of mission-critical risk and data workflows",
      "Accelerated time-to-productivity with structured handover governance",
    ],
  },
  {
    id: "enterprise-platform-modernization",
    category: "Enterprise Applications",
    title: "Cloud ERP & Enterprise Integration Platform Specialist Deployment",
    sector: "Manufacturing & Industrial Operations",
    context:
      "A multinational manufacturer transitioning legacy supply chain architectures into a modern cloud ERP and unified integration fabric across 14 distribution centers.",
    challenge:
      "Severe internal skill deficits in Workday integration, SAP architecture and MuleSoft API platforms risked costly programme delays and go-live slippage.",
    response:
      "ConfigUSA mobilized dedicated platform specialists including enterprise architects, integration leads and functional consultants on a flexible managed workforce model.",
    execution:
      "Embedded technical squads directly alongside business and IT leaders, conducting bi-weekly delivery reviews, architectural validations and knowledge transfer workshops.",
    outcomes: [
      "Zero operational downtime during cutover and phased rollout windows",
      "Reduced integration backlogs by 45% within the first 90 days",
      "Met all critical milestone deadlines for global ERP transition",
      "Documented architectural patterns for internal team self-sufficiency",
    ],
  },
  {
    id: "ai-intelligent-solutions",
    category: "AI & Intelligent Solutions",
    title: "Document Intelligence and Knowledge Discovery in Healthcare Operations",
    sector: "Healthcare & Life Sciences",
    context:
      "A national healthcare services organisation processing massive volumes of clinical documentation, regulatory filings and administrative claims daily.",
    challenge:
      "Manual document extraction caused multi-day processing queues, elevated administrative overhead and raised compliance risks during surge periods.",
    response:
      "ConfigUSA deployed a specialized forward-deployed AI engineering squad to evaluate high-value automation use cases and construct an enterprise knowledge discovery solution.",
    execution:
      "Built an intelligent document extraction pipeline with strict data security boundaries, role-based access controls and human-in-the-loop validation checkpoints.",
    outcomes: [
      "70% reduction in manual document verification cycle times",
      "99.2% extraction accuracy on verified healthcare test batches",
      "Full regulatory auditability and HIPAA-compliant data handling",
      "Freed administrative staff to focus on complex patient care workflows",
    ],
  },
];

function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
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
                href="#verified-case-studies"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                View Case Studies <ArrowRight className="h-4 w-4" />
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
      {/* 3. Section: Verified Client Case Studies (4-Part Framework)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="verified-case-studies" className="section-padding bg-[#F8FAFC] border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
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
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Representative delivery engagements illustrating our disciplined approach across specialist workforce, GCC setup, enterprise applications and intelligent automation.
            </div>
          </div>

          <div className="space-y-8">
            {VERIFIED_CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:border-[#245B91]/40 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Header: Category Badge, Sector & Title */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#102B4E] text-white">
                      {cs.category}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Sector: <strong className="text-slate-800 font-semibold">{cs.sector}</strong>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#102B4E] tracking-tight mt-4 mb-6">
                  {cs.title}
                </h3>

                {/* 4-Part Delivery Breakdown Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="rounded-xl bg-slate-50/80 p-5 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[#102B4E] text-[10px]">1</span>
                      Client Context
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.context}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 p-5 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83B43] mb-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[#C83B43] text-[10px]">2</span>
                      Business Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 p-5 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#245B91] mb-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#245B91] text-[10px]">3</span>
                      ConfigUSA Approach
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.response}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50/80 p-5 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-800 text-[10px]">4</span>
                      Execution & Delivery
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.execution}
                    </p>
                  </div>
                </div>

                {/* Verified Outcomes Highlight Box */}
                <div className="mt-6 pt-5 border-t border-slate-100 bg-[#EFF2F6]/60 -mx-7 -mb-7 sm:-mx-9 sm:-mb-9 p-6 sm:p-7 rounded-b-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-[#C83B43]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E]">
                      VERIFIED OUTCOMES & IMPACT
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {cs.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                        <span className="text-xs text-slate-700 font-medium leading-snug">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Confidentiality & Briefings (Split 2-Col with Photo)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white border-b border-[#e2e8f0]">
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

              <div className="rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-6 flex items-start gap-4">
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
      {/* 5. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
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
