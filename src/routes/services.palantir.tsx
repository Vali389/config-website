import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Database,
  BrainCircuit,
  Boxes,
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
  GitBranch,
  Terminal,
  Activity,
  Network,
} from "lucide-react";
import palantirFoundryAipHero from "@/assets/palantir-foundry-aip-hero.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import ctaServicesBg from "@/assets/cta-services-bg.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services/palantir")({
  head: () => ({
    meta: [
      {
        title:
          "Palantir Engineering & Implementation Services | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Turn enterprise data into operational intelligence. ConfigUSA delivers Palantir Foundry and AIP engineering, ontology modeling, PySpark data pipelines, operational applications, and specialized talent solutions.",
      },
      {
        property: "og:title",
        content: "Palantir Services — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Foundry and AIP engineering, enterprise data integration, AI-enabled applications, and specialist talent.",
      },
    ],
  }),
  component: PalantirServicesPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const PALANTIR_PILLARS = [
  {
    icon: Database,
    title: "Palantir Foundry Engineering",
    tagline: "Data Pipelines & Enterprise Ontology",
    description:
      "Design, build, and optimize robust data pipelines and ontology-oriented applications that transform complex enterprise data into clean, connected assets.",
    features: [
      "Data pipeline development and transformation",
      "Data integration and ontology-oriented application development",
      "Python and PySpark engineering",
      "SQL-based data preparation and analysis",
      "Data quality, validation, and pipeline optimization",
      "Operational application development using Foundry capabilities",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Palantir AIP & AI Integration",
    tagline: "Agentic Enterprise Workflows",
    description:
      "Unlock generative AI and agentic capabilities within the safe, ontology-grounded guardrails of Palantir Artificial Intelligence Platform (AIP).",
    features: [
      "AI-enabled enterprise workflows",
      "LLM integration with enterprise data and applications",
      "AI-assisted operational decision-making",
      "Agentic workflow design and implementation",
      "Integration of AI capabilities with enterprise systems",
      "Testing, evaluation, and operational monitoring of AI applications",
    ],
  },
  {
    icon: Boxes,
    title: "Palantir Application Development",
    tagline: "Operational Decision-Support Tools",
    description:
      "Develop custom front-end operational applications, executive cockpits, and workflow automation solutions directly on the Foundry platform.",
    features: [
      "Operational dashboards and Workshop applications",
      "End-to-end workflow automation",
      "Real-time decision-support solutions",
      "Enterprise data-driven applications",
      "Seamless integration with existing business systems",
    ],
  },
  {
    icon: Users,
    title: "Palantir Talent & Team Solutions",
    tagline: "Vetted Specialists on Demand",
    description:
      "Rapidly access rigorously vetted Palantir-experienced professionals, architects, and data engineers to augment your onshore or global squads.",
    features: [
      "Palantir Foundry Engineers",
      "Palantir AIP Engineers",
      "Foundry Solution Architects",
      "PySpark and Python Engineers",
      "Data Engineers and Analytics Specialists",
      "AI Engineers and AI Integration Specialists",
    ],
  },
];

const DELIVERY_MODELS = [
  {
    title: "Specialist Resource Augmentation",
    subtitle: "Staff Augmentation",
    description:
      "Deploy individual certified Palantir Foundry and AIP engineers, PySpark developers, or architects directly into your in-house teams.",
    points: ["Rapid placement in < 2 weeks", "Vetted technical & domain fluency", "Flexible onshore or offshore"],
  },
  {
    title: "Dedicated Palantir Engineering Teams",
    subtitle: "Turnkey Squad Delivery",
    description:
      "Complete cross-functional delivery pods with Lead Architects, Data Engineers, and AIP specialists who manage end-to-end platform initiatives.",
    points: ["Autonomous sprint management", "SLA-backed outcome delivery", "Transparent velocity reporting"],
  },
  {
    title: "Project-Based Implementation Support",
    subtitle: "Milestone-Driven SOW",
    description:
      "Targeted engagements to build specific ontology models, migrate legacy pipelines to Foundry, or implement an AIP agentic workflow.",
    points: ["Fixed scope & milestone delivery", "De-risked architectural roadmaps", "Comprehensive operational handover"],
  },
  {
    title: "Offshore Engineering & Delivery Support",
    subtitle: "24/7 Cost-Efficient Scale",
    description:
      "Round-the-clock data pipeline monitoring, transformation maintenance, and platform support from our state-of-the-art Hyderabad tech hub.",
    points: ["Continuous 24/7 coverage", "Substantial operational savings", "Strict enterprise security standards"],
  },
  {
    title: "Hybrid Onsite & Offshore Delivery",
    subtitle: "Executive Proximity + Global Scale",
    description:
      "Onshore client partnership in North America paired with offshore engineering depth for maximum speed, quality, and cost efficiency.",
    points: ["Local leadership in US & Canada", "Global engineering engine in India", "Seamless timezone handover"],
  },
];

function PalantirServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities / Palantir Services"
        title={
          <>
            Palantir Engineering & <br />
            <span className="text-[#f5a623] font-extrabold">
              Implementation Services.
            </span>
          </>
        }
        subtitle="Turn enterprise data into operational intelligence. ConfigUSA supports organizations seeking to unlock the value of enterprise data through Palantir-focused engineering, implementation, and talent solutions across Palantir Foundry and Palantir AIP platforms."
        image={palantirFoundryAipHero}
      >
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Discuss Your Palantir Requirements <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services/forward-deployed-engineering"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Explore FDE Approach
          </Link>
        </div>
      </PageHero>

      <div className="pb-12">
        <StatsBar />
      </div>

      {/* Strategic Overview */}
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
                  Enterprise Data Modernization
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] leading-tight tracking-tight">
                  Connect Data, Build Applications, Translate Insights into Action.
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Enterprises running complex global operations often struggle with siloed systems,
                inconsistent data semantics, and disjointed decision-making. Palantir Foundry and
                Palantir AIP represent market-defining platforms designed to solve this by creating
                a unified ontology of enterprise operations.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                ConfigUSA brings together deep data engineering, ontology modeling, PySpark
                transformations, and LLM orchestration to help organizations unlock the full power
                of Palantir platforms. From embedding certified specialists to delivering end-to-end
                decision-support solutions, we accelerate your time-to-value.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-extrabold text-[#071326]">Foundry</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Ontology, PySpark pipelines & Workshop apps
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                  <div className="text-xl font-extrabold text-[#b26a00]">AIP</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Grounded LLMs & Agentic workflow automation
                  </div>
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
                  src={wdEnterprise}
                  alt="Palantir platform implementation and data architecture"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/85 via-[#071326]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#071326]/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    <ShieldCheck className="h-4 w-4" /> Enterprise Readiness
                  </div>
                  <p className="mt-1 text-sm font-semibold leading-snug">
                    "Supporting teams working with Palantir Foundry and Palantir AIP platforms with technical depth and operational rigor."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Core Palantir Capabilities */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Palantir Capabilities"
            title="Comprehensive Services Across Foundry, AIP & Talent"
            subtitle="We cover every stage of your Palantir journey — from pipeline architecture and ontology development to generative AI integration and staffing."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {PALANTIR_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-300">
                      <pillar.icon className="h-6 w-6 stroke-[1.75]" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e89218] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Capability 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326] group-hover:text-blue-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {pillar.tagline}
                  </p>

                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What We Deliver:
                  </p>
                  {pillar.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Delivery Models */}
      <section className="py-24 bg-[#071326] text-white relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Flexible Delivery Models
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white leading-tight tracking-tight">
                Engage On Your Terms — From Individual Specialists to Full Squads
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide agile, scalable engagement options designed to fit your procurement standards, timeline requirements, and project scope.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_MODELS.map((model, i) => (
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
                <div className="mt-6 pt-4 border-t border-white/10 space-y-1.5">
                  {model.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#f5a623] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-md"
            >
              Discuss Your Palantir Requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection image={ctaServicesBg} />
    </>
  );
}
