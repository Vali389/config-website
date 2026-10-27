import React, { useEffect, useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Cloud,
  Boxes,
  Users,
  LifeBuoy,
  HeartPulse,
  Landmark,
  Building2,
  Factory,
  ShoppingBag,
  Cpu,
  Target,
  BadgeCheck,
  Layers,
  Globe2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Calendar,
  FileText,
  Repeat,
  UserPlus,
  MapPin,
  Briefcase,
  Search,
  PhoneCall,
  Rocket,
  Handshake,
  UserCheck,
  ShieldCheck,
  Globe,
  Sparkles,
  Lightbulb,
  Heart,
  Clock,
  Award,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

import heroExecutives from "@/assets/hero_enterprise_executives.jpg";
import whoWeAreReferenceMeeting from "@/assets/who_we_are_reference_meeting.jpg";
import whoWeAreImg from "@/assets/about-hero-new.png";
import ctaHome from "@/assets/cta-home.jpg";
import storyCloud from "@/assets/story-cloud.jpg";
import storyGov from "@/assets/story-gov.jpg";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certEverify from "@/assets/cert-everify.png";
import caseStudyTeam from "@/assets/case_study_team.jpg";
import insightsTeam from "@/assets/insights_workforce_team.jpg";

import indFinancial from "@/assets/ind-financial.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indTechnology from "@/assets/ind-technology.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indGovernment from "@/assets/ind-government.jpg";

import { TechTicker } from "@/components/TechTicker";
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ConfigUSA — Technology. Talent. Transformation." },
      {
        name: "description",
        content:
          "Building the capabilities enterprises need to transform, scale and compete through enterprise technology, workforce and managed delivery solutions.",
      },
      {
        property: "og:title",
        content: "ConfigUSA — Enterprise Technology & Workforce Solutions",
      },
      {
        property: "og:description",
        content:
          "Building the capabilities enterprises need to transform, scale and compete.",
      },
    ],
  }),
  component: HomePage,
});

/* ────────────────────────── Data ────────────────────────── */

const CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Solutions",
    subtitle: "Generative AI & Automation",
    description: "Helping organizations adopt Generative AI, intelligent automation, and AI-powered business solutions.",
    to: "/services",
  },
  {
    icon: Code2,
    title: "Digital Engineering",
    subtitle: "Modern Apps & Platforms",
    description: "Building modern applications, cloud-native platforms, APIs, and scalable digital experiences.",
    to: "/services/software",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    subtitle: "Migration, DevOps & Platform",
    description: "Supporting cloud migration, modernization, DevOps, platform engineering, and operational excellence.",
    to: "/services/cloud",
  },
  {
    icon: Boxes,
    title: "Enterprise Applications",
    subtitle: "ERP, CRM, HCM & Business Platforms",
    description: "Implement, integrate and modernize SAP, Oracle, Microsoft Dynamics, Workday, Salesforce and other enterprise platforms.",
    to: "/services/enterprise-applications",
  },
  {
    icon: Users,
    title: "Technology Workforce Solutions",
    subtitle: "Contract, Permanent & Project Staffing",
    description: "Access highly skilled technology professionals for contract, full-time and project-based roles.",
    to: "/services/staffing",
  },
  {
    icon: LifeBuoy,
    title: "Managed Delivery Services",
    subtitle: "Dedicated Engineering Pods",
    description: "End-to-end delivery teams that own outcomes from build to ongoing support.",
    to: "/services/managed-delivery",
  },
];

const APPROACH_STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Market Intelligence",
    text: "Deep market analysis and demand mapping to identify required skills.",
  },
  {
    num: "02",
    icon: Users,
    title: "Talent Mapping",
    text: "Profiling top-tier professionals across our global talent network.",
  },
  {
    num: "03",
    icon: ClipboardCheck,
    title: "Skills Assessment",
    text: "Rigorous technical vetting, code reviews, and scenario evaluations.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Executive Validation",
    text: "Leadership alignment, compliance clearance, and culture matching.",
  },
  {
    num: "05",
    icon: Target,
    title: "Strategic Recommendations",
    text: "Final delivery roadmap and seamless onboarding for fast time-to-value.",
  },
];

const INDUSTRIES = [
  {
    slug: "financial",
    name: "Financial Services",
    text: "Secure, compliant and intelligent technology solutions.",
    image: indFinancial,
    icon: Landmark,
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    text: "Digital health, interoperability and technology modernization.",
    image: indHealthcare,
    icon: HeartPulse,
  },
  {
    slug: "technology",
    name: "Technology",
    text: "Engineering scale, AI and SaaS modernization.",
    image: indTechnology,
    icon: Cpu,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    text: "Smart manufacturing, ERP and digital supply chains.",
    image: indManufacturing,
    icon: Factory,
  },
  {
    slug: "retail",
    name: "Retail & Telecom",
    text: "Commerce, customer experience and data platforms.",
    image: indRetail,
    icon: ShoppingBag,
  },
  {
    slug: "government",
    name: "Public Sector",
    text: "Workforce and modernization for government organizations.",
    image: indGovernment,
    icon: Building2,
  },
];

const STATS_TODAY = [
  {
    num: "2008",
    label: "Founded in New Jersey",
    icon: Landmark,
  },
  {
    num: "300+",
    label: "Professionals deployed",
    icon: Users,
  },
  {
    num: "250+",
    label: "Global employees",
    icon: Globe,
  },
  {
    num: "24×7",
    label: "Global recruiting operations",
    icon: Clock,
  },
  {
    num: "80%",
    label: "Repeat business from existing clients",
    icon: Repeat,
  },
  {
    num: "100+",
    label: "Specialized technical recruiters",
    icon: UserCheck,
  },
];

const INSIGHTS = [
  {
    tag: "AI",
    title: "The Enterprise AI Workforce",
    desc: "Why AI transformation is becoming a talent and operating-model challenge.",
    image: insightsTeam,
  },
  {
    tag: "WORKFORCE STRATEGY",
    title: "Building High-Performance Technology Teams",
    desc: "Key strategies for scaling enterprise engineering talent.",
    image: storyGov,
  },
  {
    tag: "INDUSTRY",
    title: "Technology Modernization in Financial Services",
    desc: "How enterprises are modernizing platforms with specialized talent.",
    image: storyCloud,
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Contract Staffing",
    subtitle: "Agile Burst Capacity",
    desc: "Rapid deployment of vetted technical specialists to fill critical skill gaps, accelerate delivery timelines, and scale project throughput.",
    points: ["48-hour talent shortlists", "Zero administrative overhead", "Flexible contract duration"],
    to: "/services/staffing",
    icon: Users,
  },
  {
    title: "Contract-to-Hire",
    subtitle: "Risk-Mitigated Evaluation",
    desc: "Evaluate technical excellence and culture alignment directly within your production environment before making permanent hiring commitments.",
    points: ["Hands-on evaluation period", "Seamless FTE conversion", "Reduced hiring risk"],
    to: "/services/staffing",
    icon: UserCheck,
  },
  {
    title: "Direct Placement",
    subtitle: "Strategic Engineering Search",
    desc: "Executive search and specialized recruitment for mission-critical full-time engineering leaders, architects, and principal contributors.",
    points: ["Deep passive talent network", "Multi-stage technical vetting", "Retention guarantee"],
    to: "/services/staffing",
    icon: Target,
  },
  {
    title: "Managed Delivery (SOW)",
    subtitle: "Outcome-Driven Engineering Pods",
    desc: "Dedicated cross-functional teams that own end-to-end deliverables, milestones, and SLAs with full governance and transparent tracking.",
    points: ["Dedicated engineering pods", "SLA & milestone accountability", "Onshore/offshore model"],
    to: "/services",
    icon: LifeBuoy,
  },
];

const CREDENTIALS = [
  {
    name: "M/WBE Certified",
    label: "Minority & Women-Owned Business Enterprise",
    desc: "Certified diverse enterprise meeting state, municipal, and commercial supply chain diversity standards.",
    image: certMwbe,
    tag: "Supplier Diversity",
  },
  {
    name: "SBE Certified",
    label: "Small Business Enterprise",
    desc: "Recognized Small Business status facilitating seamless public-sector and enterprise subcontracting.",
    image: certSbe,
    tag: "Public & Enterprise",
  },
  {
    name: "SAM.gov Registered",
    label: "Federal System for Award Management",
    desc: "Active federal contractor status with verified CAGE Code and Unique Entity Identifier (UEI).",
    image: certSam,
    tag: "Federal Contractor",
  },
  {
    name: "E-Verify Employer",
    label: "Federal Employment Eligibility Verification",
    desc: "100% compliance with federal employment standards ensuring fully verified, work-authorized professionals.",
    image: certEverify,
    tag: "Workforce Compliance",
  },
];

const SERVICE_PATHWAYS = [
  {
    title: "Technology Consulting",
    desc: "Cloud, AI, digital engineering & enterprise platform modernizations.",
    to: "/services/software",
  },
  {
    title: "Workforce Solutions",
    desc: "Specialized technical talent, high-impact contract staffing & team scaling.",
    to: "/services/staffing",
  },
  {
    title: "Managed Delivery",
    desc: "Dedicated engineering pods, outcome-driven delivery & SLA engagements.",
    to: "/services",
  },
];

/* ────────────────────────── Hero ────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 sm:pt-32 pb-8 overflow-hidden bg-[#071326]">
      {/* Background photography: Executives overlooking city skyline at dusk */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroExecutives}
          alt="ConfigUSA Enterprise Leadership"
          className="h-full w-full object-cover object-right lg:object-center"
        />
        {/* Restrained corporate gradient: Left side dark navy for sharp editorial legibility, right side cleanly reveals executives & sunset skyline */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/85 via-45% to-transparent to-60% pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071326] via-[#071326]/60 to-transparent pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-3xl">
          {/* Amber Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#f5a623] mb-4"
          >
            ENTERPRISE TECHNOLOGY & WORKFORCE SOLUTIONS
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold text-white leading-[1.06] tracking-tight"
          >
            Technology. Talent.
            <br />
            Transformation.
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-[19px] text-slate-200 max-w-2xl leading-relaxed font-normal"
          >
            Building the capabilities enterprises need to transform, scale and compete.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] shadow-md hover:bg-[#e09612] transition-colors"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Explore Our Capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Stats Bar Across the Bottom of the Hero */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-6 pt-7 border-t border-white/15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* Stat 1: 300+ Professionals Deployed */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white">
              <Users className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                300+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                Professionals Deployed
              </div>
            </div>
          </div>

          {/* Stat 2: 250+ Global Employees */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:border-l md:border-white/15 md:pl-6 lg:pl-8">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white">
              <Globe className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                250+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                Global Employees
              </div>
            </div>
          </div>

          {/* Stat 3: 24×7 Global Recruiting Operations */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:border-l md:border-white/15 md:pl-6 lg:pl-8">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white">
              <BarChart3 className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                24×7
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                Global Recruiting Operations
              </div>
            </div>
          </div>

          {/* Stat 4: 80% Repeat Business from Existing Clients */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:border-l md:border-white/15 md:pl-6 lg:pl-8">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white">
              <ShieldCheck className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                80%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                Repeat Business from Existing Clients
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────── Who We Are ────────────────────────── */

function WhoWeAre() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Eyebrow, Heading, Paragraph, Button, and 4 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            {/* Eyebrow Label */}
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#e89218] mb-3.5">
              WHO WE ARE
            </p>

            {/* Main Heading: Clean corporate Sans-Serif (Inter) strictly on 2 lines */}
            <h2
              style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.45rem] font-extrabold text-[#0c2340] leading-[1.2] tracking-[-0.025em]"
            >
              <span className="block sm:whitespace-nowrap">More Than a Staffing Company.</span>
              <span className="block sm:whitespace-nowrap">A Technology Growth Partner.</span>
            </h2>

            {/* Paragraph Text */}
            <p className="mt-5 text-[#556882] text-[15px] sm:text-[16px] leading-[1.65] max-w-[490px]">
              ConfigUSA combines specialized talent, proven delivery and global reach to
              help enterprises build, scale and transform their technology organizations.
            </p>

            {/* Button */}
            <div className="mt-7">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-[#07172f] hover:bg-[#0d2345] px-6 py-3.5 text-sm font-semibold text-white transition-colors shadow-sm"
              >
                More About ConfigUSA <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Lower Feature Row: 4 Standalone Gold Icons & Clean Labels */}
            <div className="mt-12 pt-8 border-t border-slate-100/90 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <Users className="h-6 w-6 text-[#d49b29] mb-2 stroke-[1.75]" />
                <div className="font-bold text-sm text-[#0c2340]">People</div>
                <div className="text-xs text-[#64748b] mt-0.5 leading-snug">Exceptional Talent</div>
              </div>

              <div>
                <Cpu className="h-6 w-6 text-[#d49b29] mb-2 stroke-[1.75]" />
                <div className="font-bold text-sm text-[#0c2340]">Technology</div>
                <div className="text-xs text-[#64748b] mt-0.5 leading-snug">Deep Expertise</div>
              </div>

              <div>
                <Handshake className="h-6 w-6 text-[#d49b29] mb-2 stroke-[1.75]" />
                <div className="font-bold text-sm text-[#0c2340]">Partnership</div>
                <div className="text-xs text-[#64748b] mt-0.5 leading-snug">Long-Term Relationships</div>
              </div>

              <div>
                <Sparkles className="h-6 w-6 text-[#d49b29] mb-2 stroke-[1.75]" />
                <div className="font-bold text-sm text-[#0c2340]">Possibilities</div>
                <div className="text-xs text-[#64748b] mt-0.5 leading-snug">Real Business Outcomes</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Office Meeting Photo with Soft Left Fade + Overlapping Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative pb-10 sm:pb-8 lg:pb-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src={whoWeAreReferenceMeeting}
                alt="ConfigUSA Team Collaborating"
                className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover object-center"
              />
              {/* Soft subtle gradient on left to seamlessly blend into background as seen in reference */}
              <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
            </div>

            {/* Mission Card: Pure White with Yellow Accent Bar Underneath */}
            <div className="relative sm:absolute sm:-bottom-6 sm:right-2 mt-4 sm:mt-0 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100/90 max-w-sm sm:max-w-[340px] z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e89218] mb-2">
                OUR MISSION
              </p>
              <p className="text-xs sm:text-[13.5px] text-[#334155] leading-relaxed font-normal">
                “To deliver the right talent and technology capabilities that help enterprises achieve their most important goals.”
              </p>
              {/* Horizontal Golden Accent Bar Underneath Quote */}
              <div className="h-1 w-10 bg-[#f5a623] rounded-full mt-3.5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Capabilities ────────────────────────── */

function CapabilitiesSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              OUR CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              End-to-End Technology Workforce Solutions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              From AI to enterprise platforms and world-class talent, we help organizations achieve their most important technology goals.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            View All Capabilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6 Capabilities Cards in 3x2 Grid matching Reference */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
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
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-800">
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Engagement Models ────────────────────────── */

function EngagementModelsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              ENGAGEMENT MODELS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Flexible Models Built for Enterprise Scale
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Whether you need strategic individual contributors or dedicated managed pods, we structure engagements to align with your operating models and delivery goals.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            Discuss Engagement Options <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_MODELS.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col justify-between rounded-xl bg-[#f8fafc] p-6 sm:p-7 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-5">
                  <m.icon className="h-6 w-6 stroke-[1.75]" />
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs font-semibold text-[#e89218] mt-0.5">
                  {m.subtitle}
                </p>

                <p className="text-xs sm:text-[13px] text-slate-600 mt-3 leading-relaxed">
                  {m.desc}
                </p>

                <ul className="mt-4 space-y-1.5 pt-4 border-t border-slate-200/60">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <Link
                  to={m.to as any}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-800"
                >
                  Explore Model <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Approach / Process ────────────────────────── */

function ProcessSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              OUR APPROACH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              From Talent Intelligence to Workforce Advantage
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal leading-relaxed">
              A structured, data-driven approach to identify, validate and deploy the right talent for your business.
            </p>
          </div>
          <Link
            to="/process"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            Learn About Our Process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 5-Step Process with Amber Rings & Arrows matching Reference */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
          {APPROACH_STEPS.map((step, idx) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-3 w-full lg:w-44 group"
              >
                {/* Circular Badge with Amber Border */}
                <div className="relative mb-3 flex items-center justify-center">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-amber-200 bg-amber-50/70 flex items-center justify-center text-[#e89218] shadow-sm group-hover:scale-105 transition-transform">
                    <step.icon className="h-7 w-7 sm:h-8 sm:w-8 stroke-[1.75]" />
                  </div>
                </div>

                <div className="text-xs font-extrabold text-[#071326] mb-1">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-[#071326] leading-snug">
                  {step.title}
                </h3>
              </motion.div>

              {idx < APPROACH_STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-slate-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Industry Expertise ────────────────────────── */

function IndustriesSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              INDUSTRY EXPERTISE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Deep Knowledge. Real Impact.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              We deliver specialized talent and solutions across key industries.
            </p>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            View All Industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6 Vertical Image Cards matching Reference */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to="/industries/$industryId"
                params={{ industryId: ind.slug }}
                className="group relative flex flex-col justify-end h-80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-5 text-white"
              >
                {/* Background image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/95 via-[#071326]/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="h-7 w-7 text-[#f5a623] mb-2.5">
                    <ind.icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug mb-3">
                    {ind.text}
                  </p>
                  <span className="inline-flex items-center text-xs text-amber-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Global Delivery ────────────────────────── */

function GlobalDeliverySection() {
  return (
    <section className="py-20 lg:py-24 bg-[#071326] text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">
                GLOBAL DELIVERY
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight">
              A Global Workforce for a Stronger Tomorrow
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Integrated U.S.–Canada–India delivery ecosystem with client leadership,
              specialized recruiting, account management and 24×7 delivery operations.
            </p>

            {/* Delivery Locations */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 max-w-lg">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-[#f5a623]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    United States
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Client Partnership & Onshore Delivery · New Jersey
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 max-w-lg">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-[#f5a623]">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    India
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Global Engineering & Delivery Center · Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Delivery Features */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-sm">
              {[
                { title: "24×7 Delivery Operations", icon: Clock },
                { title: "Onshore & Offshore Teams", icon: Users },
                { title: "Scalable Delivery Pods", icon: Layers },
                { title: "Enterprise-Grade Security", icon: ShieldCheck },
                { title: "SLA-Driven Engagements", icon: CheckCircle2 },
              ].map((feat) => (
                <div key={feat.title} className="flex items-center gap-3 text-slate-200">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/20 text-[#f5a623]">
                    <feat.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{feat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── ConfigUSA Today (Restored) ────────────────────────── */

function ConfigUSATodaySection() {
  return (
    <section className="py-14 lg:py-16 bg-white border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 border-l-[3px] border-[#f5a623] pl-3.5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218]">
            CONFIGUSA TODAY
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS_TODAY.map((stat, idx) => (
            <motion.div
              key={stat.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-3.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#d49b29] border border-amber-100/60">
                <stat.icon className="h-5 w-5 stroke-[1.75]" />
              </div>
              <div>
                <div className="text-2xl sm:text-[26px] font-extrabold text-[#071326] tracking-tight leading-none">
                  {stat.num}
                </div>
                <div className="text-xs text-slate-500 font-medium leading-tight mt-1">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Success Story ────────────────────────── */

function CaseStudySection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              SUCCESS STORY & CASE STUDY
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Scaling a 40-Person Cloud Engineering Org in 41 Days
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              How ConfigUSA enabled a Fortune 500 financial platform to accelerate delivery timelines and conquer specialized technical talent scarcity.
            </p>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            View All Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch mb-12">
          {/* 3-Step Structured Breakdown: Challenge -> Approach -> Outcome */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {/* 1. The Challenge */}
            <div className="rounded-xl border border-slate-200/90 bg-[#f8fafc] p-6">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-700 text-xs font-bold">1</span>
                <h3 className="font-bold text-sm sm:text-base text-[#071326] uppercase tracking-wider">
                  The Challenge
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A Tier-1 financial institutions group required urgent deployment of 40 specialized senior engineers across AWS cloud architecture, microservices, and compliance infrastructure to meet mandatory regulatory launch deadlines within a compressed 60-day window.
              </p>
            </div>

            {/* 2. Our Approach */}
            <div className="rounded-xl border border-slate-200/90 bg-[#f8fafc] p-6">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">2</span>
                <h3 className="font-bold text-sm sm:text-base text-[#071326] uppercase tracking-wider">
                  Our Approach
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ConfigUSA mobilized a dedicated 24×7 technical recruiting pod, deployed AI-assisted candidate mapping, and activated custom technical vetting tracks—evaluating 420+ vetted profiles through rigorous architecture reviews and executive clearance workflows.
              </p>
            </div>

            {/* 3. The Outcome */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5a623] text-white text-xs font-bold">3</span>
                <h3 className="font-bold text-sm sm:text-base text-[#071326] uppercase tracking-wider">
                  The Outcome
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Fully staffed 40 engineering roles in 41 days (19 days ahead of target) with a 95% retention rate across 18 months, enabling the client to complete their platform launch on schedule and achieve a 3.5× acceleration in deployment velocity.
              </p>
            </div>
          </div>

          {/* Right Column: Case study team photo + Executive Quote Overlay Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md flex-1 min-h-[320px]">
              <img
                src={caseStudyTeam}
                alt="Engineering Organization Scaling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/95 via-[#071326]/40 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white">
                <div className="text-[#f5a623] text-2xl font-serif mb-1">“</div>
                <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-3">
                  ConfigUSA's speed, talent caliber and managed execution allowed us to achieve our cloud migration milestones without compromising engineering standards.
                </blockquote>
                <div className="text-xs font-bold text-white">
                  Managing Director, Enterprise Technology
                </div>
                <div className="text-[11px] text-slate-300">
                  Global Financial Services Client
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Measurable Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/80">
          <div className="flex items-center gap-4 p-5 rounded-xl bg-[#f8fafc] border border-slate-200/80">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Users className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                40 Engineers
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Vetted & Deployed Across Cloud & DevOps
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-[#f8fafc] border border-slate-200/80">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#d49b29] border border-amber-100">
              <Clock className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                41 Days
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                To Full Team Deployment (19 Days Ahead)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-[#f8fafc] border border-slate-200/80">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <Award className="h-6 w-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                95% Retention
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Across 18-Month Engagement Period
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Credentials & Compliance ────────────────────────── */

function CredentialsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              CREDENTIALS & COMPLIANCE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Enterprise Rigor, Diversity & Federal Compliance
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              ConfigUSA operates with the highest standards of regulatory compliance, diversity certification, and federal contracting readiness.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            Review Compliance Standards <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col justify-between rounded-xl bg-white p-6 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Top Badge and Verified Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d49b29] bg-amber-50 px-2.5 py-1 rounded border border-amber-200/60">
                    {cred.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Logo Frame */}
                <div className="h-20 w-full flex items-center justify-center p-3 rounded-lg bg-slate-50 border border-slate-100 mb-4 group-hover:bg-blue-50/30 transition-colors">
                  <img
                    src={cred.image}
                    alt={cred.name}
                    className="max-h-full max-w-full object-contain filter contrast-105"
                  />
                </div>

                <h3 className="font-bold text-base text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                  {cred.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {cred.label}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {cred.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-800">
                <span>View Documentation</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Insights & Perspectives ────────────────────────── */

function InsightsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e89218] mb-1.5">
              INSIGHTS & PERSPECTIVES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Ideas That Drive Progress
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
              Expert perspectives on talent, technology and industry transformation.
            </p>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 self-start sm:self-end"
          >
            View All Insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col bg-[#f8fafc] rounded-xl overflow-hidden border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#071326]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                  {article.tag}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed flex-1">
                  {article.desc}
                </p>
                <Link
                  to="/resources"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-800"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Final CTA ────────────────────────── */

function FinalCTA() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#0a1628]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 py-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ready to Build What's Next?
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
            Let's discuss how ConfigUSA can help you access the right talent, accelerate
            delivery and scale your technology organization.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#e09612] transition-colors shadow-md"
          >
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Page ────────────────────────── */

function HomePage() {
  return (
    <>
      <Hero />
      <TechTicker title="TRUSTED BY ENTERPRISE & PUBLIC-SECTOR ORGANIZATIONS" />
      <WhoWeAre />
      <CapabilitiesSection />
      <EngagementModelsSection />
      <ProcessSection />
      <IndustriesSection />
      <GlobalDeliverySection />
      <CaseStudySection />
      <ConfigUSATodaySection />
      <CredentialsSection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
