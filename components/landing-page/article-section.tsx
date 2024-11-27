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
      <h1 className="font-jetBrains text-2xl opacity-50">{`* Recent Articles`}</h1>

      <div className="grid grid-cols-1 space-y-8">
        {postsArray?.map((post: any) => (
          <ArticleCard key={post?.id} article={post} />
        ))}
      </div>
      <div className="text-left text-sm sm:text-base">
        <Link href="/articles" className="blue-underline">
          View More
        </Link>
      </div>
    </section>
  );
}
