import { FadeUp } from "@/components/FadeUp";

export function HomeWhatWeDo() {
  return (
    <section className="py-6 lg:py-8 bg-white border-b border-slate-100">
      <div className="container-enterprise">
        <FadeUp>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHAT WE DO
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#102B4E] tracking-tight leading-[1.2]">
                We connect enterprise priorities with the people and delivery capabilities required to make progress.
              </h2>
            </div>

            <div className="lg:col-span-5 flex items-center lg:border-l-2 lg:border-slate-200 lg:pl-8 text-slate-600 text-base sm:text-lg leading-relaxed self-stretch">
              <p>
                Our focus is on practical technology execution, specialist workforce solutions and scalable delivery models.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
