import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import img from "@/assets/service-sap.jpg";

export const Route = createFileRoute("/services/sap")({
  head: () => ({
    meta: [
      { title: "SAP Solutions — ConfigUSA" },
      { name: "description", content: "Unlock efficiency and long-term ROI with SAP." },
      { property: "og:title", content: "SAP Solutions" },
      { property: "og:description", content: "Unlock efficiency and long-term ROI with SAP." },
    ],
  }),
  component: Page,
});

const POINTS = [
  "Certified experts with 10+ years experience",
  "Proven delivery frameworks and methodologies",
  "24/7 global support across time zones",
  "Transparent pricing with measurable outcomes",
  "Scalable from pilot to enterprise-wide rollout",
  "Post-deployment optimization and support",
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Enterprise-Grade" title={<>SAP Solutions</>} subtitle="End-to-end SAP consulting, implementation, migration, and managed services from certified experts." image={img} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img src={img} alt="" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl shadow-elegant" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">What We Deliver</p>
            <h2 className="text-4xl font-bold text-ink">Unlock efficiency and long-term ROI with SAP.</h2>
            <ul className="mt-6 space-y-3">
              {POINTS.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
