import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Client logos extracted from Slide 11 of ConfigUSA Merged Deck 2.0
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

const CLIENT_LOGOS = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21
];

interface TechTickerProps {
  title?: string;
  className?: string;
}

export function TechTicker({
  title = "OUR CLIENTS — TRUSTED BY GOVERNMENT & ENTERPRISE",
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`bg-gradient-to-r from-[#f8fafc] via-[#edf4fc] to-[#f8fafc] border-y border-blue-100/80 py-8 sm:py-10 overflow-hidden ${className}`}>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 lg:px-8"
      >
        <p className="text-center text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] text-blue-700 mb-6 sm:mb-8">
          {title}
        </p>

        <div className="relative flex overflow-hidden">
          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#f8fafc] via-[#edf4fc]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#f8fafc] via-[#edf4fc]/80 to-transparent z-10" />

          <div
            className={`flex gap-5 sm:gap-6 w-max items-center py-2 hover:[animation-play-state:paused] ${inView ? "animate-ticker" : ""
              }`}
          >
            {loop.map((logo, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-center shrink-0 w-48 sm:w-56 h-24 sm:h-28 rounded-2xl sm:rounded-3xl bg-white border border-blue-200/80 shadow-card hover:shadow-elegant hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 px-5 py-4 cursor-pointer overflow-hidden"
              >
                <img
                  src={logo}
                  alt="ConfigUSA Client Partner"
                  loading="lazy"
                  className="max-h-14 sm:max-h-16 max-w-[150px] sm:max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
