/** Insight content registry. */

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  image: string;
  body: string[];
};

/**
 * The current public CHN source page contains an Insights CTA but no approved
 * article inventory. Keep this empty until article copy is explicitly approved.
 */
export const insights: InsightArticle[] = [];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((article) => article.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insights.map((article) => article.slug);
}
