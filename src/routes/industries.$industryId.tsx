import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  HeartPulse,
  Truck,
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
import indHealthcare from "@/assets/High-Tech Medical Research Laboratory-5.png";
import indFinancial from "@/assets/Financial Analytics Team at Work-1.png";
import indGovernment from "@/assets/Warehouse Logistics Dashboard Team-6.png";
import indManufacturing from "@/assets/Collaborative Engineers in a Smart Factory-3.png";
import indManufacturing2 from "@/assets/Engineers Collaborating on Smart Factory Automation-7.png";
import indRetail from "@/assets/Retail Team Reviewing Tablet in Showroom-4.png";
import indTechnology from "@/assets/Collaborative Tech Team in Modern Office-2.png";

import ctaIndustries from "@/assets/cta-industries.jpg";

const SLUG_MAP: Record<string, string> = {
  "financial-services": "financial",
  "healthcare-life-sciences": "healthcare",
  "government-public-sector": "government",
  "manufacturing-engineering": "manufacturing",
  "technology-digital-services": "technology",
  "retail-consumer-goods": "retail",
};

export const Route = createFileRoute("/industries/$industryId")({
  head: ({ params }) => {
    const canonical = SLUG_MAP[params.industryId] ?? params.industryId;
    const names: Record<string, string> = {
      healthcare: "Healthcare & Life Sciences Solutions",
      financial: "Banking & Financial Services Solutions",
      government: "Logistics & Supply Chain Solutions",
      manufacturing: "Manufacturing & Industrial Solutions",
      retail: "Retail & Consumer Solutions",
      technology: "Technology & IT Services Solutions",
    };
    const title = `${names[canonical] ?? "Industry Solutions"} — ConfigUSA`;
    return {
      meta: [
        { title },
        { name: "description", content: "Deep sector expertise combined with specialized digital talent to deliver modern technology outcomes." },
      ],
    };
  },
  loader: ({ params }) => {
    const canonical = SLUG_MAP[params.industryId] ?? params.industryId;
    const valid = ["healthcare", "financial", "government", "manufacturing", "retail", "technology"];
    if (!valid.includes(canonical)) {
      throw notFound();
    }
    return { industryId: canonical };
  },
  component: Page,
});

const DATA: Record<string, any> = {
  healthcare: {
    eyebrow: "Healthcare & Life Sciences",
    title: "Digital Innovation in Healthcare.",
    subtitle: "Deliver patient-centered digital health services and secure interoperability under strict regulatory compliance.",
    heroImage: indHealthcare,
    stats: [
      { value: "HIPAA", label: "Security & Privacy" },
      { value: "SOC 2 Type II", label: "Audit Standards" },
      { value: "FHIR / HL7", label: "Interoperability Ready" },
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
      { icon: HeartPulse,
  Truck, title: "EHR / EMR Interoperability", text: "Integrate clinical records systems smoothly across networks and portals." },
      { icon: ShieldCheck, title: "Healthcare Compliance", text: "Enforce SOC 2, HIPAA, and patient data confidentiality controls." },
      { icon: Cpu, title: "Digital Health Apps", text: "Develop high-scale telemedicine platforms and remote monitoring tools." },
    ],
  },
  financial: {
    eyebrow: "Financial Services",
    title: "Secure Technology for Financial Services.",
    subtitle: "Scale your transaction engines, secure ledger APIs, and protect core assets with SOC 2 compliance.",
    heroImage: indFinancial,
    stats: [
      { value: "99.99%", label: "System Uptime" },
      { value: "PCI-DSS", label: "Readiness" },
      
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
    eyebrow: "Logistics & Supply Chain",
    title: "Digital Visibility & Velocity for Supply Chains.",
    subtitle: "Technology talent supporting supply chain visibility, telemetry, analytics, warehouse management, and resilient distribution operations.",
    heroImage: indGovernment,
    stats: [
      { value: "Real-Time", label: "Fleet & Asset Telemetry" },
      { value: "WMS & ERP", label: "Integration Architecture" },
      { value: "99.9%", label: "Platform Availability" },
      { value: "End-to-End", label: "Logistics Visibility" },
    ],
    overviewHeading: "Modernizing Supply Chain Technology and Operational Flow",
    overviewParas: [
      "ConfigUSA provides vetted technology squads to build connected distribution networks, warehouse telemetry, and predictive logistics.",
      "Our professionals integrate seamlessly into your engineering roadmaps to optimize routing, reduce distribution downtime, and modernize legacy inventory systems."
    ],
    benefits: [
      "Warehouse Management System (WMS) and ERP modern integrations",
      "Real-time shipment and fleet GPS telemetry pipelines",
      "Automated stock visibility and inventory forecasting dashboards",
      "Omnichannel distribution routing and dispatch algorithms",
      "Custom vendor management portals and supplier API layers",
      "High-throughput cloud architecture built for peak holiday surges",
    ],
    capabilitiesHeading: "Logistics & Supply Chain Capabilities",
    capabilities: [
      { icon: Truck, title: "WMS & Fleet Telemetry", text: "Connect warehouse databases and real-time fleet GPS tracking securely." },
      { icon: ShieldCheck, title: "Inventory & Flow Visibility", text: "Deliver unified real-time inventory visibility across distribution hubs." },
      { icon: Cpu, title: "Route & Load Optimization", text: "Build predictive algorithms and automated dispatch tools for logistics fleets." },
    ],
  },
  manufacturing: {
    eyebrow: "Manufacturing & Industrial",
    title: "Smart Solutions for Manufacturing & Industrial.",
    subtitle: "Optimize industrial supply chains, implement certified ERP/SAP rollouts, and automate telemetry.",
    heroImage: indManufacturing,
    overviewImage: indManufacturing2,
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
    title: "High-Scale Commerce for Retailers.",
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
    title: "Accelerated Scale for Tech & SaaS.",
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
      overviewImage={info.overviewImage || info.heroImage}
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
