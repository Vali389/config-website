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
      {/* 2. Section: Who We Are (Split Intro Layout matching Template)       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="who-we-are" className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0] scroll-mt-24">
        <div className="container-enterprise">
          <FadeUp>
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                  WHO WE ARE
                </span>
                <span className="w-10 h-[3px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
                Connecting enterprise priorities with the expertise required to deliver them.
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed lg:border-l lg:border-slate-200 lg:pl-6 pt-1">
              We are an enterprise technology and workforce solutions organisation focused on connecting business priorities with the expertise required to deliver them. Our work spans specialist talent, technology capabilities and workforce delivery models.
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
      {/* 4. Section: Leadership and experience                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                LEADERSHIP & EXPERIENCE
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              Experienced practitioners guiding enterprise engagements.
            </h2>
          </div>

          <div className="rounded-xl bg-[#F3F5F8] border border-slate-200/90 p-8 lg:p-10">
            <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
              Our leadership brings experience across technology services, enterprise delivery and talent solutions. We maintain active, senior-level involvement in client engagements to ensure delivery standards, transparent communication and rapid escalation resolution.
            </p>
          </div>
                  </FadeUp>
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
      {/* 7. Section: Our Commitment                                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-8 lg:py-10 bg-white border-b border-[#e2e8f0]">
        <div className="container-enterprise">
          <FadeUp>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#102B4E]">
                OUR COMMITMENT
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4">
              Building long-term client relationships through dependable execution.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We aim to build long-term client relationships through responsiveness, transparent communication and dependable execution.
            </p>
          </div>
                  </FadeUp>
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
