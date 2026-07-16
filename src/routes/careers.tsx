import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GraduationCap, TrendingUp, Users, Award, MapPin, Clock, ArrowRight } from "lucide-react";
import heroCareers from "@/assets/hero-careers.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at ConfigUSA — Build Your Future With Us" },
      { name: "description", content: "Join a global team of 10,000+ IT professionals. Explore open roles in engineering, consulting, SAP, and more at ConfigUSA." },
      { property: "og:title", content: "Careers at ConfigUSA" },
      { property: "og:description", content: "Build a rewarding career with ConfigUSA." },
    ],
  }),
  component: Page,
});

const PERKS = [
  { icon: TrendingUp, title: "Growth", text: "Real career progression and continuous learning budgets." },
  { icon: Users, title: "Great Culture", text: "Diverse, collaborative teams that celebrate wins together." },
  { icon: GraduationCap, title: "Learning", text: "Certifications, courses, and mentorship — fully funded." },
  { icon: Award, title: "Opportunity", text: "Work on premium global brands and cutting-edge tech." },
];

const JOBS = [
  { title: "Senior React Developer", loc: "Remote / Woodbridge, NJ", type: "Full-time" },
  { title: "SAP FICO Consultant", loc: "Hyderabad, India", type: "Full-time" },
  { title: "Cloud DevOps Engineer", loc: "Toronto, Canada", type: "Contract" },
  { title: "Talent Acquisition Specialist", loc: "Woodbridge, NJ", type: "Full-time" },
  { title: "AI/ML Engineer", loc: "Remote", type: "Contract-to-Hire" },
  { title: "Business Analyst (BFSI)", loc: "Hyderabad, India", type: "Full-time" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Build Your Career <br /><span className="text-gradient-brand">With ConfigUSA.</span></>} subtitle="We're always looking for talented, passionate, and driven individuals to join our team." image={heroCareers}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform">
          View Open Positions <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

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

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Open Roles" title="Find Your Next Opportunity" subtitle="Explore current openings across our global offices — remote and hybrid options available." />
          <div className="mt-14 grid gap-4 max-w-4xl mx-auto">
            {JOBS.map((j, i) => (
              <motion.div
                key={j.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between gap-4 rounded-xl bg-white p-6 border border-border/50 hover:border-brand hover:shadow-card transition-all"
              >
                <div>
                  <h3 className="font-bold text-ink group-hover:text-brand transition-colors">{j.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.loc}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {j.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="shrink-0 inline-flex items-center gap-1 rounded-full bg-ink text-white px-4 py-2 text-xs font-semibold group-hover:bg-brand transition-colors">
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
