import { Link } from "@tanstack/react-router";
import logo from "@/assets/configusa-logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="inline-flex items-center group" aria-label="ConfigUSA — Your Intelligent IT Partner">
      {variant === "light" ? (
        <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-sm">
          <img src={logo} alt="ConfigUSA — Your Intelligent IT Partner" className="h-8 w-auto" />
        </span>
      ) : (
        <img
          src={logo}
          alt="ConfigUSA — Your Intelligent IT Partner"
          className="h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
        />
      )}
    </Link>
  );
}
