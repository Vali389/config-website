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
  ShieldCheck,
  Building2,
  Cpu,
  Cloud,
  Database,
  Landmark,
  Factory,
  ShoppingCart,
  Heart,
  Truck,
  Briefcase,
  FileUp,
  Search,
  Award,
  Globe2,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

// Navy Blue Reference 8-Section Navigation Architecture
const NAV = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About Us",
    children: [
      {
        to: "/about",
        hash: "our-company",
        label: "Our Company",
        desc: "Built on trust, expertise and dependable global delivery.",
        icon: Building2,
      },
      {
        to: "/about",
        hash: "why-configusa",
        label: "Why ConfigUSA",
        desc: "Our enterprise advantage and delivery accountability.",
        icon: ShieldCheck,
      },
      {
        to: "/about",
        hash: "leadership",
        label: "Leadership",
        desc: "Executive leadership grounded in relationships and growth.",
        icon: Users,
      },
    ],
  },
  {
    to: "/services",
    label: "Solutions",
    twoColumn: true,
    children: [
      // Column 1
      {
        to: "/services/staffing",
        label: "IT Staffing & Talent Solutions",
        desc: "Contract, contract-to-hire and direct-hire technology talent.",
        icon: Users,
      },
      {
        to: "/services/managed-delivery",
        label: "MSP & VMS Programs",
        desc: "Enterprise delivery with discipline, compliance and speed.",
        icon: ShieldCheck,
      },
      {
        to: "/services/forward-deployed-engineering",
        label: "Forward-Deployed Engineering (FDE)",
        desc: "Embedded engineering talent delivering operational solutions at the frontline.",
        icon: Rocket,
      },
      {
        to: "/gcc",
        label: "Global Capability Centers (GCC)",
        desc: "Establish and scale offshore enterprise capability centers in India.",
        icon: Building2,
      },
      // Column 2
      {
        to: "/engagement-models",
        label: "Workforce Solutions",
        desc: "Tailored workforce programs aligned to enterprise business needs.",
        icon: Award,
      },
      {
        to: "/services/software",
        label: "Technology Consulting & Resource Augmentation",
        desc: "Specialized resources for critical technology initiatives.",
        icon: Cpu,
      },
      {
        to: "/services/palantir",
        label: "Palantir Talent & Specialist Workforce",
        desc: "Specialist talent for data-driven enterprise platforms and AI workflows.",
        icon: Boxes,
      },
    ],
  },
  {
    to: "/expertise",
    label: "Expertise",
    twoColumn: true,
    children: [
      // Column 1
      {
        to: "/services/palantir",
        label: "Palantir Foundry & AIP Services",
        desc: "Ontology architecture, PySpark pipelines and operational AI applications.",
        icon: Boxes,
      },
      {
        to: "/services/enterprise-applications",
        label: "Workday Solutions",
        desc: "HCM, Financial Management, integrations and optimization.",
        icon: Database,
      },
      {
        to: "/services/ai",
        label: "AI, Data & Digital Engineering",
        desc: "Machine learning, modern data platforms and application engineering.",
        icon: BrainCircuit,
      },
      // Column 2
      {
        to: "/services/sap",
        label: "SAP Solutions",
        desc: "Functional, technical and S/4HANA enterprise specialists.",
        icon: Building2,
      },
      {
        to: "/services/cloud",
        label: "Cloud & Infrastructure",
        desc: "AWS, Azure, GCP, DevOps and resilient IT operations.",
        icon: Cloud,
      },
    ],
  },
  {
    to: "/industries",
    label: "Industries",
    twoColumn: true,
    children: [
      {
        to: "/industries/financial",
        label: "Banking & Financial Services",
        desc: "Fintech, digital banking and core systems",
        icon: Landmark,
      },
      {
        to: "/industries/technology",
        label: "Technology & IT Services",
        desc: "Cloud, AI, SaaS and digital engineering",
        icon: Cpu,
      },
      {
        to: "/industries/manufacturing",
        label: "Manufacturing & Industrial",
        desc: "Smart factory, IoT and enterprise platforms",
        icon: Factory,
      },
      {
        to: "/industries/retail",
        label: "Retail & Consumer",
        desc: "Digital commerce, omnichannel and platforms",
        icon: ShoppingCart,
      },
      {
        to: "/industries/healthcare",
        label: "Healthcare & Life Sciences",
        desc: "Secure digital health and regulatory compliance",
        icon: Heart,
      },
      {
        to: "/industries/government",
        label: "Logistics & Supply Chain",
        desc: "Digital visibility and digital operations",
        icon: Truck,
      },
    ],
  },
  {
    to: "/global-delivery",
    label: "Global Presence",
  },
  {
    to: "/careers",
    label: "Careers",
    children: [
      {
        to: "/careers",
        label: "Job Opportunities",
        desc: "Search and apply for open positions.",
        icon: Search,
      },
      {
        to: "/submit-resume",
        label: "Submit Resume",
        desc: "Direct resume submission to the recruiting team.",
        icon: FileUp,
      },
    ],
  },
  {
    to: "/contact",
    label: "Contact Us",
  },
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
    if (to === "/about") return pathname.startsWith("/about");
    if (to === "/services") {
      return (
        pathname.startsWith("/services") ||
        pathname === "/gcc" ||
        pathname === "/engagement-models" ||
        pathname === "/solutions"
      );
    }
    if (to === "/expertise") return pathname.startsWith("/expertise");
    if (to === "/industries") return pathname.startsWith("/industries");
    if (to === "/global-delivery") return pathname.startsWith("/global-delivery") || pathname.startsWith("/global-presence");
    if (to === "/careers") return pathname.startsWith("/careers") || pathname === "/submit-resume";
    if (to === "/contact") return pathname === "/contact";
    return pathname === to;
  };

  const isChildActive = (childTo: string, childHash?: string) => {
    if (isHome) return false;
    const currentHash = (location.hash || "").replace(/^#/, "");
    if (childHash) {
      return pathname === childTo && currentHash === childHash;
    }
    if (pathname === childTo && !currentHash) return true;
    return false;
  };

  const handleDropdownItemClick = (targetHash?: string) => {
    setOpenDropdown(null);
    setOpen(false);
    if (targetHash) {
      setTimeout(() => {
        const clean = targetHash.replace(/^#/, "").trim();
        const el = document.getElementById(clean);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-md border-b border-slate-200" : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-4 py-2.5 lg:px-6 xl:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
          {NAV.map((item) => {
            const hasChildren = "children" in item && Boolean(item.children);
            const active = isItemActive(item.to);
            const isOpen = openDropdown === item.label;
            const isTwoColumn = "twoColumn" in item && Boolean(item.twoColumn);

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
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[13px] xl:text-[14px] font-semibold transition-colors duration-150 relative ${
                    active
                      ? "text-[#102B4E] font-bold"
                      : "text-slate-700 hover:text-[#102B4E]"
                  }`}
                  aria-expanded={hasChildren ? isOpen : undefined}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#102B4E]" : "group-hover:text-[#102B4E]"
                      }`}
                    />
                  )}
                  {active && (
                    <span className="absolute bottom-0 inset-x-2.5 h-[2px] bg-[#C83B43] rounded-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasChildren && item.children && (
                  <div
                    className={`absolute top-full pt-1.5 transition-all duration-150 z-50 ${
                      item.label === "Expertise" || item.label === "Solutions"
                        ? "left-1/2 -translate-x-1/2"
                        : item.label === "Industries" || item.label === "Careers"
                        ? "right-0"
                        : "left-0"
                    } ${
                      isOpen
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl backdrop-blur-md ${
                        isTwoColumn
                          ? item.label === "Solutions"
                            ? "w-[660px] grid grid-cols-2 gap-2"
                            : "w-[600px] grid grid-cols-2 gap-2"
                          : "w-[340px] space-y-1"
                      }`}
                    >
                      {item.children.map((c) => {
                        const childHash = "hash" in c ? (c as any).hash : undefined;
                        const childActive = isChildActive(c.to, childHash);

                        return (
                          <Link
                            key={c.label}
                            to={c.to as any}
                            hash={childHash}
                            onClick={() => handleDropdownItemClick(childHash)}
                            className={`group/item flex items-start gap-3 rounded-xl p-2.5 transition-all duration-150 ${
                              childActive
                                ? "bg-red-50/70 border border-red-100"
                                : "hover:bg-slate-50 border border-transparent"
                            }`}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                childActive
                                  ? "bg-[#C83B43] text-white shadow-xs border border-red-100"
                                  : "bg-slate-100 text-[#245B91] group-hover/item:bg-red-50 group-hover/item:text-[#C83B43]"
                              }`}
                            >
                              <c.icon className="h-4 w-4" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <span
                                className={`font-semibold text-[13px] block leading-tight ${
                                  childActive
                                    ? "text-[#102B4E] font-bold"
                                    : "text-slate-900 group-hover/item:text-[#102B4E]"
                                }`}
                              >
                                {c.label}
                              </span>
                              <span className="text-[11.5px] leading-snug block mt-0.5 text-slate-500">
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

        {/* Right Action CTAs */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            to="/request-talent"
            className="text-xs xl:text-sm font-semibold text-[#102B4E] hover:text-[#245B91] px-3 py-2 rounded-md border border-slate-200 hover:border-[#245B91] transition-all"
          >
            Request Talent
          </Link>
          <Link
            to="/contact"
            className="btn-cta-primary text-xs xl:text-sm font-semibold px-4 py-2 rounded-md shadow-sm inline-flex items-center gap-1.5"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
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
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 max-h-[82vh] overflow-y-auto">
              {NAV.map((item) => {
                const active = isItemActive(item.to);
                return (
                  <div key={item.label} className="border-b border-slate-100 pb-2 mb-2 last:border-b-0">
                    <Link
                      to={item.to as any}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                        active
                          ? "bg-slate-100 text-[#102B4E] font-bold"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                    {"children" in item && item.children && (
                      <div className="ml-3 mt-1 space-y-1">
                        {item.children.map((c) => {
                          const childHash = "hash" in c ? (c as any).hash : undefined;
                          const childActive = isChildActive(c.to, childHash);
                          return (
                            <Link
                              key={c.label}
                              to={c.to as any}
                              hash={childHash}
                              onClick={() => handleDropdownItemClick(childHash)}
                              className={`flex items-start gap-2.5 rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                                childActive
                                  ? "bg-red-50 text-[#C83B43] font-semibold"
                                  : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              <c.icon
                                className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                                  childActive ? "text-[#C83B43]" : "text-[#245B91]"
                                }`}
                              />
                              <div>
                                <span className="block font-semibold">{c.label}</span>
                                <span className="block text-[11px] text-slate-500 font-normal">
                                  {c.desc}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-3 space-y-2">
                <Link
                  to="/request-talent"
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-sm font-semibold py-2.5 rounded-md block border border-slate-300 text-[#102B4E]"
                >
                  Request Talent
                </Link>
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
