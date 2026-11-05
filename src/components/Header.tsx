import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  BrainCircuit,
  Rocket,
  Boxes,
  Users,
  LifeBuoy,
  Landmark,
  Building2,
  Factory,
  ShoppingCart,
  Cpu,
  Heart,
  Lightbulb,
  FileText,
  BarChart3,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

// Blueprint navigation structure
const NAV = [
  { to: "/", label: "Home" },
  {
    to: "/services",
    label: "Capabilities",
    children: [
      { to: "/services/ai", label: "AI & Intelligent Solutions", desc: "Enterprise AI, intelligent automation & analytics", icon: BrainCircuit },
      { to: "/services/forward-deployed-engineering", label: "Forward-Deployed Engineering", desc: "Embedded engineering squads solving operational challenges", icon: Rocket },
      { to: "/services/palantir", label: "Palantir Talent & Specialist Workforce", desc: "Specialist talent for data-driven enterprise platforms", icon: Boxes },
      { to: "/services/enterprise-applications", label: "Enterprise Applications", desc: "Workday, SAP, MuleSoft and Salesforce platforms", icon: Boxes },
      { to: "/services/staffing", label: "Workforce Solutions", desc: "Contract staffing, permanent hiring and managed workforce", icon: Users },
      { to: "/gcc", label: "GCC Solutions", desc: "Talent and workforce strategy for Global Capability Centres", icon: Building2 },
      { to: "/services/staffing", hash: "engagement-models", label: "Engagement Models", desc: "Flexible engagement structures aligned to client need", icon: LifeBuoy },
    ],
  },
  {
    to: "/industries",
    label: "Industries",
    children: [
      { to: "/industries/financial", label: "Banking & Financial Services", desc: "Fintech, digital banking and core systems", icon: Landmark },
      { to: "/industries/technology", label: "Technology & IT Services", desc: "Cloud, AI, SaaS and digital engineering", icon: Cpu },
      { to: "/industries/manufacturing", label: "Manufacturing & Industrial", desc: "Smart factory, IoT and enterprise platforms", icon: Factory },
      { to: "/industries/retail", label: "Retail & Consumer", desc: "Digital commerce, omnichannel and platforms", icon: ShoppingCart },
      { to: "/industries/healthcare", label: "Healthcare & Life Sciences", desc: "Secure digital health and regulatory compliance", icon: Heart },
      { to: "/industries/government", label: "Logistics & Supply Chain", desc: "Digital visibility and digital operations", icon: Building2 },
    ],
  },
  {
    to: "/resources",
    label: "Insights",
    children: [
      { to: "/resources", hash: "perspectives", label: "Perspectives", desc: "Expert viewpoints on technology and talent", icon: Lightbulb },
      { to: "/case-studies", label: "Case Studies", desc: "Verified delivery outcomes for real organizations", icon: FileText },
      { to: "/resources", hash: "articles", label: "Articles & Reports", desc: "In-depth research and market intelligence", icon: BarChart3 },
    ],
  },
  { to: "/about", label: "About Us" },
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

  const isItemActive = (to: string) => {
    if (to === "/") return isHome;
    if (isHome) return false;
    if (to === "/services") return pathname.startsWith("/services") || pathname === "/gcc";
    if (to === "/industries") return pathname.startsWith("/industries");
    if (to === "/resources") return pathname.startsWith("/resources") || pathname === "/case-studies";
    if (to === "/about") return pathname.startsWith("/about");
    return pathname === to;
  };

  const isChildActive = (childTo: string, childHash?: string) => {
    if (isHome) return false;
    const currentHash = (location.hash || "").replace(/^#/, "");
    if (childHash) {
      return pathname === childTo && currentHash === childHash;
    }
    if (childTo === "/services") return (pathname === "/services" || pathname === "/services/") && !currentHash;
    if (pathname === childTo && currentHash) return false;
    return pathname === childTo;
  };

  const handleDropdownItemClick = (hash?: string) => {
    setOpenDropdown(null);
    setOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "border-b border-slate-100"}`}>
      <div className="mx-auto flex max-w-[1460px] items-center justify-between px-4 py-2.5 lg:px-6 xl:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
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
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => {
                    if (hasChildren) {
                      setOpenDropdown((prev) => (prev === item.label ? null : item.label));
                    }
                  }}
                  className={`relative flex items-center gap-1 whitespace-nowrap px-3 xl:px-3.5 py-1.5 xl:py-2 text-[13.5px] xl:text-[14px] rounded-lg transition-all duration-200 font-semibold shrink-0 ${
                    active
                      ? "text-[#102B4E] font-bold"
                      : "text-slate-800 hover:text-[#245B91] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        active ? "text-[#102B4E]" : "text-slate-400 group-hover:text-[#245B91]"
                      } ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}
                    />
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C83B43] rounded-full" />
                  )}
                </Link>

                {hasChildren && item.children && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-1.5 transition-all duration-150 z-50 ${
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="absolute inset-x-0 -top-3 h-4" />

                    <div
                      className={`rounded-xl bg-white shadow-2xl border border-slate-200/90 p-2 backdrop-blur-md ${
                        item.children.length > 4 ? "w-[580px] grid grid-cols-2 gap-1.5" : "w-84 flex flex-col gap-1"
                      }`}
                    >
                      {item.children.map((c) => {
                        const childActive = isChildActive(c.to, c.hash);

                        return (
                          <Link
                            key={c.label}
                            to={c.to as any}
                            hash={c.hash}
                            onClick={() => handleDropdownItemClick(c.hash)}
                            className={`flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 group/item border ${
                              childActive
                                ? "bg-slate-50 border-slate-200 text-[#102B4E] font-semibold"
                                : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-[#102B4E]"
                            }`}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors mt-0.5 ${
                                childActive
                                  ? "bg-red-50 text-[#C83B43] border border-red-100"
                                  : "bg-slate-100 text-[#245B91] group-hover/item:bg-red-50 group-hover/item:text-[#C83B43]"
                              }`}
                            >
                              <c.icon className="h-4 w-4" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <span
                                className={`font-semibold text-[13.5px] block leading-tight ${
                                  childActive ? "text-[#102B4E] font-bold" : "text-slate-900 group-hover/item:text-[#102B4E]"
                                }`}
                              >
                                {c.label}
                              </span>
                              <span className="text-xs leading-snug block mt-0.5 text-slate-500">
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

        {/* Right CTA area matching the template */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/resources"
            className="text-slate-500 hover:text-[#102B4E] transition-colors p-1"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="btn-cta-primary text-sm font-semibold px-4 py-2 rounded-md shadow-sm inline-flex items-center gap-1.5"
          >
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-slate-200 bg-white shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {NAV.map((item) => {
                const active = isItemActive(item.to);
                return (
                  <div key={item.label} className="border-b border-slate-100 pb-2 mb-2 last:border-b-0">
                    <Link
                      to={item.to as any}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                        active ? "bg-slate-100 text-[#102B4E] font-bold" : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                    {"children" in item && item.children && (
                      <div className="ml-3 mt-1 space-y-1">
                        {item.children.map((c) => {
                          const childActive = isChildActive(c.to, c.hash);
                          return (
                            <Link
                              key={c.label}
                              to={c.to as any}
                              hash={c.hash}
                              onClick={() => handleDropdownItemClick(c.hash)}
                              className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                                childActive ? "bg-red-50 text-[#C83B43] font-semibold" : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              <c.icon className={`h-3.5 w-3.5 ${childActive ? "text-[#C83B43]" : "text-[#245B91]"}`} />
                              <span>{c.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-cta-primary w-full text-center text-sm font-semibold py-2.5 rounded-md block shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
