import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  FileCheck2,
  ShieldCheck,
  Sliders,
  ArrowRight,
  MapPin,
  Building2,
  Phone,
  Check,
  Users,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import whoWeAreMeeting from "@/assets/who_we_are_meeting.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import aboutApproach from "@/assets/about-approach.jpg";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certEverify from "@/assets/cert-everify.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About ConfigUSA — A Focused Partner for Enterprise Technology & Workforce",
      },
      {
        name: "description",
        content:
          "ConfigUSA works with organisations to address specialised technology, engineering and workforce requirements. We bring together talent access, structured delivery practices and flexible engagement models to help clients execute with confidence.",
      },
      {
        property: "og:title",
        content: "About ConfigUSA — Enterprise Technology and Workforce Solutions",
      },
      {
        property: "og:description",
        content:
          "Connecting enterprise priorities with the people and delivery capabilities required to make progress.",
      },
    ],
  }),
  component: AboutPage,
});

// Blueprint Section 2: What guides us (4 Principles)
const GUIDING_PRINCIPLES = [
  {
    icon: Compass,
    title: "Client context first",
    text: "Understand the business need before proposing a solution.",
  },
  {
    icon: FileCheck2,
    title: "Capability with evidence",
    text: "Represent skills, experience and delivery credentials accurately.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    text: "Set clear expectations, ownership and communication from the outset.",
  },
  {
    icon: Sliders,
    title: "Flexibility",
    text: "Shape the engagement around the requirement, scale and delivery environment.",
  },
];

// Blueprint Section 2: Our footprint — Verified office locations only
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
    phone: "+1 (647) 557-6968",
  },
  {
    city: "India",
    tag: "Delivery & Engineering Center",
    lines: [
      "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2",
      "Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081",
    ],
    phone: "+91 80746 83380",
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
      {/* 1. Hero Section (Edge-to-Edge Navy Hero with Photography on Right)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center bg-[#102B4E] text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={aboutBg}
            alt="About ConfigUSA"
            className="h-full w-full object-cover object-[right_top] brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B4E]/80 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full">
          <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                ABOUT CONFIGUSA
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              A focused partner for enterprise technology and workforce needs.
            </h1>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed">
              ConfigUSA works with organisations to address specialised technology, engineering and workforce requirements. We bring together talent access, structured delivery practices and flexible engagement models to help clients execute with confidence.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#who-we-are"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Meet ConfigUSA <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore Our Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Section: Our Company / Who We Are (Split Intro Layout)          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="our-company" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OUR COMPANY
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Connecting enterprise priorities with the expertise required to deliver them.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              ConfigUSA is an enterprise technology and workforce solutions organisation built on trust, deep domain expertise and dependable global delivery. We bridge the gap between ambitious technology strategy and boots-on-the-ground engineering execution across North America and global delivery hubs.
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center pt-4">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <p className="text-sm lg:text-base font-medium text-slate-700 leading-snug">
                  Specialist technical talent access across AI, engineering and enterprise platforms.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <p className="text-sm lg:text-base font-medium text-slate-700 leading-snug">
                  Flexible workforce and dedicated delivery models shaped around client requirements.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <p className="text-sm lg:text-base font-medium text-slate-700 leading-snug">
                  Disciplined delivery governance and verifiable capability alignment.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src={aboutApproach}
                  alt="ConfigUSA Team Collaboration"
                  className="w-full h-64 lg:h-72 object-cover object-center"
                />
              </div>
            </div>
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2.5 Section: Mission, Vision & Values (Gold Reference Integration)  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F8FAFC] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  MISSION, VISION & VALUES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                What drives our organization every single day.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.08}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 hover:before:opacity-100 before:transition-opacity relative overflow-hidden">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-5">
                    <Compass className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E] mb-2">Our Mission</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Empowering organizations with the specialized technology talent, engineering capability and delivery expertise needed to drive sustainable digital transformation.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 hover:before:opacity-100 before:transition-opacity relative overflow-hidden">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#245B91] border border-blue-100/70 mb-5">
                    <ShieldCheck className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E] mb-2">Our Vision</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To be the most trusted, outcome-focused technology growth and workforce partner for enterprise leaders building mission-critical capabilities.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 hover:before:opacity-100 before:transition-opacity relative overflow-hidden">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100/70 mb-5">
                    <Check className="h-6 w-6 stroke-[2]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#102B4E] mb-2">Core Values</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Integrity in capability representation, delivery excellence, transparent governance, and an unyielding commitment to verified client outcomes.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Section: What guides us (4 Principles Cards Grid)                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                WHAT GUIDES US
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              Operating principles that govern our delivery and relationships.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDING_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-[#245B91] transition-all duration-300 overflow-hidden/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/60 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300">
                    <principle.icon className="h-5 w-5 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. Section: Leadership and Experience                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="leadership" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  LEADERSHIP & EXPERIENCE
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Executive leadership grounded in relationships and growth.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Our leadership brings decades of collective experience across technology consulting, workforce delivery and global capability center scaling. We maintain active, senior-level involvement in client engagements to ensure delivery standards, transparent communication and rapid escalation resolution.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.08}>
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#245B91] border border-blue-100/70 mb-5">
                    <Building2 className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] mb-2">Executive Strategy & Partnership</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Direct executive sponsorship on every major enterprise account. Ensuring strategic alignment, milestone transparency and flexible commercial terms that adapt to your business velocity.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-5">
                    <ShieldCheck className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] mb-2">Practitioner-Led Governance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hands-on practice directors who evaluate technical skills, audit architecture and guarantee engineering quality before resources ever deploy to client environments.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-[#245B91] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#102B4E] border border-slate-200/70 mb-5">
                    <Users className="h-6 w-6 stroke-[1.75]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E] mb-2">Global Operations & Scale</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dedicated talent sourcing engines across the US, Canada and India capable of mobilizing specialized pods and setting up offshore capability centers within weeks.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. Section: Our footprint (Verified Offices Only)                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                OUR FOOTPRINT
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              Confirmed operating offices and delivery locations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C83B43] bg-red-50 border border-red-100 px-2.5 py-1 rounded">
                      <Building2 className="h-3.5 w-3.5" />
                      {office.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102B4E] tracking-tight mb-2">
                    {office.city}
                  </h3>
                  <div className="text-sm text-slate-600 space-y-1 mb-4">
                    {office.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Phone className="h-3.5 w-3.5 text-[#245B91]" />
                  <span>{office.phone}</span>
                </div>
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. Section: Certifications & Verified Credentials                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-[#F3F5F8] border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                VERIFIED CREDENTIALS
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              Enterprise certifications and compliance registrations.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col items-center text-center justify-center gap-3"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-14 object-contain"
                />
                <span className="text-xs font-bold text-[#102B4E] uppercase tracking-wider">
                  {cert.name}
                </span>
                <span className="text-xs text-slate-500 leading-snug">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
                  </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. Section: Why ConfigUSA (Enterprise Advantage & Delivery)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="why-configusa" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHY CONFIGUSA
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
                Our enterprise advantage and delivery accountability.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We build long-term enterprise partnerships through rapid responsiveness, transparent communication, and dependable delivery execution that eliminates hiring risk.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FadeUp delay={0.08}>
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div>
                  <div className="text-2xl font-black text-[#C83B43] mb-2">48h</div>
                  <h3 className="text-base font-bold text-[#102B4E] mb-1.5">Rapid Mobilisation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deploying pre-vetted specialists and targeted pods in 48 to 72 hours, cutting traditional time-to-productivity by over 40%.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div>
                  <div className="text-2xl font-black text-[#245B91] mb-2">100%</div>
                  <h3 className="text-base font-bold text-[#102B4E] mb-1.5">Practitioner-Vetted</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every candidate undergoes rigorous, domain-specific technical evaluation by senior architects prior to client presentation.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div>
                  <div className="text-2xl font-black text-[#102B4E] mb-2">Dual-Engine</div>
                  <h3 className="text-base font-bold text-[#102B4E] mb-1.5">Global Delivery Scale</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    US & Canada onshore partnership paired with India offshore scale providing true 24-hour follow-the-sun operational coverage.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div>
                  <div className="text-2xl font-black text-emerald-600 mb-2">Certified</div>
                  <h3 className="text-base font-bold text-[#102B4E] mb-1.5">Enterprise Compliance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified MWBE, SBE, E-Verify, and SAM.gov active federal contractor ensuring complete institutional compliance and zero IP risk.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. Bottom CTA Strip (Matching Template)                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#102B4E] text-white py-7 lg:py-9 border-t border-white/10">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Partner with ConfigUSA.
              </h2>
            </div>
            <div className="lg:col-span-4 text-slate-200 text-sm lg:text-base lg:border-l lg:border-white/20 lg:pl-6 leading-relaxed">
              Explore how our technology and workforce capabilities can support your upcoming priorities.
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
                  </FadeUp>
        </div>
      </section>
    </div>
  );
}
