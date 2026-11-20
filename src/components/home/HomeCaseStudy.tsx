import { Link } from "@tanstack/react-router";
import { ArrowRight, Rocket, Clock, Star } from "lucide-react";
import caseStudyBuilding from "@/assets/featured_case_study_building.png";
import { FadeUp } from "@/components/FadeUp";

export function HomeCaseStudy() {
  return (
    <section className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <FadeUp>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                FEATURED CASE STUDY
              </span>
              <span className="w-8 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>
            <Link
              to="/case-studies"
              className="text-xs sm:text-sm font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors"
            >
              All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeUp>

        {/* Concise Featured Case Study Card matching reference UI */}
        <FadeUp delay={0.1}>
          <Link
            to="/case-studies/$slug"
            params={{ slug: "specialist-workforce-mobilisation" }}
            className="group block rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 lg:p-6 shadow-xs hover:shadow-xl hover:border-[#245B91] transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-center">
              {/* Left Column: Building Thumbnail Photo */}
              <div className="md:col-span-3 lg:col-span-3">
                <div className="relative rounded-xl overflow-hidden h-36 sm:h-40 md:h-36 lg:h-38 w-full bg-slate-100 border border-slate-200/80 shadow-xs">
                  <img
                    src={caseStudyBuilding}
                    alt="Scaling a Technology Programme with Specialised Engineering Talent"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Middle Column: Title & Description */}
              <div className="md:col-span-5 lg:col-span-5 space-y-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#102B4E] tracking-tight leading-snug group-hover:text-[#245B91] transition-colors">
                  Scaling a Technology Programme with Specialised Engineering Talent
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How ConfigUSA helped a global enterprise rapidly scale a 40-member engineering team to accelerate delivery of a critical technology initiative.
                </p>
                <div className="pt-1 inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] group-hover:text-[#245B91] transition-colors">
                  <span>Read full case study</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Right Column: Verified Outcome Box with subtle vertical border */}
              <div className="md:col-span-4 lg:col-span-4 md:border-l md:border-slate-200 md:pl-5 lg:pl-6">
                <div className="rounded-xl bg-slate-50/80 border border-slate-200/80 p-3.5 sm:p-4 space-y-2.5">
                  <span className="text-xs font-extrabold text-[#C83B43] tracking-wider uppercase block">
                    Outcome
                  </span>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-semibold">
                    <li className="flex items-center gap-2.5">
                      <Rocket className="h-4 w-4 text-[#C83B43] shrink-0" />
                      <span>40 engineers mobilised in 6 weeks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Clock className="h-4 w-4 text-[#C83B43] shrink-0" />
                      <span>30% faster delivery</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Star className="h-4 w-4 text-[#C83B43] shrink-0 fill-[#C83B43]/20" />
                      <span>High client satisfaction and repeat engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
