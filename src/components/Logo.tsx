import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
        <span className="absolute inset-0 rounded-xl bg-gradient-brand blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
        <svg viewBox="0 0 24 24" className="relative h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </span>
      <span className={`text-xl font-bold tracking-tight ${text}`}>
        Config<span className="text-brand">USA</span>
      </span>
    </Link>
  );
}
