"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
 Avatar,
 AvatarFallback,
 AvatarGroup,
 AvatarImage,
} from "@/components/ui/avatar";

const featureData = [
 {
 tab_name: "Discover",
 tab_index: "01 - Discovery",
 tab_title: "Upcover Automation Opportunities",
 tab_description:
 "Shadcn Space equips your team with everything needed to stay aligned, monitor performance, and scale with confidence - all from a single platform. Move faster, collaborate smarter, and build without friction. Get started now for free.",
 tab_image:
 "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
 },
 {
 tab_name: "Develop",
 tab_index: "02 - Develop",
 tab_title: "Build and Implement Automations",
 tab_description:
 "Transform identified opportunities into powerful automated workflows. Design, build, and deploy solutions that streamline operations, reduce manual work, and help your team focus on high-value tasks.",
 tab_image:
 "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
 },
 {
 tab_name: "Optimize",
 tab_index: "03 - Optimize",
 tab_title: "Improve and Scale Automation",
 tab_description:
 "Continuously monitor and refine your automated workflows for better performance. Optimize processes, scale successful automations across teams, and unlock even greater efficiency over time.",
 tab_image:
 "https://images.shadcnspace.com/assets/feature/tab-2-img.png",
 },
];

const container = {
 hidden: {},
 visible: {
 transition: {
 staggerChildren: 0.12,
 },
 },
};

const fadeUp = {
 hidden: {
 opacity: 0,
 y: 30,
 },
 visible: {
 opacity: 1,
 y: 0,
 transition: {
 duration: 0.45,
 ease: "easeOut",
 },
 },
};

const Feature = () => {
 return (
 <section>
 <div className="lg:py-20 sm:py-16 py-8">
 <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 overflow-hidden flex flex-col gap-8">
 
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 viewport={{ once: true }}
 className="max-w-xl mx-auto flex flex-col gap-3 items-center justify-center text-center"
 >
 <p className="text-base font-medium text-muted-foreground">
 Process
 </p>

 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground">
 Accelerate growth with AI-powered workflows
 </h2>
 </motion.div>

 <div>
 <Tabs
 defaultValue={featureData[0].tab_name}
 className="h-auto gap-10"
 >
 
 {/* Tabs */}
 <div className="flex justify-center">
 <TabsList className="p-0 bg-transparent flex items-center gap-2 h-auto!">
 {featureData.map((feature, index) => (
 <TabsTrigger
 key={index}
 value={feature.tab_name}
 className="text-sm font-medium px-5 py-2.5 h-auto rounded-full shadow-none group-data-[variant=default]/tabs-list:data-active:shadow-none! border border-border group-data-[variant=default]/tabs-list:data-active:text-background group-data-[variant=default]/tabs-list:data-active:bg-foreground text-foreground dark:text-gray-50 dark:group-data-[variant=default]/tabs-list:data-active:bg-gray-50 dark:group-data-[variant=default]/tabs-list:data-active:text-gray-950 cursor-pointer"
 >
 {feature.tab_name}
 </TabsTrigger>
 ))}
 </TabsList>
 </div>

 {/* Tab Content Animation */}
 <AnimatePresence mode="sync">
 {featureData.map((feature, index) => (
 <TabsContent
 key={feature.tab_name}
 value={feature.tab_name}
 className="mt-0 outline-none"
 >
 <motion.div
 variants={container}
 initial="hidden"
 animate="visible"
 exit="hidden"
 className="grid grid-cols-1 md:grid-cols-2 gap-6"
 >

 {/* Image Section */}
 <motion.div
 variants={fadeUp}
 className="bg-[url('https://images.shadcnspace.com/assets/feature/feature-vector-img.png')] object-cover bg-center w-full bg-cover bg-no-repeat px-6 lg:px-14 py-14 md:py-16 rounded-2xl h-auto md:h-110 flex items-center justify-center"
 >
 <img
 src={feature.tab_image}
 alt={feature.tab_name}
 width={452}
 height={236}
 className="w-full h-auto md:h-60"
 />
 </motion.div>

 {/* Text Section */}
 <motion.div
 variants={fadeUp}
 className="p-4 lg:p-8 flex flex-col justify-between gap-12"
 >
 <div className="flex flex-col gap-3 sm:gap-4">

 <motion.p
 variants={fadeUp}
 className="text-base font-medium text-muted-foreground"
 >
 {feature.tab_index}
 </motion.p>

 <motion.h3
 variants={fadeUp}
 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground"
 >
 {feature.tab_title}
 </motion.h3>

 <motion.p
 variants={fadeUp}
 className="text-base text-muted-foreground"
 >
 {feature.tab_description}
 </motion.p>
 </div>

 <motion.div
 variants={fadeUp}
 className="flex flex-wrap gap-y-3 items-center"
 >
 <Button className="h-auto px-5 py-2.5 flex items-center gap-2 rounded-full cursor-pointer hover:bg-primary/80 group">
 <span>Learn More</span>
 <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
 </Button>

 <div className="hidden md:flex w-px h-6 mx-6 bg-border" />

 <div className="flex items-center gap-3">
 <AvatarGroup>
 {[
 "https://images.shadcnspace.com/assets/profiles/rough.webp",
 "https://images.shadcnspace.com/assets/profiles/linda.webp",
 "https://images.shadcnspace.com/assets/profiles/jessica.webp",
 ].map((avatar, index) => (
 <Avatar key={index} className="size-10">
 <AvatarImage src={avatar} alt="Avatar" />
 <AvatarFallback className="sr-only">
 U
 </AvatarFallback>
 </Avatar>
 ))}
 </AvatarGroup>

 <p className="text-sm font-normal text-muted-foreground">
 Trusted by 300+ clients
 </p>
 </div>
 </motion.div>
 </motion.div>

 </motion.div>
 </TabsContent>
 ))}
 </AnimatePresence>

 </Tabs>
 </div>
 </div>
 </div>
 </section>
 );
};

export default Feature;