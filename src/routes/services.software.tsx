import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import img from "@/assets/service-software.jpg";

export const Route = createFileRoute("/services/software")({
  head: () => ({
    meta: [
      { title: "Software Development — ConfigUSA" },
      { name: "description", content: "Engineered to scale your business and delight your users." },
      { property: "og:title", content: "Software Development" },
      { property: "og:description", content: "Engineered to scale your business and delight your users." },
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
      <PageHero eyebrow="Build What's Next" title={<>Software Development</>} subtitle="Custom-built software that scales with your business — from web and mobile to AI-powered platforms." image={img} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.img src={img} alt="" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl shadow-elegant" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">What We Deliver</p>
            <h2 className="text-4xl font-bold text-ink">Engineered to scale your business and delight your users.</h2>
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
