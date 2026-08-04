"use client";

import Image from "next/image";
import { motion } from "motion/react";

type AboutStat = {
  count: string;
  title: string;
};

type AboutUsProps = {
  aboutusData: AboutStat[];
  eyebrow?: string;
  headline?: string;
  blurb?: string;
  imageSrc?: string;
};

const FADE_UP = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, duration: 0.8, bounce: 0.2 },
  },
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const AboutUs = ({
  aboutusData,
  eyebrow = "Who we are",
  headline = "Experiences.",
  blurb = "",
  imageSrc = "/images/unlockvalue.jpg",
}: AboutUsProps) => {
  return (
    <section data-shadcn-space="about-us-03" id="value" className="border-b border-border">
      <div className="container-site">
        <div className="border-x border-border px-5 py-12 md:px-8 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={STAGGER}
            className="flex flex-col gap-3"
          >
            {eyebrow && (
              <motion.div variants={FADE_UP} className="flex items-center gap-1.5">
                <div className="m-1.5 h-1.5 w-1.5 rounded-full bg-stone" />
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-stone">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            <motion.h2
              variants={FADE_UP}
              className="font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              {headline}
            </motion.h2>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site">
          <div className="grid border-x border-border lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={STAGGER}
              className="flex flex-col justify-center"
            >
              {aboutusData?.map((item, index) => (
                <motion.div variants={FADE_UP} key={item.title} className="flex w-full flex-col">
                  <div className="flex flex-col gap-2 px-5 py-7 md:px-8 md:py-9">
                    <h3 className="font-display text-4xl font-normal text-foreground md:text-5xl">
                      {item.count}
                    </h3>
                    <p className="max-w-sm text-sm font-medium text-muted-foreground md:text-base">
                      {item.title}
                    </p>
                  </div>
                  {index !== aboutusData.length - 1 && (
                    <div className="h-px w-full bg-border" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="relative min-h-[280px] border-t border-border lg:min-h-full lg:border-t-0 lg:border-l">
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />
              <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-6 md:p-8 lg:min-h-[420px]">
                <p className="text-[10px] tracking-[0.35em] text-cream/80">CUSTOM HOME NETWORK</p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="max-w-md font-display text-xl font-normal leading-snug tracking-tight text-white md:text-2xl"
                >
                  {blurb}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
