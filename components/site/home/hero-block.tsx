"use client";

/**
 * Homepage hero: Shadcnspace hero-02 media + CHN video from customhomenetwork.com
 */
import Link from "next/link";
import { site } from "@/lib/site";
import { chnCopy } from "@/lib/chn-copy";
import { ArrowButton } from "@/components/site/arrow-button";

const trustStats = [
  { value: "$0", label: "Financial commitment from you" },
  { value: site.builderBonus, label: "Bonus incentive for clients" },
  { value: "1", label: "Custom home journey" },
  { value: "6", label: "Services" },
];

export function HomeHeroBlock() {
  return (
    <section
      data-shadcn-space="hero-02"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1814]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={site.assets.heroImage}
          aria-hidden
        >
          <source src={site.assets.heroVideo} type="video/mp4" />
        </video>
        {/* Soft left-to-right fade for text legibility (no hard panel) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.22) 48%, rgba(8,8,7,0.08) 100%), linear-gradient(to top, rgba(8,8,7,0.5) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="container-site relative z-10 flex flex-1 flex-col justify-end pb-10 pt-36 sm:pb-14 sm:pt-40 md:pb-16">
        <div className="relative max-w-xl lg:max-w-2xl">
          {chnCopy.hero.eyebrow && (
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]">
              {chnCopy.hero.eyebrow}
            </p>
          )}
          <h1 className="display-xl mt-3 text-[2.35rem] leading-[1.02] text-foreground drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            {chnCopy.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)] sm:text-base md:text-lg">
            {chnCopy.hero.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <ArrowButton href="/contact">{chnCopy.hero.primaryCta}</ArrowButton>
            <Link
              href="/services"
              prefetch
              className="inline-flex h-11 items-center text-sm text-foreground drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] underline-offset-4 hover:underline"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border/80 bg-background/95 backdrop-blur-md">
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {trustStats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start gap-2 border-border px-3 py-5 sm:items-center sm:border-r sm:px-5 sm:py-6 sm:text-center sm:last:border-r-0 max-sm:[&:nth-child(odd)]:border-r max-sm:[&:nth-child(-n+2)]:border-b"
              >
                <span className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-stone">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
