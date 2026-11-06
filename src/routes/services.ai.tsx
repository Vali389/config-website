import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  FileText,
  MessageSquare,
  TrendingUp,
  Bot,
  ShieldCheck,
  ArrowRight,
  Compass,
  Sliders,
  Layers,
  Rocket,
  LineChart,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import aiHeroBg from "@/assets/AI & Intelligent Solutions-bg.png";

export const Route = createFileRoute("/services/ai")({
  head: () => ({
    meta: [
      { title: "AI & Intelligent Solutions — ConfigUSA" },
      {
        name: "description",
        content:
          "ConfigUSA supports organisations seeking to apply AI, data and intelligent automation to real business challenges. We focus on identifying relevant use cases, assembling the right expertise and helping teams progress from proof of concept towards secure, usable solutions.",
      },
      { property: "og:title", content: "AI & Intelligent Solutions | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Move AI from experimentation to business execution. Knowledge discovery, document processing, intelligent assistants, predictive analytics and agentic workflows.",
      },
    ],
  }),
  component: AISolutionsPage,
});

// Blueprint Section 4: Where AI can create value
const AI_VALUE_AREAS = [
  {
    icon: Search,
    title: "Knowledge discovery and enterprise search",
    desc: "Index and retrieve structured and unstructured institutional data securely, giving teams instant access to verified enterprise knowledge.",
  },
  {
    icon: FileText,
    title: "Document processing and intelligent workflow automation",
    desc: "Automate complex document extraction, validation and operational handoffs across high-volume enterprise business processes.",
  },
  {
    icon: MessageSquare,
    title: "Customer and employee support assistants",
    desc: "Deploy domain-specific conversational assistants that resolve queries accurately with enterprise grounding and access governance.",
  },
  {
    icon: TrendingUp,
    title: "Predictive analytics and decision support",
    desc: "Leverage advanced statistical modeling and machine learning to forecast operational trends and support data-driven decision-making.",
  },
  {
    icon: Bot,
    title: "Agentic workflows with appropriate human oversight",
    desc: "Design multi-step autonomous workflows with deterministic guardrails, verification steps and clear human-in-the-loop review.",
  },
];

// Blueprint Section 4: Our approach (5 steps)
const APPROACH_STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Discover",
    text: "Understand the business process, users, data and desired outcome.",
  },
  {
    step: "02",
    icon: Sliders,
    title: "Prioritise",
    text: "Select use cases based on value, feasibility, risk and readiness.",
  },
  {
    step: "03",
    icon: Layers,
    title: "Design",
    text: "Define architecture, data access, controls and human oversight.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Build and validate",
    text: "Develop, test and evaluate the solution against agreed criteria.",
  },
  {
    step: "05",
    icon: LineChart,
    title: "Deploy and improve",
    text: "Integrate into workflows, monitor performance and refine responsibly.",
  },
];

function AISolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={aiHeroBg}
            alt="AI & Intelligent Solutions"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                AI & INTELLIGENT SOLUTIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Move AI from experimentation to business execution.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              ConfigUSA supports organisations seeking to apply AI, data and intelligent automation to real business challenges. We focus on identifying relevant use cases, assembling the right expertise and helping teams progress from proof of concept towards secure, usable solutions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss an AI Initiative <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#where-ai-creates-value"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Where AI Creates Value <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Where AI can create value (Template Card Grid)          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="where-ai-creates-value" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  PRACTICAL USE CASES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Where artificial intelligence creates tangible enterprise value.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              We focus on practical implementation, secure data access and responsible deployment rather than speculative experimentation.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_VALUE_AREAS.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <item.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Our approach (5-Step Stepper Flow)                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                OUR APPROACH
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              A disciplined, risk-managed progression from concept to deployment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {APPROACH_STEPS.map((s, idx) => (
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
                    {s.text}
                  </p>
                </div>
                {idx < APPROACH_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 h-7 w-7 rounded-full bg-white border border-slate-300 shadow-sm text-[#245B91]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Responsible enterprise AI & Engagement                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-slate-200/90 bg-[#F3F5F8] p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    GOVERNANCE & TRUST
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-3">
                  Responsible enterprise AI
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Solutions should be designed with data protection, access controls, security, model evaluation, auditability and human oversight appropriate to the use case.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#102B4E]">
                <ShieldCheck className="h-4 w-4 text-[#C83B43]" />
                <span>Security, Privacy & Audit Readiness</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-[#F3F5F8] p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    FLEXIBLE ADOPTION
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-3">
                  Engagement
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Start with a focused discovery or proof-of-value engagement, then define the delivery team and scale-up model based on validated outcomes.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] hover:text-[#a82e35]"
                >
                  <span>Request a discovery discussion</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
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
                Ready to put AI to work?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Discuss your use cases, technical environment and delivery roadmap with our team.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss an AI Initiative <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
                  </FadeUp>
        </div>
      </section>
    </div>
  );
}
