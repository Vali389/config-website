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
      className="relative py-24 bg-[#050c18] text-white overflow-hidden border-t border-blue-900/30"
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050c18] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050c18] to-transparent z-10" />

        {/* Marquee autoscrolls ONLY when section is in view */}
        <div
          className={`flex gap-6 w-max ${
            isInView ? "animate-marquee" : ""
          } hover:[animation-play-state:paused] px-4`}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[360px] md:w-[400px] rounded-3xl bg-gradient-to-br from-[#0b172a] via-[#091325] to-[#040a17] p-7 border border-blue-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-blue-400/50 hover:shadow-[0_20px_45px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400">
                    <Quote className="h-5 w-5" />
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm md:text-base text-white/90 leading-relaxed text-justify font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white font-black text-base shadow-glow">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-blue-300 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
