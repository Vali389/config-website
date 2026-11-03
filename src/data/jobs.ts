export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time / Contract / Contract-to-Hire
  workMode: string; // Remote / Hybrid / On-site
  experience: string;
  salary: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export const JOBS: Job[] = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    department: "Digital Engineering",
    location: "Plainsboro, NJ",
    type: "Full-time",
    workMode: "Remote / Hybrid",
    experience: "5+ years",
    salary: "$120K – $150K",
    posted: "Jul 08, 2026",
    summary:
      "Build modern, cloud-native web applications for enterprise clients across healthcare, financial services, and technology. You'll own front-end architecture and mentor a growing engineering team.",
    responsibilities: [
      "Architect and build scalable, accessible front-end applications in React and TypeScript.",
      "Collaborate with product, design, and back-end teams to ship high-quality features.",
      "Champion performance, testing, and engineering best practices across the team.",
      "Mentor mid-level engineers through code reviews and pairing.",
    ],
    requirements: [
      "5+ years of professional front-end experience with React and TypeScript.",
      "Strong grasp of modern state management, hooks, and component architecture.",
      "Experience integrating REST/GraphQL APIs and working in CI/CD pipelines.",
      "Excellent communication and a product-minded approach to engineering.",
    ],
    niceToHave: ["Next.js / TanStack", "Node.js", "AWS or Azure", "Design systems experience"],
  },
  {
    id: "sap-fico-consultant",
    title: "SAP FICO Consultant",
    department: "Enterprise Applications",
    location: "Hyderabad, India",
    type: "Full-time",
    workMode: "Hybrid",
    experience: "6+ years",
    salary: "Competitive",
    posted: "Jul 05, 2026",
    summary:
      "Lead SAP FICO implementations and S/4HANA migrations for global enterprise clients, translating complex finance requirements into robust, compliant configurations.",
    responsibilities: [
      "Gather requirements and configure SAP FICO modules end-to-end.",
      "Drive S/4HANA migration workstreams and integration testing.",
      "Partner with finance stakeholders to optimize processes and controls.",
      "Provide post-go-live support and knowledge transfer.",
    ],
    requirements: [
      "6+ years of hands-on SAP FICO configuration experience.",
      "At least two full-cycle implementations.",
      "Strong understanding of financial accounting and controlling processes.",
      "Experience with S/4HANA is strongly preferred.",
    ],
    niceToHave: ["SAP certification", "S/4HANA", "SD/MM integration", "Fiori"],
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Toronto, Canada",
    type: "Contract",
    workMode: "Remote",
    experience: "4+ years",
    salary: "$70 – $95 / hr",
    posted: "Jul 02, 2026",
    summary:
      "Design and automate cloud infrastructure and CI/CD pipelines that keep enterprise platforms fast, secure, and reliable at scale.",
    responsibilities: [
      "Build and maintain infrastructure-as-code across AWS/Azure.",
      "Automate CI/CD pipelines and release processes.",
      "Implement observability, monitoring, and incident response.",
      "Harden security and drive cost optimization.",
    ],
    requirements: [
      "4+ years in DevOps / platform engineering roles.",
      "Strong Terraform, Docker, and Kubernetes experience.",
      "Proficiency with at least one major cloud provider.",
      "Scripting skills in Python or Bash.",
    ],
    niceToHave: ["Kubernetes CKA", "GitOps / ArgoCD", "Service mesh", "FinOps"],
  },
  {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "AI & Intelligent Solutions",
    location: "Remote (US)",
    type: "Contract-to-Hire",
    workMode: "Remote",
    experience: "3+ years",
    salary: "$110K – $145K",
    posted: "Jun 28, 2026",
    summary:
      "Design and deploy machine learning and Generative AI solutions that turn enterprise data into measurable business value.",
    responsibilities: [
      "Build, evaluate, and deploy ML and LLM-powered solutions.",
      "Develop data and MLOps pipelines for reliable model delivery.",
      "Collaborate with clients to frame problems and measure impact.",
      "Apply Responsible AI practices across the lifecycle.",
    ],
    requirements: [
      "3+ years building and deploying ML models in production.",
      "Strong Python and modern ML/DL frameworks.",
      "Experience with LLMs, RAG, or Generative AI applications.",
      "Solid understanding of data engineering fundamentals.",
    ],
    niceToHave: ["MLOps tooling", "Vector databases", "Cloud AI platforms", "Prompt engineering"],
  },
  {
    id: "talent-acquisition-specialist",
    title: "Talent Acquisition Specialist",
    department: "Workforce Solutions",
    location: "Plainsboro, NJ",
    type: "Full-time",
    workMode: "On-site / Hybrid",
    experience: "2+ years",
    salary: "$55K – $75K + incentives",
    posted: "Jun 24, 2026",
    summary:
      "Source and engage top technology talent, building strong candidate relationships and delivering an outstanding hiring experience for our enterprise clients.",
    responsibilities: [
      "Source, screen, and engage technology candidates across roles.",
      "Manage the full recruiting lifecycle and candidate pipeline.",
      "Partner with account teams to understand client requirements.",
      "Maintain accurate data and reporting in the ATS.",
    ],
    requirements: [
      "2+ years of technical recruiting or staffing experience.",
      "Strong sourcing skills across job boards and LinkedIn.",
      "Excellent communication and relationship-building.",
      "Highly organized with strong follow-through.",
    ],
    niceToHave: ["US IT staffing", "Bullhorn / ATS", "Boolean search", "Account management"],
  },
  {
    id: "business-analyst-bfsi",
    title: "Business Analyst (BFSI)",
    department: "Digital Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    workMode: "Hybrid",
    experience: "4+ years",
    salary: "Competitive",
    posted: "Jun 20, 2026",
    summary:
      "Bridge business and technology teams on banking and financial services initiatives, turning stakeholder needs into clear, actionable requirements.",
    responsibilities: [
      "Elicit, document, and prioritize business and system requirements.",
      "Create user stories, process flows, and acceptance criteria.",
      "Facilitate workshops between business and engineering teams.",
      "Support UAT and ensure delivery meets business goals.",
    ],
    requirements: [
      "4+ years as a Business Analyst, ideally in BFSI.",
      "Strong requirements and stakeholder-management skills.",
      "Experience with Agile delivery and tools like Jira/Confluence.",
      "Excellent analytical and communication abilities.",
    ],
    niceToHave: ["Payments / core banking", "SQL", "CBAP", "Data analysis"],
  },
];

export function getJob(id: string): Job | undefined {
  return JOBS.find((j) => j.id === id);
}

export const DEPARTMENTS = ["All Departments", ...Array.from(new Set(JOBS.map((j) => j.department)))];
export const LOCATIONS = ["All Locations", ...Array.from(new Set(JOBS.map((j) => j.location)))];
