import { useMemo, useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Mail,
  Send,
  CheckCircle2,
  X,
  BookOpen,
  Sparkles,
  Building2,
  Layers,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Cpu,
  UserCheck,
  Lightbulb,
} from "lucide-react";
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
      {
        name: "description",
        content:
          "Explore ConfigUSA's latest insights, case studies, research, and whitepapers on Forward-Deployed Engineering, enterprise AI transformation, and modern talent strategy.",
      },
      { property: "og:title", content: "Insights & Perspectives — ConfigUSA" },
      {
        property: "og:description",
        content: "Strategic thinking, real results, and industry analysis from ConfigUSA.",
      },
    ],
  }),
  component: Page,
});

const FEATURED_BRIEFING = {
  tag: "Executive Briefing",
  title: "The Missing Link Between Artificial Intelligence, Enterprise Transformation, and Measurable Business Outcomes",
  subtitle:
    "Artificial intelligence is becoming easier to access. Turning it into measurable business value remains the real challenge.",
  excerpt:
    "Organizations are investing heavily in LLMs, AI agents, and intelligent platforms—yet finding that models alone cannot navigate enterprise reality. Discover how Forward-Deployed Engineering bridges the gap between technology and business outcomes.",
  date: "Executive Analysis • 2026",
  readTime: "8 min read",
  image: wdAi,
};

const POSTS = [
  {
    tag: "Insight",
    title: "The 2026 IT Talent Landscape: What Technology Leaders Need to Know",
    excerpt:
      "Where enterprise hiring is heading — and how strategic engineering organizations are building elastic teams that stay ahead of the disruption curve.",
    date: "Jan 12, 2026",
    readTime: "5 min read",
    image: wdWorkforce,
  },
  {
    tag: "Case Study",
    title: "How a Fortune 500 Bank Cut Hiring Time by 60% with ConfigUSA",
    excerpt:
      "A premier financial services leader accelerated critical regulatory modernization projects with rapidly assembled, specialized squads.",
    date: "Dec 04, 2025",
    readTime: "7 min read",
    image: indFinancial,
  },
  {
    tag: "Webinar",
    title: "SAP S/4HANA Migration: Lessons From 100+ Enterprise Rollouts",
    excerpt:
      "Practical architectural strategies to de-risk your cloud migration, avoid costly customization drift, and unlock long-term operational ROI.",
    date: "Nov 20, 2025",
    readTime: "45 min video",
    image: wdEnterprise,
  },
  {
    tag: "Whitepaper",
    title: "Building a Future-Ready Workforce with AI Skills Assessments",
    excerpt:
      "How data-driven candidate evaluation removes cognitive bias, measures real coding aptitude, and improves long-term retention rates.",
    date: "Oct 15, 2025",
    readTime: "12 min read",
    image: aboutApproach,
  },
  {
    tag: "Insight",
    title: "The Strategic Advantage of Contract-to-Hire in Volatile Markets",
    excerpt:
      "Why flexible engagement models with vetted trial periods have become the executive standard for scaling engineering capability safely.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    image: indRetail,
  },
];

const CATEGORIES = ["All", "Insight", "Case Study", "Webinar", "Whitepaper"];

function Page() {
  const [cat, setCat] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [readerOpen, setReaderOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (readerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [readerOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setReaderOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const list = useMemo(
    () => POSTS.filter((p) => cat === "All" || p.tag === cat),
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
        subtitle="Explore our latest thinking on artificial intelligence, forward-deployed engineering, Palantir ecosystems, and enterprise transformation."
        image={heroResources}
      >
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => setReaderOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Read Executive Briefing <ArrowRight className="h-4 w-4" />
          </button>
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

      {/* Featured Executive Briefing */}
      <section id="featured" className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
              Featured Perspective
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
              Today's Executive Briefing
            </h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:border-[#f5a623]/60 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
            onClick={() => setReaderOpen(true)}
          >
            <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-[#071326]">
              <img
                src={FEATURED_BRIEFING.image}
                alt={FEATURED_BRIEFING.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-[#071326]/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="rounded-md bg-[#f5a623] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#071326] shadow-sm">
                  {FEATURED_BRIEFING.tag}
                </span>
                <span className="rounded-md bg-[#071326]/80 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-slate-300 border border-white/10">
                  Forward-Deployed Engineering
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071326]/85 backdrop-blur border border-white/10 lg:hidden">
                <p className="text-xs text-[#f5a623] font-bold">Featured Essay</p>
                <p className="text-sm font-semibold text-white truncate">
                  The missing link between AI & enterprise outcomes
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 bg-white">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-blue-600" /> {FEATURED_BRIEFING.date}
                </span>
                <span>•</span>
                <span>{FEATURED_BRIEFING.readTime}</span>
              </div>

              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-[#071326] leading-snug group-hover:text-blue-700 transition-colors">
                {FEATURED_BRIEFING.title}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {FEATURED_BRIEFING.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["AI Agents", "FDE Model", "Enterprise Workflows", "Business Value"].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#071326] group-hover:text-[#f5a623] transition-colors">
                  Read Full Executive Article{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs text-slate-400 font-medium">8 min interactive read</span>
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
                    <button
                      type="button"
                      onClick={() => setReaderOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071326] group-hover:text-[#f5a623] transition-colors"
                    >
                      Read Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
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
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Executive Digest
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Get Technology Insights in Your Inbox
              </h2>
            </div>

            <p className="relative mt-3 text-slate-300 text-sm max-w-lg mx-auto">
              Join over 25,000 engineering and talent executives receiving our monthly synthesis of
              enterprise AI, infrastructure, and hiring benchmarks.
            </p>

            {subscribed ? (
              <div className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Thank you for subscribing! We'll
                be in touch.
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

      {/* Executive Article Modal Reader */}
      <AnimatePresence>
        {readerOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5a623]/20 text-[#071326]">
                    <BookOpen className="h-4 w-4 text-[#d98218]" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#f5a623]">
                      ConfigUSA Executive Perspective
                    </p>
                    <p className="text-xs font-semibold text-slate-600 truncate max-w-[240px] sm:max-w-md">
                      The Missing Link Between AI, Transformation & Outcomes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/services/forward-deployed-engineering"
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    View FDE Services <ArrowRight className="h-3 w-3" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setReaderOpen(false)}
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    aria-label="Close reader"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="max-h-[82vh] overflow-y-auto px-6 py-8 sm:px-10 sm:py-12 text-[#071326]">
                {/* Article Header */}
                <header className="border-b border-slate-100 pb-8 mb-10">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
                    <span className="rounded-md bg-[#071326] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f5a623]">
                      Strategic Insight
                    </span>
                    <span>•</span>
                    <span>8 Min Executive Read</span>
                    <span>•</span>
                    <span>2026 Perspective</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071326] tracking-tight leading-tight">
                    The missing link between artificial intelligence, enterprise transformation, and
                    measurable business outcomes
                  </h1>

                  <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                    Artificial intelligence is becoming easier to access. Turning it into measurable
                    business value remains the real challenge.
                  </p>
                </header>

                {/* Article Content */}
                <div className="prose prose-slate max-w-none space-y-8 text-[15px] sm:text-base leading-relaxed text-slate-700">
                  <p>
                    Organizations are investing in large language models, AI agents, intelligent
                    automation, and enterprise AI platforms. Yet many are discovering that
                    implementing AI is only the beginning.
                  </p>

                  <p>
                    The real challenge starts when AI must operate within complex enterprise
                    environments—connecting fragmented data, integrating with legacy systems, navigating
                    regulatory requirements, and changing how people work.
                  </p>

                  <div className="rounded-xl bg-[#071326] p-6 text-white border-l-4 border-[#f5a623] my-6">
                    <p className="text-sm font-semibold text-[#f5a623] mb-1">Core Premise</p>
                    <p className="text-base sm:text-lg font-medium text-slate-100 italic">
                      "A powerful AI model alone cannot solve these challenges. Organizations need
                      people who understand the business problem, can engineer the solution, and can
                      work directly with teams to make it operational."
                    </p>
                  </div>

                  <p>
                    This is where <strong>Forward-Deployed Engineering (FDE)</strong> becomes
                    increasingly relevant.
                  </p>

                  <p>
                    Forward-deployed engineering represents an approach to technology implementation
                    that brings engineering expertise closer to the business problems being solved.
                    Rather than building solutions in isolation, forward-deployed engineers work
                    alongside clients to understand their operating environments, develop practical
                    solutions, and drive implementation.
                  </p>

                  <p>
                    As enterprises move from AI experimentation to enterprise-wide adoption, this
                    capability could become an important differentiator.
                  </p>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 1 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        1
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        What Is a Forward-Deployed Engineer?
                      </h2>
                    </div>

                    <p>
                      A Forward-Deployed Engineer works directly with business teams to understand
                      operational challenges, design technical solutions, and implement them within the
                      client's actual environment.
                    </p>

                    <p>
                      The role combines software engineering, data engineering, AI, business analysis,
                      and client collaboration.
                    </p>

                    <p>
                      The distinction lies in <em>where the work begins</em>.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 my-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Traditional Engineering / Consulting
                        </p>
                        <p className="text-sm text-slate-700">
                          A product engineering team may start with a defined product requirement. A
                          traditional consulting engagement may begin with an assessment, analysis, or
                          recommendation.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#071326]/5 border border-[#f5a623]/40">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#d98218] mb-1">
                          Forward-Deployed Engineering
                        </p>
                        <p className="text-sm text-slate-800 font-medium">
                          Starts by understanding the business problem and works directly with the
                          client to determine what should be built, how it should work, and whether it
                          delivers the intended outcome.
                        </p>
                      </div>
                    </div>

                    <p>
                      This may involve connecting enterprise data sources, building APIs, developing
                      AI-powered applications, integrating agents into existing workflows, or
                      redesigning processes to take advantage of new capabilities.
                    </p>

                    <p className="font-semibold text-[#071326]">
                      The objective is not simply to make technology work. It is to make technology work
                      in the context of a real business problem.
                    </p>
                  </section>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 2 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        2
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        Why Are Forward-Deployed Engineers Becoming More Important in the Age of AI?
                      </h2>
                    </div>

                    <p>
                      The growing interest in forward-deployed engineering reflects a broader challenge
                      in enterprise AI: the gap between technological capability and organizational
                      impact. Consider four practical examples:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5 my-6">
                      <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-blue-400 transition-all">
                        <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm">
                          <Building2 className="h-4 w-4" /> Banking & Financial Services
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          A bank wants early warning signals of loan defaults. The challenge is not
                          simply building a predictive model; it is integrating fragmented accounts,
                          transaction patterns, and risk indicators into the live credit monitoring and
                          decision-making process.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-blue-400 transition-all">
                        <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
                          <TrendingUp className="h-4 w-4" /> Finance & Cash-Flow Management
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          A finance team needs visibility into future cash positions across ERPs, bank
                          accounts, and invoices. An effective solution requires data integration,
                          forecasting models, exception triggers, and an actionable workflow.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-blue-400 transition-all">
                        <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold text-sm">
                          <Cpu className="h-4 w-4" /> Customer Service & AI Agents
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Building AI agents that handle queries accurately requires more than
                          connecting an LLM to a chatbot. It requires business rule engines, customer
                          context, enterprise knowledge retrieval, escalation guardrails, and security.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-blue-400 transition-all">
                        <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-sm">
                          <Workflow className="h-4 w-4" /> Supply Chain & Operations
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Anticipating supply disruptions requires integrating operational telemetry,
                          identifying constraints, predicting delays, and coordinating decisions across
                          procurement, logistics, and manufacturing teams.
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold text-[#071326]">
                      In every example, the AI model is only one component of the solution. The business
                      value emerges when data, engineering, workflows, and people come together.
                    </p>
                  </section>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 3 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        3
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        The FDE Is More Than a Developer
                      </h2>
                    </div>

                    <p>
                      Forward-deployed engineering requires a combination of capabilities that
                      traditionally sit across different roles:
                    </p>

                    <div className="space-y-3 my-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-[#071326] text-sm flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-[#d98218]" /> 1. Business Understanding
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          An FDE must understand how the business operates, where the bottlenecks
                          exist, how decisions are made, and what measurable improvement is expected.
                          The ability to ask the right questions is often as important as writing code.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-[#071326] text-sm flex items-center gap-2">
                          <Layers className="h-4 w-4 text-blue-600" /> 2. Engineering and Data Expertise
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Technical capability across APIs, data pipelines, cloud infrastructure,
                          enterprise applications, and AI systems. Solutions must function within
                          real-world constraints like data quality, latency, security, and compliance.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-[#071326] text-sm flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-purple-600" /> 3. AI and Agentic Engineering
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Not every problem requires generative AI or autonomous agents. A strong FDE
                          understands when traditional automation, machine learning, generative AI, or
                          agentic AI is appropriate—and when a simpler solution is more reliable and
                          cost-effective.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-[#071326] text-sm flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-emerald-600" /> 4. Integration and Implementation
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Enterprise AI cannot operate effectively in isolation. The solution must
                          connect with relevant systems, access appropriate data, respect business
                          rules, and fit into the organization's existing technology landscape.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-[#071326] text-sm flex items-center gap-2">
                          <UserCheck className="h-4 w-4 text-amber-600" /> 5. Communication and Change Management
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Even a technically successful solution can fail if employees do not trust it,
                          understand it, or incorporate it into their work. FDEs communicate with
                          business leaders, technical teams, and operational users, incorporating
                          continuous feedback.
                        </p>
                      </div>
                    </div>
                  </section>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 4 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        4
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        The Real Challenge: From AI Implementation to Adoption
                      </h2>
                    </div>

                    <p>
                      One of the biggest misconceptions about enterprise AI is that productivity
                      improvements will automatically follow deployment.
                    </p>

                    <p className="font-bold text-rose-600">They will not.</p>

                    <p>
                      An AI tool might help an employee complete an individual task faster without
                      improving the performance of the wider team. Approvals may still take days. Data
                      may remain fragmented. Teams may continue working in silos. Existing processes may
                      be designed around manual work.
                    </p>

                    <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-blue-600 my-4">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        The Fundamental Perspective Shift
                      </p>
                      <p className="text-sm sm:text-base text-slate-700 mt-2">
                        Instead of asking only:{" "}
                        <span className="line-through text-slate-400">
                          "Which AI platform should we implement?"
                        </span>
                        <br />
                        Organizations should ask:{" "}
                        <strong className="text-[#071326]">
                          "Which business problem are we trying to solve, how does the current process
                          work, and how will AI improve the outcome?"
                        </strong>
                      </p>
                    </div>

                    <p>
                      That change in perspective is fundamental. It shifts the conversation from
                      technology deployment to business transformation.
                    </p>
                  </section>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 5 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        5
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        Why Changing How People Work Is So Difficult
                      </h2>
                    </div>

                    <p>
                      Technology can often be implemented faster than organizations can change their
                      habits, processes, and decision-making structures.
                    </p>

                    <p>
                      Successful AI adoption therefore involves three connected dimensions:
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 my-4">
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                        <p className="font-bold text-blue-900 text-sm">1. Technology</p>
                        <p className="text-xs text-blue-800 mt-1">
                          Does the solution work reliably and integrate with existing enterprise
                          systems?
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                        <p className="font-bold text-amber-900 text-sm">2. Process</p>
                        <p className="text-xs text-amber-800 mt-1">
                          Have workflows and decision-making mechanisms been redesigned where necessary?
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                        <p className="font-bold text-emerald-900 text-sm">3. People</p>
                        <p className="text-xs text-emerald-800 mt-1">
                          Do employees understand, trust, and actively incorporate the solution into
                          their work?
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-slate-700">
                      Ignoring any one of these dimensions limits the value of the entire enterprise
                      initiative.
                    </p>
                  </section>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 6 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        6
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        How ConfigUSA Views This Opportunity
                      </h2>
                    </div>

                    <p>
                      At ConfigUSA, we believe enterprise AI must begin with a meaningful business
                      problem, be supported by sound engineering, and be evaluated by the value it
                      delivers.
                    </p>

                    <div className="p-6 rounded-2xl bg-[#071326] text-white my-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-4">
                        The Core Formula
                      </p>
                      <h3 className="text-xl font-bold text-white mb-4">
                        Business + Technology + People
                      </h3>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#f5a623] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-white">Business defines the problem:</strong>{" "}
                            Organizations must identify where decisions can improve, processes become
                            more efficient, or risks are detected earlier.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#f5a623] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-white">Technology enables the solution:</strong> AI
                            models, intelligent agents, data engineering, and enterprise integrations
                            provide the required capabilities.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#f5a623] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-white">People make transformation sustainable:</strong>{" "}
                            Business users, engineering teams, and executive leaders work together to
                            embed solutions into daily operations.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  <hr className="my-8 border-slate-200" />

                  {/* Section 7 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold text-sm">
                        7
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#071326] tracking-tight">
                        The Future: From Building AI to Engineering Business Outcomes
                      </h2>
                    </div>

                    <p>
                      AI-assisted software development is changing how quickly teams can build and test
                      solutions. AI agents are expanding the range of tasks that can be automated or
                      supported by intelligent systems.
                    </p>

                    <p>
                      As these capabilities mature, the ability to produce code faster will remain
                      valuable, but it will not be the only differentiator.
                    </p>

                    <p>
                      Organizations will increasingly need professionals who can identify the right
                      problems, understand complex operating environments, select appropriate
                      technologies, integrate solutions, and work with people to achieve adoption.
                    </p>

                    <p>
                      Forward-deployed engineering offers one way to bring these capabilities together.
                      It connects aspects of product engineering, enterprise architecture, and strategic
                      consulting around a single practical objective: delivering technology-enabled
                      business outcomes.
                    </p>
                  </section>

                  {/* Conclusion */}
                  <div className="rounded-2xl border-2 border-[#f5a623] bg-amber-50/40 p-6 sm:p-8 my-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#d98218] mb-2">
                      Conclusion
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071326] mb-3">
                      Are We Implementing AI or Transforming the Business?
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                      The next phase of enterprise AI will require organizations to move beyond
                      experimentation and focus on meaningful implementation. That means connecting
                      technology to real business problems, integrating it with enterprise systems,
                      redesigning workflows where necessary, and ensuring that people can use it
                      effectively.
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#071326]">
                      The question is no longer simply how much AI your organization is implementing.
                      <br />
                      <span className="text-[#d98218]">
                        The more important question is: What business outcomes are you achieving with it?
                      </span>
                    </p>
                  </div>
                </div>

                {/* Bottom Action Cards */}
                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Ready to bridge the gap?
                    </p>
                    <p className="text-base font-bold text-[#071326]">
                      Deploy FDE teams to turn AI into enterprise value
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      onClick={() => setReaderOpen(false)}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#071326] px-5 py-3 text-sm font-bold text-[#f5a623] hover:bg-slate-900 transition-colors shadow-sm"
                    >
                      Discuss Your FDE Requirements <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/services/forward-deployed-engineering"
                      onClick={() => setReaderOpen(false)}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Explore FDE Services
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
