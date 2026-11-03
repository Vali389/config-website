import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
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
  ShieldCheck,
  Send,
  Cloud,
  Award,
  AlertTriangle,
  Workflow,
  LineChart,
  Database,
  Landmark,
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
  },
  {
    icon: Cpu,
    category: "Engineering & Tech",
    title: "Global Heads of Engineering & Tech",
  },
  {
    icon: Repeat,
    category: "Operations & GBS",
    title: "Heads of Operations / Shared Services",
  },
  {
    icon: BarChart3,
    category: "Finance & Risk",
    title: "Global Finance Leaders",
  },
  {
    icon: UserCheck,
    category: "HR & People",
    title: "Global HR Leaders",
  },
  {
    icon: BrainCircuit,
    category: "AI & Innovation",
    title: "Heads of AI, Data & Digital",
  },
  {
    icon: Rocket,
    category: "Centre Setup",
    title: "GCC Founding Team Members",
  },
  {
    icon: Boxes,
    category: "Architecture",
    title: "Enterprise Architects & Tech Leads",
  },
  {
    icon: Share2,
    category: "Business Functions",
    title: "Supply Chain, Legal & Functions",
  },
];

const OUR_VALUES = [
  {
    icon: Search,
    title: "Access to Top GCC Talent",
  },
  {
    icon: Users,
    title: "Deep GCC Ecosystem Expertise",
  },
  {
    icon: Target,
    title: "Leadership & Specialist Hiring",
  },
  {
    icon: Handshake,
    title: "Support for Expanding GCCs",
  },
  {
    icon: Sparkles,
    title: "Long-term Strategic Talent Partnership",
  },
];

/* 1. Where Is the Hiring Demand? — The 7 exact areas */
const HIRING_DEMAND_AREAS = [
  {
    icon: BrainCircuit,
    badge: "AI & Innovation",
    title: "AI & Agentic AI",
    desc: "AI engineering, intelligent automation, agentic workflows, and enterprise AI solutions.",
  },
  {
    icon: Database,
    badge: "Data & Insights",
    title: "Data Engineering & Advanced Analytics",
    desc: "Data platforms, enterprise data pipelines, engineering, analytics, and business intelligence.",
  },
  {
    icon: ShieldCheck,
    badge: "Security & Platforms",
    title: "Cybersecurity & Cloud",
    desc: "Enterprise security, Zero Trust, cloud architecture, and infrastructure modernisation.",
  },
  {
    icon: LineChart,
    badge: "Quantitative Models",
    title: "Quantitative Finance & Risk Analytics",
    desc: "Financial modelling, quantitative risk management, and quantitative algorithmic analysis.",
  },
  {
    icon: Cpu,
    badge: "Digital Products",
    title: "Digital Product Engineering",
    desc: "Product development, platform engineering, and modern application architecture.",
  },
  {
    icon: Landmark,
    badge: "Financial Operations",
    title: "Investment Operations",
    desc: "Financial operations, investment services, institutional support, and trade workflows.",
  },
  {
    icon: FileCheck2,
    badge: "RegTech",
    title: "Regulatory Technology & Compliance",
    desc: "Regulatory operations, compliance technology, statutory reporting, and risk management.",
  },
];

/* 4. Which Professionals Will Be in Demand? — The 6 exact roles */
const DEMAND_PROFESSIONALS = [
  {
    icon: BrainCircuit,
    title: "AI Engineers",
    desc: "Professionals who can develop, deploy, and operationalise enterprise AI solutions.",
  },
  {
    icon: Database,
    title: "Data Leaders",
    desc: "Leaders who can translate complex information assets into high-impact business decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Professionals",
    desc: "Specialists who understand enterprise security posture, regulatory compliance, and institutional risk.",
  },
  {
    icon: Cpu,
    title: "Product Engineers",
    desc: "Engineers who take complete ownership of platforms, products, and technology roadmaps.",
  },
  {
    icon: Landmark,
    title: "BFSI Specialists",
    desc: "Professionals who combine deep financial domain expertise with technology capabilities.",
  },
  {
    icon: Network,
    title: "GCC Leaders",
    desc: "Executive leaders who can establish centres, build teams, manage business responsibilities, and deliver global mandates.",
  },
];

/* Our GCC Services */
const GCC_SERVICES = [
  {
    title: "GCC Strategy & Feasibility Advisory",
    category: "GCC Strategy",
    desc: "Evaluating location dynamics across Tier-1 and emerging Indian tech hubs, benchmarking total cost of ownership, entity establishment advisory, and tax incentives.",
  },
  {
    title: "GCC Setup & Scale",
    category: "GCC Setup & Scale",
    desc: "End-to-end launch operations from physical and IT infrastructure to Day-1 governance, legal entity compliance, vendor partnerships, and rapid talent seeding.",
  },
  {
    title: "Build-Operate-Transfer (BOT) Delivery",
    category: "BOT Models",
    desc: "Rapidly incubate and run your India capability centre under ConfigUSA's proven operational framework, transferring the fully functional organisation seamlessly to your balance sheet.",
  },
  {
    title: "Executive Search & Leadership Hiring",
    category: "Leadership Hiring",
    desc: "Confidential executive recruitment delivering seasoned Site Heads, Global VPs, and Functional Practice Directors with proven track records of leading global mandates.",
  },
  {
    title: "Specialist Technology Squads",
    category: "Specialist Hiring",
    desc: "Pre-vetted engineering squads, data platform teams, and forward-deployed engineers equipped to accelerate delivery across AI, cloud, and core applications.",
  },
  {
    title: "Technology & Business Transformation",
    category: "Transformation",
    desc: "Assisting established GCCs in restructuring operating models, transitioning from legacy support functions to high-impact AI, product engineering, and business strategy hubs.",
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
      {/* ────────────────────── 1. HERO SECTION (High-Impact Background Image matching Homepage) ────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden bg-[#071326] text-white">
        {/* Full Visibility Photography matching Homepage Hero pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={gccHeroSkyline}
            alt="ConfigUSA GCC Enterprise Leadership in Executive Boardroom overlooking illuminated city skyline"
            className="h-full w-full object-cover object-right lg:object-center"
          />
          {/* Corporate Gradient: Deep Navy on left for sharp text legibility, transparent on right to reveal the boardroom & skyline */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/90 via-45% to-transparent to-65%" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071326] via-[#071326]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="max-w-3xl">
            {/* Signature Amber Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4"
            >
              <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">
                GCC TALENT SOLUTIONS
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Powering India's Next Phase of{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#f5a623] font-extrabold">
                GCC Growth.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-lg sm:text-xl text-slate-200 font-semibold leading-snug"
            >
              Connecting Leadership Talent with Global Opportunities
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed space-y-2.5 max-w-2xl"
            >
              <p>
                India is emerging as a strategic destination for Global Capability Centres (GCCs). What began as an offshore delivery model has evolved into a global operating model, with GCCs taking on increasingly important responsibilities across technology, engineering, finance, operations, AI, data and business transformation.
              </p>
              <p>
                Today, GCCs are not simply supporting global organisations. They are driving innovation, building enterprise capabilities and contributing directly to global business strategy.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#consultation-form"
                onClick={() => setActiveFormTab("organisation")}
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] hover:bg-[#e09612] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#071326] transition-colors shadow-md"
              >
                <Building2 className="h-4 w-4" />
                Build Your GCC Team <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#consultation-form"
                onClick={() => setActiveFormTab("professional")}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors"
              >
                <Users className="h-4 w-4 text-[#f5a623]" />
                Explore GCC Career Opportunities
              </a>
            </motion.div>
          </div>

          {/* 4 Highlight Pills across bottom of Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
        </div>
      </section>

      {/* ────────────────────── 2. AUDIENCE GATEWAY & KEY ROLES (Soft Slate Background) ────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 border-l-[3px] border-[#f5a623] pl-3.5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              A CHANGING TALENT LANDSCAPE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Connecting Leadership Talent with Global Opportunities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              The expansion of India's GCC ecosystem, combined with the return of experienced Indian technology professionals from international markets, is creating new opportunities for organisations and individuals alike.
            </p>
          </div>

          {/* Dual Audience Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Card 1: For Organisations */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
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
                    GCC & Global Leaders
                  </span>
                </div>

                <div className="relative h-48 rounded-xl overflow-hidden mb-5 border border-slate-100 shadow-xs">
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
                  <strong className="text-blue-700 font-semibold">we support your talent acquisition requirements.</strong>
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
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
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
                    Leadership Roles & Returning Talent
                  </span>
                </div>

                <div className="relative h-48 rounded-xl overflow-hidden mb-5 border border-slate-100 shadow-xs">
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
                  <strong className="text-blue-700 font-semibold">connect with us</strong> to explore strategic roles with leading multinational organisations.
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

          {/* Key Roles We Help Fill (9-Role Grid) */}
          <div className="mb-12">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1">
                KEY ROLES WE HELP FILL
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
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

          {/* Our Value Strip */}
          <div className="mb-12 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm">
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

          {/* Value Proposition Bottom Banner */}
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

      {/* ────────────────────── 3. STRATEGIC INTELLIGENCE REPORT (Redesigned matching Homepage Editorial Aesthetics) ────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Editorial Header */}
          <div className="mb-16">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e89218]">
                STRATEGIC INTELLIGENCE REPORT
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#071326] tracking-tight leading-[1.15] max-w-4xl">
              India's GCC Landscape: Hiring, Restructuring and the Future of Talent
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Understanding where the opportunities are emerging, which capabilities are gaining importance and how
              organisations and professionals need to prepare.
            </p>

            {/* Editorial Overview Card (Homepage Mission Card Style) */}
            <div className="mt-8 bg-[#f8fafc] rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="max-w-4xl">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  India's Global Capability Centre (GCC) ecosystem is entering a new phase of transformation. Some GCCs
                  are expanding their operations and taking on larger global responsibilities. Others are restructuring
                  their operating models, reassessing workforce requirements and accelerating automation. At the same time,
                  some professionals are securing exciting career opportunities, while others are navigating uncertainty
                  about the future of their roles.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-sm sm:text-[15px] font-bold text-[#071326]">
                    Welcome to the new reality of India's GCC economy — where growth, transformation and workforce restructuring are happening simultaneously.
                  </p>
                  <div className="h-1 w-12 bg-[#f5a623] rounded-full shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* ──────────────── 1. Where Is the Hiring Demand? ──────────────── */}
          <div className="mb-20">
            <div className="flex items-center gap-3.5 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#07172f] text-white font-extrabold text-sm shadow-xs">
                1
              </span>
              <h3 className="text-2xl sm:text-[1.75rem] font-bold text-[#071326] tracking-tight">
                Where Is the Hiring Demand?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mb-8 leading-relaxed">
              Global banks, financial institutions and technology-led GCCs continue to seek specialised capabilities across critical business and technology functions. Key areas of demand include:
            </p>

            {/* 7 Demand Area Cards in Crisp White Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HIRING_DEMAND_AREAS.map((area, idx) => (
                <div
                  key={area.title}
                  className={`p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                    idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60">
                        <area.icon className="h-5 w-5 stroke-[1.75]" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        {area.badge}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-[17px] font-bold text-[#071326] mb-2 leading-snug">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200/80 p-4 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#f5a623] shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                <strong>Strategic Direction:</strong> The shift is towards specialised skills, stronger domain knowledge and capabilities that support global business outcomes.
              </p>
            </div>
          </div>

          {/* ──────────────── 2. Why Are Some GCCs Restructuring? ──────────────── */}
          <div className="mb-20">
            <div className="flex items-center gap-3.5 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#07172f] text-white font-extrabold text-sm shadow-xs">
                2
              </span>
              <h3 className="text-2xl sm:text-[1.75rem] font-bold text-[#071326] tracking-tight">
                Why Are Some GCCs Restructuring?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mb-8 leading-relaxed">
              Across the technology and business services ecosystem, organisations are reassessing their operating models, workforce structures and cost efficiencies. This includes:
            </p>

            {/* 5 Restructuring Drivers */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {[
                { title: "Simplifying Organisational Structures", desc: "Rationalising management layers for agile decision-making." },
                { title: "Automating Repetitive Processes", desc: "Automating repetitive business and technology processes." },
                { title: "Consolidating Delivery Functions", desc: "Consolidating operations and delivery functions into unified hubs." },
                { title: "Reviewing Legacy Models", desc: "Reviewing legacy technology and application support models." },
                { title: "Aligning Capabilities", desc: "Aligning workforce capabilities directly with changing business priorities." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-3">
                      <Workflow className="h-4 w-4" />
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#071326] mb-1.5 leading-snug">{item.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Insight Quote Card */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm border-l-4 border-l-[#f5a623]">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, restructuring in one function does not necessarily mean that the entire GCC is shrinking. An organisation may reduce traditional support roles while simultaneously investing in AI, data engineering, cybersecurity and digital product development.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <p className="text-sm sm:text-base font-bold text-[#071326]">
                  “The real story is not simply about job cuts or hiring growth. It is about how the nature of work is changing.”
                </p>
                <div className="h-1 w-10 bg-[#f5a623] rounded-full shrink-0 hidden sm:block" />
              </div>
            </div>
          </div>

          {/* ──────────────── 3 & 4: Roles Under Pressure & In Demand (Side-by-Side Comparison) ──────────────── */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* 3. Which Roles Face Greater Pressure? */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between border-t-4 border-t-amber-500">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white font-bold text-sm">
                      3
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                      Which Roles Face Greater Pressure?
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    Evolving
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Roles involving repetitive, standardised activities and limited business ownership may face increasing pressure from automation and operating model changes. Examples include:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Repetitive IT support activities",
                    "Routine back-office processing",
                    "Manual testing & repetitive QA",
                    "Legacy application maintenance",
                    "Activities increasingly suitable for automation",
                    "Roles with limited specialisation or business differentiation",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <AlertTriangle className="h-4 w-4 text-[#e89218] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed italic">
                This does not mean these roles will disappear overnight. Their responsibilities and skill requirements are likely to evolve as organisations adopt new technologies and operating models.
              </div>
            </div>

            {/* 4. Which Professionals Will Be in Demand? (6 exact roles) */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between border-t-4 border-t-blue-600">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                      4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                      Which Professionals Will Be in Demand?
                    </h3>
                  </div>
                  <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    High Demand
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  The strongest opportunities are likely to emerge for professionals who combine technology expertise with business understanding and measurable outcomes. Organisations increasingly need:
                </p>

                <div className="space-y-3 mb-6">
                  {DEMAND_PROFESSIONALS.map((prof) => (
                    <div
                      key={prof.title}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100/60">
                        <prof.icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-xs">
                        <strong className="text-[#071326] font-bold">{prof.title}:</strong>{" "}
                        <span className="text-slate-600">{prof.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-blue-800">
                The differentiator is no longer just technical knowledge. It is the ability to apply that knowledge to solve business problems.
              </div>
            </div>
          </div>

          {/* ──────────────── 5 & 6: Actionable Strategy for Professionals & Leaders ──────────────── */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* 5. What Should GCC Professionals Be Thinking About? */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#07172f] text-white font-bold text-sm">
                    5
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                    What Should GCC Professionals Be Thinking About?
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Rather than focusing only on which companies are hiring today, professionals need to think about the capabilities that will remain valuable over the next three to five years. Some important priorities include:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Build expertise in emerging and specialised technologies.",
                    "Develop stronger business and domain understanding.",
                    "Learn to work with AI-powered tools and intelligent automation.",
                    "Take ownership of outcomes rather than limiting responsibilities to assigned tasks.",
                    "Strengthen communication, collaboration and leadership capabilities.",
                    "Evaluate career opportunities based on long-term skill development, not just compensation or job title.",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-blue-700">
                Your next career move should not simply be about changing employers. It should be about moving towards work that creates measurable business value.
              </div>
            </div>

            {/* 6. What Should GCC Leaders Be Doing? */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#07172f] text-white font-bold text-sm">
                    6
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                    What Should GCC Leaders Be Doing?
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  For organisations, the challenge is to balance operational efficiency with long-term capability development. Five priorities deserve attention:
                </p>

                <div className="space-y-3 mb-6">
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
                      desc: "Focus on people who can build, lead and deliver outcomes, not just increase headcount.",
                    },
                    {
                      title: "Create transparent career pathways",
                      desc: "Help employees understand how their roles and skills can evolve.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h5 className="font-bold text-xs sm:text-[13px] text-[#071326]">
                        {idx + 1}. {item.title}
                      </h5>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Balancing operational efficiency with sustainable long-term capability growth.
              </div>
            </div>
          </div>

          {/* ──────────────── 7. The Bigger Picture: Growth and Restructuring Can Coexist ──────────────── */}
          <div className="rounded-2xl bg-[#071326] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5a623] text-[#071326] font-extrabold text-sm">
                  7
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  The Bigger Picture: Growth and Restructuring Can Coexist
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                One important distinction is that hiring and restructuring can happen simultaneously within the same organisation. A GCC may be reducing its traditional support workforce while expanding its AI engineering team. It may consolidate certain operations while creating new leadership positions. It may automate existing processes while investing in digital product development.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#f5a623] font-semibold leading-relaxed">
                Therefore, company-wide announcements do not automatically tell us which specific teams are expanding or contracting. Understanding the actual business mandate, technology priorities and workforce strategy is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 4. HOW WE SUPPORT THE GCC ECOSYSTEM (Soft Slate Background) ────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 border-l-[3px] border-[#f5a623] pl-3.5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              PARTNERSHIP FRAMEWORK
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              How We Support the GCC Ecosystem
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We work with organisations and professionals across India's evolving GCC landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* For Organisations Card */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e89218] block">
                      Enterprise & GCC Leadership
                    </span>
                    <h3 className="text-2xl font-bold text-[#071326]">For Organisations</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  We support GCC establishment, expansion and transformation through leadership hiring, specialist technology recruitment and business-function talent acquisition.
                </p>

                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Executive search for Site Heads & Global Practice Leads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Specialist recruitment in AI, data, cloud & modern engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Turnkey Build-Operate-Transfer (BOT) centre incubation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="#consultation-form"
                  onClick={() => setActiveFormTab("organisation")}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] hover:bg-[#e09612] px-6 py-3 text-sm font-bold text-[#071326] transition-colors shadow-sm"
                >
                  Build Your GCC Team <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* For Professionals Card */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e89218] block">
                      Experienced & Returning Talent
                    </span>
                    <h3 className="text-2xl font-bold text-[#071326]">For Professionals</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  We help experienced professionals connect with relevant opportunities across GCC leadership, technology, engineering, AI, data, finance and business operations.
                </p>

                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Global Indian talent repatriation & relocation support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Strategic leadership placements with direct global mandate ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Confidential career advisory for high-impact functional leaders</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="#consultation-form"
                  onClick={() => setActiveFormTab("professional")}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#07172f] hover:bg-[#0d2345] px-6 py-3 text-sm font-semibold text-white transition-colors shadow-sm"
                >
                  Explore GCC Career Opportunities <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base font-semibold text-[#071326] bg-white inline-block px-6 py-3 rounded-full border border-slate-200/90 shadow-xs">
              Our focus is on connecting the right people with the right opportunities and helping organisations build high-performing teams.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── 5. OUR GCC SERVICES SUITE (Clean White Background) ────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 border-l-[3px] border-[#f5a623] pl-3.5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              END-TO-END CAPABILITY SUITE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Our GCC Services
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="bg-slate-100 px-3 py-1 rounded-full">GCC Strategy</span>
              <span>•</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">GCC Setup & Scale</span>
              <span>•</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">Build-Operate-Transfer (BOT) Models</span>
              <span>•</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">Leadership & Specialist Hiring</span>
              <span>•</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">Technology & Business Transformation</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {GCC_SERVICES.map((srv, idx) => (
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
                    {srv.category}
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
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xs">
            <h4 className="text-lg sm:text-xl font-bold text-[#071326] mb-2">
              Let's connect to discuss your GCC growth and talent requirements.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-2xl mx-auto">
              Our GCC Practice partners with multinational enterprises, mid-market champions, and venture-backed innovators to scale strategic centres in India.
            </p>
            <a
              href="#consultation-form"
              onClick={() => setActiveFormTab("organisation")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] hover:bg-[#e09612] px-6 py-3 text-sm font-bold text-[#071326] transition-colors shadow-sm"
            >
              Start an Executive Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────── 6. THE FUTURE BELONGS TO THOSE WHO ADAPT (Soft Slate Background) ────────────────────── */}
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
            specialised capabilities and strategic business leadership.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            The organisations that succeed will be those that invest in the right capabilities, build adaptable teams
            and create a culture of continuous learning. For professionals, the opportunity is equally significant —
            but staying relevant will require continuous learning, adaptability and a clear understanding of where
            the industry is heading.
          </p>
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm border-l-4 border-l-[#f5a623]">
            <p className="text-base sm:text-lg font-bold text-[#071326]">
              “The question is no longer just who is hiring or who is restructuring. It is who is building the
              capabilities that will define the next phase of global business.”
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── 7. INTERACTIVE CONSULTATION FORM (Clean White Background) ────────────────────── */}
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

      {/* ────────────────────── 8. BOTTOM BANNER / CTA (Deep Navy matching Homepage FinalCTA) ────────────────────── */}
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
