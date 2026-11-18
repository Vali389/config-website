import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
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
    <section className="py-8 lg:py-10 bg-white border-b border-slate-200/80">
      <div className="container-enterprise">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OFFICIAL CERTIFICATIONS & COMPLIANCE
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
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

        {/* 5 Compact Certification Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <FadeUp key={cert.name} delay={index * 0.06}>
              <div className="group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full text-center overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20">
                <div className="flex h-20 sm:h-24 w-full items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
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
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
