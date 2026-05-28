import { gql } from "graphql-request";

const POST_SUMMARY_FRAGMENT = gql`
  fragment PostSummary on Post {
    id
    slug
    title
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    author {
      node {
        name
        slug
      }
    }
  }
`;

export const ALL_POSTS_QUERY = gql`
  ${POST_SUMMARY_FRAGMENT}
  query AllPosts($first: Int = 20) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        ...PostSummary
      }
    }
  }
`;

export const POST_BY_SLUG_QUERY = gql`
  ${POST_SUMMARY_FRAGMENT}
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ...PostSummary
      content
    }
  }
`;

export const PAGE_BY_URI_QUERY = gql`
  query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      slug
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

export const ALL_POST_SLUGS_QUERY = gql`
  query AllPostSlugs {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;
