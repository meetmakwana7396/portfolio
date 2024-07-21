import client from "./apollo-client";
import { GET_ARTICLES } from "./queries";

export const Hashnode = {
  getArticles: async (pageSize?: number, page?: number): Promise<any> => {
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
};
