"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const perks = ["Flexible plans", "Full access", "Reliable support"];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const CTA = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-20">
                {/* Main card */}
                <div className="relative rounded-2xl overflow-hidden">
                    {/* Background image */}
                    <img
                        src="https://images.shadcnspace.com/assets/backgrounds/cta-08-bg.webp"
                        alt=""
                        aria-hidden="true"
                        className="absolute w-full h-full object-cover"
                    />
                    <div className="relative flex flex-col gap-8 lg:gap-16 px-6 pt-10 pb-6 lg:px-16 lg:pt-16 lg:pb-10">
                        <motion.div
                            className="flex flex-col items-center gap-4 lg:gap-5 text-center px-0 lg:px-16"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            <motion.p
                                variants={fadeUp}
                                className="text-sm font-medium text-white"
                            >
                                Built for growing teams
                            </motion.p>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight max-w-2xl"
                            >
                                Grow your business at your own pace, without limits
                            </motion.h2>
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-wrap justify-center items-center gap-3 sm:gap-6"
                            >
                                {perks.map((perk) => (
                                    <div key={perk} className="flex items-center gap-3">
                                        <Check className="size-5 text-white shrink-0" />
                                        <span className="text-base font-medium text-white whitespace-nowrap">
                                            {perk}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Bottom white card */}
                        <motion.div
                            className="bg-background border border-border rounded-xl p-6 lg:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        >
                            <p className="text-2xl lg:text-3xl font-medium text-foreground tracking-tight leading-snug max-w-xs">
                                See what we create. start building today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                                <Button
                                    variant="outline"
                                    className="rounded-full h-12 px-6 hover:text-foreground"
                                >
                                    <a href="#">See our work</a>
                                </Button>
                                <Button
                                    className="rounded-full h-12 px-6 bg-foreground text-background hover:bg-foreground/90"
                                >
                                    <a href="#">Start your project</a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
