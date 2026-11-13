import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  Database,
  Cloud,
  Code2,
  ShieldCheck,
  Building2,
} from "lucide-react";
import consultingHero from "@/assets/Digital Engineering & Custom Software – Background Image.png";
import techTeamImg from "@/assets/Collaborative Tech Team in Modern Office-2.png";
import { TechTicker } from "@/components/TechTicker";

export const Route = createFileRoute("/services/software")({
  head: () => ({
    meta: [
      {
        title:
          "Technology Consulting & Resource Augmentation — ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA helps organizations strengthen project teams by providing access to specialized technology professionals who can support implementation initiatives, system enhancements, integrations, modernization programs, and ongoing application requirements.",
      },
      {
        property: "og:title",
        content:
          "Technology Consulting & Resource Augmentation — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "The expertise to support your most important technology initiatives. Specialized resource augmentation for enterprise systems, cloud platforms, data engineering, and modernization.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TechnologyConsultingPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const AREAS_OF_SUPPORT = [
  { title: "Enterprise applications.", icon: Building2 },
  { title: "Cloud platforms.", icon: Cloud },
  { title: "Infrastructure.", icon: Cpu },
  { title: "Data engineering.", icon: Database },
  { title: "Application development.", icon: Code2 },
  { title: "Testing.", icon: ShieldCheck },
  { title: "Integration.", icon: Layers },
  { title: "Technology program support.", icon: CheckCircle2 },
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function TechnologyConsultingPage() {
  const [selectedDomain, setSelectedDomain] = useState("Enterprise applications");
  const [timeline, setTimeline] = useState("Immediate (Within 2 Weeks)");

  return (
    <div className="min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Strictly matching Ashen standard with bright right side) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
        {/* Edge-to-Edge Hero Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={consultingHero}
            alt="ConfigUSA Technology Consulting & Resource Augmentation"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          {/* Natural gradient overlay protecting left text while showcasing right photography with zero tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/80 via-35% sm:via-40% to-transparent sm:to-58% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#102B4E]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full py-4">
          <div className="max-w-xl lg:max-w-[580px] xl:max-w-[640px] space-y-6">
            {/* Eyebrow with Brand Red Accent Line */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                TECHNOLOGY RESOURCE SOLUTIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            {/* Headline - Pure White for maximum contrast and prestige */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.16] tracking-tight text-white">
              The Expertise to Support Your Most Important Technology Initiatives.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Technology initiatives require the right combination of technical knowledge, business understanding, and execution capability.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Explore Technology Expertise <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/sap"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                SAP Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Badge strip */}
            <div className="pt-2 border-l-2 border-[#C83B43] pl-3.5 text-xs tracking-wide text-slate-300">
              Enterprise Technology, Workforce & Managed Delivery Partner
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Main Body Content (Exact Copy from Navy Blue Reference)          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-start">
            {/* Left Column: Resource Augmentation Story & Areas of Support */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#245B91]">
                  RESOURCE AUGMENTATION
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Strengthening Teams for Complex Implementations
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  ConfigUSA helps organizations strengthen project teams by providing access to specialized technology professionals who can support implementation initiatives, system enhancements, integrations, modernization programs, and ongoing application requirements.
                </p>
                <p>
                  Our flexible resource augmentation approach enables organizations to complement internal teams with targeted skills aligned to their technology environments and business priorities.
                </p>
              </div>

              {/* Delivery Visual Image */}
              <div className="mt-7 relative overflow-hidden rounded-xl border border-slate-200 shadow-md bg-slate-900 group">
                <img
                  src={techTeamImg}
                  alt="ConfigUSA Specialized Technology Engineers in Modern Collaboration"
                  className="w-full h-56 sm:h-64 object-cover object-center filter brightness-[1.06] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-[#102B4E]/95 text-white px-4 py-2.5 text-xs flex items-center justify-between border-t border-white/20">
                  <span className="font-semibold text-white">
                    Specialized Technical Resources
                  </span>
                  <span className="text-[#C83B43] font-mono font-bold">
                    Targeted Expertise · Agile Pods
                  </span>
                </div>
              </div>

              {/* Areas of Support (8 Cards with Checkmarks & Red Accent Bar) */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#102B4E]">
                  Areas of Support
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {AREAS_OF_SUPPORT.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-xs sm:text-sm font-semibold text-[#102B4E] shadow-2xs hover:border-[#245B91] hover:shadow-xs transition-all border-l-4 border-l-[#C83B43]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight Quote Block */}
              <div className="mt-10 border-l-4 border-[#C83B43] pl-4 py-2.5 bg-slate-50/80 rounded-r-lg">
                <p className="text-sm font-semibold text-[#102B4E]">
                  Strengthen your internal capabilities with specialized expertise when and where your business needs it.
                </p>
              </div>

              {/* CTA Action */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-sm"
                >
                  Explore Technology Expertise <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Lead Card (Inquiry Form matching Ashen SAP/Workday pattern) */}
            <div className="lg:pt-2 sticky top-28">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Cpu className="h-5 w-5 text-[#C83B43]" />
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Augment Your Technology Team
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specify the technical competencies and timelines for your upcoming initiative.
                </p>

                <div className="mt-5 space-y-3.5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Technical Competency / Domain
                    </span>
                    <select
                      value={selectedDomain}
                      onChange={(e) => setSelectedDomain(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#245B91]"
                    >
                      <option value="Enterprise applications">Enterprise Applications & ERP</option>
                      <option value="Cloud platforms">Cloud Platforms (AWS, Azure, GCP)</option>
                      <option value="Infrastructure">Infrastructure & Modern DevOps</option>
                      <option value="Data engineering">Data Engineering & Modern Pipelines</option>
                      <option value="Application development">Application Development & Microservices</option>
                      <option value="Testing">Quality Engineering & Automated QA</option>
                      <option value="Integration">Systems & API Integration (MuleSoft, Kafka)</option>
                      <option value="Technology program support">Technology Program Management</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Engagement Timeline
                    </span>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#245B91]"
                    >
                      <option value="Immediate (Within 2 Weeks)">Immediate (Within 2 Weeks)</option>
                      <option value="Next Month (30 Days)">Upcoming Sprint / 30 Days</option>
                      <option value="Q2 / Long-term Initiative">Quarterly / Long-term Initiative</option>
                    </select>
                  </label>

                  <div className="rounded-lg bg-white border border-slate-200 p-3.5 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Turnaround:</span>
                      <span className="text-[#C83B43]">48–72 Hours</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Screening:</span>
                      <span className="text-emerald-700">Practitioner-Vetted</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Engagement:</span>
                      <span className="text-slate-800">Contract / SOW / Augmentation</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full btn-cta-primary text-center py-2.5 text-xs font-bold block shadow-xs mt-4"
                  >
                    Submit Resource Request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Credentials & Client Logos Ticker                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <TechTicker title="TRUSTED BY CLIENTS ACROSS DIVERSE INDUSTRIES" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom Consultation Bar                                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-10 border-t border-white/10">
        <div className="container-enterprise">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                Planning a critical technology initiative or need specialized skills?
              </h3>
              <p className="text-slate-300 text-sm">
                Connect with our technology consulting team to review your technical requirements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-cta-primary text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
