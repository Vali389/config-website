import React from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Share2,
  ArrowLeft,
  Building2,
  Sparkles,
} from "lucide-react";
import { ARTICLES, type Article } from "@/data/insights";

export const Route = createFileRoute("/resources/$slug")({
  head: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    const title = article
      ? `${article.title} — ConfigUSA Insights`
      : "Insight — ConfigUSA";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: article?.subtitle || "Enterprise technology and workforce insights from ConfigUSA.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: article?.subtitle || "Enterprise technology perspectives.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) {
      throw notFound();
    }
    return { slug: params.slug };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { slug } = Route.useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) throw notFound();

  const otherArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Header / Breadcrumbs & Hero Band                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white pt-28 pb-12 lg:pt-32 lg:pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="container-enterprise relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link to="/resources" className="hover:text-white transition-colors">
              Insights & Perspectives
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-blue-300 truncate max-w-xs sm:max-w-md">{article.topic}</span>
          </nav>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#245B91] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {article.topic}
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed max-w-3xl">
              {article.subtitle}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300 border-t border-white/15 pt-4">
              <div>
                <span className="font-bold text-white block">{article.author.name}</span>
                <span className="text-slate-300">{article.author.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Main Article Body + Sidebar                                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left 8 Columns: Article Content */}
            <article className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Executive Summary Callout */}
              <div className="rounded-2xl bg-[#F4F7FB] border-l-4 border-[#245B91] p-6 sm:p-7 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#245B91] block">
                  Executive Brief
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {article.summary}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
                <h3 className="text-base font-bold text-[#102B4E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#C83B43]" />
                  <span>Key Takeaways for Enterprise Leaders</span>
                </h3>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#245B91] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-Depth Content Sections */}
              <div className="space-y-8 pt-2">
                {article.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#102B4E] tracking-tight">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base text-slate-700 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {section.callout && (
                      <div className="my-5 rounded-xl bg-slate-50 border-l-[3px] border-[#C83B43] p-5 italic text-slate-800 text-base leading-relaxed font-serif">
                        "{section.callout}"
                      </div>
                    )}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2.5 my-4 pl-1">
                        {section.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#245B91] mt-2.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Back to Resources & Share */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#102B4E] hover:text-[#245B91] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to all insights & articles</span>
                </Link>

                <Link
                  to={article.relatedLink.to as any}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C83B43] hover:text-[#a82e35] transition-colors"
                >
                  <span>{article.relatedLink.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Right 4 Columns: Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Related Practice Card */}
              <div className="rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B4E]">
                  <Building2 className="h-4 w-4 text-[#245B91]" />
                  <span>ConfigUSA Practice Area</span>
                </div>
                <h4 className="text-base font-bold text-[#102B4E] leading-snug">
                  Need specialist capability in {article.topic}?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect directly with practitioners and technical squad leads who build, scale and maintain solutions in this domain.
                </p>
                <Link
                  to="/contact"
                  className="btn-cta-primary w-full inline-flex items-center justify-center gap-2 text-xs font-bold py-2.5 shadow-sm"
                >
                  Discuss Your Requirement <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Publication Credentials */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 text-xs text-slate-600">
                <div className="font-bold text-[#102B4E] uppercase tracking-wider text-[11px]">
                  About ConfigUSA Insights
                </div>
                <p className="leading-relaxed">
                  Our viewpoints reflect practical execution experience across enterprise platforms, cross-border capability centres, and high-velocity engineering squads.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500">
                  <span>Topic: {article.topic}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: More Perspectives (Related Insights Grid)               */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E]">
                  CONTINUE EXPLORING
                </span>
                <span className="w-8 h-[2px] bg-[#C83B43]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] tracking-tight">
                Related viewpoints and analyses
              </h2>
            </div>

            <Link
              to="/resources"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] hover:text-[#a82e35] transition-colors"
            >
              <span>View all insights</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                to={`/resources/${item.slug}` as any}
                className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:border-[#245B91] hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20 relative"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={item.cardImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#102B4E]/90 text-white backdrop-blur-xs">
                      {item.topic}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-[#102B4E] leading-snug group-hover:text-[#245B91] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C83B43] group-hover:text-[#245B91] transition-colors">
                    <span>Read insight</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Discuss your technology and workforce priorities.
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Connect with our domain practice leads to evaluate strategic requirements and delivery models.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
