import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { BookOpen, FileText, Video, ArrowRight, Calendar } from "lucide-react";
import heroResources from "@/assets/hero-resources.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Insights, Whitepapers & Case Studies | ConfigUSA" },
      { name: "description", content: "Explore ConfigUSA's insights, whitepapers, case studies, and webinars on IT staffing, digital transformation, and modern tech trends." },
      { property: "og:title", content: "ConfigUSA Resources" },
      { property: "og:description", content: "Insights, guides, and case studies from ConfigUSA." },
    ],
  }),
  component: Page,
});

const POSTS = [
  { tag: "Insight", title: "The 2026 IT Talent Landscape: What Leaders Need to Know", date: "Jan 12, 2026", icon: FileText },
  { tag: "Case Study", title: "How a Fortune 500 Bank Cut Hiring Time by 60% with ConfigUSA", date: "Dec 04, 2025", icon: BookOpen },
  { tag: "Webinar", title: "SAP S/4HANA Migration: Lessons From 100+ Rollouts", date: "Nov 20, 2025", icon: Video },
  { tag: "Whitepaper", title: "Building a Future-Ready Workforce with AI Assessments", date: "Oct 15, 2025", icon: FileText },
  { tag: "Insight", title: "The Rise of Contract-to-Hire in a Volatile Market", date: "Sep 28, 2025", icon: FileText },
  { tag: "Case Study", title: "Global Retailer Scales Engineering 3x with ConfigUSA", date: "Aug 30, 2025", icon: BookOpen },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Resources" title={<>Insights That <span className="text-gradient-brand">Move You Forward.</span></>} subtitle="Explore our latest thinking on IT talent, digital transformation, and building future-ready businesses." image={heroResources} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Latest Content" title="Featured Insights & Stories" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white border border-border/50 shadow-card hover:shadow-elegant transition-all overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-hero flex items-center justify-center">
                  <p.icon className="h-16 w-16 text-white/40" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-brand transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
