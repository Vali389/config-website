import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Scrolls the window back to the top whenever the route pathname changes.
 * Mounted once in the root layout so every page navigation starts at the top.
 */
export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
