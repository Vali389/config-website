import { Rocket, Clock, Star } from "lucide-react";
import homeCaseBuilding from "@/assets/home_template_case_building.png";

export function HomeCaseStudy() {
  return (
    <section className="section-padding bg-white border-b border-[#e2e8f0]">
      <div className="container-enterprise">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
            FEATURED CASE STUDY
          </span>
          <span className="w-10 h-[3px] bg-[#C83B43]" />
        </div>

        {/* 3-Column Split Card matching the template */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Building Image */}
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-100 shadow-xs h-56 sm:h-64">
              <img
                src={homeCaseBuilding}
                alt="Scaling a Technology Programme"
                className="w-full h-full object-cover brightness-105 contrast-105"
              />
            </div>

            {/* Middle: Content */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#102B4E] leading-snug">
                Scaling a Technology Programme with Specialised Engineering Talent
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                How ConfigUSA helped a global enterprise rapidly scale a 40-member engineering team to accelerate delivery of a critical technology initiative.
              </p>
            </div>

            {/* Right: Outcome Box */}
            <div className="lg:col-span-3 rounded-xl bg-slate-50 border border-slate-200/80 p-5 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C83B43]">
                Outcome
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
                  <span>High client satisfaction and repeat engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
