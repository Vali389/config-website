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
import { StatsBar } from "@/components/StatsBar";
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
  { icon: TrendingUp, title: "Accelerated Career Growth", text: "Clear promotional pathways, transparent milestones, and active executive mentorship." },
  { icon: Users, title: "Collaborative Culture", text: "Global cross-functional teams that value ownership, inclusion, and celebrate joint success." },
  { icon: GraduationCap, title: "Fully Funded Certifications", text: "Continuous education stipends for AWS, Azure, GCP, SAP, and elite machine learning tracks." },
  { icon: Award, title: "Enterprise Impact", text: "Work on flagship transformation initiatives for Fortune 500 innovators across 6 continents." },
];

const VOICES = [
  {
    initials: "CE",
    name: "Carlos E.",
    role: "Senior Cloud Architect",
    tenure: "ConfigUSA since 2021",
    quote: "The complexity of the projects is world-class and the engineering autonomy is real. I've advanced more here in two years than anywhere else in my career.",
  },
  {
    initials: "SC",
    name: "Sunita C.",
    role: "SAP S/4HANA Principal",
    tenure: "ConfigUSA since 2019",
    quote: "Top-tier clients, high accountability, and an organization that genuinely supports you. It's a true long-term career partnership, not just an assignment.",
  },
  {
    initials: "TL",
    name: "Thomas L.",
    role: "Technical Delivery Lead",
    tenure: "ConfigUSA since 2020",
    quote: "We are trusted to architect solutions the right way. Having direct access to leadership and modern tooling makes delivery seamless.",
  },
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
        title={
          <>
            Build Your Career <br />
            <span className="text-[#f5a623] font-extrabold">With ConfigUSA.</span>
          </>
        }
        subtitle="Join an elite community of over 10,000 technology professionals delivering transformative AI, cloud, digital engineering, and enterprise systems."
        image={heroCareers}
      >
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href="#open-roles"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Explore Open Roles <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#perks"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Why Join Us
          </a>
        </div>
      </PageHero>

      <div className="pb-12">
        <StatsBar />
      </div>

      {/* Perks */}
      <section id="perks" className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Life at ConfigUSA"
            title="Engineered for Your Professional Growth"
            subtitle="We invest in our talent with high-impact engagements, transparent leadership, and comprehensive development programs."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                  <p.icon className="h-6 w-6 stroke-[1.75]" />
                </span>
                <h3 className="mt-5 text-base sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles + search */}
      <section id="open-roles" className="py-24 bg-slate-50 border-b border-slate-200/60 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Current Openings"
            title="Find Your Next Career Move"
            subtitle="Explore active openings across our United States, Canadian, and global delivery centers — remote and hybrid models available."
          />

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-xl bg-white border border-slate-200/90 shadow-sm p-4 md:p-5 flex flex-col md:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, skill, or keyword…"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-2.5 text-sm text-[#071326] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="rounded-lg border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-[#071326] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer font-medium"
            >
              {DEPARTMENTS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="rounded-lg border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-[#071326] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer font-medium"
            >
              {LOCATIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </motion.div>

          {/* Result count */}
          <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <span>
              Showing <strong className="text-[#071326] font-bold">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "position" : "positions"}
            </span>
            {(query || dept !== DEPARTMENTS[0] || loc !== LOCATIONS[0]) && (
              <button
                onClick={() => {
                  setQuery("");
                  setDept(DEPARTMENTS[0]);
                  setLoc(LOCATIONS[0]);
                }}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Job cards */}
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {filtered.map((j, i) => (
              <motion.div
                key={j.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Link
                  to="/careers/job/$jobId"
                  params={{ jobId: j.id }}
                  className="group relative flex flex-col h-full rounded-xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                      <Briefcase className="h-5 w-5 stroke-[1.75]" />
                    </span>
                    <span className="rounded-md bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 text-xs font-semibold">
                      {j.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug">
                    {j.title}
                  </h3>

                  <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-[#f5a623]">
                    <Building2 className="h-3.5 w-3.5" /> {j.department}
                  </div>

                  <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2 flex-1">
                    {j.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-blue-600" /> {j.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-blue-600" /> {j.workMode}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-blue-600" /> {j.experience}
                    </span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#071326]">
                      {j.salary}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#071326] group-hover:text-[#f5a623] transition-colors">
                      View Role <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <div className="md:col-span-2 rounded-xl bg-white border border-dashed border-slate-300 p-12 text-center">
                <p className="text-base font-bold text-[#071326]">No open roles match your criteria.</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">Try broadening your keywords or clearing the filter options.</p>
                <button
                  onClick={() => {
                    setQuery("");
                    setDept(DEPARTMENTS[0]);
                    setLoc(LOCATIONS[0]);
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0a1628] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#071326] transition-colors shadow-sm"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Employee voices */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Team Perspectives"
            title="Hear From Our Engineers & Leaders"
            subtitle="Authentic experiences from professionals driving digital impact across our global client engagements."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VOICES.map((v, i) => (
              <motion.figure
                key={v.role}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-slate-300 group-hover:text-blue-500 transition-colors" />
                <blockquote className="mt-4 text-xs sm:text-[13px] text-slate-700 leading-relaxed flex-1">
                  "{v.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 pt-5 border-t border-slate-100">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071326] text-[#f5a623] text-sm font-bold shadow-sm">
                    {v.initials}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-[#071326]">{v.name}</div>
                    <div className="text-xs text-slate-500">{v.role}</div>
                    <div className="text-[11px] font-semibold text-[#f5a623] mt-0.5">{v.tenure}</div>
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
