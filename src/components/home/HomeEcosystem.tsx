import { FadeUp } from "@/components/FadeUp";

const PLATFORM_ECOSYSTEM = [
  { name: "MICROSOFT", role: "Cloud & Enterprise" },
  { name: "AWS", role: "Cloud Infrastructure" },
  { name: "SAP", role: "S/4HANA & ERP" },
  { name: "PALANTIR", role: "Foundry & AIP" },
  { name: "SALESFORCE", role: "CRM & Service Cloud" },
  { name: "ORACLE", role: "Cloud & Database" },
  { name: "GOOGLE CLOUD", role: "AI & Modern Data" },
  { name: "SNOWFLAKE", role: "Data Cloud" },
  { name: "CISCO", role: "Enterprise Security" },
  { name: "IBM", role: "Cognitive Systems" },
];

export function HomeEcosystem() {
  return (
    <section className="py-6 bg-[#0E2442] border-y border-white/10 text-white overflow-hidden">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C83B43] flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C83B43]" />
            Enterprise Platform Ecosystem & Capability Coverage
          </p>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
            Specialist workforce & delivery squads across leading architectures
          </span>
        </div>

        {/* Responsive Brand Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-1">
          {PLATFORM_ECOSYSTEM.map((brand) => (
            <div
              key={brand.name}
              className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#C83B43]/60 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col justify-center items-center text-center"
            >
              <div className="font-extrabold text-xs sm:text-[13px] tracking-wider text-slate-200 group-hover:text-white transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-slate-400 group-hover:text-blue-300 transition-colors mt-0.5">
                {brand.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

