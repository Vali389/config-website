import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroTemplateHome from "@/assets/hero_template_home.png";

export function HomeHero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-white/10">
      {/* Background template photography on the right: 100% sharp, bright and razor-clear */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
        <img
          src={heroTemplateHome}
          alt="ConfigUSA Enterprise Technology Leadership"
          className="h-full w-full object-cover object-right brightness-105 contrast-105"
        />
        {/* Seamless left fade so the photo blends perfectly into the deep navy container on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
      </div>

      <div className="container-enterprise relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Technology. Talent. Transformation.
          </h1>

          <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
            ConfigUSA helps organisations access the technology expertise, engineering capability and specialist workforce needed to deliver critical business initiatives. From targeted talent solutions to dedicated delivery teams, we help clients move from requirement to execution with clarity and speed.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
            >
              Discuss Your Requirement <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/10"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
