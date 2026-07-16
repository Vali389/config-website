import { createFileRoute } from "@tanstack/react-router";
import { Boxes, ArrowRightLeft, Lightbulb, Plug, LifeBuoy, Users, ClipboardCheck, PenTool, Cog, ShieldCheck } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";
import img from "@/assets/service-sap.jpg";
import ctaSap from "@/assets/cta-sap.jpg";

export const Route = createFileRoute("/services/sap")({
  head: () => ({
    meta: [
      { title: "SAP Solutions & Enterprise Applications — ConfigUSA" },
      { name: "description", content: "End-to-end SAP consulting, S/4HANA migration, implementation, integration, and managed services from certified experts." },
      { property: "og:title", content: "SAP Solutions" },
      { property: "og:description", content: "Unlock efficiency and long-term ROI with SAP." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Enterprise Applications"
      title={<>SAP Solutions That <span className="text-gradient-brand">Deliver ROI.</span></>}
      subtitle="End-to-end SAP consulting, implementation, migration, and managed services from certified experts."
      heroImage={img}
      ctaImage={ctaSap}
      stats={[
        { value: "S/4HANA", label: "Migration Ready" },
        { value: "10+", label: "Yrs Avg. Experience" },
        { value: "24/7", label: "Managed Support" },
        { value: "100+", label: "Rollouts" },
      ]}
      overviewLabel="What We Deliver"
      overviewHeading="Unlock Efficiency and Long-Term ROI With SAP"
      overviewParas={[
        "We provide expertise across SAP and other enterprise platforms — from strategy and implementation to migration, integration, and ongoing support.",
        "Certified consultants translate complex requirements into robust, compliant configurations that drive real business value.",
      ]}
      overviewImage={img}
      benefits={[
        "SAP-certified consultants",
        "Full-cycle implementation experience",
        "S/4HANA migration expertise",
        "Integration with your existing systems",
        "Managed support and enhancements",
        "Flexible on-site and remote delivery",
      ]}
      capabilitiesHeading="End-to-End SAP Capabilities"
      capabilitiesSub="Strategy, delivery, and support across the enterprise application landscape."
      capabilities={[
        { icon: Boxes, title: "Implementation", text: "Full-cycle SAP implementations tailored to your processes." },
        { icon: ArrowRightLeft, title: "S/4HANA Migration", text: "Smooth, low-risk migration to the latest SAP platform." },
        { icon: Lightbulb, title: "Advisory & Consulting", text: "Roadmaps, process optimization, and controls guidance." },
        { icon: Plug, title: "Integration", text: "Connect SAP with the rest of your enterprise ecosystem." },
        { icon: LifeBuoy, title: "Managed Support", text: "Ongoing AMS, enhancements, and 24/7 operational support." },
        { icon: Users, title: "SAP Staffing", text: "Certified SAP specialists for contract and permanent roles." },
      ]}
      processHeading="Proven SAP Delivery"
      process={[
        { icon: ClipboardCheck, title: "Assess", text: "Evaluate current state, requirements, and target architecture." },
        { icon: PenTool, title: "Design", text: "Blueprint configurations, integrations, and migration plan." },
        { icon: Cog, title: "Implement", text: "Configure, build, test, and validate with your teams." },
        { icon: ShieldCheck, title: "Support", text: "Go-live support plus ongoing managed services." },
      ]}
      techHeading="SAP Expertise"
      tech={["S/4HANA", "SAP FICO", "MM", "SD", "ABAP", "Fiori", "SAP BTP", "SuccessFactors", "Ariba", "Basis"]}
    />
  );
}
