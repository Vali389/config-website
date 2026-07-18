/**
 * Ambient particles drifting right-to-left across a section. Drop into a
 * `position: relative; overflow: hidden` section, behind the content.
 * Decorative, aria-hidden, no pointer events. Hard-coded positions/timings
 * for SSR-safe (deterministic) rendering.
 */
const GLOW = "rgba(96,165,250,";
const IND = "rgba(129,140,248,";
const PUR = "rgba(167,139,250,";

const PARTICLES = [
  { top: "8%", dur: 12, delay: 0, size: 4, c: GLOW },
  { top: "16%", dur: 15, delay: 3.0, size: 2, c: IND },
  { top: "24%", dur: 10, delay: 1.4, size: 3, c: GLOW },
  { top: "33%", dur: 14, delay: 4.2, size: 5, c: PUR },
  { top: "41%", dur: 11, delay: 0.8, size: 2, c: GLOW },
  { top: "49%", dur: 13, delay: 2.6, size: 3, c: IND },
  { top: "57%", dur: 9.5, delay: 5.0, size: 4, c: GLOW },
  { top: "65%", dur: 15.5, delay: 1.9, size: 2, c: PUR },
  { top: "72%", dur: 12.5, delay: 3.8, size: 3, c: GLOW },
  { top: "80%", dur: 10.5, delay: 0.5, size: 4, c: IND },
  { top: "88%", dur: 13.5, delay: 2.2, size: 2, c: GLOW },
  { top: "94%", dur: 11.5, delay: 4.6, size: 3, c: PUR },
];

export function DriftParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-drift-lr"
          style={{
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `${p.c}0.6)`,
            boxShadow: `0 0 ${p.size * 2}px ${p.c}0.5)`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
