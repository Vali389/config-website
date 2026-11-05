import { Check } from "lucide-react";
import whoWeAreMeeting from "@/assets/who_we_are_reference_meeting.jpg";

export function HomeWhyUs() {
  const points = [
    "Focused talent access for specialised technology requirements.",
    "Flexible engagement models aligned to client needs.",
    "Structured recruitment and delivery governance.",
    "A practical, accountable approach from requirement definition to deployment.",
  ];

  return (
    <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Kicker & 4 Interactive Bullets */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHY CONFIGUSA
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Built for disciplined enterprise execution.
              </h2>
            </div>

            <div className="space-y-3 pt-1">
              {points.map((text, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-slate-50/80 transition-colors duration-200"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5 group-hover/item:scale-110 group-hover/item:bg-[#102B4E] transition-all duration-200 shadow-xs">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-snug group-hover/item:text-[#102B4E] transition-colors duration-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photography with subtle hover zoom */}
          <div className="lg:col-span-6">
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={whoWeAreMeeting}
                alt="Why ConfigUSA Team Collaboration"
                className="w-full h-72 sm:h-84 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B4E]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
