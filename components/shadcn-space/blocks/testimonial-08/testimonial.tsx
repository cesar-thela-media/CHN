"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews = [
  {
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-4.jpg",
    body: "This AI company transformed our workflow with smart automation tools that cut processing time by 60% while boosting accuracy to 98%.",
    name: "Tom Sullivan",
    designation: "CEO",
    company: "Gumroad",
    logo: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
    lightLogo:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg",
  },
  {
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-8.jpg",
    body: "Switching to this platform streamlined our entire workflow. Setup was effortless and our team now ships features faster.",
    name: "Jessica Lee",
    designation: "Product Manager",
    company: "Notion",
    logo: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
    lightLogo:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/hero-img/hero-team-img-10.jpg",
    body: "We evaluated multiple solutions but this one stood out immediately. Fast, scalable and designed for growing teams.",
    name: "Jenny Wilson",
    designation: "CTO",
    company: "Linear",
    logo: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
    lightLogo:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg",
  },
  {
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-6.jpg",
    body: "One of the most reliable tools we adopted. Integrations are seamless and it saves our team countless hours weekly.",
    name: "Linda Carter",
    designation: "Head of Engineering",
    company: "Stripe",
    logo: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
    lightLogo:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg",
  },
];

const ReviewCard = ({
  image,
  name,
  designation,
  company,
  body,
  logo,
  lightLogo,
}: {
  image: string;
  name: string;
  designation: string;
  company: string;
  body: string;
  logo: string;
  lightLogo: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-stretch">
      <div className="relative w-full h-70 sm:h-130 lg:h-auto lg:w-105 shrink-0 overflow-hidden aspect-video sm:aspect-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-[center_20%] sm:object-[center_30%]"
        />
      </div>
      <div className="p-6 md:p-12 flex flex-col justify-between h-auto gap-12">
        <p className="text-2xl md:text-3xl font-medium text-foreground">
          "{body}"
        </p>
        <div className="flex items-end justify-between flex-wrap gap-2">
          <div>
            <p className="text-xl sm:text-2xl font-medium text-foreground">
              {name}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              {designation} @{company}
            </p>
          </div>
          <img
            src={logo}
            alt={company}
            width={130}
            height={52}
            className="dark:hidden"
          />
          <img
            src={lightLogo}
            alt={company}
            width={130}
            height={52}
            className="hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="overflow-hidden">
      {/* heading */}
      <div className="max-w-7xl py-10 sm:py-20 xl:px-16 lg:px-8 px-4 mx-auto w-full border-b border-x border-border relative before:absolute before:-bottom-px before:right-full before:w-screen before:h-px before:bg-border after:absolute after:-bottom-px after:left-full after:w-screen after:h-px after:bg-border">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground">
          Customers see{" "}
          <span className="bg-[linear-gradient(90deg,var(--foreground)_-20%,#3B82F6_94.54%,#FFFFFF_104.51%)] bg-clip-text text-transparent">
            instant result
          </span>
        </h2>
      </div>
      {/* testimonials */}
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto w-full h-full border-b border-x border-border relative before:absolute before:-bottom-px before:right-full before:w-screen before:h-px before:bg-border after:absolute after:-bottom-px after:left-full after:w-screen after:h-px after:bg-border">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <ReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* DOT PAGINATION */}
      <div className="max-w-7xl py-10 xl:px-16 lg:px-8 px-4 mx-auto w-full border-x">
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer
              ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
