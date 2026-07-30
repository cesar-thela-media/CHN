"use client";

/**
 * Adapted from Shadcnspace hero-02.
 * Hero media: boss site video with light global veil + glass blur under copy.
 */
import Link from "next/link";
import { Gift, Network, Percent, Sparkles } from "lucide-react";
import { ArrowButton } from "@/components/site/arrow-button";
import { site } from "@/lib/site";

const trustStats = [
  { icon: Gift, label: "At no cost to you", detail: "White-glove service" },
  { icon: Network, label: "Vetted partners", detail: "End-to-end network" },
  {
    icon: Percent,
    label: `${site.builderBonus} builder bonus`,
    detail: "Pre-negotiated for clients",
  },
  { icon: Sparkles, label: "Concept to completion", detail: "One journey" },
];

export function HomeHeroBlock() {
  const videoSrc = site.assets.heroVideo;

  return (
    <section
      data-shadcn-space="hero-02"
      className="relative flex min-h-[100svh] flex-col overflow-hidden md:min-h-[min(100svh,900px)]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1814]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.assets.heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          fetchPriority="high"
        />
        {videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={site.assets.heroImage}
            aria-label="Custom Home Network showcase"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
        {/* Minimal global veil — video stays natural; legibility comes from glass panel */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,7,0.45) 0%, transparent 38%), linear-gradient(to bottom, rgba(8,8,7,0.25) 0%, transparent 18%)",
          }}
        />
      </div>

      <div className="container-site relative z-10 flex flex-1 flex-col justify-end pb-10 pt-28 sm:justify-center sm:pb-12 md:pt-32">
        {/* Frosted glass under copy only — text readable, rest of frame open */}
        <div className="relative max-w-xl lg:max-w-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-4 -inset-y-5 rounded-sm sm:-inset-x-6 sm:-inset-y-6 md:-inset-x-8 md:-inset-y-7"
            style={{
              background:
                "linear-gradient(135deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.32) 55%, rgba(8,8,7,0.18) 100%)",
              backdropFilter: "blur(18px) saturate(1.1)",
              WebkitBackdropFilter: "blur(18px) saturate(1.1)",
              boxShadow:
                "inset 0 1px 0 rgba(244,241,234,0.08), 0 24px 48px -28px rgba(0,0,0,0.55)",
            }}
          />
          <div className="relative px-1 py-1 sm:px-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream">
              {site.sloganAlt}
            </p>
            <h1 className="display-xl mt-3 text-[2.35rem] leading-[1.02] text-foreground drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/95 sm:text-base md:text-lg">
              Our complimentary white-glove service unlocks additional value at no cost to
              you, vetted partners coordinated from concept to completion. Clients also receive an
              exclusive {site.builderBonus} builder bonus pre-negotiated for our network.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <ArrowButton href="/contact">{site.ctaPrimary}</ArrowButton>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center text-sm text-foreground underline-offset-4 hover:underline"
              >
                {site.ctaSecondary}
              </Link>
            </div>
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
                <item.icon className="h-5 w-5 text-cream" strokeWidth={1.25} />
                <div>
                  <p className="text-xs font-medium text-foreground sm:text-sm">{item.label}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
