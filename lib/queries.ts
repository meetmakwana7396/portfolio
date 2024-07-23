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
          hasPreviousPage
          nextPage
          previousPage
        }
      }
    }
  }
`;

export const GET_ARTICLE_BY_POST = gql`
  query Publication($host: String, $slug: String!) {
    publication(host: $host) {
      isTeam
      title
      post(slug: $slug) {
        title
        subtitle
        tags {
          id
          name
          slug
        }
        coverImage {
          url
        }
        content {
          markdown
          html
        }
      }
    }
  }
`;
