"use client";

/**
 * Services-02 adapted for CHN: scroll-pinned highlight (not hover).
 * Pin section while scrolling through each discipline, then release.
 */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  heading: string;
  descp: string;
  image: string;
  href?: string;
}

export interface ServicesProps {
  data?: ServiceItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const servicesData: ServiceItem[] = [];

function Services({
  data = servicesData,
  eyebrow = "Services",
  title = "What we do",
  description = "A seamless suite of disciplines.",
  ctaLabel = "View all services",
  ctaHref = "/services",
}: ServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const active = data[activeIndex] ?? data[0];
  const count = Math.max(data.length, 1);

  useEffect(() => {
    if (typeof window === "undefined" || !data.length) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const pinEl = pinRef.current;
    const section = sectionRef.current;
    if (!pinEl || !section) return;

    const scrollPer = Math.round(window.innerHeight * 0.55);
    const totalScroll = scrollPer * count;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalScroll}`,
      pin: pinEl,
      pinSpacing: true,
      scrub: 0.35,
      anticipatePin: 1,
      onUpdate: (self) => {
        const idx = Math.min(count - 1, Math.floor(self.progress * count));
        setActiveIndex((prev) => (prev === idx ? prev : idx));
      },
    });

    return () => {
      st.kill();
    };
  }, [count, data.length]);

  return (
    <section
      ref={sectionRef}
      data-shadcn-space="services-02"
      id="services"
      className="bg-background"
    >
      <div ref={pinRef} className="bg-background">
        <div className="container-site py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-10 sm:gap-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="flex max-w-2xl flex-col gap-3">
                <Badge
                  variant="outline"
                  className="h-auto border-border px-3 py-1 text-xs font-normal uppercase tracking-[0.2em] text-stone"
                >
                  {eyebrow}
                </Badge>
                <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-5xl">
                  {title}
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg">{description}</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone">
                  Scroll to explore · {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </p>
              </div>
              <Button
                asChild
                className="group flex h-auto w-fit items-center justify-between gap-2 rounded-full border-0 bg-primary p-1 ps-5 font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Link href={ctaHref}>
                  <span className="text-sm font-medium">{ctaLabel}</span>
                  <span className="rounded-full bg-background p-2 transition-transform duration-300 group-hover:rotate-45">
                    <Icon
                      className="text-foreground"
                      icon="lucide:arrow-up-right"
                      width={16}
                      height={16}
                    />
                  </span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="img-frame relative aspect-[4/3] w-full overflow-hidden bg-elevated lg:col-span-5 lg:aspect-auto lg:min-h-[26rem]">
                {active?.image && (
                  <Image
                    key={active.image + activeIndex}
                    src={active.image}
                    alt={active.heading}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={activeIndex === 0}
                  />
                )}
              </div>

              <div className="flex w-full flex-col lg:col-span-7">
                {data.map((value, index) => {
                  const href = value.href || ctaHref;
                  return (
                    <Link
                      key={value.heading}
                      href={href}
                      className={cn(
                        "group relative flex flex-col items-start justify-between gap-2 border-t border-border py-5 transition-colors xl:flex-row xl:items-center xl:gap-8 xl:py-6 last:border-b",
                        activeIndex === index
                          ? "border-cream/30 bg-elevated/40"
                          : "opacity-55 hover:opacity-90",
                      )}
                    >
                      <h3
                        className={cn(
                          "max-w-sm py-1 font-display text-xl font-normal tracking-tight transition-colors md:text-2xl",
                          activeIndex === index ? "text-cream" : "text-foreground",
                        )}
                      >
                        <span className="mr-3 font-sans text-xs text-stone tabular-nums md:text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {value.heading}
                      </h3>
                      {activeIndex === index && (
                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {value.descp}
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
