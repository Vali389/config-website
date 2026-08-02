import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  PhoneCall,
  ClipboardList,
  Search,
  ShieldCheck,
  Users,
  Handshake,
  Rocket,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import { LightHero } from "@/components/LightHero";
import heroProcess from "@/assets/hero-process.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — How ConfigUSA Delivers Talent | ConfigUSA" },
      { name: "description", content: "A transparent, proven recruitment methodology — from discovery and sourcing to screening, placement, and post-placement support." },
      { property: "og:title", content: "Our Process — ConfigUSA" },
      { property: "og:description", content: "How ConfigUSA delivers exceptional talent, step by step." },
    ],
  }),
  component: Page,
});

const STEPS = [
  { icon: PhoneCall, title: "Discovery Call", text: "We start by understanding your business, hiring goals, team culture, and timelines." },
  { icon: ClipboardList, title: "Requirement Analysis", text: "We define the skills, seniority, and success criteria for each role with precision." },
  { icon: Search, title: "Talent Sourcing", text: "We tap our network and AI-driven sourcing to surface the strongest available candidates." },
  { icon: ShieldCheck, title: "Screening & Assessment", text: "Technical evaluation, communication assessment, and background verification." },
  { icon: Users, title: "Client Interviews", text: "We coordinate interviews and manage candidate engagement end-to-end." },
  { icon: Handshake, title: "Offer & Placement", text: "We manage offer negotiation and secure the right hire smoothly." },
  { icon: Rocket, title: "Onboarding", text: "Seamless onboarding gets your new team members productive from day one." },
  { icon: LifeBuoy, title: "Post-Placement Support", text: "Ongoing check-ins and support ensure long-term success for both sides." },
];

const METRICS = [
  { value: "48h", label: "Avg. First Candidates" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10K+", label: "Professionals Placed" },
  { value: "24/7", label: "Recruitment Support" },
];

function Page() {
  return (
    <>
      <LightHero
        eyebrow="Our Process"
        image={heroProcess}
        title={<>A Proven Path to <span className="text-gradient-brand">the Right Hire.</span></>}
        subtitle="Transparent, data-driven, and built around your goals — here's exactly how we deliver exceptional talent, every time."
      >
        <Link to="/request-talent" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform">
          Start Hiring <ArrowRight className="h-4 w-4" />
        </Link>
      </LightHero>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-brand via-brand-glow to-red-400/50" />

            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div key={s.title} className="relative md:grid md:grid-cols-2 md:gap-16 items-center mb-8 md:mb-4">
                  {/* Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-brand/20 shadow-card text-brand">
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand text-white text-[0.65rem] font-black shadow-glow">
                      {i + 1}
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: left ? -30 : 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className={`${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"} my-6 md:my-10`}
                  >
                    <div className="group rounded-2xl bg-white border border-border/60 shadow-card hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1 transition-all duration-300 p-6 md:p-7 relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className={`flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}>
                        <span className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <div className="text-xs font-black text-brand">STEP {String(i + 1).padStart(2, "0")}</div>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify">{s.text}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-gradient-to-b from-blue-50/60 to-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-border/60 shadow-card p-6 text-center"
              >
                <div className="text-3xl font-black text-gradient-brand tracking-tight">{m.value}</div>
                <div className="mt-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/request-talent" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform">
              Request Talent <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
