import { HeartPulse, Landmark, Building2, Factory, ShoppingBag, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// "Trusted by Organizations Driving Innovation" — enterprise sectors ConfigUSA supports.
const SECTORS = [
  { label: "Healthcare", desc: "HIPAA-compliant health tech", icon: HeartPulse },
  { label: "Financial Services", desc: "Secure FinTech & Banking", icon: Landmark },
  { label: "Government", desc: "FedRAMP & Public Sector", icon: Building2 },
  { label: "Manufacturing", desc: "Industry 4.0 & IoT solutions", icon: Factory },
  { label: "Retail", desc: "Omnichannel & E-Commerce", icon: ShoppingBag },
  { label: "Technology", desc: "Cloud, AI & SaaS platforms", icon: Cpu },
];

export function TechTicker() {
  // 4x duplication ensures translateX(-50%) scrolls exactly 2 full sets with zero white space or gaps
  const loop = [...SECTORS, ...SECTORS, ...SECTORS, ...SECTORS];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white border-y border-border/60 py-8 overflow-hidden">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 lg:px-8"
      >
        <p className="text-center text-sm font-extrabold uppercase tracking-[0.28em] text-blue-700 mb-6">
          Trusted by Organizations Driving Innovation
        </p>

        <div className="relative flex overflow-hidden">
          {/* Subtle edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            className={`flex gap-5 animate-ticker w-max items-center py-2 hover:[animation-play-state:paused] ${
              inView ? "[animation-play-state:running]" : "[animation-play-state:paused]"
            }`}
          >
            {loop.map((s, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center shrink-0 w-48 rounded-2xl bg-gradient-to-b from-blue-50/90 to-white border border-blue-200/50 shadow-sm hover:shadow-glow hover:-translate-y-2 hover:scale-[1.03] hover:border-blue-400 transition-all duration-300 p-5 cursor-pointer"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm mb-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="text-sm font-bold text-ink whitespace-nowrap">
                  {s.label}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-red-600 leading-tight">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
