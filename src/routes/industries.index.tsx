import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  Cpu,
  Factory,
  ShoppingBag,
  HeartPulse,
  Truck,
  ArrowRight,
} from "lucide-react";
import indFinancial from "@/assets/ind-financial.jpg";
import indTechnology from "@/assets/ind-technology.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indGovernment from "@/assets/ind-government.jpg";
import heroTemplateIndustries from "@/assets/hero_template_industries.png";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      {
        title: "Industries We Serve — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Technology and workforce needs vary by industry. ConfigUSA aligns specialist talent and delivery support to the operating context, regulatory environment and business priorities of each client.",
      },
      {
        property: "og:title",
        content: "Industries | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Industry context matters. So does the right expertise. Banking & Financial Services, Technology, Manufacturing, Retail, Healthcare and Logistics.",
      },
    ],
  }),
  component: IndustriesIndexPage,
});

// Blueprint Section 11: 6 Sectors exactly as written
const SECTOR_OVERVIEWS = [
  {
    id: "financial",
    name: "Banking & Financial Services",
    icon: Landmark,
    image: indFinancial,
    description:
      "Technology and specialist talent for banking platforms, digital transformation, data, risk and enterprise operations—limited to demonstrated capability.",
  },
  {
    id: "technology",
    name: "Technology & IT Services",
    icon: Cpu,
    image: indTechnology,
    description:
      "Engineering, cloud, data, AI and enterprise platform talent for technology providers and service organisations.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: Factory,
    image: indManufacturing,
    description:
      "Specialist technology and digital talent supporting enterprise systems, engineering and operational transformation.",
  },
  {
    id: "retail",
    name: "Retail & Consumer",
    icon: ShoppingBag,
    image: indRetail,
    description:
      "Technology and data talent aligned to digital platforms, customer experience, integration and business operations.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    image: indHealthcare,
    description:
      "Technology and data specialists for relevant digital, platform and operational requirements, subject to domain and compliance experience.",
  },
  {
    id: "government",
    name: "Logistics & Supply Chain",
    icon: Truck,
    image: indGovernment,
    description:
      "Technology talent supporting visibility, analytics, integration and digital operations.",
  },
];

function IndustriesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={heroTemplateIndustries}
            alt="Industries We Serve"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                INDUSTRIES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Industry context matters. So does the right expertise.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Technology and workforce needs vary by industry. ConfigUSA aligns specialist talent and delivery support to the operating context, regulatory environment and business priorities of each client.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#industry-sectors"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Industry Requirements <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discuss Sector Needs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Industry Sectors (Template Image Cards Grid)            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="industry-sectors" className="section-padding bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  INDUSTRY SECTORS
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Specialist technology talent aligned to sector operating realities.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Every sector operates under specific regulatory standards, compliance mandates and architecture requirements.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTOR_OVERVIEWS.map((sector) => (
              <div
                key={sector.id}
                className="group rounded-xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B4E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                      <sector.icon className="h-4 w-4" />
                    </span>
                    <span className="font-bold text-sm tracking-tight text-white drop-shadow-sm">
                      {sector.name}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {sector.description}
                  </p>
                  <Link
                    to={`/industries/${sector.id}` as any}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] group-hover:text-[#a82e35] transition-colors"
                  >
                    <span>Explore sector solutions</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Discuss industry-specific capability needs.
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Connect with our team to explore relevant experience and available talent in your sector.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Industry Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
