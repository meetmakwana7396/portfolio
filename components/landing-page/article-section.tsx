import { HashNode } from "@/lib/hashnode";
import {
  ArticleCard,
  ArticleContent,
  ArticleTitle,
} from "../article/article-card";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

export default async function ArticleSection() {
  noStore();
  const { data, loading, errors } = await HashNode.getArticles({
    page: 1,
    pageSize: 6,
  });
  const postsArray = data?.publication?.postsViaPage?.nodes;

  return (
    <section id="articles" className="mx-auto max-w-4xl space-y-6 px-4 sm:px-0">
      {/* <h2 className="text-2xl flex gap-3 items-center font-semibold">
        <BookOpen className="size-8" /> Articles
      </h2> */}
      <div className="grid grid-cols-1 space-y-8">
        {postsArray?.map((post: any) => (
          <ArticleCard
            coverImageUrl={post?.coverImage?.url}
            slug={post?.slug}
            key={post?.id}
          >
            <ArticleTitle>{post?.title}</ArticleTitle>
            <ArticleContent>
              <p className="line-clamp-3 text-neutral-400">{post?.brief}</p>
            </ArticleContent>
          </ArticleCard>
        ))}
      </div>
      <div className="text-left">
        <Link href="/articles" className="blue-underline">
          View More
        </Link>
      </div>
    </section>
  );
}
