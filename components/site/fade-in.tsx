"use client";

import { useFadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className)}
      /* Visible by default so GSAP never leaves content permanently blank */
      style={{ opacity: 1 }}
    >
      {children}
    </Tag>
  );
}
