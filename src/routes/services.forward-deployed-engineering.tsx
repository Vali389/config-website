import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BrainCircuit,
  Search,
  Database,
  Rocket,
  Boxes,
  Activity,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Layers,
  Sparkles,
  BarChart3,
  TrendingUp,
  Cpu,
  Clock,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import fdeSquadCommand from "@/assets/fde-squad-command.jpg";
import wdEngineering from "@/assets/wd-engineering.jpg";
import ctaServicesBg from "@/assets/cta-services-bg.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services/forward-deployed-engineering")({
  head: () => ({
    meta: [
      {
        title:
          "Forward Deployed Engineering (FDE) Services | ConfigUSA",
      },
      {
        name: "description",
        content:
          "From business challenges to production-ready solutions. ConfigUSA embeds elite Forward Deployed Engineers directly with your operational teams to turn enterprise AI and complex data into measurable business value.",
      },
      {
        property: "og:title",
        content: "Forward Deployed Engineering — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Bringing engineering expertise directly to business problems to design, build, integrate, and deploy production-grade AI and enterprise solutions.",
      },
    ],
  }),
  component: ForwardDeployedEngineeringPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const FDE_METRICS = [
  { value: "4x", label: "Faster Prototype-to-Production" },
  { value: "100%", label: "Operational Workflow Integration" },
  { value: "98%", label: "Client Outcome Retention" },
  { value: "24/7", label: "Global Hybrid Pod Availability" },
];

const CAPABILITIES = [
  {
    icon: Search,
    title: "Business Problem Discovery",
    tagline: "Problem Definition & Requirements",
    description:
      "We work directly with business units, operational teams, and executive stakeholders to uncover bottlenecks, identify high-value opportunities, and specify technical requirements anchored in real business KPIs.",
    deliverables: [
      "Operational workflow mapping",
      "KPI & ROI outcome benchmarks",
      "Architectural feasibility studies",
      "Prioritized use case roadmaps",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI and Agentic Engineering",
    tagline: "Production-Grade Intelligence",
    description:
      "Develop custom AI-powered applications, multi-agent collaborative workflows, intelligent automation pipelines, and task-specific LLM solutions that function safely within regulated enterprise environments.",
    deliverables: [
      "Autonomous agent workflow design",
      "Retrieval-Augmented Generation (RAG)",
      "Guardrails, eval metrics & safety controls",
      "Model fine-tuning & orchestration",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering and Integration",
    tagline: "Unified Enterprise Pipelines",
    description:
      "Connect fragmented enterprise data sources, transactional databases, legacy systems, cloud warehouses, and third-party APIs into clean, continuous, low-latency data pipelines.",
    deliverables: [
      "Real-time ETL/ELT data pipelines",
      "API gateway & microservice integration",
      "Data quality validation & ontology modeling",
      "Legacy system modernization bridges",
    ],
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping and Deployment",
    tagline: "Accelerated Time-to-Value",
    description:
      "Move from concept validation to working software within weeks. We build iterative, functional prototypes directly inside your target cloud and infrastructure, validating assumptions before full scale.",
    deliverables: [
      "Sprint-based interactive prototypes",
      "User feedback testing loops",
      "Production cloud staging setups",
      "Iterative capability releases",
    ],
  },
  {
    icon: Boxes,
    title: "Enterprise Application Engineering",
    tagline: "Mission-Critical Systems",
    description:
      "Engineer bespoke web applications, operational decision-support dashboards, and workflow automation tools that seamlessly integrate into SAP, Oracle, Salesforce, and proprietary software stacks.",
    deliverables: [
      "Full-stack web & portal engineering",
      "ERP / CRM custom integrations",
      "Role-based security & compliance tooling",
      "Automated human-in-the-loop workflows",
    ],
  },
  {
    icon: Activity,
    title: "Productionization and Optimization",
    tagline: "Reliability, Scale & Performance",
    description:
      "Harden prototypes for enterprise production with comprehensive automated testing, CI/CD pipelines, container orchestration, latency optimization, observability, and continuous model monitoring.",
    deliverables: [
      "CI/CD and GitOps automated pipelines",
      "Telemetry, logging & APM dashboards",
      "Performance, concurrency & stress testing",
      "Ongoing drift detection & model tuning",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Embedded Forward Deployed Engineers",
    subtitle: "Direct Team Augmentation",
    description:
      "Senior FDEs embed directly inside your business and engineering squads, pairing domain fluency with deep technical execution to ship mission-critical initiatives.",
    bestFor: "Organizations with active projects needing specialized AI and integration firepower.",
  },
  {
    title: "Dedicated FDE Teams",
    subtitle: "Autonomous Cross-Functional Delivery",
    description:
      "Self-contained squads comprising Lead FDEs, data engineers, full-stack developers, and cloud architects who take full ownership of designing, building, and deploying the solution.",
    bestFor: "Strategic transformation programs requiring dedicated end-to-end velocity and accountability.",
  },
  {
    title: "AI and Data Engineering Pods",
    subtitle: "Specialized Intelligence Squads",
    description:
      "Specialized teams focused exclusively on data integration, ontology modeling, LLM orchestration, agent workflows, and operational intelligence pipelines.",
    bestFor: "Enterprises advancing from experimental generative AI to production-grade deployment.",
  },
  {
    title: "Prototype-to-Production Delivery",
    subtitle: "Fast-Track Innovation SOW",
    description:
      "Time-boxed engagements designed to validate a high-priority business hypothesis with a working prototype in 4–6 weeks, followed by full enterprise hardening.",
    bestFor: "Executive initiatives needing rapid proof-of-value and clear ROI justification.",
  },
  {
    title: "Enterprise Solution Implementation",
    subtitle: "Comprehensive Platform Transformation",
    description:
      "End-to-end implementation and legacy system modernization across multiple departments, with full change management, training, and operational handover.",
    bestFor: "Large-scale modernization across core business units and complex operating environments.",
  },
];

const REAL_WORLD_USE_CASES = [
  {
    sector: "Banking & Financial Services",
    challenge: "Early Loan Default Detection",
    context:
      "Predictive models alone fail when siloed from credit officers. An effective solution requires ingesting real-time transaction signals, ledger entries, and regulatory rules into a decision-support portal.",
    solution:
      "ConfigUSA FDEs engineered an operational risk dashboard embedded in credit workflows, cutting default recognition lag by 45%.",
  },
  {
    sector: "Finance & Cash-Flow Management",
    challenge: "Enterprise Liquidity Forecasting",
    context:
      "Financial data scattered across multiple ERP instances, global bank portals, invoices, and AR ledgers creates blind spots for Treasury leadership.",
    solution:
      "Forward-deployed data pipelines integrated disparate ledgers into an automated cash-position forecast with proactive exception alerts.",
  },
  {
    sector: "Customer Experience & Support",
    challenge: "Accurate Autonomous Agent Workflows",
    context:
      "Language models without strict business rules hallucinate or violate policy. The solution requires enterprise knowledge grounding, escalation logic, and guardrails.",
    solution:
      "FDEs deployed grounded multi-agent assistants that resolve 65% of Tier-1 inquiries with 99.4% accuracy under strict enterprise compliance.",
  },
  {
    sector: "Supply Chain & Manufacturing",
    challenge: "Disruption Anticipation & Inventory Balancing",
    context:
      "Disjointed logistics records delay reaction to vendor bottlenecks. Cross-functional teams need visibility across suppliers, transit, and warehousing.",
    solution:
      "Unified operational telemetry into an intelligent inventory balancing engine, mitigating supply stockouts across 14 distribution centers.",
  },
];

function ForwardDeployedEngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities / Forward Deployed Engineering"
        title={
          <>
            Forward Deployed Engineering. <br />
            <span className="text-[#f5a623] font-extrabold">
              From Business Challenges to Production-Ready Solutions.
            </span>
          </>
        }
        subtitle="ConfigUSA helps enterprises bridge the gap between business strategy and technology execution through Forward Deployed Engineering. Our engineers work alongside your teams, operational workflows, and enterprise data to design, build, integrate, and deploy solutions that deliver measurable business outcomes."
        image={fdeSquadCommand}
      >
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Discuss Your FDE Requirements <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Read Executive Perspective <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <div className="pb-12">
        <StatsBar />
      </div>

      {/* Strategic Overview & Philosophy */}
      <section className="py-24 bg-white border-b border-slate-200/60 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="border-l-[3px] border-[#f5a623] pl-3.5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                  The Missing Link In Enterprise AI
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] leading-tight tracking-tight">
                  Technology Works Best When Built Beside the Business.
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Artificial intelligence is becoming easier to access. Turning it into
                measurable business value remains the real challenge. While organizations
                invest heavily in LLMs, AI agents, and intelligent platforms, the true hurdle
                begins when AI must operate in complex enterprise realities: connecting fragmented
                data, navigating regulatory constraints, and changing how people make decisions.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Forward-deployed engineering represents an approach that brings top engineering
                talent directly to the problem. Rather than building in isolation or handing off
                advisory slide decks, ConfigUSA forward-deployed engineers partner alongside your
                business leaders to define what should be built, prove it with working software, and
                embed it seamlessly into everyday workflows.
              </p>

              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    <Building2 className="h-4 w-4 text-[#f5a623]" /> Traditional Approach
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Siloed specs, theoretical recommendations, and tools disconnected from operating realities.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    <Sparkles className="h-4 w-4 text-blue-600" /> ConfigUSA FDE Model
                  </div>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    Embedded engineers who code, integrate data, and validate outcomes right in your operational environment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src={wdEngineering}
                  alt="ConfigUSA Forward Deployed Engineers collaborating with enterprise leadership"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#071326]/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    Core Principle
                  </div>
                  <p className="mt-1 text-sm font-semibold leading-snug">
                    "The objective is not simply to make technology work. It is to make technology
                    work in the context of a real business problem."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Core FDE Capabilities */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our FDE Capabilities"
            title="End-to-End Execution from Discovery to Production"
            subtitle="We combine software engineering, data infrastructure, AI agent integration, and continuous production support to turn complexity into measurable advantage."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-300">
                      <cap.icon className="h-6 w-6 stroke-[1.75]" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e89218] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Phase 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#071326] group-hover:text-blue-700 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {cap.tagline}
                  </p>

                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables:
                  </p>
                  {cap.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Case Scenarios */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Industry Impact"
            title="Where Forward-Deployed Engineering Drives Value"
            subtitle="Explore how our FDE squads tackle high-stakes operational challenges across leading enterprise domains."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {REAL_WORLD_USE_CASES.map((uc, i) => (
              <motion.div
                key={uc.sector}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-400/80 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-2">
                  <TrendingUp className="h-4 w-4" /> {uc.sector}
                </div>
                <h3 className="text-xl font-bold text-[#071326]">{uc.challenge}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">The Friction: </strong>
                  {uc.context}
                </p>
                <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-blue-950 font-medium">
                  <strong className="text-blue-700">ConfigUSA FDE Delivery: </strong>
                  {uc.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-[#071326] text-white relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Flexible Engagement Models
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white leading-tight tracking-tight">
                Tailored Delivery Aligned with Your Scale & Velocity
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need embedded individual specialists or an autonomous cross-functional engineering pod, our delivery models flex to your organizational structure.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-[#0a182f]/90 border border-white/10 hover:border-[#f5a623]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    {model.subtitle}
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold text-white">{model.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {model.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Ideal for: </span>
                  {model.bestFor}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-md"
            >
              Discuss Your FDE Requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-Link to Featured Thought Leadership */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Recommended Executive Briefing
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#071326] leading-snug">
                The Missing Link Between Artificial Intelligence, Enterprise Transformation, and Measurable Business Outcomes
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Read our in-depth analysis on why organizations struggle to turn accessible AI models into bottom-line impact, and how forward-deployed engineering closes the adoption gap.
              </p>
            </div>
            <Link
              to="/resources"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#071326] px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-900 transition-colors"
            >
              Read Whitepaper <ExternalLink className="h-4 w-4 text-[#f5a623]" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection image={ctaServicesBg} />
    </>
  );
}
