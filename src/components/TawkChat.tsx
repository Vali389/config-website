import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  MessageSquare,
  ArrowRight,
  Briefcase,
  UserSearch,
  ArrowUp,
  Headphones,
  Send,
} from "lucide-react";

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatMinimized?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const WA_LINK = "https://wa.me/16099343184?text=Hi%20ConfigUSA%2C%20I%27d%20like%20to%20learn%20more.";

export function TawkChat() {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize Tawk API hooks to suppress the default intrusive widget & attention grabber
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = () => {
      // Suppress the large attention grabber and default floating button
      try {
        window.Tawk_API?.hideWidget?.();
      } catch (e) {
        // ignore
      }
    };

    window.Tawk_API.onChatMinimized = () => {
      try {
        window.Tawk_API?.hideWidget?.();
      } catch (e) {
        // ignore
      }
    };

    if (!document.getElementById("tawkto-script")) {
      const s1 = document.createElement("script");
      s1.id = "tawkto-script";
      s1.async = true;
      s1.src = "https://embed.tawk.to/6a58b4bd7150471d4bbcf375/1jtl841ne";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
    }

    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollTop(scrolled > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenTawk = () => {
    setOpen(false);
    try {
      if (window.Tawk_API?.showWidget && window.Tawk_API?.maximize) {
        window.Tawk_API.showWidget();
        window.Tawk_API.maximize();
      } else {
        window.location.href = "/contact";
      }
    } catch {
      window.location.href = "/contact";
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-white shadow-md hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Assistant Modal Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[90vw] max-w-[330px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200/90 text-left mb-1"
          >
            {/* Header */}
            <div className="relative bg-[#07172f] px-5 py-4 text-white">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="absolute right-3.5 top-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/30 border border-blue-400/30 text-amber-400">
                  <Headphones className="h-4.5 w-4.5" />
                </span>
                <div>
                  <div className="font-bold text-sm leading-tight text-white">
                    ConfigUSA Assistant
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available to help
                  </div>
                </div>
              </div>
            </div>

            {/* Greeting */}
            <div className="p-4 bg-slate-50/70 border-b border-slate-100">
              <div className="rounded-xl bg-white p-3 text-xs sm:text-[13px] text-slate-700 shadow-sm border border-slate-100">
                👋 Hello! How can our enterprise team assist you today?
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 space-y-2 bg-white">
              <button
                onClick={handleOpenTawk}
                className="w-full flex items-center justify-between gap-2.5 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 p-3 text-xs font-semibold text-blue-700 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="h-4 w-4 text-blue-600 group-hover:text-white" />
                  <span>Start Live Chat</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-blue-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <Link
                to="/request-talent"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 p-3 text-xs font-semibold text-[#071326] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <UserSearch className="h-4 w-4 text-[#e89218]" />
                  <span>Request Enterprise Talent</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <Link
                to="/careers"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 p-3 text-xs font-semibold text-[#071326] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  <span>Explore Open Jobs</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-between gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 p-3 text-xs font-semibold text-emerald-800 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Send className="h-4 w-4 text-emerald-600 group-hover:text-white" />
                  <span>WhatsApp Message</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small Floating Assistant Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className={`relative flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg transition-all hover:scale-105 cursor-pointer z-40 border border-white/20 ${
          open ? "bg-slate-800" : "bg-[#07172f] hover:bg-[#0c2345]"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-4.5 w-4.5" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="h-4.5 w-4.5 text-[#f5a623]" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
