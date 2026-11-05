import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Monitor, Users, Globe } from "lucide-react";

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
    <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
            OUR CORE CAPABILITIES
          </span>
          <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
        </div>

        {/* 4 Interactive Floating Cards in 1 Row across Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#245B91] transition-colors duration-300" />

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

              <div className="mt-6 flex justify-end">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-[#C83B43] group-hover:bg-red-50 group-hover:text-[#245B91] transition-colors duration-200">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
