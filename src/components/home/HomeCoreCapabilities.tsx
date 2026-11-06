import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Monitor, Users, Globe } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export function HomeCoreCapabilities() {
  const capabilities = [
    {
      title: "Technology & AI",
      desc: "Specialist expertise across AI, data, cloud and digital engineering, aligned to defined business use cases.",
      to: "/services/ai",
      icon: Layers,
    },
    {
      title: "Enterprise Platforms",
      desc: "Talent and delivery support across selected enterprise platforms, based on verified capability and project requirements.",
      to: "/services/enterprise-applications",
      icon: Monitor,
    },
    {
      title: "Workforce Solutions",
      desc: "Contract staffing, permanent hiring and managed workforce models for specialist and hard-to-find skills.",
      to: "/services/staffing",
      icon: Users,
    },
    {
      title: "GCC Solutions",
      desc: "Talent and workforce support for organisations building, expanding or transforming Global Capability Centres.",
      to: "/gcc",
      icon: Globe,
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

        {/* 4 Interactive Floating Cards in 1 Row across Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
