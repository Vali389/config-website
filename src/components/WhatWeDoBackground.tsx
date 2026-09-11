import React from "react";
import whatWeDoLatest from "@/assets/waht-we-do-latest.jpeg";

/**
 * WhatWeDoBackground
 * Uses the custom fluid wave ribbon background (waht-we-do-latest.jpeg)
 * with seamless edge blending for a modern, continuous enterprise flow.
 */
export function WhatWeDoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      <img
        src={whatWeDoLatest}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Soft gradient blend at top seamlessly connecting from Who We Are */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
      {/* Subtle blend at bottom into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
    </div>
  );
}
