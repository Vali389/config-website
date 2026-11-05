import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroTemplateHome from "@/assets/hero_homepage_executives.jpg";

export function HomeHero() {
  return (
    <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-[#1b3a63]">
      {/* Right-aligned photography: 2 team members clearly framed and razor-sharp on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[54%] xl:w-[50%] overflow-hidden pointer-events-none z-0">
        <img
          src={heroTemplateHome}
          alt="ConfigUSA Enterprise Technology Leadership"
          className="h-full w-full object-cover object-[70%_center] lg:object-right brightness-105 contrast-105"
        />
        {/* Subtle left blend into navy container so text stays crisp on all devices without white leak */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/70 to-transparent lg:from-[#102B4E] lg:via-[#102B4E]/30 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
      </div>

      <div className="container-enterprise relative z-10 w-full">
        <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Technology. Talent. Transformation.
          </h1>

          <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
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
