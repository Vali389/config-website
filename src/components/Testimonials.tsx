import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Enterprise VP of Engineering",
    role: "Global Financial Services Firm",
    quote: "ConfigUSA delivered 12 senior full-stack and cloud architects in under 3 weeks. Their rigorous technical screening saved us hundreds of interview hours.",
  },
  {
    name: "Chief Information Officer",
    role: "Healthcare Systems Provider",
    quote: "The SAP S/4HANA migration team from ConfigUSA was exceptional. Zero downtime during cutover, and our operational reporting speed improved by 40%.",
  },
  {
    name: "Head of Digital Transformation",
    role: "Supply Chain & Logistics Giant",
    quote: "ConfigUSA's digital assessment identified operational bottlenecks we were completely blind to. Their recommendations delivered 3x ROI within 6 months.",
  },
  {
    name: "Director of Product Development",
    role: "SaaS Enterprise Platform",
    quote: "Their offshore engineering squad integrated seamlessly with our US product leads. Round-the-clock development velocity doubled our feature output.",
  },
  {
    name: "VP of People & Workforce",
    role: "Fintech Leader",
    quote: "Finding high-caliber AI and machine learning engineers seemed impossible until we partnered with ConfigUSA. Their talent pool quality is unparalleled.",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Duplicate testimonials array for continuous smooth scrolling marquee loop
  const loop = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

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
      className="relative py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80"
    >
      {/* Glow effect behind section header */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-100/60 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Leaders Across Industries
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base font-medium">
            See how ConfigUSA helps enterprise leaders build high-performing engineering and AI teams.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee autoscrolls ONLY when section is in view */}
        <div
          className={`flex gap-6 w-max ${
            isInView ? "animate-marquee" : ""
          } hover:[animation-play-state:paused] px-4`}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[360px] md:w-[400px] group flex flex-col items-center mt-12 pb-6"
            >
              {/* Card body */}
              <div className="relative bg-slate-50/90 rounded-[2.5rem] rounded-tl-none rounded-br-none border border-slate-200 p-8 text-center shadow-md group-hover:border-blue-300 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 z-10 w-full mb-6 flex flex-col justify-between min-h-[260px]">
                {/* Floating Top Icon (Quote) */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-2 flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-slate-700 leading-relaxed text-center font-medium flex-1 pb-4">
                  "{t.quote}"
                </p>

                {/* Downward pointing arrow */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-50 border-b border-r border-slate-200 rotate-45 z-0 group-hover:bg-white group-hover:border-blue-300 transition-colors" />
              </div>

              {/* Bottom Floating Avatar and Info */}
              <div className="relative z-20 flex flex-col items-center group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-md overflow-hidden mb-3 bg-gradient-brand">
                  <span className="relative z-10 text-white font-black text-xl">{t.name.charAt(0)}</span>
                </div>
                <div className="text-center">
                  <div className="font-extrabold text-sm text-slate-900">{t.name}</div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
