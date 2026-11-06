import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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

function findArticle(slug?: string): Article {
  if (!slug) return ARTICLES[0];
  const exact = ARTICLES.find((a) => a.slug === slug);
  if (exact) return exact;
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  const partial = ARTICLES.find((a) => {
    const normArticleSlug = a.slug.replace(/[^a-z0-9]/g, "");
    const normArticleTitle = a.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      normArticleSlug.includes(normalized) ||
      normalized.includes(normArticleSlug) ||
      normArticleTitle.includes(normalized) ||
      normalized.includes(normArticleTitle)
    );
  });
  return partial || ARTICLES[0];
}

export const Route = createFileRoute("/resources/$slug")({
  head: ({ params }) => {
    const article = findArticle(params.slug);
    const title = `${article.title} — ConfigUSA Insights`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: article.subtitle || "Enterprise technology and workforce insights from ConfigUSA.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: article.subtitle || "Enterprise technology perspectives.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const article = findArticle(params.slug);
    return { slug: params.slug, article };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { slug } = Route.useParams();
  const article = findArticle(slug);

  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

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

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              {article.subtitle}
            </p>
          </div>
        </div>

        {/* Subtle decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/90 to-[#245B91]/30 pointer-events-none" />
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Hero Image Banner                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200/80">
        <div className="container-enterprise py-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-h-[480px]">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover max-h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C83B43]" />
              <span>ConfigUSA Strategic Perspective • {article.topic}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Article Body & Sidebar Content Grid                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main Article Content (8 cols) */}
            <article className="lg:col-span-8 space-y-10">
              {/* Executive Summary Card */}
              <div className="rounded-2xl border-l-4 border-[#C83B43] bg-red-50/20 p-6 sm:p-7 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C83B43] uppercase tracking-wider mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Executive Takeaway</span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {article.summary}
                </p>
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <ul className="mt-4 pt-4 border-t border-red-100 space-y-2">
                    {article.keyTakeaways.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-[#C83B43] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Sections from Content Data */}
              {article.sections.map((section, idx) => (
                <div key={section.heading} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      {p}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200/90 p-5 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#245B91]">
                        Key Delivery Insights
                      </div>
                      <ul className="space-y-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-[#245B91] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.callout && (
                    <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-xs sm:text-sm font-semibold text-[#102B4E]">
                      {section.callout}
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion Section */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#102B4E]">Strategic Conclusion</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Enterprise transformation initiatives succeed when technology capability is paired directly with domain-aligned practitioner talent. At ConfigUSA, our objective is to de-risk complex deployments, mobilise high-calibre specialist squads, and ensure measurable business outcomes at every stage of the adoption lifecycle.
                </p>
              </div>

              {/* Back to list & Share */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#245B91] hover:text-[#102B4E] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to all articles & reports
                </Link>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Share article with colleagues or teams</span>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Practice / Capability Pod Card */}
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B4E]">
                  <Building2 className="h-4 w-4 text-[#245B91]" />
                  <span>Aligned Practice Area</span>
                </div>
                <h4 className="text-base font-bold text-[#102B4E]">{article.topic} Practice</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ConfigUSA provides vetted specialist workforce squads, forward-deployed engineering, and delivery support across enterprise platforms, AI frameworks, and Indian capability centres.
                </p>
                <Link
                  to="/contact"
                  className="btn-cta-primary w-full text-xs font-bold py-2.5 rounded-lg justify-center shadow-xs inline-flex items-center gap-2"
                >
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Related Reading */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  Related Reading
                </h4>
                <div className="space-y-4">
                  {otherArticles.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/resources/${item.slug}` as any}
                      className="group block space-y-1.5 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#C83B43]">
                        {item.topic}
                      </div>
                      <h5 className="text-xs sm:text-[13px] font-bold text-[#102B4E] leading-snug group-hover:text-[#245B91] transition-colors">
                        {item.title}
                      </h5>
                      <span className="text-[11px] text-slate-400">{item.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-10 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Accelerate Your Enterprise Capability with ConfigUSA
              </h2>
              <p className="text-slate-300 text-sm">
                Discuss how our specialist workforce pods and forward-deployed engineering teams can support your roadmap.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary text-sm font-semibold px-6 py-3 rounded-md shadow-sm inline-flex items-center gap-2"
              >
                <span>Connect With an Enterprise Lead</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
