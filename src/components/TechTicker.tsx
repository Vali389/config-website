import React from "react";
import { GitBranch, Cloud, Cpu, Server, Terminal, Shield } from "lucide-react";

// Customized high-fidelity tech items matching the user's reference styling
const TECH_ITEMS = [
  {
    label: "Terraform",
    icon: () => (
      <div className="w-3 h-3 rotate-45 bg-blue-500 shadow-sm shrink-0 animate-pulse" />
    )
  },
  {
    label: "Ansible",
    icon: () => (
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/10 text-[0.65rem] font-black text-amber-500">
        A
      </div>
    )
  },
  {
    label: "Git",
    icon: () => (
      <GitBranch className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={2.5} />
    )
  },
  {
    label: "AWS",
    icon: () => (
      <Cloud className="w-4 h-4 text-blue-400 shrink-0" strokeWidth={2.5} />
    )
  },
  {
    label: "Docker",
    icon: () => (
      <div className="w-3.5 h-3.5 bg-sky-400 rounded-sm shrink-0 flex items-center justify-center text-[0.6rem] font-bold text-slate-900 leading-none">
        D
      </div>
    )
  },
  {
    label: "Kubernetes",
    icon: () => (
      <Cpu className="w-4 h-4 text-blue-400 shrink-0 animate-spin-slow" strokeWidth={2.5} />
    )
  },
  {
    label: "Python",
    icon: () => (
      <Terminal className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={2.5} />
    )
  },
  {
    label: "Jenkins",
    icon: () => (
      <Server className="w-4 h-4 text-blue-400 shrink-0" strokeWidth={2.5} />
    )
  },
  {
    label: "Security",
    icon: () => (
      <Shield className="w-4 h-4 text-amber-400 shrink-0" strokeWidth={2.5} />
    )
  }
];

export function TechTicker() {
  const loop = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section className="bg-[#051124] py-6 overflow-hidden border-y border-white/5">
      <div className="relative flex">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#051124] to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#051124] to-transparent z-10" />

        <div className="flex gap-14 animate-ticker w-max hover:[animation-play-state:paused] items-center">
          {loop.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 shrink-0 px-2"
              >
                <Icon />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85 whitespace-nowrap">
                  {item.label}
                </span>
                <span className="ml-8 text-white/10 text-xs select-none">◆</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
