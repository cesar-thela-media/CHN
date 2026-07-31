"use client";

/**
 * Flagship homepage, Shadcnspace blocks adapted for CHN.
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
  { count: "$0", title: "Cost to you for our white-glove service" },
  {
    count: site.builderBonus,
    title: "Builder bonus pre-negotiated exclusively for our clients",
  },
  { count: "6", title: "Disciplines in one coordinated network" },
];

const servicesData = services.map((s) => ({
  heading: s.title,
  descp: s.description,
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
        blurb="When you use our white-glove service, we work for you at no cost. Network partners cover our expenses, so you get the ultimate home-building experience with no financial commitment, plus a 0.5% builder bonus exclusively for our clients."
        imageSrc="/images/value-keys.jpg"
      />

      <AboutStoryBlock />

      <Services
        data={servicesData}
        eyebrow="Services"
        title="One network. Every critical discipline."
        description="A seamless experience tailored to you, from land through finishing touches."
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
            Whether you are a local resident or relocating from another state.
          </h2>
          <p data-fade className="body-lg mt-5 max-w-xl">
            We are your trusted partner in crafting a home that reflects your individuality,
            with complimentary white-glove service from concept to completion.
          </p>
          <Link
            data-fade
            href="/buyers"
            className="mt-8 inline-flex text-sm text-foreground underline underline-offset-4"
          >
            Learn about the buyer journey
          </Link>
        </div>
      </FadeIn>

      <InsightsBlock />

      <CtaBlock />
    </>
  );
}
