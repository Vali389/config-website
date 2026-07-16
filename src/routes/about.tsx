import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Users, Lightbulb, HandshakeIcon, ShieldCheck } from "lucide-react";
import aboutHero from "@/assets/about-hero-new.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";
import ctaAboutBg from "@/assets/cta-about-bg.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ConfigUSA — Building Solutions, Creating Value" },
      { name: "description", content: "Since 2013, ConfigUSA has helped 500+ businesses accelerate through world-class IT staffing, software, and SAP solutions." },
      { property: "og:title", content: "About ConfigUSA" },
      { property: "og:description", content: "Meet the team building the future of IT talent and transformation." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", text: "We do the right thing — always — even when no one is watching." },
  { icon: Award, title: "Excellence", text: "We hold ourselves to the highest standards in everything we deliver." },
  { icon: Users, title: "Collaboration", text: "Our best work happens when we work together — with clients and each other." },
  { icon: Lightbulb, title: "Innovation", text: "We embrace new ideas and technologies to solve tomorrow's challenges." },
  { icon: HandshakeIcon, title: "Accountability", text: "We own our commitments and deliver on our promises." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Building Solutions.<br /><span className="text-gradient-brand">Creating Value.</span></>}
        subtitle="A decade of engineering trust — connecting the world's most ambitious companies with the talent and technology to grow."
        image={aboutHero}
      />
      <div className="pb-12"><StatsBar /></div>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            A Decade of <span className="text-gradient-brand">Trusted Partnerships.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Founded in 2013, ConfigUSA started with a simple mission — help ambitious businesses hire faster, build smarter, and grow further. Today we serve 500+ clients across three continents with the same founding principles: integrity, excellence, and relentless customer focus.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our 10,000+ consultants and specialists have delivered thousands of engagements across BFSI, healthcare, retail, telecom, and beyond — earning a 98% client retention rate that speaks for itself.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To empower businesses worldwide with the right talent, technology, and transformation strategies to unlock their full potential." },
            { icon: Eye, title: "Our Vision", text: "To be the world's most trusted IT partner — recognized for excellence, innovation, and client-first delivery." },
            { icon: Heart, title: "Our Promise", text: "Every engagement, every hire, every project — we bring premium quality, on-time delivery, and unwavering commitment." },
          ].map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl bg-white p-8 shadow-card border border-border/50 hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1.5 hover:border-brand/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Shine Top Edge Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow group-hover:scale-105 transition-transform">
                <m.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">{m.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Us" subtitle="Five values, one culture — the foundation of everything we build and every relationship we grow." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center group"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand-glow/10 group-hover:from-brand group-hover:to-brand-glow transition-all">
                  <v.icon className="h-7 w-7 text-brand group-hover:text-white transition-colors" />
                </span>
                <h3 className="mt-4 font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={ctaAboutBg} />
    </>
  );
}
