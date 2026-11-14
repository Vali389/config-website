import React from "react";
import { Mail, Calendar, ShieldCheck } from "lucide-react";

export interface LegalSection {
  heading: string;
  paras: string[];
}

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
    <div className="flex flex-col min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Plain Solid Deep Navy - Authoritative Corporate)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#102B4E] text-white pt-28 pb-12 sm:pt-32 sm:pb-14 border-b border-[#1b3a63]">
        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                LEGAL & COMPLIANCE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {kind}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {intro}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-medium text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-[#C83B43]" />
              <span>Effective Date: {updated} • ConfigUSA Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Document Body (Clean, Authoritative White Document Layout)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto">
            {/* Document Header Note */}
            <div className="mb-10 pb-6 border-b border-slate-200 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2 font-semibold text-[#102B4E]">
                <ShieldCheck className="h-4 w-4 text-[#245B91]" />
                <span>Official Policy Document</span>
              </div>
              <span>{sections.length} Sections</span>
            </div>

            {/* Document Sections */}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div
                  key={s.heading}
                  className="pb-8 border-b border-slate-100 last:border-b-0"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-[#102B4E] tracking-tight mb-3.5 flex items-center gap-3">
                    <span className="w-1.5 h-4 bg-[#C83B43] rounded-sm shrink-0 inline-block" />
                    <span>
                      {i + 1}. {s.heading}
                    </span>
                  </h2>

                  <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed pl-4 sm:pl-5">
                    {s.paras.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
