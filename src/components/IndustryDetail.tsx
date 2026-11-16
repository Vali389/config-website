import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";
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
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Navy Blue Hero Section (Exact Edge-to-Edge Right-Image Pattern)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden bg-[#102B4E] text-white pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={p.heroImage}
            alt={p.eyebrow}
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/85 via-35% sm:via-42% to-transparent sm:to-65% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#102B4E]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full my-auto py-4">
          <div className="max-w-xl lg:max-w-[560px] xl:max-w-[620px] space-y-6 text-left">
            {/* Eyebrow with small red line matching About & other core pages */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                {p.eyebrow}
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold leading-[1.16] tracking-tight text-white">
              {p.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {p.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                hash="enquiry-form"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Discuss Industry Requirements <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                All Industries <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="pt-2 border-l-2 border-[#C83B43] pl-3.5 text-xs tracking-wide text-slate-300">
              Enterprise Technology, Workforce & Managed Delivery Partner
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 lg:py-10 bg-white overflow-hidden border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/10 opacity-60 blur-2xl" />
            <img src={p.overviewImage} alt={p.overviewHeading || "Industry overview"} className="relative rounded-2xl shadow-card border border-slate-200/80 w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-[3px] border-[#C83B43] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#245B91] mb-1">{p.overviewLabel}</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#102B4E] leading-tight tracking-tight">{p.overviewHeading}</h2>
            </div>
            {p.overviewParas.map((para, i) => (
              <p key={i} className="mt-4 text-slate-600 leading-relaxed">{para}</p>
            ))}
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#245B91] mt-1" />
                  <span className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-8 lg:py-10 bg-slate-50 border-b border-slate-200/60">
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
                className="group rounded-2xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 border border-red-100/70 text-[#C83B43] group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                  <c.icon className="h-6 w-6 stroke-[1.75]" />
                </span>
                <h3 className="mt-5 text-base sm:text-[17px] font-bold text-[#102B4E] group-hover:text-blue-700 transition-colors leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 lg:py-10 bg-white border-b border-slate-200/60">
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 border border-red-100 text-[#C83B43] shadow-sm group-hover:bg-[#C83B43] group-hover:border-[#C83B43] group-hover:text-white group-hover:scale-105 transition-all duration-300 z-10">
                    <h.icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div className="mt-6 rounded-2xl bg-slate-50 p-6 border border-slate-200/80 hover:bg-white hover:border-[#245B91] hover:-translate-y-1 hover:shadow-md transition-all duration-300 w-full">
                    <div className="text-xs font-bold text-[#C83B43] uppercase tracking-wider">STEP {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-1 text-base font-bold text-[#102B4E] group-hover:text-[#245B91] transition-colors">{h.title}</h3>
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
        <section className="py-8 lg:py-10 bg-[#102B4E] text-white relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#245B91]/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#245B91] mb-3">{p.techHeading ?? "Tools & Technologies"}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Expertise Across the Modern Stack</h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {p.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="rounded-full bg-white/5 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-[#245B91] transition-all"
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
