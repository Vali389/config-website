import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  Code,
  Landmark,
  Building2,
  Factory,
  ShoppingCart,
  Cpu,
  BrainCircuit,
  Cloud,
  Boxes,
  LifeBuoy,
  FileText,
  BarChart3,
  Lightbulb,
  BookOpen,
  Search,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

const NAV = [
  {
    to: "/services",
    label: "Capabilities",
    children: [
      { to: "/services", label: "AI & Data", desc: "Generative AI & intelligent automation", icon: BrainCircuit },
      { to: "/services/software", label: "Digital Engineering", desc: "Modern apps & cloud-native platforms", icon: Code },
      { to: "/services/cloud", label: "Cloud & Infrastructure", desc: "Migration, DevOps & platform engineering", icon: Cloud },
      { to: "/services/enterprise-applications", label: "Enterprise Applications", desc: "SAP, Oracle, Salesforce & more", icon: Boxes },
      { to: "/services/staffing", label: "Workforce Solutions", desc: "Contract, permanent & managed talent", icon: Users },
      { to: "/services/managed-delivery", label: "Managed Delivery", desc: "Dedicated onshore & offshore teams", icon: LifeBuoy },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clear active tab completely on home page / logo click; otherwise match routes
  const isItemActive = (to: string) => {
    if (isHome) return false;
    if (to === "/services") return pathname.startsWith("/services");
    if (to === "/industries") return pathname.startsWith("/industries");
    if (to === "/resources") return pathname.startsWith("/resources");
    if (to === "/about") return pathname === "/about";
    if (to === "/careers") return pathname.startsWith("/careers");
    if (to === "/contact") return pathname === "/contact";
    return pathname === to;
  };

  const isChildActive = (parentTo: string, childTo: string, childLabel: string) => {
    if (isHome) return false;
    if (parentTo === "/services") {
      if (childLabel === "AI & Data") {
        return pathname === "/services" || pathname === "/services/";
      }
      if (childLabel === "Digital Engineering") {
        return pathname === "/services/software";
      }
      if (childLabel === "Cloud & Infrastructure") {
        return pathname === "/services/cloud";
      }
      if (childLabel === "Enterprise Applications") {
        return pathname.startsWith("/services/enterprise-applications") || pathname.startsWith("/services/sap");
      }
      if (childLabel === "Workforce Solutions") {
        return pathname.startsWith("/services/staffing");
      }
      if (childLabel === "Managed Delivery") {
        return pathname === "/services/managed-delivery";
      }
    }
    return pathname === childTo;
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "border-b border-slate-100"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const hasChildren = "children" in item && Boolean(item.children);
            const active = isItemActive(item.to);
            const isOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative group py-2 -my-2"
                onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <Link
                  to={item.to as any}
                  id={`nav-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    if (hasChildren) {
                      // Clicking allows toggling dropdown as well
                      setOpenDropdown((prev) => (prev === item.label ? null : item.label));
                    }
                  }}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[14px] rounded-lg border transition-all duration-200 font-semibold ${
                    active
                      ? "bg-[#0a1628] text-white border-[#0a1628] shadow-sm"
                      : "text-slate-800 border-transparent hover:text-blue-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        active ? "text-white" : "text-slate-400 group-hover:text-blue-600"
                      } ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}
                    />
                  )}
                </Link>

                {hasChildren && item.children && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-1 transition-all duration-150 z-50 ${
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                    }`}
                  >
                    {/* Invisible hover bridge to eliminate gap drop */}
                    <div className="absolute inset-x-0 -top-3 h-4" />

                    <div
                      className={`rounded-xl bg-white shadow-xl border border-slate-200/90 p-2.5 backdrop-blur-md ${
                        item.children.length > 4 ? "w-[540px] grid grid-cols-2 gap-1" : "w-80 flex flex-col gap-1"
                      }`}
                    >
                      {item.children.map((c) => {
                        const childActive = isChildActive(item.to, c.to, c.label);

                        return (
                          <Link
                            key={c.label}
                            to={c.to as any}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 group/item ${
                              childActive
                                ? "bg-[#0a1628] text-white shadow-sm font-semibold"
                                : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                            }`}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors mt-0.5 ${
                                childActive
                                  ? "bg-[#f5a623] text-[#071326] shadow-xs"
                                  : "bg-slate-100 text-blue-600 group-hover/item:bg-blue-50 group-hover/item:text-blue-700"
                              }`}
                            >
                              <c.icon className="h-4 w-4" />
                            </span>
                            <div>
                              <span
                                className={`font-semibold text-[13.5px] block leading-tight ${
                                  childActive ? "text-white font-bold" : "text-slate-900 group-hover/item:text-blue-700"
                                }`}
                              >
                                {c.label}
                              </span>
                              <span
                                className={`text-xs leading-snug block mt-0.5 ${
                                  childActive ? "text-slate-300 font-normal" : "text-slate-400 group-hover/item:text-slate-500"
                                }`}
                              >
                                {c.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a1628] px-5 py-2.5 text-[13px] font-bold text-white shadow-sm hover:bg-[#152a4d] transition-colors"
          >
            Talk to an Expert <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-soft transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-border bg-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {NAV.map((item) => {
                const active = isItemActive(item.to);
                return (
                  <div key={item.label}>
                    <Link
                      to={item.to as any}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        active ? "bg-[#0a1628] text-white font-bold" : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {"children" in item && item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((c) => {
                          const childActive = isChildActive(item.to, c.to, c.label);
                          return (
                            <Link
                              key={c.label}
                              to={c.to as any}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                childActive ? "bg-[#0a1628] text-white font-semibold" : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              <c.icon className={`h-4 w-4 ${childActive ? "text-[#f5a623]" : "text-blue-500"}`} />
                              {c.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#1d4ed8] px-5 py-3 text-sm font-bold text-white shadow-sm"
              >
                Talk to an Expert <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
