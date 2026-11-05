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
    <section className="section-padding bg-white border-b border-[#e2e8f0]">
      <div className="container-enterprise">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
            OUR CORE CAPABILITIES
          </span>
          <span className="w-10 h-[3px] bg-[#C83B43]" />
        </div>

        {/* 4 Cards in 1 Row across Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group flex flex-col justify-between p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#245B91]/50 hover:shadow-md transition-all duration-200"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5">
                  <item.icon className="h-5 w-5 stroke-[1.75]" />
                </span>
                <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <ArrowRight className="h-4 w-4 text-[#C83B43] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
