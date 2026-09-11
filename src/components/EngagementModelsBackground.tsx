import React from "react";
import bgEngagementModels from "@/assets/bg-engagement-models.jpg";

/**
 * EngagementModelsBackground
 * Uses the custom glass crystal modular rings background (bg-engagement-models.jpg)
 * framed specifically for the Engagement Models section with soft edge blending.
 */
export function EngagementModelsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      <img
        src={bgEngagementModels}
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
