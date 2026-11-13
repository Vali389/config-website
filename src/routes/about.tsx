import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Eye,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  Phone,
  Check,
  Award,
  Users,
  Search,
  Target,
  Rocket,
  TrendingUp,
  Handshake,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import whoWeAreMeeting from "@/assets/who_we_are_meeting.jpg";
import aboutBg from "@/assets/aboutus-bg.png";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certEverify from "@/assets/cert-everify.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About ConfigUSA — A Technology Growth Partner",
      },
      {
        name: "description",
        content:
          "ConfigUSA connects organizations with the technology talent and specialized delivery teams that turn strategy into results. Enterprise technology, workforce solutions and managed delivery.",
      },
      {
        property: "og:title",
        content: "About ConfigUSA — A Technology Growth Partner",
      },
      {
        property: "og:description",
        content:
          "Built Around Outcomes. Delivered Through People. Enterprise technology, talent access, and global delivery scale.",
      },
    ],
  }),
  component: AboutPage,
});

// Gold Approach (4 Steps)
const APPROACH_STEPS = [
  {
    icon: Search,
    title: "Understand",
    text: "We start with your business objectives — not just a job description — to align talent and technology to real outcomes.",
  },
  {
    icon: Target,
    title: "Match & Vet",
    text: "Rigorous, quality-driven screening surfaces specialists who fit your technical needs and your culture.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    text: "Fast onboarding and dedicated teams get people productive from day one, wherever you operate.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    text: "Ongoing communication, accountability, and long-term partnership keep initiatives moving forward.",
  },
];

// Gold 5 Core Values
const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We do the right thing — always — even when no one is watching.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "We hold ourselves to the highest standards in everything we deliver.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Our best work happens together — with clients and with each other.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    text: "We embrace new ideas and technologies to solve tomorrow's challenges.",
  },
  {
    icon: Handshake,
    title: "Accountability",
    text: "We own our commitments and deliver on our promises.",
  },
];

// Confirmed Operating Offices
const OFFICES = [
  {
    city: "United States",
    tag: "Global Headquarters",
    lines: ["666 Plainsboro Road, Suite 1237", "Plainsboro, NJ 08536"],
    phone: "+1 (609) 934-3184",
  },
  {
    city: "Canada",
    tag: "North America Hub",
    lines: ["1585 Markham Road, Suite # 309", "Toronto, ON M1B 2W1"],
    phone: "+1 (609) 934-3184",
  },
  {
    city: "India",
    tag: "Delivery & Engineering Center",
    lines: [
      "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2",
      "Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    ],
    phone: "+91 98409 60300",
  },
];

const CERTIFICATIONS = [
  { image: certMwbe, name: "M/WBE", label: "Minority/Woman-Owned Business Enterprise" },
  { image: certSbe, name: "SBE", label: "Small Business Enterprise Certified" },
  { image: certSam, name: "SAM", label: "SAM Registered — FedBiz Access" },
  { image: certEverify, name: "E-Verify", label: "E-Verify Employer" },
];

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Gold Reference Headline & Ashen Visual Style)      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden bg-[#102B4E] text-white pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 border-b border-[#1b3a63]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={aboutBg}
            alt="About ConfigUSA"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E] via-[#102B4E]/85 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102B4E]/50 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full my-auto py-4">
          <div className="max-w-xl lg:max-w-[580px] xl:max-w-[660px] space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C83B43]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C83B43]">
                ABOUT CONFIGUSA
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.16] tracking-tight text-white">
              Your Technology Growth Partner — <br className="hidden sm:inline" />
              <span className="text-[#C83B43]">
                Connecting the Right Talent with the Right Expertise and the Confidence to Deliver.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              We connect organizations with the technology talent and specialized delivery teams that turn strategy into results.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Partner With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                Explore Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="pt-2 border-l-2 border-[#C83B43] pl-3.5 text-xs tracking-wide text-slate-300">
              Enterprise Technology, Workforce & Managed Delivery Partner
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Our Story (Gold Reference 2-Column Presentation)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="our-company" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                  <img
                    src={whoWeAreMeeting}
                    alt="ConfigUSA Team Collaborating"
                    className="w-full object-cover aspect-[4/3] filter brightness-[1.05] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Story Copy */}
              <div>
                <div className="border-l-[3px] border-[#C83B43] pl-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C83B43] mb-1">
                    OUR STORY
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold text-[#102B4E] leading-tight tracking-tight">
                    Built Around Outcomes. <br />
                    <span className="text-[#245B91]">Delivered Through People.</span>
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <p>
                    Technology transformation depends on people. At ConfigUSA, we connect organizations with exceptional technology professionals and specialized delivery teams who help turn strategic initiatives into measurable business results.
                  </p>
                  <p>
                    Whether expanding engineering teams, implementing enterprise platforms, modernizing applications, or launching AI initiatives, we deliver the expertise organizations need to move forward with confidence.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="btn-cta-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-md"
                  >
                    Partner With Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: Mission, Vision, Values (3 Elegant Clean Cards)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="why-configusa" className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#245B91]">
                  WHAT DRIVES US
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Mission, Vision, Values
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                The principles and purpose behind everything we deliver for our clients and partners.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeUp delay={0.08}>
              <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-sm border border-slate-200 hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100 mb-5">
                    <Compass className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E]">Mission</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    Empowering organizations with the technology talent and expertise they need to drive transformation.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-sm border border-slate-200 hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#245B91] border border-blue-100 mb-5">
                    <Eye className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E]">Vision</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    To be the most trusted technology growth partner for enterprises building the digital future.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-sm border border-slate-200 hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 mb-5">
                    <CheckCircle2 className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E]">Values</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    Integrity, excellence, partnership, and an unwavering commitment to client success.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: How We Work / Our Approach (4 Step Progression)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#245B91]">
                  OUR APPROACH
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                How We Deliver Client Success
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                A disciplined, outcomes-focused engagement methodology from initial scoping to long-term growth.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((step, idx) => (
              <FadeUp key={step.title} delay={idx * 0.08}>
                <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-lg hover:bg-white transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#245B91] border border-slate-200 shadow-2xs mb-4">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-[#102B4E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. Section: The Principles That Guide Us (5 Values from Gold)       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#245B91]">
                  OUR VALUES
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                The Principles That Guide Us
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Five values, one culture — the foundation of everything we build and every relationship we grow.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <FadeUp key={val.title} delay={idx * 0.06}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-lg text-center transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                  <div>
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#245B91] border border-blue-100 mb-4">
                      <val.icon className="h-6 w-6 stroke-[1.75]" />
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#102B4E]">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {val.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. Section: Global Presence (Executive Dark Section from Gold)      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="leadership" className="relative py-14 sm:py-16 lg:py-20 bg-[#102B4E] text-white overflow-hidden scroll-mt-24">
        <div className="container-enterprise relative z-10">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <div className="border-l-[3px] border-[#C83B43] pl-4 mb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C83B43] mb-1">
                  GLOBAL PRESENCE
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Local Partnership, <span className="text-slate-300">Global Scale</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                With teams across North America and India, we pair onshore client partnership with round-the-clock offshore delivery.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {OFFICES.map((off, idx) => (
              <FadeUp key={off.city} delay={idx * 0.1}>
                <div className="rounded-2xl bg-[#0a1f3a] border border-white/10 p-7 hover:border-[#C83B43] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between shadow-lg cursor-pointer">
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                        <MapPin className="h-5 w-5 text-[#C83B43]" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{off.city}</h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#C83B43]">
                          {off.tag}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <p className="leading-relaxed">{off.lines.join(", ")}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Phone className="h-4 w-4 text-[#C83B43]" />
                    <span>{off.phone}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. Section: Certifications & Verified Credentials (Auto-Scrolling)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-px w-7 bg-[#C83B43]" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#245B91]">
                  CERTIFICATIONS & CREDENTIALS
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Certified, Compliant & Trusted
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                The certifications and registrations that let organizations engage us with confidence across commercial and public-sector programs.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Auto-scrolling infinite marquee strip */}
        <div className="relative flex overflow-hidden">
          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div className="flex gap-6 w-max items-center py-3 animate-marquee hover:[animation-play-state:paused]">
            {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
              <div
                key={`${cert.name}-${idx}`}
                className="w-72 sm:w-80 shrink-0 flex items-center gap-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 shadow-xs hover:border-[#245B91] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-2 border border-slate-100">
                  <img
                    src={cert.image}
                    alt={`${cert.name} certification`}
                    loading="lazy"
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#102B4E] group-hover:text-[#245B91] transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-snug line-clamp-2">
                    {cert.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. Bottom CTA Strip                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-10 lg:py-12 border-t border-white/10">
        <div className="container-enterprise">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                  Ready to accelerate your technology or workforce roadmap?
                </h3>
                <p className="text-slate-300 text-sm">
                  Connect with our team to discuss your project requirements and deployment timeline.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="btn-cta-primary text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
