"use client";

/**
 * Adapted from Shadcnspace hero-02.
 * Full-bleed video at natural hero size (object-cover on viewport), short CHN copy.
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
      className="relative flex h-[100svh] min-h-[640px] max-h-[1100px] flex-col overflow-hidden"
    >
      {/* Media fills exact hero box (video intrinsic 1280x720, cover = natural fill) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1814]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.assets.heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
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
            width={1280}
            height={720}
            aria-label="Custom Home Network showcase"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "linear-gradient(90deg, rgba(8,8,7,0.58) 0%, rgba(8,8,7,0.38) 28%, rgba(8,8,7,0.14) 52%, transparent 72%)",
              "linear-gradient(to top, rgba(8,8,7,0.55) 0%, transparent 36%)",
              "linear-gradient(to bottom, rgba(8,8,7,0.28) 0%, transparent 22%)",
            ].join(", "),
          }}
        />
      </div>

      <div className="container-site relative z-10 flex flex-1 flex-col justify-end pb-10 pt-28 sm:justify-center sm:pb-12 md:pt-32">
        <div className="relative max-w-xl lg:max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]">
            {site.sloganAlt}
          </p>
          <h1 className="display-xl mt-3 text-[2.35rem] leading-[1.02] text-foreground drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)] sm:text-base md:text-lg">
            {site.heroSubhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <ArrowButton href="/contact">{site.ctaPrimary}</ArrowButton>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center text-sm text-foreground drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] underline-offset-4 hover:underline"
            >
              {site.ctaSecondary}
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
