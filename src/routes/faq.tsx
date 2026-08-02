import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Building2, UserRound, ArrowRight, MessageCircleQuestion } from "lucide-react";
import { LightHero } from "@/components/LightHero";
import heroFaq from "@/assets/hero-faq.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Answers for Employers & Candidates | ConfigUSA" },
      { name: "description", content: "Common questions about hiring with ConfigUSA and finding your next role — answered for both employers and candidates." },
      { property: "og:title", content: "FAQs — ConfigUSA" },
      { property: "og:description", content: "Answers for employers and candidates." },
    ],
  }),
  component: Page,
});

const EMPLOYER_FAQ = [
  { q: "How quickly can you deliver candidates?", a: "On average we present the first qualified, pre-vetted candidates within 48 hours, thanks to our recruiter network and AI-driven sourcing." },
  { q: "What engagement models do you offer?", a: "Contract staffing, contract-to-hire, permanent placement, project-based teams, executive search, and RPO/managed workforce solutions." },
  { q: "How do you screen candidates?", a: "Every candidate undergoes technical evaluation, communication assessment, and background verification before submission — quality over quantity." },
  { q: "Which industries do you serve?", a: "Technology, Banking & Financial Services, Healthcare, Manufacturing, Retail, Telecom, Energy, Government, and Professional Services, among others." },
  { q: "What if a placement doesn't work out?", a: "We provide replacement support and stay engaged post-placement to ensure long-term success for both sides." },
  { q: "How do I get started?", a: "Submit a Request Talent form or book a discovery call — our staffing experts respond within one business day." },
];

const CANDIDATE_FAQ = [
  { q: "How do I apply for a role?", a: "Browse open roles on our Careers page and apply directly, or submit your resume to join our talent network for future matches." },
  { q: "Is there any cost to candidates?", a: "No. Our services are always 100% free for candidates — we're paid by the companies that hire." },
  { q: "What types of roles do you place?", a: "Contract, contract-to-hire, and permanent roles across technology, engineering, finance, healthcare, and professional services." },
  { q: "Will my information stay confidential?", a: "Absolutely. Your details are only shared with employers when you're being considered for a specific role, with your awareness." },
  { q: "How will I hear about opportunities?", a: "A dedicated recruiter reaches out when there's a strong match, and you can opt in to job alerts for new openings." },
  { q: "Can I submit a resume with no open role?", a: "Yes — join our talent network any time and we'll contact you when the right opportunity appears." },
];

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? "border-brand/40 bg-white shadow-elegant" : "border-border/60 bg-white/70 hover:bg-white hover:shadow-card"}`}
          >
            {/* Left accent bar */}
            <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-brand transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`} />
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-4">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${isOpen ? "bg-blue-50 text-brand" : "bg-slate-100 text-ink/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-bold ${isOpen ? "text-brand" : "text-ink"}`}>{item.q}</span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-gradient-brand text-white shadow-glow" : "bg-blue-50 text-brand"}`}
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-6 pb-6 pl-[4.5rem] text-muted-foreground leading-relaxed text-justify">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function Page() {
  const [tab, setTab] = useState<"employers" | "candidates">("employers");

  return (
    <>
      <LightHero
        eyebrow="FAQ"
        image={heroFaq}
        title={<>Questions? <span className="text-gradient-brand">We've Got Answers.</span></>}
        subtitle="Everything you need to know about working with ConfigUSA — whether you're building a team or building your career."
      />

      <section className="pt-4 pb-24 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Tabs */}
          <div className="mx-auto mb-10 flex w-full max-w-sm rounded-full bg-blue-50 p-1.5 border border-border/60">
            {([
              { key: "employers", label: "For Employers", icon: Building2 },
              { key: "candidates", label: "For Candidates", icon: UserRound },
            ] as const).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`relative flex-1 inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition-colors ${tab === t.key ? "text-white" : "text-ink/60 hover:text-brand"}`}
              >
                {tab === t.key && (
                  <motion.span layoutId="faqTab" className="absolute inset-0 rounded-full bg-gradient-brand shadow-glow" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
                <span className="relative flex items-center gap-2"><t.icon className="h-4 w-4" /> {t.label}</span>
              </button>
            ))}
          </div>

          <Accordion items={tab === "employers" ? EMPLOYER_FAQ : CANDIDATE_FAQ} />

          {/* Still have questions */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-border/60 p-8 text-center shadow-card">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-card">
              <MessageCircleQuestion className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-ink">Still have questions?</h3>
            <p className="mt-2 text-muted-foreground">Our team is happy to help — reach out any time.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
