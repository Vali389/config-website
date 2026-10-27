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
            <span className="text-[#f5a623] font-extrabold">A Technology Growth Partner.</span>
          </>
        }
        subtitle="A decade of engineering trust — connecting ambitious organizations with the talent and technology to turn strategic initiatives into measurable results."
        image={aboutHeroBg}
      >
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Partner With Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
          >
            Explore Capabilities
          </Link>
        </div>
      </PageHero>
      <div className="pb-12"><StatsBar /></div>

      {/* Story */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-card">
              <img
                src={aboutApproach}
                alt="ConfigUSA team collaborating"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Our Story</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#071326] leading-tight tracking-tight">
                A Decade of <span className="text-[#f5a623]">Trusted Partnerships.</span>
              </h2>
            </div>
            <p className="mt-5 text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded in 2013, ConfigUSA started with a clear mission — help ambitious businesses innovate faster,
              scale smarter, and stay ahead. Today we help organizations achieve technology outcomes through AI,
              digital engineering, enterprise platforms, and world-class talent solutions.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Our 10,000+ consultants and specialists have delivered thousands of engagements across healthcare,
              financial services, government, manufacturing, retail, and technology — earning a 98% client retention
              rate that speaks for itself.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0a1628] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#071326] transition-colors shadow-sm"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
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
              className="rounded-xl bg-white p-7 sm:p-8 shadow-sm border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors duration-200">
                <m.icon className="h-6 w-6 stroke-[1.75]" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#071326]">{m.title}</h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white border-b border-slate-200/60">
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-blue-600 shadow-sm group-hover:bg-[#071326] group-hover:border-[#071326] group-hover:text-[#f5a623] transition-all duration-300 z-10">
                    <a.icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div className="mt-6 rounded-xl bg-slate-50 p-6 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 w-full">
                    <div className="text-xs font-bold text-[#f5a623]">STEP {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-1 text-base font-bold text-[#071326] group-hover:text-blue-700 transition-colors">{a.title}</h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">{a.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why partners choose us */}
      <section className="py-24 bg-[#071326] text-white relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Why Organizations Choose Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white leading-tight tracking-tight">
                Delivering Business Value Beyond Talent
              </h2>
            </div>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-md text-sm sm:text-base">
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
                className="flex items-start gap-3 rounded-xl bg-[#0a182f]/80 border border-white/10 p-4 hover:border-[#f5a623]/40 transition-all"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f5a623] mt-0.5" />
                <span className="text-sm font-medium text-slate-200 leading-snug">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Us" subtitle="Five values, one culture — the foundation of everything we build and every relationship we grow." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md text-center group transition-all"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-colors">
                  <v.icon className="h-6 w-6 stroke-[1.75]" />
                </span>
                <h3 className="mt-4 font-bold text-sm sm:text-base text-[#071326]">{v.title}</h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white border-b border-slate-200/60">
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
                className="group text-center rounded-xl bg-white p-7 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                {l.photo ? (
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-slate-200 group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#071326] text-[#f5a623] border border-[#f5a623]/30 text-xl font-black group-hover:scale-105 transition-transform">
                    {l.initials}
                  </div>
                )}
                <h3 className="mt-4 text-base font-bold text-[#071326]">{l.name}</h3>
                <p className="text-xs font-semibold text-[#f5a623] uppercase tracking-wider mt-0.5">{l.title}</p>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{l.bio}</p>
                <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#071326] group-hover:text-[#f5a623] transition-all">
                  <Linkedin className="h-4 w-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="relative py-24 bg-[#071326] text-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">Global Presence</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white leading-tight tracking-tight">
                Local Partnership, <span className="text-[#f5a623]">Global Scale</span>
              </h2>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
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
                className="rounded-xl bg-[#0a182f]/80 border border-white/10 p-7 hover:border-[#f5a623]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5a623]/15 text-[#f5a623]">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{o.city}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#f5a623]">{o.tag}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-[#f5a623] mt-0.5" /> <span>{o.lines.join(", ")}</span></p>
                  <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0 text-[#f5a623]" /> <span>{o.phone}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Certifications & Credentials" title="Certified, Compliant & Trusted" subtitle="The certifications and registrations that let organizations engage us with confidence across commercial and public-sector programs." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col items-center text-center rounded-xl bg-white border border-slate-200/90 p-7 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-24 w-full items-center justify-center mb-4">
                  <img src={c.image} alt={`${c.name} certification`} loading="lazy" className="max-h-20 max-w-[80%] object-contain" />
                </div>
                <h3 className="text-base font-bold text-[#071326] group-hover:text-blue-700 transition-colors">{c.name}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{c.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={ctaAboutBg} />
    </>
  );
}
