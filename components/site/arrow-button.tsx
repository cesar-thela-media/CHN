"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "outline";
  /** sm = header chrome; md = hero / default */
  size?: "sm" | "md";
  onClick?: () => void;
};

/** Sliding-arrow CTA. Prefetch on; short hover so click feels immediate. */
export function ArrowButton({
  href,
  children,
  className,
  variant = "light",
  size = "md",
  onClick,
}: Props) {
  const styles = {
    light: "bg-primary text-primary-foreground hover:bg-primary/90",
    dark: "bg-foreground/10 text-foreground border border-line hover:bg-foreground/15",
    outline:
      "bg-transparent text-foreground border border-line hover:border-foreground/30",
  }[variant];

  const knob =
    variant === "light"
      ? "bg-background text-foreground"
      : "bg-primary text-primary-foreground";

  const sizeStyles =
    size === "sm"
      ? "h-9 ps-3.5 pe-10 text-[12px] hover:ps-10 hover:pe-3.5"
      : "h-11 ps-5 pe-12 text-sm hover:ps-12 hover:pe-5";

  const knobSize = size === "sm" ? "h-7 w-7 right-1" : "h-9 w-9 right-1";
  const knobTravel =
    size === "sm"
      ? "group-hover:right-[calc(100%-32px)]"
      : "group-hover:right-[calc(100%-40px)]";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  const classNames = cn(
    "group relative inline-flex shrink-0 items-center overflow-hidden rounded-full p-1 font-medium whitespace-nowrap transition-all duration-200",
    sizeStyles,
    styles,
    className,
  );

  const handleClick = () => {
    if (typeof window !== "undefined") {
      void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    }
    onClick?.();
  };

  const inner = (
    <>
      <span className="relative z-10 whitespace-nowrap transition-all duration-200">
        {children}
      </span>
      <span
        className={cn(
          "absolute flex items-center justify-center rounded-full transition-all duration-200 group-hover:rotate-45",
          knobSize,
          knobTravel,
          knob,
        )}
      >
        <ArrowUpRight className={iconSize} />
      </span>
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classNames} onClick={handleClick}>
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      prefetch
      scroll
      className={classNames}
      onClick={handleClick}
    >
      {inner}
    </Link>
  );
}
