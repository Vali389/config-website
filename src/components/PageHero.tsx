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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </section>
  );
}
