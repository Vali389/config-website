import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ConfigUSA — Let's Start a Conversation" },
      { name: "description", content: "Get in touch with ConfigUSA. Offices in USA, Canada, and India. Whether you're hiring talent or looking for your next role, we're here to help." },
      { property: "og:title", content: "Contact ConfigUSA" },
      { property: "og:description", content: "Talk to our team about staffing, technology, and workforce solutions." },
    ],
  }),
  component: Page,
});

const OFFICES = [
  { code: "US", country: "United States", city: "Woodbridge, New Jersey", tag: "Global Headquarters", addr: "1001 Woodbridge Center Dr, Woodbridge, NJ 07095", phone: "+1 (732) 220-2921" },
  { code: "CA", country: "Canada", city: "Toronto, Ontario", tag: "North America Hub", addr: "100 King St W, Toronto, ON M5X 1A9", phone: "+1 (732) 220-2921" },
  { code: "IN", country: "India", city: "Hyderabad, Telangana", tag: "Delivery & Tech Center", addr: "3rd Floor, Trendz Sapphire, HITEC City, Hyderabad, TS 500081", phone: "+91 40 0000 0000" },
];

const CONTACTS = [
  { icon: Phone, label: "Direct Phone", value: "+1 (732) 220-2921", href: "tel:+17322202921" },
  { icon: Mail, label: "General Inquiries", value: "info@configusa.com", href: "mailto:info@configusa.com" },
  { icon: MessageSquare, label: "Talent Desk", value: "careers@configusa.com", href: "mailto:careers@configusa.com" },
];

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "X" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
];

const SERVICES = [
  "AI & Data Solutions",
  "Digital Engineering & Cloud",
  "Enterprise Applications (SAP, Oracle)",
  "Workforce Solutions & IT Staffing",
  "Managed Delivery & Squads",
  "General Consultation",
];

const NEEDS = [
  "Immediate project need (< 2 weeks)",
  "Upcoming initiative (1–3 months)",
  "Contract / Augmentation staffing",
  "Direct hire / Executive placement",
  "Managed team / SOW delivery",
  "Exploring partnerships",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[+\d][\d\s()-]{6,}$/.test(v), "Enter a valid phone number"),
  service: z.string(),
  needs: z.string(),
  message: z.string().min(10, "Please provide at least 10 characters with your inquiry details"),
});
type FormData = z.infer<typeof schema>;

const baseInput = "w-full rounded-lg bg-slate-50/70 px-4 py-3 text-sm text-[#071326] placeholder:text-slate-400 border transition-all focus:outline-none focus:bg-white";
const okInput = "border-slate-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500";
const errInput = "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-200";

function Page() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: SERVICES[0], needs: NEEDS[0] },
  });

  const cls = (field: keyof FormData) => `${baseInput} ${errors[field] ? errInput : okInput}`;
  const Err = ({ field }: { field: keyof FormData }) =>
    errors[field] ? (
      <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
        <AlertCircle className="h-3.5 w-3.5" /> {errors[field]?.message as string}
      </span>
    ) : null;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let's Start a <br />
            <span className="text-[#f5a623] font-extrabold">Strategic Conversation.</span>
          </>
        }
        subtitle="Whether you're looking to augment your technical workforce, implement enterprise platforms, or accelerate digital transformation, our teams are ready to help."
        image={contactBg}
      >
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Send Inquiry <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#offices"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Global Locations
          </a>
        </div>
      </PageHero>

      <div className="pb-12">
        <StatsBar />
      </div>

      {/* Main contact grid & form */}
      <section id="contact-form" className="py-24 bg-white border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          {/* Left: contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-xl bg-white border border-slate-200/90 shadow-sm p-7 sm:p-8">
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Direct Communication</p>
                <h2 className="text-xl sm:text-2xl font-bold text-[#071326]">Get in Touch</h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Connect directly with our client partners and practice leads. We respond within one business day.
              </p>

              <div className="mt-6 space-y-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-xl border border-slate-200/90 p-4 hover:border-blue-400 hover:shadow-sm transition-all duration-200 bg-white"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                      <c.icon className="h-5 w-5 stroke-[1.75]" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{c.label}</div>
                      <div className="text-sm font-bold text-[#071326] group-hover:text-blue-700 transition-colors">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200/90 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 border border-slate-200 shadow-sm">
                  <Clock className="h-5 w-5 stroke-[1.75]" />
                </span>
                <h3 className="font-bold text-base text-[#071326]">Business Hours</h3>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500">Monday – Friday</span>
                <span className="font-bold text-[#071326]">8:30 AM – 6:30 PM EST</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500">Saturday – Sunday</span>
                <span className="font-bold text-[#071326]">Dedicated On-Call Support</span>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200 flex gap-2.5">
                {SOCIALS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-[#071326] hover:text-[#f5a623] hover:border-[#071326] transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: validated form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-10 relative overflow-hidden"
          >
            {sent ? (
              <div className="py-16 text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#071326]">Inquiry Sent Successfully</h3>
                <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. A senior practice lead will contact you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0a1628] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#071326] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(() => setSent(true))} noValidate>
                <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Inquiry Form</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#071326]">Send Us a Message</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Full Name *</span>
                    <input {...register("name")} className={cls("name")} placeholder="John Doe" />
                    <Err field="name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Company Name</span>
                    <input {...register("company")} className={cls("company")} placeholder="Enterprise Inc." />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Business Email *</span>
                    <input {...register("email")} className={cls("email")} placeholder="john@company.com" />
                    <Err field="email" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Phone Number</span>
                    <input {...register("phone")} className={cls("phone")} placeholder="+1 (732) 000-0000" />
                    <Err field="phone" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Practice Area</span>
                    <select {...register("service")} className={cls("service")}>
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Project Timeline</span>
                    <select {...register("needs")} className={cls("needs")}>
                      {NEEDS.map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700">Message / Scope Overview *</span>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`${cls("message")} resize-none`}
                    placeholder="Provide details about your project goals, required skills, or engagement scope…"
                  />
                  <Err field="message" />
                </label>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500">
                    We adhere to strict confidentiality and never share client information.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0a1628] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#071326] transition-colors shadow-sm"
                  >
                    Submit Inquiry <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section id="offices" className="py-24 bg-slate-50 border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Global Presence"
            title="Offices Across Three Continents"
            subtitle="Strategic corporate headquarters and delivery centers positioned across the United States, Canada, and India."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.country}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                    {o.code}
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#f5a623]">{o.country}</div>
                    <h3 className="text-base font-bold text-[#071326]">{o.city}</h3>
                  </div>
                </div>

                <div className="mt-4 inline-block text-[11px] font-semibold text-slate-500 bg-slate-100 rounded px-2 py-0.5 w-fit">
                  {o.tag}
                </div>

                <p className="mt-4 text-xs sm:text-[13px] text-slate-600 leading-relaxed flex gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-blue-600" />
                  <span>{o.addr}</span>
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#f5a623]" />
                  <span>{o.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
