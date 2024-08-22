import client from "./apollo-client";
import { GET_ARTICLE_BY_POST, GET_ARTICLES } from "./queries";

export const HashNode = {
  getArticles: async ({
    pageSize,
    page,
  }: {
    pageSize?: number;
    page?: number;
  }): Promise<any> => {
    try {
      const response = await client.query({
        query: GET_ARTICLES,
        variables: {
          host: process.env.NEXT_PUBLIC_HASHNODE_HOST!,
          pageSize: pageSize || 6,
          page: page || 1,
        },
      });
      return response;
    } catch (error) {
      console.error("HELLO", error);
      return error;
    }
  },

  getArticleBySlug: async (slug: string): Promise<any> => {
    try {
      const response = await client.query({
        query: GET_ARTICLE_BY_POST,
        variables: {
          host: process.env.NEXT_PUBLIC_HASHNODE_HOST!,
          slug,
        },
      });
      return response;
    } catch (error) {
      console.error("HELLO", error);
      return error;
    }
  },
};
