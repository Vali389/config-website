import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export function HomeCaseStudy() {
  return (
    <section className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container-enterprise">
        <FadeUp>
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
        </FadeUp>

        {/* 4-Column Structured Case Study Card matching client approved layout (Screenshot 3) */}
        <FadeUp delay={0.1}>
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-9 space-y-7">
            {/* Header Badges & Title */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#102B4E] text-white">
                  Specialist Workforce Mobilisation
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Sector: Global Enterprise Technology
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Scaling a Technology Programme with Specialised Engineering Talent
              </h3>
            </div>

            {/* 4 Cards: Client Context, Business Challenge, ConfigUSA Approach, Execution & Delivery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* 1. Client Context */}
              <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 space-y-2.5 hover:bg-white hover:border-[#245B91] hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#102B4E] uppercase">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[#102B4E] text-[10px]">
                    1
                  </span>
                  <span>Client Context</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  A global enterprise technology organisation required rapid engineering scale to accelerate a multi-region cloud modernisation initiative.
                </p>
              </div>

              {/* 2. Business Challenge */}
              <div className="rounded-2xl border border-red-100 bg-red-50/20 p-5 space-y-2.5 hover:bg-white hover:border-[#C83B43] hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#C83B43] uppercase">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[#C83B43] text-[10px]">
                    2
                  </span>
                  <span>Business Challenge</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Urgent need to mobilise and integrate a 40-member engineering squad across distributed workflows without compromising technical quality, security or architectural consistency.
                </p>
              </div>

              {/* 3. ConfigUSA Approach */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/20 p-5 space-y-2.5 hover:bg-white hover:border-[#245B91] hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#245B91] uppercase">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#245B91] text-[10px]">
                    3
                  </span>
                  <span>ConfigUSA Approach</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  ConfigUSA deployed a dedicated talent acquisition pod that screened over 280 technical specialists, qualifying candidates through practitioner-led technical evaluations.
                </p>
              </div>

              {/* 4. Execution & Delivery */}
              <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 space-y-2.5 hover:bg-white hover:border-[#102B4E] hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-700 uppercase">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-700 text-[10px]">
                    4
                  </span>
                  <span>Execution & Delivery</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Mobilised 40 vetted engineers in three phased cohorts over six weeks with standardized sprint governance, compliance readiness and integration into client CI/CD pipelines.
                </p>
              </div>
            </div>

            {/* Bottom Bar: Verified Outcomes & Impact */}
            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#C83B43]">
                <CheckCircle2 className="h-4 w-4 text-[#C83B43]" />
                <span>Verified Outcomes & Impact</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-[12.5px] font-semibold text-[#102B4E]">
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                  <span>40 engineers mobilised in 6 weeks against an aggressive timeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                  <span>30% faster time to delivery compared to initial internal estimates</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                  <span>100% milestone delivery adherence across all scheduled sprints</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C83B43] mt-1.5 shrink-0" />
                  <span>Zero compliance deviations and sustained multi-year partnership</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
