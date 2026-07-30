import type { Metadata } from "next";
import Image from "next/image";
import {
 Building2,
 DraftingCompass,
 Hammer,
 Landmark,
 Palette,
 Home,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PartnerForm } from "@/components/site/partner-form";
import { CtaBlock } from "@/components/site/home/cta-block";
import { FadeIn } from "@/components/site/fade-in";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
 title: "For Partners",
 description:
 "Join the Custom Home Network, Realtors, architects, builders, finance, title, and design professionals serving intentional custom-home clients.",
};

const partnerTypes = [
 {
 title: "Realtors",
 description:
 "Introduce clients who need land or a path to build, not only a resale transaction.",
 icon: Home,
 },
 {
 title: "Architects",
 description:
 "Work with prepared owners who value design process and long-term craft.",
 icon: DraftingCompass,
 },
 {
 title: "Builders",
 description:
 "High-intent custom projects with clear coordination and fair economics.",
 icon: Hammer,
 },
 {
 title: "Finance & Title",
 description:
 "Complex capital and closing paths handled with calm specialists.",
 icon: Landmark,
 },
 {
 title: "Interior Design",
 description:
 "Finish work that feels collected, aligned to architecture from day one.",
 icon: Palette,
 },
 {
 title: "Land & Development",
 description:
 "Sites and due diligence for owners who refuse a generic lot.",
 icon: Building2,
 },
];

const whyJoin = [
 {
 title: "Aligned clients",
 body: "People who intend to build carefully, not tire-kickers shopping a free bid.",
 },
 {
 title: "Clean handoffs",
 body: "We keep context alive so partners inherit a clear brief, not a cold start.",
 },
 {
 title: "Shared standard",
 body: "Craft, communication, and calm execution, not volume marketing theatrics.",
 },
];

export default function PartnersPage() {
 return (
 <>
 <PageHero
 blockId="hero-02"
 eyebrow="For partners"
 title="Build with clients who value craft."
 description="Join a curated network of Realtors, architects, builders, finance, title, and design professionals serving high-intent custom home clients."
 image="/images/custombuilding.jpg"
 primaryCta={{ href: "#apply", label: "Apply to join" }}
 secondaryCta={{ href: "/buyers", label: "See buyer experience" }}
 />

 <section data-shadcn-space="feature-01" className="border-b border-border py-16 md:py-24">
 <div className="container-site">
 <FadeIn>
 <p data-fade className="eyebrow">
 Why join
 </p>
 <h2 data-fade className="display-lg mt-4 max-w-2xl text-3xl text-foreground md:text-5xl">
 Serious work. Serious clients. Less chaos between firms.
 </h2>
 </FadeIn>
 <div className="mt-12 grid gap-6 md:grid-cols-3">
 {whyJoin.map((item) => (
 <div
 key={item.title}
 className="border border-border bg-card/30 p-6 md:p-8"
 >
 <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 {item.body}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section
 data-shadcn-space="team-05"
 className="border-b border-border bg-elevated/15 py-16 md:py-24"
 >
 <div className="container-site">
 <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
 <div>
 <Badge
 variant="outline"
 className="h-auto border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone"
 >
 Network roles
 </Badge>
 <h2 className="mt-4 font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl">
 Partner types we welcome
 </h2>
 </div>
 <p className="max-w-md text-sm text-muted-foreground md:text-base">
 Apply if you deliver custom-home work with craftsmanship and clear communication.
 </p>
 </div>
 <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
 {partnerTypes.map((p) => (
 <div
 key={p.title}
 className="group border border-border bg-card/40 p-6 transition-colors hover:border-line hover:bg-card/70"
 >
 <p.icon className="h-7 w-7 text-cream" strokeWidth={1.25} />
 <h3 className="mt-5 font-display text-xl text-foreground">{p.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 {p.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="border-b border-border py-16 md:py-20">
 <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center">
 <div className="img-frame relative aspect-[5/4] overflow-hidden lg:col-span-5">
 <Image
 src="/images/unlockvalue.jpg"
 alt="Collaborative custom home planning"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 40vw"
 />
 </div>
 <div className="lg:col-span-6 lg:col-start-7">
 <p className="eyebrow">How it works</p>
 <h2 className="display-lg mt-4 text-3xl text-foreground md:text-4xl">
 Introduced when the fit is real.
 </h2>
 <ol className="mt-8 space-y-6">
 {[
 "Apply with your specialty, markets, and standard of work.",
 "We review alignment with network quality and capacity.",
 "When a buyer journey needs your discipline, we introduce you with full context.",
 ].map((step, i) => (
 <li
 key={step}
 className="flex gap-4 border-t border-border pt-6 first:border-0 first:pt-0"
 >
 <span className="font-mono text-xs text-stone">
 {String(i + 1).padStart(2, "0")}
 </span>
 <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
 {step}
 </p>
 </li>
 ))}
 </ol>
 </div>
 </div>
 </section>

 <section
 id="apply"
 data-shadcn-space="contact-01"
 className="border-b border-border bg-elevated/25 py-16 md:py-24"
 >
 <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
 <div>
 <p className="eyebrow">Partner application</p>
 <h2 className="display-lg mt-4 text-3xl text-foreground md:text-4xl">
 Tell us who you are.
 </h2>
 <p className="body-lg mt-5">
 Share your practice and markets. We review every application carefully and respond
 when there is a fit.
 </p>
 </div>
 <div className="rounded-sm border border-border bg-card p-6 md:p-8">
 <PartnerForm />
 </div>
 </div>
 </section>

 <CtaBlock />
 </>
 );
}
