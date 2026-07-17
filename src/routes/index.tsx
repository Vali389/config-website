import { useEffect, useState } from "react";
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
} from "lucide-react";

import heroGlobe from "@/assets/hero-globe.jpg";
import heroTeamNew from "@/assets/hero-team-new.png";
import heroDataNew from "@/assets/hero-data-new.png";

import wdAi from "@/assets/wd-ai.jpg";
import wdEngineering from "@/assets/wd-engineering.jpg";
import wdCloud from "@/assets/wd-cloud.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import wdManaged from "@/assets/wd-managed.jpg";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import ctaHome from "@/assets/cta-home.jpg";
import storyHealthcare from "@/assets/story-healthcare.jpg";
import storyCloud from "@/assets/story-cloud.jpg";
import storyGov from "@/assets/story-gov.jpg";

import { StatsBar } from "@/components/StatsBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TechTicker } from "@/components/TechTicker";
import { Testimonials } from "@/components/Testimonials";

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

const SLIDES = [
  {
    image: heroGlobe,
    eyebrow: "Technology. Talent. Transformation.",
    title: (
      <>
        Building the Workforce Behind{" "}
        <span className="block text-[#60a5fa]">Tomorrow's Digital Enterprises</span>
      </>
    ),
    subtitle:
      "ConfigUSA empowers organizations with AI, Digital Engineering, Cloud, Enterprise Applications, and Technology Workforce Solutions—helping businesses innovate faster, scale smarter, and stay ahead in a rapidly changing world.",
  },
  {
    image: heroTeamNew,
    eyebrow: "A Technology Growth Partner",
    title: (
      <>
        Turning Strategic Initiatives Into{" "}
        <span className="block text-[#60a5fa]">Measurable Business Results</span>
      </>
    ),
    subtitle:
      "We connect organizations with exceptional technology professionals and specialized delivery teams who help move enterprise initiatives forward with confidence.",
  },
  {
    image: heroDataNew,
    eyebrow: "Succeed in the AI Era",
    title: (
      <>
        AI-Ready Teams for the{" "}
        <span className="block text-[#60a5fa]">Next Wave of Innovation</span>
      </>
    ),
    subtitle:
      "From Generative AI and intelligent automation to data platforms and MLOps, we help you build the expertise to lead in an AI-driven world.",
  },
];

const WHAT_WE_DO = [
  { icon: BrainCircuit, image: wdAi, eyebrow: "Generative AI & Automation", title: "AI & Intelligent Solutions", text: "Helping organizations adopt Generative AI, intelligent automation, and AI-powered business solutions.", to: "/services" },
  { icon: Code2, image: wdEngineering, eyebrow: "Modern Apps & Platforms", title: "Digital Engineering", text: "Building modern applications, cloud-native platforms, APIs, and scalable digital experiences.", to: "/services/software" },
  { icon: Cloud, image: wdCloud, eyebrow: "Migration, DevOps & Platform", title: "Cloud & Infrastructure", text: "Supporting cloud migration, modernization, DevOps, platform engineering, and operational excellence.", to: "/services/software" },
  { icon: Boxes, image: wdEnterprise, eyebrow: "SAP, Oracle, Salesforce, Workday", title: "Enterprise Applications", text: "Expertise across SAP, Oracle, Salesforce, Workday, and other enterprise business platforms.", to: "/services/sap" },
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

const INDUSTRIES = [
  { icon: HeartPulse, name: "Healthcare", text: "Supporting digital health, clinical systems, infrastructure modernization, and patient-centered innovation." },
  { icon: Landmark, name: "Financial Services", text: "Enabling secure, compliant, and scalable digital banking and financial technology initiatives." },
  { icon: Building2, name: "Government", text: "Dependable technology professionals for public sector modernization and mission-critical projects." },
  { icon: Factory, name: "Manufacturing", text: "Supporting ERP transformation, automation, smart factories, and digital supply chains." },
  { icon: ShoppingBag, name: "Retail", text: "Enhancing customer experience, e-commerce platforms, and data-driven decision making." },
  { icon: Cpu, name: "Technology", text: "Helping software companies scale engineering teams and accelerate product delivery." },
];

const AI_FOCUS = [
  { icon: Sparkles, label: "Generative AI" },
  { icon: Bot, label: "AI Agents & Automation" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "AI Data Platforms" },
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

const INSIGHTS = [
  { tag: "AI", title: "The Future of AI in the Enterprise", date: "Jan 12, 2026", icon: BrainCircuit },
  { tag: "Cloud", title: "Cloud Modernization: A Practical Roadmap", date: "Dec 04, 2025", icon: Cloud },
  { tag: "Workforce", title: "Workforce Strategies for a Changing Market", date: "Nov 20, 2025", icon: Users },
];

/* ────────────────────────── Hero ────────────────────────── */

function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden flex items-center bg-[#051124]">
      <div className="absolute inset-0 bg-[#051124] z-0" />
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img src={heroGlobe} alt="" className="h-full w-full object-cover opacity-35 scale-105 animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand/20 rounded-full blur-3xl opacity-30 animate-pulse-ring" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-glow/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3.5xl text-left"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-glow mb-5">
            Technology. Talent. Transformation.
          </span>
          <h1 className="font-display text-[2.2rem] sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Building the Workforce Behind{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Tomorrow's Digital Enterprises
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
            ConfigUSA empowers organizations with AI, Digital Engineering, Cloud, Enterprise Applications, and Technology Workforce Solutions—helping businesses innovate faster, scale smarter, and stay ahead in a rapidly changing world.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all"
            >
              Request Technology Talent
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────── Page ────────────────────────── */

function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Trusted by Organizations ── */}
      <TechTicker />

      {/* ── Who We Are ── */}
      <section className="py-24 lg:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-10 blur-2xl" />
            <img
              src={whoWeAreImg}
              alt="ConfigUSA technology professionals collaborating"
              className="relative rounded-3xl shadow-elegant border border-border/60 w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight tracking-tight">
              More Than a Staffing Company.{" "}
              <span className="text-gradient-brand">A Technology Growth Partner.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Technology transformation depends on people. At ConfigUSA, we connect organizations with exceptional
              technology professionals and specialized delivery teams who help turn strategic initiatives into
              measurable business results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether expanding engineering teams, implementing enterprise platforms, modernizing applications, or
              launching AI initiatives, we deliver the expertise organizations need to move forward with confidence.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
            >
              More About ConfigUSA <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 bg-soft border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-End Capabilities That Drive Outcomes"
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
                    <span className="absolute top-3 left-3 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur border border-white/25 text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white leading-snug group-hover:text-[#60a5fa] transition-colors">
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 pt-5 pb-8">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-brand mb-3 leading-tight">
                      {c.eyebrow}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:text-[#60a5fa] transition-colors">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* Shine Bottom Edge Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ConfigUSA ── */}
      <section className="py-24 bg-[#051124] text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 opacity-25 pointer-events-none select-none z-0">
          <svg viewBox="0 0 1000 500" className="w-full h-auto text-blue-500" fill="currentColor">
            <circle cx="100" cy="150" r="3" />
            <circle cx="150" cy="130" r="3" />
            <circle cx="200" cy="180" r="3" />
            <circle cx="250" cy="220" r="3" />
            <circle cx="300" cy="140" r="3" />
            <circle cx="350" cy="190" r="3" />
            <circle cx="450" cy="120" r="3" />
            <circle cx="500" cy="210" r="3" />
            <circle cx="580" cy="180" r="3" />
            <circle cx="640" cy="140" r="3" />
            <circle cx="700" cy="220" r="3" />
            <circle cx="800" cy="130" r="3" />
            <circle cx="850" cy="180" r="3" />
            <g className="text-blue-400">
              <circle cx="580" cy="180" r="6" className="animate-ping" />
              <circle cx="580" cy="180" r="4" />
            </g>
            <path d="M 50,150 Q 150,100 250,200 T 450,150 T 650,250 T 850,150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,12" className="opacity-30" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-glow mb-4">Why ConfigUSA</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Delivering Business Value Beyond Talent
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Instead of simply supplying professionals, we become an extension of your organization—bringing expertise,
              responsiveness, and a commitment to your long-term success.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand/90 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 shadow-md"
            >
              Discover Our Approach <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {STRENGTHS.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-brand-glow/50 transition-all"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-glow mt-0.5" />
                <span className="text-sm font-medium text-white/85 leading-snug">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Deep Expertise Across the Sectors You Serve"
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
                className="group flex items-start gap-4 rounded-2xl bg-soft/70 p-6 border-l-4 border-l-transparent border border-border/50 hover:border-l-brand hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand-glow/10 text-brand group-hover:from-brand group-hover:to-brand-glow group-hover:text-white transition-all duration-300">
                  <n.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-brand transition-colors">{n.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{n.text}</p>
                </div>
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
      <section className="relative py-24 overflow-hidden bg-[#051124]">
        <div className="absolute inset-0">
          <img src={heroDataNew} alt="" className="h-full w-full object-cover opacity-30 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-glow mb-4">The AI Advantage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Helping Organizations Succeed in the AI Era
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Artificial Intelligence is changing every industry. ConfigUSA helps organizations build AI-ready teams by
              providing expertise across strategy, engineering, data, governance, and implementation.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
            >
              Build Your AI Team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {AI_FOCUS.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-2.5 rounded-full bg-white/5 border border-white/15 px-5 py-3 backdrop-blur hover:bg-white/10 hover:border-brand-glow transition-all"
              >
                <a.icon className="h-4 w-4 text-brand-glow shrink-0" />
                <span className="text-sm font-semibold text-white/90 whitespace-nowrap">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories (auto-scroll) ── */}
      <section className="py-24 bg-soft border-y border-border/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Success Stories"
            title="Real Outcomes for Real Organizations"
            subtitle="Business results delivered through the right technology talent, at the right time."
          />
        </div>

        <div className="mt-14 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-soft to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-soft to-transparent z-10" />

          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] px-3">
            {[...STORIES, ...STORIES].map((s, idx) => (
              <article
                key={idx}
                className="group w-[320px] md:w-[380px] shrink-0 flex flex-col rounded-2xl bg-white border border-border/50 shadow-card hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-brand">
                    {s.tag}
                  </span>
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Companies Continue ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Companies Stay"
            title="Why Companies Continue to Work with Us"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand-glow/10 group-hover:from-brand group-hover:to-brand-glow transition-all">
                  <p.icon className="h-7 w-7 text-brand group-hover:text-white transition-colors" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="py-24 bg-soft border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas Shaping the Future of Technology"
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
                className="group rounded-2xl bg-white border border-border/50 shadow-card hover:shadow-elegant transition-all overflow-hidden"
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

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Final CTA ── */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl"
        >
          <img src={ctaHome} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-deep/85 to-navy/70" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-glow/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight tracking-tight max-w-3xl">
              Let's Build the <span className="text-brand-glow">Future Together</span>
            </h2>
            <p className="mt-5 text-white/75 text-base md:text-lg max-w-2xl leading-relaxed">
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
