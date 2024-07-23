import {
  ArticleCard,
  ArticleContent,
  ArticleTitle,
} from "@/components/article/article-card";
import { Button } from "@/components/ui/button";
import { Hashnode } from "@/lib/hashnode";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function ArticlePage({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const { data, loading, errors } = await Hashnode.getArticles({
    page: Number(searchParams?.page) || 1,
    pageSize: 10,
  });
  const postsArray = data?.publication?.postsViaPage?.nodes;
  const pageInfo = data?.publication?.postsViaPage?.pageInfo;

  return (
    <section className="container mt-10">
      <h1
        className="text-5xl font-bold"
        data-aos="fade-up"
        data-aos-duration="500">
        ARTICLES
      </h1>
      <div className="grid grid-cols-4 gap-4 my-10">
        {postsArray?.map((post: any) => (
          <ArticleCard
            coverImageUrl={post?.coverImage?.url}
            slug={post?.slug}
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
      {/* <pre>{JSON.stringify(pageInfo, null, 2)}</pre> */}
      <div className="flex justify-center mb-20 gap-8">
        <div>
          <Link
            href={`?page=${pageInfo?.previousPage}`}
            className={cn(
              "gap-4 flex justify-center items-center py-8 px-10 transition rounded-lg border-2 border-transparent hover:border-blue-500",
              !pageInfo?.hasPreviousPage && "pointer-events-none opacity-50"
            )}>
            <ArrowLeft />
            <div>Previous</div>
          </Link>
        </div>
        <div className="">
          <Link
            href={`?page=${pageInfo?.nextPage}`}
            className={cn(
              "gap-4 flex justify-center items-center w-full py-8 px-10 transition rounded-lg border-2 border-transparent hover:border-blue-500",
              !pageInfo?.hasNextPage && "pointer-events-none opacity-50"
            )}>
            <div>Next</div>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
