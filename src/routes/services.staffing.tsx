import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  UserCheck,
  Briefcase,
  Layers,
  ArrowRight,
  Check,
  ShieldCheck,
  Cpu,
  Database,
  Cloud,
  BrainCircuit,
  Lock,
  Boxes,
  Clock,
  Sparkles,
  Award,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import staffingHeroBg from "@/assets/us-it-staffing-solutions-bg.png";
import workforceStaffingTeam from "@/assets/staffing_western_team.jpg";

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      {
        title: "IT Staffing & Talent Solutions — Specialized Tech Recruitment | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Accelerate engineering velocity with ConfigUSA's IT staffing and talent solutions: contract staffing, contract-to-hire, and direct-hire technical placement across software engineering, cloud, AI, data, and enterprise platforms.",
      },
      {
        property: "og:title",
        content: "IT Staffing & Talent Solutions | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Specialized IT talent. Precision delivery. Rapid deployment. Contract staffing, contract-to-hire, direct placement, and dedicated tech pods.",
      },
    ],
  }),
  component: ITStaffingSolutionsPage,
});

// 4 Core IT Staffing Models
const STAFFING_MODELS = [
  {
    icon: Users,
    title: "Contract IT Staffing",
    tag: "Agile Scale & Specialist Talent",
    desc: "Rapid deployment of pre-screened technical specialists for defined project durations and sprint cycles. Scale engineering capacity on-demand with zero long-term payroll overhead.",
    points: [
      "Rapid 48–72 hour candidate shortlists",
      "Access to niche, hard-to-find technology skill sets",
      "Seamless integration into client agile workflows",
    ],
  },
  {
    icon: UserCheck,
    title: "Contract-to-Hire",
    tag: "Risk-Managed Evaluation",
    desc: "Evaluate hands-on coding quality, architectural problem solving, and cultural alignment directly in your live production environment before extending permanent employment.",
    points: [
      "De-risked hiring through real-world work evaluation",
      "Transparent conversion terms and buyout protocols",
      "High retention and smooth permanent transitions",
    ],
  },
  {
    icon: Briefcase,
    title: "Direct Placement & Executive Search",
    tag: "Permanent Leadership & Architects",
    desc: "Recruit permanent software architects, engineering managers, cloud practitioners, and specialist technical leaders through our rigorous headhunting methodology.",
    points: [
      "Practitioner-led multi-stage technical screening",
      "Deep talent intelligence across North America and India",
      "Comprehensive candidate replacement warranty",
    ],
  },
  {
    icon: Layers,
    title: "Dedicated Engineering Pods",
    tag: "Targeted Milestone Delivery",
    desc: "Deploy pre-assembled, synergistic squads of software developers, QA automation leads, and DevOps engineers dedicated to driving specific roadmap deliverables.",
    points: [
      "Turnkey squad mobilization with lead architects",
      "Direct alignment to client sprint backlogs",
      "Dual-engine model: US leadership paired with India scale",
    ],
  },
];

// Rigorous Screening Highlights
const TECHNICAL_VETTING_CRITERIA = [
  "Multi-stage technical interviews led by domain practitioners covering architecture, clean code, and system design.",
  "Hands-on coding evaluations, algorithmic problem solving, and practical debugging assessments.",
  "Rigorous background checks, E-Verify verification, credential validation, and security clearances.",
  "Culture, communication, and agile collaboration benchmarking for day-one operational impact.",
  "Fast 48-to-72 hour presentation of verified candidates tailored to your specific tech stack.",
];

// Core Technology Practice Areas
const TECH_PRACTICE_AREAS = [
  {
    icon: Cpu,
    title: "Software & Web Engineering",
    roles: "Full-Stack (React, Angular, Node.js), Java, .NET Core, Python, Golang, Microservices, and REST/GraphQL APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Architecture",
    roles: "AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, CI/CD Automation, SRE, and Resilient Cloud Infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "Data Engineering & AI/ML",
    roles: "PySpark, Databricks, Snowflake, Kafka, Python, LLM Fine-Tuning, GenAI Workflows, and Data Lakehouse Architecture.",
  },
  {
    icon: Database,
    title: "Enterprise Applications",
    roles: "Workday (HCM, Financials, Integration), SAP S/4HANA (Technical & Functional), Salesforce, MuleSoft, and Oracle Cloud.",
  },
  {
    icon: Boxes,
    title: "Palantir & Specialist Platforms",
    roles: "Palantir Foundry, AIP, Ontology Engineers, Pipeline Builder, Frontline Apps, and Mission-Critical Data Integration.",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Quality Assurance",
    roles: "SecOps, Cloud Security, Penetration Testing, SDET Automation (Selenium, Cypress, Playwright), and SOC-2 Compliance.",
  },
];

function ITStaffingSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={staffingHeroBg}
            alt="IT Staffing & Talent Solutions"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012056] via-[#012056]/95 via-30% md:via-40% to-transparent to-62% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#012056]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                IT STAFFING & TALENT SOLUTIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Specialized IT talent. Precision delivery. Rapid deployment.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Accelerate your engineering, data, cloud, and enterprise technology initiatives with pre-vetted technology professionals. ConfigUSA provides agile contract staffing, contract-to-hire, and direct-hire technical talent tailored to your technical stack and delivery timelines.
            </p>

            <div className="pt-2">
              <a
                href="#staffing-models"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Staffing Models <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Staffing Models (Template Card Grid)                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="staffing-models" className="py-8 lg:py-12 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    STAFFING & TALENT MODELS
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Flexible recruitment structures built for technical agility.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
                Whether scaling engineering velocity for an urgent roadmap milestone, evaluating specialized talent in production, or securing permanent technical leadership, our staffing structures fit your operational reality.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STAFFING_MODELS.map((model) => (
                <div
                  key={model.title}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                        <model.icon className="h-5 w-5 stroke-[1.75]" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] bg-slate-100 px-2.5 py-1 rounded-md">
                        {model.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-2.5">
                      {model.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {model.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {model.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Check className="h-3.5 w-3.5 text-[#C83B43] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 mt-8">
              <p className="text-xs sm:text-sm text-slate-600">
                Looking for end-to-end outcome ownership or SLA-governed programs?
              </p>
              <Link
                to="/engagement-models"
                className="text-xs sm:text-sm font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Managed Delivery & Workforce Engagement Models</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Core Technology Practice Areas                          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span className="text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  TECHNICAL SPECIALIZATION
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight">
                Specialized IT domains we staff with precision.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                We maintain active talent pipelines of pre-vetted engineers, architects, and technical leaders ready for immediate deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_PRACTICE_AREAS.map((practice) => (
                <div
                  key={practice.title}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#102B4E] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#102B4E]">
                      <practice.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-bold text-[#102B4E] text-base tracking-tight">
                      {practice.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {practice.roles}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Rigorous Technical Screening (Split 2-Col with Photo)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                      RIGOROUS TECHNICAL SCREENING
                    </span>
                    <span className="w-10 h-[3px] bg-[#C83B43]" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                    Screened by engineers, for engineers.
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    We go far beyond keyword search. Every technologist undergoes comprehensive technical screening led by seasoned practitioner engineers, ensuring day-one contribution and architectural depth.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {TECHNICAL_VETTING_CRITERIA.map((criterion, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="text-sm font-medium text-slate-700 leading-snug">
                        {criterion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <img
                    src={workforceStaffingTeam}
                    alt="ConfigUSA Technical Staffing & Recruitment Team"
                    className="w-full h-84 object-cover object-center filter brightness-[1.03] contrast-[1.02]"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#102B4E]/90 text-white p-3 rounded-xl backdrop-blur-xs text-xs">
                    <div className="flex items-center gap-2 font-bold mb-0.5">
                      <ShieldCheck className="h-4 w-4 text-[#C83B43]" />
                      <span>100% Vetted & Compliance-Ready</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      E-Verify certified, background-checked, and technically benchmarked for rapid deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-8 lg:py-10 border-t border-white/10">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C83B43] mb-1 block">
                  HAVE AN IMMEDIATE TALENT REQUIREMENT?
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Accelerate your technical hiring with ConfigUSA.
                </h2>
              </div>
              <div className="lg:col-span-7 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
                Share your role requirements and our technical recruiting practice will deliver qualified candidates within 48 to 72 hours.
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}