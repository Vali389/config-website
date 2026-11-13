import React, { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { JOBS, DEPARTMENTS, LOCATIONS } from "@/data/jobs";
import careersHeroBg from "@/assets/careers-bg.jpg";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      {
        title: "Careers — Build Your Next Opportunity | ConfigUSA",
      },
      {
        name: "description",
        content:
          "We connect technology professionals with opportunities that align with their skills, experience and career goals. Explore current openings and share your profile for relevant opportunities.",
      },
      {
        property: "og:title",
        content: "Careers at ConfigUSA",
      },
      {
        property: "og:description",
        content:
          "Build your next opportunity with the right connection. Verified technology, engineering and platform roles.",
      },
    ],
  }),
  component: CareersPage,
});

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
        ((j as any).summary && (j as any).summary.toLowerCase().includes(q)) ||
        (((j as any).requirements || []) as string[]).some((s: string) => s.toLowerCase().includes(q));
      const matchesDept = dept === "All Departments" || j.department === dept;
      const matchesLoc = loc === "All Locations" || j.location.includes(loc);
      return matchesQuery && matchesDept && matchesLoc;
    });
  }, [query, dept, loc]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={careersHeroBg}
            alt="Careers at ConfigUSA"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                CAREERS AT CONFIGUSA
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Build your next opportunity with the right connection.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              We connect technology professionals with opportunities that align with their skills, experience and career goals. Explore current openings and share your profile for relevant opportunities.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#openings"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                View Open Positions <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Contact Recruiting <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Opportunities (Job Board with Filters)                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="openings" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OPPORTUNITIES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Current technical openings and engineering roles.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              Filter by technical discipline and location to find positions matching your professional experience.
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="rounded-xl border border-slate-200/90 bg-[#F3F5F8] p-5 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by role or skill..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#102B4E]"
                />
              </div>

              <div>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#102B4E]"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#102B4E]"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-600 text-sm">
                  No roles currently match your search criteria. Submit a general profile below.
                </p>
              </div>
            ) : (
              filtered.map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/job/${job.id}` as any}
                  className="group relative block rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C83B43] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#102B4E] tracking-tight">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-1 mt-1">
                      {(job as any).summary}
                    </p>
                  </div>

                  <div className="btn-cta-primary text-xs font-bold px-4 py-2 rounded-md shadow-xs shrink-0 self-start md:self-center inline-flex items-center gap-1.5 group-hover:bg-[#a62b32] transition-colors">
                      View Details <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-10 lg:py-12 border-t border-white/10">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Ready to take the next step in your career?
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Explore our current openings or connect directly with our talent team.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Connect With Recruiting <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
