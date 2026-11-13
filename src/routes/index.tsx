import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/home/HomeHero";
import { TechTicker } from "@/components/TechTicker";
import { HomeWhatWeDo } from "@/components/home/HomeWhatWeDo";
import { HomeCoreCapabilities } from "@/components/home/HomeCoreCapabilities";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeHowWeWork } from "@/components/home/HomeHowWeWork";
import { HomeEvidence } from "@/components/home/HomeEvidence";
import { HomeCaseStudy } from "@/components/home/HomeCaseStudy";
import { HomeInsights } from "@/components/home/HomeInsights";
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

      {/* 1.5 Client Logos Ticker */}
      <TechTicker title="TRUSTED BY CLIENTS ACROSS DIVERSE INDUSTRIES" />

      {/* 2. What We Do */}
      <HomeWhatWeDo />

      {/* 3. Our Core Capabilities (4 Cards) */}
      <HomeCoreCapabilities />

      {/* 4. Why ConfigUSA */}
      <HomeWhyUs />

      {/* 5. How We Work (5-Step Flow) */}
      <HomeHowWeWork />

      {/* 6. Evidence of Delivery (4 Stat Tiles) */}
      <HomeEvidence />

      {/* 7. Featured Case Study (3-Column Split Card) */}
      <HomeCaseStudy />

      {/* 8. Insights (3 Cards) */}
      <HomeInsights />

      {/* 9. Final CTA Strip */}
      <HomeFinalCTA />
    </div>
  );
}
