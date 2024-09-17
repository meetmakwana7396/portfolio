import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import moment from "moment";

export function ArticleCard({
  className,
  article,
}: {
  className?: string;
  article: any;
}) {
  const { slug, title, brief, author, publishedAt } = article;
  return (
    <Link
      href={`/articles/${slug}`}
      className={cn(
        "flex w-full flex-col gap-2 rounded bg-neutral-500/10 p-6 transition hover:bg-neutral-500/20 hover:shadow-lg sm:p-8",
        className,
      )}
    >
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent className="flex flex-col gap-2">
        <p className="line-clamp-3 text-sm text-neutral-400 sm:text-base">
          {brief}
        </p>
        <span className="mt-1 text-xs text-neutral-500 sm:mt-4 sm:text-sm">
          {moment(publishedAt).format("DD MMMM, YYYY")}
        </span>
      </ArticleContent>
    </Link>
  );
}

export function ArticleTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-xl text-neutral-200 hover:cursor-pointer group-hover:text-green-300 sm:text-2xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function ArticleContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  publishDate?: string;
  readCount?: number;
}) {
  return (
    <div className={cn("relative h-full w-full", className)}>{children}</div>
  );
}
