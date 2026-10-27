import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Mail, Send, CheckCircle2 } from "lucide-react";
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
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Insights & Perspectives — ConfigUSA" },
      { name: "description", content: "Explore ConfigUSA's latest insights, case studies, research, and whitepapers on AI, digital transformation, and modern workforce dynamics." },
      { property: "og:title", content: "Insights & Perspectives — ConfigUSA" },
      { property: "og:description", content: "Strategic thinking, real results, and industry analysis from ConfigUSA." },
    ],
  }),
  component: Page,
});

const POSTS = [
  {
    tag: "Insight",
    title: "The 2026 IT Talent Landscape: What Technology Leaders Need to Know",
    excerpt: "Where enterprise hiring is heading — and how strategic engineering organizations are building elastic teams that stay ahead of the disruption curve.",
    date: "Jan 12, 2026",
    readTime: "5 min read",
    image: wdWorkforce,
  },
  {
    tag: "Case Study",
    title: "How a Fortune 500 Bank Cut Hiring Time by 60% with ConfigUSA",
    excerpt: "A premier financial services leader accelerated critical regulatory modernization projects with rapidly assembled, specialized squads.",
    date: "Dec 04, 2025",
    readTime: "7 min read",
    image: indFinancial,
  },
  {
    tag: "Webinar",
    title: "SAP S/4HANA Migration: Lessons From 100+ Enterprise Rollouts",
    excerpt: "Practical architectural strategies to de-risk your cloud migration, avoid costly customization drift, and unlock long-term operational ROI.",
    date: "Nov 20, 2025",
    readTime: "45 min video",
    image: wdEnterprise,
  },
  {
    tag: "Whitepaper",
    title: "Building a Future-Ready Workforce with AI Skills Assessments",
    excerpt: "How data-driven candidate evaluation removes cognitive bias, measures real coding aptitude, and improves long-term retention rates.",
    date: "Oct 15, 2025",
    readTime: "12 min read",
    image: wdAi,
  },
  {
    tag: "Insight",
    title: "The Strategic Advantage of Contract-to-Hire in Volatile Markets",
    excerpt: "Why flexible engagement models with vetted trial periods have become the executive standard for scaling engineering capability safely.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    image: aboutApproach,
  },
  {
    tag: "Case Study",
    title: "Global Omnichannel Retailer Scales Digital Engineering 3x",
    excerpt: "Scaling cloud and headless commerce delivery squads without sacrificing test coverage or uptime during peak holiday shopping surges.",
    date: "Aug 30, 2025",
    readTime: "8 min read",
    image: indRetail,
  },
];

const CATEGORIES = ["All", "Insight", "Case Study", "Webinar", "Whitepaper"];

function Page() {
  const [cat, setCat] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const featured = POSTS[0];
  const list = useMemo(
    () => POSTS.slice(1).filter((p) => cat === "All" || p.tag === cat),
    [cat]
  );

  return (
    <>
      <PageHero
        eyebrow="Insights & Perspectives"
        title={
          <>
            Actionable Insights That <br />
            <span className="text-[#f5a623] font-extrabold">Move You Forward.</span>
          </>
        }
        subtitle="Explore our latest thinking on artificial intelligence, digital engineering, cloud platforms, and modern workforce strategy."
        image={heroResources}
      >
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Featured Briefing <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#articles"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Browse All Content
          </a>
        </div>
      </PageHero>

      <div className="pb-12">
        <StatsBar />
      </div>

      {/* Featured Article */}
      <section id="featured" className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Featured Perspective</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">Today's Executive Briefing</h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 bg-white"
          >
            <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-100">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 via-transparent to-transparent lg:hidden" />
              <span className="absolute top-4 left-4 rounded-md bg-[#071326] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                {featured.tag}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 bg-white">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-blue-600" /> {featured.date}
                </span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-[#071326] leading-snug group-hover:text-blue-700 transition-colors">
                {featured.title}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#071326] group-hover:text-[#f5a623] transition-colors"
                >
                  Read Full Perspective <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Grid + filters */}
      <section id="articles" className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-4">
            <SectionHeading
              align="left"
              eyebrow="Knowledge Base"
              title="Explore Articles & Case Studies"
              subtitle="Deep dives and field reports from our practicing engineers, data scientists, and staffing consultants."
            />

            <div className="flex flex-wrap gap-2 sm:self-center">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    cat === c
                      ? "bg-[#071326] text-[#f5a623] shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-md bg-[#071326]/90 backdrop-blur px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f5a623]">
                    {p.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-blue-600" /> {p.date}
                    </span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-base sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>

                  <div className="mt-auto pt-5 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071326] group-hover:text-[#f5a623] transition-colors">
                      Read Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {list.length === 0 && (
            <div className="mt-12 rounded-xl bg-white border border-dashed border-slate-300 p-12 text-center text-slate-500">
              No publications in this category yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#071326] p-10 md:p-14 text-center border border-slate-800 shadow-md">
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#f5a623]/10 blur-3xl" />
            
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-[#f5a623]">
              <Mail className="h-6 w-6 stroke-[1.75]" />
            </span>

            <div className="relative border-l-[3px] border-[#f5a623] pl-3.5 max-w-md mx-auto mt-6 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Executive Digest</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Get Technology Insights in Your Inbox
              </h2>
            </div>

            <p className="relative mt-3 text-slate-300 text-sm max-w-lg mx-auto">
              Join over 25,000 engineering and talent executives receiving our monthly synthesis of enterprise AI, infrastructure, and hiring benchmarks.
            </p>

            {subscribed ? (
              <div className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Thank you for subscribing! We'll be in touch.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="relative mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="executive@company.com"
                  className="flex-1 rounded-lg bg-white/95 px-4 py-3.5 text-sm text-[#071326] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
                >
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection image={ctaResources} />
    </>
  );
}
