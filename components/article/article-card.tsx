import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

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
        "flex w-full flex-col gap-2 rounded bg-neutral-500/10 p-8 transition hover:bg-neutral-500/20 hover:shadow-lg",
        className,
      )}
    >
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent className="flex flex-col gap-2">
        <p className="line-clamp-3 text-neutral-400">{brief}</p>
      </ArticleContent>
    </Link>
  );
}

export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl text-neutral-200 hover:cursor-pointer group-hover:text-green-300">
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
