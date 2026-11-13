import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  HeartPulse,
  Building2,
  Factory,
  Cpu,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import indFinancial from "@/assets/ind-financial.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indGovernment from "@/assets/ind-government.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indTechnology from "@/assets/ind-technology.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import industriesHeroBg from "@/assets/Industry Solutions-bg.png";
import { FadeUp } from "@/components/FadeUp";
import { TechTicker } from "@/components/TechTicker";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      {
        title: "Industries We Serve — Sector-Aligned Capabilities | ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA connects global enterprises with specialized technology talent, agile workforce solutions, and forward-deployed engineering across Financial Services, Healthcare, Government, Manufacturing, Technology, and Retail.",
      },
      {
        property: "og:title",
        content: "Industries We Serve | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Industry Understanding. Technology Expertise. Workforce Confidence. Deep sector domain knowledge paired with pre-vetted specialist talent.",
      },
    ],
  }),
  component: IndustriesIndexPage,
});

// Full Navy Blue Industry Definitions & Content
const INDUSTRIES = [
  {
    id: "financial",
    navyId: "financial-services",
    name: "Financial Services",
    tagline: "High-compliance, low-latency, and enterprise-grade resilience.",
    image: indFinancial,
    alt: "ConfigUSA Financial Services technology specialists and compliance consultants",
    highlight: "Banking, FinTech, risk management & regulatory compliance talent",
    icon: Landmark,
    description:
      "Supporting technology staffing requirements across enterprise applications, data platforms, infrastructure, cybersecurity, and financial technology environments. From banking institutions to insurance and wealth management, we provide professionals who understand regulatory rigors and high-stakes system reliability.",
    capabilities: [
      "Core banking and transactional system modernizations",
      "Real-time fraud detection and AML analytics talent",
      "Financial enterprise reporting and regulatory compliance (SOX, GLBA)",
      "Secure cloud migration and zero-trust infrastructure engineering",
    ],
    technologies: [
      "SAP FICO",
      "Snowflake",
      "AWS Financial Services",
      "Kafka",
      "Java Spring Boot",
      "Cybersecurity SIEM",
    ],
  },
  {
    id: "healthcare",
    navyId: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    tagline: "Patient-centered digital transformation and strict data privacy.",
    image: indHealthcare,
    alt: "ConfigUSA healthcare digital systems and clinical platform integration specialists",
    highlight: "HIPAA-compliant EHR, clinical data systems & digital health platforms",
    icon: HeartPulse,
    description:
      "Helping healthcare organizations, hospital systems, and life sciences leaders access technology professionals supporting enterprise systems, clinical data platforms, infrastructure, and digital operations. We align talent that respects HIPAA, HITRUST, and data governance standards.",
    capabilities: [
      "EHR and clinical workflow integration specialists",
      "Healthcare data interoperability (HL7, FHIR) and analytics",
      "Workday HCM and payroll solutions for healthcare systems",
      "Cloud-based telemedicine and patient portal engineering",
    ],
    technologies: [
      "Workday HCM",
      "Epic / Cerner Integrations",
      "FHIR / HL7",
      "Azure Health Data Services",
      "HIPAA Compliance",
    ],
  },
  {
    id: "government",
    navyId: "government-public-sector",
    name: "Government & Public Sector",
    tagline: "Structured staffing processes and program accountability.",
    image: indGovernment,
    alt: "ConfigUSA public sector modernization engineers and program specialists",
    highlight: "FedRAMP cloud modernization, SAM.gov registered & E-Verify verified talent",
    icon: Building2,
    description:
      "Supporting public-sector technology workforce requirements through structured staffing processes, rigorous compliance, and an understanding of program expectations. ConfigUSA participates in state, local, and federal supplier programs with verified certification marks (M/WBE, SBE, SAM.gov, E-Verify).",
    capabilities: [
      "Citizen-facing digital services and legacy system modernization",
      "Compliance-driven public sector staffing and credential verification",
      "Public health, transportation, and municipal data solutions",
      "VMS and prime vendor contract fulfillment discipline",
    ],
    technologies: [
      "SAM.gov Registered",
      "E-Verify Compliant",
      "Cloud FedRAMP Environments",
      "Database Modernization",
      "Identity & Access Management",
    ],
  },
  {
    id: "manufacturing",
    navyId: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    tagline: "Connecting shop-floor automation with enterprise business systems.",
    image: indManufacturing,
    alt: "ConfigUSA manufacturing operations and industrial technology engineers",
    highlight: "Industrial IoT, smart factory automation & SAP S/4HANA supply chain workflows",
    icon: Factory,
    description:
      "Connecting organizations with technical professionals across engineering, enterprise applications, automation, and related technology functions. We bridge the gap between operational technology (OT) and enterprise IT to drive supply chain resilience and manufacturing efficiency.",
    capabilities: [
      "SAP S/4HANA supply chain, manufacturing, and inventory workflows",
      "IoT sensor telemetry, predictive maintenance, and edge data architectures",
      "ERP system integration across international manufacturing facilities",
      "Warehouse management and logistics optimization talent",
    ],
    technologies: [
      "SAP MM / SD",
      "SAP S/4HANA Supply Chain",
      "Industrial IoT",
      "Edge Computing",
      "Data Analytics",
    ],
  },
  {
    id: "technology",
    navyId: "technology-digital-services",
    name: "Technology & Digital Services",
    tagline: "Rapid scaling and specialized technical depth for high-velocity teams.",
    image: indTechnology,
    alt: "ConfigUSA specialized technology and software engineering professionals",
    highlight: "Full-stack cloud engineering, generative AI pipelines & microservices",
    icon: Cpu,
    description:
      "Providing specialized IT talent to support product development, enterprise platforms, cloud environments, and technology operations. We partner with SaaS providers, digital native firms, and enterprise IT divisions seeking high-caliber engineers who hit the ground running.",
    capabilities: [
      "High-velocity full-stack software and API microservices engineering",
      "Cloud architecture, Kubernetes deployment, and DevOps automation",
      "Generative AI, machine learning engineering, and data science pipelines",
      "Rapid talent ramp-up for critical software release milestones",
    ],
    technologies: [
      "React & TypeScript",
      "AWS & GCP",
      "Kubernetes",
      "Docker",
      "Python & PyTorch",
      "Microservices Architecture",
    ],
  },
  {
    id: "retail",
    navyId: "retail-consumer-goods",
    name: "Retail & Consumer Goods",
    tagline: "Omnichannel digital commerce and real-time inventory intelligence.",
    image: indRetail,
    alt: "ConfigUSA retail technology specialists and omnichannel commerce architects",
    highlight: "Headless commerce, CDP, inventory transparency & POS integrations",
    icon: ShoppingBag,
    description:
      "Connecting retail, e-commerce, and CPG brands with technology specialists driving omnichannel integration, inventory transparency, modern POS architectures, and unified customer data platforms.",
    capabilities: [
      "Omnichannel e-commerce and headless storefront engineering",
      "Real-time supply chain and inventory visibility pipelines",
      "Customer 360 data platforms (CDP) and loyalty personalization",
      "Workday and SAP enterprise retail operations integration",
    ],
    technologies: [
      "SAP Retail",
      "Workday FIN",
      "Salesforce Commerce",
      "Kafka",
      "Snowflake",
      "Shopify Plus / Headless",
    ],
  },
];

function IndustriesIndexPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = INDUSTRIES[activeTab] ?? INDUSTRIES[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Navy Blue Hero Section (Exact Navy Blue Messaging & Structure)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden bg-[#102B4E] text-white pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={industriesHeroBg}
            alt="ConfigUSA Industry Expertise"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full my-auto">
          <div className="max-w-xl lg:max-w-[560px] xl:max-w-[620px] space-y-5 rounded-2xl bg-[#102B4E]/70 backdrop-blur-md p-6 sm:p-8 lg:p-9 border border-white/15 shadow-2xl -ml-1 sm:-ml-3 lg:-ml-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C83B43]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
                INDUSTRY SOLUTIONS
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.16] tracking-tight text-white">
              Industry Understanding. Technology Expertise. Workforce Confidence.
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] text-[#e2e8f0] leading-relaxed">
              Every industry operates within its own business priorities, regulatory expectations, technology environments, and workforce challenges. ConfigUSA supports organizations across multiple sectors by aligning specialized technology talent with industry-specific requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Discuss Your Requirements <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="pt-2 border-l-2 border-[#C83B43] pl-3.5 text-xs tracking-wide text-slate-300">
              Enterprise Technology, Workforce & Managed Delivery Partner
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1.5 Auto-scrolling Client Logos Marquee                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <TechTicker title="TRUSTED BY CLIENTS ACROSS DIVERSE INDUSTRIES" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Navy Blue Interactive Preview Explorer (Interactive fi() section) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-enterprise">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            {/* Interactive Image Frame */}
            <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl group">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.05] contrast-[1.02] transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#102B4E]/90 via-[#102B4E]/50 to-transparent pointer-events-none" />

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 rounded-xl border border-white/20 bg-[#102B4E]/90 backdrop-blur-md p-4 text-white shadow-xl transition-all">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C83B43] text-white shadow-sm">
                    <activeIndustry.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-wider text-[#C83B43] uppercase">
                      {activeIndustry.name}
                    </p>
                    <p className="truncate text-xs sm:text-sm text-white/90 font-medium">
                      {activeIndustry.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Interactive List */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-px w-6 bg-[#C83B43]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#245B91]">
                  INDUSTRY EXPERIENCE
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Expertise aligned with the industries we serve.
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                From regulated environments to fast-moving technology organizations, we align talent to the context that matters.
              </p>

              <div className="mt-6 space-y-1 border-t border-slate-200">
                {INDUSTRIES.map((item, idx) => {
                  const isActive = activeTab === idx;
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveTab(idx)}
                      onClick={() => {
                        setActiveTab(idx);
                        const el = document.getElementById(item.navyId) || document.getElementById(item.id);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`group flex items-center justify-between border-b border-slate-200/80 py-3 px-3.5 -mx-3.5 rounded-lg transition-all cursor-pointer ${
                        isActive
                          ? "bg-white text-[#102B4E] font-bold shadow-xs border-l-4 border-l-[#C83B43]"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#102B4E]"
                      }`}
                    >
                      <div className="flex flex-1 items-center gap-3.5 text-sm font-medium">
                        <Icon
                          className={`h-4 w-4 shrink-0 transition-colors ${
                            isActive ? "text-[#C83B43]" : "text-slate-400 group-hover:text-[#245B91]"
                          }`}
                        />
                        <span className={isActive ? "text-[#102B4E] font-bold" : ""}>
                          {item.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-[#102B4E] transition-colors flex items-center gap-1">
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            isActive ? "text-[#C83B43] translate-x-1" : "text-slate-400 group-hover:translate-x-1"
                          }`}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7">
                <a
                  href="#all-industries"
                  className="inline-flex items-center gap-2 border-b-2 border-[#C83B43] pb-1 text-sm font-bold text-[#102B4E] hover:text-[#C83B43] transition-colors"
                >
                  Explore complete industry specifications
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Exact Navy Blue Industry Showcase Cards (Vertical Stack)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="all-industries" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#245B91]">
                  SECTOR FOCUS
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Domain-Aligned Talent for Specialized Environments
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Explore how ConfigUSA connects specialized technology professionals to distinct regulatory, operational, and engineering requirements.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-10 sm:space-y-12">
            {INDUSTRIES.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.id}
                  id={sector.navyId}
                  className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-9 shadow-sm border-t-4 border-t-[#C83B43] hover:shadow-md transition-all duration-300"
                >
                  {/* Invisible anchor for short id */}
                  <span id={sector.id} className="block -mt-24 pt-24 invisible" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C83B43]">
                        INDUSTRY 0{index + 1}
                      </span>
                      <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight flex items-center gap-2.5">
                        <Icon className="h-6 w-6 text-[#245B91]" />
                        <span>{sector.name}</span>
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#245B91] font-semibold">
                        {sector.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        to="/contact"
                        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#102B4E] shadow-sm px-5 text-xs font-semibold text-white hover:bg-[#245B91] transition-colors"
                      >
                        Consult on {sector.name} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* 2-Column Grid: Left big image, Right specifications */}
                  <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    {/* Left Column: Image */}
                    <div className="relative min-h-[220px] sm:min-h-[260px] h-full overflow-hidden rounded-xl border border-slate-200 shadow-xs bg-slate-900 group">
                      <img
                        src={sector.image}
                        alt={`${sector.name} enterprise technology operations`}
                        width={800}
                        height={550}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[1.08] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Right Column: Description & Sub-grids */}
                    <div>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        {sector.description}
                      </p>

                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {/* Col 1: Core Focus & Workflows */}
                        <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B4E] flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#C83B43]" />
                            Core Focus & Workflows
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {sector.capabilities.map((cap, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C83B43] shrink-0" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Col 2: Representative Technologies */}
                        <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B4E] flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#245B91]" />
                            Representative Technologies
                          </h4>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {sector.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-[#102B4E] shadow-2xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Detail Link */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={`/industries/${sector.id}` as any}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] hover:text-[#102B4E] transition-colors"
                        >
                          <span>Explore detailed {sector.name} capability overview</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered CTA */}
          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#102B4E] shadow-md px-8 text-sm font-bold text-white hover:bg-[#245B91] transition-all"
            >
              Discuss Your Industry Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom Enterprise Consultation Strip                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-10 lg:py-12 border-t border-white/10">
        <div className="container-enterprise">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-white">
                Operating in a specialized regulatory or technical environment?
              </h3>
              <p className="text-slate-300 text-sm">
                Let us tailor a workforce or technology delivery model specific to your sector constraints.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-cta-primary text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm"
              >
                Discuss Sector Requirements
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
