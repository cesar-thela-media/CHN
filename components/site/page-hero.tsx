"use client";

import Link from "next/link";
import { ArrowButton } from "@/components/site/arrow-button";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  blockId?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  blockId = "page-hero",
}: Props) {
  return (
    <section
      data-shadcn-space={blockId}
      className="relative min-h-[min(56svh,520px)] overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1814]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(8,8,7,0.58) 0%, rgba(8,8,7,0.28) 55%, rgba(8,8,7,0.15) 100%), linear-gradient(to top, rgba(8,8,7,0.55) 0%, transparent 50%)",
          }}
        />
      </div>
      <div className="container-site relative z-10 flex min-h-[min(56svh,520px)] flex-col justify-end pb-12 pt-28 md:pb-14 md:pt-32">
        <p className="eyebrow text-cream">{eyebrow}</p>
        <h1 className="display-xl mt-3 max-w-3xl text-3xl text-foreground drop-shadow-sm sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/95 sm:text-base md:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            {primaryCta && (
              <ArrowButton href={primaryCta.href}>{primaryCta.label}</ArrowButton>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-sm text-foreground/90 underline-offset-4 hover:underline"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
