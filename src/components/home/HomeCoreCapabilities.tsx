import { Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Users, Globe2 } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export function HomeCoreCapabilities() {
  const capabilities = [
    {
      title: "AI & Enterprise Engineering",
      desc: "AI solutions, enterprise software integration, cloud engineering, data engineering, and managed technology projects.",
      to: "/services/ai",
      icon: BrainCircuit,
    },
    {
      title: "Specialized Technology Talent",
      desc: "Contract staffing, permanent recruitment, technical recruiting, specialized technology professionals, and team augmentation.",
      to: "/services/staffing",
      icon: Users,
    },
    {
      title: "GCC & Global Workforce Solutions",
      desc: "GCC setup and expansion, global hiring, offshore delivery teams, workforce management, and managed delivery.",
      to: "/gcc",
      icon: Globe2,
    },
  ];

  return (
    <section className="py-7 lg:py-9 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <FadeUp>
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
              OUR CORE CAPABILITIES
            </span>
            <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
          </div>
        </FadeUp>

        {/* 3 Simple Interactive Cards in 1 Row across Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <Link
                to={item.to}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 group overflow-hidden h-full before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <item.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2 group-hover:text-[#245B91] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 flex justify-end">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full text-[#C83B43] group-hover:text-white group-hover:bg-[#C83B43] transition-all duration-200">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
