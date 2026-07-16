import { createFileRoute } from "@tanstack/react-router";
import { Code2, Brain, Users, Video, BarChart3, ShieldCheck, Settings2, ClipboardList, LineChart, CheckCircle2 } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";
import img from "@/assets/service-assessment.jpg";
import ctaAssessment from "@/assets/cta-assessment.jpg";

export const Route = createFileRoute("/services/assessment")({
  head: () => ({
    meta: [
      { title: "Digital Assessment for Hiring — ConfigUSA" },
      { name: "description", content: "AI-driven assessments that evaluate skills, aptitude, and cultural fit — cutting hiring time in half with better outcomes." },
      { property: "og:title", content: "Digital Assessment" },
      { property: "og:description", content: "Hire smarter with data-driven candidate evaluation." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceDetail
      eyebrow="AI-Powered Screening"
      title={<>Hire Smarter With <span className="text-gradient-brand">Digital Assessment.</span></>}
      subtitle="AI-driven assessments that evaluate skills, aptitude, and cultural fit — cutting hiring time in half with better outcomes."
      heroImage={img}
      ctaImage={ctaAssessment}
      stats={[
        { value: "50%", label: "Faster Hiring" },
        { value: "AI", label: "Powered Scoring" },
        { value: "1000+", label: "Skill Tests" },
        { value: "98%", label: "Accuracy" },
      ]}
      overviewLabel="What We Deliver"
      overviewHeading="Data-Driven Candidate Evaluation"
      overviewParas={[
        "Our AI-powered assessment platform evaluates real skills, aptitude, and culture fit — so you make confident, objective hiring decisions.",
        "Reduce bias, shorten time-to-hire, and build a future-ready workforce with measurable, defensible results.",
      ]}
      overviewImage={img}
      benefits={[
        "AI-scored, objective evaluations",
        "Role-specific skill libraries",
        "Automated shortlisting",
        "Reduced hiring bias",
        "Rich analytics and reporting",
        "Seamless ATS integration",
      ]}
      capabilitiesHeading="A Complete Assessment Toolkit"
      capabilitiesSub="Everything you need to screen, evaluate, and select the right candidates."
      capabilities={[
        { icon: Code2, title: "Coding Challenges", text: "Real-world coding tasks with automated, plagiarism-aware scoring." },
        { icon: Brain, title: "Aptitude Tests", text: "Cognitive and role-specific aptitude evaluations." },
        { icon: Users, title: "Behavioral & Culture Fit", text: "Structured assessments for soft skills and team fit." },
        { icon: Video, title: "Video Interviews", text: "Async and live video screening with structured rubrics." },
        { icon: BarChart3, title: "Analytics & Reports", text: "Actionable dashboards to compare and rank candidates." },
        { icon: ShieldCheck, title: "Proctoring & Integrity", text: "Secure, monitored testing to ensure trustworthy results." },
      ]}
      processHeading="From Screening to Selection"
      process={[
        { icon: Settings2, title: "Define", text: "Configure role-based assessments and success criteria." },
        { icon: ClipboardList, title: "Assess", text: "Candidates complete skill, aptitude, and fit evaluations." },
        { icon: LineChart, title: "Analyze", text: "AI scores and ranks candidates with clear insights." },
        { icon: CheckCircle2, title: "Decide", text: "Shortlist and select the best fit with confidence." },
      ]}
      techHeading="Assessment Coverage"
      tech={["Coding", "Aptitude", "Behavioral", "Video", "Proctoring", "Role Simulations", "ATS Integration", "Analytics"]}
    />
  );
}
