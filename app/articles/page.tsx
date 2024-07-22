import {
  ArticleCard,
  ArticleContent,
  ArticleTitle,
} from "@/components/article/article-card";
import { Hashnode } from "@/lib/hashnode";
import React from "react";

export default async function ArticlePage() {
  const { data, loading, errors } = await Hashnode.getArticles({
    page: 2,
    pageSize: 10,
  });
  const postsArray = data?.publication?.postsViaPage?.nodes;

  return (
    <section className="container mt-10">
      <h1 className="text-5xl font-bold">ARTICLES</h1>
      <div className="grid grid-cols-4 gap-4 my-10">
        {postsArray?.map((post: any) => (
          <ArticleCard
            coverImageUrl={post?.coverImage?.url}
            className="group"
            key={post?.id}>
            <ArticleTitle>
              <h2 className="font-semibold group-hover:text-green-300 hover:cursor-pointer">
                {post?.title}
              </h2>
            </ArticleTitle>
            <ArticleContent>
              <p className="text-sm text-neutral-400 line-clamp-3 font-light">
                {post?.subtitle ? post?.subtitle : post?.brief}
              </p>
            </ArticleContent>
          </ArticleCard>
        ))}
      </div>
    </section>
  );
}
