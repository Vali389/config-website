import React, { useEffect, useState, useRef, Fragment } from "react";

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
  Sparkles,
  Bot,
  Brain,
  Database,
  GitBranch,
  ShieldCheck,
  Workflow,
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
  BarChart3,
  Bell,
  Lock,
  Activity,
  Globe,
  Headphones,
  Zap,
} from "lucide-react";

import heroImageNew from "@/assets/hero-image-new.jpg";
import heroTalentNetwork from "@/assets/hero-talent-network.png";
import heroPeople2 from "@/assets/hero-nopeople-2.jpg";
import heroPeople3 from "@/assets/hero-people-3.jpg";

import wdAi from "@/assets/wd-ai.jpg";
import wdEngineering from "@/assets/wd-engineering.jpg";
import wdCloud from "@/assets/wd-cloud.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import wdManaged from "@/assets/wd-managed.jpg";
import whoWeAreImg from "@/assets/about-hero-new.png";
import ctaHome from "@/assets/cta-home.jpg";
import storyHealthcare from "@/assets/story-healthcare.jpg";
import storyCloud from "@/assets/story-cloud.jpg";
import storyGov from "@/assets/story-gov.jpg";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certEverify from "@/assets/cert-everify.png";

import { StatsBar } from "@/components/StatsBar";
import { SectionHeading } from "@/components/SectionHeading";
import { CardParticles } from "@/components/CardParticles";
import { RainParticles } from "@/components/RainParticles";
import { Bubbles } from "@/components/Bubbles";
import { DriftParticles } from "@/components/DriftParticles";
import { SplitText } from "@/components/SplitText";
import { TechTicker } from "@/components/TechTicker";
import { Testimonials } from "@/components/Testimonials";
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap";
import { HeroParticleCanvas } from "@/components/HeroParticleCanvas";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ConfigUSA — Building the Workforce Behind Tomorrow's Digital Enterprises" },
      { name: "description", content: "ConfigUSA helps organizations transform ideas into business outcomes through AI, Digital Engineering, Enterprise Technology, and world-class talent solutions." },
      { property: "og:title", content: "ConfigUSA — Technology Growth Partner" },
      { property: "og:description", content: "AI, Digital Engineering, Cloud, Enterprise Applications, and Technology Workforce Solutions for the modern enterprise." },
    ],
  }),
  component: HomePage,
});

/* ────────────────────────── Data ────────────────────────── */

const HERO_SLIDES = [
  {
    image: heroImageNew,
    imagePosition: "object-center",
    eyebrow: "Enterprise IT Staffing · Technology Talent Pods",
    title: (
      <>
        Connecting Enterprises with <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold">Niche Technology & Engineering Talent</span>
      </>
    ),
    subtitle: "ConfigUSA delivers premier IT staffing, contract engineering, direct placement, and dedicated delivery pods—deploying top-tier technology specialists who move enterprise initiatives forward with speed and precision.",
    primaryBtn: { text: "Request Technology Talent", to: "/contact" },
    secondaryBtn: { text: "Explore Staffing Solutions", to: "/services/staffing" },
  },
  {
    image: heroPeople2,
    imagePosition: "object-center",
    eyebrow: "Contract, Permanent & Managed Workforce",
    title: (
      <>
        Scalable Workforce Solutions <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold">Built for Modern Digital Transformation</span>
      </>
    ),
    subtitle: "From cloud architects and AI specialists to SAP consultants and full-stack software squads, we deliver rigorously vetted technology professionals tailored to your exact tech stack, timeline, and company culture.",
    primaryBtn: { text: "Talk to a Staffing Expert", to: "/contact" },
    secondaryBtn: { text: "View Talent Capabilities", to: "/services" },
  },
  {
    image: heroPeople3,
    imagePosition: "object-center",
    contentClass: "pt-4 sm:pt-6",
    eyebrow: "Global IT Career Opportunities",
    title: (
      <>
        Elevate Your Career with <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold">World-Class Tech Enterprise Projects</span>
      </>
    ),
    subtitle: "Join a culture built around innovation, professional growth, and continuous learning. We source niche tech talent globally to connect passionate IT professionals with transformative enterprise initiatives and leading software environments.",
    primaryBtn: { text: "Explore Open Roles", to: "/careers" },
    secondaryBtn: { text: "Partner With Us", to: "/contact" },
  },
];

const WHAT_WE_DO = [
  { icon: BrainCircuit, image: wdAi, eyebrow: "Generative AI & Automation", title: "AI & Intelligent Solutions", text: "Helping organizations adopt Generative AI, intelligent automation, and AI-powered business solutions.", to: "/services" },
  { icon: Code2, image: wdEngineering, eyebrow: "Modern Apps & Platforms", title: "Digital Engineering", text: "Building modern applications, cloud-native platforms, APIs, and scalable digital experiences.", to: "/services/software" },
  { icon: Cloud, image: wdCloud, eyebrow: "Migration, DevOps & Platform", title: "Cloud & Infrastructure", text: "Supporting cloud migration, modernization, DevOps, platform engineering, and operational excellence.", to: "/services/software" },
  { icon: Boxes, image: wdEnterprise, eyebrow: "ERP, CRM, HCM & Business Platforms", title: "Enterprise Applications", text: "Helping organizations implement, integrate and modernize SAP, Oracle, Microsoft Dynamics, Workday, Salesforce and other enterprise platforms.", to: "/services/enterprise-applications" },
  { icon: Users, image: wdWorkforce, eyebrow: "Contract, Permanent & Managed", title: "Technology Workforce Solutions", text: "Contract, permanent, project-based, and managed workforce solutions tailored to business needs.", to: "/services/staffing" },
  { icon: LifeBuoy, image: wdManaged, eyebrow: "Dedicated & Offshore Teams", title: "Managed Delivery Services", text: "Dedicated teams, offshore delivery, project execution, and ongoing application support.", to: "/services" },
];

const STRENGTHS = [
  "Enterprise-focused delivery",
  "Global recruiting capabilities",
  "Experienced technology specialists",
  "Flexible engagement models",
  "Quality-driven hiring processes",
  "Strong communication and accountability",
  "Long-term client relationships",
];

const WHY_ORBIT = [
  { icon: Building2, label: "Enterprise Delivery" },
  { icon: Globe2, label: "Global Recruiting" },
  { icon: Users, label: "Expert Specialists" },
  { icon: Layers, label: "Flexible Models" },
  { icon: BadgeCheck, label: "Quality Hiring" },
  { icon: Workflow, label: "Clear Communication" },
  { icon: Handshake, label: "Long-Term Partners" },
];

const INDUSTRIES = [
  { slug: "healthcare", icon: HeartPulse, name: "Healthcare", text: "Supporting digital health, clinical systems, infrastructure modernization, and patient-centered innovation.", features: ["FHIR & HL7 Interoperability", "HIPAA & SOC 2 Compliance", "Clinical EHR Integrations"] },
  { slug: "financial", icon: Landmark, name: "Financial Services", text: "Enabling secure, compliant, and scalable digital banking and financial technology initiatives.", features: ["PCI-DSS Compliance", "Core Transaction Engines", "Digital Banking Apps"] },
  { slug: "government", icon: Building2, name: "Government", text: "Dependable technology professionals for public sector modernization and mission-critical projects.", features: ["FedBiz Access Platforms", "Agency Modernization", "E-Verify Integration"] },
  { slug: "manufacturing", icon: Factory, name: "Manufacturing", text: "Supporting ERP transformation, automation, smart factories, and digital supply chains.", features: ["ERP Solutions (SAP/Oracle)", "Smart Factory Automation", "Supply Chain Optimization"] },
  { slug: "retail", icon: ShoppingBag, name: "Retail", text: "Enhancing customer experience, e-commerce platforms, and data-driven decision making.", features: ["E-commerce Architectures", "Customer Analytics Platforms", "Omnichannel Engagement"] },
  { slug: "technology", icon: Cpu, name: "Technology", text: "Helping software companies scale engineering teams and accelerate product delivery.", features: ["Engineering Team Scale-up", "Generative AI Integration", "SaaS DevOps Modernization"] },
];

const AI_FOCUS = [
  { icon: Sparkles, label: "Generative AI" },
  { icon: Bot, label: "AI Agents" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "Data Platforms" },
  { icon: GitBranch, label: "MLOps" },
  { icon: ShieldCheck, label: "Responsible AI" },
  { icon: Workflow, label: "AI Integration" },
];

const STORIES = [
  { icon: Users, image: storyGov, tag: "Technology", title: "Rapid IT Team Expansion", text: "A client needed 40 software engineers within 45 days. With a dedicated recruitment pod, AI-driven sourcing, and weekend interview drives, we delivered 38 successful hires in just 41 days." },
  { icon: Cloud, image: storyCloud, tag: "Cloud", title: "Cloud Transformation Hiring", text: "For an urgent AWS migration, our specialized cloud recruiters closed 100% of the open positions within three weeks — keeping the project firmly on schedule." },
  { icon: HeartPulse, image: storyHealthcare, tag: "Healthcare", title: "Healthcare Digital Transformation", text: "Sourcing niche healthcare technology professionals, we reduced the client's hiring cycle by 60% while maintaining rigorous screening and quality standards." },
];

const PILLARS = [
  { icon: Target, title: "Business Understanding", text: "We align technology talent with your business objectives." },
  { icon: BadgeCheck, title: "Quality Delivery", text: "Every engagement is built around consistency, responsiveness, and measurable value." },
  { icon: Layers, title: "Scalable Teams", text: "From a single consultant to dedicated delivery teams." },
  { icon: Globe2, title: "Global Reach", text: "Talent and delivery capabilities across North America and India." },
];

const ENGAGEMENT = [
  { icon: FileText, title: "Contract Staffing", text: "Skilled professionals deployed on flexible contract terms—scale your teams up or down as project demands shift." },
  { icon: Repeat, title: "Contract-to-Hire", text: "Evaluate talent on live work before converting to permanent roles, dramatically reducing hiring risk." },
  { icon: UserPlus, title: "Direct Placement", text: "Permanent hires sourced, screened, and matched to your culture and long-term technical needs." },
  { icon: Boxes, title: "Managed Delivery", text: "Dedicated onshore & offshore squads that own outcomes end-to-end, from build to ongoing support." },
];

const JOURNEY = [
  { icon: PhoneCall, title: "Discovery Call", text: "We start by understanding your goals, tech stack, timeline, and team culture — not just a job description." },
  { icon: Search, title: "Talent Match", text: "Our specialists source and rigorously vet candidates matched to your exact technical and cultural needs." },
  { icon: Rocket, title: "Rapid Onboarding", text: "Selected talent is onboarded fast and productive from day one — onshore, offshore, or blended." },
  { icon: ShieldCheck, title: "Delivery & Support", text: "Dedicated teams deliver with ongoing communication, quality checks, and full accountability." },
  { icon: Handshake, title: "Long-Term Partnership", text: "We scale with you — growing teams and evolving support as your business and priorities grow." },
];

const LOCATIONS = [
  {
    region: "North America",
    role: "Client Partnership & Onshore Delivery",
    points: ["Account management & consulting", "Onshore technology talent", "Time-zone-aligned, rapid support"],
  },
  {
    region: "India",
    role: "Global Delivery & Engineering Center",
    points: ["Offshore delivery pods", "Round-the-clock engineering & support", "Cost-efficient scale"],
  },
];

const CERTIFICATIONS = [
  { image: certMwbe, name: "M/WBE", label: "Minority/Woman-Owned Business Enterprise" },
  { image: certSbe, name: "SBE", label: "Small Business Enterprise Certified" },
  { image: certSam, name: "SAM", label: "SAM Registered — FedBiz Access" },
  { image: certEverify, name: "E-Verify", label: "E-Verify Employer" },
];

const INSIGHTS = [
  { tag: "AI", title: "The Future of AI in the Enterprise", date: "Jan 12, 2026", icon: BrainCircuit },
  { tag: "Cloud", title: "Cloud Modernization: A Practical Roadmap", date: "Dec 04, 2025", icon: Cloud },
  { tag: "Workforce", title: "Workforce Strategies for a Changing Market", date: "Nov 20, 2025", icon: Users },
];

/* ────────────────────────── Key Features (Enterprise Growth Matrix) ────────────────────────── */

function KeyFeatures() {
  const AI_CAPABILITIES = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Talent Matching",
      desc: "Deep skill-graph matching pairs exact enterprise needs with top 1% verified engineers.",
      tag: "AI Sourcing",
    },
    {
      icon: Code2,
      title: "Automated Code & Arch Screening",
      desc: "Rigorous technical vetting across system design, code quality, and domain competence.",
      tag: "Verified Quality",
    },
    {
      icon: Zap,
      title: "Rapid Onboarding & Scale",
      desc: "Accelerated deployment pipelines to spin up pods or specialists in as little as 48 hours.",
      tag: "48h Deployment",
    },
  ];

  const ENTERPRISE_CAPABILITIES = [
    {
      icon: Globe2,
      title: "Global Talent Footprint",
      desc: "Strategic onshore & offshore engineering hubs spanning the United States and India.",
      tag: "Global Reach",
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Vetting & Compliance",
      desc: "End-to-end background checks, E-Verify, SAM registered, and enterprise governance.",
      tag: "Full Compliance",
    },
    {
      icon: Headphones,
      title: "Dedicated Account Support",
      desc: "Executive engagement leads and agile project delivery managers for sustained momentum.",
      tag: "24/7 Dedicated",
    },
  ];

  const CORE_STATS = [
    { value: "15+", label: "Years Experience", subtext: "Industry Track Record", icon: Sparkles, color: "from-blue-500 to-cyan-400" },
    { value: "98%", label: "Client Retention", subtext: "Long-Term Partnerships", icon: ShieldCheck, color: "from-emerald-400 to-teal-500" },
    { value: "500+", label: "Enterprise Projects", subtext: "Delivered on Schedule", icon: Rocket, color: "from-indigo-400 to-blue-500" },
    { value: "24/7", label: "Global Delivery", subtext: "Follow-The-Sun Pods", icon: Globe2, color: "from-cyan-400 to-blue-600" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#071326] via-[#0d2246] to-[#091730] relative overflow-hidden border-y border-blue-900/40 text-white">
      {/* Background ambient circuit & network grid & glow effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          light={true}
          title={
            <>
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Scale With Confidence
              </span>
            </>
          }
          subtitle="ConfigUSA brings together intelligent technology, global reach, and people-first delivery — all in one trusted partnership."
        />

        {/* 3-Column Modern Enterprise Hub */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">

          {/* Left Column: AI & Engineering Acceleration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-4"
          >
            <div className="px-2 pb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                <BrainCircuit className="h-4 w-4" /> AI & Talent Velocity
              </span>
            </div>

            {AI_CAPABILITIES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 shadow-xs group-hover:bg-gradient-brand group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* Bottom accent hover indicator */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Centerpiece: The ConfigUSA Enterprise Core Command Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#061224] via-[#0d1e38] to-[#0f2952] text-white p-6 sm:p-7 shadow-2xl border border-blue-500/30 overflow-hidden min-h-[460px] group"
          >
            {/* Ambient Background Glows & Conic Animation */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

            {/* Top Hub Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-300">
                  ConfigUSA Scale Engine
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/90 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-sm">
                Enterprise Core
              </span>
            </div>

            {/* 2x2 Metric Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-3.5 my-5">
              {CORE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl bg-white/[0.06] backdrop-blur-md p-4 border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.1] transition-all duration-300 group/tile flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-sm group-hover/tile:scale-110 transition-transform">
                      <stat.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-300/80">
                      Verified
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-white/95 leading-tight mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-white/60 leading-tight mt-0.5">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Trust & Delivery Pods Footnote */}
            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/75">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" /> SLA Guaranteed
              </span>
              <span className="text-cyan-300 font-bold">
                US + Global Pods
              </span>
            </div>
          </motion.div>

          {/* Right Column: Global Reach & Rigorous Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-4"
          >
            <div className="px-2 pb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                <ShieldCheck className="h-4 w-4" /> Enterprise Trust & Scale
              </span>
            </div>

            {ENTERPRISE_CAPABILITIES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 shadow-xs group-hover:bg-gradient-brand group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* Bottom accent hover indicator */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Hero ────────────────────────── */

const TEXT_SLIDES = [
  {
    eyebrow: "Enterprise IT Staffing",
    title: "Niche Technology &\nEngineering Talent",
    subtitle: "From cloud architects to AI engineers — rigorously vetted talent matched to your exact tech stack.",
    primaryBtn: { text: "Request Talent", to: "/contact" },
  },
  {
    eyebrow: "Digital Transformation",
    title: "Scalable Workforce\nfor Modern Enterprises",
    subtitle: "Contract, permanent & managed talent deployed fast — aligned to your timeline and culture.",
    primaryBtn: { text: "View Solutions", to: "/services" },
  },
  {
    eyebrow: "Global Delivery",
    title: "Managed Technology\nDelivery Pods",
    subtitle: "Dedicated onshore & offshore squads — owning outcomes from build to ongoing support.",
    primaryBtn: { text: "Explore Delivery", to: "/services" },
  },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward

  const goTo = (next: number, direction: number) => {
    setDir(direction);
    setIdx(next);
  };
  const prev = () => goTo(idx === 0 ? TEXT_SLIDES.length - 1 : idx - 1, -1);
  const next = () => goTo((idx + 1) % TEXT_SLIDES.length, 1);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => goTo((idx + 1) % TEXT_SLIDES.length, 1), 6000);
    return () => clearInterval(t);
  }, [idx]);

  const slide = TEXT_SLIDES[idx];

  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 pb-3 sm:pb-5 overflow-hidden bg-[#06152F] border-b border-blue-900/40">

      {/* ── Fixed particle background matching #06152F → #003BB2 → #0EA5E9 ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep blue gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06152F] via-[#081e42] to-[#002f8a] opacity-90 pointer-events-none" />
        {/* Technology blue bloom #003BB2 */}
        <div className="absolute top-1/4 right-[10%] w-[700px] h-[700px] rounded-full bg-[#003BB2]/35 blur-[140px] pointer-events-none" />
        {/* Electric sky cyan glow #0EA5E9 */}
        <div className="absolute top-1/3 right-[18%] w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/20 blur-[110px] pointer-events-none" />
        {/* Ambient top-left diffuse glow */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#003BB2]/20 blur-[130px] pointer-events-none" />
        <HeroParticleCanvas />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152F] via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* ── Left arrow ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* ── Right arrow ── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ── Text content — only this slides ── */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-16 sm:px-20 lg:px-24 overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 80 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -80 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 mb-5 rounded-full border border-blue-500/35 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {slide.eyebrow}
            </span>

            {/* Heading — single line */}
            <h1 className="font-display text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight whitespace-pre-line">
              {slide.title.split("\n")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                {slide.title.split("\n")[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Single CTA */}
            <Link
              to={slide.primaryBtn.to as any}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-bold text-white shadow-glow hover:scale-[1.04] active:scale-[0.97] transition-transform cursor-pointer"
            >
              {slide.primaryBtn.text} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Dash indicators — SPIN style */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {TEXT_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > idx ? 1 : -1)}
              aria-label={`Slide ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${i === idx ? "w-8 bg-cyan-400" : "w-4 bg-white/25 hover:bg-white/50"
                }`}
            />
          ))}
        </div>


      </div>

      {/* StatsBar */}
      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 mt-auto">
        <StatsBar className="relative z-20 mx-auto max-w-5xl w-full" />
      </div>
    </section>
  );
}

/* ────────────────────────── Success Stories Section ────────────────────────── */


function SuccessStoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#f5f9fe] via-[#edf4fc] to-[#f5f9fe] border-y border-blue-100/70 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/3 w-80 h-80 bg-blue-300/10 rounded-full blur-[110px]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Success Stories"
          title={
            <>
              Real Outcomes for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Real Organizations
              </span>
            </>
          }
          subtitle="Business results delivered through the right technology talent, at the right time."
        />
      </div>

      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#f5f9fe] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#f5f9fe] to-transparent z-10" />

        <div className={`flex gap-6 w-max ${isInView ? "animate-marquee" : ""} hover:[animation-play-state:paused] px-3`}>
          {[...STORIES, ...STORIES].map((s, idx) => (
            <article
              key={idx}
              className="group relative w-[320px] md:w-[380px] shrink-0 flex flex-col rounded-3xl bg-white text-ink border border-blue-100/80 shadow-card hover:shadow-elegant hover:border-blue-300/60 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-blue-600 text-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider shadow-md">
                  {s.tag}
                </span>
                <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed text-justify flex-1">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Page ────────────────────────── */

function HomePage() {
  return (
    <>
      {/* ── Hero with Viewport-contained StatsBar ── */}
      <Hero />

      {/* ── Trusted by Organizations ── */}
      <TechTicker />

      {/* ── Who We Are (Redesigned Modern Section) ── */}
      <section className="py-24 lg:py-28 bg-gradient-to-b from-white via-[#f0f6fe] to-[#e6f1fc] relative overflow-hidden border-b border-blue-100/50">
        {/* Very subtle light-blue ambient glow behind image and content */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-blue-400/12 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* Left Column (5 cols): Interactive Framed Visual & Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-brand opacity-15 blur-2xl pointer-events-none" />

            <div className="relative rounded-3xl border border-blue-200/80 bg-white p-3 shadow-elegant overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <img
                  src={whoWeAreImg}
                  alt="ConfigUSA technology professionals collaborating"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img
                  src={heroPeople2}
                  alt="ConfigUSA engineering excellence"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />

                {/* Top SLA Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white border border-white/15 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  100% US-Based &amp; Global Delivery
                </div>

                {/* Overlay Floating Stat Card */}
                <div className="absolute bottom-4 inset-x-4 sm:inset-x-5 z-10 rounded-2xl bg-slate-950/85 backdrop-blur-md p-4 border border-white/15 shadow-2xl flex items-center gap-4 text-white">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black tracking-tight text-white">98.4%</span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                        Client Retention
                      </span>
                    </div>
                    <p className="text-xs text-white/75 mt-0.5 leading-snug">
                      Long-term enterprise partnerships built on trust and SLA delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Content & Redesigned Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Who We Are
              </span>
            </div>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.55rem] font-black text-slate-900 leading-snug tracking-tight mb-4 whitespace-nowrap">
              More Than a Staffing Company.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                A Technology Growth Partner.
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-medium">
              At ConfigUSA, we pair intelligent matching algorithms with specialized engineering pods to deploy high-caliber technology talent that moves enterprise initiatives forward with speed and precision.
            </p>

            {/* 3 Redesigned Glassmorphic Skill Cards */}
            <div className="space-y-3.5">
              <div className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300 shadow-xs">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Skill-Graph &amp; Technical Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    Multi-level technical screening, code verification, and architectural assessment before submission.
                  </p>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300 shadow-xs">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Compliance &amp; Dedicated Engagement Manager
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    100% compliant background screening, E-Verify, SAM registered, and dedicated SLA management.
                  </p>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300 shadow-xs">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Rapid Talent Pod Deployment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    Deploy contract specialists, full-stack software squads, or cloud architects within 48 to 72 hours.
                  </p>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              >
                More About ConfigUSA <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#f1f6fc] to-[#e4eef9] border-y border-blue-200/50 relative overflow-hidden">
        {/* Very soft background curves & large blurred blobs strictly BEHIND content */}
        <div className="pointer-events-none absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-blue-300/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-36 right-1/4 h-96 w-96 rounded-full bg-cyan-300/15 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M-100 250 C 300 450, 700 50, 1100 300 C 1300 420, 1500 200, 1600 250" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
            <path d="M-100 350 C 250 150, 650 500, 1050 200 C 1250 80, 1450 350, 1600 300" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.12" fill="none" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                End-to-End Capabilities That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Drive Outcomes
                </span>
              </>
            }
            subtitle="From AI to enterprise platforms and world-class talent, we help organizations achieve their most important technology goals."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={c.to as any}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-[0_24px_48px_rgba(29,78,216,0.14)] hover:border-brand/20 transition-all duration-300 relative"
                >
                  {/* Image with title overlay */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
                    <span className="absolute top-3 left-3 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur border border-white/25 text-white group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                      <c.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                      <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:animate-ripple" />
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white leading-snug group-hover:text-[#60a5fa] transition-colors">
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 pt-5 pb-8">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-blue-600 mb-3 leading-tight">
                      {c.eyebrow}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify flex-1 text-justify">{c.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:text-[#60a5fa] transition-colors">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* Diagonal light sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
                    <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shine" />
                  </div>

                  {/* Rising particles on hover */}
                  <CardParticles />

                  {/* Shine Bottom Edge Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <KeyFeatures />

      {/* ── Your Journey (horizontal stepper) ── */}
      <section className="py-24 bg-gradient-to-b from-[#e8f1fc] via-[#e3eefb] to-[#edf4fc] relative overflow-hidden border-y border-blue-200/50">
        {/* Subtle horizontal process flow glow behind cards */}
        <div className="pointer-events-none absolute top-1/2 left-0 right-0 h-48 -translate-y-1/2 bg-gradient-to-r from-blue-400/5 via-cyan-400/10 to-indigo-400/5 blur-2xl" />
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="How We Partner"
            title={
              <>
                Your Journey With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  ConfigUSA
                </span>
              </>
            }
            subtitle="From first conversation to long-term partnership — here's how we help you move forward with confidence."
            maxWidth="max-w-6xl"
          />
          <div className="mt-16">
            {/* Horizontal 5-column stepper grid matching the attached image exactly */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10 items-stretch">
              {JOURNEY.map((j, i) => (
                <div key={j.title} className="relative flex flex-col">
                  {/* Step Card matching color, shape, decreased height, and icon of the image */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative flex-1 w-full flex flex-col justify-between rounded-[2rem] bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 border border-blue-300/30 p-5 sm:p-6 shadow-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
                  >
                    <div>
                      {/* Top Header: Inline Icon and Title */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <j.icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                          {j.title}
                        </h3>
                      </div>

                      {/* Description - left aligned for clean typography, decreased vertical height */}
                      <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed text-justify text-left">
                        {j.text}
                      </p>
                    </div>

                    {/* Diagonal light sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                      <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:animate-shine" />
                    </div>
                    <CardParticles />
                  </motion.div>

                  {/* Arrow after each step (except the last one) - exactly overlapping the right edge like the image */}
                  {i < JOURNEY.length - 1 && (
                    <div className="group/arrow hidden lg:flex absolute -right-4.5 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg border border-slate-100/10 cursor-pointer transition-all duration-300 hover:scale-115 hover:bg-blue-50 active:scale-95">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/arrow:translate-x-0.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f4f8fe] to-[#edf4fd] text-slate-900 relative overflow-hidden border-y border-blue-100/70">
        {/* Soft blurred blue blobs & organic ambient shapes */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -right-24 h-[450px] w-[450px] rounded-full bg-cyan-300/12 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-indigo-300/10 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Engagement Models"
            title={
              <>
                Flexible Ways to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Work With Us
                </span>
              </>
            }
            subtitle="From a single specialist to a fully managed delivery team, choose the engagement that fits your goals and timeline."
          />
          <div className="mt-14 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {ENGAGEMENT.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[#f8fafc] border-2 border-slate-200/90 p-8 shadow-sm hover:-translate-y-2 hover:scale-[1.01] hover:bg-white hover:border-blue-500 hover:shadow-[0_20px_45px_rgba(59,130,246,0.14)] transition-all duration-500 cursor-pointer text-slate-900"
              >
                <div className="flex items-center gap-4">
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-blue-600 shadow-sm transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-white group-hover:border-transparent group-hover:scale-110">
                    <e.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-500">{e.title}</h3>
                </div>
                <p className="mt-5 text-base text-slate-600 leading-relaxed text-justify flex-1 font-medium transition-colors duration-500">{e.text}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-brand opacity-40 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                {/* Diagonal light sweep on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                  <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-blue-50/50 to-transparent group-hover:animate-shine" />
                </div>
                <CardParticles />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Industries ── */}
      <section className="relative py-24 bg-gradient-to-b from-[#edf3fa] via-[#f3f7fc] to-[#eaf1f8] overflow-hidden border-y border-slate-200/60">
        <div className="pointer-events-none absolute inset-0 bg-plus-grid opacity-35" />
        <div className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-slate-400/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Deep Expertise Across the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Sectors You Serve
                </span>
              </>
            }
            subtitle="We bring specialized knowledge and proven delivery to the industries driving digital transformation."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  to="/industries/$industryId"
                  params={{ industryId: n.slug }}
                  className="group relative overflow-hidden flex flex-col h-full gap-4 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 border border-blue-300/30 p-6 shadow-card hover:-translate-y-3 hover:scale-[1.015] hover:from-blue-300 hover:via-blue-400 hover:to-indigo-400 hover:border-blue-200/50 hover:shadow-[0_20px_45px_rgba(59,130,246,0.35)] transition-all duration-500 cursor-pointer text-white min-h-[220px]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                      <n.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold text-blue-200 uppercase tracking-widest mb-1">Specialist Talent</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">{n.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed text-justify flex-1">{n.text}</p>

                  {/* Hover Overlay Panel (covers card cleanly on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af] via-[#1d4ed8] to-[#3730a3] p-6 flex flex-col justify-between opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300 border border-white/10">
                          <n.icon className="h-4.5 w-4.5" />
                        </span>
                        <h4 className="text-base font-bold text-white">{n.name} Solutions</h4>
                      </div>
                      <p className="text-[10px] text-blue-300 font-extrabold uppercase tracking-widest mb-2">Key Focus Areas</p>
                      <ul className="space-y-1.5">
                        {n.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-white/90">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/10">
                      <span className="text-xs font-bold text-blue-300 group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                        Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  {/* Diagonal light sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                  </div>
                  {/* Rain particles on hover */}
                  <CardParticles variant="rain" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-brand transition-colors"
            >
              Explore All Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── The AI Advantage ── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f0f5fc] via-[#e8f1fc] to-[#f2f7fd] text-slate-900 border-y border-blue-200/70">
        {/* Soft technology background ambient glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-blue-300/25 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-24 right-10 w-[400px] h-[400px] bg-cyan-300/15 rounded-full blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700 mb-4">The AI Advantage</p>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.55rem] font-black text-slate-900 leading-snug tracking-tight">
              Helping Organizations Succeed in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                AI Era
              </span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed text-justify max-w-md font-medium">
              Artificial Intelligence is changing every industry. ConfigUSA helps organizations build AI-ready teams by
              providing expertise across strategy, engineering, data, governance, and implementation.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/30 hover:scale-105 transition-transform"
            >
              Build Your AI Team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="relative">
            {/* Rotating orbital circle — lg and up */}
            <div className="relative mx-auto hidden lg:block w-[420px] h-[420px]">
              {/* Rotating conic ring */}
              <div
                className="absolute inset-6 rounded-full animate-ring"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, rgba(29,78,216,0.5) 90deg, transparent 210deg)",
                  maskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                  WebkitMaskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                }}
              />
              {/* Static dashed guide ring */}
              <div className="absolute inset-6 rounded-full border border-dashed border-blue-300" />
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-brand text-white shadow-lg shadow-blue-600/40 animate-glow-pulse">
                <Sparkles className="h-6 w-6" />
                <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-wider">AI Ready</span>
              </div>
              {/* Orbiting capability pills */}
              {AI_FOCUS.map((a, i) => {
                const angle = (360 / AI_FOCUS.length) * i;
                return (
                  <div
                    key={a.label}
                    className="absolute left-1/2 top-1/2 animate-orbit z-20"
                    style={{ "--angle": `${angle}deg` } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-2 rounded-full bg-white border-2 border-blue-200 px-3.5 py-2 shadow-md hover:border-blue-500 hover:shadow-lg transition-colors">
                      <a.icon className="h-4 w-4 text-blue-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-900 whitespace-nowrap">{a.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Wrapped pills — below lg */}
            <div className="flex flex-wrap gap-3 lg:hidden">
              {AI_FOCUS.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-2.5 rounded-full bg-white border border-slate-200 px-5 py-3 shadow-xs hover:border-blue-300 transition-all"
                >
                  <a.icon className="h-4 w-4 text-blue-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Stories (auto-scroll) ── */}
      <SuccessStoriesSection />

      {/* ── Global Delivery Footprint ── */}
      <section className="relative py-20 bg-gradient-to-b from-[#edf4fc] via-[#e2eefb] to-[#edf4fc] text-slate-900 overflow-hidden border-y border-blue-200/60">
        {/* Subtle technology dot grid, coordinate lines & soft glow */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-400/15 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[250px] bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">

          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 mb-4 justify-center flex items-center gap-2">
              <Globe2 className="h-4 w-4 animate-spin-slow" /> Global Delivery
            </p>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.55rem] font-black leading-snug tracking-tight text-slate-900">
              A Delivery Model That Spans{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Onshore &amp; Offshore
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed text-center max-w-4xl mx-auto font-medium sm:whitespace-nowrap">
              Our operational centers in the United States and India power round-the-clock momentum.
            </p>
          </div>

          {/* Interactive World Map Matching Reference Image */}
          <InteractiveWorldMap />

        </div>
      </section>


      {/* ── Why Companies Continue ── */}
      <section className="py-24 bg-gradient-to-b from-[#f2f7fd] via-[#eaf2fb] to-[#f4f9fe] relative overflow-hidden border-y border-blue-100/60">
        {/* Subtle brand watermark effect & soft ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[13vw] font-black text-blue-600/[0.025] tracking-widest uppercase whitespace-nowrap z-0">
          CONFIGUSA
        </div>
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-400/10 rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 bg-cyan-300/10 rounded-full blur-[110px]" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Why Companies Stay"
            title={
              <>
                Why Companies Continue to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Work with Us
                </span>
              </>
            }
          />
          <div className="mt-16 relative">
            {/* Animated connecting line (chain) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 origin-left bg-gradient-to-r from-brand/0 via-brand to-brand/0 z-0"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="text-center group flex flex-col items-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md ring-4 ring-blue-100/70 group-hover:scale-125 group-hover:shadow-glow transition-all duration-300">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f6fc] to-[#eaf2fb] relative overflow-hidden border-t border-blue-100/70">
        <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 bg-blue-300/10 rounded-full blur-[110px]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Ideas Shaping the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Future of Technology
                </span>
              </>
            }
            subtitle="Perspectives on AI, digital transformation, workforce strategy, and technology leadership."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white border border-border/50 shadow-card hover:shadow-elegant transition-all overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-hero flex items-center justify-center">
                  <p.icon className="h-14 w-14 text-white/40" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-brand transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <Link to="/resources" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <CardParticles />
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-brand transition-colors"
            >
              View All Insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24 bg-gradient-to-b from-[#eaf2fb] via-[#f4f8fe] to-white border-t border-blue-100/60 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Certifications & Credentials"
            title={
              <>
                Certified, Compliant &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Trusted
                </span>
              </>
            }
            subtitle="ConfigUSA holds the certifications and registrations that let organizations engage us with confidence across commercial and public-sector programs."
          />
        </div>

        <div className="mt-14 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#eaf2fb] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#eaf2fb] to-transparent z-10" />

          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] px-3">
            {[...CERTIFICATIONS, ...CERTIFICATIONS].map((c, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden w-[260px] md:w-[300px] shrink-0 flex flex-col items-center text-center rounded-2xl bg-soft/60 border border-border/50 p-8 hover:bg-white hover:shadow-card hover:border-brand/20 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex h-28 w-full items-center justify-center">
                  <img
                    src={c.image}
                    alt={`${c.name} certification`}
                    loading="lazy"
                    className="max-h-28 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-6 text-base font-bold text-ink group-hover:text-brand transition-colors">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed text-justify">{c.label}</p>
                {/* Diagonal light sweep on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-brand/10 to-transparent group-hover:animate-shine" />
                </div>
                <CardParticles />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Employers / For Job Seekers ── */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f1f6fc] to-[#eaf2fb] border-y border-blue-100/60 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-300/10 rounded-full blur-[130px]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Get Started"
            title={
              <>
                Whether You're Hiring or{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                  Growing Your Career
                </span>
              </>
            }
            subtitle="ConfigUSA is the bridge between forward-thinking organizations and exceptional technology talent."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {/* Employers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-glow p-10 text-white shadow-elegant"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur border border-white/25">
                <Briefcase className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight">For Employers</h3>
              <p className="relative mt-3 text-white/85 leading-relaxed text-justify max-w-md">
                Access experienced technology professionals and specialized delivery teams—matched to your goals and
                delivered with speed and quality.
              </p>
              <Link
                to="/request-talent"
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand shadow-lg hover:scale-105 transition-transform"
              >
                Request Talent <ArrowRight className="h-4 w-4" />
              </Link>
              <CardParticles />
            </motion.div>

            {/* Job Seekers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl bg-[#162540] p-10 text-white shadow-elegant border border-white/10"
            >
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-glow/20 blur-2xl" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-brand-glow">
                <Search className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight">For Job Seekers</h3>
              <p className="relative mt-3 text-white/70 leading-relaxed text-justify max-w-md">
                Build your career on meaningful work with leading organizations. Explore roles across AI, cloud,
                enterprise platforms, and engineering.
              </p>
              <Link
                to="/careers"
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform"
              >
                Explore Careers <ArrowRight className="h-4 w-4" />
              </Link>
              <CardParticles />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl shadow-2xl border border-blue-500/25"
        >
          <img src={ctaHome} alt="Let's Build the Future Together background" className="absolute inset-0 h-full w-full object-cover animate-zoom-pulse opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#061124] via-[#0b2046] to-[#144287]" />
          {/* Subtle technology grid and electric blue glows */}
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #38bdf8 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
            <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.55rem] font-black text-white leading-snug tracking-tight max-w-3xl">
              Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Future Together</span>
            </h2>
            <p className="mt-4 text-white/75 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed text-justify">
              Whether you're scaling engineering teams, implementing enterprise platforms, or advancing your AI strategy,
              ConfigUSA is ready to help.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand/90 px-8 py-4 text-sm font-bold text-white tracking-wide transition-all hover:scale-105 shadow-lg"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur px-8 py-4 text-sm font-bold text-white tracking-wide hover:bg-white/10 transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
