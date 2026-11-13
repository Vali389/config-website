import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Zap,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
  ShieldCheck,
  Clock,
  Target,
  Scale,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import engagementModelsHeroBg from "@/assets/Engagement Models-bg.png";
import whoWeAreMeeting from "@/assets/who_we_are_meeting.jpg";

export const Route = createFileRoute("/engagement-models")({
  head: () => ({
    meta: [
      {
        title: "Engagement Models — Flexible Workforce & Delivery Structures | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Explore ConfigUSA's flexible engagement models: contract staffing, permanent recruitment, dedicated engineering pods, managed delivery, and custom hybrid models aligned to your business outcomes.",
      },
      {
        property: "og:title",
        content: "Engagement Models — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "From targeted specialist talent to fully managed delivery teams, choose the engagement model that fits your operational goals, technical scope, and timeline.",
      },
    ],
  }),
  component: EngagementModelsPage,
});

// 5 Core Engagement Approaches (Consolidated from Gold & Ashen)
const ENGAGEMENT_APPROACHES = [
  {
    step: "01",
    icon: Users,
    title: "Contract Staffing",
    tag: "Agile Scale & Specialist Talent",
    desc: "Rapid deployment of vetted technical specialists for defined project durations. Scale engineering capacity up or down as roadmap milestones and project demands shift.",
    benefits: [
      "Immediate access to niche technology skills",
      "Flexible commercial terms with zero long-term liability",
      "Comprehensive onboarding compliance & credentialing",
      "Seamless integration into client sprint rhythms",
    ],
    idealFor: "Urgent project deadlines, specialized skill gaps, and fluctuating pipeline demands.",
  },
  {
    step: "02",
    icon: Zap,
    title: "Contract-to-Hire",
    tag: "Risk-Managed Evaluation",
    desc: "Evaluate technical capability, cultural alignment, and delivery velocity directly on live client assignments before committing to permanent employment.",
    benefits: [
      "De-risked hiring through real-world work evaluation",
      "Smooth conversion protocols with transparent buyout terms",
      "Continuous support during the initial evaluation window",
      "High retention rates post permanent transition",
    ],
    idealFor: "Critical roles where team chemistry and architecture alignment are essential.",
  },
  {
    step: "03",
    icon: Award,
    title: "Permanent Hiring (Direct Placement)",
    tag: "Long-Term Capability Building",
    desc: "Targeted executive and technical recruiting for permanent technology leadership, lead architects, and specialized individual contributors.",
    benefits: [
      "Rigorous practitioner-led technical vetting",
      "Deep talent intelligence across US, Canada and India",
      "Comprehensive candidate screening and reference checks",
      "Candidate replacement guarantee within trial window",
    ],
    idealFor: "Core organizational leadership, foundational architecture roles, and internal tech custodians.",
  },
  {
    step: "04",
    icon: Target,
    title: "Dedicated Teams (Engineering Pods)",
    tag: "Roadmap Ownership",
    desc: "Cohesive, multi-disciplinary engineering pods embedded directly within client workflows, focused on accelerating strategic product or platform initiatives.",
    benefits: [
      "Pre-assembled, synergistic squads with lead architects",
      "Dedicated focus aligned to client product backlog",
      "Full transparency through shared sprint ceremonies & CI/CD",
      "Cross-border capability spanning onshore and offshore",
    ],
    idealFor: "Product modernization, new platform engineering, and enterprise cloud migrations.",
  },
  {
    step: "05",
    icon: Layers,
    title: "Managed Delivery",
    tag: "End-to-End Outcome Ownership",
    desc: "Full delivery accountability backed by formal Service Level Agreements (SLAs), measurable KPIs, and executive governance across complex technology initiatives.",
    benefits: [
      "Clear delivery ownership and milestone commitments",
      "Executive governance and bi-weekly progress steering",
      "Predictable commercial structures tied to verified outcomes",
      "Structured documentation and knowledge transfer protocols",
    ],
    idealFor: "Enterprise application implementations, ERP cutovers, and mission-critical system overhauls.",
  },
];

// Decision Matrix / Evaluation Criteria
const SELECTION_CRITERIA = [
  {
    title: "Technical Control vs. Outcome Accountability",
    desc: "Choose contract staffing or dedicated pods when you retain architectural control; choose managed delivery when you require end-to-end outcome accountability.",
  },
  {
    title: "Duration & Scope Certainty",
    desc: "For fixed scopes with clear definitions, managed delivery provides budget certainty. For evolving product roadmaps, contract staffing and dedicated pods provide agility.",
  },
  {
    title: "Cross-Border Optimization",
    desc: "Blend onshore leadership for direct stakeholder coordination with offshore engineering pods in India for 24/7 momentum and economic leverage.",
  },
  {
    title: "Compliance & Security Governance",
    desc: "Every model adheres to enterprise IP protection, data security controls, background verification, and non-disclosure governance.",
  },
];

// Governance Pillars
const GOVERNANCE_PILLARS = [
  "Agreed service levels and clear milestone acceptance criteria",
  "Dedicated client success executive and technical delivery lead",
  "Bi-weekly sprint demos and executive steering reviews",
  "Transparent timesheet telemetry and cost accounting",
  "Zero-friction transition protocols for internal handover",
];

function EngagementModelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={engagementModelsHeroBg}
            alt="Engagement Models"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/85 via-[#102B4E]/60 to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                ENGAGEMENT MODELS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Flexible Ways to Work With Us. Aligned to Your Outcomes.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              From targeted technology specialists to fully managed delivery teams, choose the engagement model that fits your operational goals, technical scope, and timeline.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss an Engagement Model <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#models"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore Models <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: 5 Core Engagement Approaches                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="models" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    DELIVERY & WORKFORCE MODELS
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Commercial and delivery frameworks built around enterprise reality.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
                Every business initiative has distinct constraints around timeline, budget, technical complexity, and internal oversight. We offer five structured models to match your requirements.
              </div>
            </div>
          </FadeUp>

          <div className="space-y-6">
            {ENGAGEMENT_APPROACHES.map((model, idx) => (
              <FadeUp key={model.title} delay={idx * 0.08}>
                <div className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left: Icon, Step, Title & Description */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#C83B43] border border-red-100/70 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                          <model.icon className="h-6 w-6 stroke-[1.75]" />
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#245B91]/10 group-hover:text-[#245B91] transition-colors">
                          Model {model.step}
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-wider text-[#245B91] mb-1">
                          {model.tag}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] tracking-tight group-hover:text-[#245B91] transition-colors">
                          {model.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {model.desc}
                      </p>

                      <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-3.5 text-xs text-slate-600">
                        <strong className="text-[#102B4E] font-bold block mb-1">Ideal For:</strong>
                        {model.idealFor}
                      </div>
                    </div>

                    {/* Right: Key Benefits / Delivery Inclusions */}
                    <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E] mb-4 flex items-center gap-2">
                          <Sparkles className="h-3.5 w-3.5 text-[#C83B43]" />
                          <span>Delivery Inclusions & Operational Strengths</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {model.benefits.map((b) => (
                            <div key={b} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-[#245B91] shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-700 font-medium leading-relaxed">
                                {b}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">
                          Available onshore, offshore, or blended.
                        </span>
                        <Link
                          to="/contact"
                          className="btn-cta-primary text-xs font-bold px-4 py-2 rounded-md shadow-xs inline-flex items-center gap-1.5"
                        >
                          Select Model <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
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
      {/* 3. Section: How to Choose & Selection Criteria                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  HOW TO CHOOSE
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Selecting the right model for your operational reality.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SELECTION_CRITERIA.map((criterion, idx) => (
              <FadeUp key={criterion.title} delay={idx * 0.08}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 font-bold text-xs mb-4">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                      {criterion.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {criterion.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Governance & Cross-Border Coordination                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                      DELIVERY GOVERNANCE
                    </span>
                    <span className="w-10 h-[3px] bg-[#C83B43]" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                    Rigorous governance across every engagement tier.
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Regardless of whether you engage a single specialized engineer or a full managed delivery pod, ConfigUSA enforces strict delivery discipline, continuous communication, and verified accountability.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {GOVERNANCE_PILLARS.map((point) => (
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
                    src={whoWeAreMeeting}
                    alt="ConfigUSA Engagement Governance"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#102B4E]/90 text-white p-3 rounded-xl backdrop-blur-xs text-xs">
                    <div className="flex items-center gap-2 font-bold mb-0.5">
                      <ShieldCheck className="h-4 w-4 text-[#C83B43]" />
                      <span>Zero-Compromise Security & IP Protection</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Strict NDA protocols, secure code isolation, and SOC-ready compliance across all delivery pods.
                    </p>
                  </div>
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
                  Need help identifying the right engagement model?
                </h2>
              </div>
              <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Our solutions team will evaluate your scope, timelines, and technical requirements to recommend the optimal commercial and delivery model.
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <Link
                  to="/contact"
                  className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
                >
                  Schedule a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
