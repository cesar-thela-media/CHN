"use client";

/**
 * Prefetch primary routes. Clean GSAP only when LEAVING a page,
 * never on initial home mount (that was killing the services pin).
 */
import { useEffect, useRef } from "react";
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
  const prevPath = useRef<string | null>(null);

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

  useEffect(() => {
    const previous = prevPath.current;
    prevPath.current = pathname;

    // First mount: do NOT kill ScrollTriggers (services pin must live)
    if (previous === null) return;

    // Only when actually changing routes
    if (previous === pathname) return;

    let cancelled = false;
    void (async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
        document.documentElement.style.removeProperty("overflow");
      } catch {
        /* optional */
      }
      if (!cancelled) window.scrollTo(0, 0);
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
