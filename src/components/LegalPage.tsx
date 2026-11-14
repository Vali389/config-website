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
    <div className="min-h-screen bg-[#F3F5F8]/70">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Plain Executive Navy Brand Theme - No Gold)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-14 border-b border-[#1b3a63]">
        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            {/* Eyebrow with Brand Red Line */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                TRUST, COMPLIANCE & GOVERNANCE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {kind}
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed max-w-2xl">
              {intro}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xs text-white">
                <Calendar className="h-3.5 w-3.5 text-slate-300" />
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
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#102B4E] text-white shadow-2xs">
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
                          className="flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-[#102B4E] hover:bg-slate-100/70 transition-colors"
                        >
                          <span className="text-[11px] font-mono font-bold text-[#245B91] pt-0.5 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-snug">
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
                    className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#102B4E] text-white font-mono text-xs font-bold shadow-2xs shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#102B4E] tracking-tight">
                        {s.heading}
                      </h2>
                    </div>

                    <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      {s.paras.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Bottom Compliance Contact Banner */}
              <div className="mt-10 rounded-2xl bg-[#102B4E] p-6 sm:p-8 text-white shadow-lg border border-[#1b3a63] relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#245B91] text-white shadow-md">
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
                    className="btn-cta-primary inline-flex items-center gap-2 text-xs sm:text-sm font-bold shadow-md shrink-0"
                  >
                    Contact Legal Team <ArrowRight className="h-4 w-4" />
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
