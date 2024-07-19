import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query Publication($host: String) {
    publication(host: $host) {
      isTeam
      title
      posts(first: 6) {
        edges {
          node {
            id
            title
            subtitle
            brief
            url
            slug
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;
