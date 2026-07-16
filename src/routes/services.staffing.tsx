import { createFileRoute } from "@tanstack/react-router";
import { Users, UserCheck, Briefcase, Layers, Globe2, Building2, Search, Rocket, Target, Handshake } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";
import img from "@/assets/service-staffing.jpg";
import ctaStaffing from "@/assets/cta-staffing.jpg";

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      { title: "IT Staffing & Augmentation — ConfigUSA" },
      { name: "description", content: "Vetted technology talent for contract, contract-to-hire, and permanent roles — deployed in days, not months." },
      { property: "og:title", content: "IT Staffing & Augmentation" },
      { property: "og:description", content: "Technology workforce solutions from ConfigUSA." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Technology Workforce Solutions"
      title={<>Talent That <span className="text-gradient-brand">Delivers.</span></>}
      subtitle="Access the industry's most rigorously vetted technology talent — deployed to your project in days, not months."
      heroImage={img}
      ctaImage={ctaStaffing}
      stats={[
        { value: "48h", label: "Avg. Deployment" },
        { value: "10K+", label: "Vetted Specialists" },
        { value: "500+", label: "Clients Served" },
        { value: "98%", label: "Retention" },
      ]}
      overviewLabel="Why Choose Us"
      overviewHeading="Premium Technology Talent, On Demand"
      overviewParas={[
        "Whether you need a single specialist or an entire distributed team, our talent network delivers the right people at the right time.",
        "We align talent with your business objectives — not just a job description — so every hire moves your initiatives forward.",
      ]}
      overviewImage={img}
      benefits={[
        "Pre-screened pool of 10,000+ specialists",
        "Deploy resources in as little as 48 hours",
        "Contract, C2H, and permanent options",
        "Coverage across every major tech stack",
        "Transparent pricing, no hidden fees",
        "Dedicated account manager per engagement",
      ]}
      capabilitiesHeading="Flexible Ways to Engage Talent"
      capabilitiesSub="Choose the model that fits your growth stage, budget, and timeline."
      capabilities={[
        { icon: Users, title: "Contract Staffing", text: "Flexible professionals for short-term projects and surge capacity." },
        { icon: UserCheck, title: "Contract-to-Hire", text: "Evaluate top talent on the job before a long-term commitment." },
        { icon: Briefcase, title: "Permanent Placement", text: "Vetted, culture-fit hires who grow with your organization." },
        { icon: Layers, title: "Dedicated Project Teams", text: "Assembled squads that own delivery end-to-end." },
        { icon: Building2, title: "RPO / MSP Solutions", text: "Managed recruitment and vendor programs at enterprise scale." },
        { icon: Globe2, title: "Offshore & Nearshore", text: "Global delivery capabilities across North America and India." },
      ]}
      processHeading="A Simple, Proven Process"
      process={[
        { icon: Target, title: "Requirement Analysis", text: "We understand your goals, tech stack, and culture in a single call." },
        { icon: Search, title: "Curated Shortlist", text: "Receive 3–5 pre-vetted candidates matched to your exact needs." },
        { icon: Handshake, title: "Interview & Select", text: "Meet candidates fast and choose the right fit with confidence." },
        { icon: Rocket, title: "Onboard & Scale", text: "Rapid onboarding, ongoing support, and scaling as you grow." },
      ]}
      techHeading="Skills We Staff"
      tech={["React", "Node.js", "Java", ".NET", "Python", "AWS", "Azure", "DevOps", "Data & Analytics", "SAP", "Salesforce", "QA & Automation"]}
    />
  );
}
