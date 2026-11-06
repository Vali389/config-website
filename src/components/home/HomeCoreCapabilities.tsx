import { Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Users, Globe2, CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export function HomeCoreCapabilities() {
  const capabilities = [
    {
      step: "01",
      title: "AI & Enterprise Engineering",
      desc: "AI solutions, enterprise software integration, cloud engineering, data engineering, and managed technology projects.",
      to: "/services/ai",
      icon: BrainCircuit,
      tags: [
        "AI Solutions & Machine Learning",
        "Enterprise Software Integration",
        "Cloud & Data Engineering",
        "Managed Technology Projects",
      ],
    },
    {
      step: "02",
      title: "Specialized Technology Talent",
      desc: "Contract staffing, permanent recruitment, technical recruiting, specialized technology professionals, and team augmentation.",
      to: "/services/staffing",
      icon: Users,
      tags: [
        "Contract Staffing & Extensions",
        "Permanent Recruitment",
        "Specialized Tech Professionals",
        "Engineering Team Augmentation",
      ],
    },
    {
      step: "03",
      title: "GCC & Global Workforce Solutions",
      desc: "GCC setup and expansion, global hiring, offshore delivery teams, workforce management, and managed delivery.",
      to: "/gcc",
      icon: Globe2,
      tags: [
        "GCC Setup & Expansion",
        "Global Hiring & BOT Delivery",
        "Offshore Engineering Pods",
        "Workforce Governance & Management",
      ],
    },
  ];

  return (
    <section className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                PRIMARY SERVICE OFFERINGS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>
            <Link
              to="/services"
              className="text-xs sm:text-sm font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              Explore All Capabilities <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeUp>

        {/* 3 Primary Offerings in 1 Row across Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {capabilities.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <Link
                to={item.to}
                className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 group overflow-hidden h-full before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-red-50 text-[#C83B43] border border-red-100/70 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <item.icon className="h-6 w-6 stroke-[1.75]" />
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#245B91]/10 group-hover:text-[#245B91] transition-colors">
                      Offering {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#102B4E] tracking-tight mb-3 group-hover:text-[#245B91] transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                    {item.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#245B91] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C83B43] group-hover:text-[#245B91] transition-colors inline-flex items-center gap-1.5">
                    Explore Capabilities
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:text-white group-hover:bg-[#C83B43] group-hover:border-[#C83B43] transition-all duration-200">
                    <ArrowRight className="h-3.5 w-3.5" />
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
