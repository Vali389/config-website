import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

interface Item {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface IndustryDetailProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  heroImage: string;

  stats?: { value: string; label: string }[];

  overviewLabel: string;
  overviewHeading: string;
  overviewParas: string[];
  overviewImage: string;
  benefits: string[];

  capabilitiesHeading: string;
  capabilitiesSub?: string;
  capabilities: Item[];

  processHeading: string;
  processSub?: string;
  process: Item[];

  techHeading?: string;
  tech?: string[];

  ctaImage?: string;
}

export function IndustryDetail(p: IndustryDetailProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} image={p.heroImage}>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            All Industries
          </Link>
        </div>
      </PageHero>

      {/* Stats band */}
      {p.stats && p.stats.length > 0 && (
        <div className="relative -mt-16 z-20 mx-auto max-w-5xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white shadow-card border border-slate-200/90 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 overflow-hidden"
          >
            {p.stats.map((s) => (
              <div key={s.label} className="px-4 py-7 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-[#071326] tracking-tight">{s.value}</div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Overview */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/10 opacity-60 blur-2xl" />
            <img src={p.overviewImage} alt="" className="relative rounded-2xl shadow-card border border-slate-200/80 w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">{p.overviewLabel}</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#071326] leading-tight tracking-tight">{p.overviewHeading}</h2>
            </div>
            {p.overviewParas.map((para, i) => (
              <p key={i} className="mt-4 text-slate-600 leading-relaxed">{para}</p>
            ))}
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f5a623] mt-1" />
                  <span className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="What We Deliver" title={p.capabilitiesHeading} subtitle={p.capabilitiesSub} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                  <c.icon className="h-6 w-6 stroke-[1.75]" />
                </span>
                <h3 className="mt-5 text-base sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="How It Works" title={p.processHeading} subtitle={p.processSub} />
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] border-t border-dashed border-slate-200 z-0" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {p.process.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-blue-600 shadow-sm group-hover:bg-[#071326] group-hover:border-[#071326] group-hover:text-[#f5a623] transition-all duration-300 z-10">
                    <h.icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div className="mt-6 rounded-xl bg-slate-50 p-6 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 w-full">
                    <div className="text-xs font-bold text-[#f5a623]">STEP {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-1 text-base font-bold text-[#071326] group-hover:text-blue-700 transition-colors">{h.title}</h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech / tools */}
      {p.tech && p.tech.length > 0 && (
        <section className="py-20 bg-[#071326] text-white relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#f5a623]/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f5a623] mb-3">{p.techHeading ?? "Tools & Technologies"}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Expertise Across the Modern Stack</h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {p.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="rounded-full bg-white/5 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-[#f5a623] transition-all"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection image={p.ctaImage} />
    </>
  );
}
