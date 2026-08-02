import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Users, Code, Database, ClipboardCheck, Heart, Landmark, Building2, Factory, ShoppingCart, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/staffing", label: "IT Staffing & Augmentation", desc: "Top IT talent on demand", icon: Users },
      { to: "/services/software", label: "Software Development", desc: "Custom enterprise solutions", icon: Code },
      { to: "/services/sap", label: "SAP Solutions", desc: "End-to-end SAP services", icon: Database },
      { to: "/services/assessment", label: "Digital Assessment", desc: "Technology readiness audits", icon: ClipboardCheck },
    ],
  },
  {
    to: "/industries",
    label: "Industries",
    children: [
      { to: "/industries/healthcare", label: "Healthcare & Life Sciences", desc: "HIPAA-compliant solutions", icon: Heart },
      { to: "/industries/financial", label: "Financial Services", desc: "Secure fintech platforms", icon: Landmark },
      { to: "/industries/government", label: "Government & Public Sector", desc: "FedRAMP & compliance", icon: Building2 },
      { to: "/industries/manufacturing", label: "Manufacturing", desc: "Industry 4.0 digital ops", icon: Factory },
      { to: "/industries/retail", label: "Retail & E-commerce", desc: "Scalable commerce platforms", icon: ShoppingCart },
      { to: "/industries/technology", label: "Technology & SaaS", desc: "Cloud-native engineering", icon: Cpu },
    ],
  },
  { to: "/careers", label: "Careers" },
  { to: "/resources", label: "Resources" },
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
            <div key={item.to} className="relative group">
              <Link
                to={item.to as any}
                className="relative flex items-center gap-1 px-4 py-2 text-sm rounded-lg border border-transparent transition-colors"
                activeProps={{ className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold border-blue-100 shadow-sm bg-white" }}
                inactiveProps={{ className: "text-ink/70 font-medium hover:text-blue-600 hover:bg-slate-50" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {"children" in item && item.children && <ChevronDown className="h-3.5 w-3.5 text-ink/50 transition-transform group-hover:rotate-180" />}
              </Link>
              {"children" in item && item.children && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`rounded-xl bg-white shadow-elegant border border-border p-4 backdrop-blur-sm ${item.children.length > 4 ? "w-[520px] grid grid-cols-2 gap-1" : "w-80 flex flex-col gap-1"}`}
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
                          className="flex items-start gap-3 rounded-lg px-3.5 py-3 text-sm transition-all group/item"
                          activeProps={{ className: "bg-blue-50 text-blue-700" }}
                          inactiveProps={{ className: "text-ink/70 hover:bg-blue-50/60 hover:text-blue-700" }}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-100 group-hover/item:text-blue-700 transition-colors mt-0.5">
                            <c.icon className="h-4.5 w-4.5" />
                          </span>
                          <div>
                            <span className="font-semibold text-sm block leading-tight">{c.label}</span>
                            <span className="text-xs text-slate-500 leading-snug block mt-0.5">{c.desc}</span>
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
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/request-talent" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-all">
              Request Talent <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
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
              <div key={item.to}>
                <Link
                  to={item.to as any}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm transition-colors"
                  activeProps={{ className: "bg-brand/5 text-brand font-semibold" }}
                  inactiveProps={{ className: "text-ink font-medium hover:bg-soft" }}
                  activeOptions={{ exact: item.to === "/" }}
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
            <Link to="/request-talent" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white">
              Request Talent <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
