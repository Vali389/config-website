import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  HeartPulse,
  Landmark,
  Building2,
  Factory,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  Users,
  Award,
  CheckCircle2,
  Target,
  Search,
  Handshake,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { IndustryDetail } from "@/components/IndustryDetail";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indFinancial from "@/assets/ind-financial.jpg";
import indGovernment from "@/assets/ind-government.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indTechnology from "@/assets/ind-technology.jpg";

import ctaIndustries from "@/assets/cta-industries.jpg";

export const Route = createFileRoute("/industries/$industryId")({
  head: ({ params }) => {
    const names: Record<string, string> = {
      healthcare: "Healthcare & Life Sciences Solutions",
      financial: "Financial Services Solutions",
      government: "Government & Public Sector Solutions",
      manufacturing: "Manufacturing Solutions",
      retail: "Retail & E-commerce Solutions",
      technology: "Technology & SaaS Solutions",
    };
    const title = `${names[params.industryId] ?? "Industry Solutions"} — ConfigUSA`;
    return {
      meta: [
        { title },
        { name: "description", content: "Deep sector expertise combined with specialized digital talent to deliver modern technology outcomes." },
      ],
    };
  },
  loader: ({ params }) => {
    const valid = ["healthcare", "financial", "government", "manufacturing", "retail", "technology"];
    if (!valid.includes(params.industryId)) {
      throw notFound();
    }
    return { industryId: params.industryId };
  },
  component: Page,
});

const DATA: Record<string, any> = {
  healthcare: {
    eyebrow: "Healthcare & Life Sciences",
    title: <>Digital Innovation in <span className="text-[#f5a623]">Healthcare.</span></>,
    subtitle: "Deliver patient-centered digital health services and secure interoperability under strict regulatory compliance.",
    heroImage: indHealthcare,
    stats: [
      { value: "HIPAA", label: "Compliant Systems" },
      { value: "Epic/Cerner", label: "Expert Integration" },
      { value: "100%", label: "Vetted tech panels" },
      { value: "12d", label: "Avg. project launch" },
    ],
    overviewHeading: "Engineered for Clinical Trust and Security",
    overviewParas: [
      "We provide modern engineering and talent solutions for hospital networks, digital health apps, and life sciences companies.",
      "Our specialized panels screen every engineer to ensure deep healthcare domain competency before onboarding."
    ],
    benefits: [
      "SOC 2 and HIPAA-compliant development workflows",
      "FHIR & HL7 clinical data interoperability",
      "Telehealth platform builds and scaling",
      "EHR/EMR custom integration pipelines",
      "Responsive patient portals and mobile apps",
      "FDA validation support for digital therapeutics",
    ],
    capabilitiesHeading: "Proven Healthcare Capabilities",
    capabilities: [
      { icon: HeartPulse, title: "EHR / EMR Interoperability", text: "Integrate clinical records systems smoothly across networks and portals." },
      { icon: ShieldCheck, title: "Healthcare Compliance", text: "Enforce SOC 2, HIPAA, and patient data confidentiality controls." },
      { icon: Cpu, title: "Digital Health Apps", text: "Develop high-scale telemedicine platforms and remote monitoring tools." },
    ],
  },
  financial: {
    eyebrow: "Financial Services",
    title: <>Secure Technology for <span className="text-[#f5a623]">Financial Services.</span></>,
    subtitle: "Scale your transaction engines, secure ledger APIs, and protect core assets with SOC 2 compliance.",
    heroImage: indFinancial,
    stats: [
      { value: "99.99%", label: "System Uptime" },
      { value: "PCI-DSS", label: "Readiness" },
      { value: "98%", label: "Client Retention" },
      { value: "SOC 2", label: "Audit Standards" },
    ],
    overviewHeading: "Modernizing Core Systems and Digital Banking",
    overviewParas: [
      "We help banks, fintechs, and asset managers innovate faster with scalable digital engineering services.",
      "Our professionals integrate seamlessly to accelerate your software and platform roadmaps safely."
    ],
    benefits: [
      "PCI-DSS ready architecture patterns",
      "Core banking API layers and integrations",
      "Real-time transaction parsing at high scale",
      "Automated risk & compliance dashboards",
      "SLA-driven development and system maintenance",
      "Mobile wallets and payments integrations",
    ],
    capabilitiesHeading: "Expert Financial Offerings",
    capabilities: [
      { icon: Landmark, title: "Core Banking Systems", text: "Modernize core bank databases and API layers securely." },
      { icon: ShieldCheck, title: "Risk & Compliance", text: "Enforce anti-money laundering (AML) and fraud detection tools." },
      { icon: Cpu, title: "Digital Payments", text: "Integrate wallets, card transaction rails, and global ACH pipelines." },
    ],
  },
  government: {
    eyebrow: "Government & Public Sector",
    title: <>Dependable Solutions for <span className="text-[#f5a623]">Public Sector.</span></>,
    subtitle: "Modernize legacy mainframes and secure government clouds with background-checked tech squads.",
    heroImage: indGovernment,
    stats: [
      { value: "ADA 508", label: "Accessibility Standards" },
      { value: "Cleared", label: "Talent Roster" },
      { value: "100%", label: "SLA compliance" },
      { value: "FedRAMP", label: "Ready Systems" },
    ],
    overviewHeading: "Supporting Government Digital Transformation",
    overviewParas: [
      "ConfigUSA provides vetted developers and project teams to modernize public citizen services.",
      "Our background-checked professionals keep legacy systems running while delivering secure cloud transitions."
    ],
    benefits: [
      "ADA Section 508 compliant frontend development",
      "Secure cloud architecture (AWS GovCloud / Azure Government)",
      "Strict data classification and clearance protocols",
      "Phased legacy mainframe modernisation paths",
      "SLA-backed deliverables to prevent project overrun",
      "Vetted talent pool with necessary clearances",
    ],
    capabilitiesHeading: "Government Tech Capabilities",
    capabilities: [
      { icon: Building2, title: "Legacy Modernization", text: "Migrate legacy mainframes to secure, modern public cloud systems." },
      { icon: ShieldCheck, title: "Citizen Portals", text: "Build reliable citizen-facing portals conforming to accessibility laws." },
      { icon: Cpu, title: "Secured Infrastructure", text: "Deploy GovCloud solutions following FedRAMP-aligned patterns." },
    ],
  },
  manufacturing: {
    eyebrow: "Manufacturing",
    title: <>Smart Solutions for <span className="text-[#f5a623]">Manufacturing & ERP.</span></>,
    subtitle: "Optimize industrial supply chains, implement certified ERP/SAP rollouts, and automate telemetry.",
    heroImage: indManufacturing,
    stats: [
      { value: "SAP ERP", label: "Certified Engineers" },
      { value: "35%", label: "Operational Speedup" },
      { value: "24/7", label: "Operations Support" },
      { value: "Supply Chain", label: "End-to-End Visibility" },
    ],
    overviewHeading: "Driving Factory Automation and Supply Chain Efficiency",
    overviewParas: [
      "We connect manufacturing giants and logistics operators with experienced technology specialists.",
      "From custom SAP extensions to connected IIoT telemetry, we keep supply chains moving."
    ],
    benefits: [
      "Certified SAP, Oracle, and Salesforce rollouts",
      "Real-time shop floor telemetry integrations",
      "Predictive analytics for machine maintenance",
      "Omnichannel logistics and routing algorithms",
      "Custom supply-chain portals for vendor management",
      "Application support to eliminate operations downtime",
    ],
    capabilitiesHeading: "Modern Industrial Delivery",
    capabilities: [
      { icon: Factory, title: "SAP & ERP Implementations", text: "Configure and extend SAP ERP software for custom operations." },
      { icon: Cpu, title: "IIoT & Telemetry", text: "Build robust plant-floor telemetry pipelines for analytics dashboards." },
      { icon: ShieldCheck, title: "Supply Chain Analytics", text: "Predict bottlenecks and sync supplier warehouse stocks in real-time." },
    ],
  },
  retail: {
    eyebrow: "Retail & E-commerce",
    title: <>High-Scale Commerce for <span className="text-[#f5a623]">Retailers.</span></>,
    subtitle: "Deploy fast headless storefronts, personalize experiences with AI search, and sync global stocks.",
    heroImage: indRetail,
    stats: [
      { value: "10M+", label: "Daily Transactions" },
      { value: "2x", label: "Load Speed Improvement" },
      { value: "45%", label: "Conversion Lift" },
      { value: "Omnichannel", label: "Real-time Sync" },
    ],
    overviewHeading: "Modern Composable Commerce and Personalization",
    overviewParas: [
      "We build high-performance e-commerce setups that lower drop-offs and boost customer retention.",
      "Our frontend specialists write optimized code that loads in milliseconds, even at peak traffic."
    ],
    benefits: [
      "Headless and composable commerce architectures",
      "AI-driven search engines and personalized feeds",
      "Sync systems for physical POS and online commerce",
      "Millisecond page-speed optimization to boost conversions",
      "Payment gateway audits and custom checkout extensions",
      "Scale readiness to handle seasonal holiday spikes",
    ],
    capabilitiesHeading: "Retail Technology Solutions",
    capabilities: [
      { icon: ShoppingBag, title: "Composable E-commerce", text: "Develop headless commerce pages using React, Next, or Shopify APIs." },
      { icon: Cpu, title: "AI Search & Feed", text: "Optimize conversion rates with smart recommender systems." },
      { icon: ShieldCheck, title: "POS & Stock Sync", text: "Unify POS systems and global online inventory real-time." },
    ],
  },
  technology: {
    eyebrow: "Technology & SaaS",
    title: <>Accelerated Scale for <span className="text-[#f5a623]">Tech & SaaS.</span></>,
    subtitle: "Scale your roadmap with elite full-stack developer squads and cloud-native infrastructure.",
    heroImage: indTechnology,
    stats: [
      { value: "48h", label: "Squad Deployment" },
      { value: "100%", label: "Cloud-Native Builds" },
      { value: "SOC 2", label: "Vulnerability Checks" },
      { value: "React/Node", label: "Certified Panels" },
    ],
    overviewHeading: "Elite Software Engineering Teams, Deployed Fast",
    overviewParas: [
      "We help software enterprises and fast-growing startups clear product features faster.",
      "Every engineer is technically vetted and integrated with your Slack, Jira, and GitHub workflow."
    ],
    benefits: [
      "Pre-vetted React, Node, Python, and Java squads",
      "Infrastructure as Code (Terraform) and AWS/Azure deployment",
      "Continuous CI/CD pipeline audits and optimization",
      "Automation QA pipelines (Playwright / Cypress)",
      "Agile alignment with sprint routines and standups",
      "Flexible elastic scale up or down within weeks",
    ],
    capabilitiesHeading: "Software Engineering Offerings",
    capabilities: [
      { icon: Cpu, title: "Full-Stack Development", text: "Deploy elite squads to build web apps, scalable APIs, and core services." },
      { icon: ShieldCheck, title: "Platform & DevOps", text: "Enforce Kubernetes pipelines, cloud security checks, and deploy systems." },
      { icon: Users, title: "QA Test Automation", text: "Write extensive unit and integration tests to secure release cycles." },
    ],
  },
};

function Page() {
  const { industryId } = Route.useParams();
  const info = DATA[industryId];
  if (!info) throw notFound();

  return (
    <IndustryDetail
      eyebrow={info.eyebrow}
      title={info.title}
      subtitle={info.subtitle}
      heroImage={info.heroImage}
      stats={info.stats}
      overviewLabel="Overview"
      overviewHeading={info.overviewHeading}
      overviewParas={info.overviewParas}
      overviewImage={info.heroImage}
      benefits={info.benefits}
      capabilitiesHeading={info.capabilitiesHeading}
      capabilities={info.capabilities}
      processHeading="Our Collaboration Process"
      process={[
        { icon: Target, title: "Scoping Call", text: "Discuss sector constraints, technical stacks, and timelines." },
        { icon: Search, title: "Vetted Matching", text: "Our domain tech panels select matching specialists in days." },
        { icon: Handshake, title: "Integration", text: "Resources scale up and integrate into your native workflows." },
        { icon: Rocket, title: "Sustained Delivery", text: "Weekly reviews, compliance tracking, and elastic scaling." },
      ]}
      ctaImage={ctaIndustries}
    />
  );
}
