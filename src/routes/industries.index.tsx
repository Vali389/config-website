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
  { id: "healthcare", image: indHealthcare, icon: HeartPulse, name: "Healthcare & Life Sciences", text: "Supporting digital health, clinical systems, infrastructure modernization, and patient-centered innovation.", solutions: ["HIPAA-compliant systems", "EHR / EMR modernization", "Health data & interoperability", "Telehealth platforms"] },
  { id: "financial", image: indFinancial, icon: Landmark, name: "Financial Services", text: "Enabling secure, compliant, and scalable digital banking and financial technology initiatives.", solutions: ["Core banking modernization", "Digital payments & wallets", "Risk, fraud & compliance", "Data & analytics"] },
  { id: "government", image: indGovernment, icon: Building2, name: "Government & Public Sector", text: "Dependable technology professionals for public sector modernization and mission-critical projects.", solutions: ["Legacy modernization", "Secure cloud migration", "Citizen digital services", "Compliance & accessibility"] },
  { id: "manufacturing", image: indManufacturing, icon: Factory, name: "Manufacturing", text: "Supporting ERP transformation, automation, smart factories, and digital supply chains.", solutions: ["SAP / ERP rollouts", "Industrial IoT", "Supply-chain analytics", "Smart-factory automation"] },
  { id: "retail", image: indRetail, icon: ShoppingBag, name: "Retail & E-commerce", text: "Enhancing customer experience, e-commerce platforms, and data-driven decision making.", solutions: ["Headless commerce", "Personalization & AI", "Omnichannel systems", "Inventory & analytics"] },
  { id: "technology", image: indTechnology, icon: Cpu, name: "Technology & SaaS", text: "Helping software companies scale engineering teams and accelerate product delivery.", solutions: ["Elite engineering squads", "DevOps & platform", "Cloud-native builds", "QA & test automation"] },
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
  { icon: ShieldCheck, title: "Compliance First", text: "We enforce strict regulatory protocols including SOC 2, HIPAA, and GDPR across all client engagements." },
  { icon: Users, title: "Dedicated Tech Panels", text: "Every deployment is screened by specialized engineers before onboarding to ensure domain competence." },
  { icon: Award, title: "98% Retention Rate", text: "Our industry-focused methodology translates into consistent client retention and long-term success." },
  { icon: CheckCircle2, title: "SLA-Driven Quality", text: "Clear service level agreements guide all delivery and staffing timelines for predictable outcomes." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep Expertise Across <br /><span className="text-gradient-brand">the Sectors You Serve.</span></>}
        subtitle="We bring specialized knowledge and proven delivery to the industries driving digital transformation — combined with the talent to help you win."
        image={industriesHeroBg}
      />

      {/* Core industries */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Sectors We Serve"
            title={<span className="text-3xl md:text-4xl lg:text-[3rem] font-black text-ink leading-tight">Industry-Specific Solutions That Drive Results</span>}
            subtitle="ConfigUSA brings specialized technical capability and domain knowledge to deliver maximum outcome value."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CORE.map((c, i) => (
              <motion.div
                key={c.name}
                id={c.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group flex flex-col bg-gradient-brand rounded-2xl overflow-hidden border border-white/10 shadow-card hover:shadow-[0_20px_45px_rgba(29,78,216,0.35)] transition-all duration-500 scroll-mt-28 relative text-white"
              >
                <Link to="/industries/$industryId" params={{ industryId: c.id }} className="block h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur border border-white/25 text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg md:text-xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors text-left">
                      {c.name}
                    </h3>
                  </div>
                  <div className="flex flex-col flex-1 p-6 pb-8 text-left">
                    <p className="text-sm text-white/90 leading-relaxed text-justify">{c.text}</p>
                    <ul className="mt-4 grid grid-cols-1 gap-2">
                      {c.solutions.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-white/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-200" /> {s}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-white group-hover:text-blue-200 transition-colors">
                      View Industry Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
                {/* Shine Bottom Edge Bar */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More sectors */}
      <section className="py-20 bg-soft border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="And More" title="Additional Sectors We Support" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {MORE.map((m, i) => (
              <div
                key={m.name}
                className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 border border-border/50 hover:border-brand/30 hover:shadow-card transition-all text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competency metrics */}
      <section className="py-24 bg-white">
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
                className="flex flex-col bg-soft p-7 rounded-2xl border border-border/50 hover:bg-white hover:shadow-card transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow mb-4">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink text-left">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify text-left">{m.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-brand transition-colors"
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
