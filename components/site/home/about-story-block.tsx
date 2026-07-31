"use client";

/**
 * Adapted from Shadcnspace about-us-12 (image + story + stats).
 */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "0", label: "Cost to client for our service" },
  { value: "05", label: "Builder bonus for network clients" },
  { value: "06", label: "Disciplines in one network" },
];

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)/);
  const num = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? value.slice(match[1].length) : value;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || num === 0) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      start = Math.round(eased * num);
      setDisplay(start);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, num]);

  if (!match) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {isInView ? display : 0}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function AboutStoryBlock() {
  return (
    <section
      data-shadcn-space="about-us-12"
      id="about"
      className="border-t border-border bg-background"
    >
      <div className="container-site py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="img-frame relative aspect-[4/5] w-full max-w-md overflow-hidden sm:max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/story-living.jpg"
              alt="Custom home living spaces"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-[0.28em] text-stone"
            >
              Who we are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl"
            >
              An inspiring journey, not a source of stress.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-md text-base leading-relaxed text-muted-foreground"
            >
              Custom Home Network was founded so building your dream home feels smooth and
              rewarding. We transform vision into reality with access to top-tier Realtors,
              architects, builders, and financial experts, plus partner-funded white-glove
              service and a pre-negotiated 0.5% builder bonus for our clients.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 border border-border md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className={cn(
                "flex flex-col items-center gap-2 border-border px-6 py-8",
                i < stats.length - 1 && "border-b lg:border-b-0 lg:border-r",
                i % 2 === 0 && "md:border-r lg:border-r",
                i === 1 && "md:border-r-0 lg:border-r",
              )}
            >
              <span className="font-display text-5xl tracking-tight text-foreground lg:text-6xl">
                {value === "05" ? (
                  "0.5%"
                ) : value === "0" ? (
                  "$0"
                ) : (
                  <CountUp value={value} />
                )}
              </span>
              <span className="text-center text-sm text-muted-foreground">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
