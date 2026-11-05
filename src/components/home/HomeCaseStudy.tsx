import { Link } from "@tanstack/react-router";
import { Rocket, Clock, Star, ArrowRight } from "lucide-react";
import homeCaseBuilding from "@/assets/home_template_case_building.png";

export function HomeCaseStudy() {
  return (
    <section className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
              FEATURED CASE STUDY
            </span>
            <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
          </div>
          <Link
            to="/case-studies"
            className="text-xs sm:text-sm font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors"
          >
            All Case Studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3-Column Split Card with Interactive Hover */}
        <Link
          to="/case-studies"
          className="group block rounded-2xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-8 hover:-translate-y-1 hover:border-[#245B91] hover:shadow-xl transition-all duration-300"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Building Image with hover zoom */}
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-100 shadow-xs h-56 sm:h-64 bg-slate-100">
              <img
                src={homeCaseBuilding}
                alt="Scaling a Technology Programme"
                className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Middle: Content */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-[#102B4E]">
                Specialist Workforce Mobilisation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#102B4E] leading-snug group-hover:text-[#245B91] transition-colors duration-200">
                Scaling a Technology Programme with Specialised Engineering Talent
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                How ConfigUSA helped a global enterprise rapidly scale a 40-member engineering team to accelerate delivery of a critical technology initiative.
              </p>
            </div>

            {/* Right: Outcome Box */}
            <div className="lg:col-span-3 rounded-xl bg-slate-50 border border-slate-200/80 p-5 space-y-3.5 group-hover:bg-red-50/20 group-hover:border-red-100 transition-colors duration-300">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C83B43]">
                Verified Outcome
              </h4>
              <div className="space-y-3 text-xs font-semibold text-[#102B4E]">
                <div className="flex items-center gap-2.5">
                  <Rocket className="h-4 w-4 text-[#C83B43] shrink-0" />
                  <span>40 engineers mobilised in 6 weeks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#C83B43] shrink-0" />
                  <span>30% faster delivery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Star className="h-4 w-4 text-[#C83B43] shrink-0" />
                  <span>High client satisfaction & repeat engagement</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
