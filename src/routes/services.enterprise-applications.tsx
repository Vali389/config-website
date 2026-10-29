import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Server,
  Database,
  Cloud,
  Users,
  Briefcase,
  Boxes,
  BarChart3,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Heart,
  Landmark,
  Building2,
  Factory,
  ShoppingCart,
  Activity,
  RefreshCw,
  Layers,
  Globe2,
} from "lucide-react";
import enterpriseHeroImg from "@/assets/enterprise_hero_img.png";
import heroCarousel1 from "@/assets/hero_carousel_1.jpg";
import enterprisePlatformsMesh from "@/assets/enterprise-platforms-mesh.jpg";
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
      { title: "Enterprise Applications & ERP Solutions | ConfigUSA" },
      {
        name: "description",
        content:
          "Implement, modernize and integrate SAP, Oracle, Workday, Salesforce and Microsoft Dynamics with ConfigUSA's Enterprise Applications consulting.",
      },
      { property: "og:title", content: "Enterprise Applications & ERP Solutions" },
      {
        property: "og:description",
        content:
          "Mission-critical enterprise software implementation, migration, and ongoing managed support.",
      },
    ],
  }),
  component: EnterpriseApplications,
});

/* ────────────────────────── DATA ────────────────────────── */

const ENTERPRISE_METRICS = [
  { value: "100+", label: "Enterprise Rollouts" },
  { value: "S/4HANA", label: "Migration Certified" },
  { value: "10+ Yrs", label: "Avg. Consultant Experience" },
  { value: "24/7", label: "Managed AMS Support" },
];

const ECOSYSTEM = [
  {
    category: "ERP & Business Management",
    technologies: [
      "SAP S/4HANA",
      "SAP ECC",
      "Oracle Fusion Cloud",
      "Oracle E-Business",
      "Dynamics 365 Finance",
      "Dynamics Business Central",
      "Infor CloudSuite",
      "NetSuite",
      "Epicor",
    ],
  },
  {
    category: "HCM & Workforce Platforms",
    technologies: [
      "Workday HCM",
      "Workday Financials",
      "SAP SuccessFactors",
      "Oracle HCM Cloud",
      "Dynamics 365 HR",
      "Payroll & Talent Suites",
    ],
  },
  {
    category: "CRM & Customer Experience",
    technologies: [
      "Salesforce Sales Cloud",
      "Salesforce Service Cloud",
      "Dynamics 365 Sales",
      "Dynamics Customer Service",
      "HubSpot Enterprise",
      "Customer 360",
    ],
  },
  {
    category: "Supply Chain & Manufacturing",
    technologies: [
      "SAP MM / SD / PP",
      "SAP SCM & IBP",
      "Oracle SCM Cloud",
      "Dynamics 365 Supply Chain",
      "Warehouse Management (WMS)",
      "Smart Factory IoT",
    ],
  },
  {
    category: "Integration & Enterprise APIs",
    technologies: [
      "SAP BTP Integration",
      "MuleSoft Anypoint",
      "Oracle OIC",
      "Azure Logic Apps",
      "Dell Boomi",
      "Enterprise REST/Event APIs",
    ],
  },
  {
    category: "Analytics & Business Intelligence",
    technologies: [
      "SAP Analytics Cloud",
      "Microsoft Power BI",
      "Tableau Enterprise",
      "Snowflake Data Cloud",
      "Databricks Lakehouse",
      "Real-Time Executive Dashboards",
    ],
  },
];

const PLATFORMS = [
  { name: "SAP Solutions", desc: "Transform your core business with certified S/4HANA, ECC, BTP, and cloud architecture.", icon: Database },
  { name: "Oracle Cloud ERP", desc: "Modernize financials, human capital, procurement, and global supply chain operations.", icon: Cloud },
  { name: "Microsoft Dynamics 365", desc: "Unified CRM, Finance, Operations, and Business Central platforms.", icon: Server },
  { name: "Workday Enterprise", desc: "Agile cloud finance, human capital management, and workforce analytics.", icon: Users },
  { name: "Salesforce 360", desc: "Sales Cloud, Service Cloud, Experience Cloud, and customized CRM ecosystems.", icon: Briefcase },
  { name: "Infor CloudSuite", desc: "Industry-tailored manufacturing, distribution, and ERP CloudSuites.", icon: Boxes },
  { name: "NetSuite Cloud ERP", desc: "Unified cloud accounting, inventory, and automated commerce for scale.", icon: BarChart3 },
  { name: "Legacy & Niche Migrations", desc: "Decommissioning legacy AS400, mainframe, and on-premise systems smoothly.", icon: Layers },
];

const ERP_SERVICES = [
  { title: "ERP Advisory & Strategy", desc: "Platform selection, total cost of ownership analysis, and modernization roadmaps." },
  { title: "Full-Cycle Implementation", desc: "End-to-end blueprinting, configuration, testing, and production go-live." },
  { title: "Enterprise Integration", desc: "Connecting ERP with CRM, banking, supply chain, and third-party API ecosystems." },
  { title: "Cloud ERP Migration", desc: "Low-risk transition from on-premise legacy systems to modern cloud editions." },
  { title: "S/4HANA Modernization", desc: "Technical and functional migrations from SAP ECC to SAP S/4HANA." },
  { title: "Custom Workflow Engineering", desc: "Tailoring platform extensions and automations to your unique operational rules." },
  { title: "Data Migration & Cleansing", desc: "Secure extraction, validation, and reconciliation of mission-critical historical data." },
  { title: "Managed Services (AMS)", desc: "24/7 level 2/3 operational maintenance, ticket resolution, and release upgrades." },
  { title: "Quality Assurance & Testing", desc: "Automated regression testing, performance validation, and compliance checks." },
  { title: "Security & Role Governance", desc: "SoD matrix validation, audit compliance, and identity role design." },
  { title: "ERP Analytics & BI", desc: "Unlocking real-time operational reporting and financial visibility." },
  { title: "Change Management & Training", desc: "User adoption programs, train-the-trainer workshops, and documentation." },
];

const ERP_AI = [
  "Intelligent Invoice & Document Processing",
  "AI-Powered Demand & Inventory Forecasting",
  "Automated Financial Reconciliation",
  "Autonomous Agentic Customer Service Workflows",
  "Predictive Equipment Maintenance in SCM",
  "Anomaly & Fraud Detection in Transactions",
  "Cognitive ERP Assistant & Natural Language Queries",
  "Automated Executive Reporting & Variance Alerts",
];

const INDUSTRIES = [
  { icon: Heart, title: "Healthcare & Life Sciences", desc: "HIPAA-compliant platforms for clinical supply chains, patient records, and operational finance." },
  { icon: Landmark, title: "Financial Services", desc: "High-security regulatory reporting, risk governance, and core banking integrations." },
  { icon: Building2, title: "Government & Public Sector", desc: "Compliant ERP modernizations aligned with strict procurement, transparency, and audit standards." },
  { icon: Factory, title: "Manufacturing & Automotive", desc: "Integrated production planning, shop-floor IoT, procurement, and smart factory supply chains." },
  { icon: ShoppingCart, title: "Retail & Consumer Goods", desc: "Omnichannel inventory accuracy, CRM personalization, and real-time replenishment." },
  { icon: Cpu, title: "Technology & High-Growth SaaS", desc: "Scalable revenue operations, subscription billing, and international entity consolidation." },
];

const DEEP_DIVE_STEPS = [
  {
    step: "01",
    icon: Briefcase,
    title: "ERP Strategy & Architecture Blueprint",
    desc: "We analyze current business processes, system bottlenecks, and compliance requirements. Our certified architects establish a vendor-agnostic modernization roadmap that aligns stakeholders and mitigates implementation risks.",
    tags: ["Platform Evaluation", "TCO Analysis", "Process Mapping", "Roadmap Blueprint"],
    image: erpStrategyImg,
  },
  {
    step: "02",
    icon: Server,
    title: "Configuration & Agile Implementation",
    desc: "End-to-end deployment across SAP, Oracle, Microsoft Dynamics, or Workday. Our teams configure modules to match your unique operational rules while maintaining core standard practices for simple future upgrades.",
    tags: ["Core Configuration", "Custom Workflows", "Integration Setup", "Security Modeling"],
    image: erpImplementationImg,
  },
  {
    step: "03",
    icon: RefreshCw,
    title: "Enterprise System & API Integration",
    desc: "Unifying your enterprise data fabric by integrating ERP with CRM, supply chain, banking gateways, and external partner APIs using MuleSoft, SAP BTP, and modern event-driven messaging.",
    tags: ["MuleSoft / Boomi", "SAP BTP", "Secure Webhooks", "Real-Time Sync"],
    image: erpIntegrationImg,
  },
  {
    step: "04",
    icon: Cloud,
    title: "Zero-Downtime Data & Cloud Migration",
    desc: "Migrating from aging on-premise hardware to resilient cloud environments. We execute dry-run data rehearsals, automated integrity validation, and weekend cutovers with zero operational disruption.",
    tags: ["Data Cleansing", "S/4HANA Move", "Rehearsal Cutovers", "Reconciliation"],
    image: erpMigrationImg,
  },
  {
    step: "05",
    icon: Zap,
    title: "Modernization & Continuous AI Uplift",
    desc: "Upgrade legacy instances to unlock modern cloud advantages: embedded predictive analytics, automated invoice recognition, cognitive workflow assistants, and intelligent reporting.",
    tags: ["ECC to S/4HANA", "Oracle Fusion", "AI Automation", "Process Mining"],
    image: erpModernizationImg,
  },
  {
    step: "06",
    icon: Activity,
    title: "24/7 Managed Services & Optimization",
    desc: "Post-go-live, our global AMS squads provide round-the-clock level 2 and level 3 support, continuous minor enhancements, performance tuning, and guaranteed SLA response times.",
    tags: ["24/7 AMS Support", "SLA Accountability", "Quarterly Upgrades", "Cost Tuning"],
    image: erpSupportImg,
  },
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function EnterpriseApplications() {
  return (
    <div className="min-h-screen bg-white">
      {/* ────────────────────────── HERO SECTION ────────────────────────── */}
      <section className="relative min-h-[64vh] flex items-center overflow-hidden pt-28 pb-16 bg-[#071326]">
        {/* Background Photography with Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={enterprisePlatformsMesh}
            alt="Enterprise Applications & ERP Modernization"
            className="h-full w-full object-cover object-center"
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
              <Boxes className="h-3.5 w-3.5" />
              <span>Enterprise Applications & ERP Modernization</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Powering Modern Enterprises with{" "}
              <span className="text-[#f5a623]">Intelligent Business Platforms.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              From SAP, Oracle, and Microsoft Dynamics to Workday and Salesforce, ConfigUSA helps organizations implement, modernize, integrate, and support the platforms that run their operations.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
              >
                Talk to an Enterprise Expert <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Explore Capabilities <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-7 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {ENTERPRISE_METRICS.map((metric) => (
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

      {/* ────────────────────────── STRATEGY & EXECUTION ────────────────────────── */}
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
                  src={enterpriseHeroImg}
                  alt="Enterprise Architecture Modernization"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f5a623] text-[#071326] text-xs font-bold mb-2">
                    Enterprise Velocity
                  </div>
                  <p className="text-sm font-semibold">
                    Turn complex core business platforms into agile growth engines.
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
                  ENTERPRISE STRATEGY
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                  Aligning Core Business Platforms with <span className="text-[#f5a623]">Modern Velocity</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                  Legacy ERP, CRM, and HCM installations often slow organizations down. ConfigUSA delivers structured methodologies to upgrade, integrate, and optimize your systems with zero operational disruption.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                From full-scale SAP S/4HANA migrations to Salesforce Customer 360 rollouts and Workday integrations, our certified functional and technical consultants ensure your software architecture accelerates business outcomes.
              </p>

              {/* 2 stacked feature cards */}
              <div className="space-y-3.5 pt-4 border-t border-slate-100">
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Layers className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#071326]">
                      Full-Lifecycle Modernization
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
                      From legacy extraction to cloud-native platform cutovers, dedicated architecture pods manage every phase.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Globe2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#071326]">
                      Global Delivery Scale
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
                      Onshore advisory leads coupled with high-efficiency global delivery centers ensure around-the-clock progress.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────── TECHNOLOGY ECOSYSTEM (WHITE CARDS) ────────────────────────── */}
      <section id="ecosystem" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              TECHNOLOGY ECOSYSTEM
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Comprehensive Enterprise Platform Coverage
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Our consultants hold deep functional and technical mastery across the leading enterprise technology ecosystems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM.map((eco, i) => (
              <motion.div
                key={eco.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="group flex flex-col justify-between h-full bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors">
                        <CheckCircle2 className="h-5 w-5" />
                      </span>
                      <h3 className="text-base sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors">
                        {eco.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {eco.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── PLATFORM MASTERY (WHITE CARDS) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              PLATFORM MASTERY
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Deep Specialization in Tier-1 Enterprise Software
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Proven implementation, integration, and modernization capabilities across the world's most critical business platforms.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex flex-col justify-between rounded-xl bg-white p-6 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mb-4 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors">
                    <p.icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-bold text-[#071326] mb-2 group-hover:text-blue-700 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-800 transition-colors"
                >
                  <span>Explore Practice</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── DEDICATED SAP PRACTICE ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-2">
              DEDICATED SAP PRACTICE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Certified SAP Transformation & S/4HANA Migration
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
              As a core pillar of our enterprise practice, ConfigUSA provides specialized end-to-end consulting, migration blueprints, and managed services for SAP customers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-10">
            {[
              "SAP S/4HANA",
              "SAP ECC 6.0",
              "SAP FICO",
              "SAP MM & SD",
              "SAP PP & QM",
              "SAP BTP Integration",
              "SAP SuccessFactors",
              "SAP Ariba",
              "SAP Analytics Cloud",
              "ABAP & Fiori Modernization",
            ].map((sap, i) => (
              <span
                key={sap}
                className="px-4 py-2 rounded-lg bg-white text-[#071326] text-xs sm:text-sm font-semibold border border-slate-200/90 shadow-sm hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
              >
                {sap}
              </span>
            ))}
          </div>

          <Link
            to="/services/sap"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a1628] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#071326] transition-colors shadow-sm"
          >
            Explore Dedicated SAP Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ────────────────────────── ENTERPRISE SERVICES (DEEP NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              OUR CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              End-to-End Enterprise Applications Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              Structured consulting and technical services covering the entire life cycle of enterprise platforms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ERP_SERVICES.map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5a623]/15 text-[#f5a623] mb-4">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── ERP + AI SECTION ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                  ENTERPRISE AI INTEGRATION
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
                  Make Your Enterprise Platforms <span className="text-[#f5a623]">Intelligent</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                  ConfigUSA integrates Artificial Intelligence directly into ERP, CRM, and HCM systems—turning transactional databases into predictive, automated engines.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Reduce manual reporting time by 70%, eliminate invoice errors, and empower executives with real-time generative conversational queries over enterprise data.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
              >
                Schedule AI Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
              {ERP_AI.map((ai, i) => (
                <div
                  key={ai}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-center gap-3 hover:bg-white hover:border-blue-400 transition-all"
                >
                  <Cpu className="h-5 w-5 text-[#f5a623] shrink-0" />
                  <span className="text-xs sm:text-[13px] font-semibold text-[#071326] leading-snug">
                    {ai}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────── WHAT SETS US APART (NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              WHAT SETS US APART
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Enterprise Excellence, Delivered
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              Certified expertise, cloud-first thinking, and a global delivery model built for business continuity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Database,
                label: "Certified Experts",
                desc: "Certified consultants with 10+ years average experience across SAP, Oracle, Microsoft, and Workday landscapes.",
              },
              {
                icon: Cloud,
                label: "Cloud-First Architecture",
                desc: "Every deployment is designed for elastic cloud scale across AWS, Azure, Google Cloud, and SAP BTP.",
              },
              {
                icon: Globe2,
                label: "Global Delivery Scale",
                desc: "Onshore guidance and offshore delivery centers operating in synchronization for 24/7 momentum.",
              },
              {
                icon: Layers,
                label: "Vendor-Agnostic Advisory",
                desc: "We select the platform that fits your business requirements, providing objective guidance and clear ROI.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-xl bg-[#0a182f]/80 border border-white/10 hover:border-[#f5a623]/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5a623]/15 text-[#f5a623] mb-4">
                  <card.icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {card.label}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── INDUSTRY FOCUS (WHITE CARDS) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              INDUSTRY SOLUTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Enterprise Platforms Tailored by Sector
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              Pre-built accelerators and compliance templates addressing industry-specific workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="group flex flex-col justify-between h-full bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors mb-4">
                      <ind.icon className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── ERP SOLUTIONS DEEP DIVE (ALTERNATING) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              EXECUTION BLUEPRINT
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] tracking-tight">
              Comprehensive Lifecycle Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-normal">
              A structured, low-risk roadmap from initial requirements gathering to multi-year managed optimization.
            </p>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {DEEP_DIVE_STEPS.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
              >
                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-card aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-[#f5a623]">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#f5a623]">
                      Stage
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#071326] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200/70"
                      >
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

      {/* ────────────────────────── ENTERPRISE INTEGRATION ARCHITECTURE (NAVY) ────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#071326] text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-2">
              CONNECTED ECOSYSTEM
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight">
              Enterprise Integration Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 font-normal">
              Connecting core ERP with front-office CRM, HCM, data lakes, and third-party partner portals.
            </p>
          </div>

          <div className="flex flex-col items-center relative max-w-2xl mx-auto">
            {/* Box 1: Core ERP */}
            <div className="w-full bg-[#0a182f]/90 border border-white/15 p-5 rounded-xl font-bold text-base sm:text-lg mb-6 flex items-center justify-center gap-3">
              <Server className="h-5 w-5 text-[#f5a623]" />
              <span>Core ERP System (SAP / Oracle / Microsoft Dynamics)</span>
            </div>

            <div className="mb-6 p-2 rounded-full bg-[#0a182f] border border-white/10 text-[#f5a623]">
              <Activity className="h-5 w-5 animate-pulse" />
            </div>

            {/* Box 2: Enterprise Business Platforms */}
            <div className="w-[95%] bg-[#0a182f]/90 border border-white/15 p-5 rounded-xl font-bold text-base sm:text-lg mb-6 flex items-center justify-center gap-3">
              <Users className="h-5 w-5 text-[#f5a623]" />
              <span>CRM • HCM • Supply Chain Management</span>
            </div>

            <div className="mb-6 p-2 rounded-full bg-[#0a182f] border border-white/10 text-[#f5a623]">
              <RefreshCw className="h-5 w-5" />
            </div>

            {/* Box 3: API & Event Layer */}
            <div className="w-[90%] bg-[#0a182f]/90 border border-white/15 p-5 rounded-xl font-bold text-base sm:text-lg mb-6 flex items-center justify-center gap-3">
              <Cloud className="h-5 w-5 text-[#f5a623]" />
              <span>Integration Fabric (MuleSoft / SAP BTP / Kafka)</span>
            </div>

            <div className="mb-6 p-2 rounded-full bg-[#0a182f] border border-white/10 text-[#f5a623]">
              <Database className="h-5 w-5 animate-pulse" />
            </div>

            {/* Box 4: Analytics & Business Users */}
            <div className="w-full grid sm:grid-cols-2 gap-4">
              <div className="bg-[#0a182f]/90 border border-white/15 p-5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#f5a623]" />
                <span>Analytics & AI Models</span>
              </div>
              <div className="bg-[#0a182f]/90 border border-white/15 p-5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                <Briefcase className="h-5 w-5 text-[#f5a623]" />
                <span>Business Users & Mobile Apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────── CTA BANNER ────────────────────────── */}
      <section className="relative py-20 bg-[#071326] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaServicesBg}
            alt="ConfigUSA Enterprise Applications"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/95 to-[#071326]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-3">
            MODERNIZE YOUR BUSINESS PLATFORMS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Modernize Your Enterprise Applications?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a technical discovery session with our senior enterprise architects to assess your landscape, evaluate migration options, and design a transformation roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-8 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors"
            >
              Schedule Enterprise Discovery <ArrowRight className="h-4 w-4" />
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
