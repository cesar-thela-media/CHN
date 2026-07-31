"use client";

/**
 * Homepage services: FULL SECTION pins (GSAP ScrollTrigger), then scroll
 * advances image + row highlight 01→06, then unpins into Process.
 */
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  const count = Math.max(data.length, 1);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !data.length) return;

      const setIndex = (idx: number) => {
        const next = Math.max(0, Math.min(count - 1, idx));
        if (activeIndexRef.current === next) return;
        activeIndexRef.current = next;
        setActiveIndex(next);
      };

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          onUpdate: (self) => {
            setIndex(Math.min(count - 1, Math.floor(self.progress * count)));
          },
        });
        return;
      }

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      // Plenty of scroll distance while pinned so the "stuck" feel is obvious
      const scrollPerStep = () =>
        Math.round(window.innerHeight * (isMobile ? 0.85 : 1.15));

      // Pin THE ENTIRE SECTION (full block freezes on screen)
      ScrollTrigger.create({
        id: "chn-services-full-pin",
        trigger: section,
        pin: true,
        pinSpacing: true,
        pinType: "fixed",
        // When the section's top reaches the top of the viewport → lock
        start: "top top",
        // Stay pinned for N viewports of scroll (one per discipline)
        end: () => `+=${scrollPerStep() * count}`,
        scrub: 0.35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Map scroll progress inside the pin to 0..5
          const raw = self.progress * count;
          const idx = Math.min(count - 1, Math.floor(raw));
          setIndex(idx);
        },
        onEnter: () => section.setAttribute("data-pinned", "true"),
        onEnterBack: () => section.setAttribute("data-pinned", "true"),
        onLeave: () => section.setAttribute("data-pinned", "false"),
        onLeaveBack: () => section.setAttribute("data-pinned", "false"),
      });

      // Ensure pin distances recalculate after images/fonts
      ScrollTrigger.refresh();
      const t = window.setTimeout(() => ScrollTrigger.refresh(), 300);
      return () => window.clearTimeout(t);
    },
    { scope: sectionRef, dependencies: [count, data] },
  );

  const progress = ((activeIndex + 1) / count) * 100;

  return (
    <section
      ref={sectionRef}
      data-shadcn-space="services-02"
      id="services"
      data-pinned="false"
      data-services-pin
      /* Full viewport height so the WHOLE section is what sticks */
      className="relative flex h-[100svh] max-h-[100svh] flex-col justify-center overflow-hidden bg-background"
    >
      {/* Progress rail — proves pin is active while scrolling */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 h-[2px] bg-cream/90 transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      <div className="container-site flex min-h-0 flex-1 flex-col justify-center py-10 md:py-12">
        <div className="flex min-h-0 flex-col gap-6 md:gap-8">
          <div className="flex shrink-0 flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="flex max-w-2xl flex-col gap-2">
              <Badge
                variant="outline"
                className="h-auto border-border px-3 py-1 text-xs font-normal uppercase tracking-[0.2em] text-stone"
              >
                {eyebrow}
              </Badge>
              <h2 className="font-display text-2xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
              <p
                className="text-[11px] uppercase tracking-[0.22em] text-stone"
                data-services-step
              >
                Scroll · {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </p>
            </div>
            <Button
              asChild
              className="group flex h-auto w-fit shrink-0 items-center justify-between gap-2 rounded-full border-0 bg-primary p-1 ps-5 font-medium text-primary-foreground hover:bg-primary/90"
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

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 lg:items-stretch">
            {/* Image panel */}
            <div className="img-frame relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-elevated sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:min-h-0 lg:h-full lg:max-h-[min(420px,48svh)]">
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

            {/* Rows — highlight driven by pin progress, not hover */}
            <div
              className="flex min-h-0 w-full flex-col justify-center lg:col-span-7"
              data-services-list
            >
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
                      "relative flex flex-col items-start justify-between gap-1 border-t border-border py-2.5 transition-colors duration-300 sm:py-3 xl:flex-row xl:items-center xl:gap-6 xl:py-3.5 last:border-b",
                      isActive
                        ? "border-cream/40 bg-elevated/50"
                        : "opacity-40",
                    )}
                  >
                    <h3
                      className={cn(
                        "max-w-sm font-display text-base font-normal tracking-tight transition-colors duration-300 sm:text-lg md:text-xl",
                        isActive ? "text-cream" : "text-foreground",
                      )}
                    >
                      <span className="mr-2 font-sans text-[11px] text-stone tabular-nums sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {value.heading}
                    </h3>
                    <p
                      className={cn(
                        "flex-1 overflow-hidden text-xs leading-relaxed text-muted-foreground transition-all duration-300 sm:text-sm",
                        isActive
                          ? "max-h-20 opacity-100"
                          : "max-h-0 opacity-0 xl:max-h-none",
                      )}
                    >
                      {isActive ? value.descp : null}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
