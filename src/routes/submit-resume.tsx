import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Rocket, BellRing, Handshake, FileText, Upload, Send, CheckCircle2, Search, ArrowRight } from "lucide-react";
import careersHeroBg from "@/assets/mutliclutural-careers-bg.png";

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
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* Hero Section (Edge-to-Edge Navy Hero matching Careers design)       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={careersHeroBg}
            alt="ConfigUSA Talent Network"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105 opacity-40 lg:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/85 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[600px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                SUBMIT YOUR RESUME
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Your Next Opportunity Starts Here.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              No perfect opening yet? Join our talent network and our specialist recruiters will connect when an aligned enterprise role emerges.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/careers"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold bg-white/10 text-white hover:bg-white hover:text-[#102B4E] border-white/20"
              >
                <Search className="h-4 w-4" /> Browse Open Roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* Perks and Submission Form Section                                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {/* Perks strip */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-center gap-3.5 rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-[#245B91]">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-bold text-[#102B4E] text-sm">{p.title}</div>
                  <div className="text-xs text-slate-500 leading-snug mt-0.5">{p.text}</div>
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
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#102B4E]" />
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
                <h3 className="text-2xl font-extrabold text-[#102B4E]">You're in the network!</h3>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                  Thanks for submitting your profile. Our recruiters will be in touch about matching roles.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 className="text-2xl font-extrabold text-[#102B4E]">Create your candidate profile</h3>
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
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-4 py-6 hover:border-[#102B4E] hover:bg-blue-50/40 transition-all">
                    {file ? <FileText className="h-5 w-5 text-[#245B91]" /> : <Upload className="h-5 w-5 text-[#245B91]" />}
                    <span className="text-sm text-muted-foreground">
                      {file ? <span className="font-semibold text-ink">{file}</span> : <>Drag & drop or <span className="font-semibold text-[#245B91]">browse</span> (PDF, DOC — max 5MB)</>}
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

                <button type="submit" className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#102B4E] px-8 py-4 text-sm font-bold text-white hover:bg-[#245B91] transition-all">
                  Submit Resume <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
