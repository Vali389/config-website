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
 * are aria-hidden. Words are wrapped in inline-block to prevent word-break across lines.
 */
export function SplitText({ text, className, delay = 0, stagger = 0.035 }: SplitTextProps) {
  const words = text.split(" ");
  return (
    <span aria-label={text} className="inline">
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.26em] last:mr-0">
          {Array.from(word).map((ch, j) => (
            <motion.span
              key={j}
              aria-hidden="true"
              className={`inline-block will-change-transform ${className ?? ""}`}
              initial={{ opacity: 0, y: "0.4em" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: delay + (i * 5 + j) * stagger, ease: "easeOut" }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
