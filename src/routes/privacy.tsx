import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ConfigUSA" },
      { name: "description", content: "How ConfigUSA collects, uses, and protects your personal information." },
    ],
  }),
  component: () => (
    <LegalPage
      kind="Privacy Policy"
      updated="July 2026"
      intro="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have."
      sections={SECTIONS}
    />
  ),
});

const SECTIONS: LegalSection[] = [
  { heading: "Information We Collect", paras: ["We collect information you provide directly — such as your name, contact details, resume, work history, and hiring requirements — as well as data collected automatically when you use our website."] },
  { heading: "How We Use Information", paras: ["We use your information to match candidates with opportunities, deliver staffing services to clients, respond to inquiries, improve our services, and communicate relevant updates."] },
  { heading: "Cookies & Tracking Technologies", paras: ["We use cookies and similar technologies to operate the site, remember preferences, and understand usage. You can control cookies through your browser settings."] },
  { heading: "Data Security", paras: ["We apply appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse."] },
  { heading: "Third-Party Services", paras: ["We may use trusted third-party providers (for analytics, hosting, or communications) who process data only as instructed and under confidentiality obligations."] },
  { heading: "International Data Transfers", paras: ["As a global organization, we may transfer and process information in countries where we operate, applying safeguards consistent with applicable law."] },
  { heading: "Your Rights", paras: ["Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information. Contact us to exercise these rights."] },
  { heading: "Data Retention", paras: ["We retain personal information only as long as necessary to fulfill the purposes described here or as required by law."] },
  { heading: "Children's Privacy", paras: ["Our services are intended for professionals and are not directed to individuals under the age of 16. We do not knowingly collect their data."] },
  { heading: "Contact Information", paras: ["For privacy questions or requests, contact us at info@configusa.com."] },
  { heading: "Policy Updates", paras: ["We may update this policy periodically. Material changes will be reflected by an updated date at the top of this page."] },
];
