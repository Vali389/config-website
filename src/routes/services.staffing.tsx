import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  UserCheck,
  Briefcase,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import workforceSolutionsHero from "@/assets/workforce-solutions-hero.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      {
        title: "Workforce Solutions & Engagement Models — ConfigUSA",
      },
      {
        name: "description",
        content:
          "Different business needs require different workforce models. ConfigUSA works with clients to align the engagement structure to role criticality, duration, hiring urgency and delivery ownership.",
      },
      {
        property: "og:title",
        content: "Workforce Solutions & Engagement Models | ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Flexible workforce models. Clear delivery expectations. Contract staffing, contract-to-hire, direct placement and managed workforce.",
      },
    ],
  }),
  component: WorkforceSolutionsPage,
});

// Blueprint Section 9: Engagement models (4 Models)
const ENGAGEMENT_MODELS = [
  {
    icon: Users,
    title: "Contract Staffing",
    desc: "Access specialist professionals for defined roles and durations. Suitable for project demand, temporary capacity needs and specialist skill gaps.",
  },
  {
    icon: UserCheck,
    title: "Contract-to-Hire",
    desc: "Engage a professional for an agreed evaluation period, with the option to consider permanent employment subject to the agreed commercial and legal terms.",
  },
  {
    icon: Briefcase,
    title: "Direct Placement",
    desc: "Recruit permanent professionals for specialist, managerial and leadership positions through a structured search and selection process.",
  },
  {
    icon: Layers,
    title: "Managed Workforce / Delivery",
    desc: "Mobilise and coordinate a defined group of professionals against agreed scope, service expectations, governance and reporting. The exact delivery accountability must be stated in the contract.",
  },
];

// Blueprint Section 9: How to choose criteria
const HOW_TO_CHOOSE_CRITERIA = [
  "Role criticality and technical skill availability in target markets.",
  "Project duration, flexibility requirements and hiring urgency.",
  "Location requirements, working arrangements and supervision models.",
  "Compliance verification, onboarding standards and data security controls.",
];

function WorkforceSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={workforceSolutionsHero}
            alt="Workforce Solutions and Strategy"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                WORKFORCE SOLUTIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Flexible workforce models. Clear delivery expectations.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Different business needs require different workforce models. ConfigUSA works with clients to align the engagement structure to role criticality, duration, hiring urgency and delivery ownership.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#engagement-models"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Select an Engagement Model <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Discuss Hiring Needs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Engagement Models (Template Card Grid)                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="engagement-models" className="section-padding bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  COMMERCIAL STRUCTURES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Engagement models aligned to your operational requirements.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Select contract staffing, contract-to-hire, direct placement, or managed workforce delivery based on your project goals and hiring timelines.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="group rounded-xl border border-slate-200/80 bg-white p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <model.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-2.5">
                    {model.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: How to choose (Split 2-Col with Photo)                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    HOW TO CHOOSE
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                  Structuring the engagement around your operating reality.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  We consider the required skills, duration, urgency, location, supervision model, compliance requirements and desired outcome before recommending an engagement structure.
                </p>
              </div>

              <div className="space-y-3.5">
                {HOW_TO_CHOOSE_CRITERIA.map((criterion) => (
                  <div key={criterion} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 leading-snug">
                      {criterion}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={wdWorkforce}
                  alt="Workforce Strategy & Selection"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Have an immediate talent requirement?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Share the role specifications and we will begin identifying qualified candidates.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Select an Engagement Model <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
