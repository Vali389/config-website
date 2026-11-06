import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Globe2,
  GitBranch,
  ShieldCheck,
  ArrowRight,
  Building2,
  Phone,
  Check,
  CheckCircle2,
  Clock,
  Workflow,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import globalDeliveryHeroBg from "@/assets/global-delivery-bg.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";

export const Route = createFileRoute("/global-delivery")({
  head: () => ({
    meta: [
      {
        title: "Global Delivery — ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA works with clients across defined markets and delivery locations, aligning talent access, communication and operating practices to each engagement.",
      },
      {
        property: "og:title",
        content: "Global Delivery | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "A delivery model aligned to your business and geography. Onshore leadership, dedicated delivery centres and integrated governance.",
      },
    ],
  }),
  component: GlobalDeliveryPage,
});

// Dual-Engine Delivery Architecture (Gold Reference Integration)
const DUAL_ENGINE_REGIONS = [
  {
    region: "North America",
    badge: "Onshore Leadership",
    title: "Client Partnership & Strategic Architecture",
    desc: "Direct local engagement pairing executive account management with senior technology architects working directly within your time zone.",
    capabilities: [
      "Strategic account governance & executive sponsorship",
      "Onshore solutions architects & forward-deployed leads",
      "Time-zone-aligned, rapid escalation & sprint reviews",
      "Seamless on-site workshops & stakeholder alignment",
    ],
  },
  {
    region: "India",
    badge: "Offshore Engineering Center",
    title: "Global Delivery & Scaled Technology Hub",
    desc: "Dedicated engineering pods in Hyderabad delivering continuous development velocity, deep platform expertise, and cost-efficient scaling.",
    capabilities: [
      "Specialized engineering pods (AI, Cloud, ERP, Full-Stack)",
      "24/7 follow-the-sun continuous delivery & maintenance",
      "Vetted technical talent with rapid ramp-up capability",
      "Enterprise security, IP protection & SOC-ready controls",
    ],
  },
];

// Operating Cadence & Coordination
const OPERATING_CADENCE = [
  {
    icon: Clock,
    title: "Follow-the-Sun Delivery Cadence",
    desc: "Structured daily handoffs between North America and India compress development cycles and ensure 24-hour momentum on critical milestones.",
  },
  {
    icon: Workflow,
    title: "Synchronized Sprint Governance",
    desc: "Shared backlog ceremonies, transparent Jira/DevOps boards, and unified CI/CD pipelines eliminate operational silos.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise IP & Security Isolation",
    desc: "Isolated developer virtual environments, secure VPN tunnels, strict access governance, and comprehensive NDA compliance.",
  },
];

// Blueprint Section 10: Governance & Cross-border principles
const GOVERNANCE_POINTS = [
  "Agreed points of contact and defined escalation paths.",
  "Regular status reporting and transparent milestone tracking.",
  "Rigorous onboarding controls, IP protection and secure data access.",
  "Periodic executive delivery reviews and performance benchmarking.",
];

// Verified Offices per Blueprint Section 2 & 10
const OFFICES = [
  {
    city: "United States",
    tag: "Global Headquarters",
    lines: ["666 Plainsboro Road, Suite 1237", "Plainsboro, NJ 08536"],
    phone: "+1 (609) 934-3184",
  },
  {
    city: "Canada",
    tag: "North America Hub",
    lines: ["1585 Markham Road, Suite # 309", "Toronto, ON M1B 2W1"],
    phone: "+1 (647) 557-6968",
  },
  {
    city: "India",
    tag: "Delivery & Engineering Center",
    lines: [
      "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2",
      "Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    ],
    phone: "+91 80746 83380",
  },
];

function GlobalDeliveryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={globalDeliveryHeroBg}
            alt="Global Delivery Network"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                GLOBAL DELIVERY
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              A delivery model aligned to your business and geography.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              ConfigUSA works with clients across defined markets and delivery locations, aligning talent access, communication and operating practices to each engagement.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Global Delivery <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#dual-engine"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Dual-Engine Model <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Dual-Engine Delivery Architecture (Gold Reference)     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="dual-engine" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    DUAL-ENGINE DELIVERY
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  A delivery model that spans onshore partnership & offshore scale.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
                Talent and delivery capabilities across North America and India—pairing local partnership with global scale and round-the-clock momentum on your most important initiatives.
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DUAL_ENGINE_REGIONS.map((region, idx) => (
              <FadeUp key={region.region} delay={idx * 0.1}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-7 sm:p-8 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C83B43] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                        {region.badge}
                      </span>
                      <span className="text-xs font-extrabold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#102B4E] tracking-tight mb-2">
                      {region.region}
                    </h3>
                    <h4 className="text-sm font-bold text-[#245B91] mb-3">
                      {region.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {region.desc}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-200/80">
                      {region.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#245B91] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <span className="text-xs font-bold text-[#C83B43] inline-flex items-center gap-1.5">
                      Dedicated delivery capability
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Workforce Coordination & Operating Cadence             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WORKFORCE COORDINATION
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Operating cadence, handover protocols and transparent governance.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPERATING_CADENCE.map((cadence, idx) => (
              <FadeUp key={cadence.title} delay={idx * 0.08}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-5 group-hover:bg-[#102B4E] group-hover:text-white transition-colors">
                      <cadence.icon className="h-5 w-5 stroke-[1.75]" />
                    </span>
                    <h3 className="text-base font-bold text-[#102B4E] tracking-tight mb-2">
                      {cadence.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cadence.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Operating footprint (Verified Locations Only)          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="operating-footprint" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OPERATING FOOTPRINT
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Confirmed corporate offices and delivery centres.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Active operating presence across North America and India, with clearly defined roles and legal standing for each location.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C83B43] bg-red-50 border border-red-100 px-2.5 py-1 rounded">
                      <Building2 className="h-3.5 w-3.5" />
                      {office.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                    {office.city}
                  </h3>
                  <div className="text-sm text-slate-600 space-y-1 mb-4">
                    {office.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Phone className="h-3.5 w-3.5 text-[#245B91]" />
                  <span>{office.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Cross-border delivery & Governance (Split 2-Col)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    DELIVERY GOVERNANCE
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Maintaining delivery visibility across time zones.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  For each engagement, define the client location, resource location, working hours, reporting line, data access and applicable contractual arrangements.
                </p>
              </div>

              <div className="space-y-3.5">
                {GOVERNANCE_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={gccEnterpriseHub}
                  alt="Global Delivery Operations"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Looking for a delivery model that fits your programme?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              We will help you design a structure aligned to your timeline and budget.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Global Delivery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
