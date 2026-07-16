import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2, Users, Clock, Target, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import img from "@/assets/service-staffing.jpg";

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      { title: "IT Staffing & Augmentation — ConfigUSA" },
      { name: "description", content: "Vetted IT talent for contract, contract-to-hire, and permanent roles. Deployed in days, not months." },
      { property: "og:title", content: "IT Staffing & Augmentation" },
      { property: "og:description", content: "Talent on-demand from ConfigUSA." },
    ],
  }),
  component: Page,
});

const BENEFITS = [
  "Rigorously pre-screened talent pool of 10,000+ specialists",
  "Deploy resources in as little as 48 hours",
  "Flexible contract, C2H, and permanent options",
  "Coverage across every major technology stack",
  "Transparent pricing with no hidden fees",
  "Dedicated account manager for every engagement",
];

const HOW = [
  { icon: Target, title: "Requirement Analysis", text: "We understand your goals, tech stack, and culture in a single call." },
  { icon: Users, title: "Curated Shortlist", text: "Receive 3-5 pre-vetted candidates matched to your exact needs." },
  { icon: Clock, title: "Fast Onboarding", text: "Interview, select, and deploy talent in days — not weeks." },
  { icon: TrendingUp, title: "Continuous Success", text: "Ongoing support, performance reviews, and scaling as you grow." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="IT Staffing & Augmentation" title={<>Talent That <span className="text-gradient-brand">Delivers.</span></>} subtitle="Access the industry's most rigorously vetted IT talent — deployed to your project in days, not months." image={img} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img src={img} alt="" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl shadow-elegant" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-ink">Premium IT Talent, On Demand</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Whether you need a single specialist or an entire distributed team, our talent network delivers the right people at the right time.</p>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="A Simple, Proven Process" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <h.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-xs font-bold text-brand">STEP {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-1 text-lg font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
