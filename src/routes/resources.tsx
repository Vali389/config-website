import { useMemo, useState, useEffect } from "react";
import { createFileRoute, Link, useLocation, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Mail,
  Send,
  CheckCircle2,
  Search,
  X,
  Download,
  Share2,
  FileText,
  Lightbulb,
  BarChart3,
  BookOpen,
  LayoutGrid,
  TrendingUp,
  Clock,
  Sparkles,
  Building2,
  ShieldCheck,
  Check,
  ExternalLink,
} from "lucide-react";

import heroResources from "@/assets/hero-resources.jpg";
import ctaResources from "@/assets/cta-resources.jpg";
import wdWorkforce from "@/assets/wd-workforce.jpg";
import wdEnterprise from "@/assets/wd-enterprise.jpg";
import wdAi from "@/assets/wd-ai.jpg";
import wdCloud from "@/assets/wd-cloud.jpg";
import wdEngineering from "@/assets/wd-engineering.jpg";
import wdManaged from "@/assets/wd-managed.jpg";
import indFinancial from "@/assets/ind-financial.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indGovernment from "@/assets/ind-government.jpg";
import aboutApproach from "@/assets/about-approach.jpg";
import caseStudyTeam from "@/assets/case_study_team.jpg";
import insightsTeam from "@/assets/insights_workforce_team.jpg";

import { PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";

type ResourcesSearch = {
  tab?: string;
  category?: string;
};

export const Route = createFileRoute("/resources")({
  validateSearch: (search: Record<string, unknown>): ResourcesSearch => ({
    tab: typeof search.tab === "string" ? search.tab : undefined,
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Insights & Perspectives — ConfigUSA" },
      {
        name: "description",
        content:
          "Explore ConfigUSA's latest insights, case studies, research reports, and workforce intelligence on enterprise AI, digital engineering, and talent strategy.",
      },
      { property: "og:title", content: "Insights & Perspectives — ConfigUSA" },
      {
        property: "og:description",
        content:
          "Strategic thinking, real results, and industry analysis from ConfigUSA.",
      },
    ],
  }),
  component: Page,
});

/* ────────────────────────── Data Types ────────────────────────── */

type ResourceCategory = "perspectives" | "case-studies" | "research" | "workforce";

interface ResourceArticle {
  id: string;
  category: ResourceCategory;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  metrics?: {
    primary: string;
    primaryLabel: string;
    secondary?: string;
    secondaryLabel?: string;
  };
  client?: {
    name: string;
    industry: string;
  };
  format?: string;
  content: {
    summary: string;
    challenge: string;
    solution: string;
    impact: string;
    takeaways: string[];
  };
}

/* ────────────────────────── Resource Articles Collection ────────────────────────── */

const ARTICLES: ResourceArticle[] = [
  // ── Perspectives
  {
    id: "talent-landscape-2026",
    category: "perspectives",
    tag: "Perspectives",
    title: "The 2026 IT Talent Landscape: What Technology Leaders Need to Know",
    excerpt:
      "Where enterprise hiring is heading — and how strategic engineering organizations are building elastic teams that stay ahead of the disruption curve.",
    date: "Jan 12, 2026",
    readTime: "5 min read",
    image: wdWorkforce,
    author: {
      name: "Marcus Vance",
      role: "Head of Strategic Advisory & Workforce Solutions",
    },
    metrics: {
      primary: "84%",
      primaryLabel: "Leaders cite acute AI & cloud skill shortage",
      secondary: "48 Hrs",
      secondaryLabel: "Avg squad deployment velocity",
    },
    content: {
      summary:
        "The velocity of enterprise technological change has decoupled traditional annual workforce planning from actual engineering demands. In 2026, progressive CIOs are abandoning static hiring rosters in favor of dynamic, hybrid elastic models.",
      challenge:
        "Enterprise hiring cycles averaging 80 to 110 days create catastrophic project latency in high-stakes cloud migrations and GenAI initiatives. Meanwhile, full-time hiring in rapidly shifting domains introduces long-term headcount inflexibility.",
      solution:
        "ConfigUSA partners with engineering leadership to implement flexible agile squads, blending core architecture leads with on-demand specialist capacity across cloud-native infrastructure, Kubernetes, and specialized ERP modernizations.",
      impact:
        "Organizations adopting elastic talent frameworks report a 52% reduction in time-to-market for mission-critical digital initiatives while reducing fixed staffing overhead by 31%.",
      takeaways: [
        "Transition from static headcount budgeting to milestone-driven capability financing.",
        "Implement rapid contractor-to-hire evaluation frameworks to eliminate mis-hire risk.",
        "Establish unified onshore-offshore squad pods with standardized CI/CD and security guardrails.",
      ],
    },
  },
  {
    id: "agentic-ai-enterprise",
    category: "perspectives",
    tag: "Perspectives",
    title: "Agentic AI in Enterprise Workflows: Moving from Chatbots to Autonomous Execution",
    excerpt:
      "How leading CIOs are orchestrating multi-agent AI ecosystems with human-in-the-loop oversight to automate complex operational and engineering pipelines.",
    date: "Feb 03, 2026",
    readTime: "6 min read",
    image: wdAi,
    author: {
      name: "Dr. Elena Rostova",
      role: "Chief AI & Emerging Tech Architect",
    },
    metrics: {
      primary: "4.8x",
      primaryLabel: "Operational throughput acceleration",
      secondary: "100%",
      secondaryLabel: "Deterministic audit logging & compliance",
    },
    content: {
      summary:
        "Generative AI has evolved beyond passive text generation into autonomous multi-agent systems capable of reasoning, calling tools, querying enterprise databases, and executing multi-step business workflows.",
      challenge:
        "Early enterprise AI pilots frequently stalled in proof-of-concept stages due to hallucination risks, inadequate governance, lack of data lineage, and integration friction with legacy core systems.",
      solution:
        "ConfigUSA deploys domain-tuned small language models (SLMs) and retrieval-augmented generation (RAG) agent topologies with strict schema validation, human approval checkpoints, and enterprise-grade IAM integration.",
      impact:
        "Clients have automated routine compliance audits, IT ticket triage, and invoice reconciliation, reducing manual intervention by over 70% while improving SLA compliance.",
      takeaways: [
        "Design agent frameworks with deterministic guardrails and strict tool permission boundaries.",
        "Prioritize domain-specific SLMs over generic multi-billion parameter models for latency and security.",
        "Maintain immutable event logs for every autonomous tool execution to satisfy audit standards.",
      ],
    },
  },
  {
    id: "contract-to-hire-advantage",
    category: "perspectives",
    tag: "Perspectives",
    title: "The Strategic Advantage of Contract-to-Hire in Volatile Tech Markets",
    excerpt:
      "Why flexible engagement models with vetted trial periods have become the executive standard for scaling engineering capability safely without headcount friction.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    image: aboutApproach,
    author: {
      name: "Sanjay Patel",
      role: "VP Global Delivery & Technical Talent",
    },
    metrics: {
      primary: "94%",
      primaryLabel: "2-year post-conversion retention rate",
      secondary: "0%",
      secondaryLabel: "Severance & mis-hire overhead",
    },
    content: {
      summary:
        "Technical interviews often fail to predict on-the-job execution, team culture alignment, and code maintainability. Contract-to-hire transforms talent acquisition into an empirical, risk-free collaboration.",
      challenge:
        "Traditional executive and senior engineering recruitment entails steep upfront fees, long notice periods, and significant severance liability if cultural or technical mismatches occur post-onboarding.",
      solution:
        "Under ConfigUSA's Contract-to-Hire model, pre-vetted specialists join client teams on flexible 3 to 6-month contract terms. Candidates deliver real production features before permanent conversion commitments are finalized.",
      impact:
        "Enterprises achieve 94% retention past the 24-month mark, with zero conversion fees and drastically lowered onboarding disruption.",
      takeaways: [
        "Evaluate code quality and collaborative aptitude directly within production sprints.",
        "Maintain organizational agility during budget uncertainty without sacrificing momentum.",
        "Provide candidates with transparent visibility into team dynamics, boosting mutual commitment.",
      ],
    },
  },
  {
    id: "composable-erp-modernization",
    category: "perspectives",
    tag: "Perspectives",
    title: "Composable ERP & Clean Core: De-Risking Large-Scale Cloud Upgrades",
    excerpt:
      "How modular architectures and API-first integration layers allow enterprises to modernize core ERP platforms without multi-year operational freezes.",
    date: "Nov 14, 2025",
    readTime: "7 min read",
    image: wdEnterprise,
    author: {
      name: "David Sterling",
      role: "Enterprise Applications Practice Lead",
    },
    metrics: {
      primary: "-40%",
      primaryLabel: "Reduction in upgrade delivery cycles",
      secondary: "100%",
      secondaryLabel: "Clean core architecture preservation",
    },
    content: {
      summary:
        "Monolithic ERP customizations have historically created technical debt that paralyzed business agility. The clean core paradigm decouples proprietary extensions from foundational ERP engines.",
      challenge:
        "Heavily customized legacy SAP and Oracle environments require astronomical maintenance costs and turn routine version upgrades into high-risk multi-year projects.",
      solution:
        "ConfigUSA architects event-driven integration layers and side-by-side extensibility on SAP Business Technology Platform (BTP) and AWS/Azure, keeping the core ERP completely standard.",
      impact:
        "Enterprises accelerate their cloud migration timelines by 40%, ensuring continuous access to quarterly platform innovations without custom code regressions.",
      takeaways: [
        "Strictly mandate side-by-side extensions over legacy in-app modifications.",
        "Leverage API gateways and Kafka event brokers for real-time decoupled transactional data flow.",
        "Automate regression test suites across core business processes prior to cloud cutover.",
      ],
    },
  },

  // ── Case Studies
  {
    id: "fortune-500-bank-hiring",
    category: "case-studies",
    tag: "Case Study",
    title: "How a Fortune 500 Bank Cut Hiring Time by 60% with ConfigUSA",
    excerpt:
      "A premier financial services leader accelerated critical regulatory modernization and real-time payments rollout with rapidly assembled, specialized engineering squads.",
    date: "Dec 04, 2025",
    readTime: "7 min read",
    image: indFinancial,
    author: {
      name: "ConfigUSA Financial Services Practice",
      role: "Enterprise Case Study Brief",
    },
    client: {
      name: "Top 10 US Commercial & Investment Bank",
      industry: "Financial Services & Fintech",
    },
    metrics: {
      primary: "-60%",
      primaryLabel: "Reduction in hiring time",
      secondary: "$3.8M",
      secondaryLabel: "Annualized operational cost savings",
    },
    content: {
      summary:
        "Facing strict federal deadlines for real-time payment integration and anti-money laundering (AML) modernization, a top 10 US bank turned to ConfigUSA to deploy 24 security-cleared fintech specialists.",
      challenge:
        "Internal recruiting bottlenecks had left 30+ critical cloud engineering, data pipeline, and security architecture positions open for over 4 months, putting compliance milestones and launch deadlines in severe jeopardy.",
      solution:
        "ConfigUSA deployed three specialized squads across cloud microservices, Kafka streaming, and regulatory data compliance within 14 business days. All engineers underwent technical coding tests, financial background vetting, and security clearance.",
      impact:
        "The bank launched its FedNow-compliant payment gateway two months ahead of schedule, eliminating potential regulatory penalties and saving $3.8M in contractor churn and agency overhead.",
      takeaways: [
        "Pre-vetted talent pods dramatically outpace individual talent search models.",
        "Standardized technical benchmarking guarantees day-one productivity in high-security environments.",
        "Elastic capacity enabled the client to scale down auxiliary developers post-launch without friction.",
      ],
    },
  },
  {
    id: "omnichannel-retailer-scaling",
    category: "case-studies",
    tag: "Case Study",
    title: "Global Omnichannel Retailer Scales Digital Engineering 3x for Peak Season",
    excerpt:
      "Scaling cloud infrastructure and headless commerce delivery squads without sacrificing test coverage or uptime during peak holiday shopping surges.",
    date: "Aug 30, 2025",
    readTime: "8 min read",
    image: indRetail,
    author: {
      name: "Digital Engineering Practice",
      role: "Retail & Commerce Group",
    },
    client: {
      name: "Multi-Brand Global Retail Corporation ($4B+ Revenue)",
      industry: "Retail & Consumer Commerce",
    },
    metrics: {
      primary: "3.2x",
      primaryLabel: "Feature delivery velocity",
      secondary: "99.999%",
      secondaryLabel: "Peak holiday checkout uptime",
    },
    content: {
      summary:
        "To capture critical Q4 revenue, an international retail giant needed to re-architect its checkout pipeline to a headless, microservices-based model across 8 mobile and web storefronts.",
      challenge:
        "Existing monolithic commerce architecture experienced frequent latency spikes and cart abandonment during promotional flash sales, while in-house engineering bandwidth was saturated with routine maintenance.",
      solution:
        "ConfigUSA embedded 18 full-stack engineers, cloud architects, and QA automation specialists into the client's product teams, implementing Kubernetes auto-scaling clusters, Redis caching layers, and decoupled GraphQL APIs.",
      impact:
        "The retailer processed $450M in Black Friday / Cyber Week transactions with zero downtime, a 42% decrease in page load latency, and record conversion rates across mobile devices.",
      takeaways: [
        "Headless architectures require rigorous load testing at 5x expected peak volumes.",
        "Joint squad integration ensured seamless knowledge transfer to the client's internal engineers.",
        "Automated canary deployments prevented checkout disruptions during live holiday updates.",
      ],
    },
  },
  {
    id: "healthcare-ai-intake",
    category: "case-studies",
    tag: "Case Study",
    title: "Healthcare Network Implements HIPAA-Compliant AI Patient Intake Platform",
    excerpt:
      "Transforming patient onboarding and prior-authorization triage using secure, private LLM agents while maintaining zero protected health information (PHI) leakage risk.",
    date: "Jan 18, 2026",
    readTime: "6 min read",
    image: indHealthcare,
    author: {
      name: "HealthTech & Life Sciences Team",
      role: "Compliance & Cloud Squad",
    },
    client: {
      name: "Nationwide Clinical & Hospital Network (42 Facilities)",
      industry: "Healthcare Systems",
    },
    metrics: {
      primary: "-72%",
      primaryLabel: "Reduction in patient intake wait time",
      secondary: "100%",
      secondaryLabel: "HIPAA & SOC 2 Type II audit compliance",
    },
    content: {
      summary:
        "A multi-state healthcare provider struggled with administrative burnout and 45-minute average patient wait times caused by paper intake forms and manual insurance prior-authorization verification.",
      challenge:
        "Strict federal HIPAA and HITECH regulations prohibited the use of public consumer AI tools, requiring a self-contained, encrypted architecture with strict role-based access control and immutable audit trails.",
      solution:
        "ConfigUSA healthcare data engineers engineered a dedicated on-premise private RAG pipeline integrated directly into the hospital's Epic EHR system, utilizing zero-data-retention language models with local encryption.",
      impact:
        "Patient intake processing dropped to under 4 minutes, prior-authorization verification accuracy reached 99.4%, and hospital clinical staff saved over 14,000 administrative hours in the first six months.",
      takeaways: [
        "Air-gapped and zero-retention AI models enable enterprise healthcare innovation safely.",
        "Prior-authorization automation dramatically reduces claim denials and billing cycles.",
        "Intuitive clinical UI ensured 96% staff adoption within 30 days of hospital-wide rollout.",
      ],
    },
  },
  {
    id: "public-sector-cloud-migration",
    category: "case-studies",
    tag: "Case Study",
    title: "State Public Sector Agency Modernizes Legacy Logistics with AWS GovCloud",
    excerpt:
      "Modernizing a 20-year-old mainframe dispatch and fleet maintenance platform to AWS GovCloud with zero downtime during public transit operations.",
    date: "Oct 19, 2025",
    readTime: "8 min read",
    image: indGovernment,
    author: {
      name: "Public Sector Solutions Group",
      role: "GovCloud Migration Lead",
    },
    client: {
      name: "State Transit & Regional Logistics Authority",
      industry: "Public Sector & Transportation",
    },
    metrics: {
      primary: "-45%",
      primaryLabel: "Annual infrastructure operating costs",
      secondary: "0 Min",
      secondaryLabel: "Unplanned operational downtime",
    },
    content: {
      summary:
        "A regional transit authority relied on an aging mainframe system that lacked real-time GPS telemetry, mobile integration, and vendor hardware support, posing severe operational risks.",
      challenge:
        "The migration had to adhere to FedRAMP High and state data governance standards while supporting 24/7 public bus and rail fleet operations with zero acceptable service interruptions.",
      solution:
        "ConfigUSA deployed a team of security-cleared cloud engineers who reverse-engineered legacy protocols, built automated real-time data replication pipelines, and stood up microservices in AWS GovCloud.",
      impact:
        "Achieved seamless cutover with zero passenger-facing disruptions, reduced hardware maintenance expenses by $1.4M annually, and introduced real-time mobile tracking for over 2 million daily riders.",
      takeaways: [
        "Phased shadow-running and automated database sync eliminate cutover anxiety.",
        "GovCloud architectures provide enterprise resilience with sovereign compliance.",
        "Modern API endpoints allowed rapid launch of citizen-facing mobile applications.",
      ],
    },
  },

  // ── Research & Whitepapers
  {
    id: "enterprise-ai-benchmark-2026",
    category: "research",
    tag: "Research",
    title: "2026 Enterprise AI & Cloud Migration Benchmark Report",
    excerpt:
      "Comprehensive data on cloud infrastructure spend, AI ROI benchmarks, vendor lock-in risks, and modern architecture trends across 500+ North American enterprises.",
    date: "Jan 2026",
    readTime: "15 min read",
    image: wdCloud,
    format: "PDF Whitepaper (34 Pages)",
    author: {
      name: "ConfigUSA Intelligence & Strategy Unit",
      role: "Annual Benchmark Publication",
    },
    metrics: {
      primary: "500+",
      primaryLabel: "Enterprise engineering leaders surveyed",
      secondary: "68%",
      secondaryLabel: "Enterprises actively shifting to hybrid multi-cloud",
    },
    content: {
      summary:
        "Drawing insights from over 500 technology executives across Fortune 1000 enterprises, our 2026 benchmark dissects actual infrastructure budgets, GenAI return on investment, and engineering velocity metrics.",
      challenge:
        "Enterprises are grappling with unexpected cloud egress fees, AI compute inflation, and skill scarcity in platform engineering and Kubernetes orchestration.",
      solution:
        "The report outlines proven FinOps frameworks, multi-cloud cost containment strategies, and pragmatic adoption roadmaps for high-performance engineering squads.",
      impact:
        "Provides actionable benchmarks for technology leadership to assess their organizational maturity against industry peers and calibrate compensation standards.",
      takeaways: [
        "FinOps automation delivers an average 26% cloud cost reduction within 90 days.",
        "Hybrid multi-cloud adoption is driven primarily by risk diversification and data residency.",
        "Cross-functional platform engineering teams increase developer satisfaction by 38%.",
      ],
    },
  },
  {
    id: "sap-s4hana-playbook",
    category: "research",
    tag: "Research",
    title: "SAP S/4HANA Migration Playbook: Lessons from 100+ Enterprise Rollouts",
    excerpt:
      "Practical architectural strategies to de-risk your cloud migration, avoid costly customization drift, and unlock long-term operational ROI.",
    date: "Nov 20, 2025",
    readTime: "18 min read",
    image: wdEnterprise,
    format: "Technical Playbook (48 Pages)",
    author: {
      name: "Enterprise Applications Practice",
      role: "SAP Center of Excellence",
    },
    metrics: {
      primary: "100+",
      primaryLabel: "Enterprise rollouts synthesized",
      secondary: "99.8%",
      secondaryLabel: "On-time cutover success rate",
    },
    content: {
      summary:
        "Migrating mission-critical enterprise ERP systems requires surgical precision. This definitive playbook shares real lessons learned, architectural decision trees, and testing regimens from 100+ enterprise SAP S/4HANA migrations.",
      challenge:
        "Uncontrolled custom code, legacy data duplication, and inadequate user change management derail over 40% of standard enterprise ERP migrations globally.",
      solution:
        "ConfigUSA's structured Clean-Core framework provides step-by-step methodologies for Greenfield, Brownfield, and Selective Data Transition (Hybrid) migration approaches.",
      impact:
        "Enables enterprise program sponsors to avoid budget overruns, minimize business cutover downtime to under 12 hours, and maximize digital supply chain visibility.",
      takeaways: [
        "Audit and retire unused ABAP custom code prior to initiating data migration.",
        "Implement automated test suites covering end-to-end order-to-cash business cycles.",
        "Establish unified governance between IT delivery squads and business stakeholders early.",
      ],
    },
  },
  {
    id: "ai-skills-assessment-standard",
    category: "research",
    tag: "Research",
    title: "Building a Future-Ready Engineering Workforce: The AI Assessment Standard",
    excerpt:
      "How data-driven candidate evaluation removes cognitive bias, measures real coding aptitude in sandbox environments, and improves long-term retention rates.",
    date: "Oct 15, 2025",
    readTime: "12 min read",
    image: wdAi,
    format: "Executive Whitepaper (24 Pages)",
    author: {
      name: "Talent Intelligence & Technical Assessment Group",
      role: "Whitepaper Series",
    },
    metrics: {
      primary: "98.2%",
      primaryLabel: "Candidate validation accuracy",
      secondary: "-65%",
      secondaryLabel: "First-year technical turnover",
    },
    content: {
      summary:
        "Resume screening and subjective panel interviews are no longer sufficient to identify elite engineering talent in the age of AI coding assistants. This whitepaper defines the new standard for empirical technical validation.",
      challenge:
        "AI-generated resumes and boilerplate portfolio code make traditional candidate vetting unreliable, resulting in costly mismatched hires and delayed project timelines.",
      solution:
        "ConfigUSA's multi-tier technical assessment protocol places candidates in real-world sandbox environments to evaluate architecture design, live pair-programming problem-solving, and clean code principles.",
      impact:
        "Hiring managers reduce interview hours by 65% while achieving a 98.2% technical qualification success rate for onboarded engineering personnel.",
      takeaways: [
        "Replace trivia-based algorithms with real-world system design and debugging challenges.",
        "Assess how effectively engineers leverage AI tools while maintaining rigorous security standards.",
        "Standardized scoring rubrics eliminate demographic and institutional hiring biases.",
      ],
    },
  },
  {
    id: "platform-engineering-maturity-index",
    category: "research",
    tag: "Research",
    title: "Next-Gen DevOps & Platform Engineering Maturity Index",
    excerpt:
      "Evaluating internal developer platforms (IDPs), GitOps maturity, observability stacks, and security compliance automation across high-velocity teams.",
    date: "Dec 10, 2025",
    readTime: "14 min read",
    image: wdEngineering,
    format: "Benchmark Report (28 Pages)",
    author: {
      name: "Cloud & DevOps Center of Excellence",
      role: "Engineering Research Group",
    },
    metrics: {
      primary: "5x",
      primaryLabel: "Deployment frequency increase",
      secondary: "-80%",
      secondaryLabel: "Mean time to resolution (MTTR)",
    },
    content: {
      summary:
        "Internal Developer Platforms (IDPs) have emerged as the foundational catalyst for enterprise developer productivity, abstracting infrastructure complexity into golden-path self-service workflows.",
      challenge:
        "Disjointed tooling, manual ticket-based provisioning, and fragmented CI/CD pipelines consume up to 40% of senior software engineers' productive sprint capacity.",
      solution:
        "This research establishes a 5-tier maturity index, guiding engineering leaders in orchestrating automated GitOps workflows, Kubernetes backbones, and shift-left security scans.",
      impact:
        "Enterprises in the top maturity tier deploy software 5x more frequently with an 80% reduction in production incident recovery time.",
      takeaways: [
        "Treat internal developer platforms as dedicated products with dedicated product managers.",
        "Provide standardized golden paths while allowing advanced teams extensibility where justified.",
        "Integrate automated compliance and secret-scanning directly into pull-request gates.",
      ],
    },
  },

  // ── Workforce Intelligence
  {
    id: "tech-talent-rate-index-2026",
    category: "workforce",
    tag: "Workforce Intelligence",
    title: "2026 US Tech Talent Compensation & Hourly Rate Index",
    excerpt:
      "Comprehensive analysis of hourly contract rates, direct-hire compensation, and regional variance across 15 high-demand enterprise engineering skill sets.",
    date: "Q1 2026 Edition",
    readTime: "8 min read",
    image: insightsTeam,
    format: "Market Intelligence Brief",
    author: {
      name: "Workforce Intelligence Practice",
      role: "Quarterly Rate Index",
    },
    metrics: {
      primary: "+18.4%",
      primaryLabel: "GenAI & LLM skill hourly rate premium",
      secondary: "12 Days",
      secondaryLabel: "Average time-to-fill for senior cloud roles",
    },
    content: {
      summary:
        "Our Q1 2026 rate index provides verified market data on technical compensation, contractor billing benchmarks, and talent supply deficits across key US technology corridors.",
      challenge:
        "Budget planners frequently struggle with outdated compensation data, resulting in uncompetitive offers for critical roles or substantial overpayment to intermediary staffing agencies.",
      solution:
        "ConfigUSA aggregates transaction data from hundreds of enterprise placements to provide transparent, real-time rate bands across contract, contract-to-hire, and executive direct-hire positions.",
      impact:
        "Enterprise procurement and engineering leaders optimize contractor spend while maintaining guaranteed access to top-quartile technical specialists.",
      takeaways: [
        "Generative AI, Kubernetes platform engineering, and SAP S/4HANA command the highest market premiums.",
        "Remote flexibility remains the single largest factor in attracting elite senior architecture talent.",
        "Contract-to-hire models offer the lowest blended cost per retained engineering resource.",
      ],
    },
  },
  {
    id: "elastic-squad-model-playbook",
    category: "workforce",
    tag: "Workforce Intelligence",
    title: "The Elastic Squad Model: Mitigating Tech Hiring Volatility",
    excerpt:
      "Why progressive enterprise engineering leaders are pivoting from fragmented vendor rosters to managed elastic squads that ramp up and down with product milestones.",
    date: "Jan 25, 2026",
    readTime: "6 min read",
    image: caseStudyTeam,
    format: "Strategic Framework",
    author: {
      name: "Marcus Vance & Squad Delivery Leads",
      role: "Workforce Strategy",
    },
    metrics: {
      primary: "14 Days",
      primaryLabel: "Full squad mobilization speed",
      secondary: "96.8%",
      secondaryLabel: "Sprint delivery SLA attainment",
    },
    content: {
      summary:
        "Managing multiple independent contractors across diverse staffing vendors creates administrative drag and inconsistent code standards. Elastic squads provide complete, pre-aligned delivery teams.",
      challenge:
        "Project deadlines often spike unpredictably during product releases or compliance audits, making permanent headcount growth unsustainable during downstream maintenance phases.",
      solution:
        "ConfigUSA structures modular squads comprising a technical lead, full-stack engineers, and QA specialists who integrate directly into client Jira boards and agile rituals.",
      impact:
        "Clients scale delivery throughput up or down within 14 days, eliminating vendor management overhead and achieving consistent sprint velocity.",
      takeaways: [
        "Consolidate fragmented vendor contracts into outcome-oriented squad agreements.",
        "Ensure squads include dedicated technical leadership to govern architectural consistency.",
        "Document sprint deliverables transparently to facilitate friction-free transitions.",
      ],
    },
  },
  {
    id: "skill-shortage-heatmap",
    category: "workforce",
    tag: "Workforce Intelligence",
    title: "North American Tech Skill Deficit Heatmap: Cloud, Cyber & AI",
    excerpt:
      "A granular examination of talent deficits in North America, highlighting the hardest roles to fill and strategic onshore/offshore augmentation bridges.",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    image: wdManaged,
    format: "Industry Heatmap",
    author: {
      name: "Talent Analytics Group",
      role: "Workforce Intelligence",
    },
    metrics: {
      primary: "3.4 : 1",
      primaryLabel: "Openings per qualified senior cloud architect",
      secondary: "Top 3.5%",
      secondaryLabel: "ConfigUSA candidate vetting pass rate",
    },
    content: {
      summary:
        "An in-depth analysis of talent supply and demand ratios reveals severe shortages in specialized subfields, requiring enterprises to rethink their geographic sourcing strategy.",
      challenge:
        "Certain enterprise disciplines, particularly cybersecurity compliance, cloud FinOps, and machine learning operations (MLOps), experience national unemployment rates below 0.8%.",
      solution:
        "ConfigUSA establishes blended delivery pipelines, combining onshore technical leads in the US with vetted offshore engineering squads to bridge critical skill gaps.",
      impact:
        "Enterprises fill niche engineering requisitions in an average of 10 to 14 business days while containing blended blended billing rates.",
      takeaways: [
        "Complement scarce onshore senior architects with scalable nearshore and offshore execution pods.",
        "Invest in proactive upskilling programs for internal staff in cloud-native technologies.",
        "Leverage automated technical vetting to rapidly filter candidates on practical ability.",
      ],
    },
  },
  {
    id: "retaining-elite-engineering-talent",
    category: "workforce",
    tag: "Workforce Intelligence",
    title: "Retaining Elite Engineering Talent in the Era of Autonomous AI",
    excerpt:
      "How modern toolchains, continuous upskilling programs, and clear architectural autonomy dramatically improve senior engineer retention and morale.",
    date: "Dec 18, 2025",
    readTime: "5 min read",
    image: wdWorkforce,
    format: "Executive Advisory",
    author: {
      name: "Human Capital & Advisory Practice",
      role: "Talent Strategy",
    },
    metrics: {
      primary: "-22%",
      primaryLabel: "Lower turnover in teams with modern AI toolchains",
      secondary: "4.7 / 5",
      secondaryLabel: "Engineer job satisfaction rating",
    },
    content: {
      summary:
        "Top-performing software engineers actively migrate away from organizations burdened by bureaucratic approval gates and obsolete tech stacks. Modern toolchains have become primary retention drivers.",
      challenge:
        "Replacing a senior cloud or software engineer costs an average of 1.5x their annual salary in lost institutional knowledge, recruitment fees, and onboarding runway.",
      solution:
        "Leading tech organizations empower engineering squads with modern CI/CD automation, AI-assisted development tools, and structured time for continuous architecture innovation.",
      impact:
        "Companies investing in developer experience report a 22% decrease in voluntary turnover and significantly higher code review velocity.",
      takeaways: [
        "Audit internal developer friction points quarterly to eliminate administrative toil.",
        "Provide clear career progression frameworks for individual contributors parallel to management tracks.",
        "Foster a culture of blameless post-mortems and psychological safety in engineering releases.",
      ],
    },
  },
];

/* ────────────────────────── Categories Definition ────────────────────────── */

interface CategoryConfig {
  id: string;
  label: string;
  shortLabel: string;
  desc: string;
  icon: any;
  color: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: "all",
    label: "All Insights",
    shortLabel: "All",
    desc: "Complete collection of executive perspectives, case studies, research, and workforce data.",
    icon: LayoutGrid,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "perspectives",
    label: "Perspectives",
    shortLabel: "Perspectives",
    desc: "Strategic viewpoints from senior architects and technology executives on AI, cloud, and engineering.",
    icon: Lightbulb,
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "case-studies",
    label: "Case Studies",
    shortLabel: "Case Studies",
    desc: "Verified client transformations and measurable outcomes across Banking, Retail, Healthcare, and Public Sector.",
    icon: FileText,
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "research",
    label: "Research & Whitepapers",
    shortLabel: "Research",
    desc: "In-depth market benchmarks, technical playbooks, and architectural migration guides.",
    icon: BarChart3,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "workforce",
    label: "Workforce Intelligence",
    shortLabel: "Workforce",
    desc: "Tech talent compensation indices, skill shortage heatmaps, and flexible squad operating models.",
    icon: BookOpen,
    color: "from-purple-600 to-indigo-700",
  },
];

/* ────────────────────────── Live Workforce Rate Benchmarks ────────────────────────── */

const WORKFORCE_BENCHMARKS = [
  {
    role: "Generative AI & LLM Systems Architect",
    rateRange: "$150 – $210 / hr",
    demand: "Critical High",
    demandColor: "text-rose-600 bg-rose-50 border-rose-200",
    avgFillDays: "12 Days",
    skills: ["LangChain", "PyTorch", "Private RAG", "Vector DBs", "Guardrails"],
  },
  {
    role: "Cloud Infrastructure & Platform Architect",
    rateRange: "$135 – $185 / hr",
    demand: "Very High",
    demandColor: "text-amber-700 bg-amber-50 border-amber-200",
    avgFillDays: "10 Days",
    skills: ["AWS / Azure", "Kubernetes", "Terraform", "GitOps", "FinOps"],
  },
  {
    role: "SAP S/4HANA Solution Lead (Clean Core)",
    rateRange: "$145 – $195 / hr",
    demand: "Very High",
    demandColor: "text-amber-700 bg-amber-50 border-amber-200",
    avgFillDays: "14 Days",
    skills: ["SAP BTP", "S/4HANA Migration", "ABAP Cloud", "Fiori", "Integration Suite"],
  },
  {
    role: "Senior Full-Stack Cloud Engineer",
    rateRange: "$115 – $155 / hr",
    demand: "High",
    demandColor: "text-blue-700 bg-blue-50 border-blue-200",
    avgFillDays: "8 Days",
    skills: ["React / Next.js", "Node / Go", "Microservices", "PostgreSQL", "Docker"],
  },
  {
    role: "Enterprise Data & Snowflake/Databricks Lead",
    rateRange: "$130 – $175 / hr",
    demand: "Very High",
    demandColor: "text-amber-700 bg-amber-50 border-amber-200",
    avgFillDays: "11 Days",
    skills: ["Snowflake", "dbt", "Databricks", "Kafka", "Data Governance"],
  },
  {
    role: "Cybersecurity & Zero-Trust Cloud Engineer",
    rateRange: "$140 – $190 / hr",
    demand: "Critical High",
    demandColor: "text-rose-600 bg-rose-50 border-rose-200",
    avgFillDays: "15 Days",
    skills: ["IAM / Zero Trust", "SOC 2 / HIPAA", "SIEM / Sentinel", "Cloud Security"],
  },
];

/* ────────────────────────── Main Page Component ────────────────────────── */

function Page() {
  const location = useLocation();
  const navigate = useNavigate();

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");
  // Selected article for detailed reading modal
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  // Newsletter subscription status
  const [subscribed, setSubscribed] = useState(false);
  // Feedback toast for actions (like download / copy)
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Derive active tab from URL query param ?tab=... or hash
  const activeTabId = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const qTab = searchParams.get("tab") || searchParams.get("category");
    if (qTab) {
      const match = CATEGORIES.find((c) => c.id === qTab.toLowerCase());
      if (match) return match.id;
    }
    if (location.hash) {
      const h = location.hash.replace("#", "").toLowerCase();
      const match = CATEGORIES.find((c) => c.id === h);
      if (match) return match.id;
    }
    return "all";
  }, [location.search, location.hash]);

  // Smooth scroll to target section with sticky header offset
  const scrollToTarget = (targetId: string) => {
    const el =
      document.getElementById(targetId) ||
      document.getElementById(`section-${targetId}`) ||
      document.getElementById("content-hub");
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Tab change handler updates the URL query string, hash, and triggers smooth scroll
  const handleTabChange = (newTabId: string, shouldScroll = true) => {
    navigate({
      to: "/resources",
      search: newTabId === "all" ? {} : { tab: newTabId },
      hash: newTabId === "all" ? "content-hub" : newTabId,
      replace: true,
    });
    if (shouldScroll) {
      setTimeout(() => {
        scrollToTarget(newTabId === "all" ? "content-hub" : newTabId);
      }, 50);
    }
  };

  // Auto-scroll when arriving with tab or hash from navigation dropdown
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    const hash = location.hash ? location.hash.replace("#", "") : null;
    const target = hash || tab;

    if (target && target !== "all") {
      const timer = setTimeout(() => {
        scrollToTarget(target);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.search, location.hash]);

  // Filter articles based on active tab and search query
  const filteredArticles = useMemo(() => {
    let list = ARTICLES;
    if (activeTabId !== "all") {
      list = list.filter((a) => a.category === activeTabId);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.tag.toLowerCase().includes(query) ||
          a.author.name.toLowerCase().includes(query) ||
          a.content.summary.toLowerCase().includes(query)
      );
    }
    return list;
  }, [activeTabId, searchQuery]);

  // Spotlight / Featured article based on active tab
  const featuredArticle = useMemo(() => {
    if (activeTabId === "case-studies") {
      return ARTICLES.find((a) => a.id === "fortune-500-bank-hiring") || ARTICLES[4];
    }
    if (activeTabId === "research") {
      return ARTICLES.find((a) => a.id === "enterprise-ai-benchmark-2026") || ARTICLES[8];
    }
    if (activeTabId === "workforce") {
      return ARTICLES.find((a) => a.id === "tech-talent-rate-index-2026") || ARTICLES[12];
    }
    return ARTICLES[0]; // Default spotlight
  }, [activeTabId]);

  // Trigger feedback notification
  const triggerNotice = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3500);
  };

  const renderArticleCard = (article: ResourceArticle, i: number) => (
    <motion.article
      key={article.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
      className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Thumbnail Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 via-transparent to-transparent" />

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur shadow-xs ${
            article.category === "case-studies"
              ? "bg-emerald-800/90 text-emerald-200"
              : article.category === "research"
              ? "bg-amber-800/90 text-amber-200"
              : article.category === "workforce"
              ? "bg-purple-800/90 text-purple-200"
              : "bg-[#071326]/90 text-[#f5a623]"
          }`}
        >
          {article.tag}
        </span>

        {article.metrics && (
          <span className="absolute bottom-3 right-3 rounded-md bg-[#071326]/90 backdrop-blur px-2.5 py-1 text-[11px] font-bold text-[#f5a623]">
            {article.metrics.primary}
          </span>
        )}
      </div>

      {/* Body Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-blue-600" /> {article.date}
            </span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="mt-3 text-base sm:text-[17px] font-bold text-[#071326] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-medium text-slate-400 truncate max-w-[150px]">
            {article.author.name}
          </span>

          <button
            type="button"
            onClick={() => setSelectedArticle(article)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071326] group-hover:text-blue-700 transition-colors cursor-pointer"
          >
            {article.category === "case-studies" ? "View Case Study" : "Read Article"}{" "}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.article>
  );

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Insights & Perspectives"
        title={
          <>
            Actionable Insights That <br />
            <span className="text-[#f5a623] font-extrabold">Move You Forward.</span>
          </>
        }
        subtitle="Explore our latest thinking on artificial intelligence, digital engineering, cloud platforms, and modern workforce dynamics."
        image={heroResources}
      >
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5a623] px-6 py-3 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
          >
            Featured Briefing <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => scrollToTarget("content-hub")}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all cursor-pointer"
          >
            Browse All Content
          </button>
        </div>

        {/* Quick Section Navigation Jump Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-white/70 mr-1.5">
            Navigate Below:
          </span>
          <button
            type="button"
            onClick={() => handleTabChange("perspectives")}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all cursor-pointer"
          >
            <Lightbulb className="h-3.5 w-3.5 text-[#f5a623]" /> Perspectives ↓
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("case-studies")}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5 text-emerald-400" /> Case Studies ↓
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("research")}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all cursor-pointer"
          >
            <BarChart3 className="h-3.5 w-3.5 text-amber-400" /> Research & Reports ↓
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("workforce")}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all cursor-pointer"
          >
            <BookOpen className="h-3.5 w-3.5 text-purple-400" /> Workforce Intelligence ↓
          </button>
          <button
            type="button"
            onClick={() => scrollToTarget("workforce-benchmarks")}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-all cursor-pointer"
          >
            <TrendingUp className="h-3.5 w-3.5 text-blue-300" /> 2026 Rate Benchmarks ↓
          </button>
        </div>
      </PageHero>

      <div className="pb-10">
        <StatsBar />
      </div>

      {/* Toast Notice */}
      <AnimatePresence>
        {actionNotice && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-[#071326] text-white px-5 py-3.5 shadow-2xl border border-slate-700"
          >
            <CheckCircle2 className="h-5 w-5 text-[#f5a623] shrink-0" />
            <span className="text-sm font-medium">{actionNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Executive Briefing Spotlight */}
      <section id="featured" className="py-16 lg:py-20 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Spotlight Publication
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                {activeTabId === "case-studies"
                  ? "Featured Client Transformation"
                  : activeTabId === "research"
                  ? "Featured Research Report"
                  : activeTabId === "workforce"
                  ? "Featured Workforce Benchmark"
                  : "Today's Executive Briefing"}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 rounded-md px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#f5a623]" /> Curated by ConfigUSA Advisory
            </span>
          </div>

          <motion.article
            key={featuredArticle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white"
          >
            {/* Image side */}
            <div className="relative lg:col-span-6 h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-100">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-[#071326]/95 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f5a623] shadow-sm">
                  {featuredArticle.tag}
                </span>
                {featuredArticle.format && (
                  <span className="rounded-md bg-blue-600/90 text-white backdrop-blur px-2.5 py-1 text-[11px] font-semibold">
                    {featuredArticle.format}
                  </span>
                )}
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-6 flex flex-col justify-between p-7 sm:p-10 lg:p-12 bg-white">
              <div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-blue-600" /> {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" /> {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-[#071326] leading-snug group-hover:text-blue-700 transition-colors">
                  {featuredArticle.title}
                </h3>

                <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                {/* Key Metric Card */}
                {featuredArticle.metrics && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-xl sm:text-2xl font-black text-[#071326]">
                        {featuredArticle.metrics.primary}
                      </span>
                      <span className="block text-xs font-medium text-slate-500 mt-0.5">
                        {featuredArticle.metrics.primaryLabel}
                      </span>
                    </div>
                    {featuredArticle.metrics.secondary && (
                      <div className="border-l border-slate-200 pl-4">
                        <span className="block text-xl sm:text-2xl font-black text-blue-700">
                          {featuredArticle.metrics.secondary}
                        </span>
                        <span className="block text-xs font-medium text-slate-500 mt-0.5">
                          {featuredArticle.metrics.secondaryLabel}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="text-slate-400 block font-normal">Author</span>
                  <span className="font-semibold text-slate-800">{featuredArticle.author.name}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#071326] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-900 transition-colors shadow-sm"
                >
                  Read Briefing <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Main Content Hub & Interactive Filter Section */}
      <section id="content-hub" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
            <div className="border-l-[3px] border-[#f5a623] pl-3.5 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Knowledge Center
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                Explore Articles, Case Studies & Research
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Filter by practice area or search our repository of engineering benchmarks, client outcomes, and workforce data.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications..."
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-9 py-2.5 text-sm text-[#071326] placeholder:text-slate-400 shadow-xs focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
            {CATEGORIES.map((category) => {
              const active = activeTabId === category.id;
              const count =
                category.id === "all"
                  ? ARTICLES.length
                  : ARTICLES.filter((a) => a.category === category.id).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  id={`tab-${category.id}`}
                  onClick={() => handleTabChange(category.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#071326] text-white shadow-md font-bold scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-700 border border-slate-200/80"
                  }`}
                >
                  <category.icon
                    className={`h-4 w-4 ${active ? "text-[#f5a623]" : "text-slate-500"}`}
                  />
                  <span>{category.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      active ? "bg-[#f5a623] text-[#071326]" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner */}
          {activeTabId !== "all" && (
            <div className="mt-4 mb-8 flex items-center justify-between rounded-xl bg-white p-4 border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold">
                  {activeTabId === "perspectives" && <Lightbulb className="h-4 w-4" />}
                  {activeTabId === "case-studies" && <FileText className="h-4 w-4" />}
                  {activeTabId === "research" && <BarChart3 className="h-4 w-4" />}
                  {activeTabId === "workforce" && <BookOpen className="h-4 w-4" />}
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Category Filter Active
                  </h4>
                  <p className="text-sm font-semibold text-slate-800">
                    {CATEGORIES.find((c) => c.id === activeTabId)?.desc}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleTabChange("all")}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 underline shrink-0 ml-4"
              >
                Show All
              </button>
            </div>
          )}

          {/* Multi-Section or Filtered View */}
          {activeTabId === "all" && !searchQuery.trim() ? (
            <div className="mt-8 space-y-16">
              {/* 1. Perspectives Section */}
              <div id="perspectives" className="scroll-mt-28">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <Lightbulb className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#071326]">
                        Executive Perspectives & Thought Leadership
                      </h3>
                      <p className="text-xs text-slate-500">
                        Strategic viewpoints on technology, enterprise AI, and architecture
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTabChange("perspectives")}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                  >
                    View All Perspectives <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {ARTICLES.filter((a) => a.category === "perspectives").map((article, i) =>
                    renderArticleCard(article, i)
                  )}
                </div>
              </div>

              {/* 2. Case Studies Section */}
              <div id="case-studies" className="scroll-mt-28 pt-8 border-t border-slate-200/90">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <FileText className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#071326]">
                        Enterprise Case Studies & Transformations
                      </h3>
                      <p className="text-xs text-slate-500">
                        Real-world client outcomes, modernization sprints, and verified ROI
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTabChange("case-studies")}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    View All Case Studies <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {ARTICLES.filter((a) => a.category === "case-studies").map((article, i) =>
                    renderArticleCard(article, i)
                  )}
                </div>
              </div>

              {/* 3. Research & Whitepapers Section */}
              <div id="research" className="scroll-mt-28 pt-8 border-t border-slate-200/90">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                      <BarChart3 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#071326]">
                        Research Reports & Technical Whitepapers
                      </h3>
                      <p className="text-xs text-slate-500">
                        Data-driven industry benchmarks, migration playbooks, and assessment indices
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTabChange("research")}
                    className="text-xs font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1"
                  >
                    View All Research <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {ARTICLES.filter((a) => a.category === "research").map((article, i) =>
                    renderArticleCard(article, i)
                  )}
                </div>
              </div>

              {/* 4. Workforce Intelligence Section */}
              <div id="workforce" className="scroll-mt-28 pt-8 border-t border-slate-200/90">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#071326]">
                        Workforce Intelligence & Operating Models
                      </h3>
                      <p className="text-xs text-slate-500">
                        Compensation indices, talent deficit heatmaps, and elastic squad frameworks
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTabChange("workforce")}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1"
                  >
                    View All Workforce Reports <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {ARTICLES.filter((a) => a.category === "workforce").map((article, i) =>
                    renderArticleCard(article, i)
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Single Category / Filtered Grid */
            <div id={activeTabId} className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 scroll-mt-28">
              {filteredArticles.map((article, i) => renderArticleCard(article, i))}
            </div>
          )}

          {/* Empty search state */}
          {filteredArticles.length === 0 && (
            <div className="mt-12 rounded-2xl bg-white border border-dashed border-slate-300 p-12 text-center">
              <Search className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-3 text-base font-bold text-slate-800">
                No publications found
              </h3>
              <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
                No results match your search "{searchQuery}". Try searching with different keywords or reset the filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  handleTabChange("all");
                }}
                className="mt-4 rounded-lg bg-[#071326] px-4 py-2 text-xs font-bold text-white hover:bg-blue-800 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Workforce Intelligence Specialized Benchmark Module */}
      {(activeTabId === "all" || activeTabId === "workforce") && (
        <section
          id="workforce-benchmarks"
          className="py-20 bg-white border-b border-slate-200/60 scroll-mt-28"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="border-l-[3px] border-[#f5a623] pl-3.5 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                  Workforce Intelligence
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#071326] tracking-tight">
                  2026 US Technical Talent & Rate Benchmark
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Current hourly contract benchmarks, talent scarcity levels, and average mobilization timelines across enterprise engineering disciplines.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => triggerNotice("Downloading 2026 US Tech Talent Compensation Guide (PDF)...")}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200/80 px-4 py-2.5 text-xs font-bold text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  <Download className="h-4 w-4" /> Download Full Salary Guide
                </button>
                <Link
                  to="/request-talent"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#071326] px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-900 transition-colors shadow-sm"
                >
                  Request Talent Shortlist <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Benchmark Table/Cards Grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {WORKFORCE_BENCHMARKS.map((item) => (
                <div
                  key={item.role}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-md border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${item.demandColor}`}
                      >
                        {item.demand}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Avg: {item.avgFillDays}
                      </span>
                    </div>

                    <h4 className="mt-3.5 text-base font-bold text-[#071326] leading-snug">
                      {item.role}
                    </h4>

                    <div className="mt-4 rounded-xl bg-white p-3.5 border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Estimated Contract Billing Band
                      </span>
                      <span className="text-lg font-black text-[#071326] mt-0.5 block">
                        {item.rateRange}
                      </span>
                    </div>

                    <div className="mt-4">
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                        Core Requisite Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-white border border-slate-200/90 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80">
                    <Link
                      to="/request-talent"
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5"
                    >
                      Deploy Specialists in this Domain <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interactive Article / Case Study Modal Reader */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#071326]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-slate-200 flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#071326] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    {selectedArticle.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      triggerNotice("Article link copied to clipboard!");
                    }}
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors"
                    title="Share Link"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071326] leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
                    {selectedArticle.excerpt}
                  </p>
                </div>

                {/* Author & Client Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 bg-slate-50/70 rounded-xl px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071326] text-white font-bold text-sm">
                      {selectedArticle.author.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-normal">Contributor</span>
                      <span className="text-sm font-bold text-slate-900">
                        {selectedArticle.author.name}
                      </span>
                      <span className="text-xs text-slate-500 block">
                        {selectedArticle.author.role}
                      </span>
                    </div>
                  </div>

                  {selectedArticle.client && (
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-normal">Client Sector</span>
                      <span className="text-sm font-bold text-slate-800">
                        {selectedArticle.client.industry}
                      </span>
                      <span className="text-xs text-slate-500 block">
                        {selectedArticle.client.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Key Metrics Banner */}
                {selectedArticle.metrics && (
                  <div className="grid grid-cols-2 gap-4 rounded-xl bg-gradient-to-br from-[#071326] to-[#0f2442] p-5 text-white">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-[#f5a623] block">
                        {selectedArticle.metrics.primary}
                      </span>
                      <span className="text-xs text-slate-300 mt-0.5 block">
                        {selectedArticle.metrics.primaryLabel}
                      </span>
                    </div>
                    {selectedArticle.metrics.secondary && (
                      <div className="border-l border-slate-700 pl-4">
                        <span className="text-2xl sm:text-3xl font-black text-white block">
                          {selectedArticle.metrics.secondary}
                        </span>
                        <span className="text-xs text-slate-300 mt-0.5 block">
                          {selectedArticle.metrics.secondaryLabel}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Structured Sections */}
                <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                  <div>
                    <h3 className="text-base font-bold text-[#071326] mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#f5a623]" /> 1. Executive Summary
                    </h3>
                    <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {selectedArticle.content.summary}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#071326] mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-rose-600" /> 2. Core Challenge & Market Context
                    </h3>
                    <p>{selectedArticle.content.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#071326] mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-blue-600" /> 3. Strategic Solution & Architecture
                    </h3>
                    <p>{selectedArticle.content.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#071326] mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" /> 4. Measurable Outcomes & ROI
                    </h3>
                    <p>{selectedArticle.content.impact}</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#071326] mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#f5a623]" /> 5. Key Executive Takeaways
                    </h3>
                    <ul className="space-y-2 pl-2">
                      {selectedArticle.content.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer Bar */}
              <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
                <button
                  type="button"
                  onClick={() =>
                    triggerNotice(`Downloading PDF summary for "${selectedArticle.title.slice(0, 30)}..."`)
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <Download className="h-4 w-4" /> Download PDF Brief
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedArticle(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#071326] px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-900 transition-colors shadow-sm"
                  >
                    Discuss With Our Practice Lead <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter Executive Digest */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#071326] p-10 md:p-14 text-center border border-slate-800 shadow-md">
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#f5a623]/10 blur-3xl" />

            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-[#f5a623]">
              <Mail className="h-6 w-6 stroke-[1.75]" />
            </span>

            <div className="relative border-l-[3px] border-[#f5a623] pl-3.5 max-w-md mx-auto mt-6 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-1">
                Executive Digest
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Get Technology Insights in Your Inbox
              </h2>
            </div>

            <p className="relative mt-3 text-slate-300 text-sm max-w-lg mx-auto">
              Join over 25,000 engineering and talent executives receiving our monthly synthesis of enterprise AI, infrastructure, and hiring benchmarks.
            </p>

            {subscribed ? (
              <div className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Thank you for subscribing! We'll be in touch.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="relative mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="executive@company.com"
                  className="flex-1 rounded-lg bg-white/95 px-4 py-3.5 text-sm text-[#071326] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#071326] hover:bg-[#d98218] transition-colors shadow-sm"
                >
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection image={ctaResources} />
    </>
  );
}
