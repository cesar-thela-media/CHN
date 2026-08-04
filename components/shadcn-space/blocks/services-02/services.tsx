"use client";

/**
 * Services: CSS sticky pin + GSAP scrubbed crossfades.
 * Vertical progress rail (visible) while section is pinned.
 */
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

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
  description = "A seamless suite of services.",
  ctaLabel = "View all services",
  ctaHref = "/services",
}: ServicesProps) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const stepLabelRef = useRef<HTMLParagraphElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const rowsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const descsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const count = Math.max(data.length, 1);
  const trackVh = count * 100 + 15;

  useGSAP(
    () => {
      const track = trackRef.current;
      const panel = panelRef.current;
      const progressFill = progressFillRef.current;
      const stepLabel = stepLabelRef.current;
      if (!track || !panel || !data.length) return;

      const images = imagesRef.current.filter(Boolean) as HTMLDivElement[];
      const rows = rowsRef.current.filter(Boolean) as HTMLAnchorElement[];
      const descs = descsRef.current.filter(Boolean) as HTMLParagraphElement[];
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      images.forEach((img, i) => {
        gsap.set(img, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.06 });
      });
      rows.forEach((row, i) => {
        gsap.set(row, { opacity: i === 0 ? 1 : 0.28 });
        const titleEl = row.querySelector("[data-svc-title]");
        if (titleEl) {
          gsap.set(titleEl, {
            color: i === 0 ? "var(--cream)" : "var(--foreground)",
          });
        }
      });
      descs.forEach((d, i) => {
        gsap.set(d, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 10,
          height: i === 0 ? "auto" : 0,
          overflow: "hidden",
        });
      });
      // Vertical fill: scaleY from top
      if (progressFill) {
        gsap.set(progressFill, {
          scaleY: 1 / count,
          transformOrigin: "top center",
        });
      }

      let lastIndex = -1;

      const applyBlend = (idx: number, blend: number, progress: number) => {
        const next = Math.min(count - 1, idx + 1);
        images.forEach((img, i) => {
          let op = 0;
          let sc = 1.06;
          if (i === idx && i === next) {
            op = 1;
            sc = 1;
          } else if (i === idx) {
            op = 1 - blend;
            sc = 1 + blend * 0.05;
          } else if (i === next) {
            op = blend;
            sc = 1.06 - blend * 0.06;
          }
          gsap.set(img, { opacity: op, scale: sc });
        });
        if (progressFill) {
          // Full 0→1 height of the vertical rail
          gsap.set(progressFill, {
            scaleY: Math.min(1, Math.max(1 / count, progress || 0.02)),
          });
        }
      };

      const setActiveRow = (idx: number) => {
        if (idx === lastIndex) return;
        lastIndex = idx;

        if (stepLabel) {
          stepLabel.textContent = `Scroll · ${String(idx + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
        }

        const dur = reduce ? 0.01 : 0.65;
        const ease = "power2.inOut";

        rows.forEach((row, i) => {
          const active = i === idx;
          const titleEl = row.querySelector("[data-svc-title]");
          gsap.to(row, {
            opacity: active ? 1 : 0.28,
            duration: dur,
            ease,
            overwrite: "auto",
          });
          if (titleEl) {
            gsap.to(titleEl, {
              color: active ? "var(--cream)" : "var(--foreground)",
              duration: dur,
              ease,
              overwrite: "auto",
            });
          }
          row.setAttribute("data-active", active ? "true" : "false");
          row.classList.toggle("bg-elevated/50", active);
          row.classList.toggle("border-cream/40", active);
        });

        descs.forEach((d, i) => {
          const active = i === idx;
          if (reduce) {
            gsap.set(d, {
              opacity: active ? 1 : 0,
              y: active ? 0 : 10,
              height: active ? "auto" : 0,
            });
            return;
          }
          if (active) {
            gsap.set(d, { height: "auto", opacity: 0, y: 10 });
            const h = d.scrollHeight;
            gsap.fromTo(
              d,
              { height: 0, opacity: 0, y: 10 },
              {
                height: h,
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => gsap.set(d, { height: "auto", y: 0 }),
              },
            );
          } else {
            gsap.to(d, {
              height: 0,
              opacity: 0,
              y: 10,
              duration: 0.4,
              ease: "power2.inOut",
              overwrite: "auto",
            });
          }
        });
      };

      ScrollTrigger.create({
        id: "chn-services-sticky-scrub",
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: reduce ? false : 0.75,
        onUpdate: (self) => {
          const t = Math.min(0.9999, Math.max(0, self.progress));
          const raw = t * count;
          const idx = Math.min(count - 1, Math.floor(raw));
          const blend = idx >= count - 1 ? 0 : raw - idx;

          applyBlend(idx, reduce ? 0 : blend, t);
          setActiveRow(idx);
          panel.setAttribute("data-pinned", self.isActive ? "true" : "false");
        },
        onEnter: () => panel.setAttribute("data-pinned", "true"),
        onEnterBack: () => panel.setAttribute("data-pinned", "true"),
        onLeave: () => panel.setAttribute("data-pinned", "false"),
        onLeaveBack: () => panel.setAttribute("data-pinned", "false"),
      });

      setActiveRow(0);
      applyBlend(0, 0, 0.02);
      ScrollTrigger.refresh();
    },
    { scope: rootRef, dependencies: [count, data] },
  );

  return (
    <section
      ref={rootRef}
      data-shadcn-space="services-02"
      id="services"
      className="relative bg-background"
    >
      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${trackVh}vh` }}
        data-services-track
      >
        <div
          ref={panelRef}
          data-services-pin
          data-pinned="false"
          className="sticky top-0 flex h-[100svh] max-h-[100svh] w-full flex-col justify-center overflow-hidden bg-background"
        >
          {/* Vertical progress rail — always visible while pinned */}
          <div
            className="pointer-events-none absolute left-3 top-1/2 z-40 flex h-[min(52svh,420px)] w-1.5 -translate-y-1/2 flex-col sm:left-5 md:left-6 lg:left-8"
            aria-hidden
            data-services-progress
          >
            {/* Track */}
            <div className="relative h-full w-full overflow-hidden rounded-full bg-stone/35 ring-1 ring-cream/20">
              {/* Fill grows top → bottom */}
              <div
                ref={progressFillRef}
                className="absolute inset-x-0 top-0 h-full w-full origin-top rounded-full bg-cream shadow-[0_0_12px_rgba(245,240,230,0.45)] will-change-transform"
                style={{ transform: "scaleY(0.16)" }}
              />
            </div>
          </div>

          <div className="container-site flex min-h-0 flex-1 flex-col justify-center py-10 pe-4 ps-8 md:py-12 md:ps-12 lg:ps-14">
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
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {description}
                  </p>
                  <p
                    ref={stepLabelRef}
                    className="text-[11px] uppercase tracking-[0.22em] text-stone"
                    data-services-step
                  >
                    Scroll · 01 / {String(count).padStart(2, "0")}
                  </p>
                </div>
                <Button
                  asChild
                  className="group flex h-auto w-fit shrink-0 items-center justify-between gap-2 rounded-full border-0 bg-primary p-1 ps-5 font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={ctaHref} prefetch>
                    <span className="text-sm font-medium">{ctaLabel}</span>
                    <span className="rounded-full bg-background p-2 transition-transform duration-500 ease-out group-hover:rotate-45">
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

              <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
                <div className="img-frame relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-elevated sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:h-full lg:max-h-[min(420px,48svh)] lg:min-h-0">
                  {data.map((item, index) => (
                    <div
                      key={item.image + item.heading}
                      ref={(el) => {
                        imagesRef.current[index] = el;
                      }}
                      className="absolute inset-0 will-change-[opacity,transform]"
                      style={{ opacity: index === 0 ? 1 : 0 }}
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

                <div
                  className="flex min-h-0 w-full flex-col justify-center lg:col-span-7"
                  data-services-list
                >
                  {data.map((value, index) => {
                    const href = value.href || ctaHref;
                    return (
                      <Link
                        key={value.heading}
                        href={href}
                        prefetch
                        ref={(el) => {
                          rowsRef.current[index] = el;
                        }}
                        data-service-index={index}
                        data-active={index === 0 ? "true" : "false"}
                        className="relative flex flex-col items-start justify-between gap-1 border-t border-border py-2.5 sm:py-3 xl:flex-row xl:items-center xl:gap-6 xl:py-3.5 last:border-b"
                        style={{ opacity: index === 0 ? 1 : 0.28 }}
                      >
                        <h3
                          data-svc-title
                          className="max-w-sm font-display text-base font-normal tracking-tight text-foreground sm:text-lg md:text-xl"
                        >
                          <span className="mr-2 font-sans text-[11px] text-stone tabular-nums sm:text-xs">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {value.heading}
                        </h3>
                        <p
                          ref={(el) => {
                            descsRef.current[index] = el;
                          }}
                          className="flex-1 overflow-hidden text-xs leading-relaxed text-muted-foreground sm:text-sm"
                          style={{
                            opacity: index === 0 ? 1 : 0,
                            height: index === 0 ? "auto" : 0,
                          }}
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
      </div>
    </section>
  );
}

export default Services;
