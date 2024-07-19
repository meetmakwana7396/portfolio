import client from "./apollo-client";
import { GET_ARTICLES } from "./queries";

export const Hashnode = {
  getArticles: async (): Promise<any> => {
    try {
      const response = await client.query({
        query: GET_ARTICLES,
        variables: { host: process.env.NEXT_PUBLIC_HASHNODE_HOST! },
      });
      return response;
    } catch (error) {
      console.error("HELLO", error);
      return error;
    }
  },
};
