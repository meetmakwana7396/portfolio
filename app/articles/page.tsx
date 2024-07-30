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
    <section className="container mt-10 px-4 sm:px-0">
      <h1 className="text-5xl font-bold">Articles</h1>
      <div className="grid grid-cols-1 gap-4 my-10">
        {postsArray?.map((post: any) => (
          <ArticleCard
            coverImageUrl={post?.coverImage?.url}
            slug={post?.slug}
            key={post?.id}>
            <ArticleTitle>{post?.title}</ArticleTitle>
            <ArticleContent>
              <p className="text-neutral-400 line-clamp-3 font-light">
                {post?.brief}
              </p>
            </ArticleContent>
          </ArticleCard>
        ))}
      </div>
      {/* <pre>{JSON.stringify(pageInfo, null, 2)}</pre> */}
      <div className="flex justify-between mb-14 gap-8">
        <div>
          <Link
            href={`?page=${pageInfo?.previousPage}`}
            className={cn(
              "gap-4 flex justify-center items-center py-8 pe-10 transition rounded-lg border-2 border-transparent group",
              !pageInfo?.hasPreviousPage && "pointer-events-none opacity-50"
            )}>
            <div className="group-hover:blue-underline">Previous</div>
          </Link>
        </div>
        <div>
          <Link
            href={`?page=${pageInfo?.nextPage}`}
            className={cn(
              "gap-4 flex justify-center items-center w-full py-8 ps-10 transition rounded-lg border-2 border-transparent group",
              !pageInfo?.hasNextPage && "pointer-events-none opacity-50"
            )}>
            <div className="group-hover:blue-underline">Next</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
