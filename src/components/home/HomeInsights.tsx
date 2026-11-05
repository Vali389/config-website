import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import insight1 from "@/assets/home_template_insight_1.png";
import insight2 from "@/assets/home_template_insight_2.png";
import insight3 from "@/assets/home_template_insight_3.png";

export function HomeInsights() {
  const articles = [
    {
      title: "From pilots to production: A practical approach to enterprise AI",
      category: "Enterprise AI",
      date: "October 2026",
      readTime: "5 min read",
      image: insight1,
      to: "/resources",
      hash: "articles",
    },
    {
      title: "Building a high-performing GCC: Key talent and operating model considerations",
      category: "GCC Strategy",
      date: "September 2026",
      readTime: "6 min read",
      image: insight2,
      to: "/resources",
      hash: "articles",
    },
    {
      title: "Addressing critical skill gaps in an evolving technology landscape",
      category: "Workforce Strategy",
      date: "August 2026",
      readTime: "4 min read",
      image: insight3,
      to: "/resources",
      hash: "articles",
    },
  ];

  return (
    <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-5 space-y-3">
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
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articles.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  hash={item.hash}
                  className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:border-[#245B91] hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="relative h-36 overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#102B4E]/90 text-white backdrop-blur-xs">
                        {item.category}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
