"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowButton } from "@/components/site/arrow-button";
import { ensureGsap } from "@/lib/animations";

export function Hero() {
 const root = useRef<HTMLElement>(null);

 useGSAP(
 () => {
 ensureGsap();
 const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const q = gsap.utils.selector(root);
 const nodes = q("[data-hero]");
 if (reduce) {
 gsap.set(nodes, { opacity: 1, y: 0 });
 return;
 }
 gsap.fromTo(
 nodes,
 { opacity: 0, y: 32 },
 {
 opacity: 1,
 y: 0,
 duration: 1.05,
 stagger: 0.11,
 ease: "power3.out",
 delay: 0.08,
 clearProps: "transform",
 },
 );
 },
 { scope: root },
 );

 return (
 <section ref={root} className="relative min-h-[100svh] overflow-hidden">
 <div className="absolute inset-0">
 <Image
 src="/images/pinnaclebuilding.jpeg"
 alt="Architectural dusk view of a luxury custom residence"
 fill
 priority
 className="object-cover object-[center_30%] scale-105"
 sizes="100vw"
 />
 <div className="gradient-veil absolute inset-0 hidden md:block" />
 <div className="gradient-veil-mobile absolute inset-0 md:hidden" />
 <div className="noise absolute inset-0 opacity-60 mix-blend-overlay" />
 </div>

 <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
 <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
 <div className="lg:col-span-8">
 <div data-hero className="rule-label mb-7 max-w-md">
 <span className="eyebrow">White-glove custom homes</span>
 </div>

 <h1
 data-hero
 className="display-xl text-[2.75rem] text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]"
 >
 Your custom home{" "}
 <em className="not-italic text-cream/90">journey</em>
 <br className="hidden sm:block" /> starts here
 </h1>

 <p
 data-hero
 className="mt-7 max-w-lg body-lg text-foreground/75"
 >
 A complimentary network of vetted Realtors, architects, builders, and finance
 partners, so the path from vision to keys feels considered, calm, and entirely yours.
 </p>

 <div data-hero className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
 <ArrowButton href="#contact">Begin your journey</ArrowButton>
 <a
 href="#services"
 className="inline-flex h-12 items-center justify-center px-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
 >
 View the suite of services
 </a>
 </div>
 </div>

 <div
 data-hero
 className="hidden border-l border-line/80 pl-8 lg:col-span-4 lg:block"
 >
 <dl className="space-y-8">
 {[
 { k: "Client cost", v: "Complimentary" },
 { k: "Builder incentive", v: "0.5% bonus" },
 { k: "Coverage", v: "Concept → completion" },
 ].map((item) => (
 <div key={item.k}>
 <dt className="eyebrow text-stone/80">{item.k}</dt>
 <dd className="mt-2 font-display text-2xl tracking-tight text-foreground">
 {item.v}
 </dd>
 </div>
 ))}
 </dl>
 </div>
 </div>

 <div
 data-hero
 className="mt-14 flex items-center gap-6 border-t border-line/60 pt-6 text-[11px] uppercase tracking-[0.22em] text-stone md:mt-20"
 >
 <span>Scroll</span>
 <span className="h-px flex-1 max-w-24 bg-line" />
 <span className="hidden sm:inline">Land · Design · Build · Finish</span>
 </div>
 </div>
 </section>
 );
}
