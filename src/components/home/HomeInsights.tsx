import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import insight1 from "@/assets/home_template_insight_1.png";
import insight2 from "@/assets/home_template_insight_2.png";
import insight3 from "@/assets/home_template_insight_3.png";

export function HomeInsights() {
  const articles = [
    {
      title: "From pilots to production: A practical approach to enterprise AI",
      image: insight1,
      to: "/resources",
      hash: "articles",
    },
    {
      title: "Building a high-performing GCC: Key talent and operating model considerations",
      image: insight2,
      to: "/resources",
      hash: "articles",
    },
    {
      title: "Addressing critical skill gaps in an evolving technology landscape",
      image: insight3,
      to: "/resources",
      hash: "articles",
    },
  ];

  return (
    <section className="section-padding bg-white border-b border-[#e2e8f0]">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                INSIGHTS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-[#102B4E] tracking-tight leading-snug">
              Explore practical perspectives on enterprise technology, GCC growth, specialist talent and workforce transformation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articles.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  hash={item.hash}
                  className="group flex flex-col justify-between rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:border-[#245B91]/50 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="relative h-32 overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xs sm:text-sm font-bold text-[#102B4E] leading-snug group-hover:text-[#245B91] transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C83B43] group-hover:text-[#a82e35] transition-colors">
                      <span>Read insight</span>
                      <ArrowRight className="h-3 w-3" />
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
