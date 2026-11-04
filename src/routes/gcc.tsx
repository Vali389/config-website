import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  TrendingUp,
  Building2,
  Briefcase,
  Target,
  Users,
  Search,
  Handshake,
  Sparkles,
  Network,
  Cpu,
  Repeat,
  BarChart3,
  UserCheck,
  BrainCircuit,
  Rocket,
  Boxes,
  Share2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Send,
  Cloud,
  Award,
  AlertTriangle,
  Workflow,
  LineChart,
  Database,
  Landmark,
  FileCheck2,
  Check,
  Download,
  ExternalLink,
  ChevronRight,
  Layers,
  Globe2,
  Clock,
  MapPin,
  ShieldAlert,
} from "lucide-react";

import gccHeroSkyline from "@/assets/gcc-hero-skyline.jpg";
import gccExecutiveTalent from "@/assets/gcc-executive-talent.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";

export const Route = createFileRoute("/gcc")({
  head: () => ({
    meta: [
      {
        title: "Build. Scale. Transform. | Strategic Partner for GCC Growth in India | ConfigUSA",
      },
      {
        name: "description",
        content:
          "Your Strategic Partner for GCC Growth in India. We help global organisations establish, expand and transform their Global Capability Centres through leadership hiring, specialised technology talent and scalable workforce solutions.",
      },
      {
        property: "og:title",
        content: "Build. Scale. Transform. — ConfigUSA GCC Solutions",
      },
      {
        property: "og:description",
        content:
          "From GCC leadership and specialist hiring to BOT delivery and workforce transformation. The Right Talent. The Right Engineering. Real Business Outcomes.",
      },
    ],
  }),
  component: GCCGrowthPage,
});

/* ────────────────────────── DATA ────────────────────────── */

// 1. Hero Highlights Bar
const HERO_STATS = [
  { value: "1,600+", label: "Active GCCs in India", sub: "Global engineering & capability hubs" },
  { value: "$64B+", label: "Annual Ecosystem Output", sub: "Transitioned to strategic value drivers" },
  { value: "1.9M+", label: "Specialised Tech Professionals", sub: "Deep technical & leadership depth" },
  { value: "70%+", label: "Direct Global Ownership", sub: "Driving worldwide enterprise roadmaps" },
];

// 2. Why ConfigUSA? (6 Differentiators)
const WHY_CONFIGUSA = [
  {
    icon: Building2,
    title: "Enterprise Workforce Expertise",
    desc: "Over a decade of experience designing and managing complex workforce programmes, compliant multi-country talent pipelines, and Fortune 500 staffing models.",
  },
  {
    icon: Users,
    title: "Access to Specialised Talent Pools",
    desc: "Direct access to returning Indian diaspora, proven GCC practice heads, and vetted specialists across AI, enterprise engineering, and shared services.",
  },
  {
    icon: BrainCircuit,
    title: "Technology-Led Recruitment",
    desc: "Domain-specific technical screening, architectural assessment, and real-world evaluation ensuring Day-1 productivity and leadership alignment.",
  },
  {
    icon: Workflow,
    title: "Flexible Engagement Models",
    desc: "Tailored commercial structures spanning executive search, staff augmentation, dedicated engineering squads, and turnkey BOT delivery.",
  },
  {
    icon: Rocket,
    title: "Scalable Delivery Capabilities",
    desc: "Proven infrastructure to mobilize single strategic site leaders or rapidly assemble 200+ member functional teams within aggressive timeframes.",
  },
  {
    icon: Target,
    title: "Leadership & Specialist Hiring",
    desc: "Dedicated search practice offering granular compensation benchmarking, talent market mapping, and executive retention strategies.",
  },
];

// 3. Six Core GCC Capabilities (Packaged Service Offering)
const CORE_SERVICES = [
  {
    id: "strategy",
    number: "01",
    title: "GCC Strategy & Advisory",
    category: "Strategic Planning",
    tagline: "Market feasibility, location intelligence, and operating model design.",
    deliverables: [
      "Talent availability & cost benchmarking across Tier-1 and Tier-2 Indian tech hubs",
      "Operating model design: Functional CoE vs. End-to-end product ownership",
      "Entity structure advisory, tax governance & regulatory compliance roadmap",
      "Competitive peer benchmarking and 3-5 year scaling frameworks",
    ],
  },
  {
    id: "setup",
    number: "02",
    title: "Setup & Establishment Support",
    category: "Incubation & Launch",
    tagline: "End-to-end operational execution from entity to physical & IT rollout.",
    deliverables: [
      "Turnkey facility search, IT infrastructure, and cyber-compliant security setups",
      "Local compliance, legal incorporation, payroll & statutory benefits implementation",
      "Vendor ecosystem procurement and day-1 operational governance",
      "Day-1 launch management with initial leadership and core seed teams",
    ],
  },
  {
    id: "leadership",
    number: "03",
    title: "Leadership & Talent Acquisition",
    category: "Executive Search",
    tagline: "Securing transformative Site Heads, Global VPs, and Functional Practice Leads.",
    deliverables: [
      "Confidential executive search for GCC Managing Directors & Country Heads",
      "Global Heads of Engineering, AI, Cloud, Finance, and Shared Services",
      "Assessment of cross-cultural leadership capability and global stakeholder management",
      "Executive compensation structure, equity benchmarking, and retention contracts",
    ],
  },
  {
    id: "workforce",
    number: "04",
    title: "Technology Workforce Solutions",
    category: "Engineering Scale",
    tagline: "Deploying high-performing squads across AI, software, cloud, and data.",
    deliverables: [
      "Forward-Deployed Engineering (FDE) squads embedded into operational workflows",
      "AI & Data Platform teams: Generative AI, LLMs, PySpark, Palantir & DataOps",
      "Enterprise platform specialists: SAP, Oracle, Workday, Salesforce & MuleSoft",
      "Scalable contract-to-hire, dedicated pods, and managed SLA-driven delivery",
    ],
  },
  {
    id: "bot",
    number: "05",
    title: "Build-Operate-Transfer (BOT)",
    category: "Turnkey Acceleration",
    tagline: "De-risk your India expansion with guaranteed capability transfer.",
    deliverables: [
      "Rapid incubation under ConfigUSA's proven operational and legal infrastructure",
      "Complete hiring, cultural integration, workflow establishment, and KPI management",
      "Mitigation of upfront capital risk and expedited time-to-market by 6–9 months",
      "Structured, seamless transfer of fully operational entity to your corporate balance sheet",
    ],
  },
  {
    id: "transformation",
    number: "06",
    title: "GCC Transformation & Scaling",
    category: "Maturity Evolution",
    tagline: "Transitioning mature GCCs into global innovation and revenue drivers.",
    deliverables: [
      "Workforce restructuring from legacy maintenance to high-value AI & digital platforms",
      "Upskilling and organizational redesign for direct global mandate ownership",
      "Automation of repetitive GBS processes and implementation of agentic AI workflows",
      "Leadership realignment to drive global enterprise strategy from India",
    ],
  },
];

// 4. Delivery Capabilities & Credentials
const DELIVERY_CAPABILITIES = [
  {
    title: "Leadership & Executive Search",
    desc: "Rigorous global search for transformative CXOs, Site Heads, and practice leaders.",
  },
  {
    title: "Specialist Technology Recruitment",
    desc: "Direct access to niche engineering talent across AI/ML, Cloud, Cyber, and ERP.",
  },
  {
    title: "Large-Scale Workforce Mobilisation",
    desc: "Rapid deployment frameworks capable of onboarding 100+ vetted engineers quarterly.",
  },
  {
    title: "Contract & Permanent Staffing",
    desc: "Flexible engagement models tailored to multi-year program peaks and long-term hires.",
  },
  {
    title: "Dedicated Recruitment Teams",
    desc: "Custom delivery pods acting as your white-labeled talent acquisition desk in India.",
  },
  {
    title: "India & International Support",
    desc: "Seamless cross-border coordination across United States, Canada, and Indian hubs.",
  },
];

const ENTERPRISE_CREDENTIALS = [
  {
    metric: "150+",
    label: "Enterprise Client Programmes",
    detail: "Global Fortune 500 and mid-market enterprise engagements delivered.",
  },
  {
    metric: "350+",
    label: "Specialist Engineers in India",
    detail: "High-performing delivery center in Hyderabad supporting global roadmaps.",
  },
  {
    metric: "94%",
    label: "Executive Placement Retention",
    detail: "Industry-leading retention rate for GCC site heads and practice leaders.",
  },
  {
    metric: "30–45 Days",
    label: "Average Pod Deployment",
    detail: "Rapid seed-team mobilisation from brief to fully operational pod.",
  },
];

// 5. Anonymized Case Studies & Measurable Outcomes
const CASE_STUDIES = [
  {
    sector: "Global FinTech & Capital Markets",
    title: "Scaling a 120-Engineer Quantitative & Cloud CoE in 90 Days",
    challenge:
      "A premier North American financial technology multinational needed to establish a dedicated Cloud & Algorithmic Trading CoE in Hyderabad without distracting internal HR.",
    solution:
      "ConfigUSA deployed a dedicated talent acquisition squad, mapped local tier-1 algorithmic engineering talent, and executed rigorous technical and compliance vetting.",
    results: [
      "120 specialised engineers hired and onboarded across PySpark, AWS, and C++ in 90 days",
      "Zero Day-1 security or compliance delays across strict SEC/FINRA standards",
      "35% operational cost reduction compared to third-party vendor outsourcing",
    ],
  },
  {
    sector: "Healthcare & Life Sciences Enterprise",
    title: "Turnkey Executive Search for India Site Head & Core AI Hub",
    challenge:
      "A global MedTech conglomerate required a senior Site Head with 20+ years of international medical device software experience to lead its new Bengaluru research facility.",
    solution:
      "Conducted a confidential, multi-geography search targeting returning Indian leaders in the US and established India GCC leaders. Managed end-to-end recruitment of founding team.",
    results: [
      "Appointed Site Head within 45 days, followed by 5 Functional Directors",
      "Scaled the founding AI & Medical Imaging team to 75 researchers in Year 1",
      "Center now holds direct patent ownership for 4 flagship enterprise software lines",
    ],
  },
  {
    sector: "Enterprise SaaS Multinational",
    title: "Turnkey Build-Operate-Transfer (BOT) for 200-Person AI Center",
    challenge:
      "A Silicon Valley enterprise software provider needed to stand up an India AI development hub without incorporating a direct subsidiary in Phase 1.",
    solution:
      "ConfigUSA executed a structured BOT model: secured premium facility space in Hitech City, hired 200 engineers, managed payroll, and transferred the fully mature operation.",
    results: [
      "Time-to-market accelerated by 7 months versus traditional subsidiary incorporation",
      "100% staff retention during the planned legal and entity transfer to the client",
      "Achieved 98% SLA attainment across production platform releases in Year 1",
    ],
  },
];

// 6. GCC Intelligence 2026 Executive Summary (6 Core Market Questions)
const GCC_INTELLIGENCE_2026 = [
  {
    question: "Where are GCCs hiring?",
    answer:
      "Tier-1 cities (Bengaluru and Hyderabad) command 65% of net new tech hires, with Pune, NCR, and Chennai growing rapidly for specialized engineering, automotive software, and finance. Tier-2 hubs (Ahmedabad, Kochi, Coimbatore) are emerging for resilient operations.",
    stat: "65% in Top 2 Hubs",
  },
  {
    question: "Which functions are expanding fastest?",
    answer:
      "AI & Agentic Automation, Cloud-Native Engineering, Cybersecurity, Enterprise Data Platforms, and specialized Corporate Finance/Risk. Over 80% of new centres are set up with direct digital product engineering mandates.",
    stat: "+34% AI/Data Mandates",
  },
  {
    question: "What capabilities are in highest demand?",
    answer:
      "Full-stack AI engineers, PySpark/Databricks data architects, Palantir Foundry engineers, cloud security specialists, and SAP S/4HANA & Workday enterprise leads who combine technical depth with business communication.",
    stat: "High Talent Premium",
  },
  {
    question: "How are established GCCs restructuring?",
    answer:
      "Shifting away from low-complexity transactional back-office work. Centres are flattening hierarchical layers, automating repetitive shared services, and establishing cross-functional agile pods that report directly to global business heads.",
    stat: "Value Over Cost",
  },
  {
    question: "Which leadership roles are emerging?",
    answer:
      "Global Chief AI Officers, Global Heads of Core Platform Architecture, and GCC Site Directors with dual accountability for Indian delivery and worldwide product strategy. Leaders need global stakeholder gravitas and local execution depth.",
    stat: "Strategic CXO Growth",
  },
  {
    question: "What does the future GCC workforce look like?",
    answer:
      "Multidisciplinary, hybrid pods blending experienced international returnees with top Indian engineering graduates. GCCs are operating as co-creators of enterprise strategy, not peripheral cost centers.",
    stat: "1.9M Workforce by 2026",
  },
];

/* ────────────────────────── MAIN COMPONENT ────────────────────────── */

function GCCGrowthPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    organization: "",
    gccStage: "Planning New GCC",
    requirement: "Full GCC Build & Scale",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* ────────────────────── 1. HERO SECTION (Executive Consulting Style) ────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-14 overflow-hidden bg-[#07172f] text-white">
        {/* Full-width corporate background image with left-to-right fade */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={gccHeroSkyline}
            alt="ConfigUSA GCC Enterprise Leadership in Executive Boardroom overlooking illuminated city skyline"
            className="h-full w-full object-cover object-right lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07172f] via-[#07172f]/95 via-50% to-[#07172f]/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07172f] via-[#07172f]/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-10">
          <div className="max-w-4xl">
            {/* Top Eyebrow with Restrained Red Accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 backdrop-blur-md mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-slate-200">
                CONFIGUSA • GCC TALENT & WORKFORCE SOLUTIONS
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Build. Scale. Transform.
              <span className="block text-slate-100 font-extrabold mt-2 text-2xl sm:text-3xl lg:text-[2.65rem] leading-snug">
                Your Strategic Partner for{" "}
                <span className="text-red-500 underline decoration-red-500/40 decoration-wavy decoration-2">
                  GCC Growth in India.
                </span>
              </span>
            </motion.h1>

            {/* Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 text-base sm:text-lg lg:text-[19px] text-slate-200 font-normal leading-relaxed max-w-3xl"
            >
              We help global organisations establish, expand and transform their Global Capability Centres through leadership hiring, specialised technology talent and scalable workforce solutions.
            </motion.p>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium tracking-wide flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
              From GCC leadership and specialist hiring to BOT delivery and workforce transformation.
            </motion.p>

            {/* Brand Signature Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="mt-4 pt-3 border-t border-white/15 text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              CONFIGUSA — The Right Talent. The Right Engineering. Real Business Outcomes.
            </motion.div>

            {/* Action Buttons (Primary & Secondary CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#enterprise-enquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-7 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-red-950/30 cursor-pointer"
              >
                <Building2 className="h-4 w-4" />
                Build Your GCC <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all backdrop-blur-md cursor-pointer"
              >
                Explore Our GCC Solutions
              </a>
            </motion.div>
          </div>

          {/* 4 Key Ecosystem Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/15">
            {HERO_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium leading-relaxed">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── 2. GCC OPPORTUNITY (The India Landscape) ────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="border-l-[3px] border-red-600 pl-3.5 mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
                  THE INDIA GCC OPPORTUNITY • 2026 OUTLOOK
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight leading-tight">
                  From Offshore Delivery to Strategic Global Operating Models
                </h2>
              </div>

              <div className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 font-normal">
                <p>
                  India is undergoing a fundamental transformation in its role within global enterprises. What began decades ago as an offshore support and cost-arbitrage model has matured into a premier global operating model.
                </p>
                <p>
                  Today, Global Capability Centres in India are not peripheral service desks. They are driving worldwide digital transformation, owning product roadmaps, incubating proprietary generative AI architectures, managing global treasury, and leading executive operations.
                </p>
                <p className="font-medium text-[#07172f]">
                  With hundreds of new centres establishing operations annually and existing hubs expanding their remits, the primary challenge is no longer access to real estate—it is securing world-class leadership, specialized technology depth, and scalable workforce frameworks.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Global Ownership</h3>
                    <p className="text-sm font-bold text-[#07172f]">Direct CXO Mandates</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Talent Repatriation</h3>
                    <p className="text-sm font-bold text-[#07172f]">Returning Global Leaders</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 font-bold">
                    3
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Value Over Cost</h3>
                    <p className="text-sm font-bold text-[#07172f]">Strategic Innovation Hubs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={gccEnterpriseHub}
                  alt="Modern high-tech GCC Enterprise Facility in Hyderabad India"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172f]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    High-Growth Hubs
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Bengaluru • Hyderabad • Pune • NCR • Chennai
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Hosting the world's highest concentration of specialized engineering and AI capability centres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 3. WHY CONFIGUSA? (Differentiation Section) ────────────────────── */}
      <section id="why-configusa" className="py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              WHY CONFIGUSA? • ENTERPRISE DIFFERENTIATORS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
              A Strategic Growth & Workforce Partner—Not Just a Staffing Agency
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Global leaders choose ConfigUSA because we combine deep cross-border enterprise consulting rigor with execution capabilities that solve the hardest GCC talent and setup bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CONFIGUSA.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-sm hover:border-red-500 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200 mb-5">
                    <item.icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#07172f] group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-red-600">
                  <span>Enterprise Precision</span>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── 4. PACKAGED SERVICE OFFERING (6 Core Capabilities) ────────────────────── */}
      <section id="services" className="py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              OUR CAPABILITIES • END-TO-END GCC SOLUTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
              Six Comprehensive Capabilities Across the Entire GCC Lifecycle
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you are planning your initial India entry, expanding existing technical practices, or executing a Build-Operate-Transfer program, we provide substantiated capabilities with defined deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CORE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between hover:border-red-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-red-600 tracking-wider">
                      {srv.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#07172f] leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-2 leading-relaxed">
                    {srv.tagline}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Deliverables
                    </p>
                    {srv.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#enterprise-enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#07172f] hover:text-red-600 transition-colors"
                  >
                    <span>Request Scope & Deliverables</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── 5. DELIVERY CAPABILITIES & CREDENTIALS ────────────────────── */}
      <section className="py-24 bg-[#07172f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-500 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-1">
              ENTERPRISE CREDENTIALS & CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white tracking-tight">
              Verifiable Global Delivery Capabilities & Metrics
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              ConfigUSA delivers managed staffing, MSP integrations, dedicated squads, and senior executive search with verified track records across North America and India.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ENTERPRISE_CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-red-400">
                  {c.metric}
                </div>
                <div className="text-sm font-bold text-white mt-1.5">
                  {c.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {c.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Core Delivery Capabilities List */}
          <div className="border-t border-white/10 pt-14">
            <h3 className="text-xl font-bold text-white mb-8">
              Core Delivery Execution Frameworks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DELIVERY_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/60 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <h4 className="text-base font-bold text-white">{cap.title}</h4>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed pl-4.5">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 6. ANONYMIZED CASE STUDIES & MEASURABLE OUTCOMES ────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              PROVEN OUTCOMES • ANONYMISED CASE STUDIES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
              Delivering Measurable Outcomes for Global Enterprise Leaders
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Representative examples of how ConfigUSA supports enterprise organisations across aggressive scaling timelines, executive appointments, and BOT operational transfers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-7 flex flex-col justify-between hover:border-red-400 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-100 mb-4">
                    {cs.sector}
                  </div>
                  <h3 className="text-lg font-bold text-[#07172f] leading-snug">
                    {cs.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">The Challenge:</span>
                      <p>{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">ConfigUSA Solution:</span>
                      <p>{cs.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                      Verified Measurable Results
                    </span>
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] text-slate-400 font-semibold italic">
                    Client names anonymized in accordance with non-disclosure agreements.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── 7. GCC INTELLIGENCE | 2026 (Executive Summary Snapshot) ────────────────────── */}
      <section id="gcc-intelligence" className="py-24 bg-[#f8fafc] border-b border-slate-200/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl border-l-[3px] border-red-600 pl-3.5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
                GCC INTELLIGENCE • 2026 EXECUTIVE REPORT
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
                Strategic Intelligence Snapshot: India's Evolving GCC Ecosystem
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Key insights, hiring movements, restructuring priorities, and capability shifts shaping decisions for global leaders in 2026.
              </p>
            </div>
            <a
              href="#enterprise-enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-[#07172f] hover:bg-[#0c2447] text-white px-5 py-3 text-xs sm:text-sm font-bold transition-all shrink-0 self-start md:self-end shadow-sm"
            >
              <Download className="h-4 w-4 text-red-400" />
              <span>Download Full 2026 Report</span>
            </a>
          </div>

          {/* 6 Core Market Questions Answered */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GCC_INTELLIGENCE_2026.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-red-400 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-red-600">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-100">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#07172f]">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2.5 font-normal">
                    {item.answer}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-semibold">
                  Source: ConfigUSA GCC Intelligence & Industry Benchmarks, Q1 2026
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── 8. AUDIENCE PATHWAYS (Distinct Journeys) ────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              TAILORED ENGAGEMENT PATHWAYS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
              Separate Pathways for GCC Enterprise Leaders and Ambitious Professionals
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We maintain dedicated engagement tracks: enterprise consultations for organizational mandates, and confidential talent advisory for senior practitioners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pathway 1: For GCC Leaders */}
            <div className="rounded-3xl bg-gradient-to-br from-[#07172f] to-[#0a2347] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white font-bold">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                      Primary Enterprise Track
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">For GCC Leaders</h3>
                  </div>
                </div>

                <p className="text-base text-slate-200 font-semibold mt-4">
                  Establish, expand and transform your India GCC.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Partner with ConfigUSA to design executive leadership teams, accelerate technical hiring, evaluate BOT incubation, and de-risk your global capability centre operations.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "GCC leadership hiring & executive search",
                    "Specialist talent acquisition across AI, cloud & ERP",
                    "BOT workforce solutions with clean balance-sheet transfer",
                    "Dedicated, agile technology teams and engineering pods",
                  ].map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check className="h-4 w-4 text-red-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <a
                  href="#enterprise-enquiry"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md cursor-pointer"
                >
                  <Building2 className="h-4 w-4" />
                  Build Your GCC <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Pathway 2: For Professionals */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-red-400 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#07172f] font-bold border border-slate-200">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Career Progression Track
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#07172f]">For Professionals</h3>
                  </div>
                </div>

                <p className="text-base text-slate-800 font-semibold mt-4">
                  Take your global experience to the next level.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Connect with leading multinational capability centres in India offering direct global ownership, strategic decision-making mandates, and competitive international compensation.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "GCC leadership opportunities (Site Head, VP & Practice Leads)",
                    "Technology careers in modern engineering & architecture",
                    "High-impact AI, machine learning and data roles",
                    "Global career transitions and returning NRI talent placements",
                  ].map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="h-4 w-4 text-red-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/careers"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#07172f] hover:bg-[#07172f] hover:text-white px-6 py-3.5 text-sm font-bold text-[#07172f] transition-all cursor-pointer"
                >
                  <Users className="h-4 w-4" />
                  Explore Opportunities on Careers Page <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── 9. ENTERPRISE ENQUIRY FORM (Primary Conversion Path) ────────────────────── */}
      <section id="enterprise-enquiry" className="py-24 bg-[#07172f] text-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 mb-3">
              PRIMARY CONVERSION PATHWAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Initiate a Strategic GCC Consultation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connect with ConfigUSA's Senior GCC Practice Directors to discuss your India establishment, expansion, leadership search, or BOT workforce mandate.
            </p>
          </div>

          <div className="rounded-3xl bg-white text-slate-900 p-8 sm:p-12 shadow-2xl border border-slate-200">
            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#07172f]">
                  GCC Consultation Request Received
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for submitting your mandate details. A Senior GCC Practice Lead from ConfigUSA will contact you within one business day with relevant market intelligence.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#07172f] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#0c2447] transition-colors"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="border-l-[3px] border-red-600 pl-3.5 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-0.5">
                    Enterprise Mandate Brief
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#07172f]">
                    Build Your GCC with ConfigUSA
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Richardson"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="david@enterprise.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Organisation / Enterprise Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Global Financial Corp"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current GCC Stage
                    </label>
                    <select
                      value={formData.gccStage}
                      onChange={(e) => setFormData({ ...formData, gccStage: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    >
                      <option>Planning New GCC in India</option>
                      <option>Evaluating Location Feasibility & Advisory</option>
                      <option>Expanding Existing Capability Centre</option>
                      <option>Searching for Site Head / CXO Leadership</option>
                      <option>Interested in Build-Operate-Transfer (BOT)</option>
                      <option>Workforce Restructuring & Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    >
                      <option>Full GCC Build & Scale</option>
                      <option>Executive Leadership Search</option>
                      <option>AI, Data & Cloud Specialized Squads</option>
                      <option>Turnkey BOT Framework</option>
                      <option>Large-Scale Workforce Augmentation</option>
                      <option>Strategic Market Intelligence Report</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mandate Scope & Objectives
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly outline your team size target, desired location (e.g., Hyderabad, Bengaluru), technical domain, and timeline expectations..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
                  />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500">
                    Strict enterprise NDA adherence. Your mandate information remains confidential.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-sm font-bold transition-all shadow-md cursor-pointer"
                  >
                    <span>Submit GCC Enquiry</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Job seeker routing notice */}
          <div className="mt-8 text-center text-xs text-slate-400">
            Looking for personal career opportunities in a GCC?{" "}
            <Link to="/careers" className="text-red-400 hover:underline font-bold">
              Visit our Careers Portal &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
