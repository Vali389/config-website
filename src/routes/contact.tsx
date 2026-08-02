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
  { code: "US", country: "USA", city: "New Jersey", addr: "1001 Woodbridge Center Dr, Woodbridge, NJ 07095" },
  { code: "CA", country: "Canada", city: "Toronto", addr: "100 King St W, Toronto, ON M5X 1A9" },
  { code: "IN", country: "India", city: "Hyderabad", addr: "3rd Floor, Trendz Sapphire, HITEC City, Hyderabad, TS 500081" },
];

const CONTACTS = [
  { icon: Phone, label: "Call Us", value: "+1 (732) 220-2921", href: "tel:+17322202921" },
  { icon: Mail, label: "Email Us", value: "info@configusa.com", href: "mailto:info@configusa.com" },
  { icon: MessageSquare, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/17322202921" },
];

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn", hover: "hover:bg-[#0A66C2]" },
  { Icon: Twitter, label: "X", hover: "hover:bg-black" },
  { Icon: Facebook, label: "Facebook", hover: "hover:bg-[#1877F2]" },
  { Icon: Instagram, label: "Instagram", hover: "hover:bg-[#E4405F]" },
  { Icon: Youtube, label: "YouTube", hover: "hover:bg-[#FF0000]" },
];

const SERVICES = ["IT Staffing & Augmentation", "Software Development", "SAP Solutions", "Digital Assessment", "Other / Not sure"];
const NEEDS = ["Contract", "Permanent", "Contract-to-Hire", "Project Team", "Just exploring"];

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
  message: z.string().min(10, "Please add a little more detail (at least 10 characters)"),
});
type FormData = z.infer<typeof schema>;

const baseInput = "w-full rounded-xl bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 border transition-all focus:outline-none focus:bg-white";
const okInput = "border-slate-200 focus:ring-2 focus:ring-brand/30 focus:border-brand";
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
      {/* Hero — zooming background image (hero only) */}
      <section className="relative overflow-hidden pt-36 pb-24 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={contactBg} alt="" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/50 to-white/85" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-3xl px-4 lg:px-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> Contact Us
          </span>
          <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.12] tracking-tight [text-shadow:0_1px_22px_rgba(255,255,255,0.9)]">
            Let's Start a <span className="text-gradient-brand">Conversation.</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed text-justify [text-shadow:0_1px_14px_rgba(255,255,255,0.85)]">
            Whether you're hiring top talent or looking for your next opportunity, our team is here to help — and we respond within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/request-talent" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform">
              Request Talent <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/careers" className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm hover:bg-blue-50 transition-colors">
              Find a Job
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Contact + form (clean, no background image) */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          {/* Left: contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="rounded-3xl bg-white border border-border/60 shadow-card p-7">
              <h2 className="text-xl font-extrabold text-ink">Get in Touch</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">Reach us directly through any channel below.</p>
              <div className="mt-6 space-y-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border/60 p-4 hover:border-brand hover:bg-blue-50/40 transition-all"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[0.7rem] font-bold uppercase tracking-wide text-muted-foreground">{c.label}</div>
                      <div className="text-sm font-semibold text-ink group-hover:text-brand transition-colors">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-border/60 shadow-card p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-ink">Business Hours</h3>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monday – Friday</span>
                <span className="font-semibold text-ink">9:30 AM – 6:30 PM</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Saturday – Sunday</span>
                <span className="font-semibold text-ink">Closed</span>
              </div>
              <div className="mt-6 flex gap-2.5">
                {SOCIALS.map(({ Icon, label, hover }) => (
                  <a key={label} href="#" target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink/60 hover:text-white hover:border-transparent transition-all ${hover}`}>
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
            className="rounded-3xl bg-white border border-border/60 shadow-elegant p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand" />
            {sent ? (
              <div className="py-16 text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow"
                >
                  <CheckCircle2 className="h-10 w-10" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-ink">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(() => setSent(true))} noValidate>
                <h3 className="text-2xl font-extrabold text-ink">Send Us a Message</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we'll be in touch shortly.</p>
                <div className="mt-7 grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Full Name *</span>
                    <input {...register("name")} className={cls("name")} placeholder="Your name" />
                    <Err field="name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Company Name</span>
                    <input {...register("company")} className={cls("company")} placeholder="Your company" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Business Email *</span>
                    <input {...register("email")} className={cls("email")} placeholder="you@company.com" />
                    <Err field="email" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Phone Number</span>
                    <input {...register("phone")} className={cls("phone")} placeholder="+1 (555) 000-0000" />
                    <Err field="phone" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Services Required</span>
                    <select {...register("service")} className={cls("service")}>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Hiring Needs</span>
                    <select {...register("needs")} className={cls("needs")}>{NEEDS.map((n) => <option key={n}>{n}</option>)}</select>
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Message *</span>
                  <textarea {...register("message")} rows={5} className={`${cls("message")} resize-none`} placeholder="Tell us about your project or requirement…" />
                  <Err field="message" />
                </label>
                <button type="submit" className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/40 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand mb-3">Global Presence</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">Offices Across Three Continents</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.country}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-white p-7 shadow-card border border-border/50 hover:shadow-elegant hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white text-sm font-black tracking-wide shadow-glow">
                    {o.code}
                  </span>
                  <div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand">{o.country}</div>
                    <h3 className="text-lg font-bold text-ink">{o.city}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed text-justify flex gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand" />
                  {o.addr}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
