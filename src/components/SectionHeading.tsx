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
      className={`${maxWidth} ${align === "center" ? "mx-auto text-center" : "border-l-[3px] border-[#f5a623] pl-3.5"}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2 ${
            align === "center" ? "justify-center" : ""
          } ${eyebrowColor ? eyebrowColor : "text-[#f5a623]"}`}
        >
          {align === "center" && (
            <span
              className={`h-px w-6 ${
                eyebrowColor ? eyebrowColor.replace("text-", "bg-") : "bg-[#f5a623]"
              }`}
            />
          )}
          {eyebrow}
          {align === "center" && (
            <span
              className={`h-px w-6 ${
                eyebrowColor ? eyebrowColor.replace("text-", "bg-") : "bg-[#f5a623]"
              }`}
            />
          )}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-[2.35rem] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-[#071326]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 text-sm sm:text-base leading-relaxed ${
            align === "center" ? "text-center" : ""
          } ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
