import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
  { to: "/industries", label: "Industries" },
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-card" : "bg-white/80 backdrop-blur-md"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to as any}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors"
                activeProps={{ className: "flex items-center gap-1 px-3 py-2 text-sm font-semibold text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {"children" in item && item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {"children" in item && item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-72 rounded-xl bg-white shadow-elegant border border-border p-2">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to as any} className="block rounded-lg px-4 py-2.5 text-sm text-ink/80 hover:bg-soft hover:text-brand transition-colors">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.to}>
                <Link to={item.to as any} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-soft">
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to as any} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-ink/70 hover:bg-soft">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
