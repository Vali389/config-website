import { motion } from "motion/react";

export function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`text-[0.825rem] font-extrabold uppercase tracking-[0.3em] mb-4 ${light ? "text-blue-300" : "text-brand"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-[2.1rem] font-extrabold leading-tight tracking-tight lg:whitespace-nowrap ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
