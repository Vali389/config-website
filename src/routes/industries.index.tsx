import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  HeartPulse,
  Landmark,
  Building2,
  Factory,
  ShoppingBag,
  Cpu,
  Radio,
  Zap,
  Truck,
  GraduationCap,
  ShieldCheck,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import industriesHeroBg from "@/assets/industries-hero-bg.jpg";
import ctaIndustries from "@/assets/cta-industries.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indFinancial from "@/assets/ind-financial.jpg";
import indGovernment from "@/assets/ind-government.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indTechnology from "@/assets/ind-technology.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — ConfigUSA" },
      { name: "description", content: "Industry-specific technology and talent solutions for healthcare, financial services, government, manufacturing, retail, and technology." },
      { property: "og:title", content: "Industries — ConfigUSA" },
      { property: "og:description", content: "Deep expertise across the sectors driving digital transformation." },
    ],
  }),
  component: Page,
});

const CORE = [
  {
    id: "healthcare",
    image: indHealthcare,
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    text: "Supporting digital health, clinical systems, infrastructure modernization, and patient-centered innovation under strict HIPAA compliance.",
    solutions: ["HIPAA-compliant systems", "EHR / EMR modernization", "Health data interoperability", "Telehealth platforms"],
  },
  {
    id: "financial",
    image: indFinancial,
    icon: Landmark,
    name: "Financial Services",
    text: "Enabling secure, compliant, and scalable digital banking, core ledger APIs, and high-volume transaction processing systems.",
    solutions: ["Core banking modernization", "Digital payments & wallets", "Risk, fraud & compliance", "Transaction data analytics"],
  },
  {
    id: "government",
    image: indGovernment,
    icon: Building2,
    name: "Government & Public Sector",
    text: "Dependable technology professionals and vetted squads for public sector modernization, GovCloud architectures, and citizen portals.",
    solutions: ["Legacy mainframe modernization", "Secure GovCloud migration", "Citizen digital services", "ADA 508 accessibility"],
  },
  {
    id: "manufacturing",
    image: indManufacturing,
    icon: Factory,
    name: "Manufacturing & Industrial",
    text: "Supporting enterprise SAP/ERP transformation, industrial IoT telemetry, smart factories, and connected global supply chains.",
    solutions: ["SAP / ERP enterprise rollouts", "Industrial IoT telemetry", "Supply chain predictive analytics", "Smart factory automation"],
  },
  {
    id: "retail",
    image: indRetail,
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    text: "Enhancing omnichannel shopping experiences, composable storefronts, high-throughput checkout, and real-time inventory synchronization.",
    solutions: ["Headless composable commerce", "Personalization & AI search", "Omnichannel POS sync", "Real-time inventory engines"],
  },
  {
    id: "technology",
    image: indTechnology,
    icon: Cpu,
    name: "Technology & SaaS",
    text: "Helping software companies and cloud platforms scale engineering teams, accelerate roadmaps, and ship resilient product features.",
    solutions: ["Elite full-stack engineering squads", "DevOps & cloud platform", "Microservices architectures", "Automated QA pipelines"],
  },
];

const MORE = [
  { icon: Radio, name: "Telecommunications" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Truck, name: "Logistics & Supply Chain" },
  { icon: GraduationCap, name: "Education" },
  { icon: Users, name: "Professional Services" },
  { icon: Building2, name: "Insurance" },
];

const METRICS = [
  {
    icon: ShieldCheck,
    title: "Compliance First",
    text: "We enforce strict regulatory protocols including SOC 2, HIPAA, PCI-DSS, and GDPR across all client delivery pipelines.",
  },
  {
    icon: Users,
    title: "Domain-Screened Panels",
    text: "Every tech deployment is thoroughly screened by senior domain architects to ensure genuine vertical competence.",
  },
  {
    icon: Award,
    title: "98% Client Retention",
    text: "Our industry-aligned methodology translates into dependable delivery, minimal churn, and multi-year strategic partnerships.",
  },
  {
    icon: CheckCircle2,
    title: "SLA-Driven Delivery",
    text: "Clear service level agreements guide all delivery schedules and talent placement metrics for predictable outcomes.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Deep Expertise Across <br />
            <span className="text-[#f5a623] font-extrabold">the Sectors You Serve.</span>
          </>
        }
        subtitle="We bring specialized knowledge and proven delivery to the industries driving digital transformation — combined with the talent to help you win."
        image={industriesHeroBg}
      >
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Consult an Industry Specialist <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#sectors"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Explore Sectors
          </a>
        </div>
      </PageHero>

      <div className="pb-12">
        <StatsBar />
      </div>

      {/* Core industries */}
      <section id="sectors" className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Sectors We Serve"
            title="Industry-Specific Solutions That Drive Results"
            subtitle="ConfigUSA combines specialized technical capabilities with domain knowledge to deliver measurable business outcomes."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CORE.map((c, i) => (
              <motion.div
                key={c.name}
                id={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/85 via-[#071326]/30 to-transparent" />
                  <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white leading-snug">
                    {c.name}
                  </h3>
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {c.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f5a623]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link
                      to="/industries/$industryId"
                      params={{ industryId: c.id }}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#071326] group-hover:text-[#f5a623] transition-colors"
                    >
                      View Industry Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More sectors */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Broader Coverage"
            title="Additional Sectors We Support"
            subtitle="Deep cross-functional technology capabilities tailored to diverse operational environments."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {MORE.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col items-center gap-3.5 rounded-xl bg-white p-6 border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                  <m.icon className="h-5 w-5 stroke-[1.75]" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#071326] group-hover:text-blue-700 transition-colors">
                  {m.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competency metrics */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Competencies"
            title="Engineered for Strict Domain Requirements"
            subtitle="How ConfigUSA manages engineering quality and operational alignment across global industry sectors."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col bg-white p-7 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200 mb-5">
                  <m.icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-[#071326] group-hover:text-blue-700 transition-colors">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0a1628] text-white px-7 py-3.5 text-sm font-bold hover:bg-[#071326] transition-colors shadow-sm"
            >
              Discuss Your Industry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection image={ctaIndustries} />
    </>
  );
}
