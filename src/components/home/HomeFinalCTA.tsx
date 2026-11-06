import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export function HomeFinalCTA() {
  return (
    <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
      <div className="container-enterprise">
        <FadeUp>
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Have a critical role, capability gap or delivery challenge?
              </h2>
            </div>

            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Let us understand the requirement and identify the right way forward.
            </div>

            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
