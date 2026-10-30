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
    <>
      <ServiceDetail
        eyebrow="Enterprise Applications"
        title={<>SAP Solutions That <span className="text-gradient-brand">Deliver ROI.</span></>}
        subtitle="End-to-end SAP consulting, implementation, migration, and specialized talent solutions from certified experts."
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
          "We provide expertise across SAP and other enterprise platforms — from strategy and talent placement to migration, integration, and ongoing support.",
          "Certified consultants and specialists translate complex requirements into robust, compliant configurations that drive real business value.",
        ]}
        overviewImage={img}
        benefits={[
          "SAP-certified consultants & engineers",
          "Full-cycle implementation & staffing experience",
          "S/4HANA migration expertise",
          "Integration with your existing systems",
          "Managed support and enhancements",
          "Flexible on-site and remote delivery",
        ]}
        capabilitiesHeading="End-to-End SAP Capabilities"
        capabilitiesSub="Strategy, delivery, and staffing support across the enterprise application landscape."
        capabilities={[
          { icon: Boxes, title: "Implementation Support", text: "Full-cycle SAP implementations tailored to your business processes." },
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

      {/* Trademark & Independence Notice */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-xl border border-slate-300/80 bg-white p-6 text-center text-xs text-slate-500 shadow-sm leading-relaxed space-y-2">
            <p className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
              Trademark & Independence Notice
            </p>
            <p>
              SAP®, SAP S/4HANA®, SAP ECC®, and other SAP products and services mentioned herein are registered trademarks of SAP SE in Germany and other countries. ConfigUSA is an independent technology staffing, talent acquisition, and workforce solutions company and is not affiliated with, sponsored by, endorsed by, or an authorized partner or vendor of SAP SE. References to SAP products are solely for the purpose of identifying technology skill sets and candidate competencies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
