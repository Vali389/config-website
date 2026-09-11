import React from "react";
import bgHowWePartner from "@/assets/bg-redesign-clean-waves-how-we-partner.png";

/**
 * HowWePartnerBackground
 * Applies the custom glass crystal waves background (bg-redesign-clean-waves-how-we-partner.png)
 * for the How We Partner ("Your Journey With ConfigUSA") section.
 */
export function HowWePartnerBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      <img
        src={bgHowWePartner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Soft gradient blend for smooth edge transitions */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
    </div>
  );
}
