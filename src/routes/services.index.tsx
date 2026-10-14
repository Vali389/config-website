import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Cloud,
  Boxes,
  Users,
  LifeBuoy,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Globe2,
  Database,
  Bot,
  Zap,
  BarChart3,
  Layers,
} from "lucide-react";
import wdAi from "@/assets/wd-ai.jpg";
import wdEngineering from "@/assets/wd-engineering.jpg";
import wdCloud from "@/assets/wd-cloud.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import wdManaged from "@/assets/wd-managed.jpg";
import ctaHome from "@/assets/cta-home.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Enterprise Technology Capabilities & AI Solutions | ConfigUSA" },
      {
        name: "description",
        content:
          "Explore ConfigUSA's complete portfolio: AI & Data, Digital Engineering, Cloud & Infrastructure, Enterprise Applications, Workforce Solutions, and Managed Delivery.",
      },
      { property: "og:title", content: "ConfigUSA Enterprise Capabilities" },
      {
        property: "og:description",
        content:
          "Comprehensive technology solutions and specialized workforce delivery under one trusted partner.",
      },
    ],
  }),
  component: ServicesIndexPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const CAPABILITIES_METRICS = [
  { value: "500+", label: "Enterprise Projects Shipped" },
  { value: "10K+", label: "Vetted Technologists Network" },
  { value: "99.99%", label: "Cloud & Reliability SLA" },
  { value: "15+ Yrs", label: "Trusted Delivery Track Record" },
];

const ALL_CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Solutions",
    subtitle: "Generative AI & Automation",
    description:
      "Helping organizations adopt Generative AI, intelligent automation, agentic workflows, and predictive data solutions.",
    to: "/services",
    tags: ["GenAI & LLMs", "Intelligent Automation", "Predictive Analytics"],
  },
  {
    icon: Code2,
    title: "Digital Engineering",
    subtitle: "Modern Apps & Platforms",
    description:
      "Building modern web and mobile applications, scalable cloud-native architectures, robust APIs, and digital platforms.",
    to: "/services/software",
    tags: ["React & Next.js", "Microservices", "iOS & Android"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    subtitle: "Migration, DevOps & SRE",
    description:
      "Accelerating multi-cloud migrations, automated CI/CD DevOps pipelines, container orchestration, and 24/7 SRE reliability.",
    to: "/services/cloud",
    tags: ["AWS • Azure • GCP", "Kubernetes", "DevOps & FinOps"],
  },
  {
    icon: Boxes,
    title: "Enterprise Applications",
    subtitle: "ERP, CRM & Business Platforms",
    description:
      "Implementing, integrating, and modernizing mission-critical platforms across SAP, Oracle, Microsoft Dynamics, and Salesforce.",
    to: "/services/enterprise-applications",
    tags: ["SAP S/4HANA", "Salesforce", "Microsoft Dynamics 365"],
  },
  {
    icon: Users,
    title: "Technology Workforce Solutions",
    subtitle: "Contract & Strategic Staffing",
    description:
      "Deploying high-caliber technical professionals for contract, contract-to-hire, and strategic engineering pod scaling.",
    to: "/services/staffing",
    tags: ["Top 3% Vetted", "48h Deployment", "Direct & Contract"],
  },
  {
    icon: LifeBuoy,
    title: "Managed Delivery Services",
    subtitle: "Dedicated Engineering Pods",
    description:
      "Outcome-driven engineering squads that own end-to-end delivery milestones, transparent SLAs, and governance accountability.",
    to: "/services/managed-delivery",
    tags: ["Dedicated Squads", "SLA-Backed", "Onshore/Offshore Blend"],
  },
];

const AI_OFFERINGS = [
  {
    icon: Bot,
    title: "Generative AI & Agentic Workflows",
    desc: "Autonomous AI agents, customer copilots, and LLM-powered internal tools engineered with enterprise security guardrails.",
  },
  {
    icon: Database,
    title: "Enterprise Data Foundations & RAG",
    desc: "Transform unstructured corporate data into real-time vectorized knowledge bases with retrieval-augmented generation.",
  },
  {
    icon: Zap,
    title: "Intelligent Process Automation",
    desc: "Automate complex document extraction, invoice reconciliation, and operational workflows with cognitive AI models.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & Forecasting",
    desc: "Custom machine learning models predicting customer churn, inventory demand, and financial risk with high statistical confidence.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Contract & Project Staffing",
    desc: "Specialized senior talent deployed within 48 hours for agile burst capacity and skill gaps.",
  },
  {
    title: "Dedicated Engineering Pods",
    desc: "Turnkey, self-governing squads with lead architects and Scrum masters owning delivery velocity.",
  },
  {
    title: "Outcome-Based Project Delivery",
    desc: "Fixed-milestone or phased statements of work tied directly to verified software milestones.",
  },
  {
    title: "Managed SLA Operations",
    desc: "Continuous tier-2/3 application management, continuous DevOps enhancements, and 24/7 reliability.",
  },
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────────── HERO SECTION ────────────────────────── */}
      <section className="relative min-h-[64vh] flex items-center overflow-hidden pt-28 pb-16 bg-[#071326]">
        {/* Background Photography with Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={wdAi}
            alt="AI & Digital Capabilities"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/90 via-55% to-[#071326]/40 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071326] via-[#071326]/70 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="max-w-3xl">
            {/* Amber Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] text-xs font-bold uppercase tracking-wider mb-4"
            >
              <BrainCircuit className="h-3.5 w-3.5" />
              <span>AI & Enterprise Capabilities</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Technology, AI & Workforce{" "}
              <span className="text-[#f5a623]">Built for Scale.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              From Generative AI and digital engineering to multi-cloud platforms, ERP modernization, and premier technical workforce solutions — explore ConfigUSA's comprehensive capability portfolio.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
              >
                Talk to an Expert <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#all-capabilities"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Explore All Capabilities <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-7 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {CAPABILITIES_METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-[13px] text-slate-400 font-medium mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────── FEATURED: AI & DATA SOLUTIONS ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              FEATURED PRACTICE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              AI & Intelligent Data Solutions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Empowering enterprise leaders to safely adopt Generative AI, cognitive automation, and predictive data operating models with measurable ROI.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AI_OFFERINGS.map((ai, idx) => (
              <motion.div
                key={ai.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors mb-4">
                  <ai.icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-[#071326] mb-2">
                  {ai.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {ai.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── ALL 6 CAPABILITIES (WHITE CARDS) ────────────────────────── */}
      <section id="all-capabilities" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                OUR COMPLETE PORTFOLIO
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                Six Pillars of Enterprise Technology Excellence
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
                Click into any capability below to explore specialized methodologies, technologies, and delivery frameworks.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
            >
              Talk to an Advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6 Capabilities Cards in 3x2 Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={c.to as any}
                  className="group flex flex-col justify-between h-full bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                        <c.icon className="h-6 w-6 stroke-[1.75]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-[17px] text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                          {c.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {c.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {c.description}
                    </p>

                    {/* Tag Chips */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-800">
                    <span>Explore Capability Detail</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── ENGAGEMENT MODELS (NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              FLEXIBLE DELIVERY
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Engagement Models Aligned to Your Objectives
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              Whether you need agile staff augmentation, dedicated engineering squads, or outcome-backed project milestones.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5a623]/15 text-[#f5a623] mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {model.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  {model.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── CTA BANNER ────────────────────────── */}
      <section className="relative py-20 bg-[#071326] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaHome}
            alt="ConfigUSA Capabilities"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/95 to-[#071326]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-3">
            ELEVATE YOUR TECHNOLOGY ROADMAP
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build Your Next Capability?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our executive solutions team to align on your business goals, required technology competencies, and delivery timeline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors"
            >
              Consult with Our Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/request-talent"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Request Specialized Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
