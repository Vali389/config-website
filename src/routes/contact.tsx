import React, { useState, useEffect } from "react";
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
  ChevronDown,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import contactHeroBg from "@/assets/us-contact.png";
import { InteractiveLeafletMap } from "@/components/InteractiveLeafletMap";
import { CorporateToast } from "@/components/CorporateToast";

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

const TIMELINE_OPTIONS = [
  "Immediate / Within 1 month",
  "1–3 months",
  "3–6 months",
  "Planning / Exploratory",
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

// 4 Confirmed Operating Hubs (United States, Canada, Hyderabad, Bengaluru)
const OFFICES = [
  {
    city: "United States",
    tag: "Global Headquarters",
    address: "666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536",
    phone: "+1 (609) 934-3184",
    email: "info@configusa.com",
  },
  {
    city: "Canada",
    tag: "North America Hub",
    address: "1585 Markham Road, Suite # 309, Toronto, ON M1B 2W1",
    phone: "+1 (647) 557-6968",
    email: "canada@configusa.com",
  },
  {
    city: "India – Hyderabad",
    tag: "Delivery & Technology Center",
    address: "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    phone: "+91 80746 83380",
    email: "india@configusa.com",
  },
  {
    city: "India – Bengaluru",
    tag: "Delivery & Engineering Center",
    address: "Ardent office one Tech park, Tower A - S 1220, 2nd floor, Hoodi Circle, ITPL Main Road, Hoodi, Mahadevapura, Bengaluru, Karnataka – 560048",
    phone: "+91 80746 83380",
    email: "india@configusa.com",
  },
];

const schema = z
  .object({
    name: z.string().trim().min(2, "Full name is required"),
    email: z.string().trim().optional().or(z.literal("")),
    phone: z.string().trim().optional().or(z.literal("")),
    company: z.string().trim().min(2, "Company name is required"),
    jobTitle: z.string().trim().min(2, "Job title is required"),
    areaOfInterest: z.string().min(1, "Please select an area of interest"),
    timeline: z.string().optional(),
    message: z.string().trim().min(10, "Please describe your requirement (min 10 characters)"),
    honeypot: z.string().max(0, "Bot detected"),
  })
  .superRefine((data, ctx) => {
    const hasEmail = Boolean(data.email && data.email.trim().length > 0);
    const hasPhone = Boolean(data.phone && data.phone.trim().length > 0);

    // Either email or phone is required
    if (!hasEmail && !hasPhone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email is required",
        path: ["email"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone number is required",
        path: ["phone"],
      });
    }

    if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email!.trim())) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid work email",
          path: ["email"],
        });
      }
    }

    if (hasPhone) {
      const cleaned = data.phone!.replace(/[^0-9+]/g, "");
      if (cleaned.length < 7) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid phone number",
          path: ["phone"],
        });
      }
    }
  });

type ContactFormData = z.infer<typeof schema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Smooth scroll to enquiry form when navigating with #enquiry-form hash
  useEffect(() => {
    const handleScrollToForm = () => {
      const hash = window.location.hash;
      if (hash === "#enquiry-form" || hash === "#contact-form" || hash === "#form") {
        const el = document.getElementById("enquiry-form") || document.getElementById("contact-form");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    handleScrollToForm();
    const t1 = setTimeout(handleScrollToForm, 80);
    const t2 = setTimeout(handleScrollToForm, 250);
    const t3 = setTimeout(handleScrollToForm, 500);

    window.addEventListener("hashchange", handleScrollToForm);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("hashchange", handleScrollToForm);
    };
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      areaOfInterest: AREAS_OF_INTEREST[0],
      timeline: TIMELINE_OPTIONS[0],
      message: "",
      honeypot: "",
    },
  });

  const nameVal = watch("name");
  const emailVal = watch("email");
  const phoneVal = watch("phone");
  const compVal = watch("company");
  const titleVal = watch("jobTitle");
  const msgVal = watch("message");

  const hasValidContact =
    (Boolean(emailVal?.trim()) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal!.trim())) ||
    (Boolean(phoneVal?.trim()) && phoneVal!.replace(/[^0-9+]/g, "").length >= 7);

  const isFormValid = Boolean(
    nameVal?.trim().length >= 2 &&
    compVal?.trim().length >= 2 &&
    titleVal?.trim().length >= 2 &&
    msgVal?.trim().length >= 10 &&
    hasValidContact
  );

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  const inputClass = (hasError?: boolean) =>
    `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#102B4E] transition-all outline-none focus:outline-none ${
      hasError
        ? "border-red-500 bg-white focus:border-red-600 shadow-[0_0_0_1px_rgba(239,68,68,0.25)]"
        : "border-slate-300 hover:border-slate-400 focus:border-[#102B4E]"
    }`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Animated Blue-Red Toast */}
      <CorporateToast
        show={submitted}
        title="Enquiry Submitted Successfully!"
        message="Thank you for reaching out. A senior solutions partner has received your initiative details and will contact you within 1 business day."
        onDismiss={() => setSubmitted(false)}
        durationMs={6500}
      />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={contactHeroBg}
            alt="Contact ConfigUSA"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012056] via-[#012056]/95 via-30% md:via-40% to-transparent to-62% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#012056]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
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
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("enquiry-form");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", "#enquiry-form");
                }}
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
      <section id="enquiry-form" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
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
                        placeholder="Enter your name"
                        className={inputClass(Boolean(errors.name))}
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
                        {...register("email", {
                          onBlur: () => {
                            trigger(["email", "phone"]);
                          },
                          onChange: () => {
                            if (errors.phone) trigger("phone");
                          },
                        })}
                        placeholder="Enter email"
                        className={inputClass(Boolean(errors.email))}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          onBlur: () => {
                            trigger(["email", "phone"]);
                          },
                          onChange: () => {
                            if (errors.email) trigger("email");
                          },
                        })}
                        placeholder="Enter phone number"
                        className={inputClass(Boolean(errors.phone))}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        {...register("company")}
                        placeholder="Enter company name"
                        className={inputClass(Boolean(errors.company))}
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-[#C83B43]">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Job Title / Role *
                    </label>
                    <input
                      type="text"
                      {...register("jobTitle")}
                      placeholder="Enter job title / role"
                      className={inputClass(Boolean(errors.jobTitle))}
                    />
                    {errors.jobTitle && (
                      <p className="mt-1 text-xs text-[#C83B43]">{errors.jobTitle.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Area of Interest *
                      </label>
                      <Select
                        value={watch("areaOfInterest") || AREAS_OF_INTEREST[0]}
                        onValueChange={(val) => {
                          setValue("areaOfInterest", val, { shouldValidate: true, shouldDirty: true });
                        }}
                      >
                        <SelectTrigger className="w-full h-11 bg-white border-slate-300">
                          <SelectValue placeholder="Select Area of Interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {AREAS_OF_INTEREST.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                        Expected Timeline (Optional)
                      </label>
                      <Select
                        value={watch("timeline") || TIMELINE_OPTIONS[0]}
                        onValueChange={(val) => {
                          setValue("timeline", val, { shouldValidate: true, shouldDirty: true });
                        }}
                      >
                        <SelectTrigger className="w-full h-11 bg-white border-slate-300">
                          <SelectValue placeholder="Select Expected Timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIMELINE_OPTIONS.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Brief Description of Requirement *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your initiative, technical environment, desired skill profile or delivery challenge..."
                      className={inputClass(Boolean(errors.message))}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-[#C83B43]">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isFormValid || submitting}
                      className={`inline-flex items-center justify-center gap-2 text-sm font-bold rounded-lg px-6 py-3 transition-all duration-200 shadow-sm w-full sm:w-auto ${
                        !isFormValid || submitting
                          ? "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300 shadow-none"
                          : "bg-[#C83B43] text-white hover:bg-[#b03037] active:scale-[0.99] cursor-pointer shadow-md hover:shadow-lg"
                      }`}
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
                    <span>Business Enquiries: <a href="mailto:info@configusa.com" className="text-white hover:underline font-semibold">info@configusa.com</a></span>
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
      {/* 3. Confirmed Office Locations (4 Global Hubs)                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#102B4E]">
                OUR LOCATIONS
              </h2>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                className="group rounded-xl bg-white border border-slate-200/80 p-5 shadow-xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-400 hover:ring-2 hover:ring-amber-400/25 hover:bg-slate-50/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C83B43] bg-red-50 border border-red-100 px-2 py-0.5 rounded transition-colors duration-200 group-hover:bg-[#C83B43] group-hover:text-white group-hover:border-[#C83B43]">
                      <Building2 className="h-3 w-3" />
                      {o.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#102B4E] tracking-tight mb-1.5 transition-colors duration-200 group-hover:text-[#102B4E]">{o.city}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{o.address}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#245B91]" />
                    <a href={`tel:${o.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#245B91]">
                      {o.phone}
                    </a>
                  </div>
                  {o.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-[#245B91]" />
                      <a href={`mailto:${o.email}`} className="text-slate-600 hover:text-[#245B91] hover:underline">
                        {o.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Interactive Map Section                                          */}
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
