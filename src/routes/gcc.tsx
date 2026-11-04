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
  Phone,
  Mail,
  Shield,
  Factory,
  ShoppingCart,
  Heart,
} from "lucide-react";

import gccHeroSkyline from "@/assets/gcc-hero-skyline.jpg";
import gccExecutiveTalent from "@/assets/gcc-executive-talent.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";
import indFinancial from "@/assets/ind-financial.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indTechnology from "@/assets/ind-technology.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import whoWeAreMeeting from "@/assets/who_we_are_meeting.jpg";

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

/* ────────────────────────── DATA SPECIFICATION ────────────────────────── */

// Sequence 1: Hero Quick-Glance Floating Capabilities (Nexus style)
const HERO_FLOATING_CARDS = [
  {
    icon: Building2,
    title: "GCC Strategy & Setup",
    desc: "Location feasibility, entity compliance, and operating model design.",
  },
  {
    icon: Target,
    title: "Leadership & Executive Search",
    desc: "Confidential search for Site Heads, VPs, and Global CoE Directors.",
  },
  {
    icon: Rocket,
    title: "BOT & Tech Squads",
    desc: "Turnkey incubation, specialised AI/engineering pods, and balance-sheet transfer.",
  },
];

// Sequence 2: GCC Market Opportunity Stats
const MARKET_METRICS = [
  { value: "1,600+", label: "Active GCCs in India", sub: "Global engineering & capability hubs" },
  { value: "$64B+", label: "Annual Ecosystem Output", sub: "Transitioned to strategic value drivers" },
  { value: "1.9M+", label: "Specialised Tech Professionals", sub: "Deep technical & leadership depth" },
  { value: "70%+", label: "Direct Global Ownership", sub: "Driving worldwide enterprise roadmaps" },
];

// Sequence 3: Why ConfigUSA (6 Differentiators)
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

// Sequence 4: Six Core GCC Services (Commercial Offering)
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

// Sequence 5: Industry Expertise (Credibility)
const INDUSTRY_EXPERTISE = [
  {
    title: "Financial Services & Banking",
    image: indFinancial,
    badge: "Capital Markets & Fintech",
    desc: "Quantitative technology squads, algorithmic trading support, global treasury CoEs, regulatory compliance, and risk platforms.",
    capabilities: ["SEC / FINRA regulatory compliance", "PySpark & algorithmic data pipelines", "Core banking modernization"],
  },
  {
    title: "Healthcare & Life Sciences",
    image: indHealthcare,
    badge: "MedTech & Digital Health",
    desc: "Bioinformatics research hubs, medical imaging analytics, clinical trials platform engineering, and HIPAA-compliant infrastructures.",
    capabilities: ["FDA 21 CFR Part 11 compliance", "Medical AI & diagnostic imaging", "Clinical data governance CoEs"],
  },
  {
    title: "Technology & SaaS Platforms",
    image: indTechnology,
    badge: "Hyperscale Cloud & AI",
    desc: "Multi-tenant SaaS product engineering, distributed systems, proprietary LLM training pods, and forward deployed squads.",
    capabilities: ["Full-stack product lifecycle", "Agentic AI workflows & LLMOps", "Cloud-native microservices"],
  },
  {
    title: "Manufacturing & Automotive",
    image: indManufacturing,
    badge: "Industry 4.0 & Connected Tech",
    desc: "Embedded firmware squads, smart factory IoT telemetry, connected vehicle software, and global supply chain engineering.",
    capabilities: ["AUTOSAR & embedded software", "Digital twin & shopfloor IoT", "Global supply chain CoEs"],
  },
  {
    title: "Retail & Consumer Platforms",
    image: indRetail,
    badge: "Omni-Channel Commerce",
    desc: "High-throughput commerce engines, real-time inventory optimization platforms, and personalized customer intelligence hubs.",
    capabilities: ["Microservices commerce platforms", "Predictive demand forecasting", "Loyalty & customer data platforms"],
  },
  {
    title: "GBS & Enterprise Applications",
    image: whoWeAreMeeting,
    badge: "ERP & Shared Services",
    desc: "Global capability CoEs for SAP S/4HANA, Oracle Cloud, Workday, Salesforce, and automated global business shared services.",
    capabilities: ["SAP S/4HANA clean core migration", "Global finance & HR transformation", "Procurement & vendor desks"],
  },
];

// Sequence 6: Delivery Capabilities & Credentials (Execution Confidence)
const DELIVERY_CAPABILITIES = [
  {
    title: "Leadership & Executive Search",
    desc: "Rigorous global search for transformative CXOs, Site Heads, and practice leaders with cross-border gravitas.",
  },
  {
    title: "Specialist Technology Recruitment",
    desc: "Direct access to niche engineering talent across AI/ML, Cloud, Cyber, Data Platforms, and ERP ecosystems.",
  },
  {
    title: "Large-Scale Workforce Mobilisation",
    desc: "Rapid deployment frameworks capable of onboarding 100+ vetted engineers quarterly with zero SLA disruption.",
  },
  {
    title: "Contract & Permanent Staffing",
    desc: "Flexible engagement structures tailored to multi-year program peaks, project bursts, and long-term direct hires.",
  },
  {
    title: "Dedicated Recruitment Pods",
    desc: "Custom delivery squads acting as your dedicated, white-labeled talent acquisition desk in India.",
  },
  {
    title: "India & International Support",
    desc: "Seamless cross-border coordination across our offices in the United States, Canada, and Hyderabad, India.",
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

// Sequence 7: Verified Case Studies (Proof) - Styled like Nexus "Our Work"
const CASE_STUDIES = [
  {
    sector: "Global FinTech & Capital Markets",
    image: gccExecutiveTalent,
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
    image: whoWeAreMeeting,
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
    image: gccEnterpriseHub,
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

// Sequence 8: GCC Intelligence 2026 Executive Summary (Thought Leadership)
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
    gccStage: "Planning New GCC in India",
    requirement: "Full GCC Build & Scale",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* ────────────────────── SEQUENCE 1: HERO (Build. Scale. Transform.) ────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-20 overflow-hidden bg-[#07172f] text-white">
        {/* Full-width corporate photography with right-hand skyline and left gradient for text readability */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={gccHeroSkyline}
            alt="ConfigUSA GCC Enterprise Leadership in Executive Boardroom overlooking illuminated city skyline"
            className="h-full w-full object-cover object-right lg:object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07172f] via-[#07172f]/95 via-50% to-[#07172f]/45" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07172f] via-[#07172f]/85 to-transparent" />
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
                CONFIGUSA • STRATEGIC GCC ADVISORY & WORKFORCE SOLUTIONS
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[4.15rem] font-extrabold text-white leading-[1.06] tracking-tight"
            >
              Build. Scale. Transform.
              <span className="block text-slate-100 font-extrabold mt-2.5 text-2xl sm:text-3xl lg:text-[2.65rem] leading-snug">
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
                href="#enterprise-contact"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-7 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-red-950/30 cursor-pointer"
              >
                <Building2 className="h-4 w-4" />
                Build Your GCC <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#gcc-services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all backdrop-blur-md cursor-pointer"
              >
                Explore Our GCC Solutions
              </a>
            </motion.div>
          </div>

          {/* Floating Capability Overlap Cards (Inspired by Nexus reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 pt-8 border-t border-white/15">
            {HERO_FLOATING_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white mb-3 shadow-md">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">{card.title}</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── SEQUENCE 2: GCC MARKET OPPORTUNITY (Context) ────────────────────── */}
      <section id="market-opportunity" className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="border-l-[3px] border-red-600 pl-3.5 mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
                  THE INDIA GCC OPPORTUNITY • 2026 CONTEXT
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

              {/* 4 Ecosystem Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
                {MARKET_METRICS.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#07172f]">{m.value}</div>
                    <div className="text-[11px] font-bold text-slate-700 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={gccEnterpriseHub}
                  alt="Modern high-tech GCC Enterprise Facility in Hyderabad India"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172f]/95 via-[#07172f]/30 to-transparent flex flex-col justify-end p-6 text-white">
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

      {/* ────────────────────── SEQUENCE 3: WHY CONFIGUSA (Differentiation) ────────────────────── */}
      <section id="why-configusa" className="py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              WHY CONFIGUSA • ENTERPRISE DIFFERENTIATORS
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
                className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-sm hover:border-red-500 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group flex flex-col justify-between"
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

      {/* ────────────────────── SEQUENCE 4: GCC SERVICES (Commercial Offering) ────────────────────── */}
      <section id="gcc-services" className="py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              OUR COMMERCIAL OFFERING • 6 CORE CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
              Six Comprehensive Services Across the GCC Lifecycle
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you are planning your initial India entry, expanding existing technical practices, or executing a Build-Operate-Transfer program, we provide substantiated capabilities with defined deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CORE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between hover:border-red-400 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden group"
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
                    href="#enterprise-contact"
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

      {/* ────────────────────── SEQUENCE 5: INDUSTRY EXPERTISE (Credibility) ────────────────────── */}
      <section id="industry-expertise" className="py-24 bg-[#f8fafc] border-b border-slate-200/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-600 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-1">
              INDUSTRY EXPERTISE • DOMAIN DEPTH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#07172f] tracking-tight">
              Specialized Vertical Knowledge Across Key GCC Sectors
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We bring proven sector domain depth, regulatory frameworks, and talent benchmarks to the industries driving India's Global Capability Centre expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {INDUSTRY_EXPERTISE.map((ind) => (
              <div
                key={ind.title}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:border-red-400 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07172f]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#07172f] backdrop-blur-sm">
                      {ind.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#07172f] leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {ind.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {ind.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#enterprise-contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <span>Consult Industry Specialist</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── SEQUENCE 6: DELIVERY CAPABILITIES & CREDENTIALS (Execution Confidence) ────────────────────── */}
      <section id="delivery-capabilities" className="py-24 bg-[#07172f] text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-[3px] border-red-500 pl-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-1">
              DELIVERY CAPABILITIES • EXECUTION RIGOR
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white tracking-tight">
              Verifiable Global Delivery Capabilities & Metrics
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              ConfigUSA delivers managed staffing, MSP integrations, dedicated pods, and senior executive search with verified track records across North America and India.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ENTERPRISE_CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-red-500/50"
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
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/60 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
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

      {/* ────────────────────── SEQUENCE 7: CASE STUDIES (Proof) ────────────────────── */}
      <section id="case-studies" className="py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
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
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:border-red-400 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07172f]/85 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#07172f] shadow-sm">
                      {cs.sector}
                    </span>
                  </div>

                  <div className="p-7">
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
                </div>

                <div className="p-7 pt-0 border-t border-slate-100 mt-4 pt-4">
                  <span className="text-[11px] text-slate-400 font-semibold italic">
                    Client names anonymized in accordance with non-disclosure agreements.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── SEQUENCE 8: GCC INTELLIGENCE (Thought Leadership) ────────────────────── */}
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
              href="#enterprise-contact"
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
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-red-400 transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
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

      {/* ────────────────────── SEQUENCE 9: PROFESSIONALS AND CAREERS (Secondary Audience) ────────────────────── */}
      <section id="professionals-careers" className="py-24 bg-white border-b border-slate-200/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-4">
                  <span>CAREER & TALENT PATHWAY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07172f] tracking-tight">
                  For Experienced Professionals & Returning Indian Leaders
                </h2>
                <p className="text-base text-slate-700 font-semibold mt-2">
                  Take your global experience to the next level in India's premier GCCs.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  Connect with leading multinational capability centres in India offering direct global ownership, strategic decision-making mandates, and competitive international compensation.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {[
                    "GCC leadership opportunities (Site Head, VP & Practice Leads)",
                    "Modern engineering, cloud & architecture careers",
                    "High-impact AI, machine learning and data platform roles",
                    "Global career transitions and returning Indian diaspora placements",
                  ].map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <Check className="h-4 w-4 text-red-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#07172f] hover:bg-[#0c2447] text-white px-7 py-4 text-sm font-bold transition-all shadow-md w-full sm:w-auto cursor-pointer"
                >
                  <Users className="h-4 w-4 text-red-400" />
                  <span>Explore Open GCC Roles</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/submit-resume"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 hover:bg-white text-slate-700 px-7 py-3 text-xs font-bold transition-all w-full sm:w-auto cursor-pointer"
                >
                  <span>Submit Confidential Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── SEQUENCE 10: ENTERPRISE CONTACT (Lead Generation - Ottawa Style) ────────────────────── */}
      <section id="enterprise-contact" className="py-24 bg-[#07172f] text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Reach the Desk (Ottawa inspired) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-l-[3px] border-red-500 pl-3.5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-1">
                  NEW INQUIRY • LEAD GENERATION
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Let's Build Something Global Together.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Direct lines to our Senior GCC Practice Directors. First-call response under 24 hours. Strict enterprise NDAs available upon request.
              </p>

              {/* Desk Information Cards */}
              <div className="space-y-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 transform transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-lg">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white font-bold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Global Headquarters
                    </span>
                    <h3 className="text-sm font-bold text-white">United States Executive Desk</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536
                    </p>
                    <a
                      href="tel:+16099343184"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white font-semibold mt-2"
                    >
                      <Phone className="h-3 w-3 text-red-400" />
                      <span>+1 (609) 934-3184</span>
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 transform transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-lg">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white font-bold">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Offshore Technology Hub
                    </span>
                    <h3 className="text-sm font-bold text-white">India GCC Delivery Center</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Trendz Sapphire, Hitech City, Madhapur, Hyderabad – 500081
                    </p>
                    <a
                      href="tel:+918074683380"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white font-semibold mt-2"
                    >
                      <Phone className="h-3 w-3 text-red-400" />
                      <span>+91 80746 83380</span>
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Direct GCC Inquiries
                      </span>
                      <a href="mailto:gcc@configusa.com" className="text-sm font-bold text-white hover:underline">
                        gcc@configusa.com
                      </a>
                    </div>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-emerald-400 opacity-80" />
                </div>
              </div>
            </div>

            {/* Right: Embedded Mandate Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white text-slate-900 p-8 sm:p-10 shadow-2xl border border-slate-200">
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#07172f]">
                      Mandate Inquiry Received
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for sharing your GCC requirements. A Senior Practice Director will connect with you under strict enterprise confidentiality within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#07172f] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#0c2447] transition-colors"
                    >
                      Submit Another Mandate
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="border-l-[3px] border-red-600 pl-3.5 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-0.5">
                        CONFIDENTIAL MANDATE FORM
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#07172f]">
                        Tell Us About Your Mandate
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. David Richardson"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="david@enterprise.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Company / Organisation *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Global Tech Enterprise"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Current GCC Stage
                        </label>
                        <select
                          value={formData.gccStage}
                          onChange={(e) => setFormData({ ...formData, gccStage: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
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
                          Commercial Service Focus
                        </label>
                        <select
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                        >
                          <option>Full GCC Build & Scale</option>
                          <option>Leadership & Executive Search</option>
                          <option>Technology Workforce Solutions</option>
                          <option>Build-Operate-Transfer (BOT)</option>
                          <option>GCC Strategy & Feasibility Advisory</option>
                          <option>GCC Transformation & Modernization</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mandate Scope & Objectives
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly outline your team size target, preferred city hub (e.g. Hyderabad, Bengaluru), technical domain, and target launch timeline..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[#07172f] focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
                      />
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <p className="text-[11px] text-slate-500">
                        Strict confidentiality under enterprise mutual NDA.
                      </p>
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-sm font-bold transition-all shadow-md cursor-pointer"
                      >
                        <span>Submit Mandate Brief</span>
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
