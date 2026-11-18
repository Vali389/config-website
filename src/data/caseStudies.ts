import caseStudyTeam from "@/assets/case_study_western_team.jpg";
import gccEnterpriseHub from "@/assets/gcc-enterprise-hub.jpg";
import sapEnterpriseTeam from "@/assets/sap_western_team.jpg";
import wdAi from "@/assets/wd-ai.jpg";

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
  callout?: string;
  bullets?: string[];
}

export interface CaseStudy {
  id: string;
  category: string;
  metric: string;
  image: string;
  title: string;
  subtitle: string;
  sector: string;
  engagementType: string;
  duration: string;
  context: string;
  challenge: string;
  response: string;
  execution: string;
  outcomes: string[];
  stats: CaseStudyStat[];
  detailedSections: CaseStudySection[];
  relatedLink: {
    label: string;
    to: string;
  };
}

export const CASE_STUDY_STRUCTURE = [
  {
    step: "01",
    title: "Client Challenge",
    desc: "Enterprise scale, technical context, critical capability gaps and operational constraints.",
  },
  {
    step: "02",
    title: "ConfigUSA Approach",
    desc: "The proposed strategy, talent pod architecture and dedicated delivery model.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Phased deployment, technical governance, CI/CD integration and milestone adherence.",
  },
  {
    step: "04",
    title: "Verified Outcomes",
    desc: "Measurable metrics, acceleration rates, SLA compliance and ongoing operational impact.",
  },
];

export const VERIFIED_CASE_STUDIES: CaseStudy[] = [
  {
    id: "specialist-workforce-mobilisation",
    category: "Specialist Workforce Mobilisation",
    metric: "40 Engineers in 6 Weeks • 30% Faster Delivery",
    image: caseStudyTeam,
    title: "Scaling a Technology Programme with Specialised Engineering Talent",
    subtitle:
      "Rapidly assembling, screening, and embedding a 40-engineer specialist squad into high-throughput cloud modernization pipelines.",
    sector: "Global Enterprise Technology",
    engagementType: "Dedicated Engineering Pod & Managed Augmentation",
    duration: "18 Months (Ongoing)",
    context:
      "A global enterprise technology organisation required rapid engineering scale to accelerate a multi-region cloud modernisation initiative across distributed business units in North America.",
    challenge:
      "The client experienced critical capability shortages across senior Kubernetes engineers, Golang microservices architects, and Terraform IaC specialists. Traditional recruiting agency approaches failed to pass rigorous architectural evaluations, threatening multi-million dollar go-live deadlines.",
    response:
      "ConfigUSA deployed a dedicated talent acquisition pod that screened over 280 technical specialists, qualifying candidates through practitioner-led technical evaluations and real-world coding benchmarks.",
    execution:
      "Mobilised 40 vetted engineers in three phased cohorts over six weeks with standardized sprint governance, compliance readiness and full integration into the client's CI/CD pipelines.",
    outcomes: [
      "40 vetted engineers mobilised in 6 weeks against an aggressive timeline",
      "30% faster time to delivery compared to initial internal client estimates",
      "100% milestone delivery adherence across all scheduled production sprints",
      "Zero compliance deviations and sustained multi-year partnership with expanded scope",
    ],
    stats: [
      { value: "40", label: "Specialists Mobilised" },
      { value: "6 Wks", label: "Time-to-Deploy" },
      { value: "30%", label: "Faster Delivery" },
      { value: "100%", label: "SLA Adherence" },
    ],
    detailedSections: [
      {
        heading: "Client Context & Architecture Challenge",
        paragraphs: [
          "The client, a leading North American enterprise software vendor, initiated a comprehensive modernization program aimed at breaking monolithic backends into high-throughput microservices deployed across AWS and hybrid on-premise clusters.",
          "Internal engineering squads were fully committed to legacy product maintenance, leaving zero surplus capacity to design and execute modern distributed event-driven pipelines. Finding specialized engineers who possessed both deep technical acumen and enterprise compliance discipline within standard hiring windows proved impossible.",
        ],
        callout:
          "Enterprise modernization timelines cannot wait for standard 90-day hiring loops. Access to pre-evaluated talent pods transforms roadmap viability.",
      },
      {
        heading: "ConfigUSA Tailored Screening & Pod Model",
        paragraphs: [
          "ConfigUSA structured a specialized workforce delivery model combining our North American talent directors with proprietary technical vetting frameworks. Every prospective candidate was evaluated by active senior architects on distributed systems fundamentals, observability standards, and container security.",
        ],
        bullets: [
          "Screened 280+ candidates through custom hands-on architecture evaluations.",
          "Selected top 14% matching the client's tech stack: Golang, gRPC, Kubernetes, and Kafka.",
          "Established structured sprint handoffs and secure workstation provisioning under client SOC 2 controls.",
        ],
      },
      {
        heading: "Phased Deployment & Measurable Impact",
        paragraphs: [
          "Cohorts were mobilised in three structured waves, allowing technical onboarding to occur seamlessly without overwhelming existing engineering leads. Within 14 days of cohort landing, engineers were submitting production-ready pull requests.",
          "The dedicated delivery framework achieved all milestone deliverables 30% ahead of scheduled estimates, culminating in a zero-downtime platform cutover that serves millions of enterprise end users daily.",
        ],
      },
    ],
    relatedLink: {
      label: "Explore Specialist Staffing Solutions",
      to: "/services/staffing",
    },
  },
  {
    id: "gcc-establishment-rampup",
    category: "GCC Solutions",
    metric: "75+ Specialists Onboarded • 94% Retention",
    image: gccEnterpriseHub,
    title: "Building an Enterprise Engineering Hub for a Global Financial Institution",
    subtitle:
      "End-to-end talent strategy, executive search, and cross-border delivery scaling for a tier-1 financial enterprise hub.",
    sector: "Banking & Financial Services",
    engagementType: "Global Capability Centre (GCC) Build & Scale",
    duration: "24 Months (Ongoing)",
    context:
      "A tier-1 financial enterprise establishing a dedicated Global Capability Centre in India to support core banking platforms, risk technology and regulatory analytics.",
    challenge:
      "Intense market competition for specialized quantitative analysts, cloud security professionals and enterprise application developers created critical hiring bottlenecks and prolonged ramp-up delays.",
    response:
      "ConfigUSA designed and executed an end-to-end talent strategy encompassing leadership search, specialized technology recruitment, compensation benchmarking and onboarding governance.",
    execution:
      "Mapped specialized talent pools across Bangalore and Hyderabad, deploying dual-stage technical screening and structured onboarding plans aligned to the client's operating model.",
    outcomes: [
      "75+ specialist professionals onboarded across the initial 9-month ramp-up",
      "94% retention rate after 12 months of active operations",
      "Smooth transition of mission-critical risk and data workflows without operational disruptions",
      "Accelerated time-to-productivity with structured handover governance and cross-border mentorship",
    ],
    stats: [
      { value: "75+", label: "Engineers Onboarded" },
      { value: "94%", label: "12-Month Retention" },
      { value: "9 Mos", label: "Initial Hub Scale" },
      { value: "Tier-1", label: "FinTech Compliance" },
    ],
    detailedSections: [
      {
        heading: "Strategic Objectives & Location Planning",
        paragraphs: [
          "As part of a strategic multi-year technology transformation, the client sought to establish an owned capability centre to retain technical institutional knowledge, accelerate round-the-clock software delivery, and reduce long-term vendor reliance.",
          "The initiative required hiring senior leaders capable of setting technical culture, alongside deep engineering benches in quantitative finance, regulatory compliance engines, and cloud data platforms.",
        ],
        callout:
          "High-maturity GCCs succeed when talent acquisition combines deep regional compensation intelligence with strict adherence to parent-company cultural standards.",
      },
      {
        heading: "Talent Mapping & Dual-Stage Screening",
        paragraphs: [
          "ConfigUSA deployed a dedicated cross-border staffing pod that benchmarked regional talent availability across Hyderabad and Bangalore, creating targeted talent pipelines for high-demand financial risk and data modeling positions.",
        ],
        bullets: [
          "Executive search for VP of Engineering and Core Technical Directors.",
          "Comprehensive compensation benchmarking aligning local incentives with retention targets.",
          "Dual-stage practitioner technical evaluations assessing financial domain competency and code cleanliness.",
        ],
      },
      {
        heading: "Operational Handover & Sustained Retention",
        paragraphs: [
          "Through structured 90-day onboarding pathways, engineers gained immediate operational velocity while integrating into global Agile rituals. At the 12-month review mark, the center demonstrated a 94% retention rate—substantially outperforming industry averages.",
          "The hub now autonomously owns critical risk telemetry, automated compliance reporting, and global core banking microservices with full operational continuity.",
        ],
      },
    ],
    relatedLink: {
      label: "Explore ConfigUSA GCC Capabilities",
      to: "/gcc",
    },
  },
  {
    id: "enterprise-platform-modernization",
    category: "Enterprise Applications",
    metric: "Zero Downtime • 45% Backlog Mitigation",
    image: sapEnterpriseTeam,
    title: "Cloud ERP & Enterprise Integration Platform Specialist Deployment",
    subtitle:
      "Transitioning supply chain architectures into a modern cloud ERP and unified integration fabric across 14 distribution centers.",
    sector: "Manufacturing & Industrial Operations",
    engagementType: "Platform Implementation Pods & Managed Delivery",
    duration: "14 Months",
    context:
      "A multinational manufacturer transitioning legacy supply chain architectures into a modern cloud ERP and unified integration fabric across 14 distribution centers.",
    challenge:
      "Severe internal skill deficits in Workday integration, SAP architecture and MuleSoft API platforms risked costly programme delays, distribution bottlenecks, and go-live slippage.",
    response:
      "ConfigUSA mobilized dedicated platform specialists including enterprise architects, integration leads and functional consultants on a flexible managed workforce model.",
    execution:
      "Embedded technical squads directly alongside business and IT leaders, conducting bi-weekly delivery reviews, architectural validations and knowledge transfer workshops.",
    outcomes: [
      "Zero operational downtime during cutover and phased rollout windows across all 14 distribution centers",
      "Reduced integration backlogs by 45% within the first 90 days of engagement",
      "Met all critical milestone deadlines for global ERP transition without budget overruns",
      "Documented architectural patterns for internal team self-sufficiency and long-term platform maintenance",
    ],
    stats: [
      { value: "0", label: "Downtime Cutover" },
      { value: "45%", label: "Backlog Reduced" },
      { value: "14", label: "Distribution Hubs" },
      { value: "100%", label: "On-Time Milestones" },
    ],
    detailedSections: [
      {
        heading: "The Modernization Mandate",
        paragraphs: [
          "Operating across North America, the manufacturer was constrained by fragmented legacy systems that hindered real-time inventory visibility and delayed fulfillment reporting across 14 high-volume distribution centers.",
          "The business embarked on an enterprise-wide cloud ERP rollout integrating SAP S/4HANA with MuleSoft API management and Workday human capital management. The complexity of legacy data formats and custom extensions created significant cutover risk.",
        ],
        callout:
          "Enterprise application success depends on embedding certified specialists directly into operational cutover squads rather than relying on distant advisory panels.",
      },
      {
        heading: "Platform Specialist Mobilisation",
        paragraphs: [
          "ConfigUSA deployed certified functional and technical consultants who had led multiple enterprise ERP migrations in industrial environments.",
        ],
        bullets: [
          "Certified SAP S/4HANA architects and MM/SD functional specialists.",
          "MuleSoft integration leads designing resilient API gateways with dead-letter queue recovery.",
          "Automated regression testing suites mitigating cutover risk for continuous supply-chain logistics.",
        ],
      },
      {
        heading: "Flawless Cutover & Knowledge Transfer",
        paragraphs: [
          "Through structured sprint planning and dry-run rehearsals, the unified architecture cutover went live over a scheduled holiday window with zero operational downtime. Logistics operators saw instantaneous visibility into order flows across every warehouse hub.",
          "Detailed runbooks and architectural blueprints were handed over to client engineering custodians, providing long-term internal autonomy.",
        ],
      },
    ],
    relatedLink: {
      label: "Explore Enterprise Applications Solutions",
      to: "/services/enterprise-applications",
    },
  },
  {
    id: "ai-intelligent-solutions",
    category: "AI & Intelligent Solutions",
    metric: "70% Cycle Reduction • 99.2% Accuracy",
    image: wdAi,
    title: "Document Intelligence and Knowledge Discovery in Healthcare Operations",
    subtitle:
      "Constructing an intelligent document extraction and clinical knowledge discovery pipeline under strict HIPAA governance.",
    sector: "Healthcare & Life Sciences",
    engagementType: "Forward-Deployed AI Squad & Platform Engineering",
    duration: "10 Months",
    context:
      "A national healthcare services organisation processing massive volumes of clinical documentation, regulatory filings and administrative claims daily.",
    challenge:
      "Manual document extraction caused multi-day processing queues, elevated administrative overhead and raised compliance risks during seasonal patient surge periods.",
    response:
      "ConfigUSA deployed a specialized forward-deployed AI engineering squad to evaluate high-value automation use cases and construct an enterprise knowledge discovery solution.",
    execution:
      "Built an intelligent document extraction pipeline with strict data security boundaries, role-based access controls and human-in-the-loop validation checkpoints.",
    outcomes: [
      "70% reduction in manual document verification cycle times across all clinical intakes",
      "99.2% extraction accuracy on verified healthcare test batches and claim records",
      "Full regulatory auditability and HIPAA-compliant data handling with prompt logging",
      "Freed administrative staff to focus on complex patient care workflows and clinical resolution",
    ],
    stats: [
      { value: "70%", label: "Cycle-Time Reduction" },
      { value: "99.2%", label: "Extraction Accuracy" },
      { value: "100%", label: "HIPAA Compliant" },
      { value: "Zero", label: "Data Leakage" },
    ],
    detailedSections: [
      {
        heading: "The Clinical Intake Friction",
        paragraphs: [
          "Processing patient referrals, lab diagnostics, and insurance pre-authorizations involved thousands of unstructured PDFs, scans, and faxes each business day. Clinical staff spent substantial portions of their shifts rekeying patient information into electronic health records (EHR).",
          "Previous off-the-shelf optical character recognition (OCR) tools failed on noisy clinical scans, requiring extensive manual correction and leading to multi-day care authorization delays.",
        ],
        callout:
          "Applied AI succeeds when models are tuned to domain-specific lexicons and coupled with human-in-the-loop validation safeguards.",
      },
      {
        heading: "Forward-Deployed Engineering Approach",
        paragraphs: [
          "ConfigUSA embedded software engineers and applied AI specialists directly within clinical operations departments to study real intake workflows and data edge cases.",
        ],
        bullets: [
          "Custom RAG (Retrieval-Augmented Generation) pipeline extracting structured medical entities from clinical notes.",
          "Role-based audit logging ensuring zero patient data was utilized for external public model training.",
          "Interactive verification UI enabling administrative coordinators to validate ambiguous low-confidence confidence flags in seconds.",
        ],
      },
      {
        heading: "Clinical Impact & Measurable Acceleration",
        paragraphs: [
          "The platform cut verification cycle times from 72 hours down to under 20 minutes, with verified 99.2% field accuracy across millions of processed documents.",
          "The client successfully redeployed over 45 full-time administrative coordinators towards direct patient support, significantly improving patient satisfaction scores.",
        ],
      },
    ],
    relatedLink: {
      label: "Explore AI & Intelligent Solutions",
      to: "/services/ai",
    },
  },
];

export function findCaseStudy(id?: string): CaseStudy {
  if (!id) return VERIFIED_CASE_STUDIES[0];
  const exact = VERIFIED_CASE_STUDIES.find((cs) => cs.id === id);
  if (exact) return exact;
  const normalized = id.toLowerCase().replace(/[^a-z0-9]/g, "");
  const partial = VERIFIED_CASE_STUDIES.find((cs) => {
    const normId = cs.id.replace(/[^a-z0-9]/g, "");
    const normTitle = cs.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      normId.includes(normalized) ||
      normalized.includes(normId) ||
      normTitle.includes(normalized) ||
      normalized.includes(normTitle)
    );
  });
  return partial || VERIFIED_CASE_STUDIES[0];
}
