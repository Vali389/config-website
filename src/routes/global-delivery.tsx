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
} from "lucide-react";
import heroTemplateGlobalDelivery from "@/assets/hero_template_global_delivery.png";
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
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={heroTemplateGlobalDelivery}
            alt="Global Delivery Operations"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
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
                href="#operating-footprint"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Our Operating Footprint <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Operating footprint (Verified Locations Only)          */}
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
