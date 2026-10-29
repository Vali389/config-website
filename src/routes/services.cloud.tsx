import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Cloud,
  Server,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Activity,
  GitBranch,
  Terminal,
  Database,
  Lock,
  Boxes,
  Zap,
  BarChart3,
  RefreshCw,
  Search,
} from "lucide-react";
import cloudInfraHero from "@/assets/cloud-infrastructure-hero.jpg";
import storyCloud from "@/assets/story-cloud.jpg";
import ctaHome from "@/assets/cta-home.jpg";

export const Route = createFileRoute("/services/cloud")({
  head: () => ({
    meta: [
      { title: "Cloud & Infrastructure Modernization | ConfigUSA" },
      {
        name: "description",
        content:
          "Enterprise multi-cloud migration, DevOps automation, Kubernetes platform engineering, and 24/7 SRE reliability from ConfigUSA.",
      },
      { property: "og:title", content: "Cloud & Infrastructure Solutions" },
      {
        property: "og:description",
        content:
          "Accelerating multi-cloud migrations, platform modernization, and automated DevOps.",
      },
    ],
  }),
  component: CloudInfrastructurePage,
});

/* ────────────────────────── DATA ────────────────────────── */

const CLOUD_METRICS = [
  { value: "99.99%", label: "Platform Uptime SLA" },
  { value: "40%", label: "Avg. FinOps Cloud Savings" },
  { value: "10x", label: "Faster Deployment Cycles" },
  { value: "24/7", label: "Global SRE Monitoring" },
];

const CLOUD_PILLARS = [
  {
    icon: Cloud,
    title: "Multi-Cloud Architecture",
    subtitle: "AWS, Azure & Google Cloud",
    description:
      "Design and deploy resilient, high-availability architectures across public, private, and hybrid cloud environments.",
    tags: ["AWS Well-Architected", "Azure Landing Zones", "GCP Anthos"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD Pipelines",
    subtitle: "Automated Release Engineering",
    description:
      "Eliminate deployment bottlenecks with GitOps, automated testing gates, canary rollouts, and infrastructure-as-code.",
    tags: ["GitLab CI", "GitHub Actions", "Terraform", "ArgoCD"],
  },
  {
    icon: Boxes,
    title: "Kubernetes & Containers",
    subtitle: "Cloud-Native Orchestration",
    description:
      "Containerize legacy monolithic applications and orchestrate microservices at scale using production-hardened Kubernetes.",
    tags: ["EKS / AKS / GKE", "Docker", "Helm", "Istio Service Mesh"],
  },
  {
    icon: RefreshCw,
    title: "Enterprise Cloud Migration",
    subtitle: "Zero-Downtime Workload Migration",
    description:
      "Rehost, replatform, and refactor mission-critical enterprise workloads with automated migration tooling and minimal business disruption.",
    tags: ["Database Migration", "App Modernization", "Cutover Runbooks"],
  },
  {
    icon: TrendingDown,
    title: "FinOps & Cost Optimization",
    subtitle: "Cloud Spend Governance",
    description:
      "Gain full visibility into cloud costs, eliminate wasted compute, right-size instances, and implement automated budget governance.",
    tags: ["Cost Anomaly Alerts", "Reserved Instances", "Compute Right-Sizing"],
  },
  {
    icon: Activity,
    title: "SRE & 24/7 Observability",
    subtitle: "Proactive Reliability Engineering",
    description:
      "Implement full-stack telemetry, distributed tracing, automated incident response, and SLA-driven site reliability engineering.",
    tags: ["Datadog", "Prometheus & Grafana", "PagerDuty", "OpenTelemetry"],
  },
];

const TECH_CATEGORIES = [
  {
    title: "Cloud Hyperscalers",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Oracle Cloud (OCI)"],
  },
  {
    title: "Containers & Orchestration",
    items: ["Kubernetes", "Docker", "Amazon EKS", "Azure AKS", "Google GKE", "Red Hat OpenShift", "Istio"],
  },
  {
    title: "Infrastructure as Code (IaC)",
    items: ["Terraform", "Ansible", "AWS CloudFormation", "Pulumi", "Terragrunt"],
  },
  {
    title: "CI/CD & Release Automation",
    items: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "ArgoCD", "Flux", "Spinnaker"],
  },
  {
    title: "Observability & APM",
    items: ["Datadog", "Dynatrace", "Prometheus", "Grafana", "New Relic", "Splunk", "OpenTelemetry"],
  },
  {
    title: "Cloud Security & Secrets",
    items: ["HashiCorp Vault", "AWS IAM", "Azure Entra ID", "Palo Alto Prisma", "Aqua Security"],
  },
];

const MIGRATION_PROCESS = [
  {
    step: "01",
    icon: Search,
    title: "Cloud Discovery & Assessment",
    desc: "Comprehensive audit of application dependencies, data volumes, licensing, security posture, and estimated TCO savings.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Landing Zone Architecture",
    desc: "Build automated, compliant multi-account cloud foundations with robust network topology, IAM guardrails, and encryption.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Automated Migration & Dry-Run",
    desc: "Execute phased migration waves using automated data pipelines, continuous validation, and dry-run rehearsed cutovers.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "SRE Handover & FinOps Tuning",
    desc: "Transition workloads to 24/7 telemetry monitoring, establish SLO/SLI error budgets, and optimize baseline costs.",
  },
];

const ENTERPRISE_BENEFITS = [
  "Zero-downtime migration frameworks protecting mission-critical operations",
  "Automated infrastructure as code eliminates configuration drift and security holes",
  "Multi-cloud disaster recovery architectures with aggressive RTO and RPO targets",
  "FinOps cost visibility yielding immediate 25%–40% reduction in cloud monthly spend",
  "Certified cloud architects across AWS, Microsoft Azure, and Google Cloud",
  "Rigorous compliance coverage: SOC2, HIPAA, PCI-DSS, ISO 27001, FedRAMP alignment",
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function CloudInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────────── HERO SECTION ────────────────────────── */}
      <section className="relative min-h-[64vh] flex items-center overflow-hidden pt-28 pb-16 bg-[#071326]">
        {/* Background Photography with Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={cloudInfraHero}
            alt="Cloud & Infrastructure"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/85 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071326]/50 to-transparent pointer-events-none" />
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
              <Cloud className="h-3.5 w-3.5" />
              <span>Cloud & Infrastructure Modernization</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Cloud & Infrastructure{" "}
              <span className="text-[#f5a623]">Built for Resilient Scale.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Accelerate multi-cloud migration, automated DevOps CI/CD pipelines, Kubernetes container orchestration, and 24/7 SRE reliability across AWS, Azure, and Google Cloud.
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
                Talk to a Cloud Architect <ArrowRight className="h-4 w-4" />
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
            {CLOUD_METRICS.map((metric) => (
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
                  src={storyCloud}
                  alt="Enterprise Cloud Architecture"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f5a623] text-[#071326] text-xs font-bold mb-2">
                    Multi-Cloud Maturity
                  </div>
                  <p className="text-sm font-semibold">
                    Production-proven reliability across top Fortune 500 infrastructure footprints.
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
                  STRATEGIC CLOUD ADVISORY
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                  Modernize Infrastructure Without Operational Risk
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                  Legacy data centers and fragmented infrastructure slow business growth. ConfigUSA bridges the gap with automated cloud foundations, robust security, and deep DevOps culture.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether migrating high-throughput financial transactions or orchestrating containerized healthcare microservices, our certified cloud engineering pods design and manage resilient cloud environments tailored to your performance, compliance, and budget requirements.
              </p>

              {/* Bullet Points */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                {ENTERPRISE_BENEFITS.map((benefit, idx) => (
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
                Full-Lifecycle Cloud & Infrastructure Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
                End-to-end capabilities spanning cloud architecture, migration, automation, security, and ongoing site reliability.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
            >
              Request Architecture Review <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6 Capabilities Cards in 3x2 Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CLOUD_PILLARS.map((pillar, i) => (
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
                    <span>Deploy Capability</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── ENTERPRISE TECH STACK MATRIX ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              CLOUD TECHNOLOGY ECOSYSTEM
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Mastery Across the Enterprise Cloud Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              Tool-agnostic engineering across industry-leading cloud providers, orchestration platforms, and automation frameworks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-[#f5a623] mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium text-slate-200 bg-white/10 px-2.5 py-1 rounded-md border border-white/5 hover:bg-white/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── 4-STEP MIGRATION FRAMEWORK ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              EXECUTION LIFECYCLE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              A Predictable, Risk-Engineered Migration Path
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Structured stages engineered to minimize business downtime, protect sensitive data, and guarantee immediate operational readiness.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MIGRATION_PROCESS.map((p, idx) => (
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
            alt="ConfigUSA Cloud Consulting"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/95 to-[#071326]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-3">
            ACCELERATE YOUR CLOUD ROADMAP
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build a Resilient Cloud Foundation?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential technical discovery session with our principal cloud architects to evaluate your architecture, optimize costs, and map your cloud modernization roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors"
            >
              Schedule Cloud Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/request-talent"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Request DevOps Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
