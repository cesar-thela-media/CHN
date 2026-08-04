"use client";

/**
 * Flagship homepage, Shadcnspace blocks adapted for CHN.
 * Copy: high-end, visual-first, minimal.
 */
import AboutUs from "@/components/shadcn-space/blocks/about-us-03/about-us";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import { HomeHeroBlock } from "@/components/site/home/hero-block";
import { AboutStoryBlock } from "@/components/site/home/about-story-block";
import { InsightsBlock } from "@/components/site/home/insights-block";
import { CtaBlock } from "@/components/site/home/cta-block";
import { FadeIn } from "@/components/site/fade-in";
import { services, site } from "@/lib/site";
import { chnCopy, sourceServices } from "@/lib/chn-copy";

const trustData = [
  { count: "$0", title: "Financial commitment from you" },
  { count: site.builderBonus, title: "Bonus incentive for clients" },
  { count: "1", title: "Custom home journey" },
];

const servicesData = services.map((s) => ({
  heading: s.title,
  descp: sourceServices.find((source) => source.slug === s.slug)?.description ?? s.description,
  image: s.image,
  href: `/services/${s.slug}`,
}));

export function HomePage() {
  return (
    <>
      <HomeHeroBlock />

      {/* Source order: experience before value proposition. */}
      <FadeIn className="border-y border-border bg-elevated/30">
        <div className="container-site py-16 md:py-20">
          <p data-fade className="eyebrow">
            {chnCopy.experience.title}
          </p>
          <h2
            data-fade
            className="display-lg mt-4 max-w-2xl text-3xl text-foreground md:text-5xl"
          >
            A home that reflects your individuality and aspirations.
          </h2>
          <div data-fade className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {chnCopy.experience.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </FadeIn>

      <AboutUs
        aboutusData={trustData}
        eyebrow=""
        headline={chnCopy.value.eyebrow}
        blurb={chnCopy.value.paragraphs.join(" ")}
        imageSrc="/images/value-keys.jpg"
      />

      <Services
        data={servicesData}
        eyebrow="Services"
        title={chnCopy.services.title}
        description={chnCopy.services.subtitle}
        ctaLabel="View all services"
        ctaHref="/services"
      />

      <AboutStoryBlock />
      <InsightsBlock />
      <CtaBlock />
    </>
  );
}
