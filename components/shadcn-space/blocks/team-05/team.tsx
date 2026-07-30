"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Check, Globe, KeyRound, Mail, Tag } from "lucide-react";

const InstagramIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip-instagram-team05)">
      <path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898s.68.82.898 1.38c.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228a3.7 3.7 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.7 3.7 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.054-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38s.82-.68 1.38-.898c.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.9 5.9 0 0 0-2.126 1.384A5.9 5.9 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.059 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.9 5.9 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.15-.261 2.912-.558a5.9 5.9 0 0 0 2.126-1.384 5.9 5.9 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.277-.261-2.15-.558-2.912a5.9 5.9 0 0 0-1.384-2.126A5.9 5.9 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip-instagram-team05">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LinkedinIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip-linkedin-team05)">
      <path d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team05">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export type team = {
  id: string;
  img: string;
  since: string;
  name: string;
  position: string;
  sale: number;
  rent: number;
  stats: string[];
};

const Team = ({ teamData }: { teamData: team[] }) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 w-full">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground"
            >
              Our Agents
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teamData?.map((data, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98] as const,
                    }}
                  >
                    <Card className="py-0 border-0 ring-0 shadow-none rounded-none">
                      <CardContent className="flex flex-col sm:flex-row items-center gap-6 px-0">
                        <div className="relative w-full h-full">
                          <img
                            src={data.img}
                            alt="image"
                            width={270}
                            height={330}
                            className="rounded-xl object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 left-0 rounded-lg flex items-center gap-4 bg-background px-4 py-3 m-4">
                            <a href="#">
                              <Globe
                                size={20}
                                className="hover:stroke-blue-500 transition-all duration-300"
                              />
                            </a>
                            <a href="#">
                              <InstagramIcon
                                size={20}
                                className="hover:text-blue-500 transition-all duration-300"
                              />
                            </a>
                            <a href="#">
                              <LinkedinIcon
                                size={20}
                                className="hover:text-blue-500 transition-all duration-300"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                          <div className="flex flex-col gap-2">
                            <Badge className="bg-blue-500/10 text-blue-500 h-auto px-2 py-0.5 w-fit">
                              Est. Since {data.since}
                            </Badge>
                            <div className="flex flex-col gap-0.5">
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-xl font-semibold text-foreground">
                                  {data.name}
                                </h3>
                                <BadgeCheck
                                  size={22}
                                  className="stroke-background fill-blue-500"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {data.position}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center gap-2">
                              <Tag className="stroke-blue-500" size={16} />
                              <span className="text-base font-normal">
                                <strong className="font-semibold">
                                  {data.sale}
                                </strong>{" "}
                                Sale
                              </span>
                            </div>
                            <div className="h-4 w-px mx-3 bg-border" />
                            <div className="flex items-center gap-2">
                              <KeyRound className="stroke-teal-400" size={16} />
                              <span className="text-base font-normal">
                                <strong className="font-semibold">
                                  {data.rent}
                                </strong>{" "}
                                Rent
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              className="h-auto p-3 border border-border w-fit rounded-lg hover:cursor-pointer"
                            >
                              <Mail size={16} />
                            </Button>
                            <Button className="group/btn flex items-center gap-2 h-auto px-5! py-2.5 rounded-lg hover:cursor-pointer">
                              <span>Contact Agent</span>
                              <ArrowRight
                                size={16}
                                className="group-hover/btn:translate-x-1 transition-all duration-300"
                              />
                            </Button>
                          </div>
                          <div>
                            <div className="flex flex-col gap-2">
                              {data.stats?.map((stat, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2"
                                  >
                                    <Check size={16} />
                                    <p className="text-base font-normal text-muted-foreground">
                                      {stat}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;