import { useMemo, useState, useEffect } from "react";
import { createFileRoute, Link, useLocation, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Search,
  X,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

import heroResources from "@/assets/hero-resources.jpg";
import ctaResources from "@/assets/cta-resources.jpg";

import { PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

import {
  ARTICLES,
  CATEGORIES,
  ResourceArticle,
} from "@/data/resourcesData";

type ResourcesSearch = {
  tab?: string;
  category?: string;
};

export const Route = createFileRoute("/resources/")({
  validateSearch: (search: Record<string, unknown>): ResourcesSearch => ({
    tab: typeof search.tab === "string" ? search.tab : undefined,
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Insights & Perspectives — ConfigUSA" },
      {
        name: "description",
        content:
          "Explore ConfigUSA's latest insights, case studies, research reports, and workforce intelligence on enterprise AI, digital engineering, and talent strategy.",
      },
      { property: "og:title", content: "Insights & Perspectives — ConfigUSA" },
      {
        property: "og:description",
        content:
          "Strategic thinking, real results, and industry analysis from ConfigUSA.",
      },
    ],
  }),
  component: ResourcesIndexPage,
});

function ResourcesIndexPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // Derive active tab from URL query param ?tab=... or hash
  const activeTabId = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const qTab = searchParams.get("tab") || searchParams.get("category");
    if (qTab) {
      const match = CATEGORIES.find((c) => c.id === qTab.toLowerCase());
      if (match) return match.id;
    }
    if (location.hash) {
      const h = location.hash.replace("#", "").toLowerCase();
      const match = CATEGORIES.find((c) => c.id === h);
      if (match) return match.id;
    }
    return "all";
  }, [location.search, location.hash]);

  // Smooth scroll to target section with sticky header offset
  const scrollToTarget = (targetId: string) => {
    const el =
      document.getElementById(targetId) ||
      document.getElementById(`section-${targetId}`) ||
      document.getElementById("content-hub");
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll into view whenever query tab or hash updates
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const qTab = searchParams.get("tab") || searchParams.get("category");
    const hash = location.hash.replace("#", "");
    const target = qTab || hash;

    if (target) {
      const timer = setTimeout(() => {
        scrollToTarget(target);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.search, location.hash]);

  const handleSelectTab = (tabId: string) => {
    navigate({
      to: "/resources",
      search: tabId === "all" ? {} : { tab: tabId },
      hash: tabId === "all" ? "content-hub" : tabId,
      replace: true,
    });
    setTimeout(() => {
      scrollToTarget(tabId === "all" ? "content-hub" : tabId);
    }, 50);
  };

  // Filtered articles based on tab and search query
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        activeTabId === "all" ? true : article.category === activeTabId;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tag.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeTabId, searchQuery]);

  // Featured article (first perspectives article by default)
  const featuredArticle = useMemo(() => {
    return (
      ARTICLES.find((a) => a.id === "talent-landscape-2026") || ARTICLES[0]
    );
  }, []);

  // Categorized groups for the comprehensive view
  const perspectivesArticles = useMemo(
    () => ARTICLES.filter((a) => a.category === "perspectives"),
    []
  );
  const caseStudiesArticles = useMemo(
    () => ARTICLES.filter((a) => a.category === "case-studies"),
    []
  );
  const researchArticles = useMemo(
    () => ARTICLES.filter((a) => a.category === "research"),
    []
  );
  const workforceArticles = useMemo(
    () => ARTICLES.filter((a) => a.category === "workforce"),
    []
  );

  const renderArticleCard = (article: ResourceArticle) => (
    <motion.article
      key={article.id}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <Link
        to="/resources/$articleId"
        params={{ articleId: article.id }}
        className="block relative aspect-[16/10] overflow-hidden bg-slate-950"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 via-transparent to-transparent pointer-events-none" />

        {/* Category Tag Badge */}
        <div className="absolute top-3 left-3 bg-[#071326]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm border border-white/10">
          {article.tag}
        </div>

        {/* Primary Metric Badge for case studies */}
        {article.metrics?.primary && (
          <div className="absolute top-3 right-3 bg-blue-600/95 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-0.5 rounded shadow-sm">
            {article.metrics.primary}
          </div>
        )}

        {/* Format Pill */}
        {article.format && (
          <div className="absolute bottom-2.5 left-3 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-semibold px-2 py-0.5 rounded border border-white/15">
            {article.format}
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1 font-medium">
              <Calendar className="h-3 w-3 text-blue-600" /> {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-slate-400" /> {article.readTime}
            </span>
          </div>

          <Link
            to="/resources/$articleId"
            params={{ articleId: article.id }}
            className="block"
          >
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer: clean, non-wrapping action CTA link and truncated author */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <span
            className="text-[11px] font-medium text-slate-500 truncate min-w-0"
            title={article.author.name}
          >
            {article.author.name}
          </span>

          <Link
            to="/resources/$articleId"
            params={{ articleId: article.id }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-blue-900 transition-colors cursor-pointer shrink-0 whitespace-nowrap"
          >
            <span>{article.category === "case-studies" ? "View Case Study" : "Read Article"}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </Link>
        </div>
      </div>
    </motion.article>
  );

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Insights & Perspectives"
        title={
          <>
            Actionable Insights That <br />
            <span className="text-[#f5a623]">Accelerate Enterprise</span> Digital Delivery.
          </>
        }
        subtitle="Strategic viewpoints, verified client case studies, benchmark research, and workforce intelligence designed for technology and talent leaders."
        image={heroResources}
      >
        {/* Quick jump pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 mr-1">
            Jump to:
          </span>
          {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectTab(cat.id)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-[#f5a623] hover:text-[#071326] px-3.5 py-1.5 text-xs font-semibold text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-xs"
            >
              <span>{cat.label}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          ))}
        </div>
      </PageHero>

      {/* Stats Bar */}
      <StatsBar />

      {/* Featured Executive Briefing Banner */}
      <section className="py-14 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              Featured Strategic Briefing
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
              Executive Priority Analysis
            </h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#071326] to-slate-950 text-white border border-slate-800 shadow-xl grid md:grid-cols-12 gap-0"
          >
            {/* Image Side */}
            <div className="md:col-span-5 relative min-h-[280px] md:min-h-full overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#071326]/60 to-[#071326]" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-md bg-[#f5a623] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#071326] shadow-md">
                <Sparkles className="h-3.5 w-3.5" /> Essential Reading
              </div>
            </div>

            {/* Content Side */}
            <div className="md:col-span-7 p-7 sm:p-10 flex flex-col justify-between bg-white text-slate-800">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 mb-3">
                  <span className="font-bold uppercase tracking-wider text-blue-700">
                    {featuredArticle.tag}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <Link
                  to="/resources/$articleId"
                  params={{ articleId: featuredArticle.id }}
                  className="block"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071326] group-hover:text-blue-700 transition-colors tracking-tight leading-tight">
                    {featuredArticle.title}
                  </h3>
                </Link>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                {/* Metrics Highlight Strip */}
                {featuredArticle.metrics && (
                  <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                    <div>
                      <div className="text-2xl font-black text-blue-600">
                        {featuredArticle.metrics.primary}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                        {featuredArticle.metrics.primaryLabel}
                      </div>
                    </div>
                    {featuredArticle.metrics.secondary && (
                      <div className="border-l border-slate-200 pl-4">
                        <div className="text-2xl font-black text-[#071326]">
                          {featuredArticle.metrics.secondary}
                        </div>
                        <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                          {featuredArticle.metrics.secondaryLabel}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="text-slate-400 block font-normal">Author</span>
                  <span className="font-semibold text-slate-800">{featuredArticle.author.name}</span>
                </div>

                <Link
                  to="/resources/$articleId"
                  params={{ articleId: featuredArticle.id }}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#071326] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-900 transition-colors shadow-sm"
                >
                  Read Briefing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Main Content Hub & Interactive Filter Section */}
      <section id="content-hub" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1.5">
                Publications & Resources
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071326] tracking-tight">
                Explore by Domain & Strategic Practice
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Browse our complete repository of executive frameworks, verified client transformations, and talent benchmarks.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, authors, keywords..."
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTabId === cat.id;
              const count =
                cat.id === "all"
                  ? ARTICLES.length
                  : ARTICLES.filter((a) => a.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectTab(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#071326] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-[#f5a623]" : "text-slate-500"}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[11px] rounded-full px-2 py-0.5 ${
                      isActive
                        ? "bg-white/20 text-white font-bold"
                        : "bg-slate-100 text-slate-600 font-medium"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner */}
          {activeTabId !== "all" && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-xl bg-white p-4 border border-slate-200 flex items-center justify-between gap-4"
            >
              <p className="text-xs sm:text-sm text-slate-600">
                <span className="font-bold text-[#071326]">
                  {CATEGORIES.find((c) => c.id === activeTabId)?.label}:
                </span>{" "}
                {CATEGORIES.find((c) => c.id === activeTabId)?.desc}
              </p>
              <button
                type="button"
                onClick={() => handleSelectTab("all")}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 shrink-0"
              >
                Clear Filter
              </button>
            </motion.div>
          )}

          {/* Results Grid */}
          <div className="mt-8">
            {filteredArticles.length === 0 ? (
              <div className="rounded-2xl bg-white p-12 text-center border border-slate-200">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-[#071326]">No publications matched your search</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Try adjusting your search query or select another category above.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    handleSelectTab("all");
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#071326] px-4 py-2 text-xs font-bold text-white hover:bg-blue-900 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map(renderArticleCard)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dedicated Section 1: Perspectives & Executive Thought Leadership */}
      <section id="perspectives" className="py-20 bg-white border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Strategic Perspectives
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                Architectural & Executive Viewpoints
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Forward-looking perspectives on enterprise AI adoption, composable platforms, and tech team scaling.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSelectTab("perspectives")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 shrink-0 cursor-pointer"
            >
              View All Perspectives <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perspectivesArticles.map(renderArticleCard)}
          </div>
        </div>
      </section>

      {/* Dedicated Section 2: Case Studies */}
      <section id="case-studies" className="py-20 bg-slate-50 border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Client Success Stories
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                Proven Enterprise Transformations
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Real-world impact across Banking, Retail, Healthcare, and Public Sector modernization programs.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSelectTab("case-studies")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 shrink-0 cursor-pointer"
            >
              View All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudiesArticles.map(renderArticleCard)}
          </div>
        </div>
      </section>

      {/* Dedicated Section 3: Research & Whitepapers */}
      <section id="research" className="py-20 bg-white border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Benchmark Publications
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                In-Depth Research & Playbooks
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Methodologies, migration playbooks, and maturity indices crafted by practicing practice leads.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSelectTab("research")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 shrink-0 cursor-pointer"
            >
              View All Research Reports <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchArticles.map(renderArticleCard)}
          </div>
        </div>
      </section>

      {/* Dedicated Section 4: Workforce Intelligence & Talent Delivery Model */}
      <section id="workforce" className="py-20 bg-slate-50 border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Talent Strategy & Analytics
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                Workforce Intelligence & Operating Models
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Data-driven strategies for talent acquisition, elastic squads, and retention in high-velocity tech fields.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSelectTab("workforce")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 shrink-0 cursor-pointer"
            >
              View All Workforce Reports <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Workforce Articles Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workforceArticles.map(renderArticleCard)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection image={ctaResources} />
    </>
  );
}
