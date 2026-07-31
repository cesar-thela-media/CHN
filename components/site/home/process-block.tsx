"use client";

/**
 * Adapted from Shadcnspace timeline-01, process journey for CHN.
 * Minimal intro copy; unique image per chapter.
 */
import Timeline from "@/components/shadcn-space/blocks/timeline-01/timeline";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/lib/site";

const processImages = [
  "/images/process-discovery.jpg",
  "/images/process-build.jpg",
  "/images/process-finish.jpg",
  "/images/process-movein.jpg",
];

/** Short step lines for luxury scan (homepage only). */
const shortSteps: Record<string, string> = {
  Discovery: "Vision, lifestyle, and the right partners.",
  "Land & Design": "The site and the plan, in lockstep.",
  "Build & Finish": "Craft under coordinated oversight.",
  "Move In": "Keys. Calm. Home.",
};

const items = processSteps.map((s, i) => ({
  title: s.title,
  description: shortSteps[s.title] ?? s.description,
  date: s.step,
  image: processImages[i] ?? processImages[0],
}));

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
              The journey
            </Badge>
            <h2 className="font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl">
              Four chapters. First call to keys.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Considered, not chaotic.
            </p>
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
