import React from "react";
import whoWeAreBg from "@/assets/who-we-are-bg.jpeg";

/**
 * WhoWeAreBackground
 * Uses the custom background image with soft edge blending
 * for seamless integration and maximum readability.
 */
export function WhoWeAreBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      <img
        src={whoWeAreBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Soft gradient blend at bottom for seamless continuity into What We Do */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#f3f7fd]/20 to-[#f3f7fd]/50" />
    </div>
  );
}
