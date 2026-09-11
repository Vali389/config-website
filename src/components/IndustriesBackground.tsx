import React from "react";
import bgIndustriesSection from "@/assets/bg-indutries-section.jpeg";

/**
 * IndustriesBackground
 * Uses the custom fluid wave background (bg-indutries-section.jpeg)
 * for the Industries section with seamless edge blending.
 */
export function IndustriesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      <img
        src={bgIndustriesSection}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Soft edge blending for seamless transitions */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
    </div>
  );
}
