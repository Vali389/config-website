import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Users, Code, Database, ClipboardCheck, Heart, Landmark, Building2, Factory, ShoppingCart, Cpu, BrainCircuit, Cloud, Boxes, LifeBuoy, FileText, BarChart3, Lightbulb, BookOpen, Search } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

const NAV = [
  {
    to: "/services",
    label: "Capabilities",
    children: [
      { to: "/services", label: "AI & Data", desc: "Generative AI & intelligent automation", icon: BrainCircuit },
      { to: "/services/software", label: "Digital Engineering", desc: "Modern apps & cloud-native platforms", icon: Code },
      { to: "/services/software", label: "Cloud & Infrastructure", desc: "Migration, DevOps & platform engineering", icon: Cloud },
      { to: "/services/enterprise-applications", label: "Enterprise Applications", desc: "SAP, Oracle, Salesforce & more", icon: Boxes },
      { to: "/services/staffing", label: "Workforce Solutions", desc: "Contract, permanent & managed talent", icon: Users },
      { to: "/services", label: "Managed Delivery", desc: "Dedicated onshore & offshore teams", icon: LifeBuoy },
    ],
  },
  {
    to: "/industries",
    label: "Industries",
    children: [
      { to: "/industries/financial", label: "Financial Services", desc: "Secure fintech & banking platforms", icon: Landmark },
      { to: "/industries/healthcare", label: "Healthcare", desc: "HIPAA-compliant digital health", icon: Heart },
      { to: "/industries/government", label: "Government", desc: "Public sector modernization", icon: Building2 },
      { to: "/industries/manufacturing", label: "Manufacturing", desc: "Industry 4.0 & smart factories", icon: Factory },
      { to: "/industries/retail", label: "Retail & Telecom", desc: "Scalable commerce & connectivity", icon: ShoppingCart },
      { to: "/industries/technology", label: "Technology", desc: "SaaS & cloud-native engineering", icon: Cpu },
    ],
  },
  {
    to: "/resources",
    label: "Insights",
    children: [
      { to: "/resources", label: "Perspectives", desc: "Expert viewpoints on technology", icon: Lightbulb },
      { to: "/resources", label: "Case Studies", desc: "Real outcomes for real organizations", icon: FileText },
      { to: "/resources", label: "Research", desc: "Data-driven industry analysis", icon: BarChart3 },
      { to: "/resources", label: "Workforce Intelligence", desc: "Talent trends & market insights", icon: BookOpen },
    ],
  },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "border-b border-slate-100"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to as any}
                className="relative flex items-center gap-1 px-3.5 py-2 text-[13px] rounded-lg border border-transparent transition-colors font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                activeProps={{ className: "text-blue-700 font-semibold border-blue-100 shadow-sm bg-blue-50/50" }}
                inactiveProps={{ className: "" }}
                activeOptions={{ exact: false }}
              >
                {item.label}
                {"children" in item && item.children && <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:rotate-180" />}
              </Link>
              {"children" in item && item.children && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`rounded-xl bg-white shadow-elegant border border-slate-200 p-3 backdrop-blur-sm ${item.children.length > 4 ? "w-[520px] grid grid-cols-2 gap-1" : "w-80 flex flex-col gap-0.5"}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.children.map((c, idx) => (
                      <motion.div
                        key={c.label}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          to={c.to as any}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-all group/item"
                          activeProps={{ className: "bg-blue-50 text-blue-700" }}
                          inactiveProps={{ className: "text-slate-600 hover:bg-slate-50 hover:text-blue-700" }}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-blue-600 group-hover/item:bg-blue-50 group-hover/item:text-blue-700 transition-colors mt-0.5">
                            <c.icon className="h-4 w-4" />
                          </span>
                          <div>
                            <span className="font-semibold text-[13px] block leading-tight">{c.label}</span>
                            <span className="text-xs text-slate-400 leading-snug block mt-0.5">{c.desc}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/resources"
            className="p-2 text-slate-500 hover:text-blue-700 transition-colors rounded-lg hover:bg-slate-50"
            aria-label="Search"
          >
            <Search className="h-4.5 w-4.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a1628] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#152a4d] transition-colors"
          >
            Talk to an Expert <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <motion.button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-soft transition-colors"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>
      {open && (
        <motion.div
          className="lg:hidden border-t border-border bg-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to as any}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm transition-colors"
                  activeProps={{ className: "bg-brand/5 text-brand font-semibold" }}
                  inactiveProps={{ className: "text-ink font-medium hover:bg-soft" }}
                  activeOptions={{ exact: false }}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to as any}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors"
                        activeProps={{ className: "bg-brand/5 text-brand font-semibold" }}
                        inactiveProps={{ className: "text-ink/70 hover:bg-soft" }}
                      >
                        <c.icon className="h-4 w-4 text-blue-500" />
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] px-5 py-3 text-sm font-semibold text-white">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
