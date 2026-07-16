import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Building2,
  Briefcase,
  BadgeDollarSign,
  CalendarDays,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { getJob, JOBS } from "@/data/jobs";

export const Route = createFileRoute("/careers/job/$jobId")({
  head: ({ params }) => {
    const job = getJob(params.jobId);
    return {
      meta: [
        { title: job ? `${job.title} — Careers at ConfigUSA` : "Job Not Found — ConfigUSA" },
        { name: "description", content: job?.summary ?? "Explore open roles at ConfigUSA." },
      ],
    };
  },
  component: JobDetailPage,
});

function JobDetailPage() {
  const { jobId } = useParams({ from: "/careers/job/$jobId" });
  const job = getJob(jobId);

  if (!job) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">Careers</p>
          <h1 className="text-3xl font-extrabold text-ink">This role isn't available</h1>
          <p className="mt-3 text-muted-foreground">The position may have been filled or moved.</p>
          <Link
            to="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all roles
          </Link>
        </div>
      </div>
    );
  }

  const related = JOBS.filter((j) => j.department === job.department && j.id !== job.id).slice(0, 3);

  const overview = [
    { icon: Building2, label: "Department", value: job.department },
    { icon: MapPin, label: "Location", value: job.location },
    { icon: Briefcase, label: "Employment", value: job.type },
    { icon: Clock, label: "Work Mode", value: job.workMode },
    { icon: BadgeDollarSign, label: "Experience", value: job.experience },
    { icon: CalendarDays, label: "Posted", value: job.posted },
  ];

  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-[#051124] pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-glow/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All Open Roles
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand/20 border border-brand-glow/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-glow">
                {job.department}
              </span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/80">
                {job.type}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {job.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-glow" /> {job.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-glow" /> {job.workMode}</span>
              <span className="flex items-center gap-1.5"><BadgeDollarSign className="h-4 w-4 text-brand-glow" /> {job.salary}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-ink">About the Role</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{job.summary}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">What You'll Do</h2>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">What We're Looking For</h2>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Nice to Have</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {job.niceToHave.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-soft border border-border px-4 py-2 text-sm font-medium text-ink">
                    <Sparkles className="h-3.5 w-3.5 text-brand" /> {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-hero p-8 text-center relative overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-glow/20 blur-3xl" />
              <h3 className="relative text-xl font-bold text-white">Ready to make your move?</h3>
              <p className="relative mt-2 text-sm text-white/75">Tell us about yourself — our team will be in touch.</p>
              <Link
                to="/contact"
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand hover:scale-105 transition-transform shadow-lg"
              >
                Apply for this Role <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-2xl bg-white border border-border/60 shadow-card p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Job Overview</h3>
                <ul className="mt-4 space-y-4">
                  {overview.map((o) => (
                    <li key={o.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand">
                        <o.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-wide text-muted-foreground">{o.label}</div>
                        <div className="text-sm font-semibold text-ink">{o.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {related.length > 0 && (
                <div className="rounded-2xl bg-soft border border-border/60 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Similar Roles</h3>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link
                          to="/careers/job/$jobId"
                          params={{ jobId: r.id }}
                          className="group block rounded-xl bg-white border border-border/60 p-4 hover:border-brand hover:shadow-card transition-all"
                        >
                          <div className="font-semibold text-sm text-ink group-hover:text-brand transition-colors">{r.title}</div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" /> {r.location}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
