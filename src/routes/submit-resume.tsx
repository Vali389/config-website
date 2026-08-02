import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Rocket, BellRing, Handshake, FileText, Upload, Send, CheckCircle2, Search } from "lucide-react";
import { LightHero } from "@/components/LightHero";
import heroSubmit from "@/assets/hero-submit.jpg";

export const Route = createFileRoute("/submit-resume")({
  head: () => ({
    meta: [
      { title: "Submit Your Resume — Join Our Talent Network | ConfigUSA" },
      { name: "description", content: "Upload your resume to join ConfigUSA's talent network. Get matched to roles, receive job alerts, and let our recruiters find your next opportunity." },
      { property: "og:title", content: "Submit Your Resume — ConfigUSA" },
      { property: "og:description", content: "Join the ConfigUSA talent network." },
    ],
  }),
  component: Page,
});

const PERKS = [
  { icon: Rocket, title: "Priority Matching", text: "Get matched to roles that fit your skills first." },
  { icon: BellRing, title: "Job Alerts", text: "Be the first to know about new openings." },
  { icon: Handshake, title: "Recruiter Support", text: "A dedicated recruiter guides your search." },
];

const WORK_MODES = ["Remote", "Hybrid", "On-site", "Flexible"];

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
  const [file, setFile] = useState<string | null>(null);

  return (
    <>
      <LightHero
        eyebrow="Submit Your Resume"
        image={heroSubmit}
        title={<>Your Next Opportunity <span className="text-gradient-brand">Starts Here.</span></>}
        subtitle="No perfect opening yet? Join our talent network and our recruiters will reach out when the right role appears."
      >
        <Link to="/careers" className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm hover:bg-blue-50 transition-colors">
          <Search className="h-4 w-4" /> Browse Open Roles
        </Link>
      </LightHero>

      <section className="pb-24 -mt-6">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {/* Perks strip */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-start gap-3 rounded-2xl bg-white border border-border/60 p-5 shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-bold text-ink text-sm">{p.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed text-justify">{p.text}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                <h3 className="text-2xl font-extrabold text-ink">You're in the network!</h3>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                  Thanks for submitting your profile. Our recruiters will be in touch about matching roles.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 className="text-2xl font-extrabold text-ink">Create your candidate profile</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *"><input required className={inputCls} placeholder="Your name" /></Field>
                  <Field label="Email *"><input required type="email" className={inputCls} placeholder="you@email.com" /></Field>
                  <Field label="Phone *"><input required className={inputCls} placeholder="+1 (555) 000-0000" /></Field>
                  <Field label="Current / Desired Role"><input className={inputCls} placeholder="e.g. Cloud DevOps Engineer" /></Field>
                  <Field label="Experience"><input className={inputCls} placeholder="e.g. 6 years" /></Field>
                  <Field label="Location"><input className={inputCls} placeholder="City / Remote" /></Field>
                  <Field label="Preferred Work Mode">
                    <select className={inputCls}>
                      {WORK_MODES.map((m) => <option key={m}>{m}</option>)}
                    </select>
                  </Field>
                  <Field label="LinkedIn / Portfolio"><input className={inputCls} placeholder="https://" /></Field>
                </div>

                <div className="mt-5">
                  <Field label="Key Skills">
                    <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Your top skills and technologies…" />
                  </Field>
                </div>

                <div className="mt-5">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">Upload Resume *</span>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-4 py-6 hover:border-brand hover:bg-blue-50/40 transition-all">
                    {file ? <FileText className="h-5 w-5 text-brand" /> : <Upload className="h-5 w-5 text-brand" />}
                    <span className="text-sm text-muted-foreground">
                      {file ? <span className="font-semibold text-ink">{file}</span> : <>Drag & drop or <span className="font-semibold text-brand">browse</span> (PDF, DOC — max 5MB)</>}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                      onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
                    />
                  </label>
                </div>

                <button type="submit" className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform">
                  Submit Resume <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
