import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Clock,
  FileCheck,
} from "lucide-react";
import managedDeliveryHero from "@/assets/us-MSP & VMS Programs-bg.png";
import { TechTicker } from "@/components/TechTicker";

export const Route = createFileRoute("/services/managed-delivery")({
  head: () => ({
    meta: [
      {
        title: "MSP & VMS Programs — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Enterprise workforce delivery with discipline, responsiveness, and accountability across managed service provider (MSP) and vendor management system (VMS) environments.",
      },
      {
        property: "og:title",
        content: "MSP & VMS Programs — ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "ConfigUSA supports enterprise managed workforce programs through structured recruitment, high-quality candidate submissions, onboarding coordination, and compliance awareness.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MSPVMSPage,
});

/* ────────────────────────── DATA ────────────────────────── */

const CAPABILITIES = [
  "MSP program participation and delivery support.",
  "VMS-based requisition management.",
  "Specialized candidate sourcing and screening.",
  "Submission quality and turnaround coordination.",
  "Interview scheduling and onboarding assistance.",
  "Workforce compliance process support.",
  "Ongoing engagement and account communication.",
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function MSPVMSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Strictly matching Ashen standard with bright right side) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        {/* Edge-to-Edge Hero Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={managedDeliveryHero}
            alt="ConfigUSA MSP & VMS Programs"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          {/* Gradient overlay protecting left text while showcasing right photography seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#012056] via-[#012056]/95 via-30% md:via-40% to-transparent to-62% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#012056]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[620px] xl:max-w-[680px] space-y-6">
            {/* Eyebrow with Brand Red Accent Line */}
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                MANAGED WORKFORCE PROGRAMS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            {/* Headline - Exactly 2 lines */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.16] tracking-tight text-white max-w-2xl">
              Enterprise Workforce Delivery with<br className="hidden sm:inline" /> Discipline, Responsiveness, and Accountability.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Managing talent requirements within an MSP or VMS environment calls for precision, compliance awareness, timely communication, and consistent execution.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                hash="enquiry-form"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Discuss MSP Workforce Requirements <ArrowRight className="h-4 w-4" />
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
          <div className="max-w-4xl mx-auto">
            {/* Main Content: Program Discipline & Core Capabilities */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#245B91]">
                  PROGRAM DISCIPLINE
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Built for Enterprise Workforce Expectations
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  ConfigUSA supports managed workforce programs through structured recruitment practices, qualified candidate submissions, onboarding coordination, and alignment with program-specific expectations.
                </p>
                <p>
                  Our experience working within established MSP ecosystems helps us understand the operational standards and delivery commitments required to support enterprise contingent workforce programs.
                </p>
              </div>

              {/* Core Capabilities (7 Cards with Emerald Checkmarks & Red Accent Bar) */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#102B4E]">
                  Core Capabilities
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {CAPABILITIES.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-xs sm:text-sm font-semibold text-[#102B4E] shadow-2xs hover:border-[#245B91] hover:shadow-xs transition-all border-l-4 border-l-[#C83B43]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Discipline in Practice Card */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs border-t-4 border-t-[#102B4E]">
                <h4 className="text-base font-bold text-[#102B4E]">
                  Delivery Discipline in Practice
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  We recognize that successful MSP delivery depends on more than individual placements. It requires dependable processes, professional coordination, and a commitment to meeting the standards established by each client and program.
                </p>
              </div>

              {/* Highlight Quote Block */}
              <div className="mt-8 border-l-4 border-[#C83B43] pl-4 py-2.5 bg-slate-50/80 rounded-r-lg">
                <p className="text-sm font-semibold text-[#102B4E]">
                  Structured processes. Specialized talent. Consistent partnership.
                </p>
              </div>

              {/* CTA Action */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  hash="enquiry-form"
                  className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-sm"
                >
                  Discuss MSP Workforce Requirements <ArrowRight className="h-4 w-4" />
                </Link>
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
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
              Ready to strengthen your MSP or VMS program delivery?
            </h3>
            <p className="text-slate-300 text-sm">
              Connect with our enterprise workforce team to review requisition requirements and SLA expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
