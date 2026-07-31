"use client";

/**
 * Services scroll-PIN (GSAP ScrollTrigger).
 * Section sticks full-viewport; further scroll advances 01→06, then releases.
 */
import { useLayoutEffect, useRef, useState } from "react";
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

gsap.registerPlugin(ScrollTrigger);

function Services({
  data = servicesData,
  eyebrow = "Services",
  title = "What we do",
  description = "A seamless suite of disciplines.",
  ctaLabel = "View all services",
  ctaHref = "/services",
}: ServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const count = Math.max(data.length, 1);

  useLayoutEffect(() => {
    if (!data.length || typeof window === "undefined") return;

    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const setIndex = (idx: number) => {
      const next = Math.max(0, Math.min(count - 1, idx));
      if (activeIndexRef.current === next) return;
      activeIndexRef.current = next;
      setActiveIndex(next);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isMobile, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduce || reduceMotion) {
          ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            onUpdate: (self) => {
              setIndex(Math.min(count - 1, Math.floor(self.progress * count)));
            },
          });
          return;
        }

        const vh = window.innerHeight;
        // ~1 viewport of scroll per discipline so the pin is unmistakable
        const scrollPerStep = Math.round(vh * (isMobile ? 0.7 : 1.05));
        const endDistance = scrollPerStep * count;

        ScrollTrigger.create({
          id: "chn-services-pin",
          trigger: section,
          pin: pin,
          pinSpacing: true,
          pinType: "fixed",
          start: "top top",
          end: `+=${endDistance}`,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              count - 1,
              Math.floor(self.progress * count + 0.0001),
            );
            setIndex(idx);
          },
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      },
    );

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
      mm.revert();
    };
  }, [count, data]);

  return (
    <section
      ref={sectionRef}
      data-shadcn-space="services-02"
      id="services"
      className="relative bg-background"
    >
      <div
        ref={pinRef}
        className="flex min-h-[100svh] flex-col justify-center bg-background"
        data-services-pin
      >
        <div className="container-site py-14 sm:py-16 lg:py-18">
          <div className="flex flex-col gap-8 sm:gap-10">
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
                <p
                  className="text-[11px] uppercase tracking-[0.22em] text-stone"
                  data-services-step
                >
                  Scroll to explore · {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </p>
              </div>
              <Button
                asChild
                className="group flex h-auto w-fit items-center justify-between gap-2 rounded-full border-0 bg-primary p-1 ps-5 font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Link href={ctaHref} prefetch>
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
              <div className="img-frame relative aspect-[4/3] w-full overflow-hidden bg-elevated lg:col-span-5 lg:aspect-auto lg:min-h-[24rem] lg:max-h-[min(28rem,50svh)]">
                {data.map((item, index) => (
                  <div
                    key={item.image + item.heading}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-out",
                      activeIndex === index ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden={activeIndex !== index}
                  >
                    <Image
                      src={item.image}
                      alt={item.heading}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              <div className="flex w-full flex-col lg:col-span-7" data-services-list>
                {data.map((value, index) => {
                  const href = value.href || ctaHref;
                  const isActive = activeIndex === index;
                  return (
                    <Link
                      key={value.heading}
                      href={href}
                      prefetch
                      data-service-index={index}
                      data-active={isActive ? "true" : "false"}
                      className={cn(
                        "relative flex flex-col items-start justify-between gap-2 border-t border-border py-4 transition-colors duration-300 xl:flex-row xl:items-center xl:gap-8 xl:py-5 last:border-b",
                        isActive
                          ? "border-cream/40 bg-elevated/50"
                          : "opacity-45",
                      )}
                    >
                      <h3
                        className={cn(
                          "max-w-sm py-1 font-display text-xl font-normal tracking-tight transition-colors duration-300 md:text-2xl",
                          isActive ? "text-cream" : "text-foreground",
                        )}
                      >
                        <span className="mr-3 font-sans text-xs text-stone tabular-nums md:text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {value.heading}
                      </h3>
                      <p
                        className={cn(
                          "flex-1 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300 md:text-base",
                          isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        {value.descp}
                      </p>
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
