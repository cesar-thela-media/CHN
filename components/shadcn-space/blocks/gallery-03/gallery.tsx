"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const galleryItems = [
 {
 id: 1,
 title: "Modern Residences",
 description:
 "Explore contemporary living spaces with sleek designs, open layouts, and premium finishes.",
 image: "https://images.shadcnspace.com/assets/gallery/gallery-3-img-1.webp",
 alt: "Modern residential building",
 },
 {
 id: 2,
 title: "Luxury Villas",
 description:
 "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living.",
 image: "https://images.shadcnspace.com/assets/gallery/gallery-3-img-2.webp",
 alt: "Luxury villas",
 },
 {
 id: 3,
 title: "Urban Apartments",
 description:
 "Discover stylish apartments in prime urban locations with modern amenities and stunning views.",
 image: "https://images.shadcnspace.com/assets/gallery/gallery-3-img-3.webp",
 alt: "Multi-story building",
 },
 {
 id: 4,
 title: "Office Spaces",
 description:
 "Find the perfect workspace designed for productivity, collaboration, and business growth.",
 image: "https://images.shadcnspace.com/assets/gallery/gallery-4-img-4.webp",
 alt: "Modern office space",
 },
];

const fadeUp = {
 hidden: { opacity: 0, y: 40 },
 visible: (delay: number) => ({
 opacity: 1,
 y: 0,
 transition: {
 duration: 0.6,
 delay,
 ease: [0.25, 0.46, 0.45, 0.94] as const,
 },
 }),
};

const Gallery03 = () => {
 return (
 <div className="w-full bg-background">
 <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-12">
 <div className="grid grid-cols-12 gap-6">

 {/* Row 1 - Left: Text Block */}
 <motion.div
 className="col-span-12 lg:col-span-6 flex flex-col"
 variants={fadeUp}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 custom={0}
 >
 <div className="flex flex-col gap-6">
 <div className="flex flex-col gap-3">
 {/* Categories badge */}
 <div className="flex items-center gap-1.5">
 <span className="m-1.5 size-1.5 rounded-full bg-muted-foreground" />
 <p className="text-base leading-6 text-muted-foreground">
 Categories
 </p>
 </div>

 {/* Heading & Description */}
 <div className="flex flex-col gap-2">
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
 Explore best properties with expert services.
 </h2>
 <p className="text-base leading-6 text-muted-foreground">
 Discover a diverse range of premium properties, from
 luxurious apartments to spacious villas, tailored to your
 needs.
 </p>
 </div>
 </div>

 {/* Button */}
 <Button className="w-fit h-12 px-6 rounded-full text-sm font-medium hover:bg-primary/80 cursor-pointer">
 View properties
 </Button>
 </div>
 </motion.div>

 {/* Row 1 - Right: Feature Image */}
 <motion.div
 className="col-span-12 lg:col-span-6"
 variants={fadeUp}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 custom={0.15}
 >
 <Card
 className="group relative overflow-hidden rounded-2xl border-none p-0"
 style={{ height: "356px" }}
 >
 <img
 src={galleryItems[0].image}
 alt={galleryItems[0].alt}
 className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
 />
 <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
 <a
 href="#"
 className="absolute top-6 right-6 z-10 bg-background h-12 px-4 flex items-center rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
 >
 <ArrowRight size={16} className="text-foreground" />
 </a>
 <div className="absolute bottom-0 p-6 z-10 flex flex-col gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
 <p className="text-2xl font-medium leading-8 text-white">
 {galleryItems[0].title}
 </p>
 <p className="text-base leading-6 text-white/50">
 {galleryItems[0].description}
 </p>
 </div>
 </Card>
 </motion.div>

 {/* Row 2 - Left: Large Card */}
 <motion.div
 className="col-span-12 lg:col-span-6"
 variants={fadeUp}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 custom={0}
 >
 <Card
 className="group relative overflow-hidden rounded-2xl border-none p-0"
 style={{ height: "350px" }}
 >
 <img
 src={galleryItems[1].image}
 alt={galleryItems[1].alt}
 className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full rounded-2xl"
 />
 <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
 <a
 href="#"
 className="absolute top-6 right-6 z-10 bg-background h-12 px-4 flex items-center rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
 >
 <ArrowRight size={16} className="text-foreground" />
 </a>
 <div className="absolute bottom-0 p-6 z-10 flex flex-col gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
 <p className="text-2xl font-medium leading-8 text-white">
 {galleryItems[1].title}
 </p>
 <p className="text-base leading-6 text-white/50">
 {galleryItems[1].description}
 </p>
 </div>
 </Card>
 </motion.div>

 {/* Row 2 - Right top: Small Card */}
 <motion.div
 className="col-span-12 sm:col-span-6 lg:col-span-3"
 variants={fadeUp}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 custom={0.15}
 >
 <Card
 className="group relative overflow-hidden rounded-2xl border-none p-0"
 style={{ height: "350px" }}
 >
 <img
 src={galleryItems[2].image}
 alt={galleryItems[2].alt}
 className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full rounded-2xl"
 />
 <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
 <a
 href="#"
 className="absolute top-6 right-6 z-10 bg-background h-12 px-4 flex items-center rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
 >
 <ArrowRight size={16} className="text-foreground" />
 </a>
 <div className="absolute bottom-0 p-6 z-10 flex flex-col gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
 <p className="text-2xl font-medium leading-8 text-white">
 {galleryItems[2].title}
 </p>
 <p className="text-base leading-6 text-white/50">
 {galleryItems[2].description}
 </p>
 </div>
 </Card>
 </motion.div>

 {/* Row 2 - Right bottom: Small Card */}
 <motion.div
 className="col-span-12 sm:col-span-6 lg:col-span-3"
 variants={fadeUp}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 custom={0.3}
 >
 <Card
 className="group relative overflow-hidden rounded-2xl border-none p-0"
 style={{ height: "350px" }}
 >
 <img
 src={galleryItems[3].image}
 alt={galleryItems[3].alt}
 className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full rounded-2xl"
 />
 <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
 <a
 href="#"
 className="absolute top-6 right-6 z-10 bg-background h-12 px-4 flex items-center rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
 >
 <ArrowRight size={16} className="text-foreground" />
 </a>
 <div className="absolute bottom-0 p-6 z-10 flex flex-col gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
 <p className="text-2xl font-medium leading-8 text-white">
 {galleryItems[3].title}
 </p>
 <p className="text-base leading-6 text-white/50">
 {galleryItems[3].description}
 </p>
 </div>
 </Card>
 </motion.div>

 </div>
 </div>
 </div>
 );
};

export default Gallery03;
