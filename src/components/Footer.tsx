import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-slate-600 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-3 text-xs text-slate-500 leading-relaxed max-w-xs">
              A Technology Growth Partner. Helping enterprises build, scale and transform their technology organizations.
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[#071326] font-bold text-xs uppercase tracking-wider mb-3">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">AI & Intelligent Solutions</Link></li>
              <li><Link to="/services/software" className="hover:text-blue-600 transition-colors">Digital Engineering</Link></li>
              <li><Link to="/services/software" className="hover:text-blue-600 transition-colors">Cloud & Infrastructure</Link></li>
              <li><Link to="/services/enterprise-applications" className="hover:text-blue-600 transition-colors">Enterprise Applications</Link></li>
              <li><Link to="/services/staffing" className="hover:text-blue-600 transition-colors">Workforce Solutions</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Managed Delivery</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[#071326] font-bold text-xs uppercase tracking-wider mb-3">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/industries/$industryId" params={{ industryId: "financial" }} className="hover:text-blue-600 transition-colors">Financial Services</Link></li>
              <li><Link to="/industries/$industryId" params={{ industryId: "healthcare" }} className="hover:text-blue-600 transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/$industryId" params={{ industryId: "technology" }} className="hover:text-blue-600 transition-colors">Technology</Link></li>
              <li><Link to="/industries/$industryId" params={{ industryId: "manufacturing" }} className="hover:text-blue-600 transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/$industryId" params={{ industryId: "retail" }} className="hover:text-blue-600 transition-colors">Retail & Telecom</Link></li>
              <li><Link to="/industries/$industryId" params={{ industryId: "government" }} className="hover:text-blue-600 transition-colors">Public Sector</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#071326] font-bold text-xs uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">Leadership</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">Global Delivery</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-[#071326] font-bold text-xs uppercase tracking-wider mb-3">Connect With Us</h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/configusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 ConfigUSA. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
            <span className="text-slate-300">|</span>
            <Link to="/faq" className="hover:text-blue-600 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
