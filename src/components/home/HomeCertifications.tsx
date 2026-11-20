import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certNmsdc from "@/assets/NMSDC-logo.jpeg";
import certEverify from "@/assets/cert-everify.png";

const CERTIFICATIONS = [
  {
    image: certMwbe,
    name: "M/WBE",
    label: "Minority/Woman-Owned Business Enterprise",
  },
  {
    image: certSbe,
    name: "SBE",
    label: "Small Business Enterprise Certified",
  },
  {
    image: certSam,
    name: "SAM",
    label: "SAM Registered — FedBiz Access",
  },
  {
    image: certNmsdc,
    name: "NMSDC",
    label: "National Minority Supplier Development Council Certified",
  },
  {
    image: certEverify,
    name: "E-Verify",
    label: "E-Verify Employer",
  },
];

export function HomeCertifications() {
  return (
    <section className="py-8 lg:py-10 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="container-enterprise">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OFFICIAL CERTIFICATIONS & COMPLIANCE
                </span>
                <span className="w-8 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-snug">
                Verified credentials built on compliance, trust and quality.
              </h2>
            </div>
            <Link
              to="/about"
              hash="commitment"
              className="text-xs sm:text-sm font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              All Certifications & Standards <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeUp>
      </div>

      {/* Auto-scrolling infinite marquee strip with edge fades */}
      <div className="relative flex overflow-hidden py-2">
        {/* Edge fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="flex gap-4 sm:gap-6 w-max items-center py-2 animate-marquee hover:[animation-play-state:paused]">
          {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
            <Link
              key={`${cert.name}-${idx}`}
              to="/about"
              hash="commitment"
              className="group relative overflow-hidden w-56 sm:w-64 h-[210px] sm:h-[230px] shrink-0 flex flex-col items-center justify-between text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#245B91] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity"
            >
              <div className="flex h-24 sm:h-28 w-full items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cert.image}
                  alt={`${cert.name} certification`}
                  loading="lazy"
                  className={
                    cert.name === "NMSDC"
                      ? "h-16 sm:h-20 w-auto max-w-full object-contain scale-110 drop-shadow-xs"
                      : "max-h-16 sm:max-h-20 max-w-full object-contain"
                  }
                />
              </div>
              <div className="pt-2 border-t border-slate-100 w-full space-y-1">
                <h3 className="text-sm sm:text-base font-extrabold text-[#102B4E] group-hover:text-[#245B91] transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight line-clamp-2">
                  {cert.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
