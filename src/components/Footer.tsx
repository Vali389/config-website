import React from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

function FooterLink({
  to,
  hash,
  children,
}: {
  to: string;
  hash?: string;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    if (hash) {
      setTimeout(() => {
        const clean = hash.replace(/^#/, "").trim();
        const el = document.getElementById(clean);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <li>
      <Link
        to={to}
        hash={hash}
        onClick={handleClick}
        className="relative inline-block text-slate-600 hover:text-[#102B4E] transition-colors duration-200 py-1 group text-[13.5px] font-medium leading-relaxed"
      >
        <span>{children}</span>
        {/* Animated expanding brand red underline on hover */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C83B43] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-slate-600 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-3.5 text-xs text-slate-500 leading-relaxed max-w-xs">
              The Right Talent. Faster. At Scale. Connecting enterprise priorities with specialist technology and workforce solutions.
            </p>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/configusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white hover:opacity-90 hover:ring-2 hover:ring-[#102B4E] transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/configusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white hover:opacity-90 hover:ring-2 hover:ring-[#102B4E] transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider mb-3.5">
              Solutions
            </h4>
            <ul className="space-y-1">
              <FooterLink to="/services/ai">AI & Intelligent Solutions</FooterLink>
              <FooterLink to="/services/forward-deployed-engineering">Forward-Deployed Engineering</FooterLink>
              <FooterLink to="/services/palantir">Palantir Talent & Workforce</FooterLink>
              <FooterLink to="/services/enterprise-applications">Enterprise Applications</FooterLink>
              <FooterLink to="/services/staffing">Workforce Solutions</FooterLink>
              <FooterLink to="/gcc">GCC Solutions</FooterLink>
              <FooterLink to="/engagement-models">Engagement Models</FooterLink>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider mb-3.5">
              Industries
            </h4>
            <ul className="space-y-1">
              <FooterLink to="/industries" hash="financial-services">Financial Services</FooterLink>
              <FooterLink to="/industries" hash="healthcare-life-sciences">Healthcare & Life Sciences</FooterLink>
              <FooterLink to="/industries" hash="manufacturing-engineering">Manufacturing & Industrial</FooterLink>
              <FooterLink to="/industries" hash="retail-consumer-goods">Retail & Consumer</FooterLink>
              <FooterLink to="/industries" hash="technology-digital-services">Technology & IT Services</FooterLink>
              <FooterLink to="/industries" hash="government-public-sector">Government & Public Sector</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider mb-3.5">
              Company
            </h4>
            <ul className="space-y-1">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/global-delivery">Global Delivery</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Insights Column */}
          <div>
            <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider mb-3.5">
              Insights
            </h4>
            <ul className="space-y-1">
              <FooterLink to="/resources" hash="perspectives">Perspectives</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/resources" hash="articles">Articles & Reports</FooterLink>
            </ul>
          </div>
        </div>

        {/* Legal Bar with Animated Expanding Brand Underline & FAQ Removed */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ConfigUSA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="relative inline-block text-slate-600 hover:text-[#102B4E] font-medium transition-colors py-0.5 group"
            >
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C83B43] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              to="/terms"
              className="relative inline-block text-slate-600 hover:text-[#102B4E] font-medium transition-colors py-0.5 group"
            >
              <span>Terms of Use</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C83B43] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
