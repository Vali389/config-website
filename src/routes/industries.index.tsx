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
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import indFinancial from "@/assets/Financial Analytics Team at Work-1.png";
import indTechnology from "@/assets/Collaborative Tech Team in Modern Office-2.png";
import indManufacturing from "@/assets/Collaborative Engineers in a Smart Factory-3.png";
import indRetail from "@/assets/Retail Team Reviewing Tablet in Showroom-4.png";
import indHealthcare from "@/assets/High-Tech Medical Research Laboratory-5.png";
import indGovernment from "@/assets/Warehouse Logistics Dashboard Team-6.png";
import { FadeUp } from "@/components/FadeUp";
import industriesHeroBg from "@/assets/industries-bg.jpg";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      {
        title: "Industries We Serve — Sector-Aligned Capabilities | ConfigUSA",
      },
      {
        name: "description",
        content:
          "ConfigUSA aligns specialist technology talent and delivery support to the operating context, regulatory environment and business priorities of Banking, Technology, Manufacturing, Retail, Healthcare, and Logistics.",
      },
      {
        property: "og:title",
        content: "Industries We Serve | ConfigUSA",
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

// Blueprint Section 11: 6 Sectors with verified challenges, tech needs & capabilities
const SECTOR_OVERVIEWS = [
  {
    id: "financial",
    name: "Banking & Financial Services",
    icon: Landmark,
    image: indFinancial,
    description:
      "Technology and specialist talent for core banking modernization, quantitative risk modeling, and regulatory compliance.",
    challenges: "Strict SEC/FINRA regulatory oversight, legacy mainframe debt, and fraud prevention at scale.",
    techNeeds: "Cloud-native microservices, PySpark risk pipelines, real-time transaction analytics.",
    workforce: "Specialized quantitative analysts, financial data engineers, and cloud security architects.",
  },
  {
    id: "technology",
    name: "Technology & IT Services",
    icon: Cpu,
    image: indTechnology,
    description:
      "High-velocity engineering squads and platform architects for hyper-growth SaaS providers and IT service enterprises.",
    challenges: "Accelerating sprint velocity while managing technical debt and continuous deployment quality.",
    techNeeds: "Distributed microservices, Kubernetes orchestration, LLM integration, and multi-tenant architectures.",
    workforce: "Forward-deployed engineers, full-stack architects, SREs, and DevOps leads.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: Factory,
    image: indManufacturing,
    description:
      "Enterprise platform specialists and digital talent supporting Smart Factory IoT, SAP S/4HANA ERP, and supply chain.",
    challenges: "Integrating legacy OT systems with enterprise IT, volatile supply chains, and asset uptime.",
    techNeeds: "SAP S/4HANA Supply Chain, IoT telemetry pipelines, and automated warehouse management.",
    workforce: "SAP functional consultants, industrial automation engineers, and SCADA integration specialists.",
  },
  {
    id: "retail",
    name: "Retail & Consumer Goods",
    icon: ShoppingBag,
    image: indRetail,
    description:
      "Omnichannel commerce engineers, customer data platform specialists, and digital experience architects.",
    challenges: "Unifying in-store and online customer journeys, real-time inventory visibility, and peak scaling.",
    techNeeds: "Headless commerce, dynamic pricing algorithms, customer data platforms (CDP), and POS APIs.",
    workforce: "E-commerce engineers, data pipeline specialists, and Workday HR/finance integration leads.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    image: indHealthcare,
    description:
      "Secure digital health architectures, HIPAA-compliant cloud migrations, and clinical data interoperability.",
    challenges: "Stringent HIPAA/FDA compliance, protected health information (PHI) governance, and siloed EHR systems.",
    techNeeds: "FHIR/HL7 data interfaces, secure cloud repositories, and medical imaging AI analytics.",
    workforce: "Healthcare data engineers, bioinformatics developers, and certified clinical cloud specialists.",
  },
  {
    id: "government",
    name: "Logistics & Supply Chain",
    icon: Truck,
    image: indGovernment,
    description:
      "End-to-end freight visibility, automated dispatch pipelines, and resilient warehouse management architectures.",
    challenges: "Last-mile route inefficiencies, cross-border customs friction, and real-time tracking latency.",
    techNeeds: "Telematics telemetry streams, predictive fleet routing, and automated EDI integrations.",
    workforce: "Logistics systems analysts, EDI integration specialists, and Palantir supply chain talent.",
  },
];

function IndustriesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={industriesHeroBg}
            alt="Industries"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/85 via-[#102B4E]/50 to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
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
      <section id="industry-sectors" className="py-8 lg:py-12 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    SECTOR-ALIGNED DELIVERY
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                  Specialist technology talent aligned to sector operating realities.
                </h2>
              </div>
              <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
                Every sector operates under specific regulatory standards, compliance mandates and architecture requirements. We deploy practitioners who understand your technical landscape from day one.
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTOR_OVERVIEWS.map((sector, index) => (
              <FadeUp key={sector.id} delay={index * 0.08}>
                <div
                  className="group relative rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 flex flex-col justify-between h-full before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102B4E]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5 text-white">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md text-white group-hover:bg-[#245B91] transition-colors duration-300">
                        <sector.icon className="h-4 w-4" />
                      </span>
                      <span className="font-bold text-sm tracking-tight text-white drop-shadow-sm">
                        {sector.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sector.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-[11px] font-bold text-[#C83B43] uppercase tracking-wider block">
                          Sector Challenge:
                        </span>
                        <p className="text-[11.5px] text-slate-600 leading-snug">
                          {sector.challenges}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-[#245B91] uppercase tracking-wider block">
                          Tech & Workforce Scope:
                        </span>
                        <p className="text-[11.5px] text-slate-600 leading-snug">
                          {sector.techNeeds} • {sector.workforce}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/industries/${sector.id}` as any}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] group-hover:text-[#a82e35] transition-colors"
                      >
                        <span>Explore {sector.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
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
        <div className="container-enterprise">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
                  Operating in a specialized regulatory or technical environment?
                </h3>
                <p className="text-slate-300 text-sm">
                  Let us tailor a workforce or technology delivery model specific to your sector constraints.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="btn-cta-primary text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm"
                >
                  Discuss Your Sector Requirements
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
