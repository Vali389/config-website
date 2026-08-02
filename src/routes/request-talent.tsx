import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Clock, ShieldCheck, Users, BadgeCheck, Upload, Send, CheckCircle2, Sparkles } from "lucide-react";
import { LightHero } from "@/components/LightHero";
import heroRequest from "@/assets/hero-request.jpg";

export const Route = createFileRoute("/request-talent")({
  head: () => ({
    meta: [
      { title: "Request Talent — Hire Top Professionals Faster | ConfigUSA" },
      { name: "description", content: "Tell us your hiring needs and our staffing experts will contact you within one business day with qualified, pre-vetted professionals." },
      { property: "og:title", content: "Request Talent — ConfigUSA" },
      { property: "og:description", content: "Hire top talent faster with ConfigUSA." },
    ],
  }),
  component: Page,
});

const TRUST = [
  { icon: Clock, title: "48-Hour Delivery", text: "Average time to first qualified candidates." },
  { icon: ShieldCheck, title: "Rigorously Vetted", text: "Technical screening and background checks." },
  { icon: Users, title: "10K+ Network", text: "Pre-qualified professionals across industries." },
  { icon: BadgeCheck, title: "95% Retention", text: "Placements that stay and grow with you." },
];

const HIRING_TYPES = ["Contract", "Permanent", "Contract-to-Hire", "Project-Based", "Executive Search"];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand focus:bg-white transition-all";

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <LightHero
        eyebrow="Request Talent"
        image={heroRequest}
        title={<>Hire Top Talent <span className="text-gradient-brand">Faster.</span></>}
        subtitle="Looking for qualified professionals to support your business? Share your requirements and our staffing experts will contact you within one business day."
      />

      <section className="pb-24 -mt-6">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          {/* Trust panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 rounded-3xl bg-gradient-to-br from-brand to-brand-glow p-8 text-white shadow-elegant relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <Sparkles className="h-8 w-8 text-white/90" />
            <h2 className="mt-4 text-2xl font-extrabold leading-tight">Why teams choose ConfigUSA</h2>
            <p className="mt-2 text-white/80 text-sm leading-relaxed text-justify">
              A trusted global staffing partner delivering skilled professionals at the speed your business moves.
            </p>
            <div className="mt-8 space-y-5">
              {TRUST.map((t) => (
                <div key={t.title} className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur border border-white/20">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-bold">{t.title}</div>
                    <div className="text-sm text-white/75">{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
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
                <h3 className="text-2xl font-extrabold text-ink">Request received!</h3>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                  Our staffing team will reach out within one business day with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 className="text-2xl font-extrabold text-ink">Tell us about your hiring need</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-5">
                  <Field label="Company Name *"><input required className={inputCls} placeholder="Acme Inc." /></Field>
                  <Field label="Hiring Manager *"><input required className={inputCls} placeholder="Jane Doe" /></Field>
                  <Field label="Business Email *"><input required type="email" className={inputCls} placeholder="jane@acme.com" /></Field>
                  <Field label="Phone *"><input required className={inputCls} placeholder="+1 (555) 000-0000" /></Field>
                  <Field label="Industry"><input className={inputCls} placeholder="Technology, Healthcare…" /></Field>
                  <Field label="Hiring Location"><input className={inputCls} placeholder="Remote / City" /></Field>
                  <Field label="Job Title *"><input required className={inputCls} placeholder="Senior React Developer" /></Field>
                  <Field label="Experience Required"><input className={inputCls} placeholder="e.g. 5+ years" /></Field>
                  <Field label="Hiring Type">
                    <select className={inputCls}>
                      {HIRING_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field label="Number of Positions"><input type="number" min={1} className={inputCls} placeholder="1" /></Field>
                </div>

                <div className="mt-5">
                  <Field label="Skills Required">
                    <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Key skills, tools, and technologies…" />
                  </Field>
                </div>

                <div className="mt-5">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Upload Job Description</span>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-4 py-5 hover:border-brand hover:bg-blue-50/40 transition-all">
                    <Upload className="h-5 w-5 text-brand" />
                    <span className="text-sm text-muted-foreground">Drag & drop or <span className="font-semibold text-brand">browse</span> (PDF, DOC)</span>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  </label>
                </div>

                <div className="mt-5">
                  <Field label="Additional Notes">
                    <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Anything else we should know…" />
                  </Field>
                </div>

                <button type="submit" className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform">
                  Submit Request <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
