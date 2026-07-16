import { HeartPulse, Landmark, Building2, Factory, ShoppingBag, Cpu } from "lucide-react";

// "Trusted by Organizations Driving Innovation" — enterprise sectors ConfigUSA supports.
const SECTORS = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Financial Services", icon: Landmark },
  { label: "Government", icon: Building2 },
  { label: "Manufacturing", icon: Factory },
  { label: "Retail", icon: ShoppingBag },
  { label: "Technology", icon: Cpu },
];

export function TechTicker() {
  const loop = [...SECTORS, ...SECTORS, ...SECTORS];

  return (
    <section className="bg-white border-y border-border/60 py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-brand mb-6">
          Trusted by Organizations Driving Innovation
        </p>

        <div className="relative flex overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-12 animate-ticker w-max items-center hover:[animation-play-state:paused]">
            {loop.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2.5 shrink-0 text-ink/50">
                <s.icon className="h-5 w-5 text-brand/70 shrink-0" strokeWidth={2} />
                <span className="text-sm font-bold uppercase tracking-[0.14em] whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Supporting enterprise organizations across{" "}
          <span className="font-semibold text-ink">
            Healthcare, Financial Services, Government, Manufacturing, Retail, and Technology.
          </span>
        </p>
      </div>
    </section>
  );
}
