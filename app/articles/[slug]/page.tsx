import { Hashnode } from "@/lib/hashnode";
import React from "react";
import Image from "next/image";

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, errors } = await Hashnode.getArticleBySlug(params.slug);

  const tags = data.publication.post.tags;
  return (
    <section className="container max-w-5xl">
      <div className="flex flex-col gap-4 mb-10">
        {data.publication.post.coverImage?.url && (
          <Image
            src={data.publication.post.coverImage.url}
            width={1000}
            height={800}
            className="sm:object-cover object-contain w-full sm:h-[500px] h-fit"
            alt="cover-image"
          />
        )}
        <h1 className="text-3xl sm:text-5xl sm:px-0 px-4 font-extrabold leading-snug">
          {data.publication.post.title}
        </h1>
        <p className="text-neutral-400 text-xl font-thin sm:px-0 px-4 italic">
          {data.publication.post.subtitle}
        </p>
        <div className="flex flex-wrap gap-2 sm:px-0 px-4">
          {tags.map((tag: { id: string; name: string; slug: string }) => (
            <span className="rounded-lg bg-neutral-600 py-1 px-2 sm:text-sm text-xs">
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className="prose mb-20 sm:px-0 px-4"
        dangerouslySetInnerHTML={{
          __html: data.publication.post.content.html,
        }}></div>
    </section>
  );
}
