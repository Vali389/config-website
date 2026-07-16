import { createFileRoute } from "@tanstack/react-router";
import { Globe, Smartphone, Cloud, Plug, BrainCircuit, ShieldCheck, Search, PenTool, Code2, Rocket } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";
import img from "@/assets/service-software.jpg";
import ctaSoftware from "@/assets/cta-software.jpg";

export const Route = createFileRoute("/services/software")({
  head: () => ({
    meta: [
      { title: "Software Development & Digital Engineering — ConfigUSA" },
      { name: "description", content: "Custom web, mobile, cloud-native, and AI-powered software engineered to scale your business and delight your users." },
      { property: "og:title", content: "Software Development" },
      { property: "og:description", content: "Digital engineering that scales your business." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="Digital Engineering"
      title={<>Software Built to <span className="text-gradient-brand">Scale.</span></>}
      subtitle="Custom-built software that scales with your business — from web and mobile to cloud-native and AI-powered platforms."
      heroImage={img}
      ctaImage={ctaSoftware}
      stats={[
        { value: "10+", label: "Yrs Avg. Experience" },
        { value: "24/7", label: "Global Support" },
        { value: "100%", label: "Agile Delivery" },
        { value: "500+", label: "Projects Shipped" },
      ]}
      overviewLabel="What We Deliver"
      overviewHeading="Engineered to Scale Your Business and Delight Your Users"
      overviewParas={[
        "We build modern applications, cloud-native platforms, APIs, and scalable digital experiences that move your business forward.",
        "From discovery to launch and beyond, our engineers deliver clean, tested, production-grade software with measurable outcomes.",
      ]}
      overviewImage={img}
      benefits={[
        "Certified engineers with 10+ years experience",
        "Proven delivery frameworks and methodologies",
        "24/7 global support across time zones",
        "Transparent pricing, measurable outcomes",
        "Scalable from pilot to enterprise rollout",
        "Post-deployment optimization & support",
      ]}
      capabilitiesHeading="Full-Cycle Product Engineering"
      capabilitiesSub="Everything you need to design, build, and scale modern digital products."
      capabilities={[
        { icon: Globe, title: "Web Applications", text: "Fast, accessible, responsive web apps built on modern frameworks." },
        { icon: Smartphone, title: "Mobile Applications", text: "Native and cross-platform apps for iOS and Android." },
        { icon: Cloud, title: "Cloud-Native Platforms", text: "Scalable, resilient platforms engineered for the cloud." },
        { icon: Plug, title: "APIs & Integrations", text: "Robust APIs and seamless integrations across your systems." },
        { icon: BrainCircuit, title: "AI-Powered Software", text: "Generative AI, automation, and intelligent features that add value." },
        { icon: ShieldCheck, title: "QA & Automation", text: "Automated testing and CI/CD for confident, frequent releases." },
      ]}
      processHeading="From Idea to Impact"
      process={[
        { icon: Search, title: "Discover", text: "We align on goals, users, and scope to shape the right solution." },
        { icon: PenTool, title: "Design", text: "UX and architecture designed for usability and scale." },
        { icon: Code2, title: "Build", text: "Agile sprints deliver working software you can see every week." },
        { icon: Rocket, title: "Launch & Support", text: "Smooth releases plus ongoing optimization and support." },
      ]}
      tech={["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes", "GraphQL", "PostgreSQL", "CI/CD"]}
    />
  );
}
