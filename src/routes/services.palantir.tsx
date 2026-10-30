import React, { useState } from "react";
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
  Clock,
  UserCheck,
  Briefcase,
  Rocket,
  FileCheck,
  Send,
  Search,
  Check,
  Lock,
} from "lucide-react";
import palantirFoundryAipHero from "@/assets/palantir-foundry-aip-hero.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import ctaServicesBg from "@/assets/cta-services-bg.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services/palantir")({
  head: () => ({
    meta: [
      {
        title:
          "Palantir Staffing & Talent Pipeline Solutions | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Specialized technical staffing and talent pipeline connecting vetted Palantir Foundry and AIP professionals with enterprise programs. Contract, contract-to-hire, and direct-hire placement.",
      },
      {
        property: "og:title",
        content: "Palantir Staffing & Talent Pipeline — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Independent technical staffing company connecting Palantir-experienced candidates with leading enterprise hiring pipelines.",
      },
    ],
  }),
  component: PalantirServicesPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const STAFFING_STATS = [
  { value: "48 - 72h", label: "Average Candidate Shortlist" },
  { value: "1,500+", label: "Vetted Palantir Talent Network" },
  { value: "Top 4%", label: "Rigorous Screening Acceptance" },
  { value: "98%", label: "Enterprise Placement Retention" },
];

const TALENT_CATEGORIES = [
  {
    icon: Database,
    title: "Palantir Foundry Engineers & Data Architects",
    tagline: "Ontology Modelers, PySpark Developers & Pipeline Architects",
    description:
      "We source and place certified and senior data engineering professionals with hands-on experience building ontology-driven pipelines, schema transformations, and enterprise datasets inside Foundry.",
    profiles: [
      "Foundry Data Engineers & PySpark Developers",
      "Enterprise Ontology & Object Model Architects",
      "Data Integration & Pipeline Optimization Engineers",
      "SQL, Python & Spark Data Transformation Specialists",
      "Foundry Platform Administrators & Security Analysts",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Palantir AIP & Generative AI Talent",
    tagline: "AIP Specialists, LLM Engineers & Agentic Architects",
    description:
      "Access specialized AI engineers equipped to build secure, ontology-grounded generative AI and agentic workflows using Palantir Artificial Intelligence Platform (AIP).",
    profiles: [
      "Palantir AIP Integration Engineers",
      "Agentic Workflow & Automation Developers",
      "Enterprise LLM & Prompt Engineering Specialists",
      "AIP Logic & Custom Operational Function Builders",
      "AI Governance, Evaluation & Guardrail Specialists",
    ],
  },
  {
    icon: Boxes,
    title: "Foundry Workshop & Application Builders",
    tagline: "Operational Dashboard, Workshop & Slate Developers",
    description:
      "Connect with front-end operational solution builders who design intuitive executive cockpits, interactive operational interfaces, and action-oriented Workshop workflows.",
    profiles: [
      "Foundry Workshop Application Developers",
      "Slate & Custom Widget Frontend Specialists",
      "Operational Dashboard & Cockpit Builders",
      "Enterprise BI & Decision-Support Consultants",
      "User Experience & Workflow Optimization Leads",
    ],
  },
  {
    icon: Users,
    title: "Forward Deployed & Cross-Functional Squads",
    tagline: "Embedded Problem Solvers for High-Urgency Initiatives",
    description:
      "Deploy mission-focused Forward Deployed Software Engineers (FDSE) and complete technical talent pods who embed directly into your business units to accelerate deployment velocity.",
    profiles: [
      "Forward Deployed Software Engineers (FDSE)",
      "Technical Engagement Leads & Scrum Masters",
      "Pre-Assembled Palantir Delivery Pods",
      "Solutions Architects & Platform Migration Specialists",
      "Onshore & Offshore Augmentation Engineers",
    ],
  },
];

const STAFFING_MODELS = [
  {
    title: "Contract Staffing (Staff Augmentation)",
    subtitle: "Agile Burst Capacity",
    description:
      "Deploy pre-screened Palantir Foundry and AIP engineers directly into your active project squads to satisfy urgent delivery milestones.",
    points: [
      "Rapid candidate presentation in 48-72 hours",
      "Flexible hourly or monthly billing models",
      "Onshore, nearshore, or offshore placement options",
    ],
  },
  {
    title: "Contract-to-Hire (C2H)",
    subtitle: "Low-Risk Evaluation",
    description:
      "Evaluate engineer velocity, ontology depth, and team chemistry on live client assignments before committing to a permanent full-time hire.",
    points: [
      "Trial period typically spanning 3 to 6 months",
      "Zero-friction transition to permanent payroll",
      "Dramatically reduced hiring risk for complex roles",
    ],
  },
  {
    title: "Direct-Hire & Permanent Search",
    subtitle: "Executive & Senior Technical Placement",
    description:
      "Targeted technical recruitment connecting your internal organization with verified, career-driven Palantir platform leads and architects.",
    points: [
      "Comprehensive background and technical verification",
      "Full candidate replacement guarantee",
      "Specialized in rare Lead and Principal talent",
    ],
  },
  {
    title: "Pre-Assembled Talent Pods",
    subtitle: "Cohesive Technical Squads",
    description:
      "Deploy ready-to-run pods comprising an Architect, Data Engineers, and a Workshop Developer with proven collaboration chemistry.",
    points: [
      "Immediate sprint velocity with minimal ramp-up",
      "Balanced skill mix tailored to your platform roadmap",
      "Flexible client-directed or co-managed framework",
    ],
  },
  {
    title: "Global Offshore Talent Pipeline",
    subtitle: "Round-the-Clock Engineering Scale",
    description:
      "Augment your onshore leadership with high-performing, cost-effective Palantir data engineers based in our state-of-the-art global delivery centers.",
    points: [
      "24/7 continuous data pipeline maintenance",
      "Substantial cost savings over onshore-only teams",
      "Strict enterprise security and NDAs adhered to",
    ],
  },
];

const VETTING_STEPS = [
  {
    step: "01",
    title: "Ecosystem Experience Audit",
    desc: "Rigorous verification of hands-on production experience with Palantir Foundry, AIP, PySpark transformations, or Workshop applications.",
  },
  {
    step: "02",
    title: "Technical Coding & PySpark Assessment",
    desc: "In-depth evaluation of Python, PySpark, SQL optimization, and distributed data processing capabilities.",
  },
  {
    step: "03",
    title: "Ontology Modeling & Architecture Deep-Dive",
    desc: "Testing real-world object relationship modeling, action types, schema design, and operational data security.",
  },
  {
    step: "04",
    title: "Security Clearance & Background Check",
    desc: "Enterprise-grade background checks, credential validation, and verification of security clearance eligibility where required.",
  },
  {
    step: "05",
    title: "Candidate Matching & Client Interview",
    desc: "Fast presentation of top 2-3 matched candidates tailored to your specific tech stack, timezone, and delivery timeline.",
  },
];

function PalantirServicesPage() {
  // Candidate quick pipeline form state
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [primarySkill, setPrimarySkill] = useState("Foundry Data Engineering");
  const [experienceLevel, setExperienceLevel] = useState("Senior (5-8 years)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitCandidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        align="left"
        eyebrow="Workforce Solutions / Palantir Talent & Staffing"
        title={
          <>
            Palantir Ecosystem Staffing & <br />
            <span className="text-[#f5a623] font-extrabold">
              Talent Pipeline Solutions.
            </span>
          </>
        }
        subtitle="ConfigUSA is a specialized technical staffing and workforce solutions partner. We connect top-tier Palantir Foundry and Palantir AIP professionals with leading enterprise initiatives — from rapid contract talent to direct-hire technical leaders."
        image={palantirFoundryAipHero}
      >
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            to="/request-talent"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Hire Palantir Talent <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#candidate-pipeline"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            <UserCheck className="h-4 w-4 text-[#f5a623]" /> Join Candidate Pipeline
          </a>
          <Link
            to="/submit-resume"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all"
          >
            <FileCheck className="h-4 w-4 text-emerald-400" /> Submit Resume Directly
          </Link>
        </div>
      </PageHero>

      {/* Staffing Metrics Bar */}
      <div className="pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-[#071326] text-white p-8 sm:p-10 shadow-xl border border-white/10 -mt-10 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {STAFFING_STATS.map((stat, i) => (
                <div key={stat.label} className={i !== 0 ? "pt-4 md:pt-0 md:pl-6" : ""}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f5a623] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Positioning: Dedicated Staffing & Trademark Clarification */}
      <section className="py-20 bg-white border-b border-slate-200/60 overflow-hidden">
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
                  Dedicated Technical Staffing
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] leading-tight tracking-tight">
                  Solving the Enterprise Palantir Talent Bottleneck.
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Enterprises adopting Palantir Foundry and Palantir AIP face an acute market shortage of certified, production-ready engineers. Finding practitioners who understand ontology design, PySpark data pipelines, and agentic workflows can delay critical deployments by quarters.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong>ConfigUSA is an independent technical staffing company.</strong> We do not sell proprietary platform implementations or consulting software products. Instead, our sole focus is connecting pre-vetted, high-performing Palantir specialists directly with enterprise hiring managers and teams.
              </p>

              <div className="pt-2 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#071326]">
                    <Building2 className="h-4 w-4 text-blue-600" /> For Enterprise Employers
                  </div>
                  <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Deploy certified Foundry and AIP contractors in as fast as 48 hours, or engage our search team for permanent hires.
                  </div>
                  <Link
                    to="/request-talent"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mt-3"
                  >
                    Request Palantir Talent <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#b26a00]">
                    <Users className="h-4 w-4 text-[#b26a00]" /> For Palantir Candidates
                  </div>
                  <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Connect into high-impact Fortune 500 contract pipelines, competitive compensation, and ongoing project rollover.
                  </div>
                  <a
                    href="#candidate-pipeline"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b26a00] hover:text-[#8a4e00] mt-3"
                  >
                    Join Candidate Pipeline <ArrowRight className="h-3 w-3" />
                  </a>
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
                  alt="Specialized technical staffing for Palantir Foundry and AIP"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#071326]/95 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    <ShieldCheck className="h-4 w-4" /> Vetted Talent Assurance
                  </div>
                  <p className="mt-1 text-sm font-semibold leading-snug">
                    "Every candidate in our Palantir pipeline is evaluated for hands-on production code quality, ontology design depth, and enterprise security compliance."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Specialized Palantir Talent Categories */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Specialized Talent Pipeline"
            title="Palantir Engineering Profiles We Source & Place"
            subtitle="Whether you need data engineers to model enterprise ontologies or AI specialists to orchestrate AIP agentic logic, our talent pipeline covers every discipline."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {TALENT_CATEGORIES.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-300">
                      <category.icon className="h-6 w-6 stroke-[1.75]" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e89218] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Discipline 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326] group-hover:text-blue-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {category.tagline}
                  </p>

                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Candidate Profiles Available:
                  </p>
                  {category.profiles.map((prof) => (
                    <div
                      key={prof}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{prof}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CANDIDATE PIPELINE INTAKE SECTION (Direct fulfillment of user requirement) */}
      <section
        id="candidate-pipeline"
        className="py-24 bg-gradient-to-b from-[#071326] via-[#0b1c36] to-[#071326] text-white relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Why Join Pipeline */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="border-l-[3px] border-[#f5a623] pl-3.5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                  For Technology Candidates
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white leading-tight">
                  Are You a Palantir Specialist? <br />
                  <span className="text-[#f5a623]">
                    Get Connected in Our Pipeline.
                  </span>
                </h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                ConfigUSA places verified Foundry and AIP professionals with top tier-1 enterprises, federal contractors, and high-growth organizations. If you have production experience in PySpark, ontology design, or AIP generative workflows, our technical recruiters will match you directly to active opportunities.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="h-9 w-9 rounded-lg bg-[#f5a623]/20 flex items-center justify-center text-[#f5a623] shrink-0 mt-0.5">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Tier-1 Enterprise Assignments</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Work on mission-critical initiatives with Fortune 500 clients, defense contractors, and financial institutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="h-9 w-9 rounded-lg bg-[#f5a623]/20 flex items-center justify-center text-[#f5a623] shrink-0 mt-0.5">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Flexible Engagement Structures</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Choose between high-rate W2/1099/C2C contract roles, contract-to-hire paths, or executive full-time permanent placement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="h-9 w-9 rounded-lg bg-[#f5a623]/20 flex items-center justify-center text-[#f5a623] shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Seamless Project Rollover</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Our recruiters proactively line up your next high-impact engagement before your current assignment concludes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/submit-resume"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all"
                >
                  <FileCheck className="h-4 w-4 text-[#f5a623]" /> Submit Complete Resume
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 rounded-lg border border-transparent px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                >
                  <Search className="h-4 w-4" /> Browse Open Tech Roles
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Quick Intake Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl bg-white text-slate-800 p-8 sm:p-10 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b26a00] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Candidate Quick Connect
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Lock className="h-3 w-3" /> Confidential
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#071326]">
                  Enter the Palantir Talent Pipeline
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                  Submit your details to be contacted by our specialized Palantir recruitment team within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3"
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900">
                      Profile Added to Pipeline!
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                      Thank you, {candidateName}. Our Palantir technical recruitment desk has received your qualifications and will reach out to discuss matching roles.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/submit-resume"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline"
                      >
                        Upload full resume & work history <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitCandidate} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        placeholder="e.g. Alex Miller"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={candidateEmail}
                          onChange={(e) => setCandidateEmail(e.target.value)}
                          placeholder="alex@example.com"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={candidatePhone}
                          onChange={(e) => setCandidatePhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Primary Specialization
                        </label>
                        <select
                          value={primarySkill}
                          onChange={(e) => setPrimarySkill(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623]"
                        >
                          <option>Foundry Data Engineering</option>
                          <option>Palantir AIP & Generative AI</option>
                          <option>Foundry Workshop / Slate</option>
                          <option>Ontology Architecture</option>
                          <option>PySpark / Python Pipelines</option>
                          <option>Forward Deployed Engineering</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Years of Experience
                        </label>
                        <select
                          value={experienceLevel}
                          onChange={(e) => setExperienceLevel(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623]"
                        >
                          <option>Mid-Level (2-4 years)</option>
                          <option>Senior (5-8 years)</option>
                          <option>Lead / Principal Architect (8+ years)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#071326] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#0b1f3d] transition-colors shadow-md"
                    >
                      <Send className="h-4 w-4 text-[#f5a623]" /> Join Palantir Candidate Pipeline
                    </button>

                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Need immediate placement? Call or connect with our specialized recruitment desk directly.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5-Stage Rigorous Candidate Vetting Process */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Quality Assurance & Rigor"
            title="How We Vet Candidates for Enterprise Readiness"
            subtitle="ConfigUSA subjects every candidate in our talent network to a 5-step technical and domain evaluation to ensure rapid onboarding."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VETTING_STEPS.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div>
                  <span className="text-2xl font-black text-[#f5a623]">
                    {step.step}
                  </span>
                  <h4 className="mt-2 text-base font-bold text-[#071326]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verified Standard
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Staffing Engagement Models */}
      <section className="py-24 bg-[#071326] text-white relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Flexible Staffing Models
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white leading-tight tracking-tight">
                Engage On Your Terms — Contract, C2H, or Direct Hire
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide agile, scalable workforce engagement models designed to align with your corporate procurement policies, timeline urgency, and budget specifications.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STAFFING_MODELS.map((model, i) => (
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

          <div className="mt-14 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/request-talent"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-4 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-md"
            >
              Request Palantir Talent <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/submit-resume"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              <UserCheck className="h-4 w-4 text-[#f5a623]" /> Join Candidate Pipeline
            </Link>
          </div>
        </div>
      </section>

      {/* Mandatory Trademark & Independence Disclaimer */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-xl border border-slate-300/80 bg-white p-6 text-center text-xs text-slate-500 shadow-sm leading-relaxed space-y-2">
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
              Trademark & Independence Notice
            </p>
            <p>
              Palantir®, Palantir Foundry®, and Palantir AIP® are registered trademarks of Palantir Technologies Inc. ConfigUSA is an independent technical staffing, workforce solutions, and talent acquisition firm. ConfigUSA is not affiliated with, sponsored by, endorsed by, or an authorized partner or vendor of Palantir Technologies Inc. All references to Palantir products are purely descriptive to indicate specialized technical proficiencies and candidate qualifications.
            </p>
          </div>
        </div>
      </section>

      <CTASection image={ctaServicesBg} />
    </>
  );
}
