"use client";

/**
 * Flagship homepage, Shadcnspace blocks adapted for CHN.
 * Copy: high-end, visual-first, minimal.
 */
import AboutUs from "@/components/shadcn-space/blocks/about-us-03/about-us";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import { HomeHeroBlock } from "@/components/site/home/hero-block";
import { AboutStoryBlock } from "@/components/site/home/about-story-block";
import { ProcessBlock } from "@/components/site/home/process-block";
import { InsightsBlock } from "@/components/site/home/insights-block";
import { CtaBlock } from "@/components/site/home/cta-block";
import { FadeIn } from "@/components/site/fade-in";
import Link from "next/link";
import { services, site } from "@/lib/site";

const trustData = [
  { count: "$0", title: "To you for white-glove" },
  { count: site.builderBonus, title: "Builder bonus for clients" },
  { count: "6", title: "Disciplines, one network" },
];

/** One short line per service on the homepage pin. */
const serviceLines: Record<string, string> = {
  "land-acquisition": "The right site, evaluated with a builder's eye.",
  "architectural-design": "Plans shaped around how you actually live.",
  "custom-building": "Vetted craft. Clear process. Calm builds.",
  "finance-title": "Capital and closing, made plain.",
  "interior-design": "Finishes that belong to the architecture.",
  "project-management": "One through-line from concept to keys.",
};

const servicesData = services.map((s) => ({
  heading: s.title,
  descp: serviceLines[s.slug] ?? s.description,
  image: s.image,
  href: `/services/${s.slug}`,
}));

export function HomePage() {
  return (
    <>
      <HomeHeroBlock />

      <AboutUs
        aboutusData={trustData}
        eyebrow="Unlocking additional value"
        headline="At no cost to you."
        blurb="Partner-funded white-glove, plus a 0.5% builder bonus, with nothing owed to us."
        imageSrc="/images/value-keys.jpg"
      />

      <AboutStoryBlock />

      <Services
        data={servicesData}
        eyebrow="Services"
        title="One network. Every critical discipline."
        description="Land to finish, coordinated."
        ctaLabel="View all services"
        ctaHref="/services"
      />

      <ProcessBlock />

      <FadeIn className="border-y border-border bg-elevated/30">
        <div className="container-site py-16 md:py-20">
          <p data-fade className="eyebrow">
            For buyers
          </p>
          <h2
            data-fade
            className="display-lg mt-4 max-w-2xl text-3xl text-foreground md:text-5xl"
          >
            Local or relocating.
          </h2>
          <p data-fade className="body-lg mt-5 max-w-xl">
            Complimentary white-glove from first conversation to keys.
          </p>
          <Link
            data-fade
            href="/buyers"
            className="mt-8 inline-flex text-sm text-foreground underline underline-offset-4"
          >
            Buyer journey
          </Link>
        </div>
      </FadeIn>

      <InsightsBlock />

      <CtaBlock />
    </>
  );
}
