import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  maxWidth = "max-w-3xl",
  eyebrowColor,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  maxWidth?: string;
  eyebrowColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${maxWidth} ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-3 flex items-center gap-2 ${align === "center" ? "justify-center" : ""} ${eyebrowColor ? eyebrowColor : (light ? "text-blue-300" : "text-blue-600")}`}>
          <span className={`h-px w-6 ${eyebrowColor ? eyebrowColor.replace("text-", "bg-") : (light ? "bg-blue-300" : "bg-blue-600")}`} />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${align === "center" ? "text-center" : ""} ${light ? "text-white/70" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
