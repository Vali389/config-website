import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Globe2,
  Rocket,
  Boxes,
  Users,
  ArrowRight,
} from "lucide-react";
import wdAi from "@/assets/wd-ai.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";
import palantirFoundryAipHero from "@/assets/palantir-foundry-aip-hero.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import heroTemplateInsights from "@/assets/hero_template_insights.png";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      {
        title: "Insights & Perspectives — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Explore practical insights on the capabilities, people and operating models shaping enterprise technology and workforce decisions.",
      },
      {
        property: "og:title",
        content: "Insights & Perspectives | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Perspectives on technology, talent and enterprise transformation. Enterprise AI, GCC growth, forward-deployed engineering, enterprise platforms and workforce models.",
      },
    ],
  }),
  component: InsightsPage,
});

// Blueprint Section 13: Editorial themes (5 Themes)
const EDITORIAL_THEMES = [
  {
    icon: BrainCircuit,
    title: "Enterprise AI adoption and responsible implementation",
    desc: "Practical frameworks, use-case evaluation and operational governance.",
  },
  {
    icon: Globe2,
    title: "GCC growth, capability building and talent strategy",
    desc: "Trends, operating models and talent strategies in Indian capability centres.",
  },
  {
    icon: Rocket,
    title: "Forward-deployed engineering and product delivery",
    desc: "Forward-deployed engineering, team structure and project execution.",
  },
  {
    icon: Boxes,
    title: "Enterprise platform skills and workforce trends",
    desc: "Platform specialization, talent availability and implementation support.",
  },
  {
    icon: Users,
    title: "Technology staffing, talent availability and delivery models",
    desc: "Market trends, retention, compensation and flexible engagement models.",
  },
];

// Articles aligned with the editorial themes
const ARTICLES = [
  {
    topic: "Enterprise AI",
    date: "October 2026",
    readTime: "5 min read",
    title: "Evaluating Enterprise AI Use Cases: From Concept to Production",
    desc: "A disciplined framework for identifying high-value AI applications while establishing appropriate data governance, security controls and human oversight.",
    image: wdAi,
  },
  {
    topic: "GCC Growth",
    date: "September 2026",
    readTime: "6 min read",
    title: "Global Capability Centre Evolution: Building Value Beyond Cost",
    desc: "How progressive enterprises are evolving their Indian GCC hubs into autonomous engineering drivers, innovation pods, and global delivery centers.",
    image: gccEnterpriseHub,
  },
  {
    topic: "Engineering Practices",
    date: "August 2026",
    readTime: "5 min read",
    title: "Forward-Deployed Engineering: Bridging Business Problems and Code",
    desc: "Why technical teams embedded directly alongside operational leaders accelerate delivery velocity and reduce workflow friction.",
    image: palantirFoundryAipHero,
  },
  {
    topic: "Workforce Strategy",
    date: "July 2026",
    readTime: "4 min read",
    title: "Navigating Enterprise Talent Acquisition in Specialized Domains",
    desc: "Balancing contract velocity, contract-to-hire evaluation and dedicated delivery pods in high-demand technology sectors.",
    image: wdWorkforce,
  },
];

function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[540px] lg:min-h-[620px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={heroTemplateInsights}
            alt="Insights & Perspectives"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                INSIGHTS & PERSPECTIVES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Perspectives on technology, talent and enterprise transformation.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Explore practical insights on the capabilities, people and operating models shaping enterprise technology and workforce decisions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#perspectives"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Explore Latest Insights <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#articles"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Featured Articles <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Editorial Themes (Template Card Grid)                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="perspectives" className="section-padding bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  EDITORIAL THEMES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Focus areas addressing core enterprise challenges.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Practical analysis of what works in technology delivery, workforce strategy and operational scaling.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDITORIAL_THEMES.map((theme) => (
              <div
                key={theme.title}
                className="rounded-xl border border-slate-200/80 bg-white p-7 shadow-xs hover:border-[#245B91]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5">
                    <theme.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2.5">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Articles & Reports (Template Card Grid with Images)     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="articles" className="section-padding bg-[#F3F5F8] border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                ARTICLES & REPORTS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              In-depth research and delivery perspectives.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <div
                key={article.title}
                className="group rounded-xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:border-[#245B91]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#102B4E]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                      {article.topic}
                    </span>
                    <span className="bg-black/50 text-white/90 text-[10px] font-medium px-2 py-1 rounded backdrop-blur-sm">
                      {article.date}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2 group-hover:text-[#245B91] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {article.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 font-bold text-[#C83B43] group-hover:text-[#a82e35]">
                      <span>Read insight</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-12 lg:py-14 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Have a critical role, capability gap or delivery challenge?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Let us understand the requirement and identify the right way forward.
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
