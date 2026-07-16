import { motion } from "motion/react";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, image, align = "center", children }: Props) {
  return (
    <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#051124]">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-kenburns" />
        {/* Balanced overlay — image stays visible, text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/55 to-navy-deep/80" />
        <div className="absolute inset-0 bg-navy-deep/25" />
      </div>
      {/* Soft brand glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-glow/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative z-10 mx-auto max-w-4xl px-4 lg:px-8 ${align === "center" ? "text-center" : "text-left"}`}
      >
        {eyebrow && (
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-brand-glow mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </section>
  );
}
