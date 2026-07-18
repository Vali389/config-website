import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import servicesHero from "@/assets/services-hero-new.png";
import ctaServicesBg from "@/assets/cta-services-bg.png";
import serviceStaffing from "@/assets/service-staffing.jpg";
import serviceSoftware from "@/assets/service-software.jpg";
import serviceSap from "@/assets/service-sap.jpg";
import serviceAssessment from "@/assets/service-assessment.jpg";
import { motion } from "motion/react";
import { CheckCircle2, Rocket, ShieldCheck, Globe2, Users } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Comprehensive IT & Staffing | ConfigUSA" },
      { name: "description", content: "Explore ConfigUSA's IT staffing, software development, SAP, and digital assessment services for modern businesses." },
      { property: "og:title", content: "ConfigUSA Services" },
      { property: "og:description", content: "Talent, technology, transformation — under one trusted partner." },
    ],
  }),
  component: ServicesLayout,
});

const SERVICES = [
  { image: serviceStaffing, title: "IT Staffing & Augmentation", eyebrow: "Skilled IT Professionals On-Demand", to: "/services/staffing", popular: true, description: "Skilled IT professionals for contract, contract-to-hire, and permanent roles across every major stack." },
  { image: serviceSoftware, title: "Software Development", eyebrow: "Custom Software Built to Scale", to: "/services/software", description: "Custom web, mobile, cloud, and AI-powered software engineered to scale your business." },
  { image: serviceSap, title: "SAP Solutions", eyebrow: "Enterprise-Grade SAP Consulting", to: "/services/sap", description: "End-to-end SAP consulting, implementation, migration, support, and managed services." },
  { image: serviceAssessment, title: "Digital Assessment for Hiring", eyebrow: "AI-Powered Screening & Assessment", to: "/services/assessment", description: "AI-driven assessments that evaluate skills, aptitude, and cultural fit." },
];

const MODELS = [
  { title: "Contract Staffing", text: "Flexible IT professionals for short-term projects and surge capacity." },
  { title: "Contract-to-Hire", text: "Evaluate top talent on the job before making a long-term commitment." },
  { title: "Permanent Placement", text: "Vetted, culture-fit hires who grow with your organization." },
  { title: "RPO / MSP Solutions", text: "Managed recruitment and vendor solutions at enterprise scale." },
];

const WHY = [
  { icon: Rocket, title: "Speed to Value", text: "Vetted specialists deployed to your project in as little as 48 hours." },
  { icon: ShieldCheck, title: "Quality Assured", text: "Rigorous, multi-stage screening behind every placement and delivery." },
  { icon: Globe2, title: "Global Reach", text: "Onshore and offshore delivery capabilities across the US and India." },
  { icon: Users, title: "True Partnership", text: "Dedicated account management and long-term accountability, always." },
];

function ServicesLayout() {

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Comprehensive Services for <span className="text-gradient-brand">Modern Businesses.</span></>}
        subtitle="From talent to technology, we offer a complete portfolio of solutions designed to help you move faster, scale smarter, and win consistently."
        image={servicesHero}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="End-to-End Services to Grow Your Business" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Engagement Models" title="Staffing Models That Fit Your Business" subtitle="Choose the model that works best for your growth stage, budget, and timeline." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODELS.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white p-7 shadow-card border border-border/50 hover:shadow-elegant transition-shadow"
              >
                <CheckCircle2 className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-lg font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Why ConfigUSA" title="Why Organizations Choose Us" subtitle="More than a vendor — a technology partner invested in your outcomes at every step." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center rounded-2xl bg-soft p-8 border border-border/50 hover:bg-white hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand-glow/10 text-brand group-hover:from-brand group-hover:to-brand-glow group-hover:text-white transition-all">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-brand transition-colors">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={ctaServicesBg} />
    </>
  );
}
