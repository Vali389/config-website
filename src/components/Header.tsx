import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/staffing", label: "IT Staffing & Augmentation" },
      { to: "/services/software", label: "Software Development" },
      { to: "/services/sap", label: "SAP Solutions" },
      { to: "/services/assessment", label: "Digital Assessment" },
    ],
  },
  {
    to: "/industries",
    label: "Industries",
    children: [
      { to: "/industries/healthcare", label: "Healthcare & Life Sciences" },
      { to: "/industries/financial", label: "Financial Services" },
      { to: "/industries/government", label: "Government & Public Sector" },
      { to: "/industries/manufacturing", label: "Manufacturing" },
      { to: "/industries/retail", label: "Retail & E-commerce" },
      { to: "/industries/technology", label: "Technology & SaaS" },
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
                activeProps={{ className: "text-blue-600 font-semibold bg-white border-slate-200 shadow-sm" }}
                inactiveProps={{ className: "text-ink/70 font-medium hover:text-blue-600 hover:bg-slate-50" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {"children" in item && item.children && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
              </Link>
              {"children" in item && item.children && (
                <motion.div
                  className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-72 rounded-xl bg-white shadow-elegant border border-border p-3 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.children.map((c, idx) => (
                      <motion.div
                        key={c.label}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={c.to as any}
                          className="block rounded-lg px-4 py-3 text-sm transition-all font-medium"
                          activeProps={{ className: "bg-brand/5 text-brand" }}
                          inactiveProps={{ className: "text-ink/70 hover:bg-brand/5 hover:text-brand" }}
                        >
                          {c.label}
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
                        className="block rounded-md px-3 py-2 text-sm transition-colors"
                        activeProps={{ className: "bg-brand/5 text-brand font-semibold" }}
                        inactiveProps={{ className: "text-ink/70 hover:bg-soft" }}
                      >
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
