import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  Building2,
  Briefcase,
  Target,
  Users,
  Search,
  Handshake,
  Sparkles,
  Network,
  Cpu,
  Repeat,
  BarChart3,
  UserCheck,
  BrainCircuit,
  Rocket,
  Boxes,
  Share2,
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Cloud,
  Send,
  PhoneCall,
  Clock,
  ChevronRight,
  Layers,
  Award,
  Compass,
  AlertTriangle,
  Lightbulb,
  Workflow,
  TrendingDown,
  LineChart,
  Bot,
  Binary,
  FileCheck2,
} from "lucide-react";

import gccHeroSkyline from "@/assets/gcc-hero-skyline.jpg";
import gccExecutiveTalent from "@/assets/gcc-executive-talent.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";

export const Route = createFileRoute("/gcc")({
  head: () => ({
    meta: [
      {
        title: "Powering India's Next Phase of GCC Growth | GCC Talent Solutions | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Powering India's Next Phase of GCC Growth. Connecting leadership talent with global opportunities. Helping organisations establish, build and scale high-performing GCCs in India.",
      },
      {
        property: "og:title",
        content: "Powering India's Next Phase of GCC Growth — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Strategic GCC leadership and specialist hiring across technology, engineering, finance, operations, AI, and digital transformation.",
      },
    ],
  }),
  component: GCCGrowthPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const TOP_HIGHLIGHTS = [
  {
    icon: TrendingUp,
    title: "GCCs in India are Expanding Rapidly",
    desc: "From offshore delivery to strategic global operating models driving world business strategy",
  },
  {
    icon: Users,
    title: "New Centres Every Month",
    desc: "Global enterprises continually establishing India engineering, finance & AI hubs",
  },
  {
    icon: Briefcase,
    title: "More Strategic, Global Roles in India",
    desc: "Direct ownership of worldwide technology, transformation, and business roadmaps",
  },
  {
    icon: Target,
    title: "High Demand for Experienced Leaders",
    desc: "Pivotal need for leaders combining international exposure with local execution depth",
  },
];

const KEY_ROLES = [
  {
    icon: Network,
    category: "GCC Leadership",
    title: "GCC Site Heads / Country Heads",
    desc: "Executive leaders overseeing full-spectrum India operations, executive governance, and P&L accountability.",
  },
  {
    icon: Cpu,
    category: "Engineering & Tech",
    title: "Global Heads of Engineering & Tech",
    desc: "Engineering leaders driving core cloud platforms, modern application stacks, and digital products.",
  },
  {
    icon: Repeat,
    category: "Operations & GBS",
    title: "Heads of Operations / Shared Services",
    desc: "Operational visionaries modernizing middle and back-office delivery through intelligent automation.",
  },
  {
    icon: BarChart3,
    category: "Finance & Risk",
    title: "Global Finance Leaders",
    desc: "Senior CFOs, FP&A controllers, regulatory risk, and compliance leaders steering global portfolios.",
  },
  {
    icon: UserCheck,
    category: "HR & People",
    title: "Global HR Leaders",
    desc: "Strategic CHROs and people leaders managing multi-thousand workforce scaling and talent development.",
  },
  {
    icon: BrainCircuit,
    category: "AI & Innovation",
    title: "Heads of AI, Data & Digital Transformation",
    desc: "AI/ML practitioners, enterprise data architects, and GenAI leaders delivering enterprise value.",
  },
  {
    icon: Rocket,
    category: "Centre Setup",
    title: "GCC Founding Team Members",
    desc: "Core pioneers responsible for seed hires, infrastructure, vendor ecosystems, and early milestones.",
  },
  {
    icon: Boxes,
    category: "Architecture",
    title: "Enterprise Architects & Tech Leads",
    desc: "Hands-on technical architects establishing global standards, security frameworks, and API grids.",
  },
  {
    icon: Share2,
    category: "Business Functions",
    title: "Supply Chain, Legal & Business Functions",
    desc: "Specialised domain experts across global procurement, supply chain, legal counsel, and ESG compliance.",
  },
];

const OUR_VALUES = [
  {
    icon: Search,
    title: "Access to Top GCC Talent",
    detail: "Proprietary networks across Tier-1 India hubs and international Indian diaspora.",
  },
  {
    icon: Users,
    title: "Deep GCC Ecosystem Expertise",
    detail: "16+ years of strategic recruitment, governance insight, and operational benchmarks.",
  },
  {
    icon: Target,
    title: "Leadership & Specialist Hiring",
    detail: "Rigorous vetting for functional mastery, cultural acumen, and global ownership.",
  },
  {
    icon: Handshake,
    title: "Support for Expanding GCCs",
    detail: "Agile pods to scale from foundation to 500+ professionals seamlessly.",
  },
  {
    icon: Sparkles,
    title: "Long-term Strategic Talent Partnership",
    detail: "Ongoing advisory, retention structuring, and capability incubation.",
  },
];

const HIRING_DEMAND_AREAS = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence, Data Engineering & Analytics",
    desc: "Organisations are moving beyond experimental AI use cases to enterprise-scale deployment. Roles in machine learning, data architecture, LLM deployment, and predictive analytics are seeing strong demand.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity, Risk & Regulatory Compliance",
    desc: "With GCCs managing sensitive enterprise data, cybersecurity and compliance capabilities are critical priorities across financial services, healthcare, and retail centres.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Modern Infrastructure",
    desc: "Enterprises are modernising legacy infrastructure, creating continuous demand for cloud architects, platform engineers, and DevOps professionals.",
  },
  {
    icon: Boxes,
    title: "Specialised Software & Product Engineering",
    desc: "GCCs are increasingly responsible for developing proprietary business applications, driving need for full-stack developers, API architects, and product managers.",
  },
  {
    icon: BarChart3,
    title: "Finance, Risk Management & Quantitative Analytics",
    desc: "Global financial institutions are expanding finance and risk functions in India, creating opportunities for financial analysts, quantitative modelers, and compliance specialists.",
  },
  {
    icon: Rocket,
    title: "Transformation & Program Leadership",
    desc: "Leaders who can manage cross-border initiatives, align stakeholder expectations, and implement new operating models remain highly sought after.",
  },
];

const PROFESSIONALS_IN_DEMAND = [
  {
    title: "Deep domain knowledge",
    role: "Understanding not just how systems work, but why the business needs them.",
  },
  {
    title: "Strong problem-solving abilities",
    role: "Handling ambiguity and complex business scenarios with high analytical rigour.",
  },
  {
    title: "Experience with modern technologies",
    role: "Working knowledge of cloud, AI, automation, and modern data platforms.",
  },
  {
    title: "Cross-cultural communication skills",
    role: "Collaborating effectively with global stakeholders and multi-time-zone teams.",
  },
  {
    title: "Adaptability and continuous learning",
    role: "Willingness to reskill and evolve as business requirements change.",
  },
  {
    title: "Outcome-driven mindset",
    role: "Focusing on delivering measurable business impact rather than task completion.",
  },
];

const GCC_CORE_SERVICES = [
  {
    title: "GCC Strategy & Feasibility Advisory",
    tagline: "Location Strategy • Financial Modeling • Regulatory Roadmap",
    desc: "Evaluating location dynamics across Tier-1 and Tier-2 Indian tech hubs, benchmarking total cost of ownership, entity establishment advisory, and tax incentives.",
  },
  {
    title: "Executive Search & Leadership Hiring",
    tagline: "Site Heads • Global VPs • Practice Directors • Founding Cohorts",
    desc: "Confidential, high-touch executive recruitment delivering seasoned leaders with proven track records of building and managing global operating centres.",
  },
  {
    title: "Specialist Technology Squads",
    tagline: "AI/ML • Foundry/AIP • Cloud Engineering • Cybersecurity",
    desc: "Pre-vetted engineering squads, data platform teams, and forward-deployed engineers equipped to accelerate delivery from Day 1.",
  },
  {
    title: "Build-Operate-Transfer (BOT) Delivery",
    tagline: "Turnkey GCC Incubation • De-risked Scaling • Entity Transfer",
    desc: "Rapidly stand up your India centre under ConfigUSA's operational infrastructure, transitioning the fully functioning organization seamlessly to your entity.",
  },
  {
    title: "Returning Indian Talent Program",
    tagline: "Global Repatriation • Cross-Border Relocation • Leadership Placement",
    desc: "Connecting Indian technology leaders and senior executives working in the US, Europe, and Asia-Pacific with high-impact GCC leadership opportunities in India.",
  },
  {
    title: "Workforce Restructuring & Reskilling",
    tagline: "Skill Gap Audits • Modernization Roadmaps • Talent Redeployment",
    desc: "Assisting established GCCs in pivoting from legacy support roles to high-value AI, digital engineering, and product capability centers.",
  },
];

/* ────────────────────────── MAIN COMPONENT ────────────────────────── */

function GCCGrowthPage() {
  const [activeFormTab, setActiveFormTab] = useState<"organisation" | "professional">("organisation");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    currentLocation: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* ────────────────────── 1. HERO SECTION (Deep Navy Corporate, matching Homepage Hero) ────────────────────── */}
      <section className="relative pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#071326] text-white">
        {/* Boardroom / Cityscape Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={gccHeroSkyline}
            alt="Boardroom overlooking city skyline representing India GCC growth"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[#071326]/90 via-[#071326]/85 to-[#071326]/98" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Eyebrow and Headline matching Homepage Hero Style */}
          <div className="mb-8">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">
                GCC TALENT SOLUTIONS
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Powering India's Next Phase of GCC Growth
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-slate-300 font-medium max-w-3xl">
              Connecting Leadership Talent with Global Opportunities
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              India is emerging as a strategic destination for Global Capability Centres (GCCs). What began as an offshore delivery model has evolved into a global operating model driving enterprise technology, AI, and business strategy.
            </p>
          </div>

          {/* Top 4 Stat Highlight Pills (Crisp White Cards matching Homepage) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {TOP_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white text-slate-900 border border-slate-200/90 shadow-md group hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="h-5 w-5 stroke-[1.75]" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-[13px] font-bold text-[#071326] leading-snug group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two Audience Cards (Crisp White Cards matching Homepage Design) */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: For Organisations */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#e89218] block">
                        Primary Audience
                      </span>
                      <h3 className="text-xl font-bold text-[#071326]">For Organisations</h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200/60 px-3 py-1 text-xs font-semibold text-blue-700">
                    Enterprise Solutions
                  </span>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-slate-100">
                  <img
                    src={gccEnterpriseHub}
                    alt="GCC Enterprise Hub"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#071326] leading-snug mb-2">
                  Building High-Performing Global Capability Centres in India
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If you are planning to establish a GCC, expand an existing centre, build leadership teams or hire
                  specialised talent across AI, software, engineering, operations or finance,{" "}
                  <strong className="text-blue-700">we support your talent acquisition requirements.</strong>
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href="#consultation-form"
                  onClick={() => setActiveFormTab("organisation")}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] hover:bg-[#e09612] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#071326] transition-colors shadow-sm"
                >
                  Build Your GCC Team <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Card 2: For Professionals */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#e89218] block">
                        Secondary Audience
                      </span>
                      <h3 className="text-xl font-bold text-[#071326]">For Professionals</h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Leadership Roles
                  </span>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-slate-100">
                  <img
                    src={gccExecutiveTalent}
                    alt="GCC Executive Leader"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#071326] leading-snug mb-2">
                  Your Global Experience. Your Next Opportunity in India.
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If you are an experienced professional looking for your next leadership opportunity in a GCC, or
                  aspire to take the next step in your career,{" "}
                  <strong className="text-blue-700">connect with us</strong> to explore strategic roles with leading multinational organisations.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href="#consultation-form"
                  onClick={() => setActiveFormTab("professional")}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#07172f] hover:bg-[#0d2345] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors shadow-sm"
                >
                  Explore GCC Career Opportunities <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/submit-resume"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Submit Resume
                </Link>
              </div>
            </div>
          </div>

          {/* Key Roles We Help Fill (Clean 9-Role Grid matching Homepage) */}
          <div className="mb-10">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623] mb-1">
                KEY ROLES WE HELP FILL
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Leadership and Specialist Roles Across GCC Functions
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {KEY_ROLES.map((role) => (
                <a
                  key={role.title}
                  href="#consultation-form"
                  onClick={() => setActiveFormTab("organisation")}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-center flex flex-col items-center justify-between shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 group min-h-[110px]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <role.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-bold text-[#071326] leading-tight group-hover:text-blue-700 transition-colors">
                    {role.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Our Value Horizontal Strip matching Homepage Design */}
          <div className="mb-10 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
              <div className="shrink-0 flex items-center gap-2 bg-[#07172f] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                <Award className="h-4 w-4 text-[#f5a623]" />
                <span>Our Value</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
                {OUR_VALUES.map((val) => (
                  <div
                    key={val.title}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <val.icon className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 truncate">{val.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Bottom Banner matching Homepage FinalCTA style */}
          <div className="rounded-2xl bg-[#0a1628] p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="flex items-center gap-4 max-w-2xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f5a623] border border-white/15">
                <Network className="h-6 w-6 stroke-[1.75]" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  We help the right people access the right opportunities and help organisations build high-performing GCCs in India.
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Building the next generation of Global Capability Centres with world-class leadership.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#consultation-form"
                onClick={() => setActiveFormTab("organisation")}
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] hover:bg-[#e09612] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#071326] transition-colors shadow-sm"
              >
                Build Your GCC Team <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#consultation-form"
                onClick={() => setActiveFormTab("professional")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 hover:bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors"
              >
                Explore GCC Career Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 2. STRATEGIC INTELLIGENCE REPORT (Soft Slate Background matching Homepage) ────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 inline-block text-left mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218]">
                STRATEGIC INTELLIGENCE REPORT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] tracking-tight leading-tight">
              India's GCC Landscape: Hiring, Restructuring and the Future of Talent
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Understanding where the opportunities are emerging, which capabilities are gaining importance, and how
              organisations and professionals need to prepare.
            </p>
            <div className="mt-6 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 text-left max-w-3xl mx-auto shadow-sm border-l-4 border-l-blue-600">
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                India's Global Capability Centre (GCC) ecosystem is entering a new phase of transformation. Some GCCs
                are expanding operations and taking on larger global responsibilities. Others are restructuring their
                operating models, reassessing workforce requirements, and accelerating automation. At the same time,
                some professionals are securing exciting career opportunities, while others navigate uncertainty about
                the future of their roles.
              </p>
              <p className="mt-3 text-sm font-semibold text-blue-700">
                Welcome to the new reality of India's GCC economy — where growth, transformation, and workforce
                restructuring are happening simultaneously.
              </p>
            </div>
          </div>

          {/* Section 1 & 2 Breakdown */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 1. Where Is the Hiring Demand? */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                    1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                    Where Is the Hiring Demand?
                  </h3>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Global banks, financial institutions, and technology-led GCCs continue to seek specialised
                  capabilities across critical business and technology functions. The shift is towards specialised
                  skills, stronger domain knowledge, and capabilities that support global business outcomes:
                </p>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {HIRING_DEMAND_AREAS.map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <item.icon className="h-4 w-4 text-blue-600" />
                        <h4 className="font-bold text-xs text-[#071326]">{item.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Why Are Some GCCs Restructuring? */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                    2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                    Why Are Some GCCs Restructuring?
                  </h3>
                </div>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  Across the technology and business services ecosystem, organisations are reassessing operating
                  models, workforce structures, and cost efficiencies:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Simplifying organisational structures and management layers.",
                    "Automating repetitive business and technology processes.",
                    "Consolidating operations and delivery functions into unified hubs.",
                    "Reviewing legacy technology and legacy application support models.",
                    "Aligning workforce capabilities directly with changing business priorities.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <Workflow className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 text-slate-800">
                  <p className="text-xs sm:text-sm leading-relaxed">
                    "Restructuring in one function does not mean that the entire GCC is shrinking. An organisation may
                    reduce traditional support roles while simultaneously investing heavily in AI, data engineering,
                    and cybersecurity.{" "}
                    <strong className="text-blue-900">
                      The real story is not simply about job cuts or hiring growth. It is about how the nature of work is changing.
                    </strong>"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 & 4 Breakdown */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 3. Which Roles Face Greater Pressure? */}
            <div className="rounded-2xl border border-amber-200/80 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e89218] text-white font-bold text-sm">
                  3
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                  Which Roles Face Greater Pressure?
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Roles involving repetitive, standardised activities and limited business ownership face increasing
                pressure from automation and operating model changes:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Repetitive IT support activities",
                  "Routine back-office processing",
                  "Manual testing & repetitive QA",
                  "Legacy application maintenance",
                  "Activities increasingly suitable for automation",
                  "Roles with limited specialization or differentiation",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-lg bg-amber-50/50 border border-amber-200/70"
                  >
                    <AlertTriangle className="h-4 w-4 text-[#e89218] shrink-0" />
                    <span className="text-xs text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-t border-slate-100 pt-4">
                This does not mean these roles will disappear overnight. Their responsibilities and skill requirements
                are evolving as organisations adopt intelligent tools and operating models.
              </p>
            </div>

            {/* 4. Which Professionals Will Be in Demand? */}
            <div className="rounded-2xl border border-blue-200/80 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                  4
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                  Which Professionals Will Be in Demand?
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                The strongest opportunities emerge for professionals who combine technology expertise with business
                understanding and measurable outcomes:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {PROFESSIONALS_IN_DEMAND.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-lg bg-blue-50/40 border border-blue-200/60">
                    <h4 className="font-bold text-xs text-blue-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">{item.role}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-blue-800 font-semibold border-t border-slate-100 pt-4">
                The differentiator is no longer just technical knowledge. It is the ability to apply that knowledge to
                solve business problems.
              </p>
            </div>
          </div>

          {/* Section 5 & 6: Actionable Priorities */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* 5. What Should GCC Professionals Be Thinking About? */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                  5
                </span>
                <h3 className="text-xl font-bold text-[#071326] tracking-tight">
                  What Should GCC Professionals Be Thinking About?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Think about the capabilities that will remain valuable over the next three to five years:
              </p>

              <div className="space-y-3">
                {[
                  "Build expertise in emerging and specialised technologies.",
                  "Develop stronger business and domain understanding.",
                  "Learn to work with AI-powered tools and intelligent automation.",
                  "Take ownership of outcomes rather than limiting responsibilities to assigned tasks.",
                  "Strengthen communication, collaboration, and leadership capabilities.",
                  "Evaluate career opportunities based on long-term skill development, not just compensation or title.",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs sm:text-sm text-blue-700 font-semibold">
                Your next career move should not simply be about changing employers. It should be about moving towards
                work that creates measurable business value.
              </div>
            </div>

            {/* 6. What Should GCC Leaders Be Doing? */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                  6
                </span>
                <h3 className="text-xl font-bold text-[#071326] tracking-tight">
                  What Should GCC Leaders Be Doing?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Balance operational efficiency with long-term capability development across five key priorities:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Build a skills-first workforce strategy",
                    desc: "Align talent requirements with future business priorities.",
                  },
                  {
                    title: "Reskill and upskill existing employees",
                    desc: "Develop capabilities before current skills become outdated.",
                  },
                  {
                    title: "Automate intelligently",
                    desc: "Reduce repetitive work while creating opportunities for higher-value responsibilities.",
                  },
                  {
                    title: "Hire for capability ownership",
                    desc: "Focus on people who can build, lead, and deliver outcomes, not just headcount.",
                  },
                  {
                    title: "Create transparent career pathways",
                    desc: "Help employees understand how their roles and skills can evolve.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-xs text-[#071326]">
                      {idx + 1}. {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7: The Bigger Picture (Navy Callout Card matching Homepage) */}
          <div className="rounded-2xl bg-[#071326] text-white p-8 sm:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5a623] text-[#071326] font-bold text-sm">
                7
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                The Bigger Picture: Growth and Restructuring Can Coexist
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              One important distinction is that hiring and restructuring can happen simultaneously within the same
              organisation. A GCC may be reducing its traditional support workforce while expanding its AI engineering
              team. It may consolidate certain operations while creating new leadership positions. It may automate
              existing processes while investing in digital product development.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#f5a623] font-semibold">
              Therefore, company-wide announcements do not automatically tell us which specific teams are expanding or
              contracting. Understanding the actual business mandate, technology priorities, and workforce strategy is
              essential.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── 3. OUR GCC SERVICES (Clean White Section matching Homepage) ────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 inline-block text-left mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218]">
                END-TO-END CAPABILITY SUITE
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#071326] tracking-tight">
              Our GCC Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              GCC Strategy • GCC Setup & Scale • Build-Operate-Transfer (BOT) Models • Leadership & Specialist Hiring •
              Technology & Business Transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GCC_CORE_SERVICES.map((srv, idx) => (
              <div
                key={srv.title}
                className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold text-xs border border-blue-100/60">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-[#071326] leading-snug">
                      {srv.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full mb-3">
                    {srv.tagline}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#consultation-form"
                    onClick={() => setActiveFormTab("organisation")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Consult on this service →
                  </a>
                </div>
              </div>
            ))}

            {/* Strategic Advisory Card (Navy Card for contrast, matching Homepage style) */}
            <div className="rounded-2xl bg-[#07172f] text-white p-7 flex flex-col justify-between shadow-xl border border-blue-900/40">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-[#f5a623] font-bold text-xs">
                    ★
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-white leading-snug">
                    Tailored Advisory Partnership
                  </h3>
                </div>
                <span className="inline-block text-[11px] font-semibold text-blue-300 bg-white/10 px-2.5 py-0.5 rounded-full mb-3">
                  Executive Consultation
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Have unique requirements spanning cross-border relocations, dual-country legal compliance, or confidential executive search?
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#consultation-form"
                  onClick={() => setActiveFormTab("organisation")}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-5 py-2.5 text-xs font-bold text-[#071326] hover:bg-[#e09612] transition-colors shadow-sm"
                >
                  Schedule an Executive Briefing <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 4. THE FUTURE BELONGS TO THOSE WHO ADAPT (Soft Slate Section) ────────────────────── */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 inline-block text-left mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218]">
              CONCLUSION & VISION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071326] tracking-tight">
            The Future Belongs to Those Who Adapt
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            India's GCC ecosystem is moving beyond traditional offshore delivery towards global ownership, innovation,
            specialised capabilities, and strategic business leadership.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            The organisations that succeed will be those that invest in the right capabilities, build adaptable teams,
            and create a culture of continuous learning. For professionals, the opportunity is equally significant —
            but staying relevant will require continuous learning, adaptability, and a clear understanding of where
            the industry is heading.
          </p>
          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm border-l-4 border-l-[#f5a623]">
            <p className="text-base sm:text-lg font-bold text-[#071326]">
              The question is no longer just who is hiring or who is restructuring. It is who is building the
              capabilities that will define the next phase of global business.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── 5. INTERACTIVE CONSULTATION FORM (Clean White Card matching Homepage) ────────────────────── */}
      <section id="consultation-form" className="py-20 lg:py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 inline-block text-left mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218]">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#071326] tracking-tight">
              Let's Connect to Discuss Your GCC Requirements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Whether you are an organisation seeking to build high-performing teams, or an experienced leader exploring
              your next strategic career step in India.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden">
            {/* Toggle Tabs */}
            <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={() => {
                  setActiveFormTab("organisation");
                  setFormSubmitted(false);
                }}
                className={`py-4 px-6 text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all ${
                  activeFormTab === "organisation"
                    ? "text-[#071326] border-b-2 border-blue-600 bg-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Building2 className="h-4 w-4 text-blue-600" />
                For Organisations (Build Your GCC Team)
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveFormTab("professional");
                  setFormSubmitted(false);
                }}
                className={`py-4 px-6 text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all ${
                  activeFormTab === "professional"
                    ? "text-[#071326] border-b-2 border-blue-600 bg-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Users className="h-4 w-4 text-blue-600" />
                For Professionals (Career Opportunities)
              </button>
            </div>

            {/* Form Container */}
            <div className="p-6 sm:p-10">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-200 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#071326]">Thank You for Reaching Out</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    {activeFormTab === "organisation"
                      ? "Our GCC Practice Partner will review your requirements and reach out within 24 hours to schedule an executive consultation."
                      : "Our GCC Executive Talent Team has received your inquiry and will connect with relevant strategic leadership roles."}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#07172f] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0d2345] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Sharma"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@company.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 or +1 000-000-0000"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {activeFormTab === "organisation" ? "Organisation / Company Name *" : "Current Organisation (Optional)"}
                      </label>
                      <input
                        type="text"
                        required={activeFormTab === "organisation"}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={activeFormTab === "organisation" ? "e.g. Global Tech Enterprise Inc." : "e.g. Technology Executive"}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {activeFormTab === "organisation" ? "Key GCC Functional Area *" : "Your Target Leadership Area *"}
                      </label>
                      <select
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                      >
                        <option value="">Select a functional area...</option>
                        <option value="GCC Site Heads / Country Heads">GCC Site Heads / Country Heads</option>
                        <option value="Global Heads of Engineering & Tech">Global Heads of Engineering & Tech</option>
                        <option value="Heads of Operations / Shared Services">Heads of Operations / Shared Services</option>
                        <option value="Global Finance Leaders">Global Finance Leaders</option>
                        <option value="Global HR Leaders">Global HR Leaders</option>
                        <option value="Heads of AI, Data & Digital">Heads of AI, Data & Digital</option>
                        <option value="GCC Founding Team Members">GCC Founding Team Members</option>
                        <option value="Enterprise Architecture & Tech">Enterprise Architecture & Tech</option>
                        <option value="Supply Chain & Business Functions">Supply Chain & Business Functions</option>
                        <option value="Full Centre Setup (BOT Model)">Full Centre Setup (BOT Model)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {activeFormTab === "organisation" ? "Target Centre Location" : "Current Location / Returning to India?"}
                      </label>
                      <input
                        type="text"
                        value={formData.currentLocation}
                        onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                        placeholder={activeFormTab === "organisation" ? "e.g. Hyderabad / Bangalore / NCR" : "e.g. Returning from USA / Europe"}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {activeFormTab === "organisation" ? "Details of Your GCC Requirements" : "Brief Profile / Career Aspirations"}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder={
                        activeFormTab === "organisation"
                          ? "Share details regarding your upcoming centre launch, mandate expansion, key leadership requirements, or BOT evaluation..."
                          : "Briefly outline your international background, functional domains, and target leadership expectations..."
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-slate-500">
                      🔒 Strictly confidential. Your details are safeguarded and never shared without explicit consent.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5a623] hover:bg-[#e09612] px-8 py-3.5 text-sm font-bold text-[#071326] transition-colors shadow-md"
                    >
                      <Send className="h-4 w-4" />
                      {activeFormTab === "organisation" ? "Build Your GCC Team" : "Explore GCC Career Opportunities"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 6. BOTTOM BANNER / CTA (Deep Navy `#0a1628` matching Homepage FinalCTA) ────────────────────── */}
      <section className="py-16 px-4 lg:px-8 bg-[#0a1628] text-white">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 py-4">
          <div className="flex items-start sm:items-center gap-5 max-w-3xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f5a623] border border-white/15">
              <Network className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                We help the right people access the right opportunities and help organisations build high-performing GCCs in India.
              </h2>
              <p className="mt-2 text-slate-300 text-sm sm:text-base">
                Building the next generation of Global Capability Centres with world-class leadership.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="#consultation-form"
              onClick={() => setActiveFormTab("organisation")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#e09612] transition-colors shadow-md"
            >
              <Building2 className="h-4 w-4" />
              Build Your GCC Team
            </a>
            <a
              href="#consultation-form"
              onClick={() => setActiveFormTab("professional")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Users className="h-4 w-4 text-[#f5a623]" />
              Explore GCC Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
