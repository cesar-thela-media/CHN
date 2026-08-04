import { notFound } from "next/navigation";
import { getAllInsightSlugs, getInsightBySlug } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  // The approved registry is currently empty, so no article content is exposed.
  return notFound();
}
