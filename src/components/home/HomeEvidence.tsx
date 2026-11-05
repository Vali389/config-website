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
    <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="container-enterprise">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
            EVIDENCE OF DELIVERY
          </span>
          <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
        </div>

        {/* 4 Stat Tiles with Dividers and Interactive Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-xs py-2 overflow-hidden">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group p-5 sm:p-6 flex items-start gap-4 hover:bg-white transition-all duration-200 cursor-default"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mt-0.5 shrink-0 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                <s.icon className="h-5 w-5 stroke-[1.75]" />
              </span>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight group-hover:text-[#245B91] transition-colors duration-200">
                  {s.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
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
