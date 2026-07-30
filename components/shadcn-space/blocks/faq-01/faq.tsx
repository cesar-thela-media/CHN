"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
};

const DEFAULT_FAQ: FaqItem[] = [
  {
    question: "What services does Shadcn Space offer?",
    answer: "We offer a wide range of services.",
  },
];

export default function Faq({
  items = DEFAULT_FAQ,
  eyebrow = "FAQs",
  title = "Got questions? We’ve got answers ready",
}: FaqProps) {
  return (
    <section data-shadcn-space="faq-01" className="border-t border-border">
      <div className="container-site flex flex-col gap-12 py-16 md:gap-16 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge
            variant="outline"
            className="h-auto border-border px-3 py-1 text-xs font-normal uppercase tracking-[0.2em] text-stone"
          >
            {eyebrow}
          </Badge>
          <h2 className="max-w-lg font-display text-3xl font-normal tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          {items.map((faq, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className={cn(
                "group/item flex flex-col gap-2 rounded-sm border border-border p-5 transition-colors data-[state=open]:bg-elevated/50 md:p-6",
              )}
            >
              <AccordionTrigger className="p-0 text-left text-lg font-medium text-foreground hover:no-underline md:text-xl [&[data-state=open]>svg]:rotate-45">
                {faq.question}
                <PlusIcon className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="p-0 pt-2 text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
