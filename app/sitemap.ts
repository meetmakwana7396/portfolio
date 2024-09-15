import { HashNode } from "@/lib/hashnode";

export default async function sitemap() {
  const { data, loading, errors } = await HashNode.getArticlesByPointer({
    first: 50,
  });
  const postsArray = data.publication.posts.edges.map((post: any) => post.node);
  const normalPages = ["", "/articles"];

  const postsXML = postsArray?.map((post: any) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/articles/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const normalPagesXML = normalPages.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }));

  return [...normalPagesXML, ...postsXML];
}
