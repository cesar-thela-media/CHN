"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

let registered = false;

export function ensureGsap() {
  if (typeof window === "undefined") return;
  if (!registered) {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    registered = true;
  }
}

/** Premium ease curve used sitewide */
export const CHN_EASE = "power3.out";
export const CHN_EASE_SOFT = "power2.inOut";

/** Fade + rise on enter; longer, softer for luxury feel. */
export function useFadeIn<T extends HTMLElement>(
  options: { y?: number; duration?: number; stagger?: number; delay?: number } = {},
) {
  const ref = useRef<T | null>(null);
  const { y = 28, duration = 1.05, stagger = 0.1, delay = 0 } = options;

  useGSAP(
    () => {
      ensureGsap();
      const el = ref.current;
      if (!el) return;

      const targets = el.querySelectorAll<HTMLElement>("[data-fade]");
      const nodes = targets.length ? Array.from(targets) : [el];

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(nodes, { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      gsap.set(nodes, { opacity: 1, y: 0 });

      gsap.from(nodes, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger,
        ease: CHN_EASE,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
          toggleActions: "play none none none",
        },
        onComplete: () => {
          gsap.set(nodes, { clearProps: "transform" });
        },
      });
    },
    { scope: ref },
  );

  return ref;
}
