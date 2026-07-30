"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function CountUp({ value }: { value: string }) {
 const match = value.match(/^(\d+)(.*)$/);
 const num = match ? parseInt(match[1]) : 0;
 const suffix = match ? match[2] : "";

 const ref = useRef<HTMLSpanElement>(null);
 const isInView = useInView(ref, { once: true });
 const motionValue = useMotionValue(0);
 const [display, setDisplay] = useState(0);

 useEffect(() => {
 if (!isInView) return;
 const controls = animate(motionValue, num, {
 duration: 2,
 ease: "easeOut",
 onUpdate: (v) => setDisplay(Math.round(v)),
 });
 return controls.stop;
 }, [isInView, motionValue, num]);

 return (
 <span ref={ref}>
 {display}{suffix}
 </span>
 );
}

const stats = [
 { value: "36+", label: "projects launched" },
 { value: "95%", label: "Client satisfaction rate" },
 { value: "24k", label: "Monthly visitors" },
 { value: "98+", label: "Team Members" },
];

const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeLeft = {
 hidden: { opacity: 0, x: -30 },
 show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeRight = {
 hidden: { opacity: 0, x: 30 },
 show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
 hidden: {},
 show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const staggerStats = {
 hidden: {},
 show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function AboutUs() {
 return (
 <section>
 <div className="max-w-7xl xl:px-16 lg:px-8 px-4 lg:py-20 py-10 mx-auto w-full">
 <div className="flex flex-col gap-10 lg:gap-12">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-end">
 <motion.div
 className="md:col-span-5 flex flex-col gap-4"
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.2 }}
 variants={stagger}
 >
 <motion.div variants={fadeLeft}>
 <Badge
 variant="outline"
 className="text-sm font-normal text-foreground px-3 py-1 rounded-full h-auto"
 >
 Our Story
 </Badge>
 </motion.div>
 <motion.h2
 variants={fadeUp}
 className="xl:text-5xl lg:text-4xl text-3xl font-medium text-foreground leading-tight xl:leading-none!"
 >
 Where living feels extraordinary and truly unique
 </motion.h2>
 </motion.div>
 <motion.div
 className="md:col-span-7 flex flex-col gap-5 items-start"
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.2 }}
 variants={stagger}
 >
 <motion.p variants={fadeRight} className="text-base lg:text-lg text-muted-foreground">
 Every space we create is a balance of design, comfort, and purpose - built
 to elevate lifestyles and deliver a seamless living experience, where
 every detail is thoughtfully considered.
 </motion.p>
 <motion.div variants={fadeRight}>
 <Button className="gap-1.5 h-9 px-4 rounded-lg hover:bg-primary/80 cursor-pointer group">
 Explore Projects
 <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform duration-300" />
 </Button>
 </motion.div>
 </motion.div>
 </div>
 <motion.div
 className="relative rounded-2xl overflow-hidden w-full"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.15 }}
 transition={{ duration: 0.6, ease: "easeOut" }}
 >
 <img
 src="https://images.shadcnspace.com/assets/about/about-us-12-image.webp"
 alt="Architectural building exterior"
 width={1152}
 height={400}
 className="w-full h-56 sm:h-72 md:h-80 lg:h-[400px] object-cover"
 />
 </motion.div>
 <motion.div
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.2 }}
 variants={staggerStats}
 >
 {stats.map(({ value, label }, i) => (
 <motion.div
 key={i}
 variants={fadeUp}
 className={cn(
 "flex flex-col items-center gap-2 px-8 py-6 border-border",
 i < stats.length - 1 && "border-b",
 i >= 2 && "md:border-b-0",
 i % 2 === 0 && "md:border-r",
 "lg:border-b-0",
 i < stats.length - 1 ? "lg:border-r" : "lg:border-r-0",
 )}
 >
 <span className="text-5xl lg:text-6xl font-semibold text-foreground tracking-tight lg:tracking-normal!">
 <CountUp value={value} />
 </span>
 <span className="text-sm text-muted-foreground text-center">
 {label}
 </span>
 </motion.div>
 ))}
 </motion.div>
 </div>
 </div>
 </section>
 );
}