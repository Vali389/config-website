import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const T = [
  { name: "Sarah Mitchell", role: "CTO, FinLedger", quote: "ConfigUSA transformed our entire tech backbone. Their consultants integrated seamlessly and delivered measurable outcomes within the first quarter." },
  { name: "Rajiv Menon", role: "VP Engineering, HealthPulse", quote: "The staffing quality is unmatched. Every candidate we've hired through ConfigUSA has stayed and grown with us." },
  { name: "Emily Zhang", role: "Head of HR, RetailNova", quote: "Their AI-powered assessments cut our hiring time in half while raising the bar on quality. Truly a strategic partner." },
  { name: "Marcus Reid", role: "COO, LogiChain", quote: "From SAP rollout to custom software builds, ConfigUSA has been our go-to for anything complex. Premium service, always." },
  { name: "Aisha Patel", role: "Director of Digital, Astra Bank", quote: "Reliable, responsive, and deeply technical. ConfigUSA feels like an extension of our own team." },
  { name: "David Kohler", role: "CEO, VertexBuild", quote: "We doubled our engineering capacity in 90 days with zero drop in quality. Exceptional." },
];

export function Testimonials() {
  const loop = [...T, ...T];
  return (
    <section className="relative py-24 bg-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">What Our Clients Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Trusted by Leaders Across Industries</h2>
          <p className="mt-4 text-muted-foreground">See what our clients say about working with ConfigUSA.</p>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-soft to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-soft to-transparent z-10" />
        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((t, i) => (
            <div key={i} className="shrink-0 w-[380px] rounded-2xl bg-white p-7 shadow-card border border-border/50">
              <Quote className="h-8 w-8 text-brand/30" />
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-ink/80 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-white font-bold">{t.name.charAt(0)}</div>
                <div>
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
