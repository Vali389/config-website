import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Existing client logos extracted from ConfigUSA Merged Deck 2.0
import logo1 from "@/assets/clients/processed/client_logo_1.png";
import logo2 from "@/assets/clients/processed/client_logo_2.png";
import logo3 from "@/assets/clients/processed/client_logo_3.png";
import logo4 from "@/assets/clients/processed/client_logo_4.png";
import logo5 from "@/assets/clients/processed/client_logo_5.png";
import logo6 from "@/assets/clients/processed/client_logo_6.png";
import logo7 from "@/assets/clients/processed/client_logo_7.png";
import logo8 from "@/assets/clients/processed/client_logo_8.png";
import logo9 from "@/assets/clients/processed/client_logo_9.png";
import logo10 from "@/assets/clients/processed/client_logo_10.png";
import logo11 from "@/assets/clients/processed/client_logo_11.png";
import logo12 from "@/assets/clients/processed/client_logo_12.png";
import logo13 from "@/assets/clients/processed/client_logo_13.png";
import logo14 from "@/assets/clients/processed/client_logo_14.png";
import logo15 from "@/assets/clients/processed/client_logo_15.png";
import logo16 from "@/assets/clients/processed/client_logo_16.png";
import logo17 from "@/assets/clients/processed/client_logo_17.png";
import logo18 from "@/assets/clients/processed/client_logo_18.png";
import logo19 from "@/assets/clients/processed/client_logo_19.png";
import logo20 from "@/assets/clients/processed/client_logo_20.png";
import logo21 from "@/assets/clients/processed/client_logo_21.png";
import logo22 from "@/assets/clients/processed/client_logo_22.png";
import logo23 from "@/assets/clients/processed/client_logo_23.png";
import logo24 from "@/assets/clients/processed/client_logo_24.png";

const CLIENT_LOGOS = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24,
];

interface TechTickerProps {
  title?: string;
  className?: string;
}

export function TechTicker({
  title = "TRUSTED BY ENTERPRISE & PUBLIC-SECTOR ORGANIZATIONS",
  className = "",
}: TechTickerProps) {
  // 4x duplication ensures translateX(-50%) loops exactly 2 full sets with zero whitespace gap
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`bg-white border-y border-slate-100 py-8 sm:py-10 overflow-hidden ${className}`}>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 lg:px-8"
      >
        <p className="text-center text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#1b365d] mb-6 sm:mb-8">
          {title}
        </p>

        <div className="relative flex overflow-hidden">
          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div
            className={`flex gap-6 sm:gap-8 w-max items-center py-2 hover:[animation-play-state:paused] ${
              inView ? "animate-ticker" : ""
            }`}
          >
            {loop.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center shrink-0 h-12 sm:h-14 px-5 sm:px-7 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={logo}
                  alt="ConfigUSA Client Partner"
                  loading="lazy"
                  className="max-h-9 sm:max-h-11 max-w-[130px] sm:max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
