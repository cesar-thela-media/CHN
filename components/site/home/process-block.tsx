"use client";

/**
 * Adapted from Shadcnspace timeline-01. The source site does not publish a
 * separate process/timeline section, so this component is intentionally kept
 * as a restrained visual bridge without introducing new customer promises.
 */
import Timeline from "@/components/shadcn-space/blocks/timeline-01/timeline";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "Concept to completion",
    description:
      "Our complimentary white-glove service guides your custom home journey from concept to completion.",
    date: "",
    image: "/images/process-discovery.jpg",
  },
];

export function ProcessBlock() {
  return (
    <section
      data-shadcn-space="timeline-01"
      id="process"
      className="overflow-hidden border-y border-border bg-elevated/20"
    >
      <div className="container-site">
        <div className="border-x border-b border-border px-6 py-12 md:px-10 md:py-16">
          <div className="max-w-2xl space-y-4">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 text-xs font-normal uppercase tracking-[0.2em] text-stone"
            >
              Your journey
            </Badge>
            <h2 className="font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl">
              From concept to completion.
            </h2>
          </div>
        </div>
        <div className="border-r border-border md:border-x">
          <Timeline items={items} />
        </div>
        <div className="h-12 border-x border-t border-border md:h-20" />
      </div>
    </section>
  );
}
