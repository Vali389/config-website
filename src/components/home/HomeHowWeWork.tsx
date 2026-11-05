import { Search, Sliders, Users, Rocket, BarChart3, ArrowRight } from "lucide-react";

export function HomeHowWeWork() {
  const steps = [
    { icon: Search, text: "Understand the requirement" },
    { icon: Sliders, text: "Align the talent or delivery model" },
    { icon: Users, text: "Identify and assess capability" },
    { icon: Rocket, text: "Mobilise the team" },
    { icon: BarChart3, text: "Review delivery and continuously improve" },
  ];

  return (
    <section className="section-padding bg-white border-b border-[#e2e8f0]">
      <div className="container-enterprise">
        <div className="flex items-center gap-2.5 mb-10">
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
            HOW WE WORK
          </span>
          <span className="w-10 h-[3px] bg-[#C83B43]" />
        </div>

        {/* 5-Step Flow with Icons and Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.text}
              className="relative flex flex-col items-center text-center p-2"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-[#C83B43] border border-red-100/70 mb-3 shadow-xs">
                <step.icon className="h-6 w-6 stroke-[1.75]" />
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#102B4E] leading-snug max-w-[160px]">
                {step.text}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-6 text-slate-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
