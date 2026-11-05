import { Calendar, Layers, Building2, TrendingUp } from "lucide-react";

export function HomeEvidence() {
  const stats = [
    {
      icon: Calendar,
      value: "16+",
      label: "Years of experience",
    },
    {
      icon: Layers,
      value: "300+",
      label: "Deployments",
    },
    {
      icon: Building2,
      value: "6+",
      label: "Client sectors",
      sublabel: "(e.g., Financial Services, Healthcare, Technology, Manufacturing)",
    },
    {
      icon: TrendingUp,
      value: "60%",
      label: "Faster time to value",
      sublabel: "(verified delivery outcome)",
    },
  ];

  return (
    <section className="section-padding bg-[#EFF2F6] border-y border-slate-200">
      <div className="container-enterprise">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
            EVIDENCE OF DELIVERY
          </span>
          <span className="w-10 h-[3px] bg-[#C83B43]" />
        </div>

        {/* 4 Stat Tiles with Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-300/80 bg-white rounded-xl border border-slate-200/90 shadow-xs py-2">
          {stats.map((s) => (
            <div key={s.label} className="p-4 sm:px-6 flex items-start gap-4">
              <span className="text-[#C83B43] mt-1 shrink-0">
                <s.icon className="h-6 w-6 stroke-[1.75]" />
              </span>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">
                  {s.label}
                </div>
                {s.sublabel && (
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {s.sublabel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
