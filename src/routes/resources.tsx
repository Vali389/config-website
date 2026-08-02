import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Mail, Send } from "lucide-react";
import heroResources from "@/assets/hero-resources.jpg";
import ctaResources from "@/assets/cta-resources.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import wdAi from "@/assets/wd-ai.jpg";
import indFinancial from "@/assets/ind-financial.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import aboutApproach from "@/assets/about-approach.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Insights, Whitepapers & Case Studies | ConfigUSA" },
      { name: "description", content: "Explore ConfigUSA's insights, whitepapers, case studies, and webinars on AI, digital transformation, and modern technology trends." },
      { property: "og:title", content: "ConfigUSA Resources" },
      { property: "og:description", content: "Insights, guides, and case studies from ConfigUSA." },
    ],
  }),
  component: Page,
});

const POSTS = [
  { tag: "Insight", title: "The 2026 IT Talent Landscape: What Leaders Need to Know", excerpt: "Where technology hiring is heading — and how to build teams that stay ahead of the curve.", date: "Jan 12, 2026", image: wdWorkforce },
  { tag: "Case Study", title: "How a Fortune 500 Bank Cut Hiring Time by 60% with ConfigUSA", excerpt: "A financial services leader accelerated critical projects with rapidly assembled specialist teams.", date: "Dec 04, 2025", image: indFinancial },
  { tag: "Webinar", title: "SAP S/4HANA Migration: Lessons From 100+ Rollouts", excerpt: "Practical strategies to de-risk your migration and unlock long-term ROI.", date: "Nov 20, 2025", image: wdEnterprise },
  { tag: "Whitepaper", title: "Building a Future-Ready Workforce with AI Assessments", excerpt: "How data-driven evaluation reduces bias and improves hiring outcomes.", date: "Oct 15, 2025", image: wdAi },
  { tag: "Insight", title: "The Rise of Contract-to-Hire in a Volatile Market", excerpt: "Why flexible engagement models are becoming the default for smart teams.", date: "Sep 28, 2025", image: aboutApproach },
  { tag: "Case Study", title: "Global Retailer Scales Engineering 3x with ConfigUSA", excerpt: "Scaling delivery without sacrificing quality during peak growth.", date: "Aug 30, 2025", image: indRetail },
];

const CATEGORIES = ["All", "Insight", "Case Study", "Webinar", "Whitepaper"];

function Page() {
  const [cat, setCat] = useState("All");
  const featured = POSTS[0];
  const list = useMemo(
    () => POSTS.slice(1).filter((p) => cat === "All" || p.tag === cat),
    [cat]
  );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Insights That <span className="text-gradient-brand">Move You Forward.</span></>}
        subtitle="Explore our latest thinking on AI, digital transformation, workforce strategy, and building future-ready businesses."
        image={heroResources}
      />

      {/* Featured */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand mb-6">Featured</p>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border/60 shadow-card hover:shadow-elegant transition-all"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">{featured.tag}</span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12 bg-white">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {featured.date}
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-ink leading-tight group-hover:text-brand transition-colors">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">{featured.excerpt}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand">
                Read the full story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Grid + filters */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading align="left" eyebrow="Latest Content" title="Insights & Stories" />
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    cat === c ? "bg-brand text-white shadow-glow" : "bg-soft text-ink/70 hover:bg-brand/10 hover:text-brand border border-border/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white border border-border/50 shadow-card hover:shadow-elegant transition-all overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">{p.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-brand transition-colors leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify line-clamp-2">{p.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {list.length === 0 && (
            <div className="mt-12 rounded-2xl bg-soft border border-dashed border-border p-12 text-center text-muted-foreground">
              No content in this category yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-center">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-glow/20 blur-3xl" />
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-brand-glow">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="relative mt-5 text-2xl md:text-3xl font-extrabold text-white tracking-tight">Get Insights in Your Inbox</h2>
            <p className="relative mt-3 text-white/75 max-w-xl mx-auto">Join technology leaders getting our latest thinking on AI, talent, and transformation.</p>
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full bg-white/95 px-5 py-3.5 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-glow"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white hover:bg-brand/90 transition-colors">
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection image={ctaResources} />
    </>
  );
}
