import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query Publication($host: String, $pageSize: Int!, $page: Int!) {
    publication(host: $host) {
      isTeam
      title
      postsViaPage(pageSize: $pageSize, page: $page) {
        nodes {
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
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;
