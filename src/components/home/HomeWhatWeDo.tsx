export function HomeWhatWeDo() {
  return (
    <section className="section-padding bg-white border-b border-[#e2e8f0]">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                WHAT WE DO
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              We connect enterprise priorities with the people and delivery capabilities required to make progress.
            </h2>
          </div>

          <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-8 pt-2">
            Our focus is on practical technology execution, specialist workforce solutions and scalable delivery models.
          </div>
        </div>
      </div>
    </section>
  );
}
