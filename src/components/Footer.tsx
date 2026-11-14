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
  return (
    <li>
      <Link
        to={to}
        hash={hash}
        className="relative inline-block text-slate-600 hover:text-[#102B4E] transition-colors duration-200 py-0.5 group text-xs leading-relaxed"
      >
        <span>{children}</span>
        {/* Animated expanding gold underline on hover */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f5a623] to-[#d98218] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-slate-600 border-t border-slate-200">
      {/* Subtle top gold gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#f5a623] to-transparent opacity-80" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-3.5 text-xs text-slate-500 leading-relaxed max-w-xs">
              The Right Talent. Faster. At Scale. Connecting enterprise priorities with specialist technology and workforce solutions.
            </p>
            {/* Social Links with gold hover touch */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/configusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white hover:opacity-90 hover:ring-2 hover:ring-[#f5a623] transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/configusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white hover:opacity-90 hover:ring-2 hover:ring-[#f5a623] transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Capabilities Column */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
              <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider">
                Capabilities
              </h4>
            </div>
            <ul className="space-y-1.5">
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
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
              <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider">
                Industries
              </h4>
            </div>
            <ul className="space-y-1.5">
              <FooterLink to="/industries">Financial Services</FooterLink>
              <FooterLink to="/industries">Healthcare & Life Sciences</FooterLink>
              <FooterLink to="/industries">Manufacturing & Industrial</FooterLink>
              <FooterLink to="/industries">Retail & Consumer</FooterLink>
              <FooterLink to="/industries">Technology & IT Services</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
              <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider">
                Company
              </h4>
            </div>
            <ul className="space-y-1.5">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/global-delivery">Global Delivery</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Insights Column */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
              <h4 className="text-[#102B4E] font-extrabold text-xs uppercase tracking-wider">
                Insights
              </h4>
            </div>
            <ul className="space-y-1.5">
              <FooterLink to="/resources" hash="perspectives">Perspectives</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/resources" hash="articles">Articles & Reports</FooterLink>
            </ul>
          </div>
        </div>

        {/* Legal Bar with Animated Expanding Gold Underline & FAQ Removed */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ConfigUSA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="relative inline-block text-slate-500 hover:text-[#102B4E] font-medium transition-colors py-0.5 group"
            >
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f5a623] to-[#d98218] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              to="/terms"
              className="relative inline-block text-slate-500 hover:text-[#102B4E] font-medium transition-colors py-0.5 group"
            >
              <span>Terms of Use</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#f5a623] to-[#d98218] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
