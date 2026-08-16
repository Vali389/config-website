import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { motion } from "motion/react";
import {
  Server, Database, Cloud, Users, Briefcase, Boxes, BarChart3,
  Cpu, Zap, CheckCircle2, ArrowRight, Heart, Landmark,
  Building2, Factory, ShoppingCart, Activity, RefreshCw, Layers, Globe2
} from "lucide-react";
import erpHeroBg from "@/assets/erp-hero-bg.png";
import enterpriseHeroImg from "@/assets/enterprise_hero_img.png";
import heroCarousel1 from "@/assets/hero_carousel_1.jpg";
import heroCarousel2 from "@/assets/hero_carousel_2.jpg";
import ctaServicesBg from "@/assets/cta-services-bg.png";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import serviceSap from "@/assets/service-sap.jpg";
import erpStrategyImg from "@/assets/erp_strategy_img.png";
import erpImplementationImg from "@/assets/erp_implementation_img.png";
import erpIntegrationImg from "@/assets/erp_integration_img.png";
import erpMigrationImg from "@/assets/erp_migration_img.png";
import erpModernizationImg from "@/assets/erp_modernization_img.png";
import erpSupportImg from "@/assets/erp_support_img.png";

export const Route = createFileRoute("/services/enterprise-applications")({
  head: () => ({
    meta: [
      { title: "Enterprise Applications & ERP | ConfigUSA" },
      { name: "description", content: "Implement, modernize and integrate SAP, Oracle, Workday, Salesforce and Microsoft Dynamics with ConfigUSA's Enterprise Applications consulting." },
      { property: "og:title", content: "Enterprise Applications & ERP Solutions" },
    ],
  }),
  component: EnterpriseApplications,
});

/* ────────────────────────── DATA ────────────────────────── */

const ECOSYSTEM = [
  {
    category: "ERP & Business Management",
    technologies: ["SAP S/4HANA", "SAP ECC", "Oracle Fusion Cloud ERP", "Oracle E-Business Suite", "Microsoft Dynamics 365 Finance", "Microsoft Dynamics 365 Business Central", "Infor CloudSuite", "NetSuite", "Odoo", "ERPNext", "IFS Cloud", "Epicor"]
  },
  {
    category: "HCM & Workforce",
    technologies: ["Workday HCM", "Workday Financial Management", "SAP SuccessFactors", "Oracle HCM Cloud", "Microsoft Dynamics 365 Human Resources"]
  },
  {
    category: "CRM & Customer Platforms",
    technologies: ["Salesforce", "Salesforce Sales Cloud", "Salesforce Service Cloud", "Microsoft Dynamics 365 Sales", "Microsoft Dynamics 365 Customer Service"]
  },
  {
    category: "Supply Chain & Operations",
    technologies: ["SAP MM", "SAP SD", "SAP PP", "SAP SCM", "Oracle SCM", "Microsoft Dynamics 365 Supply Chain Management", "Infor SCM"]
  },
  {
    category: "Analytics & Integration",
    technologies: ["SAP BTP", "SAP Analytics Cloud", "Microsoft Power BI", "Microsoft Power Platform", "MuleSoft", "Oracle Cloud Infrastructure", "Enterprise APIs", "Data Integration"]
  }
];

const PLATFORMS = [
  { name: "SAP", desc: "Transform your business with S/4HANA, ECC, and cloud solutions.", icon: Database },
  { name: "Oracle", desc: "Cloud ERP, HCM, and Supply Chain modernization.", icon: Cloud },
  { name: "Microsoft Dynamics 365", desc: "Unified CRM and ERP capabilities.", icon: Server },
  { name: "Workday", desc: "Agile finance, HR, and planning platforms.", icon: Users },
  { name: "Salesforce", desc: "Customer 360, Sales Cloud, and Service Cloud.", icon: Briefcase },
  { name: "Infor", desc: "Industry-specific CloudSuite solutions.", icon: Boxes },
  { name: "NetSuite", desc: "Cloud financials and unified business management.", icon: BarChart3 },
  { name: "Other ERP Platforms", desc: "Odoo, ERPNext, Epicor, and legacy migrations.", icon: Layers },
];

const ERP_SERVICES = [
  { title: "ERP Consulting", desc: "Strategic advisory for platform selection and roadmap design." },
  { title: "ERP Implementation", desc: "End-to-end deployment of cloud and on-premise platforms." },
  { title: "ERP Integration", desc: "Connecting enterprise systems across your IT landscape." },
  { title: "ERP Migration", desc: "Seamless transition to cloud or next-gen platforms." },
  { title: "ERP Modernization", desc: "Upgrading legacy systems for agility and scale." },
  { title: "ERP Customization", desc: "Tailoring out-of-the-box platforms to your unique workflows." },
  { title: "ERP Data Migration", desc: "Secure extraction, transformation, and loading of business data." },
  { title: "Cloud ERP Transformation", desc: "Shifting on-premise ERP workloads to resilient cloud environments." },
  { title: "ERP Testing & QA", desc: "Rigorous validation for performance, security, and compliance." },
  { title: "ERP Support & Maintenance", desc: "24/7 managed services and continuous platform optimization." },
  { title: "ERP Security", desc: "Hardening business applications against internal and external threats." },
  { title: "ERP Analytics & Reporting", desc: "Unlocking real-time intelligence from your business data." },
];

const PLATFORM_SERVICES = [
  "Enterprise Application Consulting",
  "Platform Implementation",
  "Application Modernization",
  "Legacy System Migration",
  "API Integration",
  "Third-Party Integration",
  "Data Migration",
  "Business Process Automation",
  "Enterprise Reporting",
  "Application Support",
  "Managed Services"
];

const ERP_AI = [
  "Intelligent document processing",
  "AI-powered business insights",
  "Predictive analytics",
  "Demand forecasting",
  "Financial forecasting",
  "Intelligent automation",
  "AI assistants",
  "Fraud detection",
  "Process optimization",
  "Automated reporting"
];

const INDUSTRIES = [
  { icon: Heart, title: "Healthcare", desc: "Secure systems for patient data, supply chain, and compliance." },
  { icon: Landmark, title: "Financial Services", desc: "Robust platforms for risk, reporting, and core banking." },
  { icon: Building2, title: "Government & Public Sector", desc: "Compliant solutions for public administration and resources." },
  { icon: Factory, title: "Manufacturing", desc: "SAP, Oracle and Microsoft Dynamics solutions for production planning, supply chain, inventory, procurement and smart manufacturing." },
  { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Omnichannel inventory, CRM, and supply chain visibility." },
  { icon: Cpu, title: "Technology & SaaS", desc: "Scalable back-office operations for high-growth tech firms." },
];

const JOURNEY = [
  { title: "Discover", text: "Business requirements and current-state assessment." },
  { title: "Strategy", text: "Platform selection and transformation roadmap." },
  { title: "Implement", text: "Configuration, customization and development." },
  { title: "Integrate", text: "APIs, data and third-party systems." },
  { title: "Migrate", text: "Secure legacy data migration and validation." },
  { title: "Optimize", text: "Analytics, automation, AI and continuous improvement." },
  { title: "Support", text: "Ongoing managed services and platform support." },
];

function EnterpriseApplications() {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="Enterprise Applications & ERP"
        title={<>Powering Modern Enterprises with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 font-extrabold">Intelligent Business Platforms</span></>}
        subtitle="From ERP and CRM to HCM, supply chain and enterprise integration, ConfigUSA helps organizations implement, modernize, integrate and support the platforms that run their businesses."
        images={[heroCarousel1, heroCarousel2, enterpriseHeroImg]}
        minHeight="min-h-screen"
      >
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] transition-all"
          >
            Talk to an Enterprise Applications Expert <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Explore Our Capabilities
          </a>
        </div>
      </PageHero>

      {/* ── Enterprise Strategy & Execution (GatherHub Style Image-Over-Image) ── */}
      <section className="py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-blue-50/80 overflow-hidden border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Main Image with Floating Circular Image Overlay (GatherHub Style) */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.25 }}
            className="relative pr-8 pb-8" // Add padding to make room for the overlapping circle
          >
            {/* Background Blob/Glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-brand opacity-15 blur-2xl" />

            {/* Main Large Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full border border-blue-200/80 shadow-elegant">
              <img
                src={wdEnterprise}
                alt="Enterprise Architecture"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Overlapping Circular Image with Continuous Floating Animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 z-20"
            >
              <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                <img
                  src={serviceSap}
                  alt="ERP Implementation Focus"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Optional Small Floating Icon/Badge on Top Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute top-8 -left-6 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl border-4 border-white"
            >
              <CheckCircle2 className="h-7 w-7" />
            </motion.div>
          </motion.div>

          {/* Right: Heading + Content */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.25 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-700 mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-blue-700" />
              Enterprise Strategy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 leading-tight tracking-tight mb-4 text-left max-w-xl">
              Aligning Complex Systems with <span className="text-gradient-brand">Business Velocity.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-justify mb-8">
              Legacy platforms slow down innovation. At ConfigUSA, we use intelligent methodologies to seamlessly implement, upgrade, and integrate your core enterprise applications, ensuring they act as accelerators—not bottlenecks.
            </p>

            {/* 2 stacked horizontal feature cards */}
            <div className="space-y-4">
              <div className="group rounded-2xl bg-white p-5 sm:p-6 border border-blue-100 shadow-card hover:shadow-elegant hover:border-blue-300 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-blue-700 transition-colors">
                    End-to-End Modernization
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mt-1">
                    From legacy ERP extraction to cloud-native platform deployment, we handle the entire lifecycle with dedicated architecture pods.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl bg-white p-5 sm:p-6 border border-blue-100 shadow-card hover:shadow-elegant hover:border-blue-300 transition-all duration-300 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Globe2 className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-blue-700 transition-colors">
                    Global Delivery Model
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mt-1">
                    Round-the-clock configuration, testing, and support using integrated onshore and offshore delivery teams.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: Ecosystem ── */}
      <section id="ecosystem" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Technology Ecosystem" title="Comprehensive Enterprise Coverage" subtitle="Our consultants hold deep expertise across the complete enterprise technology landscape." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ECOSYSTEM.map((eco, i) => (
              <motion.div
                key={eco.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-blue-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-400 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                <div className="p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-extrabold text-ink group-hover:text-blue-700 transition-colors leading-tight">{eco.category}</h3>
                  </div>
                  {/* Technologies as pills - inline, auto-width */}
                  <div className="mt-1">
                    <div className="flex flex-wrap gap-2">
                      {eco.technologies.map(tech => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-slate-50 text-slate-700 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/3 group-hover:to-indigo-500/5 transition-all duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Platform Expertise ── */}
      <section className="py-24 bg-soft border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Platform Expertise" title="Mastery Across Leading Technologies" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex flex-col rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 border border-blue-300/30 p-6 shadow-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-white/90 mb-6 flex-1 leading-relaxed text-justify">{p.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors">
                  Explore Platform <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: SAP Integration ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center relative z-10">
          <SectionHeading eyebrow="Dedicated SAP Practice" title="Deep SAP Solutions Expertise" subtitle="As a core pillar of our Enterprise Applications practice, we deliver specialized end-to-end SAP consulting." />

          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["SAP S/4HANA", "SAP ECC", "SAP FICO", "SAP MM", "SAP SD", "SAP PP", "SAP HCM", "SAP ABAP", "SAP BTP", "SAP SuccessFactors", "SAP Ariba", "SAP Analytics Cloud"].map((sap, i) => (
              <motion.span
                key={sap}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-extrabold tracking-wide border border-blue-200 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 hover:border-blue-400 hover:from-blue-100 hover:to-indigo-100 transition-all cursor-default"
              >
                {sap}
              </motion.span>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/services/sap" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition-all">
              Explore SAP Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4 & 5: ERP Services ── */}
      <section className="py-24 bg-[#111c33] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Our Services" title="End-to-End Enterprise Capabilities" light />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ERP_SERVICES.map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-[2rem] p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-500 overflow-hidden isolate"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-blue-400/30 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/20 text-blue-400 group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {/* Using a generic dynamic icon or just a nice dot matrix */}
                    <div className="grid grid-cols-2 gap-1.5 p-1 group-hover:rotate-90 transition-transform duration-500">
                      <div className="w-2 h-2 rounded-full bg-current" />
                      <div className="w-2 h-2 rounded-full bg-current opacity-70" />
                      <div className="w-2 h-2 rounded-full bg-current opacity-50" />
                      <div className="w-2 h-2 rounded-full bg-current opacity-90" />
                    </div>
                  </div>

                  <h4 className="text-xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-sm text-blue-100/70 leading-relaxed group-hover:text-blue-50 transition-colors">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-blue-900/50">
            <h3 className="text-xl font-bold mb-8 text-center text-blue-200">Additional Platform Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {PLATFORM_SERVICES.map(ps => (
                <span key={ps} className="px-4 py-2 rounded-full bg-blue-900/30 text-blue-100 text-xs font-semibold border border-blue-800/50">
                  {ps}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: ERP + AI ── */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-500" /> ERP + AI
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-6">
                Make Your Enterprise Applications <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed text-justify mb-8">
                ConfigUSA integrates advanced Artificial Intelligence directly into your ERP, CRM, and HCM platforms—turning static systems into predictive, autonomous engines that drive real business outcomes.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors">
                Explore AI Integration <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {ERP_AI.map((ai, i) => (
                <div key={ai} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <Cpu className="h-5 w-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-semibold text-ink leading-tight">{ai}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── What Sets Us Apart: Overlapping Icon Cards ── */}
      <section className="py-28 bg-[#0d1b33] text-white relative overflow-hidden">
        {/* Subtle dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="Enterprise Excellence, Delivered"
            subtitle="ConfigUSA combines certified expertise, cloud-first thinking, and a global delivery model to deliver ERP and enterprise transformation that lasts."
            light
          />

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Database, label: "Certified Experts", desc: "SAP, Oracle, Microsoft and Workday certified consultants with 10+ years average experience across complex enterprise landscapes." },
              { icon: Cloud, label: "Cloud-First", desc: "Every engagement is designed for cloud scalability — from Azure to AWS, SAP BTP to Oracle Cloud Infrastructure." },
              { icon: Globe2, label: "Global Delivery", desc: "Onshore and offshore delivery centers working in sync to keep your programs moving 24/7 across time zones." },
              { icon: Layers, label: "Vendor-Agnostic", desc: "We select the right platform for your business — not the one that benefits us. Pure advisory. Pure outcome focus." },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative group flex flex-col items-center mt-12"
              >
                {/* Card body */}
                <div className="relative bg-gradient-to-br from-[#1e325c] via-[#152545] to-[#0c162c] rounded-[2.5rem] rounded-tl-none rounded-br-none border border-blue-400/20 p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:border-blue-400/50 group-hover:shadow-[0_16px_40px_rgba(59,130,246,0.25)] transition-all duration-300 z-10 w-full mb-6">
                  {/* Floating Top Icon */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mt-6 mb-4 group-hover:text-blue-300 transition-colors">{card.label}</h3>
                  <p className="text-sm text-white/70 leading-relaxed pb-4">{card.desc}</p>

                  {/* Downward pointing arrow using a rotated square to ensure visibility and matching border */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0c162c] border-b border-r border-blue-400/20 rotate-45 z-0" />
                </div>

                {/* Bottom Floating Avatar/Icon */}
                <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#111c33] border-4 border-[#0d1b33] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 group-hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)] transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
                  <card.icon className="h-8 w-8 text-blue-400 group-hover:rotate-[360deg] transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Industries ── */}
      <section className="py-24 bg-soft border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Industry Focus" title="Enterprise Solutions Tailored for Your Sector" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 hover:border-blue-300 transition-all duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-5 group-hover:scale-110 group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white transition-all shadow-sm">
                  <ind.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-blue-700 transition-colors">{ind.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERP Solutions Deep Dive ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="ERP Solutions"
            title="Comprehensive ERP Services"
            subtitle="From first discovery to long-term managed support — we deliver the full ERP lifecycle."
          />
          <div className="mt-20 flex flex-col gap-24 lg:gap-32">
            {[
              {
                icon: Briefcase,
                title: "ERP Strategy & Consulting",
                desc: "We start by understanding your business goals, current-state architecture, and process maturity. Our consultants design a platform-agnostic roadmap that balances speed, cost, and long-term scalability.",
                tags: ["Platform Selection", "ROI Analysis", "Roadmap Design", "Business Case"],
                image: erpStrategyImg
              },
              {
                icon: Server,
                title: "ERP Implementation",
                desc: "End-to-end deployment of SAP, Oracle, Microsoft Dynamics, Workday and more. We configure, customize, and deliver enterprise platforms that align to your unique workflows and compliance requirements.",
                tags: ["Configuration", "Customization", "Go-Live", "Change Management"],
                image: erpImplementationImg
              },
              {
                icon: RefreshCw,
                title: "ERP Integration",
                desc: "We connect your ERP platform to CRM, HCM, supply chain, banking systems, e-commerce, and third-party APIs — building a seamless, real-time digital backbone across your enterprise.",
                tags: ["APIs", "MuleSoft", "SAP BTP", "Third-Party Systems"],
                image: erpIntegrationImg
              },
              {
                icon: Cloud,
                title: "Cloud ERP Migration",
                desc: "Migrate from legacy on-premise ERP to modern cloud platforms. We handle data extraction, transformation, validation, and cutover — with zero-downtime strategies for mission-critical environments.",
                tags: ["S/4HANA Move", "Oracle Cloud", "Azure", "Data Validation"],
                image: erpMigrationImg
              },
              {
                icon: Zap,
                title: "ERP Modernization",
                desc: "Upgrade aging ERP systems — from SAP ECC to S/4HANA, Oracle EBS to Fusion Cloud, or legacy Dynamics to D365. We minimize disruption while unlocking modern capabilities like AI, real-time analytics, and automation.",
                tags: ["S/4HANA Upgrade", "Oracle Fusion", "Dynamics 365", "AI Readiness"],
                image: erpModernizationImg
              },
              {
                icon: Activity,
                title: "ERP Support & Optimization",
                desc: "Post-go-live, our managed services teams provide 24/7 support, continuous optimization, security hardening, and analytics uplift — ensuring your platforms evolve with your business.",
                tags: ["24/7 Support", "Managed Services", "Security", "Performance Tuning"],
                image: erpSupportImg
              },
            ].map((item, i) => (
              <div key={item.title} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform group-hover:scale-105 transition-transform duration-700 -z-10" />
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-blue-50/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c162c]/30 via-transparent to-transparent opacity-60" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-[0_8px_20px_rgba(59,130,246,0.3)]">
                      <item.icon className="h-7 w-7" />
                    </span>
                    <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600">Step {(i + 1).toString().padStart(2, '0')}</p>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-ink leading-tight mb-6">
                    {item.title}
                  </h3>

                  <p className="text-lg text-slate-600 leading-relaxed text-justify mb-8">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Enterprise Integration ── */}
      <section className="py-24 bg-[#0d1b33] text-white overflow-hidden text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading eyebrow="Connected Ecosystem" title="Enterprise Integration Architecture" light />

          <div className="mt-20 flex flex-col items-center relative max-w-2xl mx-auto">
            {/* Animated vertical connecting line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-purple-500/50 -z-10" />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-gradient-to-br from-[#162540] to-[#0f1a30] border border-blue-500/30 p-6 rounded-2xl font-bold text-lg mb-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] group hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-4">
              <Server className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>ERP (Core)</span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-8 bg-[#0d1b33] p-2 rounded-full border border-blue-900/50 z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Activity className="h-6 w-6 text-blue-400 animate-pulse" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="w-[95%] bg-gradient-to-br from-[#162540] to-[#0f1a30] border border-indigo-500/30 p-6 rounded-2xl font-bold text-lg mb-8 shadow-[0_0_30px_rgba(99,102,241,0.15)] group hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center gap-4">
              <Users className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>CRM | HCM | SCM</span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mb-8 bg-[#0d1b33] p-2 rounded-full border border-indigo-900/50 z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <RefreshCw className="h-6 w-6 text-indigo-400 animate-spin-slow" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="w-[90%] bg-gradient-to-br from-[#162540] to-[#0f1a30] border border-purple-500/30 p-6 rounded-2xl font-bold text-lg tracking-widest uppercase text-sm mb-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] group hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-4">
              <Cloud className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>APIs / Integration Layer</span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mb-8 bg-[#0d1b33] p-2 rounded-full border border-purple-900/50 z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Database className="h-6 w-6 text-purple-400 animate-pulse" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="w-full flex justify-between gap-6">
              <div className="flex-1 bg-gradient-to-br from-[#162540] to-[#0f1a30] border border-cyan-500/30 p-6 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.15)] group hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-3">
                <BarChart3 className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Analytics / AI</span>
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#162540] to-[#0f1a30] border border-emerald-500/30 p-6 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.15)] group hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-3">
                <Briefcase className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Business Users</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why ConfigUSA: Full-Screen Content Over Image ── */}
      <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${erpStrategyImg})` }}
        />
        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030a16]/97 via-[#030a16]/85 to-[#030a16]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/90 via-transparent to-[#030a16]/70" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Aurora glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] z-0" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Heading + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Why ConfigUSA</span>
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Trusted by Enterprises{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Across Every Industry
                </span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
                We combine deep platform expertise with a proven delivery model to modernize, migrate, and manage enterprise systems — on time and within budget.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                Start Your ERP Journey <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right: Feature grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: CheckCircle2, title: "Zero-Downtime Migrations", desc: "Mission-critical cutovers with no business disruption." },
                { icon: Globe2, title: "Global Delivery Model", desc: "Onshore + offshore teams across multiple time zones." },
                { icon: Layers, title: "End-to-End Ownership", desc: "Strategy through go-live and beyond." },
                { icon: Zap, title: "Accelerated Timelines", desc: "Pre-built accelerators cut deployment time by 40%." },
                { icon: Server, title: "Platform Agnostic", desc: "SAP, Oracle, Dynamics, Workday and more — we do it all." },
                { icon: Activity, title: "24/7 Managed Support", desc: "Round-the-clock operations and continuous optimization." },
              ].map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/[0.09] hover:border-blue-400/40 transition-all duration-300 group"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <feat.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection image={ctaServicesBg} />
    </>
  );
}
