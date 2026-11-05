import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Handles scrolling behavior during route updates.
 * If a hash anchor is provided (e.g. #perspectives, #articles, #engagement-models),
 * it strips the '#' prefix and smoothly scrolls to the target element.
 * Retries for a short period to allow the target route's DOM to mount.
 * Otherwise, it scrolls immediately back to the top of the page.
 */
export function ScrollToTop() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });

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

  return null;
}
