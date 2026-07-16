import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Users,
  Briefcase,
  GraduationCap,
  Globe2,
  ShieldCheck,
  Cpu,
  Landmark,
  Factory,
  ShoppingCart,
  Radio,
  Building2,
  Activity,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import heroGlobe from "@/assets/hero-globe.jpg";
import heroTeamNew from "@/assets/hero-team-new.png";
import servicesHero from "@/assets/services-hero-new.png";
import serviceStaffing from "@/assets/service-staffing.jpg";
import serviceSoftware from "@/assets/service-software.jpg";
import serviceSap from "@/assets/service-sap.jpg";
import serviceAssessment from "@/assets/service-assessment.jpg";
import heroIndustries from "@/assets/hero-industries.jpg";

import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { TechTicker } from "@/components/TechTicker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ConfigUSA — Technology. Talent. Transformation." },
      { name: "description", content: "ConfigUSA delivers innovative IT solutions and staffing services worldwide. Hire top talent, build software, and transform your business." },
      { property: "og:title", content: "ConfigUSA — Technology. Talent. Transformation." },
      { property: "og:description", content: "Premium IT staffing, software, SAP, and digital assessment services worldwide." },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  {
    image: heroGlobe,
    eyebrow: "Your Intelligent IT Partner",
    title: (
      <>
        Technology. Talent.{" "}
        <span className="block text-[#60a5fa]">Transformation.</span>
      </>
    ),
    subtitle: "ConfigUSA delivers innovative IT solutions and staffing services that help businesses accelerate growth, optimize operations, and build a future-ready workforce.",
  },
  {
    image: heroTeamNew,
    eyebrow: "Talent That Delivers",
    title: (
      <>
        Powering Growth With{" "}
        <span className="block text-[#60a5fa]">World-Class Talent.</span>
      </>
    ),
    subtitle: "From contract staffing to permanent hires, we match your business with the industry's most skilled IT professionals — vetted, verified, and ready to build.",
  },
  {
    image: servicesHero,
    eyebrow: "Engineered For Tomorrow",
    title: (
      <>
        Software & SAP Solutions{" "}
        <span className="block text-[#60a5fa]">Built to Scale.</span>
      </>
    ),
    subtitle: "End-to-end custom software, cloud modernization, and enterprise SAP implementations that unlock efficiency and long-term ROI.",
  },
];

const SERVICES = [
  { image: serviceStaffing,   title: "IT Staffing & Augmentation",  eyebrow: "Skilled IT Professionals On-Demand",            to: "/services/staffing",    popular: true,  description: "Skilled IT professionals for contract, contract-to-hire, and permanent roles across every major stack — deployed in days, not months." },
  { image: serviceSoftware,   title: "Software Development",         eyebrow: "Custom Software Built to Scale",                to: "/services/software",              description: "Custom web, mobile, cloud, and AI-powered software engineered to scale your business and delight your users." },
  { image: serviceSap,        title: "SAP Solutions",                eyebrow: "Enterprise-Grade SAP Consulting",               to: "/services/sap",                   description: "End-to-end SAP consulting, implementation, migration, support, and managed services from certified experts." },
  { image: serviceAssessment, title: "Digital Assessment for Hiring",eyebrow: "AI-Powered Screening & Assessment",             to: "/services/assessment",            description: "AI-driven assessments that evaluate skills, aptitude, and cultural fit — cutting hiring time in half with better outcomes." },
  { image: heroIndustries,    title: "Cloud & DevOps Engineering",   eyebrow: "Modern Cloud Architectures & CI/CD",             to: "/services/software",              description: "Accelerate your cloud migration, automate CI/CD release pipelines, and optimize infrastructure cost-efficiency across major providers." },
  { image: heroGlobe,         title: "Cybersecurity & Compliance",   eyebrow: "Enterprise Digital Asset Protection",           to: "/services/software",              description: "Secure your digital assets, detect and mitigate security threats in real-time, and ensure compliance with global data privacy regulations." },
];

const INDUSTRIES = [
  { name: "Healthcare", icon: Activity },
  { name: "BFSI", icon: Landmark },
  { name: "Technology", icon: Cpu },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Telecom", icon: Radio },
  { name: "Energy & Utilities", icon: Building2 },
  { name: "Professional Services", icon: Briefcase },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((v) => (v + 1) % SLIDES.length);
  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden flex items-center bg-[#051124]">
      {/* Background slide */}
      <div className="absolute inset-0 bg-[#051124] z-0" />
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-10"
        >
          <img
            src={SLIDES[i].image}
            alt=""
            className="h-full w-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/30" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-glow mb-5">
              {SLIDES[i].eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              {SLIDES[i].title}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
              {SLIDES[i].subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
              >
                Hire Top Talent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-brand-glow transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-brand-glow transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, s) => (
          <button
            key={s}
            onClick={() => setI(s)}
            aria-label={`Slide ${s + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${s === i ? "w-8 bg-brand-glow" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Stats Bar ── */}
      <StatsBar />

      {/* ── Services ── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-End Solutions to Drive Your Success"
            subtitle="From talent to technology, we offer a comprehensive range of IT solutions designed to solve your complex business challenges."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ConfigUSA (Image 1 Style) ── */}
      <section className="py-24 bg-[#051124] text-white relative overflow-hidden">
        {/* World Map Dot Pattern Background */}
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
            <g className="text-red-500">
              <circle cx="250" cy="220" r="6" className="animate-ping" />
              <circle cx="250" cy="220" r="4" />
            </g>
            <g className="text-blue-400">
              <circle cx="580" cy="180" r="6" className="animate-ping" />
              <circle cx="580" cy="180" r="4" />
            </g>
            <path d="M 50,150 Q 150,100 250,200 T 450,150 T 650,250 T 850,150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,12" className="opacity-30" />
            <path d="M 120,250 Q 220,200 320,300 T 520,250 T 720,350 T 920,250" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,12" className="opacity-30" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-glow mb-4">
              WHY CONFIGUSA?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Trusted by Leading Businesses Across the Globe
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              We combine deep industry expertise, a global talent network, and a client-first approach to deliver measurable outcomes.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand/90 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 shadow-md"
            >
              Know More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            {[
              { icon: Globe2, title: "Global Presence", text: "USA, Canada & India" },
              { icon: ShieldCheck, title: "Quality Delivery", text: "Proven & reliable" },
              { icon: Briefcase, title: "Industry Expertise", text: "Across 7+ industries" },
              { icon: Users, title: "Client Focused", text: "Your success is our priority" },
            ].map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-glow shadow-inner">
                  <w.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-white text-base leading-snug">{w.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{w.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Ticker ── */}
      <TechTicker />

      {/* ── Industries ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroIndustries} alt="" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Industry-Specific Solutions That Drive Results"
            light
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 text-center hover:bg-white/10 hover:border-brand-glow transition-all group"
              >
                <div className="flex justify-center mb-3">
                  <n.icon className="h-7 w-7 text-brand-glow group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-white font-semibold">{n.name}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold hover:bg-brand hover:text-white transition-colors"
            >
              View All Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Staffing Models ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Flexible Staffing Solutions for Every Need"
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Contract Staffing", text: "Flexible contract IT professionals ready to plug into your team on-demand." },
              { icon: Briefcase, title: "Contract-to-Hire", text: "Try before you commit — evaluate talent on the job before making permanent decisions." },
              { icon: GraduationCap, title: "Permanent Placement", text: "Long-term hires who fit your culture and grow with your business for the long haul." },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl border border-border p-8 bg-white transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)]"
              >
                {/* Shine Top Edge Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow group-hover:scale-105 transition-transform">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 bg-soft border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Excellence"
            subtitle="A transparent, data-driven methodology designed to integrate seamlessly and accelerate your business goals."
          />
          <div className="mt-16 relative">
            {/* Dashed Timeline Connector Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t border-dashed border-slate-200 z-0" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {[
                { step: "01", title: "Discovery & Strategy", text: "We analyze your technological landscape and alignment goals to scope specific skills or delivery roadmaps." },
                { step: "02", title: "Assessment & Vetting", text: "Using custom automated screenings and technical panels, we filter and verify top-tier engineering talent." },
                { step: "03", title: "Rapid Integration", text: "Seamless onboarding and system setups ensure resources are productive and aligned from day one." },
                { step: "04", title: "Continuous Review", text: "Ongoing performance audits, feedback loops, and metrics track delivery quality to optimize operations." },
              ].map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble indicator */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-slate-500 font-extrabold text-sm shadow-sm group-hover:bg-brand group-hover:border-brand group-hover:text-white group-hover:scale-105 transition-all duration-300 z-10 relative">
                    {p.step}
                  </div>
                  
                  {/* Card Content */}
                  <div className="mt-6 flex-1 rounded-2xl bg-white p-7 border border-border/50 shadow-card hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-base font-bold text-ink leading-snug group-hover:text-brand transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
