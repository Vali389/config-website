import { Link } from "@tanstack/react-router";
import logo from "@/assets/new-logo-2.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      className="inline-flex items-center group focus:outline-none"
      aria-label="ConfigUSA — Your Intelligent IT Partner"
    >
      {isLight ? (
        <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-sm border border-transparent transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:border-blue-100">
          <img
            src={logo}
            alt="ConfigUSA — Your Intelligent IT Partner"
            className="h-12 md:h-14 w-auto transition-transform duration-300"
          />
        </span>
      ) : (
        <img
          src={logo}
          alt="ConfigUSA — Your Intelligent IT Partner"
          className="h-14 md:h-18 w-auto transition-all duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_4px_12px_rgba(29,78,216,0.18)] group-hover:brightness-[1.05]"
        />
      )}
    </Link>
  );
}
