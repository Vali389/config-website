import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cloud,
  Server,
  Layers,
  Cpu,
  Lock,
} from "lucide-react";
import cloudInfraHero from "@/assets/Cloud & Infrastructure-bg.png";
import storyCloud from "@/assets/story-cloud.jpg";
import { TechTicker } from "@/components/TechTicker";

export const Route = createFileRoute("/services/cloud")({
  head: () => ({
    meta: [
      {
        title: "Cloud & Infrastructure Modernization | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Powering modern IT environments with specialized technology talent across AWS, Microsoft Azure, Google Cloud, DevOps, Kubernetes, and Cybersecurity.",
      },
      {
        property: "og:title",
        content: "Cloud & Infrastructure Expertise | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Powering Modern IT Environments with Specialized Technology Talent. Resilient IT architecture engineered for reliability, security, and scale.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CloudInfrastructurePage,
});

/* ────────────────────────── DATA ────────────────────────── */

const FOCUS_AREAS = [
  "AWS.",
  "Microsoft Azure.",
  "Google Cloud.",
  "Cloud engineering.",
  "DevOps and automation.",
  "Infrastructure engineering.",
  "Network administration.",
  "Cybersecurity.",
  "Systems administration.",
  "Enterprise IT operations.",
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function CloudInfrastructurePage() {
  const [platformFocus, setPlatformFocus] = useState("AWS & Multi-Cloud");
  const [timeline, setTimeline] = useState("Immediate Requisition (Within 2 Weeks)");

  return (
    <div className="min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Strictly matching Ashen standard with bright right side) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
        {/* Edge-to-Edge Hero Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={cloudInfraHero}
            alt="Cloud & Infrastructure Expertise"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          {/* Natural gradient overlay protecting left text while showcasing right architecture photography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/80 via-35% sm:via-40% to-transparent sm:to-58% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#102B4E]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full py-4">
          <div className="max-w-xl lg:max-w-[580px] xl:max-w-[640px] space-y-6">
            {/* Eyebrow with Brand Red Accent Line */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                CLOUD & INFRASTRUCTURE EXPERTISE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            {/* Headline - Pure White */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.16] tracking-tight text-white">
              Powering Modern IT Environments with Specialized Technology Talent.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              As organizations modernize their technology infrastructure, the demand for cloud, infrastructure, cybersecurity, and operations expertise continues to evolve.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Connect With Infrastructure Talent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/ai"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                AI & Digital Engineering <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tagline Badge */}
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
            {/* Left Column: Resilient IT Architecture & Focus Areas */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#245B91]">
                  RESILIENT IT ARCHITECTURE
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Engineered for Reliability, Security, and Scale
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  ConfigUSA helps businesses identify professionals who support scalable, resilient, and secure technology environments.
                </p>
                <p>
                  We help clients strengthen teams supporting cloud adoption, infrastructure modernization, operational reliability, and ongoing technology services.
                </p>
              </div>

              {/* Cloud Story Photo matching Navy Blue */}
              <div className="mt-7 relative overflow-hidden rounded-xl border border-slate-200 shadow-md bg-slate-900 group">
                <img
                  src={storyCloud}
                  alt="ConfigUSA cloud architects configuring enterprise infrastructure"
                  className="w-full h-56 sm:h-64 object-cover object-center filter brightness-[1.08] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-[#102B4E]/95 text-white px-4 py-2.5 text-xs flex items-center justify-between border-t border-white/20">
                  <span className="font-semibold text-white">
                    Cloud Modernization & DevOps Governance
                  </span>
                  <span className="text-[#C83B43] font-mono font-bold">
                    AWS · Azure · GCP
                  </span>
                </div>
              </div>

              {/* Focus Areas (10 Cards with Emerald Checkmarks & Red Accent Bar) */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#102B4E]">
                  Focus Areas
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {FOCUS_AREAS.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-xs sm:text-sm font-semibold text-[#102B4E] shadow-2xs hover:border-[#245B91] hover:shadow-xs transition-all border-l-4 border-l-[#C83B43]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-sm"
                >
                  Connect With Infrastructure Talent <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Lead Card (Inquiry Form matching Navy Blue) */}
            <div className="lg:pt-2 sticky top-28">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <ShieldCheck className="h-5 w-5 text-[#C83B43]" />
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Source Cloud & Infrastructure Talent
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deploy pre-vetted engineers across AWS, Azure, GCP, Kubernetes, and Cyber Defense.
                </p>

                <div className="mt-5 space-y-3.5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Cloud & Infrastructure Focus
                    </span>
                    <select
                      value={platformFocus}
                      onChange={(e) => setPlatformFocus(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#245B91]"
                    >
                      <option value="AWS & Multi-Cloud">Amazon Web Services (AWS)</option>
                      <option value="Microsoft Azure">Microsoft Azure Cloud</option>
                      <option value="Google Cloud Platform">Google Cloud Platform (GCP)</option>
                      <option value="DevOps & Platform Engineering">DevOps, CI/CD & Kubernetes</option>
                      <option value="Cybersecurity & SecOps">Cybersecurity & SecOps Defense</option>
                      <option value="Systems & Network Admin">Enterprise Systems & Network Admin</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Deployment Timeline
                    </span>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#245B91]"
                    >
                      <option value="Immediate Requisition (Within 2 Weeks)">Immediate Requisitions (Within 2 Weeks)</option>
                      <option value="Upcoming Project Spike (30–60 Days)">Upcoming Project Spike (30–60 Days)</option>
                      <option value="Long-Term Dedicated Pod">Long-Term Dedicated Engineering Pod</option>
                    </select>
                  </label>

                  <div className="rounded-lg bg-white border border-slate-200 p-3.5 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Turnaround SLA:</span>
                      <span className="text-[#C83B43]">24–48 Hours</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Vetting Standard:</span>
                      <span className="text-emerald-700">Practitioner Screened & Certified</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#102B4E]">
                      <span>Compliance:</span>
                      <span className="text-slate-800">100% Vetted, E-Verify & Insured</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full btn-cta-primary text-center py-2.5 text-xs font-bold block shadow-xs mt-4"
                  >
                    Submit Infrastructure Requisition
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
                Ready to strengthen your cloud and infrastructure capability?
              </h3>
              <p className="text-slate-300 text-sm">
                Connect with our enterprise technology team to discuss your cloud architecture, migration, and talent requirements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-cta-primary text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm"
              >
                Connect With Infrastructure Talent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
