import { Link } from "@tanstack/react-router";
import logo from "@/assets/config-logo-official.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      className="inline-flex items-center group focus:outline-none"
      aria-label="ConfigUSA — Your Intelligent IT Partner"
    >
      {isLight ? (
        <span className="inline-flex items-center rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-md border border-white/20 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-glow">
          <img
            src={logo}
            alt="ConfigUSA — Your Intelligent IT Partner"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300"
          />
        </span>
      ) : (
        <img
          src={logo}
          alt="ConfigUSA — Your Intelligent IT Partner"
          className="h-11 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_4px_12px_rgba(29,78,216,0.18)]"
        />
      )}
    </Link>
  );
}
