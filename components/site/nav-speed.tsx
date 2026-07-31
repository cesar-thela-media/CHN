"use client";

/**
 * Prefetch primary routes + clean GSAP pins on route change for snappy nav.
 */
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { primaryNav, servicesNav } from "@/lib/navigation";

const PREFETCH = [
  ...primaryNav.map((n) => n.href),
  ...servicesNav.map((n) => n.href),
  "/contact",
  "/privacy",
  "/terms",
];

export function NavSpeed() {
  const router = useRouter();
  const pathname = usePathname();

  // Prefetch all chrome destinations once hydrated
  useEffect(() => {
    const unique = [...new Set(PREFETCH)];
    for (const href of unique) {
      try {
        router.prefetch(href);
      } catch {
        /* ignore */
      }
    }
  }, [router]);

  // On every route change: kill leftover ScrollTrigger pins (home services)
  // and snap to top without animation delay
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        // clear any pin-spacer artifacts / inline styles on body
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
        document.documentElement.style.removeProperty("overflow");
      } catch {
        /* gsap optional on non-home */
      }
      if (!cancelled) {
        window.scrollTo(0, 0);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
