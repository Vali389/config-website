import { Quote, Sparkles, Building2 } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

const TESTIMONIALS = [
  {
    quote:
      "ConfigUSA consistently delivers quality candidates faster than expected. Their technical evaluation process and responsiveness have made them a trusted hiring partner for our multi-region teams.",
    author: "HR Director",
    role: "Global Enterprise Technology Company",
    sector: "Technology Infrastructure",
  },
  {
    quote:
      "ConfigUSA transformed our engineering delivery cadence. Their forward-deployed consultants integrated seamlessly into our squads and delivered measurable progress within the first quarter.",
    author: "Sarah Mitchell",
    role: "Chief Technology Officer",
    sector: "Fintech & Digital Banking",
  },
  {
    quote:
      "The engineering quality and retention are unmatched. Every specialist engineer deployed through ConfigUSA has stayed, ramped up fast, and become integral to our core cloud transformation.",
    author: "Rajiv Menon",
    role: "VP Engineering",
    sector: "Healthcare & Life Sciences",
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-8 lg:py-10 bg-[#0E2442] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, oklch(0.74 0.14 82 / 0.35), transparent 50%), radial-gradient(circle at 20% 80%, oklch(0.36 0.10 265 / 0.4), transparent 50%)",
        }}
      />

      <div className="container-enterprise relative z-10">
        <FadeUp>
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#C83B43]">
                EXECUTIVE PERSPECTIVES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Trusted by leaders delivering critical business initiatives.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
              Verified feedback from technology executives on partnership, talent quality and delivery governance.
            </p>
          </div>
        </FadeUp>

        {/* 3 Interactive Cards in 1 Row across Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <FadeUp key={t.author} delay={index * 0.1}>
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C83B43]/70 hover:bg-white/[0.07] p-7 transition-all duration-300 flex flex-col justify-between h-full relative group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="h-8 w-8 text-[#C83B43] opacity-80" />
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 text-blue-200 border border-white/10">
                      <Sparkles className="h-3 w-3 text-[#C83B43]" />
                      Verified Partner
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-bold text-sm text-white group-hover:text-blue-200 transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <Building2 className="h-3 w-3 text-slate-500" />
                    <span>Sector: {t.sector}</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

