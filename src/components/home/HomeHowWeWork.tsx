import { Search, Sliders, Users, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export function HomeHowWeWork() {
  const steps = [
    { icon: Search, text: "Understand the requirement", step: "01" },
    { icon: Sliders, text: "Align the talent or delivery model", step: "02" },
    { icon: Users, text: "Identify and assess capability", step: "03" },
    { icon: Rocket, text: "Mobilise the team", step: "04" },
    { icon: BarChart3, text: "Review delivery and continuously improve", step: "05" },
  ];

  return (
    <section className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <FadeUp>
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
              HOW WE WORK
            </span>
            <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
          </div>
        </FadeUp>

        {/* 5-Step Interactive Flow with Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => (
            <FadeUp key={step.text} delay={idx * 0.08}>
              <div className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:border-[#245B91] hover:shadow-lg transition-all duration-300 h-full before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20">
                <span className="absolute top-3 right-3 text-[11px] font-bold text-slate-300 group-hover:text-[#C83B43] transition-colors">
                  {step.step}
                </span>

                <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-3.5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <step.icon className="h-6 w-6 stroke-[1.75]" />
                </span>

                <p className="text-xs sm:text-[13.5px] font-bold text-[#102B4E] leading-snug group-hover:text-[#245B91] transition-colors duration-200 max-w-[150px]">
                  {step.text}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-[#C83B43] transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
