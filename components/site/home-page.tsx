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
}));

export function HomePage() {
 return (
 <>
 <HomeHeroBlock />

 <AboutUs
 aboutusData={trustData}
 eyebrow="Unlocking additional value"
 headline="At no cost to you."
 blurb="We work for you at no cost. Network partners fund our complimentary white-glove service so you receive dedicated oversight, and an exclusive 0.5% builder bonus, without paying Custom Home Network."
 imageSrc="/images/unlockvalue.jpg"
 />

 <AboutStoryBlock />

 <Services
 data={servicesData}
 eyebrow="Services"
 title="One network. Every critical discipline."
 description="From land through finishing touches, vetted specialists, coordinated so nothing important falls between firms."
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
 Homeowners get a single calm path through discovery, land, design, build, and
 move-in, our complimentary white-glove service from concept to completion.
 </p>
 <a
 data-fade
 href="/buyers"
 className="mt-8 inline-flex text-sm text-foreground underline underline-offset-4"
 >
 Learn about the buyer journey
 </a>
 </div>
 </FadeIn>

 <InsightsBlock />

 <CtaBlock />
 </>
 );
}
