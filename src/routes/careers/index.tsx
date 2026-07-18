import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  GraduationCap,
  TrendingUp,
  Users,
  Award,
  MapPin,
  Clock,
  Briefcase,
  Search,
  ArrowRight,
  Building2,
  Quote,
} from "lucide-react";
import heroCareers from "@/assets/hero-careers.jpg";
import ctaCareers from "@/assets/cta-careers.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { JOBS, DEPARTMENTS, LOCATIONS } from "@/data/jobs";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers at ConfigUSA — Build Your Future With Us" },
      { name: "description", content: "Join a global team of 10,000+ technology professionals. Search open roles in engineering, AI, cloud, SAP, and more at ConfigUSA." },
      { property: "og:title", content: "Careers at ConfigUSA" },
      { property: "og:description", content: "Search and apply for open roles at ConfigUSA." },
    ],
  }),
  component: CareersPage,
});

const PERKS = [
  { icon: TrendingUp, title: "Growth", text: "Real career progression and continuous learning budgets." },
  { icon: Users, title: "Great Culture", text: "Diverse, collaborative teams that celebrate wins together." },
  { icon: GraduationCap, title: "Learning", text: "Certifications, courses, and mentorship — fully funded." },
  { icon: Award, title: "Opportunity", text: "Work on premium global brands and cutting-edge tech." },
];

// TODO: replace with real employee quotes & names when available.
const VOICES = [
  { initials: "CE", role: "Senior Cloud Engineer", tenure: "ConfigUSA since 2021", quote: "The projects are challenging and the support is real. I've grown more here in two years than anywhere else in my career." },
  { initials: "SC", role: "SAP Functional Consultant", tenure: "ConfigUSA since 2019", quote: "Great clients, clear expectations, and a team that genuinely has your back. It feels like a partnership, not just a placement." },
  { initials: "TL", role: "Talent Acquisition Lead", tenure: "ConfigUSA since 2020", quote: "We're trusted to do our best work and given the tools to do it. The culture of accountability makes all the difference." },
];

function CareersPage() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState(DEPARTMENTS[0]);
  const [loc, setLoc] = useState(LOCATIONS[0]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((j) => {
      const matchesQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.department.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.summary.toLowerCase().includes(q);
      const matchesDept = dept === DEPARTMENTS[0] || j.department === dept;
      const matchesLoc = loc === LOCATIONS[0] || j.location === loc;
      return matchesQuery && matchesDept && matchesLoc;
    });
  }, [query, dept, loc]);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build Your Career <br /><span className="text-gradient-brand">With ConfigUSA.</span></>}
        subtitle="We're always looking for talented, passionate, and driven individuals to help organizations transform through technology."
        image={heroCareers}
      >
        <a
          href="#open-roles"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
        >
          View Open Positions <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      {/* Perks */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Life at ConfigUSA" title="Why You'll Love Working Here" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-soft p-7 hover:shadow-elegant hover:bg-white border border-transparent hover:border-border transition-all"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles + search */}
      <section id="open-roles" className="py-24 bg-soft border-t border-border/40 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Open Roles"
            title="Find Your Next Opportunity"
            subtitle="Search current openings across our global offices — remote and hybrid options available."
          />

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-2xl bg-white border border-border/60 shadow-card p-4 md:p-5 flex flex-col md:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, skill, or keyword…"
                className="w-full rounded-xl border border-border bg-soft/60 pl-11 pr-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
              />
            </div>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="rounded-xl border border-border bg-soft/60 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all cursor-pointer"
            >
              {DEPARTMENTS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="rounded-xl border border-border bg-soft/60 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all cursor-pointer"
            >
              {LOCATIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </motion.div>

          {/* Result count */}
          <p className="mt-6 text-sm text-muted-foreground">
            Showing <span className="font-bold text-ink">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "role" : "roles"}
          </p>

          {/* Job cards */}
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {filtered.map((j, i) => (
              <motion.div
                key={j.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  to="/careers/job/$jobId"
                  params={{ jobId: j.id }}
                  className="group relative flex flex-col h-full rounded-2xl bg-white p-6 border border-border/60 hover:border-brand/40 hover:shadow-[0_18px_44px_rgba(29,78,216,0.14)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-brand group-hover:bg-gradient-brand group-hover:border-transparent group-hover:text-white group-hover:shadow-glow transition-all">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-brand">
                      {j.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-ink group-hover:text-brand transition-colors leading-snug">{j.title}</h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-brand/80">
                    <Building2 className="h-3.5 w-3.5" /> {j.department}
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">{j.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand/70" /> {j.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand/70" /> {j.workMode}</span>
                    <span className="flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-brand/70" /> {j.experience}</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-sm font-black text-ink">{j.salary}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-brand">
                      View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <div className="md:col-span-2 rounded-2xl bg-white border border-dashed border-border p-12 text-center">
                <p className="text-ink font-semibold">No roles match your search.</p>
                <p className="mt-1 text-sm text-muted-foreground">Try clearing filters or a different keyword.</p>
                <button
                  onClick={() => { setQuery(""); setDept(DEPARTMENTS[0]); setLoc(LOCATIONS[0]); }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand/90 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Employee voices */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Life at ConfigUSA" title="Hear From Our Team" subtitle="Real perspectives from the people who make ConfigUSA what it is." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VOICES.map((v, i) => (
              <motion.figure
                key={v.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-soft p-8 border border-border/50 hover:bg-white hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300"
              >
                <Quote className="h-9 w-9 text-brand/20 group-hover:text-brand/40 transition-colors" />
                <blockquote className="mt-4 text-sm text-ink/85 leading-relaxed flex-1">"{v.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white text-sm font-black shadow-glow">
                    {v.initials}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-ink">{v.role}</div>
                    <div className="text-xs text-muted-foreground">{v.tenure}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={ctaCareers} />
    </>
  );
}
