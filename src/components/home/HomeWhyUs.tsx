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
    <section className="section-padding bg-white border-b border-[#e2e8f0]">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Kicker & 4 Bullets with Red Checkmarks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                WHY CONFIGUSA
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <div className="space-y-4 pt-2">
              {points.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src={whoWeAreMeeting}
                alt="Why ConfigUSA Team Collaboration"
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
