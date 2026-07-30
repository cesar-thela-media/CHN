"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  heading: string;
  descp: string;
  image: string;
}

export interface ServicesProps {
  data?: ServiceItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const servicesData: ServiceItem[] = [
  {
    heading: "Brand Strategy",
    descp: "We craft unique brand stories and visual identities.",
    image: "/images/pinnaclebuilding.jpeg",
  },
];

function Services({
  data = servicesData,
  eyebrow = "Services",
  title = "What we do",
  description = "A seamless suite of disciplines.",
  ctaLabel = "View all services",
  ctaHref = "/services",
}: ServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = data[activeIndex] ?? data[0];

  return (
    <section data-shadcn-space="services-02" id="services" className="bg-background">
      <div className="container-site py-14 sm:py-18 lg:py-24">
        <div className="flex flex-col gap-10 sm:gap-14">
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
            <div className="img-frame relative aspect-[4/3] w-full overflow-hidden bg-elevated lg:col-span-5 lg:aspect-auto lg:min-h-[22rem]">
              {active?.image && (
                <Image
                  key={active.image + activeIndex}
                  src={active.image}
                  alt={active.heading}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              )}
            </div>

            <div className="flex w-full flex-col lg:col-span-7">
              {data?.map((value, index) => (
                <div
                  key={value.heading}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="group relative flex cursor-pointer flex-col items-start justify-between gap-2 border-t border-border py-5 xl:flex-row xl:items-center xl:gap-8 xl:py-7 last:border-b"
                  tabIndex={0}
                  role="button"
                >
                  <h3
                    className={cn(
                      "max-w-sm py-1 font-display text-xl font-normal tracking-tight text-foreground transition-colors md:text-2xl",
                      activeIndex === index && "text-cream",
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
