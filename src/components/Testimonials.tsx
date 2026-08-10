import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const T = [
  {
    name: "HR Director",
    role: "Global Technology Company",
    quote: "ConfigUSA consistently delivers quality candidates faster than expected. Their AI recruitment platform and responsiveness have made them a trusted hiring partner.",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, FinLedger",
    quote: "ConfigUSA transformed our entire tech backbone. Their consultants integrated seamlessly and delivered measurable outcomes within the first quarter.",
  },
  {
    name: "Rajiv Menon",
    role: "VP Engineering, HealthPulse",
    quote: "The staffing quality is unmatched. Every candidate we've hired through ConfigUSA's AI vetting has stayed and grown with us long-term.",
  },
  {
    name: "Emily Zhang",
    role: "Head of HR, RetailNova",
    quote: "Their AI-powered assessments cut our hiring time in half while raising the bar on quality. Truly a strategic transformation partner.",
  },
  {
    name: "Marcus Reid",
    role: "COO, LogiChain",
    quote: "From SAP rollout to custom software builds, ConfigUSA has been our go-to for anything complex. Premium service, always.",
  },
  {
    name: "Aisha Patel",
    role: "Director of Digital, Astra Bank",
    quote: "Reliable, responsive, and deeply technical. ConfigUSA feels like an extension of our own team.",
  },
  {
    name: "David Kohler",
    role: "CEO, VertexBuild",
    quote: "We doubled our engineering capacity in 90 days with zero drop in quality using their AI talent matching. Exceptional.",
  },
];

export function Testimonials() {
  const loop = [...T, ...T];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#0d1b33] text-white overflow-hidden border-t border-blue-900/30"
    >
      {/* Glow effect behind section header */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Leaders Across Industries
          </h2>
          <p className="mt-4 text-white/70 text-sm md:text-base">
            See how ConfigUSA helps enterprise leaders build high-performing engineering and AI teams.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d1b33] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d1b33] to-transparent z-10" />

        {/* Marquee autoscrolls ONLY when section is in view */}
        <div
          className={`flex gap-6 w-max ${isInView ? "animate-marquee" : ""
            } hover:[animation-play-state:paused] px-4`}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[360px] md:w-[400px] group flex flex-col items-center mt-12 pb-6"
            >
              {/* Card body */}
              <div className="relative bg-gradient-to-br from-[#1e325c] via-[#152545] to-[#0c162c] rounded-[2.5rem] rounded-tl-none rounded-br-none border border-blue-400/20 p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:border-blue-400/50 group-hover:shadow-[0_16px_40px_rgba(59,130,246,0.25)] transition-all duration-300 z-10 w-full mb-6 flex flex-col justify-between min-h-[260px]">
                {/* Floating Top Icon (Quote) */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_24px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_36px_rgba(99,102,241,0.8)] group-hover:scale-110 transition-transform duration-300 border-4 border-[#0d1b33]">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-2 flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-white/90 leading-relaxed text-center font-normal flex-1 pb-4">
                  "{t.quote}"
                </p>

                {/* Downward pointing arrow using a rotated square to ensure visibility and matching border */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0c162c] border-b border-r border-blue-400/20 rotate-45 z-0" />
              </div>

              {/* Bottom Floating Avatar and Info */}
              <div className="relative z-20 flex flex-col items-center group-hover:-translate-y-2 transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#0d1b33] shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden mb-3 bg-gradient-brand">
                   <span className="relative z-10 text-white font-black text-xl">{t.name.charAt(0)}</span>
                </div>
                <div className="text-center">
                  <div className="font-extrabold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-blue-300 font-medium mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
