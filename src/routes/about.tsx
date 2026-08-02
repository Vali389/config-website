import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  ShieldCheck,
  HandshakeIcon,
  CheckCircle2,
  Search,
  UserCheck,
  Rocket,
  LineChart,
  ArrowRight,
  MapPin,
  Building2,
  Phone,
  Linkedin,
} from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import aboutApproach from "@/assets/about-approach.jpg";
import ctaAboutBg from "@/assets/cta-about-bg.png";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certEverify from "@/assets/cert-everify.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitText } from "@/components/SplitText";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ConfigUSA — A Technology Growth Partner" },
      { name: "description", content: "Since 2013, ConfigUSA has helped organizations transform ideas into business outcomes through AI, digital engineering, enterprise technology, and world-class talent." },
      { property: "og:title", content: "About ConfigUSA" },
      { property: "og:description", content: "More than a staffing company — a technology growth partner." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", text: "We do the right thing — always — even when no one is watching." },
  { icon: Award, title: "Excellence", text: "We hold ourselves to the highest standards in everything we deliver." },
  { icon: Users, title: "Collaboration", text: "Our best work happens together — with clients and with each other." },
  { icon: Lightbulb, title: "Innovation", text: "We embrace new ideas and technologies to solve tomorrow's challenges." },
  { icon: HandshakeIcon, title: "Accountability", text: "We own our commitments and deliver on our promises." },
];

// TODO: replace placeholder names with real leadership. To add a headshot,
// import it (e.g. `import ceoPhoto from "@/assets/leader-ceo.jpg"`) and set
// `photo: ceoPhoto` on the person below — the card shows it automatically.
const LEADERS: { initials: string; name: string; title: string; bio: string; photo?: string }[] = [
  { initials: "CE", name: "Full Name", title: "Chief Executive Officer", bio: "Sets the vision and strategy driving ConfigUSA's growth as a trusted technology partner." },
  { initials: "CT", name: "Full Name", title: "Chief Technology Officer", bio: "Leads technology strategy, AI, and engineering delivery excellence across the firm." },
  { initials: "VD", name: "Full Name", title: "VP, Global Delivery", bio: "Oversees onshore and offshore delivery, quality, and long-term client success." },
  { initials: "VT", name: "Full Name", title: "VP, Talent Solutions", bio: "Heads recruiting, vetting, and workforce solutions across global markets." },
];

const OFFICES = [
  { city: "United States", tag: "Global Headquarters", lines: ["1001 Woodbridge Center Dr", "Woodbridge, NJ 07095"], phone: "+1 (732) 220-2921" },
  // TODO: replace with the real India delivery-center address & phone.
  { city: "India", tag: "Delivery & Engineering Center", lines: ["[ Street Address ]", "[ City, State PIN ]"], phone: "[ +91 00000 00000 ]" },
];

const CERTIFICATIONS = [
  { image: certMwbe, name: "M/WBE", label: "Minority/Woman-Owned Business Enterprise" },
  { image: certSbe, name: "SBE", label: "Small Business Enterprise Certified" },
  { image: certSam, name: "SAM", label: "SAM Registered — FedBiz Access" },
  { image: certEverify, name: "E-Verify", label: "E-Verify Employer" },
];

const APPROACH = [
  { icon: Search, title: "Understand", text: "We start with your business objectives — not just a job description — to align talent and technology to real outcomes." },
  { icon: UserCheck, title: "Match & Vet", text: "Rigorous, quality-driven screening surfaces specialists who fit your technical needs and your culture." },
  { icon: Rocket, title: "Deliver", text: "Fast onboarding and dedicated teams get people productive from day one, wherever you operate." },
  { icon: LineChart, title: "Grow", text: "Ongoing communication, accountability, and long-term partnership keep initiatives moving forward." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        align="left"
        title={
          <>
            <SplitText text="More Than a Staffing Company." />
            <br />
            <SplitText text="A Technology Growth Partner." className="text-gradient-brand" delay={1.05} />
          </>
        }
        subtitle="A decade of engineering trust — connecting ambitious organizations with the talent and technology to turn strategic initiatives into measurable results."
        image={aboutHeroBg}
      />
      <div className="pb-12"><StatsBar /></div>

      {/* Story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-10 blur-2xl" />
            <img
              src={aboutApproach}
              alt="ConfigUSA team collaborating"
              className="relative rounded-3xl shadow-elegant border border-border/60 w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight tracking-tight">
              A Decade of <span className="text-gradient-brand">Trusted Partnerships.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-justify">
              Founded in 2013, ConfigUSA started with a simple mission — help ambitious businesses innovate faster,
              scale smarter, and stay ahead. Today we help organizations achieve technology outcomes through AI,
              digital engineering, enterprise platforms, and world-class talent solutions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
              Our 10,000+ consultants and specialists have delivered thousands of engagements across healthcare,
              financial services, government, manufacturing, retail, and technology — earning a 98% client retention
              rate that speaks for itself.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="py-24 bg-soft border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To empower organizations with the right talent, technology, and transformation strategies to unlock their full potential." },
            { icon: Eye, title: "Our Vision", text: "To be the most trusted technology growth partner — recognized for excellence, innovation, and client-first delivery." },
            { icon: Heart, title: "Our Promise", text: "Every engagement, every hire, every project — premium quality, on-time delivery, and unwavering commitment." },
          ].map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl bg-white p-8 shadow-card border border-border/50 hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1.5 hover:border-brand/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow group-hover:scale-105 transition-transform">
                <m.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">{m.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-justify">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="An Approach Built Around Your Outcomes"
            subtitle="We become an extension of your organization — bringing expertise, responsiveness, and a commitment to your long-term success."
          />
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] border-t border-dashed border-slate-200 z-0" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {APPROACH.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-brand shadow-sm group-hover:bg-brand group-hover:border-brand group-hover:text-white group-hover:scale-105 transition-all duration-300 z-10">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6 rounded-2xl bg-white p-7 border border-border/50 shadow-card hover:shadow-[0_20px_40px_rgba(29,78,216,0.12)] hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-base font-bold text-ink group-hover:text-brand transition-colors">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify">{a.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why partners choose us */}
      <section className="py-24 bg-[#051124] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-glow/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-glow mb-4">Why Organizations Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Delivering Business Value Beyond Talent
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed text-justify max-w-md">
              Instead of simply supplying professionals, we bring expertise, accountability, and a long-term commitment
              to every relationship we build.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Enterprise-focused delivery",
              "Global recruiting capabilities",
              "Experienced technology specialists",
              "Flexible engagement models",
              "Quality-driven hiring processes",
              "Long-term client relationships",
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-brand-glow/50 transition-all"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-glow mt-0.5" />
                <span className="text-sm font-medium text-white/85 leading-snug">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
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
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-soft border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Meet the People Behind ConfigUSA" subtitle="An experienced team dedicated to your success across technology, delivery, and talent." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERS.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center rounded-2xl bg-white p-8 border border-border/50 shadow-card hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300"
              >
                {l.photo ? (
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="mx-auto h-24 w-24 rounded-full object-cover shadow-glow ring-2 ring-brand/20 group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand text-white text-2xl font-black shadow-glow group-hover:scale-105 transition-transform">
                    {l.initials}
                  </div>
                )}
                <h3 className="mt-5 text-lg font-bold text-ink">{l.name}</h3>
                <p className="text-sm font-semibold text-brand">{l.title}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-justify">{l.bio}</p>
                <span className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-soft text-muted-foreground group-hover:bg-brand group-hover:text-white transition-all">
                  <Linkedin className="h-4 w-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="relative py-24 bg-[#051124] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl opacity-40" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-brand-glow/20 blur-3xl opacity-30" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-glow mb-4">Global Presence</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Local Partnership,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Global Scale</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed text-justify">
              With teams across North America and India, we pair onshore client partnership with round-the-clock offshore delivery.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur hover:bg-white/[0.08] hover:border-brand-glow/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{o.city}</h3>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-glow">{o.tag}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-white/80">
                  <p className="flex items-start gap-3"><MapPin className="h-4 w-4 shrink-0 text-brand-glow mt-0.5" /> <span>{o.lines.join(", ")}</span></p>
                  <p className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-brand-glow" /> <span>{o.phone}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Certifications & Credentials" title="Certified, Compliant & Trusted" subtitle="The certifications and registrations that let organizations engage us with confidence across commercial and public-sector programs." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden flex flex-col items-center text-center rounded-2xl bg-soft/60 border border-border/50 p-8 hover:bg-white hover:shadow-card hover:border-brand/20 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex h-28 w-full items-center justify-center">
                  <img src={c.image} alt={`${c.name} certification`} loading="lazy" className="max-h-28 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 text-base font-bold text-ink group-hover:text-brand transition-colors">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed text-justify">{c.label}</p>
                {/* Diagonal light sweep on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-brand/10 to-transparent group-hover:animate-shine" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={ctaAboutBg} />
    </>
  );
}
