import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AboutUs from "@/components/shadcn-space/blocks/about-us-03/about-us";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import { PageHero } from "@/components/site/page-hero";
import { CtaBlock } from "@/components/site/home/cta-block";
import { FadeIn } from "@/components/site/fade-in";
import { services } from "@/lib/site";

export const metadata: Metadata = {
 title: "Services",
 description:
 "Land, architecture, custom building, finance & title, interiors, and project management, one coordinated Custom Home Network.",
};

const overviewStats = [
 { count: "6", title: "Disciplines in one network" },
 { count: "$0", title: "Cost to you for our coordination" },
 { count: "1", title: "Coherent path from concept to keys" },
];

export default function ServicesPage() {
 const interactive = services.map((s) => ({
 heading: s.title,
 descp: s.description,
 image: s.image,
 }));

 return (
 <>
 <PageHero
 blockId="hero-02"
 eyebrow="Services"
 title="Six disciplines. One coordinated experience."
 description="From land through finishing, vetted specialists orchestrated so nothing important falls between firms. Complimentary white-glove guidance for you."
 image="/images/pinnaclebuilding.jpeg"
 primaryCta={{ href: "/contact", label: "Begin your journey" }}
 secondaryCta={{ href: "/buyers", label: "How it works for buyers" }}
 />

 <AboutUs
 aboutusData={overviewStats}
 eyebrow="The suite"
 headline="Everything required. Nothing generic."
 blurb="Each pillar is staffed by partners who do custom residential work with craft and calm, introduced when your journey needs them."
 imageSrc="/images/custombuilding.jpg"
 />

 {/* Editorial numbered index */}
 <section
 data-shadcn-space="feature-01"
 className="border-b border-border py-16 md:py-24"
 >
 <div className="container-site">
 <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
 <div className="max-w-xl">
 <p data-fade className="eyebrow">
 Explore
 </p>
 <h2 data-fade className="display-lg mt-4 text-3xl text-foreground md:text-5xl">
 Choose a discipline. Go deep.
 </h2>
 </div>
 <p data-fade className="max-w-sm text-sm text-muted-foreground">
 Each service has its own page, problem, what we do, who joins the network, and next steps.
 </p>
 </FadeIn>

 <div className="mt-14 border-t border-border">
 {services.map((s, i) => (
 <Link
 key={s.slug}
 href={`/services/${s.slug}`}
 id={s.slug}
 className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-elevated/40 md:grid-cols-12 md:items-center md:gap-6 md:py-10"
 >
 <span className="font-display text-2xl text-stone/60 tabular-nums md:col-span-1">
 {String(i + 1).padStart(2, "0")}
 </span>
 <div className="md:col-span-4">
 <h3 className="font-display text-xl tracking-tight text-foreground md:text-2xl">
 {s.title}
 </h3>
 </div>
 <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">
 {s.description}
 </p>
 <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone transition-colors group-hover:text-foreground md:col-span-2 md:justify-end">
 Details
 <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
 </span>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Interactive preview, services-02 */}
 <Services
 data={interactive}
 eyebrow="Interactive"
 title="Hover a service to preview."
 description="Same six pillars as the network, land, design, build, finance, interiors, and project management."
 ctaLabel="Talk with us"
 ctaHref="/contact"
 />

 {/* Image moments */}
 <section className="border-y border-border py-16 md:py-20">
 <div className="container-site grid gap-4 md:grid-cols-12 md:gap-5">
 <div className="img-frame relative aspect-[16/11] md:col-span-7 md:aspect-[5/4]">
 <Image
 src="/images/luxurypool.jpg"
 alt="Finished luxury residence exterior"
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 58vw"
 />
 </div>
 <div className="flex flex-col gap-4 md:col-span-5">
 <div className="img-frame relative aspect-[4/3] flex-1">
 <Image
 src="/images/unlockvalue.jpg"
 alt="Interior architecture moment"
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 40vw"
 />
 </div>
 <p className="border border-border bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
 <span className="text-foreground">Complimentary coordination.</span> Partners fund
 our white-glove role so you can focus on decisions that matter.
 </p>
 </div>
 </div>
 </section>

 <CtaBlock />
 </>
 );
}
