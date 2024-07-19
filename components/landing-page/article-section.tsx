import { Hashnode } from "@/lib/hashnode";
import Image from "next/image";
import {
  ArticleCard,
  ArticleContent,
  ArticleTitle,
} from "../article/article-card";
import { Button } from "../ui/button";

export default async function ArticleSection() {
  const { data, loading, errors } = await Hashnode.getArticles();
  const postsArray = (data?.publication?.posts?.edges as Array<any>)?.flatMap(
    (article: any) => article.node
  );

  return (
    <section id="articles" className="space-y-6 max-w-4xl mx-auto">
      <h1
        className="text-4xl font-semibold text-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom">
        ARTICLES
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {postsArray?.map((post) => (
          <ArticleCard
            coverImageUrl={post?.coverImage?.url}
            className="group"
            key={post?.id}>
            <ArticleTitle>
              <h2 className="font-semibold group-hover:text-green-300 hover:cursor-pointer">
                {post?.title}
              </h2>
            </ArticleTitle>
            <ArticleContent>
              <p className="text-sm text-neutral-400 line-clamp-3 font-light">
                {post?.subtitle ? post?.subtitle : post?.brief}
              </p>
            </ArticleContent>
          </ArticleCard>
        ))}
      </div>
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor-placement="top-bottom">
        <Button>View More</Button>
      </div>
    </section>
  );
}
