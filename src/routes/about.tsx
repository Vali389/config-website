import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Eye,
  Award,
  ShieldCheck,
  Rocket,
  Handshake,
  CheckCircle2,
  Target,
  Layers,
  Cpu,
  Users,
  Search,
  Building2,
  Laptop,
  MapPin,
  Phone,
  ArrowRight,
  Globe2,
  Check,
} from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import { TechTicker } from "@/components/TechTicker";
import whoWeAreMeeting from "@/assets/who_we_are_meeting.jpg";
import aboutBg from "@/assets/aboutus-bg.png";
import certNmsdc from "@/assets/cert-nmsdc.png";
import certMwbe from "@/assets/cert-mwbe.jpg";
import certSbe from "@/assets/cert-sbe.jpg";
import certSam from "@/assets/cert-sam.jpg";
import certEverify from "@/assets/cert-everify.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About ConfigUSA — Enterprise Technology & Workforce Solutions",
      },
      {
        name: "description",
        content:
          "ConfigUSA is an enterprise technology and workforce solutions organisation connecting businesses with the talent, expertise and capabilities they need.",
      },
      {
        property: "og:title",
        content: "About ConfigUSA — Enterprise Technology & Workforce Solutions",
      },
      {
        property: "og:description",
        content:
          "Bridging critical enterprise technology talent gaps with high-velocity deployment and compliance. Enterprise technology and workforce partner of choice.",
      },
    ],
  }),
  component: AboutPage,
});

/* ────────────────────────── DATA ────────────────────────── */

// 1. Who We Are - 6 Core Capabilities Highlighting IT Staffing & Workforce Solutions
const WHO_WE_ARE_CAPABILITIES = [
  {
    icon: Users,
    title: "IT Staffing and Talent Solutions",
    text: "Flexible contract staffing, contract-to-hire, and direct placement connecting enterprises with qualified technology professionals across critical stacks.",
  },
  {
    icon: Search,
    title: "Specialist Technology Recruitment",
    text: "Targeted sourcing and rigorous technical vetting for hard-to-find specialists, lead engineers, enterprise architects, and solution designers.",
  },
  {
    icon: Layers,
    title: "Workforce Solutions",
    text: "Comprehensive contingent workforce strategies, dedicated talent pipelines, payroll management, and co-managed workforce structures.",
  },
  {
    icon: Cpu,
    title: "Technology Resource Augmentation",
    text: "Seamless integration of skilled individual contributors and complete engineering pods directly into active client delivery cycles.",
  },
  {
    icon: Building2,
    title: "MSP and VMS Programs",
    text: "Disciplined participation within enterprise Managed Service Provider programs and Vendor Management Systems with strict SLA adherence.",
  },
  {
    icon: Laptop,
    title: "Enterprise Technology Expertise",
    text: "Deep supporting domain knowledge across cloud infrastructure, enterprise platforms (SAP, Workday), custom software, and modern data architectures.",
  },
];

// 2. Client-Approved 4 Core Values
const CORE_VALUES = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    text: "Maintain high standards in talent selection, professional capabilities and workforce solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Integrity",
    text: "Build trust through transparency, ethical practices, compliance and accountability.",
  },
  {
    icon: Rocket,
    title: "Agility",
    text: "Adapt to changing business requirements and respond with flexible talent and workforce solutions.",
  },
  {
    icon: Handshake,
    title: "Client-Centric Alignment",
    text: "Understand each client's business priorities and align talent and solutions with their requirements.",
  },
];

// 3. What Guides Us - Operating Principles
const OPERATING_PRINCIPLES = [
  {
    number: "01",
    title: "Client Context First",
    text: "Understand the business need before proposing a solution.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Capability with Evidence",
    text: "Represent skills, experience and delivery credentials accurately.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Accountability",
    text: "Set clear expectations, ownership and communication from the outset.",
    icon: Target,
  },
  {
    number: "04",
    title: "Flexibility",
    text: "Shape the engagement around the requirement, scale and delivery environment.",
    icon: Layers,
  },
];

// 4. Confirmed Operating Offices
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

// 5. Official Certifications & Registrations (With Valid NMSDC Asset)
const CERTIFICATIONS = [
  { image: certMwbe, name: "M/WBE", label: "Minority/Woman-Owned Business Enterprise" },
  { image: certSbe, name: "SBE", label: "Small Business Enterprise Certified" },
  { image: certSam, name: "SAM", label: "SAM Registered — FedBiz Access" },
  { image: certNmsdc, name: "NMSDC", label: "National Minority Supplier Development Council Certified" },
  { image: certEverify, name: "E-Verify", label: "E-Verify Employer" },
];

/* ────────────────────────── COMPONENT ────────────────────────── */

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] flex items-center overflow-hidden bg-[#102B4E] text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 border-b border-[#1b3a63]">
        {/* Edge-to-Edge Hero Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src={aboutBg}
            alt="About ConfigUSA"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-[right_center] md:object-[88%_center] brightness-110 contrast-[1.04]"
          />
          {/* Natural gradient overlay protecting left text while showcasing right architectural skyline */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d3a] via-[#071d3a]/80 via-40% sm:via-35% to-transparent sm:to-58% pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#071d3a]/25 to-transparent pointer-events-none" />
        </div>

        <div className="container-enterprise relative z-10 w-full my-auto py-2">
          <div className="max-w-xl lg:max-w-[620px] xl:max-w-[700px] space-y-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                ABOUT CONFIGUSA
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold leading-[1.16] tracking-tight text-white">
              A Focused Partner for Enterprise Technology and Workforce Needs.
            </h1>

            {/* Supporting Content */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              ConfigUSA works with organisations to address specialised technology, engineering and workforce requirements. We bring together talent access, structured delivery practices and flexible engagement models to help clients execute with confidence.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#who-we-are"
                className="btn-cta-primary inline-flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Meet ConfigUSA <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
              >
                Explore Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tagline Badge */}
            <div className="pt-2 border-l-2 border-[#C83B43] pl-3.5 text-xs tracking-wide text-slate-300">
              Enterprise Technology, Workforce & Managed Delivery Partner
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1.5 Client Logos Ticker                                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <TechTicker title="TRUSTED BY CLIENTS ACROSS DIVERSE INDUSTRIES" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Company Background – Our Story                                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="our-company" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Team Photography */}
              <div className="lg:col-span-5 relative">
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                  <img
                    src={whoWeAreMeeting}
                    alt="ConfigUSA Team Collaborating"
                    className="w-full object-cover aspect-[4/3] filter brightness-[1.05] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="bg-[#102B4E]/95 text-white px-5 py-3.5 text-xs flex items-center justify-between border-t border-white/20">
                    <span className="font-semibold text-white">
                      ConfigUSA Enterprise Delivery Team
                    </span>
                    <span className="text-[#C83B43] font-mono font-bold">
                      Outcome-Driven Execution
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Story Copy */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                      Our Story
                    </h2>
                    <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <p>
                    ConfigUSA is an enterprise technology and workforce solutions organisation focused on connecting businesses with the talent, expertise and capabilities they need.
                  </p>
                  <p>
                    The company supports organisations in addressing specialised technology and workforce requirements through talent solutions, technology expertise and flexible workforce engagement models.
                  </p>
                  <p>
                    Its approach is centred on understanding client requirements, identifying the right capabilities and building dependable professional relationships.
                  </p>
                </div>

                {/* Highlights Card */}
                <div className="pt-2">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Understanding client requirements and strategic priorities",
                      "Identifying the right technical capabilities and specialized talent",
                      "Building dependable, long-term professional relationships",
                      "Flexible workforce engagement models built for confidence",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-700 hover:border-[#245B91] transition-colors"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C83B43] text-white mt-0.5 shadow-2xs">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
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
      {/* 3. Who We Are – 6 Capabilities Highlighting Staffing & Tech         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="who-we-are" className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHO WE ARE
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Connecting Business Priorities with the Expertise Required to Deliver
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                We are an enterprise technology and workforce solutions organisation focused on connecting business priorities with the expertise required to deliver them. Our work spans specialist talent, technology capabilities and workforce delivery models.
              </p>
            </div>
          </FadeUp>

          {/* 6 Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_WE_ARE_CAPABILITIES.map((cap, idx) => (
              <FadeUp key={cap.title} delay={idx * 0.06} className="h-full">
                <div className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-xs border border-slate-200 hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-5 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <cap.icon className="h-5 w-5 stroke-[1.75]" />
                    </span>
                    <h3 className="text-lg font-bold text-[#102B4E] group-hover:text-[#245B91] transition-colors leading-tight mb-2.5">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4 & 5. Our Mission & Our Vision (Gold Small Cards Layout)           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="mission-vision" className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Our Mission & Vision
              </h2>
              <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
            </div>
          </FadeUp>

          {/* Gold Small Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Mission Card */}
            <FadeUp delay={0.06} className="h-full">
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-8 shadow-xs flex flex-col justify-between border-t-4 border-t-[#102B4E] hover:border-t-[#C83B43] hover:-translate-y-1.5 hover:shadow-md hover:bg-white transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C83B43]">
                      Strategic Mandate
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#C83B43] border border-red-100/70">
                      <Compass className="h-5 w-5 stroke-[2]" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102B4E] mb-2.5">
                    Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Bridging critical enterprise technology talent gaps with high-velocity deployment and compliance.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Vision Card */}
            <FadeUp delay={0.12} className="h-full">
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-8 shadow-xs flex flex-col justify-between border-t-4 border-t-[#102B4E] hover:border-t-[#C83B43] hover:-translate-y-1.5 hover:shadow-md hover:bg-white transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#245B91]">
                      Future Horizon
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#245B91] border border-blue-100/70">
                      <Eye className="h-5 w-5 stroke-[2]" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102B4E] mb-2.5">
                    Our Vision
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Enterprise technology and workforce partner of choice.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. Our Core Values (4 Clean Premium Cards)                          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="core-values" className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OUR CORE VALUES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                The Values That Define ConfigUSA
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Four foundational values that govern every client engagement, candidate selection, and workforce solution.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <FadeUp key={val.title} delay={idx * 0.08} className="h-full">
                <div className="group relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-xl text-center transition-all duration-300 h-full flex flex-col justify-between cursor-pointer before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                  <div>
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-4 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <val.icon className="h-6 w-6 stroke-[1.75]" />
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-[#102B4E] group-hover:text-[#245B91] transition-colors mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
      {/* 7. What Guides Us – Operating Principles                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="what-guides-us" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OPERATING PRINCIPLES
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                What Guides Us
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Four practical operating principles that ensure consistent execution, transparent alignment, and dependable partnership.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPERATING_PRINCIPLES.map((principle, idx) => (
              <FadeUp key={principle.title} delay={idx * 0.08} className="h-full">
                <div className="group relative overflow-hidden rounded-2xl bg-[#F8FAFC] p-6 sm:p-7 shadow-xs border border-slate-200 hover:border-[#245B91] hover:-translate-y-1.5 hover:shadow-xl hover:bg-white transition-all duration-300 h-full flex flex-col justify-between cursor-pointer before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 group-hover:bg-[#102B4E] group-hover:text-white group-hover:border-[#102B4E] group-hover:scale-105 transition-all duration-300 shadow-xs">
                        <principle.icon className="h-5 w-5 stroke-[1.75]" />
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#C83B43] transition-colors">
                        {principle.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#102B4E] group-hover:text-[#245B91] transition-colors leading-tight mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. Leadership and Experience – Practitioner-Led Governance          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="leadership" className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                  Leadership and Experience
                </h2>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Our leadership brings experience across technology services, enterprise delivery and talent solutions.
              </p>
            </div>
          </FadeUp>

          {/* Clean Executive Governance Practice Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            <FadeUp delay={0.08} className="h-full">
              <div className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-4">
                    <Cpu className="h-5 w-5 stroke-[2]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Enterprise Technology & Delivery Governance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Practitioner leadership overseeing enterprise systems, cloud platforms, custom engineering, and mission-critical application lifecycles with verified delivery credentials.
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center gap-2 text-xs font-semibold text-[#245B91]">
                  <CheckCircle2 className="h-4 w-4 text-[#C83B43]" />
                  <span>Technical Governance & Delivery Assurance</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.16} className="h-full">
              <div className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-4">
                    <Users className="h-5 w-5 stroke-[2]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Workforce Solutions & Talent Strategy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Extensive experience in high-velocity technical recruitment, contingent workforce architecture, and MSP/VMS program integration across demanding enterprise accounts.
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center gap-2 text-xs font-semibold text-[#245B91]">
                  <CheckCircle2 className="h-4 w-4 text-[#C83B43]" />
                  <span>Talent Access & Program Discipline</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.24} className="h-full">
              <div className="rounded-2xl bg-white p-7 border border-slate-200 shadow-xs h-full flex flex-col justify-between hover:border-[#245B91] hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C83B43] border border-red-100/70 mb-4">
                    <Globe2 className="h-5 w-5 stroke-[2]" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102B4E]">
                    Global Operations & Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Proven operational leadership connecting onshore North American client management with scalable offshore delivery operations in India with strict compliance and security.
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center gap-2 text-xs font-semibold text-[#245B91]">
                  <CheckCircle2 className="h-4 w-4 text-[#C83B43]" />
                  <span>Dual-Engine Reach & Global Alignment</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 9. Our Global Footprint – Confirmed Locations                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="global-footprint" className="relative py-14 sm:py-16 lg:py-20 bg-[#102B4E] text-white overflow-hidden scroll-mt-24">
        <div className="container-enterprise relative z-10">
          <FadeUp>
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                  OUR GLOBAL FOOTPRINT
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Active Operations & Delivery Presence
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                ConfigUSA maintains active operations, delivery teams, and formal business presence across North America and India, connecting local strategic alignment with global execution capability.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {OFFICES.map((off, idx) => (
              <FadeUp key={off.city} delay={idx * 0.1} className="h-full">
                <div className="group relative overflow-hidden rounded-2xl bg-[#0a1f3a] border border-white/10 p-7 hover:border-[#C83B43] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between shadow-lg cursor-pointer before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#C83B43] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                        <MapPin className="h-5 w-5 text-[#C83B43]" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">{off.city}</h3>
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
      {/* 10. Our Commitment & Official Certifications (Auto-Scrolling Marquee)*/}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="commitment" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200 overflow-hidden scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  OUR COMMITMENT
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight">
                Built on Trust, Transparency & Dependable Execution
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                We aim to build long-term client relationships through responsiveness, transparent communication and dependable execution.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Auto-scrolling infinite marquee strip with tall, elegant portrait cards matching reference UI */}
        <div className="relative flex overflow-hidden py-4">
          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div className="flex gap-6 w-max items-center py-4 animate-marquee hover:[animation-play-state:paused]">
            {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
              <div
                key={`${cert.name}-${idx}`}
                className="group relative overflow-hidden w-64 sm:w-72 h-[270px] sm:h-[290px] shrink-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:border-[#245B91] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[#245B91] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity"
              >
                <div className="flex h-28 w-28 items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={`${cert.name} certification`}
                    loading="lazy"
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <div className="space-y-1.5 max-w-[210px]">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#102B4E] group-hover:text-[#245B91] transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug line-clamp-2">
                    {cert.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 11. Final Call to Action                                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="contact-cta" className="relative bg-[#102B4E] text-white py-14 sm:py-16 lg:py-20 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#245B91]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#C83B43]/15 blur-3xl" />

        <div className="container-enterprise relative z-10">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-200">
                <span>START A CONVERSATION</span>
                <span className="w-6 h-[2px] bg-[#C83B43] rounded-full inline-block" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight">
                Let's Build the Right Workforce for Your Business.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Connect with ConfigUSA to discuss your enterprise technology, IT staffing and workforce requirements.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-cta-primary inline-flex items-center gap-2 text-sm sm:text-base font-bold px-8 py-3.5 shadow-lg hover:-translate-y-0.5 transition-transform"
                >
                  Contact ConfigUSA <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+16099343184"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/10 hover:border-white"
                >
                  <Phone className="h-4 w-4 text-[#C83B43]" />
                  <span>+1 (609) 934-3184</span>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
