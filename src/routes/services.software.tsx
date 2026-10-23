import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Plug,
  BrainCircuit,
  ShieldCheck,
  Search,
  PenTool,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  Terminal,
  Database,
  Zap,
} from "lucide-react";
import wdEngineering from "@/assets/wd-engineering.jpg";
import heroServicesSoftware from "@/assets/hero_services_software.jpg";
import serviceSoftware from "@/assets/service-software.jpg";
import ctaHome from "@/assets/cta-home.jpg";

export const Route = createFileRoute("/services/software")({
  head: () => ({
    meta: [
      { title: "Digital Engineering & Custom Software | ConfigUSA" },
      {
        name: "description",
        content:
          "Custom web, mobile, cloud-native, and AI-powered software engineered to scale your business and delight your users with ConfigUSA.",
      },
      { property: "og:title", content: "Digital Engineering Services" },
      {
        property: "og:description",
        content:
          "Digital engineering that scales your business — from web and mobile to cloud-native platforms.",
      },
    ],
  }),
  component: SoftwareEngineeringPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const ENGINEERING_METRICS = [
  { value: "500+", label: "Projects Shipped" },
  { value: "10+ Yrs", label: "Avg. Engineer Experience" },
  { value: "100%", label: "Agile Sprint Delivery" },
  { value: "24/7", label: "Global Engineering Support" },
];

const ENGINEERING_PILLARS = [
  {
    icon: Globe,
    title: "Modern Web Applications",
    subtitle: "High-Performance Digital Products",
    description:
      "Accessible, responsive, and secure enterprise web applications built on modern React, Next.js, and TypeScript architectures.",
    tags: ["React & Next.js", "TypeScript", "TailwindCSS", "Edge Rendering"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Engineering",
    subtitle: "Native & Cross-Platform Mobility",
    description:
      "Intuitive iOS and Android applications utilizing React Native, Flutter, and native Swift/Kotlin for seamless customer touchpoints.",
    tags: ["iOS & Android", "React Native", "Flutter", "Offline-First Sync"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architectures",
    subtitle: "Scalable Microservices & APIs",
    description:
      "Decoupled event-driven architectures, GraphQL and RESTful microservices engineered for cloud scalability and fault tolerance.",
    tags: ["Microservices", "GraphQL & REST", "Docker", "Event-Driven Kafka"],
  },
  {
    icon: Plug,
    title: "API & Enterprise Integrations",
    subtitle: "Seamless Legacy & Third-Party Bridges",
    description:
      "Connect core enterprise platforms, CRM, ERP, payment gateways, and data pipelines into unified, reliable API ecosystems.",
    tags: ["MuleSoft", "Custom Middleware", "Secure Webhooks", "OAuth2/SAML"],
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Software & Automation",
    subtitle: "Intelligent Workflows & Agentic AI",
    description:
      "Integrate Large Language Models, predictive recommendation engines, computer vision, and cognitive workflows into production software.",
    tags: ["GenAI & LLMs", "Vector DBs", "RAG Pipelines", "Intelligent Automation"],
  },
  {
    icon: ShieldCheck,
    title: "Quality Engineering & DevSecOps",
    subtitle: "Continuous Automated Verification",
    description:
      "Automated unit, integration, performance, and security testing embedded directly into continuous deployment release gates.",
    tags: ["Cypress & Playwright", "SonarQube", "OWASP Top 10", "Zero-Regression"],
  },
];

const STACK_MATRIX = [
  {
    category: "Frontend & Mobile",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Flutter", "Swift", "Kotlin", "Vue.js"],
  },
  {
    category: "Backend & Microservices",
    skills: ["Node.js", "Python", "Go (Golang)", "Java Spring Boot", ".NET Core", "GraphQL", "FastAPI"],
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Snowflake", "Pinecone Vector"],
  },
  {
    category: "Cloud & DevSecOps",
    skills: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

const ENGINEERING_LIFECYCLE = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & User Alignment",
    desc: "We align with product leaders on business objectives, user journeys, technical constraints, and release milestones.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Architecture & UX Prototyping",
    desc: "Design scalable system blueprints, database schemas, interactive prototypes, and security compliance baselines.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Agile Sprint Development",
    desc: "Two-week agile sprints deliver tested, production-grade software you can review, test, and validate on staging every sprint.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Production Launch & Scale",
    desc: "Automated zero-downtime releases, proactive observability setup, and continuous post-launch optimization.",
  },
];

const WHY_CHOOSE_ENGINEERING = [
  "Top 3% vetted senior software engineers and solutions architects",
  "Transparent agile burndown reporting with zero hidden technical debt",
  "Comprehensive code ownership: 100% intellectual property transfer to your firm",
  "Rigorous automated testing frameworks guaranteeing bulletproof releases",
  "Experience shipping mission-critical systems across healthcare, fintech, and enterprise SaaS",
  "Dedicated engineering leads who collaborate seamlessly with your in-house teams",
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function SoftwareEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────────── HERO SECTION ────────────────────────── */}
      <section className="relative min-h-[64vh] flex items-center overflow-hidden pt-28 pb-16 bg-[#071326]">
        {/* Background Photography with Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroServicesSoftware}
            alt="Digital Engineering"
            className="h-full w-full object-cover object-right lg:object-center"
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
              <Code2 className="h-3.5 w-3.5" />
              <span>Digital Engineering & Custom Software</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Software Built to{" "}
              <span className="text-[#f5a623]">Scale Your Enterprise.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Custom web, mobile, cloud-native architectures, and AI-powered platforms designed to outpace competitors, modernize legacy workflows, and delight users.
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
                Talk to an Engineering Lead <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                All Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-7 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {ENGINEERING_METRICS.map((metric) => (
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

      {/* ────────────────────────── STRATEGIC OVERVIEW ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-card">
                <img
                  src={serviceSoftware}
                  alt="Enterprise Digital Engineering"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f5a623] text-[#071326] text-xs font-bold mb-2">
                    Production Excellence
                  </div>
                  <p className="text-sm font-semibold">
                    Engineered for high-traffic scalability, enterprise security, and flawless usability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* Homepage Heading Structure with Left Gold Bar */}
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                  FULL-LIFECYCLE PRODUCT ENGINEERING
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                  High-Velocity Engineering Tailored for Enterprise Demands
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                  We turn ambitious product visions into robust, tested software. Our seasoned engineering squads bring clean code practices, modern system design, and rigorous testing to every sprint.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether modernizing a legacy core platform or launching a greenfield digital product, ConfigUSA engineers integrate directly into your workflows. We bring architectural maturity, continuous delivery discipline, and deep technical craft that ensure long-term maintainability.
              </p>

              {/* Bullet Points */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                {WHY_CHOOSE_ENGINEERING.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#f5a623] shrink-0 mt-1" />
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────── 6 CORE CAPABILITIES (WHITE CARDS) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                WHAT WE DELIVER
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                Complete Engineering Capabilities
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
                Everything required to conceptualize, design, build, test, and scale modern software products.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
            >
              Discuss Your Product Vision <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6 Capabilities Cards in 3x2 Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGINEERING_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="group flex flex-col justify-between h-full bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                        <pillar.icon className="h-6 w-6 stroke-[1.75]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-[17px] text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Tag Chips */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-800">
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── ENTERPRISE TECH MATRIX (NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              ENGINEERING STACK
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Technologies & Frameworks We Excel At
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              From battle-tested enterprise frameworks to modern edge runtimes and AI models, our engineers select the optimal tools for your scale.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STACK_MATRIX.map((stack, idx) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-[#f5a623] mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-slate-200 bg-white/10 px-2.5 py-1 rounded-md border border-white/5 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── 4-STEP PRODUCT LIFECYCLE ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              DELIVERY PROCESS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              From Concept to Shipped Software in 4 Steps
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              A transparent, battle-tested product development framework ensuring clear expectations and fast time-to-market.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENGINEERING_LIFECYCLE.map((cycle, idx) => (
              <motion.div
                key={cycle.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#f5a623]">
                    {cycle.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors">
                    <cycle.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#071326] mb-2">
                  {cycle.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {cycle.desc}
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
            alt="ConfigUSA Digital Engineering"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/95 to-[#071326]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-3">
            START YOUR NEXT BUILD
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Engineer High-Impact Software?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your technical architecture, product goals, and timeline. Our team will prepare a technical feasibility review and roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors"
            >
              Start Technical Scoping <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
