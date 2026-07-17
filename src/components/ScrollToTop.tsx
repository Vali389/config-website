import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Handles scrolling behavior during route updates.
 * If a hash anchor is provided (e.g. #healthcare), it smooth-scrolls to the target.
 * Otherwise, it scrolls immediately back to the top of the page.
 */
export function ScrollToTop() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Subtle delay to allow page rendering to finish and layouts to settle
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }

    // Default scroll to top if no hash is present
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
