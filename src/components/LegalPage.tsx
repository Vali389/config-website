import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Mail, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

export interface LegalSection {
  heading: string;
  paras: string[];
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function LegalPage({
  kind,
  updated,
  intro,
  sections,
}: {
  kind: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-slate-50/60">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Executive Navy & Gold Brand Theme)                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-16 border-b border-[#1b3a63]">
        {/* Ambient subtle glow & pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#f5a623]/10 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#245B91]/30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow with Brand Gold Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#f5a623]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#f5a623]">
                Trust, Compliance & Governance
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {kind}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {intro}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xs text-white">
                <Calendar className="h-3.5 w-3.5 text-[#f5a623]" />
                Effective: {updated}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Verified Legal Standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Main Content & Sticky TOC                                        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            {/* Left Sidebar: Sticky Table of Contents */}
            <aside className="hidden lg:block sticky top-28">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2.5 pb-3.5 mb-3 border-b border-slate-100">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#102B4E] text-[#f5a623] shadow-2xs">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#102B4E]">
                      Table of Contents
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">Quick Section Navigation</p>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    {sections.map((s, i) => (
                      <li key={s.heading}>
                        <a
                          href={`#${slug(s.heading)}`}
                          className="group flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#102B4E] hover:bg-slate-50 transition-all border-l-2 border-transparent hover:border-[#f5a623]"
                        >
                          <span className="text-[11px] font-mono font-bold text-[#f5a623] pt-0.5 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-snug group-hover:translate-x-0.5 transition-transform">
                            {s.heading}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-4 pt-3.5 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Version: 2026.1</span>
                  <span>{sections.length} Sections</span>
                </div>
              </div>
            </aside>

            {/* Right Column: Content Cards */}
            <div className="max-w-3xl">
              <div className="space-y-6">
                {sections.map((s, i) => (
                  <motion.section
                    key={s.heading}
                    id={slug(s.heading)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.35, delay: i * 0.02 }}
                    className="scroll-mt-28 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-[#f5a623]/60 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Top subtle gold hover accent bar */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#102B4E] via-[#f5a623] to-[#102B4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#102B4E] text-[#f5a623] font-mono text-xs font-bold shadow-2xs shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#102B4E] tracking-tight">
                        {s.heading}
                      </h2>
                    </div>

                    <div className="space-y-3.5 text-sm sm:text-[0.95rem] text-slate-600 leading-relaxed">
                      {s.paras.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Bottom Compliance Contact Banner */}
              <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#102B4E] via-[#102B4E] to-[#1b3a63] p-6 sm:p-8 text-white shadow-lg border border-[#f5a623]/30 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[#f5a623]/15 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f5a623] to-[#d98218] text-[#102B4E] shadow-md">
                      <Mail className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        Questions regarding this {kind.toLowerCase()}?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        Our legal and compliance team is dedicated to transparent communication and prompt assistance.
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@configusa.com"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#f5a623] px-6 py-3 text-xs sm:text-sm font-bold text-[#102B4E] hover:bg-[#d98218] transition-all shadow-md hover:-translate-y-0.5"
                  >
                    Contact Compliance <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
