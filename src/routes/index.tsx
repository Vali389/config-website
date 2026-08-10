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

import heroPremiumSlide1 from "@/assets/hero_premium_slide1.png";
import heroSlide2NoPeople from "@/assets/hero_slide2_no_people.png";
import heroSlide3NoPeople from "@/assets/hero_slide3_no_people.png";
import newHero1 from "@/assets/new-hero-1.jpg";

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
    image: newHero1,
    eyebrow: "Technology · Talent · Transformation",
    title: (
      <>
        Building the Workforce Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold">Tomorrow's Digital Enterprises</span>
      </>
    ),
    subtitle: "ConfigUSA empowers organizations with AI, Digital Engineering, Cloud, Enterprise Applications, and Technology Workforce Solutions—helping businesses innovate faster, scale smarter, and stay ahead in a rapidly changing world.",
    primaryBtn: { text: "Talk to an Expert", to: "/contact" },
    secondaryBtn: { text: "Request Technology Talent", to: "/contact" },
  },
  {
    image: heroSlide2NoPeople,
    eyebrow: "Engineering Excellence Sourced Dynamically",
    title: (
      <>
        Unlocking <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold">Engineering Excellence</span> with Our Talent Solutions
      </>
    ),
    subtitle: "We connect organizations with exceptional technology professionals and specialized delivery teams who move enterprise initiatives forward with confidence.",
    primaryBtn: { text: "Request Technology Talent", to: "/contact" },
    secondaryBtn: { text: "Learn More", to: "/services" },
  },
  {
    image: heroSlide3NoPeople,
    eyebrow: "Elevate Your Career Path",
    title: (
      <>
        Elevate Your Career with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold">Global IT Career Opportunities</span>
      </>
    ),
    subtitle: "Join a culture built around innovation, growth, and continuous learning. We source niche tech talent globally to connect passionate professionals with transformative enterprise initiatives and world-class software environments.",
    primaryBtn: { text: "Explore Careers", to: "/careers" },
    secondaryBtn: { text: "Join With Us", to: "/contact" },
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

const KEY_FEATURES_LEFT = [
  { icon: Bot, label: "AI Recruitment & Sourcing", text: "Generative AI engines screen, evaluate, and source top-tier technical candidates in record time." },
  { icon: UserCheck, label: "AI-Powered Talent Matching", text: "Smart algorithms align candidates to your exact tech stack, culture, and delivery needs." },
  { icon: Sparkles, label: "Automated AI Screening", text: "Comprehensive automated code testing and Generative AI technical interviews before submission." },
  { icon: Zap, label: "Rapid Talent Deployment", text: "Pre-vetted talent pools enable onboarding in days, not weeks — keeping projects on schedule." },
];

const KEY_FEATURES_RIGHT = [
  { icon: Globe, label: "Global Talent Reach", text: "Access to top-tier professionals across North America and India for 24/7 delivery coverage." },
  { icon: ShieldCheck, label: "Compliance & Verification", text: "End-to-end background checks, E-Verify, and credential validation built into every hire." },
  { icon: BarChart3, label: "Performance Analytics", text: "Real-time dashboards tracking team productivity, SLA adherence, and placement success." },
  { icon: Lock, label: "Secure & Confidential", text: "Enterprise-grade data privacy, NDA-backed processes, and SOC-aligned information handling." },
];


/* ────────────────────────── Key Features ────────────────────────── */

function KeyFeatures() {
  const HUB_IMAGES = [whoWeAreImg, heroPremiumSlide1, heroSlide2NoPeople, heroSlide3NoPeople, ctaHome];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % HUB_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white border-y border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Key Features"
          title="Everything You Need to Scale With Confidence"
          subtitle="ConfigUSA brings together intelligent technology, global reach, and people-first delivery — all in one trusted partnership."
        />

        {/* ── Desktop: Spoke Layout ── */}
        <div className="mt-16 hidden lg:flex items-center justify-between gap-0 relative min-h-[460px]">

          {/* Left features column */}
          <div className="flex flex-col gap-8 w-[320px] shrink-0">
            {KEY_FEATURES_LEFT.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group flex items-start gap-3 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-300 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="text-right flex-1">
                  <h3 className="text-sm font-bold text-blue-950 group-hover:text-blue-700 transition-colors leading-snug">
                    {f.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed text-justify">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting lines left → center */}
          <div className="flex-1 relative self-stretch mx-2 min-w-[40px]">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="absolute right-0 h-px bg-gradient-to-r from-blue-200 to-blue-500 origin-right"
                style={{ top: `${12.5 + i * 25}%`, width: "100%" }}
              />
            ))}
          </div>

          {/* Center hub — circular image with Carousel Left & Right Arrow controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="shrink-0 relative flex items-center justify-center group/hub"
            style={{ width: 360, height: 360 }}
          >
            {/* Outer ring */}
            <div className="absolute rounded-full border-2 border-dashed border-blue-300/60 animate-spin-slow"
              style={{ width: 340, height: 340 }}
            />
            {/* Inner ring */}
            <div className="absolute rounded-full border border-blue-400/30"
              style={{ width: 290, height: 290 }}
            />
            {/* Glowing conic sweep */}
            <div
              className="absolute rounded-full animate-ring"
              style={{
                width: 320, height: 320,
                background: "conic-gradient(from 0deg, transparent 0deg, rgba(96,165,250,0.5) 90deg, transparent 210deg)",
                maskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                WebkitMaskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
              }}
            />

            {/* Left Carousel Arrow Button */}
            <button
              onClick={() => setImgIndex((prev) => (prev === 0 ? HUB_IMAGES.length - 1 : prev - 1))}
              className="absolute left-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-blue-900 border border-blue-200 shadow-md hover:bg-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Carousel Arrow Button */}
            <button
              onClick={() => setImgIndex((prev) => (prev + 1) % HUB_IMAGES.length)}
              className="absolute right-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-blue-900 border border-blue-200 shadow-md hover:bg-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Circular image with AnimatePresence image switching */}
            <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_rgba(29,78,216,0.2)]"
              style={{ width: 260, height: 260 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={HUB_IMAGES[imgIndex]}
                  alt="ConfigUSA platform capability"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Center label badge */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-[0.65rem] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
              AI Recruitment 360°
            </div>
          </motion.div>

          {/* Connecting lines center → right */}
          <div className="flex-1 relative self-stretch mx-2 min-w-[40px]">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="absolute left-0 h-px bg-gradient-to-r from-blue-500 to-blue-200 origin-left"
                style={{ top: `${12.5 + i * 25}%`, width: "100%" }}
              />
            ))}
          </div>

          {/* Right features column */}
          <div className="flex flex-col gap-8 w-[320px] shrink-0">
            {KEY_FEATURES_RIGHT.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group flex items-start gap-3 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-300 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-blue-950 group-hover:text-blue-700 transition-colors leading-snug">
                    {f.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed text-justify">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile / Tablet: 2-column grid with top center hub ── */}
        <div className="mt-12 lg:hidden flex flex-col items-center gap-10">
          {/* Center Hub for Mobile */}
          <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
            <div className="absolute rounded-full border border-dashed border-blue-300/60 animate-spin-slow" style={{ width: 260, height: 260 }} />
            <div className="absolute rounded-full border border-blue-400/20" style={{ width: 230, height: 230 }} />

            {/* Mobile Left Arrow */}
            <button
              onClick={() => setImgIndex((prev) => (prev === 0 ? HUB_IMAGES.length - 1 : prev - 1))}
              className="absolute left-1 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-blue-900 border border-blue-200 shadow-md cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Mobile Right Arrow */}
            <button
              onClick={() => setImgIndex((prev) => (prev + 1) % HUB_IMAGES.length)}
              className="absolute right-1 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-blue-900 border border-blue-200 shadow-md cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-lg" style={{ width: 200, height: 200 }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={HUB_IMAGES[imgIndex]}
                  alt="ConfigUSA platform capability"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-[0.6rem] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md whitespace-nowrap">
              AI Recruitment 360°
            </div>
          </div>


          <div className="grid gap-5 sm:grid-cols-2 w-full">
            {[...KEY_FEATURES_LEFT, ...KEY_FEATURES_RIGHT].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex items-start gap-4 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-blue-950 group-hover:text-blue-700 transition-colors">{f.label}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed text-justify">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Hero ────────────────────────── */

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentSlide = HERO_SLIDES[slideIndex];

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[88vh] min-h-[650px] lg:h-[92vh] lg:min-h-[720px] overflow-hidden flex items-center bg-[#030a16] border-b border-blue-950/40"
    >
      {/* Background Image Carousel (Cross-Fade Transition) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={slideIndex}
            src={currentSlide.image}
            alt="ConfigUSA Solutions"
            className="absolute inset-0 h-full w-full object-cover opacity-95 animate-kenburns"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.90, scale: 1.07 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
          />
        </AnimatePresence>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030a16]/85 via-[#030a16]/65 to-[#030a16]/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/65 via-transparent to-transparent z-10" />

        {/* Drifting premium aurora tech glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] opacity-40 animate-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] opacity-30 animate-drift-slow" />
      </div>

      {/* Hero Content (Animated on slide change) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl text-left"
          >
            {/* Eyebrow Reveal */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-400 mb-5"
            >
              {currentSlide.eyebrow}
            </motion.span>

            {/* Title: Slide In Left + Fade In (Matches configusa.com animation) */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[1.85rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] font-extrabold text-white leading-[1.15] tracking-tight max-w-4xl"
            >
              {currentSlide.title}
            </motion.h1>

            {/* Subtitle: Slide In Up + Fade In (Matches configusa.com animation) */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed text-justify"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Buttons: Slide In Up + Fade In (Matches configusa.com animation) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to={currentSlide.primaryBtn.to as any}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              >
                {currentSlide.primaryBtn.text} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={currentSlide.secondaryBtn.to as any}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all cursor-pointer"
              >
                {currentSlide.secondaryBtn.text}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Slider Navigation Arrow Controls (Desktop/Tablet) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-between pointer-events-none">
        <button
          onClick={() => setSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/40 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:border-blue-500/40 hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer shadow-lg backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/40 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:border-blue-500/40 hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer shadow-lg backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slider Indicator Dots (Bottom center navigation) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlideIndex(idx)}
            className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${slideIndex === idx ? "w-8 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
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
    <section ref={sectionRef} className="py-24 bg-soft border-y border-border/40 overflow-hidden">
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
      {/* ── Hero ── */}
      <Hero />

      {/* ── Impact Stats ── */}
      <StatsBar />

      {/* ── Trusted by Organizations ── */}
      <TechTicker />

      {/* ── Who We Are ── */}
      <section className="py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-blue-50/80 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Framed Image with Badge Overlays */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-15 blur-2xl" />

            <div className="relative rounded-3xl border border-blue-200/80 bg-white p-2 sm:p-2.5 shadow-elegant overflow-hidden group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
                {/* Default Image */}
                <img
                  src={heroPremiumSlide1}
                  alt="ConfigUSA technology professionals collaborating"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Image */}
                <img
                  src={heroSlide2NoPeople}
                  alt="ConfigUSA engineering excellence dashboard"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />

                {/* Top-left SLA pill badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-navy-deep/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white border border-white/15 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  100% US-Based & Global Delivery
                </div>

                {/* Bottom stat overlay badge card */}
                <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 z-10 rounded-2xl bg-navy-deep/90 backdrop-blur-md p-4 sm:p-5 border border-white/15 shadow-2xl flex items-center gap-4 text-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <BadgeCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">98.4%</span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-300">
                        Client Retention
                      </span>
                    </div>
                    <p className="text-xs text-white/80 mt-0.5 leading-snug">
                      Long-term technology partnerships built on trust and delivery excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Heading + Intro Paragraph + 3 Stacked Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-700 mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-blue-700" />
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 leading-tight tracking-tight mb-4 text-left max-w-xl">
              More Than a Staffing Company. <span className="text-gradient-brand">A Technology Growth Partner.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-justify mb-8">
              Technology transformation depends on people. At ConfigUSA, we pair intelligent matching algorithms with
              specialized delivery teams to deliver high-caliber technology professionals who turn strategic initiatives
              into measurable business results.
            </p>

            {/* 3 stacked horizontal feature cards */}
            <div className="space-y-4">
              <div className="group rounded-2xl bg-white p-5 sm:p-6 border border-blue-100 shadow-card hover:shadow-elegant hover:border-blue-300 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <BadgeCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-blue-700 transition-colors">
                    Skill-Graph & Technical Vetting
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mt-1">
                    Every professional is rigorously verified across technical competencies, architecture expertise, and
                    delivery experience before submission.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-white p-5 sm:p-6 border border-blue-100 shadow-card hover:shadow-elegant hover:border-blue-300 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-blue-700 transition-colors">
                    Compliance & Dedicated Lead
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mt-1">
                    End-to-end compliance, background verification, and a dedicated engagement manager ensuring seamless
                    onboarding and ongoing momentum.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-white p-5 sm:p-6 border border-blue-100 shadow-card hover:shadow-elegant hover:border-blue-300 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-blue-700 transition-colors">
                    Specialist Teams Built for Speed
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mt-1">
                    Whether expanding engineering teams or implementing enterprise platforms, we assemble the exact
                    talent you need in record time.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform"
            >
              More About ConfigUSA <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 bg-white border-y border-border/40">
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
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-blue-50/80 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="How We Partner"
            title="Your Journey With ConfigUSA"
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Engagement Models"
            title={<span className="text-gradient-brand">Flexible Ways to Work With Us</span>}
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
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-blue-200/60 border border-blue-200/50 p-8 shadow-card hover:-translate-y-3 hover:scale-[1.015] hover:from-white hover:via-blue-100 hover:to-blue-300 hover:border-blue-400/60 hover:shadow-[0_20px_45px_rgba(59,130,246,0.15)] transition-all duration-500 cursor-pointer text-ink"
              >
                <div className="flex items-center gap-4">
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-white group-hover:scale-110">
                    <e.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold text-ink group-hover:text-blue-700 transition-colors duration-500">{e.title}</h3>
                </div>
                <p className="mt-5 text-base text-slate-600 leading-relaxed text-justify flex-1 text-justify transition-colors duration-500">{e.text}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-brand opacity-30 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                {/* Diagonal light sweep on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                  <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-brand/10 to-transparent group-hover:animate-shine" />
                </div>
                <CardParticles />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ConfigUSA ── */}
      <section className="py-24 bg-[#051124] text-white relative overflow-hidden">
        {/* Continuous ambient rising bubbles & tiny particles */}
        <Bubbles />
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
            <p className="mt-5 text-white/70 leading-relaxed text-justify max-w-md">
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

          <div className="relative z-10">
            {/* Rotating orbit — lg and up */}
            <div className="relative mx-auto hidden lg:block w-[420px] h-[420px]">
              {/* Rotating conic ring */}
              <div
                className="absolute inset-6 rounded-full animate-ring"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, rgba(96,165,250,0.6) 90deg, transparent 210deg)",
                  maskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                  WebkitMaskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                }}
              />
              {/* Static dashed guide ring */}
              <div className="absolute inset-6 rounded-full border border-dashed border-white/15" />
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow animate-glow-pulse">
                <Target className="h-6 w-6" />
                <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-wider">Why Us</span>
              </div>
              {/* Orbiting strengths (counter-rotating so text stays upright) */}
              {/* Orbiting strengths */}
              {WHY_ORBIT.map((w, i) => {
                const angle = (360 / WHY_ORBIT.length) * i;
                return (
                  <div
                    key={w.label}
                    className="absolute left-1/2 top-1/2 animate-orbit z-20"
                    style={{ "--angle": `${angle}deg` } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-2 backdrop-blur shadow-lg hover:bg-white/20 hover:border-brand-glow transition-colors">
                      <w.icon className="h-4 w-4 text-brand-glow shrink-0" />
                      <span className="text-xs font-semibold text-white/90 whitespace-nowrap">{w.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strengths list — below lg */}
            <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
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
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-plus-grid opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
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
      <section className="relative py-24 overflow-hidden bg-[#051124]">
        <div className="absolute inset-0">
          <img src={heroSlide3NoPeople} alt="" className="h-full w-full object-cover opacity-30 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        </div>
        {/* Ambient particles: falling bubbles + right-to-left drift */}
        <Bubbles direction="down" />
        <DriftParticles />
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
            <p className="mt-5 text-white/70 leading-relaxed text-justify max-w-md">
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

          <div className="relative">
            {/* Rotating orbital circle — lg and up */}
            <div className="relative mx-auto hidden lg:block w-[420px] h-[420px]">
              {/* Rotating conic ring */}
              <div
                className="absolute inset-6 rounded-full animate-ring"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, rgba(96,165,250,0.65) 90deg, transparent 210deg)",
                  maskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                  WebkitMaskImage: "radial-gradient(closest-side, transparent 73%, #000 75%)",
                }}
              />
              {/* Static dashed guide ring */}
              <div className="absolute inset-6 rounded-full border border-dashed border-white/15" />
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow animate-glow-pulse">
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
                    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-2 backdrop-blur shadow-lg hover:bg-white/20 hover:border-brand-glow transition-colors">
                      <a.icon className="h-4 w-4 text-brand-glow shrink-0" />
                      <span className="text-xs font-semibold text-white/90 whitespace-nowrap">{a.label}</span>
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
                  className="flex items-center gap-2.5 rounded-full bg-white/5 border border-white/15 px-5 py-3 backdrop-blur hover:bg-white/10 hover:border-brand-glow transition-all"
                >
                  <a.icon className="h-4 w-4 text-brand-glow shrink-0" />
                  <span className="text-sm font-semibold text-white/90 whitespace-nowrap">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Stories (auto-scroll) ── */}
      <SuccessStoriesSection />

      {/* ── Global Delivery Footprint ── */}
      <section className="relative py-20 bg-[#111c33] text-white overflow-hidden">
        {/* Subtle dot grid backdrop */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">

          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-glow mb-4 justify-center flex items-center gap-2">
              <Globe2 className="h-4 w-4 animate-spin-slow" /> Global Delivery
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight lg:whitespace-nowrap">
              A Delivery Model That Spans{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Onshore & Offshore
              </span>
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed text-center text-sm max-w-2xl mx-auto">
              Our operational centers in the United States and India power round-the-clock momentum, pairing local client partnership with offshore engineering scale.
            </p>
          </div>

          {/* Interactive World Map Matching Reference Image */}
          <InteractiveWorldMap />

        </div>
      </section>


      {/* ── Why Companies Continue ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Companies Stay"
            title="Why Companies Continue to Work with Us"
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
      <section className="py-24 bg-white border-t border-border/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Certifications & Credentials"
            title="Certified, Compliant & Trusted"
            subtitle="ConfigUSA holds the certifications and registrations that let organizations engage us with confidence across commercial and public-sector programs."
          />
        </div>

        <div className="mt-14 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

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
      <section className="py-24 bg-soft border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Get Started"
            title="Whether You're Hiring or Growing Your Career"
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
      <section className="py-16 px-4 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl"
        >
          <img src={ctaHome} alt="Let's Build the Future Together background" className="absolute inset-0 h-full w-full object-cover animate-zoom-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-deep/85 to-navy/70" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-glow/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight tracking-tight max-w-3xl">
              Let's Build the <span className="text-brand-glow">Future Together</span>
            </h2>
            <p className="mt-5 text-white/75 text-base md:text-lg max-w-2xl leading-relaxed text-justify">
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
