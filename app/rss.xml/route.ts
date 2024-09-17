import { HashNode } from "@/lib/hashnode";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Meet Makwana",
    description: "Makwana's Blog",
    generator: "RSS for Makwana's Blog",
    feed_url: `${process.env.NEXT_PUBLIC_APP_URL}/rss.xml`,
    site_url: process.env.NEXT_PUBLIC_APP_URL!,
    copyright: `Copyright ${new Date().getFullYear().toString()}, Meet Makwana`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const { data } = await HashNode.getArticlesByPointer({ first: 50 });
  const allPosts = data.publication.posts.edges.map((post: any) => post.node);

  if (allPosts) {
    allPosts.map((post: any) => {
      feed.item({
        title: post.title,
        description: post.brief,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/articles/${post.slug}`,
        categories:
          post.tags.map((tag: { id: string; name: string }) => tag.name) || [],
        author: "Meet Makwana",
        date: post.publishedAt,
      });
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
