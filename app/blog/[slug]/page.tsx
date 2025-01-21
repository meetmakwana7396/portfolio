import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/lib/posts";
import { CustomMDX } from "@/components/mdx";
import { metaData } from "@/app/config";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${metaData}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${metaData}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${metaData}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: metaData.name,
            },
          }),
        }}
      />
      <h1 className="px-4 text-3xl font-extrabold leading-snug sm:px-0 sm:text-5xl">
        {post.metadata.title}
      </h1>
      <div className="text-medium mb-4 mt-2 flex items-center justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-4 mb-8 sm:px-0">
        {post.metadata.tags.split(", ").map((tag, index) => (
          <span
            className="bg-neutral-600/50 px-2 py-1 text-xs sm:text-sm"
            key={index}
            style={{ borderRadius: "10px" }}
          >
            #{tag}
          </span>
        ))}
      </div>
      <article className="dark prose prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
