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

/** Fade + rise on enter; respects reduced motion. Never leaves opacity stuck at 0. */
export function useFadeIn<T extends HTMLElement>(
  options: { y?: number; duration?: number; stagger?: number; delay?: number } = {},
) {
  const ref = useRef<T | null>(null);
  const { y = 20, duration = 0.75, stagger = 0.07, delay = 0 } = options;

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

      // Ensure visible if ScrollTrigger never fires (short viewports / layout shifts)
      gsap.set(nodes, { opacity: 1, y: 0 });

      gsap.from(nodes, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
          // If already past trigger on load, still animate once
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
