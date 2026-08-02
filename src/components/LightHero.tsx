import type { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}

/**
 * Bright, premium page hero. When `image` is provided it sits behind a soft, light
 * overlay with a gentle zoom (ken-burns) — kept intentionally light, never deep-dark.
 */
export function LightHero({ eyebrow, title, subtitle, image, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50/50 to-white pt-36 pb-20">
      {/* Optional zooming background image with a bright wash */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/50 to-white/80" />
        </div>
      )}

      {/* Floating soft glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-red-300/10 blur-3xl" />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-4 lg:px-8 text-center"
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.12] tracking-tight [text-shadow:0_1px_22px_rgba(255,255,255,0.9)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed text-justify [text-shadow:0_1px_14px_rgba(255,255,255,0.85)]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
      </motion.div>
    </section>
  );
}
