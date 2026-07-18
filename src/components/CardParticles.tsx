/**
 * Particles that animate out of a card on hover. Drop inside any element that
 * has the `group` class plus `position: relative` and `overflow-hidden`.
 *
 *  - variant="rise" (default): particles rise up and fade from the bottom.
 *  - variant="rain": particles fall like rain from the top.
 *
 * Colors use the brand theme combination (blue / indigo / purple). Purely
 * decorative, so it's aria-hidden and ignores pointer events.
 */
interface CardParticlesProps {
  variant?: "rise" | "rain";
}

const RISE = [
  { cls: "left-6 bottom-6 h-1.5 w-1.5 bg-brand/70", delay: "0s" },
  { cls: "left-[28%] bottom-8 h-1 w-1 bg-brand-glow/70", delay: "0.25s" },
  { cls: "left-1/2 bottom-5 h-2 w-2 bg-indigo-400/60", delay: "0.5s" },
  { cls: "right-[26%] bottom-9 h-1 w-1 bg-purple-400/60", delay: "0.75s" },
  { cls: "right-7 bottom-6 h-1.5 w-1.5 bg-brand-glow/60", delay: "0.4s" },
  { cls: "left-[42%] bottom-10 h-1 w-1 bg-brand/60", delay: "0.9s" },
];

const RAIN = [
  { cls: "left-6 top-3 h-1.5 w-1.5 bg-brand/70", delay: "0s" },
  { cls: "left-[24%] top-4 h-1 w-1 bg-brand-glow/70", delay: "0.3s" },
  { cls: "left-[44%] top-2 h-2 w-2 bg-indigo-400/60", delay: "0.6s" },
  { cls: "left-1/2 top-5 h-1 w-1 bg-purple-400/60", delay: "0.15s" },
  { cls: "right-[26%] top-3 h-1.5 w-1.5 bg-brand-glow/60", delay: "0.45s" },
  { cls: "right-8 top-4 h-1 w-1 bg-purple-400/55", delay: "0.8s" },
  { cls: "right-[40%] top-2 h-1 w-1 bg-brand/60", delay: "1s" },
];

export function CardParticles({ variant = "rise" }: CardParticlesProps) {
  const dots = variant === "rain" ? RAIN : RISE;
  const anim = variant === "rain" ? "group-hover:animate-particle-rain" : "group-hover:animate-particle";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full opacity-0 ${anim} ${p.cls}`}
          style={{ animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}
