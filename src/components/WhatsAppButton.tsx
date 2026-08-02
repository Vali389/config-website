import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Briefcase, UserSearch, MessageSquare, ArrowUp } from "lucide-react";

const WA_LINK = "https://wa.me/17322202921?text=Hi%20ConfigUSA%2C%20I%27d%20like%20to%20learn%20more.";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.885.755 5.594 2.078 7.936L.06 31.604l7.474-1.958a15.9 15.9 0 007.598 1.933h.006c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.201h-.005a13.19 13.19 0 01-6.719-1.841l-.482-.287-4.994 1.309 1.334-4.868-.313-.499a13.196 13.196 0 01-2.02-7.014C2.803 8.879 8.694 2.99 16 2.99c3.539 0 6.867 1.379 9.371 3.885a13.156 13.156 0 013.879 9.371c-.003 7.305-5.893 13.196-13.25 13.196zm7.271-9.881c-.398-.199-2.356-1.163-2.72-1.297-.365-.133-.63-.199-.896.2-.265.397-1.03 1.297-1.263 1.562-.232.266-.465.299-.863.1-.397-.199-1.679-.619-3.198-1.973-1.183-1.055-1.982-2.359-2.215-2.756-.232-.398-.025-.612.175-.811.18-.179.398-.465.597-.697.199-.232.265-.398.398-.664.133-.266.066-.498-.033-.697-.099-.199-.896-2.16-1.228-2.955-.323-.775-.652-.671-.897-.683-.232-.011-.498-.014-.764-.014-.266 0-.697.099-1.062.498-.365.398-1.395 1.363-1.395 3.324s1.428 3.855 1.627 4.121c.199.266 2.809 4.29 6.807 6.017.951.41 1.693.655 2.272.839.955.303 1.823.26 2.51.158.766-.114 2.356-.963 2.687-1.893.331-.929.331-1.727.232-1.893-.099-.166-.365-.265-.763-.464z" />
  </svg>
);

const REPLIES = [
  { icon: UserSearch, label: "I want to hire talent", to: "/request-talent" as const },
  { icon: Briefcase, label: "I'm looking for a job", to: "/careers" as const },
  { icon: MessageSquare, label: "I have a question", to: "/contact" as const },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Robust scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollTop(scrolled > 80);
    };

    // Run check once initially on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex flex-col items-center gap-3">
      {/* WhatsApp Action Drawer Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-0 w-[92vw] max-w-[360px] overflow-hidden rounded-3xl bg-white shadow-elegant ring-1 ring-black/5 text-left mb-2 z-50"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#128C7E] to-[#25D366] px-5 pt-5 pb-6 text-white">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-bold leading-tight">ConfigUSA Support</div>
                  <div className="flex items-center gap-1.5 text-xs text-white/85">
                    <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" /> Online — replies in minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-5 bg-slate-50/70">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-ink shadow-sm"
              >
                👋 Hi! How can we help? Pick an option below or message us on WhatsApp.
              </motion.div>

              <div className="mt-4 flex flex-col items-end gap-2.5">
                {REPLIES.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.07 }}
                  >
                    <Link
                      to={r.to}
                      onClick={() => setOpen(false)}
                      className="group inline-flex items-center gap-2 rounded-2xl rounded-tr-sm border border-[#25D366]/40 bg-white px-4 py-2.5 text-sm font-semibold text-[#128C7E] shadow-sm hover:bg-[#25D366] hover:text-white hover:border-transparent transition-colors cursor-pointer"
                    >
                      <r.icon className="h-4 w-4" /> {r.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-border/60 bg-white p-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a] transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" /> Start WhatsApp Chat <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Toggle Button (Matches green circle in reference) */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-transform hover:scale-110 cursor-pointer z-40 ${
          open ? "bg-[#128C7E]" : "bg-[#25D366] animate-pulse-ring"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <WhatsAppIcon className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[0.65rem] font-black text-white ring-2 ring-white">
            1
          </span>
        )}
      </button>

      {/* Floating Scroll to Top Button (Matches teal circle in reference) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow hover:scale-110 hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-blue-500/20 z-40"
          >
            <ArrowUp className="h-7 w-7 stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
