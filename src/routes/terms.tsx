import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ConfigUSA" },
      { name: "description", content: "The terms that govern your use of the ConfigUSA website and services." },
    ],
  }),
  component: () => (
    <LegalPage
      kind="Terms & Conditions"
      updated="July 2026"
      intro="These terms govern your use of the ConfigUSA website and services. By using our site, you agree to the terms below."
      sections={SECTIONS}
    />
  ),
});

const SECTIONS: LegalSection[] = [
  { heading: "Acceptance of Terms", paras: ["By accessing or using this website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations."] },
  { heading: "Website Usage", paras: ["You agree to use the site lawfully and not to interfere with its operation, security, or the experience of other users."] },
  { heading: "Intellectual Property", paras: ["All content, branding, and materials on this site are owned by ConfigUSA or its licensors and may not be reused without permission."] },
  { heading: "Recruitment Disclaimer", paras: ["ConfigUSA facilitates connections between candidates and employers. We do not guarantee placement, hiring outcomes, or continued employment."] },
  { heading: "Job Listings", paras: ["Job postings are provided for informational purposes and may change or close at any time. We strive for accuracy but do not warrant completeness."] },
  { heading: "Candidate Information", paras: ["By submitting your information, you confirm it is accurate and that you consent to us sharing relevant details with prospective employers."] },
  { heading: "Client Responsibilities", paras: ["Clients are responsible for providing accurate requirements and for their own hiring decisions and employment practices."] },
  { heading: "Payment Terms", paras: ["Fees for staffing and recruitment services are governed by the separate agreement executed between ConfigUSA and the client."] },
  { heading: "Confidentiality", paras: ["Both parties agree to protect confidential information shared during engagements and to use it only for its intended purpose."] },
  { heading: "Limitation of Liability", paras: ["To the extent permitted by law, ConfigUSA is not liable for indirect or consequential damages arising from use of the site or services."] },
  { heading: "Governing Law", paras: ["These terms are governed by the laws of the jurisdictions in which ConfigUSA operates, without regard to conflict-of-law principles."] },
  { heading: "Contact Details", paras: ["Questions about these terms? Reach us at info@configusa.com."] },
];
