import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  UserCheck,
  Compass,
  Building2,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import heroTemplateContact from "@/assets/hero_template_contact.png";
import { InteractiveLeafletMap } from "@/components/InteractiveLeafletMap";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ConfigUSA — Tell Us What You Need to Achieve" },
      {
        name: "description",
        content:
          "Whether you are building a team, addressing a specialist skill gap or exploring a technology initiative, share a few details. Our team will review the requirement and identify the appropriate next step.",
      },
      { property: "og:title", content: "Contact ConfigUSA" },
      {
        property: "og:description",
        content:
          "Tell us what you need to achieve. Enterprise technology, specialist workforce and GCC enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

// Blueprint Section 14: Area of interest options
const AREAS_OF_INTEREST = [
  "Technology & AI initiatives",
  "Forward-Deployed Engineering",
  "Enterprise Applications (Workday, SAP, MuleSoft, Salesforce)",
  "Specialist Workforce & Staffing",
  "GCC Establishment & Scaling",
  "General Enterprise Enquiry",
];

// Blueprint Section 14: What to expect
const WHAT_TO_EXPECT = [
  {
    icon: Clock,
    title: "Prompt review & acknowledgement",
    desc: "Enquiries are reviewed by practice leads and acknowledged within one business day.",
  },
  {
    icon: UserCheck,
    title: "Consultative technical conversation",
    desc: "Connect directly with domain practitioners who understand your technical environment.",
  },
  {
    icon: Compass,
    title: "Clear assessment & engagement plan",
    desc: "Transparent assessment of skill availability, timelines and recommended engagement models.",
  },
];

// Verified Offices per Blueprint Section 2, 10, 14
const OFFICES = [
  {
    city: "United States",
    tag: "Global Headquarters",
    address: "666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536",
    phone: "+1 (609) 934-3184",
  },
  {
    city: "Canada",
    tag: "North America Hub",
    address: "1585 Markham Road, Suite # 309, Toronto, ON M1B 2W1",
    phone: "+1 (647) 557-6968",
  },
  {
    city: "India",
    tag: "Delivery & Engineering Center",
    address: "Trendz Sapphire, 3rd Floor, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    phone: "+91 80746 83380",
  },
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(2, "Please enter your company name"),
  jobTitle: z.string().min(2, "Please enter your job title"),
  areaOfInterest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Please describe your requirement"),
  timeline: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof schema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      areaOfInterest: AREAS_OF_INTEREST[0],
      timeline: "Immediate / Within 1 month",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden pointer-events-none z-0">
          <img
            src={heroTemplateContact}
            alt="Contact ConfigUSA"
            className="h-full w-full object-cover object-right brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/40 to-transparent lg:from-[#102B4E] lg:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E] to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                CONTACT CONFIGUSA
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Tell us what you need to achieve.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              Whether you are building a team, addressing a specialist skill gap or exploring a technology initiative, share a few details. Our team will review the requirement and identify the appropriate next step.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#enquiry-form"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Submit Your Enquiry <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/careers"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Career Enquiries <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Enterprise Enquiry Form & Context                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="enquiry-form" className="section-padding bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#F3F5F8] border border-slate-200/90 rounded-2xl p-8 lg:p-10 shadow-xs">
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    ENTERPRISE ENQUIRY
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#102B4E] tracking-tight">
                  Share details of your upcoming requirement.
                </h2>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white border border-slate-200 text-center space-y-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-[#C83B43] mx-auto border border-red-100">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E]">Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A capability or workforce lead will review your requirement details and respond within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-cta-secondary inline-flex text-xs font-bold mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E]"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="john@enterprise.com"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        {...register("company")}
                        placeholder="Enterprise Org"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E]"
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.company.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Job Title / Role *
                      </label>
                      <input
                        type="text"
                        {...register("jobTitle")}
                        placeholder="VP Engineering / Director"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E]"
                      />
                      {errors.jobTitle && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.jobTitle.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Area of Interest *
                      </label>
                      <select
                        {...register("areaOfInterest")}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E] bg-white"
                      >
                        {AREAS_OF_INTEREST.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Expected Timeline (Optional)
                      </label>
                      <select
                        {...register("timeline")}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E] bg-white"
                      >
                        <option value="Immediate / Within 1 month">Immediate / Within 1 month</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="Planning / Exploratory">Planning / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Brief Description of Requirement *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Briefly describe the initiative, technical environment, desired skill profile or delivery challenge..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#102B4E] focus:outline-none focus:border-[#102B4E]"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-[#C83B43]">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md cursor-pointer disabled:opacity-70"
                    >
                      {submitting ? "Submitting..." : "Submit Your Enquiry"}{" "}
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Context & What to Expect Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                    WHAT TO EXPECT
                  </span>
                  <span className="w-10 h-[3px] bg-[#C83B43]" />
                </div>
                <h3 className="text-xl font-bold text-[#102B4E] tracking-tight mb-5">
                  Responsive, practitioner-led assessment.
                </h3>

                <div className="space-y-4">
                  {WHAT_TO_EXPECT.map((item) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl bg-[#F3F5F8] border border-slate-200/90 flex items-start gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#C83B43] border border-red-100/60">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#102B4E]">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Separate Candidate Route per Blueprint Section 14 */}
              <div className="p-6 rounded-xl border border-slate-200/90 bg-white shadow-xs">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#C83B43] border border-red-100">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#102B4E]">Looking for Career Opportunities?</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Candidates should submit resumes via our dedicated Careers portal rather than enterprise sales enquiries.
                    </p>
                    <Link
                      to="/careers"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C83B43] hover:text-[#a82e35] mt-3"
                    >
                      <span>Explore open roles on Careers</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="p-6 rounded-xl bg-[#102B4E] text-white space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Business Channels</h4>
                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#245B91]" />
                    <span>Business Enquiries: <a href="mailto:contact@config-usa.com" className="text-white hover:underline font-semibold">contact@config-usa.com</a></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#245B91]" />
                    <span>Global HQ Phone: <a href="tel:+16099343184" className="text-white hover:underline font-semibold">+1 (609) 934-3184</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Verified Offices Section                                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                OFFICE LOCATIONS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              Confirmed operating offices and delivery centres.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                className="rounded-xl bg-white border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C83B43] bg-red-50 border border-red-100 px-2.5 py-1 rounded">
                      <Building2 className="h-3.5 w-3.5" />
                      {o.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">{o.city}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{o.address}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Phone className="h-3.5 w-3.5 text-[#245B91]" />
                  <a href={`tel:${o.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#245B91]">
                    {o.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Interactive Map Section (Preserved below per user rule)          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
              GLOBAL MAP
            </span>
            <span className="w-10 h-[3px] bg-[#C83B43]" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#102B4E] tracking-tight mb-8">
            Interactive Global Locations Map
          </h3>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <InteractiveLeafletMap />
          </div>
        </div>
      </section>
    </div>
  );
}
