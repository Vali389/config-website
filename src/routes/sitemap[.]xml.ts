import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://config-website-ashen.vercel.app";

interface Entry {
  path: string;
  changefreq?: string;
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/services/staffing", changefreq: "monthly", priority: "0.8" },
          { path: "/services/software", changefreq: "monthly", priority: "0.8" },
          { path: "/services/cloud", changefreq: "monthly", priority: "0.8" },
          { path: "/services/ai", changefreq: "monthly", priority: "0.9" },
          { path: "/services/forward-deployed-engineering", changefreq: "monthly", priority: "0.9" },
          { path: "/services/palantir", changefreq: "monthly", priority: "0.8" },
          { path: "/services/enterprise-applications", changefreq: "monthly", priority: "0.8" },
          { path: "/services/assessment", changefreq: "monthly", priority: "0.7" },
          { path: "/services/managed-delivery", changefreq: "monthly", priority: "0.8" },
          { path: "/gcc", changefreq: "monthly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/case-studies", changefreq: "weekly", priority: "0.9" },
          { path: "/resources", changefreq: "weekly", priority: "0.8" },
          { path: "/resources/enterprise-ai-from-concept-to-production", changefreq: "monthly", priority: "0.7" },
          { path: "/resources/global-capability-centre-evolution", changefreq: "monthly", priority: "0.7" },
          { path: "/resources/forward-deployed-engineering-bridge", changefreq: "monthly", priority: "0.7" },
          { path: "/resources/navigating-enterprise-talent-acquisition", changefreq: "monthly", priority: "0.7" },
          { path: "/careers", changefreq: "weekly", priority: "0.8" },
          { path: "/careers/job/principal-ai-engineer", changefreq: "weekly", priority: "0.7" },
          { path: "/careers/job/lead-cloud-solutions-architect", changefreq: "weekly", priority: "0.7" },
          { path: "/careers/job/senior-forward-deployed-engineer", changefreq: "weekly", priority: "0.7" },
          { path: "/careers/job/palantir-foundry-specialist", changefreq: "weekly", priority: "0.7" },
          { path: "/careers/job/enterprise-systems-director-gcc", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/request-talent", changefreq: "monthly", priority: "0.7" },
          { path: "/submit-resume", changefreq: "monthly", priority: "0.7" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
