"use client";

import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const heroArticle = {
  category: "Visual Stories",
  title: "Where Aesthetics Meet Atmosphere",
  image: "https://images.shadcnspace.com/assets/blog/blog-9-img-1.webp",
};

const articles = [
  {
    category: "Featured",
    title: "Moments Framed in Color and Contrast",
    image: "https://images.shadcnspace.com/assets/blog/blog-9-img-2.webp",
  },
  {
    category: "Trends",
    title: "The Rise of Abstract Visual Narratives",
    image: "https://images.shadcnspace.com/assets/blog/blog-9-img-3.webp",
  },
];

const Blog = () => {
  return (
    <section className="bg-muted dark:bg-background py-10 lg:py-20">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-foreground tracking-tight">
            Stories &amp; Insights
          </h2>

          <div className="flex flex-col gap-6">
            {/* Hero Card */}
            <Card className="group overflow-hidden rounded-2xl shadow-none ring-0 dark:ring-1 dark:ring-border p-0">
              <CardContent className="p-0 flex flex-col md:flex-row">
                <div className="w-full md:w-7/12 h-64 lg:h-90 overflow-hidden shrink-0">
                  <img
                    src={heroArticle.image}
                    alt={heroArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 lg:p-8 flex-1 gap-17">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      {heroArticle.category}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
                      {heroArticle.title}
                    </h3>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-2 w-fit"
                  >
                    Read more
                    <ArrowRight size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Two Article Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, idx) => (
                <Card
                  key={idx}
                  className="group overflow-hidden rounded-2xl shadow-none ring-0 dark:ring-1 dark:ring-border lg:h-65 p-0"
                >
                  <CardContent className="p-0 flex flex-col lg:flex-row h-full">
                    <div className="flex flex-col justify-between p-6 lg:p-8 lg:w-68 shrink-0 min-h-50 lg:min-h-0 lg:h-full">
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted-foreground">
                          {article.category}
                        </p>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {article.title}
                        </h3>
                      </div>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-2 w-fit"
                      >
                        Read more
                        <ArrowRight size={16} />
                      </a>
                    </div>
                    <div className="w-full lg:flex-1 h-52 lg:h-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
