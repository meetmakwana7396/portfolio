import client from "../lib/apollo-client";
import { gql } from "@apollo/client";
import { POST_QUERY } from "../lib/queries";

const useHashnode = () => {
  const getPosts = async () => {
    try {
      const { data } = await client.query({
        query: gql`
          ${POST_QUERY}
        `,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getPosts,
  };
};

export default useHashnode;
