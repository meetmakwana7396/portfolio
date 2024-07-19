import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export function ArticleCard({
  coverImageUrl,
  className,
  children,
}: {
  coverImageUrl?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-neutral-200/5 shadow h-[348px] rounded-[28px] w-full p-4 flex flex-col gap-2",
        className
      )}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-anchor-placement="center-bottom">
      {coverImageUrl && (
        <Image
          src={coverImageUrl}
          width={1000}
          height={100}
          alt="article_cover_image"
          className="w-full object-cover rounded-xl"
        />
      )}
      {children}
    </div>
  );
}

export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return children;
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
    <div className={cn("relative h-full w-full", className)}>
      {children}
      <div className="flex absolute items-center group bottom-0 w-full justify-between">
        <span className="text-xs font-light">July 19, 2024</span>
        <ArrowRight
          className="size-5 -rotate-45 group-hover:rotate-0 transition"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}
