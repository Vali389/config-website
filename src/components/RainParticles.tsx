/**
 * Continuous ambient "rain" of thin streaks falling down a section. Drop it as
 * the first child of a `position: relative; overflow: hidden` section, behind
 * the content. Purely decorative — aria-hidden, no pointer events.
 *
 * Positions/timings are hard-coded (not random) so server and client render
 * identically and there's no hydration mismatch.
 */
const BLUE = "rgba(96,165,250,0.55)";
const INDIGO = "rgba(129,140,248,0.5)";
const PURPLE = "rgba(167,139,250,0.5)";

const DROPS = [
  { left: "4%", dur: 3.4, delay: 0, w: 2, h: 18, c: BLUE },
  { left: "9%", dur: 2.6, delay: 1.1, w: 1, h: 12, c: INDIGO },
  { left: "15%", dur: 4.1, delay: 0.4, w: 2, h: 22, c: BLUE },
  { left: "20%", dur: 3.0, delay: 2.0, w: 1, h: 10, c: PURPLE },
  { left: "26%", dur: 3.7, delay: 0.9, w: 2, h: 16, c: BLUE },
  { left: "31%", dur: 2.4, delay: 1.6, w: 1, h: 12, c: INDIGO },
  { left: "37%", dur: 4.4, delay: 0.2, w: 2, h: 20, c: BLUE },
  { left: "42%", dur: 3.2, delay: 2.4, w: 1, h: 11, c: PURPLE },
  { left: "48%", dur: 2.8, delay: 0.7, w: 2, h: 15, c: BLUE },
  { left: "53%", dur: 3.9, delay: 1.9, w: 1, h: 13, c: INDIGO },
  { left: "59%", dur: 2.5, delay: 0.5, w: 2, h: 18, c: BLUE },
  { left: "64%", dur: 4.2, delay: 1.3, w: 1, h: 10, c: PURPLE },
  { left: "70%", dur: 3.1, delay: 2.7, w: 2, h: 21, c: BLUE },
  { left: "75%", dur: 2.7, delay: 0.3, w: 1, h: 12, c: INDIGO },
  { left: "81%", dur: 3.6, delay: 1.5, w: 2, h: 16, c: BLUE },
  { left: "86%", dur: 2.3, delay: 2.2, w: 1, h: 11, c: PURPLE },
  { left: "91%", dur: 4.0, delay: 0.8, w: 2, h: 19, c: BLUE },
  { left: "96%", dur: 3.3, delay: 1.8, w: 1, h: 13, c: INDIGO },
];

export function RainParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {DROPS.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-rain-drop"
          style={{
            left: d.left,
            width: `${d.w}px`,
            height: `${d.h}px`,
            background: d.c,
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
