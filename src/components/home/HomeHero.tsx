import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import homeBg from "@/assets/home-page-bg.png";

export function HomeHero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
      {/* Edge-to-Edge Hero Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={homeBg}
          alt="ConfigUSA Enterprise Technology Leadership"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
        />
        {/* Subtle mobile overlay for ultra-crisp typography on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
      </div>

      <div className="container-enterprise relative z-10 w-full">
        <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-5 rounded-2xl bg-[#102B4E]/70 backdrop-blur-md p-6 sm:p-8 lg:p-9 border border-white/15 shadow-2xl -ml-1 sm:-ml-3 lg:-ml-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
            Technology. Talent. Transformation.
          </h1>

          <p className="text-sm sm:text-base lg:text-[17px] text-[#e2e8f0] leading-relaxed">
            ConfigUSA helps organisations access the technology expertise, engineering capability and specialist workforce needed to deliver critical business initiatives. From targeted talent solutions to dedicated delivery teams, we help clients move from requirement to execution with clarity and speed.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
            >
              Discuss Your Requirement <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
