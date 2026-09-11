import React from "react";
import aiAdvantageBg from "@/assets/ai-advantge-bg-section.jpeg";

/**
 * AIAdvantageBackground
 * Uses the custom AI wave background (ai-advantge-bg-section.jpeg)
 * with edge blending for seamless transitions.
 */
export function AIAdvantageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      <img
        src={aiAdvantageBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Subtle edge softening */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950/20 to-transparent" />
    </div>
  );
}
