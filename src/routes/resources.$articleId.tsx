import { useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Download,
  Share2,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Building2,
  Check,
  FileText,
  Mail,
  Send,
  Sparkles,
  Zap,
  ShieldAlert,
  Lightbulb,
} from "lucide-react";

import {
  getArticleById,
  getRelatedArticles,
  CATEGORIES,
} from "@/data/resourcesData";
import { CTASection } from "@/components/CTASection";
import ctaResources from "@/assets/cta-resources.jpg";

export const Route = createFileRoute("/resources/$articleId")({
  head: ({ params }) => {
    const article = getArticleById(params.articleId);
    if (!article) {
      return {
        meta: [{ title: "Article Not Found — ConfigUSA" }],
      };
    }
    return {
      meta: [
        { title: `${article.title} — ConfigUSA Insights` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:image", content: article.image },
      ],
    };
  },
  loader: ({ params }) => {
    const article = getArticleById(params.articleId);
    if (!article) {
      throw notFound();
    }
    return { articleId: params.articleId };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { articleId } = Route.useLoaderData();
  const article = getArticleById(articleId);

  if (!article) {
    throw notFound();
  }

  const categoryConfig = CATEGORIES.find((c) => c.id === article.category);
  const relatedArticles = getRelatedArticles(article.id, article.category, 3);

  const [copied, setCopied] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    setDownloadNotice(`Generating PDF brief for "${article.title.slice(0, 32)}..."`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Notification */}
      <AnimatePresence>
        {(copied || downloadNotice) && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-[#071326] px-4 py-3 text-xs font-semibold text-white shadow-2xl border border-slate-700"
          >
            <CheckCircle2 className="h-4 w-4 text-[#f5a623]" />
            <span>{copied ? "Article link copied to clipboard!" : downloadNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-slate-200/80 bg-slate-50/70 sticky top-16 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 truncate">
            <Link to="/" className="hover:text-blue-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <Link
              to="/resources"
              search={{ tab: article.category }}
              hash={article.category}
              className="hover:text-blue-700 transition-colors truncate"
            >
              Insights & Perspectives
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="text-[#071326] font-semibold truncate hidden sm:inline">
              {categoryConfig?.shortLabel || article.tag}
            </span>
          </div>

          <Link
            to="/resources"
            search={{ tab: article.category }}
            hash={article.category}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071326] hover:text-blue-700 transition-colors shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to {categoryConfig?.shortLabel || "Insights"}</span>
          </Link>
        </div>
      </div>

      {/* Article Header & Hero */}
      <header className="relative pt-12 pb-10 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#071326] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {article.tag}
            </span>

            {article.format && (
              <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-200/70 px-2.5 py-1 text-xs font-semibold text-blue-700">
                <FileText className="h-3 w-3" /> {article.format}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 ml-1">
              <Calendar className="h-3.5 w-3.5 text-blue-600" /> {article.date}
            </span>

            <span className="text-slate-300">•</span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5 text-slate-400" /> {article.readTime}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071326] tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author Details & Action Controls */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[#071326] flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-white">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-bold text-[#071326]">{article.author.name}</p>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
              >
                <Download className="h-3.5 w-3.5" />
                <span>PDF Brief</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="mx-auto max-w-4xl px-4 lg:px-8 mt-8">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[16/9] max-h-[440px] bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs backdrop-blur-md bg-black/40 px-4 py-2 rounded-lg border border-white/10">
            <span className="font-semibold">{article.title}</span>
            <span className="hidden sm:inline text-white/80">{article.tag} Edition</span>
          </div>
        </div>
      </div>

      {/* Client Profile Banner (If Case Study) */}
      {article.client && (
        <div className="mx-auto max-w-4xl px-4 lg:px-8 mt-8">
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Client Profile</p>
                <p className="text-sm font-bold text-[#071326]">{article.client.name}</p>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-900 border border-blue-200/80 shadow-xs">
                {article.client.industry}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* High-Impact Metrics Strip */}
      {article.metrics && (
        <div className="mx-auto max-w-4xl px-4 lg:px-8 mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#071326] p-6 text-white border border-slate-800 shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                  Primary Outcome
                </p>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {article.metrics.primary}
                </div>
                <p className="text-xs text-slate-300 mt-1 font-medium max-w-xs">
                  {article.metrics.primaryLabel}
                </p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#f5a623] shrink-0">
                <TrendingUp className="h-6 w-6 stroke-[2]" />
              </div>
            </div>

            {article.metrics.secondary && (
              <div className="rounded-xl bg-gradient-to-br from-blue-900 to-[#071326] p-6 text-white border border-blue-800/80 shadow-md flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1">
                    Benchmark Metric
                  </p>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {article.metrics.secondary}
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium max-w-xs">
                    {article.metrics.secondaryLabel}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-blue-300 shrink-0">
                  <Zap className="h-6 w-6 stroke-[2]" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Body Content Sections */}
      <article className="mx-auto max-w-4xl px-4 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Executive Summary */}
          <section className="relative rounded-2xl bg-slate-50 border border-slate-200/90 p-7 sm:p-9">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold">
                <FileText className="h-4 w-4" />
              </span>
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#071326]">
                Executive Summary
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              {article.content.summary}
            </p>
          </section>

          {/* The Challenge */}
          <section className="space-y-4">
            <div className="border-l-[3px] border-rose-500 pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-1">
                Context & Impediments
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                The Core Challenge
              </h2>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-6 sm:p-7">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {article.content.challenge}
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="space-y-4">
            <div className="border-l-[3px] border-blue-600 pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
                Strategic Approach
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                The ConfigUSA Solution
              </h2>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-6 sm:p-7">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {article.content.solution}
              </p>
            </div>
          </section>

          {/* The Impact */}
          <section className="space-y-4">
            <div className="border-l-[3px] border-emerald-600 pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                Verified Outcomes
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                Business & Operational Impact
              </h2>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-7">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {article.content.impact}
              </p>
            </div>
          </section>

          {/* Key Strategic Takeaways */}
          <section className="space-y-4 pt-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#d98218] mb-1">
                Executive Checklist
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                Key Strategic Takeaways
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <ul className="space-y-4">
                {article.content.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#071326] text-white text-xs font-bold mt-0.5 shadow-xs">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {takeaway}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Bottom Practice Lead & Download CTA Bar */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#071326] to-[#0d2242] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#f5a623] mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Direct Advisory
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Discuss this briefing with our practice lead
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl">
              Explore how these frameworks and delivery models apply directly to your architecture, sprint milestones, and budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-4 py-3 text-xs font-bold text-white hover:bg-white/15 transition-colors"
            >
              <Download className="h-4 w-4" /> Download PDF Brief
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5a623] px-5 py-3 text-xs font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
            >
              Contact Practice Lead <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Insights Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#d98218] mb-1">
                Continue Reading
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] tracking-tight">
                Related Insights & Research
              </h2>
            </div>
            <Link
              to="/resources"
              search={{ tab: article.category }}
              hash={article.category}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
            >
              View All {categoryConfig?.label || "Insights"} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((rel) => (
              <motion.article
                key={rel.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <Link
                  to="/resources/$articleId"
                  params={{ articleId: rel.id }}
                  className="block relative h-48 overflow-hidden bg-slate-900"
                >
                  <img
                    src={rel.image}
                    alt={rel.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#071326]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                    {rel.tag}
                  </div>
                </Link>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-blue-600" /> {rel.date}
                    </span>
                    <span>•</span>
                    <span>{rel.readTime}</span>
                  </div>

                  <Link
                    to="/resources/$articleId"
                    params={{ articleId: rel.id }}
                    className="mt-2.5"
                  >
                    <h3 className="text-base font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {rel.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3 flex-1">
                    {rel.excerpt}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400 truncate max-w-[140px]">
                      {rel.author.name}
                    </span>

                    <Link
                      to="/resources/$articleId"
                      params={{ articleId: rel.id }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-800"
                    >
                      Read Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Executive Digest */}
      <section className="py-20 bg-white border-t border-b border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#071326] p-10 md:p-14 text-center border border-slate-800 shadow-md">
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#f5a623]/10 blur-3xl" />

            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-[#f5a623]">
              <Mail className="h-6 w-6 stroke-[1.75]" />
            </span>

            <div className="relative border-l-[3px] border-[#f5a623] pl-3.5 max-w-md mx-auto mt-6 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Executive Digest
              </p>
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

      {/* CTA Section */}
      <CTASection image={ctaResources} />
    </div>
  );
}
