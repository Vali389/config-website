import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeWhatWeDo } from "@/components/home/HomeWhatWeDo";
import { HomeEcosystem } from "@/components/home/HomeEcosystem";
import { HomeCoreCapabilities } from "@/components/home/HomeCoreCapabilities";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeHowWeWork } from "@/components/home/HomeHowWeWork";
import { HomeEvidence } from "@/components/home/HomeEvidence";
import { HomeCaseStudy } from "@/components/home/HomeCaseStudy";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ConfigUSA — Technology. Talent. Transformation.",
      },
      {
        name: "description",
        content:
          "ConfigUSA helps organisations access the technology expertise, engineering capability and specialist workforce needed to deliver critical business initiatives. From targeted talent solutions to dedicated delivery teams, we help clients move from requirement to execution with clarity and speed.",
      },
      {
        property: "og:title",
        content: "ConfigUSA — Technology. Talent. Transformation.",
      },
      {
        property: "og:description",
        content:
          "The right expertise to solve complex technology and workforce challenges. Practical technology execution, specialist workforce solutions and scalable delivery models.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. What We Do */}
      <HomeWhatWeDo />

      {/* 3. Enterprise Platform Ecosystem */}
      <HomeEcosystem />

      {/* 4. Our Core Capabilities (3 Primary Offerings) */}
      <HomeCoreCapabilities />

      {/* 5. Why ConfigUSA + Direct Links to Engagement Models & Global Delivery */}
      <HomeWhyUs />

      {/* 6. How We Work (5-Step Stepper Flow) */}
      <HomeHowWeWork />

      {/* 7. Evidence of Delivery (4 Stat Tiles with Serif Numerals) */}
      <HomeEvidence />

      {/* 8. Featured Case Study (4-Pillar Delivery Flow) */}
      <HomeCaseStudy />

      {/* 9. Insights & Perspectives */}
      <HomeInsights />

      {/* 10. Executive Client Testimonials */}
      <HomeTestimonials />

      {/* 11. Final CTA Strip */}
      <HomeFinalCTA />
    </div>
  );
}
