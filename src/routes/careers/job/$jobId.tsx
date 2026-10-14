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
      <div className="flex min-h-[70vh] items-center justify-center px-4 pt-24 bg-white">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-2">Careers</p>
          <h1 className="text-3xl font-bold text-[#071326]">Position Not Available</h1>
          <p className="mt-3 text-slate-500 text-sm">This role may have been filled or the link has changed.</p>
          <Link
            to="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071326] px-6 py-3 text-sm font-bold text-white hover:bg-blue-900 transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all open roles
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
      <section className="relative overflow-hidden bg-[#071326] pt-32 pb-16 text-white border-b border-slate-800">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#f5a623]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#f5a623] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All Open Positions
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#f5a623] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#071326]">
                {job.department}
              </span>
              <span className="rounded-md bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold text-white/90">
                {job.type}
              </span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {job.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#f5a623]" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#f5a623]" /> {job.workMode}
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeDollarSign className="h-4 w-4 text-[#f5a623]" /> {job.salary}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
                <h2 className="text-xl font-bold text-[#071326]">About the Role</h2>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{job.summary}</p>
            </div>

            <div>
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
                <h2 className="text-xl font-bold text-[#071326]">What You'll Do</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f5a623] mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
                <h2 className="text-xl font-bold text-[#071326]">Requirements & Competencies</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f5a623] mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.niceToHave && job.niceToHave.length > 0 && (
              <div>
                <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-3">
                  <h2 className="text-xl font-bold text-[#071326]">Nice to Have</h2>
                </div>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {job.niceToHave.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-semibold text-blue-700"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#f5a623]" /> {n}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-xl bg-[#071326] p-8 sm:p-10 text-center relative overflow-hidden border border-slate-800">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#f5a623]/10 blur-3xl" />
              <h3 className="relative text-xl sm:text-2xl font-bold text-white">Ready to join our team?</h3>
              <p className="relative mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Submit your profile and connect with our talent team within one business day.
              </p>
              <Link
                to="/contact"
                className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
              >
                Apply for this Role <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-xl bg-white border border-slate-200/90 shadow-sm p-6">
                <div className="border-l-[3px] border-[#f5a623] pl-3 mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#071326]">Role Overview</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {overview.map((o) => (
                    <li key={o.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                        <o.icon className="h-4 w-4 stroke-[1.75]" />
                      </span>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{o.label}</div>
                        <div className="text-sm font-bold text-[#071326]">{o.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#f5a623] px-5 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm w-full"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {related.length > 0 && (
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#071326] mb-3">Similar Roles</h3>
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link
                          to="/careers/job/$jobId"
                          params={{ jobId: r.id }}
                          className="group block rounded-lg bg-white border border-slate-200/90 p-4 hover:border-blue-400 hover:shadow-sm transition-all"
                        >
                          <div className="font-bold text-xs sm:text-sm text-[#071326] group-hover:text-blue-700 transition-colors">
                            {r.title}
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                            <MapPin className="h-3 w-3 text-blue-600" /> {r.location}
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
