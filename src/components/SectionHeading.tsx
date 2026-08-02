import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  maxWidth = "max-w-6xl",
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
        <p className={`text-[0.75rem] font-extrabold uppercase tracking-[0.3em] mb-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""} ${eyebrowColor ? eyebrowColor : (light ? "text-blue-300" : "text-brand")}`}>
          <span className={`h-px w-6 ${eyebrowColor ? eyebrowColor.replace("text-", "bg-") : (light ? "bg-blue-300" : "bg-brand")}`} />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${align === "center" ? "text-center" : "text-justify"} ${light ? "text-white/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
