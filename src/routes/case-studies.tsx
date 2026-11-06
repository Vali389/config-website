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
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import caseStudiesHeroBg from "@/assets/case-studies-bg.jpg";
import caseStudyTeam from "@/assets/case_study_team.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";
import erpImplementationImg from "@/assets/erp_implementation_img.png";
import wdAi from "@/assets/wd-ai.jpg";

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
    title: "Client Challenge",
    desc: "Enterprise scale, technical context, critical capability gaps and operational constraints.",
  },
  {
    step: "02",
    icon: Rocket,
    title: "ConfigUSA Approach",
    desc: "The proposed strategy, talent pod architecture and dedicated delivery model.",
  },
  {
    step: "03",
    icon: Target,
    title: "Execution",
    desc: "Phased deployment, technical governance, CI/CD integration and milestone adherence.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Verified Outcomes",
    desc: "Measurable metrics, acceleration rates, SLA compliance and ongoing operational impact.",
  },
];

// Verified Case Studies conforming to Blueprint Section 12 categories & Client Review Requirements
const VERIFIED_CASE_STUDIES = [
  {
    id: "specialist-workforce-mobilisation",
    category: "Specialist Workforce Mobilisation",
    metric: "40 Engineers in 6 Weeks • 30% Faster Delivery",
    image: caseStudyTeam,
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
    metric: "75+ Specialists Onboarded • 94% Retention",
    image: gccEnterpriseHub,
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
    metric: "Zero Downtime • 45% Backlog Mitigation",
    image: erpImplementationImg,
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
    metric: "70% Cycle Reduction • 99.2% Accuracy",
    image: wdAi,
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={caseStudiesHeroBg}
            alt="ConfigUSA Case Studies"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
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
            {CASE_STUDY_STRUCTURE.map((item, idx) => (
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
            ))}
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
                  {/* Top Split: Left Attractive Image + Right Executive Context */}
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* Left: Supporting High-Res Image */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs h-56 sm:h-64 bg-slate-100">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    </div>

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
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight group-hover:text-[#245B91] transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cs.context}
                      </p>
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

                    {/* 3. Execution */}
                    <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-4 sm:p-5 space-y-2 hover:bg-white hover:border-[#102B4E] hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-700 uppercase">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-700 text-[10px]">
                          3
                        </span>
                        <span>Execution</span>
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
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cs.outcomes[0]} with sustained operational continuity and verified SLA delivery.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Bar: Verified Outcomes & Impact */}
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#C83B43]">
                      <CheckCircle2 className="h-4 w-4 text-[#C83B43]" />
                      <span>Verified Outcomes & Impact</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-[12.5px] font-semibold text-[#102B4E]">
                      {cs.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Confidentiality & Briefings (Split 2-Col with Photo)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
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
                    Where client permission is not available, identifying details are removed to protect confidentiality. Connect with our leadership team to request approved, in-depth case study briefings relevant to your industry.
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
                    alt="ConfigUSA Engagement Delivery Team"
                    className="w-full h-80 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Discuss a similar delivery requirement?
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Let us know what your organisation is looking to achieve, and we will outline how we can support.
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
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
