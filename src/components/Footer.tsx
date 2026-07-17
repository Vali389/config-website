import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/80">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              ConfigUSA delivers innovative IT solutions and staffing services that help businesses accelerate growth, optimize operations, and build a future-ready workforce.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#", hover: "hover:bg-[#0A66C2]" },
                { Icon: Twitter, label: "X (Twitter)", href: "#", hover: "hover:bg-black" },
                { Icon: Facebook, label: "Facebook", href: "#", hover: "hover:bg-[#1877F2]" },
                { Icon: Instagram, label: "Instagram", href: "#", hover: "hover:bg-[#E4405F]" },
                { Icon: Youtube, label: "YouTube", href: "#", hover: "hover:bg-[#FF0000]" },
              ].map(({ Icon, label, href, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-transparent transition-all ${hover}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-brand-glow">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-brand-glow">Industries</Link></li>
              <li><Link to="/careers" className="hover:text-brand-glow">Careers</Link></li>
              <li><Link to="/faq" className="hover:text-brand-glow">FAQ</Link></li>
              <li><Link to="/resources" className="hover:text-brand-glow">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/staffing" className="hover:text-brand-glow">IT Staffing</Link></li>
              <li><Link to="/services/software" className="hover:text-brand-glow">Software Development</Link></li>
              <li><Link to="/services/sap" className="hover:text-brand-glow">SAP Solutions</Link></li>
              <li><Link to="/services/assessment" className="hover:text-brand-glow">Digital Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/request-talent" className="hover:text-brand-glow">Request Talent</Link></li>
              <li><Link to="/submit-resume" className="hover:text-brand-glow">Submit Resume</Link></li>
              <li><Link to="/careers" className="hover:text-brand-glow">Find a Job</Link></li>
              <li><Link to="/contact" className="hover:text-brand-glow">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-glow shrink-0" /> 1001 Woodbridge Center Dr, Woodbridge, NJ 07095, USA</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand-glow shrink-0" /> +1 (732) 220-2921</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand-glow shrink-0" /> info@configusa.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} ConfigUSA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brand-glow">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-glow">Terms &amp; Conditions</Link>
            <Link to="/faq" className="hover:text-brand-glow">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
