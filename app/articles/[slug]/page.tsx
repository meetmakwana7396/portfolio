import { HashNode } from "@/lib/hashnode";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";

const createOgImage = () => {
  return (
    [
      // prefix: <domain/yourCloudinaryId/file_type/source_type>
      `https://res.cloudinary.com/dadvcbbrh/image/upload/v1724866352/huwq3h2ixp3pp2nds0se.jpg`,
      // transform composed image: width, height, quality
      `w_1024,h_600,q_100`,     
    ].join("/")
  )
}


export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data } = await HashNode.getArticleBySlug(params.slug);

  const previousImages = (await parent).openGraph?.images || [];
  const { post } = data.publication;

  return {
    title: post.title,
    description: post.content.text,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post?.subtitle || "",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post?.coverImage?.url || "",
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post?.subtitle || "",
      images: [post?.coverImage?.url || ""],
    },
  };
}

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, errors } = await HashNode.getArticleBySlug(params.slug);

  const tags = data.publication.post.tags;
  return (
    <section className="container">
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="px-4 text-3xl font-extrabold leading-snug sm:px-0 sm:text-5xl">
          {data.publication.post.title}
        </h1>
        <p className="px-4 text-xl font-thin italic text-neutral-400 sm:px-0">
          {data.publication.post?.subtitle || ""}
        </p>
        <div className="flex flex-wrap gap-2 px-4 sm:px-0">
          {tags.map((tag: { id: string; name: string; slug: string }) => (
            <span
              className="bg-neutral-600/50 px-2 py-1 text-xs sm:text-sm"
              key={tag.id}
              style={{ borderRadius: "10px" }}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className="prose mb-20 px-4 sm:px-0"
        dangerouslySetInnerHTML={{
          __html: data.publication.post.content.html,
        }}
      ></div>
    </section>
  );
}
