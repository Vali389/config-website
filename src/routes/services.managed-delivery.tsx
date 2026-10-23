import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  LifeBuoy,
  Users,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Layers,
  Award,
  BarChart3,
  Globe2,
  Repeat,
  FileCheck,
  Briefcase,
  Search,
} from "lucide-react";
import wdManaged from "@/assets/wd-managed.jpg";
import heroServicesManaged from "@/assets/hero_services_managed.jpg";
import whoWeAreImg from "@/assets/about-hero-new.png";
import ctaHome from "@/assets/cta-home.jpg";

export const Route = createFileRoute("/services/managed-delivery")({
  head: () => ({
    meta: [
      { title: "Managed Delivery Services & Dedicated Pods | ConfigUSA" },
      {
        name: "description",
        content:
          "Outcome-driven engineering squads that own end-to-end delivery milestones, transparent SLAs, and governance accountability from ConfigUSA.",
      },
      { property: "og:title", content: "Managed Delivery Services" },
      {
        property: "og:description",
        content:
          "Dedicated onshore and offshore engineering pods owning outcomes from build to ongoing support.",
      },
    ],
  }),
  component: ManagedDeliveryPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const DELIVERY_METRICS = [
  { value: "99.5%", label: "Milestone SLA Adherence" },
  { value: "48h", label: "Rapid Pod Mobilization" },
  { value: "100%", label: "Transparent Agile Burndown" },
  { value: "Zero", label: "Vendor Management Friction" },
];

const DELIVERY_PILLARS = [
  {
    icon: Users,
    title: "Dedicated Engineering Squads",
    subtitle: "Autonomous Cross-Functional Pods",
    description:
      "Fully assembled, self-governing teams comprising architects, full-stack engineers, QA leads, and Scrum masters dedicated to your roadmap.",
    tags: ["Full-Stack Pods", "Sprint Velocity", "Agile Ownership"],
  },
  {
    icon: Repeat,
    title: "Build-Operate-Transfer (BOT)",
    subtitle: "Low-Risk Capability Incubation",
    description:
      "We recruit, onboard, and mature high-performance engineering pods, operating them until you choose to transition them in-house.",
    tags: ["Knowledge Transfer", "Talent Transition", "Zero Vendor Lock-in"],
  },
  {
    icon: ShieldCheck,
    title: "SLA-Backed Application Support",
    subtitle: "24/7 Ongoing Platform Operations",
    description:
      "Comprehensive tier-2 and tier-3 maintenance, continuous defect remediation, security patching, and proactive platform enhancements.",
    tags: ["Strict P1/P2 SLAs", "Continuous Monitoring", "DevOps Operations"],
  },
  {
    icon: Zap,
    title: "Modernization & Refactoring Pods",
    subtitle: "Targeted Technical Debt Reduction",
    description:
      "Specialized squads focused on decomposing legacy monoliths, modernizing backend codebases, and migrating architectures with zero business pause.",
    tags: ["Legacy Modernization", "API Enablement", "Refactoring Sprints"],
  },
  {
    icon: Globe2,
    title: "Blended Global Delivery Model",
    subtitle: "Onshore Guidance + Offshore Scale",
    description:
      "US-based delivery leads and solutions architects providing direct executive alignment, backed by high-velocity global engineering centers.",
    tags: ["Onshore Accountability", "24-Hour Cycle Velocity", "Cost-Optimized Scale"],
  },
  {
    icon: FileCheck,
    title: "Quality Engineering & Test Squads",
    subtitle: "Automated Continuous Verification",
    description:
      "Dedicated test automation teams embedding CI/CD quality gates, performance benchmarking, security testing, and regression coverage.",
    tags: ["Automated Regression", "Cypress / Playwright", "Performance Benchmarking"],
  },
];

const GOVERNANCE_KPIS = [
  {
    title: "Sprint Milestone Velocity",
    desc: "Predictable two-week cadence with transparent Jira/GitLab metrics and burndown tracking.",
    kpi: ">98% On-Time",
  },
  {
    title: "Production Defect Escape Rate",
    desc: "Multi-layered automated test gates and rigorous code reviews to keep escapes to near zero.",
    kpi: "<0.5% Escapes",
  },
  {
    title: "P1 Incident MTTR",
    desc: "Guaranteed SLA response times and rapid remediation for critical platform occurrences.",
    kpi: "<30 Min Response",
  },
  {
    title: "Automated Test Coverage",
    desc: "Continuous integration pipelines requiring enforced unit and end-to-end test pass rates.",
    kpi: ">85% Enforced",
  },
];

const POD_LIFECYCLE = [
  {
    step: "01",
    icon: Search,
    title: "Scoping & Pod Assembly",
    desc: "We define delivery outcomes, map required competencies, and assemble vetted engineers within 1 to 2 weeks.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Sprint 0 & Architecture Setup",
    desc: "Establish development environments, CI/CD pipelines, branching conventions, security baselines, and backlog alignment.",
  },
  {
    step: "03",
    icon: Zap,
    title: "High-Velocity Sprint Execution",
    desc: "Bi-weekly sprint demos, continuous stakeholder reviews, transparent burndown reporting, and working code every single sprint.",
  },
  {
    step: "04",
    icon: Award,
    title: "Outcome Signoff & Ongoing Support",
    desc: "Measurable milestone acceptance, production rollout with zero disruption, and smooth transition to ongoing SLA governance.",
  },
];

const ADVANTAGES = [
  "Fixed milestone or capacity-based engagement models aligning incentives with your outcomes",
  "Dedicated delivery leads who speak business language, not just technical jargon",
  "Zero overhead: we handle recruitment, payroll, tooling, training, and retention",
  "Flexible team scaling: ramp up capacity during crunch periods and scale down smoothly",
  "Comprehensive IP protection and enterprise-grade confidentiality agreements",
  "Full visibility with access to all daily standups, sprint boards, and code repositories",
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function ManagedDeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────────── HERO SECTION ────────────────────────── */}
      <section className="relative min-h-[64vh] flex items-center overflow-hidden pt-28 pb-16 bg-[#071326]">
        {/* Background Photography with Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroServicesManaged}
            alt="Managed Delivery Services"
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
              <LifeBuoy className="h-3.5 w-3.5" />
              <span>Outcome-Driven Managed Delivery</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Dedicated Engineering Pods That{" "}
              <span className="text-[#f5a623]">Own Outcomes.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Turnkey engineering squads that take full accountability for architecture, milestone velocity, code quality, and SLA-backed ongoing operations across web, cloud, and enterprise platforms.
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
                Assemble a Delivery Pod <ArrowRight className="h-4 w-4" />
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
            {DELIVERY_METRICS.map((metric) => (
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
                  src={whoWeAreImg}
                  alt="High-Performance Managed Pod"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f5a623] text-[#071326] text-xs font-bold mb-2">
                    Milestone-Driven
                  </div>
                  <p className="text-sm font-semibold">
                    Complete accountability with transparent burndown reporting and strict SLA governance.
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
                  DELIVERY GOVERNANCE & SLA COMMITMENT
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                  Stop Managing Headcount. Start Buying Delivery Outcomes.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                  Traditional staff augmentation leaves delivery risk on your shoulders. ConfigUSA Managed Delivery combines dedicated senior talent with executive oversight, rigorous metrics, and milestone accountability.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our pods integrate seamlessly with your existing tools, tech stack, and workflows. With dedicated Scrum Masters and Solution Architects leading each squad, you get full visibility into velocity while we manage team dynamics, operational tooling, and execution risks.
              </p>

              {/* Bullet Points */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                {ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#f5a623] shrink-0 mt-1" />
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                      {adv}
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
                DELIVERY MODELS
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                Flexible Pod Structures Tailored to Your Roadmap
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
                Whether launching a brand-new digital product or needing ongoing SLA-backed maintenance, we configure squads to match your exact goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
            >
              Discuss Your Pod Scope <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6 Capabilities Cards in 3x2 Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_PILLARS.map((pillar, i) => (
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
                    <span>Explore Delivery Pod</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── SLA & GOVERNANCE MATRIX (NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              PERFORMANCE ASSURANCE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Rigorous SLAs Backing Every Engagement
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              We tie our delivery accountability to transparent, objective quality and velocity metrics that give your executive leadership complete confidence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GOVERNANCE_KPIS.map((kpi, idx) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#f5a623]">
                    {kpi.kpi}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3 mb-2">
                    {kpi.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {kpi.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── 4-STEP POD LIFECYCLE ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              ENGAGEMENT BLUEPRINT
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              From Discovery to High-Velocity Delivery in 4 Stages
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Our structured onboarding methodology eliminates the typical ramp-up friction and delivers working software in your very first sprint.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POD_LIFECYCLE.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#f5a623]">
                    {p.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#071326] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {p.desc}
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
            alt="ConfigUSA Managed Delivery"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/95 to-[#071326]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-3">
            ACCELERATE TIME-TO-MARKET
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Deploy a Dedicated Delivery Squad?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let us design an outcome-driven delivery structure for your next initiative. We will provide a complete pod profile, timeline, and SLA commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors"
            >
              Request a Pod Proposal <ArrowRight className="h-4 w-4" />
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
