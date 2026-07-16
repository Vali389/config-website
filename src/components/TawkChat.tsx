import { useEffect } from "react";

/**
 * Loads the Tawk.to live-chat widget on the client only (SSR-safe).
 * The widget renders its own floating button + chat panel.
 */
export function TawkChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("tawkto-script")) return;

    const w = window as unknown as { Tawk_API?: unknown; Tawk_LoadStart?: Date };
    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/6a58b4bd7150471d4bbcf375/1jtl841ne";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null;
}
