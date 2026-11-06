import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { ARTICLES } from "@/data/insights";

export function HomeInsights() {
  const articles = ARTICLES.slice(0, 3);

  return (
    <section className="py-8 lg:py-10 bg-white border-b border-slate-100">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
          <FadeUp className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                INSIGHTS & PERSPECTIVES
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-snug">
              Practical viewpoints on enterprise technology and talent transformation.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              In-depth analysis, verified field experience and strategic commentary from our delivery teams.
            </p>
          </FadeUp>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articles.map((item, index) => (
                <FadeUp key={item.slug} delay={index * 0.1}>
                  <Link
                    to={`/resources/${item.slug}` as any}
                    className="group flex flex-col justify-between h-full rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:border-[#245B91] hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:z-20 relative"
                  >
                    <div>
                      <div className="relative h-36 overflow-hidden bg-slate-100">
                        <img
                          src={item.cardImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#102B4E]/90 text-white backdrop-blur-xs">
                          {item.topic}
                        </span>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.readTime}
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-[13px] font-bold text-[#102B4E] leading-snug group-hover:text-[#245B91] transition-colors line-clamp-3">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C83B43] group-hover:text-[#245B91] transition-colors">
                        <span>Read insight</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* View all insights footer link */}
        <FadeUp delay={0.2} className="flex justify-end pt-2">
          <Link
            to="/resources"
            className="text-xs font-bold text-[#C83B43] hover:text-[#a82e35] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Explore all insights and perspectives</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
