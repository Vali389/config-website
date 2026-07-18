/**
 * Ambient combination of rising bubbles (translucent rings) and tiny particles
 * drifting up a section. Drop into a `position: relative; overflow: hidden`
 * section, behind the content. Decorative, aria-hidden, no pointer events.
 * Positions/timings are hard-coded for SSR-safe (deterministic) rendering.
 */
const GLOW = "rgba(96,165,250,";
const IND = "rgba(129,140,248,";
const PUR = "rgba(167,139,250,";

const BUBBLES = [
  { left: "6%", dur: 10, delay: 0, size: 30, c: GLOW },
  { left: "18%", dur: 13, delay: 2.5, size: 18, c: IND },
  { left: "29%", dur: 9, delay: 1.2, size: 24, c: GLOW },
  { left: "44%", dur: 14, delay: 3.5, size: 34, c: PUR },
  { left: "57%", dur: 11, delay: 0.6, size: 16, c: GLOW },
  { left: "68%", dur: 12, delay: 2.0, size: 26, c: IND },
  { left: "80%", dur: 9.5, delay: 4.0, size: 20, c: GLOW },
  { left: "91%", dur: 13.5, delay: 1.6, size: 28, c: PUR },
];

const TINY = [
  { left: "10%", dur: 7, delay: 0.4, size: 3, c: GLOW },
  { left: "22%", dur: 6, delay: 1.8, size: 2, c: PUR },
  { left: "34%", dur: 8, delay: 0.9, size: 3, c: IND },
  { left: "47%", dur: 6.5, delay: 2.6, size: 2, c: GLOW },
  { left: "60%", dur: 7.5, delay: 1.1, size: 4, c: GLOW },
  { left: "73%", dur: 6.2, delay: 3.0, size: 2, c: IND },
  { left: "85%", dur: 8.2, delay: 0.7, size: 3, c: PUR },
  { left: "95%", dur: 6.8, delay: 2.2, size: 2, c: GLOW },
];

export function Bubbles({ direction = "up" }: { direction?: "up" | "down" }) {
  const anim = direction === "down" ? "animate-bubble-fall" : "animate-bubble";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {BUBBLES.map((b, i) => (
        <span
          key={`b${i}`}
          className={`absolute rounded-full ${anim}`}
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            border: `1px solid ${b.c}0.35)`,
            background: `${b.c}0.06)`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
      {TINY.map((t, i) => (
        <span
          key={`t${i}`}
          className={`absolute rounded-full ${anim}`}
          style={{
            left: t.left,
            width: `${t.size}px`,
            height: `${t.size}px`,
            background: `${t.c}0.6)`,
            animationDuration: `${t.dur}s`,
            animationDelay: `${t.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
