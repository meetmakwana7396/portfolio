import { HashNode } from "@/lib/hashnode";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";

// export async function generateMetadata(
//   {params: { slug: string }}
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // Fetch data for the article
//   const article = await fetchArticle(params.id);

//   // Optionally access and extend parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: article.title,
//     description: article.summary,
//     keywords: article.tags.join(", "),
//     authors: [{ name: article.author }],
//     openGraph: {
//       title: article.title,
//       description: article.summary,
//       type: "article",
//       publishedTime: article.publishDate,
//       authors: [article.author],
//       images: [
//         {
//           url: article.featuredImage,
//           width: 1200,
//           height: 630,
//           alt: article.title,
//         },
//         ...previousImages,
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.summary,
//       images: [article.featuredImage],
//     },
//   };
// }

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
          {data.publication.post.subtitle}
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
