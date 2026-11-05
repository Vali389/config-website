import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";
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
              The Right Talent. Faster. At Scale. Connecting enterprise priorities with specialist technology and workforce solutions.
            </p>
            {/* Confirmed Social Links */}
            <div className="mt-5 flex items-center gap-2.5">
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
                href="https://twitter.com/configusa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded bg-black text-white hover:opacity-90 transition-opacity"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Capabilities Column (per Blueprint Section 16) */}
          <div>
            <h4 className="text-[#102B4E] font-bold text-xs uppercase tracking-wider mb-3">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/ai" className="hover:text-[#245B91] transition-colors">AI & Intelligent Solutions</Link></li>
              <li><Link to="/services/forward-deployed-engineering" className="hover:text-[#245B91] transition-colors">Forward-Deployed Engineering</Link></li>
              <li><Link to="/services/palantir" className="hover:text-[#245B91] transition-colors">Palantir Talent & Workforce</Link></li>
              <li><Link to="/services/enterprise-applications" className="hover:text-[#245B91] transition-colors">Enterprise Applications</Link></li>
              <li><Link to="/services/staffing" className="hover:text-[#245B91] transition-colors">Workforce Solutions</Link></li>
              <li><Link to="/gcc" className="hover:text-[#245B91] transition-colors">GCC Solutions</Link></li>
            </ul>
          </div>

          {/* Industries Column (per Blueprint Section 16) */}
          <div>
            <h4 className="text-[#102B4E] font-bold text-xs uppercase tracking-wider mb-3">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/industries" className="hover:text-[#245B91] transition-colors">Financial Services</Link></li>
              <li><Link to="/industries" className="hover:text-[#245B91] transition-colors">Healthcare & Life Sciences</Link></li>
              <li><Link to="/industries" className="hover:text-[#245B91] transition-colors">Manufacturing & Industrial</Link></li>
              <li><Link to="/industries" className="hover:text-[#245B91] transition-colors">Retail & Consumer</Link></li>
              <li><Link to="/industries" className="hover:text-[#245B91] transition-colors">Technology & IT Services</Link></li>
            </ul>
          </div>

          {/* Company Column (per Blueprint Section 16) */}
          <div>
            <h4 className="text-[#102B4E] font-bold text-xs uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-[#245B91] transition-colors">About Us</Link></li>
              <li><Link to="/global-delivery" className="hover:text-[#245B91] transition-colors">Global Delivery</Link></li>
              <li><Link to="/careers" className="hover:text-[#245B91] transition-colors">Careers</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#245B91] transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-[#245B91] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Insights Column (per Blueprint Section 16) */}
          <div>
            <h4 className="text-[#102B4E] font-bold text-xs uppercase tracking-wider mb-3">Insights</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/resources" hash="perspectives" className="hover:text-[#245B91] transition-colors">Perspectives</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#245B91] transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" hash="articles" className="hover:text-[#245B91] transition-colors">Articles & Reports</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Bar (per Blueprint Section 16) */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ConfigUSA. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-[#245B91] transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms" className="hover:text-[#245B91] transition-colors">Terms of Use</Link>
            <span className="text-slate-300">|</span>
            <Link to="/faq" className="hover:text-[#245B91] transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
