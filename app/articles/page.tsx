import {
  ArticleCard,
  ArticleContent,
  ArticleTitle,
} from "@/components/article/article-card";
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
    <section className="container  px-4 sm:px-0">
      <h1 className="text-5xl font-bold">Articles</h1>
      <div className="my-10 grid grid-cols-1 gap-4">
        {postsArray?.map((post: any) => (
          <ArticleCard
            coverImageUrl={post?.coverImage?.url}
            slug={post?.slug}
            key={post?.id}
          >
            <ArticleTitle>{post?.title}</ArticleTitle>
            <ArticleContent>
              <p className="line-clamp-3 font-light text-neutral-400">
                {post?.brief}
              </p>
            </ArticleContent>
          </ArticleCard>
        ))}
      </div>
      {/* <pre>{JSON.stringify(pageInfo, null, 2)}</pre> */}
      <div className="mb-14 flex justify-between gap-8">
        <div>
          <Link
            href={`?page=${pageInfo?.previousPage}`}
            className={cn(
              "group flex items-center justify-center gap-4 rounded-lg border-2 border-transparent py-8 pe-10 transition",
              !pageInfo?.hasPreviousPage && "pointer-events-none opacity-50",
            )}
          >
            <div className="group-hover:blue-underline">Previous</div>
          </Link>
        </div>
        <div>
          <Link
            href={`?page=${pageInfo?.nextPage}`}
            className={cn(
              "group flex w-full items-center justify-center gap-4 rounded-lg border-2 border-transparent py-8 ps-10 transition",
              !pageInfo?.hasNextPage && "pointer-events-none opacity-50",
            )}
          >
            <div className="group-hover:blue-underline">Next</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
