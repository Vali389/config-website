import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

/**
 * Handles scrolling behavior during route updates and provides
 * a floating, accessible "Scroll to top" button when scrolling down.
 */
export function ScrollToTop() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });

  const [visible, setVisible] = useState(false);

  // Show floating button when user scrolls down past 200px
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop || 0;
      setVisible(top > 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle route and hash navigation transitions
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rawHash = hash ? hash.replace(/^#/, "").trim() : "";

    if (rawHash) {
      let attempts = 0;
      const maxAttempts = 30; // poll every 50ms up to 1.5s
      let timerId: ReturnType<typeof setTimeout> | null = null;

      const tryScroll = () => {
        const element = document.getElementById(rawHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < maxAttempts) {
          attempts++;
          timerId = setTimeout(tryScroll, 50);
        }
      };

      tryScroll();

      return () => {
        if (timerId) clearTimeout(timerId);
      };
    } else {
      // Default scroll to top if no hash is present
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-[#102B4E] text-white shadow-xl border border-white/20 hover:bg-[#245B91] hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.25] text-white transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
