import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASHNODE_API_URL,
});

const authLink = setContext((_: any, { headers }: any) => {
  const token = process.env.NEXT_PUBLIC_HASHNODE_API_KEY;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
