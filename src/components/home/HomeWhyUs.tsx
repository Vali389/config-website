import { Users, Sliders, Globe2, ShieldCheck } from "lucide-react";
import whoWeAreMeeting from "@/assets/why_us_western_team.jpg";
import { FadeUp } from "@/components/FadeUp";

export function HomeWhyUs() {
  const points = [
    {
      title: "Specialized Talent Access",
      desc: "Focused talent access for specialized technology, platform engineering and AI initiatives.",
      icon: Users,
    },
    {
      title: "Flexible Engagement Models",
      desc: "Contract staffing, dedicated pods, statement-of-work, and managed delivery.",
      icon: Sliders,
    },
    {
      title: "Dual-Engine Reach",
      desc: "Onshore North American leadership paired with offshore engineering scale in India.",
      icon: Globe2,
    },
    {
      title: "Structured Delivery Governance",
      desc: "Transparent milestone accountability, strict SLA adherence, and zero IP friction.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-slate-200/80">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Kicker & 4 Themed Structured Cards */}
          <FadeUp className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHY CONFIGUSA
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Built for disciplined enterprise execution.
              </h2>
            </div>

            <div className="space-y-3">
              {points.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:bg-white hover:border-[#245B91] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:rounded-l-xl cursor-default"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-2xs mt-0.5">
                    <item.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#102B4E] tracking-tight group-hover:text-[#245B91] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right Column: Photography with subtle hover zoom & executive badge */}
          <FadeUp delay={0.15} className="lg:col-span-6 h-full">
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-end">
              <img
                src={whoWeAreMeeting}
                alt="Why ConfigUSA Enterprise Team Collaboration"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B4E]/80 via-[#102B4E]/20 to-transparent pointer-events-none" />

              {/* Floating Executive Trust Badge */}
              <div className="relative z-10 m-4 sm:m-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-xs sm:text-sm font-extrabold text-[#102B4E] tracking-tight">
                        Enterprise Delivery & Governance
                      </p>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
                      North American Leadership · Global Engineering Scale
                    </p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#C83B43] border border-red-100">
                    <ShieldCheck className="h-4 w-4 stroke-[2]" />
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
