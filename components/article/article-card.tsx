import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export function ArticleCard({
  coverImageUrl,
  slug,
  className,
  children,
}: {
  coverImageUrl?: string;
  slug: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/articles/${slug}`}
      className={cn("w-full p-8 rounded hover:shadow-lg hover:bg-neutral-500/10 transition bg-neutral-500/5 flex flex-col gap-2", className)}>
      {children}
    </Link>
  );
}

export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl text-neutral-200 group-hover:text-green-300 hover:cursor-pointer">
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
