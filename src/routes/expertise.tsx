import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  Building2,
  Database,
  Cloud,
  BrainCircuit,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import expertiseHeroBg from "@/assets/Enterprise Applications-bg.jpg";
import palantirHeroImg from "@/assets/palantir-foundry-aip-hero.jpg";
import cloudHeroImg from "@/assets/cloud-infrastructure-hero.jpg";
import digitalHeroImg from "@/assets/digital-engineering-hero.jpg";
import aiHeroImg from "@/assets/ai-enterprise-hero.jpg";
import erpHeroImg from "@/assets/erp_implementation_img.png";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Technology Expertise & Enterprise Platforms — ConfigUSA" },
      {
        name: "description",
        content:
          "Specialist technology capabilities across Palantir Foundry & AIP, SAP S/4HANA, Workday, Cloud Infrastructure, Enterprise AI, Data Engineering, and Digital Product Engineering.",
      },
      { property: "og:title", content: "Technology Expertise | ConfigUSA" },
      {
        property: "og:description",
        content:
          "Practitioner-led technology capabilities spanning leading enterprise platforms and cloud architectures.",
      },
    ],
  }),
  component: ExpertisePage,
});

const TECH_CAPABILITIES = [
  {
    id: "palantir",
    tag: "Data & Decision Platforms",
    title: "Palantir Foundry & AIP Services",
    summary:
      "Specialist technical practitioners delivering ontology architecture, PySpark data pipelines, and operational AI applications within enterprise data environments.",
    details: [
      "Enterprise Ontology design & operational digital twin modeling",
      "Large-scale PySpark data integration, cleansing & transforms",
      "Operational AI workflows & LLM orchestration via AIP",
      "Workshop application development & executive decision dashboards",
      "Granular role-based security, governance & data lineage",
    ],
    techStack: ["Palantir Foundry", "AIP", "PySpark", "TypeScript", "Contour", "Quiver", "Slate"],
    value:
      "Compressing complex multi-source data ingestion from months to weeks, enabling real-time operational decisions.",
    image: palantirHeroImg,
    cta: "Explore Palantir Talent",
    to: "/services/palantir",
    icon: Boxes,
  },
  {
    id: "sap",
    tag: "Enterprise Resource Planning",
    title: "SAP Solutions & S/4HANA Migration",
    summary:
      "End-to-end functional and technical specialists supporting greenfield S/4HANA implementations, legacy ECC migrations, and custom enterprise enhancements.",
    details: [
      "S/4HANA Finance, Supply Chain & Logistics transformation",
      "SAP BTP (Business Technology Platform) cloud integration",
      "Custom ABAP on HANA, CDS views & SAP Fiori UX engineering",
      "Master data governance, data migration & validation pipelines",
      "Post-implementation hypercare, optimization & managed support",
    ],
    techStack: ["SAP S/4HANA", "SAP BTP", "ABAP", "SAP Fiori", "SAP SuccessFactors", "SAP Ariba"],
    value:
      "Minimizing operational downtime and risk during mission-critical ERP transitions with certified functional leads.",
    image: erpHeroImg,
    cta: "Explore SAP Solutions",
    to: "/services/sap",
    icon: Building2,
  },
  {
    id: "workday",
    tag: "Human Capital & Financials",
    title: "Workday Enterprise Solutions",
    summary:
      "Specialized functional consultants and integration architects optimizing Workday HCM, Financial Management, and enterprise reporting ecosystems.",
    details: [
      "Core HCM, Advanced Compensation, Benefits & Talent deployment",
      "Workday Financial Management & adaptive planning architecture",
      "Enterprise Interface Builder (EIB), Core Connectors & Studio integrations",
      "Workday Prism Analytics & executive workforce dashboarding",
      "Semi-annual update testing, compliance audits & release management",
    ],
    techStack: ["Workday HCM", "Workday Financials", "Workday Studio", "Workday Prism", "Workday Extend"],
    value:
      "Streamlining human capital workflows and multi-entity financial consolidation with seasoned system architects.",
    image: erpHeroImg,
    cta: "Explore Workday Solutions",
    to: "/services/enterprise-applications",
    icon: Database,
  },
  {
    id: "cloud",
    tag: "Cloud & DevOps",
    title: "Cloud Architecture & Resilient Infrastructure",
    summary:
      "Modernizing enterprise computing estates through secure multi-cloud architectures, automated CI/CD pipelines, and cost-optimized infrastructure.",
    details: [
      "Multi-cloud design & migration across AWS, Microsoft Azure & GCP",
      "Infrastructure as Code (IaC) via Terraform, Ansible & Pulumi",
      "Container orchestration with Kubernetes, Docker & OpenShift",
      "DevSecOps automation, zero-trust cloud security & compliance",
      "FinOps cloud cost governance, observability & 24/7 SRE support",
    ],
    techStack: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker", "Datadog"],
    value:
      "Slashing cloud infrastructure expenditure while elevating uptime and deployment frequency across mission-critical apps.",
    image: cloudHeroImg,
    cta: "Explore Cloud Architecture",
    to: "/services/cloud",
    icon: Cloud,
  },
  {
    id: "ai-data",
    tag: "Artificial Intelligence",
    title: "AI, Machine Learning & Digital Engineering",
    summary:
      "From generative AI prototypes to production-grade distributed microservices, we build reliable, high-velocity digital capabilities.",
    details: [
      "Enterprise Retrieval-Augmented Generation (RAG) & Agentic AI workflows",
      "Modern Data Stack engineering (Snowflake, Databricks, dbt, Apache Kafka)",
      "High-scale microservices, REST & GraphQL enterprise APIs",
      "Cloud-native full-stack application development (React, Node, Go, Java)",
      "Automated testing, continuous verification & zero-downtime releases",
    ],
    techStack: ["Python", "TensorFlow", "Snowflake", "Databricks", "Kafka", "React", "Node.js", "Java"],
    value:
      "Accelerating product time-to-market and unlocking predictive intelligence from fragmented enterprise data lakes.",
    image: aiHeroImg,
    cta: "Explore AI & Intelligent Solutions",
    to: "/services/ai",
    icon: BrainCircuit,
  },
];

function ExpertisePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={expertiseHeroBg}
            alt="ConfigUSA Technology Expertise"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/85 via-[#102B4E]/50 to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                TECHNOLOGY EXPERTISE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Practitioner capability across enterprise platforms.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              We provide specialist technical capability across Palantir, SAP, Workday, Cloud, and modern AI engineering. Our focus is on technical competence, verified delivery credentials, and seamless alignment with client architectures.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#capabilities"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Platforms <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discuss Technical Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Technology Capabilities Detailed Grid                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="capabilities" className="py-8 lg:py-12 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  CORE PLATFORMS & CAPABILITIES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialized engineering talent where execution complexity is highest.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Rather than claiming superficial coverage of every technology, ConfigUSA concentrates its specialist practices in high-impact domains requiring proven practitioner credentials.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-10">
            {TECH_CAPABILITIES.map((cap, idx) => (
              <FadeUp key={cap.id} delay={idx * 0.08}>
                <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-7 lg:p-9 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row gap-8 items-center justify-between">
                  <div className="lg:max-w-xl space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100">
                        <cap.icon className="h-5 w-5 stroke-[2]" />
                      </span>
                      <div>
                        <span className="text-xs font-bold text-[#245B91] uppercase tracking-wider block">
                          {cap.tag}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-extrabold text-[#102B4E] tracking-tight">
                          {cap.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {cap.summary}
                    </p>

                    <div>
                      <h4 className="text-xs font-extrabold text-[#102B4E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-[#245B91]" />
                        Key Capabilities & Deliverables
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {cap.details.map((d) => (
                          <li key={d} className="flex items-start gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">
                        Stack:
                      </span>
                      {cap.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-[#102B4E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="rounded-lg bg-white border border-slate-200/80 p-3 mt-3">
                      <span className="text-[11px] font-bold text-[#C83B43] uppercase tracking-wider block mb-0.5">
                        Business Impact
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {cap.value}
                      </p>
                    </div>

                    <div className="pt-3">
                      <Link
                        to={cap.to as any}
                        className="btn-cta-primary inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs"
                      >
                        <span>{cap.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-[420px] shrink-0">
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-56 lg:h-72 object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Bottom CTA Strip                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
              Have specific platform or engineering talent requirements?
            </h3>
            <p className="text-slate-300 text-sm">
              Connect directly with our practice directors to assess scope, skill availability and deployment timelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="btn-cta-primary text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm"
            >
              Discuss Your Platform Needs
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

