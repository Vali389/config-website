import { motion } from "motion/react";

interface SplitTextProps {
  text: string;
  className?: string;
  /** Seconds before the first letter starts. */
  delay?: number;
  /** Seconds between each letter. */
  stagger?: number;
}

/**
 * Reveals a string one letter at a time (fade + rise). The full string is kept
 * in aria-label so screen readers announce it normally; the per-letter spans
 * are aria-hidden.
 */
export function SplitText({ text, className, delay = 0, stagger = 0.035 }: SplitTextProps) {
  const letters = Array.from(text);
  return (
    <span aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className={`inline-block whitespace-pre will-change-transform ${className ?? ""}`}
          initial={{ opacity: 0, y: "0.4em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, delay: delay + i * stagger, ease: "easeOut" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
