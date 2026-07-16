import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Building2,
  Landmark,
  Heart,
  ShoppingBag,
  Radio,
  Zap,
  Cpu,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award
} from "lucide-react";
import heroIndustries from "@/assets/hero-industries.jpg";
import ctaBackground from "@/assets/cta-background.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — ConfigUSA" },
      { name: "description", content: "Industry-specific IT staffing and technology solutions for BFSI, healthcare, retail, telecom, energy, and more." },
      { property: "og:title", content: "Industries — ConfigUSA" },
      { property: "og:description", content: "Deep expertise across 8+ industries worldwide." },
    ],
  }),
  component: Page,
});

const IND = [
  { step: "01", icon: Heart, title: "Healthcare & Life Sciences", text: "HIPAA-compliant software, health-tech system engineering, and certified medical devices staffing." },
  { step: "02", icon: Landmark, title: "Banking & Financial Services", text: "Core banking platform upgrades, digital wallet engineering, risk modeling, and compliance analysts." },
  { step: "03", icon: Cpu, title: "Technology & SaaS", text: "Elite engineering squads, DevOps architects, and cloud migration support for modern software enterprises." },
  { step: "04", icon: Building2, title: "Manufacturing", text: "Smart-factory operations, Industrial IoT connectivity, supply-chain analytics, and SAP ERP rollouts." },
  { step: "05", icon: ShoppingBag, title: "Retail & E-commerce", text: "High-performance storefront systems, headless eCommerce architectures, and AI recommendation engines." },
  { step: "06", icon: Radio, title: "Telecommunications", text: "5G network operations, BSS/OSS system integration, and software-defined WAN engineering specialists." },
  { step: "07", icon: Zap, title: "Energy & Utilities", text: "Smart-grid analytics dashboards, utility management systems, and IoT pipeline monitoring solutions." },
  { step: "08", icon: Truck, title: "Professional Services", text: "Enterprise workflow automation, legal-tech platform builds, and back-office digital modernization." },
];

const METRICS = [
  { icon: ShieldCheck, title: "Compliance First", text: "We enforce strict regulatory compliance protocols including SOC2, HIPAA, and GDPR across all client squads." },
  { icon: Users, title: "Dedicated Tech Panels", text: "Every deployment is screened by specialized engineers before onboarding to ensure domain competence." },
  { icon: Award, title: "98% Retainer Rate", text: "Our industry-focused methodology translates into consistent client retention and long-term project success." },
  { icon: CheckCircle2, title: "SLA-Driven Quality", text: "Clear service level agreements guide all software builds and staffing timelines for predictable delivery." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Industry-Specific Solutions <br /><span className="text-gradient-brand">That Drive Results.</span></>}
        subtitle="Deep domain expertise across every sector we serve — combined with the technology and talent to help you win."
        image={heroIndustries}
      />

      {/* Main Sectors Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Sectors We Serve"
            title="Industry-Specific Solutions to Drive Your Success"
            subtitle="ConfigUSA brings specialized technical capability and domain knowledge to deliver maximum outcome value."
          />
          
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IND.map((i, idx) => (
              <motion.div
                key={i.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl bg-white border border-border/50 p-8 shadow-card hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1.5 hover:border-brand/35 transition-all duration-300 relative overflow-hidden text-left"
              >
                {/* Shine Top Edge Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Index number */}
                <div className="absolute top-6 right-6 text-3xl font-black text-slate-100 select-none group-hover:text-blue-50/70 transition-colors duration-300">
                  {i.step}
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-brand group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300">
                  <i.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </span>

                <h3 className="mt-6 text-lg font-bold text-ink leading-snug group-hover:text-brand transition-colors duration-300">
                  {i.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {i.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Competence Metrics Section */}
      <section className="py-24 bg-soft border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Competencies"
            title="Engineered for Strict Domain Requirements"
            subtitle="How ConfigUSA manages engineering quality and operational alignment across global industry sectors."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-white p-7 rounded-2xl border border-border/40 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand mb-4">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={ctaBackground} />
    </>
  );
}
