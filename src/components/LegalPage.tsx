import { motion } from "motion/react";
import { ShieldCheck, Mail } from "lucide-react";
import { LightHero } from "@/components/LightHero";
import heroLegal from "@/assets/hero-legal.jpg";

export interface LegalSection {
  heading: string;
  paras: string[];
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function LegalPage({
  kind,
  updated,
  intro,
  sections,
}: {
  kind: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <LightHero
        eyebrow="Legal"
        image={heroLegal}
        title={<span className="text-gradient-brand">{kind}</span>}
        subtitle={intro}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-[250px_1fr] gap-12 lg:gap-16">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand ring-1 ring-blue-100">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">On this page</p>
              </div>
              <ul className="space-y-0.5 border-l border-border/70">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slug(s.heading)}`}
                      className="group flex items-start gap-2.5 -ml-px border-l-2 border-transparent pl-4 py-1.5 text-sm text-ink/60 hover:border-brand hover:text-brand transition-colors"
                    >
                      <span className="text-[0.7rem] font-black text-brand/40 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="leading-snug">{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pl-4 text-xs text-muted-foreground">Last updated: {updated}</p>
            </div>
          </aside>

          {/* Content — direct on the page, no cards */}
          <div className="max-w-3xl">
            <p className="lg:hidden mb-8 text-xs text-muted-foreground">Last updated: {updated}</p>
            <div className="divide-y divide-border/60">
              {sections.map((s, i) => (
                <motion.section
                  key={s.heading}
                  id={slug(s.heading)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45 }}
                  className="scroll-mt-28 py-8 first:pt-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-brand tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="text-xl md:text-2xl font-extrabold text-ink">{s.heading}</h2>
                  </div>
                  <div className="mt-3 space-y-3">
                    {s.paras.map((p, j) => (
                      <p key={j} className="text-[0.975rem] text-muted-foreground leading-[1.8]">{p}</p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl bg-blue-50/60 border border-border/60 px-6 py-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-ink text-sm">Questions about this {kind.toLowerCase()}?</div>
                <a href="mailto:info@configusa.com" className="text-sm text-brand font-semibold hover:underline">info@configusa.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
