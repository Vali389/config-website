import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Users,
  UserCheck,
  Briefcase,
  Layers,
  Globe2,
  Building2,
  Search,
  Rocket,
  Target,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import heroServicesStaffing from "@/assets/hero_services_staffing.jpg";
import whoWeAreMeeting from "@/assets/who_we_are_reference_meeting.jpg";
import ctaHome from "@/assets/cta-home.jpg";

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      { title: "Technology Workforce Solutions & IT Staffing | ConfigUSA" },
      {
        name: "description",
        content:
          "Vetted technology talent for contract, contract-to-hire, and permanent roles — deployed in as fast as 48 hours by ConfigUSA.",
      },
      { property: "og:title", content: "Technology Workforce Solutions" },
      {
        property: "og:description",
        content:
          "Top-tier technology talent deployed on-demand across every major enterprise stack.",
      },
    ],
  }),
  component: StaffingPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const STAFFING_METRICS = [
  { value: "48h", label: "Average Time-to-Deploy" },
  { value: "Top 3%", label: "Vetted Talent Acceptance" },
  { value: "98%", label: "Placement Retention Rate" },
  { value: "10,000+", label: "Global Talent Network" },
];

const STAFFING_MODELS = [
  {
    icon: Users,
    title: "Contract Staffing",
    subtitle: "Agile Burst Capacity",
    description:
      "Deploy specialized technical professionals for project surges, specialized skill gaps, or immediate roadmap accelerations.",
    tags: ["Flexible Duration", "Hourly / Monthly Billing", "Rapid Scaling"],
  },
  {
    icon: UserCheck,
    title: "Contract-to-Hire (C2H)",
    subtitle: "Low-Risk Long-Term Evaluation",
    description:
      "Evaluate engineer velocity, cultural cohesion, and domain fit on live assignments before making permanent hiring commitments.",
    tags: ["Trial Period", "Seamless Conversion", "Zero Placement Friction"],
  },
  {
    icon: Briefcase,
    title: "Permanent Placement",
    subtitle: "Direct-Hire Technical Search",
    description:
      "Executive and senior technical search connecting your organization with thoroughly vetted, high-retention industry professionals.",
    tags: ["Senior & Principal Roles", "Cultural Match", "Replacement Guarantee"],
  },
  {
    icon: Layers,
    title: "Dedicated Project Pods",
    subtitle: "Cohesive Technical Teams",
    description:
      "Pre-assembled pods of developers, testers, and agile leads ready to hit sprint zero together with proven chemistry.",
    tags: ["Full-Stack Squads", "Immediate Sprint Velocity", "Managed Delivery Blend"],
  },
  {
    icon: Building2,
    title: "Enterprise RPO & MSP Programs",
    subtitle: "Managed Vendor Governance",
    description:
      "End-to-end recruitment process outsourcing, vendor management tiering, compliance tracking, and rate standardization.",
    tags: ["Volume Hiring", "Rate Card Governance", "Vendor Consolidation"],
  },
  {
    icon: Globe2,
    title: "Nearshore & Offshore Talent",
    subtitle: "Global Cost-Optimized Engineering",
    description:
      "Extend your development runway with certified senior engineers located in premier tech hubs across North America and India.",
    tags: ["Time-Zone Aligned", "Cost Efficiency", "Continuous 24h Cycles"],
  },
];

const VETTING_PROCESS = [
  {
    step: "01",
    icon: Search,
    title: "Profile & Capability Screening",
    desc: "Rigorous resume auditing, employment verification, and foundational competency qualification.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Live Technical Assessment",
    desc: "Practical coding exercises, real-world system design evaluations, and architecture problem-solving.",
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Domain & Culture Alignment",
    desc: "Communication standards, agile team dynamics, work ethics, and enterprise security awareness.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Executive Background Clearance",
    desc: "Background checks, certification verifications, security clearances, and compliance onboarding.",
  },
];

const SKILL_DISCIPLINES = [
  {
    area: "Cloud & DevOps",
    skills: ["AWS Solutions Architects", "Azure Engineers", "GCP Specialists", "Kubernetes Administrators", "Terraform Engineers", "SRE Leads"],
  },
  {
    area: "Software & Mobile",
    skills: ["Full-Stack React/Node", "Python Engineers", "Java Spring Boot", ".NET Core Developers", "React Native & Flutter", "Go Developers"],
  },
  {
    area: "Enterprise Platforms",
    skills: ["SAP S/4HANA Consultants", "Salesforce Architects", "Oracle Cloud ERP", "Workday Functional", "Microsoft Dynamics 365", "MuleSoft"],
  },
  {
    area: "Data & Artificial Intelligence",
    skills: ["Data Engineers (Snowflake/Databricks)", "MLOps Engineers", "GenAI / LLM Engineers", "Power BI / Tableau", "Data Scientists"],
  },
];

const VALUE_PROPOSITIONS = [
  "Proprietary talent pool of 10,000+ pre-vetted senior technologists",
  "Zero-risk placement policy with 2-week trial replacement assurance",
  "Dedicated client account executive who understands your tech stack and culture",
  "Transparent rate structures with no hidden margins or overhead fees",
  "Full compliance clearance: E-Verify, MWBE, SBE, and SAM.gov certified partner",
  "Rapid deployment: shortlists within 24 hours, onboarding within 48 to 72 hours",
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function StaffingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────────── HERO SECTION ────────────────────────── */}
      <section className="relative min-h-[64vh] flex items-center overflow-hidden pt-28 pb-16 bg-[#071326]">
        {/* Background Photography with Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroServicesStaffing}
            alt="Technology Workforce Solutions"
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
              <Users className="h-3.5 w-3.5" />
              <span>Technology Workforce Solutions</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              High-Caliber Technical Talent{" "}
              <span className="text-[#f5a623]">Deployed On Demand.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Access the top 3% of rigorously vetted technical professionals for contract, contract-to-hire, and direct placement — mobilized to your initiatives in as fast as 48 hours.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/request-talent"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
              >
                Request Technical Talent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/submit-resume"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Submit Resume <ArrowRight className="h-4 w-4" />
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
            {STAFFING_METRICS.map((metric) => (
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
                  src={whoWeAreMeeting}
                  alt="Enterprise Workforce Consulting"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f5a623] text-[#071326] text-xs font-bold mb-2">
                    Vetted Talent
                  </div>
                  <p className="text-sm font-semibold">
                    We match business goals — not just keyword checklists — so hires deliver immediately.
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
                  STRATEGIC WORKFORCE SCALING
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                  Talent Acquisition Engineered for Quality and Velocity
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                  In today's fast-moving market, waiting months for the right technical talent creates lost opportunity. ConfigUSA provides instant access to pre-screened specialists ready to make an immediate impact.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether deploying a single subject matter expert or ramping up an entire distributed development team, our proven evaluation process ensures technical excellence, high cultural alignment, and fast time-to-value.
              </p>

              {/* Bullet Points */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                {VALUE_PROPOSITIONS.map((benefit, idx) => (
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
                FLEXIBLE ENGAGEMENT MODELS
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                Workforce Solutions Built Around Your Timeline
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
                Choose the exact engagement framework that matches your budget, project lifecycle, and headcount strategy.
              </p>
            </div>
            <Link
              to="/request-talent"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
            >
              Request a Talent Shortlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6 Capabilities Cards in 3x2 Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STAFFING_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="group flex flex-col justify-between h-full bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                        <model.icon className="h-6 w-6 stroke-[1.75]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-[17px] text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                          {model.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {model.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {model.description}
                    </p>

                    {/* Tag Chips */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {model.tags.map((tag) => (
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
                    <span>Staff This Model</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── DOMAIN SPECIALIZATIONS (NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              ROLES & DISCIPLINES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Deep Expertise Across Key Technical Domains
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              Whether modern cloud platforms or legacy ERP backends, our network covers the most in-demand enterprise skills.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_DISCIPLINES.map((disc, idx) => (
              <motion.div
                key={disc.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-[#f5a623] mb-4">
                  {disc.area}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {disc.skills.map((skill) => (
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

      {/* ────────────────────────── 4-STAGE VETTING PROCESS ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              QUALITY SCREENING
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Our 4-Stage Candidate Vetting Methodology
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Only candidates who successfully pass all four stages are presented to our clients, saving your engineering leads hundreds of interview hours.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VETTING_PROCESS.map((v, idx) => (
              <motion.div
                key={v.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#f5a623]">
                    {v.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors">
                    <v.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#071326] mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {v.desc}
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
            alt="ConfigUSA Workforce Solutions"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/95 to-[#071326]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-3">
            NEED TALENT FAST?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Scale Your Engineering Capacity Today
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your open requirements, preferred tech stack, and timeline. We'll deliver a curated shortlist of pre-vetted specialists within 24 to 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/request-talent"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors"
            >
              Request a Talent Shortlist <ArrowRight className="h-4 w-4" />
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
