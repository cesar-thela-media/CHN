"use client";

/**
 * Sitewide conversion band → /contact only.
 */
import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { ArrowButton } from "@/components/site/arrow-button";
import { site } from "@/lib/site";

const perks = [
  "Complimentary white-glove",
  "Vetted network",
  `${site.builderBonus} builder bonus`,
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function CtaBlock() {
  return (
    <section data-shadcn-space="cta-08" className="relative overflow-hidden py-16 lg:py-20">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-sm border border-border">
          <Image
            src="/images/svc-build-exterior.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="relative flex flex-col gap-8 px-6 pb-6 pt-10 lg:gap-12 lg:px-16 lg:pb-10 lg:pt-16">
            <motion.div
              className="flex flex-col items-center gap-4 px-0 text-center lg:gap-5 lg:px-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-medium uppercase tracking-[0.28em] text-cream/80"
              >
                Ready?
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-3xl font-normal tracking-tight text-white sm:text-5xl"
              >
                Let's craft your home. Together.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base"
              >
                One conversation. Continue on Contact.
              </motion.p>
              <motion.ul
                variants={fadeUp}
                className="flex flex-col items-start gap-2 text-left text-sm text-white/85 sm:flex-row sm:items-center sm:gap-6"
              >
                {perks.map((p) => (
                  <li key={p} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-cream" strokeWidth={1.5} />
                    {p}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-2">
                <ArrowButton href="/contact">{site.ctaPrimary}</ArrowButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
